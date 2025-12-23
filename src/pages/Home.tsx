import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, Scale, Globe, ArrowRight } from "lucide-react";
import containerImg from "@/assets/container.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      <main>
        {/* Hero / Middle Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Tra cứu mã HS code <span className="text-gradient">nhanh chóng</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              Trang này cung cấp công cụ giúp tra cứu mã số HS code dựa trên mô tả của hàng hoá
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
                  Bạn nên tham khảo thêm các Chú giải và tuyển tập ý kiến phân loại sau khi lọc các mã HS code dựa trên mô tả để xác định mã HS code phù hợp nhất với hàng hoá.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features / Bottom Section */}
        <section className="container mx-auto px-4 py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tài liệu tham khảo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các nguồn tài liệu hỗ trợ việc phân loại hàng hoá theo danh mục HS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              title="Quy tắc phân loại"
              description="6 Quy tắc tổng quát giải thích cách phân loại hàng hoá theo danh mục HS (GRI 1-6)"
              icon={Scale}
              to="/gri-rules"
              iconBgClass="bg-primary/10"
            />
            <FeatureCard
              title="Chú giải phân loại"
              description="Chú giải chi tiết theo Chương và Nhóm hàng trong Biểu thuế"
              icon={BookOpen}
              to="/chapter-notes"
              iconBgClass="bg-ocean-light/30"
            />
            <FeatureCard
              title="Chú giải SEN"
              description="Chú giải bổ sung (Selective Explanatory Notes) cho các hàng hoá khó phân loại"
              icon={FileText}
              to="/sen-notes"
              iconBgClass="bg-amber/20"
            />
            <FeatureCard
              title="Tuyển tập ý kiến phân loại của WCO"
              description="Các quyết định phân loại của Tổ chức Hải quan Thế giới cho hàng hoá gây tranh cãi"
              icon={Globe}
              to="/wco-compendium"
              iconBgClass="bg-orange/20"
            />
          </div>
        </section>

        {/* Visual Banner */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={containerImg} 
                alt="Container logistics" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  Hỗ trợ nghiệp vụ khai báo hải quan
                </h3>
                <p className="text-sm md:text-base text-primary-foreground/80">
                  Công cụ tra cứu dành cho các chuyên viên hải quan, môi giới hải quan và doanh nghiệp xuất nhập khẩu
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
