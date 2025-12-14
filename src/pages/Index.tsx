import { useState, useEffect } from "react";
import { SearchBox } from "@/components/SearchBox";
import { ResultsSection } from "@/components/ResultsSection";
import { loadHSData, searchHSData, HSItem } from "@/data/hsData";
import { Package, ArrowRight, Globe, Shield, Zap, Loader2, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [hsData, setHsData] = useState<HSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
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
    const results = searchHSData(hsData, keyword);
    setSearchResults({ ...results, keyword });
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

            {/* Search Box */}
            <div className="mb-16 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <SearchBox onSearch={handleSearch} />
            </div>

            {/* Features */}
            <div
              className="grid md:grid-cols-3 gap-6 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="bg-gradient-card rounded-xl border border-border p-6 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">HS Code Classification</h3>
                <p className="text-sm text-muted-foreground">
                  4-8 digit hierarchical codes for precise product identification.
                </p>
              </div>
              <div className="bg-gradient-card rounded-xl border border-border p-6 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tariff Information</h3>
                <p className="text-sm text-muted-foreground">
                  View standard rates, MFN duties, and preferential trade agreements.
                </p>
              </div>
              <div className="bg-gradient-card rounded-xl border border-border p-6 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">International Trade</h3>
                <p className="text-sm text-muted-foreground">
                  Standardized system used globally for customs and trade.
                </p>
              </div>
            </div>

            {/* Example Searches */}
            <div
              className="mt-12 text-center animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["0101", "gà", "cá hồi", "điện thoại", "ô tô", "thịt", "giày", "máy tính"].map((term) => (
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
            {/* Search Box - Compact */}
            <div className="mb-8">
              <SearchBox onSearch={handleSearch} initialValue={searchResults.keyword} />
            </div>

            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing results for{" "}
                <span className="font-semibold text-foreground">"{searchResults.keyword}"</span>
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
