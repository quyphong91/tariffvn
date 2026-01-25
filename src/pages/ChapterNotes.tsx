import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, BookOpen, ChevronDown, ChevronRight, Globe, ExternalLink } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { chapterNotesData, ChapterNote } from "@/data/chapterNotesData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BASE_URL = "https://tracuuhs.com";

const ChapterNotes = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [expandedChapters, setExpandedChapters] = useState<number[]>([]);
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const breadcrumbs = [
    { name: "Trang chủ", url: BASE_URL },
    { name: "Chú giải phân loại", url: `${BASE_URL}/chu-giai-hs` },
  ];

  const toggleSection = (section: number) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleChapter = (chapter: number) => {
    setExpandedChapters(prev =>
      prev.includes(chapter)
        ? prev.filter(c => c !== chapter)
        : [...prev, chapter]
    );
  };

  // Group chapters by section
  const groupedBySection = chapterNotesData.reduce((acc, chapter) => {
    const section = chapter.section;
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(chapter);
    return acc;
  }, {} as Record<number, ChapterNote[]>);

  const allSections = Object.keys(groupedBySection).map(Number);

  const expandAll = () => {
    setExpandedSections(allSections);
    setExpandedChapters(chapterNotesData.map(c => c.chapter));
  };

  const collapseAll = () => {
    setExpandedSections([]);
    setExpandedChapters([]);
  };


  return (
    <>
      <SEOHead
        title="Chú giải phân loại HS Code theo Chương và Nhóm"
        description="Chú giải chi tiết Explanatory Notes của Hệ thống hài hoà HS giúp giải thích phạm vi và nội dung của từng Chương, Nhóm trong Biểu thuế."
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen bg-gradient-hero">
        <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
            <li className="flex items-center">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                <span className="sr-only md:not-sr-only">Trang chủ</span>
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1" />
              <span className="text-foreground font-medium">Chú giải phân loại</span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chú giải phân loại theo Chương và Nhóm
              </h1>
              <p className="text-lg text-muted-foreground">
                Chú giải chi tiết (Explanatory Notes) của Hệ thống hài hoà HS Code giúp giải thích phạm vi và nội dung của từng Chương, Nhóm trong Danh mục hàng hóa.
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Language Toggle */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-1">
              <button
                onClick={() => setLanguage("vi")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === "vi"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                Tiếng Việt
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                English
              </button>
            </div>

            {/* Expand/Collapse All */}
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Mở tất cả
              </button>
              <span className="text-muted-foreground">|</span>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Đóng tất cả
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Notes Content */}
        <div className="max-w-5xl mx-auto space-y-6">
          {Object.entries(groupedBySection).map(([sectionNum, chapters]) => {
            const section = parseInt(sectionNum);
            const firstChapter = chapters[0];
            const romanNumeral = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"][section - 1] || section.toString();

            return (
              <Collapsible
                key={section}
                open={expandedSections.includes(section)}
                onOpenChange={() => toggleSection(section)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors text-left">
                    <div className="flex items-center gap-3">
                      {expandedSections.includes(section) ? (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 whitespace-nowrap flex-shrink-0">
                        {language === "vi" ? `Phần ${romanNumeral}` : `Section ${romanNumeral}`}
                      </Badge>
                      <h2 className="text-lg font-bold text-foreground">
                        {language === "vi" ? firstChapter.sectionTitleVi : firstChapter.sectionTitleEn}
                      </h2>
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <div className="mt-3 space-y-3 ml-2">
                    {/* Chapters in this Section */}
                    {chapters.map((chapter) => (
                      <Collapsible
                        key={chapter.chapter}
                        open={expandedChapters.includes(chapter.chapter)}
                        onOpenChange={() => toggleChapter(chapter.chapter)}
                      >
                        <CollapsibleTrigger className="w-full">
                          <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors text-left">
                            {expandedChapters.includes(chapter.chapter) ? (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                            <Badge variant="secondary" className="flex-shrink-0">
                              {language === "vi" ? `Chương ${chapter.chapter}` : `Chapter ${chapter.chapter}`}
                            </Badge>
                            <span className="font-medium text-foreground">
                              {language === "vi" ? chapter.titleVi : chapter.titleEn}
                            </span>
                          </div>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/20 pl-4">
                            {/* Headings - Simple list without collapsible content */}
                            {chapter.headings.map((heading) => (
                              <div
                                key={heading.code}
                                className="flex items-center gap-3 p-3 rounded-md border border-border/50 bg-card/50"
                              >
                                <Badge variant="outline" className="flex-shrink-0 font-mono text-xs">
                                  {heading.code}
                                </Badge>
                                <span className="text-sm text-foreground">
                                  {language === "vi" ? heading.titleVi : heading.titleEn}
                                </span>
                              </div>
                            ))}

                            {/* Full Notes Button */}
                            <div className="pt-3 mt-2">
                              <Link
                                to={`/chu-giai-hs/full/${chapter.chapter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button variant="outline" size="sm" className="gap-2">
                                  <ExternalLink className="w-4 h-4" />
                                  {language === "vi" ? "Xem chú giải đầy đủ" : "See Full Notes"}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>

        {/* View All Chapters Full Detail Button */}
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border">
          <div className="flex justify-center">
            <Link
              to="/chu-giai-hs/full-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="gap-2">
                <ExternalLink className="w-5 h-5" />
                Xem chú giải đầy đủ toàn bộ các Chương
              </Button>
            </Link>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Mở trang chú giải song ngữ đầy đủ của tất cả 97 Chương để tìm kiếm nội dung xuyên suốt các Chương
          </p>
        </div>

      </main>

        <Footer />
      </div>
    </>
  );
};

export default ChapterNotes;
