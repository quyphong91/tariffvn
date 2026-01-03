import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { ResultsSection } from "@/components/ResultsSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      {/* Main keyword search */}
      <div className="space-y-2">
        <Label htmlFor="keyword" className="text-sm text-muted-foreground">
          {language === 'vi' ? 'Mô tả hàng hóa' : 'Goods Description'}
        </Label>
        <Input
          id="keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={language === 'vi' ? 'Nhập từ khóa mô tả hàng hóa...' : 'Enter goods description...'}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Material/Composition field */}
      <div className="space-y-2">
        <Label htmlFor="material" className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ocean"></span>
          {language === 'vi' ? 'Thành phần/Chất liệu' : 'Material/Composition'}
        </Label>
        <Input
          id="material"
          placeholder={language === 'vi' ? 'VD: nhựa, thép, cotton...' : 'E.g.: plastic, steel, cotton...'}
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Function/Feature field */}
      <div className="space-y-2">
        <Label htmlFor="function" className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber"></span>
          {language === 'vi' ? 'Chức năng/Công dụng' : 'Function/Feature'}
        </Label>
        <Input
          id="function"
          placeholder={language === 'vi' ? 'VD: làm mát, vận chuyển...' : 'E.g.: cooling, transport...'}
          value={functionFeature}
          onChange={(e) => setFunctionFeature(e.target.value)}
          className="h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
        />
      </div>

      {/* Search button */}
      <Button
        type="submit"
        size="lg"
        className="w-full h-14 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
      >
        {language === 'vi' ? 'Tìm kiếm' : 'Search'}
      </Button>
    </form>
  );
});

const Search = () => {
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

  const handleSearch = () => {
    if (!keyword.trim()) return;
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
    setKeyword(term);
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
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Đang tải dữ liệu biểu thuế...</p>
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
          <span className="text-sm text-foreground">Công cụ tra cứu HS code</span>
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

            {/* Description Text Box */}
            <div
              className="mt-8 max-w-2xl mx-auto animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bạn nên tham khảo thêm các Chú giải và tuyển tập ý kiến phân loại sau khi lọc các mã HS code dựa trên mô tả để xác định mã HS code phù hợp nhất với hàng hoá.
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

            {/* Results */}
            <ResultsSection
              headings={searchResults.headings}
              detailed={searchResults.detailed}
              keyword={searchResults.keyword}
              language={language}
              material={material}
              functionFeature={functionFeature}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;
