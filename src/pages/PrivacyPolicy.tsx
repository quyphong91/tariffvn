import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Cookie, FileText, Link2, RefreshCw, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { name: "Trang chủ", url: "https://tracuuhs.com" },
    { name: "Chính sách bảo mật", url: "https://tracuuhs.com/chinh-sach-bao-mat" },
  ];

  return (
    <>
      <SEOHead
        title="Chính sách bảo mật - HSTC"
        description="Chính sách bảo mật của Tracuuhs.com - Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn."
        breadcrumbs={breadcrumbs}
      />
      <div className="min-h-screen flex flex-col bg-gradient-hero">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chính sách <span className="text-gradient">bảo mật</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Cập nhật lần cuối: 28/01/2026
              </p>
            </div>

            {/* Main Content */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6 md:p-8 space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Chào mừng bạn truy cập vào Tracuuhs.com. Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ thông tin cá nhân của người dùng. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn sử dụng công cụ tra cứu mã HS và các dịch vụ liên quan trên website của chúng tôi.
                  </p>
                </section>

                <Separator />

                {/* Section 1: Log Files */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">1. Thu thập thông tin Log Files (Tệp nhật ký)</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Giống như nhiều website khác, Tracuuhs.com sử dụng các tệp nhật ký (log files). Thông tin bên trong các tệp này bao gồm địa chỉ giao thức internet (IP), loại trình duyệt, Nhà cung cấp dịch vụ Internet (ISP), dấu thời gian (date/time stamp), các trang giới thiệu/thoát và số lượng nhấp chuột. Những thông tin này được sử dụng để phân tích xu hướng, quản trị trang web, theo dõi chuyển động của người dùng trên trang web và thu thập thông tin nhân khẩu học. Địa chỉ IP và các thông tin khác không được liên kết với bất kỳ thông tin nào có khả năng nhận dạng cá nhân.
                  </p>
                </section>

                <Separator />

                {/* Section 2: Cookies */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean-light/30 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">2. Cookies và Web Beacons</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Tracuuhs.com sử dụng cookie để lưu trữ thông tin về sở thích của khách truy cập, ghi lại thông tin cụ thể về các trang mà người dùng truy cập, tùy chỉnh nội dung trang web dựa trên loại trình duyệt của khách truy cập hoặc thông tin khác mà khách truy cập gửi qua trình duyệt của họ.
                  </p>
                </section>

                <Separator />

                {/* Section 3: Google AdSense */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">3. Đối tác quảng cáo Google AdSense</h2>
                  </div>
                  <div className="space-y-3 pl-13">
                    <p className="text-muted-foreground leading-relaxed">
                      Chúng tôi có thể sử dụng Google AdSense để hiển thị quảng cáo trên trang web.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Google, với tư cách là nhà cung cấp bên thứ ba, sử dụng cookie để phân phát quảng cáo trên Tracuuhs.com.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Việc Google sử dụng cookie DART cho phép Google và các đối tác của họ phân phát quảng cáo cho người dùng của chúng tôi dựa trên lượt truy cập của họ vào Tracuuhs.com và/hoặc các trang web khác trên Internet.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Người dùng có thể chọn không tham gia sử dụng cookie DART bằng cách truy cập Chính sách bảo mật của mạng nội dung và quảng cáo Google tại đường dẫn sau:{" "}
                      <a 
                        href="https://policies.google.com/technologies/ads" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        https://policies.google.com/technologies/ads
                      </a>
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Section 4: Disclaimer */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">4. Miễn trừ trách nhiệm về Nội dung & Mã HS</h2>
                  </div>
                  <div className="space-y-3 pl-13">
                    <p className="text-muted-foreground leading-relaxed">
                      Tracuuhs.com là một công cụ hỗ trợ tra cứu thông tin về mã HS và các văn bản pháp luật liên quan đến lĩnh vực Xuất nhập khẩu.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Mọi thông tin, mã số HS, và nội dung tư vấn trên website chỉ mang tính chất tham khảo.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Các kết quả tra cứu không thay thế cho các văn bản chính thức của cơ quan Nhà nước hoặc sự tư vấn chuyên môn từ các chuyên gia hải quan.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh trực tiếp hoặc gián tiếp từ việc sử dụng thông tin trên website này để khai báo hải quan. Người dùng cần đối chiếu với Biểu thuế XNK hiện hành và tham vấn cơ quan Hải quan để có kết quả chính xác nhất.
                    </p>
                  </div>
                </section>

                <Separator />

                {/* Section 5: External Links */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Link2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">5. Liên kết đến các trang web khác</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Trang web của chúng tôi có thể chứa các liên kết đến các trang web khác. Xin lưu ý rằng chúng tôi không chịu trách nhiệm về nội dung hoặc thực tiễn bảo mật của các trang web đó. Chúng tôi khuyến khích người dùng đọc chính sách bảo mật của bất kỳ trang web nào khác thu thập thông tin cá nhân.
                  </p>
                </section>

                <Separator />

                {/* Section 6: Policy Changes */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean-light/30 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">6. Thay đổi chính sách</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Chúng tôi có quyền cập nhật hoặc thay đổi Chính sách bảo mật này bất cứ lúc nào. Mọi thay đổi sẽ được đăng tải trên trang này. Việc bạn tiếp tục sử dụng trang web sau khi có các thay đổi đồng nghĩa với việc bạn chấp nhận các thay đổi đó.
                  </p>
                </section>

                <Separator />

                {/* Section 7: Contact */}
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">7. Thông tin liên hệ</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi qua email:{" "}
                    <a 
                      href="mailto:hscodetracuu@gmail.com" 
                      className="text-primary hover:underline"
                    >
                      hscodetracuu@gmail.com
                    </a>
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
