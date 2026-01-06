import { useState, useEffect, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
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
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const TariffLookup = () => {
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
  const isMobile = useIsMobile();

  useEffect(() => {
    loadTariffData()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }
    const results = searchTariffData(data, searchQuery);
    setSearchResults(results);
    setHasSearched(true);
  }, [data, searchQuery]);

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
      return "Tra cứu thuế nhập khẩu theo HS Code | TracuuHS";
    }
    const isHsCode = /^\d+$/.test(searchQuery.trim());
    if (isHsCode) {
      const firstResult = searchResults[0];
      const desc = firstResult?.descriptionVN?.slice(0, 50) || "";
      return `Thuế nhập khẩu mã HS ${searchQuery}${desc ? ` - ${desc}` : ""} | TracuuHS`;
    }
    return `Tra cứu thuế nhập khẩu ${searchQuery} | TracuuHS`;
  }, [hasSearched, searchQuery, searchResults]);

  const seoDescription = useMemo(() => {
    if (!hasSearched || !searchQuery.trim()) {
      return "Tra cứu thuế nhập khẩu Việt Nam theo mã HS Code. Bao gồm thuế MFN, ưu đãi FTA: EVFTA, CPTPP, RCEP, ACFTA, ATIGA và nhiều hiệp định khác.";
    }
    return `Tra cứu thuế nhập khẩu cho "${searchQuery}". Tìm thấy ${searchResults.length} kết quả. Xem thuế suất MFN, EVFTA, CPTPP, RCEP và các FTA khác.`;
  }, [hasSearched, searchQuery, searchResults.length]);

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
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-6 space-y-6">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tra cứu thuế nhập khẩu
            </h1>
            <p className="text-sm text-primary font-medium mb-1">
              (Đã cập nhật biểu thuế 2026 theo Chi cục Hải quan Khu vực VIII)
            </p>
            <p className="text-muted-foreground">
              Tìm kiếm theo mã HS Code (8 chữ số) hoặc mô tả hàng hóa
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
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
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
