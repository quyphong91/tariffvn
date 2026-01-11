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
    coverImage: "/tong-quan-hs-code.png",
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

Bạn có thể tham khảo [cấu trúc danh mục chi tiết tại đây](/chu-giai-hs).

Việc đánh số cho Chương, Nhóm, Phân nhóm theo quy tắc sau:

- **Chương (Chapter):** 2 mã số (VD: 03)
- **Nhóm (Heading):** 4 mã số (VD: 0301)
- **Phân nhóm (Subheading):** 6 mã số (VD: 030111)

![Cấu trúc mã HS minh họa](/tong-quan-hs-code.png)

Như vậy, theo quy định của Công Ước, các nước tham gia phải đảm bảo việc tuân thủ danh mục hệ thống mã HS Code của mình ở **cấp độ 6 mã số**.

Danh mục này được sửa đổi bổ sung **5 năm 1 lần**. Phiên bản hiện tại là phiên bản 2022 (có hiệu lực từ 01/01/2022).

## 5. Danh mục hàng hóa xuất nhập khẩu Việt Nam

Việt Nam đã tham gia và áp dụng đầy đủ Công Ước từ năm 1998. Do đó, hệ thống mã HS Code của Việt Nam sẽ tuân thủ theo hệ thống quy tắc, chú giải và sắp xếp ở cấp độ Phân nhóm (6 chữ số).

Ngoài ra, Việt Nam cũng tham gia **Danh mục Biểu thuế hài hòa ASEAN (AHTN)**. Danh mục AHTN 2022 được các nước ASEAN xây dựng chi tiết ở cấp độ **8 số**.

Hiện nay, Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam được quy định tại **Thông tư 31/2022/TT-BTC** ngày 08/6/2022, có hiệu lực thi hành kể từ ngày 01/12/2022.
    `.trim()
  },
  {
    id: "2",
    slug: "tong-hop-so-sanh-thay-doi-thu-tuc-hai-quan-thong-tu-121-2025",
    title: "Tổng hợp và so sánh chi tiết những thay đổi về thủ tục hải quan tại Thông tư 121/2025/TT-BTC",
    date: "2026-1-8",
    excerpt: "Cùng điểm qua những thay đổi đáng chú ý cũng như chi tiết của các thay đổi về tục hải quan tại Thông tư 121/2025/TT-BTC vừa mới ban hành ngày 18/12/2025.",
    coverImage: "/cap-nhat-thong-tu-121-2025-TT-BTC.png",
    content: `
## 1. Những thay đổi đáng chú ý

Vào ngày 18/12/2025, Bộ Tài chính đã ban hành **Thông tư 121/2025/TT-BTC** sửa đổi, bổ sung một số điều tại Thông tư số 38/2015/TT-BTC ngày 25/3/2015 về thủ tục hải quan; kiểm tra, giám sát hải quan; thuế xuất khẩu, thuế nhập khẩu và quản lý thuế đối với hàng hoá xuất khẩu, nhập khẩu đã được sửa đổi, bổ sung bởi Thông tư 39/2018/TT-BTC ngày 20/4/2018.

Thông tư này có nhiều điểm mới về thủ tục hải quan đáng lưu ý như:

- Loại bỏ những nội dung không còn phù hợp với thực tiễn và tạo sự đồng bộ trong áp dụng pháp luật, giúp đơn giản hóa thủ tục hành chính, giảm bớt rủi ro chồng chéo.
- Có thể thực hiện khai báo và nộp hồ sơ theo hình thức điện tử, giảm hồ sơ giấy, rút ngắn thời gian xử lý và nâng cao tính minh bạch.
- Được phép khai bổ sung linh hoạt hơn.
- Bổ sung hình thức tham vấn giá qua hệ thống.
- Sửa đổi các mẫu Báo cáo quyết toán (Mẫu số 15, Mẫu số 15a, Mẫu số 16).

## 2. So sánh chi tiết những thay đổi về thủ tục hải quan

Để các bạn có thông tin chi tiết hơn về các thay đổi của Thông tư 121, **HSTC** đã tổng hợp bảng so sánh đối chiếu thay đổi của Thông tư 121 so với các Thông tư trước đó.

Vui lòng truy cập vào link sau để xem và tải file chi tiết: 
[Xem và tải file chi tiết tại Google Drive](https://drive.google.com/file/d/1dGgrYA3Bck8H_1LS4N_6VGXVASTt1X_S/view?usp=sharing)

## 3. Văn bản hợp nhất Thông tư 121/2025/TT-BTC, 39/2018/TT-BTC và 38/2015/TT-BTC

Thông tư 121 chỉ sửa đổi và bổ sung thêm nội dung của các Thông tư trước đó là Thông tư 39/2018/TT-BTC ngày 20/4/2018 và Thông tư số 38/2015/TT-BTC ngày 25/3/2015, do đó, sẽ hơi khó khăn trong việc tham khảo và đọc hiểu toàn bộ thủ tục hải quan liên quan. Vì vậy, sẽ thuận tiện hơn cho việc tham khảo luật khi đọc Văn bản hợp nhất của 03 Thông tư này.

Vui lòng truy cập vào link sau để xem và tải file Văn bản hợp nhất của 3 Thông tư:
[Xem và tải Văn bản hợp nhất tại đây](https://docs.google.com/document/d/1nHAxDElcPUSkxw1UP5-HhwKzQEcdJBef/edit?usp=sharing&ouid=103268199599416497285&rtpof=true&sd=true)

> **Lưu ý:** Văn bản hợp nhất chỉ nhằm mục đích tham khảo và không có giá trị pháp lý. Khi trích dẫn các văn bản pháp luật để làm việc với các cơ quan chức năng, các bạn lưu ý trích dẫn đúng các điều khoản cụ thể tại các Thông tư tương ứng thay vì các điều khoản tại Văn bản hợp nhất.
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
