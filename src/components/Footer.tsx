import { Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20 bg-card/50">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>Nếu thấy hữu ích, thỉnh thoảng nhớ donate ủng hộ page nhé. Một ly cà phê cũng đủ thấy vui.</p>
        
        <div className="flex justify-center mt-4">
          <a
            href="https://www.facebook.com/share/1GBqyDGvu3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Theo dõi HSTC trên Facebook</span>
          </a>
        </div>
        
        <p className="mt-4 text-xs text-muted-foreground/60">
          © 2026 HSTC. Dữ liệu tham khảo từ Danh mục hàng hóa xuất khẩu nhập khẩu Việt Nam theo Thông tư 31/2022/TT-BTC.
        </p>
      </div>
    </footer>
  );
};
