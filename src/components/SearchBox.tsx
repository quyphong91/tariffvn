import { useState, FormEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBoxProps {
  onSearch: (keyword: string) => void;
  initialValue?: string;
}

export function SearchBox({ onSearch, initialValue = "" }: SearchBoxProps) {
  const [keyword, setKeyword] = useState(initialValue);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Nhập từ khóa mô tả hàng hóa..."
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
