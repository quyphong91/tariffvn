import { Coffee, QrCode, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import donationQr from "@/assets/donation-qr.jpg";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-20 bg-card/50">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <p>Nếu thấy hữu ích, thỉnh thoảng nhớ ủng hộ page bằng cách donate nhé. Một ly cà phê cũng đủ thấy vui.</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-amber/50 text-amber hover:bg-amber/10 hover:text-orange"
              >
                <Coffee className="w-4 h-4" />
                Tặng cà phê cho page
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-amber" />
                  Cảm ơn quý phú ông, phú bà
                </DialogTitle>
                <DialogDescription>
                  Xin hãy chọn cách tặng cà phê cho page. Của ít hay nhiều không quan trọng. Quan trọng ở tấm lòng.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Buy Me a Coffee Link */}
                <a
                  href="https://buymeacoffee.com/zephr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber/20 flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-amber" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Buy Me a Coffee</p>
                    <p className="text-sm text-muted-foreground">Support via buymeacoffee.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>

                {/* QR Code */}
                <div className="flex flex-col items-center gap-3 p-4 rounded-lg border border-border bg-secondary/50">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-5 h-5 text-amber" />
                    <p className="font-medium text-foreground">Chuyển khoản</p>
                  </div>
                  <img
                    src={donationQr}
                    alt="Donation QR Code"
                    className="w-auto h-auto max-w-64 rounded-lg border border-border"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Quét QR để chuyển khoản
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <p className="mt-4 text-xs text-muted-foreground/60">
          © 2025 Tra cứu HS code. Dữ liệu tham khảo từ Danh mục hàng hóa xuất khẩu nhập khẩu Việt Nam theo Thông tư 31/2022/TT-BTC.
        </p>
      </div>
    </footer>
  );
};
