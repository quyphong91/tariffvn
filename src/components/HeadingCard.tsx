import { HSItem } from "@/data/hsData";
import { HSCodeBadge } from "./HSCodeBadge";
import { FileText } from "lucide-react";

interface HeadingCardProps {
  item: HSItem;
  index: number;
}

export function HeadingCard({ item, index }: HeadingCardProps) {
  return (
    <div
      className="group bg-gradient-card rounded-xl border border-border p-5 shadow-card hover:shadow-soft transition-all duration-300 animate-fade-up"
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
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
