import { SearchLanguage } from "@/data/hsData";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  language: SearchLanguage;
  onLanguageChange: (language: SearchLanguage) => void;
}

export function LanguageToggle({ language, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <span className="text-sm text-muted-foreground">Tìm kiếm bằng từ khóa theo:</span>
      <div className="inline-flex rounded-lg border border-border bg-card p-1 shadow-sm">
        <button
          type="button"
          onClick={() => onLanguageChange('vi')}
          className={cn(
            "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
            language === 'vi'
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          Tiếng Việt
        </button>
        <button
          type="button"
          onClick={() => onLanguageChange('en')}
          className={cn(
            "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
            language === 'en'
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          English
        </button>
      </div>
    </div>
  );
}
