import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Home, ChevronLeft, Search, ToggleLeft, ToggleRight } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect, useMemo } from "react";
import { chapterFullDetailData, NoteRow } from "@/data/AllchapterFullDetailData";
import { cn } from "@/lib/utils";

const ChapterNoteFullAll = () => {
  const canonicalUrl = useCanonicalUrl();
  const [searchQuery, setSearchQuery] = useState("");
  const [syncScroll, setSyncScroll] = useState(true);
  const [mobileView, setMobileView] = useState<'vi' | 'en'>('vi');
  
  const viColumnRef = useRef<HTMLDivElement>(null);
  const enColumnRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  // Combine all chapters' content into one array with chapter separators
  const allContent = useMemo(() => {
    const combined: (NoteRow & { chapterNumber?: number })[] = [];
    
    chapterFullDetailData.forEach((chapter) => {
      // Add chapter separator/header
      combined.push({
        type: 'heading',
        vi: `═══════════════════════════════════════`,
        en: `═══════════════════════════════════════`,
        chapterNumber: chapter.chapterNumber
      });
      combined.push({
        type: 'heading',
        vi: chapter.titleVi,
        en: chapter.titleEn,
        chapterNumber: chapter.chapterNumber
      });
      combined.push({
        type: 'heading',
        vi: `═══════════════════════════════════════`,
        en: `═══════════════════════════════════════`,
        chapterNumber: chapter.chapterNumber
      });
      
      // Add chapter content
      chapter.content.forEach(row => {
        combined.push({ ...row, chapterNumber: chapter.chapterNumber });
      });
    });
    
    return combined;
  }, []);

  // Filter content based on search query
  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) return allContent;
    
    const query = searchQuery.toLowerCase();
    return allContent.filter(row => 
      row.vi.toLowerCase().includes(query) || 
      row.en.toLowerCase().includes(query)
    );
  }, [allContent, searchQuery]);

  // Sync scroll handler
  useEffect(() => {
    if (!syncScroll) return;

    const handleScroll = (source: 'vi' | 'en') => {
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      const sourceRef = source === 'vi' ? viColumnRef : enColumnRef;
      const targetRef = source === 'vi' ? enColumnRef : viColumnRef;
      
      if (sourceRef.current && targetRef.current) {
        const scrollPercentage = sourceRef.current.scrollTop / 
          (sourceRef.current.scrollHeight - sourceRef.current.clientHeight);
        targetRef.current.scrollTop = scrollPercentage * 
          (targetRef.current.scrollHeight - targetRef.current.clientHeight);
      }
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 50);
    };

    const viEl = viColumnRef.current;
    const enEl = enColumnRef.current;

    const viHandler = () => handleScroll('vi');
    const enHandler = () => handleScroll('en');

    viEl?.addEventListener('scroll', viHandler);
    enEl?.addEventListener('scroll', enHandler);

    return () => {
      viEl?.removeEventListener('scroll', viHandler);
      enEl?.removeEventListener('scroll', enHandler);
    };
  }, [syncScroll]);

  const renderRow = (row: NoteRow & { chapterNumber?: number }, index: number, lang: 'vi' | 'en') => {
    const text = lang === 'vi' ? row.vi : row.en;
    
    const baseClasses = "py-3 px-4 border-b border-border/50";
    
    // Check if this is a chapter separator line
    if (text.includes('═══')) {
      return (
        <div key={`${lang}-${index}`} className={cn(baseClasses, "text-center text-primary font-bold bg-primary/10")}>
          {text}
        </div>
      );
    }
    
    if (row.type === 'heading') {
      return (
        <div key={`${lang}-${index}`} className={cn(baseClasses, "font-bold text-lg bg-muted/50")}>
          {text}
        </div>
      );
    }
    
    if (row.type === 'list') {
      return (
        <div key={`${lang}-${index}`} className={cn(baseClasses, "pl-8")}>
          {text}
        </div>
      );
    }
    
    return (
      <div key={`${lang}-${index}`} className={baseClasses}>
        {text}
      </div>
    );
  };

  const totalChapters = chapterFullDetailData.length;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Chú giải đầy đủ toàn bộ các Chương | TracuuHS</title>
        <meta name="description" content="Chú giải song ngữ Việt - Anh đầy đủ cho tất cả 97 Chương trong Danh mục HS Code." />
      </Helmet>
      <div className="min-h-screen bg-gradient-hero">
        <Header />

      <main className="mx-auto px-2 md:px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Trang chủ
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link to="/chapter-notes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Chú giải phân loại
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-sm text-foreground">Toàn bộ các Chương</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link to="/chapter-notes">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Quay lại
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Chú giải đầy đủ - Toàn bộ các Chương
          </h1>
          <p className="text-muted-foreground">
            Bilingual Explanatory Notes for All Chapters ({totalChapters} Chapters) / Chú giải song ngữ Việt - Anh cho tất cả các Chương
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Tìm kiếm trong tất cả các chương..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-4">
            {/* Sync Scroll Toggle - Hidden on mobile */}
            <button
              onClick={() => setSyncScroll(!syncScroll)}
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {syncScroll ? (
                <ToggleRight className="w-5 h-5 text-primary" />
              ) : (
                <ToggleLeft className="w-5 h-5" />
              )}
              <span>Cuộn đồng bộ</span>
            </button>

            {/* Mobile Language Toggle */}
            <div className="flex md:hidden items-center gap-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setMobileView('vi')}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  mobileView === 'vi' 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground"
                )}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setMobileView('en')}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                  mobileView === 'en' 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground"
                )}
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div>
          {/* Desktop/Tablet: Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-0 rounded-xl border border-border overflow-hidden bg-card">
            {/* Vietnamese Column Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 font-semibold text-center border-r border-primary-foreground/20">
              Tiếng Việt (VI)
            </div>
            {/* English Column Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 font-semibold text-center">
              English (EN)
            </div>
            
            {/* Vietnamese Column Content */}
            <div 
              ref={viColumnRef}
              className="max-h-[75vh] overflow-y-auto border-r border-border"
            >
              {filteredContent.map((row, index) => renderRow(row, index, 'vi'))}
              {filteredContent.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  Không tìm thấy kết quả phù hợp
                </div>
              )}
            </div>
            
            {/* English Column Content */}
            <div 
              ref={enColumnRef}
              className="max-h-[75vh] overflow-y-auto"
            >
              {filteredContent.map((row, index) => renderRow(row, index, 'en'))}
              {filteredContent.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  No matching results found
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Single Column with Toggle */}
          <div className="md:hidden rounded-xl border border-border overflow-hidden bg-card">
            {/* Column Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 font-semibold text-center">
              {mobileView === 'vi' ? 'Tiếng Việt (VI)' : 'English (EN)'}
            </div>
            
            {/* Column Content */}
            <div className="max-h-[70vh] overflow-y-auto">
              {filteredContent.map((row, index) => renderRow(row, index, mobileView))}
              {filteredContent.length === 0 && (
                <div className="p-8 text-center text-muted-foreground">
                  {mobileView === 'vi' 
                    ? 'Không tìm thấy kết quả phù hợp' 
                    : 'No matching results found'}
                </div>
              )}
            </div>
          </div>

          {/* Results count */}
          {searchQuery && (
            <div className="mt-4 text-sm text-muted-foreground text-center">
              Tìm thấy {filteredContent.length} kết quả / Found {filteredContent.length} results
            </div>
          )}
        </div>
      </main>
      </div>
    </>
  );
};

export default ChapterNoteFullAll;
