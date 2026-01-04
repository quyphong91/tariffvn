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
            <span className="text-xs text-muted-foreground">Công cụ tra cứu HS code</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
