import { useState, useEffect } from "react";
import { SearchBox } from "@/components/SearchBox";
import { ResultsSection } from "@/components/ResultsSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { loadHSData, searchHSData, HSItem, SearchLanguage } from "@/data/hsData";
import { Package, ArrowRight, Loader2, Coffee, QrCode, ExternalLink } from "lucide-react";
import dongHoPainting from "@/assets/dong-ho-painting.jfif";
import donationQr from "@/assets/donation-qr.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [hsData, setHsData] = useState<HSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [language, setLanguage] = useState<SearchLanguage>('vi');
  const [searchResults, setSearchResults] = useState<{
    headings: HSItem[];
    detailed: { item: HSItem; parents: HSItem[] }[];
    keyword: string;
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

  const handleSearch = (keyword: string) => {
    const results = searchHSData(hsData, keyword, language);
    setSearchResults({ ...results, keyword });
  };

  const handleLanguageChange = (newLanguage: SearchLanguage) => {
    setLanguage(newLanguage);
    // Re-run search with new language if there are existing results
    if (searchResults) {
      const results = searchHSData(hsData, searchResults.keyword, newLanguage);
      setSearchResults({ ...results, keyword: searchResults.keyword });
    }
  };

  const handleReset = () => {
    setSearchResults(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading HS nomenclature data...</p>
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
            Refresh page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Package className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-none">HS Code</h1>
              <span className="text-xs text-muted-foreground">Nào ta cùng mò</span>
            </div>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!searchResults ? (
          /* Landing View */
          <div className="max-w-4xl mx-auto pt-8 md:pt-12">
            {/* Hero Image */}
            <div className="text-center mb-8 animate-fade-up">
              <div className="relative inline-block">
                <img 
                  src={dongHoPainting} 
                  alt="Tranh Đông Hồ - Vietnamese Folk Painting" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-lg border-4 border-amber-100 dark:border-amber-900/50"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-50 dark:bg-amber-950 rounded-full border border-amber-200 dark:border-amber-800">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    Nào cùng mò HS code
                  </p>
                </div>
              </div>
            </div>

            {/* Language Toggle & Search Box */}
            <div className="mb-12 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
              <SearchBox onSearch={handleSearch} />
            </div>


            {/* Example Searches */}
            <div
              className="mt-12 text-center animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Thử tìm với:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {(language === 'vi' 
                  ? ["0101", "gà", "cá hồi", "điện thoại", "ô tô", "thịt", "giày", "máy tính"]
                  : ["0101", "chicken", "salmon", "phone", "car", "meat", "shoes", "computer"]
                ).map((term) => (
                  <button
                    key={term}
                    onClick={() => handleSearch(term)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
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
              style={{ animationDelay: "400ms" }}
            >
              <div className="p-4 rounded-xl bg-muted/50 border border-border text-center">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Đây là công cụ hỗ trợ khoanh vùng các Nhóm (Heading) và mã HS liên quan đến từ khóa mô tả của hàng hóa để các bạn tìm đọc Chú giải chi tiết tương ứng để xác định mã HS phù hợp. Chúc may mắn và bình an.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Results View */
          <div>
            {/* Language Toggle & Search Box - Compact */}
            <div className="mb-8">
              <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
              <SearchBox onSearch={handleSearch} initialValue={searchResults.keyword} />
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Kết quả tìm kiếm cho{" "}
                <span className="font-semibold text-foreground">"{searchResults.keyword}"</span>
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
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <p>Nếu thấy hữu ích, thỉnh thoảng nhớ ủng hộ page bằng cách donate nhé. Một ly cà phê cũng đủ thấy vui. Click vào đây để donate</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 border-amber-500/50 text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-950 dark:hover:text-amber-300"
                >
                  <Coffee className="w-4 h-4" />
                  Tặng cà phê cho page
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-amber-600" />
                    Cảm ơn quý phú ông, phú bà
                  </DialogTitle>
                  <DialogDescription>
                    Xin hãy chọn cách tặng cà phê cho page. Của ít hay nhiều không quan trọng. Quan trọng ở tấm lòng. Cảm ơn quý ân nhân.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  {/* Buy Me a Coffee Link */}
                  <a
                    href="https://buymeacoffee.com/pes91"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                      <Coffee className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">Buy Me a Coffee</p>
                      <p className="text-sm text-muted-foreground">Support via buymeacoffee.com</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>

                  {/* QR Code */}
                  <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <QrCode className="w-5 h-5 text-amber-600" />
                      <p className="font-medium text-foreground">Chuyển khoản</p>
                    </div>
                    <img
                      src={donationQr}
                      alt="Donation QR Code"
                      className="w-auto h-auto max-w-64 rounded-lg border border-border"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      Quét QR để chuyển khoản
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
