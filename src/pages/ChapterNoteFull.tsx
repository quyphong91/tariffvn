import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChapterNoteFull = () => {
  const { chapterNumber } = useParams<{ chapterNumber: string }>();
  const chapter = parseInt(chapterNumber || "1");

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
          <Link to="/chapter-notes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Chú giải phân loại
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-sm text-foreground">Chương {chapter}</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link to="/chapter-notes">
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronLeft className="w-4 h-4" />
              Quay lại
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chú giải đầy đủ - Chương {chapter}
          </h1>
          <p className="text-lg text-muted-foreground">
            Nội dung chú giải chi tiết của Chương {chapter} sẽ được cập nhật sau.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-xl border border-border bg-card text-center">
            <p className="text-muted-foreground">
              Nội dung chú giải đầy đủ cho Chương {chapter} đang được cập nhật...
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChapterNoteFull;
