import { HSItem, SearchLanguage, getDescription } from "@/data/hsData";
import { HeadingCard } from "./HeadingCard";
import { DetailCard } from "./DetailCard";
import { FileStack, ListTree } from "lucide-react";

interface ResultsSectionProps {
  headings: HSItem[];
  detailed: { item: HSItem; parents: HSItem[] }[];
  keyword: string;
  language: SearchLanguage;
}

export function ResultsSection({ headings, detailed, keyword, language }: ResultsSectionProps) {
  if (headings.length === 0 && detailed.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
          <FileStack className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
        <p className="text-muted-foreground">
          Try searching with a different keyword or HS code.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Section 1: Headings Only */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
            <FileStack className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Headings</h2>
            <p className="text-sm text-muted-foreground">
              {headings.length} heading{headings.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {headings.map((heading, index) => (
            <HeadingCard key={heading.hsCode} item={heading} index={index} language={language} />
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
            <h2 className="text-xl font-bold text-foreground">Detailed Results</h2>
            <p className="text-sm text-muted-foreground">
              {detailed.length} item{detailed.length !== 1 ? "s" : ""} with hierarchy
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
