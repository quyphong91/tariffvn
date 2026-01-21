import { useState, useEffect, useMemo, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { SEOHead } from "@/components/SEOHead";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  Copy,
  Download,
  ChevronDown,
  Loader2,
  AlertCircle,
  Filter,
  RefreshCw,
  Check,
  Home,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import {
  loadTariffData,
  searchTariffData,
  TariffItem,
  TAX_COLUMNS,
  MARKET_FILTERS,
  TaxColumn,
} from "@/data/tariffData";
import { loadSpecialisedProceduresData } from "@/data/specialisedProceduresData";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

// Input validation constant
const MAX_SEARCH_LENGTH = 200;
const BASE_URL = "https://tracuuhs.com";

const TariffLookup = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<TariffItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<TariffItem[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<Set<keyof TariffItem>>(
    new Set(["mfn"])
  );
  const [activeMarket, setActiveMarket] = useState("default");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [initialSearchDone, setInitialSearchDone] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [policyData, setPolicyData] = useState<Map<string, string>>(new Map());
  const isMobile = useIsMobile();

  // Get query param from URL
  const queryFromUrl = searchParams.get('q');

  // Load data and restore search from URL on page load
  useEffect(() => {
    Promise.all([loadTariffData(), loadSpecialisedProceduresData()])
      .then(([loadedData, proceduresMap]) => {
        setData(loadedData);
        setPolicyData(proceduresMap);
        // If there's a query param in URL, set it and trigger search after data loads
        if (queryFromUrl && !initialSearchDone) {
          setSearchQuery(queryFromUrl);
          const results = searchTariffData(loadedData, queryFromUrl);
          setSearchResults(results);
          setHasSearched(true);
          setInitialSearchDone(true);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [queryFromUrl, initialSearchDone]);

  const handleSearchQueryChange = (value: string) => {
    if (value.length <= MAX_SEARCH_LENGTH) {
      setSearchQuery(value);
    }
  };

  const handleSearch = useCallback(() => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      setSearchResults([]);
      setHasSearched(false);
      // Clear URL param when search is empty
      setSearchParams({}, { replace: true });
      return;
    }
    
    // Validate input length
    if (trimmedQuery.length > MAX_SEARCH_LENGTH) {
      toast.error(`Từ khóa tìm kiếm không được vượt quá ${MAX_SEARCH_LENGTH} ký tự`);
      return;
    }
    
    // Update URL with search query
    setSearchParams({ q: trimmedQuery }, { replace: true });
    const results = searchTariffData(data, trimmedQuery);
    setSearchResults(results);
    setHasSearched(true);
  }, [data, searchQuery, setSearchParams]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleMarketFilter = (marketId: string) => {
    setActiveMarket(marketId);
    const market = MARKET_FILTERS.find((m) => m.id === marketId);
    if (market) {
      setSelectedColumns(new Set(market.columns));
    }
  };

  const toggleColumn = (columnKey: keyof TariffItem) => {
    setActiveMarket("custom");
    setSelectedColumns((prev) => {
      const next = new Set(prev);
      if (next.has(columnKey)) {
        next.delete(columnKey);
      } else {
        next.add(columnKey);
      }
      return next;
    });
  };

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      toast.success(`Đã sao chép mã HS: ${code}`);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch {
      toast.error("Không thể sao chép mã HS");
    }
  };

  const handleExport = () => {
    if (searchResults.length === 0) {
      toast.error("Không có dữ liệu để xuất");
      return;
    }

    const headers = [
      "Level",
      "HS Code",
      "Mô tả (VN)",
      "Description (EN)",
      ...Array.from(selectedColumns).map(
        (col) => TAX_COLUMNS.find((t) => t.key === col)?.label || col
      ),
    ];

    const rows = searchResults.map((item) => [
      item.level,
      item.hsCode,
      `"${item.descriptionVN.replace(/"/g, '""')}"`,
      `"${item.descriptionEN.replace(/"/g, '""')}"`,
      ...Array.from(selectedColumns).map((col) => item[col] || ""),
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `tariff-lookup-${searchQuery || "all"}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Đã xuất file CSV thành công");
  };

  const getRowBgClass = (level: number) => {
    if (level === 0) return "bg-[hsl(var(--heading-bg))] text-primary-foreground";
    if (level === 1) return "bg-[hsl(var(--level-1-bg))]";
    return "";
  };

  const visibleTaxColumns = useMemo(
    () => TAX_COLUMNS.filter((col) => selectedColumns.has(col.key)),
    [selectedColumns]
  );

  // Dynamic SEO
  const seoTitle = useMemo(() => {
    if (!hasSearched || !searchQuery.trim()) {
      return "Tra cứu thuế nhập khẩu theo HS Code | HSTC";
    }
    const isHsCode = /^\d+$/.test(searchQuery.trim());
    if (isHsCode) {
      const firstResult = searchResults[0];
      const desc = firstResult?.descriptionVN?.slice(0, 50) || "";
      return `Thuế nhập khẩu mã HS ${searchQuery}${desc ? ` - ${desc}` : ""} | HSTC`;
    }
    return `Tra cứu thuế nhập khẩu ${searchQuery} | HSTC`;
  }, [hasSearched, searchQuery, searchResults]);

  const seoDescription = useMemo(() => {
    if (!hasSearched || !searchQuery.trim()) {
      return "Tra cứu thuế nhập khẩu Việt Nam theo mã HS Code. Bao gồm thuế MFN, ưu đãi FTA: EVFTA, CPTPP, RCEP, ACFTA, ATIGA và nhiều hiệp định khác.";
    }
    return `Tra cứu thuế nhập khẩu cho "${searchQuery}". Tìm thấy ${searchResults.length} kết quả. Xem thuế suất MFN, EVFTA, CPTPP, RCEP và các FTA khác.`;
  }, [hasSearched, searchQuery, searchResults.length]);

  const breadcrumbs = useMemo(() => [
    { name: "Trang chủ", url: `${BASE_URL}/` },
    { name: "Tra cứu thuế nhập khẩu", url: `${BASE_URL}/tra-cuu-thue-nhap-khau` },
  ], []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Đang tải dữ liệu biểu thuế...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <p className="text-destructive mb-4">Lỗi: {error}</p>
            <Button onClick={() => window.location.reload()}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Tải lại
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        breadcrumbs={breadcrumbs}
      />

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6 space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home className="w-4 h-4" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Tra cứu thuế nhập khẩu</span>
          </nav>

          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tra cứu thuế biểu thuế nhập khẩu 2026
            </h1>
            <p className="text-sm text-primary font-medium mb-1">
              (Đã cập nhật theo biểu thuế xuất nhập khẩu 2026 của Chi cục Hải quan Khu vực VIII ngày 7/1/2026)
            </p>
            <p className="text-muted-foreground">
              Tìm kiếm theo mã HS Code hoặc mô tả hàng hóa
            </p>
          </div>

          {/* Search Section */}
          <Card className="shadow-card">
            <CardContent className="p-4 space-y-4">
              {/* Search Input */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Nhập mã HS hoặc tên hàng hóa..."
                    value={searchQuery}
                    onChange={(e) => handleSearchQueryChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    maxLength={MAX_SEARCH_LENGTH}
                    className="pl-10"
                  />
                </div>
                <Button onClick={handleSearch} className="bg-navy hover:bg-navy/90">
                  <Search className="w-4 h-4 mr-2" />
                  Tìm kiếm
                </Button>
              </div>

              {/* Filters Row */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Market Quick Filters */}
                <div className="flex flex-wrap gap-2">
                  {MARKET_FILTERS.map((market) => (
                    <Badge
                      key={market.id}
                      variant={activeMarket === market.id ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-colors",
                        activeMarket === market.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                      onClick={() => handleMarketFilter(market.id)}
                    >
                      {market.label}
                    </Badge>
                  ))}
                  {/* Policy Toggle */}
                  <Badge
                    variant={showPolicy ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-colors",
                      showPolicy
                        ? "bg-amber-600 text-white hover:bg-amber-700"
                        : "border-amber-600 text-amber-700 hover:bg-amber-50"
                    )}
                    onClick={() => setShowPolicy(!showPolicy)}
                  >
                    📋 Chính sách mặt hàng
                  </Badge>
                </div>

                {/* Column Toggle Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Cột thuế ({selectedColumns.size})
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-popover z-50" align="start">
                    <DropdownMenuLabel>Chọn cột thuế hiển thị</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {TAX_COLUMNS.map((col) => (
                      <DropdownMenuCheckboxItem
                        key={col.key}
                        checked={selectedColumns.has(col.key)}
                        onCheckedChange={() => toggleColumn(col.key)}
                      >
                        {col.label}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Export Button */}
                {hasSearched && searchResults.length > 0 && (
                  <Button variant="outline" size="sm" onClick={handleExport}>
                    <Download className="w-4 h-4 mr-2" />
                    Xuất CSV
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          {hasSearched && (
            <div className="space-y-4">

              {searchResults.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Không tìm thấy kết quả cho "{searchQuery}"
                    </p>
                  </CardContent>
                </Card>
              ) : isMobile ? (
                /* Mobile Card View */
                <div className="space-y-3">
                  {searchResults.slice(0, 50).map((item, idx) => (
                    <Card
                      key={idx}
                      className={cn(
                        "overflow-hidden",
                        item.level === 0 && "border-primary border-2"
                      )}
                    >
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={item.level === 0 ? "default" : "secondary"}
                                className="font-mono"
                              >
                                {item.hsCode || "-"}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                Level {item.level}
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleCopyCode(item.hsCode)}
                          >
                            {copiedCode === item.hsCode ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>

                        <div>
                          <p className="text-sm font-medium">{item.descriptionVN}</p>
                          {item.descriptionEN && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.descriptionEN}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                          {visibleTaxColumns.map((col) => (
                            <div key={col.key} className="text-sm">
                              <span className="text-muted-foreground">{col.shortLabel}: </span>
                              <span className="font-medium">{item[col.key] || "-"}</span>
                            </div>
                          ))}
                        </div>
                        {/* Policy column for mobile */}
                        {showPolicy && item.hsCode && policyData.get(item.hsCode) && (
                          <div className="pt-2 border-t">
                            <p className="text-xs font-medium text-amber-700 mb-1">📋 Chính sách mặt hàng:</p>
                            <p className="text-xs text-muted-foreground whitespace-pre-wrap">
                              {policyData.get(item.hsCode)}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                  {searchResults.length > 50 && (
                    <p className="text-center text-sm text-muted-foreground py-4">
                      Hiển thị 50/{searchResults.length} kết quả. Vui lòng thu hẹp tìm kiếm.
                    </p>
                  )}
                </div>
              ) : (
                /* Desktop Table View */
                <Card className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="sticky top-0 bg-card z-10">
                        <TableRow className="bg-muted/50">
                          <TableHead className="w-[100px] font-semibold">Mã HS</TableHead>
                          <TableHead className="min-w-[300px] font-semibold">Mô tả</TableHead>
                          {visibleTaxColumns.map((col) => (
                            <TableHead key={col.key} className="text-center font-semibold min-w-[80px]">
                              {col.shortLabel}
                            </TableHead>
                          ))}
                          {showPolicy && (
                            <TableHead className="min-w-[200px] font-semibold text-amber-700">
                              📋 Chính sách mặt hàng
                            </TableHead>
                          )}
                          <TableHead className="w-[60px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {searchResults.slice(0, 100).map((item, idx) => (
                          <TableRow key={idx} className={getRowBgClass(item.level)}>
                            <TableCell className="font-mono text-sm">
                              {item.hsCode || "-"}
                            </TableCell>
                            <TableCell>
                              <div>
                                <p className={cn("text-sm", item.level === 0 && "font-semibold")}>
                                  {item.descriptionVN}
                                </p>
                                {item.descriptionEN && (
                                  <p className={cn(
                                    "text-xs mt-0.5",
                                    item.level === 0 ? "text-primary-foreground/80" : "text-muted-foreground"
                                  )}>
                                    {item.descriptionEN}
                                  </p>
                                )}
                              </div>
                            </TableCell>
                            {visibleTaxColumns.map((col) => (
                              <TableCell key={col.key} className="text-center text-sm">
                                {item[col.key] || "-"}
                              </TableCell>
                            ))}
                            {showPolicy && (
                              <TableCell className="text-xs text-muted-foreground max-w-[300px]">
                                {item.hsCode && policyData.get(item.hsCode) ? (
                                  <span className="whitespace-pre-wrap">
                                    {policyData.get(item.hsCode)}
                                  </span>
                                ) : "-"}
                              </TableCell>
                            )}
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => handleCopyCode(item.hsCode)}
                              >
                                {copiedCode === item.hsCode ? (
                                  <Check className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  {searchResults.length > 100 && (
                    <div className="p-4 text-center text-sm text-muted-foreground border-t">
                      Hiển thị 100/{searchResults.length} kết quả. Vui lòng thu hẹp tìm kiếm để xem thêm.
                    </div>
                  )}
                </Card>
              )}
            </div>
          )}

          {/* Initial State */}
          {!hasSearched && (
            <Card>
              <CardContent className="py-12 text-center">
                <Search className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Bắt đầu tra cứu</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Nhập mã HS Code (ví dụ: 01012100) hoặc từ khóa mô tả hàng hóa (ví dụ: ngựa, horse) để tra cứu thuế nhập khẩu.
                </p>
              </CardContent>
            </Card>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TariffLookup;
