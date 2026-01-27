import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { SEOHead } from "@/components/SEOHead";
import { Search, BookOpen, FileText, Scale, Globe, ArrowRight, Calculator, Newspaper, Sparkles, Calendar } from "lucide-react";
import { usePublishedArticles } from "@/hooks/useArticles";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

const Home = () => {
  const { data: articles, isLoading: articlesLoading } = usePublishedArticles();
  const latestArticles = articles?.slice(0, 4) || [];
  return (
    <>
      <SEOHead
        title="Tra cứu HS Code nhanh và toàn diện"
        description="HSTC là công cụ hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu."
        isHomepage={true}
      />
      <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Hero / Middle Section */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Description */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up">
              Tra cứu HS Code <span className="text-gradient"> nhanh và toàn diện </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "100ms" }}>
              HSTC là công cụ hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu 
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Link to="/tra-cuu-hs-code">
                <Button size="lg" className="gap-2 bg-navy hover:bg-navy/90 text-primary-foreground px-8 py-6 text-lg">
                  <Search className="w-5 h-5" />
                  Bắt đầu tra cứu HS Code
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Primary Tools Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              Công cụ tra cứu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              title="HSTC AI"
              description="Gửi yêu cầu tra cứu HS Code và nhận kết quả phân tích từ AI. Dịch vụ miễn phí, giới hạn số lượt mỗi ngày."
              icon={Sparkles}
              to="/ai-tra-cuu-hs"
              iconBgClass="bg-purple-500/20"
              badge="Beta"
            />
            <FeatureCard
              title="Tra cứu biểu thuế nhập khẩu"
              description="Tra cứu thuế biểu thuế nhập khẩu mới nhất năm 2026 cập nhật theo biểu thuế xuất nhập khẩu 2026"
              icon={Calculator}
              to="/tra-cuu-thue-nhap-khau"
              iconBgClass="bg-amber/20"
            />
          </div>
        </section>

        {/* Reference Materials Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Tài liệu tham khảo
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
            <FeatureCard
              title="Quy tắc phân loại HS"
              description="6 quy tắc tổng quát giải thích việc phân loại hàng hóa"
              icon={Scale}
              to="/quy-tac-phan-loai-hs"
              iconBgClass="bg-primary/10"
              variant="compact"
            />
            <FeatureCard
              title="Chú giải HS 2022"
              description="Chú giải chi tiết theo Chương và Nhóm hàng"
              icon={BookOpen}
              to="/chu-giai-hs"
              iconBgClass="bg-ocean-light/30"
              variant="compact"
            />
            <FeatureCard
              title="Chú giải SEN"
              description="Chú giải bổ sung ASEAN cấp 8 số"
              icon={FileText}
              to="/chu-giai-sen"
              iconBgClass="bg-amber/20"
              variant="compact"
            />
            <FeatureCard
              title="Tuyển tập WCO"
              description="Quyết định phân loại của Hải quan Thế giới"
              icon={Globe}
              to="/tuyen-tap-phan-loai-wco"
              iconBgClass="bg-orange/20"
              variant="compact"
            />
          </div>
        </section>

        {/* News Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-primary" />
              Tin tức & Cập nhật
            </h2>
            <Link 
              to="/tin-tuc" 
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              Xem tất cả
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Loading State */}
          {articlesLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-video w-full" />
                  <CardContent className="p-4 space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Articles Grid */}
          {!articlesLoading && latestArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {latestArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/tin-tuc/${article.slug}`}
                  className="group block"
                >
                  <Card className="h-full overflow-hidden shadow-sm hover:shadow-card hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={article.image_url || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={article.published_at}>
                          {format(new Date(article.published_at), "dd/MM/yyyy", { locale: vi })}
                        </time>
                      </div>
                      <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!articlesLoading && latestArticles.length === 0 && (
            <div className="max-w-md">
              <FeatureCard
                title="Tin tức"
                description="Cập nhật chính sách hải quan mới nhất"
                icon={Newspaper}
                to="/tin-tuc"
                iconBgClass="bg-primary/15"
                variant="compact"
              />
            </div>
          )}
        </section>

        {/* Personal Message Section */}
        <section className="container mx-auto px-4 py-8 border-t border-border/50">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-muted/30 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                HSTC là dự án cá nhân nhằm cung cấp công cụ miễn phí về tra cứu HS Code và biểu thuế nhập khẩu cho các anh chị em công tác trong lĩnh vực xuất nhập khẩu. Dự án hiện vẫn đang được tiếp tục phát triển và hoàn thiện nhằm đem lại chất lượng và trải nghiệm tốt nhất cho người dùng. Trong quá trình phát triển và hoàn thiện, dự án không tránh khỏi các lỗi và sự cố không mong muốn. Nếu có bất kỳ lỗi phát sinh hoặc đóng góp ý kiến, vui lòng gửi ý kiến đến email: <a href="mailto:hscodetracuu@gmail.com" className="text-primary hover:underline font-medium">hscodetracuu@gmail.com</a>. Trân trọng.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      </div>
    </>
  );
};

export default Home;
