import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, FileText, Scale, Globe, ArrowRight, Calculator, Newspaper } from "lucide-react";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero / Middle Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Tra cứu HS code <span className="text-gradient"> nhanh chóng </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              HSTC là công cụ hỗ trợ tra cứu mã số HS code nhanh chóng và toàn diện tích hợp các thông tin về chú giải
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
                  Lưu ý: Các kết quả tìm kiếm của công cụ chỉ mang tính chất hỗ trợ tra cứu và tham khảo, không có giá trị pháp lý. Hiện page cũng đang thu thập và xây dựng dữ liệu về các kết quả phân tích phân loại từ cơ quan Hải quan để các bạn có thêm nguồn thông tin để tham khảo.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <FeatureCard
              title="Tra cứu biểu thuế suất nhập khẩu 2026"
              description="Tra cứu thuế suất nhập khẩu theo mã HS, bao gồm MFN và các FTA: EVFTA, CPTPP, RCEP, ACFTA..."
              icon={Calculator}
              to="/tariff-lookup"
              iconBgClass="bg-amber/20"
            />
            <FeatureCard
              title="Quy tắc phân loại hàng hóa và xác định HS code"
              description="6 Quy tắc tổng quát giải thích cách xác định HS code và phân loại hàng hoá"
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
            <FeatureCard
              title="Tin tức & Bài viết"
              description="Cập nhật thông tin mới nhất về HS Code, biểu thuế và chính sách hải quan"
              icon={Newspaper}
              to="/news"
              iconBgClass="bg-primary/15"
            />
          </div>
        </section>

        {/* Personal Message Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                HSTC là dự án cá nhân nhằm cung cấp công cụ miễn phí về tra cứu HS và biểu thuế cho các anh chị em công tác trong lĩnh vực xuất nhập khẩu. Dự án hiện vẫn đang được tiếp tục phát triển và hoàn thiện nhằm đem lại chất lượng và trải nghiệm tốt nhất cho người dùng. Trong quá trình phát triển và hoàn thiện, dự án không tránh khỏi các lỗi và sự cố không mong muốn. Nếu có bất kỳ lỗi phát sinh hoặc đóng góp ý kiến, vui lòng gửi ý kiến đến email: <a href="mailto:hscodetracuu@gmail.com" className="text-primary hover:underline font-medium">hscodetracuu@gmail.com</a>. Trân trọng.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
