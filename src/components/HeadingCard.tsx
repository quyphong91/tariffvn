import { HSItem, SearchLanguage, getDescription } from "@/data/hsData";
import { HSCodeBadge } from "./HSCodeBadge";
import { FileText } from "lucide-react";
import { highlightText } from "@/utils/highlight";

interface HeadingCardProps {
  item: HSItem;
  index: number;
  language: SearchLanguage;
  keyword: string;
  material?: string;
  functionFeature?: string;
}

export function HeadingCard({ item, index, language, keyword, material, functionFeature }: HeadingCardProps) {
  const handleClick = () => {
    const element = document.getElementById(`detail-${item.hsCode}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const description = getDescription(item, language);

  return (
    <button
      onClick={handleClick}
      className="group bg-gradient-card rounded-xl border border-border p-5 shadow-card hover:shadow-soft hover:border-primary/50 transition-all duration-300 animate-fade-up text-left w-full cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
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

