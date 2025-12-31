import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logo.png";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <h1 className="text-lg font-bold text-foreground leading-none">HSTC</h1>
            <span className="text-xs text-muted-foreground">Công cụ hỗ trợ tra cứu mã số hàng hoá</span>
          </div>
        </Link>

        {/* Buy Me a Coffee */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm text-muted-foreground">
            Nếu thấy hữu ích thì thỉnh thoảng mua cà phê cho page nhé
          </span>
          <a
            href="https://buymeacoffee.com/zephr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-2 border-amber/50 text-amber hover:bg-amber/10 hover:text-orange"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">Tặng cà phê cho page</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};
