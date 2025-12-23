import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, BookOpen, ChevronDown, ChevronRight, Globe, FileText } from "lucide-react";
import { chapterNotesData, getSectionNote, ChapterNote, HeadingNote } from "@/data/chapterNotesData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ChapterNotes = () => {
  const [expandedChapters, setExpandedChapters] = useState<number[]>([]);
  const [expandedHeadings, setExpandedHeadings] = useState<string[]>([]);
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const toggleChapter = (chapter: number) => {
    setExpandedChapters(prev =>
      prev.includes(chapter)
        ? prev.filter(c => c !== chapter)
        : [...prev, chapter]
    );
  };

  const toggleHeading = (code: string) => {
    setExpandedHeadings(prev =>
      prev.includes(code)
        ? prev.filter(c => c !== code)
        : [...prev, code]
    );
  };

  const expandAll = () => {
    setExpandedChapters(chapterNotesData.map(c => c.chapter));
    setExpandedHeadings(chapterNotesData.flatMap(c => c.headings.map(h => h.code)));
  };

  const collapseAll = () => {
    setExpandedChapters([]);
    setExpandedHeadings([]);
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
          <span className="text-sm text-foreground">Chú giải phân loại</span>
        </div>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chú giải phân loại theo Chương và Nhóm
              </h1>
              <p className="text-lg text-muted-foreground">
                Chú giải chi tiết (Explanatory Notes) của Hệ thống hài hoà HS giúp giải thích phạm vi và nội dung của từng Chương, Nhóm trong Biểu thuế.
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
        <div className="max-w-5xl mx-auto space-y-8">
          {Object.entries(groupedBySection).map(([sectionNum, chapters]) => {
            const section = parseInt(sectionNum);
            const sectionNote = getSectionNote(section);
            const firstChapter = chapters[0];

            return (
              <div key={section} className="space-y-4">
                {/* Section Header */}
                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {language === "vi" ? `Phần ${section === 1 ? "I" : "II"}` : `Section ${section === 1 ? "I" : "II"}`}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    {language === "vi" ? firstChapter.sectionTitleVi : firstChapter.sectionTitleEn}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === "vi" ? sectionNote.vi : sectionNote.en}
                  </p>
                </div>

                {/* Chapters in this Section */}
                <div className="space-y-3">
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
                        <div className="mt-2 ml-4 space-y-4 border-l-2 border-primary/20 pl-4">
                          {/* Chapter Notes */}
                          {(language === "vi" ? chapter.notesVi : chapter.notesEn).length > 0 && (
                            <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-primary" />
                                {language === "vi" ? "Chú giải" : "Notes"}
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {(language === "vi" ? chapter.notesVi : chapter.notesEn).map((note, idx) => (
                                  <li key={idx} className="leading-relaxed">
                                    {note}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* General Description */}
                          <div className="p-4 rounded-lg bg-ocean-light/10 border border-ocean/20">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              {language === "vi" ? "Tổng quát" : "General"}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {language === "vi" ? chapter.generalVi : chapter.generalEn}
                            </p>
                          </div>

                          {/* Headings */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-foreground mb-2">
                              {language === "vi" ? "Các nhóm trong chương" : "Headings in this chapter"}
                            </h4>
                            {chapter.headings.map((heading) => (
                              <Collapsible
                                key={heading.code}
                                open={expandedHeadings.includes(heading.code)}
                                onOpenChange={() => toggleHeading(heading.code)}
                              >
                                <CollapsibleTrigger className="w-full">
                                  <div className="flex items-center gap-3 p-3 rounded-md border border-border/50 bg-card/50 hover:bg-muted/30 transition-colors text-left">
                                    {expandedHeadings.includes(heading.code) ? (
                                      <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
                                    ) : (
                                      <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                    )}
                                    <Badge variant="outline" className="flex-shrink-0 font-mono text-xs">
                                      {heading.code}
                                    </Badge>
                                    <span className="text-sm text-foreground">
                                      {language === "vi" ? heading.titleVi : heading.titleEn}
                                    </span>
                                  </div>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                  <div className="mt-1 ml-7 p-3 rounded-md bg-muted/20 border-l-2 border-amber/30">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {language === "vi" ? heading.contentVi : heading.contentEn}
                                    </p>
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            ))}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* More chapters coming soon notice */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="p-6 rounded-xl border border-amber/30 bg-amber/5 text-center">
            <BookOpen className="w-8 h-8 text-amber mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {language === "vi" ? "Các chương tiếp theo đang được cập nhật" : "More chapters are being updated"}
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              {language === "vi"
                ? "Chú giải chi tiết cho các Chương từ 11 trở đi sẽ được bổ sung trong thời gian tới."
                : "Detailed explanatory notes for Chapters 11 onwards will be added soon."}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChapterNotes;
