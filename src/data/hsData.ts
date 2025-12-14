export interface HSItem {
  level: number;
  hsCode: string;
  description: string;
  standard?: string;
  mfn?: string;
  vat?: string;
  note?: string;
}

export const hsData: HSItem[] = [
  { level: 0, hsCode: "0101", description: "Ngựa, lừa, la sống" },
  { level: 2, hsCode: "01012100", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*", note: "Kiểm dịch động vật" },
  { level: 2, hsCode: "01012900", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5", note: "DM CITES" },
  { level: 1, hsCode: "010130", description: "- Lừa:" },
  { level: 2, hsCode: "01013010", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01013090", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 1, hsCode: "01019000", description: "- Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0102", description: "Động vật sống họ trâu bò" },
  { level: 2, hsCode: "01022100", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "010229", description: "- - Loại khác:" },
  { level: 4, hsCode: "01022911", description: "- - - - Bò thiến (SEN)", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 4, hsCode: "01022919", description: "- - - - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 3, hsCode: "01022990", description: "- - - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 2, hsCode: "01023100", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01023900", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 1, hsCode: "010290", description: "- Loại khác:" },
  { level: 2, hsCode: "01029010", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01029090", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0103", description: "Lợn sống" },
  { level: 1, hsCode: "01031000", description: "- Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01039100", description: "- - Khối lượng dưới 50 kg", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 2, hsCode: "01039200", description: "- - Khối lượng từ 50 kg trở lên", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0104", description: "Cừu, dê sống" },
  { level: 1, hsCode: "010410", description: "- Cừu:" },
  { level: 2, hsCode: "01041010", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01041090", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 1, hsCode: "010420", description: "- Dê:" },
  { level: 2, hsCode: "01042010", description: "- - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01042090", description: "- - Loại khác", standard: "7.5", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0105", description: "Gia cầm sống, gà, vịt, ngỗng, gà tây, gà lôi" },
  { level: 1, hsCode: "010511", description: "- - Gà:" },
  { level: 2, hsCode: "01051110", description: "- - - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01051190", description: "- - - Loại khác", standard: "10", mfn: "5", vat: "*,5" },
  { level: 1, hsCode: "010512", description: "- - Gà tây:" },
  { level: 2, hsCode: "01051210", description: "- - - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01051290", description: "- - - Loại khác", standard: "10", mfn: "5", vat: "*,5" },
  { level: 1, hsCode: "010513", description: "- - Vịt:" },
  { level: 2, hsCode: "01051310", description: "- - - Loại thuần chủng để nhân giống", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01051390", description: "- - - Loại khác", standard: "10", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0106", description: "Động vật sống khác" },
  { level: 1, hsCode: "010611", description: "- - Động vật linh trưởng:" },
  { level: 2, hsCode: "01061100", description: "- - - Động vật linh trưởng", standard: "5", mfn: "0", vat: "*" },
  { level: 1, hsCode: "010612", description: "- - Cá voi, cá heo:" },
  { level: 2, hsCode: "01061200", description: "- - - Cá voi, cá heo", standard: "5", mfn: "0", vat: "*" },
  { level: 1, hsCode: "010619", description: "- - Loại khác:" },
  { level: 2, hsCode: "01061910", description: "- - - Thỏ thuần chủng", standard: "5", mfn: "0", vat: "*" },
  { level: 2, hsCode: "01061990", description: "- - - Loại khác", standard: "5", mfn: "5", vat: "*,5" },
  { level: 0, hsCode: "0201", description: "Thịt trâu, bò, tươi hoặc ướp lạnh" },
  { level: 1, hsCode: "02011000", description: "- Thịt cả con hoặc nửa con", standard: "30", mfn: "14", vat: "*" },
  { level: 1, hsCode: "02012000", description: "- Thịt pha có xương khác", standard: "30", mfn: "14", vat: "*" },
  { level: 1, hsCode: "02013000", description: "- Thịt lọc không xương", standard: "30", mfn: "14", vat: "*" },
  { level: 0, hsCode: "0202", description: "Thịt trâu, bò, đông lạnh" },
  { level: 1, hsCode: "02021000", description: "- Thịt cả con hoặc nửa con", standard: "30", mfn: "14", vat: "*" },
  { level: 1, hsCode: "02022000", description: "- Thịt pha có xương khác", standard: "30", mfn: "14", vat: "*" },
  { level: 1, hsCode: "02023000", description: "- Thịt lọc không xương", standard: "30", mfn: "14", vat: "*" },
  { level: 0, hsCode: "0203", description: "Thịt lợn tươi, ướp lạnh hoặc đông lạnh" },
  { level: 1, hsCode: "020311", description: "- - Thịt cả con hoặc nửa con:" },
  { level: 2, hsCode: "02031100", description: "- - - Thịt cả con hoặc nửa con", standard: "25", mfn: "15", vat: "*" },
  { level: 1, hsCode: "020312", description: "- - Thịt mông, vai và các mảnh của chúng, có xương:" },
  { level: 2, hsCode: "02031200", description: "- - - Thịt mông, vai", standard: "25", mfn: "15", vat: "*" },
  { level: 0, hsCode: "0204", description: "Thịt cừu hoặc dê, tươi, ướp lạnh hoặc đông lạnh" },
  { level: 1, hsCode: "02041000", description: "- Thịt cừu cả con hoặc nửa con, tươi hoặc ướp lạnh", standard: "5", mfn: "5", vat: "*" },
  { level: 1, hsCode: "02042100", description: "- - Thịt cả con hoặc nửa con", standard: "5", mfn: "5", vat: "*" },
  { level: 1, hsCode: "02042200", description: "- - Thịt pha có xương khác", standard: "5", mfn: "5", vat: "*" },
  { level: 0, hsCode: "0207", description: "Thịt và phụ phẩm ăn được sau giết mổ, của gia cầm" },
  { level: 1, hsCode: "020711", description: "- - Chưa chặt mảnh, tươi hoặc ướp lạnh:" },
  { level: 2, hsCode: "02071100", description: "- - - Thịt gà tươi hoặc ướp lạnh", standard: "40", mfn: "20", vat: "*" },
  { level: 1, hsCode: "020712", description: "- - Chưa chặt mảnh, đông lạnh:" },
  { level: 2, hsCode: "02071200", description: "- - - Thịt gà đông lạnh", standard: "40", mfn: "20", vat: "*" },
  { level: 1, hsCode: "020713", description: "- - Đã chặt mảnh và phụ phẩm, tươi hoặc ướp lạnh:" },
  { level: 2, hsCode: "02071310", description: "- - - Cánh gà", standard: "40", mfn: "20", vat: "*" },
  { level: 2, hsCode: "02071320", description: "- - - Đùi gà", standard: "40", mfn: "20", vat: "*" },
  { level: 2, hsCode: "02071390", description: "- - - Loại khác", standard: "40", mfn: "20", vat: "*" },
  { level: 0, hsCode: "0301", description: "Cá sống" },
  { level: 1, hsCode: "030111", description: "- - Cá nước ngọt:" },
  { level: 2, hsCode: "03011110", description: "- - - Cá chép", standard: "15", mfn: "10", vat: "*" },
  { level: 2, hsCode: "03011190", description: "- - - Loại khác", standard: "15", mfn: "10", vat: "*" },
  { level: 1, hsCode: "030119", description: "- - Loại khác:" },
  { level: 2, hsCode: "03011910", description: "- - - Cá hồi", standard: "15", mfn: "10", vat: "*" },
  { level: 2, hsCode: "03011990", description: "- - - Loại khác", standard: "15", mfn: "10", vat: "*" },
  { level: 0, hsCode: "0302", description: "Cá tươi hoặc ướp lạnh, trừ filê cá" },
  { level: 1, hsCode: "030211", description: "- - Cá hồi vân:" },
  { level: 2, hsCode: "03021100", description: "- - - Cá hồi vân", standard: "15", mfn: "12", vat: "*" },
  { level: 1, hsCode: "030213", description: "- - Cá hồi Thái Bình Dương:" },
  { level: 2, hsCode: "03021300", description: "- - - Cá hồi Thái Bình Dương", standard: "15", mfn: "12", vat: "*" },
  { level: 0, hsCode: "0303", description: "Cá đông lạnh, trừ filê cá" },
  { level: 1, hsCode: "030311", description: "- - Cá hồi đỏ:" },
  { level: 2, hsCode: "03031100", description: "- - - Cá hồi đỏ", standard: "15", mfn: "12", vat: "*" },
  { level: 0, hsCode: "0401", description: "Sữa và kem, chưa cô đặc, chưa pha thêm đường hoặc chất tạo ngọt" },
  { level: 1, hsCode: "04011000", description: "- Có hàm lượng chất béo không quá 1%", standard: "15", mfn: "10", vat: "*" },
  { level: 1, hsCode: "04012000", description: "- Có hàm lượng chất béo trên 1% đến 6%", standard: "15", mfn: "10", vat: "*" },
  { level: 0, hsCode: "0402", description: "Sữa và kem, cô đặc hoặc đã pha thêm đường hoặc chất tạo ngọt" },
  { level: 1, hsCode: "040210", description: "- Dạng bột, hạt:" },
  { level: 2, hsCode: "04021010", description: "- - - Sữa bột", standard: "15", mfn: "10", vat: "*" },
  { level: 2, hsCode: "04021090", description: "- - - Loại khác", standard: "15", mfn: "10", vat: "*" },
  { level: 0, hsCode: "0701", description: "Khoai tây, tươi hoặc ướp lạnh" },
  { level: 1, hsCode: "07011000", description: "- Để làm giống", standard: "10", mfn: "5", vat: "*" },
  { level: 1, hsCode: "07019000", description: "- Loại khác", standard: "15", mfn: "10", vat: "10" },
  { level: 0, hsCode: "0702", description: "Cà chua, tươi hoặc ướp lạnh" },
  { level: 1, hsCode: "07020000", description: "- Cà chua", standard: "15", mfn: "10", vat: "10" },
  { level: 0, hsCode: "0703", description: "Hành, hẹ, tỏi, tỏi tây, tươi hoặc ướp lạnh" },
  { level: 1, hsCode: "07031010", description: "- - Hành giống", standard: "10", mfn: "5", vat: "*" },
  { level: 1, hsCode: "07031090", description: "- - Loại khác", standard: "15", mfn: "10", vat: "10" },
  { level: 1, hsCode: "07032010", description: "- - Tỏi giống", standard: "10", mfn: "5", vat: "*" },
  { level: 1, hsCode: "07032090", description: "- - Loại khác", standard: "15", mfn: "10", vat: "10" },
  { level: 0, hsCode: "0801", description: "Dừa, quả hạch Brazil và hạt điều, tươi hoặc khô" },
  { level: 1, hsCode: "080111", description: "- - Dừa khô:" },
  { level: 2, hsCode: "08011100", description: "- - - Dừa khô", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "080112", description: "- - Dừa còn sọ:" },
  { level: 2, hsCode: "08011200", description: "- - - Dừa còn sọ", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08012100", description: "- - Hạch Brazil, còn vỏ", standard: "5", mfn: "5", vat: "*" },
  { level: 1, hsCode: "08012200", description: "- - Hạch Brazil, đã bóc vỏ", standard: "5", mfn: "5", vat: "*" },
  { level: 1, hsCode: "08013100", description: "- - Hạt điều, còn vỏ", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08013200", description: "- - Hạt điều, đã bóc vỏ", standard: "30", mfn: "20", vat: "*" },
  { level: 0, hsCode: "0802", description: "Quả hạch khác, tươi hoặc khô" },
  { level: 1, hsCode: "080211", description: "- - Hạnh nhân:" },
  { level: 2, hsCode: "08021100", description: "- - - Hạnh nhân còn vỏ", standard: "15", mfn: "10", vat: "*" },
  { level: 2, hsCode: "08021200", description: "- - - Hạnh nhân đã bóc vỏ", standard: "15", mfn: "10", vat: "*" },
  { level: 1, hsCode: "080221", description: "- - Phỉ:" },
  { level: 2, hsCode: "08022100", description: "- - - Phỉ còn vỏ", standard: "15", mfn: "10", vat: "*" },
  { level: 2, hsCode: "08022200", description: "- - - Phỉ đã bóc vỏ", standard: "15", mfn: "10", vat: "*" },
  { level: 0, hsCode: "0803", description: "Chuối, kể cả chuối lá, tươi hoặc khô" },
  { level: 1, hsCode: "08031000", description: "- Chuối lá", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08039000", description: "- Loại khác", standard: "30", mfn: "20", vat: "*" },
  { level: 0, hsCode: "0804", description: "Chà là, sung, vả, dứa, bơ, ổi, xoài, măng cụt, tươi hoặc khô" },
  { level: 1, hsCode: "08041000", description: "- Chà là", standard: "15", mfn: "10", vat: "*" },
  { level: 1, hsCode: "08042000", description: "- Sung, vả", standard: "15", mfn: "10", vat: "*" },
  { level: 1, hsCode: "08043000", description: "- Dứa", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08044000", description: "- Bơ", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08045010", description: "- - Ổi", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08045020", description: "- - Xoài", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08045030", description: "- - Măng cụt", standard: "30", mfn: "20", vat: "*" },
  { level: 0, hsCode: "0805", description: "Quả có múi, tươi hoặc khô" },
  { level: 1, hsCode: "08051000", description: "- Cam", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08052100", description: "- - Quýt", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08052200", description: "- - Cam quýt", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08054000", description: "- Bưởi chùm và bưởi", standard: "30", mfn: "20", vat: "*" },
  { level: 1, hsCode: "08055000", description: "- Chanh và chanh tây", standard: "30", mfn: "20", vat: "*" },
  { level: 0, hsCode: "8471", description: "Máy xử lý dữ liệu tự động và các khối chức năng" },
  { level: 1, hsCode: "84713000", description: "- Máy xử lý dữ liệu cầm tay (laptop)", standard: "0", mfn: "0", vat: "10" },
  { level: 1, hsCode: "84714100", description: "- - Có bộ xử lý và đơn vị nhập, xuất", standard: "0", mfn: "0", vat: "10" },
  { level: 1, hsCode: "84714900", description: "- - Loại khác, dạng hệ thống", standard: "0", mfn: "0", vat: "10" },
  { level: 1, hsCode: "84715000", description: "- Bộ xử lý không phải loại 8471.41 hoặc 8471.49", standard: "0", mfn: "0", vat: "10" },
  { level: 0, hsCode: "8517", description: "Điện thoại, bao gồm cả điện thoại thông minh và điện thoại khác" },
  { level: 1, hsCode: "851712", description: "- - Điện thoại di động hoặc điện thoại mạng không dây:" },
  { level: 2, hsCode: "85171210", description: "- - - Điện thoại di động", standard: "0", mfn: "0", vat: "10" },
  { level: 2, hsCode: "85171290", description: "- - - Loại khác", standard: "0", mfn: "0", vat: "10" },
  { level: 1, hsCode: "85171800", description: "- - Loại khác", standard: "0", mfn: "0", vat: "10" },
  { level: 0, hsCode: "8528", description: "Màn hình và máy chiếu, không gắn với thiết bị thu truyền hình" },
  { level: 1, hsCode: "85284200", description: "- - Có khả năng kết nối trực tiếp với máy xử lý dữ liệu", standard: "10", mfn: "5", vat: "10" },
  { level: 1, hsCode: "85285200", description: "- - Có khả năng kết nối trực tiếp với máy xử lý dữ liệu", standard: "10", mfn: "5", vat: "10" },
  { level: 0, hsCode: "8703", description: "Xe ô tô và xe chở người khác" },
  { level: 1, hsCode: "870310", description: "- Xe được thiết kế đặc biệt để di chuyển trên tuyết:" },
  { level: 2, hsCode: "87031000", description: "- - Xe chạy trên tuyết", standard: "70", mfn: "50", vat: "10" },
  { level: 1, hsCode: "870321", description: "- - Dung tích xi lanh không quá 1.000 cc:" },
  { level: 2, hsCode: "87032100", description: "- - - Xe ô tô dưới 1000cc", standard: "70", mfn: "50", vat: "10" },
  { level: 1, hsCode: "870322", description: "- - Dung tích xi lanh trên 1.000 cc đến 1.500 cc:" },
  { level: 2, hsCode: "87032200", description: "- - - Xe ô tô 1000-1500cc", standard: "70", mfn: "50", vat: "10" },
  { level: 1, hsCode: "870323", description: "- - Dung tích xi lanh trên 1.500 cc đến 3.000 cc:" },
  { level: 2, hsCode: "87032300", description: "- - - Xe ô tô 1500-3000cc", standard: "80", mfn: "55", vat: "10" },
  { level: 0, hsCode: "9401", description: "Ghế ngồi (trừ ghế thuộc nhóm 94.02), có hoặc không chuyển đổi thành giường" },
  { level: 1, hsCode: "94011000", description: "- Ghế dùng cho máy bay", standard: "20", mfn: "15", vat: "10" },
  { level: 1, hsCode: "94012000", description: "- Ghế dùng cho xe có động cơ", standard: "20", mfn: "15", vat: "10" },
  { level: 1, hsCode: "94013000", description: "- Ghế xoay có thể điều chỉnh độ cao", standard: "25", mfn: "20", vat: "10" },
  { level: 1, hsCode: "94014100", description: "- - Ghế có khung gỗ, được bọc đệm", standard: "25", mfn: "20", vat: "10" },
  { level: 0, hsCode: "9403", description: "Đồ nội thất khác và các bộ phận của chúng" },
  { level: 1, hsCode: "94031000", description: "- Đồ nội thất bằng kim loại dùng trong văn phòng", standard: "25", mfn: "20", vat: "10" },
  { level: 1, hsCode: "94032000", description: "- Đồ nội thất bằng kim loại khác", standard: "25", mfn: "20", vat: "10" },
  { level: 1, hsCode: "94033000", description: "- Đồ nội thất bằng gỗ dùng trong văn phòng", standard: "25", mfn: "20", vat: "10" },
  { level: 1, hsCode: "94034000", description: "- Đồ nội thất bằng gỗ dùng trong nhà bếp", standard: "25", mfn: "20", vat: "10" },
  { level: 1, hsCode: "94035000", description: "- Đồ nội thất bằng gỗ dùng trong phòng ngủ", standard: "25", mfn: "20", vat: "10" },
];

// Helper function to get heading (Level 0) for any item
export function getHeadingForItem(item: HSItem, allItems: HSItem[]): HSItem | null {
  const itemIndex = allItems.indexOf(item);
  if (itemIndex === -1) return null;
  
  // Search backwards for the nearest Level 0 item
  for (let i = itemIndex; i >= 0; i--) {
    if (allItems[i].level === 0) {
      return allItems[i];
    }
  }
  return null;
}

// Helper function to get parent chain for an item
export function getParentChain(item: HSItem, allItems: HSItem[]): HSItem[] {
  const result: HSItem[] = [];
  const itemIndex = allItems.indexOf(item);
  if (itemIndex === -1) return result;
  
  let currentLevel = item.level;
  
  // Search backwards for parent items
  for (let i = itemIndex - 1; i >= 0; i--) {
    if (allItems[i].level < currentLevel) {
      result.unshift(allItems[i]);
      currentLevel = allItems[i].level;
    }
    if (allItems[i].level === 0) break;
  }
  
  return result;
}

// Filter function for search
export function searchHSData(keyword: string): {
  headings: HSItem[];
  detailed: { item: HSItem; parents: HSItem[] }[];
} {
  const lowerKeyword = keyword.toLowerCase().trim();
  if (!lowerKeyword) {
    return { headings: [], detailed: [] };
  }

  const matchingItems = hsData.filter(
    item =>
      item.hsCode.toLowerCase().includes(lowerKeyword) ||
      item.description.toLowerCase().includes(lowerKeyword)
  );

  // Get unique headings for matching items
  const headingsSet = new Set<HSItem>();
  matchingItems.forEach(item => {
    const heading = getHeadingForItem(item, hsData);
    if (heading) {
      headingsSet.add(heading);
    }
  });

  // Get detailed results with parent chains
  const detailed = matchingItems.map(item => ({
    item,
    parents: getParentChain(item, hsData),
  }));

  return {
    headings: Array.from(headingsSet),
    detailed,
  };
}
