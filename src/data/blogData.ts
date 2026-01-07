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
    slug: "ma-hs-code-la-gi-tong-quan-he-thong-hai-hoa",
    title: "Mã HS Code là gì? Tổng quan về Hệ thống hài hòa (HS)",
    date: "2026-01-07",
    excerpt: "Bài viết cung cấp thông tin tổng quan về hệ thống mã HS Code, cấu trúc mã và vai trò quan trọng của nó trong hoạt động xuất nhập khẩu và hải quan.",
    coverImage: "/placeholder.svg",
    content: `
## 1. Mã HS Code là gì?

**Mã HS Code** là mã số mang tính chất xác định và phân loại cho hàng hóa trong *Hệ thống hài hòa mô tả và mã hóa hàng hóa*.

Hệ thống hài hòa mô tả và mã hóa hàng hóa là thuật ngữ được dịch ra từ thuật ngữ đầy đủ trong tiếng Anh là **"Harmonized Commodity Description and Coding System"**. Trong thực tế, thuật ngữ tiếng Anh này thường được gọi tắt là "Harmonized Systems", "HS" hoặc "HS Code".

Hệ thống mã HS Code là một danh mục gồm khoảng **5.000 phân nhóm hàng hóa** khác nhau. Mỗi phân nhóm được xác định bằng một mã sáu chữ số, được sắp xếp theo cấu trúc mang tính hệ thống và hỗ trợ bởi các quy tắc rõ ràng để đạt được sự phân loại thống nhất.

**Ví dụ:** Mã HS Code sáu chữ số \`030111\` dùng để xác định và phân loại cho mặt hàng "Cá sống ở nước ngọt dùng để làm cá cảnh". Trong hệ thống mã HS Code, mặt hàng này được trình bày như sau:

- **0301**: Cá sống
  - **Cá cảnh:**
    - **030111**: Cá nước ngọt

Hệ thống mã HS Code hiện đang được sử dụng chủ yếu cho hoạt động xuất nhập khẩu.

## 2. Tại sao lại cần có hệ thống mã HS Code?

Nếu mỗi nhóm hàng hóa không được mã hóa một cách hệ thống và có quy tắc, sẽ rất khó khăn trong công tác thống kê và quản lý hàng hóa dựa trên mô tả của hàng hóa do có thể có nhiều cách mô tả hàng hóa khác nhau cho cùng một mặt hàng.

Chẳng hạn, đối với mặt hàng cá cảnh trong ví dụ tại Mục 1 nêu trên, có thể có nhiều mô tả hàng hóa khác nhau cho cùng mặt hàng này như: *cá sống làm cảnh, cá cảnh sống, cá cảnh, cá làm cảnh, v.v.*

Do đó, để tạo thuận lợi trong công tác thống kê và quản lý hàng hóa, đặc biệt là trong hoạt động xuất nhập khẩu giữa các quốc gia khác nhau, một danh mục hàng hóa được mã hóa một cách hệ thống, có quy tắc để các bên khác nhau có thể cùng sử dụng chung một cách hài hòa là thực sự quan trọng và cần thiết.

Đó là lý do cho sự ra đời của hệ thống mã HS Code cũng như tên gọi đầy đủ của nó: **"Hệ thống hài hòa mô tả và mã hóa hàng hóa"**.

## 3. Công ước quốc tế về Hệ thống hài hòa

Hệ thống mã HS Code được ra đời theo **Công Ước Quốc Tế Về Hệ Thống Hài Hòa Mô Tả Và Mã Hóa Hàng Hóa** (International Convention on the Harmonized Commodity Description and Coding System) do Hội đồng hợp tác Hải quan (nay là **WCO - Tổ chức Hải quan Thế giới**) thông qua ngày 14/06/1983, với mục đích chính là:

- Thúc đẩy thương mại quốc tế.
- Thúc đẩy công tác thu thập, so sánh và phân tích dữ liệu thống kê về thương mại quốc tế.
- Giảm thiểu chi phí phát sinh từ việc mô tả lại, phân loại lại và mã hóa lại hàng hóa khi chúng di chuyển từ hệ thống phân loại này sang hệ thống phân loại khác.
- Tạo điều kiện thuận lợi cho việc chuẩn hóa chứng từ thương mại và việc truyền tải dữ liệu.

Một trong các nội dung quan trọng của Công Ước là việc quy định các nước tham gia Công Ước phải:

1. Sử dụng tất cả các tên và mã số của Nhóm (Heading) và Phân nhóm (Subheading) của Hệ thống hài hòa mà không thêm bớt hoặc sửa đổi.
2. Áp dụng các Quy tắc phân loại và tất cả các Chú giải Phần (Section), Chương (Chapter) và Phân nhóm (Subheading) mà không sửa đổi phạm vi.
3. Áp dụng thứ tự số học của hệ thống mã HS Code.

Bạn có thể tham khảo [toàn bộ Công Ước tại đây](https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-convention/hs-convention_en.pdf?la=en).

## 4. Cấu trúc hệ thống mã HS Code

Hiện nay, danh mục hệ thống mã HS Code gồm **21 Phần (Section), 97 Chương (Chapter), 1.228 Nhóm (Heading), 4.084 Phân nhóm (Subheading)**.

Bạn có thể tham khảo [cấu trúc danh mục chi tiết tại đây](/chapter-notes).

Việc đánh số cho Chương, Nhóm, Phân nhóm theo quy tắc sau:

- **Chương (Chapter):** 2 mã số (VD: 03)
- **Nhóm (Heading):** 4 mã số (VD: 0301)
- **Phân nhóm (Subheading):** 6 mã số (VD: 030111)

![Cấu trúc mã HS minh họa](https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSn7MnagLPHw5pfqMJqD79RCBgMzDG-3oByhRsIoko0cxy5jmnATV0IaYSnw4s2F992liNMkkDfk49oMaKIE5L0LvFl4igYzPKsvyUstDfINB8dQacvSNbvIrBToDu0PEt_SWrwxvyjEiC9u6Jmajsd6zoL2c-_XucA1EJOvyaUA0AKTsSMNk59oyxlXNCShMuu3zWEpyrT_YxsqbnhctfR7IAPVoCmqv_WgHNfxHIptrmtXcmWCDUji1WlYHd9F1rnFt8dZyCKHC0jtcr3NHFjqsAvxI7vjtVnFVDG0347nSgG_R0nAc73IBRd2744FH6Y1e5Jch3jgO4zSIG8AO7gLuqedxfIw6SVIVf74Cqt_-bLBoOm8zxIE_QpraH9aL7E2PURmJgOu2fYiBwNcWgaRrujkGHV9KDoN1pB5eZGDV7AiyT59A8aMzk4bSgrhQjyWA_9kUhmg6qmGwlS4GH2ZykALwW7QnwdWRhiBX6j1svH9pn6Uqz_PK286TI5S1dK8iFs905Wu1veBuNvu1IQGEcJ_ANuF0g8BiOnJBfM9IiLNiKOKhOvije8ijyhSiSmXn32UVHNOS1bMyZp9nMMzifam9_0k0gJ6LVJR2LHRuV7VlA5dA8DPBmYfryx6X5rkV1bBzHJGYMS0mE7jaJV48M1MqlKaGWLxYqu4Ro4DeOZFXHM3XjHE1SbWugHGoauqUv3f-1UaQROee5iPsm5dGG3rQBzbKYMC_Ts7S6MCrv40HEDDFiln_vVOWGVD1Uetd3U3OeEJGCjhavnmHnVx7lUh9uggRiOncagzp64g5mLNiftC5ojvr6xxl4fh4htTT4sKGkH9bBK5sBgMacP8cV5n2q61XRT6TYxcuhL7osJtbmuUF3FIWmX_8i0Fqn6EPbtssQ9QIt0HKR5Bh3jUSU9LNTwP29qUbh9lnESwfN5p3Y_a7ocGb6SbLCDYe-NVk9S4S-tWqNWJqn2y5l61kXI9W_5Iu4TkuTb5XMsG6PrQ7M6taklbp_pL2nKNPhHlOdychE1T_2HyBzrIzhz9BCxVmh7ZFpiG60bUiQi2NDNBT-cyJTEMq_9ns1qEunMWwSdGeQjN8EdspWAnKCzRu6aDdN3CDGjoTwwvYciw9_pfknlJwvENB_-a-d8NbefHkecJzSvLbI5LooDCLQMg0JZEyU9bWaM40fAT8Lw6Mksww_62RqlNCw9xD_8St0vQHdZ7N5-3bvbjdKUtF4Z4MAU=s1024-rj)

Như vậy, theo quy định của Công Ước, các nước tham gia phải đảm bảo việc tuân thủ danh mục hệ thống mã HS Code của mình ở **cấp độ 6 mã số**.

Danh mục này được sửa đổi bổ sung **5 năm 1 lần**. Phiên bản hiện tại là phiên bản 2022 (có hiệu lực từ 01/01/2022).

## 5. Danh mục hàng hóa xuất nhập khẩu Việt Nam

Việt Nam đã tham gia và áp dụng đầy đủ Công Ước từ năm 1998. Do đó, hệ thống mã HS Code của Việt Nam sẽ tuân thủ theo hệ thống quy tắc, chú giải và sắp xếp ở cấp độ Phân nhóm (6 chữ số).

Ngoài ra, Việt Nam cũng tham gia **Danh mục Biểu thuế hài hòa ASEAN (AHTN)**. Danh mục AHTN 2022 được các nước ASEAN xây dựng chi tiết ở cấp độ **8 số**.

Hiện nay, Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam được quy định tại **Thông tư 31/2022/TT-BTC** ngày 08/6/2022, có hiệu lực thi hành kể từ ngày 01/12/2022.
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
