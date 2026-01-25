import { useState, useEffect, memo, useCallback, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ResultsSection } from "@/components/ResultsSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import {
  loadHSData, 
  advancedSearchHSData, 
  HSItem, 
  SearchLanguage, 
  SearchMatchType,
  SearchResultItem 
} from "@/data/hsData";
import { ArrowRight, Loader2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Input validation constants
const MAX_KEYWORD_LENGTH = 200;
const MAX_MATERIAL_LENGTH = 100;
const MAX_FUNCTION_LENGTH = 100;

// Search fields component - now always visible
interface SearchFieldsProps {
  language: SearchLanguage;
  keyword: string;
  setKeyword: (value: string) => void;
  material: string;
  setMaterial: (value: string) => void;
  functionFeature: string;
  setFunctionFeature: (value: string) => void;
  onSearch: () => void;
}

const SearchFields = memo(function SearchFields({
  language,
  keyword,
  setKeyword,
  material,
  setMaterial,
  functionFeature,
  setFunctionFeature,
  onSearch,
}: SearchFieldsProps) {
  const handleKeywordChange = (value: string) => {
    if (value.length <= MAX_KEYWORD_LENGTH) {
      setKeyword(value);
    }
  };

  const handleMaterialChange = (value: string) => {
    if (value.length <= MAX_MATERIAL_LENGTH) {
      setMaterial(value);
    }
  };

  const handleFunctionChange = (value: string) => {
    if (value.length <= MAX_FUNCTION_LENGTH) {
      setFunctionFeature(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedKeyword = keyword.trim();
    const trimmedMaterial = material.trim();
    const trimmedFunction = functionFeature.trim();

    if (!trimmedKeyword) {
      return;
    }

    // Validate input lengths
    if (trimmedKeyword.length > MAX_KEYWORD_LENGTH) {
      toast.error(`Từ khóa tìm kiếm không được vượt quá ${MAX_KEYWORD_LENGTH} ký tự`);
      return;
    }
    if (trimmedMaterial.length > MAX_MATERIAL_LENGTH) {
      toast.error(`Chất liệu không được vượt quá ${MAX_MATERIAL_LENGTH} ký tự`);
      return;
    }
    if (trimmedFunction.length > MAX_FUNCTION_LENGTH) {
      toast.error(`Chức năng không được vượt quá ${MAX_FUNCTION_LENGTH} ký tự`);
      return;
    }

    // --- SỬA THÀNH DATA LAYER ĐỂ DÙNG VỚI GTM ---
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        'event': 'custom_search',
        'search_term': trimmedKeyword,
        'material': trimmedMaterial || '',
        'function_feature': trimmedFunction || '',
        'search_type': 'manual'
      });
    }
    // ---------------------------------------------
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      {/* Main keyword search */}
      <div className="space-y-2">
        <Label htmlFor="keyword" className="text-sm text-muted-foreground">
          {language === 'vi' ? 'Mô tả hàng hóa' : 'Mô tả hàng hóa'}
        </Label>
        <Input
          id="keyword"
          type="text"
          value={keyword}
          onChange={(e) => handleKeywordChange(e.target.value)}
          placeholder={language === 'vi' ? 'Nhập từ khóa mô tả hàng hóa...' : 'Nhập từ khóa mô tả hàng hóa...'}
          maxLength={MAX_KEYWORD_LENGTH}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Material/Composition field */}
      <div className="space-y-2">
        <Label htmlFor="material" className="text-sm text-muted-foreground">
          {language === 'vi' ? 'Thành phần/Chất liệu' : 'Thành phần/Chất liệu'}
        </Label>
        <Input
          id="material"
          placeholder={language === 'vi' ? 'VD: nhựa, thép, cotton...' : 'E.g.: plastic, steel, cotton...'}
          value={material}
          onChange={(e) => handleMaterialChange(e.target.value)}
          maxLength={MAX_MATERIAL_LENGTH}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Function/Feature field */}
      <div className="space-y-2">
        <Label htmlFor="function" className="text-sm text-muted-foreground">
          {language === 'vi' ? 'Chức năng/Công dụng' : 'Chức năng/Công dụng'}
        </Label>
        <Input
          id="function"
          placeholder={language === 'vi' ? 'VD: làm mát, vận chuyển...' : 'E.g.: cooling, transport...'}
          value={functionFeature}
          onChange={(e) => handleFunctionChange(e.target.value)}
          maxLength={MAX_FUNCTION_LENGTH}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Search button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
      >
        {language === 'vi' ? 'Tra cứu' : 'Tra cứu'}
      </Button>
    </form>
  );
});

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [hsData, setHsData] = useState<HSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [language, setLanguage] = useState<SearchLanguage>('vi');
  const [matchType, setMatchType] = useState<SearchMatchType>('tokens');
  const [keyword, setKeyword] = useState('');
  const [material, setMaterial] = useState('');
  const [functionFeature, setFunctionFeature] = useState('');
  const [searchResults, setSearchResults] = useState<{
    headings: HSItem[];
    detailed: SearchResultItem[];
    keyword: string;
    matchType: SearchMatchType;
  } | null>(null);
  
  // Track if we've handled the initial URL query
  const initialSearchDone = useRef(false);
  
  // Determine if there's an active search query for SEO purposes
  const hasSearchQuery = searchParams.get('q') !== null;

  // Load HS data on mount
  useEffect(() => {
    loadHSData()
      .then(data => {
        setHsData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setLoadError("Failed to load HS data. Please refresh the page.");
        setIsLoading(false);
        console.error(err);
      });
  }, []);

  // Handle initial search from URL query parameters
  useEffect(() => {
    if (isLoading || initialSearchDone.current || hsData.length === 0) return;
    
    const queryFromUrl = searchParams.get('q');
    const materialFromUrl = searchParams.get('material');
    const functionFromUrl = searchParams.get('function');
    
    if (queryFromUrl) {
      const decodedQuery = decodeURIComponent(queryFromUrl).slice(0, MAX_KEYWORD_LENGTH);
      const decodedMaterial = materialFromUrl ? decodeURIComponent(materialFromUrl).slice(0, MAX_MATERIAL_LENGTH) : '';
      const decodedFunction = functionFromUrl ? decodeURIComponent(functionFromUrl).slice(0, MAX_FUNCTION_LENGTH) : '';
      
      setKeyword(decodedQuery);
      setMaterial(decodedMaterial);
      setFunctionFeature(decodedFunction);
      
      // Perform the search
      const results = advancedSearchHSData(hsData, {
        keyword: decodedQuery,
        material: decodedMaterial || undefined,
        functionFeature: decodedFunction || undefined,
        language,
        matchType,
      });
      setSearchResults({ ...results, keyword: decodedQuery, matchType });
    }
    initialSearchDone.current = true;
  }, [isLoading, hsData, searchParams, language, matchType]);

  // Update URL when searching - includes all params
  const updateUrlWithQuery = useCallback((query: string, mat?: string, func?: string) => {
    const params: Record<string, string> = {};
    if (query.trim()) {
      params.q = query.trim();
    }
    if (mat?.trim()) {
      params.material = mat.trim();
    }
    if (func?.trim()) {
      params.function = func.trim();
    }
    setSearchParams(params, { replace: true });
  }, [setSearchParams]);

  const handleSearch = () => {
    if (!keyword.trim()) return;
    
    // Update URL with all query parameters
    updateUrlWithQuery(keyword.trim(), material.trim(), functionFeature.trim());
    
    const results = advancedSearchHSData(hsData, {
      keyword: keyword.trim(),
      material: material.trim() || undefined,
      functionFeature: functionFeature.trim() || undefined,
      language,
      matchType,
    });
    setSearchResults({ ...results, keyword: keyword.trim(), matchType });
  };

  const handleQuickSearch = (term: string) => {
    // --- SỬA THÀNH DATA LAYER ĐỂ DÙNG VỚI GTM ---
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        'event': 'custom_search',
        'search_term': term,
        'material': material || '',
        'function_feature': functionFeature || '',
        'search_type': 'quick_suggestion'
      });
    }
    // ---------------------------------------------
    setKeyword(term);
    
    // Update URL with all query parameters
    updateUrlWithQuery(term, material.trim(), functionFeature.trim());
    const results = advancedSearchHSData(hsData, {
      keyword: term,
      material: material.trim() || undefined,
      functionFeature: functionFeature.trim() || undefined,
      language,
      matchType,
    });
    setSearchResults({ ...results, keyword: term, matchType });
  };

  const handleLanguageChange = (newLanguage: SearchLanguage) => {
    setLanguage(newLanguage);
    if (searchResults) {
      const results = advancedSearchHSData(hsData, {
        keyword: searchResults.keyword,
        material: material.trim() || undefined,
        functionFeature: functionFeature.trim() || undefined,
        language: newLanguage,
        matchType,
      });
      setSearchResults({ ...results, keyword: searchResults.keyword, matchType });
    }
  };

  const handleMatchTypeChange = (newMatchType: SearchMatchType) => {
    setMatchType(newMatchType);
    if (searchResults) {
      const results = advancedSearchHSData(hsData, {
        keyword: searchResults.keyword,
        material: material.trim() || undefined,
        functionFeature: functionFeature.trim() || undefined,
        language,
        matchType: newMatchType,
      });
      setSearchResults({ ...results, keyword: searchResults.keyword, matchType: newMatchType });
    }
  };

  const handleReset = () => {
    setSearchResults(null);
    setKeyword('');
    setMatchType('tokens');
    setMaterial('');
    setFunctionFeature('');
    // Clear URL query parameter
    setSearchParams({}, { replace: true });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Chào mừng đến với công cụ...</p>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">{loadError}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-primary hover:underline"
          >
            Tải lại trang
          </button>
        </div>
      </div>
    );
  }


  return (
    <>
      <SEOHead
      title="Công cụ tra cứu HS Code"
      description="Tra cứu mã HS Code nhanh theo mô tả hàng hóa, chất liệu và chức năng. Hỗ trợ tìm kiếm bằng tiếng Việt và tiếng Anh."
      url="https://tracuuhs.com/tra-cuu-hs-code"
      // 2. Nếu KHÔNG có query 'q' thì để Google index (noIndex = false)
      // Nếu CÓ query 'q' (đang xem kết quả) thì chặn index (noIndex = true)
      noIndex={hasSearchQuery} 
    />
    <div className="min-h-screen bg-gradient-hero">
        <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Trang chủ
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-sm text-foreground">Công cụ tra cứu HS Code</span>
        </div>

        {!searchResults ? (
          /* Landing View */
          <div className="max-w-4xl mx-auto pt-4 md:pt-8">
            {/* Language Toggle & Match Options & Search Fields */}
            <div className="mb-12 animate-fade-up">
              <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
              
              {/* Match Type Options */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="text-sm text-muted-foreground">Kiểu tìm kiếm:</span>
                <RadioGroup
                  value={matchType}
                  onValueChange={(value) => handleMatchTypeChange(value as SearchMatchType)}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tokens" id="tokens" />
                    <Label htmlFor="tokens" className="text-sm cursor-pointer">Chứa từ khoá</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exact" id="exact" />
                    <Label htmlFor="exact" className="text-sm cursor-pointer">Cụm từ chính xác</Label>
                  </div>
                </RadioGroup>
              </div>

              <SearchFields
                language={language}
                keyword={keyword}
                setKeyword={setKeyword}
                material={material}
                setMaterial={setMaterial}
                functionFeature={functionFeature}
                setFunctionFeature={setFunctionFeature}
                onSearch={handleSearch}
              />
            </div>

            {/* Example Searches */}
            <div
              className="mt-12 text-center animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Thử tìm với:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {(language === 'vi' 
                  ? ["0101", "gà", "cá hồi", "điện thoại", "ô tô", "thịt", "giày", "máy tính"]
                  : ["0101", "chicken", "salmon", "phone", "car", "meat", "shoes", "computer"]
                ).map((term) => (
                  <button
                    key={term}
                    onClick={() => handleQuickSearch(term)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {term}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>

            {/* Guidance Box - Landing Page */}
            <div
              className="mt-8 max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "150ms" }}
            >
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <h3 className="font-semibold text-foreground mb-3">Hướng dẫn cách xem kết quả tra cứu:</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Hãy xem qua trước kết quả thuộc phân cấp Nhóm để đánh giá sơ bộ các Nhóm có thể phù hợp, do Nhóm có mức độ tổng quát hơn</li>
                  <li>
                    Các Nhóm có chứa nhiều kết quả phù hợp với từ khoá được đánh dấu bằng dấu chấm màu dựa trên mức độ phù hợp để bạn tiện tham khảo:
                    <div className="flex flex-wrap items-center gap-3 mt-2 ml-2 sm:inline-flex sm:mt-0">
                      <span className="inline-flex items-center gap-1">
                        <span className="block w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span> 
                        <span>Nhiều kết quả phù hợp</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="block w-2.5 h-2.5 rounded-full bg-amber shrink-0"></span> 
                        <span>Vài kết quả phù hợp</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="block w-2.5 h-2.5 rounded-full bg-gray-400 shrink-0"></span> 
                        <span>Ít kết quả phù hợp</span>
                      </span>
                    </div>
                  </li>
                  <li>Click vào từng Nhóm để đi đến các kết quả chi tiết của Nhóm đó ở phía dưới để đánh giá thêm</li>
                  <li>Click vào các ô Chú giải bên dưới kết quả chi tiết để đi đến nội dung đầy đủ của Chú giải và tham khảo thêm</li>
                  <li>Click vào biểu tượng "máy tính" ở từng kết quả chi tiết để tra cứu thuế nhập khẩu tương ứng</li>
                </ul>
              </div>
            </div>
            
            {/* --- Tariff classification process guidance --- */}
            <div
              className="mt-6 max-w-2xl mx-auto animate-fade-up flex flex-col items-center text-center gap-3"
              style={{ animationDelay: "175ms" }}
            >
              <p className="text-sm text-foreground">
                Bạn có thể tham khảo quy trình tra cứu và xác định mã HS Code đầy đủ theo quy định pháp luật tại bài viết dưới đây
              </p>
              <Link to="/tin-tuc/huong-dan-cach-tra-cuu-va-xac-dinh-ma-hs-code">
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Xem hướng dẫn quy trình
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            {/* -------------------------------------- */}
                        
            {/* Description Text Box */}
            <div
              className="mt-6 max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Lưu ý: Các kết quả tìm kiếm của công cụ chỉ mang tính chất hỗ trợ tra cứu và tham khảo, không có giá trị pháp lý.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Results View */
          <div>
            {/* Language Toggle & Match Options & Search Box - Compact */}
            <div className="mb-8">
              <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
              
              {/* Match Type Options */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <span className="text-sm text-muted-foreground">Kiểu tìm kiếm:</span>
                <RadioGroup
                  value={matchType}
                  onValueChange={(value) => handleMatchTypeChange(value as SearchMatchType)}
                  className="flex items-center gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tokens" id="tokens-results" />
                    <Label htmlFor="tokens-results" className="text-sm cursor-pointer">Chứa từ khoá</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exact" id="exact-results" />
                    <Label htmlFor="exact-results" className="text-sm cursor-pointer">Cụm từ chính xác</Label>
                  </div>
                </RadioGroup>
              </div>

              <SearchFields
                language={language}
                keyword={keyword}
                setKeyword={setKeyword}
                material={material}
                setMaterial={setMaterial}
                functionFeature={functionFeature}
                setFunctionFeature={setFunctionFeature}
                onSearch={handleSearch}
              />
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Kết quả tìm kiếm cho{" "}
                <span className="font-semibold text-foreground">"{searchResults.keyword}"</span>
                {(material || functionFeature) && (
                  <span className="text-sm ml-2">
                    {material && <span className="text-ocean">+ {material}</span>}
                    {functionFeature && <span className="text-amber ml-2">+ {functionFeature}</span>}
                  </span>
                )}
                <span className="text-sm ml-2">({language === 'vi' ? 'Tiếng Việt' : 'Tiếng Anh'})</span>
              </p>
              <button
                onClick={handleReset}
                className="text-sm text-primary hover:underline"
              >
                Xóa kết quả tìm kiếm
              </button>
            </div>

{/* Guidance Box */}
<div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border">
  <h3 className="font-semibold text-foreground mb-3">Hướng dẫn cách xem kết quả tra cứu:</h3>
  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
    <li>Hãy xem qua trước kết quả thuộc phân cấp Nhóm để đánh giá sơ bộ các Nhóm có thể phù hợp, do Nhóm có mức độ tổng quát hơn</li>
    <li>
      Các Nhóm có chứa nhiều kết quả phù hợp với từ khoá được đánh dấu bằng dấu chấm màu dựa trên mức độ phù hợp để bạn tiện tham khảo:
      <div className="flex flex-wrap items-center gap-3 mt-2 ml-2 sm:inline-flex sm:mt-0">
        <span className="inline-flex items-center gap-1">
            {/* THÊM: block và shrink-0 */}
            <span className="block w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span> 
            <span>Nhiều kết quả phù hợp</span>
        </span>
        <span className="inline-flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-amber shrink-0"></span> 
            <span>Vài kết quả phù hợp</span>
        </span>
        <span className="inline-flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-gray-400 shrink-0"></span> 
            <span>Ít kết quả phù hợp</span>
        </span>
      </div>
    </li>
    <li>Click vào từng Nhóm để đi đến các kết quả chi tiết của Nhóm đó ở phía dưới để đánh giá thêm</li>
    <li>Click vào các ô Chú giải bên dưới kết quả chi tiết để đi đến nội dung đầy đủ của Chú giải và tham khảo thêm</li>
    <li>Click vào biểu tượng "máy tính" ở từng kết quả chi tiết để tra cứu thuế nhập khẩu tương ứng</li>
  </ul>
</div>

            {/* Results */}
            <ResultsSection
              headings={searchResults.headings}
              detailed={searchResults.detailed}
              keyword={searchResults.keyword}
              language={language}
              material={material}
              functionFeature={functionFeature}
              matchType={searchResults.matchType}
            />
          </div>
        )}
      </main>

        <Footer />
      </div>
    </>
  );
};

export default Search;
