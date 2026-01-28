import { Link } from "react-router-dom";
import { Facebook, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 mt-20 bg-card/80">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">HSTC</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Công cụ tra cứu mã số HS Code miễn phí, hỗ trợ doanh nghiệp XNK và khai báo hải quan.
            </p>
            <a
              href="https://www.facebook.com/share/1GBqyDGvu3/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" />
              <span>Theo dõi trên Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Liên kết nhanh</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/tra-cuu-hs-code" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tra cứu HS Code
              </Link>
              <Link to="/tra-cuu-thue-nhap-khau" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tra cứu thuế nhập khẩu
              </Link>
              <Link to="/ai-tra-cuu-hs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                HSTC AI
              </Link>
              <Link to="/tin-tuc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tin tức & Cập nhật
              </Link>
            </nav>
          </div>

          {/* About & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Thông tin</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/gioi-thieu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Về HSTC
              </Link>
              <a 
                href="mailto:hscodetracuu@gmail.com" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                hscodetracuu@gmail.com
              </a>
            </nav>
            <div className="pt-2">
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                Nếu thấy hữu ích, thỉnh thoảng nhớ donate ủng hộ page nhé. Một ly cà phê cũng đủ thấy vui 
                <Heart className="w-3 h-3 inline-block ml-1 text-red-400" />
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>© {currentYear} HSTC. Dữ liệu tham khảo từ Danh mục hàng hóa XNK Việt Nam theo Thông tư 31/2022/TT-BTC.</p>
          <p>
            Được phát triển với <Heart className="w-3 h-3 inline-block mx-1 text-red-400" /> cho cộng đồng XNK Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
};
