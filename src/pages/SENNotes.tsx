import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home, FileText, ExternalLink, Eye } from "lucide-react";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// SEN Notes data structure - content to be filled in later
const senNotesData = [
  {
    id: "section-1",
    title: "Phần I - Động vật sống và các sản phẩm từ động vật",
    chapters: [
      { id: "ch-01", title: "Chương 01 - Động vật sống", content: "" },
      { id: "ch-02", title: "Chương 02 - Thịt và phụ phẩm dạng thịt ăn được sau giết mổ", content: "" },
      { id: "ch-03", title: "Chương 03 - Cá và động vật giáp xác, động vật thân mềm", content: "" },
      { id: "ch-04", title: "Chương 04 - Sản phẩm bơ sữa; trứng chim và trứng gia cầm", content: "" },
      { id: "ch-05", title: "Chương 05 - Các sản phẩm khác có nguồn gốc từ động vật", content: "" },
    ],
  },
  {
    id: "section-2",
    title: "Phần II - Các sản phẩm thực vật",
    chapters: [
      { id: "ch-06", title: "Chương 06 - Cây sống và các loại cây trồng khác", content: "" },
      { id: "ch-07", title: "Chương 07 - Rau và một số loại củ, thân củ, rễ ăn được", content: "" },
      { id: "ch-08", title: "Chương 08 - Quả và quả hạch ăn được", content: "" },
      { id: "ch-09", title: "Chương 09 - Cà phê, chè, chè Paragoay và các loại gia vị", content: "" },
      { id: "ch-10", title: "Chương 10 - Ngũ cốc", content: "" },
      { id: "ch-11", title: "Chương 11 - Các sản phẩm xay xát", content: "" },
      { id: "ch-12", title: "Chương 12 - Hạt và quả có dầu", content: "" },
      { id: "ch-13", title: "Chương 13 - Nhựa cánh kiến đỏ, gôm, nhựa cây", content: "" },
      { id: "ch-14", title: "Chương 14 - Vật liệu thực vật dùng để tết bện", content: "" },
    ],
  },
  {
    id: "section-3",
    title: "Phần III - Mỡ và dầu động vật, thực vật",
    chapters: [
      { id: "ch-15", title: "Chương 15 - Mỡ và dầu động vật hoặc thực vật", content: "" },
    ],
  },
  {
    id: "section-4",
    title: "Phần IV - Thực phẩm chế biến; đồ uống, rượu mạnh và giấm",
    chapters: [
      { id: "ch-16", title: "Chương 16 - Các chế phẩm từ thịt, cá", content: "" },
      { id: "ch-17", title: "Chương 17 - Đường và các loại kẹo đường", content: "" },
      { id: "ch-18", title: "Chương 18 - Ca cao và các chế phẩm từ ca cao", content: "" },
      { id: "ch-19", title: "Chương 19 - Chế phẩm từ ngũ cốc, bột, tinh bột", content: "" },
      { id: "ch-20", title: "Chương 20 - Chế phẩm từ rau, quả, quả hạch", content: "" },
      { id: "ch-21", title: "Chương 21 - Các chế phẩm ăn được khác", content: "" },
      { id: "ch-22", title: "Chương 22 - Đồ uống, rượu mạnh và giấm", content: "" },
      { id: "ch-23", title: "Chương 23 - Phế liệu và phế thải từ ngành công nghiệp thực phẩm", content: "" },
      { id: "ch-24", title: "Chương 24 - Thuốc lá và các sản phẩm thay thế thuốc lá", content: "" },
    ],
  },
  {
    id: "section-5",
    title: "Phần V - Khoáng sản",
    chapters: [
      { id: "ch-25", title: "Chương 25 - Muối; lưu huỳnh; đất và đá", content: "" },
      { id: "ch-26", title: "Chương 26 - Quặng, xỉ và tro", content: "" },
      { id: "ch-27", title: "Chương 27 - Nhiên liệu khoáng, dầu khoáng", content: "" },
    ],
  },
  {
    id: "section-6",
    title: "Phần VI - Sản phẩm của ngành công nghiệp hóa chất",
    chapters: [
      { id: "ch-28", title: "Chương 28 - Hóa chất vô cơ", content: "" },
      { id: "ch-29", title: "Chương 29 - Hóa chất hữu cơ", content: "" },
      { id: "ch-30", title: "Chương 30 - Dược phẩm", content: "" },
      { id: "ch-31", title: "Chương 31 - Phân bón", content: "" },
      { id: "ch-32", title: "Chương 32 - Các chất chiết xuất dùng để thuộc da hoặc nhuộm", content: "" },
      { id: "ch-33", title: "Chương 33 - Tinh dầu và các chất tựa nhựa", content: "" },
      { id: "ch-34", title: "Chương 34 - Xà phòng, các chất hữu cơ hoạt động bề mặt", content: "" },
      { id: "ch-35", title: "Chương 35 - Các chất chứa albumin; các dạng tinh bột biến tính", content: "" },
      { id: "ch-36", title: "Chương 36 - Chất nổ; các sản phẩm pháo", content: "" },
      { id: "ch-37", title: "Chương 37 - Vật liệu ảnh và điện ảnh", content: "" },
      { id: "ch-38", title: "Chương 38 - Các sản phẩm hóa chất khác", content: "" },
    ],
  },
  {
    id: "section-7",
    title: "Phần VII - Plastic và các sản phẩm bằng plastic; cao su và các sản phẩm bằng cao su",
    chapters: [
      { id: "ch-39", title: "Chương 39 - Plastic và các sản phẩm bằng plastic", content: "" },
      { id: "ch-40", title: "Chương 40 - Cao su và các sản phẩm bằng cao su", content: "" },
    ],
  },
  {
    id: "section-8",
    title: "Phần VIII - Da sống, da thuộc, da lông và các sản phẩm từ da",
    chapters: [
      { id: "ch-41", title: "Chương 41 - Da sống (trừ da lông) và da thuộc", content: "" },
      { id: "ch-42", title: "Chương 42 - Các sản phẩm bằng da thuộc", content: "" },
      { id: "ch-43", title: "Chương 43 - Da lông và da lông nhân tạo", content: "" },
    ],
  },
  {
    id: "section-9",
    title: "Phần IX - Gỗ và các sản phẩm từ gỗ",
    chapters: [
      { id: "ch-44", title: "Chương 44 - Gỗ và các sản phẩm từ gỗ; than từ gỗ", content: "" },
      { id: "ch-45", title: "Chương 45 - Lie và các sản phẩm bằng lie", content: "" },
      { id: "ch-46", title: "Chương 46 - Sản phẩm từ rơm, cỏ giấy hoặc từ các vật liệu tết bện khác", content: "" },
    ],
  },
  {
    id: "section-10",
    title: "Phần X - Bột giấy từ gỗ hoặc từ nguyên liệu xơ sợi xenlulo khác",
    chapters: [
      { id: "ch-47", title: "Chương 47 - Bột giấy từ gỗ hoặc từ nguyên liệu xơ sợi xenlulo khác", content: "" },
      { id: "ch-48", title: "Chương 48 - Giấy và bìa; các sản phẩm làm từ bột giấy", content: "" },
      { id: "ch-49", title: "Chương 49 - Sách, báo, tranh ảnh và các sản phẩm khác của công nghiệp in", content: "" },
    ],
  },
  {
    id: "section-11",
    title: "Phần XI - Nguyên liệu dệt và các sản phẩm dệt",
    chapters: [
      { id: "ch-50", title: "Chương 50 - Tơ tằm", content: "" },
      { id: "ch-51", title: "Chương 51 - Lông cừu, lông động vật loại mịn hoặc loại thô", content: "" },
      { id: "ch-52", title: "Chương 52 - Bông", content: "" },
      { id: "ch-53", title: "Chương 53 - Xơ dệt gốc thực vật khác", content: "" },
      { id: "ch-54", title: "Chương 54 - Sợi filament nhân tạo", content: "" },
      { id: "ch-55", title: "Chương 55 - Xơ staple nhân tạo", content: "" },
      { id: "ch-56", title: "Chương 56 - Mền xơ, phớt và các sản phẩm không dệt", content: "" },
      { id: "ch-57", title: "Chương 57 - Thảm và các loại hàng dệt trải sàn khác", content: "" },
      { id: "ch-58", title: "Chương 58 - Các loại vải dệt thoi đặc biệt", content: "" },
      { id: "ch-59", title: "Chương 59 - Các loại vải dệt đã được ngâm tẩm, tráng, phủ hoặc ép", content: "" },
      { id: "ch-60", title: "Chương 60 - Các loại hàng dệt kim hoặc móc", content: "" },
      { id: "ch-61", title: "Chương 61 - Quần áo và hàng may mặc phụ trợ, dệt kim hoặc móc", content: "" },
      { id: "ch-62", title: "Chương 62 - Quần áo và hàng may mặc phụ trợ, không dệt kim hoặc móc", content: "" },
      { id: "ch-63", title: "Chương 63 - Các mặt hàng dệt đã hoàn thiện khác", content: "" },
    ],
  },
  {
    id: "section-12",
    title: "Phần XII - Giày, dép, mũ và các vật đội đầu khác",
    chapters: [
      { id: "ch-64", title: "Chương 64 - Giày, dép, ghệt và các sản phẩm tương tự", content: "" },
      { id: "ch-65", title: "Chương 65 - Mũ và các vật đội đầu khác", content: "" },
      { id: "ch-66", title: "Chương 66 - Ô, dù, ba toong, gậy tay cầm", content: "" },
      { id: "ch-67", title: "Chương 67 - Lông vũ và lông tơ chế biến", content: "" },
    ],
  },
  {
    id: "section-13",
    title: "Phần XIII - Sản phẩm bằng đá, thạch cao, xi măng",
    chapters: [
      { id: "ch-68", title: "Chương 68 - Sản phẩm bằng đá, thạch cao, xi măng", content: "" },
      { id: "ch-69", title: "Chương 69 - Sản phẩm gốm sứ", content: "" },
      { id: "ch-70", title: "Chương 70 - Thủy tinh và các sản phẩm bằng thủy tinh", content: "" },
    ],
  },
  {
    id: "section-14",
    title: "Phần XIV - Ngọc trai tự nhiên hoặc nuôi cấy, đá quý hoặc đá bán quý",
    chapters: [
      { id: "ch-71", title: "Chương 71 - Ngọc trai tự nhiên hoặc nuôi cấy, đá quý hoặc đá bán quý", content: "" },
    ],
  },
  {
    id: "section-15",
    title: "Phần XV - Kim loại cơ bản và các sản phẩm bằng kim loại cơ bản",
    chapters: [
      { id: "ch-72", title: "Chương 72 - Sắt và thép", content: "" },
      { id: "ch-73", title: "Chương 73 - Các sản phẩm bằng sắt hoặc thép", content: "" },
      { id: "ch-74", title: "Chương 74 - Đồng và các sản phẩm bằng đồng", content: "" },
      { id: "ch-75", title: "Chương 75 - Niken và các sản phẩm bằng niken", content: "" },
      { id: "ch-76", title: "Chương 76 - Nhôm và các sản phẩm bằng nhôm", content: "" },
      { id: "ch-77", title: "Chương 77 - (Dự phòng cho khả năng sử dụng trong tương lai)", content: "" },
      { id: "ch-78", title: "Chương 78 - Chì và các sản phẩm bằng chì", content: "" },
      { id: "ch-79", title: "Chương 79 - Kẽm và các sản phẩm bằng kẽm", content: "" },
      { id: "ch-80", title: "Chương 80 - Thiếc và các sản phẩm bằng thiếc", content: "" },
      { id: "ch-81", title: "Chương 81 - Kim loại cơ bản khác; gốm kim loại", content: "" },
      { id: "ch-82", title: "Chương 82 - Dụng cụ, đồ nghề, dao kéo và bộ đồ ăn", content: "" },
      { id: "ch-83", title: "Chương 83 - Các mặt hàng khác bằng kim loại cơ bản", content: "" },
    ],
  },
  {
    id: "section-16",
    title: "Phần XVI - Máy và các thiết bị cơ khí; thiết bị điện",
    chapters: [
      { id: "ch-84", title: "Chương 84 - Lò phản ứng hạt nhân, nồi hơi, máy và thiết bị cơ khí", content: "" },
      { id: "ch-85", title: "Chương 85 - Máy điện và thiết bị điện và các bộ phận của chúng", content: "" },
    ],
  },
  {
    id: "section-17",
    title: "Phần XVII - Xe cộ, phương tiện bay, tàu thuyền",
    chapters: [
      { id: "ch-86", title: "Chương 86 - Đầu máy xe lửa hoặc xe điện, toa xe", content: "" },
      { id: "ch-87", title: "Chương 87 - Xe cộ trừ phương tiện chạy trên đường xe lửa hoặc xe điện", content: "" },
      { id: "ch-88", title: "Chương 88 - Phương tiện bay, tàu vũ trụ", content: "" },
      { id: "ch-89", title: "Chương 89 - Tàu thủy, thuyền và các kết cấu nổi", content: "" },
    ],
  },
  {
    id: "section-18",
    title: "Phần XVIII - Dụng cụ và thiết bị quang học, nhiếp ảnh, điện ảnh",
    chapters: [
      { id: "ch-90", title: "Chương 90 - Dụng cụ và thiết bị quang học, nhiếp ảnh, điện ảnh", content: "" },
      { id: "ch-91", title: "Chương 91 - Đồng hồ cá nhân và đồng hồ thời gian", content: "" },
      { id: "ch-92", title: "Chương 92 - Nhạc cụ; các bộ phận và phụ kiện của các loại nhạc cụ", content: "" },
    ],
  },
  {
    id: "section-19",
    title: "Phần XIX - Vũ khí và đạn; các bộ phận và phụ kiện của chúng",
    chapters: [
      { id: "ch-93", title: "Chương 93 - Vũ khí và đạn; các bộ phận và phụ kiện của chúng", content: "" },
    ],
  },
  {
    id: "section-20",
    title: "Phần XX - Hàng hóa và sản phẩm khác",
    chapters: [
      { id: "ch-94", title: "Chương 94 - Đồ nội thất; bộ đồ giường, đệm, khung đệm", content: "" },
      { id: "ch-95", title: "Chương 95 - Đồ chơi, thiết bị trò chơi và dụng cụ thể thao", content: "" },
      { id: "ch-96", title: "Chương 96 - Các mặt hàng khác", content: "" },
    ],
  },
  {
    id: "section-21",
    title: "Phần XXI - Các tác phẩm nghệ thuật, đồ sưu tầm và đồ cổ",
    chapters: [
      { id: "ch-97", title: "Chương 97 - Các tác phẩm nghệ thuật, đồ sưu tầm và đồ cổ", content: "" },
    ],
  },
];

