import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Target, Users, Shield, MessageSquare } from "lucide-react";

const AboutHSTC = () => {
  const breadcrumbs = [
    { name: "Trang chủ", url: "https://tracuuhs.com" },
    { name: "Về HSTC", url: "https://tracuuhs.com/gioi-thieu" },
  ];

  return (
    <>
      <SEOHead
        title="Về HSTC - Giới thiệu công cụ tra cứu HS Code"
        description="HSTC là công cụ hỗ trợ tra cứu mã số HS Code miễn phí, giúp doanh nghiệp XNK và khai báo hải quan tiết kiệm thời gian và giảm thiểu rủi ro."
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Về <span className="text-gradient">HSTC</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Công cụ tra cứu HS Code miễn phí cho cộng đồng XNK
              </p>
            </div>

            {/* Main Content */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6 md:p-8 space-y-8">
                {/* Challenge Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Thách thức trong ngành XNK</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Trong lĩnh vực Xuất nhập khẩu và Logistics, việc xác định chính xác mã HS luôn là một trong những thách thức lớn nhất. Một mã HS sai không chỉ dẫn đến việc tính toán thuế sai lệch mà còn tiềm ẩn rủi ro bị xử phạt hành chính, gây ách tắc hàng hóa tại cảng.
                  </p>
                </section>

                <Separator />

                {/* Mission Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean-light/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Sứ mệnh của HSTC</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Thấu hiểu những khó khăn đó, HSTC được thành lập với mục tiêu đơn giản hóa quy trình tra cứu, giúp các anh chị khai báo hải quan và doanh nghiệp XNK tiết kiệm thời gian và giảm thiểu rủi ro tối đa.
                  </p>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    HSTC là dự án cá nhân được phát triển với mục đích hỗ trợ cộng đồng. Dự án hiện vẫn đang được tiếp tục phát triển và hoàn thiện nhằm đem lại chất lượng và trải nghiệm tốt nhất cho người dùng.
                  </p>
                </section>

                <Separator />

                {/* Disclaimer Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Lưu ý quan trọng</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Mặc dù chúng tôi luôn nỗ lực hết sức để đảm bảo dữ liệu chính xác và cập nhật nhất, nhưng các thông tin trên website chỉ mang tính chất tham khảo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Chúng tôi khuyến nghị người dùng luôn đối chiếu lại với văn bản gốc của cơ quan Nhà nước có thẩm quyền trước khi thực hiện các thủ tục khai báo chính thức.
                  </p>
                </section>

                <Separator />

                {/* Contact Section */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Liên hệ</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Chúng tôi luôn lắng nghe ý kiến đóng góp của cộng đồng để hoàn thiện sản phẩm mỗi ngày. Nếu bạn có bất kỳ thắc mắc, góp ý hoặc phát hiện lỗi dữ liệu, xin vui lòng liên hệ:
                  </p>
                  <div className="pl-13">
                    <a 
                      href="mailto:hscodetracuu@gmail.com" 
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <Mail className="w-4 h-4" />
                      hscodetracuu@gmail.com
                    </a>
                  </div>
                </section>

                {/* Thank You */}
                <div className="pt-4 text-center">
                  <p className="text-foreground font-medium">
                    Cảm ơn bạn đã tin tưởng và sử dụng HSTC.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutHSTC;
