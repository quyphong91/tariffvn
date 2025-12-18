import { HSItem, SearchLanguage, getDescription } from "@/data/hsData";
import { chapterNames } from "@/data/chapterNames";
import { HeadingCard } from "./HeadingCard";
import { DetailCard } from "./DetailCard";
import { FileStack, ListTree, ArrowUp, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useEffect, useState } from "react";

interface ResultsSectionProps {
  headings: HSItem[];
  detailed: { item: HSItem; parents: HSItem[] }[];
  keyword: string;
  language: SearchLanguage;
}

export function ResultsSection({ headings, detailed, keyword, language }: ResultsSectionProps) {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

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
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
            <FileStack className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Headings</h2>
            <p className="text-sm text-muted-foreground">
              Tìm thấy {headings.length} Headings trong {sortedChapters.length} Chương
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          {sortedChapters.map((chapter) => (
            <Collapsible key={chapter} defaultOpen className="group space-y-3">
              <CollapsibleTrigger className="w-full">
                <div className="flex flex-col gap-1 px-1 mb-2 text-left">
                  <div className="flex items-center gap-2">
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=closed]:rotate-[-90deg]" />
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Chương {chapter}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      ({groupedHeadings[chapter].length} headings)
                    </span>
                  </div>
                  {chapterNames[chapter] && (
                    <p className="text-sm text-muted-foreground pl-6 line-clamp-2">
                      {chapterNames[chapter]}
                    </p>
                  )}
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

      {/* Section 2: Detailed Results */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10">
            <ListTree className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Kết quả chi tiết</h2>
            <p className="text-sm text-muted-foreground">
              Có {detailed.length} kết quả được phân theo Nhóm
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {detailed.map((result, index) => (
            <DetailCard
              key={result.item.hsCode + index}
              item={result.item}
              parents={result.parents}
              index={index}
              keyword={keyword}
              language={language}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
