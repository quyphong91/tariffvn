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
  },
  {
    id: "2",
    slug: "cap-nhat-bieu-thue-2025",
    title: "Cập nhật Biểu thuế nhập khẩu năm 2025",
    date: "2024-12-25",
    excerpt: "Tổng hợp các thay đổi quan trọng trong Biểu thuế nhập khẩu ưu đãi năm 2025 theo các FTA.",
    coverImage: "/placeholder.svg",
    content: `
## Các thay đổi chính trong Biểu thuế 2025

Năm 2025 đánh dấu nhiều thay đổi quan trọng trong chính sách thuế nhập khẩu của Việt Nam, đặc biệt liên quan đến các Hiệp định thương mại tự do (FTA).

### 1. EVFTA - Hiệp định với EU

Theo lộ trình cam kết, nhiều mặt hàng sẽ được **cắt giảm thuế suất** xuống 0%:

- Máy móc, thiết bị công nghiệp
- Một số loại nông sản
- Dược phẩm và thiết bị y tế

### 2. CPTPP - Hiệp định Đối tác Toàn diện và Tiến bộ

Các thay đổi đáng chú ý:

| Nhóm hàng | Thuế suất 2024 | Thuế suất 2025 |
|-----------|----------------|----------------|
| Ô tô nguyên chiếc | 50% | 45% |
| Linh kiện điện tử | 5% | 0% |
| Thực phẩm chế biến | 15% | 10% |

### 3. RCEP

Hiệp định RCEP tiếp tục có hiệu lực với các đối tác ASEAN, Trung Quốc, Nhật Bản, Hàn Quốc, Úc và New Zealand.

## Lưu ý khi áp dụng

Để được hưởng ưu đãi thuế quan theo FTA, doanh nghiệp cần:

1. Có **Chứng nhận xuất xứ (C/O)** hợp lệ
2. Đáp ứng quy tắc xuất xứ của từng Hiệp định
3. Khai báo đúng mã HS Code

## Tham khảo thêm

Sử dụng công cụ [Tra cứu thuế nhập khẩu](/tariff-lookup) để xem chi tiết thuế suất cho từng mã HS.
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
