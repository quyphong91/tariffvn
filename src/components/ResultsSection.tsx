import { HSItem, SearchLanguage, getDescription, SearchResultItem } from "@/data/hsData";
import { chapterNames } from "@/data/chapterNames";
import { HeadingCard } from "./HeadingCard";
import { DetailCard } from "./DetailCard";
import { FileStack, ListTree, ArrowUp, ChevronDown, ChevronsUpDown, BookOpen, FileText, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";

interface ResultsSectionProps {
  headings: HSItem[];
  detailed: SearchResultItem[];
  keyword: string;
  language: SearchLanguage;
  material?: string;
  functionFeature?: string;
}

export const ResultsSection = memo(function ResultsSection({ headings, detailed, keyword, language, material, functionFeature }: ResultsSectionProps) {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [allExpanded, setAllExpanded] = useState(true);
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [allDetailedExpanded, setAllDetailedExpanded] = useState(true);
  const [openDetailedGroups, setOpenDetailedGroups] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const headingsSection = document.getElementById('headings-section');
      if (headingsSection) {
        const rect = headingsSection.getBoundingClientRect();
        // Show button when headings section is scrolled out of view
        setShowFloatingButton(rect.bottom < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHeadings = () => {
    const headingsSection = document.getElementById('headings-section');
    if (headingsSection) {
      headingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Group headings by first 2 digits (Chapter)
  const groupedHeadings = headings.reduce((acc, heading) => {
    const chapter = heading.hsCode.substring(0, 2);
    if (!acc[chapter]) {
      acc[chapter] = [];
    }
    acc[chapter].push(heading);
    return acc;
  }, {} as Record<string, HSItem[]>);

  const sortedChapters = Object.keys(groupedHeadings).sort();

  // Initialize openChapters when chapters change
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    sortedChapters.forEach(chapter => {
      initialState[chapter] = true;
    });
    setOpenChapters(initialState);
    setAllExpanded(true);
  }, [headings]);

  const toggleAllChapters = () => {
    const newState = !allExpanded;
    const newOpenChapters: Record<string, boolean> = {};
    sortedChapters.forEach(chapter => {
      newOpenChapters[chapter] = newState;
    });
    setOpenChapters(newOpenChapters);
    setAllExpanded(newState);
  };

  const toggleChapter = (chapter: string) => {
    setOpenChapters(prev => {
      const newState = { ...prev, [chapter]: !prev[chapter] };
      const allOpen = Object.values(newState).every(v => v);
      setAllExpanded(allOpen);
      return newState;
    });
  };

  // Group detailed results by first 4 digits (Heading)
  const groupedDetailed = detailed.reduce((acc, result) => {
    const headingCode = result.item.hsCode?.substring(0, 4) || result.parents[0]?.hsCode?.substring(0, 4) || 'other';
    if (!acc[headingCode]) {
      acc[headingCode] = [];
    }
    acc[headingCode].push(result);
    return acc;
  }, {} as Record<string, SearchResultItem[]>);

  const sortedDetailedHeadings = Object.keys(groupedDetailed).sort();

  // Initialize openDetailedGroups when detailed results change
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    sortedDetailedHeadings.forEach(heading => {
      initialState[heading] = true;
    });
    setOpenDetailedGroups(initialState);
    setAllDetailedExpanded(true);
  }, [detailed]);

  const toggleAllDetailedGroups = () => {
    const newState = !allDetailedExpanded;
    const newOpenGroups: Record<string, boolean> = {};
    sortedDetailedHeadings.forEach(heading => {
      newOpenGroups[heading] = newState;
    });
    setOpenDetailedGroups(newOpenGroups);
    setAllDetailedExpanded(newState);
  };

  const toggleDetailedGroup = (heading: string) => {
    setOpenDetailedGroups(prev => {
      const newState = { ...prev, [heading]: !prev[heading] };
      const allOpen = Object.values(newState).every(v => v);
      setAllDetailedExpanded(allOpen);
      return newState;
    });
  };

  if (headings.length === 0 && detailed.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
          <FileStack className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Không tìm thấy kết quả</h3>
        <p className="text-muted-foreground">
          Thử tìm kiếm với từ khóa hoặc mã HS khác.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Quick Access Buttons */}
      <div className="flex flex-wrap gap-3 p-4 bg-muted/30 rounded-lg border border-border">
        <span className="text-sm font-medium text-muted-foreground self-center mr-2">Tham khảo thêm:</span>
        <Link to="/chapter-notes" target="_blank">
          <Button variant="outline" size="sm" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Chú giải HS
          </Button>
        </Link>
        <Link to="/sen-notes" target="_blank">
          <Button variant="outline" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            Chú giải SEN
          </Button>
        </Link>
        <Link to="/wco-compendium" target="_blank">
          <Button variant="outline" size="sm" className="gap-2">
            <Globe className="w-4 h-4" />
            Tuyển tập WCO
          </Button>
        </Link>
      </div>

      {/* Floating Button */}
      {showFloatingButton && (
        <Button
          variant="default"
          size="sm"
          onClick={scrollToHeadings}
          className="fixed bottom-6 right-6 z-50 gap-2 shadow-lg animate-fade-in"
        >
          <ArrowUp className="w-4 h-4" />
          Về Headings
        </Button>
      )}

      {/* Section 1: Headings Only - Grouped by Chapter */}
      <section id="headings-section">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <FileStack className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Headings</h2>
              <p className="text-sm text-muted-foreground">
                Tìm thấy {headings.length} Nhóm trong {sortedChapters.length} Chương
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAllChapters}
            className="gap-2"
          >
            <ChevronsUpDown className="w-4 h-4" />
            {allExpanded ? "Thu gọn" : "Mở rộng"}
          </Button>
        </div>
        
        <div className="space-y-6">
          {sortedChapters.map((chapter) => (
            <Collapsible key={chapter} open={openChapters[chapter] ?? true} onOpenChange={() => toggleChapter(chapter)} className="group space-y-3 border border-border rounded-lg p-4 bg-card/50">
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center gap-2 text-left border border-border/50 rounded-md px-3 py-2 bg-muted/30 hover:bg-muted/50 transition-colors">
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=closed]:rotate-[-90deg]" />
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">
                    Chương {chapter}
                  </span>
                  {chapterNames[chapter] && (
                    <span className="text-sm font-semibold text-muted-foreground line-clamp-1">
                      {chapterNames[chapter]}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground shrink-0">
                    ({groupedHeadings[chapter].length} headings)
                  </span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {groupedHeadings[chapter].map((heading, index) => (
                    <HeadingCard key={heading.hsCode} item={heading} index={index} language={language} />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </section>

      {/* Section 2: Detailed Results - Grouped by Heading */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
              <ListTree className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Kết quả chi tiết</h2>
              <p className="text-sm text-muted-foreground">
                Có {detailed.length} kết quả trong {sortedDetailedHeadings.length} Nhóm
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAllDetailedGroups}
            className="gap-2"
          >
            <ChevronsUpDown className="w-4 h-4" />
            {allDetailedExpanded ? "Thu gọn" : "Mở rộng"}
          </Button>
        </div>
        <div className="space-y-6">
          {sortedDetailedHeadings.map((headingCode) => {
            const headingItem = headings.find(h => h.hsCode === headingCode) || 
                               groupedDetailed[headingCode][0]?.parents?.find(p => p.hsCode === headingCode);
            const headingDescription = headingItem ? getDescription(headingItem, language) : '';
            
            return (
              <Collapsible 
                key={headingCode} 
                open={openDetailedGroups[headingCode] ?? true} 
                onOpenChange={() => toggleDetailedGroup(headingCode)} 
                className="group space-y-3 border border-border rounded-lg p-4 bg-card/50"
              >
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center gap-2 px-1 mb-2 text-left">
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=closed]:rotate-[-90deg]" />
                    <span className="text-sm font-semibold text-primary-foreground bg-navy px-3 py-1 rounded-full shrink-0">
                      Nhóm {headingCode}
                    </span>
                    {headingDescription && (
                      <span className="text-sm font-semibold text-muted-foreground line-clamp-1">
                        {headingDescription}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground shrink-0">
                      ({groupedDetailed[headingCode].length} kết quả)
                    </span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-4">
                    {groupedDetailed[headingCode].map((result, index) => (
                      <DetailCard
                        key={result.item.hsCode + index}
                        item={result.item}
                        parents={result.parents}
                        index={index}
                        keyword={keyword}
                        language={language}
                        score={result.score}
                        noteMatches={result.noteMatches}
                        material={material}
                        functionFeature={functionFeature}
                      />
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </section>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison: only re-render if these props change
  return (
    prevProps.headings === nextProps.headings &&
    prevProps.detailed === nextProps.detailed &&
    prevProps.keyword === nextProps.keyword &&
    prevProps.language === nextProps.language &&
    prevProps.material === nextProps.material &&
    prevProps.functionFeature === nextProps.functionFeature
  );
});
