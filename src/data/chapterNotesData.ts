// Chapter Notes Data - Explanatory Notes for HS Code Chapters 1-10
// This file contains bilingual (Vietnamese/English) explanatory notes for HS classification

export interface HeadingNote {
  code: string;
  titleVi: string;
  titleEn: string;
  contentVi: string;
  contentEn: string;
}

export interface ChapterNote {
  chapter: number;
  section: number;
  sectionTitleVi: string;
  sectionTitleEn: string;
  titleVi: string;
  titleEn: string;
  notesVi: string[];
  notesEn: string[];
  generalVi: string;
  generalEn: string;
  headings: HeadingNote[];
}

export const chapterNotesData: ChapterNote[] = [
  {
    chapter: 1,
    section: 1,
    sectionTitleVi: "ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT",
    sectionTitleEn: "LIVE ANIMALS; ANIMAL PRODUCTS",
    titleVi: "Động vật sống",
    titleEn: "Live animals",
    notesVi: [
      "Chương này bao gồm tất cả các loại động vật sống trừ: (a) Cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác (nhóm 03.01, 03.06, 03.07 hoặc 03.08); (b) Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; (c) Động vật thuộc nhóm 95.08."
    ],
    notesEn: [
      "This Chapter covers all live animals except: (a) Fish and crustaceans, molluscs and other aquatic invertebrates, of heading 03.01, 03.06, 03.07 or 03.08; (b) Cultures of micro-organisms and other products of heading 30.02; (c) Animals of heading 95.08."
    ],
    generalVi: "Chương này bao gồm tất cả các loại sinh vật sống (dùng làm thực phẩm hoặc có các mục đích khác) trừ: Cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác; Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; Bầy thú thuộc rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác (nhóm 95.08). Động vật, kể cả côn trùng, chết trên đường vận chuyển được phân loại vào các nhóm từ 02.01 đến 02.05, 02.07, 02.08 hoặc 04.10 nếu chúng là những động vật ăn được thích hợp dùng làm thức ăn cho người. Trong những trường hợp khác, chúng được phân loại vào nhóm 05.11.",
    generalEn: "This Chapter covers all living creatures (for food or other purposes) except: Fish and crustaceans, molluscs and other aquatic invertebrates; Cultures of micro-organisms and other products of heading 30.02; Animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08). Animals, including insects, which die during transport are classified in headings 02.01 to 02.05, 02.07, 02.08 or 04.10 if they are edible animals fit for human consumption. In other cases, they are classified in heading 05.11.",
    headings: [
      {
        code: "01.01",
        titleVi: "Ngựa, lừa, la sống",
        titleEn: "Live horses, asses, mules and hinnies",
        contentVi: "Nhóm này gồm các loại ngựa (ngựa cái, ngựa đực, ngựa thiến, ngựa con và ngựa nhỏ (pony)), lừa, la, nuôi hoặc hoang. Con la (mule) là con lai giữa lừa đực và ngựa cái. Con la (hinny) là con lai giữa ngựa đực và lừa cái. Theo mục đích của phân nhóm 0101.21, thuật ngữ \"loại thuần chủng để nhân giống\" chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là \"thuần chủng\".",
        contentEn: "This heading covers horses (mares, stallions, geldings, foals and ponies), asses, mules and hinnies, whether domestic or wild. Mules are the hybrid offspring of the ass and the mare. The hinny is bred from the stallion and the ass. For the purposes of subheading 0101.21, the expression \"pure-bred breeding animals\" covers only those breeding animals which are regarded as \"pure-bred\" by the competent national authorities."
      },
      {
        code: "01.02",
        titleVi: "Động vật sống họ trâu bò",
        titleEn: "Live bovine animals",
        contentVi: "Nhóm này bao gồm tất cả các loại trâu bò thuộc phân họ Bovinae, nuôi hoặc hoang và dù mục đích sử dụng thế nào (ví dụ: dự trữ, chăn nuôi, vỗ béo, nhân giống, làm thịt). Bao gồm: (1) Gia súc: Bò thông thường (Bos taurus), bò Zebu hoặc bò có bướu (Bos indicus), bò Tây Tạng (Bos grunniens); (2) Trâu: Trâu Ấn Độ hoặc trâu nước (Bubalus bubalus), bò rừng bizon Châu Mỹ (Bison bison).",
        contentEn: "This heading covers all animals of the sub-family Bovinae, whether or not domestic and irrespective of their intended use (e.g., stock, raising, fattening, breeding, slaughter). These include: (1) Cattle: The common ox (Bos taurus), the Zebu or humped ox (Bos indicus), the Tibetan yak (Bos grunniens); (2) Buffalo: The Indian or water buffalo (Bubalus bubalus), the American bison (Bison bison)."
      },
      {
        code: "01.03",
        titleVi: "Lợn sống",
        titleEn: "Live swine",
        contentVi: "Nhóm này gồm lợn nuôi và hoang (như lợn lòi). Theo mục đích của phân nhóm 0103.10, thuật ngữ \"loại thuần chủng để nhân giống\" chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là \"thuần chủng\". Theo mục đích của các phân nhóm 0103.91 và 0103.92, các giới hạn trọng lượng được mô tả liên quan đến trọng lượng của mỗi con vật.",
        contentEn: "This heading covers both domestic pigs and wild pigs (e.g., wild boars). For the purposes of subheading 0103.10, the expression \"pure-bred breeding animals\" covers only those breeding animals which are regarded as \"pure-bred\" by the competent national authorities. For the purposes of subheadings 0103.91 and 0103.92, the specified weight limits relate to the weight of each animal."
      },
      {
        code: "01.04",
        titleVi: "Cừu, dê sống",
        titleEn: "Live sheep and goats",
        contentVi: "Nhóm này bao gồm cừu nuôi hoặc hoang (cừu đực, cừu cái và cừu non), dê và dê con nuôi hoặc hoang.",
        contentEn: "This heading covers domestic or wild sheep (rams, ewes, and lambs) and domestic or wild goats and kids."
      },
      {
        code: "01.05",
        titleVi: "Gia cầm sống, gồm các loại gà thuộc loài Gallus domesticus, vịt, ngan, ngỗng, gà tây và gà lôi",
        titleEn: "Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls",
        contentVi: "Nhóm này chỉ bao gồm các loại chim nuôi còn sống được chỉ rõ trong nhóm. Gà thuộc các loài Gallus domesticus gồm gà giò và gà trống thiến. Nhóm này không bao gồm các loại chim sống khác (vd, gà gô, gà lôi, chim bồ câu, vịt trời, ngỗng trời) (nhóm 01.06). Theo mục đích của các phân nhóm 0105.11 đến 0105.15, giới hạn trọng lượng được mô tả liên quan đến trọng lượng của mỗi con chim.",
        contentEn: "This heading covers only live domestic birds of the kinds specified in the heading. Fowls of the species Gallus domesticus include chickens and capons. Other live birds (e.g., partridges, pheasants, pigeons, wild ducks, wild geese) are excluded (heading 01.06). For the purposes of subheadings 0105.11 to 0105.15, the specified weight limit relates to the weight of each bird."
      },
      {
        code: "01.06",
        titleVi: "Động vật sống khác",
        titleEn: "Other live animals",
        contentVi: "Nhóm này bao gồm: (A) Động vật có vú: Bộ động vật linh trưởng, cá voi, hải cẩu, lạc đà, thỏ, hươu nai, sư tử, hổ, gấu, voi, ngựa vằn, chồn vizon và những loại thú nuôi lấy lông khác; (B) Loài bò sát (bao gồm cả rắn và rùa); (C) Các loại chim: Chim săn mồi, vẹt, đà điểu và các loại khác; (D) Côn trùng, ví dụ các loại ong; (E) Loại khác, ví dụ các loại ếch. Nhóm này không bao gồm bầy thú thuộc rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác (nhóm 95.08).",
        contentEn: "This heading covers: (A) Mammals: Primates, whales, seals, camels, rabbits, deer, lions, tigers, bears, elephants, zebras, mink and other fur animals; (B) Reptiles (including snakes and turtles); (C) Birds: Birds of prey, parrots, ostriches and others; (D) Insects, e.g., bees; (E) Other, e.g., frogs. This heading does not cover animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08)."
      }
    ]
  },
  {
    chapter: 2,
    section: 1,
    sectionTitleVi: "ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT",
    sectionTitleEn: "LIVE ANIMALS; ANIMAL PRODUCTS",
    titleVi: "Thịt và phụ phẩm dạng thịt ăn được sau giết mổ",
    titleEn: "Meat and edible meat offal",
    notesVi: [
      "Chương này không bao gồm: (a) Những sản phẩm thuộc loại đã được mô tả trong các nhóm 02.01 đến 02.08 hoặc 02.10, nhưng không thích hợp làm thức ăn cho người; (b) Côn trùng không còn sống, ăn được (nhóm 04.10); (c) Ruột, bong bóng hoặc dạ dày của động vật (nhóm 05.04) hoặc tiết động vật (nhóm 05.11 hoặc 30.02); (d) Mỡ động vật, trừ các sản phẩm của nhóm 02.09 (Chương 15)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Products of the kinds described in headings 02.01 to 02.08 or 02.10, unfit or unsuitable for human consumption; (b) Dead edible insects (heading 04.10); (c) Guts, bladders or stomachs of animals (heading 05.04) or animal blood (heading 05.11 or 30.02); (d) Animal fat, other than products of heading 02.09 (Chapter 15)."
    ],
    generalVi: "Chương này bao gồm thịt cả con (tức là thân thịt động vật có hoặc không có đầu), nửa con (tức là thân thịt động vật bổ dọc làm đôi), phần tư con, miếng v.v..., phụ phẩm dạng thịt sau giết mổ, và bột mịn và bột thô của thịt hoặc phụ phẩm dạng thịt sau giết mổ, của tất cả các loại động vật (trừ cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác), thích hợp dùng làm thức ăn cho người. Phụ phẩm sau giết mổ có thể chia thành bốn loại: (1) Chủ yếu làm thức ăn cho người; (2) Chỉ dùng làm chế phẩm của các mặt hàng dược phẩm; (3) Có thể dùng làm thức ăn cho người hoặc làm chế phẩm dược phẩm; (4) Như là da, có thể dùng làm thức ăn cho người hoặc dùng vào mục đích khác.",
    generalEn: "This Chapter covers meat in carcasses (that is the animal's body with or without head), half-carcasses (that is to say, carcasses divided lengthwise), quarters, cuts, etc., meat offal, and flours and meals of meat or meat offal, of all animals (other than fish and crustaceans, molluscs and other aquatic invertebrates), fit for human consumption. Offal can generally be divided into four categories: (1) That which is mainly used for human consumption; (2) That which is used solely in the preparation of pharmaceutical products; (3) That which can be used for human consumption or for pharmaceutical preparation; (4) That, such as skins, which can be used for human consumption or for other purposes.",
    headings: [
      {
        code: "02.01",
        titleVi: "Thịt của động vật họ trâu bò, tươi hoặc ướp lạnh",
        titleEn: "Meat of bovine animals, fresh or chilled",
        contentVi: "Nhóm này gồm thịt tươi hoặc ướp lạnh của động vật họ trâu bò nuôi hoặc hoang thuộc nhóm 01.02. Bao gồm: 0201.10 - Thịt cả con và nửa con; 0201.20 - Thịt pha có xương khác; 0201.30 - Thịt lọc không xương.",
        contentEn: "This heading covers fresh or chilled meat of domestic or wild bovine animals of heading 01.02. Includes: 0201.10 - Carcasses and half-carcasses; 0201.20 - Other cuts with bone in; 0201.30 - Boneless."
      },
      {
        code: "02.02",
        titleVi: "Thịt của động vật họ trâu bò, đông lạnh",
        titleEn: "Meat of bovine animals, frozen",
        contentVi: "Nhóm này gồm thịt đông lạnh của động vật họ trâu bò nuôi hoặc hoang thuộc nhóm 01.02.",
        contentEn: "This heading covers frozen meat of domestic or wild bovine animals of heading 01.02."
      },
      {
        code: "02.03",
        titleVi: "Thịt lợn, tươi, ướp lạnh hoặc đông lạnh",
        titleEn: "Meat of swine, fresh, chilled or frozen",
        contentVi: "Nhóm này bao gồm thịt tươi, ướp lạnh hoặc đông lạnh của lợn nuôi hoặc hoang (ví dụ: lợn lòi). Nhóm này gồm thịt ba chỉ và các loại thịt tương tự có tỷ lệ mỡ giắt cao và mỡ tạo thành lớp dính với thịt.",
        contentEn: "This heading covers fresh, chilled or frozen meat of pigs and other swine, whether domestic or wild (e.g., wild boars). The heading includes streaky pork and similar meats interlarded with a high proportion of fat, and fat with an adhering layer of meat."
      },
      {
        code: "02.04",
        titleVi: "Thịt cừu hoặc dê, tươi, ướp lạnh hoặc đông lạnh",
        titleEn: "Meat of sheep or goats, fresh, chilled or frozen",
        contentVi: "Nhóm này bao gồm thịt tươi, ướp lạnh hoặc đông lạnh của cừu (cừu đực, cừu cái và cừu non), dê hoặc dê non, nuôi hoặc hoang. Theo mục đích của các phân nhóm 0204.10 và 0204.30, thịt cừu non là thịt từ một động vật thuộc loài cừu không quá 12 tháng tuổi.",
        contentEn: "This heading covers fresh, chilled or frozen meat of sheep (rams, ewes and lambs), goats or kids, whether domestic or wild. For the purposes of subheadings 0204.10 and 0204.30, meat of lamb is that of an animal of the ovine species not more than 12 months old."
      },
      {
        code: "02.05",
        titleVi: "Thịt ngựa, lừa, la, tươi, ướp lạnh hoặc đông lạnh",
        titleEn: "Meat of horses, asses, mules or hinnies, fresh, chilled or frozen",
        contentVi: "Nhóm này gồm thịt tươi, ướp lạnh hoặc đông lạnh của những động vật mà khi còn sống được phân loại vào nhóm 01.01.",
        contentEn: "This heading covers fresh, chilled or frozen meat of the animals which, while living, are classified in heading 01.01."
      },
      {
        code: "02.06",
        titleVi: "Phụ phẩm ăn được sau giết mổ của lợn, động vật họ trâu bò, cừu, dê, ngựa, la, lừa, tươi, ướp lạnh hoặc đông lạnh",
        titleEn: "Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen",
        contentVi: "Nhóm này bao gồm phụ phẩm ăn được sau giết mổ như: lưỡi, gan, thận và các phụ phẩm khác của động vật họ trâu bò, lợn, cừu, dê, ngựa, la, lừa.",
        contentEn: "This heading covers edible offal such as: tongues, livers, kidneys and other offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies."
      }
    ]
  },
  {
    chapter: 3,
    section: 1,
    sectionTitleVi: "ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT",
    sectionTitleEn: "LIVE ANIMALS; ANIMAL PRODUCTS",
    titleVi: "Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác",
    titleEn: "Fish and crustaceans, molluscs and other aquatic invertebrates",
    notesVi: [
      "Chương này không bao gồm: (a) Động vật có vú thuộc nhóm 01.06; (b) Thịt của động vật có vú thuộc nhóm 01.06 (nhóm 02.08 hoặc 02.10); (c) Cá hoặc động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác, đã chết và không thích hợp dùng làm thức ăn cho người (Chương 5)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Mammals of heading 01.06; (b) Meat of mammals of heading 01.06 (heading 02.08 or 02.10); (c) Fish or crustaceans, molluscs or other aquatic invertebrates, dead and unfit or unsuitable for human consumption (Chapter 5)."
    ],
    generalVi: "Chương này bao gồm tất cả các loại cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, sống hoặc chết, dù thuộc loại dùng làm thức ăn cho người hay không, để nguyên con hay được chế biến nhất định (ví dụ: làm lạnh, đông lạnh, làm khô, muối, ngâm nước muối hoặc hun khói). Các sản phẩm phi-lê cá và thịt cá khác (đã hoặc chưa xay, nghiền, làm thành viên) cũng thuộc Chương này.",
    generalEn: "This Chapter covers all kinds of fish and crustaceans, molluscs and other aquatic invertebrates, whether live or dead, and whether or not intended for human consumption, in their natural form or subjected to certain processing (e.g., chilling, freezing, drying, salting, in brine or smoked). Fish fillets and other fish meat (whether or not minced or made into pellets) are also covered by this Chapter.",
    headings: [
      {
        code: "03.01",
        titleVi: "Cá sống",
        titleEn: "Live fish",
        contentVi: "Nhóm này bao gồm tất cả các loại cá sống, dù dùng hay không dùng làm thức ăn cho người. Cá thuộc nhóm này có thể được vận chuyển trong các bình hoặc thùng chứa nước hoặc có thể được gói trong các túi nhựa có oxy.",
        contentEn: "This heading covers all kinds of live fish, whether or not for human consumption. Fish of this heading may be transported in containers of water or may be packed in plastic bags with oxygen."
      },
      {
        code: "03.02",
        titleVi: "Cá, tươi hoặc ướp lạnh, trừ phi-lê cá và các loại thịt cá khác thuộc nhóm 03.04",
        titleEn: "Fish, fresh or chilled, excluding fish fillets and other fish meat of heading 03.04",
        contentVi: "Nhóm này bao gồm cá tươi hoặc ướp lạnh (bao gồm cá sống chết trên đường vận chuyển), dù để nguyên con, đã bỏ đầu, bỏ ruột, hoặc đã được xử lý tương tự.",
        contentEn: "This heading covers fresh or chilled fish (including live fish which die during transport), whether whole, headed, gutted, or similarly processed."
      },
      {
        code: "03.03",
        titleVi: "Cá, đông lạnh, trừ phi-lê cá và các loại thịt cá khác thuộc nhóm 03.04",
        titleEn: "Fish, frozen, excluding fish fillets and other fish meat of heading 03.04",
        contentVi: "Nhóm này bao gồm cá đông lạnh, dù để nguyên con, đã bỏ đầu, bỏ ruột, hoặc đã được xử lý tương tự. Nhóm này không bao gồm phi-lê cá và các loại thịt cá khác.",
        contentEn: "This heading covers frozen fish, whether whole, headed, gutted, or similarly processed. Fish fillets and other fish meat are excluded."
      }
    ]
  },
  {
    chapter: 4,
    section: 1,
    sectionTitleVi: "ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT",
    sectionTitleEn: "LIVE ANIMALS; ANIMAL PRODUCTS",
    titleVi: "Sản phẩm bơ sữa; trứng chim và trứng gia cầm; mật ong tự nhiên; sản phẩm ăn được gốc động vật, chưa được chi tiết hoặc ghi ở nơi khác",
    titleEn: "Dairy produce; birds' eggs; natural honey; edible products of animal origin, not elsewhere specified or included",
    notesVi: [
      "Khái niệm \"sữa\" được hiểu là sữa còn nguyên kem hoặc sữa đã tách kem một phần hoặc toàn bộ.",
      "Theo mục đích của nhóm 04.03, sữa chua có thể được cô đặc hoặc được tạo hương và có thể chứa thêm đường hoặc chất làm ngọt khác, trái cây, quả hạch, ca cao, sô cô la, gia vị, cà phê hoặc chiết xuất cà phê, thực vật, các bộ phận của thực vật, ngũ cốc hoặc các loại bánh.",
      "Theo mục đích của nhóm 04.05: (a) Khái niệm \"bơ\" được hiểu là bơ tự nhiên, bơ whey hoặc bơ phối chế lại với hàm lượng chất béo sữa từ 80% trở lên nhưng không quá 95%; (b) Khái niệm \"chất phết từ bơ sữa\" nghĩa là chất ở dạng nhũ tương nước trong dầu có thể phết lên bánh, chứa chất béo sữa với hàm lượng từ 39% trở lên."
    ],
    notesEn: [
      "The expression \"milk\" means full cream milk or partially or completely skimmed milk.",
      "For the purposes of heading 04.03, yogurt may be concentrated or flavoured and may contain added sugar or other sweetening matter, fruit, nuts, cocoa, chocolate, spices, coffee or coffee extracts, plants, parts of plants, cereals or bakers' wares.",
      "For the purposes of heading 04.05: (a) The term \"butter\" means natural butter, whey butter or recombined butter with a milkfat content of 80% or more but not more than 95%; (b) The expression \"dairy spreads\" means a spreadable emulsion of the water-in-oil type, containing milkfat as the only fat with a milkfat content of 39% or more."
    ],
    generalVi: "Chương này bao gồm các sản phẩm bơ sữa (sữa, kem, bơ, pho mát, sữa chua, v.v.), trứng chim và trứng gia cầm (còn vỏ hoặc đã bỏ vỏ, tươi, bảo quản hoặc đã chế biến), mật ong tự nhiên và các sản phẩm ăn được gốc động vật khác chưa được chi tiết hoặc ghi ở nơi khác.",
    generalEn: "This Chapter covers dairy products (milk, cream, butter, cheese, yogurt, etc.), birds' eggs and poultry eggs (in shell or not, fresh, preserved or prepared), natural honey and other edible products of animal origin not elsewhere specified or included.",
    headings: [
      {
        code: "04.01",
        titleVi: "Sữa và kem, chưa cô đặc và chưa pha thêm đường hoặc chất ngọt khác",
        titleEn: "Milk and cream, not concentrated nor containing added sugar or other sweetening matter",
        contentVi: "Nhóm này bao gồm sữa và kem, chưa cô đặc và chưa pha thêm đường hoặc chất ngọt khác. Sữa có thể là sữa còn nguyên kem hoặc sữa đã tách kem một phần hoặc toàn bộ.",
        contentEn: "This heading covers milk and cream, not concentrated and not containing added sugar or other sweetening matter. Milk may be full cream milk or partially or completely skimmed milk."
      },
      {
        code: "04.02",
        titleVi: "Sữa và kem, đã cô đặc hoặc đã pha thêm đường hoặc chất ngọt khác",
        titleEn: "Milk and cream, concentrated or containing added sugar or other sweetening matter",
        contentVi: "Nhóm này bao gồm sữa và kem đã cô đặc (dạng rắn hoặc dạng lỏng) hoặc đã pha thêm đường hoặc chất ngọt khác. Bao gồm sữa đặc, sữa bột, kem bột.",
        contentEn: "This heading covers milk and cream, concentrated (solid or liquid forms) or containing added sugar or other sweetening matter. Includes condensed milk, milk powder, cream powder."
      },
      {
        code: "04.03",
        titleVi: "Buttermilk, sữa đông và kem đông, sữa chua, kefir và sữa, kem đã lên men hoặc axit hóa khác",
        titleEn: "Buttermilk, curdled milk and cream, yogurt, kephir and other fermented or acidified milk and cream",
        contentVi: "Nhóm này bao gồm buttermilk, sữa đông và kem đông, sữa chua, kefir và các loại sữa, kem đã lên men hoặc axit hóa khác, dù đã hoặc chưa cô đặc hoặc có thêm đường, chất làm ngọt khác, hương liệu, trái cây, quả hạch.",
        contentEn: "This heading covers buttermilk, curdled milk and cream, yogurt, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar, sweetening matter, flavouring, fruit, nuts."
      }
    ]
  },
  {
    chapter: 5,
    section: 1,
    sectionTitleVi: "ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT",
    sectionTitleEn: "LIVE ANIMALS; ANIMAL PRODUCTS",
    titleVi: "Sản phẩm gốc động vật, chưa được chi tiết hoặc ghi ở các nơi khác",
    titleEn: "Products of animal origin, not elsewhere specified or included",
    notesVi: [
      "Chương này không bao gồm: (a) Các sản phẩm ăn được (trừ ruột, bong bóng và dạ dày của động vật, nguyên dạng và các mảnh của chúng, và tiết động vật, ở dạng lỏng hoặc khô); (b) Da hoặc da sống (kể cả da lông), trừ các hàng hoá thuộc nhóm 05.05 và các đầu mẩu và phế liệu tương tự (Chương 41 hoặc 43); (c) Vật liệu dệt gốc động vật, trừ lông đuôi hoặc bờm ngựa và phế liệu lông đuôi hoặc bờm ngựa (Phần XI); (d) Túm hoặc búi đã chuẩn bị sẵn để làm chổi hoặc bàn chải (nhóm 96.03).",
      "Trong toàn bộ Danh mục này, ngà voi, sừng hà mã, sừng con moóc (hải mã), sừng kỳ lân biển và răng nanh lợn lòi đực, sừng tê giác và răng của các loài động vật đều được coi là \"ngà\".",
      "Trong toàn bộ Danh mục này, khái niệm \"lông đuôi hoặc bờm ngựa\" để chỉ lông đuôi hoặc bờm của ngựa hay động vật họ trâu bò."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Edible products (other than guts, bladders and stomachs of animals, whole and pieces thereof, and animal blood, liquid or dried); (b) Hides or skins (including furskins) other than goods of heading 05.05 and parings and similar waste (Chapter 41 or 43); (c) Animal textile materials, other than horsehair and horsehair waste (Section XI); (d) Prepared knots or tufts for broom or brush making (heading 96.03).",
      "Throughout the Nomenclature, elephant, hippopotamus, walrus, narwhal and wild boar tusks, rhinoceros horns and the teeth of all animals are regarded as \"ivory\".",
      "Throughout the Nomenclature, the expression \"horsehair\" means hair of the manes or tails of equine or bovine animals."
    ],
    generalVi: "Chương này bao gồm một tập hợp đa dạng những chất liệu khác nhau có nguồn gốc từ động vật, chưa gia công hoặc đã qua quá trình xử lý đơn giản, thường không dùng làm thực phẩm (ngoại trừ một số loại tiết, ruột, bong bóng và dạ dày của động vật) và chưa được nêu trong các Chương khác của Danh mục.",
    generalEn: "This Chapter covers a diverse collection of materials of animal origin, not worked or simply processed, generally not used as food (except for certain types of blood, guts, bladders and stomachs of animals) and not included in other Chapters of the Nomenclature.",
    headings: [
      {
        code: "05.01",
        titleVi: "Tóc người, chưa xử lý, đã hoặc chưa rửa sạch hoặc gột tẩy; phế liệu tóc",
        titleEn: "Human hair, unworked, whether or not washed or scoured; waste of human hair",
        contentVi: "Nhóm này bao gồm tóc người chưa xử lý, đã hoặc chưa rửa sạch hoặc gột tẩy. Việc phân loại tóc theo độ dài (với điều kiện là chưa sắp xếp theo đầu và đuôi với nhau) sẽ không được coi là gia công.",
        contentEn: "This heading covers human hair, unworked, whether or not washed or scoured. The sorting of hair by length (provided the root ends and tip ends respectively are not arranged together) shall be deemed not to constitute working."
      },
      {
        code: "05.04",
        titleVi: "Ruột, bong bóng và dạ dày của động vật (trừ cá), nguyên dạng và các mảnh",
        titleEn: "Guts, bladders and stomachs of animals (other than fish), whole and pieces thereof",
        contentVi: "Nhóm này bao gồm ruột, bong bóng và dạ dày của động vật (trừ cá), nguyên dạng và các mảnh của chúng, tươi, ướp lạnh, đông lạnh, muối, ngâm nước muối, làm khô hoặc hun khói.",
        contentEn: "This heading covers guts, bladders and stomachs of animals (other than fish), whole and pieces thereof, fresh, chilled, frozen, salted, in brine, dried or smoked."
      },
      {
        code: "05.05",
        titleVi: "Da và các bộ phận khác của loài chim, có lông vũ hoặc lông tơ; lông vũ và các phần của lông vũ và lông tơ",
        titleEn: "Skins and other parts of birds with their feathers or down; feathers and parts of feathers and down",
        contentVi: "Nhóm này bao gồm da và các bộ phận khác của loài chim, có lông vũ hoặc lông tơ, cũng như lông vũ và các phần của lông vũ (đã hoặc chưa cắt tỉa) và lông tơ, chưa gia công, hoặc chỉ được làm sạch, khử trùng hoặc xử lý để bảo quản.",
        contentEn: "This heading covers skins and other parts of birds with their feathers or down, as well as feathers and parts of feathers (whether or not with trimmed edges) and down, not worked, or only cleaned, disinfected or treated for preservation."
      }
    ]
  },
  {
    chapter: 6,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Cây sống và các loại cây trồng khác; củ, rễ và loại tương tự; cành hoa và cành lá trang trí",
    titleEn: "Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage",
    notesVi: [
      "Ngoài phần 2 của tên nhóm 06.01, Chương này chỉ bao gồm cây sống và các sản phẩm (kể cả cây giống từ hạt) thường được cung cấp bởi người trồng hoa hoặc người làm vườn ươm cây để trồng hay trang trí; tuy nhiên Chương này không bao gồm khoai tây, hành tây, hành, hẹ, tỏi hoặc các sản phẩm khác thuộc Chương 7.",
      "Khi xem xét một mặt hàng nào đó trong nhóm 06.03 hoặc 06.04 phải kể đến những mặt hàng như lẵng hoa, bó hoa, vòng hoa và các sản phẩm tương tự được làm toàn bộ hoặc một phần bằng các vật liệu nêu trong nhóm. Tuy nhiên, các nhóm này không bao gồm các tác phẩm ghép hay phù điêu trang trí tương tự thuộc nhóm 97.01."
    ],
    notesEn: [
      "Subject to the second part of heading 06.01, this Chapter covers only live trees and goods (including seedling vegetables) of a kind commonly supplied by nursery gardeners or florists for planting or for ornamental use; nevertheless it does not include potatoes, onions, shallots, garlic or other products of Chapter 7.",
      "Any reference in heading 06.03 or 06.04 to goods of any kind shall be construed as including a reference to bouquets, floral baskets, wreaths and similar articles made wholly or partly of goods of that kind. However, these headings do not include collages or similar decorative plaques of heading 97.01."
    ],
    generalVi: "Chương này bao gồm tất cả các cây sống thuộc loại được người làm vườn ươm cây (kể cả người làm vườn) hoặc người trồng hoa cung cấp, trong điều kiện thích hợp dùng để trồng hoặc trang trí, kể cả thân và rễ của cây diếp xoắn (trừ các loại rễ thuộc nhóm 12.12). Chương này cũng bao gồm hoa và nụ hoa cắt rời, cành, lá, nhánh và các phần khác của cây, tươi, khô, nhuộm, tẩy, thấm tẩm hoặc xử lý cách khác để trang trí.",
    generalEn: "This Chapter covers all living plants, of a kind supplied by nursery gardeners (including horticulturists) or florists, which are in a condition suitable for planting or ornamental purposes and also chicory plants and roots (other than roots of heading 12.12). The Chapter also covers cut flowers and flower buds, foliage, branches and other parts of plants, fresh, dried, dyed, bleached, impregnated or otherwise prepared for ornamental purposes.",
    headings: [
      {
        code: "06.01",
        titleVi: "Củ, thân củ, rễ củ, thân ống và thân rễ, ở dạng ngủ, dạng sinh trưởng hoặc ở dạng hoa; cây và rễ rau diếp xoăn",
        titleEn: "Bulbs, tubers, tuberous roots, corms, crowns and rhizomes, dormant, in growth or in flower; chicory plants and roots",
        contentVi: "Nhóm này bao gồm các loại củ của các loài hoa loa kèn, thu hải đường, nghệ tây, hoa thược dược, hoa dơn (lay ơn), hoa diên vĩ, hoa ly (loa kèn), hoa huệ, hoa tulíp, v.v. Nhóm này cũng bao gồm thân và rễ rau diếp xoăn.",
        contentEn: "This heading includes bulbs of amaryllis, begonias, crocus, dahlias, gladioli, irises, lilies, tulips, etc. The heading also covers chicory plants and roots."
      },
      {
        code: "06.02",
        titleVi: "Cây sống khác (kể cả rễ), cành giâm và cành ghép; hệ sợi nấm",
        titleEn: "Other live plants (including their roots), cuttings and slips; mushroom spawn",
        contentVi: "Nhóm này bao gồm: cây, cây bụi và bụi cây các loại (cây rừng, cây ăn quả, cây cảnh); cây và cây giống các loại để cấy trồng; rễ sống của cây; cành giâm chưa mọc rễ, cành ghép; hệ sợi nấm.",
        contentEn: "This heading covers: trees, shrubs and bushes of all kinds (forest trees, fruit trees, ornamental plants); plants and seedlings for transplanting; live roots of plants; unrooted cuttings, slips; mushroom spawn."
      },
      {
        code: "06.03",
        titleVi: "Cành hoa và nụ hoa dùng làm hoa bó hoặc để trang trí, tươi, khô, đã nhuộm, tẩy, thấm tẩm hoặc xử lý cách khác",
        titleEn: "Cut flowers and flower buds of a kind suitable for bouquets or for ornamental purposes, fresh, dried, dyed, bleached, impregnated or otherwise prepared",
        contentVi: "Nhóm này bao gồm không chỉ hoa và nụ hoa cắt đơn giản mà cả bó hoa, vòng hoa, lẵng hoa và sản phẩm tương tự có gắn hoa hoặc nụ hoa. Bao gồm: hoa hồng, hoa cẩm chướng, phong lan, hoa cúc, họ hoa ly.",
        contentEn: "This heading covers not only cut flowers and buds as such, but also bouquets, wreaths, floral baskets and similar articles incorporating flowers or flower buds. Includes: roses, carnations, orchids, chrysanthemums, lilies."
      },
      {
        code: "06.04",
        titleVi: "Tán lá, cành và các phần khác của cây, không có hoa hoặc nụ hoa, các loại cỏ, rêu và địa y",
        titleEn: "Foliage, branches and other parts of plants, without flowers or flower buds, and grasses, mosses and lichens",
        contentVi: "Nhóm này bao gồm không chỉ tán lá, cành mà còn cả bó, vòng, lẵng hoa và sản phẩm tương tự có gắn tán lá hoặc các phần khác của cây, cây bụi, bụi cây hoặc có gắn cỏ, rêu hoặc địa y. Nhóm này bao gồm cây noel tự nhiên, miễn là chúng rõ ràng không thích hợp để trồng lại.",
        contentEn: "This heading covers not only foliage, branches, etc., as such, but also bouquets, wreaths, floral baskets and similar articles incorporating foliage or parts of trees, shrubs, bushes, or incorporating grasses, mosses or lichens. The heading covers natural Christmas trees, provided that they are clearly unfit for replanting."
      }
    ]
  },
  {
    chapter: 7,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Rau và một số loại củ, thân củ và rễ ăn được",
    titleEn: "Edible vegetables and certain roots and tubers",
    notesVi: [
      "Chương này không bao gồm các sản phẩm thức ăn cho gia súc thuộc nhóm 12.14.",
      "Trong các nhóm 07.09, 07.10, 07.11 và 07.12, từ \"rau\" bao gồm các loại ăn được: nấm, nấm cục (nấm củ), ôliu, nụ bạch hoa, bí, bí ngô, cà tím, ngô ngọt, quả ớt thuộc chi Capsicum hoặc thuộc chi Pimenta, rau thì là, rau mùi tây, rau mùi, rau ngải giấm, cải xoong và kinh giới ngọt.",
      "Nhóm 07.12 bao gồm tất cả các loại rau khô từ các loại rau thuộc các nhóm từ 07.01 đến 07.11, trừ: (a) các loại rau đậu khô, đã bóc vỏ (nhóm 07.13); (b) ngô ngọt (nhóm 11.02 đến 11.04); (c) bột, bột mịn, mảnh lát, hạt và viên của khoai tây (nhóm 11.05)."
    ],
    notesEn: [
      "This Chapter does not cover forage products of heading 12.14.",
      "In headings 07.09, 07.10, 07.11 and 07.12 the word \"vegetables\" includes edible mushrooms, truffles, olives, capers, marrows, pumpkins, aubergines, sweet corn, fruits of the genus Capsicum or of the genus Pimenta, fennel, parsley, chervil, tarragon, cress and sweet marjoram.",
      "Heading 07.12 covers all dried vegetables of the kinds falling in headings 07.01 to 07.11, other than: (a) dried leguminous vegetables, shelled (heading 07.13); (b) sweet corn (headings 11.02 to 11.04); (c) flour, meal, powder, flakes, granules and pellets of potatoes (heading 11.05)."
    ],
    generalVi: "Chương này bao gồm các loại rau, kể cả các sản phẩm được nêu trong Chú giải 2 của Chương, ở dạng tươi, ướp lạnh, đông lạnh (đã hoặc chưa được hấp chín hoặc luộc chín trong nước) được bảo quản hoặc làm khô tạm thời.",
    generalEn: "This Chapter covers vegetables, including the products listed in Note 2 to the Chapter, whether fresh, chilled, frozen (uncooked or cooked by steaming or boiling in water) provisionally preserved or dried.",
    headings: [
      {
        code: "07.01",
        titleVi: "Khoai tây, tươi hoặc ướp lạnh",
        titleEn: "Potatoes, fresh or chilled",
        contentVi: "Nhóm này bao gồm khoai tây thuộc loài Solanum tuberosum, tươi hoặc ướp lạnh, dù để ăn hoặc để trồng. Nhóm này không bao gồm khoai tây đã được xử lý hoặc chế biến.",
        contentEn: "This heading covers potatoes of the species Solanum tuberosum, fresh or chilled, whether for eating or for planting. The heading does not cover potatoes which have been treated or prepared."
      },
      {
        code: "07.02",
        titleVi: "Cà chua, tươi hoặc ướp lạnh",
        titleEn: "Tomatoes, fresh or chilled",
        contentVi: "Nhóm này bao gồm cà chua tươi hoặc ướp lạnh. Cà chua đã qua chế biến (đóng hộp, nghiền, v.v.) không thuộc nhóm này.",
        contentEn: "This heading covers tomatoes, fresh or chilled. Processed tomatoes (canned, crushed, etc.) are not included in this heading."
      },
      {
        code: "07.03",
        titleVi: "Hành tây, hành, hẹ, tỏi, tỏi tây và các loại rau họ hành, tỏi khác, tươi hoặc ướp lạnh",
        titleEn: "Onions, shallots, garlic, leeks and other alliaceous vegetables, fresh or chilled",
        contentVi: "Nhóm này bao gồm hành tây, hành, hẹ, tỏi, tỏi tây và các loại rau họ hành, tỏi khác, tươi hoặc ướp lạnh.",
        contentEn: "This heading covers onions, shallots, garlic, leeks and other alliaceous vegetables, fresh or chilled."
      },
      {
        code: "07.04",
        titleVi: "Bắp cải, súp lơ, su hào, cải xoăn và các loại rau ăn được tương tự thuộc chi Brassica, tươi hoặc ướp lạnh",
        titleEn: "Cabbages, cauliflowers, kohlrabi, kale and similar edible brassicas, fresh or chilled",
        contentVi: "Nhóm này bao gồm bắp cải, súp lơ (bông cải trắng và bông cải xanh), su hào, cải xoăn và các loại rau ăn được tương tự thuộc chi Brassica.",
        contentEn: "This heading covers cabbages, cauliflowers (including broccoli), kohlrabi, kale and similar edible brassicas."
      }
    ]
  },
  {
    chapter: 8,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Quả và quả hạch (nut) ăn được; vỏ quả thuộc họ cam quýt hoặc các loại dưa",
    titleEn: "Edible fruit and nuts; peel of citrus fruit or melons",
    notesVi: [
      "Chương này không bao gồm các loại quả hạch (nuts) hoặc quả không ăn được.",
      "Quả và quả hạch (nuts) ướp lạnh được xếp cùng nhóm với quả và quả hạch (nuts) tươi tương ứng.",
      "Quả khô hoặc quả hạch (nuts) khô thuộc Chương này có thể được hydrat hóa lại một phần, hoặc xử lý nhằm: (a) Tăng cường bảo quản hoặc làm ổn định; (b) Cải thiện hoặc duy trì bề ngoài của chúng.",
      "Nhóm 08.12 áp dụng cho những loại quả và quả hạch (nut) đã qua xử lý chỉ để bảo quản tạm thời trong quá trình vận chuyển hoặc lưu trữ."
    ],
    notesEn: [
      "This Chapter does not cover inedible nuts or fruits.",
      "Chilled fruits and nuts are to be classified in the same headings as the corresponding fresh fruits and nuts.",
      "Dried fruit or dried nuts of this Chapter may be partially rehydrated, or treated for the following purposes: (a) For additional preservation or stabilisation; (b) To improve or maintain their appearance.",
      "Heading 08.12 applies to fruit and nuts which have been treated solely to ensure their provisional preservation during transport or storage."
    ],
    generalVi: "Chương này bao gồm các loại quả, quả hạch (nut) và vỏ quả thuộc chi cam, quýt, chanh (citrus) hoặc dưa (kể cả dưa hấu), nói chung dùng làm thực phẩm cho người (cho dù còn nguyên trạng hoặc đã chế biến). Chúng có thể ở dạng tươi (kể cả ướp lạnh), đông lạnh hoặc làm khô.",
    generalEn: "This Chapter covers fruit, nuts and peel of citrus fruit or melons (including watermelons), generally intended for human consumption (whether as presented or after processing). They may be fresh (including chilled), frozen or dried.",
    headings: [
      {
        code: "08.01",
        titleVi: "Dừa, quả hạch Brazil, hạt điều, tươi hoặc khô, đã hoặc chưa bóc vỏ hoặc lột vỏ",
        titleEn: "Coconuts, Brazil nuts and cashew nuts, fresh or dried, whether or not shelled or peeled",
        contentVi: "Nhóm này bao gồm dừa (kể cả cùi dừa và nước dừa), quả hạch Brazil và hạt điều, tươi hoặc khô, đã hoặc chưa bóc vỏ hoặc lột vỏ.",
        contentEn: "This heading covers coconuts (including coconut meat and coconut water), Brazil nuts and cashew nuts, fresh or dried, whether or not shelled or peeled."
      },
      {
        code: "08.02",
        titleVi: "Quả hạch khác, tươi hoặc khô, đã hoặc chưa bóc vỏ hoặc lột vỏ",
        titleEn: "Other nuts, fresh or dried, whether or not shelled or peeled",
        contentVi: "Nhóm này bao gồm hạnh nhân, phỉ (hạt corylus), óc chó, hạt dẻ, quả hồ trăn, hạt mắc ca và các loại quả hạch khác.",
        contentEn: "This heading covers almonds, hazelnuts (filberts), walnuts, chestnuts, pistachios, macadamia nuts and other nuts."
      },
      {
        code: "08.03",
        titleVi: "Chuối, kể cả chuối lá, tươi hoặc khô",
        titleEn: "Bananas, including plantains, fresh or dried",
        contentVi: "Nhóm này bao gồm chuối (bao gồm cả chuối lá) tươi hoặc khô. Chuối có thể ở trạng thái chín hoặc xanh.",
        contentEn: "This heading covers bananas (including plantains), fresh or dried. Bananas may be ripe or green."
      },
      {
        code: "08.04",
        titleVi: "Quả chà là, sung, vả, dứa, bơ, ổi, xoài và măng cụt, tươi hoặc khô",
        titleEn: "Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried",
        contentVi: "Nhóm này bao gồm quả chà là, sung, vả, dứa, bơ, ổi, xoài và măng cụt, tươi hoặc khô.",
        contentEn: "This heading covers dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried."
      }
    ]
  },
  {
    chapter: 9,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Cà phê, chè, chè Paragoay và các loại gia vị",
    titleEn: "Coffee, tea, maté and spices",
    notesVi: [
      "Hỗn hợp của các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 được phân loại như sau: (a) Hỗn hợp của hai hay nhiều sản phẩm thuộc cùng một nhóm cũng được xếp trong nhóm đó; (b) Hỗn hợp của hai hay nhiều sản phẩm thuộc các nhóm khác nhau cũng được xếp trong nhóm 09.10.",
      "Việc pha thêm các chất khác vào các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 sẽ không ảnh hưởng tới việc phân loại sản phẩm nếu như hỗn hợp mới vẫn giữ được đặc tính cơ bản của các mặt hàng thuộc các nhóm đó.",
      "Chương này không bao gồm hạt tiêu Cubeb (Piper cubeba) hoặc các sản phẩm khác thuộc nhóm 12.11."
    ],
    notesEn: [
      "Mixtures of the products of headings 09.04 to 09.10 are to be classified as follows: (a) Mixtures of two or more of the products of the same heading are to be classified in that heading; (b) Mixtures of two or more of the products of different headings are to be classified in heading 09.10.",
      "The addition of other substances to the products of headings 09.04 to 09.10 shall not affect their classification provided the resulting mixtures retain the essential character of the goods of those headings.",
      "This Chapter does not cover Cubeb pepper (Piper cubeba) or other products of heading 12.11."
    ],
    generalVi: "Chương này bao gồm: (1) Cà phê, chè và chè Paragoay; (2) Gia vị, tức là nhóm các sản phẩm rau (kể cả hạt,...), có hàm lượng tinh dầu và hương liệu cao, chủ yếu được sử dụng làm gia vị nhờ hương vị đặc trưng. Những sản phẩm này có thể được giữ nguyên dạng hoặc xay hoặc tán thành bột.",
    generalEn: "This Chapter covers: (1) Coffee, tea and maté; (2) Spices, that is to say a group of vegetable products (including seeds, etc.) rich in essential oils and aromatic principles, used mainly as condiments on account of their distinctive flavour. These products may be in their natural form or ground or powdered.",
    headings: [
      {
        code: "09.01",
        titleVi: "Cà phê, rang hoặc chưa rang, đã hoặc chưa khử chất caffeine; vỏ quả và vỏ lụa cà phê; các chất thay thế cà phê có chứa cà phê theo tỷ lệ nào đó",
        titleEn: "Coffee, whether or not roasted or decaffeinated; coffee husks and skins; coffee substitutes containing coffee in any proportion",
        contentVi: "Nhóm này bao gồm cà phê ở các dạng: hạt cà phê chưa rang (cà phê xanh), hạt cà phê đã rang (có hoặc không xay), cà phê đã khử caffeine, vỏ quả và vỏ lụa cà phê, và các chất thay thế cà phê có chứa cà phê.",
        contentEn: "This heading covers coffee in the following forms: unroasted coffee beans (green coffee), roasted coffee beans (whether or not ground), decaffeinated coffee, coffee husks and skins, and coffee substitutes containing coffee."
      },
      {
        code: "09.02",
        titleVi: "Chè, đã hoặc chưa pha hương liệu",
        titleEn: "Tea, whether or not flavoured",
        contentVi: "Nhóm này bao gồm chè (trà) ở các dạng: chè xanh (chưa lên men), chè đen (đã lên men hoàn toàn), chè ô long (lên men một phần), và các loại chè đã pha hương liệu.",
        contentEn: "This heading covers tea in the following forms: green tea (unfermented), black tea (fully fermented), oolong tea (partly fermented), and flavoured teas."
      },
      {
        code: "09.04",
        titleVi: "Hạt tiêu thuộc chi Piper; quả ớt thuộc chi Capsicum hoặc chi Pimenta, khô hoặc xay hoặc nghiền",
        titleEn: "Pepper of the genus Piper; dried or crushed or ground fruits of the genus Capsicum or of the genus Pimenta",
        contentVi: "Nhóm này bao gồm hạt tiêu thuộc chi Piper (hạt tiêu đen, trắng, xanh), và quả ớt thuộc chi Capsicum hoặc chi Pimenta (ớt bột, paprika, cayenne), khô hoặc xay hoặc nghiền.",
        contentEn: "This heading covers pepper of the genus Piper (black, white, green peppercorns), and dried or crushed or ground fruits of the genus Capsicum or Pimenta (chilli powder, paprika, cayenne)."
      }
    ]
  },
  {
    chapter: 10,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Ngũ cốc",
    titleEn: "Cereals",
    notesVi: [
      "(A) Các sản phẩm kể tên trong các nhóm của Chương này chỉ được phân loại trong các nhóm đó khi ở dạng hạt, còn hoặc không còn ở trên bông hay trên thân cây.",
      "(B) Chương này không bao gồm các loại hạt đã xát vỏ hoặc chế biến cách khác. Tuy nhiên, thóc được xay để bỏ trấu, gạo được xát, đánh bóng, hồ (glazed), gạo đồ hoặc gạo tấm vẫn được phân loại trong nhóm 10.06. Tương tự, hạt diêm mạch (quinoa) đã được loại bỏ vỏ lụa để tách saponin vẫn được phân loại trong nhóm 10.08.",
      "Nhóm 10.05 không bao gồm ngô ngọt (Chương 7)."
    ],
    notesEn: [
      "(A) The products specified in the headings of this Chapter are to be classified in those headings only if grains are present, whether or not in the ear or on the stalk.",
      "(B) The Chapter does not cover grains which have been hulled or otherwise worked. However, rice, husked, milled, polished, glazed, parboiled or broken remains classified in heading 10.06. Similarly, quinoa from which the pericarp has been removed to separate the saponin remains classified in heading 10.08.",
      "Heading 10.05 does not cover sweet corn (Chapter 7)."
    ],
    generalVi: "Chương này chỉ bao gồm các loại hạt ngũ cốc, đã được hoặc chưa được tách khỏi bông hoặc bắp. Các loại hạt từ ngũ cốc được thu hoạch non, vẫn còn nguyên vỏ, được phân loại như loại hạt thường. Các loại ngũ cốc tươi (trừ ngô ngọt thuộc Chương 7), được dùng hay không được dùng làm rau, vẫn được phân loại vào Chương này.",
    generalEn: "This Chapter covers cereal grains only, whether or not presented in sheaves or in the ear. Grain obtained from cereals cut before maturity and still complete with husks is classified with ordinary grain. Fresh cereals (other than sweet corn of Chapter 7), whether or not suitable for use as vegetables, remain classified in this Chapter.",
    headings: [
      {
        code: "10.01",
        titleVi: "Lúa mì và meslin",
        titleEn: "Wheat and meslin",
        contentVi: "Nhóm này bao gồm lúa mì durum (lúa mì cứng thuộc loài Triticum durum) và các loại lúa mì khác (lúa mì mềm Triticum aestivum). Meslin là hỗn hợp của lúa mì và lúa mạch đen được gieo và thu hoạch cùng nhau.",
        contentEn: "This heading covers durum wheat (Triticum durum) and other wheat (soft wheat Triticum aestivum). Meslin is a mixture of wheat and rye sown and harvested together."
      },
      {
        code: "10.02",
        titleVi: "Lúa mạch đen",
        titleEn: "Rye",
        contentVi: "Nhóm này bao gồm lúa mạch đen (Secale cereale). Lúa mạch đen chủ yếu được sử dụng để làm bánh mì, thức ăn chăn nuôi và sản xuất rượu whisky.",
        contentEn: "This heading covers rye (Secale cereale). Rye is mainly used for bread-making, animal feed and whisky production."
      },
      {
        code: "10.03",
        titleVi: "Lúa đại mạch",
        titleEn: "Barley",
        contentVi: "Nhóm này bao gồm lúa đại mạch thuộc loài Hordeum vulgare. Đại mạch được sử dụng làm thức ăn chăn nuôi, sản xuất mạch nha và bia.",
        contentEn: "This heading covers barley of the species Hordeum vulgare. Barley is used for animal feed, malting and beer production."
      },
      {
        code: "10.04",
        titleVi: "Yến mạch",
        titleEn: "Oats",
        contentVi: "Nhóm này bao gồm yến mạch thuộc loài Avena sativa và các loài khác. Yến mạch được sử dụng làm thức ăn cho ngựa và các loại thực phẩm cho người như bột yến mạch.",
        contentEn: "This heading covers oats of the species Avena sativa and other species. Oats are used for horse feed and human foods such as oatmeal."
      },
      {
        code: "10.05",
        titleVi: "Ngô",
        titleEn: "Maize (corn)",
        contentVi: "Nhóm này bao gồm ngô thuộc loài Zea mays. Nhóm này không bao gồm ngô ngọt (Chương 7). Ngô được sử dụng làm thức ăn chăn nuôi, sản xuất tinh bột, dầu ngô và ethanol.",
        contentEn: "This heading covers maize (corn) of the species Zea mays. Sweet corn is excluded (Chapter 7). Maize is used for animal feed, starch production, corn oil and ethanol."
      },
      {
        code: "10.06",
        titleVi: "Lúa gạo",
        titleEn: "Rice",
        contentVi: "Nhóm này bao gồm lúa gạo ở các dạng: thóc (lúa chưa xay), gạo lứt (đã xay bỏ trấu), gạo đã xát (gạo trắng), gạo đồ và gạo tấm. Đây là cây lương thực quan trọng nhất ở châu Á.",
        contentEn: "This heading covers rice in the following forms: paddy (rice in the husk), husked rice (brown rice), milled rice (white rice), parboiled rice and broken rice. Rice is the most important food crop in Asia."
      }
    ]
  }
];

export const getSectionNote = (section: number): { vi: string; en: string } => {
  if (section === 1) {
    return {
      vi: "Trong phần này, khi đề cập đến một giống hoặc một loài động vật, trừ khi có yêu cầu khác, cần phải kể đến cả giống hoặc loài động vật đó còn non. Trừ khi có yêu cầu khác, trong toàn bộ Danh mục này bất cứ đề cập nào liên quan đến các sản phẩm \"được làm khô\" cũng bao gồm các sản phẩm được khử nước, làm bay hơi hoặc làm khô bằng đông lạnh.",
      en: "Any reference in this Section to a particular genus or species of an animal, except where the context otherwise requires, includes a reference to the young of that genus or species. Except where the context otherwise requires, throughout the Nomenclature any reference to \"dried\" products also covers products which have been dehydrated, evaporated or freeze-dried."
    };
  } else if (section === 2) {
    return {
      vi: "Trong Phần này khái niệm \"viên\" có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.",
      en: "In this Section the term \"pellets\" means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3% by weight."
    };
  }
  return { vi: "", en: "" };
};
