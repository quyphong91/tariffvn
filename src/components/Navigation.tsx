import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, Search, BookOpen, FileText, Calculator, Newspaper, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const mainRoutes = [
  { path: "/", label: "Trang chủ", icon: Home },
  { path: "/tra-cuu-hs-code", label: "Tra cứu HS Code", icon: Search },
  { path: "/tra-cuu-thue-nhap-khau", label: "Tra cứu thuế nhập khẩu", icon: Calculator },
];

const documentRoutes = [
  { path: "/quy-tac-phan-loai-hs", label: "Quy tắc phân loại HS (GIR)", icon: BookOpen },
  { path: "/chu-giai-hs", label: "Chú giải HS", icon: FileText },
  { path: "/chu-giai-sen", label: "Chú giải SEN", icon: FileText },
  { path: "/tuyen-tap-phan-loai-wco", label: "Tuyển tập phân loại WCO", icon: BookOpen },
];

const newsRoute = { path: "/tin-tuc", label: "Tin tức", icon: Newspaper };

// Desktop Navigation Bar
export const DesktopNavigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isDocumentActive = documentRoutes.some(route => location.pathname.startsWith(route.path));

  return (
    <nav className="flex items-center gap-1">
      {/* Home */}
      <Link
        to="/"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive("/")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        )}
      >
        Trang chủ
      </Link>

      {/* Search Tools */}
      <Link
        to="/tra-cuu-hs-code"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive("/tra-cuu-hs-code")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        )}
      >
        Tra cứu HS code
      </Link>

      <Link
        to="/tra-cuu-thue-nhap-khau"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive("/tra-cuu-thue-nhap-khau")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        )}
      >
        Tra cứu thuế nhập khẩu
      </Link>

      {/* Documents Dropdown */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "px-3 py-2 h-auto text-sm font-medium bg-transparent",
                isDocumentActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              Tài liệu
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[280px] gap-1 p-2 bg-popover">
                {documentRoutes.map((route) => (
                  <li key={route.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={route.path}
                        className={cn(
                          "flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                          isActive(route.path)
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-secondary hover:text-foreground"
                        )}
                      >
                        <route.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{route.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* News */}
      <Link
        to="/tin-tuc"
        className={cn(
          "px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive("/tin-tuc") || location.pathname.startsWith("/tin-tuc/")
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        )}
      >
        Tin tức
      </Link>
    </nav>
  );
};

// Mobile Navigation (Hamburger Menu)
export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Mở menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu điều hướng</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6">
          {/* Main Routes */}
          {mainRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors",
                isActive(route.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <route.icon className="w-5 h-5" />
              {route.label}
            </Link>
          ))}

          {/* Documents Section */}
          <div className="mt-4 mb-2 px-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tài liệu tham khảo
            </span>
          </div>
          {documentRoutes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors",
                isActive(route.path) || location.pathname.startsWith(route.path)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <route.icon className="w-5 h-5" />
              {route.label}
            </Link>
          ))}

          {/* News Section */}
          <div className="mt-4 mb-2 px-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Cập nhật
            </span>
          </div>
          <Link
            to={newsRoute.path}
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors",
              isActive(newsRoute.path) || location.pathname.startsWith("/tin-tuc/")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <newsRoute.icon className="w-5 h-5" />
            {newsRoute.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
