export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

// ============================================
// HƯỚNG DẪN THÊM BÀI VIẾT MỚI:
// ============================================
// 1. Copy một object bài viết mẫu bên dưới
// 2. Thay đổi các thông tin: id, slug, title, date, excerpt, coverImage
// 3. Viết nội dung trong field "content" sử dụng Markdown:
//    - **in đậm**
//    - *in nghiêng*
//    - ## Tiêu đề
//    - - Danh sách
//    - [Link](url)
//    - ![Hình ảnh](url)
// ============================================

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ma--so-hs-code-la-gi",
    title: "Mã số HS Code là gì",
    date: "2024-12-28",
    excerpt: "Tìm hiểu thông tin cơ bản về mã HS Code và tầm quan trọng của việc xác định đúng mã số HS Code.",
    coverImage: "https://www.tonlexing.com/what-is-hs-code/",
    content: `
## Giới thiệu về mã HS Code

Hệ thống Mô tả và Mã hóa Hàng hóa Hài hòa, thường được gọi là "Hệ thống Hài hòa" hoặc đơn giản là "HS", là một hệ thống danh pháp sản phẩm quốc tế đa dụng được phát triển bởi Tổ chức Hải quan Thế giới (WCO).

Hệ thống này bao gồm hơn 5.000 nhóm hàng hóa được sắp xếp theo cấu trúc pháp lý và logic, và được hỗ trợ bởi các quy tắc rõ ràng để đạt được sự phân loại thống nhất.

Hệ thống này được hơn 200 quốc gia và nền kinh tế sử dụng làm cơ sở cho biểu thuế hải quan và thu thập số liệu thống kê thương mại quốc tế. Việt Nam bắt đầu tham gia Công ước Quốc tế về Hệ thống hài hòa hàng hóa này từ năm 1998 theo Quyết định số 49/QĐ-CTN ngày 06/3/1998 của Chủ tịch nước CHXHCN Việt Nam.

Hiện nay, Danh mục hàng hóa xuất nhập khẩu của Việt Nam được quy định tại Thông tư 31/2022/TT-BTC ngày 08/06/2022. Bạn có thể tham khảo cấu trúc của Danh mục tại trang đường dẫn: https://tracuuhs.com/#/chapter-notes.

## Tại sao mã HS code lại quan trọng

Mã HS (Harmonized System) là hệ thống mã số hàng hóa quốc tế được sử dụng để phân loại hàng hóa trong thương mại quốc tế. Việc xác định đúng mã HS Code là **vô cùng quan trọng** vì nó ảnh hưởng trực tiếp đến:

- Thuế suất nhập khẩu/xuất khẩu
- Các thủ tục hải quan
- Ưu đãi theo các Hiệp định thương mại tự do (FTA)

## Lưu ý quan trọng

> Việc phân loại sai mã HS có thể dẫn đến phạt hành chính và truy thu thuế. Hãy tham khảo ý kiến chuyên gia khi cần thiết.

## Kết luận

Phân loại hàng hóa theo mã HS Code đòi hỏi kiến thức và kinh nghiệm. Sử dụng các công cụ tra cứu và tài liệu tham khảo để đảm bảo độ chính xác.
    `.trim()
  },
  {
    id: "2",
    slug: "huong-dan-phan-loai-hang-hoa-theo-hs-code",
    title: "Hướng dẫn phân loại hàng hóa theo mã HS Code",
    date: "2024-12-28",
    excerpt: "Tìm hiểu các bước cơ bản để xác định mã HS Code chính xác cho hàng hóa xuất nhập khẩu tại Việt Nam.",
    coverImage: "/placeholder.svg",
    content: `
## Giới thiệu về mã HS Code

Mã HS (Harmonized System) là hệ thống mã số hàng hóa quốc tế được sử dụng để phân loại hàng hóa trong thương mại quốc tế. Việc xác định đúng mã HS Code là **vô cùng quan trọng** vì nó ảnh hưởng trực tiếp đến:

- Thuế suất nhập khẩu/xuất khẩu
- Các thủ tục hải quan
- Ưu đãi theo các Hiệp định thương mại tự do (FTA)

## Các bước phân loại hàng hóa

### Bước 1: Xác định bản chất hàng hóa

Trước tiên, bạn cần hiểu rõ:
- Thành phần cấu tạo của hàng hóa
- Công dụng chính
- Nguyên liệu sản xuất

### Bước 2: Tham khảo Danh mục HS

Sử dụng công cụ tra cứu để tìm các mã HS phù hợp dựa trên mô tả hàng hóa.

### Bước 3: Áp dụng 6 Quy tắc tổng quát (GRI)

Các quy tắc GRI giúp xác định mã HS chính xác khi có nhiều lựa chọn:

1. **Quy tắc 1**: Phân loại theo tiêu đề các Chương, Nhóm
2. **Quy tắc 2**: Hàng hóa chưa hoàn chỉnh hoặc hỗn hợp
3. **Quy tắc 3**: Hàng hóa thuộc nhiều nhóm
4. **Quy tắc 4**: Phân loại theo hàng hóa tương tự
5. **Quy tắc 5**: Bao bì và hộp đựng
6. **Quy tắc 6**: So sánh các phân nhóm

## Lưu ý quan trọng

> Việc phân loại sai mã HS có thể dẫn đến phạt hành chính và truy thu thuế. Hãy tham khảo ý kiến chuyên gia khi cần thiết.

## Kết luận

Phân loại hàng hóa theo mã HS Code đòi hỏi kiến thức và kinh nghiệm. Sử dụng các công cụ tra cứu và tài liệu tham khảo để đảm bảo độ chính xác.
    `.trim()
  }
];

// ============================================
// HÀM TRỢ GIÚP (HELPER FUNCTIONS)
// ============================================

/**
 * Lấy tất cả bài viết, sắp xếp theo ngày mới nhất
 */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Lấy bài viết theo slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Lấy các bài viết gần đây
 */
export function getRecentPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}
