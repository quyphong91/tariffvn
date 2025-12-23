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
  },
  {
    chapter: 11,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Các sản phẩm xay xát; malt; tinh bột; inulin; gluten lúa mì",
    titleEn: "Products of the milling industry; malt; starches; inulin; wheat gluten",
    notesVi: [
      "Chương này không bao gồm: (a) Malt đã rang dùng như chất thay thế cà phê (nhóm 09.01 hoặc nhóm 21.01); (b) Bột mịn, tấm, bột thô hoặc tinh bột đã chế biến thuộc nhóm 19.01; (c) Mảnh ngô chế biến từ bột ngô (corn flakes) hoặc các sản phẩm khác thuộc nhóm 19.04; (d) Các loại rau, đã chế biến hay bảo quản, thuộc nhóm 20.01, 20.04 hoặc 20.05; (e) Dược phẩm (Chương 30); hoặc (f) Tinh bột có đặc tính của nước hoa, mỹ phẩm hay chế phẩm vệ sinh (Chương 33)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Roasted malt put up as coffee substitutes (heading 09.01 or 21.01); (b) Prepared flours, groats, meals or starches of heading 19.01; (c) Corn flakes or other products of heading 19.04; (d) Vegetables, prepared or preserved, of heading 20.01, 20.04 or 20.05; (e) Pharmaceutical products (Chapter 30); or (f) Starches having the character of perfumery, cosmetic or toilet preparations (Chapter 33)."
    ],
    generalVi: "Chương này bao gồm các sản phẩm thu được từ quá trình xay xát ngũ cốc, malt, tinh bột từ các nguồn khác nhau (ngũ cốc, khoai tây, sắn, v.v.), inulin và gluten lúa mì. Các sản phẩm xay xát bao gồm bột, tấm, bột thô và các sản phẩm khác thu được từ việc xay xát lúa mì, ngô, gạo và các loại ngũ cốc khác.",
    generalEn: "This Chapter covers products obtained from the milling of cereals, malt, starches from various sources (cereals, potatoes, cassava, etc.), inulin and wheat gluten. Milling products include flour, groats, meal and other products obtained from milling wheat, maize, rice and other cereals.",
    headings: [
      {
        code: "11.01",
        titleVi: "Bột mì hoặc bột meslin",
        titleEn: "Wheat or meslin flour",
        contentVi: "Nhóm này bao gồm bột mì hoặc bột meslin (hỗn hợp của lúa mì và lúa mạch đen). Bột mì là sản phẩm thu được từ việc xay xát hạt lúa mì.",
        contentEn: "This heading covers wheat or meslin flour (mixture of wheat and rye). Wheat flour is the product obtained from milling wheat grains."
      },
      {
        code: "11.02",
        titleVi: "Bột ngũ cốc, trừ bột mì hoặc bột meslin",
        titleEn: "Cereal flours other than of wheat or meslin",
        contentVi: "Nhóm này bao gồm bột ngũ cốc khác ngoài bột mì hoặc bột meslin, bao gồm bột ngô, bột gạo, bột lúa mạch, bột yến mạch và các loại bột ngũ cốc khác.",
        contentEn: "This heading covers cereal flours other than wheat or meslin flour, including maize (corn) flour, rice flour, barley flour, oat flour and other cereal flours."
      },
      {
        code: "11.03",
        titleVi: "Tấm, bột thô và viên của ngũ cốc",
        titleEn: "Cereal groats, meal and pellets",
        contentVi: "Nhóm này bao gồm tấm, bột thô và viên của ngũ cốc. Tấm là sản phẩm thu được từ việc nghiền thô hạt ngũ cốc. Bột thô có độ mịn trung bình giữa tấm và bột.",
        contentEn: "This heading covers cereal groats, meal and pellets. Groats are products obtained from the coarse grinding of cereal grains. Meal has a fineness intermediate between groats and flour."
      },
      {
        code: "11.04",
        titleVi: "Hạt ngũ cốc được chế biến theo cách khác",
        titleEn: "Cereal grains otherwise worked",
        contentVi: "Nhóm này bao gồm hạt ngũ cốc được chế biến theo cách khác như: xay vỡ, vỡ mảnh, rang hoặc dạng mảnh lát. Bao gồm mầm ngũ cốc nguyên dạng, xay vỡ, vỡ mảnh hoặc nghiền.",
        contentEn: "This heading covers cereal grains otherwise worked such as: hulled, pearled, sliced, kibbled, flaked or rolled. Also includes germ of cereals, whole, rolled, flaked or ground."
      },
      {
        code: "11.05",
        titleVi: "Bột, bột mịn, bột thô, mảnh lát, hạt và viên của khoai tây",
        titleEn: "Flour, meal, powder, flakes, granules and pellets of potatoes",
        contentVi: "Nhóm này bao gồm bột, bột mịn, bột thô, mảnh lát, hạt và viên của khoai tây. Các sản phẩm này được làm từ khoai tây đã được nấu chín và nghiền hoặc sấy khô.",
        contentEn: "This heading covers flour, meal, powder, flakes, granules and pellets of potatoes. These products are made from potatoes that have been cooked and mashed or dried."
      },
      {
        code: "11.07",
        titleVi: "Malt, đã hoặc chưa rang",
        titleEn: "Malt, whether or not roasted",
        contentVi: "Nhóm này bao gồm malt, đã hoặc chưa rang. Malt là hạt ngũ cốc (thường là lúa đại mạch) đã được ngâm nước và để nảy mầm, sau đó sấy khô. Malt được sử dụng chủ yếu trong sản xuất bia và whisky.",
        contentEn: "This heading covers malt, whether or not roasted. Malt is cereal grain (usually barley) that has been soaked in water and allowed to germinate, then dried. Malt is mainly used in beer and whisky production."
      },
      {
        code: "11.08",
        titleVi: "Tinh bột; inulin",
        titleEn: "Starches; inulin",
        contentVi: "Nhóm này bao gồm tinh bột từ các nguồn khác nhau (lúa mì, ngô, khoai tây, sắn, gạo) và inulin. Tinh bột là một carbohydrate phức tạp được chiết xuất từ nhiều loại thực vật khác nhau.",
        contentEn: "This heading covers starches from various sources (wheat, maize, potatoes, cassava, rice) and inulin. Starch is a complex carbohydrate extracted from various plants."
      }
    ]
  },
  {
    chapter: 12,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Hạt dầu và quả có dầu; các loại hạt, hạt giống và quả khác; cây công nghiệp hoặc cây dược liệu; rơm, rạ và cỏ khô",
    titleEn: "Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder",
    notesVi: [
      "Nhóm 12.07 áp dụng cho hạt và nhân hạt cọ, hạt bông, hạt thầu dầu, hạt vừng, hạt mù tạt, hạt rum, hạt thuốc phiện và hạt mỡ (hạt karite). Không áp dụng đối với các sản phẩm thuộc nhóm 08.01 hoặc 08.02 hoặc ôliu.",
      "Nhóm 12.09 áp dụng cho hạt củ cải đường, hạt cây cỏ, hạt cây hoa trang trí, hạt rau, hạt cây rừng, hạt cây ăn quả được coi là \"hạt để gieo trồng\".",
      "Nhóm 12.11 áp dụng với các loại cây hoặc các phần của các loại cây: húng quế, cây borage, cây nhân sâm, cây bài hương, cây cam thảo, các loại cây bạc hà, cây hương thảo, cây cửu ly hương, cây xả thơm và cây ngải tây."
    ],
    notesEn: [
      "Heading 12.07 applies to palm nuts and kernels, cotton seeds, castor oil seeds, sesamum seeds, mustard seeds, safflower seeds, poppy seeds and shea nuts (karite nuts). It does not apply to products of heading 08.01 or 08.02 or to olives.",
      "Heading 12.09 applies to beet seeds, grass and other herbage seeds, seeds of ornamental flowers, vegetable seeds, seeds of forest trees, seeds of fruit trees are to be regarded as \"seeds of a kind used for sowing\".",
      "Heading 12.11 applies to the following plants or parts thereof: basil, borage, ginseng, hyssop, liquorice, all species of mint, rosemary, rue, sage and wormwood."
    ],
    generalVi: "Chương này bao gồm các loại hạt dầu và quả có dầu (đậu tương, lạc, hạt hướng dương, hạt cải dầu, v.v.), các loại hạt và quả khác, cây công nghiệp hoặc cây dược liệu (cây cam thảo, nhân sâm, bạc hà, v.v.), rơm, rạ và cỏ khô làm thức ăn gia súc.",
    generalEn: "This Chapter covers oil seeds and oleaginous fruits (soybeans, groundnuts, sunflower seeds, rape seeds, etc.), miscellaneous grains, seeds and fruit, industrial or medicinal plants (liquorice, ginseng, mint, etc.), straw and fodder.",
    headings: [
      {
        code: "12.01",
        titleVi: "Đậu tương, đã hoặc chưa vỡ mảnh",
        titleEn: "Soya beans, whether or not broken",
        contentVi: "Nhóm này bao gồm đậu tương, đã hoặc chưa vỡ mảnh. Đậu tương là một trong những cây trồng quan trọng nhất thế giới, được sử dụng để sản xuất dầu ăn, đậu phụ, sữa đậu nành và thức ăn chăn nuôi.",
        contentEn: "This heading covers soya beans, whether or not broken. Soybeans are one of the world's most important crops, used to produce cooking oil, tofu, soy milk and animal feed."
      },
      {
        code: "12.02",
        titleVi: "Lạc chưa rang hoặc chưa chế biến cách khác, đã hoặc chưa bóc vỏ hoặc vỡ mảnh",
        titleEn: "Groundnuts, not roasted or otherwise cooked, whether or not shelled or broken",
        contentVi: "Nhóm này bao gồm lạc (đậu phộng) chưa rang hoặc chưa chế biến cách khác, đã hoặc chưa bóc vỏ hoặc vỡ mảnh. Lạc được sử dụng để sản xuất dầu lạc và làm thực phẩm.",
        contentEn: "This heading covers groundnuts (peanuts), not roasted or otherwise cooked, whether or not shelled or broken. Groundnuts are used to produce groundnut oil and as food."
      },
      {
        code: "12.07",
        titleVi: "Quả và hạt có dầu khác, đã hoặc chưa vỡ mảnh",
        titleEn: "Other oil seeds and oleaginous fruits, whether or not broken",
        contentVi: "Nhóm này bao gồm hạt và nhân hạt cọ, hạt bông, hạt thầu dầu, hạt vừng, hạt mù tạt, hạt rum, hạt thuốc phiện và hạt mỡ (hạt karite), đã hoặc chưa vỡ mảnh.",
        contentEn: "This heading covers palm nuts and kernels, cotton seeds, castor oil seeds, sesamum seeds, mustard seeds, safflower seeds, poppy seeds and shea nuts (karite nuts), whether or not broken."
      },
      {
        code: "12.11",
        titleVi: "Cây và các bộ phận của cây dùng trong ngành nước hoa, dược phẩm hoặc thuốc trừ sâu",
        titleEn: "Plants and parts of plants used primarily in perfumery, in pharmacy or for insecticidal purposes",
        contentVi: "Nhóm này bao gồm cây và các bộ phận của cây dùng trong ngành nước hoa, dược phẩm hoặc thuốc trừ sâu, bao gồm: húng quế, cây nhân sâm, cây cam thảo, các loại cây bạc hà, cây hương thảo.",
        contentEn: "This heading covers plants and parts of plants used primarily in perfumery, in pharmacy or for insecticidal purposes, including: basil, ginseng, liquorice, mint species, rosemary."
      }
    ]
  },
  {
    chapter: 13,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Nhựa cánh kiến đỏ; gôm, nhựa cây, các chất nhựa và các chất chiết xuất từ thực vật khác",
    titleEn: "Lac; gums, resins and other vegetable saps and extracts",
    notesVi: [
      "Nhóm 13.02 áp dụng cho các chất chiết xuất từ cây cam thảo và cây kim cúc, cây hublong (hoa bia), cây lô hội và cây thuốc phiện.",
      "Nhóm này không áp dụng cho: Chất chiết xuất từ cây cam thảo có hàm lượng trên 10% là đường sucroza hoặc được đóng gói như kẹo (nhóm 17.04); Chất chiết xuất từ malt (nhóm 19.01); Chất chiết xuất từ cà phê, chè hay chè paragoay (nhóm 21.01)."
    ],
    notesEn: [
      "Heading 13.02 applies to liquorice extract and extract of pyrethrum, extract of hops, extract of aloes and opium.",
      "The heading does not apply to: Liquorice extract containing more than 10% by weight of sucrose or put up as confectionery (heading 17.04); Malt extract (heading 19.01); Extracts of coffee, tea or maté (heading 21.01)."
    ],
    generalVi: "Chương này bao gồm nhựa cánh kiến đỏ (là chất nhựa do loại côn trùng tạo ra trên một số cây ở vùng nhiệt đới), gôm (gôm Ả rập, gôm adragant, v.v.), nhựa cây, nhựa gôm, nhựa dầu tự nhiên và các chất chiết xuất từ thực vật khác.",
    generalEn: "This Chapter covers lac (a resinous substance secreted by insects on certain tropical trees), gums (gum arabic, tragacanth, etc.), resins, gum-resins, natural oleoresins and other vegetable saps and extracts.",
    headings: [
      {
        code: "13.01",
        titleVi: "Nhựa cánh kiến đỏ; gôm, nhựa cây, nhựa gôm và nhựa dầu tự nhiên",
        titleEn: "Lac; natural gums, resins, gum-resins and oleoresins",
        contentVi: "Nhóm này bao gồm nhựa cánh kiến đỏ (lac) và các sản phẩm gôm tự nhiên như gôm Ả rập, gôm adragant, cũng như nhựa cây, nhựa gôm và nhựa dầu tự nhiên (ví dụ, nhựa thông, nhựa dammar).",
        contentEn: "This heading covers lac and natural gum products such as gum arabic, tragacanth, as well as resins, gum-resins and natural oleoresins (e.g., rosin, dammar)."
      },
      {
        code: "13.02",
        titleVi: "Nhựa và các chất chiết xuất từ thực vật; chất pectic, muối và este của axit pectic; agar-agar và các chất nhầy khác",
        titleEn: "Vegetable saps and extracts; pectic substances, pectinates and pectates; agar-agar and other mucilages",
        contentVi: "Nhóm này bao gồm nhựa và các chất chiết xuất từ thực vật (ví dụ: chiết xuất cam thảo, chiết xuất hoa bia, chiết xuất lô hội), chất pectic và các muối và este của chúng, agar-agar và các chất nhầy thực vật khác.",
        contentEn: "This heading covers vegetable saps and extracts (e.g., liquorice extract, hop extract, aloe extract), pectic substances and their salts and esters, agar-agar and other vegetable mucilages."
      }
    ]
  },
  {
    chapter: 14,
    section: 2,
    sectionTitleVi: "CÁC SẢN PHẨM THỰC VẬT",
    sectionTitleEn: "VEGETABLE PRODUCTS",
    titleVi: "Vật liệu thực vật dùng để tết bện; các sản phẩm thực vật chưa được chi tiết hoặc ghi ở nơi khác",
    titleEn: "Vegetable plaiting materials; vegetable products not elsewhere specified or included",
    notesVi: [
      "Chương này không bao gồm: vật liệu thực vật hoặc xơ từ nguyên liệu thực vật đã chế biến chủ yếu dùng cho ngành dệt, hoặc các vật liệu thực vật khác, đã xử lý thích hợp chỉ để dùng làm vật liệu dệt (Phần XI).",
      "Nhóm 14.01 áp dụng cho các loại tre, liễu gai, sậy và các loại tương tự, lõi song mây hoặc song mây chẻ. Nhóm này không áp dụng cho nan gỗ (nhóm 44.04)."
    ],
    notesEn: [
      "This Chapter does not cover: vegetable materials or fibres of vegetable materials of a kind used primarily in the manufacture of textiles, or other vegetable materials which have undergone treatment so as to render them suitable for use only as textile materials (Section XI).",
      "Heading 14.01 applies to bamboos, split osier, reeds and the like, rattan cores and drawn or split rattans. The heading does not apply to chipwood (heading 44.04)."
    ],
    generalVi: "Chương này gồm: Vật liệu thực vật, thô hoặc đã sơ chế, loại chủ yếu dùng để tết bện, làm chổi hoặc bàn chải, hoặc lót hoặc nhồi; Hạt, hạt mềm, vỏ trái cây và quả hạch loại sử dụng để chạm, khắc, để làm khuy hoặc một số đồ trang trí nhỏ khác; Các sản phẩm thực vật khác chưa được chi tiết ở nơi khác.",
    generalEn: "This Chapter covers: Vegetable materials, raw or simply worked, of a kind used primarily for plaiting, broom or brush making, or as stuffing or padding; Seeds, pips, hulls and nuts of a kind used for carving, for the manufacture of buttons and other small fancy-goods; Other vegetable products not elsewhere specified.",
    headings: [
      {
        code: "14.01",
        titleVi: "Nguyên liệu thực vật chủ yếu dùng để tết bện",
        titleEn: "Vegetable materials of a kind used primarily for plaiting",
        contentVi: "Nhóm này bao gồm tre, song, mây, sậy, liễu gai, cây bấc, cọ sợi, các loại rơm, rạ ngũ cốc đã làm sạch, tẩy trắng hoặc đã nhuộm và vỏ cây đoạn, dùng chủ yếu để tết bện.",
        contentEn: "This heading covers bamboos, rattans, reeds, rushes, osier, raffia, cleaned, bleached or dyed cereal straw, and lime bark, used primarily for plaiting."
      },
      {
        code: "14.04",
        titleVi: "Các sản phẩm thực vật chưa được chi tiết hoặc ghi ở nơi khác",
        titleEn: "Vegetable products not elsewhere specified or included",
        contentVi: "Nhóm này bao gồm các sản phẩm thực vật khác chưa được chi tiết hoặc ghi ở nơi khác như: bông thô, cây xơ mướp, hạt và quả hạch dùng để chạm khắc.",
        contentEn: "This heading covers other vegetable products not elsewhere specified or included such as: raw vegetable materials, luffa, seeds and nuts used for carving."
      }
    ]
  },
  {
    chapter: 15,
    section: 3,
    sectionTitleVi: "CHẤT BÉO VÀ DẦU CÓ NGUỒN GỐC TỪ ĐỘNG VẬT, THỰC VẬT HOẶC VI SINH VẬT VÀ CÁC SẢN PHẨM TÁCH TỪ CHÚNG; CHẤT BÉO ĂN ĐƯỢC ĐÃ CHẾ BIẾN; CÁC LOẠI SÁP ĐỘNG VẬT HOẶC THỰC VẬT",
    sectionTitleEn: "ANIMAL OR VEGETABLE FATS AND OILS AND THEIR CLEAVAGE PRODUCTS; PREPARED EDIBLE FATS; ANIMAL OR VEGETABLE WAXES",
    titleVi: "Chất béo và dầu có nguồn gốc từ động vật, thực vật hoặc vi sinh vật và các sản phẩm tách từ chúng; chất béo ăn được đã chế biến; các loại sáp động vật hoặc thực vật",
    titleEn: "Animal, vegetable or microbial fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes",
    notesVi: [
      "Chương này không bao gồm: (a) Mỡ lợn hoặc mỡ gia cầm thuộc nhóm 02.09; (b) Bơ ca cao, chất béo hoặc dầu cacao (nhóm 18.04); (c) Các chế phẩm ăn được có chứa hàm lượng trên 15% các sản phẩm của nhóm 04.05 (thường thuộc Chương 21); (d) Tóp mỡ (nhóm 23.01) hoặc phế liệu thuộc các nhóm từ 23.04 đến 23.06.",
      "Nhóm 15.09 không áp dụng cho các loại dầu ô liu thu được bằng phương pháp tách chiết dung môi (nhóm 15.10)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Pig fat or poultry fat of heading 02.09; (b) Cocoa butter, fat or oil (heading 18.04); (c) Edible preparations containing by weight more than 15% of the products of heading 04.05 (generally Chapter 21); (d) Greaves (heading 23.01) or residues of headings 23.04 to 23.06.",
      "Heading 15.09 does not apply to oils obtained from olives by solvent extraction (heading 15.10)."
    ],
    generalVi: "Chương này gồm: Chất béo và dầu có nguồn gốc động vật, thực vật hoặc vi sinh vật, dạng thô, làm sạch hoặc tinh lọc hoặc tinh chế hoặc chế biến theo một số cách khác; Các sản phẩm thu được từ quá trình chế biến chất béo hoặc dầu động vật, thực vật hoặc vi sinh vật; Sáp có nguồn gốc động vật hoặc thực vật; Các sản phẩm có chứa chất béo như margarine, shortening.",
    generalEn: "This Chapter covers: Animal, vegetable or microbial fats and oils, crude, refined or otherwise prepared; Products obtained from the processing of animal, vegetable or microbial fats or oils; Waxes of animal or vegetable origin; Fat-containing products such as margarine, shortening.",
    headings: [
      {
        code: "15.01",
        titleVi: "Mỡ lợn (kể cả mỡ lá) và mỡ gia cầm, trừ các loại thuộc nhóm 02.09 hoặc 15.03",
        titleEn: "Pig fat (including lard) and poultry fat, other than that of heading 02.09 or 15.03",
        contentVi: "Nhóm này bao gồm mỡ lợn (kể cả mỡ lá) và mỡ gia cầm, đã nấu chảy hoặc chiết xuất bằng cách khác. Các loại mỡ này được sử dụng trong nấu ăn và sản xuất thực phẩm.",
        contentEn: "This heading covers pig fat (including lard) and poultry fat, rendered or otherwise extracted. These fats are used in cooking and food production."
      },
      {
        code: "15.07",
        titleVi: "Dầu đậu tương và các phần tách của dầu này, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học",
        titleEn: "Soya-bean oil and its fractions, whether or not refined, but not chemically modified",
        contentVi: "Nhóm này bao gồm dầu đậu tương và các phần tách của dầu này, thô hoặc đã tinh chế. Dầu đậu tương là một trong những loại dầu thực vật được sử dụng phổ biến nhất trên thế giới.",
        contentEn: "This heading covers soya-bean oil and its fractions, crude or refined. Soya-bean oil is one of the most widely used vegetable oils in the world."
      },
      {
        code: "15.09",
        titleVi: "Dầu ô liu và các phần tách của dầu này, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học",
        titleEn: "Olive oil and its fractions, whether or not refined, but not chemically modified",
        contentVi: "Nhóm này bao gồm dầu ô liu nguyên chất (virgin olive oil) và các loại dầu ô liu khác. Dầu ô liu nguyên chất có chỉ số axit tự do tính theo axit oleic không quá 2,0g/100g.",
        contentEn: "This heading covers virgin olive oil and other olive oils. Virgin olive oil has a free acidity expressed as oleic acid not exceeding 2.0 g/100 g."
      },
      {
        code: "15.11",
        titleVi: "Dầu cọ và các phần tách của dầu này, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học",
        titleEn: "Palm oil and its fractions, whether or not refined, but not chemically modified",
        contentVi: "Nhóm này bao gồm dầu cọ và các phần tách của dầu này, thô hoặc đã tinh chế. Dầu cọ là loại dầu thực vật được sản xuất nhiều nhất trên thế giới.",
        contentEn: "This heading covers palm oil and its fractions, crude or refined. Palm oil is the most produced vegetable oil in the world."
      },
      {
        code: "15.17",
        titleVi: "Margarine; hỗn hợp hoặc chế phẩm ăn được từ chất béo hoặc dầu động vật, thực vật hoặc vi sinh vật",
        titleEn: "Margarine; edible mixtures or preparations of animal, vegetable or microbial fats or oils",
        contentVi: "Nhóm này bao gồm margarine và các hỗn hợp hoặc chế phẩm ăn được từ chất béo hoặc dầu động vật, thực vật hoặc vi sinh vật. Margarine là chất thay thế bơ được sản xuất từ dầu thực vật.",
        contentEn: "This heading covers margarine and edible mixtures or preparations of animal, vegetable or microbial fats or oils. Margarine is a butter substitute made from vegetable oils."
      }
    ]
  },
  {
    chapter: 16,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Các chế phẩm từ thịt, cá, động vật giáp xác, động vật thân mềm hoặc động vật thuỷ sinh không xương sống khác, hoặc từ côn trùng",
    titleEn: "Preparations of meat, of fish, of crustaceans, molluscs or other aquatic invertebrates, or of insects",
    notesVi: [
      "Chương này không bao gồm các loại thịt, các phụ phẩm dạng thịt sau giết mổ, cá, động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác, đã chế biến hay bảo quản theo các quy trình đã ghi trong Chương 2 hoặc Chương 3 hoặc nhóm 05.04.",
      "Chế phẩm thực phẩm được xếp vào Chương này với điều kiện các chế phẩm này chứa trên 20% tính theo khối lượng là xúc xích, thịt, các phụ phẩm dạng thịt sau giết mổ, tiết, côn trùng, cá hoặc động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác."
    ],
    notesEn: [
      "This Chapter does not cover meat, meat offal, fish, crustaceans, molluscs or other aquatic invertebrates, prepared or preserved by the processes specified in Chapter 2 or 3 or heading 05.04.",
      "Food preparations fall in this Chapter provided that they contain more than 20% by weight of sausage, meat, meat offal, blood, insects, fish or crustaceans, molluscs or other aquatic invertebrates, or any combination thereof."
    ],
    generalVi: "Chương này bao gồm các chế phẩm từ thịt (xúc xích, thịt đóng hộp, pate, v.v.), các chế phẩm từ cá (cá đóng hộp, cá hồi hun khói chế biến, v.v.), các chế phẩm từ động vật giáp xác và động vật thân mềm (tôm đóng hộp, nghêu, sò chế biến, v.v.).",
    generalEn: "This Chapter covers preparations of meat (sausages, canned meat, pâtés, etc.), preparations of fish (canned fish, prepared smoked salmon, etc.), preparations of crustaceans and molluscs (canned shrimp, prepared clams, mussels, etc.).",
    headings: [
      {
        code: "16.01",
        titleVi: "Xúc xích và các sản phẩm tương tự, làm từ thịt, từ các phụ phẩm dạng thịt sau giết mổ, tiết hoặc côn trùng; các chế phẩm thực phẩm từ các sản phẩm đó",
        titleEn: "Sausages and similar products, of meat, meat offal, blood or insects; food preparations based on these products",
        contentVi: "Nhóm này bao gồm xúc xích và các sản phẩm tương tự làm từ thịt, phụ phẩm thịt, tiết hoặc côn trùng. Xúc xích có thể ở dạng tươi, nấu chín, hun khói hoặc khô.",
        contentEn: "This heading covers sausages and similar products of meat, meat offal, blood or insects. Sausages may be fresh, cooked, smoked or dried."
      },
      {
        code: "16.02",
        titleVi: "Thịt, các phụ phẩm dạng thịt sau giết mổ, tiết hoặc côn trùng, đã chế biến hoặc bảo quản khác",
        titleEn: "Other prepared or preserved meat, meat offal, blood or insects",
        contentVi: "Nhóm này bao gồm thịt, các phụ phẩm dạng thịt sau giết mổ, tiết hoặc côn trùng, đã chế biến hoặc bảo quản khác ngoài xúc xích. Bao gồm thịt đóng hộp, pate, thịt khô ướp gia vị.",
        contentEn: "This heading covers other prepared or preserved meat, meat offal, blood or insects, other than sausages. Includes canned meat, pâtés, dried seasoned meat."
      },
      {
        code: "16.04",
        titleVi: "Cá đã được chế biến hay bảo quản; trứng cá muối và sản phẩm thay thế trứng cá muối chế biến từ trứng cá",
        titleEn: "Prepared or preserved fish; caviar and caviar substitutes prepared from fish eggs",
        contentVi: "Nhóm này bao gồm cá đã được chế biến hay bảo quản (cá đóng hộp, cá ngâm dầu, v.v.), trứng cá muối (caviar) và sản phẩm thay thế trứng cá muối.",
        contentEn: "This heading covers prepared or preserved fish (canned fish, fish in oil, etc.), caviar and caviar substitutes prepared from fish eggs."
      },
      {
        code: "16.05",
        titleVi: "Động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác, đã được chế biến hoặc bảo quản",
        titleEn: "Crustaceans, molluscs and other aquatic invertebrates, prepared or preserved",
        contentVi: "Nhóm này bao gồm động vật giáp xác (tôm, cua, tôm hùm), động vật thân mềm (nghêu, sò, mực) và động vật thuỷ sinh không xương sống khác, đã được chế biến hoặc bảo quản.",
        contentEn: "This heading covers crustaceans (shrimp, crab, lobster), molluscs (clams, mussels, squid) and other aquatic invertebrates, prepared or preserved."
      }
    ]
  },
  {
    chapter: 17,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Đường và các loại kẹo đường",
    titleEn: "Sugars and sugar confectionery",
    notesVi: [
      "Theo mục đích của các phân nhóm 1701.12, 1701.13 và 1701.14, khái niệm \"đường thô\" có nghĩa là các loại đường có hàm lượng sucroza tính theo khối lượng, ở thể khô, tương ứng với kết quả dưới 99,5° trên phân cực kế.",
      "Chương này không bao gồm: Kẹo đường có pha cacao hoặc sôcôla (nhóm 18.06); Chế phẩm thực phẩm được làm ngọt (Chương 19, 20, 21, 22); Đường tinh khiết về mặt hoá học trừ sucroza, lactoza, maltose, glucoza và fructoza (nhóm 29.40)."
    ],
    notesEn: [
      "For the purposes of subheadings 1701.12, 1701.13 and 1701.14, \"raw sugar\" means sugar whose content of sucrose by weight, in the dry state, corresponds to a polarimeter reading of less than 99.5°.",
      "This Chapter does not cover: Sugar confectionery containing cocoa or chocolate (heading 18.06); Sweetened food preparations (Chapter 19, 20, 21, 22); Chemically pure sugars other than sucrose, lactose, maltose, glucose and fructose (heading 29.40)."
    ],
    generalVi: "Chương này không chỉ gồm các loại đường (sucroza, lactoza, maltose, glucoza và fructoza), mà còn gồm xirô đường, mật ong nhân tạo, đường caramen, mật đường từ quá trình chiết xuất hoặc tinh chế đường và kẹo đường.",
    generalEn: "This Chapter covers not only sugars (sucrose, lactose, maltose, glucose and fructose), but also sugar syrups, artificial honey, caramel, molasses resulting from the extraction or refining of sugar and sugar confectionery.",
    headings: [
      {
        code: "17.01",
        titleVi: "Đường mía hoặc đường củ cải và đường sucroza tinh khiết về mặt hoá học, ở thể rắn",
        titleEn: "Cane or beet sugar and chemically pure sucrose, in solid form",
        contentVi: "Đường mía thu được từ nước ép của thân cây mía. Đường củ cải thu được từ nước ép được chiết xuất từ củ cây củ cải đường. Đường thô có dạng kết tinh màu nâu, đường tinh luyện có dạng tinh thể trắng.",
        contentEn: "Cane sugar is obtained from the juice of sugar cane. Beet sugar is obtained from the juice extracted from sugar beets. Raw sugar is brown crystalline, refined sugar is white crystalline."
      },
      {
        code: "17.02",
        titleVi: "Đường khác, kể cả đường lactoza, maltose, glucoza và fructoza tinh khiết về mặt hoá học, ở thể rắn; xirô đường chưa pha thêm hương liệu hoặc chất màu; mật ong nhân tạo; đường caramen",
        titleEn: "Other sugars, including chemically pure lactose, maltose, glucose and fructose, in solid form; sugar syrups; artificial honey; caramel",
        contentVi: "Nhóm này bao gồm các loại đường khác như lactoza (đường sữa), maltose (đường mạch nha), glucoza (đường nho), fructoza (đường quả), xirô đường, mật ong nhân tạo và đường caramen.",
        contentEn: "This heading covers other sugars such as lactose (milk sugar), maltose (malt sugar), glucose (grape sugar), fructose (fruit sugar), sugar syrups, artificial honey and caramel."
      },
      {
        code: "17.04",
        titleVi: "Kẹo đường (kể cả sôcôla trắng), không chứa ca cao",
        titleEn: "Sugar confectionery (including white chocolate), not containing cocoa",
        contentVi: "Nhóm này bao gồm kẹo đường không chứa ca cao, bao gồm: kẹo cứng, kẹo mềm, kẹo cao su, kẹo gôm, kẹo cam thảo, sôcôla trắng, hạnh nhân bọc đường.",
        contentEn: "This heading covers sugar confectionery not containing cocoa, including: hard candy, soft candy, chewing gum, gum drops, liquorice confectionery, white chocolate, sugar-coated almonds."
      }
    ]
  },
  {
    chapter: 18,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Ca cao và các chế phẩm từ ca cao",
    titleEn: "Cocoa and cocoa preparations",
    notesVi: [
      "Chương này không bao gồm: (a) Chế phẩm thực phẩm có hàm lượng trên 20% là xúc xích, thịt, các phụ phẩm dạng thịt sau giết mổ, tiết, côn trùng, cá hoặc động vật giáp xác, động vật thân mềm hoặc động vật thủy sinh không xương sống khác (Chương 16); (b) Các chế phẩm thuộc các nhóm 04.03, 19.01, 19.02, 19.04, 19.05, 21.05, 22.02, 22.08, 30.03 hoặc 30.04.",
      "Nhóm 18.06 bao gồm các loại kẹo đường có chứa ca cao và các loại chế phẩm thực phẩm khác chứa ca cao."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Food preparations containing more than 20% by weight of sausage, meat, meat offal, blood, insects, fish or crustaceans, molluscs or other aquatic invertebrates (Chapter 16); (b) Preparations of headings 04.03, 19.01, 19.02, 19.04, 19.05, 21.05, 22.02, 22.08, 30.03 or 30.04.",
      "Heading 18.06 includes sugar confectionery containing cocoa and other food preparations containing cocoa."
    ],
    generalVi: "Chương này bao gồm ca cao (kể cả hạt ca cao) ở tất cả các dạng, bơ ca cao, chất béo và dầu ca cao và các chế phẩm có chứa ca cao (với bất cứ tỉ lệ nào), trừ sôcôla trắng (nhóm 17.04) và các chế phẩm khác được liệt kê trong Chú giải.",
    generalEn: "This Chapter covers cocoa (including cocoa beans) in all forms, cocoa butter, fat and oil and preparations containing cocoa (in any proportion), except white chocolate (heading 17.04) and other preparations listed in the Notes.",
    headings: [
      {
        code: "18.01",
        titleVi: "Hạt ca cao, đã hoặc chưa vỡ mảnh, sống hoặc đã rang",
        titleEn: "Cocoa beans, whole or broken, raw or roasted",
        contentVi: "Nhóm này bao gồm hạt ca cao, đã hoặc chưa vỡ mảnh, sống hoặc đã rang. Hạt ca cao là nguyên liệu chính để sản xuất sôcôla và các sản phẩm từ ca cao.",
        contentEn: "This heading covers cocoa beans, whole or broken, raw or roasted. Cocoa beans are the main raw material for producing chocolate and cocoa products."
      },
      {
        code: "18.03",
        titleVi: "Bột ca cao nhão, đã hoặc chưa khử chất béo",
        titleEn: "Cocoa paste, whether or not defatted",
        contentVi: "Nhóm này bao gồm bột ca cao nhão (khối ca cao), đã hoặc chưa khử chất béo. Bột ca cao nhão được sản xuất bằng cách nghiền hạt ca cao đã rang.",
        contentEn: "This heading covers cocoa paste (cocoa mass), whether or not defatted. Cocoa paste is produced by grinding roasted cocoa beans."
      },
      {
        code: "18.04",
        titleVi: "Bơ ca cao, chất béo và dầu ca cao",
        titleEn: "Cocoa butter, fat and oil",
        contentVi: "Nhóm này bao gồm bơ ca cao, chất béo và dầu ca cao. Bơ ca cao được chiết xuất từ bột ca cao nhão và được sử dụng trong sản xuất sôcôla.",
        contentEn: "This heading covers cocoa butter, fat and oil. Cocoa butter is extracted from cocoa paste and is used in chocolate production."
      },
      {
        code: "18.06",
        titleVi: "Sôcôla và các chế phẩm thực phẩm khác có chứa ca cao",
        titleEn: "Chocolate and other food preparations containing cocoa",
        contentVi: "Nhóm này bao gồm sôcôla và các chế phẩm thực phẩm khác có chứa ca cao, bao gồm: sôcôla dạng thanh, sôcôla viên, kẹo sôcôla, bột sôcôla pha uống.",
        contentEn: "This heading covers chocolate and other food preparations containing cocoa, including: chocolate bars, chocolate pieces, chocolate confectionery, chocolate drink powder."
      }
    ]
  },
  {
    chapter: 19,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Chế phẩm từ ngũ cốc, bột, tinh bột hoặc sữa; các loại bánh",
    titleEn: "Preparations of cereals, flour, starch or milk; pastrycooks' products",
    notesVi: [
      "Chương này không bao gồm: (a) Các chế phẩm thực phẩm có chứa trên 20% là xúc xích, thịt, phụ phẩm dạng thịt sau giết mổ, tiết, côn trùng, cá hoặc động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác (Chương 16), trừ các sản phẩm được nhồi thuộc nhóm 19.02; (b) Bánh bích quy hoặc các sản phẩm khác làm từ bột hoặc tinh bột, được chế biến đặc biệt dùng để chăn nuôi động vật (nhóm 23.09).",
      "Nhóm 19.04 không bao gồm các chế phẩm có chứa trên 6% tính theo khối lượng là ca cao đã được khử toàn bộ chất béo hoặc được phủ sô cô la (nhóm 18.06)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Food preparations containing more than 20% by weight of sausage, meat, meat offal, blood, insects, fish or crustaceans, molluscs or other aquatic invertebrates (Chapter 16), except stuffed products of heading 19.02; (b) Biscuits or other articles made from flour or from starch, specially prepared for use in animal feeding (heading 23.09).",
      "Heading 19.04 does not cover preparations containing more than 6% by weight of cocoa calculated on a totally defatted basis or completely coated with chocolate (heading 18.06)."
    ],
    generalVi: "Chương này bao gồm các chế phẩm từ ngũ cốc, bột, tinh bột hoặc sữa (bột trẻ em, thực phẩm dạng bột, mì ăn liền, ngũ cốc ăn sáng, v.v.) và các loại bánh (bánh mì, bánh ngọt, bánh quy, bánh ga tô, v.v.).",
    generalEn: "This Chapter covers preparations of cereals, flour, starch or milk (infant food, food powders, instant noodles, breakfast cereals, etc.) and pastrycooks' products (bread, pastries, biscuits, cakes, etc.).",
    headings: [
      {
        code: "19.01",
        titleVi: "Chiết xuất malt; chế phẩm thực phẩm từ bột, tấm, bột thô, tinh bột hoặc chiết xuất malt",
        titleEn: "Malt extract; food preparations of flour, groats, meal, starch or malt extract",
        contentVi: "Nhóm này bao gồm chiết xuất malt và các chế phẩm thực phẩm từ bột, tấm, bột thô, tinh bột hoặc chiết xuất malt, bao gồm bột trẻ em, thực phẩm dạng bột có chứa bột hoặc tinh bột.",
        contentEn: "This heading covers malt extract and food preparations of flour, groats, meal, starch or malt extract, including infant food, food powders containing flour or starch."
      },
      {
        code: "19.02",
        titleVi: "Mì ống, mì sợi, mì dẹt và sản phẩm tương tự, đã hoặc chưa nấu chín hoặc nhồi hoặc chế biến cách khác",
        titleEn: "Pasta, whether or not cooked or stuffed or otherwise prepared",
        contentVi: "Nhóm này bao gồm mì ống, mì sợi, mì dẹt và các sản phẩm tương tự như lasagne, ravioli, macaroni, spaghetti, mì ăn liền, đã hoặc chưa nấu chín hoặc nhồi.",
        contentEn: "This heading covers pasta, noodles, flat pasta and similar products such as lasagne, ravioli, macaroni, spaghetti, instant noodles, whether or not cooked or stuffed."
      },
      {
        code: "19.04",
        titleVi: "Thực phẩm chế biến thu được từ quá trình rang hoặc nổ ngũ cốc hoặc các sản phẩm từ ngũ cốc; ngũ cốc ở dạng hạt hoặc dạng mảnh lát hoặc dạng khác đã được chế biến",
        titleEn: "Prepared foods obtained by the swelling or roasting of cereals or cereal products; cereals in grain form or in the form of flakes or other worked grains",
        contentVi: "Nhóm này bao gồm ngũ cốc ăn sáng như corn flakes, ngũ cốc nổ (puffed cereals), muesli, và các sản phẩm ngũ cốc chế biến sẵn khác.",
        contentEn: "This heading covers breakfast cereals such as corn flakes, puffed cereals, muesli, and other ready-to-eat cereal products."
      },
      {
        code: "19.05",
        titleVi: "Bánh mì, bánh bột nhào ngọt, bánh ngọt, bánh quy và các loại bánh khác, có hoặc không chứa ca cao; bánh thánh và các sản phẩm tương tự",
        titleEn: "Bread, pastry, cakes, biscuits and other bakers' wares, whether or not containing cocoa; communion wafers and similar products",
        contentVi: "Nhóm này bao gồm bánh mì, bánh bột nhào ngọt, bánh ngọt, bánh quy, bánh ga tô, bánh mì nướng, bánh waffle và các loại bánh nướng khác.",
        contentEn: "This heading covers bread, pastries, cakes, biscuits, cookies, toast, waffles and other bakers' wares."
      }
    ]
  },
  {
    chapter: 20,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Các chế phẩm từ rau, quả, quả hạch (nut) hoặc các phần khác của cây",
    titleEn: "Preparations of vegetables, fruit, nuts or other parts of plants",
    notesVi: [
      "Chương này không bao gồm: (a) Các loại rau, quả hoặc quả hạch, được chế biến hoặc bảo quản theo quy trình đã ghi trong Chương 7, 8 hoặc 11; (b) Chất béo và dầu thực vật (Chương 15); (c) Các chế phẩm thực phẩm có trên 20% là xúc xích, thịt, phụ phẩm dạng thịt sau giết mổ, tiết, côn trùng, cá hoặc động vật giáp xác, động vật thân mềm hoặc các loại động vật thuỷ sinh không xương sống khác (Chương 16).",
      "Các nhóm 20.07 và 20.08 không áp dụng cho các loại thạch trái cây, bột nhão từ quả, các loại quả hạnh bọc đường hoặc các sản phẩm tương tự chế biến dưới dạng kẹo đường (nhóm 17.04) hoặc kẹo sôcôla (nhóm 18.06)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Vegetables, fruit or nuts, prepared or preserved by the processes specified in Chapter 7, 8 or 11; (b) Vegetable fats and oils (Chapter 15); (c) Food preparations containing more than 20% by weight of sausage, meat, meat offal, blood, insects, fish or crustaceans, molluscs or other aquatic invertebrates (Chapter 16).",
      "Headings 20.07 and 20.08 do not apply to fruit jellies, fruit pastes, sugar-coated almonds or the like in the form of sugar confectionery (heading 17.04) or chocolate confectionery (heading 18.06)."
    ],
    generalVi: "Chương này bao gồm các chế phẩm từ rau (rau đóng hộp, dưa chuột muối, khoai tây chiên, v.v.), các chế phẩm từ quả (mứt, thạch, nước quả, quả đóng hộp, v.v.), các chế phẩm từ quả hạch và các phần khác của cây.",
    generalEn: "This Chapter covers preparations of vegetables (canned vegetables, pickled cucumbers, potato chips, etc.), preparations of fruit (jams, jellies, fruit juices, canned fruits, etc.), preparations of nuts and other parts of plants.",
    headings: [
      {
        code: "20.01",
        titleVi: "Rau, quả, quả hạch và các phần ăn được khác của cây, đã chế biến hoặc bảo quản bằng giấm hoặc axit axetic",
        titleEn: "Vegetables, fruit, nuts and other edible parts of plants, prepared or preserved by vinegar or acetic acid",
        contentVi: "Nhóm này bao gồm rau, quả, quả hạch và các phần ăn được khác của cây, đã chế biến hoặc bảo quản bằng giấm hoặc axit axetic, bao gồm dưa chuột muối, ớt ngâm, hành ngâm.",
        contentEn: "This heading covers vegetables, fruit, nuts and other edible parts of plants, prepared or preserved by vinegar or acetic acid, including pickled cucumbers, pickled peppers, pickled onions."
      },
      {
        code: "20.02",
        titleVi: "Cà chua đã chế biến hoặc bảo quản bằng cách khác trừ bảo quản bằng giấm hoặc axit axetic",
        titleEn: "Tomatoes prepared or preserved otherwise than by vinegar or acetic acid",
        contentVi: "Nhóm này bao gồm cà chua đã chế biến hoặc bảo quản bằng cách khác như cà chua đóng hộp, nước ép cà chua (có hàm lượng chất khô từ 7% trở lên), sốt cà chua.",
        contentEn: "This heading covers tomatoes prepared or preserved otherwise than by vinegar, such as canned tomatoes, tomato juice (with dry weight content of 7% or more), tomato sauce."
      },
      {
        code: "20.07",
        titleVi: "Mứt, thạch trái cây, mứt từ quả họ cam, quýt, chanh, bưởi, quả nghiền hoặc bột nghiền từ quả, thu được từ quá trình đun nấu",
        titleEn: "Jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes, obtained by cooking",
        contentVi: "Nhóm này bao gồm mứt, thạch trái cây, mứt từ quả họ cam quýt, quả nghiền hoặc bột nghiền từ quả, thu được từ quá trình đun nấu, có hoặc không thêm đường hoặc chất làm ngọt khác.",
        contentEn: "This heading covers jams, fruit jellies, marmalades, fruit or nut purée and fruit or nut pastes, obtained by cooking, whether or not containing added sugar or sweetening matter."
      },
      {
        code: "20.09",
        titleVi: "Nước ép trái cây (kể cả hèm nho) và nước ép rau, chưa lên men và chưa pha thêm rượu, có hoặc không pha thêm đường hoặc chất ngọt khác",
        titleEn: "Fruit juices (including grape must) and vegetable juices, unfermented and not containing added spirit, whether or not containing added sugar or sweetening matter",
        contentVi: "Nhóm này bao gồm nước ép trái cây (cam, táo, nho, dứa, v.v.) và nước ép rau (cà rốt, cà chua, v.v.), chưa lên men và chưa pha thêm rượu.",
        contentEn: "This heading covers fruit juices (orange, apple, grape, pineapple, etc.) and vegetable juices (carrot, tomato, etc.), unfermented and not containing added spirit."
      }
    ]
  },
  {
    chapter: 21,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Các chế phẩm ăn được khác",
    titleEn: "Miscellaneous edible preparations",
    notesVi: [
      "Chương này không bao gồm: (a) Các loại rau hỗn hợp thuộc nhóm 07.12; (b) Các chất thay thế cà phê rang có chứa cà phê theo tỷ lệ bất kỳ (nhóm 09.01); (c) Chè đã pha hương liệu (nhóm 09.02); (d) Các gia vị hoặc các sản phẩm khác thuộc các nhóm từ 09.04 đến 09.10; (e) Các chế phẩm thực phẩm có chứa trên 20% tính theo khối lượng của xúc xích, thịt, phụ phẩm dạng thịt sau giết mổ, tiết, côn trùng, cá (Chương 16); (f) Các sản phẩm của nhóm 24.04; (g) Men được đóng gói như dược phẩm (nhóm 30.03 hay 30.04); (h) Enzyme đã chế biến thuộc nhóm 35.07.",
      "Theo mục đích của nhóm 21.04, khái niệm \"chế phẩm thực phẩm tổng hợp đồng nhất\" có nghĩa là các loại chế phẩm bao gồm một hỗn hợp đồng nhất mịn của hai hoặc nhiều thành phần cơ bản như thịt, cá, rau, quả hoặc quả hạch (nuts), được đóng gói với khối lượng tịnh không quá 250g để bán lẻ, dùng làm thực phẩm cho trẻ sơ sinh."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Mixed vegetables of heading 07.12; (b) Roasted coffee substitutes containing coffee in any proportion (heading 09.01); (c) Flavoured tea (heading 09.02); (d) Spices or other products of headings 09.04 to 09.10; (e) Food preparations containing more than 20% by weight of sausage, meat, meat offal, blood, insects, fish (Chapter 16); (f) Products of heading 24.04; (g) Yeast put up as a medicament (heading 30.03 or 30.04); (h) Prepared enzymes of heading 35.07.",
      "For the purposes of heading 21.04, the expression \"homogenised composite food preparations\" means preparations consisting of a finely homogenised mixture of two or more basic ingredients such as meat, fish, vegetables, fruit or nuts, put up for retail sale as food suitable for infants or young children, in containers of a net weight not exceeding 250g."
    ],
    generalVi: "Chương này bao gồm các chế phẩm ăn được khác như chiết xuất cà phê, chè, men, nước xốt, gia vị, kem, bột protein và các chế phẩm thực phẩm khác chưa được ghi hoặc chi tiết ở nơi khác.",
    generalEn: "This Chapter covers miscellaneous edible preparations such as coffee extracts, tea, yeasts, sauces, seasonings, ice cream, protein powders and other food preparations not elsewhere specified.",
    headings: [
      {
        code: "21.01",
        titleVi: "Chất chiết xuất, tinh chất và chất cô đặc từ cà phê, chè hoặc chè Paragoay",
        titleEn: "Extracts, essences and concentrates, of coffee, tea or maté",
        contentVi: "Nhóm này bao gồm các chiết xuất, tinh chất và chất cô đặc của cà phê (bao gồm cả cà phê tan), chè, chè paragoay; các chế phẩm có thành phần cơ bản là các sản phẩm này; rau diếp xoăn rang và các chất thay thế cà phê rang khác.",
        contentEn: "This heading covers extracts, essences and concentrates of coffee (including instant coffee), tea, maté; preparations with a basis of these products; roasted chicory and other roasted coffee substitutes."
      },
      {
        code: "21.02",
        titleVi: "Men (sống hoặc ỳ); các vi sinh đơn bào khác, chết; bột nở đã pha chế",
        titleEn: "Yeasts (active or inactive); other single-cell micro-organisms, dead; prepared baking powders",
        contentVi: "Nhóm này bao gồm men sống (men bia, men làm bánh, men cấy, men gây giống), men ỳ, các vi sinh đơn bào khác đã chết và bột nở đã pha chế (hỗn hợp các hoá chất sinh ra khí carbon dioxide dùng trong nướng bánh).",
        contentEn: "This heading covers active yeasts (brewery yeast, bakers' yeast, culture yeast, seed yeast), inactive yeasts, other single-cell micro-organisms (dead), and prepared baking powders (mixtures of chemical products that evolve carbon dioxide for leavening dough)."
      },
      {
        code: "21.03",
        titleVi: "Nước xốt và các chế phẩm làm nước xốt; đồ gia vị hỗn hợp và bột canh hỗn hợp; bột mịn và bột thô từ hạt mù tạt và mù tạt đã chế biến",
        titleEn: "Sauces and preparations therefor; mixed condiments and mixed seasonings; mustard flour and meal and prepared mustard",
        contentVi: "Nhóm này bao gồm nước xốt đậu tương, ketchup cà chua, bột mù tạt và mù tạt đã chế biến, đồ gia vị hỗn hợp, bột canh hỗn hợp. Các chế phẩm này thường có đặc tính gia vị, được dùng để làm dậy mùi của các món ăn.",
        contentEn: "This heading covers soya sauce, tomato ketchup, mustard flour and prepared mustard, mixed condiments, mixed seasonings. These preparations generally have seasoning characteristics and are used to enhance the flavour of dishes."
      },
      {
        code: "21.04",
        titleVi: "Súp và nước xuýt và các chế phẩm làm súp và nước xuýt; chế phẩm thực phẩm tổng hợp đồng nhất",
        titleEn: "Soups and broths and preparations therefor; homogenised composite food preparations",
        contentVi: "Nhóm này bao gồm súp và nước xuýt dạng lỏng hoặc rắn, các chế phẩm làm súp và nước xuýt; chế phẩm thực phẩm tổng hợp đồng nhất dùng cho trẻ sơ sinh hoặc trẻ nhỏ hoặc ăn kiêng.",
        contentEn: "This heading covers soups and broths in liquid or solid form, preparations for soups and broths; homogenised composite food preparations for infants or young children or for dietetic purposes."
      },
      {
        code: "21.05",
        titleVi: "Kem lạnh và sản phẩm ăn được tương tự, có hoặc không chứa ca cao",
        titleEn: "Ice cream and other edible ice, whether or not containing cocoa",
        contentVi: "Nhóm này bao gồm kem lạnh và các sản phẩm ăn được tương tự như kem sữa, kem trái cây, kem sorbet, có hoặc không chứa ca cao.",
        contentEn: "This heading covers ice cream and other edible ice such as dairy ice cream, fruit ice cream, sorbet, whether or not containing cocoa."
      },
      {
        code: "21.06",
        titleVi: "Các chế phẩm thực phẩm chưa được chi tiết hoặc ghi ở nơi khác",
        titleEn: "Food preparations not elsewhere specified or included",
        contentVi: "Nhóm này bao gồm các chế phẩm thực phẩm chưa được chi tiết hoặc ghi ở nơi khác, bao gồm: bột và bột nhão protein, xirô đường có thêm hương liệu, các chế phẩm từ lòng trắng trứng, men tự phân, các chế phẩm dùng để sản xuất đồ uống.",
        contentEn: "This heading covers food preparations not elsewhere specified or included, including: protein concentrates and powders, flavoured sugar syrups, preparations from egg albumin, autolysed yeast, preparations for making beverages."
      }
    ]
  },
  {
    chapter: 22,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Đồ uống, rượu và giấm",
    titleEn: "Beverages, spirits and vinegar",
    notesVi: [
      "Chương này không bao gồm: (a) Các sản phẩm của Chương này đã được chế biến cho mục đích nấu nướng và không phù hợp để làm đồ uống (thường ở nhóm 21.03); (b) Nước biển (nhóm 25.01); (c) Nước cất hoặc nước khử độ dẫn (nhóm 28.53); (d) Axit axetic có nồng độ trên 10% (nhóm 29.15); (e) Dược phẩm thuộc nhóm 30.03 hay 30.04; (f) Các chế phẩm nước hoa hoặc chế phẩm vệ sinh (Chương 33).",
      "Theo mục đích của nhóm 22.02, khái niệm \"đồ uống không chứa cồn\" có nghĩa là các loại đồ uống có nồng độ cồn không quá 0,5% tính theo thể tích."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Products of this Chapter prepared for culinary purposes and unsuitable for consumption as beverages (generally heading 21.03); (b) Sea water (heading 25.01); (c) Distilled or conductivity water (heading 28.53); (d) Acetic acid exceeding 10% concentration (heading 29.15); (e) Medicaments of heading 30.03 or 30.04; (f) Perfumery or toilet preparations (Chapter 33).",
      "For the purposes of heading 22.02, the term \"non-alcoholic beverages\" means beverages of an alcoholic strength by volume not exceeding 0.5% vol."
    ],
    generalVi: "Các sản phẩm thuộc Chương này chia thành 4 loại chính: (A) Nước và các đồ uống không chứa cồn khác và nước đá; (B) Đồ uống có cồn đã lên men (bia, rượu vang, rượu táo,...); (C) Đồ uống và chất lỏng có chứa cồn được chưng cất (rượu mùi, rượu mạnh,...) và cồn ethyl; (D) Giấm ăn và các sản phẩm thay thế giấm.",
    generalEn: "The products of this Chapter fall into four main groups: (A) Water and other non-alcoholic beverages and ice; (B) Fermented alcoholic beverages (beer, wine, cider, etc.); (C) Distilled alcoholic liquids and beverages (liqueurs, spirits, etc.) and ethyl alcohol; (D) Vinegar and substitutes for vinegar.",
    headings: [
      {
        code: "22.01",
        titleVi: "Nước, kể cả nước khoáng tự nhiên hoặc nhân tạo và nước có ga, chưa pha thêm đường hoặc chất làm ngọt khác hay hương liệu; nước đá và tuyết",
        titleEn: "Waters, including natural or artificial mineral waters and aerated waters, not containing added sugar or sweetening matter nor flavoured; ice and snow",
        contentVi: "Nhóm này bao gồm nước tự nhiên thông thường, nước khoáng tự nhiên hoặc nhân tạo, nước có ga (soda), nước đá và tuyết. Nhóm này không bao gồm nước đã được làm ngọt hoặc đã pha hương liệu.",
        contentEn: "This heading covers ordinary natural water, natural or artificial mineral waters, aerated waters (soda), ice and snow. The heading excludes sweetened or flavoured water."
      },
      {
        code: "22.02",
        titleVi: "Nước, kể cả nước khoáng và nước có ga, đã pha thêm đường hoặc chất làm ngọt khác hay hương liệu, và đồ uống không chứa cồn khác",
        titleEn: "Waters, including mineral waters and aerated waters, containing added sugar or other sweetening matter or flavoured, and other non-alcoholic beverages",
        contentVi: "Nhóm này bao gồm các loại đồ uống không chứa cồn như nước khoáng có hương vị, nước chanh, nước cola, bia không cồn, đồ uống có thành phần cơ bản là sữa và ca cao.",
        contentEn: "This heading covers non-alcoholic beverages such as flavoured mineral waters, lemonade, cola, non-alcoholic beer, beverages with a basis of milk and cocoa."
      },
      {
        code: "22.03",
        titleVi: "Bia sản xuất từ malt",
        titleEn: "Beer made from malt",
        contentVi: "Bia là một loại đồ uống có chứa cồn thu được từ quá trình lên men của nước hèm (wort) chế biến từ ngũ cốc ủ mạch nha (phổ biến nhất là lúa đại mạch hoặc lúa mì), nước và thường với hoa bia (houblon). Bia có thể có màu nhạt hoặc đậm, ngọt hoặc đắng.",
        contentEn: "Beer is an alcoholic beverage obtained by fermenting a liquor (wort) prepared from malted cereals (most commonly barley or wheat), water and usually hops. Beer may be pale or dark, sweet or bitter."
      },
      {
        code: "22.04",
        titleVi: "Rượu vang làm từ nho tươi, kể cả rượu vang cao độ; hèm nho",
        titleEn: "Wine of fresh grapes, including fortified wines; grape must",
        contentVi: "Nhóm này bao gồm rượu vang thông thường (vang đỏ, hồng hoặc trắng), rượu vang được làm cao độ với cồn, rượu vang nổ, các loại rượu vang ngọt tráng miệng như madeira, marsala, port, sherry.",
        contentEn: "This heading covers ordinary wines (red, rosé or white), fortified wines, sparkling wines, sweet dessert wines such as madeira, marsala, port, sherry."
      },
      {
        code: "22.05",
        titleVi: "Rượu vermouth và rượu vang khác làm từ nho tươi đã pha thêm hương vị từ thảo mộc hoặc chất thơm",
        titleEn: "Vermouth and other wine of fresh grapes flavoured with plants or aromatic substances",
        contentVi: "Nhóm này bao gồm rượu vermouth và các loại rượu vang khác từ nho tươi đã được pha thêm hương vị từ thảo mộc hoặc chất thơm.",
        contentEn: "This heading covers vermouth and other wines of fresh grapes flavoured with plants or aromatic substances."
      },
      {
        code: "22.08",
        titleVi: "Cồn etylic chưa biến tính có nồng độ cồn dưới 80% tính theo thể tích; rượu mạnh, rượu mùi và đồ uống có chứa rượu khác",
        titleEn: "Undenatured ethyl alcohol of an alcoholic strength by volume of less than 80% vol; spirits, liqueurs and other spirituous beverages",
        contentVi: "Nhóm này bao gồm cồn etylic chưa biến tính, rượu mạnh (whisky, rum, gin, vodka, brandy), rượu mùi và các đồ uống có chứa rượu khác.",
        contentEn: "This heading covers undenatured ethyl alcohol, spirits (whisky, rum, gin, vodka, brandy), liqueurs and other spirituous beverages."
      },
      {
        code: "22.09",
        titleVi: "Giấm và chất thay thế giấm làm từ axit axetic",
        titleEn: "Vinegar and substitutes for vinegar obtained from acetic acid",
        contentVi: "Nhóm này bao gồm giấm tự nhiên thu được từ quá trình lên men của các chất lỏng có cồn và các chất thay thế giấm làm từ axit axetic pha loãng.",
        contentEn: "This heading covers natural vinegar obtained from fermentation of alcoholic liquids and vinegar substitutes obtained from diluted acetic acid."
      }
    ]
  },
  {
    chapter: 23,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Phế liệu và phế thải từ ngành công nghiệp thực phẩm; thức ăn gia súc đã chế biến",
    titleEn: "Residues and waste from the food industries; prepared animal fodder",
    notesVi: [
      "Nhóm 23.09 kể cả các sản phẩm dùng trong chăn nuôi động vật, chưa được ghi hoặc chi tiết ở nơi khác, thu được từ quá trình chế biến nguyên liệu gốc thực vật hoặc động vật đến mức các nguyên liệu đó mất hết tính chất cơ bản của nguyên liệu ban đầu."
    ],
    notesEn: [
      "Heading 23.09 includes products of a kind used in animal feeding, not elsewhere specified or included, obtained by processing vegetable or animal materials to such an extent that they have lost the essential characteristics of the original material."
    ],
    generalVi: "Chương này bao gồm rất nhiều loại phế liệu và phế thải từ quá trình chế biến nguyên liệu thực vật được sử dụng trong công nghiệp thực phẩm và cả một số sản phẩm phế liệu có nguồn gốc động vật. Phần lớn các loại sản phẩm này đều được sử dụng làm thức ăn chăn nuôi.",
    generalEn: "This Chapter covers the various residues and wastes derived from vegetable materials used by food-preparing industries, and also certain products of animal origin. The main use of most of these products is as animal feeding stuffs.",
    headings: [
      {
        code: "23.01",
        titleVi: "Bột mịn, bột thô và viên, từ thịt hoặc phụ phẩm dạng thịt sau giết mổ, từ cá hay động vật giáp xác, không thích hợp dùng làm thức ăn cho người; tóp mỡ",
        titleEn: "Flours, meals and pellets, of meat or meat offal, of fish or crustaceans, unfit for human consumption; greaves",
        contentVi: "Nhóm này bao gồm bột mịn và bột thô không sử dụng làm thức ăn cho người, thu được từ quá trình chế biến động vật hoặc sản phẩm động vật; tóp mỡ là sản phẩm tạo thành bằng các mô màng còn lại sau quá trình rán mỡ.",
        contentEn: "This heading covers flours and meals unfit for human consumption, obtained from processing animals or animal products; greaves are the membranous tissues remaining after pig or other animal fats have been rendered."
      },
      {
        code: "23.02",
        titleVi: "Cám, tấm và phế liệu khác, ở dạng viên hoặc không ở dạng viên, thu được từ quá trình giần, sàng, rây, xay xát hoặc chế biến cách khác từ các loại ngũ cốc hay các loại cây họ đậu",
        titleEn: "Bran, sharps and other residues, whether or not in the form of pellets, derived from the sifting, milling or other working of cereals or leguminous plants",
        contentVi: "Nhóm này bao gồm cám (phần vỏ ngoài của hạt ngũ cốc), tấm và phế liệu khác từ quá trình xay xát ngũ cốc như lúa mì, ngô, gạo, đại mạch, và từ cây họ đậu.",
        contentEn: "This heading covers bran (outer skins of cereal grains), sharps and other residues from the milling of cereals such as wheat, maize, rice, barley, and from leguminous plants."
      },
      {
        code: "23.03",
        titleVi: "Phế liệu từ quá trình sản xuất tinh bột và phế liệu tương tự, bã ép củ cải đường, bã mía và phế liệu khác từ quá trình sản xuất đường",
        titleEn: "Residues of starch manufacture and similar residues, beet-pulp, bagasse and other waste of sugar manufacture",
        contentVi: "Nhóm này bao gồm phế liệu từ quá trình sản xuất tinh bột, bã ép củ cải đường, bã mía, bã và phế liệu từ quá trình ủ hoặc chưng cất (bã ngũ cốc, mầm malt, phế thải hoa bia).",
        contentEn: "This heading covers residues of starch manufacture, beet-pulp, bagasse, brewing or distilling dregs and waste (dregs of cereals, malt sprouts, spent hops)."
      },
      {
        code: "23.04",
        titleVi: "Khô dầu và phế liệu rắn khác, đã hoặc chưa xay hoặc ở dạng viên, thu được từ quá trình chiết xuất dầu đậu tương",
        titleEn: "Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of soyabean oil",
        contentVi: "Nhóm này bao gồm các loại khô dầu và phế liệu rắn khác còn lại sau khi chiết xuất dầu từ hạt đậu tương bằng dung môi hoặc bằng ép.",
        contentEn: "This heading covers oil-cake and other solid residues remaining after the extraction of oil from soya beans by solvents or by pressing."
      },
      {
        code: "23.06",
        titleVi: "Khô dầu và phế liệu rắn khác, đã hoặc chưa xay hoặc ở dạng viên, thu được từ quá trình chiết xuất chất béo hoặc dầu thực vật",
        titleEn: "Oil-cake and other solid residues, whether or not ground or in the form of pellets, resulting from the extraction of vegetable fats or oils",
        contentVi: "Nhóm này bao gồm khô dầu và phế liệu rắn từ hạt bông, hạt lanh, hạt hướng dương, hạt cải dầu, dừa, hạt cọ và các loại khác.",
        contentEn: "This heading covers oil-cake and solid residues from cotton seeds, linseed, sunflower seeds, rape or colza seeds, coconut, palm nuts and kernels, and others."
      },
      {
        code: "23.09",
        titleVi: "Chế phẩm dùng trong chăn nuôi động vật",
        titleEn: "Preparations of a kind used in animal feeding",
        contentVi: "Nhóm này bao gồm các chế phẩm dùng trong chăn nuôi động vật như thức ăn hỗn hợp hoàn chỉnh, thức ăn bổ sung, thức ăn cho vật nuôi (chó, mèo, chim, cá cảnh).",
        contentEn: "This heading covers preparations of a kind used in animal feeding such as complete feeds, supplementary feeds, pet food (for dogs, cats, birds, ornamental fish)."
      }
    ]
  },
  {
    chapter: 24,
    section: 4,
    sectionTitleVi: "THỰC PHẨM CHẾ BIẾN; ĐỒ UỐNG, RƯỢU MẠNH VÀ GIẤM; THUỐC LÁ VÀ NGUYÊN LIỆU THAY THẾ THUỐC LÁ ĐÃ CHẾ BIẾN",
    sectionTitleEn: "PREPARED FOODSTUFFS; BEVERAGES, SPIRITS AND VINEGAR; TOBACCO AND MANUFACTURED TOBACCO SUBSTITUTES",
    titleVi: "Thuốc lá và nguyên liệu thay thế lá thuốc lá đã chế biến; các sản phẩm chứa hoặc không chứa nicotin, dùng để hút mà không cần đốt cháy; các sản phẩm chứa nicotin khác",
    titleEn: "Tobacco and manufactured tobacco substitutes; products, whether or not containing nicotine, intended for inhalation without combustion; other nicotine containing products",
    notesVi: [
      "Chương này không bao gồm các loại thuốc lá dược phẩm (Chương 30).",
      "Bất kì sản phẩm nào có thể phân loại được vào nhóm 24.04 và bất kì nhóm nào khác thuộc Chương này, thì được phân loại vào nhóm 24.04.",
      "Theo mục đích của nhóm 24.04, thuật ngữ \"hút mà không cần đốt cháy\" có nghĩa việc hút thông qua thiết bị làm nóng hoặc thiết bị khác, không cần đốt cháy."
    ],
    notesEn: [
      "This Chapter does not cover medicinal cigarettes (Chapter 30).",
      "Any products classifiable in heading 24.04 and any other heading of the Chapter are to be classified in heading 24.04.",
      "For the purposes of heading 24.04, the expression \"inhalation without combustion\" means inhalation through heated delivery or other means, without combustion."
    ],
    generalVi: "Lá thuốc lá thu được từ nhiều loại cây được trồng thuộc giống Nicotiana thuộc họ Solanaceae. Phương pháp thu hoạch và công đoạn sấy tùy thuộc vào loại thuốc lá khác nhau. Chương này không chỉ bao gồm lá thuốc lá chưa được chế biến và đã được chế biến mà còn bao gồm các sản phẩm thay thế lá thuốc lá đã chế biến mà không chứa thuốc lá.",
    generalEn: "Tobacco is obtained from various cultivated varieties of the genus Nicotiana of the Solanaceae family. The harvesting method and curing process depend on the variety of tobacco. This Chapter covers not only unmanufactured and manufactured tobacco but also manufactured tobacco substitutes which do not contain tobacco.",
    headings: [
      {
        code: "24.01",
        titleVi: "Lá thuốc lá chưa chế biến; phế liệu lá thuốc lá",
        titleEn: "Unmanufactured tobacco; tobacco refuse",
        contentVi: "Nhóm này bao gồm lá thuốc lá chưa chế biến dưới dạng cả cây hay dạng lá ở dạng tự nhiên hoặc đã sấy hoặc đã ủ men, còn nguyên hoặc được tước cọng; phế liệu lá thuốc lá (cọng, cuống, vụn, bụi).",
        contentEn: "This heading covers unmanufactured tobacco in the form of whole plants or leaves in the natural state or as cured or fermented leaves, whole or stemmed/stripped; tobacco refuse (stalks, stems, trimmings, dust)."
      },
      {
        code: "24.02",
        titleVi: "Xì gà, xì gà xén hai đầu, xì gà nhỏ và thuốc lá điếu, từ lá thuốc lá hoặc từ các nguyên liệu thay thế lá thuốc lá",
        titleEn: "Cigars, cheroots, cigarillos and cigarettes, of tobacco or of tobacco substitutes",
        contentVi: "Nhóm này chỉ bao gồm xì gà, xì gà xén hai đầu, xì gà nhỏ và thuốc lá điếu, được làm từ lá thuốc lá hoặc từ các chất thay thế lá thuốc lá.",
        contentEn: "This heading is restricted to cigars, cheroots, cigarillos and cigarettes, made of tobacco or of tobacco substitutes."
      },
      {
        code: "24.03",
        titleVi: "Lá thuốc lá đã chế biến và các nguyên liệu thay thế lá thuốc lá đã chế biến khác; thuốc lá \"thuần nhất\" hoặc thuốc lá \"hoàn nguyên\"; chiết xuất và tinh chất lá thuốc lá",
        titleEn: "Other manufactured tobacco and manufactured tobacco substitutes; \"homogenised\" or \"reconstituted\" tobacco; tobacco extracts and essences",
        contentVi: "Nhóm này bao gồm lá thuốc lá để hút (thuốc lá tẩu, thuốc lá sử dụng tẩu nước), lá thuốc lá để nhai, lá thuốc lá để hít (hít bột), thuốc lá thuần nhất hoặc hoàn nguyên, chiết xuất và tinh chất thuốc lá.",
        contentEn: "This heading covers smoking tobacco (pipe tobacco, water pipe tobacco), chewing tobacco, snuff, homogenised or reconstituted tobacco, tobacco extracts and essences."
      },
      {
        code: "24.04",
        titleVi: "Sản phẩm chứa lá thuốc lá, thuốc lá hoàn nguyên, nicotin, hoặc các nguyên liệu thay thế, dùng để hút mà không cần đốt cháy; các sản phẩm chứa nicotin khác",
        titleEn: "Products containing tobacco, reconstituted tobacco, nicotine, or substitutes, intended for inhalation without combustion; other nicotine containing products",
        contentVi: "Nhóm này bao gồm dung dịch chứa nicotin dùng cho thuốc lá điện tử, các sản phẩm có chứa lá thuốc lá hoặc thuốc lá hoàn nguyên dùng cho hệ thống làm nóng thuốc lá (thuốc lá nung nóng điện tử), thuốc lá điện tử dùng một lần.",
        contentEn: "This heading covers nicotine solutions for e-cigarettes, products containing tobacco or reconstituted tobacco for tobacco heating systems (electronically heated tobacco), disposable e-cigarettes."
      }
    ]
  },
  {
    chapter: 25,
    section: 5,
    sectionTitleVi: "KHOÁNG SẢN",
    sectionTitleEn: "MINERAL PRODUCTS",
    titleVi: "Muối; lưu huỳnh; đất và đá; thạch cao, vôi và xi măng",
    titleEn: "Salt; sulphur; earths and stone; plastering materials, lime and cement",
    notesVi: [
      "Trừ khi có yêu cầu khác, các nhóm của Chương này chỉ bao gồm các sản phẩm ở trạng thái thô hoặc đã được làm sạch, tán, nghiền, nghiền thành bột, nghiền mịn, sàng hoặc tuyển bằng các quy trình tuyển nổi, tách bằng từ tính hoặc bằng các quy trình cơ học và lý học khác (không bao gồm sự kết tinh).",
      "Chương này không bao gồm: (a) Lưu huỳnh thăng hoa, lưu huỳnh kết tủa hoặc lưu huỳnh dạng keo (nhóm 28.02); (b) Đất màu có chứa 70% hoặc hơn tính theo trọng lượng là sắt oxit (nhóm 28.21); (c) Dược phẩm (Chương 30); (d) Chế phẩm nước hoa, mỹ phẩm (Chương 33)."
    ],
    notesEn: [
      "Except where their context otherwise requires, the headings of this Chapter cover only products which are in the crude state or which have been washed, crushed, ground, powdered, levigated, sifted, screened, concentrated by flotation, magnetic separation or other mechanical or physical processes (except crystallisation).",
      "This Chapter does not cover: (a) Sublimed sulphur, precipitated sulphur or colloidal sulphur (heading 28.02); (b) Earth colours containing 70% or more by weight of combined iron (heading 28.21); (c) Medicaments (Chapter 30); (d) Perfumery, cosmetic preparations (Chapter 33)."
    ],
    generalVi: "Chương này chỉ gồm các sản phẩm khoáng ở trạng thái thô, hoặc đã được làm sạch (bao gồm cả việc làm sạch bằng các chất hoá học để loại trừ tạp chất). Các sản phẩm có thể được nung để loại bỏ độ ẩm hoặc các tạp chất, miễn là việc xử lý nhiệt này không làm thay đổi các cấu trúc tinh thể hoặc hoá học của chúng.",
    generalEn: "This Chapter covers only products in the crude state or which have been washed (including cleaning with chemical substances to eliminate impurities). Products may be heated to remove moisture or impurities, provided the heat treatment does not change their crystalline or chemical structure.",
    headings: [
      {
        code: "25.01",
        titleVi: "Muối (kể cả muối ăn và muối đã bị làm biến tính) và natri clorua tinh khiết; nước biển",
        titleEn: "Salt (including table salt and denatured salt) and pure sodium chloride; sea water",
        contentVi: "Nhóm này bao gồm muối được tách chiết từ lòng đất (muối mỏ), muối được tạo bằng phương pháp bay hơi, nước biển, nước muối. Cũng bao gồm muối đã được iốt hóa, muối đã được làm biến chất.",
        contentEn: "This heading covers salt extracted from underground (rock salt), evaporated salt, sea water, brine. Also includes iodised salt, denatured salt."
      },
      {
        code: "25.02",
        titleVi: "Pirít sắt chưa nung",
        titleEn: "Unroasted iron pyrites",
        contentVi: "Nhóm này bao gồm tất cả các dạng pirít sắt chưa nung, bao gồm cả quặng pirít sắt có chứa đồng hoá trị 1 chưa nung. Các pirít chủ yếu được sử dụng để tách chiết lưu huỳnh.",
        contentEn: "This heading covers all unroasted iron pyrites, including unroasted cupreous iron pyrites. Pyrites are mainly used for the extraction of sulphur."
      },
      {
        code: "25.03",
        titleVi: "Lưu huỳnh các loại, trừ lưu huỳnh thăng hoa, lưu huỳnh kết tủa và lưu huỳnh dạng keo",
        titleEn: "Sulphur of all kinds, other than sublimed sulphur, precipitated sulphur and colloidal sulphur",
        contentVi: "Nhóm này bao gồm khoáng lưu huỳnh dạng thô, lưu huỳnh chưa tinh chế, lưu huỳnh tinh chế, lưu huỳnh đã nghiền. Được sử dụng trong ngành công nghiệp hoá chất, lưu hoá cao su, thuốc diệt nấm.",
        contentEn: "This heading covers crude mineral sulphur, unrefined sulphur, refined sulphur, triturated sulphur. Used in chemical industry, rubber vulcanisation, fungicides."
      },
      {
        code: "25.04",
        titleVi: "Graphite tự nhiên",
        titleEn: "Natural graphite",
        contentVi: "Graphit tự nhiên (còn được biết như than chì hoặc chì đen) là một loại carbon được dùng làm bút chì, đánh bóng, sản xuất nồi luyện kim và các sản phẩm chịu lửa, điện cực.",
        contentEn: "Natural graphite (also known as black lead or plumbago) is a form of carbon used for pencils, polishing, manufacture of crucibles and refractory products, electrodes."
      },
      {
        code: "25.05",
        titleVi: "Các loại cát tự nhiên, đã hoặc chưa nhuộm màu",
        titleEn: "Natural sands of all kinds, whether or not coloured",
        contentVi: "Nhóm này bao gồm cát oxit silic, cát thạch anh và các loại cát tự nhiên khác, trừ cát chứa kim loại thuộc Chương 26.",
        contentEn: "This heading covers silica sands, quartz sands and other natural sands, excluding metal-bearing sands of Chapter 26."
      },
      {
        code: "25.15",
        titleVi: "Đá hoa (marble), đá vôi kết tủa (travertine), đá vôi hình thành do sự nén ép hoặc cát (ecaussine) và đá vôi khác dùng làm tượng đài hoặc đá xây dựng",
        titleEn: "Marble, travertine, ecaussine and other calcareous monumental or building stone",
        contentVi: "Nhóm này bao gồm đá hoa, đá vôi kết tủa (travertine) và các loại đá vôi khác dùng làm tượng đài hoặc đá xây dựng, đã hoặc chưa được đẽo thô hoặc mới chỉ cắt thành dạng khối hoặc tấm hình chữ nhật.",
        contentEn: "This heading covers marble, travertine and other calcareous monumental or building stone, roughly trimmed or merely cut into blocks or slabs of a rectangular shape."
      },
      {
        code: "25.20",
        titleVi: "Thite vôi; thạch cao; thạch cao đã nung hoặc canxi sulphat",
        titleEn: "Gypsum; anhydrite; plasters",
        contentVi: "Nhóm này bao gồm đá thạch cao thô hoặc đã nung, thạch cao vữa, thạch cao xây dựng, thạch cao nha khoa.",
        contentEn: "This heading covers crude or calcined gypsum, plaster of Paris, building plasters, dental plasters."
      },
      {
        code: "25.23",
        titleVi: "Xi măng Portland, xi măng alumin, xi măng xỉ (xite), xi măng supersulphate và xi măng thuỷ lực tương tự",
        titleEn: "Portland cement, aluminous cement, slag cement, supersulphate cement and similar hydraulic cements",
        contentVi: "Nhóm này bao gồm xi măng Portland (loại phổ biến nhất), xi măng alumin, xi măng xỉ, xi măng supersulphate và các loại xi măng thuỷ lực tương tự khác.",
        contentEn: "This heading covers Portland cement (the most common type), aluminous cement, slag cement, supersulphate cement and other similar hydraulic cements."
      }
    ]
  },
  {
    chapter: 26,
    section: 5,
    sectionTitleVi: "KHOÁNG SẢN",
    sectionTitleEn: "MINERAL PRODUCTS",
    titleVi: "Quặng, xỉ và tro",
    titleEn: "Ores, slag and ash",
    notesVi: [
      "Chương này không bao gồm: (a) Xỉ hoặc phế liệu công nghiệp tương tự đã được gia công như đá dăm (nhóm 25.17); (b) Magiê carbonat tự nhiên (magnesite) (nhóm 25.19); (c) Xỉ bazơ thuộc Chương 31; (d) Sợi xỉ, bông len đá hoặc các loại sợi khoáng tương tự (nhóm 68.06); (e) Phế liệu hoặc mảnh vụn của kim loại quý (nhóm 71.12 hoặc 85.49).",
      "Theo mục đích của các nhóm từ 26.01 đến 26.17, thuật ngữ \"quặng\" là khoáng sản thường được dùng trong công nghiệp luyện kim để tách kim loại."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Slag or similar industrial waste prepared as macadam (heading 25.17); (b) Natural magnesium carbonate (magnesite) (heading 25.19); (c) Basic slag of Chapter 31; (d) Slag wool, rock wool or similar mineral wools (heading 68.06); (e) Waste or scrap of precious metal (heading 71.12 or 85.49).",
      "For the purposes of headings 26.01 to 26.17, the term \"ores\" means minerals actually used in the metallurgical industry for the extraction of metals."
    ],
    generalVi: "Chương này bao gồm quặng của nhiều kim loại, xỉ, tro và cặn từ quá trình luyện kim và công nghiệp khác. Quặng là khoáng sản được dùng trong công nghiệp luyện kim để tách kim loại.",
    generalEn: "This Chapter covers ores of various metals, slag, ash and residues from metallurgical and other industrial processes. Ores are minerals used in the metallurgical industry for the extraction of metals.",
    headings: [
      {
        code: "26.01",
        titleVi: "Quặng sắt và tinh quặng sắt, kể cả pirit sắt đã nung",
        titleEn: "Iron ores and concentrates, including roasted iron pyrites",
        contentVi: "Nhóm này bao gồm quặng sắt và tinh quặng sắt (hematit, magnetit, limonit, siderit) và pirit sắt đã nung (tro pirit).",
        contentEn: "This heading covers iron ores and concentrates (hematite, magnetite, limonite, siderite) and roasted iron pyrites (pyrite cinders)."
      },
      {
        code: "26.02",
        titleVi: "Quặng mangan và tinh quặng mangan",
        titleEn: "Manganese ores and concentrates",
        contentVi: "Nhóm này bao gồm quặng mangan và tinh quặng mangan, kể cả quặng mangan có chứa sắt và tinh quặng của nó.",
        contentEn: "This heading covers manganese ores and concentrates, including ferruginous manganese ores and their concentrates."
      },
      {
        code: "26.03",
        titleVi: "Quặng đồng và tinh quặng đồng",
        titleEn: "Copper ores and concentrates",
        contentVi: "Nhóm này bao gồm quặng đồng và tinh quặng đồng (chalcopyrit, cuprit, malachit, azurit, bornit).",
        contentEn: "This heading covers copper ores and concentrates (chalcopyrite, cuprite, malachite, azurite, bornite)."
      },
      {
        code: "26.07",
        titleVi: "Quặng chì và tinh quặng chì",
        titleEn: "Lead ores and concentrates",
        contentVi: "Nhóm này bao gồm quặng chì và tinh quặng chì (galenit/sulphua chì, cerussit/carbonate chì, anglesite/sulphate chì).",
        contentEn: "This heading covers lead ores and concentrates (galena/lead sulphide, cerussite/lead carbonate, anglesite/lead sulphate)."
      },
      {
        code: "26.08",
        titleVi: "Quặng kẽm và tinh quặng kẽm",
        titleEn: "Zinc ores and concentrates",
        contentVi: "Nhóm này bao gồm quặng kẽm và tinh quặng kẽm (sphalerit/blende, smithsonit/calamine, hemimorphit, willemit, zincit).",
        contentEn: "This heading covers zinc ores and concentrates (sphalerite/blende, smithsonite/calamine, hemimorphite, willemite, zincite)."
      },
      {
        code: "26.20",
        titleVi: "Xỉ, tro và cặn (trừ loại từ quá trình sản xuất sắt hoặc thép) có chứa kim loại, arsen hoặc các hợp chất của chúng",
        titleEn: "Slag, ash and residues (other than from the manufacture of iron or steel) containing metals, arsenic or their compounds",
        contentVi: "Nhóm này bao gồm xỉ, tro và cặn dùng trong công nghiệp tách kim loại hay dùng để sản xuất các hợp chất hoá học, trừ tro từ quá trình đốt rác thải đô thị.",
        contentEn: "This heading covers slag, ash and residues used in industry for the extraction of metals or as a basis for the manufacture of chemical compounds, excluding ash from incineration of municipal waste."
      }
    ]
  },
  {
    chapter: 27,
    section: 5,
    sectionTitleVi: "KHOÁNG SẢN",
    sectionTitleEn: "MINERAL PRODUCTS",
    titleVi: "Nhiên liệu khoáng, dầu khoáng và các sản phẩm chưng cất từ chúng; các chất chứa bitum; các loại sáp khoáng chất",
    titleEn: "Mineral fuels, mineral oils and products of their distillation; bituminous substances; mineral waxes",
    notesVi: [
      "Chương này không bao gồm: (a) Các hợp chất hữu cơ đã được xác định về mặt hoá học riêng biệt, trừ metan và propan tinh khiết (nhóm 27.11); (b) Dược phẩm thuộc nhóm 30.03 hoặc 30.04; (c) Hỗn hợp hydrocarbon chưa no thuộc nhóm 33.01, 33.02 hoặc 38.05.",
      "Trong nhóm 27.10, khái niệm \"dầu có nguồn gốc từ dầu mỏ và các loại dầu thu được từ khoáng bi-tum\" không chỉ bao gồm dầu có nguồn gốc từ dầu mỏ mà còn bao gồm các loại dầu tương tự."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Separate chemically defined organic compounds, other than pure methane and propane (heading 27.11); (b) Medicaments of heading 30.03 or 30.04; (c) Mixed unsaturated hydrocarbons of heading 33.01, 33.02 or 38.05.",
      "References in heading 27.10 to \"petroleum oils and oils obtained from bituminous minerals\" include not only petroleum oils but also similar oils."
    ],
    generalVi: "Chương này bao gồm than đá, than non, than bùn, dầu mỏ và các sản phẩm chưng cất từ chúng, khí thiên nhiên, khí hóa lỏng, các chất chứa bitum và sáp khoáng chất. Các sản phẩm này chủ yếu được dùng làm nhiên liệu.",
    generalEn: "This Chapter covers coal, lignite, peat, petroleum and products of their distillation, natural gas, liquefied petroleum gases, bituminous substances and mineral waxes. These products are mainly used as fuels.",
    headings: [
      {
        code: "27.01",
        titleVi: "Than đá; than bánh, than quả bàng và nhiên liệu rắn tương tự sản xuất từ than đá",
        titleEn: "Coal; briquettes, ovoids and similar solid fuels manufactured from coal",
        contentVi: "Nhóm này bao gồm than đá (anthracite, than bitum, than mỡ) và nhiên liệu rắn tương tự sản xuất từ than đá (than bánh, than quả bàng).",
        contentEn: "This heading covers coal (anthracite, bituminous coal, coking coal) and similar solid fuels manufactured from coal (briquettes, ovoids)."
      },
      {
        code: "27.09",
        titleVi: "Dầu mỏ và các loại dầu thu được từ khoáng bi-tum, ở dạng thô",
        titleEn: "Petroleum oils and oils obtained from bituminous minerals, crude",
        contentVi: "Nhóm này bao gồm dầu thô từ dầu mỏ (dầu thô là hỗn hợp của các hydrocarbon được khai thác từ các mỏ dầu) và dầu thô từ khoáng bi-tum.",
        contentEn: "This heading covers crude petroleum oils (crude oil is a mixture of hydrocarbons extracted from oil wells) and crude oils from bituminous minerals."
      },
      {
        code: "27.10",
        titleVi: "Dầu có nguồn gốc từ dầu mỏ và các loại dầu thu được từ khoáng bi-tum, trừ dầu thô; các chế phẩm chưa được chi tiết hoặc ghi ở nơi khác, có chứa từ 70% trở lên tính theo trọng lượng là dầu có nguồn gốc từ dầu mỏ",
        titleEn: "Petroleum oils and oils obtained from bituminous minerals, other than crude; preparations not elsewhere specified, containing by weight 70% or more of petroleum oils",
        contentVi: "Nhóm này bao gồm dầu nhẹ (xăng, naphtha), dầu trung bình (kerosene, dầu diesel), dầu nặng (dầu nhiên liệu, dầu bôi trơn), dầu thải.",
        contentEn: "This heading covers light oils (petrol, naphtha), medium oils (kerosene, diesel oil), heavy oils (fuel oil, lubricating oils), waste oils."
      },
      {
        code: "27.11",
        titleVi: "Khí dầu mỏ và các loại khí hydrocarbon khác",
        titleEn: "Petroleum gases and other gaseous hydrocarbons",
        contentVi: "Nhóm này bao gồm khí dầu mỏ hóa lỏng (LPG) như propan, butan, khí thiên nhiên hóa lỏng (LNG), và các khí hydrocarbon khác ở thể khí.",
        contentEn: "This heading covers liquefied petroleum gases (LPG) such as propane, butane, liquefied natural gas (LNG), and other gaseous hydrocarbons."
      },
      {
        code: "27.13",
        titleVi: "Cốc dầu mỏ, bi-tum dầu mỏ và các cặn khác từ dầu có nguồn gốc dầu mỏ hoặc từ dầu thu được từ khoáng bi-tum",
        titleEn: "Petroleum coke, petroleum bitumen and other residues of petroleum oils or of oils obtained from bituminous minerals",
        contentVi: "Nhóm này bao gồm cốc dầu mỏ, bi-tum dầu mỏ (nhựa đường) và các cặn khác từ quá trình lọc dầu.",
        contentEn: "This heading covers petroleum coke, petroleum bitumen (asphalt) and other residues of petroleum refining."
      }
    ]
  },
  {
    chapter: 28,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Hóa chất vô cơ; các hợp chất vô cơ hoặc hữu cơ của kim loại quý, kim loại đất hiếm, các nguyên tố phóng xạ hoặc các chất đồng vị",
    titleEn: "Inorganic chemicals; organic or inorganic compounds of precious metals, of rare-earth metals, of radioactive elements or of isotopes",
    notesVi: [
      "Các mặt hàng (trừ quặng phóng xạ) đáp ứng các mô tả trong nhóm 28.44 hoặc 28.45 phải được xếp vào các nhóm đó và không được đưa vào nhóm nào khác của Danh mục.",
      "Các mặt hàng đóng gói theo liều lượng hoặc đóng gói để bán lẻ được xếp vào các nhóm tương ứng của Danh mục."
    ],
    notesEn: [
      "Goods (other than radioactive ores) answering to a description in heading 28.44 or 28.45 are to be classified in those headings and in no other heading of the Nomenclature.",
      "Goods put up in measured doses or for retail sale are to be classified in the appropriate headings of the Nomenclature."
    ],
    generalVi: "Chương này bao gồm các hóa chất vô cơ, các hợp chất của kim loại quý, kim loại đất hiếm, các nguyên tố phóng xạ và đồng vị. Tất cả các nguyên tố hóa học phóng xạ và các đồng vị phóng xạ được phân loại ở nhóm 28.44.",
    generalEn: "This Chapter covers inorganic chemicals, compounds of precious metals, rare-earth metals, radioactive elements and isotopes. All radioactive chemical elements and radioactive isotopes are classified under heading 28.44.",
    headings: [
      {
        code: "28.01",
        titleVi: "Flo, clo, brom và iot",
        titleEn: "Fluorine, chlorine, bromine and iodine",
        contentVi: "Nhóm này bao gồm các nguyên tố halogen: flo (khí màu vàng nhạt), clo (khí màu vàng lục), brom (chất lỏng màu đỏ nâu), iot (tinh thể màu xám).",
        contentEn: "This heading covers halogen elements: fluorine (pale yellow gas), chlorine (yellow-green gas), bromine (reddish-brown liquid), iodine (greyish crystals)."
      },
      {
        code: "28.02",
        titleVi: "Lưu huỳnh thăng hoa hoặc kết tủa; lưu huỳnh dạng keo",
        titleEn: "Sulphur, sublimed or precipitated; colloidal sulphur",
        contentVi: "Nhóm này bao gồm lưu huỳnh thăng hoa (bột lưu huỳnh), lưu huỳnh kết tủa và lưu huỳnh dạng keo. Được sử dụng trong y tế, dược phẩm, thuốc trừ sâu.",
        contentEn: "This heading covers sublimed sulphur (flowers of sulphur), precipitated sulphur and colloidal sulphur. Used in medicine, pharmaceuticals, insecticides."
      },
      {
        code: "28.04",
        titleVi: "Hydro, khí hiếm và các phi kim loại khác",
        titleEn: "Hydrogen, rare gases and other non-metals",
        contentVi: "Nhóm này bao gồm hydro, khí hiếm (heli, neon, argon, krypton, xenon), nitơ, oxy, bo, silic, photpho, asen, selen, telua.",
        contentEn: "This heading covers hydrogen, rare gases (helium, neon, argon, krypton, xenon), nitrogen, oxygen, boron, silicon, phosphorus, arsenic, selenium, tellurium."
      },
      {
        code: "28.06",
        titleVi: "Hydro clorua (axit hydrocloric); axit clorosulphuric",
        titleEn: "Hydrogen chloride (hydrochloric acid); chlorosulphuric acid",
        contentVi: "Nhóm này bao gồm axit hydrocloric (HCl) và axit clorosulphuric. Axit hydrocloric được sử dụng rộng rãi trong công nghiệp hóa chất, luyện kim, xử lý nước.",
        contentEn: "This heading covers hydrochloric acid (HCl) and chlorosulphuric acid. Hydrochloric acid is widely used in chemical industry, metallurgy, water treatment."
      },
      {
        code: "28.44",
        titleVi: "Các nguyên tố hóa học phóng xạ và các đồng vị phóng xạ và các hợp chất của chúng; hỗn hợp và cặn có chứa các sản phẩm này",
        titleEn: "Radioactive chemical elements and radioactive isotopes and their compounds; mixtures and residues containing these products",
        contentVi: "Nhóm này bao gồm uranium làm giàu, uranium nghèo, plutonium, các nguyên tố phóng xạ và đồng vị phóng xạ khác và hợp chất của chúng.",
        contentEn: "This heading covers enriched uranium, depleted uranium, plutonium, other radioactive elements and radioactive isotopes and their compounds."
      }
    ]
  },
  {
    chapter: 29,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Hóa chất hữu cơ",
    titleEn: "Organic chemicals",
    notesVi: [
      "Trừ khi có yêu cầu khác, các nhóm của Chương này chỉ bao gồm: (a) Các hợp chất hữu cơ được xác định về mặt hoá học riêng biệt, có hoặc không chứa tạp chất; (b) Hỗn hợp của hai hoặc nhiều đồng phân của cùng một hợp chất hữu cơ.",
      "Chương này không bao gồm: (a) Các mặt hàng thuộc nhóm 15.04 hoặc glyxerin thô (nhóm 15.20); (b) Cồn etylic (nhóm 22.07 hoặc 22.08); (c) Metan hoặc propan (nhóm 27.11)."
    ],
    notesEn: [
      "Except where the context otherwise requires, the headings of this Chapter apply only to: (a) Separate chemically defined organic compounds, whether or not containing impurities; (b) Mixtures of two or more isomers of the same organic compound.",
      "This Chapter does not cover: (a) Goods of heading 15.04 or crude glycerol (heading 15.20); (b) Ethyl alcohol (heading 22.07 or 22.08); (c) Methane or propane (heading 27.11)."
    ],
    generalVi: "Chương này bao gồm các hợp chất hữu cơ được xác định về mặt hóa học như hydrocarbon, ancol, axit, ester, aldehyde, ketone, amine, hợp chất dị vòng, vitamin, hormone, alkaloid và các hợp chất hữu cơ khác.",
    generalEn: "This Chapter covers separate chemically defined organic compounds such as hydrocarbons, alcohols, acids, esters, aldehydes, ketones, amines, heterocyclic compounds, vitamins, hormones, alkaloids and other organic compounds.",
    headings: [
      {
        code: "29.01",
        titleVi: "Hydrocarbon mạch hở",
        titleEn: "Acyclic hydrocarbons",
        contentVi: "Nhóm này bao gồm hydrocarbon mạch hở no (metan, etan, propan, butan, pentan, hexan) và hydrocarbon mạch hở chưa no (etylen, propylen, butylen, acetylene).",
        contentEn: "This heading covers saturated acyclic hydrocarbons (methane, ethane, propane, butane, pentane, hexane) and unsaturated acyclic hydrocarbons (ethylene, propylene, butylene, acetylene)."
      },
      {
        code: "29.02",
        titleVi: "Hydrocarbon mạch vòng",
        titleEn: "Cyclic hydrocarbons",
        contentVi: "Nhóm này bao gồm hydrocarbon vòng no (cyclohexane), hydrocarbon vòng chưa no (cyclohexene), hydrocarbon thơm (benzene, toluene, xylene, styrene, naphthalene).",
        contentEn: "This heading covers cyclanes (cyclohexane), cyclenes (cyclohexene), aromatic hydrocarbons (benzene, toluene, xylene, styrene, naphthalene)."
      },
      {
        code: "29.05",
        titleVi: "Ancol mạch hở và các dẫn xuất halogen hóa, sulfo hóa, nitro hóa hoặc nitroso hóa của chúng",
        titleEn: "Acyclic alcohols and their halogenated, sulphonated, nitrated or nitrosated derivatives",
        contentVi: "Nhóm này bao gồm methanol, ethanol, propanol, butanol, pentanol, glycerol, các polyol khác và dẫn xuất của chúng.",
        contentEn: "This heading covers methanol, ethanol, propanol, butanol, pentanol, glycerol, other polyols and their derivatives."
      },
      {
        code: "29.15",
        titleVi: "Axit monocarboxylic mạch hở no và các anhydrit, halogenua, peroxit và peroxyaxit của chúng; các dẫn xuất của chúng",
        titleEn: "Saturated acyclic monocarboxylic acids and their anhydrides, halides, peroxides and peroxyacids; their derivatives",
        contentVi: "Nhóm này bao gồm axit formic, axit axetic, anhydrit axetic, axit propionic, axit butyric và các dẫn xuất của chúng.",
        contentEn: "This heading covers formic acid, acetic acid, acetic anhydride, propionic acid, butyric acid and their derivatives."
      },
      {
        code: "29.36",
        titleVi: "Provitamin và vitamin, tự nhiên hoặc tổng hợp, và các dẫn xuất của chúng",
        titleEn: "Provitamins and vitamins, natural or reproduced by synthesis, and derivatives thereof",
        contentVi: "Nhóm này bao gồm các provitamin và vitamin (vitamin A, B1, B2, B6, B12, C, D, E, K) và các dẫn xuất của chúng, tự nhiên hoặc tổng hợp.",
        contentEn: "This heading covers provitamins and vitamins (vitamins A, B1, B2, B6, B12, C, D, E, K) and their derivatives, natural or synthesised."
      },
      {
        code: "29.39",
        titleVi: "Alkaloit, tự nhiên hoặc tổng hợp, và muối, ete, este và các dẫn xuất khác của chúng",
        titleEn: "Alkaloids, natural or reproduced by synthesis, and their salts, ethers, esters and other derivatives",
        contentVi: "Nhóm này bao gồm alkaloid thuộc nhóm thuốc phiện (morphine, codeine), nhóm cinchona (quinine), caffeine, nicotine, cocaine, và các alkaloid tổng hợp.",
        contentEn: "This heading covers opium alkaloids (morphine, codeine), cinchona alkaloids (quinine), caffeine, nicotine, cocaine, and synthetic alkaloids."
      }
    ]
  },
  {
    chapter: 30,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Dược phẩm",
    titleEn: "Pharmaceutical products",
    notesVi: [
      "Chương này không bao gồm: (a) Thực phẩm hoặc đồ uống (như thực phẩm cho ăn kiêng, thực phẩm dành cho người bị tiểu đường, thực phẩm bổ sung, đồ uống bổ dưỡng, đồ uống có cồn), trừ các chế phẩm dinh dưỡng để truyền tĩnh mạch (Phần IV); (b) Thạch cao được chế biến đặc biệt dùng trong nha khoa (nhóm 25.20).",
      "Theo mục đích của nhóm 30.02, \"các sản phẩm miễn dịch\" bao gồm peptides và proteins trực tiếp tham gia vào điều chỉnh các quá trình miễn dịch."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Foods or beverages (such as dietetic, diabetic or fortified foods, food supplements, tonic beverages, alcoholic beverages), other than nutritional preparations for intravenous administration (Section IV); (b) Plasters specially calcined or finely ground for use in dentistry (heading 25.20).",
      "For the purposes of heading 30.02, \"immunological products\" include peptides and proteins directly involved in the regulation of immunological processes."
    ],
    generalVi: "Chương này bao gồm dược phẩm dùng trong y tế và thú y, bao gồm tuyến và các cơ quan khác, máu và các sản phẩm máu, vắc-xin, các sản phẩm miễn dịch, dược phẩm đã hoặc chưa đóng gói theo liều lượng hoặc để bán lẻ.",
    generalEn: "This Chapter covers pharmaceutical products for human and veterinary medicine, including glands and other organs, blood and blood products, vaccines, immunological products, medicaments whether or not put up in measured doses or for retail sale.",
    headings: [
      {
        code: "30.01",
        titleVi: "Tuyến và các cơ quan khác dùng cho mục đích cơ quan trị liệu, đã làm khô hoặc chưa làm khô, đã hoặc chưa nghiền thành bột; các chiết xuất của tuyến hoặc của các cơ quan khác",
        titleEn: "Glands and other organs for organo-therapeutic uses, dried, whether or not powdered; extracts of glands or other organs",
        contentVi: "Nhóm này bao gồm tuyến và các cơ quan khác (tuyến giáp, tuyến thượng thận, tụy, tuyến yên) dùng cho mục đích cơ quan trị liệu, và các chiết xuất của chúng.",
        contentEn: "This heading covers glands and other organs (thyroid, adrenal, pancreas, pituitary) for organo-therapeutic uses, and their extracts."
      },
      {
        code: "30.02",
        titleVi: "Máu người; máu động vật đã chế biến; các sản phẩm miễn dịch; vắc-xin, các chất độc tố, nuôi cấy các vi sinh vật",
        titleEn: "Human blood; animal blood prepared for therapeutic uses; immunological products; vaccines, toxins, cultures of micro-organisms",
        contentVi: "Nhóm này bao gồm máu người và máu động vật đã chế biến, các sản phẩm miễn dịch (antisera, globulin miễn dịch, interferon, interleukin), vắc-xin, chất độc tố, nuôi cấy vi sinh vật.",
        contentEn: "This heading covers human blood, animal blood prepared for therapeutic uses, immunological products (antisera, immunoglobulins, interferon, interleukin), vaccines, toxins, cultures of micro-organisms."
      },
      {
        code: "30.03",
        titleVi: "Dược phẩm (trừ các mặt hàng thuộc nhóm 30.02, 30.05 hoặc 30.06) gồm hai hoặc nhiều thành phần đã pha trộn để dùng cho mục đích trị bệnh hoặc phòng bệnh, chưa đóng gói theo liều lượng hoặc chưa đóng gói để bán lẻ",
        titleEn: "Medicaments (excluding goods of heading 30.02, 30.05 or 30.06) consisting of two or more constituents mixed together for therapeutic or prophylactic uses, not put up in measured doses or for retail sale",
        contentVi: "Nhóm này bao gồm dược phẩm gồm hai hoặc nhiều thành phần đã pha trộn, chưa đóng gói theo liều lượng hoặc để bán lẻ.",
        contentEn: "This heading covers medicaments consisting of two or more constituents mixed together, not put up in measured doses or for retail sale."
      },
      {
        code: "30.04",
        titleVi: "Dược phẩm (trừ các mặt hàng thuộc nhóm 30.02, 30.05 hoặc 30.06) gồm các sản phẩm đã pha trộn hoặc chưa pha trộn, đã đóng gói theo liều lượng hoặc đóng gói để bán lẻ",
        titleEn: "Medicaments (excluding goods of heading 30.02, 30.05 or 30.06) consisting of mixed or unmixed products, put up in measured doses or for retail sale",
        contentVi: "Nhóm này bao gồm dược phẩm đã đóng gói theo liều lượng hoặc đóng gói để bán lẻ, bao gồm thuốc viên, thuốc con nhộng, thuốc nước, kem bôi, thuốc xịt.",
        contentEn: "This heading covers medicaments put up in measured doses or for retail sale, including tablets, capsules, liquid medicines, creams, sprays."
      },
      {
        code: "30.05",
        titleVi: "Bông, gạc, băng và các sản phẩm tương tự đã được tẩm hoặc tráng các chất dược phẩm hoặc đóng gói để bán lẻ dùng trong y tế",
        titleEn: "Wadding, gauze, bandages and similar articles, impregnated or coated with pharmaceutical substances or put up for retail sale for medical purposes",
        contentVi: "Nhóm này bao gồm bông, gạc, băng và các sản phẩm tương tự (băng dính, thạch cao y tế) đã được tẩm hoặc tráng các chất dược phẩm hoặc đóng gói để bán lẻ dùng trong y tế.",
        contentEn: "This heading covers wadding, gauze, bandages and similar articles (adhesive dressings, medical plasters) impregnated or coated with pharmaceutical substances or put up for retail sale for medical purposes."
      },
      {
        code: "30.06",
        titleVi: "Các mặt hàng dược phẩm khác như chỉ phẫu thuật vô trùng, keo dán mô dùng trong phẫu thuật vô trùng, bộ thuốc thử dùng trong chẩn đoán",
        titleEn: "Other pharmaceutical goods such as sterile surgical suture materials, tissue adhesives for surgical wound closure, diagnostic reagent kits",
        contentVi: "Nhóm này bao gồm chỉ phẫu thuật vô trùng, keo dán mô, vật liệu cầm máu có thể hấp thụ, bộ thuốc thử dùng trong chẩn đoán, thuốc tránh thai, gel bôi trơn cho phẫu thuật.",
        contentEn: "This heading covers sterile surgical suture materials, tissue adhesives, absorbable haemostatics, diagnostic reagent kits, contraceptives, lubricating gels for surgical use."
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
  } else if (section === 3) {
    return {
      vi: "Phần này bao gồm chất béo và dầu có nguồn gốc từ động vật, thực vật hoặc vi sinh vật và các sản phẩm tách từ chúng; chất béo ăn được đã chế biến; các loại sáp động vật hoặc thực vật.",
      en: "This Section covers animal, vegetable or microbial fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes."
    };
  } else if (section === 4) {
    return {
      vi: "Trong Phần này khái niệm \"viên\" chỉ các sản phẩm được liên kết bằng phương pháp ép trực tiếp hay bằng cách pha thêm chất kết dính theo tỷ lệ không quá 3% tính theo trọng lượng.",
      en: "In this Section the term \"pellets\" means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3% by weight."
    };
  } else if (section === 5) {
    return {
      vi: "Phần này bao gồm khoáng sản: muối, lưu huỳnh, đất và đá, thạch cao, vôi và xi măng; quặng, xỉ và tro; nhiên liệu khoáng, dầu khoáng và các sản phẩm chưng cất từ chúng.",
      en: "This Section covers mineral products: salt, sulphur, earths and stone, plastering materials, lime and cement; ores, slag and ash; mineral fuels, mineral oils and products of their distillation."
    };
  } else if (section === 6) {
    return {
      vi: "Phần này bao gồm sản phẩm của ngành công nghiệp hóa chất hoặc các ngành công nghiệp liên quan, bao gồm hóa chất vô cơ, hóa chất hữu cơ, dược phẩm, phân bón, sơn, chất dẻo và cao su.",
      en: "This Section covers products of the chemical or allied industries, including inorganic chemicals, organic chemicals, pharmaceutical products, fertilizers, paints, plastics and rubber."
    };
  }
  return { vi: "", en: "" };
};
