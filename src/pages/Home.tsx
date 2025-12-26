import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, Scale, Globe, ArrowRight } from "lucide-react";


const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-hero overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col overflow-auto">
        {/* Hero / Middle Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Tra cứu mã HS code <span className="text-gradient"> tiện lợi và nhanh chóng</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              Trang này hỗ trợ bạn tra cứu mã số HS code dựa trên mô tả của hàng hoá
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link to="/search">
                <Button size="lg" className="gap-2 bg-navy hover:bg-navy/90 text-primary-foreground px-8 py-6 text-lg">
                  <Search className="w-5 h-5" />
                  Truy cập công cụ tra cứu
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Note */}
            <div className="mt-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bạn nên tham khảo thêm các Chú giải và Tuyển tập ý kiến phân loại sau khi lọc các mã HS code dựa trên mô tả để xác định mã HS code phù hợp nhất với hàng hoá.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Bottom Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tài liệu tham khảo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các nguồn tài liệu hỗ trợ việc tra cứu HS code và phân loại hàng hoá theo Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              title="Quy tắc phân loại hàng hóa và xác định HS code"
              description="6 Quy tắc tổng quát giải thích cách xác định HS code và phân loại hàng hoá theo Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam"
              icon={Scale}
              to="/gri-rules"
              iconBgClass="bg-primary/10"
            />
            <FeatureCard
              title="Chú giải phân loại và xác định HS code"
              description="Chú giải chi tiết theo Chương và Nhóm hàng trong Biểu thuế"
              icon={BookOpen}
              to="/chapter-notes"
              iconBgClass="bg-ocean-light/30"
            />
            <FeatureCard
              title="Chú giải bổ sung SEN"
              description="Chú giải bổ sung (Selective Explanatory Notes) cho một số loại hàng hoá"
              icon={FileText}
              to="/sen-notes"
              iconBgClass="bg-amber/20"
            />
            <FeatureCard
              title="Tuyển tập ý kiến phân loại hàng hóa của WCO"
              description="Các quyết định phân loại HS code của Tổ chức Hải quan Thế giới cho các hàng hoá mới hoặc phức tạp"
              icon={Globe}
              to="/wco-compendium"
              iconBgClass="bg-orange/20"
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
