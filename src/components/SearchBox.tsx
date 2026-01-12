import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Input validation constants
const MAX_KEYWORD_LENGTH = 200;

interface SearchBoxProps {
  onSearch: (keyword: string) => void;
  initialValue?: string;
}

export function SearchBox({ onSearch, initialValue = "" }: SearchBoxProps) {
  const [keyword, setKeyword] = useState(initialValue);

  const handleKeywordChange = (value: string) => {
    // Enforce max length on input
    if (value.length <= MAX_KEYWORD_LENGTH) {
      setKeyword(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedKeyword = keyword.trim();
    
    if (!trimmedKeyword) {
      return;
    }
    
    if (trimmedKeyword.length > MAX_KEYWORD_LENGTH) {
      toast.error(`Từ khóa tìm kiếm không được vượt quá ${MAX_KEYWORD_LENGTH} ký tự`);
      return;
    }
    
    onSearch(trimmedKeyword);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            value={keyword}
            onChange={(e) => handleKeywordChange(e.target.value)}
            placeholder="Nhập từ khóa mô tả hàng hóa..."
            maxLength={MAX_KEYWORD_LENGTH}
            className="pl-12 h-14 text-base bg-card border-border shadow-card rounded-xl focus-visible:ring-2 focus-visible:ring-primary transition-shadow"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="h-14 px-8 rounded-xl font-semibold shadow-soft hover:shadow-glow transition-all duration-300"
        >
          Tìm kiếm
        </Button>
      </div>
    </form>
  );
}
