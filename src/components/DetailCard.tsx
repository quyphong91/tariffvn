import { HSItem } from "@/data/hsData";
import { HSCodeBadge } from "./HSCodeBadge";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DetailCardProps {
  item: HSItem;
  parents: HSItem[];
  index: number;
  keyword: string;
}

function highlightText(text: string, keyword: string) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-accent/30 text-foreground px-0.5 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
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

export function DetailCard({ item, parents, index, keyword }: DetailCardProps) {
  const allItems = [...parents, item];

  return (
    <div
      className="bg-gradient-card rounded-xl border border-border shadow-card overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {allItems.map((rowItem, idx) => {
        const isMatch = rowItem === item;
        const level = rowItem.level;
        const indent = Math.min(level, 4);

        return (
          <div
            key={rowItem.hsCode + idx}
            className={cn(
              "flex items-center gap-3 px-4 py-3 border-b border-border/50 last:border-b-0 transition-colors",
              getLevelStyles(level),
              isMatch && "ring-2 ring-inset ring-accent/50"
            )}
            style={{ paddingLeft: `${1 + indent * 1.25}rem` }}
          >
            {idx > 0 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
            <HSCodeBadge code={rowItem.hsCode} level={level} />
            <span
              className={cn(
                "flex-1 text-sm",
                level === 0 ? "font-semibold" : "font-normal",
                isMatch ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {isMatch ? highlightText(rowItem.description, keyword) : rowItem.description}
            </span>
            {rowItem.standard && (
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {rowItem.standard}%
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
