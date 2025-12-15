import { useState, useEffect } from "react";
import { SearchBox } from "@/components/SearchBox";
import { ResultsSection } from "@/components/ResultsSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { loadHSData, searchHSData, HSItem, SearchLanguage } from "@/data/hsData";
import { Package, ArrowRight, Globe, Zap, Loader2, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <span className="text-xs text-muted-foreground">Nomenclature Search</span>
            </div>
          </button>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="hidden sm:inline-flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {hsData.length.toLocaleString()} items
            </span>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2 border-amber-500/50 text-amber-600 hover:bg-amber-50 hover:text-amber-700 dark:text-amber-400 dark:hover:bg-amber-950 dark:hover:text-amber-300"
            >
              <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer">
                <Coffee className="w-4 h-4" />
                <span className="hidden sm:inline">Buy me a coffee</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!searchResults ? (
          /* Landing View */
          <div className="max-w-4xl mx-auto pt-12 md:pt-20">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Fast & Accurate HS Code Lookup
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Search the{" "}
                <span className="text-gradient">Harmonized System</span>
                <br />
                Nomenclature
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Find HS codes, tariff classifications, and product descriptions for international trade.
                Search by keyword or code number.
              </p>
            </div>

            {/* Language Toggle & Search Box */}
            <div className="mb-16 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <LanguageToggle language={language} onLanguageChange={handleLanguageChange} />
              <SearchBox onSearch={handleSearch} />
            </div>


            {/* Example Searches */}
            <div
              className="mt-12 text-center animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Try searching for:</p>
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
                Showing results for{" "}
                <span className="font-semibold text-foreground">"{searchResults.keyword}"</span>
                <span className="text-sm ml-2">({language === 'vi' ? 'Vietnamese' : 'English'})</span>
              </p>
              <button
                onClick={handleReset}
                className="text-sm text-primary hover:underline"
              >
                Clear search
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
          <p>HS Code Nomenclature Search Tool for Vietnam Customs Tariff</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
