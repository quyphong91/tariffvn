import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, BookOpen, ExternalLink } from "lucide-react";

const ChapterNotes = () => {
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
          <span className="text-sm text-foreground">Chú giải phân loại</span>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chú giải phân loại theo Chương và Nhóm
          </h1>
          <p className="text-lg text-muted-foreground">
            Chú giải chi tiết (Explanatory Notes) của Hệ thống hài hoà HS giúp giải thích phạm vi và nội dung của từng Chương, Nhóm trong Biểu thuế.
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl border border-border bg-card text-center">
            <div className="w-16 h-16 rounded-xl bg-ocean-light/30 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Nội dung đang được cập nhật
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Chú giải chi tiết cho từng Chương (Chapter) và Nhóm (Heading) trong Biểu thuế sẽ được bổ sung trong thời gian tới.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.wcoomd.org/en/topics/nomenclature/instrument-and-tools/hs-nomenclature-2022-edition/hs-nomenclature-2022-edition.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Xem trên WCO
              </a>
              <Link
                to="/search"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Tra cứu HS code
              </Link>
            </div>
          </div>

          {/* Sections Structure Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { section: "Phần I", title: "Động vật sống; các sản phẩm từ động vật", chapters: "Chương 01-05" },
              { section: "Phần II", title: "Các sản phẩm thực vật", chapters: "Chương 06-14" },
              { section: "Phần III", title: "Mỡ và dầu động vật hoặc thực vật", chapters: "Chương 15" },
              { section: "Phần IV", title: "Thực phẩm chế biến; đồ uống, rượu và dấm", chapters: "Chương 16-24" },
              { section: "Phần V", title: "Khoáng sản", chapters: "Chương 25-27" },
              { section: "Phần VI", title: "Sản phẩm của ngành công nghiệp hóa chất", chapters: "Chương 28-38" },
              { section: "Phần VII", title: "Plastic và các sản phẩm bằng plastic; cao su", chapters: "Chương 39-40" },
              { section: "Phần XVI", title: "Máy và thiết bị cơ khí; thiết bị điện", chapters: "Chương 84-85" },
            ].map((item) => (
              <div
                key={item.section}
                className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <p className="text-xs text-primary font-medium mb-1">{item.section}</p>
                <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.chapters}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChapterNotes;
