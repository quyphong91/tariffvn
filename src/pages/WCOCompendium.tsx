import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, Globe, ExternalLink } from "lucide-react";

const WCOCompendium = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Trang chủ
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-sm text-foreground">Tuyển tập ý kiến phân loại của WCO</span>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tuyển tập ý kiến phân loại của WCO
          </h1>
          <p className="text-lg text-muted-foreground">
            Compendium of Classification Opinions - Tập hợp các quyết định phân loại chính thức của Ủy ban HS thuộc Tổ chức Hải quan Thế giới.
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl border border-border bg-card text-center">
            <div className="w-16 h-16 rounded-xl bg-orange/20 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-orange" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Nội dung đang được cập nhật
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Các ý kiến phân loại (Classification Opinions) của WCO sẽ được cập nhật trong thời gian tới. Đây là nguồn tham khảo quan trọng cho các hàng hoá gây tranh cãi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs_classification_decisions.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Tra cứu trên WCO
              </a>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Tra cứu HS code
              </Link>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-12 p-6 rounded-xl bg-orange/10 border border-orange/30">
            <h3 className="font-semibold text-foreground mb-3">Về Compendium of Classification Opinions</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Được ban hành bởi Ủy ban HS (HS Committee) của WCO
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Cung cấp quyết định phân loại cho các hàng hoá cụ thể gây tranh cãi giữa các quốc gia thành viên
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Có giá trị tham khảo cao và thường được sử dụng để giải quyết tranh chấp về phân loại
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange">•</span>
                Được cập nhật định kỳ sau mỗi kỳ họp của Ủy ban HS
              </li>
            </ul>
          </div>

          {/* Example Categories */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">Một số nhóm hàng thường gặp trong Compendium</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Thiết bị điện tử, máy tính và linh kiện",
                "Máy móc công nghiệp đa chức năng",
                "Sản phẩm thực phẩm chế biến phức hợp",
                "Dược phẩm và sản phẩm y tế",
                "Hóa chất và sản phẩm hóa học",
                "Phụ tùng và linh kiện xe cộ",
                "Sản phẩm dệt may và da giày",
                "Thiết bị quang học và đo lường",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg border border-border bg-muted/30 text-sm text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WCOCompendium;
