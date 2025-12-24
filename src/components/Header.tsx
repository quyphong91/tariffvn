import { Link } from "react-router-dom";
import { Package, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
            <Package className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-none">Tra cứu HS code</h1>
            <span className="text-xs text-muted-foreground">Công cụ hỗ trợ phân loại hàng hoá</span>
          </div>
        </Link>

        {/* Buy Me a Coffee */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm text-muted-foreground">
            Nếu thấy hữu ích thì thỉnh thoảng mua cafe cho page nhé
          </span>
          <a
            href="https://buymeacoffee.com/pes91"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-amber/50 text-amber hover:bg-amber/10 hover:text-orange"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">Tặng cafe cho page</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
