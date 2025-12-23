import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, ChevronRight } from "lucide-react";

const GRIRules = () => {
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
      content: "Một mặt hàng được đề cập trong một nhóm cũng bao gồm mặt hàng đó ở dạng chưa hoàn chỉnh hoặc chưa hoàn thiện, miễn là đã có đặc trưng cơ bản của mặt hàng hoàn chỉnh hoặc hoàn thiện. Cũng bao gồm mặt hàng hoàn chỉnh hoặc hoàn thiện ở dạng chưa lắp ráp hoặc tháo rời."
    },
    {
      id: "2b",
      title: "Quy tắc 2(b)",
      summary: "Hỗn hợp hoặc kết hợp vật liệu/chất",
      content: "Một vật liệu hoặc chất được đề cập trong một nhóm cũng bao gồm vật liệu hoặc chất đó khi hỗn hợp hoặc kết hợp với các vật liệu hoặc chất khác. Hàng hoá làm từ một vật liệu hoặc chất cũng bao gồm hàng hoá làm từ toàn bộ hoặc một phần vật liệu hoặc chất đó."
    },
    {
      id: "3a",
      title: "Quy tắc 3(a)",
      summary: "Nhóm mô tả cụ thể nhất",
      content: "Khi có thể phân loại hàng hoá vào hai hoặc nhiều nhóm theo quy tắc 2(b) hoặc vì bất kỳ lý do nào khác, nhóm mô tả cụ thể nhất sẽ được ưu tiên hơn các nhóm mô tả chung hơn."
    },
    {
      id: "3b",
      title: "Quy tắc 3(b)",
      summary: "Hàng hoá hỗn hợp, bộ hàng - đặc trưng cơ bản",
      content: "Hàng hoá hỗn hợp, hàng hoá bao gồm các vật liệu khác nhau hoặc được làm từ các thành phần khác nhau, và hàng hoá đóng gói thành bộ để bán lẻ, nếu không thể phân loại theo quy tắc 3(a), sẽ được phân loại theo vật liệu hoặc thành phần tạo nên đặc trưng cơ bản của chúng."
    },
    {
      id: "3c",
      title: "Quy tắc 3(c)",
      summary: "Nhóm có số thứ tự cuối cùng",
      content: "Khi không thể phân loại hàng hoá theo quy tắc 3(a) hoặc 3(b), hàng hoá sẽ được phân loại vào nhóm có số thứ tự cuối cùng trong số các nhóm tương đương được xem xét."
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
            6 Quy tắc tổng quát (General Rules of Interpretation - GRI) là nền tảng pháp lý để phân loại hàng hoá theo Hệ thống hài hoà HS.
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
              <strong>Lưu ý:</strong> Đây là bản dịch tham khảo. Để có giá trị pháp lý, vui lòng tham khảo văn bản chính thức từ Tổ chức Hải quan Thế giới (WCO) hoặc các quy định của cơ quan hải quan Việt Nam.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GRIRules;
