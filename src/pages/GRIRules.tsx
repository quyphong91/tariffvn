import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, ChevronRight } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";

const GRIRules = () => {
  const canonicalUrl = useCanonicalUrl();
  const rules = [
    {
      id: "1",
      title: "Quy tắc 1",
      summary: "Phân loại dựa trên nội dung các nhóm và chú giải phần, chương",
      content: "Tên của các Phần, Chương hoặc Phân chương chỉ nhằm mục đích tham khảo; để đảm bảo tính pháp lý, việc phân loại phải được xác định theo nội dung các nhóm và bất kỳ chú giải nào của Phần hoặc Chương liên quan."
    },
    {
      id: "2a",
      title: "Quy tắc 2(a)",
      summary: "Hàng hoá chưa hoàn chỉnh hoặc chưa lắp ráp",
      content: "Một mặt hàng được phân loại vào một nhóm hàng thì mặt hàng đó ở dạng chưa hoàn chỉnh hoặc chưa hoàn thiện cũng thuộc nhóm đó, nếu đã có đặc trưng cơ bản của hàng hóa đó khi đã hoàn chỉnh hoặc hoàn thiện. Cũng phân loại như vậy đối với hàng hóa ở dạng hoàn chỉnh hay hoàn thiện hoặc đã có đặc trưng cơ bản của hàng hóa ở dạng hoàn chỉnh hay hoàn thiện (hoặc được phân loại vào dạng hàng hóa đã hoàn chỉnh hay hoàn thiện theo nội dung Quy tắc này), nhưng chưa lắp ráp hoặc tháo rời."
    },
    {
      id: "2b",
      title: "Quy tắc 2(b)",
      summary: "Hỗn hợp hoặc kết hợp vật liệu/chất",
      content: "Một nguyên liệu, một chất được phân loại trong một nhóm nào đó thì hỗn hợp hay hợp chất của nguyên liệu hoặc chất đó với những nguyên liệu hoặc chất khác cũng thuộc nhóm đó. Hàng hóa làm toàn bộ bằng một loại nguyên liệu hay một chất, hoặc làm một phần bằng nguyên liệu hay chất đó được phân loại trong cùng nhóm. Việc phân loại những hàng hóa làm bằng hai loại nguyên liệu hay hai chất trở lên phải tuân theo Quy tắc 3."
    },
    {
      id: "3a",
      title: "Quy tắc 3(a)",
      summary: "Nhóm mô tả cụ thể nhất",
      content: "Nhóm có mô tả cụ thể nhất sẽ được ưu tiên hơn các nhóm có mô tả khái quát khi thực hiện việc phân loại hàng hóa. Tuy nhiên, khi hai hay nhiều nhóm mà mỗi nhóm chỉ liên quan đến một phần của nguyên liệu hoặc chất chứa trong hàng hóa là hỗn hợp hay hợp chất, hoặc chỉ liên quan đến một phần của hàng hóa trong trường hợp hàng hóa đó ở dạng bộ được đóng gói để bán lẻ, thì những nhóm này được coi như thể hiện đặc trưng ngang nhau về những hàng hóa nói trên, ngay cả khi một trong số các nhóm đó có mô tả đầy đủ hơn hoặc chính xác hơn về những hàng hóa đó."
    },
    {
      id: "3b",
      title: "Quy tắc 3(b)",
      summary: "Hàng hoá hỗn hợp, bộ hàng - đặc trưng cơ bản",
      content: "Những hàng hóa hỗn hợp bao gồm nhiều nguyên liệu khác nhau hoặc những hàng hóa được làm từ nhiều bộ phận cấu thành khác nhau, và những hàng hóa ở dạng bộ để bán lẻ, nếu không phân loại được theo Quy tắc 3(a), thì phân loại theo nguyên liệu hoặc bộ phận cấu thành tạo ra đặc tính cơ bản của chúng, trong chừng mực tiêu chí này được áp dụng."
    },
    {
      id: "3c",
      title: "Quy tắc 3(c)",
      summary: "Nhóm có số thứ tự cuối cùng",
      content: "Khi hàng hóa không thể phân loại theo Quy tắc 3 (a) hoặc 3(b) nêu trên thì phân loại vào nhóm cuối cùng theo thứ tự đánh số trong số các nhóm tương đương được xem xét."
    },
    {
      id: "4",
      title: "Quy tắc 4",
      summary: "Hàng hoá giống nhất",
      content: "Hàng hoá không thể phân loại theo các quy tắc trên sẽ được phân loại vào nhóm phù hợp với hàng hoá giống chúng nhất."
    },
    {
      id: "5a",
      title: "Quy tắc 5(a)",
      summary: "Bao bì, hộp đựng đặc biệt",
      content: "Hộp đựng camera, hộp đựng nhạc cụ, bao súng, hộp đựng dụng cụ vẽ, hộp đựng trang sức và các bao bì tương tự, được định hình hoặc thiết kế đặc biệt để chứa một mặt hàng hoặc bộ hàng cụ thể, phù hợp để sử dụng lâu dài và đi kèm với mặt hàng mà chúng được dùng để chứa, sẽ được phân loại cùng với mặt hàng đó khi chúng thường được bán cùng nhau."
    },
    {
      id: "5b",
      title: "Quy tắc 5(b)",
      summary: "Bao bì thông thường",
      content: "Theo quy định của quy tắc 5(a), vật liệu đóng gói và bao bì đựng hàng hoá sẽ được phân loại cùng với hàng hoá nếu chúng thuộc loại thông thường được sử dụng để đóng gói hàng hoá đó."
    },
    {
      id: "6",
      title: "Quy tắc 6",
      summary: "Phân loại vào phân nhóm",
      content: "Để đảm bảo tính pháp lý, việc phân loại hàng hoá vào các phân nhóm của một nhóm phải được xác định theo nội dung của các phân nhóm đó và các chú giải phân nhóm liên quan, cũng như theo các quy tắc trên với những sửa đổi cần thiết, với điều kiện chỉ các phân nhóm cùng cấp mới có thể so sánh được."
    }
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Quy tắc phân loại hàng hóa GRI | HSTC</title>
        <meta name="description" content="6 quy tắc tổng quát giải thích việc phân loại hàng hóa theo Danh mục HS Code." />
      </Helmet>
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
          <span className="text-sm text-foreground">Quy tắc phân loại</span>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quy tắc tổng quát giải thích việc phân loại hàng hoá
          </h1>
          <p className="text-lg text-muted-foreground">
            6 Quy tắc tổng quát (General Rules of Interpretation - GRI) giải thích việc phân loại hàng hóa theo Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam dựa trên Hệ thống hài hòa mô tả và mã hóa hàng hóa của Tổ chức Hải quan thế giới (WCO) được ban hành kèm theo Thông tư 31/2022/TT-BTC.
          </p>
        </div>

        {/* Rules List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-card transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">{rule.id}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {rule.summary}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {rule.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Lưu ý:</strong> Đây là bản tóm tắt nội dung chính. Để có giá trị pháp lý, vui lòng tham khảo văn bản chi tiết ban hành kèm theo Thông tư 31/2022/TT-BTC.
            </p>
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </>
  );
};

export default GRIRules;
