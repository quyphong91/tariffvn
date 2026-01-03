import { HSItem, SearchLanguage, getDescription } from "@/data/hsData";
import { HSCodeBadge } from "./HSCodeBadge";
import { FileText } from "lucide-react";
import { highlightText } from "@/utils/highlight";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface HeadingCardProps {
  item: HSItem;
  index: number;
  language: SearchLanguage;
  keyword: string;
  material?: string;
  functionFeature?: string;
  maxScore?: number;
}

// Ranking thresholds based on scoring system
// High: score > 80 (Best Match threshold)
// Medium: score 40-80
// Low: score < 40
function getRankingLevel(score?: number): 'high' | 'medium' | 'low' | null {
  if (score === undefined || score === 0) return null;
  if (score > 80) return 'high';
  if (score >= 40) return 'medium';
  return 'low';
}

function getRankingColor(level: 'high' | 'medium' | 'low' | null): string {
  switch (level) {
    case 'high':
      return 'bg-red-500'; // Red for best matches
    case 'medium':
      return 'bg-amber-500'; // Amber for medium matches
    case 'low':
      return 'bg-gray-400'; // Gray for lower matches
    default:
      return '';
  }
}

function getRankingLabel(level: 'high' | 'medium' | 'low' | null): string {
  switch (level) {
    case 'high':
      return 'Độ phù hợp cao';
    case 'medium':
      return 'Độ phù hợp trung bình';
    case 'low':
      return 'Độ phù hợp thấp';
    default:
      return '';
  }
}

export function HeadingCard({ item, index, language, keyword, material, functionFeature, maxScore }: HeadingCardProps) {
  const handleClick = () => {
    const element = document.getElementById(`detail-${item.hsCode}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const description = getDescription(item, language);
  const rankingLevel = getRankingLevel(maxScore);

  return (
    <button
      onClick={handleClick}
      className="group bg-gradient-card rounded-xl border border-border p-5 shadow-card hover:shadow-soft hover:border-primary/50 transition-all duration-300 animate-fade-up text-left w-full cursor-pointer relative"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Ranking Indicator */}
      {rankingLevel && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute top-3 right-3">
                <div className={`w-4 h-4 rounded-full ${getRankingColor(rankingLevel)} shadow-sm ring-2 ring-white dark:ring-gray-800`} />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p className="text-xs">{getRankingLabel(rankingLevel)}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0 pr-6">
          <div className="flex items-center gap-3 mb-2">
            <HSCodeBadge code={item.hsCode} level={item.level} />
          </div>
          <p className="text-foreground font-medium leading-relaxed">
            {highlightText(description, [keyword, material, functionFeature])}
          </p>
        </div>
      </div>
    </button>
  );
}
