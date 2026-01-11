import { Link } from "react-router-dom";
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
import logo from "@/assets/Logo.png";
import donationQr from "@/assets/donation-qr.jpg";

export const Header = () => {
  return (
    <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
          <div>
            <h1 className="text-lg font-bold text-foreground leading-none">HSTC</h1>
            <span className="text-xs text-muted-foreground">Công cụ tra cứu HS Code</span>
          </div>
        </Link>

        {/* Donation Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              id="btn-open-donate-dialog"
              variant="outline"
              size="sm"
              className="gap-2 border-amber/50 text-amber hover:bg-amber/10 hover:text-orange"
            >
              <Coffee className="w-4 h-4" />
              <span className="hidden sm:inline">Tặng cà phê cho page</span>
              <span className="sm:hidden">Donate</span>
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
                id="link-buymeacoffee-outbound"
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
    </header>
  );
};
