import { HSItem, SearchLanguage, getDescription, SearchMatchType } from "@/data/hsData";
import { NoteMatch } from "@/utils/searchNotes";
import { HSCodeBadge } from "./HSCodeBadge";
import { ChevronRight, FileText, BookOpen, Sparkles, ExternalLink, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";
import { highlightText, HighlightMatchType } from "@/utils/highlight";
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DetailCardProps {
  item: HSItem;
  parents: HSItem[];
  index: number;
  keyword: string;
  language: SearchLanguage;
  score?: number;
  noteMatches?: NoteMatch[];
  material?: string;
  functionFeature?: string;
  matchType?: SearchMatchType;
}


function getLevelStyles(level: number) {
  switch (level) {
    case 0:
      return "bg-heading-bg text-primary-foreground border-primary/20";
    case 1:
      return "bg-level-1 border-border";
    case 2:
      return "bg-level-2 border-border/80";
    default:
      return "bg-level-3 border-border/60";
  }
}

function getChapterFromHsCode(hsCode: string): string {
  // Extract chapter number from HS code (first 2 digits)
  const cleaned = hsCode.replace(/\./g, '');
  return cleaned.substring(0, 2);
}

function EvidenceChip({ match, keywords, matchType = 'tokens' }: { match: NoteMatch; keywords: string[]; matchType?: SearchMatchType }) {
  const isSEN = match.source === 'sen';
  const Icon = isSEN ? FileText : BookOpen;
  const chapterNumber = getChapterFromHsCode(match.hsCode);
  const targetUrl = isSEN 
    ? `/#/sen-notes/full/${chapterNumber}`
    : `/#/chapter-notes/full/${chapterNumber}`;
  
  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-start gap-2 p-3 rounded-lg text-sm border transition-all cursor-pointer group",
        isSEN 
          ? "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100 hover:border-amber-300 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-800 dark:hover:bg-amber-950/50" 
          : "bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 dark:bg-indigo-950/30 dark:text-indigo-200 dark:border-indigo-800 dark:hover:bg-indigo-950/50"
      )}
    >
      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className={cn(
          "text-xs font-medium mb-1 flex items-center gap-1",
          isSEN ? "text-amber-600 dark:text-amber-400" : "text-indigo-600 dark:text-indigo-400"
        )}>
          {isSEN ? 'Chú giải bổ sung (SEN)' : 'Chú giải chi tiết (EN)'}
          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-xs leading-relaxed line-clamp-2">
          {highlightText(match.snippet, keywords, matchType)}
        </p>
      </div>
    </a>
  );
}

export function DetailCard({ item, parents, index, keyword, language, score, noteMatches, material, functionFeature, matchType = 'tokens' }: DetailCardProps) {
  const navigate = useNavigate();
  const allItems = [...parents, item];
  const headingCode = parents.length > 0 ? parents[0].hsCode : item.hsCode;
  const isHighScore = score !== undefined && score > 80;
  
  // Combine all keywords for highlighting
  const allKeywords = [keyword, material, functionFeature].filter(Boolean) as string[];

  // Handle click to navigate to tariff lookup with the HS code
  const handleTariffLookup = (hsCode: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hsCode) {
      // Remove dots from HS code for search
      const cleanCode = hsCode.replace(/\./g, '');
      navigate(`/tariff-lookup?q=${encodeURIComponent(cleanCode)}`);
    }
  };
  return (
    <div
      id={`detail-${headingCode}`}
      className="bg-gradient-card rounded-xl border border-border shadow-card overflow-hidden animate-fade-up scroll-mt-4"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Best Match Badge */}
      {isHighScore && (
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber/20 to-ocean/20 border-b border-border">
          <Sparkles className="w-4 h-4 text-amber" />
          <span className="text-xs font-medium text-foreground">Kết quả chứa nhiều từ khoá phù hợp</span>
          {score !== undefined && (
            <span className="ml-auto text-xs text-muted-foreground">Điểm: {score}</span>
          )}
        </div>
      )}

      {/* Item Rows */}
      {allItems.map((rowItem, idx) => {
        const isMatch = rowItem === item;
        const level = rowItem.level;
        const indent = Math.min(level, 4);
        const description = getDescription(rowItem, language);

        const canLookupTariff = rowItem.hsCode && (level === 0 || rowItem.hsCode.replace(/\./g, '').length === 8);

        return (
          <div
            key={rowItem.hsCode + idx}
            className={cn(
              "flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-b-0 transition-colors",
              getLevelStyles(level),
              isMatch && "ring-2 ring-inset ring-accent/50",
              canLookupTariff && level === 0 && "group cursor-pointer hover:bg-primary-foreground/15",
              canLookupTariff && level !== 0 && "group cursor-pointer hover:bg-accent/10"
            )}
            style={{ paddingLeft: `${1 + indent * 1.25}rem` }}
            onClick={canLookupTariff ? (e) => handleTariffLookup(rowItem.hsCode, e) : undefined}
          >
            {idx > 0 && (
              <ChevronRight className={cn("w-4 h-4 flex-shrink-0", level === 0 ? "text-primary-foreground/70" : "text-muted-foreground")} />
            )}
            <HSCodeBadge code={rowItem.hsCode} level={level} />
            <span
              className={cn(
                "flex-1 text-sm",
                level === 0 ? "font-semibold text-primary-foreground" : "font-normal",
                level !== 0 && (isMatch ? "text-foreground" : "text-muted-foreground")
              )}
            >
              {isMatch ? highlightText(description, allKeywords, matchType) : description}
            </span>
            {canLookupTariff && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={(e) => handleTariffLookup(rowItem.hsCode, e)}
                    className={cn(
                      "p-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity",
                      level === 0 
                        ? "hover:bg-primary-foreground/20 text-primary-foreground" 
                        : "hover:bg-accent text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Calculator className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tra cứu thuế suất</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        );
      })}

      {/* Evidence Chips */}
      {noteMatches && noteMatches.length > 0 && (
        <div className="px-4 py-3 bg-muted/30 border-t border-border">
          <div className="text-xs font-medium text-muted-foreground mb-2">Bằng chứng từ chú giải:</div>
          <div className="grid gap-2 md:grid-cols-2">
            {noteMatches.slice(0, 4).map((match, idx) => (
              <EvidenceChip key={idx} match={match} keywords={allKeywords} matchType={matchType} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