const SENNotes = () => {
  const canonicalUrl = useCanonicalUrl();

  return (
    <>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <title>Chú giải bổ sung SEN ASEAN | HSTC</title>
        <meta name="description" content="Selective Explanatory Notes (SEN) - Chú giải bổ sung của ASEAN hỗ trợ phân loại hàng hóa theo Danh mục AHTN." />
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
          <span className="text-sm text-foreground">Chú giải SEN</span>
        </div>

        {/* Page Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Chú giải bổ sung SEN
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Selective Explanatory Notes (SEN) - Chú giải SEN của ASEAN.
          </p>
          
          {/* External link */}
          <a
            href="https://docs.google.com/document/d/1QQnA_PCmJDmmbZaghnrTdgsVqNt-NDNy/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Tải văn bản pháp lý về Chú giải SEN
          </a>
        </div>

        {/* SEN Notes Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {senNotesData.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-border rounded-xl bg-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-10 h-10 rounded-lg bg-amber/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-amber" />
                    </div>
                    <span className="font-semibold text-foreground">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-2 pt-2">
                    {section.chapters.map((chapter) => {
                      // Extract chapter number from id (e.g., "ch-01" -> 1)
                      const chapterNum = parseInt(chapter.id.replace('ch-', ''));
                      
                      return (
                        <div key={chapter.id} className="border border-border/50 rounded-lg bg-background/50 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-left text-muted-foreground text-sm flex-1">
                              {chapter.title}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-2 shrink-0"
                              onClick={() => window.open(`/chu-giai-sen/full/${chapterNum}`, '_blank')}
                            >
                              <Eye className="w-4 h-4" />
                              Xem chi tiết
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Info Box */}
          <div className="mt-12 p-6 rounded-xl bg-amber/10 border border-amber/30">
            <h3 className="font-semibold text-foreground mb-3">Về Chú giải SEN</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Chú giải SEN được xây dựng như một công cụ hỗ trợ các nước thành viên ASEAN để phân loại hàng hóa một số mặt hàng cụ thể được chi tiết ở cấp độ 8 số trong Danh mục AHTN
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Tập trung vào các hàng hoá có đặc điểm kỹ thuật phức tạp hoặc mới xuất hiện trên thị trường
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber">•</span>
                Cung cấp hướng dẫn chi tiết để đảm bảo tính thống nhất trong phân loại giữa các quốc gia
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default SENNotes;
