import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, FileText, ExternalLink } from "lucide-react";

const SENNotes = () => {
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
          <span className="text-sm text-foreground">Chú giải SEN</span>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chú giải bổ sung SEN
          </h1>
          <p className="text-lg text-muted-foreground">
            Selective Explanatory Notes (SEN) - Chú giải SEN.
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl border border-border bg-card text-center">
            <div className="w-16 h-16 rounded-xl bg-amber/20 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-amber" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Nội dung đang được cập nhật
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Các Chú giải SEN sẽ được bổ sung trong thời gian tới.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/tools-to-assist-with-the-classification-in-the-hs.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Tài liệu WCO
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
          <div className="mt-12 p-6 rounded-xl bg-amber/10 border border-amber/30">
            <h3 className="font-semibold text-foreground mb-3">Về Chú giải SEN</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Chú giải SEN được xây dựng như một công cụ hỗ trợ các nước thành viên ASEAN để phân loại hàng hóa một số mặt hàng cụ thể được chi tiết ở cấp độ 8 số trong Danh mục AHTN
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Tập trung vào các hàng hoá có đặc điểm kỹ thuật phức tạp hoặc mới xuất hiện trên thị trường
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Cung cấp hướng dẫn chi tiết để đảm bảo tính thống nhất trong phân loại giữa các quốc gia
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SENNotes;
