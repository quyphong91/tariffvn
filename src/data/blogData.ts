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

Hiện nay, Danh mục hàng hóa xuất khẩu, nhập khẩu Việt Nam được quy định tại **Thông tư 31/2022/TT-BTC** ngày 08/6/2022, có hiệu lực thi hành kể từ ngày 01/12/2022. Các bạn có thể tìm hiểu thêm về Danh mục tại văn bản pháp lý này. 

Hãy follow [Facebook page](https://www.facebook.com/share/1GBqyDGvu3/) của HSTC để tiếp tục theo dõi các bài viết tiếp theo của HSTC nhé.

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
    `.trim()
  },
  {
    id: "2",
    slug: "tong-hop-so-sanh-thay-doi-thu-tuc-hai-quan-thong-tu-121-2025",
    title: "Chi tiết những thay đổi về thủ tục hải quan tại Thông tư 121/2025/TT-BTC",
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

Hãy follow [Facebook page](https://www.facebook.com/share/1GBqyDGvu3/) của HSTC để tiếp tục theo dõi các bài viết tiếp theo của HSTC nhé.

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
 
    `.trim()
  },
  {
    id: "3",
    slug: "so-sanh-thay-doi-mau-so-01-to-khai-nhap-khau-thong-tu-121",
    title: "Thay đổi về các chỉ tiêu thông tin của Tờ khai nhập khẩu điện tử theo Thông tư 121/2025/TT-BTC",
    date: "2026-01-11",
    excerpt: "Những thay đổi chi tiết về các chỉ tiêu thông tin của Mẫu số 01 – Tờ khai nhập khẩu điện tử theo Phụ lục I, Thông tư 121/2025/TT-BTC vừa mới ban hành ngày 18/12/2025.",
    coverImage: "/cap-nhat-to-khai-nhap-khau-thong-tu-121-2025-TT-BTC.png",
    content: `
## 1. Tổng quan về các thay đổi

Như đã thông tin ở bài viết trước đây, vào ngày 18/12/2025, Bộ Tài chính đã ban hành **Thông tư 121/2025/TT-BTC** (sau đây gọi tắt là Thông tư 121) sửa đổi, bổ sung một số điều tại Thông tư số 38/2015/TT-BTC ngày 25/3/2015 về thủ tục hải quan; kiểm tra, giám sát hải quan; thuế xuất khẩu, thuế nhập khẩu và quản lý thuế đối với hàng hoá xuất khẩu, nhập khẩu đã được sửa đổi, bổ sung bởi Thông tư 39/2018/TT-BTC ngày 20/4/2018.

Bạn có thể tham khảo lại bài viết chi tiết về các thay đổi tại Thông tư 121 [tại đây](https://tracuuhs.com/news/tong-hop-so-sanh-thay-doi-thu-tuc-hai-quan-thong-tu-121-2025).

Ngoài những sửa đổi, bổ sung tại nội dung của các điều luật, các biểu mẫu liên quan đến thủ tục hải quan cũng được sửa đổi, bổ sung tại các phụ lục đính kèm theo Thông tư 121.

Tại **Phụ lục I của Thông tư 121**, Mẫu số 01 – Tờ khai nhập khẩu điện tử cũng được sửa đổi một số chỉ tiêu thông tin như:

- Mã và tên người nhập khẩu, người xuất khẩu đối với trường hợp xuất nhập khẩu tại chỗ.
- Thông tin liên quan đến giấy phép nhập khẩu.
- Tổng trị giá hóa đơn thêm Incoterm DPU.
- Chi tiết khai trị giá trong trường hợp người khai hải quan lựa chọn hình thức tham vấn giá gián tiếp.
- Ghi chú trong trường hợp xuất nhập khẩu tại chỗ, hàng hóa tương tự với hàng hóa đang đợi kết quả phân tích phân loại.
- Mô tả hàng hóa trong các trường hợp sản phẩm đặt gia công ở nước ngoài, nguyên liệu để gia công sản xuất hàng hóa xuất khẩu.

**Lưu ý:** Thông tư 121 sẽ có hiệu lực kể từ ngày **01/02/2026**.

## 2. So sánh chi tiết những thay đổi về các chỉ tiêu thông tin của Mẫu số 01 – Tờ khai nhập khẩu điện tử theo Thông tư 121

Để các bạn có thông tin chi tiết hơn về các thay đổi của **Mẫu số 01 – Tờ khai nhập khẩu điện tử** theo Thông tư 121, **HSTC** đã tổng hợp bảng so sánh đối chiếu chi tiết các thay đổi của các chỉ tiêu thông tin tại Thông tư 121 so với các Thông tư trước đó.
[Xem và tải file chi tiết hoàn toàn miễn phí tại Google Drive](https://drive.google.com/file/d/1g3nZBtWMeiaUwNs9j87pAtNPcA3beHx5/view?usp=sharing)

Ngoài ra, để thuận tiện cho các bạn tham khảo toàn bộ các mục thông tin của Mẫu số 01 - Tờ khai nhập khẩu điện tử sau khi được sửa đổi bổ sung bởi Thông tư 121, HSTC cũng đã tổng hợp và hợp nhất toàn bộ thay đổi của Mẫu số 01 này.
[Xem và tải file Mẫu số 01 hợp nhất hoàn toàn miễn phí tại Google Drive](https://drive.google.com/file/d/1IhV66033Qm0m-ENJROhWh8AmQLR125Sp/view?usp=sharing)  

HSTC hy vọng rằng bảng so sánh chi tiết này sẽ giúp các bạn dễ nhớ các thay đổi hơn và phục vụ tốt hơn cho công việc hàng ngày của các bạn.

Hãy follow [Facebook page](https://www.facebook.com/share/1GBqyDGvu3/) của HSTC để tiếp tục theo dõi các bài viết tiếp theo của HSTC nhé.

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
    `.trim()
  },
  {
    id: "4",
    slug: "so-sanh-thay-doi-mau-so-02-to-khai-xuat-khau-thong-tu-121",
    title: "Thay đổi về các chỉ tiêu thông tin của Tờ khai xuất khẩu điện tử theo Thông tư 121/2025/TT-BTC",
    date: "2026-01-12",
    excerpt: "Cùng điểm qua những thay đổi chi tiết về các chỉ tiêu thông tin của Mẫu số 02 – Tờ khai xuất khẩu điện tử theo Phụ lục I, Thông tư 121/2025/TT-BTC vừa mới ban hành ngày 18/12/2025.",
    coverImage: "/cap-nhat-to-khai-xuat-khau-thong-tu-121-2025-TT-BTC.png",
    content: `
## 1. Tổng quan về các thay đổi

Như đã thông tin ở bài viết trước đây, vào ngày 18/12/2025, Bộ Tài chính đã ban hành **Thông tư 121/2025/TT-BTC** (sau đây gọi tắt là Thông tư 121) sửa đổi, bổ sung một số điều tại Thông tư số 38/2015/TT-BTC ngày 25/3/2015 về thủ tục hải quan; kiểm tra, giám sát hải quan; thuế xuất khẩu, thuế nhập khẩu và quản lý thuế đối với hàng hoá xuất khẩu, nhập khẩu đã được sửa đổi, bổ sung bởi Thông tư 39/2018/TT-BTC ngày 20/4/2018.

Bạn có thể tham khảo lại bài viết chi tiết về các thay đổi tại Thông tư 121 [tại đây](https://tracuuhs.com/news/tong-hop-so-sanh-thay-doi-thu-tuc-hai-quan-thong-tu-121-2025).

Ngoài những sửa đổi, bổ sung tại nội dung của các điều luật, các biểu mẫu liên quan đến thủ tục hải quan cũng được sửa đổi, bổ sung tại các phụ lục đính kèm theo Thông tư 121.

Tại **Phụ lục I của Thông tư 121**, Mẫu số 02 – Tờ khai xuất khẩu điện tử cũng được sửa đổi một số chỉ tiêu thông tin tương tự như Mẫu số 01 – Tờ khai nhập khẩu điện tử như:

- Mã và tên người nhập khẩu, người xuất khẩu đối với trường hợp xuất nhập khẩu tại chỗ.
- Thông tin liên quan đến giấy phép nhập khẩu.
- Ghi chú trong trường hợp người khai hải quan lựa chọn hình thức tham vấn giá gián tiếp, hàng hóa tương tự với hàng hóa đang đợi kết quả phân tích phân loại.
- Thêm một số thông tin trong mô tả hàng hóa.

**Lưu ý:** Thông tư 121 sẽ có hiệu lực kể từ ngày **01/02/2026**.

## 2. So sánh chi tiết những thay đổi về các chỉ tiêu thông tin của Mẫu số 02 – Tờ khai xuất khẩu điện tử theo Thông tư 121

Để các bạn có thông tin chi tiết hơn về các thay đổi của **Mẫu số 02 – Tờ khai xuất khẩu điện tử** theo Thông tư 121, **HSTC** đã tổng hợp bảng so sánh đối chiếu chi tiết các thay đổi của các chỉ tiêu thông tin tại Thông tư 121 so với các Thông tư trước đó.

[Xem và tải file chi tiết hoàn toàn miễn phí tại Google Drive](https://drive.google.com/file/d/1yNq0cpo8ONlnYJHBJiOpcxxSJ0z0Gqbr/view?usp=sharing)

Ngoài ra, để thuận tiện cho các bạn tham khảo toàn bộ các mục thông tin của Mẫu số 02 - Tờ khai xuất khẩu điện tử sau khi được sửa đổi bổ sung bởi Thông tư 121, HSTC cũng đã tổng hợp và hợp nhất toàn bộ thay đổi của Mẫu số 02 này.

[Xem và tải file Mẫu số 02 hợp nhất hoàn toàn miễn phí tại Google Drive](https://drive.google.com/file/d/1OobMrnUoOJSciybgckARJB3qbf0N_4vg/view?usp=sharing)

HSTC hy vọng rằng bảng so sánh chi tiết này sẽ giúp các bạn dễ nhớ các thay đổi hơn và phục vụ tốt hơn cho công việc hàng ngày của các bạn.

Hãy follow [Facebook page](https://www.facebook.com/share/1GBqyDGvu3/) của HSTC để tiếp tục theo dõi các bài viết tiếp theo của HSTC nhé.

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
    `.trim()
  },
  {
    id: "5",
    slug: "huong-dan-cach-tra-cuu-va-xac-dinh-ma-hs-code",
    title: "Hướng dẫn cách tra cứu và xác định mã HS Code",
    date: "2026-01-15",
    excerpt: "Quy trình tra cứu và xác định mã HS Code đầy đủ và tuân thủ quy định pháp luật Việt Nam và thông lệ quốc tế.",
    coverImage: "/huong-dan-tra-cuu-hs-code.png",
    content: `
## 1. Tổng quan về mã HS Code và tại sao cần phải xác định đúng mã HS Code

Như đã giải thích ở bài viết trước đây, **Danh mục mã HS Code** là danh mục các Phần, Chương, Nhóm hàng và Phân nhóm hàng được sắp xếp một cách có hệ thống tương ứng với tên, mô tả và mã số hàng hóa, trong đó:

- **Phần:** Đánh số la mã. Không được thể hiện trong dãy số HS Code của hàng hóa
- **Chương:** 2 mã số đầu trong dãy số HS Code của hàng hóa
- **Nhóm:** 4 mã số đầu trong dãy số HS Code của hàng hóa
- **Phân nhóm:** 6 mã số đầu trong dãy số HS Code của hàng hóa

![Cấu trúc mã HS Code minh họa](/cau-truc-hs-code.png)

Bạn có thể tham khảo lại bài viết chi tiết về Danh mục mã HS Code [tại bài viết này](/tin-tuc/ma-hs-code-la-gi-tong-quan-he-thong-hai-hoa).

Việc **xác định đúng mã số HS Code** là công việc cực kỳ quan trọng trong hoạt động xuất nhập khẩu vì mã số HS Code là cơ sở để tính thuế, thực hiện các chính sách quản lý hàng hóa và quản lý chuyên ngành khác. Các sai sót trong việc xác định mã HS Code có thể tiềm ẩn các rủi ro cực kỳ lớn và dẫn đến số tiền thuế bị truy thu cực kỳ cao do thường dẫn đến chênh lệch về thuế suất.

## 2. Các văn bản pháp lý liên quan đến xác định mã HS Code

Hiện nay, **Danh mục hàng hóa xuất nhập khẩu Việt Nam** được quy định tại **Thông tư 31/2022/TT-BTC** ngày 8/6/2022 bao gồm các nội dung và tài liệu chính:

- Danh mục các Phần, Chương, Nhóm hàng và Phân nhóm hàng được sắp xếp tương ứng với tên, mô tả và mã số hàng hóa
- Chú giải cho Phần, Chương, Phân nhóm
- Sáu (6) quy tắc tổng quát giải thích việc phân loại hàng hóa

Hiện nay, các nội dung trên tại Danh mục hàng hóa xuất nhập khẩu Việt Nam đều hoàn toàn tuân thủ theo Danh mục mã HS Code của Tổ chức Hải quan Thế giới (WCO) của Công ước HS và Danh mục thuế quan hài hòa ASEAN mà Việt Nam đã cam kết.

Ngoài các tài liệu trên, còn có các tài liệu pháp lý khác có thể được sử dụng trong việc xác định và tra cứu mã HS Code:

- **Tuyển tập ý kiến phân loại của Tổ chức Hải quan Thế giới (WCO):** Danh sách các quyết định phân loại của các loại hàng hóa quan trọng, khó khăn trong việc phân loại được đưa ra bởi Ủy ban HS của WCO;
- **Chú giải bổ sung Danh mục AHTN (Chú giải SEN):** công cụ hỗ trợ các nước thành viên ASEAN trong việc phân loại hàng hóa một số mặt hàng cụ thể được chi tiết ở cấp độ 8 số trong Danh mục AHTN
- **Cơ sở dữ liệu về Danh mục hàng hóa xuất nhập khẩu Việt Nam:** Các kết quả phân tích phân loại hàng hóa

## 3. Sáu quy tắc tổng quát giải thích việc phân loại hàng hóa

Như đề cập ở trên, nội dung về sáu (6) quy tắc tổng quát giải thích việc phân loại hàng hóa (thường được gọi tắt là **6 quy tắc phân loại**) (tên tiếng Anh: “General Rules for the Interpretation of the Harmonized System” và thường được gọi tắt là **GRI**) là một phần không tách rời của Danh mục mã HS Code. Việc phân loại hàng hóa theo Danh mục mã HS Code phải áp dụng theo 6 quy tắc này một cách tuần tự, bao gồm:

- **Quy tắc 1:** quy định cách phân loại sản phẩm ở cấp độ 4 mã số (Nhóm) dựa trên tên của Chương, Nhóm và các Chú giải về Phần, Chương và Nhóm tương ứng
- **Quy tắc 2:** quy định cách phân loại cho hàng hóa chưa hoàn thiện và chưa lắp ráp, cũng như hỗn hợp và tổ hợp hàng hóa
- **Quy tắc 3:** quy định cách phân loại các hàng hóa mà thoạt nhìn có thể được phân loại theo hai hoặc nhiều mã HS Code khác nhau
- **Quy tắc 4:** quy định cách phân loại các hàng hóa không thể phân loại theo Quy tắc 1, 2 và 3
- **Quy tắc 5:** quy định cách phân loại bao bì của hàng hóa
- **Quy tắc 6:** quy định cách phân loại hàng hóa ở cấp độ từ 6 mã số trở lên, dựa trên việc tiếp tục áp dụng tuần tự các Quy tắc từ 1 đến 5 cho các mã số HS Code nằm trong cùng một Nhóm hàng (cấp độ 4 mã số)

Trước khi áp dụng các Quy tắc phân loại từ 1 đến 6 nêu trên để bắt đầu tra cứu và xác định mã HS Code, các bạn cần lưu ý đến **“Quy tắc 0”**, dù không được quy định trong luật nhưng cực kỳ quan trọng trong thực tế.

> **Quy tắc này bao gồm:**
> - Hiểu rõ về hàng hóa đang cần phân loại mã số HS Code, đặc biệt cần nắm rõ các thông tin cơ bản như: Mô tả hàng hóa, chất liệu, cấu tạo, chức năng, cách thức nhập khẩu v.v.
> - Việc phân loại hàng hóa là công việc có tính chất phức tạp và đôi khi việc áp mã HS Code có thể phụ thuộc vào ý kiến chủ quan của từng người, do đó, luôn luôn (và luôn luôn) đặt câu hỏi “Liệu còn mã số HS Code nào khác có thể áp dụng cho hàng hóa này không?”
> - Luôn luôn (và luôn luôn … và luôn luôn …) giữ đầu óc và thể trạng tỉnh táo vì khối lượng thông tin và dữ liệu cần phải tìm, đọc, hiểu và phân tích trong các Chú giải là cực kỳ lớn. Việc đọc sót hoặc hiểu sai ý nghĩa của các Chú giải có thể dẫn đến việc áp mã HS Code không phù hợp cho hàng hóa.

Hãy cùng bắt đầu đi qua các bước và quy tắc để xác định mã HS Code phù hợp.

### Quy tắc phân loại hàng hóa số 1 (GRI 1)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 1 có nội dung tiếng Việt như sau:

> **“QUY TẮC 1**
> Tên của Phần, Chương hoặc Phân chương được đưa ra chỉ nhằm mục đích dễ tra cứu. Để đảm bảo tính pháp lý, việc phân loại hàng hóa phải được xác định theo nội dung của từng nhóm và bất cứ chú giải của các Phần, Chương liên quan và theo các quy tắc dưới đây nếu các nhóm hoặc các Chú giải đó không có yêu cầu nào khác.”

Hàng hóa trong Danh mục mã HS Code được sắp xếp một cách có hệ thống trong theo các Phần, Chương và Phân chương. Tên của Phần, Chương và Phân chương được ghi ngắn gọn, súc tích để chỉ ra loại hoặc chủng loại hàng hóa được xếp trong đó. Tuy nhiên, trong nhiều trường hợp vì sự đa dạng của chủng loại và số lượng hàng hóa nên tên các Phần, Chương không thể bao trùm hết toàn bộ hoặc liệt kê hết các hàng hóa trong đề mục đó.

Do đó, Quy tắc 1 quy định:

- Tên các Phần, Chương và Phân chương không có giá trị pháp lý trong việc phân loại hàng hóa mà chỉ nhằm mục đích dễ tra cứu
- Việc phân loại hàng hóa phải được xác định:
    - theo nội dung Chú giải Phần, Chương và Nhóm có liên quan, và
    - theo các Quy tắc 2, 3, 4 và 5 khi Chú giải không có yêu cầu nào khác

Dựa trên quy định tại Quy tắc 1, quy trình phù hợp để xác định mã số HS Code cho một hàng hóa nên là:

1. Dựa trên thông tin của hàng hóa, rà soát qua các Phần, Chương và Nhóm của Danh mục mã HS Code để đưa ra đánh giá tổng quan và xác định các Phần, Chương, Nhóm có thể liên quan đến hàng hóa của mình
2. Tìm đọc các chú giải tại các Phần, Chương, Nhóm đã xác định và khoanh vùng được ở Bước 1
3. Rà soát các Quy tắc 2, 3, 4 và 5
4. Tổng hợp các thông tin sau khi rà soát và xem xét tại Bước 2 và Bước 3 để xác định Nhóm hàng (cấp độ 4 mã số) phù hợp

Thông thường, mức độ chính xác trong việc xác định mã HS Code phụ thuộc rất lớn ở Bước 1 và Bước 2 do đây là các bước giúp khoanh vùng các Nhóm hàng (cấp độ 4 mã số) phù hợp trước khi thực hiện các bước tiếp theo để tiếp tục mở rộng việc xác định mã HS Code đến cấp độ 8 mã số.

Nếu xác định không chính xác Nhóm hàng ở cấp độ 4 mã số sẽ dẫn đến việc xác định không chính xác mã HS Code ở cấp độ 8 mã số. Tuy nhiên, đây cũng là 2 bước đòi hỏi rất nhiều thời gian và công sức do khối lượng thông tin tại các chú giải là cực kỳ lớn chưa kể các thông tin đòi hỏi kiến thức chuyên ngành.

Để hỗ trợ các bạn trong việc thực hiện Bước 1 và Bước 2, **HSTC** đã phát triển công cụ giúp các bạn rà soát và tra cứu mô tả của hàng hóa đang cần xác định mã HS Code với các mô tả và nội dung tại Nhóm hàng và các Chú giải liên quan.

Chẳng hạn, cần xác định mã HS Code đối với mặt hàng “Hộp đựng trang sức”, bạn có thể rà soát nhanh bằng công cụ tra cứu của HSTC như sau:

Nhập mô tả hàng hóa và bấm “Tra cứu”

![Minh họa nhập liệu tra cứu](/tra-cuu-hstc-buoc-1.png)

Tại mục Headings của trang kết quả, các Chương và Nhóm có nội dung liên quan đến mô tả hàng hóa sẽ được liệt kê ra.
![Minh họa kết quả Headings](/tra-cuu-hstc-buoc-2.png)

Bạn có thể xem qua các Chương và bấm vào từng Chương để xem các Nhóm nằm trong từng Chương.

![Minh họa kết quả Headings](/tra-cuu-hstc-buoc-3.png)

Nhóm nào có nhiều nội dung khớp với mô tả sẽ được đánh dấu bằng chấm tròn màu đỏ. Nhóm ít nội dung khớp hơn sẽ được dánh dấu lần lượt bằng màu vàng và xám. Bạn có thể ưu tiên vào xem các Nhóm có chấm tròn màu đỏ trước bằng cách bấm trực tiếp vào Nhóm đó để được dẫn đến kết quả chi tiết ở bên dưới.

Tại kết quả chi tiết ở bên dưới, sẽ có các thông tin về các nội dung khớp với mô tả, chẳng hạn: khớp với mô tả của Nhóm, khớp với nội dung trong Chú giải.

![Minh họa kết quả chi tiết](/tra-cuu-hstc-buoc-4.png)

Sau đó, bạn có thể bấm vào từng ô chú giải ở dưới để đi đến nội dung chú giải chi tiết để đọc và đánh giá thêm. Ngoài ra, nếu muốn tham khảo thêm về thuế suất của các mã HS Code trong Nhóm đó, bạn có thể tiếp tục bấm vào các dòng kết quả ở mục kết quả chi tiết để tra cứu thuế suất.

Sau khi đã xác định được các Nhóm hàng có thể phù hợp, chúng ta cùng đi qua các Quy tắc đề cập ở Bước 3 để tiếp tục xem xét và cân nhắc mức độ phù hợp của từng Nhóm hàng này.

### Quy tắc phân loại hàng hóa số 2 (GRI 2)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 2 có nội dung tiếng Việt như sau:

> **“QUY TẮC 2**
> (a) Một mặt hàng được phân loại vào một nhóm hàng thì mặt hàng đó ở dạng chưa hoàn chỉnh hoặc chưa hoàn thiện cũng thuộc nhóm đó, nếu đã có đặc trưng cơ bản của hàng hóa đó khi đã hoàn chỉnh hoặc hoàn thiện. Cũng phân loại như vậy đối với hàng hóa ở dạng hoàn chỉnh hay hoàn thiện hoặc đã có đặc trưng cơ bản của hàng hóa ở dạng hoàn chỉnh hay hoàn thiện (hoặc được phân loại vào dạng hàng hóa đã hoàn chỉnh hay hoàn thiện theo nội dung Quy tắc này), nhưng chưa lắp ráp hoặc tháo rời.
>
> (b) Một nguyên liệu, một chất được phân loại trong một nhóm nào đó thì hỗn hợp hay hợp chất của nguyên liệu hoặc chất đó với những nguyên liệu hoặc chất khác cũng thuộc nhóm đó. Hàng hóa làm toàn bộ bằng một loại nguyên liệu hay một chất, hoặc làm một phần bằng nguyên liệu hay chất đó được phân loại trong cùng nhóm. Việc phân loại những hàng hóa làm bằng hai loại nguyên liệu hay hai chất trở lên phải tuân theo Quy tắc 3.”

Như vậy, **Quy tắc 2a** mở rộng phạm vi của Nhóm hàng không chỉ bao gồm hàng hóa đã hoàn chỉnh mà còn bao gồm chính hàng hóa đó ở dạng chưa hoàn chỉnh hoặc chưa hoàn thiện nhưng đã có những đặc tính cơ bản của hàng hóa đã hoàn chỉnh hoặc hoàn thiện. Chẳng hạn, các bộ phận của xe đạp: yên, bàn đạp, bánh xe, sườn, v.v. dù ở dạng chưa lắp ráp hoàn chỉnh cũng được phân loại theo mã số HS Code của xe đạp. Do đặc điểm này, Quy tắc 2a cũng thường được nêu trong các Chú giải của Phần hoặc Chương liên quan đến các hàng hóa cần phải lắp ráp như: Phần XVI – Máy móc thiết bị, Chương 44 – Các mặt hàng gỗ, Chương 86 – Xe lửa, Chương 87 – Xe cộ, Chương 89 – Tàu thủy, ….

**Quy tắc 2b** liên quan tới hỗn hợp và hợp chất của các nguyên liệu hoặc các chất, hàng hóa bao gồm từ hai nguyên liệu hoặc hai chất trở lên. Quy tắc 2b mở rộng Nhóm hàng liên quan tới một nguyên liệu hoặc một chất cũng bao gồm hỗn hợp hoặc hợp chất của nguyên liệu hoặc chất đó với các nguyên liệu hoặc chất khác. Tuy nhiên, khi xem xét Quy tắc 2b, cần lưu ý:

- Quy tắc 2b chỉ áp dụng khi nội dung Chú giải Phần, Chương hoặc Nhóm không có bất cứ yêu cầu nào khác. Tức là phải ưu tiên Quy tắc 1 (Chú giải quan trọng nhất)
- Quy tắc 2b không mở rộng Nhóm tới mức bao gồm cả mặt hàng không đáp ứng mô tả của Nhóm theo Quy tắc 1, chẳng hạn khi có thêm một nguyên liệu hoặc một chất khác làm mất đi đặc tính của hàng hóa đã được đề cập trong Chú giải của Phần, Chương hoặc Nhóm
- Do đó, trong trường hợp hỗn hợp và hợp chất của các nguyên liệu hoặc các chất, hàng hóa được cấu thành từ hai nguyên liệu hoặc hai chất trở lên, nếu thoạt nhìn qua có thể phân loại vào hai hoặc nhiều Nhóm khác nhau theo các Chú giải, thì phải chuyển sang xem xét theo Quy tắc 3 như dưới đây

### Quy tắc phân loại hàng hóa số 3 (GRI 3)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 3 có nội dung tiếng Việt như sau:

> **“QUY TẮC 3**
> Khi áp dụng Quy tắc 2(b) hoặc vì bất cứ một lý do nào khác, hàng hóa thoạt nhìn có thể phân loại vào hai hay nhiều nhóm, thì sẽ phân loại như sau:
>
> a. Nhóm có mô tả cụ thể nhất sẽ được ưu tiên hơn các nhóm có mô tả khái quát khi thực hiện việc phân loại hàng hóa. Tuy nhiên, khi hai hay nhiều nhóm mà mỗi nhóm chỉ liên quan đến một phần của nguyên liệu hoặc chất chứa trong hàng hóa là hỗn hợp hay hợp chất, hoặc chỉ liên quan đến một phần của hàng hóa trong trường hợp hàng hóa đó ở dạng bộ được đóng gói để bán lẻ, thì những nhóm này được coi như thể hiện đặc trưng ngang nhau về những hàng hóa nói trên, ngay cả khi một trong số các nhóm đó có mô tả đầy đủ hơn hoặc chính xác hơn về những hàng hóa đó
>
> b. Những hàng hóa hỗn hợp bao gồm nhiều nguyên liệu khác nhau hoặc những hàng hóa được làm từ nhiều bộ phận cấu thành khác nhau, và những hàng hóa ở dạng bộ để bán lẻ, nếu không phân loại được theo Quy tắc 3(a), thì phân loại theo nguyên liệu hoặc bộ phận cấu thành tạo ra đặc tính cơ bản của chúng, trong chừng mực tiêu chí này được áp dụng
>
> c. Khi hàng hóa không thể phân loại theo Quy tắc 3 (a) hoặc 3(b) nêu trên thì phân loại vào nhóm cuối cùng theo thứ tự đánh số trong số các nhóm tương đương được xem xét”

Quy tắc 3 được xét đến đối với những hàng hóa mà thoạt nhìn có thể xếp vào hai hay nhiều Nhóm khác nhau theo Quy tắc 2b hoặc trong các trường hợp khác. Nội dung trong Quy tắc 3 cũng phải được xem xét theo thứ tự: 3a -> 3b -> 3c hoặc nói cách khác: **3a) nhóm hàng có mô tả cụ thể đặc trưng nhất -> 3b) đặc tính cơ bản -> 3c) nhóm được xếp cuối cùng theo thứ tự đánh số.**

Tương tự như Quy tắc 2, Quy tắc 3 chỉ được áp dụng nếu như nội dung Chú giải (Quy tắc 1) không có yêu cầu nào khác.

**Ví dụ:**

- **Đối với Quy tắc 3a (nhóm hàng có mô tả cụ thể đặc trưng nhất):**
    - máy cạo râu và tông đơ có lắp động cơ điện được phân vào **Nhóm 8510** – Máy cạo và tông đơ mà không phải **Nhóm 8467** - các dụng cụ cầm tay có lắp động cơ điện hoặc **Nhóm 8509** - các thiết bị cơ điện gia dụng có lắp động cơ điện vì Nhóm 8510 có mô tả cụ thể đặc trưng hơn.
    - Tuy nhiên, giả sử trong trường hợp Nhóm 8510 có mô tả khác không cụ thể cho máy cạo râu và tông đơ (chẳng hạn: dụng cụ làm nhẵn bề mặt). Lúc này, các Nhóm 8510, 8467 và 8509 đều chỉ có mô tả liên quan một phần đến máy cạo râu và tông đơ. Trong trường hợp này, các Nhóm 8510, 8467 và 8509 sẽ được coi là cùng phản ánh tương đương nhau về đặc trưng của máy cạo râu và tông đơ. Để xác định được mã HS Code phù hợp phải chuyển sang xét đến Quy tắc 3b hoặc 3c.
- **Đối với Quy tắc 3b (đặc tính cơ bản):**
    - bộ thực phẩm bao gồm bánh sandwich làm bằng thịt bò có mô tả thuộc **Nhóm 1602**.
    - Bộ thực phẩm này được đóng gói với khoai tây chiên có mô tả thuộc **Nhóm 2004**.
    - Theo Quy tắc 3b, bộ này được phân loại vào **Nhóm 1602** do Nhóm này có đặc tính cơ bản nhất của hàng hóa.
- **Đối với Quy tắc 3c (nhóm được xếp cuối cùng theo thứ tự đánh số):**
    - giả sử máy cạo râu và tông đơ trong ví dụ tại Quy tắc 3a nêu trên không thể được tiếp tục phân loại theo Quy tắc 3b.
    - Nhóm có thứ tự sau cùng (lớn hơn) là **Nhóm 8510** sẽ được áp dụng trong trường hợp này.

### Quy tắc phân loại hàng hóa số 4 (GRI 4)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 4 có nội dung tiếng Việt như sau:

> **“QUY TẮC 4**
> Hàng hóa không thể phân loại theo đúng các Quy tắc trên đây thì được phân loại vào nhóm phù hợp với loại hàng hóa giống chúng nhất.”

Quy tắc 4 được xem xét đến khi không thể áp dụng Quy tắc 1 đến Quy tắc 3.

Cách phân loại theo Quy tắc 4 đòi hỏi việc so sánh hàng hóa đang phân loại với hàng hóa tương tự đã được phân loại để xác định hàng hóa giống với hàng hóa đang phân loại nhất dựa trên nhiều yếu tố như: mô tả, đặc điểm, tính chất, mục đích sử dụng của hàng hóa.

### Quy tắc phân loại hàng hóa số 5 (GRI 5)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 5 có nội dung tiếng Việt như sau:

> **“QUY TẮC 5**
> Những quy định sau được áp dụng cho những hàng hóa dưới đây:
>
> a. Hộp đựng camera, hộp đựng nhạc cụ, bao súng, hộp đựng dụng cụ vẽ, hộp đựng đồ trang sức và các loại bao hộp tương tự, thích hợp hoặc có hình dạng đặc biệt để chứa hàng hóa hoặc bộ hàng hóa xác định, có thể dùng trong thời gian dài và đi kèm với sản phẩm khi bán, được phân loại cùng với những sản phẩm này. Tuy nhiên, nguyên tắc này không được áp dụng đối với bao bì mang tính chất cơ bản nổi trội hơn so với hàng hóa mà nó chứa đựng;
>
> b. Ngoài Quy tắc 5(a) nêu trên, bao bì đựng hàng hóa được phân loại cùng với hàng hóa đó khi bao bì là loại thường được dùng cho loại hàng hóa đó. Tuy nhiên, nguyên tắc này không áp dụng đối với các loại bao bì mà rõ ràng là phù hợp để dùng lặp lại”

Quy tắc 5 chủ yếu áp dụng đối với một số loại bao bì đặc thù:

- bao bì được thiết kế đặc thù để chứa các hàng hóa (ví dụ bao bì có hình dáng của hàng hóa mà nó chứa đựng)
- bao bì có thể được sử dụng lâu dài
- bao bì được trình bày với hàng hóa mà nó chứa đựng

### Quy tắc phân loại hàng hóa số 6 (GRI 6)

Theo quy định tại Phụ lục II của Thông tư 31/2022, Quy tắc 6 có nội dung tiếng Việt như sau:

> **“QUY TẮC 6**
> Để đảm bảo tính pháp lý, việc phân loại hàng hóa vào các phân nhóm của một nhóm phải được xác định phù hợp theo nội dung của từng phân nhóm và các chú giải phân nhóm có liên quan, và các Quy tắc trên với những sửa đổi về chi tiết cho thích hợp, trong điều kiện là chỉ có những phân nhóm cùng cấp độ mới so sánh được. Theo Quy tắc này thì các chú giải phần và chương có liên quan cũng được áp dụng, trừ khi nội dung mô tả trong phân nhóm có những yêu cầu khác”

Quy tắc 6 chủ yếu quy định cách tiếp tục xác định mã HS Code ở cấp độ 6 mã số (Phân nhóm) và cấp độ 8 mã số, sau khi đã xác định được mã HS Code ở cấp độ 4 mã số (Nhóm).

Theo Quy tắc 6, mã HS Code ở cấp độ 6 mã số trở lên được xác định bằng cách áp dụng y hệt tuần tự các bước từ Quy tắc 1 đến Quy tắc 5 khi xét đến các mã số ở cùng cấp độ.

Chẳng hạn, sau khi đã xác định được mã HS Code phù hợp ở cấp độ 4 số là **8501 - Động cơ điện và máy phát điện**:

- Tiếp tục xem xét cấu trúc của Nhóm 8501 ở cấp độ 6 mã số. Theo Danh mục mã HS Code, Nhóm 8501 có cấu trúc ở cấp độ 6 mã số (Phân nhóm) như sau:
    - **8501:** Động cơ điện và máy phát điện (trừ tổ máy phát điện)
    - **8501.10:** - Động cơ có công suất không quá 37,5 W
    - **8501.20:** - Động cơ vạn năng một chiều/xoay chiều có công suất trên 37,5 W
    - **8501.40:** - Động cơ xoay chiều khác, một pha
- Xem xét và áp dụng tuần tự các Quy tắc 1 đến Quy tắc 5 để xác định hàng hóa thuộc Phân nhóm (cấp độ 6 mã số) nào phù hợp: 8501.10, hay 8501.20 hay 8501.40
- Sau khi xác định được mã HS Code ở cấp độ 6 mã số phù hợp, chẳng hạn thuộc Phân nhóm 8501.10, tiếp tục lặp lại quy trình tương tự đối với các mã HS Code ở cấp độ 8 mã số trong Phân nhóm 8501.10 để xác định mã HS Code phù hợp cho hàng hóa

**Như vậy, sau khi đi qua Quy tắc 6, các bước đầy đủ để xác định mã HS Code như sau:**

1. Dựa trên thông tin của hàng hóa, rà soát qua các phần chính của Danh mục mã HS Code để đưa ra đánh giá tổng quan và xác định các Phần, Chương, Nhóm có thể liên quan đến hàng hóa của mình
2. Tìm đọc các chú giải tại các Phần, Chương, Nhóm đã xác định được ở Bước 1
3. Rà soát các Quy tắc 2, 3, 4 và 5
4. Tổng hợp các thông tin sau khi rà soát và xem xét tại Bước 2 và Bước 3 để xác định Nhóm hàng phù hợp (cấp độ 4 mã số)
5. Sau khi xác định được Nhóm hàng phù hợp, áp dụng Quy tắc 6 để lần lượt xác định mã HS Code ở cấp độ 6 mã số (Phân nhóm) và cấp độ 8 mã số

![Quy trình xác định mã HS Code](/quy-trinh-xac-dinh-ma-HS-code.png)

## 4. Các lưu ý trong việc tra cứu và xác định mã số HS Code

Như đề cập tại **Quy tắc 0**, việc phân loại hàng hóa đôi khi có thể phụ thuộc vào ý kiến chủ quan của từng người. Do đó, bạn nên:

- tham khảo thêm các kết quả phân tích phân loại của cơ quan hải quan cho các mặt hàng tương tự (nếu có) để đánh giá thêm các mã HS Code phù hợp
- tham khảo thêm các ý kiến chuyên gia nếu có thể

Hiện nay, với sự phát triển của công nghệ AI, HSTC nhận thấy các bạn bắt đầu tra cứu HS Code bằng cách hỏi các công cụ AI miễn phí vốn được phát triển một cách tổng quát và chưa được huấn luyện riêng với các kiến thức về xác định mã HS Code cũng như các quy định của pháp luật Việt Nam. Việc tra cứu như vậy tuy giảm thiểu được công sức nhưng tiềm ẩn rủi ro lớn do những công cụ AI miễn phí như có thể chưa xét đến các dữ liệu chuyên về phân loại hàng hóa (Quy tắc phân loại, Chú giải, các kết quả phân loại tại Việt Nam).

**HSTC** hiện đang phát triển một công cụ AI với các kiến thức chuyên về phân loại hàng hóa cũng như kết hợp các kết quả phân tích phân loại đã được ban hành bởi cơ quan hải quan Việt Nam. Do đó, công cụ AI này có thể sẽ giúp đưa ra các kết quả tốt hơn.

Tuy nhiên, dù sử dụng công cụ AI nào hoặc kết quả như thế nào, bạn nên áp dụng các bước theo quy định pháp luật như trình bày ở trên kết hợp với sự hỗ trợ bởi các công cụ tra cứu (chẳng hạn của HSTC) để xác định được mã HS Code phù hợp nhất.

Hy vọng bài viết này sẽ giúp ích được các bạn trong công việc hàng ngày.

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
    `.trim()
  },
  {
    id: "6",
    slug: "thay-doi-ve-ho-so-hai-quan-theo-thong-tu-121-2025",
    title: "Thay đổi về hồ sơ hải quan theo Thông tư 121/2025",
    date: "2026-01-17",
    excerpt: "Điểm qua các thay đổi trong bộ hồ sơ hải quan xuất nhập khẩu theo Thông tư 121/2025.",
    coverImage: "/thay-doi-ho-so-hai-quan-121.png",
    content: `
Vào ngày 18/12/2025, Bộ Tài chính đã ban hành **Thông tư 121/2025/TT-BTC** sửa đổi, bổ sung một số điều tại Thông tư số 38/2015/TT-BTC ngày 25/3/2015 về thủ tục hải quan; kiểm tra, giám sát hải quan; thuế xuất khẩu, thuế nhập khẩu và quản lý thuế đối với hàng hoá xuất khẩu, nhập khẩu đã được sửa đổi, bổ sung bởi Thông tư 39/2018/TT-BTC ngày 20/4/2018.

Thông tư 121 đã sửa đổi bổ sung một số điểm tại **Điều 16 - Hồ sơ hải quan**. Cùng điểm qua các điểm thay đổi đáng lưu ý nhé.

## 1. Hồ sơ hải quan đối với hàng hóa xuất khẩu

Đối với hồ sơ hải quan của hàng hóa xuất khẩu, Thông tư 121 có các thay đổi đáng lưu ý sau:

- **Bổ sung trường hợp không phải nộp hóa đơn thương mại** khi doanh nghiệp đã xuất hóa đơn thương mại điện thử theo quy định tại các Nghị định về hóa đơn của Chính phủ. Quy định cụ thể tại Thông tư 121 như sau:

> “b) Hóa đơn thương mại hoặc chứng từ có giá trị tương đương trong trường hợp người mua phải thanh toán cho người bán.
>
> Trường hợp hóa đơn thương mại được cấp dưới dạng điện tử theo quy định tại điểm 2a Điều 8 Nghị định 123/2020/NĐ-CP ngày 19/10/2020 được sửa đổi, bổ sung bởi khoản 5 Điều 1 Nghị định 70/2025/NĐ-CP ngày 20/3/2025 của Chính phủ trước thời điểm khai báo hải quan thì người khai hải quan không phải nộp cho cơ quan hải quan khi làm thủ tục hải quan;”

- **Bỏ quy định về bảng kê lâm sản đối với gỗ nguyên liệu xuất khẩu** tại Điểm c của Thông tư trước đó. Tuy nhiên, theo thông tin tại Tờ trình về việc soạn thảo Thông tư 121, việc bãi bỏ quy định này không phải là bãi bỏ yêu cầu về nộp Bảng kê lâm sản mà thực chất Bảng kê lâm sản cũng như các chứng từ chuyên ngành khác được gộp chung vào điểm 1d để đảm bảo bao quát được cả các chứng từ do cơ quan quản lý chuyên ngành yêu cầu trong hồ sơ hải quan. Quy định tại Điểm 1d như sau:

> “d) Giấy thông báo miễn kiểm tra hoặc giấy thông báo kết quả kiểm tra chuyên ngành hoặc chứng từ khác theo quy định của pháp luật (sau đây gọi tắt là Giấy chứng nhận kiểm tra chuyên ngành)”.

- **Bổ sung quy định về việc nộp giấy chứng nhận đăng ký quyền xuất khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam**, trong trường hợp hàng hóa xuất khẩu của thương nhân nước ngoài. Quy định cụ thể tại Thông tư 121 như sau:

> “g) Đối với hàng hóa xuất khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam thực hiện quyền xuất khẩu: Giấy chứng nhận đăng ký quyền xuất khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam do Bộ Công Thương cấp”

- **Bổ sung quy định về việc nộp Giấy chứng nhận đầu tư đối với doanh nghiệp FDI** thực hiện quyền xuất khẩu. Tuy nhiên các chứng từ này chỉ phải nộp một lần cho một cơ quan hải quan. Quy định cụ thể tại Thông tư 121 như sau:

> “h) Đối với doanh nghiệp có vốn đầu tư nước ngoài thực hiện quyền xuất khẩu: Giấy chứng nhận đầu tư về hoạt động mua bán hàng hóa và các hoạt động liên quan đến mua bán hàng hóa của thương nhân có vốn đầu tư nước ngoài có đăng ký quyền xuất khẩu; Trường hợp không phải thực hiện cấp Giấy chứng nhận đầu tư thì nộp chứng từ tương đương. Trường hợp thực hiện thủ tục hải quan tại cùng một cơ quan hải quan thì người khai hải quan chỉ phải nộp các chứng từ quy định tại điểm g và điểm h khoản này lần đầu khi làm thủ tục hải quan.”

## 2. Hồ sơ hải quan đối với hàng hóa nhập khẩu

Đối với hồ sơ hải quan của hàng hóa nhập khẩu, Thông tư 121 có các thay đổi đáng lưu ý sau:

- **Làm rõ các thông tin cơ bản của vận đơn** hoặc các chứng từ vận tải có giá trị tương đương: tên, địa chỉ người gửi hàng, người nhận hàng; tên hàng, số lượng, trọng lượng; địa điểm xếp hàng lên phương tiện, địa điểm dỡ hàng; số hiệu phương tiện vận chuyển; tên người vận chuyển, thời gian, địa điểm phát hành chứng từ vận tải. Quy định cụ thể tại Thông tư 121 như sau:

> “c) Vận đơn hoặc các chứng từ vận tải khác có giá trị tương đương **(có các thông tin cơ bản sau: tên, địa chỉ người gửi hàng, người nhận hàng; tên hàng, số lượng, trọng lượng; địa điểm xếp hàng lên phương tiện, địa điểm dỡ hàng; số hiệu phương tiện vận chuyển; tên người vận chuyển, thời gian, địa điểm phát hành chứng từ vận tải)** đối với trường hợp hàng hóa vận chuyển bằng đường biển, đường hàng không, đường sắt, đường thủy nội địa, vận tải đa phương thức theo quy định của pháp luật (trừ hàng hoá nhập khẩu qua cửa khẩu biên giới đường bộ, hàng hóa gửi qua dịch vụ bưu chính, chuyển phát nhanh, hàng hoá mua bán giữa khu phi thuế quan và nội địa, hàng hóa nhập khẩu do người nhập cảnh mang theo đường hành lý) (sau đây gọi tắt là vận đơn)”

- **Bỏ quy định về bảng kê lâm sản đối với gỗ nguyên liệu nhập khẩu**. Tuy nhiên, theo thông tin tại Tờ trình về việc soạn thảo Thông tư 121, tương tự như trường hợp xuất khẩu, việc bãi bỏ quy định này không phải là bãi bỏ yêu cầu về nộp Bảng kê lâm sản mà thực chất để đảm bảo bao quát được cả các chứng từ do cơ quan quản lý chuyên ngành yêu cầu trong hồ sơ hải quan.

- **Bổ sung quy định về giấy chứng nhận đăng ký quyền nhập khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam**, trong trường hợp hàng hóa nhập khẩu của thương nhân nước ngoài. Quy định cụ thể tại Thông tư 121 như sau:

> “l) Đối với hàng hóa nhập khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam thực hiện quyền nhập khẩu: Giấy chứng nhận đăng ký quyền xuất khẩu, nhập khẩu của thương nhân nước ngoài không có hiện diện tại Việt Nam do Bộ Công Thương cấp”

- **Bổ sung quy định về việc nộp Giấy chứng nhận đầu tư đối với doanh nghiệp FDI** thực hiện quyền nhập khẩu. Tuy nhiên các chứng từ này chỉ phải nộp một lần cho một cơ quan hải quan. Quy định cụ thể tại Thông tư 121 như sau:

> “m) Đối với doanh nghiệp có vốn đầu tư nước ngoài thực hiện quyền nhập khẩu: Giấy chứng nhận đầu tư về hoạt động mua bán hàng hóa và các hoạt động liên quan đến mua bán hàng hóa của thương nhân có vốn đầu tư nước ngoài có đăng ký quyền xuất khẩu, quyền nhập khẩu; Trường hợp không phải thực hiện cấp Giấy chứng nhận đầu tư thì nộp chứng từ tương đương.
>
> Trường hợp thực hiện thủ tục hải quan tại cùng một cơ quan hải quan thì người khai hải quan chỉ phải nộp các chứng từ quy định tại điểm l và điểm m khoản này lần đầu khi làm thủ tục hải quan. Người khai phải khai tại ô “Số giấy phép” trên tờ khai hải quan điện tử đối với các chứng từ nêu tại điểm l, điểm m khoản này.”

## 3. Lưu giữ hồ sơ hải quan

Thông tư 121 bổ sung thêm quy định đáng lưu ý đối với chứng từ dưới dạng điện tử, cụ thể, người khai hải quan phải lưu bản điện tử của chứng từ ở dạng này theo quy định của Luật Giao dịch điện tử.

Theo quy định liên quan tại **Điều 13, Luật Giao dịch điện tử số 20/2023/QH15** ngày 22/6/2023:

> “**Điều 13. Hình thức lưu trữ thông điệp dữ liệu**
>
> 1. Trường hợp pháp luật yêu cầu văn bản, chứng từ, hồ sơ, tài liệu hoặc thông tin phải được lưu trữ thì văn bản, chứng từ, hồ sơ, tài liệu hoặc thông tin đó có thể được lưu trữ dưới dạng thông điệp dữ liệu khi đáp ứng đủ các yêu cầu sau đây:
> a) Thông tin trong thông điệp dữ liệu đó có thể truy cập và sử dụng được để tham chiếu;
> b) Thông tin trong thông điệp dữ liệu đó được lưu trong chính khuôn dạng được khởi tạo, gửi, nhận hoặc trong khuôn dạng cho phép thể hiện chính xác thông tin đó;
> c) Thông điệp dữ liệu đó được lưu trữ theo một cách thức nhất định cho phép xác định nguồn gốc khởi tạo, người gửi, người nhận, thời gian gửi, nhận thông điệp dữ liệu.
>
> 2. Trừ trường hợp pháp luật có quy định khác, cơ quan, tổ chức, cá nhân được lựa chọn lưu trữ văn bản, chứng từ, hồ sơ, tài liệu hoặc thông tin dưới dạng văn bản giấy hoặc lưu trữ dưới dạng thông điệp dữ liệu khi thông điệp dữ liệu đáp ứng các yêu cầu quy định tại khoản 1 Điều này.
>
> 3. Nội dung, thời hạn lưu trữ đối với thông điệp dữ liệu được thực hiện theo quy định của pháp luật về lưu trữ và quy định khác của pháp luật có liên quan. Việc lưu trữ thông điệp dữ liệu có giá trị như lưu trữ văn bản giấy.”

Dựa vào quy định nêu trên, các bạn cần lưu ý thêm các yêu cầu đối với chứng từ điện tử như quy định tại Điểm 1 nêu trên để đảm bảo tuân thủ pháp luật.

HSTC sẽ tiếp tục cập nhật thêm các điểm mới đáng lưu ý của Thông tư 121/2025. Hãy cùng theo dõi và chờ đón nhé.

Tham khảo toàn bộ các thay đổi tại Thông tư 121/2025 [ở bài viết này](/tin-tuc/so-sanh-thay-doi-mau-so-01-to-khai-nhap-khau-thong-tu-121). 

---
**HSTC** là công cụ miễn phí hỗ trợ tra cứu mã số HS Code nhanh và toàn diện, tích hợp các thông tin về chú giải và biểu thuế nhập khẩu. [Truy cập công cụ tra cứu HS Code tại đây](https://tracuuhs.com/search) để trải nghiệm thử tính năng tra cứu.
    `.trim()
  },
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
