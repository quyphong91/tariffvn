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
  },
  {
    chapter: 31,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Phân bón",
    titleEn: "Fertilisers",
    notesVi: [
      "Chương này không bao gồm: (a) Máu động vật thuộc nhóm 05.11; (b) Các hợp chất đã được xác định về mặt hóa học riêng biệt; (c) Các tinh thể kali clorua nuôi cấy mỗi tinh thể nặng từ 2,5g trở lên thuộc nhóm 38.24.",
      "Nhóm 31.02 chỉ áp dụng cho natri nitrat, amoni nitrat, amoni sulphat, urê và các phân bón nitơ khác.",
      "Nhóm 31.05 chỉ áp dụng cho phân bón có chứa ít nhất hai trong ba nguyên tố: nitơ, phospho, kali."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Animal blood of heading 05.11; (b) Separate chemically defined compounds; (c) Cultured potassium chloride crystals weighing not less than 2.5g each of heading 38.24.",
      "Heading 31.02 applies only to sodium nitrate, ammonium nitrate, ammonium sulphate, urea and other nitrogenous fertilisers.",
      "Heading 31.05 applies only to fertilisers containing at least two of the three fertilising elements: nitrogen, phosphorus, potassium."
    ],
    generalVi: "Chương này bao gồm phân bón và các sản phẩm liên quan được sử dụng trong nông nghiệp để cung cấp dinh dưỡng cho cây trồng. Phân bón cung cấp ít nhất một trong các nguyên tố: nitơ, phospho hoặc kali.",
    generalEn: "This Chapter covers fertilisers and related products used in agriculture to provide nutrients for plants. Fertilisers provide at least one of the elements: nitrogen, phosphorus or potassium.",
    headings: [
      {
        code: "31.01",
        titleVi: "Phân bón động vật hoặc thực vật, đã hoặc chưa pha trộn với nhau hoặc xử lý về mặt hóa học; phân bón sản xuất từ việc pha trộn hoặc xử lý hóa học các sản phẩm động vật hoặc thực vật",
        titleEn: "Animal or vegetable fertilisers, whether or not mixed together or chemically treated; fertilisers produced by mixing or chemical treatment of animal or vegetable products",
        contentVi: "Nhóm này bao gồm phân bón có nguồn gốc động vật hoặc thực vật như phân chuồng, phân chim biển (guano), bột xương, bột máu, bột cá làm phân bón.",
        contentEn: "This heading covers fertilisers of animal or vegetable origin such as farmyard manure, guano, bone meal, blood meal, fish fertiliser."
      },
      {
        code: "31.02",
        titleVi: "Phân bón khoáng hoặc phân bón hóa học, có chứa nitơ",
        titleEn: "Mineral or chemical fertilisers, nitrogenous",
        contentVi: "Nhóm này bao gồm phân bón có chứa nitơ như natri nitrat, amoni nitrat, amoni sulphat, urê, canxi xyanamit.",
        contentEn: "This heading covers nitrogenous fertilisers such as sodium nitrate, ammonium nitrate, ammonium sulphate, urea, calcium cyanamide."
      },
      {
        code: "31.03",
        titleVi: "Phân bón khoáng hoặc phân bón hóa học, có chứa phosphat",
        titleEn: "Mineral or chemical fertilisers, phosphatic",
        contentVi: "Nhóm này bao gồm phân bón có chứa phosphat như xỉ bazơ (Thomas slag), supephosphat đơn, kép và ba.",
        contentEn: "This heading covers phosphatic fertilisers such as basic slag (Thomas slag), single, double and triple superphosphates."
      },
      {
        code: "31.04",
        titleVi: "Phân bón khoáng hoặc phân bón hóa học, có chứa kali",
        titleEn: "Mineral or chemical fertilisers, potassic",
        contentVi: "Nhóm này bao gồm phân bón có chứa kali như muối kali tự nhiên (carnallite, kainite, sylvite), kali clorua, kali sulphat.",
        contentEn: "This heading covers potassic fertilisers such as natural potassium salts (carnallite, kainite, sylvite), potassium chloride, potassium sulphate."
      },
      {
        code: "31.05",
        titleVi: "Phân bón khoáng hoặc phân bón hóa học chứa hai hoặc ba nguyên tố phân bón nitơ, phospho và kali; phân bón khác",
        titleEn: "Mineral or chemical fertilisers containing two or three of the fertilising elements nitrogen, phosphorus and potassium; other fertilisers",
        contentVi: "Nhóm này bao gồm phân bón hỗn hợp như NPK (có chứa nitơ, phospho và kali), phân bón NP, NK, PK.",
        contentEn: "This heading covers compound fertilisers such as NPK (containing nitrogen, phosphorus and potassium), NP, NK, PK fertilisers."
      }
    ]
  },
  {
    chapter: 32,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Các chất chiết xuất làm thuốc nhuộm hoặc thuộc da; ta nanh và các chất dẫn xuất của chúng; thuốc nhuộm, thuốc màu và các chất màu khác; sơn và véc ni; chất gắn và các loại ma tít khác; các loại mực",
    titleEn: "Tanning or dyeing extracts; tannins and their derivatives; dyes, pigments and other colouring matter; paints and varnishes; putty and other mastics; inks",
    notesVi: [
      "Chương này không bao gồm: (a) Các nguyên tố hoặc hợp chất đã được xác định về mặt hóa học riêng biệt; (b) Tanat hoặc các chất dẫn xuất tananh khác của các sản phẩm thuộc các nhóm từ 29.36 đến 29.39; (c) Matit của asphalt hoặc matit có chứa bi-tum khác (nhóm 27.15).",
      "Nhóm 32.04 kể cả các hỗn hợp của muối diazoni ổn định và các chất tiếp hợp để sản xuất các thuốc nhuộm azo."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Separate chemically defined elements or compounds; (b) Tannates or other tannin derivatives of products of headings 29.36 to 29.39; (c) Mastics of asphalt or other bituminous mastics (heading 27.15).",
      "Heading 32.04 includes mixtures of stabilised diazonium salts and couplers for the production of azo dyes."
    ],
    generalVi: "Chương này bao gồm các chế phẩm sử dụng trong thuộc da và ngâm mềm da, chất màu có nguồn gốc từ thực vật, động vật hoặc khoáng và chất màu hữu cơ tổng hợp, sơn, vecni, chất gắn và mực.",
    generalEn: "This Chapter covers preparations used in tanning and bating of hides and skins, colouring matter of vegetable, animal or mineral origin and synthetic organic colouring matter, paints, varnishes, mastics and inks.",
    headings: [
      {
        code: "32.03",
        titleVi: "Chất màu có nguồn gốc thực vật hoặc động vật, đã hoặc chưa được xác định về mặt hóa học; các chế phẩm dựa trên chất màu có nguồn gốc thực vật hoặc động vật",
        titleEn: "Colouring matter of vegetable or animal origin, whether or not chemically defined; preparations based thereon",
        contentVi: "Nhóm này bao gồm chất màu từ thực vật (indigo, chlorophyll, carotenoid) hoặc động vật (carmine, sepia), và các chế phẩm từ chúng.",
        contentEn: "This heading covers colouring matter from vegetables (indigo, chlorophyll, carotenoid) or animals (carmine, sepia), and preparations based thereon."
      },
      {
        code: "32.04",
        titleVi: "Chất màu hữu cơ tổng hợp; các chế phẩm dựa trên chất màu hữu cơ tổng hợp; các sản phẩm hữu cơ tổng hợp dùng làm chất làm sáng huỳnh quang hoặc chất phát quang",
        titleEn: "Synthetic organic colouring matter; preparations based thereon; synthetic organic products used as fluorescent brightening agents or as luminophores",
        contentVi: "Nhóm này bao gồm thuốc nhuộm hữu cơ tổng hợp (thuốc nhuộm azo, thuốc nhuộm hoạt tính, thuốc nhuộm phân tán), chất làm sáng huỳnh quang.",
        contentEn: "This heading covers synthetic organic dyestuffs (azo dyes, reactive dyes, disperse dyes), fluorescent brightening agents."
      },
      {
        code: "32.08",
        titleVi: "Sơn và véc ni có thành phần cơ bản là các polyme tổng hợp hoặc các polyme tự nhiên đã biến đổi về mặt hóa học; các dung dịch như định nghĩa trong Chú giải 4 của Chương này",
        titleEn: "Paints and varnishes based on synthetic polymers or chemically modified natural polymers; solutions as defined in Note 4 to this Chapter",
        contentVi: "Nhóm này bao gồm sơn và vecni có thành phần cơ bản là polyme tổng hợp như alkyd, acrylic, vinyl, epoxy, polyurethane.",
        contentEn: "This heading covers paints and varnishes based on synthetic polymers such as alkyd, acrylic, vinyl, epoxy, polyurethane."
      },
      {
        code: "32.10",
        titleVi: "Sơn khác và các loại véc ni khác; các loại thuốc màu nước đã pha chế dùng để hoàn thiện da",
        titleEn: "Other paints and varnishes; prepared water pigments for finishing leather",
        contentVi: "Nhóm này bao gồm các loại sơn và vecni khác (sơn dầu, sơn cellulose) và thuốc màu nước dùng để hoàn thiện da.",
        contentEn: "This heading covers other paints and varnishes (oil paints, cellulose paints) and prepared water pigments for finishing leather."
      },
      {
        code: "32.15",
        titleVi: "Mực in, mực viết hoặc mực vẽ và các loại mực khác, có hoặc không cô đặc hoặc ở thể rắn",
        titleEn: "Printing ink, writing or drawing ink and other inks, whether or not concentrated or solid",
        contentVi: "Nhóm này bao gồm mực in (mực in offset, mực in flexo, mực in kỹ thuật số), mực viết, mực vẽ và các loại mực khác.",
        contentEn: "This heading covers printing inks (offset, flexographic, digital), writing inks, drawing inks and other inks."
      }
    ]
  },
  {
    chapter: 33,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Tinh dầu và các chất tựa nhựa; nước hoa, mỹ phẩm hoặc các chế phẩm dùng cho vệ sinh",
    titleEn: "Essential oils and resinoids; perfumery, cosmetic or toilet preparations",
    notesVi: [
      "Chương này không bao gồm: (a) Dầu thực vật có chứa hương liệu (các nhóm từ 15.01 đến 15.15); (b) Xà phòng và các chế phẩm khác thuộc nhóm 34.01; (c) Tinh dầu thông hoặc các tinh dầu tương tự (nhóm 38.05).",
      "Nhóm 33.02 chỉ bao gồm các chất tạo mùi trong ngành công nghiệp thực phẩm hoặc đồ uống."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Vegetable oil containing flavouring (headings 15.01 to 15.15); (b) Soaps and other products of heading 34.01; (c) Gum, wood or sulphate turpentine oils (heading 38.05).",
      "Heading 33.02 covers only odoriferous substances used in the food or drink industries."
    ],
    generalVi: "Chương này bao gồm tinh dầu, chất thơm, nước hoa, mỹ phẩm và các chế phẩm dùng cho vệ sinh như xà phòng tắm, dầu gội, kem đánh răng, chất khử mùi.",
    generalEn: "This Chapter covers essential oils, odoriferous substances, perfumes, cosmetics and toilet preparations such as bath soaps, shampoos, toothpaste, deodorants.",
    headings: [
      {
        code: "33.01",
        titleVi: "Tinh dầu, có hoặc không đã khử tecpen; các chất tựa nhựa; các chất chiết nhựa oleoresin",
        titleEn: "Essential oils, whether or not terpeneless; resinoids; extracted oleoresins",
        contentVi: "Nhóm này bao gồm tinh dầu từ thực vật (tinh dầu cam, chanh, bạc hà, hoa hồng, oải hương), chất tựa nhựa và oleoresin chiết xuất.",
        contentEn: "This heading covers essential oils from plants (orange, lemon, peppermint, rose, lavender oils), resinoids and extracted oleoresins."
      },
      {
        code: "33.03",
        titleVi: "Nước hoa và nước thơm dùng cho vệ sinh",
        titleEn: "Perfumes and toilet waters",
        contentVi: "Nhóm này bao gồm nước hoa, eau de cologne, nước thơm sau khi cạo râu.",
        contentEn: "This heading covers perfumes, eau de cologne, aftershave lotions."
      },
      {
        code: "33.04",
        titleVi: "Mỹ phẩm hoặc các chế phẩm trang điểm và các chế phẩm dưỡng da (trừ dược phẩm), kể cả các chế phẩm chống nắng hoặc bắt nắng; các chế phẩm dùng để làm móng tay hoặc móng chân",
        titleEn: "Beauty or make-up preparations and preparations for the care of the skin (other than medicaments), including sunscreen or suntan preparations; manicure or pedicure preparations",
        contentVi: "Nhóm này bao gồm son môi, phấn, kem nền, mascara, kem dưỡng da, kem chống nắng, sơn móng tay.",
        contentEn: "This heading covers lipsticks, powders, foundation creams, mascara, skin care creams, sunscreens, nail polish."
      },
      {
        code: "33.05",
        titleVi: "Chế phẩm dùng cho tóc",
        titleEn: "Preparations for use on the hair",
        contentVi: "Nhóm này bao gồm dầu gội đầu, dầu xả, thuốc nhuộm tóc, gel vuốt tóc, keo xịt tóc.",
        contentEn: "This heading covers shampoos, hair conditioners, hair dyes, hair gels, hair sprays."
      },
      {
        code: "33.06",
        titleVi: "Chế phẩm dùng cho vệ sinh răng miệng hoặc răng, kể cả bột và kem dùng làm chất kết dính răng giả; chỉ nha khoa để làm sạch kẽ răng",
        titleEn: "Preparations for oral or dental hygiene, including denture fixative pastes and powders; dental floss",
        contentVi: "Nhóm này bao gồm kem đánh răng, nước súc miệng, bột dính răng giả, chỉ nha khoa.",
        contentEn: "This heading covers toothpaste, mouthwash, denture fixative, dental floss."
      },
      {
        code: "33.07",
        titleVi: "Các chế phẩm sử dụng trước, trong hoặc sau khi cạo râu, chất khử mùi cơ thể, các chế phẩm dùng để tắm, các chế phẩm làm rụng lông và các chế phẩm dùng cho mục đích vệ sinh khác chưa được chi tiết hoặc ghi ở nơi khác",
        titleEn: "Pre-shave, shaving or after-shave preparations, personal deodorants, bath preparations, depilatories and other perfumery, cosmetic or toilet preparations, not elsewhere specified or included",
        contentVi: "Nhóm này bao gồm kem cạo râu, chất khử mùi, muối tắm, sữa tắm, kem tẩy lông.",
        contentEn: "This heading covers shaving cream, deodorants, bath salts, shower gel, depilatory creams."
      }
    ]
  },
  {
    chapter: 34,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Xà phòng, các chất hữu cơ hoạt động bề mặt, các chế phẩm dùng để giặt, rửa, các chế phẩm bôi trơn, các loại sáp nhân tạo, sáp đã chế biến, các chế phẩm dùng để đánh bóng hoặc tẩy rửa, nến và các sản phẩm tương tự, bột nhão dùng làm hình mẫu, sáp dùng trong nha khoa và các chế phẩm dùng trong nha khoa có thành phần cơ bản là thạch cao",
    titleEn: "Soap, organic surface-active agents, washing preparations, lubricating preparations, artificial waxes, prepared waxes, polishing or scouring preparations, candles and similar articles, modelling pastes, \"dental waxes\" and dental preparations with a basis of plaster",
    notesVi: [
      "Chương này không bao gồm: (a) Hỗn hợp hoặc các chế phẩm từ chất béo hoặc dầu động vật hoặc thực vật dùng để tách khuôn (nhóm 15.17); (b) Các hợp chất đã được xác định riêng biệt về mặt hóa học; (c) Dầu gội đầu, thuốc đánh răng, kem và bọt cạo râu và các chế phẩm để tắm có chứa xà phòng hoặc các chất hữu cơ hoạt động bề mặt khác (nhóm 33.05, 33.06 hoặc 33.07)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Mixtures or preparations of animal or vegetable fats or oils used as mould release preparations (heading 15.17); (b) Separate chemically defined compounds; (c) Shampoos, dentifrices, shaving creams and foams and bath preparations containing soap or other organic surface-active agents (heading 33.05, 33.06 or 33.07)."
    ],
    generalVi: "Chương này bao gồm xà phòng, chất hoạt động bề mặt, chế phẩm giặt rửa, chế phẩm bôi trơn, sáp nhân tạo, chế phẩm đánh bóng, nến và các sản phẩm tương tự.",
    generalEn: "This Chapter covers soaps, surface-active agents, washing preparations, lubricating preparations, artificial waxes, polishing preparations, candles and similar articles.",
    headings: [
      {
        code: "34.01",
        titleVi: "Xà phòng; các sản phẩm và chế phẩm hữu cơ hoạt động bề mặt để làm xà phòng, ở dạng thanh, bánh, miếng hoặc hình dạng đã được đúc khuôn",
        titleEn: "Soap; organic surface-active products and preparations for use as soap, in the form of bars, cakes, moulded pieces or shapes",
        contentVi: "Nhóm này bao gồm xà phòng dạng thanh, bánh, miếng hoặc hình dạng đã được đúc khuôn, xà phòng giặt, xà phòng tắm, xà phòng y tế.",
        contentEn: "This heading covers soap in bars, cakes, moulded pieces or shapes, laundry soap, toilet soap, medicated soap."
      },
      {
        code: "34.02",
        titleVi: "Các chất hữu cơ hoạt động bề mặt; các chế phẩm dùng để giặt, rửa; các chế phẩm phụ trợ giặt, rửa",
        titleEn: "Organic surface-active agents; washing preparations; auxiliary washing preparations",
        contentVi: "Nhóm này bao gồm chất hoạt động bề mặt anion, cation, không ion, bột giặt, nước giặt, nước rửa chén.",
        contentEn: "This heading covers anionic, cationic, non-ionic surface-active agents, washing powders, liquid detergents, dishwashing liquids."
      },
      {
        code: "34.03",
        titleVi: "Các chế phẩm bôi trơn và các chế phẩm được sử dụng cho việc xử lý dầu hoặc mỡ cho các nguyên liệu dệt, da, da lông hoặc các nguyên liệu khác",
        titleEn: "Lubricating preparations and preparations for the oil or grease treatment of textile materials, leather, furskins or other materials",
        contentVi: "Nhóm này bao gồm các chế phẩm bôi trơn, dầu bôi trơn máy khâu, dầu xử lý vải, dầu xử lý da.",
        contentEn: "This heading covers lubricating preparations, sewing machine oils, textile treatment oils, leather treatment oils."
      },
      {
        code: "34.05",
        titleVi: "Xi và kem đánh giày, dầu bóng dùng cho đồ nội thất, sàn, thân xe, kính hoặc kim loại, bột nhão và bột đánh bóng và các chế phẩm tương tự, có hoặc không ở dạng giấy, mùn cưa, bông, nỉ, vật liệu không dệt, plastic xốp hoặc cao su xốp, đã được tẩm, tráng hoặc phủ các chế phẩm như trên",
        titleEn: "Polishes and creams, for footwear, furniture, floors, coachwork, glass or metal, scouring pastes and powders and similar preparations",
        contentVi: "Nhóm này bao gồm xi đánh giày, dầu bóng đồ nội thất, dầu bóng sàn, chất đánh bóng kim loại, chất đánh bóng kính.",
        contentEn: "This heading covers shoe polishes, furniture polishes, floor polishes, metal polishes, glass polishes."
      },
      {
        code: "34.06",
        titleVi: "Nến, nến cây và các sản phẩm tương tự",
        titleEn: "Candles, tapers and the like",
        contentVi: "Nhóm này bao gồm nến thường, nến thờ, nến sinh nhật, nến trang trí, nến xua muỗi.",
        contentEn: "This heading covers ordinary candles, church candles, birthday candles, decorative candles, mosquito-repellent candles."
      }
    ]
  },
  {
    chapter: 35,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Các chất chứa albumin; các dạng tinh bột đã biến đổi; các loại keo hồ; các enzyme",
    titleEn: "Albuminoidal substances; modified starches; glues; enzymes",
    notesVi: [
      "Chương này không bao gồm: (a) Men (nhóm 21.02); (b) Albumin huyết đã được pha chế dùng cho mục đích trị liệu hoặc phòng bệnh (nhóm 30.02); (c) Các chế phẩm enzyme dùng trong quá trình xử lý sơ bộ, quá trình nhuộm, quá trình tẩy trắng hoặc các loại tương tự (nhóm 34.07); (d) Các sản phẩm enzyme đã được xử lý để tăng cường độ bền hoặc đã được phối liệu (Chương 38)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Yeasts (heading 21.02); (b) Blood albumin prepared for therapeutic or prophylactic uses (heading 30.02); (c) Enzyme preparations for pre-tanning, tanning, bleaching or similar processes (heading 34.07); (d) Enzymatic soak agents, enzyme preparations for improved fastness or otherwise compounded (Chapter 38)."
    ],
    generalVi: "Chương này bao gồm các chất chứa albumin (casein, albumin trứng, gelatin), tinh bột đã biến đổi, keo hồ và enzyme.",
    generalEn: "This Chapter covers albuminoidal substances (casein, egg albumin, gelatin), modified starches, glues and enzymes.",
    headings: [
      {
        code: "35.01",
        titleVi: "Casein, các muối caseinat và các dẫn xuất casein khác; các loại keo casein",
        titleEn: "Casein, caseinates and other casein derivatives; casein glues",
        contentVi: "Nhóm này bao gồm casein (protein chính từ sữa), các muối caseinat như natri caseinat, canxi caseinat, và keo casein.",
        contentEn: "This heading covers casein (main protein from milk), caseinates such as sodium caseinate, calcium caseinate, and casein glues."
      },
      {
        code: "35.02",
        titleVi: "Albumin (kể cả các chất cô đặc của hai hoặc nhiều protein từ váng sữa, có hàm lượng protein váng sữa trên 80% tính theo trọng lượng khô), các muối albuminat và các dẫn xuất albumin khác",
        titleEn: "Albumins (including concentrates of two or more whey proteins, containing by weight more than 80% whey proteins), albuminates and other albumin derivatives",
        contentVi: "Nhóm này bao gồm albumin trứng, albumin sữa, albumin huyết và các chất cô đặc protein váng sữa.",
        contentEn: "This heading covers egg albumin, milk albumin, blood albumin and whey protein concentrates."
      },
      {
        code: "35.03",
        titleVi: "Gelatin và các dẫn xuất gelatin; isinglass; các loại keo khác có nguồn gốc từ động vật, trừ các loại keo casein thuộc nhóm 35.01",
        titleEn: "Gelatin and gelatin derivatives; isinglass; other glues of animal origin, excluding casein glues of heading 35.01",
        contentVi: "Nhóm này bao gồm gelatin (từ xương, da động vật), isinglass (từ bong bóng cá), keo xương, keo da.",
        contentEn: "This heading covers gelatin (from bones, animal skins), isinglass (from fish bladders), bone glue, hide glue."
      },
      {
        code: "35.05",
        titleVi: "Dextrin và các loại tinh bột đã biến đổi khác; các loại keo có thành phần cơ bản là tinh bột, hoặc dextrin hoặc các loại tinh bột đã biến đổi khác",
        titleEn: "Dextrins and other modified starches; glues based on starches, or on dextrins or other modified starches",
        contentVi: "Nhóm này bao gồm dextrin, tinh bột tiền gelatin hóa, tinh bột ete hóa, tinh bột este hóa, và keo tinh bột.",
        contentEn: "This heading covers dextrins, pregelatinised starches, etherified starches, esterified starches, and starch glues."
      },
      {
        code: "35.07",
        titleVi: "Các enzyme; các enzyme đã chế biến chưa được chi tiết hoặc ghi ở nơi khác",
        titleEn: "Enzymes; prepared enzymes not elsewhere specified or included",
        contentVi: "Nhóm này bao gồm rennet, lipase, amylase, protease, cellulase và các enzyme đã chế biến sử dụng trong công nghiệp thực phẩm, dệt, giấy.",
        contentEn: "This heading covers rennet, lipase, amylase, protease, cellulase and prepared enzymes used in food, textile, paper industries."
      }
    ]
  },
  {
    chapter: 36,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Chất nổ; các sản phẩm pháo; diêm; các hợp kim tự cháy; các chế phẩm dễ cháy nào đó",
    titleEn: "Explosives; pyrotechnic products; matches; pyrophoric alloys; certain combustible preparations",
    notesVi: [
      "Chương này không bao gồm các sản phẩm riêng biệt đã được xác định về mặt hóa học trừ những loại đã mô tả trong các chú giải (a) hoặc (b) dưới đây.",
      "Theo mục đích của nhóm 36.02, \"chất nổ đã được chế biến\" có nghĩa là: (a) Propan đẩy các chất nổ; (b) Chất nổ đã được điều chế."
    ],
    notesEn: [
      "This Chapter does not cover separate chemically defined compounds other than those described in notes (a) or (b) below.",
      "For the purposes of heading 36.02, \"prepared explosives\" means: (a) Propellent powders; (b) Prepared explosives."
    ],
    generalVi: "Chương này bao gồm thuốc nổ, pháo hoa, pháo sáng, diêm, hợp kim tự cháy và các chế phẩm dễ cháy.",
    generalEn: "This Chapter covers explosives, fireworks, flares, matches, pyrophoric alloys and certain combustible preparations.",
    headings: [
      {
        code: "36.01",
        titleVi: "Thuốc nổ đẩy",
        titleEn: "Propellent powders",
        contentVi: "Nhóm này bao gồm thuốc nổ đẩy như thuốc súng đen, thuốc nổ không khói.",
        contentEn: "This heading covers propellent powders such as black powder, smokeless powder."
      },
      {
        code: "36.02",
        titleVi: "Chất nổ đã được chế biến, trừ thuốc nổ đẩy",
        titleEn: "Prepared explosives, other than propellent powders",
        contentVi: "Nhóm này bao gồm dynamite, TNT, thuốc nổ nhũ tương, thuốc nổ ANFO.",
        contentEn: "This heading covers dynamite, TNT, emulsion explosives, ANFO explosives."
      },
      {
        code: "36.04",
        titleVi: "Pháo hoa, pháo sáng, đạn chỉ thị mưa, sương mù và các loại pháo khác",
        titleEn: "Fireworks, signalling flares, rain rockets, fog signals and other pyrotechnic articles",
        contentVi: "Nhóm này bao gồm pháo hoa (pháo bông, pháo hoa dạng cuộn), pháo sáng, đạn chỉ thị sương mù.",
        contentEn: "This heading covers fireworks (firecrackers, Roman candles), signalling flares, fog signals."
      },
      {
        code: "36.05",
        titleVi: "Diêm, trừ các loại pháo thuộc nhóm 36.04",
        titleEn: "Matches, other than pyrotechnic articles of heading 36.04",
        contentVi: "Nhóm này bao gồm diêm quẹt thông thường, diêm chống gió.",
        contentEn: "This heading covers ordinary matches, windproof matches."
      },
      {
        code: "36.06",
        titleVi: "Hợp kim ferocerium và hợp kim tự cháy khác ở tất cả các dạng; các sản phẩm bằng nguyên liệu dễ cháy như đã nêu trong Chú giải 2 của Chương này",
        titleEn: "Ferro-cerium and other pyrophoric alloys in all forms; articles of combustible materials as specified in Note 2 to this Chapter",
        contentVi: "Nhóm này bao gồm đá lửa (ferro-cerium), khối chất đốt (nhiên liệu rắn dùng để nấu ăn hoặc sưởi ấm).",
        contentEn: "This heading covers flints (ferro-cerium), solid fuel blocks (for cooking or heating)."
      }
    ]
  },
  {
    chapter: 37,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Các sản phẩm ảnh và điện ảnh",
    titleEn: "Photographic or cinematographic goods",
    notesVi: [
      "Chương này không bao gồm phế liệu hoặc phế thải."
    ],
    notesEn: [
      "This Chapter does not cover waste or scrap."
    ],
    generalVi: "Chương này bao gồm các sản phẩm dùng trong nhiếp ảnh và điện ảnh như phim ảnh, giấy ảnh, hóa chất ảnh, phim đã chụp.",
    generalEn: "This Chapter covers products used in photography and cinematography such as photographic films, photographic paper, photographic chemicals, exposed films.",
    headings: [
      {
        code: "37.01",
        titleVi: "Các tấm và phim ảnh ở dạng phẳng, đã phủ lớp hoá chất nhạy sáng, chưa phơi sáng, bằng vật liệu bất kỳ trừ giấy, bìa hoặc vật liệu dệt; phim in ngay ở dạng phẳng, đã phủ lớp hoá chất nhạy sáng, chưa phơi sáng",
        titleEn: "Photographic plates and film in the flat, sensitised, unexposed, of any material other than paper, paperboard or textiles; instant print film in the flat, sensitised, unexposed",
        contentVi: "Nhóm này bao gồm tấm kính và phim ảnh phẳng dùng trong chụp X-quang, phim in ngay (instant film).",
        contentEn: "This heading covers photographic glass plates and flat films for X-ray, instant print films."
      },
      {
        code: "37.02",
        titleVi: "Phim ảnh dạng cuộn, đã phủ lớp hoá chất nhạy sáng, chưa phơi sáng, bằng vật liệu bất kỳ trừ giấy, bìa hoặc vật liệu dệt; phim in ngay dạng cuộn, đã phủ lớp hoá chất nhạy sáng, chưa phơi sáng",
        titleEn: "Photographic film in rolls, sensitised, unexposed, of any material other than paper, paperboard or textiles; instant print film in rolls, sensitised, unexposed",
        contentVi: "Nhóm này bao gồm phim cuộn màu, phim cuộn đen trắng, phim cuộn dùng cho máy ảnh 35mm.",
        contentEn: "This heading covers colour roll film, black and white roll film, 35mm camera film."
      },
      {
        code: "37.05",
        titleVi: "Các tấm và phim ảnh, đã phơi sáng và đã tráng, trừ phim điện ảnh",
        titleEn: "Photographic plates and film, exposed and developed, other than cinematograph film",
        contentVi: "Nhóm này bao gồm phim và tấm ảnh đã chụp và đã tráng, trừ phim điện ảnh.",
        contentEn: "This heading covers exposed and developed photographic plates and films, other than cinematograph films."
      },
      {
        code: "37.06",
        titleVi: "Phim điện ảnh, đã phơi sáng và đã tráng, có hoặc không có nhạc kèm theo hoặc chỉ có nhạc kèm theo",
        titleEn: "Cinematograph film, exposed and developed, whether or not incorporating sound track or consisting only of sound track",
        contentVi: "Nhóm này bao gồm phim điện ảnh đã chụp và đã tráng, có hoặc không có nhạc nền.",
        contentEn: "This heading covers exposed and developed cinematograph films, with or without sound track."
      },
      {
        code: "37.07",
        titleVi: "Các chế phẩm hóa chất dùng trong nhiếp ảnh (trừ vec ni, keo, chất kết dính và các chế phẩm tương tự); các sản phẩm chưa pha trộn dùng trong nhiếp ảnh, được đóng gói theo định lượng hoặc được đóng gói để bán lẻ, ở trạng thái sẵn sàng để sử dụng",
        titleEn: "Chemical preparations for photographic uses (other than varnishes, glues, adhesives and similar preparations); unmixed products for photographic uses, put up in measured portions or put up for retail sale in a form ready for use",
        contentVi: "Nhóm này bao gồm thuốc hiện ảnh, thuốc hãm ảnh, thuốc tẩy trắng, thuốc định hình.",
        contentEn: "This heading covers developers, fixers, bleaching solutions, fixing solutions."
      }
    ]
  },
  {
    chapter: 38,
    section: 6,
    sectionTitleVi: "SẢN PHẨM CỦA NGÀNH CÔNG NGHIỆP HÓA CHẤT HOẶC CÁC NGÀNH CÔNG NGHIỆP LIÊN QUAN",
    sectionTitleEn: "PRODUCTS OF THE CHEMICAL OR ALLIED INDUSTRIES",
    titleVi: "Các sản phẩm hóa chất khác",
    titleEn: "Miscellaneous chemical products",
    notesVi: [
      "Chương này không bao gồm: (a) Các nguyên tố hoặc hợp chất đã được xác định về mặt hóa học riêng biệt; (b) Dược phẩm (nhóm 30.03 hoặc 30.04); (c) Thuốc trừ sâu đóng gói để bán lẻ (nhóm 38.08)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Separate chemically defined elements or compounds; (b) Medicaments (heading 30.03 or 30.04); (c) Insecticides put up for retail sale (heading 38.08)."
    ],
    generalVi: "Chương này bao gồm các sản phẩm hóa chất khác chưa được chi tiết ở nơi khác, bao gồm graphit nhân tạo, than hoạt tính, thuốc trừ sâu, chất chống đông, chất phụ gia, chất đông tụ.",
    generalEn: "This Chapter covers miscellaneous chemical products not elsewhere specified, including artificial graphite, activated carbon, insecticides, antifreeze, additives, coagulants.",
    headings: [
      {
        code: "38.01",
        titleVi: "Graphit nhân tạo; graphit dạng keo hoặc dạng bán keo; các chế phẩm có thành phần cơ bản là graphit hoặc carbon khác ở dạng bột nhão, khối, tấm hoặc các dạng bán thành phẩm khác",
        titleEn: "Artificial graphite; colloidal or semi-colloidal graphite; preparations based on graphite or other carbon in the form of pastes, blocks, plates or other semi-manufactures",
        contentVi: "Nhóm này bao gồm graphit nhân tạo, graphit keo, bột nhão carbon, điện cực carbon.",
        contentEn: "This heading covers artificial graphite, colloidal graphite, carbon pastes, carbon electrodes."
      },
      {
        code: "38.02",
        titleVi: "Than hoạt tính; các sản phẩm khoáng thiên nhiên đã hoạt hóa; than đen có nguồn gốc từ động vật, kể cả than đen đã qua sử dụng",
        titleEn: "Activated carbon; activated natural mineral products; animal black, including spent animal black",
        contentVi: "Nhóm này bao gồm than hoạt tính (dùng trong lọc nước, xử lý khí thải), bentonite đã hoạt hóa, đất diatomit đã hoạt hóa.",
        contentEn: "This heading covers activated carbon (for water filtration, gas treatment), activated bentonite, activated diatomaceous earth."
      },
      {
        code: "38.08",
        titleVi: "Thuốc diệt côn trùng, thuốc diệt loài gặm nhấm, thuốc diệt nấm, thuốc diệt cỏ, thuốc chống nảy mầm, thuốc điều tiết sinh trưởng của cây, thuốc khử trùng và các sản phẩm tương tự",
        titleEn: "Insecticides, rodenticides, fungicides, herbicides, anti-sprouting products and plant-growth regulators, disinfectants and similar products",
        contentVi: "Nhóm này bao gồm thuốc diệt côn trùng, thuốc diệt chuột, thuốc diệt nấm, thuốc diệt cỏ, chất khử trùng.",
        contentEn: "This heading covers insecticides, rodenticides, fungicides, herbicides, disinfectants."
      },
      {
        code: "38.21",
        titleVi: "Các môi trường nuôi cấy đã được pha chế để phát triển hoặc duy trì các vi sinh vật hoặc tế bào thực vật, người hoặc động vật",
        titleEn: "Prepared culture media for the development or maintenance of micro-organisms or of plant, human or animal cells",
        contentVi: "Nhóm này bao gồm môi trường nuôi cấy vi sinh vật, môi trường nuôi cấy tế bào.",
        contentEn: "This heading covers culture media for micro-organisms, culture media for cells."
      },
      {
        code: "38.24",
        titleVi: "Chất gắn đã điều chế dùng cho các loại khuôn đúc hoặc lõi đúc; các sản phẩm hoá chất và các chế phẩm của ngành công nghiệp hoá chất hoặc các ngành có liên quan, chưa được chi tiết hoặc ghi ở nơi khác",
        titleEn: "Prepared binders for foundry moulds or cores; chemical products and preparations of the chemical or allied industries, not elsewhere specified or included",
        contentVi: "Nhóm này bao gồm chất gắn đúc, hỗn hợp hóa chất, các sản phẩm hóa chất khác chưa được chi tiết.",
        contentEn: "This heading covers foundry binders, chemical mixtures, other chemical products not elsewhere specified."
      }
    ]
  },
  {
    chapter: 39,
    section: 7,
    sectionTitleVi: "PLASTIC VÀ CÁC SẢN PHẨM BẰNG PLASTIC; CAO SU VÀ CÁC SẢN PHẨM BẰNG CAO SU",
    sectionTitleEn: "PLASTICS AND ARTICLES THEREOF; RUBBER AND ARTICLES THEREOF",
    titleVi: "Plastic và các sản phẩm bằng plastic",
    titleEn: "Plastics and articles thereof",
    notesVi: [
      "Trong toàn bộ Danh mục này, khái niệm \"plastic\" có nghĩa là những vật liệu thuộc các nhóm từ 39.01 đến 39.14 mà có khả năng, hoặc đã có khả năng vào một thời điểm nào đó trong quá trình polyme hoá hoặc ở giai đoạn chế biến tiếp theo, bị đúc khuôn bằng tác động của lực từ bên ngoài để tạo thành một hình dạng.",
      "Chương này không bao gồm: (a) Các chế phẩm bôi trơn thuộc nhóm 27.10 hoặc 34.03; (b) Sáp thuộc nhóm 27.12 hoặc 34.04; (c) Các hợp chất hữu cơ được xác định về mặt hoá học riêng biệt (Chương 29)."
    ],
    notesEn: [
      "Throughout the Nomenclature the expression \"plastics\" means those materials of headings 39.01 to 39.14 which are or have been capable, either at the moment of polymerisation or at some subsequent stage, of being formed under external influence into a shape.",
      "This Chapter does not cover: (a) Lubricating preparations of heading 27.10 or 34.03; (b) Waxes of heading 27.12 or 34.04; (c) Separate chemically defined organic compounds (Chapter 29)."
    ],
    generalVi: "Chương này bao gồm các loại polyme và copolyme ở dạng nguyên sinh và các sản phẩm làm từ plastic như tấm, màng, ống, đồ dùng gia đình, bao bì.",
    generalEn: "This Chapter covers polymers and copolymers in primary forms and articles made from plastics such as sheets, films, tubes, household articles, packaging.",
    headings: [
      {
        code: "39.01",
        titleVi: "Polyme từ etylen, ở dạng nguyên sinh",
        titleEn: "Polymers of ethylene, in primary forms",
        contentVi: "Nhóm này bao gồm polyethylene (PE), bao gồm LDPE, HDPE, LLDPE ở dạng nguyên sinh.",
        contentEn: "This heading covers polyethylene (PE), including LDPE, HDPE, LLDPE in primary forms."
      },
      {
        code: "39.02",
        titleVi: "Polyme từ propylen hoặc từ olefin khác, ở dạng nguyên sinh",
        titleEn: "Polymers of propylene or of other olefins, in primary forms",
        contentVi: "Nhóm này bao gồm polypropylene (PP) và các polyme olefin khác ở dạng nguyên sinh.",
        contentEn: "This heading covers polypropylene (PP) and other olefin polymers in primary forms."
      },
      {
        code: "39.04",
        titleVi: "Polyme từ vinyl clorua hoặc từ olefin halogen hóa khác, ở dạng nguyên sinh",
        titleEn: "Polymers of vinyl chloride or of other halogenated olefins, in primary forms",
        contentVi: "Nhóm này bao gồm PVC (polyvinyl chloride), PVDC (polyvinylidene chloride) và các polyme tương tự.",
        contentEn: "This heading covers PVC (polyvinyl chloride), PVDC (polyvinylidene chloride) and similar polymers."
      },
      {
        code: "39.07",
        titleVi: "Polyaxetal, polyete khác và nhựa epoxy, ở dạng nguyên sinh; polycarbonat, nhựa alkyt, polyalyl este và polyeste khác, ở dạng nguyên sinh",
        titleEn: "Polyacetals, other polyethers and epoxide resins, in primary forms; polycarbonates, alkyd resins, polyallyl esters and other polyesters, in primary forms",
        contentVi: "Nhóm này bao gồm POM (polyacetal), nhựa epoxy, polycarbonate (PC), PET (polyethylene terephthalate), PBT.",
        contentEn: "This heading covers POM (polyacetal), epoxy resins, polycarbonate (PC), PET (polyethylene terephthalate), PBT."
      },
      {
        code: "39.20",
        titleVi: "Các tấm, phiến, màng, lá và dải khác, bằng plastic, không xốp và chưa được gia cố, chưa gắn lớp mặt, chưa được bổ trợ hoặc chưa được kết hợp tương tự với các vật liệu khác",
        titleEn: "Other plates, sheets, film, foil and strip, of plastics, non-cellular and not reinforced, laminated, supported or similarly combined with other materials",
        contentVi: "Nhóm này bao gồm tấm, màng plastic không xốp từ PE, PP, PVC, PET và các loại khác.",
        contentEn: "This heading covers non-cellular plastic sheets and films of PE, PP, PVC, PET and others."
      },
      {
        code: "39.23",
        titleVi: "Các sản phẩm dùng trong vận chuyển hoặc đóng gói hàng hoá, bằng plastic; nút, nắp đậy, vòng có ren và các loại tương tự dùng làm nắp đậy bằng plastic",
        titleEn: "Articles for the conveyance or packing of goods, of plastics; stoppers, lids, caps and other closures, of plastics",
        contentVi: "Nhóm này bao gồm hộp, thùng, chai lọ, túi đóng gói, nắp chai, nút đậy bằng plastic.",
        contentEn: "This heading covers boxes, containers, bottles, packaging bags, bottle caps, closures made of plastics."
      },
      {
        code: "39.26",
        titleVi: "Các sản phẩm khác bằng plastic và các sản phẩm bằng các vật liệu khác thuộc các nhóm từ 39.01 đến 39.14",
        titleEn: "Other articles of plastics and articles of other materials of headings 39.01 to 39.14",
        contentVi: "Nhóm này bao gồm các sản phẩm plastic khác như găng tay, đồ trang trí, phụ kiện văn phòng, phụ kiện xây dựng.",
        contentEn: "This heading covers other plastic articles such as gloves, decorative articles, office accessories, construction fittings."
      }
    ]
  },
  {
    chapter: 40,
    section: 7,
    sectionTitleVi: "PLASTIC VÀ CÁC SẢN PHẨM BẰNG PLASTIC; CAO SU VÀ CÁC SẢN PHẨM BẰNG CAO SU",
    sectionTitleEn: "PLASTICS AND ARTICLES THEREOF; RUBBER AND ARTICLES THEREOF",
    titleVi: "Cao su và các sản phẩm bằng cao su",
    titleEn: "Rubber and articles thereof",
    notesVi: [
      "Trừ khi có yêu cầu khác, trong toàn bộ Danh mục này khái niệm \"cao su\" có nghĩa là các sản phẩm sau, đã hoặc chưa lưu hóa hoặc đông cứng: cao su tự nhiên, nhựa cây balata, nhựa cây cúc cao su (gutta-percha), nhựa cây guayule, nhựa chicle và các loại gôm tự nhiên tương tự, cao su tổng hợp, factice có nguồn gốc từ dầu, và các sản phẩm tái chế từ các loại sản phẩm trên.",
      "Chương này không bao gồm: (a) Các mặt hàng thuộc Phần XI (vật liệu dệt và các sản phẩm dệt); (b) Giầy, dép và các bộ phận của giầy, dép thuộc Chương 64; (c) Mũ và các đồ đội đầu khác và các bộ phận của chúng thuộc Chương 65."
    ],
    notesEn: [
      "Except where the context otherwise requires, throughout the Nomenclature the expression \"rubber\" means the following products, whether or not vulcanised or hard: natural rubber, balata, gutta-percha, guayule, chicle and similar natural gums, synthetic rubber, factice derived from oils, and such substances reclaimed.",
      "This Chapter does not cover: (a) Goods of Section XI (textiles and textile articles); (b) Footwear or parts thereof of Chapter 64; (c) Headgear or parts thereof of Chapter 65."
    ],
    generalVi: "Chương này bao gồm cao su tự nhiên và cao su tổng hợp, cao su tái sinh, và các sản phẩm làm từ cao su như lốp xe, ống, băng tải, đệm, gioăng.",
    generalEn: "This Chapter covers natural rubber and synthetic rubber, reclaimed rubber, and articles made from rubber such as tyres, tubes, conveyor belts, gaskets, seals.",
    headings: [
      {
        code: "40.01",
        titleVi: "Cao su tự nhiên, nhựa cây balata, nhựa cây cúc cao su (gutta-percha), nhựa cây guayule, nhựa chicle và các loại gôm tự nhiên tương tự, ở dạng nguyên sinh hoặc dạng tấm, lá hoặc dải",
        titleEn: "Natural rubber, balata, gutta-percha, guayule, chicle and similar natural gums, in primary forms or in plates, sheets or strip",
        contentVi: "Nhóm này bao gồm mủ cao su (latex), cao su thiên nhiên dạng tấm (RSS, SMR, SVR), crepe cao su.",
        contentEn: "This heading covers rubber latex, natural rubber sheets (RSS, SMR, SVR), crepe rubber."
      },
      {
        code: "40.02",
        titleVi: "Cao su tổng hợp và factice có nguồn gốc từ dầu, ở dạng nguyên sinh hoặc dạng tấm, lá hoặc dải; hỗn hợp của sản phẩm bất kỳ thuộc nhóm 40.01 với sản phẩm bất kỳ của nhóm này, ở dạng nguyên sinh hoặc dạng tấm, lá hoặc dải",
        titleEn: "Synthetic rubber and factice derived from oils, in primary forms or in plates, sheets or strip; mixtures of any product of heading 40.01 with any product of this heading, in primary forms or in plates, sheets or strip",
        contentVi: "Nhóm này bao gồm cao su tổng hợp như SBR, BR, EPDM, NBR, CR (neoprene).",
        contentEn: "This heading covers synthetic rubber such as SBR, BR, EPDM, NBR, CR (neoprene)."
      },
      {
        code: "40.11",
        titleVi: "Lốp hơi mới, bằng cao su",
        titleEn: "New pneumatic tyres, of rubber",
        contentVi: "Nhóm này bao gồm lốp xe ô tô, lốp xe tải, lốp xe máy, lốp xe đạp, lốp máy bay.",
        contentEn: "This heading covers car tyres, truck tyres, motorcycle tyres, bicycle tyres, aircraft tyres."
      },
      {
        code: "40.13",
        titleVi: "Săm cao su",
        titleEn: "Inner tubes, of rubber",
        contentVi: "Nhóm này bao gồm săm xe ô tô, săm xe máy, săm xe đạp.",
        contentEn: "This heading covers car inner tubes, motorcycle inner tubes, bicycle inner tubes."
      },
      {
        code: "40.16",
        titleVi: "Các sản phẩm bằng cao su lưu hóa khác trừ cao su cứng",
        titleEn: "Other articles of vulcanised rubber other than hard rubber",
        contentVi: "Nhóm này bao gồm gioăng, đệm, vòng đệm, ống cao su, băng tải, đệm chống rung, nút cao su và các sản phẩm cao su khác.",
        contentEn: "This heading covers gaskets, washers, rubber tubes, conveyor belts, vibration dampers, rubber stoppers and other rubber articles."
      },
      {
        code: "40.17",
        titleVi: "Cao su cứng (ví dụ, ebonit) ở tất cả các dạng, kể cả phế liệu và phế thải; các sản phẩm bằng cao su cứng",
        titleEn: "Hard rubber (for example, ebonite) in all forms, including waste and scrap; articles of hard rubber",
        contentVi: "Nhóm này bao gồm cao su cứng (ebonite, vulcanite) và các sản phẩm từ cao su cứng.",
        contentEn: "This heading covers hard rubber (ebonite, vulcanite) and articles of hard rubber."
      }
    ]
  },
  {
    chapter: 41,
    section: 8,
    sectionTitleVi: "DA SỐNG, DA THUỘC, DA LÔNG VÀ CÁC SẢN PHẨM TỪ DA; YÊN CƯƠNG VÀ BỘ ĐỒ YÊN CƯƠNG; HÀNG DU LỊCH, TÚI XÁCH TAY VÀ CÁC LOẠI ĐỒ CHỨA TƯƠNG TỰ; CÁC MẶT HÀNG TỪ RUỘT ĐỘNG VẬT (TRỪ RUỘT CON TẰM)",
    sectionTitleEn: "RAW HIDES AND SKINS, LEATHER, FURSKINS AND ARTICLES THEREOF; SADDLERY AND HARNESS; TRAVEL GOODS, HANDBAGS AND SIMILAR CONTAINERS; ARTICLES OF ANIMAL GUT (OTHER THAN SILK-WORM GUT)",
    titleVi: "Da sống (trừ da lông) và da thuộc",
    titleEn: "Raw hides and skins (other than furskins) and leather",
    notesVi: [
      "Chương này không bao gồm: (a) Da vụn hoặc phế liệu tương tự từ da sống (nhóm 05.11); (b) Da chim hoặc các phần da chim, còn lông vũ hoặc lông tơ, thuộc nhóm 05.05 hoặc nhóm 67.01; (c) Da sống, còn lông, đã thuộc hoặc chuội (Chương 43); tuy nhiên, những sản phẩm sau vẫn được xếp vào Chương 41, các loại da sống còn lông, của động vật họ trâu bò (kể cả trâu), động vật họ ngựa, cừu hoặc cừu non, dê hoặc dê non, lợn, sơn dương, linh dương gazen, lạc đà, tuần lộc, nai, hoẵng hoặc chó.",
      "(A) Các nhóm từ 41.04 đến 41.06 không bao gồm da sống đã qua quy trình thuộc (kể cả chuẩn bị thuộc da) có thể lộn được (các nhóm từ 41.01 đến 41.03). (B) Theo mục đích của các nhóm từ 41.04 đến 41.06, thuật ngữ \"da mộc\" kể cả da sống đã được thuộc lại, tạo màu hoặc được thấm nhũ tương dầu trước khi làm khô.",
      "Trong toàn bộ Danh mục khái niệm \"da tổng hợp\" chỉ các chất liệu quy định trong nhóm 41.15."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Parings or similar waste, of raw hides or skins (heading 05.11); (b) Birdskins or parts of birdskins, with their feathers or down, of heading 05.05 or 67.01; or (c) Hides or skins, with the hair or wool on, raw, tanned or dressed (Chapter 43); the following are, however, to be classified in Chapter 41, namely, raw hides and skins with the hair or wool on, of bovine animals, equine animals, sheep or lambs, goats or kids, swine, chamois, gazelle, camels, reindeer, elk, deer, roebucks or dogs.",
      "(A) Headings 41.04 to 41.06 do not cover hides and skins which have undergone a tanning (including pre-tanning) process which is reversible (headings 41.01 to 41.03). (B) For the purposes of headings 41.04 to 41.06, the term \"crust\" includes hides and skins that have been retanned, coloured or fat-liquored prior to drying.",
      "Throughout the Nomenclature the expression \"composition leather\" means only substances of the kind referred to in heading 41.15."
    ],
    generalVi: "Chương này bao gồm: (I) Da sống và da (trừ da của chim còn lông vũ hoặc lông tơ và da lông) (các nhóm từ 41.01 đến 41.03). (II) Da sống đã được thuộc hoặc làm cứng nhưng không xử lý kỹ hơn (các nhóm từ 41.04 đến 41.06). Việc thuộc mang lại khả năng chống lại sự thối rữa cho da sống, và tăng khả năng không thấm nước. (III) Da thuộc được gia công thêm sau khi thuộc hoặc làm mộc (các nhóm 41.07, 41.12 và 41.13). (IV) Da thuộc dầu; da láng và da láng bằng màng mỏng được tạo trước; da nhũ kim loại (nhóm 41.14). (V) Da thuộc tổng hợp với thành phần cơ bản là da thuộc hoặc sợi da thuộc (nhóm 41.15). (VI) Da vụn và phế liệu khác từ da thuộc hoặc da thuộc tổng hợp (nhóm 41.15).",
    generalEn: "This Chapter covers: (I) Raw hides and skins (other than of birds with feathers or down and furskins) (headings 41.01 to 41.03). (II) Hides and skins which have been tanned or crusted but not further prepared (headings 41.04 to 41.06). Tanning renders the hides and skins resistant to decay, and increases their impermeability to water. (III) Leather further prepared after tanning or crusting (headings 41.07, 41.12 and 41.13). (IV) Chamois leather; patent leather and patent laminated leather; metallised leather (heading 41.14). (V) Composition (bonded) leather with a basis of leather or leather fibre (heading 41.15). (VI) Parings and other waste of leather or of composition leather (heading 41.15).",
    headings: [
      {
        code: "41.01",
        titleVi: "Da sống của động vật họ trâu bò (kể cả trâu) hoặc động vật họ ngựa (tươi, hoặc muối, khô, ngâm vôi, axit hoá hoặc được bảo quản cách khác, nhưng chưa thuộc, chưa làm thành da giấy hoặc gia công thêm), đã hoặc chưa khử lông hoặc lạng xẻ",
        titleEn: "Raw hides and skins of bovine (including buffalo) or equine animals (fresh, or salted, dried, limed, pickled or otherwise preserved, but not tanned, parchment-dressed or further prepared), whether or not dehaired or split",
        contentVi: "Nhóm này bao gồm da sống (đã hoặc chưa loại bỏ lông) của động vật họ trâu bò (kể cả trâu) hoặc của động vật họ ngựa (ngựa, la, lừa, ngựa vằn...). Các da sống này có thể tươi hoặc được bảo quản tạm thời bằng ướp muối, làm khô, ngâm vôi, ngâm axit hoặc các phương pháp khác.",
        contentEn: "This heading covers raw hides and skins (whether or not dehaired) of bovine animals (including buffalo) or of equine animals (horses, mules, asses, zebras, etc.). These hides and skins may be fresh or temporarily preserved by salting, drying, liming, pickling or other methods."
      },
      {
        code: "41.02",
        titleVi: "Da sống của cừu hoặc cừu non (tươi, hoặc muối, khô, ngâm vôi, axit hoá hoặc bảo quản cách khác, nhưng chưa thuộc, chưa làm thành da giấy hoặc gia công thêm), có hoặc không có lông, đã hoặc chưa lạng xẻ, trừ loại đã loại trừ theo Chú giải 1(c) của Chương này",
        titleEn: "Raw skins of sheep or lambs (fresh, or salted, dried, limed, pickled or otherwise preserved, but not tanned, parchment-dressed or further prepared), whether or not with wool on or split, other than those excluded by Note 1 (c) to this Chapter",
        contentVi: "Nhóm này bao gồm da sống của cừu hoặc cừu non, có hoặc không có lông, trừ các loại da sống còn lông của cừu non Astrakhan, Broadtail, Caracul, Ba Tư hoặc các loại cừu non tương tự, và cừu non Ấn Độ, Trung Quốc, Mông Cổ hoặc Tây Tạng.",
        contentEn: "This heading covers raw skins of sheep or lambs, with or without wool on, other than raw skins with the hair or wool on of Astrakhan, Broadtail, Caracul, Persian or similar lambs, and Indian, Chinese, Mongolian or Tibetan lambs."
      },
      {
        code: "41.03",
        titleVi: "Da sống khác (tươi, hoặc muối, khô, ngâm vôi, axit hoá hoặc bảo quản cách khác, nhưng chưa thuộc, chưa làm thành da giấy hoặc gia công thêm), có hoặc không có lông, đã hoặc chưa lạng xẻ, trừ loại đã loại trừ theo Chú giải 1 (b) hoặc 1(c) của Chương này",
        titleEn: "Other raw hides and skins (fresh, or salted, dried, limed, pickled or otherwise preserved, but not tanned, parchment-dressed or further prepared), whether or not dehaired or split, other than those excluded by Note 1 (b) or 1 (c) to this Chapter",
        contentVi: "Nhóm này bao gồm da sống của dê hoặc dê non, lợn, bò sát và các loại động vật khác, trừ những loại đã được loại trừ theo Chú giải 1 (b) hoặc 1(c) của Chương này.",
        contentEn: "This heading covers raw hides and skins of goats or kids, swine, reptiles and other animals, other than those excluded by Note 1 (b) or 1 (c) to this Chapter."
      }
    ]
  },
  {
    chapter: 42,
    section: 8,
    sectionTitleVi: "DA SỐNG, DA THUỘC, DA LÔNG VÀ CÁC SẢN PHẨM TỪ DA; YÊN CƯƠNG VÀ BỘ ĐỒ YÊN CƯƠNG; HÀNG DU LỊCH, TÚI XÁCH TAY VÀ CÁC LOẠI ĐỒ CHỨA TƯƠNG TỰ; CÁC MẶT HÀNG TỪ RUỘT ĐỘNG VẬT (TRỪ RUỘT CON TẰM)",
    sectionTitleEn: "RAW HIDES AND SKINS, LEATHER, FURSKINS AND ARTICLES THEREOF; SADDLERY AND HARNESS; TRAVEL GOODS, HANDBAGS AND SIMILAR CONTAINERS; ARTICLES OF ANIMAL GUT (OTHER THAN SILK-WORM GUT)",
    titleVi: "Các sản phẩm bằng da thuộc; yên cương và bộ yên cương; các mặt hàng du lịch, túi xách và các loại đồ chứa tương tự; các sản phẩm làm từ ruột động vật (trừ ruột con tằm)",
    titleEn: "Articles of leather; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silk-worm gut)",
    notesVi: [
      "Theo mục đích của chương này, thuật ngữ \"da thuộc\" gồm cả da thuộc dầu (bao gồm cả da thuộc dầu kết hợp), da láng, da láng bằng màng mỏng được tạo trước và da nhũ kim loại.",
      "Chương này không bao gồm: Chỉ catgut vô trùng dùng trong phẫu thuật; Hàng may mặc hoặc đồ phụ trợ quần áo được lót bằng da lông hoặc da lông nhân tạo; Các loại lưới hoàn chỉnh; Các mặt hàng thuộc Chương 64, 65, 66, 71, 92, 94, 95, 96."
    ],
    notesEn: [
      "For the purposes of this Chapter, the term \"leather\" includes chamois (including combination chamois) leather, patent leather, patent laminated leather and metallised leather.",
      "This Chapter does not cover: Sterile surgical catgut; Articles of apparel or clothing accessories lined with furskin or artificial fur; Made up articles of netting; Articles of Chapter 64, 65, 66, 71, 92, 94, 95, 96."
    ],
    generalVi: "Chương này chủ yếu bao gồm các mặt hàng bằng da thuộc hoặc da thuộc tổng hợp; tuy nhiên, các nhóm 42.01 và 42.02 cũng bao gồm một số mặt hàng có đặc tính của ngành da nhưng làm từ các chất liệu khác. Ngoài ra, Chương này bao gồm một số mặt hàng làm bằng ruột động vật, màng ruột già, bong bóng hoặc gân.",
    generalEn: "This Chapter principally covers articles of leather or composition leather; however, headings 42.01 and 42.02 also include certain articles characteristically of the leather trade but made from other materials. It further covers certain articles of gut, goldbeater's skin, bladders or tendons.",
    headings: [
      {
        code: "42.01",
        titleVi: "Yên cương và bộ yên cương dùng cho các loại động vật (kể cả dây kéo, dây dắt, miếng đệm đầu gối, đai hoặc rọ bịt mõm, vải lót yên, túi yên, áo chó và các loại tương tự), làm bằng vật liệu bất kỳ",
        titleEn: "Saddlery and harness for any animal (including traces, leads, knee pads, muzzles, saddle cloths, saddle bags, dog coats and the like), of any material",
        contentVi: "Nhóm này bao gồm đồ dùng cho tất cả các loại động vật, bằng da thuộc, da thuộc tổng hợp, da lông, các mặt hàng dệt hoặc các chất liệu khác. Bao gồm yên cương và bộ yên cương dùng cho yên ngựa, miếng đệm đầu gối, đai bịt mõm cho động vật, đai cổ, dây dắt chó và đồ bên ngoài cho chó hoặc mèo.",
        contentEn: "This heading covers articles for all kinds of animals, of leather, composition leather, furskin, textile materials or other materials. It includes saddlery and harness for riding or draught animals, knee pads, muzzles for animals, collars, leads and outer garments for dogs or cats."
      },
      {
        code: "42.02",
        titleVi: "Hòm, vali, xắc đựng đồ nữ trang, cặp tài liệu, cặp sách, túi, cặp đeo vai cho học sinh, bao kính, bao ống nhòm, hộp camera, hộp nhạc cụ, bao súng, bao súng ngắn và các loại đồ chứa tương tự",
        titleEn: "Trunks, suit-cases, vanity-cases, executive-cases, brief-cases, school satchels, spectacle cases, binocular cases, camera cases, musical instrument cases, gun cases, holsters and similar containers",
        contentVi: "Nhóm này chỉ bao gồm các mặt hàng đã được nêu tên cụ thể và các loại đồ chứa tương tự. Các loại đồ chứa này có thể thuộc loại cứng hoặc có lớp nền cứng, hoặc mềm và không có lớp nền. Bao gồm túi du lịch, túi đựng đồ ăn hoặc đồ uống có phủ lớp cách, túi đựng đồ vệ sinh cá nhân, ba lô, túi xách tay, túi đi chợ, ví, túi thể thao, hộp đựng đồ trang sức.",
        contentEn: "This heading covers only the articles specifically named therein and similar containers. These containers may be rigid or with a rigid foundation, or soft and without foundation. Includes travel goods, insulated food or beverages bags, toilet bags, rucksacks, handbags, shopping bags, wallets, sports bags, jewellery boxes."
      },
      {
        code: "42.03",
        titleVi: "Hàng may mặc và đồ phụ trợ quần áo, bằng da thuộc hoặc da thuộc tổng hợp",
        titleEn: "Articles of apparel and clothing accessories, of leather or of composition leather",
        contentVi: "Nhóm này bao gồm các loại găng tay, găng hở ngón và găng bao tay (kể cả các loại găng dùng trong thể thao và bảo hộ), tạp dề và các loại quần áo bảo hộ khác, thắt lưng, dây đeo quần, dây đeo súng và đai da cổ tay, nhưng trừ dây đeo đồng hồ.",
        contentEn: "This heading covers gloves, mittens and mitts (including those for sport or for protection), aprons and other protective clothing, braces, belts, bandoliers and wrist straps, but excluding watch straps."
      }
    ]
  },
  {
    chapter: 43,
    section: 8,
    sectionTitleVi: "DA SỐNG, DA THUỘC, DA LÔNG VÀ CÁC SẢN PHẨM TỪ DA; YÊN CƯƠNG VÀ BỘ ĐỒ YÊN CƯƠNG; HÀNG DU LỊCH, TÚI XÁCH TAY VÀ CÁC LOẠI ĐỒ CHỨA TƯƠNG TỰ; CÁC MẶT HÀNG TỪ RUỘT ĐỘNG VẬT (TRỪ RUỘT CON TẰM)",
    sectionTitleEn: "RAW HIDES AND SKINS, LEATHER, FURSKINS AND ARTICLES THEREOF; SADDLERY AND HARNESS; TRAVEL GOODS, HANDBAGS AND SIMILAR CONTAINERS; ARTICLES OF ANIMAL GUT (OTHER THAN SILK-WORM GUT)",
    titleVi: "Da lông và da lông nhân tạo; các sản phẩm làm từ da lông và da lông nhân tạo",
    titleEn: "Furskins and artificial fur; manufactures thereof",
    notesVi: [
      "Trong toàn bộ Danh mục những nội dung liên quan đến \"da lông\", trừ da lông sống thuộc nhóm 43.01, áp dụng cho da sống còn lông của các loài động vật, đã thuộc hoặc chuội.",
      "Chương này không bao gồm: (a) Da chim hoặc các phần của da chim, có lông vũ hoặc lông tơ (nhóm 05.05 hay 67.01); (b) Da sống, còn lông, thuộc Chương 41; (c) Găng tay bằng da thuộc và da lông (nhóm 42.03); (d) Các vật phẩm thuộc Chương 64, 65, 95.",
      "Nhóm 43.03 kể cả da lông và các phần da lông, được ghép cùng với vật liệu khác, và da lông được may lại với nhau tạo thành quần áo hay các chi tiết quần áo.",
      "Trong toàn bộ Danh mục cụm từ \"da lông nhân tạo\" là loại giả da lông gồm lông cừu, lông động vật hay các loại sợi khác được gắn hoặc may lên da thuộc, lên vải dệt hoặc lên các loại vật liệu khác."
    ],
    notesEn: [
      "Throughout the Nomenclature references to \"furskins\", other than to raw furskins of heading 43.01, apply to hides or skins of all animals which have been tanned or dressed with the hair or wool on.",
      "This Chapter does not cover: (a) Birdskins or parts of birdskins, with their feathers or down (heading 05.05 or 67.01); (b) Raw hides or skins, with the hair or wool on, of Chapter 41; (c) Gloves of leather and furskin (heading 42.03); (d) Articles of Chapter 64, 65, 95.",
      "Heading 43.03 includes furskins and parts thereof, assembled with the addition of other materials, and furskins sewn together in the form of garments or parts or accessories of garments.",
      "Throughout the Nomenclature the expression \"artificial fur\" means any imitation of furskin consisting of wool, hair or other fibres gummed or sewn on to leather, woven fabric or other materials."
    ],
    generalVi: "Chương này bao gồm: (1) Da lông sống trừ da sống thuộc nhóm 41.01, 41.02 hoặc 41.03. (2) Da sống đã thuộc hoặc chuội còn lông, chưa ghép nối hoặc đã ghép nối. (3) Quần áo, đồ phụ trợ quần áo và các mặt hàng sản xuất khác bằng da lông. (4) Da lông nhân tạo và các sản phẩm bằng da lông nhân tạo.",
    generalEn: "This Chapter covers: (1) Raw furskins other than raw hides and skins of heading 41.01, 41.02 or 41.03. (2) Hides and skins tanned or dressed with the hair or wool on, unassembled or assembled. (3) Apparel, clothing accessories and other manufactured articles of furskin. (4) Artificial fur and articles thereof.",
    headings: [
      {
        code: "43.01",
        titleVi: "Da lông sống (kể cả đầu, đuôi, bàn chân và các mẩu hoặc các mảnh cắt khác, thích hợp cho việc thuộc da lông), trừ da sống trong nhóm 41.01, 41.02 hoặc 41.03",
        titleEn: "Raw furskins (including heads, tails, paws and other pieces or cuttings, suitable for furriers' use), other than raw hides and skins of heading 41.01, 41.02 or 41.03",
        contentVi: "Nhóm này bao gồm da sống (chưa thuộc hoặc chuội) còn lông, của tất cả động vật trừ động vật họ trâu bò, động vật họ ngựa, cừu và cừu non (trừ một số loại đặc biệt), dê và dê non, lợn, sơn dương, lạc đà, tuần lộc, hoẵng và chó.",
        contentEn: "This heading covers raw (i.e., not tanned or dressed) skins with the hair or wool on, of all animals except bovine animals, equine animals, sheep and lambs (other than certain special types), goats and kids, swine, chamois, camels, reindeer, roebucks and dogs."
      },
      {
        code: "43.02",
        titleVi: "Da lông đã thuộc hoặc chuội (kể cả đầu, đuôi, bàn chân và các mẩu hoặc các mảnh cắt khác), đã hoặc chưa ghép nối (không có thêm các vật liệu phụ trợ khác) trừ loại thuộc nhóm 43.03",
        titleEn: "Tanned or dressed furskins (including heads, tails, paws and other pieces or cuttings), unassembled, or assembled (without the addition of other materials) other than those of heading 43.03",
        contentVi: "Nhóm này bao gồm: (1) Da chưa được ghép nối đã thuộc hoặc chuội còn lông với điều kiện là chúng không bị cắt thành hình dạng cho mục đích sử dụng đặc biệt. (2) Các vật phẩm ghép nối bằng da lông đã thuộc hoặc chuội, được khâu với nhau mà không cần thêm vào các vật liệu khác thường ở dạng hình chữ nhật, hình thang hoặc hình chữ thập.",
        contentEn: "This heading covers: (1) Unassembled hides or skins tanned or dressed with the hair or wool on provided that they have not been cut to shape for specific uses. (2) Assemblies of tanned or dressed furskins sewn together without the addition of other materials usually in rectangles, trapeziums or crosses."
      },
      {
        code: "43.03",
        titleVi: "Hàng may mặc, đồ phụ trợ quần áo và các sản phẩm khác bằng da lông",
        titleEn: "Articles of apparel, clothing accessories and other articles of furskin",
        contentVi: "Nhóm này bao gồm các sản phẩm da lông đã hoàn thiện như áo choàng, áo khoác, mũ, găng tay, khăn choàng cổ, phụ kiện trang trí quần áo và các mặt hàng khác bằng da lông.",
        contentEn: "This heading covers finished furskin products such as coats, jackets, hats, gloves, scarves, clothing trimmings and other articles of furskin."
      },
      {
        code: "43.04",
        titleVi: "Da lông nhân tạo và các sản phẩm làm từ da lông nhân tạo",
        titleEn: "Artificial fur and articles thereof",
        contentVi: "Nhóm này bao gồm da lông nhân tạo và các sản phẩm làm từ da lông nhân tạo. Da lông nhân tạo là loại giả da lông gồm lông cừu, lông động vật hay các loại sợi khác được gắn hoặc may lên da thuộc, lên vải dệt hoặc lên các loại vật liệu khác.",
        contentEn: "This heading covers artificial fur and articles made from artificial fur. Artificial fur is any imitation of furskin consisting of wool, hair or other fibres gummed or sewn on to leather, woven fabric or other materials."
      }
    ]
  },
  {
    chapter: 44,
    section: 9,
    sectionTitleVi: "GỖ VÀ CÁC MẶT HÀNG BẰNG GỖ; THAN TỪ GỖ; LIE VÀ CÁC SẢN PHẨM BẰNG LIE; CÁC SẢN PHẨM TỪ RƠM, CỎ GIẤY HOẶC CÁC VẬT LIỆU TẾT BỆN KHÁC; CÁC SẢN PHẨM BẰNG LIỄU GAI VÀ SONG MÂY",
    sectionTitleEn: "WOOD AND ARTICLES OF WOOD; WOOD CHARCOAL; CORK AND ARTICLES OF CORK; MANUFACTURES OF STRAW, OF ESPARTO OR OF OTHER PLAITING MATERIALS; BASKETWARE AND WICKERWORK",
    titleVi: "Gỗ và các mặt hàng bằng gỗ; than từ gỗ",
    titleEn: "Wood and articles of wood; wood charcoal",
    notesVi: [
      "Chương này không bao gồm: (a) Gỗ dùng chủ yếu trong công nghệ làm nước hoa, dược phẩm, hoặc thuốc diệt côn trùng (nhóm 12.11); (b) Tre hoặc các vật liệu khác có tính chất như gỗ loại chủ yếu dùng để tết bện (nhóm 14.01); (c) Than hoạt tính (nhóm 38.02); và nhiều mặt hàng khác thuộc các Chương 42, 46, 64, 66, 68, 71, Phần XVI, XVII, XVIII, 93, 94, 95, 96, 97.",
      "Trong Chương này, khái niệm \"gỗ đã được làm tăng độ rắn\" chỉ loại gỗ đã qua xử lý về mặt hoá học hoặc lý học và do đó đã tăng tỷ trọng hoặc độ cứng cũng như tăng sức bền cơ học.",
      "Các nhóm từ 44.14 đến 44.21 áp dụng đối với các sản phẩm có mô tả tương ứng từ các loại ván dăm hoặc ván tương tự, ván sợi ép, ván ghép hoặc gỗ đã được làm tăng độ rắn.",
      "Theo Chú giải 1 và trừ khi có yêu cầu khác, khái niệm \"gỗ\" trong một nhóm của Chương này cũng áp dụng đối với các loại tre và các vật liệu khác có tính chất gỗ."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Wood used primarily in perfumery, in pharmacy, or for insecticidal purposes (heading 12.11); (b) Bamboos or other materials of a woody nature used primarily for plaiting (heading 14.01); (c) Activated charcoal (heading 38.02); and many other articles in Chapters 42, 46, 64, 66, 68, 71, Sections XVI, XVII, XVIII, 93, 94, 95, 96, 97.",
      "In this Chapter, the expression \"densified wood\" means wood which has been subjected to chemical or physical treatment and which has thereby acquired increased density or hardness together with improved mechanical strength.",
      "Headings 44.14 to 44.21 apply to articles of particle board or similar board, fibreboard, laminated wood or densified wood as they apply to such articles of wood.",
      "Subject to Note 1 and except where the context otherwise requires, a reference to \"wood\" in a heading of this Chapter also applies to bamboos and other materials of a woody nature."
    ],
    generalVi: "Chương này bao gồm gỗ chưa chế biến, các bán thành phẩm từ gỗ và các mặt hàng bằng gỗ nói chung. Các sản phẩm có thể được nhóm lại như sau: (1) Gỗ cây dạng thô, gỗ nhiên liệu, phế liệu gỗ, mùn cưa; (2) Gỗ đã được cưa, bào, lạng, tách lớp; (3) Ván dăm, ván sợi, gỗ ghép và gỗ đã được làm tăng độ rắn; (4) Các mặt hàng bằng gỗ.",
    generalEn: "This Chapter covers raw wood, semi-finished wood products and articles of wood in general. Products can be grouped as: (1) Rough wood, fuel wood, wood waste, sawdust; (2) Wood sawn, planed, sliced, peeled; (3) Particle board, fibreboard, laminated wood and densified wood; (4) Articles of wood.",
    headings: [
      {
        code: "44.01",
        titleVi: "Gỗ nhiên liệu, dạng khúc, thanh nhỏ, cành, bó hoặc các dạng tương tự; vỏ bào hoặc dăm gỗ; mùn cưa và phế liệu gỗ, đã hoặc chưa đóng thành khối, bánh, viên hoặc các dạng tương tự",
        titleEn: "Fuel wood, in logs, in billets, in twigs, in faggots or in similar forms; wood in chips or particles; sawdust and wood waste and scrap, whether or not agglomerated in logs, briquettes, pellets or similar forms",
        contentVi: "Nhóm này bao gồm: (A) Gỗ nhiên liệu, thường ở dạng các khúc ngắn, gỗ chẻ hoặc thanh củi, cành con, bó, thân dây leo, gốc và rễ cây. (B) Gỗ dưới dạng vỏ bào hay dăm gỗ dùng để sản xuất bột giấy xenlulo hoặc ván sợi, ván dăm. (C) Mùn cưa. (D) Phế liệu và mảnh vụn gỗ.",
        contentEn: "This heading covers: (A) Fuel wood, generally in the form of short pieces of logs, split logs or billets, twigs, faggots, vine stems, tree stumps and roots. (B) Wood in chips or particles used for producing cellulose pulp or fibreboard, particle board. (C) Sawdust. (D) Wood waste and scrap."
      },
      {
        code: "44.02",
        titleVi: "Than củi (kể cả than đốt từ vỏ quả hoặc hạt), đã hoặc chưa đóng thành khối",
        titleEn: "Wood charcoal (including shell or nut charcoal), whether or not agglomerated",
        contentVi: "Than củi thu được khi gỗ bị carbon hoá và không có tiếp xúc với không khí. Nó được phân loại vào nhóm này dù ở dạng khối, que hay ở dạng hạt hay bột, hoặc được đóng thành khối cùng với nhựa đường hay các chất liệu khác. Các sản phẩm tương tự từ vỏ dừa hay các loại vỏ khác cũng được phân loại vào nhóm này.",
        contentEn: "Wood charcoal is obtained when wood is carbonised without contact with air. It is classified in this heading whether in blocks, sticks, granules or powder, or agglomerated with tar or other materials. Similar products obtained from coconut shells or other shells are also classified in this heading."
      },
      {
        code: "44.03",
        titleVi: "Gỗ cây dạng thô, đã hoặc chưa bóc vỏ hoặc dác gỗ hoặc đẽo vuông thô",
        titleEn: "Wood in the rough, whether or not stripped of bark or sapwood, or roughly squared",
        contentVi: "Nhóm này bao gồm gỗ cây dạng thô, tức là gỗ không có bất kỳ dạng chế biến nào ngoài những chế biến chỉ ra trong tên nhóm. Gỗ có thể đã bóc vỏ hoặc dác gỗ hoặc đẽo vuông thô để thuận tiện cho việc vận chuyển.",
        contentEn: "This heading covers wood in the rough, i.e., wood which has not received any treatment other than those indicated in the heading text. The wood may be stripped of bark or sapwood or roughly squared to facilitate transport."
      }
    ]
  },
  {
    chapter: 45,
    section: 9,
    sectionTitleVi: "GỖ VÀ CÁC MẶT HÀNG BẰNG GỖ; THAN TỪ GỖ; LIE VÀ CÁC SẢN PHẨM BẰNG LIE; CÁC SẢN PHẨM TỪ RƠM, CỎ GIẤY HOẶC CÁC VẬT LIỆU TẾT BỆN KHÁC; CÁC SẢN PHẨM BẰNG LIỄU GAI VÀ SONG MÂY",
    sectionTitleEn: "WOOD AND ARTICLES OF WOOD; WOOD CHARCOAL; CORK AND ARTICLES OF CORK; MANUFACTURES OF STRAW, OF ESPARTO OR OF OTHER PLAITING MATERIALS; BASKETWARE AND WICKERWORK",
    titleVi: "Lie và các sản phẩm bằng lie",
    titleEn: "Cork and articles of cork",
    notesVi: [
      "Chương này không bao gồm: (a) Giày dép hoặc các bộ phận của giày dép thuộc Chương 64; (b) Mũ và các vật đội đầu khác hay các bộ phận của chúng thuộc Chương 65; hoặc (c) Các mặt hàng thuộc Chương 95 (ví dụ, đồ chơi, thiết bị trò chơi, dụng cụ, thiết bị thể thao)."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Footwear or parts of footwear of Chapter 64; (b) Headgear or parts of headgear of Chapter 65; or (c) Articles of Chapter 95 (for example, toys, games, sports requisites)."
    ],
    generalVi: "Lie thu được hầu như chỉ từ vỏ ngoài của cây sồi-lie (Quercus suber), là loại mọc ở Nam Âu và Bắc Phi. Lie nhẹ, đàn hồi, có thể nén được, mềm, không thấm nước, không mục rữa, và là chất kém dẫn nhiệt và kém dẫn truyền âm. Chương này bao gồm lie tự nhiên và lie kết dính ở mọi dạng (kể cả các mặt hàng từ lie và lie kết dính).",
    generalEn: "Cork is obtained almost exclusively from the outer bark of the cork-oak (Quercus suber) which is grown in Southern Europe and North Africa. Cork is light, elastic, compressible, flexible, waterproof, rotproof, and a bad conductor of heat and sound. This Chapter covers natural and agglomerated cork in all forms (including articles of cork and agglomerated cork).",
    headings: [
      {
        code: "45.01",
        titleVi: "Lie tự nhiên, thô hoặc đã sơ chế; lie phế liệu; lie đã ép, nghiền thành hạt hoặc thành bột",
        titleEn: "Natural cork, raw or simply prepared; waste cork; crushed, granulated or ground cork",
        contentVi: "Lie thô có trong vỏ bóc hình vòng cung khi được bóc từ cây lie. Lie tự nhiên, sơ chế, gồm lie được bỏ bề mặt hoặc làm sạch cách khác. Phế liệu của lie tự nhiên hoặc lie kết dính thường được dùng trong sản xuất lie đã ép, nghiền thành hạt hoặc thành bột.",
        contentEn: "Raw cork is in the form of curved bark strips when stripped from the tree. Simply prepared natural cork includes cork from which the surface has been removed or otherwise cleaned. Waste cork of natural or agglomerated cork is usually used in manufacturing crushed, granulated or ground cork."
      },
      {
        code: "45.02",
        titleVi: "Lie tự nhiên, đã bóc vỏ hoặc đã đẽo thô thành hình vuông hoặc dạng khối, tấm, phiến hình chữ nhật (kể cả hình vuông), hoặc dải",
        titleEn: "Natural cork, debacked or roughly squared, or in blocks, plates, sheets or strip (including sharp-edged blanks for corks or stoppers)",
        contentVi: "Nhóm này bao gồm vỏ bóc của lie tự nhiên với toàn bộ vỏ ngoài được cưa hoặc được lấy ra, hoặc với các bề mặt bên ngoài và bên trong đã cưa hoặc cắt để tạo thành các cạnh song song. Nhóm này cũng bao gồm các sản phẩm đã được gia công thêm thành khối, tấm, phiến.",
        contentEn: "This heading covers natural cork bark strips with the outer bark sawn or otherwise removed, or with outer and inner surfaces sawn or cut to form parallel edges. It also includes products further worked into blocks, plates, sheets."
      },
      {
        code: "45.03",
        titleVi: "Các sản phẩm bằng lie tự nhiên",
        titleEn: "Articles of natural cork",
        contentVi: "Nhóm này bao gồm: (1) Nút và nắp đậy các loại, bằng lie tự nhiên, kể cả phôi có các cạnh đã cắt gọt tròn. (2) Các đĩa, miếng đệm và vòng đệm bằng lie tự nhiên, dùng để lót nút lie. (3) Các khối, phiến, tấm và dải bằng lie tự nhiên, được cắt thành hình trừ hình chữ nhật. (4) Cán cầm tay các loại, vòng đệm và miếng đệm.",
        contentEn: "This heading covers: (1) Corks and stoppers of all kinds, of natural cork, including blanks with rounded edges. (2) Discs, washers and wafers of natural cork, for lining crown corks. (3) Blocks, plates, sheets and strip of natural cork, cut to shape other than rectangular. (4) Handle grips of various kinds, washers and gaskets."
      },
      {
        code: "45.04",
        titleVi: "Lie kết dính (có hoặc không có chất gắn) và các sản phẩm bằng lie kết dính",
        titleEn: "Agglomerated cork (with or without a binding substance) and articles of agglomerated cork",
        contentVi: "Lie kết dính được sản xuất bằng cách kết dính lie đã ép, nghiền thành hạt hoặc thành bột thường dưới nhiệt độ và áp suất: (1) Với một chất kết dính được thêm vào (ví dụ, cao su không lưu hoá, keo, plastic); hoặc (2) Không có chất dính được thêm vào ở nhiệt độ khoảng 300°C.",
        contentEn: "Agglomerated cork is manufactured by agglomerating crushed, granulated or ground cork usually under heat and pressure: (1) With a binding substance added (e.g., unvulcanised rubber, glue, plastics); or (2) Without a binding substance at about 300°C."
      }
    ]
  },
  {
    chapter: 46,
    section: 9,
    sectionTitleVi: "GỖ VÀ CÁC MẶT HÀNG BẰNG GỖ; THAN TỪ GỖ; LIE VÀ CÁC SẢN PHẨM BẰNG LIE; CÁC SẢN PHẨM TỪ RƠM, CỎ GIẤY HOẶC CÁC VẬT LIỆU TẾT BỆN KHÁC; CÁC SẢN PHẨM BẰNG LIỄU GAI VÀ SONG MÂY",
    sectionTitleEn: "WOOD AND ARTICLES OF WOOD; WOOD CHARCOAL; CORK AND ARTICLES OF CORK; MANUFACTURES OF STRAW, OF ESPARTO OR OF OTHER PLAITING MATERIALS; BASKETWARE AND WICKERWORK",
    titleVi: "Sản phẩm làm từ rơm, cỏ giấy hoặc từ các loại vật liệu tết bện khác; các sản phẩm bằng liễu gai và song mây",
    titleEn: "Manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork",
    notesVi: [
      "Trong Chương này khái niệm \"vật liệu tết bện\" dùng để chỉ các loại vật liệu ở trạng thái hoặc hình dạng thích hợp cho việc tết bện hoặc gia công tương tự; kể cả rơm, liễu gai hoặc liễu, tre, song, mây, bấc, sậy, dải gỗ mỏng, các dải vật liệu thực vật khác, sợi dệt tự nhiên chưa xe, sợi monofilament và dải bằng plastic và dải giấy.",
      "Chương này không bao gồm: Tấm phủ tường thuộc nhóm 48.14; Dây xe, chão bện, thừng hoặc cáp (nhóm 56.07); Giày, dép hoặc mũ thuộc Chương 64 hoặc 65; Xe hoặc thân xe bằng song mây (Chương 87); Các mặt hàng thuộc Chương 94."
    ],
    notesEn: [
      "In this Chapter the expression \"plaiting materials\" means materials in a state or form suitable for plaiting, interlacing or similar processes; it includes straw, osier or willow, bamboos, rattans, rushes, reeds, strips of wood, strips of other vegetable material, unspun natural textile fibres, monofilament and strip of plastics and strips of paper.",
      "This Chapter does not cover: Wall coverings of heading 48.14; Twine, cordage, ropes or cables (heading 56.07); Footwear or headgear of Chapter 64 or 65; Vehicles or bodies for vehicles of basketware (Chapter 87); Articles of Chapter 94."
    ],
    generalVi: "Ngoài các sản phẩm từ cây mướp (loofah), Chương này bao gồm các mặt hàng bán thành phẩm (nhóm 46.01) và một số mặt hàng (các nhóm 46.01 và 46.02) thu được từ việc bện, dệt hoặc bằng các phương pháp lắp ghép các vật liệu không se tương tự, cụ thể là rơm, liễu gai, tre, sậy, song mây, bấc, sợi dệt tự nhiên không se, sợi monofilament và dải bằng plastic, và dải giấy.",
    generalEn: "In addition to articles of loofah, this Chapter covers semi-manufactured products (heading 46.01) and certain articles (headings 46.01 and 46.02) made by interlacing, weaving or by similar methods of assembling unspun materials, particularly straw, osier or willow, bamboos, rushes, rattans, reeds, unspun natural textile fibres, monofilament and strip of plastics, and strips of paper.",
    headings: [
      {
        code: "46.01",
        titleVi: "Dây tết bện và các sản phẩm tương tự làm bằng vật liệu tết bện, đã hoặc chưa ghép thành dải; các vật liệu tết bện, các dây bện và các sản phẩm tương tự, đã kết lại với nhau trong các tao dây song song hoặc đã được dệt, ở dạng tấm (ví dụ, chiếu, thảm, mành)",
        titleEn: "Plaits and similar products of plaiting materials, whether or not assembled into strips; plaiting materials, plaits and similar products of plaiting materials, bound together in parallel strands or woven, in sheet form (for example, mats, matting, screens)",
        contentVi: "Nhóm này bao gồm: (A) Dây tết bện và các sản phẩm tương tự làm bằng các vật liệu tết bện. Dây tết bện gồm các tao dây bằng vật liệu tết bện được kết lại theo chiều dài chung. (B) Các vật liệu tết bện đã kết lại với nhau thành các tao dây song song hoặc đã được dệt, thành tấm, ví dụ chiếu, thảm, mành.",
        contentEn: "This heading covers: (A) Plaits and similar products of plaiting materials. Plaits consist of strands of plaiting materials bound together lengthwise. (B) Plaiting materials bound together in parallel strands or woven, in sheet form, e.g., mats, matting, screens."
      },
      {
        code: "46.02",
        titleVi: "Sản phẩm bằng liễu gai, song mây và sản phẩm bằng các vật liệu tết bện khác, được làm trực tiếp thành hình dạng; các sản phẩm làm từ cây mướp",
        titleEn: "Basketwork, wickerwork and other articles, made directly to shape from plaiting materials or made up from goods of heading 46.01; articles of loofah",
        contentVi: "Nhóm này bao gồm các sản phẩm bằng vật liệu tết bện (kể cả sản phẩm bằng những vật liệu được nêu trong Chú giải 1) và sản phẩm bằng cây mướp, trừ các sản phẩm bị loại trừ theo Chú giải 2 và các sản phẩm được phân loại cụ thể hơn trong các Chương khác.",
        contentEn: "This heading covers articles of plaiting materials (including those of materials mentioned in Note 1) and articles of loofah, other than products excluded by Note 2 and products more specifically classified in other Chapters."
      }
    ]
  },
  {
    chapter: 47,
    section: 10,
    sectionTitleVi: "BỘT GIẤY TỪ GỖ HOẶC TỪ NGUYÊN LIỆU XƠ SỢI XENLULO KHÁC; GIẤY LOẠI HOẶC BÌA LOẠI THU HỒI (PHẾ LIỆU VÀ VỤN THỪA); GIẤY VÀ BÌA VÀ CÁC SẢN PHẨM CỦA CHÚNG",
    sectionTitleEn: "PULP OF WOOD OR OF OTHER FIBROUS CELLULOSIC MATERIAL; RECOVERED (WASTE AND SCRAP) PAPER OR PAPERBOARD; PAPER AND PAPERBOARD AND ARTICLES THEREOF",
    titleVi: "Bột giấy từ gỗ hoặc từ nguyên liệu xơ xenlulo khác; giấy loại hoặc bìa loại thu hồi (phế liệu và vụn thừa)",
    titleEn: "Pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard",
    notesVi: [
      "Theo mục đích của nhóm 47.02, khái niệm \"bột giấy hoá học từ gỗ, loại hoà tan\" có nghĩa là bột giấy hoá học từ gỗ có hàm lượng phần không hoà tan từ 92% trở lên đối với bột giấy sản xuất bằng phương pháp sulphat hoặc kiềm hoặc 88% trở lên đối với bột giấy sản xuất bằng phương pháp sulphit sau khi ngâm một giờ trong dung dịch natri hydroxit (NaOH) nồng độ 18% ở nhiệt độ 20°C."
    ],
    notesEn: [
      "For the purposes of heading 47.02, the expression \"chemical wood pulp, dissolving grades\" means chemical wood pulp having by weight an insoluble fraction of 92% or more for soda or sulphate wood pulp or of 88% or more for sulphite wood pulp after one hour in a caustic soda solution containing 18% sodium hydroxide (NaOH) at 20°C."
    ],
    generalVi: "Bột giấy thuộc Chương này chứa chủ yếu xơ sợi xenlulo thu được từ các vật liệu thực vật khác nhau, hoặc từ phế liệu dệt có nguồn gốc thực vật. Loại bột giấy quan trọng nhất trong thương mại quốc tế là bột giấy gỗ, được gọi là \"bột giấy cơ học từ gỗ\", \"bột giấy hóa học từ gỗ\", \"bột giấy bán hóa từ gỗ\" hoặc \"bột giấy hóa cơ từ gỗ\", tuỳ theo phương pháp chế biến.",
    generalEn: "The pulp of this Chapter consists essentially of cellulose fibres obtained from various vegetable materials, or from waste textiles of vegetable origin. The most important pulp in international trade is wood pulp, termed \"mechanical wood pulp\", \"chemical wood pulp\", \"semi-chemical wood pulp\" or \"chemi-mechanical pulp\", according to its method of preparation.",
    headings: [
      {
        code: "47.01",
        titleVi: "Bột giấy cơ học từ gỗ",
        titleEn: "Mechanical wood pulp",
        contentVi: "Bột giấy cơ học từ gỗ thu được bằng quá trình cơ học, tức là bằng cách nghiền hoặc mài gỗ thành xơ sợi bằng máy nghiền cơ khí dưới dòng chảy của nước. Các loại chính gồm: Bột gỗ mài đá (SGW), Bột gỗ mài đá áp lực (PGW), Bột giấy cơ học tinh chế (RMP), Bột giấy cơ học nhiệt (TMP).",
        contentEn: "Mechanical wood pulp is obtained solely by a mechanical process, i.e., by grinding or milling wood into fibres using mechanical grinders under a flow of water. Main types include: Stone groundwood (SGW), Pressurised stone groundwood (PGW), Refiner mechanical pulp (RMP), Thermo-mechanical pulp (TMP)."
      },
      {
        code: "47.02",
        titleVi: "Bột giấy hóa học từ gỗ, loại hòa tan",
        titleEn: "Chemical wood pulp, dissolving grades",
        contentVi: "Nhóm này chỉ bao gồm bột giấy hóa học từ gỗ, loại hòa tan. Bột giấy này được tinh chế hoặc thanh lọc đặc biệt để sử dụng trong sản xuất xenlulo tái sinh, các ete và este của xenlulo và các sản phẩm bằng các vật liệu này, như tấm, phiến, màng, lá, xơ sợi dệt và một số loại giấy.",
        contentEn: "This heading covers chemical wood pulp of dissolving grades only. This pulp is specially refined or purified for use in making regenerated cellulose, cellulose ethers and esters and products of these materials, such as plates, sheets, film, foil, textile fibres and certain papers."
      },
      {
        code: "47.03",
        titleVi: "Bột giấy hoá học từ gỗ, sản xuất bằng phương pháp sulphat hoặc kiềm, trừ loại hòa tan",
        titleEn: "Chemical wood pulp, soda or sulphate, other than dissolving grades",
        contentVi: "Bột giấy sản xuất bằng phương pháp kiềm hoặc sulphate được sản xuất bằng cách nấu sôi gỗ, thông thường ở dạng dăm mảnh, trong các dung dịch kiềm mạnh. Các loại bột giấy này được dùng trong việc sản xuất các sản phẩm hút nước cũng như trong sản xuất giấy và bìa cần độ bền cao.",
        contentEn: "Soda or sulphate pulp is produced by boiling wood, usually in chip form, in strong alkaline solutions. These pulps are used in manufacturing absorbent products as well as in producing paper and paperboard requiring high strength."
      },
      {
        code: "47.04",
        titleVi: "Bột giấy hoá học từ gỗ, sản xuất bằng phương pháp sulphite, trừ loại hòa tan",
        titleEn: "Chemical wood pulp, sulphite, other than dissolving grades",
        contentVi: "Quy trình sulphite thông thường sử dụng một dung dịch axit và có tên từ các chất hóa học \"sulphite\" khác nhau. Bột giấy sản xuất bằng phương pháp sulphite được sử dụng, một mình hoặc trộn lẫn với các bột giấy khác, cho giấy viết hoặc giấy in khác nhau.",
        contentEn: "The sulphite process usually employs an acid solution and takes its name from the various \"sulphite\" chemicals. Sulphite pulp is used, alone or mixed with other pulps, for various writing or printing papers."
      },
      {
        code: "47.05",
        titleVi: "Bột giấy từ gỗ thu được bằng việc kết hợp các phương pháp nghiền cơ học và hoá học",
        titleEn: "Wood pulp obtained by a combination of mechanical and chemical pulping processes",
        contentVi: "Nhóm này bao gồm các loại bột giấy từ gỗ thu được bằng cách phối hợp phương pháp cơ học và phương pháp hoá học. Các loại bột giấy này được mô tả khác nhau như là bột giấy bán hoá học, bột giấy hoá cơ.",
        contentEn: "This heading covers wood pulps obtained by a combination of mechanical and chemical processes. These pulps are variously described as semi-chemical pulp, chemi-mechanical pulp."
      }
    ]
  },
  {
    chapter: 48,
    section: 10,
    sectionTitleVi: "BỘT GIẤY TỪ GỖ HOẶC TỪ NGUYÊN LIỆU XƠ SỢI XENLULO KHÁC; GIẤY LOẠI HOẶC BÌA LOẠI THU HỒI (PHẾ LIỆU VÀ VỤN THỪA); GIẤY VÀ BÌA VÀ CÁC SẢN PHẨM CỦA CHÚNG",
    sectionTitleEn: "PULP OF WOOD OR OF OTHER FIBROUS CELLULOSIC MATERIAL; RECOVERED (WASTE AND SCRAP) PAPER OR PAPERBOARD; PAPER AND PAPERBOARD AND ARTICLES THEREOF",
    titleVi: "Giấy và bìa; các sản phẩm làm bằng bột giấy, bằng giấy hoặc bằng bìa",
    titleEn: "Paper and paperboard; articles of paper pulp, of paper or of paperboard",
    notesVi: [
      "Theo mục đích của Chương này, trừ khi có yêu cầu khác, khi đề cập đến \"giấy\" đều kể đến bìa (bất kể độ dày hoặc định lượng tính trên m²).",
      "Chương này không bao gồm: Các sản phẩm thuộc Chương 30; Lá phôi dập của nhóm 32.12; Các loại giấy thơm hoặc các loại giấy đã thấm tẩm hoặc tráng bằng các loại mỹ phẩm (Chương 33); Giấy hoặc tấm lót xenlulo đã thấm tẩm, tráng hoặc phủ bằng xà phòng hoặc chất tẩy (nhóm 34.01); và nhiều mặt hàng khác.",
      "Trong Chương này \"giấy in báo\" có nghĩa là loại giấy không tráng sử dụng để in báo, có hàm lượng bột giấy từ gỗ thu được từ quá trình cơ học hoặc quá trình hoá cơ-hóa học không nhỏ hơn 50%, định lượng từ 40 g/m² đến 65 g/m².",
      "Trong Chương này \"giấy và bìa kraft\" có nghĩa là loại giấy và bìa có hàm lượng bột giấy sản xuất bằng quá trình sulphat hoặc kiềm hóa học không dưới 80% so với tổng lượng bột giấy."
    ],
    notesEn: [
      "For the purposes of this Chapter, except where the context otherwise requires, a reference to \"paper\" includes references to paperboard (irrespective of thickness or weight per m²).",
      "This Chapter does not cover: Articles of Chapter 30; Stamping foils of heading 32.12; Perfumed papers or papers impregnated or coated with cosmetics (Chapter 33); Paper or cellulose wadding impregnated, coated or covered with soap or detergent (heading 34.01); and many other articles.",
      "In this Chapter the expression \"newsprint\" means uncoated paper of a kind used for the printing of newspapers, of which not less than 50% by weight of the total fibre content consists of wood fibres obtained by a mechanical or chemi-mechanical process, weighing not less than 40 g/m² and not more than 65 g/m².",
      "In this Chapter \"kraft paper and paperboard\" means paper and paperboard of which not less than 80% by weight of the total fibre content consists of fibres obtained by the chemical sulphate or soda processes."
    ],
    generalVi: "Chương này bao gồm giấy và bìa, tấm xenlulo và màng xơ sợi xenlulo, và các sản phẩm làm bằng bột giấy, bằng giấy hoặc bằng bìa. Các nhóm 48.01 đến 48.05 kể cả giấy và bìa được cán láng, làm bóng hoặc hoàn thiện bằng các phương pháp tương tự, làm giả hình bóng nước hoặc gia keo bề mặt.",
    generalEn: "This Chapter covers paper and paperboard, cellulose wadding and webs of cellulose fibres, and articles of paper pulp, paper or paperboard. Headings 48.01 to 48.05 include paper and paperboard which have been subjected to calendering, glazing or similar finishing, false water-marking or surface sizing.",
    headings: [
      {
        code: "48.01",
        titleVi: "Giấy in báo, dạng cuộn hoặc tờ",
        titleEn: "Newsprint, in rolls or sheets",
        contentVi: "Nhóm này bao gồm giấy in báo như đã được định nghĩa trong Chú giải 4 của Chương này: giấy không tráng sử dụng để in báo, có hàm lượng bột giấy từ gỗ thu được từ quá trình cơ học hoặc hóa cơ không nhỏ hơn 50%, định lượng từ 40 g/m² đến 65 g/m².",
        contentEn: "This heading covers newsprint as defined in Note 4 to this Chapter: uncoated paper used for printing newspapers, of which not less than 50% by weight of the total fibre content consists of wood fibres obtained by a mechanical or chemi-mechanical process, weighing not less than 40 g/m² and not more than 65 g/m²."
      },
      {
        code: "48.02",
        titleVi: "Giấy và bìa không tráng, loại dùng để viết, in hoặc các mục đích đồ bản khác, và giấy và bìa làm thẻ và giấy làm băng chưa đục lỗ, dạng cuộn hoặc dạng tờ hình chữ nhật (kể cả hình vuông)",
        titleEn: "Uncoated paper and paperboard, of a kind used for writing, printing or other graphic purposes, and non perforated punch-cards and punch tape paper, in rolls or rectangular (including square) sheets",
        contentVi: "Nhóm này bao gồm giấy và bìa, loại dùng để viết, in hoặc các mục đích đồ bản khác, như được định nghĩa trong Chú giải 5 của Chương này. Giấy này được làm chủ yếu từ bột giấy tẩy trắng hoặc bột giấy thu được từ quá trình cơ học hoặc quá trình hoá học-cơ học.",
        contentEn: "This heading covers paper and paperboard, of a kind used for writing, printing or other graphic purposes, as defined in Note 5 to this Chapter. This paper is made mainly from bleached pulp or from pulp obtained by a mechanical or chemi-mechanical process."
      },
      {
        code: "48.03",
        titleVi: "Giấy dùng làm giấy vệ sinh hoặc giấy ăn, khăn giấy lau hoặc các loại giấy tương tự sử dụng trong gia đình hoặc vệ sinh, tấm xenlulo và màng xơ xenlulo",
        titleEn: "Toilet or facial tissue stock, towel or napkin stock and similar paper of a kind used for household or sanitary purposes, cellulose wadding and webs of cellulose fibres",
        contentVi: "Nhóm này bao gồm các loại giấy dùng làm giấy vệ sinh, giấy ăn, khăn giấy lau hoặc các loại giấy tương tự sử dụng trong gia đình hoặc vệ sinh. Các sản phẩm này thường được làm từ bột giấy tẩy trắng và có đặc tính mềm mại, thấm hút.",
        contentEn: "This heading covers toilet or facial tissue stock, towel or napkin stock and similar paper of a kind used for household or sanitary purposes. These products are usually made from bleached pulp and have softness and absorbent properties."
      }
    ]
  },
  {
    chapter: 49,
    section: 10,
    sectionTitleVi: "BỘT GIẤY TỪ GỖ HOẶC TỪ NGUYÊN LIỆU XƠ SỢI XENLULO KHÁC; GIẤY LOẠI HOẶC BÌA LOẠI THU HỒI (PHẾ LIỆU VÀ VỤN THỪA); GIẤY VÀ BÌA VÀ CÁC SẢN PHẨM CỦA CHÚNG",
    sectionTitleEn: "PULP OF WOOD OR OF OTHER FIBROUS CELLULOSIC MATERIAL; RECOVERED (WASTE AND SCRAP) PAPER OR PAPERBOARD; PAPER AND PAPERBOARD AND ARTICLES THEREOF",
    titleVi: "Sách, báo, tranh ảnh và các sản phẩm khác của công nghiệp in; các loại bản thảo viết bằng tay, đánh máy và sơ đồ",
    titleEn: "Printed books, newspapers, pictures and other products of the printing industry; manuscripts, typescripts and plans",
    notesVi: [
      "Chương này không bao gồm: (a) Phim tạo ảnh âm bản hoặc dương bản (Chương 37); (b) Bản đồ, sơ đồ hoặc quả địa cầu, dạng nổi (nhóm 90.23); (c) Bộ bài để chơi hoặc hàng hoá khác thuộc Chương 95; hoặc (d) Bản khắc, bản in gốc, tem bưu chính hoặc tem thuế, đồ cổ có tuổi trên 100 năm hoặc các loại hàng hoá khác thuộc Chương 97.",
      "Theo mục đích của Chương 49, khái niệm \"đã in\" cũng có nghĩa là đã được tái bản bằng máy nhân bản, được tạo ra nhờ một máy xử lý dữ liệu tự động, được rập nổi, được chụp lại, được photocopy, được copy nhiệt hoặc được đánh máy.",
      "Các loại báo, tạp chí chuyên ngành và các xuất bản phẩm định kỳ được đóng bìa không phải bìa giấy mềm được phân loại vào nhóm 49.01.",
      "Nhóm 49.01 cũng bao gồm: Bộ sưu tập các tái bản của các tác phẩm nghệ thuật; Tập tranh ảnh minh họa, và phụ lục cho một cuốn sách; Các phần đã in của sách hoặc sách nhỏ."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Photographic negatives or positives on transparent bases (Chapter 37); (b) Maps, plans or globes, in relief (heading 90.23); (c) Playing cards or other goods of Chapter 95; or (d) Original engravings, prints or lithographs, postage or revenue stamps, antiques of an age exceeding one hundred years or other articles of Chapter 97.",
      "For the purposes of Chapter 49, the term \"printed\" also means reproduced by means of a duplicating machine, produced under the control of an automatic data processing machine, embossed, photographed, photocopied, thermocopied or typewritten.",
      "Newspapers, journals and periodicals which are bound otherwise than in paper are to be classified in heading 49.01.",
      "Heading 49.01 also covers: A collection of printed reproductions of works of art; A pictorial supplement accompanying a bound volume; Printed parts of books or booklets."
    ],
    generalVi: "Trừ một số ít ngoại lệ, Chương này bao gồm tất cả các ấn phẩm mà bản chất và công dụng chủ yếu của chúng được quyết định bởi thực tế là chúng được in với các motip, các ký tự hoặc biểu tượng tranh ảnh. Theo mục đích Chương này, thuật ngữ \"đã in\" không chỉ bao gồm việc sao chép bằng các biện pháp in thủ công hoặc in cơ học, mà còn bao gồm việc sao chép bằng các máy nhân bản, chụp ảnh, photocopy, copy nhiệt hoặc đánh máy.",
    generalEn: "With a few exceptions, this Chapter covers all publications and printed matter in which the essential nature and use is determined by the fact that they are printed with motifs, characters or pictorial representations. For the purposes of this Chapter, the term \"printed\" includes not only reproduction by manual printing processes or mechanical printing, but also reproduction by duplicating machines, photography, photocopying, thermocopying or typewriting.",
    headings: [
      {
        code: "49.01",
        titleVi: "Các loại sách in, sách gấp, sách mỏng và các ấn phẩm in tương tự, dạng tờ đơn hoặc không phải dạng tờ đơn",
        titleEn: "Printed books, brochures, leaflets and similar printed matter, whether or not in single sheets",
        contentVi: "Nhóm này bao gồm hầu như tất cả các xuất bản phẩm và ấn phẩm đọc, có hoặc không có minh hoạ, trừ các ấn phẩm quảng cáo và sản phẩm được chi tiết cụ thể hơn ở các nhóm khác. Bao gồm: (A) Sách và sách nhỏ; (B) Sách gấp, sách chuyên đề và tờ rơi; (C) Văn bản in trên các tờ đóng bằng kẹp cơ động.",
        contentEn: "This heading covers virtually all publications and printed reading matter, illustrated or not, with the exception of publicity matter and products more specifically covered by other headings. It includes: (A) Books and booklets; (B) Brochures, pamphlets and leaflets; (C) Textual matter in the form of sheets for binding in loose-leaf binders."
      },
      {
        code: "49.02",
        titleVi: "Báo, tạp chí chuyên ngành và xuất bản phẩm định kỳ, có hoặc không có minh họa, có hoặc không chứa tư liệu quảng cáo",
        titleEn: "Newspapers, journals and periodicals, whether or not illustrated or containing advertising material",
        contentVi: "Nhóm này bao gồm các loại báo, tạp chí chuyên ngành và xuất bản phẩm định kỳ được xuất bản đều đặn theo những khoảng thời gian xác định. Để được phân loại vào nhóm này, các xuất bản phẩm phải được đóng bìa bằng giấy mềm.",
        contentEn: "This heading covers newspapers, journals and periodicals that are published regularly at fixed intervals. To be classified in this heading, the publications must be bound in soft paper covers."
      },
      {
        code: "49.03",
        titleVi: "Sách tranh ảnh cho trẻ em, sách để vẽ hoặc tô màu",
        titleEn: "Children's picture, drawing or colouring books",
        contentVi: "Theo Chú giải 6 của Chương này, \"sách tranh ảnh cho trẻ em\" có nghĩa là loại sách dành cho trẻ em trong đó chủ yếu là tranh ảnh và lời chỉ là phụ. Nhóm này cũng bao gồm các loại sách để vẽ hoặc tô màu dành cho trẻ em.",
        contentEn: "For the purposes of this heading, \"children's picture books\" means books for children in which the pictures are the main feature and the text is subsidiary. The heading also covers drawing or colouring books for children."
      },
      {
        code: "49.04",
        titleVi: "Nhạc, đã in hoặc viết tay, có hoặc không đóng bìa hoặc minh họa",
        titleEn: "Music, printed or in manuscript, whether or not bound or illustrated",
        contentVi: "Nhóm này bao gồm các bản nhạc, đã in hoặc viết tay, dù được đóng bìa hay không và dù có minh họa hay không. Bao gồm các loại nhạc phổ, tổng phổ, và các phần riêng biệt của các tác phẩm âm nhạc.",
        contentEn: "This heading covers printed or manuscript music, whether bound or not and whether illustrated or not. It includes musical scores, full orchestral scores, and individual parts of musical works."
      }
    ]
  },
  {
    chapter: 50,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Tơ tằm",
    titleEn: "Silk",
    notesVi: [
      "Phần này không bao gồm: Lông cứng hoặc lông động vật dùng làm bàn chải (nhóm 05.02); Tóc người hoặc các sản phẩm bằng tóc người (nhóm 05.01, 67.03 hoặc 67.04); Xơ của cây bông hoặc các vật liệu thực vật khác thuộc Chương 14; Amiăng thuộc nhóm 25.24; và nhiều mặt hàng khác.",
      "Hàng hóa có thể phân loại vào các Chương từ 50 đến 55 và được làm từ hỗn hợp của hai hoặc nhiều loại vật liệu dệt được phân loại như sản phẩm đó làm từ vật liệu dệt nào chiếm khối lượng trội hơn.",
      "Theo mục đích của Phần này, khái niệm \"sợi có độ bền cao\" có nghĩa là loại sợi có độ bền tương đối đo bằng cN/tex lớn hơn các tiêu chuẩn nhất định.",
      "Theo mục đích của Phần này, khái niệm \"hoàn thiện\" nghĩa là: đã cắt thành hình trừ hình vuông hoặc hình chữ nhật; được tạo ra trong công đoạn hoàn thiện sẵn sàng để sử dụng; cắt theo cỡ và có cạnh được làm kín bằng nhiệt; đã viền lại hoặc cuộn mép; được ghép bằng cách khâu, may, dán dính."
    ],
    notesEn: [
      "This Section does not cover: Animal brush-making bristles or hair (heading 05.02); Human hair or articles of human hair (heading 05.01, 67.03 or 67.04); Cotton linters or other vegetable materials of Chapter 14; Asbestos of heading 25.24; and many other articles.",
      "Goods classifiable in Chapters 50 to 55 and made of mixtures of two or more textile materials are to be classified as if consisting wholly of that textile material which predominates by weight.",
      "For the purposes of this Section, the expression \"high tenacity yarn\" means yarn having a tenacity measured in cN/tex exceeding certain standards.",
      "For the purposes of this Section, the expression \"made up\" means: cut otherwise than into rectangles; produced in the finished state ready for use; cut to size and with at least one heat-sealed edge; hemmed or with rolled edges; assembled by sewing, glueing or otherwise."
    ],
    generalVi: "Chương này bao gồm tơ tằm ở các dạng khác nhau, từ kén tằm đến sợi tơ tằm, phế liệu tơ tằm và sợi từ phế liệu tơ tằm, vải dệt thoi từ tơ tằm hoặc từ phế liệu tơ tằm. Tơ tằm là sợi xơ liên tục được sản xuất bởi con tằm khi nhả kén. Tơ tằm có độ bóng tự nhiên, mềm mại và bền.",
    generalEn: "This Chapter covers silk in its various forms, from silkworm cocoons to silk yarn, silk waste and yarn spun from silk waste, woven fabrics of silk or of silk waste. Silk is the continuous fibre produced by the silkworm when spinning its cocoon. Silk has natural lustre, softness and strength.",
    headings: [
      {
        code: "50.01",
        titleVi: "Kén tằm thích hợp cho việc kéo sợi",
        titleEn: "Silk-worm cocoons suitable for reeling",
        contentVi: "Nhóm này bao gồm kén tằm thích hợp cho việc kéo sợi. Kén tằm là lớp vỏ bằng tơ do con tằm nhả ra để bao bọc nhộng trong quá trình biến đổi. Chỉ những kén nguyên vẹn, không bị hư hỏng mới phù hợp cho việc kéo sợi.",
        contentEn: "This heading covers silkworm cocoons suitable for reeling. A cocoon is the silk casing spun by the silkworm to envelop the chrysalis during its transformation. Only intact, undamaged cocoons are suitable for reeling."
      },
      {
        code: "50.02",
        titleVi: "Tơ tằm sống (chưa xe)",
        titleEn: "Raw silk (not thrown)",
        contentVi: "Nhóm này bao gồm tơ tằm sống, tức là tơ tằm ở dạng mà nó đã được kéo từ kén nhưng chưa được xe hoặc gia công thêm. Tơ tằm sống bao gồm một số sợi filament được rút ra đồng thời từ nhiều kén và kết dính với nhau bởi keo tơ (sericin).",
        contentEn: "This heading covers raw silk, i.e., silk in the form in which it has been reeled from the cocoons but has not yet been thrown or further processed. Raw silk consists of a number of filaments drawn simultaneously from several cocoons and held together by the silk gum (sericin)."
      },
      {
        code: "50.03",
        titleVi: "Phế liệu tơ tằm (kể cả kén không thích hợp cho việc kéo sợi, phế liệu sợi và sợi tái chế từ nguyên liệu rời)",
        titleEn: "Silk waste (including cocoons unsuitable for reeling, yarn waste and garnetted stock)",
        contentVi: "Nhóm này bao gồm phế liệu tơ tằm các loại, bao gồm: kén không thích hợp cho việc kéo sợi (kén bị hư hỏng, kén đôi, kén chết); phế liệu sợi tơ tằm; sợi tái chế từ nguyên liệu rời (sợi được làm từ giẻ rách hoặc vải vụn bằng tơ tằm).",
        contentEn: "This heading covers silk waste of all kinds, including: cocoons unsuitable for reeling (damaged cocoons, double cocoons, dead cocoons); silk yarn waste; garnetted stock (yarn made from silk rags or fabric waste)."
      },
      {
        code: "50.04",
        titleVi: "Sợi tơ tằm (trừ sợi xe từ phế liệu tơ tằm), chưa đóng gói để bán lẻ",
        titleEn: "Silk yarn (other than yarn spun from silk waste) not put up for retail sale",
        contentVi: "Nhóm này bao gồm sợi tơ tằm (trừ sợi xe từ phế liệu tơ tằm) chưa đóng gói để bán lẻ. Sợi tơ tằm được sản xuất bằng cách xe một hoặc nhiều sợi tơ tằm sống với nhau.",
        contentEn: "This heading covers silk yarn (other than yarn spun from silk waste) not put up for retail sale. Silk yarn is made by throwing one or more strands of raw silk together."
      },
      {
        code: "50.05",
        titleVi: "Sợi xe từ phế liệu tơ tằm, chưa đóng gói để bán lẻ",
        titleEn: "Yarn spun from silk waste, not put up for retail sale",
        contentVi: "Nhóm này bao gồm sợi xe từ phế liệu tơ tằm (chải thô hoặc chải kỹ) chưa đóng gói để bán lẻ. Loại sợi này được sản xuất từ phế liệu tơ tằm bằng phương pháp xe thông thường như đối với các xơ staple khác.",
        contentEn: "This heading covers yarn spun from silk waste (carded or combed) not put up for retail sale. This yarn is produced from silk waste by the ordinary spinning methods used for other staple fibres."
      },
      {
        code: "50.06",
        titleVi: "Sợi tơ tằm và sợi xe từ phế liệu tơ tằm, đã đóng gói để bán lẻ; ruột con tằm",
        titleEn: "Silk yarn and yarn spun from silk waste, put up for retail sale; silk-worm gut",
        contentVi: "Nhóm này bao gồm sợi tơ tằm và sợi xe từ phế liệu tơ tằm, đã đóng gói để bán lẻ. Nhóm này cũng bao gồm ruột con tằm, là sợi monofilament thu được từ tuyến tơ của con tằm, được sử dụng làm dây câu cá.",
        contentEn: "This heading covers silk yarn and yarn spun from silk waste, put up for retail sale. It also includes silk-worm gut, which is monofilament obtained from the silk glands of silkworms, used for fishing lines."
      },
      {
        code: "50.07",
        titleVi: "Vải dệt thoi từ sợi tơ tằm hoặc từ phế liệu tơ tằm",
        titleEn: "Woven fabrics of silk or of silk waste",
        contentVi: "Nhóm này bao gồm vải dệt thoi từ sợi tơ tằm hoặc từ phế liệu tơ tằm. Các loại vải này bao gồm nhiều loại vải như satin, taffeta, crêpe, organza, và các loại vải tơ tằm khác được sử dụng trong may mặc và trang trí.",
        contentEn: "This heading covers woven fabrics of silk or of silk waste. These include many types of fabrics such as satin, taffeta, crêpe, organza, and other silk fabrics used for apparel and furnishing."
      }
    ]
  },
  {
    chapter: 51,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Lông cừu, lông động vật loại mịn hoặc loại thô; sợi lông đuôi hoặc bờm ngựa và vải dệt thoi từ các nguyên liệu trên",
    titleEn: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric",
    notesVi: [
      "Trong toàn bộ Danh mục, thuật ngữ 'lông cừu' có nghĩa là sợi lông tự nhiên của cừu hoặc cừu non.",
      "Trong toàn bộ Danh mục, thuật ngữ 'lông động vật loại mịn' có nghĩa là lông của dê alpaca, lông lạc đà không bướu llama, lông lạc đà không bướu vicuna, lông lạc đà (kể cả lạc đà một bướu), lông bò Tây Tạng, lông dê Angora, lông dê Tibetan, lông dê Ca-sơ-mia hoặc lông của các loại dê tương tự, lông thỏ (kể cả lông thỏ Angora), lông thỏ rừng, lông hải ly, lông chuột hải ly hoặc lông chuột nước.",
      "Trong toàn bộ Danh mục, thuật ngữ 'lông động vật loại thô' có nghĩa là lông của các động vật không nêu trên, trừ lông dùng làm bàn chải (nhóm 05.02) và lông đuôi hoặc bờm ngựa (nhóm 05.11)."
    ],
    notesEn: [
      "Throughout the Nomenclature, the term 'wool' means the natural fibre grown by sheep or lambs.",
      "Throughout the Nomenclature, the term 'fine animal hair' means the hair of alpaca, llama, vicuna, camel (including dromedary), yak, Angora, Tibetan, Kashmir or similar goats (but not common goats), rabbit (including Angora rabbit), hare, beaver, nutria or muskrat.",
      "Throughout the Nomenclature, the term 'coarse animal hair' means the hair of animals not mentioned above, excluding brush-making hair (heading 05.02) and horsehair (heading 05.11)."
    ],
    generalVi: "Chương này bao gồm lông cừu, lông động vật loại mịn hoặc loại thô ở các dạng khác nhau, từ dạng thô đến sợi và vải dệt thoi. Lông cừu là sợi lông tự nhiên của cừu, có đặc điểm là có lớp vảy, có khả năng nỉ hóa và co giãn. Lông động vật loại mịn thường mềm và ít quăn hơn lông cừu. Lông động vật loại thô được sử dụng để sản xuất sợi thô, vải dệt thoi, phớt hoặc thảm.",
    generalEn: "This Chapter covers wool, fine or coarse animal hair in their various forms, from raw materials to yarn and woven fabric. Wool is the natural fibre grown by sheep, characterized by its scales, felting properties and elasticity. Fine animal hair is generally softer and less crimped than wool. Coarse animal hair is used in the manufacture of coarse yarns, woven fabrics, felts or carpets.",
    headings: [
      {
        code: "51.01",
        titleVi: "Lông cừu, chưa chải thô hoặc chải kỹ",
        titleEn: "Wool, not carded or combed",
        contentVi: "Nhóm này bao gồm lông cừu chưa chải thô hoặc chải kỹ ở các dạng: (A) Lông cừu còn dính nhờn, kể cả lông cừu đã rửa sạch trên lưng cừu - là lông cừu chưa được rửa hoặc làm sạch bằng cách khác, vẫn còn dính chất nhờn và chất béo từ bản thân con vật. (B) Lông cừu đã tẩy nhờn, chưa được carbon hoá - bao gồm lông cừu đã rửa bằng nước nóng, lông cừu đã tẩy, lông cừu đã xử lý với các dung môi dễ bay hơi, lông cừu đóng băng. (C) Lông cừu đã được carbon hoá - lông cừu đã loại bỏ những chất có nguồn gốc thực vật bằng quá trình xử lý với axit vô cơ hay muối axit.",
        contentEn: "This heading covers wool not carded or combed in the following forms: (A) Greasy, including fleece-washed wool - wool not yet washed or otherwise cleaned, still impregnated with wool grease and fatty matter from the animal itself. (B) Degreased wool, not carbonised - including hot-washed wool, scoured wool, wool treated with volatile solvents, and frosted wool. (C) Carbonised wool - wool from which vegetable matter has been removed by treatment with inorganic acids or acid salts."
      },
      {
        code: "51.02",
        titleVi: "Lông động vật loại mịn hoặc loại thô, chưa chải thô hoặc chải kỹ",
        titleEn: "Fine or coarse animal hair, not carded or combed",
        contentVi: "Nhóm này bao gồm: (1) Lông động vật loại mịn - là lông của dê alpaca, lông lạc đà không bướu llama, lông lạc đà không bướu vicuna, lông lạc đà (kể cả lạc đà một bướu), lông bò Tây Tạng, lông dê Angora, lông dê Tibetan, lông dê Ca-sơ-mia hoặc lông của các loại dê tương tự, lông thỏ (kể cả lông thỏ Angora), lông thỏ rừng, lông hải ly, lông chuột hải ly hoặc lông chuột nước. Lông động vật loại mịn thường mềm và ít quăn hơn lông cừu. (2) Lông động vật loại thô - là lông của tất cả các loài không đề cập trong phần (1) ở trên, ngoại trừ lông cừu, lông đuôi hay bờm của các loài ngựa hay động vật họ trâu bò, lông lợn, lông cứng, tóc hoặc lông làm bàn chải khác.",
        contentEn: "This heading covers: (1) Fine animal hair - the hair of alpaca, llama, vicuna, camel (including dromedary), yak, Angora, Tibetan, Kashmir or similar goats, rabbit (including Angora rabbit), hare, beaver, nutria or muskrat. Fine animal hair is generally softer and less crimped than wool. (2) Coarse animal hair - the hair of all animals not mentioned in (1) above, except wool, hair of the manes or tails of equine or bovine animals, and brush-making bristles or hair."
      },
      {
        code: "51.03",
        titleVi: "Phế liệu lông cừu hoặc lông động vật loại mịn hoặc loại thô, kể cả phế liệu sợi nhưng trừ lông tái chế",
        titleEn: "Waste of wool or of fine or coarse animal hair, including yarn waste but excluding garnetted stock",
        contentVi: "Nhóm này bao gồm tất cả các loại phế liệu (trừ lông tái chế) của lông cừu hay lông động vật loại mịn hay loại thô, thu được trong các quá trình gia công. Những phế liệu chủ yếu bao gồm: (1) Các phế liệu trong quá trình chải thô, chải kỹ hay các quá trình chuẩn bị cho xe sợi như xơ vụn, tấm nối và sợi ở những mẩu thừa của tấm vải. (2) Phế liệu sợi như những sợi bị đứt, sợi rối, sợi bị thắt nút được thu nhặt trong quá trình xe sợi, dệt, đan. (3) Các phế liệu trong quá trình phân loại, giặt. (4) Lông cừu của các đệm cũ.",
        contentEn: "This heading covers all waste (other than garnetted stock) of wool or of fine or coarse animal hair, recovered during successive treatments. The principal wastes include: (1) Wastes from carding, combing or other processes preparatory to spinning such as noils, lap and sliver ends. (2) Yarn waste such as broken, knotted or tangled yarns collected during spinning, weaving, knitting operations. (3) Sorting wastes and washing wastes. (4) Old mattress hair and wool."
      },
      {
        code: "51.04",
        titleVi: "Lông cừu hoặc lông động vật loại mịn hoặc thô tái chế",
        titleEn: "Garnetted stock of wool or of fine or coarse animal hair",
        contentVi: "Nhóm này bao gồm lông cừu hoặc lông động vật dạng thô hay mịn tái chế, thu được từ vải vụn tái chế của các mặt hàng dệt, đan từ nguyên liệu hay phế liệu của sợi. Lông cừu tái chế bao gồm: (1) Hàng thứ phẩm và hàng len dệt từ len vụn thu được bởi việc tái chế len hay sợi xấu hay vải vụn. (2) Lông cừu bòn, thu được từ việc tái chế lông cừu còn lại khi thu nhận những mẩu vải vụn đã xử lý.",
        contentEn: "This heading covers garnetted stock of wool or of fine or coarse animal hair, obtained from rags and waste of textile products. Garnetted wool includes: (1) Shoddy and mungo obtained by garnetting old or waste yarns or rags. (2) Extracted wool, obtained by garnetting the wool remaining after treatment of mixed rags."
      },
      {
        code: "51.05",
        titleVi: "Lông cừu và lông động vật loại mịn hoặc loại thô, đã chải thô hoặc chải kỹ (kể cả lông cừu chải kỹ dạng từng đoạn)",
        titleEn: "Wool and fine or coarse animal hair, carded or combed (including combed wool in fragments)",
        contentVi: "Nhóm này bao gồm lông cừu và lông động vật loại mịn hoặc loại thô đã qua quá trình chải thô hoặc chải kỹ. Các sản phẩm chải thô được tạo thành dạng cúi (slivers) hoặc sợi thô (slubbings). Các sản phẩm chải kỹ được tạo thành dạng bấc (tops) hoặc sợi thô (rovings). Nhóm này cũng bao gồm lông cừu chải kỹ dạng từng đoạn (combed wool in fragments), còn gọi là 'combed wool in bulk' hay 'scoured deburred wool' hay 'open tops'. Các quá trình như tẩy trắng và nhuộm màu không ảnh hưởng đến việc phân loại trong nhóm này.",
        contentEn: "This heading covers wool and fine or coarse animal hair which has been carded or combed. Carded products are in the form of slivers or slubbings. Combed products are in the form of tops or rovings. This heading also covers combed wool in fragments, sometimes known as 'combed wool in bulk', 'scoured deburred wool' or 'open tops'. Processes such as bleaching and dyeing do not affect the classification in this heading."
      },
      {
        code: "51.06",
        titleVi: "Sợi len lông cừu chải thô, chưa đóng gói để bán lẻ",
        titleEn: "Yarn of carded wool, not put up for retail sale",
        contentVi: "Nhóm này bao gồm những sợi len đơn hay những sợi len chập từ nhiều sợi đơn, thu được từ việc xe những sợi thô của lông cừu đã chải thô (nhưng chưa chải kỹ). Nhóm này cũng bao gồm những sợi xe đã chải thô và chải kỹ, thu được từ những sợi riêng lẻ đã chải thô nhưng qua những quá trình xe như đối với sợi đã chải kỹ. Những sợi này thường được quấn trên các cuộn sợi hay những suốt chỉ hình nón. Sợi len chải thô gồm những sợi ngắn hay hỗn hợp cả sợi ngắn và dài mà không được sắp song song nhưng được để lẫn và đan với nhau.",
        contentEn: "This heading covers woollen yarns whether single or multiple (folded), obtained by spinning the slubbings of carded (but not combed) wool. It also includes yarns known as combed-carded yarns, obtained from carded slivers by spinning operations employed for combed yarns. All these yarns are usually wound on bobbins or cones. Yarns of carded wool consist of short fibres or a mixture of long and short fibres which are not parallel but intermingle and cross each other."
      },
      {
        code: "51.07",
        titleVi: "Sợi len lông cừu chải kỹ, chưa đóng gói để bán lẻ",
        titleEn: "Yarn of combed wool, not put up for retail sale",
        contentVi: "Nhóm này gồm những sợi len xe (worsted yarns) ở dạng sợi đơn hay sợi chập từ nhiều sợi đơn, thu được qua quá trình xe những sợi thô (roving) từ lông cừu đã chải kỹ. Sợi len xe (worsted yarn) khác với sợi len thường là nó nhẵn và đều; các sợi lông trong sợi len xe được sắp song song và những sợi lông vụn hay rối đã bị loại ra bởi quá trình chải kỹ.",
        contentEn: "This heading covers worsted yarns whether single or multiple (folded), obtained by spinning rovings of combed wool. Worsted yarns differ from woollen yarns in having a smooth appearance and regular section; their fibres are parallel, and short and tangled fibres have been eliminated by combing."
      },
      {
        code: "51.08",
        titleVi: "Sợi lông động vật loại mịn (chải thô hoặc chải kỹ), chưa đóng gói để bán lẻ",
        titleEn: "Yarn of fine animal hair (carded or combed), not put up for retail sale",
        contentVi: "Nhóm này gồm những sợi đơn hoặc sợi xe từ nhiều sợi đơn, thu được bởi quá trình xe những sợi thô (roving) lấy từ lông động vật loại mịn đã chải thô hay chải kỹ. Sợi ở nhóm này phần lớn được sử dụng để sản xuất các mặt hàng dệt kim hay dệt thoi để may quần áo loại nhẹ (lông alpaca), áo khoác ngoài hoặc chăn (lông lạc đà bao gồm cả lạc đà một bướu), làm đồ nhung hoặc đồ giả lông thú.",
        contentEn: "This heading covers yarns, whether single or multiple (folded), obtained by spinning the rovings of carded or combed fine animal hair. The yarns of this heading are used mainly in the manufacture of knitted goods or woven fabrics for certain light clothing (e.g., alpaca), and for overcoats or blankets (e.g., camel hair), for velvets or for imitation fur."
      },
      {
        code: "51.09",
        titleVi: "Sợi len lông cừu hoặc lông động vật loại mịn, đã đóng gói để bán lẻ",
        titleEn: "Yarn of wool or of fine animal hair, put up for retail sale",
        contentVi: "Nhóm này gồm cả sợi len xe (worsted yarns) hay sợi len thường hay sợi làm từ lông động vật loại mịn, khi đóng gói để bán lẻ ở các dạng và là đối tượng đáp ứng các điều kiện như đã mô tả trong Chú giải tổng quát Phần XI. Những sợi này có thể được quấn trên bìa, guồng gờ, ống tuýp hoặc cuộn có lõi tương tự, với khối lượng (kể cả lõi) không quá 125g.",
        contentEn: "This heading covers woollen or worsted yarns and yarns of fine animal hair, when put up for retail sale in the forms and subject to the conditions described in the General Explanatory Note to Section XI. These yarns may be wound on cards, reels, tubes or similar supports, with a weight (including support) not exceeding 125g."
      },
      {
        code: "51.10",
        titleVi: "Sợi làm từ lông động vật loại thô hoặc từ lông đuôi hoặc bờm ngựa (kể cả sợi quấn bọc từ lông đuôi hoặc bờm ngựa), đã hoặc chưa đóng gói để bán lẻ",
        titleEn: "Yarn of coarse animal hair or of horsehair (including gimped horsehair yarn), whether or not put up for retail sale",
        contentVi: "Nhóm này bao gồm: (1) Sợi, dù là sợi đơn hay sợi xe thu được từ quá trình xe sợi thô (roving) lấy từ lông động vật loại thô. Những sợi này được dùng để sản xuất vải dệt thoi nhất định, các lớp lót hay những mặt hàng phục vụ kỹ thuật. (2) Sợi xe từ lông đuôi hoặc bờm ngựa, thu được qua quá trình xe sợi, thường là sử dụng lông đuôi hoặc bờm ngựa ngắn hơn. Những sợi lông đuôi hoặc bờm ngựa bao gồm một bó lông được liên kết hoặc được bọc với chỉ bông hoặc với các nguyên liệu dệt khác.",
        contentEn: "This heading covers: (1) Yarns, whether single or multiple (folded), obtained by spinning the rovings of coarse animal hair. These yarns are used in the manufacture of certain woven fabrics, interlinings or articles for technical uses. (2) Yarns of horsehair, obtained by spinning, generally using the shorter horsehairs. Horsehair yarns consisting of a bundle of horsehairs bound or gimped with yarn of cotton or of another textile material remain classified in this heading."
      },
      {
        code: "51.11",
        titleVi: "Vải dệt thoi từ sợi len lông cừu chải thô hoặc từ sợi lông động vật loại mịn chải thô",
        titleEn: "Woven fabrics of carded wool or of carded fine animal hair",
        contentVi: "Nhóm này bao gồm các mặt hàng dệt thoi làm bằng các sợi xe từ lông cừu đã chải thô hay lông động vật dạng mịn đã chải thô. Những mặt hàng dệt này rất đa dạng và bao gồm vải may complê, vải flannel, vải mềm (molleton) và các loại khác để may quần áo, chăn, hàng dệt làm đồ trang trí nội thất. Nhóm này không bao gồm băng dùng trong y tế đã tẩm thuốc hay đã đóng gói để bán lẻ (nhóm 30.05) và vải dệt thoi phục vụ cho kỹ thuật (nhóm 59.11).",
        contentEn: "This heading covers woven fabrics made of yarns of carded wool or of yarns of carded fine animal hair. These fabrics exist in great variety and include suitings, flannels, molletons and other fabrics for clothing, blankets, furnishing fabrics. This heading does not cover medicinal bandages impregnated with medicaments or put up for retail sale (heading 30.05), and woven fabrics for technical uses (heading 59.11)."
      },
      {
        code: "51.12",
        titleVi: "Vải dệt thoi từ sợi len lông cừu chải kỹ hoặc từ sợi lông động vật loại mịn chải kỹ",
        titleEn: "Woven fabrics of combed wool or of combed fine animal hair",
        contentVi: "Nhóm này bao gồm những mặt hàng dệt thoi làm từ sợi được xe từ lông cừu đã chải kỹ hay lông động vật dạng mịn đã chải kỹ. Những mặt hàng dệt này rất đa dạng như các mặt hàng dùng để may com-lê và các vải khác dùng để may quần áo, hàng dệt làm đồ trang trí nội thất. Nhóm này không bao gồm băng dùng trong y tế đã tẩm thuốc hay đã đóng gói để bán lẻ (nhóm 30.05) và vải dệt thoi phục vụ cho kỹ thuật (nhóm 59.11).",
        contentEn: "This heading covers woven fabrics made of yarns of combed wool or of yarns of combed fine animal hair. These fabrics exist in great variety and include suitings and other fabrics for clothing, furnishing fabrics. This heading does not cover medicinal bandages impregnated with medicaments or put up for retail sale (heading 30.05), and woven fabrics for technical uses (heading 59.11)."
      },
      {
        code: "51.13",
        titleVi: "Vải dệt thoi từ sợi lông động vật loại thô hoặc sợi lông đuôi hoặc bờm ngựa",
        titleEn: "Woven fabrics of coarse animal hair or of horsehair",
        contentVi: "Nhóm này gồm cả vải dệt thoi làm từ lông động vật dạng thô hoặc từ lông đuôi hoặc bờm ngựa. Các mặt hàng dệt từ lông động vật loại thô được sử dụng làm lớp bọc trong các đồ nội thất, đồ đạc trong nhà hay kể cả lớp lót áo khoác. Mặc dù vậy, các mặt hàng dệt thoi từ lông đuôi hoặc bờm ngựa có thể dệt từ những sợi lông đơn (nhóm 05.11).",
        contentEn: "This heading covers woven fabrics made of coarse animal hair or of horsehair. Fabrics of coarse animal hair are used as cover materials for furniture or as interlinings. However, woven fabrics of horsehair may be woven from single horsehairs (heading 05.11)."
      }
    ]
  },
  {
    chapter: 52,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Bông",
    titleEn: "Cotton",
    notesVi: [
      "Theo mục đích của các phân nhóm 5209.42 và 5211.42, khái niệm \"denim\" là vải dệt từ các sợi có các màu khác nhau, kiểu dệt là vân chéo 3 sợi hoặc vân chéo 4 sợi, kể cả vân chéo gãy, mặt phải của vải có hiệu ứng dọc, các sợi dọc được nhuộm cùng một màu và sợi ngang là sợi không tẩy trắng, đã tẩy trắng, nhuộm màu xám hoặc nhuộm màu nhạt hơn so với màu sợi dọc."
    ],
    notesEn: [
      "For the purposes of subheadings 5209.42 and 5211.42, the expression \"denim\" means fabrics of yarns of different colours, of 3-thread or 4-thread twill, including broken twill, warp faced, the warp yarns of which are of one and the same colour and the weft yarns of which are unbleached, bleached, dyed grey or coloured a lighter shade of the colour of the warp yarns."
    ],
    generalVi: "Khi đọc Chú giải chi tiết Chương này cần phải kết hợp xem xét với Chú giải tổng quát của Phần XI. Nói chung, Chương này đề cập tới các loại sợi bông (xơ bông, phế liệu bông, bông đã chải thô hoặc chải kỹ), chỉ khâu làm từ bông, sợi bông, và các loại vải dệt thoi từ bông.",
    generalEn: "The Explanatory Notes to this Chapter should be read in conjunction with the General Explanatory Note to Section XI. In general, this Chapter deals with cotton yarns (cotton fibres, cotton waste, carded or combed cotton), cotton sewing thread, cotton yarn, and woven fabrics of cotton.",
    headings: [
      {
        code: "52.01",
        titleVi: "Xơ bông, chưa chải thô hoặc chưa chải kỹ",
        titleEn: "Cotton, not carded or combed",
        contentVi: "Những hạt của quả bông (quả có vỏ dạng quả đậu, quả) của cây bông (Gossypium) được bao phủ bởi những xơ bông. Thành phần cơ bản của những xơ này là xenlulo, và được bọc ngoài bởi chất sáp. Bề mặt ngoài của chúng là trơn nhẵn và có màu trắng, vàng nhạt hay thậm chí là nâu nhạt hoặc hơi đỏ tự nhiên. Nhóm này bao gồm những xơ bông chưa được chải thô hoặc chải kỹ, vừa thu hoạch (bông hạt), hay đơn thuần chỉ là vừa được tỉa; nhóm này cũng bao gồm cả xơ bông (trừ xơ và phế liệu) đã được làm sạch, tẩy trắng, nhuộm màu hay làm khô. Nhóm này không bao gồm: Mền xơ, bông (nhóm 30.05 hay 56.01); Phế liệu bông (nhóm 52.02); Bông đã được chải thô hay chải kỹ (nhóm 52.03).",
        contentEn: "The seeds contained in the bolls (pods, fruit) of the cotton plant (Gossypium) are covered with cotton fibres. The essential constituent of these fibres is cellulose, and they are covered with a waxy substance. Their outer surface is smooth, and their natural colour white, yellowish or even brownish or reddish. This heading covers uncarded and uncombed cotton fibres as harvested (seed cotton), or merely ginned; it also includes cotton fibres (other than linters and waste) which have been cleaned, bleached, dyed or rendered absorbent. The heading excludes: Wadding (heading 30.05 or 56.01); Cotton waste (heading 52.02); Carded or combed cotton (heading 52.03)."
      },
      {
        code: "52.02",
        titleVi: "Phế liệu bông (kể cả phế liệu sợi và bông tái chế)",
        titleEn: "Cotton waste (including yarn waste and garnetted stock)",
        contentVi: "Nhìn chung, nhóm này bao gồm bông phế liệu thu được khi chuẩn bị cho việc kéo sợi hay trong các hoạt động kéo sợi, dệt, đan, v.v... hay được tái chế từ những mặt hàng làm từ bông. Do vậy mà nhóm này bao gồm: Phế liệu thu được từ quá trình chải kỹ (thường là những xơ vụn chải kỹ); sợi thu từ trục cán của quá trình chải thô hay chải kỹ; những sợi đứt tách ra từ quá trình kéo sợi; xơ vụn từ con cúi hoặc sợi thô; xơ bay thu từ quá trình chải thô; sợi rối hoặc các sợi phế liệu khác; sợi và xơ thu được từ quá trình tái chế vải vụn. Nhóm này không bao gồm: Xơ của cây bông (nhóm 14.04); Mền xơ, bông (nhóm 30.05 hay 56.01); Phế liệu bông, đã chải thô hay chải kỹ (nhóm 52.03).",
        contentEn: "In general, this heading covers waste cotton obtained when cotton is prepared for spinning, or during spinning operations, weaving, knitting, etc., or from the garnetting of cotton goods. It thus includes: Combing waste (usually referred to as comber noils); strippings recovered from carding or combing cylinders; broken fibres detached during the drawing process; fragments of slivers or rovings; carding fly; tangled yarn and other yarn waste; yarn and fibres resulting from the garnetting of rags. The heading excludes: Cotton linters (heading 14.04); Wadding (heading 30.05 or 56.01); Carded or combed cotton waste (heading 52.03)."
      },
      {
        code: "52.03",
        titleVi: "Xơ bông, chải thô hoặc chải kỹ",
        titleEn: "Cotton, carded or combed",
        contentVi: "Nhóm này bao gồm xơ bông (kể cả nguyên liệu bông tái chế hay phế liệu bông khác) mà đã được chải thô hay chải kỹ, đã được hay chưa được chuẩn bị cho kéo sợi. Mục đích chính của quá trình chải thô là để gỡ các xơ bông rối, sắp xếp chúng ít nhiều song song và loại bỏ toàn bộ hay phần lớn các xơ này khỏi những chất bên ngoài. Những xơ sau đó ở dạng màng rộng (lớp bông) thường được kết chặt lại tạo thành cúi chải. Chải kỹ là quá trình chủ yếu cho việc kéo sợi từ bông xơ dài, qua quá trình này thì những tạp chất lạ của xơ và xơ ngắn sẽ được loại bỏ dưới dạng phế liệu của quá trình chải kỹ; chỉ có những xơ dài, được xếp song song được giữ lại. Những sản phẩm của nhóm này có thể được tẩy trắng hoặc nhuộm màu.",
        contentEn: "This heading covers cotton (including garnetted stock and other cotton waste) which has been carded or combed, whether or not further prepared for spinning. The main purpose of carding is to disentangle the cotton fibres, lay them more or less parallel, and entirely or largely free them from any extraneous matter they may still contain. The fibres are then in the form of wide webs (laps) which are generally condensed into slivers. Combing, which is chiefly practised for the spinning of long staple cotton, removes the last traces of extraneous matter clinging to the fibres and eliminates the shorter fibres in the form of combing waste; only the longer fibres, lying parallel, remain. The products of this heading may be bleached or dyed."
      },
      {
        code: "52.04",
        titleVi: "Chỉ khâu làm từ bông đã hoặc chưa đóng gói để bán lẻ",
        titleEn: "Cotton sewing thread, whether or not put up for retail sale",
        contentVi: "Nhóm này bao gồm chỉ khâu làm từ bông ở các dạng và phù hợp với điều kiện đã được mô tả trong Phần (I) (B) (4) của Chú giải Tổng quát Phần XI. Tuy nhiên, nếu sợi chỉ nằm trong phạm vi định nghĩa của sợi xe, v.v... (xem Phần (1) (B) (2) của Chú giải Tổng quát thuộc Phần XI) thì bị loại khỏi nhóm này (nhóm 56.07). Chỉ khâu vẫn thuộc nhóm này dù đã được hay chưa được đóng gói để bán lẻ hay đã được gia công như nêu tại Phần (I) (B) (1) của Chú giải Tổng quát Phần XI.",
        contentEn: "This heading covers cotton sewing thread in the forms and subject to the conditions described in Part (I) (B) (4) of the General Explanatory Note to Section XI. However, if such thread is within the definition of twine, etc. (see Part (I) (B) (2) of the General Explanatory Note to Section XI) it is excluded (heading 56.07). Sewing thread remains in this heading whether or not put up for retail sale or processed as indicated in Part (I) (B) (1) of the General Explanatory Note to Section XI."
      },
      {
        code: "52.05",
        titleVi: "Sợi bông (trừ chỉ khâu), có hàm lượng bông chiếm từ 85% trở lên tính theo khối lượng, chưa đóng gói để bán lẻ",
        titleEn: "Cotton yarn (other than sewing thread), containing 85 % or more by weight of cotton, not put up for retail sale",
        contentVi: "Nhóm này bao gồm sợi bông (trừ chỉ khâu), có thể là sợi đơn hoặc sợi xe, thu được sau quá trình kéo sợi thô thuộc nhóm 52.03, miễn là có tỷ trọng bông từ 85% trở lên. Tuy nhiên, những sợi như vậy không thuộc nhóm này nếu chúng thuộc phạm vi định nghĩa của dây xe, chão bện, dây thừng, v.v... (nhóm 56.07) hay đã được đóng gói để bán lẻ (xem mục (I) (B) (2) và (3) của Chú giải Tổng quát Phần XI). Sợi vẫn thuộc nhóm này dù đã qua hoặc không qua quá trình xử lý nêu tại mục (I) (B) (1) của Chú giải Tổng quát Phần XI.",
        contentEn: "This heading covers cotton yarn (other than sewing thread), whether single or multiple (folded), obtained by spinning the rovings of heading 52.03, provided that they contain 85 % or more by weight of cotton. However, such yarn is excluded if it is within the definition of twine, cordage, rope, etc. (heading 56.07) or put up for retail sale (see Parts (I) (B) (2) and (3) of the General Explanatory Note to Section XI). The yarns remain in this heading whether or not processed as indicated in Part (I) (B) (1) of the General Explanatory Note to Section XI."
      },
      {
        code: "52.06",
        titleVi: "Sợi bông (trừ chỉ khâu), có hàm lượng bông chiếm dưới 85% tính theo khối lượng, chưa đóng gói để bán lẻ",
        titleEn: "Cotton yarn (other than sewing thread), containing less than 85 % by weight of cotton, not put up for retail sale",
        contentVi: "Chú giải Chi tiết của nhóm 52.05 được áp dụng tương tự với sợi của nhóm này. Nhóm này bao gồm sợi bông (trừ chỉ khâu) có tỷ trọng bông dưới 85%, chưa đóng gói để bán lẻ.",
        contentEn: "The Explanatory Note to heading 52.05 applies, mutatis mutandis, to the yarns of this heading. This heading covers cotton yarn (other than sewing thread) containing less than 85% by weight of cotton, not put up for retail sale."
      },
      {
        code: "52.07",
        titleVi: "Sợi bông (trừ chỉ khâu), đã đóng gói để bán lẻ",
        titleEn: "Cotton yarn (other than sewing thread), put up for retail sale",
        contentVi: "Nhóm này bao gồm cả sợi bông (trừ chỉ khâu) khi đóng gói để bán lẻ, ở các dạng và phù hợp với các điều kiện được mô tả trong Phần (I) (B) (3) của Chú giải Tổng quát Phần XI.",
        contentEn: "This heading covers cotton yarn (other than sewing thread) when put up for retail sale, in the forms and subject to the conditions described in Part (I) (B) (3) of the General Explanatory Note to Section XI."
      },
      {
        code: "52.08",
        titleVi: "Vải dệt thoi từ bông, có hàm lượng bông chiếm từ 85% trở lên tính theo khối lượng, định lượng không quá 200 g/m²",
        titleEn: "Woven fabrics of cotton, containing 85 % or more by weight of cotton, weighing not more than 200 g/m²",
        contentVi: "Nhóm này bao gồm các loại vải dệt thoi (như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI) làm từ sợi bông có tỷ trọng bông từ 85% trở lên và có định lượng không quá 200 g/m². Các loại vải dệt thoi ở các Chương từ 50 đến 55 có thể chưa được tẩy, đã giặt, đã tẩy, đã nhuộm, dệt từ các sợi có màu khác nhau, đã in, đã phủ màng, đã kiềm bóng, đã chuốt bóng, đã tạo nhiễu, đã chải tuyết, đã xếp nếp, đã chuội và hồ, đã đốt lông v.v... Nhóm này không bao gồm: Băng dùng trong y tế, đã tẩm thuốc hay đã đóng gói để bán lẻ (nhóm 30.05); Các loại vải dệt nhóm 58.01; Vải khăn lông và các loại vải dệt thoi tạo vòng lông tương tự (nhóm 58.02); Vải dệt quấn (nhóm 58.03); Vải dệt thoi phục vụ cho mục đích kỹ thuật, thuộc nhóm 59.11.",
        contentEn: "This heading covers woven fabrics (as defined in Part (I) (C) of the General Explanatory Note to Section XI) made of cotton yarn containing 85% or more by weight of cotton and weighing not more than 200 g/m². The woven fabrics of Chapters 50 to 55 may be unbleached, scoured, bleached, dyed, made from yarns of different colours, printed, clouded, mercerised, glazed, moiré, raised (napped), goffered, fulled, gassed (singed), etc. The heading excludes: Bandages, medicated or put up for retail sale (heading 30.05); Fabrics of heading 58.01; Terry towelling and similar terry fabrics (heading 58.02); Gauze (heading 58.03); Woven fabrics for technical uses, of heading 59.11."
      },
      {
        code: "52.09",
        titleVi: "Vải dệt thoi từ bông, có hàm lượng bông chiếm từ 85% trở lên tính theo khối lượng, định lượng trên 200 g/m²",
        titleEn: "Woven fabrics of cotton, containing 85 % or more by weight of cotton, weighing more than 200 g/m²",
        contentVi: "Chú giải chi tiết của nhóm 52.08 được áp dụng tương tự với các mặt hàng của nhóm này. Nhóm này bao gồm các loại vải dệt thoi làm từ sợi bông có tỷ trọng bông từ 85% trở lên và có định lượng trên 200 g/m².",
        contentEn: "The Explanatory Note to heading 52.08 applies, mutatis mutandis, to the products of this heading. This heading covers woven fabrics of cotton containing 85% or more by weight of cotton, weighing more than 200 g/m²."
      },
      {
        code: "52.10",
        titleVi: "Vải dệt thoi từ bông, có hàm lượng bông chiếm dưới 85% tính theo khối lượng, pha chủ yếu hoặc pha duy nhất với xơ sợi nhân tạo, có định lượng không quá 200 g/m²",
        titleEn: "Woven fabrics of cotton, containing less than 85 % by weight of cotton, mixed mainly or solely with man-made fibres, weighing not more than 200 g/m²",
        contentVi: "Nhóm này bao gồm các loại vải dệt như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI. Nhóm này cũng bao gồm các loại vải được phân loại như là vải bông theo Chú giải 2 Phần XI và với điều kiện chúng phải đáp ứng những tiêu chuẩn sau: (a) Có tỷ trọng bông dưới 85%; (b) Được pha chủ yếu hay chỉ pha duy nhất với xơ nhân tạo; (c) Trọng lượng không quá 200g/m². Khi tính toán thành phần, phải nhớ rằng tổng trọng lượng của sợi nhân tạo phải được xem xét, không có sự phân biệt giữa sợi filament và xơ staple. Nhóm này không bao gồm: Băng dùng trong y tế, đã tẩm thuốc hay đã đóng gói để bán lẻ (nhóm 30.05); Các loại vải dệt nhóm 58.01; Vải khăn lông và các loại vải dệt thoi tạo vòng lông tương tự (nhóm 58.02); Vải dệt quấn (nhóm 58.03); Vải dệt thoi phục vụ cho mục đích kỹ thuật, thuộc nhóm 59.11.",
        contentEn: "This heading covers woven fabrics as defined in Part (I) (C) of the General Explanatory Note to Section XI. It covers these fabrics provided they are classified as cotton fabrics by the application of Note 2 to Section XI and provided they meet the following specification: (a) Contain less than 85% by weight of cotton; (b) Are mixed mainly or solely with man-made fibres; (c) Weigh not more than 200 g/m². In calculating the proportions it must be remembered that the total weight of man-made fibres is to be taken into consideration, no distinction being made between filaments and staple fibres. The heading does not include: Bandages, medicated or put up for retail sale (heading 30.05); Fabrics of heading 58.01; Terry towelling and similar terry fabrics (heading 58.02); Gauze (heading 58.03); Woven fabrics for technical uses, of heading 59.11."
      },
      {
        code: "52.11",
        titleVi: "Vải dệt thoi từ bông, có hàm lượng bông chiếm dưới 85% tính theo khối lượng, pha chủ yếu hoặc pha duy nhất với xơ sợi nhân tạo, có định lượng trên 200 g/m²",
        titleEn: "Woven fabrics of cotton, containing less than 85 % by weight of cotton, mixed mainly or solely with man-made fibres, weighing more than 200 g/m²",
        contentVi: "Chú giải chi tiết nhóm 52.10 được áp dụng tương tự với các mặt hàng của nhóm này. Nhóm này bao gồm các loại vải dệt thoi từ bông có tỷ trọng bông dưới 85%, pha chủ yếu hoặc pha duy nhất với xơ sợi nhân tạo, có định lượng trên 200 g/m².",
        contentEn: "The Explanatory Note to heading 52.10 applies, mutatis mutandis, to the products of this heading. This heading covers woven fabrics of cotton containing less than 85% by weight of cotton, mixed mainly or solely with man-made fibres, weighing more than 200 g/m²."
      },
      {
        code: "52.12",
        titleVi: "Vải dệt thoi khác từ sợi bông",
        titleEn: "Other woven fabrics of cotton",
        contentVi: "Nhóm này bao gồm các loại vải dệt thoi (như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI) làm từ sợi bông. Tuy nhiên, cần chú ý rằng nhóm này chỉ bao gồm các loại vải dệt từ sợi đã được pha, không bao gồm các vải thuộc nhóm trước của Chương này hoặc được chỉ rõ hay nằm trong mục thứ hai của Phần XI (thông thường ở Chương 58 hoặc 59). Băng dùng trong y tế, đã tẩm thuốc hay đã đóng gói để bán lẻ thì bị loại khỏi nhóm này (nhóm 30.05).",
        contentEn: "This heading covers woven fabrics (as defined in Part (I) (C) of the General Explanatory Note to Section XI) made of cotton yarns. However, it should be noted that it covers only mixed woven fabrics, other than those of the preceding headings of this Chapter or specified or included in the second part of this Section (Chapter 58 or 59, usually). Bandages, medicated or put up for retail sale, are excluded (heading 30.05)."
      }
    ]
  },
  {
    chapter: 53,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Xơ dệt gốc thực vật khác; sợi giấy và vải dệt thoi từ sợi giấy",
    titleEn: "Other vegetable textile fibres; paper yarn and woven fabrics of paper yarn",
    notesVi: [
      "Nhóm 53.05 áp dụng cho các loại xơ từ dừa, chuối abaca (gai dầu Manila hoặc Musa textilis Nee), xơ gai ramie, và các loại xơ thực vật khác không được nêu hoặc bao gồm trong các nhóm khác, ở dạng thô hoặc đã được gia công nhưng chưa kéo thành sợi."
    ],
    notesEn: [
      "Heading 53.05 applies to fibres of coir, abaca (Manila hemp or Musa textilis Nee), ramie and other vegetable textile fibres, not elsewhere specified or included, raw or processed but not spun."
    ],
    generalVi: "Khi đọc các Chú giải chi tiết của Chương này cần phải kết hợp xem xét với Chú giải tổng quát của Phần XI. Nhìn chung, và một số ngoại lệ đã được đề cập tại Chú giải chi tiết của nhóm 53.05, Chương này đề cập các nguyên liệu dệt gốc thực vật (trừ nguyên liệu bông) ở các cấp độ chế biến khác nhau, từ nguyên liệu thô cho đến khi tạo thành vải dệt thoi. Chương này cũng bao gồm sợi giấy và vải dệt bằng sợi giấy, và các sản phẩm có pha nguyên liệu dệt tương tự như các sản phẩm của Chương này theo quy định của Chú giải 2 Phần XI.",
    generalEn: "The Explanatory Notes to this Chapter should be read in conjunction with the General Explanatory Note to Section XI. Subject to a number of exceptions mentioned in the Explanatory Note to heading 53.05, this Chapter covers vegetable textile materials (other than cotton) at various stages of processing, from raw material to woven fabric. The Chapter also covers paper yarn and woven fabrics of paper yarn, and mixed textile products classified as products of this Chapter by application of Note 2 to Section XI.",
    headings: [
      {
        code: "53.01",
        titleVi: "Lanh, dạng nguyên liệu thô hoặc đã chế biến nhưng chưa kéo thành sợi; tô (tow) lanh và phế liệu lanh (kể cả phế liệu sợi và sợi tái chế)",
        titleEn: "Flax, raw or processed but not spun; flax tow and waste (including yarn waste and garnetted stock)",
        contentVi: "Lanh có nhiều loại khác nhau, quen thuộc nhất là loại Linum usitatissinum. Các xơ lanh có trong cây ở dạng chùm xơ libe rắn chắc được liên kết với nhau bằng chất pectic. Để dùng trong công nghiệp dệt, các xơ này phải được phân tách riêng biệt và tách từ phần còn lại của cây, đặc biệt là từ lớp gỗ bên trong thân cây. Nhóm này bao gồm: (A) Lanh dạng nguyên liệu thô (flax straw) - là loại lanh đã thu hoạch, đã hoặc chưa chải hoặc làm sạch; (B) Lanh đã ngâm - khi ngâm người ta loại ra phần lớn chất pectic bao quanh sợi lanh; (C) Lanh đã đập - lanh được ép để phá vỡ phần gỗ thành các miếng; (D) Lanh đã bông hoá - lanh được xử lý bằng dung dịch hydroxide natri; (E) Lanh đã chải kỹ - lanh được chải để loại các sợi ngắn và làm cho các xơ song song.",
        contentEn: "Flax plants are of many varieties, the best known being Linum usitatissinum. The flax fibres are contained in the plant in the form of bundles of firm bast fibres bound together by pectic matter. For use in the textile industry, these fibres must be separated and extracted from the rest of the plant, particularly from the woody inner layer of the stem. This heading covers: (A) Raw flax (flax straw) - harvested flax, whether or not rippled or cleaned; (B) Retted flax - the pectic matter surrounding the fibres is largely removed by retting; (C) Broken and scutched flax - the flax is crushed to break the woody part; (D) Cottonised flax - flax treated with sodium hydroxide solution; (E) Hackled flax - flax combed to remove short fibres and align the fibres parallel."
      },
      {
        code: "53.02",
        titleVi: "Gai dầu (Cannabis sativa L.), dạng nguyên liệu thô hoặc đã chế biến nhưng chưa kéo thành sợi; tô và phế liệu từ gai dầu (kể cả phế liệu sợi và sợi tái chế)",
        titleEn: "True hemp (Cannabis sativa L.), raw or processed but not spun; tow and waste of true hemp (including yarn waste and garnetted stock)",
        contentVi: "Gai dầu (Cannabis sativa L.) là một loại cây hàng năm mọc cao, có thể đạt chiều cao từ 3 đến 4 mét. Xơ gai dầu được tách từ vỏ cây bằng các quy trình tương tự như đối với lanh, bao gồm ngâm và đập. Nhóm này bao gồm gai dầu thô, gai dầu đã ngâm, gai dầu đã đập, gai dầu đã chải hoặc gia công bằng cách khác nhưng chưa kéo thành sợi, cũng như tô và phế liệu gai dầu. Nhóm này không bao gồm sợi gai dầu (nhóm 53.08).",
        contentEn: "True hemp (Cannabis sativa L.) is a tall-growing annual plant, which may reach a height of 3 to 4 metres. Hemp fibres are extracted from the bark by processes similar to those used for flax, including retting and scutching. This heading covers raw hemp, retted hemp, broken hemp, hackled or otherwise processed hemp but not spun, as well as tow and waste of hemp. It does not cover hemp yarn (heading 53.08)."
      },
      {
        code: "53.03",
        titleVi: "Đay và các loại xơ libe dệt khác (trừ lanh, gai dầu và gai ramie), dạng nguyên liệu thô hoặc đã chế biến nhưng chưa kéo thành sợi; tô và phế liệu từ các loại xơ này (kể cả phế liệu sợi và sợi tái chế)",
        titleEn: "Jute and other textile bast fibres (excluding flax, true hemp and ramie), raw or processed but not spun; tow and waste of these fibres (including yarn waste and garnetted stock)",
        contentVi: "Nhóm này bao gồm tất cả các loại sợi dệt lấy từ thân các loại cây có mầm 2 lá, trừ các loại lanh (nhóm 53.01), gai dầu (nhóm 53.02) và gai ramie (nhóm 53.05). Các loại xơ libe dệt được phân loại ở đây mềm mại hơn so với hầu hết các loại xơ thực vật của nhóm 53.05 và cũng mịn hơn. Xơ của nhóm này bao gồm: (1) Đay thiên nhiên gồm hai chủng loại chính là đay Corchorus capsularis hay đay trắng và đay Corchorus olitorius hay đay đỏ; (2) Hibiscus cannabinus (gai Hibiscus, Kenaf); (3) Hibiscus sabdariffa (gai Roselle); (4) Abutilon avicennae; (5) Xơ của cây đậu chổi; (6) Urena lobata và Urena sinuata; (7) Crotalaria juncea (gai Ấn Độ, Sunn); (8) Sida; (9) Thespesia; (10) Abroma augusta.",
        contentEn: "This heading covers all textile fibres extracted from the stems of dicotyledonous plants, other than flax (heading 53.01), true hemp (heading 53.02) and ramie (heading 53.05). The textile bast fibres classified here are softer to the touch than most of the vegetable fibres of heading 53.05 and are also finer. The fibres of this heading include: (1) True jute of two principal varieties - Corchorus capsularis (white jute) and Corchorus olitorius (red jute/Tossa); (2) Hibiscus cannabinus (Hibiscus hemp, Kenaf); (3) Hibiscus sabdariffa (Roselle hemp); (4) Abutilon avicennae; (5) Broom fibres; (6) Urena lobata and Urena sinuata; (7) Crotalaria juncea (Indian hemp, Sunn); (8) Sida; (9) Thespesia; (10) Abroma augusta."
      },
      {
        code: "53.05",
        titleVi: "Xơ dừa, xơ chuối abaca (gai dầu Manila hoặc Musa textilis Nee), xơ gai ramie và xơ dệt gốc thực vật khác, chưa được ghi hoặc chi tiết ở nơi khác, thô hoặc đã chế biến nhưng chưa kéo thành sợi; tô (tow), xơ vụn và phế liệu của các loại xơ này (kể cả phế liệu sợi và sợi tái chế)",
        titleEn: "Coconut, abaca (Manila hemp or Musa textilis Nee), ramie and other vegetable textile fibres, not elsewhere specified or included, raw or processed but not spun; tow, noils and waste of these fibres (including yarn waste and garnetted stock)",
        contentVi: "Nhóm này bao gồm các sợi dệt gốc thực vật thu được từ lá hoặc quả của một số loại cây có một lá mầm hoặc từ thân của các loại cây 2 lá mầm thuộc họ urticaceae, chưa được nêu hay chi tiết ở bất kỳ nhóm nào khác. Những sợi này đa số thô và dày hơn các sợi dệt libe thuộc nhóm 53.03. Các sợi dệt từ gốc thực vật đã phân loại ở đây bao gồm: Xơ dừa (coir) - thu được từ vỏ ngoài của quả dừa, thô, cứng và màu nâu; Xơ chuối Abaca (gai Manila) - thu được từ lớp vỏ phần cuống của lá một loại cây chuối (Musa textilis Nee); Xơ gai Ramie - thu được từ sợi libe các loại cây Boehmeria tenacissima (Rhea, xơ gai ramie xanh) và Boehmeria nivea (cỏ Trung Quốc, gai ramie trắng); Xơ Alfa hoặc esparto; Các loại xơ khác như xơ cây lô hội, xơ gai Haiti, xơ cây thùa sợi, xơ Maguey, xơ gai Mauritius, xơ gai New Zealand, xơ than bùn, xơ dứa, xơ Pita, xơ cây đuôi hổ, xơ cây Xidan.",
        contentEn: "This heading covers vegetable textile fibres obtained from the leaves or fruit of certain monocotyledonous plants or from the stems of dicotyledonous plants of the family urticaceae, not specified or included in any other heading. These fibres are in most cases coarser and thicker than the textile bast fibres of heading 53.03. The vegetable textile fibres classified here include: Coconut (coir) - obtained from the external covering of the nut, coarse, brittle and brown; Abaca (Manila hemp) - obtained from the sheathing leaf stalks of the Musa textilis Nee banana tree; Ramie - obtained from the bast of Boehmeria tenacissima (Rhea, green ramie) and Boehmeria nivea (China grass, white ramie); Alfa or esparto fibres; Other fibres including aloe, Haiti hemp, henequen, Maguey, Mauritius hemp, New Zealand hemp, peat fibre, pineapple, Pita, Sansevieria, Sisal."
      },
      {
        code: "53.06",
        titleVi: "Sợi lanh",
        titleEn: "Flax yarn",
        contentVi: "Nhóm này bao gồm các sợi đơn thu được bằng cách kéo các sợi thô (roving) từ xơ lanh thuộc nhóm 53.01 và sợi xe (folded) hoặc sợi cáp được sản xuất bằng cách kết hợp các sợi đơn đó. Tuy nhiên, chúng bị loại khỏi nhóm này nếu các sợi trên thuộc phạm vi định nghĩa về dây xe, chão bện, v.v... (nhóm 56.07). Sợi được phân loại trong nhóm này dù được hoặc không được đóng gói để bán lẻ hoặc chế biến cách khác. Sợi trộn kim loại, bao gồm sợi lanh kết hợp với sợi kim loại theo tỷ lệ bất kỳ thì bị loại trừ (nhóm 56.05).",
        contentEn: "This heading covers single yarns produced by spinning rovings of flax fibres of heading 53.01 and multiple (folded) or cabled yarns produced by combining these single yarns. However, they are excluded from this heading if they fall within the definition of twine, cordage, etc. (heading 56.07). Yarns classified here whether or not put up for retail sale or otherwise processed. Metallised yarn, including flax yarn combined with metal thread in any proportion, is excluded (heading 56.05)."
      },
      {
        code: "53.07",
        titleVi: "Sợi đay hoặc sợi từ các loại xơ libe dệt khác thuộc nhóm 53.03",
        titleEn: "Yarn of jute or of other textile bast fibres of heading 53.03",
        contentVi: "Nhóm này bao gồm sợi đơn và sợi xe thu được từ đay hoặc các xơ libe dệt khác của nhóm 53.03 (ví dụ, kenaf, urena, roselle, v.v.). Tuy nhiên, chúng bị loại khỏi nhóm này nếu các sợi trên thuộc phạm vi định nghĩa về dây xe, chão bện, v.v... (nhóm 56.07). Sợi được phân loại trong nhóm này dù được hoặc không được đóng gói để bán lẻ.",
        contentEn: "This heading covers single and multiple (folded) yarns produced from jute or other textile bast fibres of heading 53.03 (e.g., kenaf, urena, roselle, etc.). However, they are excluded from this heading if they fall within the definition of twine, cordage, etc. (heading 56.07). Yarns classified here whether or not put up for retail sale."
      },
      {
        code: "53.08",
        titleVi: "Sợi từ các loại xơ dệt thực vật khác; sợi giấy",
        titleEn: "Yarn of other vegetable textile fibres; paper yarn",
        contentVi: "Nhóm này bao gồm: (A) Sợi từ các loại xơ dệt thực vật khác, đặc biệt là sợi từ gai dầu, xơ dừa, xơ chuối abaca, xơ gai ramie và các xơ khác của nhóm 53.05; (B) Sợi giấy, là sợi được sản xuất từ các dải giấy hẹp được xoắn hoặc gấp lại. Sợi giấy có thể được phân biệt với các sợi dệt khác bằng sự xuất hiện của các nếp gấp khi mở xoắn. Tuy nhiên, chúng bị loại khỏi nhóm này nếu các sợi trên thuộc phạm vi định nghĩa về dây xe, chão bện, v.v... (nhóm 56.07).",
        contentEn: "This heading covers: (A) Yarn of other vegetable textile fibres, particularly yarn of true hemp, coir, abaca, ramie and other fibres of heading 53.05; (B) Paper yarn, which is yarn produced from narrow strips of paper twisted or folded. Paper yarn can be distinguished from other textile yarns by the appearance of creases when untwisted. However, they are excluded from this heading if they fall within the definition of twine, cordage, etc. (heading 56.07)."
      },
      {
        code: "53.09",
        titleVi: "Vải dệt thoi từ sợi lanh",
        titleEn: "Woven fabrics of flax",
        contentVi: "Nhóm này bao gồm các loại vải dệt thoi (như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI) làm từ sợi lanh của nhóm 53.06. Vải có thể chưa được tẩy, đã tẩy trắng, đã nhuộm, dệt từ sợi có màu khác nhau, hoặc đã in. Nhóm này không bao gồm vải dệt thuộc các Chương 57 đến 59.",
        contentEn: "This heading covers woven fabrics (as defined in Part (I) (C) of the General Explanatory Note to Section XI) made of flax yarn of heading 53.06. The fabrics may be unbleached, bleached, dyed, made of yarns of different colours, or printed. The heading does not cover woven fabrics of Chapters 57 to 59."
      },
      {
        code: "53.10",
        titleVi: "Vải dệt thoi từ đay hoặc từ xơ libe dệt khác thuộc nhóm 53.03",
        titleEn: "Woven fabrics of jute or of other textile bast fibres of heading 53.03",
        contentVi: "Nhóm này bao gồm các loại vải dệt thoi (như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI) làm từ sợi đay hoặc từ sợi của các xơ libe dệt khác thuộc nhóm 53.03 (ví dụ, kenaf, urena, roselle, v.v.). Nhóm này không bao gồm vải dệt thuộc các Chương 57 đến 59.",
        contentEn: "This heading covers woven fabrics (as defined in Part (I) (C) of the General Explanatory Note to Section XI) made of jute yarn or yarn of other textile bast fibres of heading 53.03 (e.g., kenaf, urena, roselle, etc.). The heading does not cover woven fabrics of Chapters 57 to 59."
      },
      {
        code: "53.11",
        titleVi: "Vải dệt thoi từ các loại xơ dệt thực vật khác; vải dệt thoi từ sợi giấy",
        titleEn: "Woven fabrics of other vegetable textile fibres; woven fabrics of paper yarn",
        contentVi: "Nhóm này bao gồm các loại vải dệt thoi (như đã định nghĩa trong Phần (I) (C) của Chú giải tổng quát Phần XI) làm từ sợi của các xơ dệt thực vật khác (ví dụ, gai dầu, xơ dừa, xơ chuối abaca, xơ gai ramie, v.v.) và vải dệt thoi từ sợi giấy. Nhóm này không bao gồm vải dệt thuộc các Chương 57 đến 59 (ví dụ, vải dùng để rây sàng của nhóm 59.11).",
        contentEn: "This heading covers woven fabrics (as defined in Part (I) (C) of the General Explanatory Note to Section XI) made of yarn of other vegetable textile fibres (e.g., true hemp, coir, abaca, ramie, etc.) and woven fabrics of paper yarn. The heading does not cover woven fabrics of Chapters 57 to 59 (e.g., bolting cloth of heading 59.11)."
      }
    ]
  },
  {
    chapter: 54,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Sợi filament nhân tạo; dải và các dạng tương tự từ nguyên liệu dệt nhân tạo",
    titleEn: "Man-made filaments; strip and the like of man-made textile materials",
    notesVi: [
      "Trong toàn bộ Danh mục, thuật ngữ 'sợi nhân tạo' có nghĩa là những loại sợi staple và sợi filament bằng polyme hữu cơ được sản xuất từ quá trình polyme hoá hoặc xử lý hoá học.",
      "Các nhóm 54.02 và 54.03 không áp dụng cho sợi tô (tow) filament tổng hợp hoặc tái tạo của Chương 55."
    ],
    notesEn: [
      "Throughout the Nomenclature, the term 'man-made fibres' means staple fibres and filaments of organic polymers produced by manufacturing processes.",
      "Headings 54.02 and 54.03 do not apply to synthetic or artificial filament tow of Chapter 55."
    ],
    generalVi: "Chương này bao gồm các loại sợi nhân tạo ở dạng filament (sợi liên tục). Xơ sợi nhân tạo được chia thành hai loại chính: xơ sợi tổng hợp và xơ sợi tái tạo.",
    generalEn: "This Chapter covers man-made fibres in the form of filaments (continuous fibres). Man-made fibres fall into two main categories: synthetic fibres and artificial fibres.",
    headings: [
      { code: "54.01", titleVi: "Chỉ khâu làm từ sợi filament nhân tạo, đã hoặc chưa đóng gói để bán lẻ", titleEn: "Sewing thread of man-made filaments, whether or not put up for retail sale", contentVi: "Nhóm này bao gồm chỉ khâu làm từ sợi filament nhân tạo (tổng hợp hoặc tái tạo).", contentEn: "This heading covers sewing thread made of man-made filaments (synthetic or artificial)." },
      { code: "54.02", titleVi: "Sợi filament tổng hợp (trừ chỉ khâu), chưa đóng gói để bán lẻ", titleEn: "Synthetic filament yarn (other than sewing thread), not put up for retail sale", contentVi: "Nhóm này bao gồm sợi filament tổng hợp như sợi có độ bền cao từ nylon, polyeste và các loại sợi filament tổng hợp khác.", contentEn: "This heading covers synthetic filament yarn including high tenacity yarn of nylon, polyester and other synthetic filament yarns." },
      { code: "54.03", titleVi: "Sợi filament tái tạo (trừ chỉ khâu), chưa đóng gói để bán lẻ", titleEn: "Artificial filament yarn (other than sewing thread), not put up for retail sale", contentVi: "Nhóm này bao gồm sợi filament tái tạo như sợi viscose rayon, sợi cupram rayon và sợi acetate.", contentEn: "This heading covers artificial filament yarn such as viscose rayon, cuprammonium rayon and acetate yarn." },
      { code: "54.04", titleVi: "Sợi monofilament tổng hợp có độ mảnh từ 67 decitex trở lên; dải và các dạng tương tự từ nguyên liệu dệt tổng hợp", titleEn: "Synthetic monofilament of 67 decitex or more; strip and the like of synthetic textile materials", contentVi: "Nhóm này bao gồm sợi monofilament tổng hợp và dải từ nguyên liệu dệt tổng hợp.", contentEn: "This heading covers synthetic monofilament and strip of synthetic textile materials." },
      { code: "54.05", titleVi: "Sợi monofilament tái tạo có độ mảnh từ 67 decitex trở lên; dải và các dạng tương tự từ nguyên liệu dệt tái tạo", titleEn: "Artificial monofilament of 67 decitex or more; strip and the like of artificial textile materials", contentVi: "Nhóm này bao gồm sợi monofilament tái tạo và dải từ nguyên liệu dệt tái tạo.", contentEn: "This heading covers artificial monofilament and strip of artificial textile materials." },
      { code: "54.06", titleVi: "Sợi filament nhân tạo (trừ chỉ khâu), đã đóng gói để bán lẻ", titleEn: "Man-made filament yarn (other than sewing thread), put up for retail sale", contentVi: "Nhóm này bao gồm sợi filament nhân tạo đã đóng gói để bán lẻ.", contentEn: "This heading covers man-made filament yarn put up for retail sale." },
      { code: "54.07", titleVi: "Vải dệt thoi bằng sợi filament tổng hợp", titleEn: "Woven fabrics of synthetic filament yarn", contentVi: "Nhóm này bao gồm vải dệt thoi làm từ sợi filament tổng hợp.", contentEn: "This heading covers woven fabrics of synthetic filament yarn." },
      { code: "54.08", titleVi: "Vải dệt thoi bằng sợi filament tái tạo", titleEn: "Woven fabrics of artificial filament yarn", contentVi: "Nhóm này bao gồm vải dệt thoi làm từ sợi filament tái tạo.", contentEn: "This heading covers woven fabrics of artificial filament yarn." }
    ]
  },
  {
    chapter: 55,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Xơ staple nhân tạo",
    titleEn: "Man-made staple fibres",
    notesVi: [
      "Các nhóm 55.01 và 55.02 chỉ áp dụng đối với tô filament nhân tạo có chiều dài vượt quá 2 m và đáp ứng các tiêu chí kỹ thuật về độ xoắn và độ mảnh."
    ],
    notesEn: [
      "Headings 55.01 and 55.02 apply only to man-made filament tow exceeding 2 m in length and meeting technical specifications for twist and measurement."
    ],
    generalVi: "Chương này bao gồm xơ sợi nhân tạo ở dạng xơ staple (xơ không liên tục) hoặc tô filament, cùng với các sản phẩm làm từ xơ này.",
    generalEn: "This Chapter covers man-made fibres in the form of staple fibres (discontinuous fibres) or filament tow, together with products manufactured from these fibres.",
    headings: [
      { code: "55.01", titleVi: "Tô (tow) filament tổng hợp", titleEn: "Synthetic filament tow", contentVi: "Nhóm này bao gồm tô filament tổng hợp dùng để sản xuất xơ staple tổng hợp.", contentEn: "This heading covers synthetic filament tow used for manufacturing synthetic staple fibres." },
      { code: "55.02", titleVi: "Tô (tow) filament tái tạo", titleEn: "Artificial filament tow", contentVi: "Nhóm này bao gồm tô filament tái tạo như tô từ axetat xenlulo.", contentEn: "This heading covers artificial filament tow such as cellulose acetate tow." },
      { code: "55.03", titleVi: "Xơ staple tổng hợp, chưa chải thô, chưa chải kỹ hoặc chưa gia công cách khác để kéo sợi", titleEn: "Synthetic staple fibres, not carded, combed or otherwise processed for spinning", contentVi: "Nhóm này bao gồm xơ staple tổng hợp chưa qua xử lý để kéo sợi.", contentEn: "This heading covers synthetic staple fibres not yet processed for spinning." },
      { code: "55.04", titleVi: "Xơ staple tái tạo, chưa chải thô, chưa chải kỹ hoặc chưa gia công cách khác để kéo sợi", titleEn: "Artificial staple fibres, not carded, combed or otherwise processed for spinning", contentVi: "Nhóm này bao gồm xơ staple tái tạo chưa qua xử lý để kéo sợi.", contentEn: "This heading covers artificial staple fibres not yet processed for spinning." },
      { code: "55.05", titleVi: "Phế liệu từ xơ nhân tạo", titleEn: "Waste of man-made fibres", contentVi: "Nhóm này bao gồm phế liệu xơ nhân tạo bao gồm phế liệu xơ, phế liệu sợi và nguyên liệu tái chế.", contentEn: "This heading covers waste of man-made fibres including fibre waste, yarn waste and garnetted stock." },
      { code: "55.06", titleVi: "Xơ staple tổng hợp, đã chải thô, chải kỹ hoặc gia công cách khác để kéo sợi", titleEn: "Synthetic staple fibres, carded, combed or otherwise processed for spinning", contentVi: "Nhóm này bao gồm xơ staple tổng hợp đã qua xử lý để kéo sợi.", contentEn: "This heading covers synthetic staple fibres processed for spinning." },
      { code: "55.07", titleVi: "Xơ staple tái tạo, đã chải thô, chải kỹ hoặc gia công cách khác để kéo sợi", titleEn: "Artificial staple fibres, carded, combed or otherwise processed for spinning", contentVi: "Nhóm này bao gồm xơ staple tái tạo đã qua xử lý để kéo sợi.", contentEn: "This heading covers artificial staple fibres processed for spinning." },
      { code: "55.08", titleVi: "Chỉ khâu làm từ xơ staple nhân tạo", titleEn: "Sewing thread of man-made staple fibres", contentVi: "Nhóm này bao gồm chỉ khâu làm từ xơ staple nhân tạo.", contentEn: "This heading covers sewing thread of man-made staple fibres." },
      { code: "55.09", titleVi: "Sợi từ xơ staple tổng hợp, chưa đóng gói để bán lẻ", titleEn: "Yarn of synthetic staple fibres, not put up for retail sale", contentVi: "Nhóm này bao gồm sợi từ xơ staple tổng hợp chưa đóng gói để bán lẻ.", contentEn: "This heading covers yarn of synthetic staple fibres not put up for retail sale." },
      { code: "55.10", titleVi: "Sợi từ xơ staple tái tạo, chưa đóng gói để bán lẻ", titleEn: "Yarn of artificial staple fibres, not put up for retail sale", contentVi: "Nhóm này bao gồm sợi từ xơ staple tái tạo chưa đóng gói để bán lẻ.", contentEn: "This heading covers yarn of artificial staple fibres not put up for retail sale." },
      { code: "55.11", titleVi: "Sợi từ xơ staple nhân tạo, đã đóng gói để bán lẻ", titleEn: "Yarn of man-made staple fibres, put up for retail sale", contentVi: "Nhóm này bao gồm sợi từ xơ staple nhân tạo đã đóng gói để bán lẻ.", contentEn: "This heading covers yarn of man-made staple fibres put up for retail sale." },
      { code: "55.12", titleVi: "Vải dệt thoi từ xơ staple tổng hợp, có tỷ trọng từ 85% trở lên", titleEn: "Woven fabrics of synthetic staple fibres, containing 85% or more", contentVi: "Nhóm này bao gồm vải dệt thoi có tỷ trọng xơ staple tổng hợp từ 85% trở lên.", contentEn: "This heading covers woven fabrics containing 85% or more of synthetic staple fibres." },
      { code: "55.13", titleVi: "Vải dệt thoi từ xơ staple tổng hợp pha bông, định lượng không quá 170 g/m²", titleEn: "Woven fabrics of synthetic staple fibres mixed with cotton, weight not exceeding 170 g/m²", contentVi: "Nhóm này bao gồm vải dệt thoi từ xơ staple tổng hợp pha bông, định lượng không quá 170 g/m².", contentEn: "This heading covers woven fabrics of synthetic staple fibres mixed with cotton, weighing not more than 170 g/m²." },
      { code: "55.14", titleVi: "Vải dệt thoi từ xơ staple tổng hợp pha bông, định lượng trên 170 g/m²", titleEn: "Woven fabrics of synthetic staple fibres mixed with cotton, weight exceeding 170 g/m²", contentVi: "Nhóm này bao gồm vải dệt thoi từ xơ staple tổng hợp pha bông, định lượng trên 170 g/m².", contentEn: "This heading covers woven fabrics of synthetic staple fibres mixed with cotton, weighing more than 170 g/m²." },
      { code: "55.15", titleVi: "Các loại vải dệt thoi khác từ xơ staple tổng hợp", titleEn: "Other woven fabrics of synthetic staple fibres", contentVi: "Nhóm này bao gồm các loại vải dệt thoi khác từ xơ staple tổng hợp.", contentEn: "This heading covers other woven fabrics of synthetic staple fibres." },
      { code: "55.16", titleVi: "Vải dệt thoi từ xơ staple tái tạo", titleEn: "Woven fabrics of artificial staple fibres", contentVi: "Nhóm này bao gồm vải dệt thoi từ xơ staple tái tạo.", contentEn: "This heading covers woven fabrics of artificial staple fibres." }
    ]
  },
  {
    chapter: 56,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Mền xơ, phớt và các sản phẩm không dệt; các loại sợi đặc biệt; sợi xe, chão bện, thừng và cáp và các sản phẩm của chúng",
    titleEn: "Wadding, felt and nonwovens; special yarns; twine, cordage, ropes and cables and articles thereof",
    notesVi: ["Chương này không bao gồm: mền xơ, phớt hoặc sản phẩm không dệt đã ngâm tẩm, tráng hoặc phủ chất hoặc chế phẩm ở đó vật liệu dệt được coi như vật mang.", "Thuật ngữ 'phớt' kể cả phớt xuyên kim và vải được cấu tạo từ một màng bằng xơ dệt được liên kết bởi khâu đính chính xơ của màng đó."],
    notesEn: ["This Chapter does not cover: wadding, felt or nonwovens, impregnated, coated or covered with substances or preparations where the textile material is present merely as a carrying medium.", "The term 'felt' includes needleloom felt and fabrics consisting of a web of textile fibres the cohesion of which has been enhanced by a stitch-bonding process."],
    generalVi: "Chương này bao gồm mền xơ, phớt và các sản phẩm không dệt; các loại sợi đặc biệt như sợi sơnin, sợi quấn; sợi xe, chão bện, thừng và cáp; lưới; và các sản phẩm khác từ các vật liệu này.",
    generalEn: "This Chapter covers wadding, felt and nonwovens; special yarns such as chenille yarn and gimped yarn; twine, cordage, ropes and cables; nets; and other articles of these materials.",
    headings: [
      { code: "56.01", titleVi: "Mền xơ bằng vật liệu dệt và các sản phẩm của nó; xơ vụn, bụi xơ và kết xơ", titleEn: "Wadding of textile materials and articles thereof; textile flock, textile dust and mill neps", contentVi: "Nhóm này bao gồm mền xơ và xơ vụn (chiều dài không quá 5 mm), bụi xơ và kết xơ.", contentEn: "This heading covers wadding, textile flock (fibres not exceeding 5 mm in length), textile dust and mill neps." },
      { code: "56.02", titleVi: "Phớt, đã hoặc chưa ngâm tẩm, tráng, phủ hoặc ép lớp", titleEn: "Felt, whether or not impregnated, coated, covered or laminated", contentVi: "Phớt thu được bởi quá trình ép chồng nhiều lớp xơ dệt. Nhóm này bao gồm phớt xuyên kim và vải khâu đính.", contentEn: "Felt is obtained by superimposing layers of textile fibres. This heading includes needleloom felt and stitch-bonded fabrics." },
      { code: "56.03", titleVi: "Các sản phẩm không dệt, đã hoặc chưa ngâm tẩm, tráng, phủ hoặc ép lớp", titleEn: "Nonwovens, whether or not impregnated, coated, covered or laminated", contentVi: "Sản phẩm không dệt là các cấu trúc được tạo thành từ xơ hoặc sợi filament được liên kết bằng ma sát, kết dính hoặc liên kết bằng nhiệt hoặc hóa chất.", contentEn: "Nonwovens are structures of fibres or filaments bonded by friction, cohesion, or thermal or chemical bonding." },
      { code: "56.04", titleVi: "Chỉ và sợi bện cao su, đã bọc bằng vật liệu dệt; sợi dệt đã ngâm tẩm, tráng, phủ hoặc bọc bằng cao su hoặc plastic", titleEn: "Rubber thread and cord, textile covered; textile yarn impregnated, coated, covered or sheathed with rubber or plastics", contentVi: "Nhóm này bao gồm chỉ và sợi bện cao su đã bọc bằng vật liệu dệt.", contentEn: "This heading covers rubber thread and cord, textile covered." },
      { code: "56.05", titleVi: "Sợi trộn kim loại", titleEn: "Metallised yarn", contentVi: "Nhóm này bao gồm sợi trộn kim loại, kết hợp với kim loại ở dạng chỉ, dải hoặc bột.", contentEn: "This heading covers metallised yarn combined with metal in the form of thread, strip or powder." },
      { code: "56.06", titleVi: "Sợi quấn; sợi sơnin; sợi vòng", titleEn: "Gimped yarn; chenille yarn; loop wale-yarn", contentVi: "Nhóm này bao gồm sợi quấn, sợi sơnin và sợi vòng.", contentEn: "This heading covers gimped yarn, chenille yarn and loop wale-yarn." },
      { code: "56.07", titleVi: "Sợi xe, chão bện, thừng và cáp", titleEn: "Twine, cordage, ropes and cables", contentVi: "Nhóm này bao gồm sợi xe, chão bện, thừng và cáp từ các loại xơ dệt khác nhau.", contentEn: "This heading covers twine, cordage, ropes and cables of various textile fibres." },
      { code: "56.08", titleVi: "Lưới thắt nút từ sợi xe, chão bện hoặc thừng; lưới đánh cá và các loại lưới khác", titleEn: "Knotted netting of twine, cordage or rope; made up fishing nets and other made up nets", contentVi: "Nhóm này bao gồm lưới thắt nút và lưới đánh cá.", contentEn: "This heading covers knotted netting and made up fishing nets." },
      { code: "56.09", titleVi: "Các sản phẩm bằng sợi, sợi xe, chão bện, thừng hoặc cáp, chưa được ghi ở nơi khác", titleEn: "Articles of yarn, twine, cordage, rope or cables, not elsewhere specified", contentVi: "Nhóm này bao gồm các sản phẩm từ sợi xe, thừng hoặc cáp không được chi tiết ở nơi khác.", contentEn: "This heading covers articles of yarn, twine, cordage, rope or cables not elsewhere specified." }
    ]
  },
  {
    chapter: 57,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Thảm và các loại hàng dệt trải sàn khác",
    titleEn: "Carpets and other textile floor coverings",
    notesVi: ["Theo mục đích của Chương này, thuật ngữ 'thảm và các loại hàng dệt trải sàn khác' có nghĩa là các loại hàng dệt trải sàn mà bề mặt tiếp xúc với sàn khi sử dụng là mặt sử dụng của vải."],
    notesEn: ["For the purposes of this Chapter, the term 'carpets and other textile floor coverings' means floor coverings in which textile materials serve as the exposed surface when in use."],
    generalVi: "Chương này bao gồm các loại thảm và hàng dệt trải sàn khác. Bao gồm thảm dệt thắt nút, thảm dệt thoi, thảm chần, thảm từ phớt và các loại thảm khác.",
    generalEn: "This Chapter covers carpets and other textile floor coverings. It includes knotted carpets, woven carpets, tufted carpets, carpets of felt, and other carpets.",
    headings: [
      { code: "57.01", titleVi: "Thảm và các loại hàng dệt trải sàn khác, dệt thắt nút", titleEn: "Carpets and other textile floor coverings, knotted", contentVi: "Nhóm này bao gồm các loại thảm dệt thắt nút (thảm 'phương Đông').", contentEn: "This heading covers knotted carpets (Oriental carpets)." },
      { code: "57.02", titleVi: "Thảm và các loại hàng dệt trải sàn khác, dệt thoi, không chần hoặc không phủ xơ vụn", titleEn: "Carpets and other textile floor coverings, woven, not tufted or flocked", contentVi: "Nhóm này bao gồm thảm dệt thoi như Wilton, Axminster, Kelem, Schumacks.", contentEn: "This heading covers woven carpets such as Wilton, Axminster, Kelem, Schumacks." },
      { code: "57.03", titleVi: "Thảm và các loại hàng dệt trải sàn khác, đã chần (tufted)", titleEn: "Carpets and other textile floor coverings, tufted", contentVi: "Nhóm này bao gồm thảm chần được làm bằng cách lồng sợi vào vải nền.", contentEn: "This heading covers tufted carpets made by inserting yarn into a ground fabric." },
      { code: "57.04", titleVi: "Thảm và các loại hàng dệt trải sàn khác, bằng phớt", titleEn: "Carpets and other textile floor coverings, of felt", contentVi: "Nhóm này bao gồm thảm làm từ phớt.", contentEn: "This heading covers carpets of felt." },
      { code: "57.05", titleVi: "Thảm và các loại hàng dệt trải sàn khác", titleEn: "Other carpets and other textile floor coverings", contentVi: "Nhóm này bao gồm các loại thảm khác không thuộc các nhóm trước.", contentEn: "This heading covers other carpets not classified in the preceding headings." }
    ]
  },
  {
    chapter: 58,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Các loại vải dệt thoi đặc biệt; các loại vải dệt tạo búi; hàng ren; thảm trang trí; hàng trang trí; hàng thêu",
    titleEn: "Special woven fabrics; tufted textile fabrics; lace; tapestries; trimmings; embroidery",
    notesVi: ["Chương này không áp dụng cho các loại vải dệt nêu trong Chú giải 1 của Chương 59, đã ngâm tẩm, tráng, phủ hoặc ép lớp.", "Nhóm 58.01 cũng bao gồm các loại vải dệt thoi có sợi ngang nổi vòng, chưa được cắt phần nổi."],
    notesEn: ["This Chapter does not apply to textile fabrics referred to in Note 1 to Chapter 59, impregnated, coated, covered or laminated.", "Heading 58.01 also includes weft pile fabrics which have not yet had the floats cut."],
    generalVi: "Chương này bao gồm nhiều loại sản phẩm dệt đặc biệt như vải nổi vòng, vải sơnin, vải khăn lông, vải dệt quấn, vải tuyn, ren, thảm trang trí, vải dệt thoi khổ hẹp, nhãn, dải trang trí và thêu.",
    generalEn: "This Chapter covers special textile products such as pile fabrics, chenille fabrics, terry towelling, gauze, tulles, lace, tapestries, narrow woven fabrics, labels, ornamental trimmings and embroidery.",
    headings: [
      { code: "58.01", titleVi: "Các loại vải dệt nổi vòng và các loại vải sơnin", titleEn: "Woven pile fabrics and chenille fabrics", contentVi: "Nhóm này bao gồm vải dệt nổi vòng và vải sơnin.", contentEn: "This heading covers woven pile fabrics and chenille fabrics." },
      { code: "58.02", titleVi: "Vải khăn lông và các loại vải dệt thoi tạo vòng lông tương tự; các loại vải dệt chần sợi nổi vòng", titleEn: "Terry towelling and similar woven terry fabrics; tufted textile fabrics", contentVi: "Nhóm này bao gồm vải khăn lông và vải dệt chần sợi nổi vòng.", contentEn: "This heading covers terry towelling and tufted textile fabrics." },
      { code: "58.03", titleVi: "Vải dệt quấn (gauze)", titleEn: "Gauze", contentVi: "Vải dệt quấn là loại vải có cấu trúc thưa trong đó các sợi dọc xoắn quanh nhau.", contentEn: "Gauze is a fabric of open structure in which warp threads are twisted around each other." },
      { code: "58.04", titleVi: "Các loại vải tuyn và vải lưới khác; ren", titleEn: "Tulles and other net fabrics; lace", contentVi: "Nhóm này bao gồm vải tuyn, vải lưới và ren.", contentEn: "This heading covers tulles, net fabrics and lace." },
      { code: "58.05", titleVi: "Thảm trang trí dệt tay kiểu Gobelins, Flanders, Aubusson, Beauvais", titleEn: "Hand-woven tapestries of the type Gobelins, Flanders, Aubusson, Beauvais", contentVi: "Nhóm này bao gồm thảm trang trí dệt tay và thảm trang trí thêu tay.", contentEn: "This heading covers hand-woven tapestries and needle-worked tapestries." },
      { code: "58.06", titleVi: "Vải dệt thoi khổ hẹp; các loại vải khổ hẹp chỉ có sợi dọc (bolducs)", titleEn: "Narrow woven fabrics; narrow fabrics consisting only of warp (bolducs)", contentVi: "Nhóm này bao gồm vải dệt thoi khổ hẹp (chiều rộng không quá 30 cm).", contentEn: "This heading covers narrow woven fabrics (width not exceeding 30 cm)." },
      { code: "58.07", titleVi: "Nhãn, phù hiệu và các sản phẩm tương tự bằng vật liệu dệt, chưa thêu", titleEn: "Labels, badges and similar articles of textile materials, not embroidered", contentVi: "Nhóm này bao gồm nhãn, phù hiệu chưa thêu.", contentEn: "This heading covers labels, badges not embroidered." },
      { code: "58.08", titleVi: "Dây tết bện; các sản phẩm trang trí; quả tua, quả bông", titleEn: "Braids; ornamental trimmings; tassels, pompons", contentVi: "Nhóm này bao gồm dây tết bện, sản phẩm trang trí, quả tua và quả bông.", contentEn: "This heading covers braids, ornamental trimmings, tassels and pompons." },
      { code: "58.09", titleVi: "Vải dệt thoi từ sợi kim loại và sợi trộn kim loại", titleEn: "Woven fabrics of metal thread and metallised yarn", contentVi: "Nhóm này bao gồm vải dệt thoi từ sợi kim loại.", contentEn: "This heading covers woven fabrics of metal thread." },
      { code: "58.10", titleVi: "Hàng thêu ở dạng mảnh, dải hoặc mẫu hoa văn", titleEn: "Embroidery in the piece, in strips or in motifs", contentVi: "Nhóm này bao gồm hàng thêu ở dạng mảnh, dải hoặc mẫu hoa văn.", contentEn: "This heading covers embroidery in the piece, in strips or in motifs." },
      { code: "58.11", titleVi: "Các sản phẩm dệt đã chần dạng tấm", titleEn: "Quilted textile products in the piece", contentVi: "Nhóm này bao gồm các sản phẩm dệt đã chần.", contentEn: "This heading covers quilted textile products." }
    ]
  },
  {
    chapter: 59,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Các loại vải dệt đã được ngâm tẩm, tráng, phủ hoặc ép lớp; các mặt hàng dệt thích hợp dùng trong công nghiệp",
    titleEn: "Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind suitable for industrial use",
    notesVi: [
      "Trừ khi có yêu cầu khác, theo mục đích của Chương này, thuật ngữ 'vải dệt' chỉ áp dụng cho các loại vải dệt thoi thuộc các Chương từ 50 đến 55 và các nhóm 58.03 và 58.06, các loại vải tết bện và dây trang trí dạng mảnh thuộc nhóm 58.08 và các loại vải dệt kim hoặc móc thuộc các nhóm từ 60.02 đến 60.06.",
      "Nhóm 59.03 áp dụng cho: (a) Vải dệt, đã được ngâm tẩm, tráng, phủ hoặc ép với plastic, không kể trọng lượng trên m² và không kể tính chất của thành phần plastic (đặc hoặc xốp), trừ: (1) Các loại vải dệt mà sự ngâm tẩm, tráng hoặc phủ không thể nhận biết bằng mắt thường; (2) Các sản phẩm không thể, không bị gãy, được cuộn xung quanh một trục có đường kính 7 mm, ở nhiệt độ trong khoảng từ 15°C đến 30°C; (3) Các sản phẩm mà vải dệt hoàn toàn được bọc trong hoặc được tráng hay phủ trên cả hai mặt bằng plastic.",
      "Theo mục đích của nhóm 59.05, thuật ngữ 'phủ tường bằng vật liệu dệt' áp dụng cho các sản phẩm dạng cuộn, có chiều rộng không dưới 45 cm, thích hợp để dùng trang trí tường hoặc trần, gồm có bề mặt dệt đã được gắn cố định trên một lớp bồi hoặc đã được xử lý ở mặt sau."
    ],
    notesEn: [
      "Except where the context otherwise requires, for the purposes of this Chapter the expression 'textile fabrics' applies only to the woven fabrics of Chapters 50 to 55 and headings 58.03 and 58.06, the braids and ornamental trimmings in the piece of heading 58.08 and the knitted or crocheted fabrics of headings 60.02 to 60.06.",
      "Heading 59.03 applies to: (a) Textile fabrics, impregnated, coated, covered or laminated with plastics, whatever the weight per square metre and whatever the nature of the plastic material (compact or cellular), other than: (1) Fabrics in which the impregnation, coating or covering cannot be seen with the naked eye; (2) Products which cannot, without fracturing, be bent manually around a cylinder of a diameter of 7 mm, at a temperature between 15°C and 30°C; (3) Products in which the textile fabric is either completely embedded in plastics or entirely coated or covered on both sides with such material.",
      "For the purposes of heading 59.05, the expression 'textile wall coverings' applies to products in rolls, of a width of not less than 45 cm, suitable for wall or ceiling decoration, consisting of a textile surface which has been fixed on a backing or has been treated on the back."
    ],
    generalVi: "Chương này bao gồm các loại vải dệt đã được ngâm tẩm, tráng, phủ hoặc ép lớp với các loại vật liệu khác nhau như plastic, cao su, dầu, sáp và các chất khác. Chương này cũng bao gồm các mặt hàng dệt thích hợp dùng trong công nghiệp như vải mành dùng làm lốp, vải bạt đã chuẩn bị để vẽ, vải lọc và vải sàng.",
    generalEn: "This Chapter covers textile fabrics which have been impregnated, coated, covered or laminated with various materials such as plastics, rubber, oil, wax and other substances. The Chapter also covers textile articles suitable for industrial use such as tyre cord fabrics, prepared painting canvas, filtering and straining cloths.",
    headings: [
      { code: "59.01", titleVi: "Vải dệt được phủ keo hoặc các chất có tinh bột, loại dùng làm bìa sách ngoài hoặc các mục đích tương tự; vải can; vải bạt đã chuẩn bị để vẽ; vải hồ cứng và các loại vải dệt tương tự dùng làm cốt mũ", titleEn: "Textile fabrics coated with gum or amylaceous substances, of a kind used for the outer covers of books or the like; tracing cloth; prepared painting canvas; buckram and similar stiffened textile fabrics of a kind used for hat foundations", contentVi: "Nhóm này bao gồm: (1) Vải được phủ keo hoặc chất có tinh bột để làm bìa sách; (2) Vải can dùng để sao chép bản vẽ; (3) Vải bạt đã chuẩn bị để vẽ, thường được phủ dầu hạt lanh; (4) Vải hồ cứng dùng làm cốt mũ.", contentEn: "This heading covers: (1) Fabrics coated with gum or amylaceous substances for book covers; (2) Tracing cloth for copying drawings; (3) Prepared painting canvas, usually coated with linseed oil; (4) Buckram for hat foundations." },
      { code: "59.02", titleVi: "Vải mành dùng làm lốp từ sợi có độ bền cao từ ni lông hoặc các polyamit khác, các polyeste hoặc viscose rayon", titleEn: "Tyre cord fabric of high tenacity yarn of nylon or other polyamides, polyesters or viscose rayon", contentVi: "Nhóm này bao gồm vải mành dùng làm lốp, đã hoặc chưa được nhúng hoặc ngâm tẩm với cao su hoặc plastic. Vải này được sử dụng trong sản xuất lốp xe và bao gồm sợi dọc từ các sợi filament song song, được cố định với những khoảng cách nhất định bằng các sợi ngang.", contentEn: "This heading covers tyre cord fabric, whether or not dipped or impregnated with rubber or plastics. This fabric is used in the manufacture of tyres and consists of warp yarns of parallel filament yarns, held at intervals by weft yarns." },
      { code: "59.03", titleVi: "Vải dệt đã được ngâm tẩm, tráng, phủ hoặc ép với plastic, trừ các loại thuộc nhóm 59.02", titleEn: "Textile fabrics impregnated, coated, covered or laminated with plastics, other than those of heading 59.02", contentVi: "Nhóm này bao gồm các loại vải dệt đã được ngâm tẩm, phủ, tráng hoặc ép với plastic (ví dụ như poly vinyl chloride). Các sản phẩm này được sử dụng cho nhiều mục đích như làm vật liệu trang trí nội thất, sản xuất túi xách, áo quần.", contentEn: "This heading covers textile fabrics impregnated, coated, covered or laminated with plastics (e.g., poly vinyl chloride). These products are used for various purposes including furnishing materials, manufacture of handbags, garments." },
      { code: "59.04", titleVi: "Vải sơn, đã hoặc chưa cắt thành hình; các loại trải sàn có một lớp tráng hoặc phủ gắn trên lớp bồi là vật liệu dệt", titleEn: "Linoleum, whether or not cut to shape; floor coverings consisting of a coating or covering applied on a textile backing", contentVi: "Nhóm này bao gồm: (1) Vải sơn - vải có lớp bồi là vật liệu dệt được phủ một mặt bằng chất kết dính đặc gồm dầu hạt lanh đã oxy hóa, nhựa cây và gôm; (2) Các loại trải sàn khác có lớp bồi là vật liệu dệt.", contentEn: "This heading covers: (1) Linoleum - textile backing coated on one side with a compact paste of oxidised linseed oil, resins and gums; (2) Other floor coverings with a textile backing." },
      { code: "59.05", titleVi: "Phủ tường bằng vật liệu dệt", titleEn: "Textile wall coverings", contentVi: "Nhóm này bao gồm các sản phẩm dạng cuộn, có chiều rộng không dưới 45 cm, thích hợp để dùng trang trí tường hoặc trần, gồm có bề mặt dệt đã được gắn cố định trên một lớp bồi hoặc đã được xử lý ở mặt sau.", contentEn: "This heading covers products in rolls, of a width of not less than 45 cm, suitable for wall or ceiling decoration, consisting of a textile surface fixed on a backing or treated on the back." },
      { code: "59.06", titleVi: "Vải dệt được cao su hóa, trừ các loại thuộc nhóm 59.02", titleEn: "Rubberised textile fabrics, other than those of heading 59.02", contentVi: "Nhóm này bao gồm vải dệt được ngâm tẩm, tráng, phủ hoặc ép với cao su. Các sản phẩm này được sử dụng để sản xuất các mặt hàng như vải không thấm nước, băng dính, vải cách điện.", contentEn: "This heading covers textile fabrics impregnated, coated, covered or laminated with rubber. These products are used for manufacturing waterproof fabrics, adhesive tapes, insulating fabrics." },
      { code: "59.07", titleVi: "Vải dệt đã được ngâm tẩm, tráng hoặc phủ loại khác; vải sơn dùng làm phông sân khấu, vải làm nền tranh hoặc các loại tương tự", titleEn: "Textile fabrics otherwise impregnated, coated or covered; painted canvas being theatrical scenery, studio back-cloths or the like", contentVi: "Nhóm này bao gồm vải dệt đã được ngâm tẩm, tráng hoặc phủ với các chất khác ngoài plastic và cao su, ví dụ như dầu, sáp, hắc ín, nhựa đường. Nhóm này cũng bao gồm vải sơn dùng làm phông sân khấu.", contentEn: "This heading covers textile fabrics impregnated, coated or covered with substances other than plastics and rubber, such as oil, wax, tar, asphalt. It also includes painted canvas for theatrical scenery." },
      { code: "59.08", titleVi: "Bấc dệt, đan, hoặc dệt kim, bằng vật liệu dệt, dùng cho đèn, bếp, bật lửa, nến hoặc loại tương tự; vải dùng làm mạng đèn măng xông và vải dệt kim dạng ống làm mạng đèn măng xông", titleEn: "Textile wicks, woven, plaited or knitted, for lamps, stoves, lighters, candles or the like; incandescent gas mantles and tubular knitted gas mantle fabric", contentVi: "Nhóm này bao gồm bấc dệt, đan hoặc dệt kim dùng cho đèn, bếp, bật lửa, nến; vải dùng làm mạng đèn măng xông có hoặc chưa được ngâm tẩm.", contentEn: "This heading covers textile wicks, woven, plaited or knitted, for lamps, stoves, lighters, candles; incandescent gas mantles whether or not impregnated." },
      { code: "59.09", titleVi: "Ống vòi bơm nước và các loại ống dẫn tương tự, bằng vật liệu dệt, đã hoặc chưa lót, bọc ngoài hoặc có các phụ kiện bằng các vật liệu khác", titleEn: "Textile hosepiping and similar textile tubing, with or without lining, armour or accessories of other materials", contentVi: "Nhóm này bao gồm ống vòi bơm nước và các loại ống dẫn tương tự bằng vật liệu dệt, dù đã hoặc chưa được lót bằng cao su hoặc plastic.", contentEn: "This heading covers textile hosepiping and similar tubing of textile materials, whether or not lined with rubber or plastics." },
      { code: "59.10", titleVi: "Băng tải hoặc đai truyền lực hoặc đai tải, bằng vật liệu dệt, đã hoặc chưa ngâm tẩm, tráng, phủ hoặc ép với plastic, hoặc được gia cố bằng kim loại hoặc vật liệu khác", titleEn: "Transmission or conveyor belts or belting, of textile material, whether or not impregnated, coated, covered or laminated with plastics, or reinforced with metal or other material", contentVi: "Nhóm này bao gồm băng tải và đai truyền lực bằng vật liệu dệt, có thể được ngâm tẩm, tráng hoặc gia cố bằng kim loại.", contentEn: "This heading covers transmission and conveyor belts of textile material, which may be impregnated, coated or reinforced with metal." },
      { code: "59.11", titleVi: "Các sản phẩm và mặt hàng dệt, dùng cho mục đích kỹ thuật", titleEn: "Textile products and articles, for technical uses", contentVi: "Nhóm này bao gồm: (a) Vải dệt, phớt và vải lót bằng phớt dùng cho máy chế biến giấy hoặc các máy tương tự; (b) Vải sàng; (c) Vải lọc dùng trong công nghiệp ép dầu hoặc tương tự; (d) Các miếng đệm, đĩa đánh bóng; (e) Túi lọc dùng trong công nghiệp lọc dầu hoặc tương tự.", contentEn: "This heading covers: (a) Woven fabrics, felts and felt-lined fabrics for paper-making or similar machines; (b) Straining cloths; (c) Filtering or straining cloth for oil presses or the like; (d) Polishing discs or pads; (e) Filter bags for oil or similar industrial uses." }
    ]
  },
  {
    chapter: 60,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Các loại hàng dệt kim hoặc móc",
    titleEn: "Knitted or crocheted fabrics",
    notesVi: [
      "Chương này không áp dụng cho: (a) Vải khâu đính thu được bằng cách lấy các xơ dệt từ tấm xơ đó (nhóm 56.02); (b) Vải lưới và lưới (nhóm 56.08); (c) Các loại thảm dệt kim và thảm (nhóm 57.05); (d) Vải lưới và hàng ren móc (nhóm 58.04); (e) Những miếng vải được cắt thành hình chữ nhật (kể cả hình vuông) đã được gia công thêm, các mặt hàng được sản xuất ở dạng hoàn chỉnh sẵn sàng cho sử dụng và các loại vải dệt kim hoặc móc thành các hình dạng (Chương 61, 62 và 63).",
      "Nhóm 60.01 bao gồm các loại vải nổi vòng dệt kim, kể cả các loại vải 'vòng lông dài' và vải khăn lông."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Stitch-bonded fabrics obtained by picking up textile fibres from a web of such fibres (heading 56.02); (b) Nets and netting of heading 56.08; (c) Knitted carpets and carpeting (heading 57.05); (d) Net fabrics and crochet lace (heading 58.04); (e) Pieces of fabric cut to rectangular (including square) shape which have been subjected to a further operation, articles produced in the finished state ready for use, and fabrics knitted or crocheted to shape (Chapters 61, 62 and 63).",
      "Heading 60.01 includes knitted pile fabrics, including 'long pile' fabrics and terry fabrics."
    ],
    generalVi: "Chương này bao gồm các loại vải dệt kim hoặc móc ở dạng mảnh (kể cả mảnh hình ống) hoặc chỉ cắt đơn giản thành hình chữ nhật. Vải dệt kim được tạo thành bởi các vòng sợi liên kết với nhau theo chiều ngang (dệt kim sợi ngang) hoặc theo chiều dọc (dệt kim sợi dọc). Vải móc được tạo thành bởi các sợi liên tục được gia công bằng kim móc để tạo ra hàng loạt các vòng xâu qua các vòng khác.",
    generalEn: "This Chapter covers knitted or crocheted fabrics in the piece (including tubular fabric) or simply cut to rectangular shape. Knitted fabrics are formed by interlocking loops of yarn either horizontally (weft knitting) or vertically (warp knitting). Crocheted fabrics are formed by continuous yarns worked with a crochet hook to create series of interlocking loops.",
    headings: [
      { code: "60.01", titleVi: "Vải nổi vòng (pile), kể cả các loại vải 'vòng lông dài' (long pile) và khăn lông (terry), dệt kim hoặc móc", titleEn: "Pile fabrics, including 'long pile' fabrics and terry fabrics, knitted or crocheted", contentVi: "Không giống như vải dệt thoi thuộc nhóm 58.01, các sản phẩm của nhóm này thu được bằng dệt kim. Các phương pháp sản xuất chính bao gồm: máy dệt kim đan tròn tạo vải nổi vòng giống nhung, máy dệt kim sợi dọc tạo hai mảnh vải được tách ra bằng cắt, và sợi từ cúi đã chải thô được lồng vào các vòng của vải nền để tạo vải 'vòng lông dài'.", contentEn: "Unlike the woven fabrics of heading 58.01, the products of this heading are obtained by knitting. Main production methods include: circular knitting machine producing velvet-like pile fabric, warp knitting machine producing two fabrics separated by cutting, and fibres from a carded sliver inserted into loops of a ground fabric to create 'long pile' fabrics." },
      { code: "60.02", titleVi: "Vải dệt kim hoặc móc có khổ rộng không quá 30 cm, có hàm lượng sợi đàn hồi hoặc sợi cao su chiếm từ 5% trở lên tính theo khối lượng, trừ loại thuộc nhóm 60.01", titleEn: "Knitted or crocheted fabrics of a width not exceeding 30 cm, containing by weight 5% or more of elastomeric yarn or rubber thread, other than those of heading 60.01", contentVi: "Loại trừ vải có tạo vòng lông nhóm 60.01, nhóm này bao gồm vải dệt kim hoặc móc có khổ rộng không quá 30 cm, có tỷ trọng sợi đàn hồi hoặc sợi cao su từ 5% trở lên. Sợi đàn hồi được định nghĩa tại Chú giải 13 Phần XI.", contentEn: "Other than the pile fabrics of heading 60.01, this heading covers knitted or crocheted fabrics of a width not exceeding 30 cm, containing by weight 5% or more of elastomeric yarn or rubber thread. Elastomeric yarn is defined in Note 13 to Section XI." },
      { code: "60.03", titleVi: "Vải dệt kim hoặc móc có khổ rộng không quá 30 cm, trừ loại thuộc nhóm 60.01 hoặc 60.02", titleEn: "Knitted or crocheted fabrics of a width not exceeding 30 cm, other than those of heading 60.01 or 60.02", contentVi: "Loại trừ vải tạo vòng lông nhóm 60.01, nhóm này bao gồm vải dệt kim hoặc móc có khổ rộng không quá 30 cm, không chứa sợi đàn hồi hoặc sợi cao su hoặc có tỷ trọng sợi đàn hồi hoặc sợi cao su dưới 5%.", contentEn: "Other than the pile fabrics of heading 60.01, this heading covers knitted or crocheted fabrics of a width not exceeding 30 cm, containing no elastomeric yarn or rubber thread or containing by weight less than 5% of such yarn or thread." },
      { code: "60.04", titleVi: "Vải dệt kim hoặc móc có khổ rộng trên 30 cm, có hàm lượng sợi đàn hồi hoặc sợi cao su chiếm từ 5% trở lên tính theo khối lượng, trừ các loại thuộc nhóm 60.01", titleEn: "Knitted or crocheted fabrics of a width exceeding 30 cm, containing by weight 5% or more of elastomeric yarn or rubber thread, other than those of heading 60.01", contentVi: "Loại trừ vải có tạo vòng lông thuộc nhóm 60.01, nhóm này bao gồm vải dệt kim hoặc móc có khổ rộng trên 30 cm, có tỷ trọng sợi đàn hồi hoặc sợi cao su từ 5% trở lên. Sợi đàn hồi được định nghĩa tại Chú giải 13 Phần XI.", contentEn: "Other than the pile fabrics of heading 60.01, this heading covers knitted or crocheted fabrics of a width exceeding 30 cm, containing by weight 5% or more of elastomeric yarn or rubber thread. Elastomeric yarn is defined in Note 13 to Section XI." },
      { code: "60.05", titleVi: "Vải dệt kim đan dọc (kể cả các loại làm trên máy dệt kim dệt dải trang trí), trừ loại thuộc các nhóm 60.01 đến 60.04", titleEn: "Warp knit fabrics (including those made on galloon knitting machines), other than those of headings 60.01 to 60.04", contentVi: "Nhóm này bao gồm các loại vải dệt kim đan dọc, trong đó các sợi chạy theo chiều dọc của vải và tạo thành các vòng liên kết với nhau. Loại vải này bao gồm vải tricot, vải raschel và các loại vải dệt kim đan dọc khác.", contentEn: "This heading covers warp knit fabrics, in which the yarns run along the length of the fabric and form interlocking loops. These fabrics include tricot, raschel and other warp knit fabrics." },
      { code: "60.06", titleVi: "Các loại vải dệt kim hoặc móc khác", titleEn: "Other knitted or crocheted fabrics", contentVi: "Nhóm này bao gồm các loại vải dệt kim hoặc móc khác không thuộc các nhóm từ 60.01 đến 60.05, bao gồm vải dệt kim đan ngang (weft knit) như vải jersey, vải interlock, vải rib và các loại vải dệt kim đan ngang khác.", contentEn: "This heading covers other knitted or crocheted fabrics not classified in headings 60.01 to 60.05, including weft knit fabrics such as jersey, interlock, rib and other weft knit fabrics." }
    ]
  },
  {
    chapter: 61,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Quần áo và hàng may mặc phụ trợ, dệt kim hoặc móc",
    titleEn: "Articles of apparel and clothing accessories, knitted or crocheted",
    notesVi: ["Chương này chỉ áp dụng cho những sản phẩm dệt kim hoặc móc đã được may hoặc định hình.", "Chương này không bao gồm: (a) Các sản phẩm thuộc nhóm 62.12; (b) Hàng hóa đã qua sử dụng thuộc nhóm 63.09; (c) Dụng cụ chỉnh hình thuộc nhóm 90.21."],
    notesEn: ["This Chapter applies only to made up knitted or crocheted articles.", "This Chapter does not cover: (a) Goods of heading 62.12; (b) Worn clothing of heading 63.09; (c) Orthopaedic appliances of heading 90.21."],
    generalVi: "Chương này bao gồm các loại quần áo và hàng may mặc phụ trợ dệt kim hoặc móc như áo khoác, bộ com-lê, váy, quần, áo sơ mi, đồ lót, đồ ngủ, đồ thể thao, đồ bơi và các phụ kiện may mặc.",
    generalEn: "This Chapter covers articles of apparel and clothing accessories, knitted or crocheted, including overcoats, suits, dresses, trousers, shirts, underwear, nightwear, sportswear, swimwear and clothing accessories.",
    headings: [
      { code: "61.01", titleVi: "Áo khoác dài, áo khoác xe, áo choàng không tay, áo khoác có mũ và các mặt hàng tương tự dùng cho nam giới hoặc trẻ em trai, dệt kim hoặc móc", titleEn: "Men's or boys' overcoats, car-coats, capes, cloaks, anoraks and similar articles, knitted or crocheted", contentVi: "Nhóm này bao gồm các loại áo khoác ngoài dệt kim hoặc móc dùng cho nam giới hoặc trẻ em trai.", contentEn: "This heading covers knitted or crocheted outer garments for men or boys." },
      { code: "61.02", titleVi: "Áo khoác dài, áo khoác xe, áo choàng không tay, áo khoác có mũ và các mặt hàng tương tự dùng cho phụ nữ hoặc trẻ em gái, dệt kim hoặc móc", titleEn: "Women's or girls' overcoats, car-coats, capes, cloaks, anoraks and similar articles, knitted or crocheted", contentVi: "Nhóm này bao gồm các loại áo khoác ngoài dệt kim hoặc móc dùng cho phụ nữ hoặc trẻ em gái.", contentEn: "This heading covers knitted or crocheted outer garments for women or girls." },
      { code: "61.03", titleVi: "Bộ com-lê, bộ quần áo đồng bộ, áo jacket, quần dài, quần soóc dùng cho nam giới hoặc trẻ em trai, dệt kim hoặc móc", titleEn: "Men's or boys' suits, ensembles, jackets, trousers, shorts, knitted or crocheted", contentVi: "Nhóm này bao gồm bộ com-lê, áo jacket, quần dài, quần soóc dùng cho nam giới hoặc trẻ em trai, dệt kim hoặc móc.", contentEn: "This heading covers suits, jackets, trousers, shorts for men or boys, knitted or crocheted." },
      { code: "61.04", titleVi: "Bộ com-lê, bộ quần áo đồng bộ, áo jacket, váy liền thân, chân váy, quần dài dùng cho phụ nữ hoặc trẻ em gái, dệt kim hoặc móc", titleEn: "Women's or girls' suits, ensembles, jackets, dresses, skirts, trousers, knitted or crocheted", contentVi: "Nhóm này bao gồm bộ com-lê, váy liền thân, chân váy, quần dài dùng cho phụ nữ hoặc trẻ em gái, dệt kim hoặc móc.", contentEn: "This heading covers suits, dresses, skirts, trousers for women or girls, knitted or crocheted." },
      { code: "61.05", titleVi: "Áo sơ mi nam giới hoặc trẻ em trai, dệt kim hoặc móc", titleEn: "Men's or boys' shirts, knitted or crocheted", contentVi: "Nhóm này bao gồm các loại áo sơ mi dệt kim hoặc móc dành cho nam giới hoặc trẻ em trai.", contentEn: "This heading covers knitted or crocheted shirts for men or boys." },
      { code: "61.06", titleVi: "Áo blouse, sơ mi dùng cho phụ nữ hoặc trẻ em gái, dệt kim hoặc móc", titleEn: "Women's or girls' blouses, shirts, knitted or crocheted", contentVi: "Nhóm này bao gồm các loại áo blouse, sơ mi dệt kim hoặc móc dùng cho phụ nữ hoặc trẻ em gái.", contentEn: "This heading covers knitted or crocheted blouses, shirts for women or girls." },
      { code: "61.07", titleVi: "Quần lót, áo ngủ, bộ pyjama, áo choàng tắm dùng cho nam giới hoặc trẻ em trai, dệt kim hoặc móc", titleEn: "Men's or boys' underpants, nightshirts, pyjamas, bathrobes, knitted or crocheted", contentVi: "Nhóm này bao gồm đồ lót, đồ ngủ, áo choàng tắm dùng cho nam giới, dệt kim hoặc móc.", contentEn: "This heading covers underwear, nightwear, bathrobes for men or boys, knitted or crocheted." },
      { code: "61.08", titleVi: "Váy lót, váy ngủ, bộ pyjama, áo choàng tắm dùng cho phụ nữ hoặc trẻ em gái, dệt kim hoặc móc", titleEn: "Women's or girls' slips, nightdresses, pyjamas, bathrobes, knitted or crocheted", contentVi: "Nhóm này bao gồm đồ lót, đồ ngủ, áo choàng tắm dùng cho phụ nữ, dệt kim hoặc móc.", contentEn: "This heading covers underwear, nightwear, bathrobes for women or girls, knitted or crocheted." },
      { code: "61.09", titleVi: "Áo phông, áo ba lỗ và các loại áo lót khác, dệt kim hoặc móc", titleEn: "T-shirts, singlets and other vests, knitted or crocheted", contentVi: "Nhóm này bao gồm áo phông, áo ba lỗ và các loại áo lót khác, dệt kim hoặc móc.", contentEn: "This heading covers T-shirts, singlets and other vests, knitted or crocheted." },
      { code: "61.10", titleVi: "Áo jersey, áo chui đầu, áo cardigan, áo gi-lê, dệt kim hoặc móc", titleEn: "Jerseys, pullovers, cardigans, waistcoats, knitted or crocheted", contentVi: "Nhóm này bao gồm áo jersey, áo chui đầu, áo cardigan, áo gi-lê, dệt kim hoặc móc.", contentEn: "This heading covers jerseys, pullovers, cardigans, waistcoats, knitted or crocheted." },
      { code: "61.11", titleVi: "Quần áo và phụ kiện may mặc cho trẻ em, dệt kim hoặc móc", titleEn: "Babies' garments and clothing accessories, knitted or crocheted", contentVi: "Nhóm này bao gồm quần áo và phụ kiện cho trẻ sơ sinh có chiều cao không quá 86 cm.", contentEn: "This heading covers garments for young children of a body height not exceeding 86 cm." },
      { code: "61.12", titleVi: "Bộ quần áo thể thao, bộ quần áo trượt tuyết và quần áo bơi, dệt kim hoặc móc", titleEn: "Track suits, ski suits and swimwear, knitted or crocheted", contentVi: "Nhóm này bao gồm bộ quần áo thể thao, bộ quần áo trượt tuyết và quần áo bơi, dệt kim hoặc móc.", contentEn: "This heading covers track suits, ski suits and swimwear, knitted or crocheted." },
      { code: "61.14", titleVi: "Quần áo khác, dệt kim hoặc móc", titleEn: "Other garments, knitted or crocheted", contentVi: "Nhóm này bao gồm các loại quần áo dệt kim hoặc móc khác.", contentEn: "This heading covers other knitted or crocheted garments." },
      { code: "61.15", titleVi: "Quần tất, tất dài, tất ngắn và các loại hàng dệt kim đi chân khác", titleEn: "Panty hose, tights, stockings, socks and other hosiery", contentVi: "Nhóm này bao gồm quần tất, tất dài, tất ngắn, dệt kim hoặc móc.", contentEn: "This heading covers panty hose, tights, stockings, socks, knitted or crocheted." },
      { code: "61.16", titleVi: "Găng tay, găng tay hở ngón, dệt kim hoặc móc", titleEn: "Gloves, mittens and mitts, knitted or crocheted", contentVi: "Nhóm này bao gồm găng tay, găng tay hở ngón, dệt kim hoặc móc.", contentEn: "This heading covers gloves, mittens and mitts, knitted or crocheted." },
      { code: "61.17", titleVi: "Hàng may mặc phụ trợ khác; các bộ phận của quần áo, dệt kim hoặc móc", titleEn: "Other made up clothing accessories; parts of garments, knitted or crocheted", contentVi: "Nhóm này bao gồm các hàng may mặc phụ trợ khác như khăn choàng, cà vạt, dệt kim hoặc móc.", contentEn: "This heading covers other clothing accessories such as shawls, ties, knitted or crocheted." }
    ]
  },
  {
    chapter: 62,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Quần áo và hàng may mặc phụ trợ, không dệt kim hoặc móc",
    titleEn: "Articles of apparel and clothing accessories, not knitted or crocheted",
    notesVi: ["Chương này chỉ áp dụng cho những sản phẩm may sẵn làm từ bất kỳ loại vải dệt nào trừ vải dệt kim hoặc móc.", "Chương này không bao gồm: (a) Hàng hóa đã qua sử dụng thuộc nhóm 63.09; (b) Dụng cụ chỉnh hình thuộc nhóm 90.21."],
    notesEn: ["This Chapter applies only to made up articles of any textile fabric excluding knitted or crocheted fabrics.", "This Chapter does not cover: (a) Worn clothing of heading 63.09; (b) Orthopaedic appliances of heading 90.21."],
    generalVi: "Chương này bao gồm các loại quần áo và hàng may mặc phụ trợ không dệt kim hoặc móc như áo khoác, bộ com-lê, váy, quần, áo sơ mi, đồ lót, đồ ngủ và các phụ kiện may mặc.",
    generalEn: "This Chapter covers articles of apparel and clothing accessories, not knitted or crocheted, including overcoats, suits, dresses, trousers, shirts, underwear, nightwear and clothing accessories.",
    headings: [
      { code: "62.01", titleVi: "Áo khoác dài, áo khoác xe, áo choàng không tay, áo khoác có mũ dùng cho nam giới hoặc trẻ em trai", titleEn: "Men's or boys' overcoats, car-coats, capes, cloaks, anoraks and similar articles", contentVi: "Nhóm này bao gồm các loại áo khoác ngoài không dệt kim hoặc móc dùng cho nam giới.", contentEn: "This heading covers outer garments, not knitted or crocheted, for men or boys." },
      { code: "62.02", titleVi: "Áo khoác dài, áo khoác xe, áo choàng không tay, áo khoác có mũ dùng cho phụ nữ hoặc trẻ em gái", titleEn: "Women's or girls' overcoats, car-coats, capes, cloaks, anoraks and similar articles", contentVi: "Nhóm này bao gồm các loại áo khoác ngoài không dệt kim hoặc móc dùng cho phụ nữ.", contentEn: "This heading covers outer garments, not knitted or crocheted, for women or girls." },
      { code: "62.03", titleVi: "Bộ com-lê, áo jacket, quần dài, quần soóc dùng cho nam giới hoặc trẻ em trai", titleEn: "Men's or boys' suits, jackets, trousers, shorts", contentVi: "Nhóm này bao gồm bộ com-lê, áo jacket, quần dài, quần soóc dùng cho nam giới, không dệt kim hoặc móc.", contentEn: "This heading covers suits, jackets, trousers, shorts for men or boys, not knitted or crocheted." },
      { code: "62.04", titleVi: "Bộ com-lê, áo jacket, váy liền thân, chân váy, quần dài dùng cho phụ nữ hoặc trẻ em gái", titleEn: "Women's or girls' suits, jackets, dresses, skirts, trousers", contentVi: "Nhóm này bao gồm bộ com-lê, váy liền thân, chân váy, quần dài dùng cho phụ nữ, không dệt kim hoặc móc.", contentEn: "This heading covers suits, dresses, skirts, trousers for women or girls, not knitted or crocheted." },
      { code: "62.05", titleVi: "Áo sơ mi nam giới hoặc trẻ em trai", titleEn: "Men's or boys' shirts", contentVi: "Nhóm này bao gồm các loại áo sơ mi không dệt kim hoặc móc dành cho nam giới.", contentEn: "This heading covers shirts not knitted or crocheted for men or boys." },
      { code: "62.06", titleVi: "Áo blouse, sơ mi dùng cho phụ nữ hoặc trẻ em gái", titleEn: "Women's or girls' blouses, shirts", contentVi: "Nhóm này bao gồm các loại áo blouse, sơ mi không dệt kim hoặc móc dùng cho phụ nữ.", contentEn: "This heading covers blouses, shirts, not knitted or crocheted, for women or girls." },
      { code: "62.07", titleVi: "Áo lót, quần lót, áo ngủ, bộ pyjama dùng cho nam giới hoặc trẻ em trai", titleEn: "Men's or boys' singlets, underpants, nightshirts, pyjamas", contentVi: "Nhóm này bao gồm đồ lót và đồ ngủ dùng cho nam giới, không dệt kim hoặc móc.", contentEn: "This heading covers underwear and nightwear for men or boys, not knitted or crocheted." },
      { code: "62.08", titleVi: "Áo lót, váy lót, váy ngủ, bộ pyjama dùng cho phụ nữ hoặc trẻ em gái", titleEn: "Women's or girls' singlets, slips, nightdresses, pyjamas", contentVi: "Nhóm này bao gồm đồ lót và đồ ngủ dùng cho phụ nữ, không dệt kim hoặc móc.", contentEn: "This heading covers underwear and nightwear for women or girls, not knitted or crocheted." },
      { code: "62.09", titleVi: "Quần áo và phụ kiện may mặc cho trẻ em", titleEn: "Babies' garments and clothing accessories", contentVi: "Nhóm này bao gồm quần áo cho trẻ sơ sinh có chiều cao không quá 86 cm.", contentEn: "This heading covers garments for young children of a body height not exceeding 86 cm." },
      { code: "62.10", titleVi: "Quần áo may từ các loại vải thuộc nhóm 56.02, 56.03, 59.03, 59.06 hoặc 59.07", titleEn: "Garments, made up of fabrics of heading 56.02, 56.03, 59.03, 59.06 or 59.07", contentVi: "Nhóm này bao gồm quần áo may từ phớt, vật liệu không dệt hoặc vải đặc biệt.", contentEn: "This heading covers garments made up of felt, nonwovens or special fabrics." },
      { code: "62.11", titleVi: "Bộ quần áo thể thao, bộ quần áo trượt tuyết và quần áo bơi; quần áo khác", titleEn: "Track suits, ski suits and swimwear; other garments", contentVi: "Nhóm này bao gồm bộ quần áo thể thao, bộ quần áo trượt tuyết, quần áo bơi và các loại quần áo khác.", contentEn: "This heading covers track suits, ski suits, swimwear and other garments." },
      { code: "62.12", titleVi: "Áo nịt ngực, đai nịt, xu chiêng và các mặt hàng tương tự", titleEn: "Brassieres, girdles, corsets and similar articles", contentVi: "Nhóm này bao gồm áo nịt ngực, đai nịt, xu chiêng, đã hoặc chưa dệt kim hoặc móc.", contentEn: "This heading covers brassieres, girdles, corsets, whether or not knitted or crocheted." },
      { code: "62.13", titleVi: "Khăn tay", titleEn: "Handkerchiefs", contentVi: "Nhóm này bao gồm khăn tay không dệt kim hoặc móc.", contentEn: "This heading covers handkerchiefs not knitted or crocheted." },
      { code: "62.14", titleVi: "Khăn quàng cổ, khăn choàng vai, mạng che mặt và các loại tương tự", titleEn: "Shawls, scarves, mufflers, mantillas, veils and the like", contentVi: "Nhóm này bao gồm khăn quàng cổ, khăn choàng vai và các loại tương tự.", contentEn: "This heading covers shawls, scarves, mufflers and the like." },
      { code: "62.15", titleVi: "Cà vạt, cà vạt dạng nơ và cravát", titleEn: "Ties, bow ties and cravats", contentVi: "Nhóm này bao gồm cà vạt, cà vạt dạng nơ và cravát.", contentEn: "This heading covers ties, bow ties and cravats." },
      { code: "62.16", titleVi: "Găng tay, găng tay hở ngón", titleEn: "Gloves, mittens and mitts", contentVi: "Nhóm này bao gồm găng tay, găng tay hở ngón, không dệt kim hoặc móc.", contentEn: "This heading covers gloves, mittens and mitts, not knitted or crocheted." },
      { code: "62.17", titleVi: "Hàng may mặc phụ trợ khác; các bộ phận của quần áo", titleEn: "Other made up clothing accessories; parts of garments", contentVi: "Nhóm này bao gồm các hàng may mặc phụ trợ khác và các bộ phận của quần áo.", contentEn: "This heading covers other clothing accessories and parts of garments." }
    ]
  },
  {
    chapter: 63,
    section: 11,
    sectionTitleVi: "NGUYÊN LIỆU DỆT VÀ CÁC SẢN PHẨM DỆT",
    sectionTitleEn: "TEXTILES AND TEXTILE ARTICLES",
    titleVi: "Các mặt hàng dệt đã hoàn thiện khác; bộ vải; quần áo đã qua sử dụng; vải vụn",
    titleEn: "Other made up textile articles; sets; worn clothing and worn textile articles; rags",
    notesVi: ["Phân Chương I chỉ áp dụng cho các mặt hàng dệt đã được may sẵn từ bất kỳ loại vải dệt nào.", "Phân Chương I không bao gồm các sản phẩm thuộc các Chương từ 56 đến 62."],
    notesEn: ["Sub-Chapter I applies only to made up articles, of any textile fabric.", "Sub-Chapter I does not cover goods of Chapters 56 to 62."],
    generalVi: "Chương này bao gồm các mặt hàng dệt đã hoàn thiện khác như chăn, vải trải giường, rèm cửa, túi đựng hàng, lều. Chương này cũng bao gồm quần áo đã qua sử dụng và vải vụn.",
    generalEn: "This Chapter covers other made up textile articles such as blankets, bed linen, curtains, sacks, tents. The Chapter also covers worn clothing and rags.",
    headings: [
      { code: "63.01", titleVi: "Chăn và chăn du lịch", titleEn: "Blankets and travelling rugs", contentVi: "Chăn và chăn du lịch thường làm từ len, bông hoặc sợi nhân tạo. Nhóm này cũng bao gồm chăn điện.", contentEn: "Blankets and travelling rugs usually made of wool, cotton or man-made fibres. This heading also includes electric blankets." },
      { code: "63.02", titleVi: "Vỏ ga, vỏ gối, khăn trải giường, khăn trải bàn, khăn phòng vệ sinh và khăn nhà bếp", titleEn: "Bed linen, table linen, toilet linen and kitchen linen", contentVi: "Các sản phẩm bao gồm: khăn trải giường, khăn trải bàn, khăn tắm, khăn nhà bếp.", contentEn: "These articles include: bed linen, table linen, bath towels, kitchen linen." },
      { code: "63.03", titleVi: "Màn che và rèm mờ che phía trong; diềm màn che hoặc diềm giường", titleEn: "Curtains and interior blinds; curtain or bed valances", contentVi: "Nhóm này bao gồm màn che, rèm mờ và diềm màn che hoặc diềm giường.", contentEn: "This heading covers curtains, interior blinds and curtain or bed valances." },
      { code: "63.04", titleVi: "Các sản phẩm trang trí nội thất khác, trừ các loại thuộc nhóm 94.04", titleEn: "Other furnishing articles, excluding those of heading 94.04", contentVi: "Nhóm này bao gồm các sản phẩm dệt dùng trong nhà như khăn trải giường, vỏ nệm, màn chống muỗi.", contentEn: "This heading covers textile articles for use indoors such as bedspreads, mattress covers, mosquito nets." },
      { code: "63.05", titleVi: "Bao và túi, loại dùng để đóng, gói hàng", titleEn: "Sacks and bags, of a kind used for the packing of goods", contentVi: "Nhóm này bao gồm các loại túi và bao dùng để đóng gói, vận chuyển hàng hóa.", contentEn: "This heading covers bags and sacks for packing and transporting goods." },
      { code: "63.06", titleVi: "Tấm vải chống thấm nước, lều; buồm cho tàu thuyền; các sản phẩm dùng cho cắm trại", titleEn: "Tarpaulins, tents; sails for boats; camping goods", contentVi: "Nhóm này bao gồm tấm vải chống thấm, lều, buồm tàu, đệm hơi.", contentEn: "This heading covers tarpaulins, tents, sails, pneumatic mattresses." },
      { code: "63.07", titleVi: "Các mặt hàng đã hoàn thiện khác, kể cả mẫu cắt may", titleEn: "Other made up articles, including dress patterns", contentVi: "Nhóm này bao gồm các mặt hàng dệt khác như khăn lau, cờ, túi đựng máy hút bụi.", contentEn: "This heading covers other textile articles such as floor cloths, flags, vacuum cleaner bags." },
      { code: "63.08", titleVi: "Bộ vải dùng để làm thảm, khăn trải bàn thêu, đóng gói để bán lẻ", titleEn: "Sets for making up into rugs, tapestries, embroidered table cloths, put up for retail sale", contentVi: "Nhóm này bao gồm các bộ vải và sợi dùng để làm thảm, khăn trải bàn thêu.", contentEn: "This heading covers sets of fabric and yarn for making rugs, embroidered table cloths." },
      { code: "63.09", titleVi: "Quần áo đã qua sử dụng và các sản phẩm dệt đã qua sử dụng khác", titleEn: "Worn clothing and other worn articles", contentVi: "Nhóm này bao gồm quần áo và các sản phẩm dệt đã qua sử dụng.", contentEn: "This heading covers used clothing and other used textile articles." },
      { code: "63.10", titleVi: "Vải vụn; sợi xe, chão bện, dây thừng và cáp cũ", titleEn: "Used or new rags, scrap twine, cordage, rope and cables", contentVi: "Nhóm này bao gồm vải vụn và các loại phế liệu dệt.", contentEn: "This heading covers rags and similar textile waste." }
    ]
  },
  {
    chapter: 64,
    section: 12,
    sectionTitleVi: "GIÀY, DÉP, MŨ VÀ CÁC VẬT ĐỘI ĐẦU KHÁC, Ô, DÙ, BA TOONG, GẬY TAY CẦM CÓ THỂ CHUYỂN THÀNH GHẾ, ROI, GẬY ĐIỀU KHIỂN, ROI ĐIỀU KHIỂN SÚC VẬT THÔ KÉO VÀ CÁC BỘ PHẬN CỦA CÁC LOẠI HÀNG TRÊN; LÔNG VŨ CHẾ BIẾN VÀ CÁC SẢN PHẨM LÀM TỪ LÔNG VŨ CHẾ BIẾN; HOA NHÂN TẠO; CÁC SẢN PHẨM LÀM TỪ TÓC NGƯỜI",
    sectionTitleEn: "FOOTWEAR, HEADGEAR, UMBRELLAS, SUN UMBRELLAS, WALKING-STICKS, SEAT-STICKS, WHIPS, RIDING-CROPS AND PARTS THEREOF; PREPARED FEATHERS AND ARTICLES MADE THEREWITH; ARTIFICIAL FLOWERS; ARTICLES OF HUMAN HAIR",
    titleVi: "Giày, dép, ghệt và các sản phẩm tương tự; các bộ phận của các sản phẩm trên",
    titleEn: "Footwear, gaiters and the like; parts of such articles",
    notesVi: [
      "Chương này không bao gồm: (a) Giày hoặc dép đi một lần bằng vật liệu mỏng (ví dụ, giấy, tấm plastic) không gắn đế. Các sản phẩm này được phân loại theo vật liệu làm ra chúng; (b) Giày, dép bằng vật liệu dệt, không có đế ngoài được dán keo, khâu hoặc gắn bằng cách khác vào mũ giày (Phần XI); (c) Giày, dép đã qua sử dụng thuộc nhóm 63.09; (d) Các sản phẩm bằng amiăng (nhóm 68.12); (e) Giày, dép chỉnh hình hoặc các thiết bị chỉnh hình khác, hoặc các bộ phận của chúng (nhóm 90.21); hoặc (f) Giày, dép đồ chơi hoặc giày ống có gắn lưỡi trượt băng hoặc trượt patanh; tấm ốp bảo vệ ống chân hoặc các đồ bảo vệ tương tự dùng trong thể thao (Chương 95).",
      "Theo mục đích của nhóm 64.06, khái niệm \"các bộ phận\" không bao gồm các móc gài, bộ phận bảo vệ, khoen, móc cài, khoá cài, vật trang trí, dải viền, đăng ten, búp cài hoặc các vật trang trí khác (được phân loại trong các nhóm thích hợp) hoặc các loại khuy hoặc các hàng hóa khác thuộc nhóm 96.06.",
      "Theo mục đích của Chương này: (a) thuật ngữ \"cao su\" và \"plastic\" kể cả vải dệt thoi hoặc các sản phẩm dệt khác có lớp ngoài bằng cao su hoặc plastic có thể nhìn thấy được bằng mắt thường; theo mục đích của phần này, không tính đến sự thay đổi về màu sắc; và (b) thuật ngữ \"da thuộc\" liên quan đến các mặt hàng thuộc các nhóm 41.07 và từ 41.12 đến 41.14.",
      "Theo Chú giải 3 của Chương này: (a) vật liệu làm mũ giày được xếp theo loại vật liệu cấu thành có diện tích mặt ngoài lớn nhất, không tính đến các phụ kiện hoặc đồ phụ trợ; (b) vật liệu cấu thành của đế ngoài được tính là vật liệu có bề mặt rộng nhất trong việc tiếp xúc với đất."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Disposable foot or shoe coverings of flimsy material (for example, paper, sheeting of plastics) without applied soles. These products are classified according to their constituent material; (b) Footwear of textile material, without an outer sole glued, sewn or otherwise affixed or applied to the upper (Section XI); (c) Worn footwear of heading 63.09; (d) Articles of asbestos (heading 68.12); (e) Orthopaedic footwear or other orthopaedic appliances, or parts thereof (heading 90.21); or (f) Toy footwear or skating boots with ice or roller skates attached; shin-guards or similar protective sportswear (Chapter 95).",
      "For the purposes of heading 64.06, the term \"parts\" does not include pegs, protectors, eyelets, hooks, buckles, ornaments, braid, laces, pompons or other trimmings (which are to be classified in their appropriate headings) or buttons or other goods of heading 96.06.",
      "For the purposes of this Chapter: (a) the terms \"rubber\" and \"plastics\" include woven fabrics or other textile products with an external layer of rubber or plastics being visible to the naked eye; for the purpose of this provision, no account should be taken of any resulting change of colour; and (b) the term \"leather\" refers to the goods of headings 41.07 and 41.12 to 41.14.",
      "Subject to Note 3 to this Chapter: (a) the material of the upper shall be taken to be the constituent material having the greatest external surface area, no account being taken of accessories or reinforcements; (b) the constituent material of the outer sole shall be taken to be the material having the greatest surface area in contact with the ground."
    ],
    generalVi: "Ngoài các trường hợp loại trừ nhất định, chương này bao gồm các loại giày, dép khác nhau (kể cả các loại giày đi bên ngoài phủ lên các giày, dép khác) được phân loại vào các nhóm từ 64.01 đến 64.05 không phân biệt kiểu dáng và kích cỡ, không phân biệt chúng được thiết kế cho mục đích sử dụng nào, không phân biệt phương thức sản xuất hoặc nguyên liệu được sử dụng để làm ra chúng. Giày, dép thuộc Chương này có thể được làm bằng mọi chất liệu (cao su, da, nhựa, gỗ, li-e, các vật liệu dệt bao gồm cả các loại nỉ và sản phẩm không dệt, da lông, các chất vật liệu tết bện v.v...), ngoại trừ bằng amiăng. Tuy nhiên, trong giới hạn của chương này, nguyên liệu cấu thành đế ngoài và mũ của giày, dép sẽ quyết định giày, dép được phân loại vào các nhóm từ 64.01 đến 64.05.",
    generalEn: "With certain exceptions, this Chapter covers various types of footwear (including overshoes worn over other footwear) classifiable in headings 64.01 to 64.05 regardless of style and size, regardless of the use for which they are designed, regardless of the method of manufacture or materials used. Footwear of this Chapter may be of any material (rubber, leather, plastics, wood, cork, textiles including felt and nonwovens, furskin, plaiting materials, etc.) except asbestos. However, within the limits of the Chapter itself, it is the constituent material of the outer sole and of the upper which determines classification in headings 64.01 to 64.05.",
    headings: [
      { code: "64.01", titleVi: "Giày, dép không thấm nước có đế ngoài và mũ giày bằng cao su hoặc plastic", titleEn: "Waterproof footwear with outer soles and uppers of rubber or plastics", contentVi: "Nhóm này bao gồm giày, dép không thấm nước có cả đế ngoài và mũ giày bằng cao su, bằng plastic hoặc bằng vật liệu dệt có lớp ngoài bằng cao su hoặc plastic có thể nhìn thấy được bằng mắt thường, miễn là phần mũ giày không gắn với đế hoặc lắp ghép theo các quy trình như khâu, tán đinh, xoáy ốc, cắm đế. Nhóm này bao gồm giày, dép được sản xuất để chống thấm nước hoặc các chất lỏng khác, bao gồm một số loại giày ống đi trên tuyết, giày cao su, giày đi bên ngoài phủ lên các loại giày dép khác và giày ống trượt tuyết.", contentEn: "This heading covers waterproof footwear with outer soles and uppers of rubber, plastics or textile material with an external layer of rubber or plastics being visible to the naked eye, provided the uppers are neither fixed to the sole nor assembled by stitching, riveting, nailing, screwing, plugging or similar processes. The heading includes footwear constructed to protect against penetration by water or other liquids, including certain snow-boots, galoshes, overshoes and ski-boots." },
      { code: "64.02", titleVi: "Các loại giày, dép khác có đế ngoài và mũ giày bằng cao su hoặc plastic", titleEn: "Other footwear with outer soles and uppers of rubber or plastics", contentVi: "Nhóm này bao gồm giày, dép có đế ngoài và mũ giày bằng cao su hoặc plastic, loại trừ các loại giày, dép thuộc nhóm 64.01. Nhóm này bao gồm: giày ống trượt tuyết có một vài bộ phận đúc được gắn với nhau bằng đinh tán; guốc không có quai hậu; các loại dép lê hoặc dép có đế mỏng; sandal có đai vòng qua mu bàn chân; sandal kiểu dây gắn với đế bằng các chốt cài.", contentEn: "This heading covers footwear with outer soles and uppers of rubber or plastics, other than those of heading 64.01. It includes ski-boots consisting of several moulded parts hinged on rivets; clogs without quarter or counter; slippers or mules without quarter or counter; sandals consisting of straps across the instep; thong-type sandals with plugs attached to the sole." },
      { code: "64.03", titleVi: "Giày, dép có đế ngoài bằng cao su, plastic, da thuộc hoặc da tổng hợp và mũ giày bằng da thuộc", titleEn: "Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of leather", contentVi: "Nhóm này bao gồm giày, dép có phần mũ được làm bằng da thuộc và có đế ngoài được làm bằng cao su, plastic, vải dệt thoi hoặc các sản phẩm dệt khác có lớp ngoài bằng cao su hoặc plastic, da thuộc, hoặc da tổng hợp.", contentEn: "This heading covers footwear with uppers of leather and with outer soles of rubber, plastics, woven fabrics or other textile products with an external layer of rubber or plastics, leather, or composition leather." },
      { code: "64.04", titleVi: "Giày, dép có đế ngoài bằng cao su, plastic, da thuộc hoặc da tổng hợp và mũ giày bằng vật liệu dệt", titleEn: "Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of textile materials", contentVi: "Nhóm này bao gồm giày, dép có phần mũ được làm bằng vật liệu dệt và có đế ngoài được làm bằng các loại vật liệu giống các vật liệu dùng làm đế của giày, dép thuộc nhóm 64.03.", contentEn: "This heading covers footwear with uppers of textile materials and with outer soles made of the same types of materials as those used for the soles of footwear in heading 64.03." },
      { code: "64.05", titleVi: "Giày, dép khác", titleEn: "Other footwear", contentVi: "Nhóm này bao gồm toàn bộ các loại giày, dép có đế ngoài và mũ được làm bằng một loại vật liệu hoặc kết hợp các loại vật liệu chưa được đề cập trong các nhóm trước của Chương này. Bao gồm: giày, dép có đế ngoài bằng cao su hoặc plastic và phần mũ được làm bằng các vật liệu trừ cao su, plastic, da thuộc hoặc vật liệu dệt; giày, dép có đế ngoài làm bằng gỗ, lie, dây xe hoặc dây thừng, bìa giấy, da lông, vải dệt, nỉ (phớt), sản phẩm không dệt.", contentEn: "This heading covers all footwear with outer soles and uppers made of materials or combinations of materials not covered by the previous headings of this Chapter. It includes: footwear with outer soles of rubber or plastics and uppers of materials other than rubber, plastics, leather or textiles; footwear with outer soles of wood, cork, twine or rope, paperboard, furskin, felt, nonwovens." },
      { code: "64.06", titleVi: "Các bộ phận của giày, dép; miếng lót của giày, dép có thể tháo rời, đệm gót chân; ghệt, ống ôm sát chân và các sản phẩm tương tự", titleEn: "Parts of footwear; removable in-soles, heel cushions and similar articles; gaiters, leggings and similar articles, and parts thereof", contentVi: "Nhóm này bao gồm: (A) Các loại bộ phận cấu thành của giày, dép, có thể được làm bằng mọi loại vật liệu trừ amiăng, bao gồm các bộ phận của mũ (thân giày trước, mũi giày, quai hậu), miếng lót bằng vật liệu cứng, đế trong, đế giữa và đế ngoài, các loại gót, khuy cài, đinh đóng đế giày. (B) Những phụ kiện ghép, nối được lắp bên trong của giày như miếng lót trong có thể tháo ra được, tấm bảo vệ đặt giữa gót chân và giày. (II) Ghệt, ống ôm sát chân (leggings) và các sản phẩm tương tự được thiết kế nhằm che toàn bộ hoặc một phần của chân.", contentEn: "This heading covers: (A) Various component parts of footwear, which may be of any materials except asbestos, including parts of uppers (vamps, toecaps, quarters), stiffeners, inner, middle and outer soles, heels, studs, spikes for sports footwear. (B) Fittings worn inside the footwear such as removable in-soles, hose protectors and removable interior heel cushions. (II) Gaiters, leggings and similar articles designed to cover the whole or part of the leg." }
    ]
  },
  {
    chapter: 65,
    section: 12,
    sectionTitleVi: "GIÀY, DÉP, MŨ VÀ CÁC VẬT ĐỘI ĐẦU KHÁC, Ô, DÙ, BA TOONG, GẬY TAY CẦM CÓ THỂ CHUYỂN THÀNH GHẾ, ROI, GẬY ĐIỀU KHIỂN, ROI ĐIỀU KHIỂN SÚC VẬT THÔ KÉO VÀ CÁC BỘ PHẬN CỦA CÁC LOẠI HÀNG TRÊN; LÔNG VŨ CHẾ BIẾN VÀ CÁC SẢN PHẨM LÀM TỪ LÔNG VŨ CHẾ BIẾN; HOA NHÂN TẠO; CÁC SẢN PHẨM LÀM TỪ TÓC NGƯỜI",
    sectionTitleEn: "FOOTWEAR, HEADGEAR, UMBRELLAS, SUN UMBRELLAS, WALKING-STICKS, SEAT-STICKS, WHIPS, RIDING-CROPS AND PARTS THEREOF; PREPARED FEATHERS AND ARTICLES MADE THEREWITH; ARTIFICIAL FLOWERS; ARTICLES OF HUMAN HAIR",
    titleVi: "Mũ và các vật đội đầu khác và các bộ phận của chúng",
    titleEn: "Headgear and parts thereof",
    notesVi: [
      "Chương này không bao gồm: (a) Mũ và các vật đội đầu khác đã qua sử dụng thuộc nhóm 63.09; (b) Mũ và các vật đội đầu khác, bằng amiăng (nhóm 68.12); hoặc (c) Mũ búp bê, mũ đồ chơi khác, hoặc các mặt hàng dùng trong lễ hội carnival của Chương 95.",
      "Nhóm 65.02 không bao gồm thân mũ được làm bằng cách khâu, trừ các thân mũ được làm một cách đơn giản bằng cách khâu các dải theo hình xoáy ốc."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Worn headgear of heading 63.09; (b) Asbestos headgear (heading 68.12); or (c) Dolls' hats, other toy hats or carnival articles of Chapter 95.",
      "Heading 65.02 does not cover hat-shapes made by sewing other than those obtained simply by sewing strips in spirals."
    ],
    generalVi: "Loại trừ các mặt hàng được liệt kê, Chương này bao gồm các thân mũ, thân mũ hình nón, thân mũ hình chương, và các loại mũ và các vật đội đầu khác, bất kể chúng được làm từ chất liệu nào và chúng được sử dụng cho mục đích gì (đội hàng ngày, đội trên sân khấu, hoá trang, bảo vệ, v.v.). Chương này cũng bao gồm các loại lưới bao tóc làm bằng mọi chất liệu và một số đồ phụ kiện chuyên dùng cho mũ và các vật đội đầu. Các loại mũ và vật đội đầu khác thuộc Chương này có thể gắn đồ trang trí các loại bằng mọi chất liệu, kể cả các đồ trang trí được làm từ chất liệu thuộc Chương 71.",
    generalEn: "With the exception of the articles listed, this Chapter covers hat-shapes, hat-forms, hat bodies and hoods, and hats and other headgear of all kinds, irrespective of the materials of which they are made and of their intended use (daily wear, theatre, disguise, protection, etc.). It also covers hair-nets of any material and certain specified fittings for headgear. The hats and other headgear of this Chapter may incorporate trimmings of various kinds and of any material, including trimmings made of the materials of Chapter 71.",
    headings: [
      { code: "65.01", titleVi: "Các loại thân mũ hình nón, hình chương bằng phớt (nỉ, dạ), chưa dựng theo khuôn, chưa làm vành; thân mũ chóp bằng và thân mũ hình trụ bằng phớt (nỉ, dạ)", titleEn: "Hat-forms, hat bodies and hoods of felt, neither blocked to shape nor with made brims; plateaux and manchons of felt", contentVi: "Các loại thân mũ hình nón, hình chương bằng phớt (nỉ, dạ) lông thú thường được làm từ lông thỏ, lông thỏ rừng, lông chuột nước, lông chuột hải ly, hoặc lông hải ly. Các loại thân mũ làm bằng phớt (nỉ, dạ) lông cừu thường được làm bằng lông cừu hoặc lông của lạc đà không bướu, vicuna, lông lạc đà. Nhóm này cũng bao gồm thân mũ chóp bằng làm bằng phớt và thân mũ hình trụ bằng phớt.", contentEn: "Fur felt hat-forms, hat bodies and hoods are usually made from rabbit fur, hare fur, musquash fur, nutria or beaver. Wool felt hat-forms are usually of sheep's wool or alpaca, vicuña, camel hair. The heading also includes felt plateaux and felt manchons (cylinders)." },
      { code: "65.02", titleVi: "Các loại thân mũ, được tết hoặc làm bằng cách ghép các dải làm bằng chất liệu bất kỳ, chưa dựng theo khuôn, chưa làm vành, chưa có lót, chưa trang trí", titleEn: "Hat-shapes, plaited or made by assembling strips of any material, neither blocked to shape nor with made brims, not lined, not trimmed", contentVi: "Nhóm này gồm các loại thân mũ, chưa dựng theo khuôn, chưa làm vành, chưa có lót, chưa có trang trí, được tết trực tiếp từ các loại sợi hoặc các dải bằng vật liệu bất kỳ (rơm, cây sậy, sợi cây cọ, sợi cọ sợi, xơ xiđan, các dải giấy, dải nhựa hay dải gỗ), hoặc được làm bằng việc ghép các dải vật liệu thường bằng cách khâu các dải vật liệu với nhau theo hình xoắn ốc.", contentEn: "This heading covers hat-shapes, not blocked, not with made brims, not lined, not trimmed, plaited directly from fibres or strips of any material (straw, reeds, palm fibres, sisal, paper strips, plastics strips or wood strips), or made by assembling strips of any material, usually by sewing the strips spirally together starting from the crown." },
      { code: "65.04", titleVi: "Các loại mũ và các vật đội đầu khác, được làm bằng cách tết hoặc ghép các dải làm bằng chất liệu bất kỳ, đã hoặc chưa có lót hoặc trang trí", titleEn: "Hats and other headgear, plaited or made by assembling strips of any material, whether or not lined or trimmed", contentVi: "Nhóm này chủ yếu bao gồm các loại mũ và các vật vật đội đầu khác được làm từ các loại thân mũ thuộc nhóm 65.02, sau khi chúng đã được dựng theo khuôn để tạo hình dáng, đã được làm vành, hoặc đã được lót hoặc trang trí. Các loại thân mũ được dựng theo khuôn bằng cách ép hoặc là trên khuôn, sau đó thường được gia cố bằng việc sử dụng giê-la tin, hồ, gôm.", contentEn: "This heading covers essentially hats and other headgear made from the hat-shapes of heading 65.02, after they have been blocked to shape, with made brims, or lined or trimmed. Hat-shapes are blocked by pressing or ironing on blocks, then usually stiffened using gelatin, starch or gum." },
      { code: "65.05", titleVi: "Các loại mũ và các vật đội đầu khác, dệt kim hoặc móc, hoặc làm từ ren, nỉ hoặc vải dệt khác; lưới bao tóc bằng vật liệu bất kỳ", titleEn: "Hats and other headgear, knitted or crocheted, or made up from lace, felt or other textile fabric; hair-nets of any material", contentVi: "Nhóm này bao gồm mũ và các vật đội đầu được làm trực tiếp bằng cách dệt kim hoặc móc, hoặc được làm từ những chất liệu như ren, phớt (nỉ, dạ), hoặc các vật liệu dệt khác ở dạng mảnh. Các sản phẩm bao gồm: các loại mũ trang trí, mũ nồi, mũ bê rê, mũ chỏm đầu, một số loại mũ và vật đội đầu của người phương đông, các loại mũ lưỡi hai, các loại mũ và vật đội đầu dùng theo nghề nghiệp, mũ bảo hiểm (helmet) bằng li-e hay bằng lõi xốp được bọc ngoài bằng vải dệt. Nhóm này cũng bao gồm các loại lưới bao tóc, lưới buộc tóc.", contentEn: "This heading covers hats and other headgear made directly by knitting or crocheting, or made from materials such as lace, felt, or other textile fabric in the piece. Articles include: decorated hats, caps, berets, skull caps, some Oriental headgear, peaked caps, professional and ecclesiastical headgear, helmets of cork or pith covered with textile fabric. The heading also covers hair-nets, snoods and the like." },
      { code: "65.06", titleVi: "Mũ và các vật đội đầu khác, đã hoặc chưa lót hoặc trang trí", titleEn: "Other headgear, whether or not lined or trimmed", contentVi: "Nhóm này bao gồm tất cả các loại mũ và các vật đội đầu chưa được phân loại vào các nhóm trước của Chương này hoặc các Chương 63, 68 hoặc 95. Nhóm này bao gồm chủ yếu là các loại mũ bảo hiểm (helmet) dùng trong thể thao, quân đội hoặc lính cứu hoả, mũ của vận động viên đua mô tô, mũ bảo hiểm của công nhân hầm lò hoặc công nhân xây dựng. Nhóm này cũng bao gồm: mũ và vật đội đầu bằng cao su hoặc plastic, mũ và vật đội đầu bằng da hoặc da tổng hợp, mũ và vật đội đầu bằng da lông tự nhiên hoặc nhân tạo, mũ và vật đội đầu bằng lông vũ hoặc hoa giả, mũ và vật đội đầu bằng kim loại.", contentEn: "This heading covers all hats and other headgear not classified in the previous headings of this Chapter or in Chapters 63, 68 or 95. It mainly covers safety helmets for sports, military or fire-fighting, motorcycle helmets, miners' or construction workers' helmets. It also covers: headgear of rubber or plastics, headgear of leather or composition leather, headgear of natural or artificial furskin, headgear of feathers or artificial flowers, headgear of metal." },
      { code: "65.07", titleVi: "Băng lót vành trong thân mũ, lớp lót, lớp bọc, cốt, khung, lưỡi trai, và quai, dùng để sản xuất mũ và các vật đội đầu khác", titleEn: "Head-bands, linings, covers, hat foundations, hat frames, peaks and chinstraps, for headgear", contentVi: "Nhóm này bao gồm các phụ kiện để sản xuất mũ và các vật đội đầu khác như: băng lót vành trong thân mũ (băng da hay băng vải); lớp lót; lớp bọc; cốt và khung; lưỡi trai bằng vật liệu bất kỳ; quai mũ.", contentEn: "This heading covers accessories for making hats and other headgear, such as: head-bands (leather or fabric bands); linings; covers; hat foundations and frames; peaks of any material; chinstraps." }
    ]
  },
  {
    chapter: 66,
    section: 12,
    sectionTitleVi: "GIÀY, DÉP, MŨ VÀ CÁC VẬT ĐỘI ĐẦU KHÁC, Ô, DÙ, BA TOONG, GẬY TAY CẦM CÓ THỂ CHUYỂN THÀNH GHẾ, ROI, GẬY ĐIỀU KHIỂN, ROI ĐIỀU KHIỂN SÚC VẬT THÔ KÉO VÀ CÁC BỘ PHẬN CỦA CÁC LOẠI HÀNG TRÊN; LÔNG VŨ CHẾ BIẾN VÀ CÁC SẢN PHẨM LÀM TỪ LÔNG VŨ CHẾ BIẾN; HOA NHÂN TẠO; CÁC SẢN PHẨM LÀM TỪ TÓC NGƯỜI",
    sectionTitleEn: "FOOTWEAR, HEADGEAR, UMBRELLAS, SUN UMBRELLAS, WALKING-STICKS, SEAT-STICKS, WHIPS, RIDING-CROPS AND PARTS THEREOF; PREPARED FEATHERS AND ARTICLES MADE THEREWITH; ARTIFICIAL FLOWERS; ARTICLES OF HUMAN HAIR",
    titleVi: "Ô, dù che, ba toong, gậy tay cầm có thể chuyển thành ghế, roi, gậy điều khiển, roi điều khiển súc vật thồ kéo và các bộ phận của các sản phẩm trên",
    titleEn: "Umbrellas, sun umbrellas, walking-sticks, seat-sticks, whips, riding-crops and parts thereof",
    notesVi: [
      "Chương này không bao gồm: (a) Gậy chống dùng để đo hoặc loại tương tự (nhóm 90.17); (b) Báng súng, chuôi kiếm, gậy chống chịu lực hoặc loại tương tự (Chương 93); hoặc (c) Hàng hóa thuộc Chương 95 (ví dụ: ô, dù che, loại dùng làm đồ chơi).",
      "Nhóm 66.03 không bao gồm các bộ phận, đồ trang trí hoặc đồ phụ kiện bằng vật liệu dệt, hoặc bao bì, tua rua, dây đa, hộp đựng ô hoặc các loại tương tự, bằng vật liệu bất kỳ. Những hàng hóa này đi kèm, nhưng không gắn vào các sản phẩm của nhóm 66.01 hoặc 66.02, được phân loại riêng."
    ],
    notesEn: [
      "This Chapter does not cover: (a) Measure walking-sticks or the like (heading 90.17); (b) Firearm-sticks, sword-sticks, loaded walking-sticks or the like (Chapter 93); or (c) Goods of Chapter 95 (for example, toy umbrellas, toy sun umbrellas).",
      "Heading 66.03 does not cover parts, trimmings or accessories of textile material, or covers, tassels, thongs, umbrella cases or the like, of any material. Such goods presented with, but not fitted to, articles of heading 66.01 or 66.02 are to be classified separately."
    ],
    generalVi: "Chương này bao gồm các loại ô và dù che (kể cả ô có cán là ba toong, dù che trong vườn và các loại ô, dù tương tự), ba toong, gậy tay cầm có thể chuyển thành ghế, roi, gậy điều khiển, roi điều khiển súc vật thồ kéo và các bộ phận của các sản phẩm này. Các loại cán và cột thường được làm bằng gỗ, song mây, nhựa hoặc kim loại. Tay nắm có thể làm bằng những vật liệu giống như cán, hoặc được làm toàn bộ hoặc một phần bằng kim loại quý, được bọc bằng kim loại quý, bằng xương, xà cừ, mai, đồi mồi, ngà, sừng, hổ phách.",
    generalEn: "This Chapter covers umbrellas and sun umbrellas (including walking-stick umbrellas, garden umbrellas and similar umbrellas), walking-sticks, seat-sticks, whips, riding-crops and parts thereof. Umbrella shafts (sticks) are usually of wood, cane, plastics or metal. The handles may be of the same materials as the shafts (sticks), or they may consist wholly or partly of precious metal or metal clad with precious metal, ivory, horn, bone, amber, tortoise-shell, mother of pearl.",
    headings: [
      { code: "66.01", titleVi: "Các loại ô và dù (kể cả ô có cán là ba toong, dù che trong vườn và các loại ô, dù tương tự)", titleEn: "Umbrellas and sun umbrellas (including walking-stick umbrellas, garden umbrellas and similar umbrellas)", contentVi: "Không kể các loại ô, dù che loại được thiết kế rõ ràng để sử dụng làm đồ chơi hoặc mặt hàng dùng trong các lễ hội (Chương 95), nhóm này gồm các loại ô, dù che đủ các loại (ví dụ, ô có cán là ba toong, dù che có thể chuyển thành ghế, dù che dùng trong \"nghi lễ\", dùng trong vườn, trong chợ, trong quán cà phê, các loại dù che làm lều và các sản phẩm kiểu tương tự), không phụ thuộc chất liệu các thành phần cấu thành. Dù che làm thành lều là loại dù lớn có gắn \"một màn che bao quanh\" có thể đóng chặt xuống đất.", contentEn: "With the exception of umbrellas and sun umbrellas of a kind clearly designed for use as toys or as carnival articles (Chapter 95), this heading covers umbrellas and sun umbrellas of all kinds (e.g., \"ceremonial\" umbrellas, umbrella tents, walking-stick and seat-stick umbrellas, café, market, garden and similar umbrellas), regardless of the materials of which the various components are. Umbrella tents consist of large umbrellas provided with a \"curtain surround\" which may be affixed to the ground." },
      { code: "66.02", titleVi: "Ba toong, gậy tay cầm có thể chuyển thành ghế, roi, gậy điều khiển, roi điều khiển súc vật thồ, kéo và các loại tương tự", titleEn: "Walking-sticks, seat-sticks, whips, riding-crops and the like", contentVi: "Ngoài các loại ba toong thông thường, nhóm này cũng bao gồm gậy tay cầm có thể chuyển thành ghế (với tay cầm được thiết kế để mở ra tạo thành một chỗ ngồi), gậy chống được thiết kế đặc biệt cho những người tàn tật hoặc cho những người cao tuổi, gậy dùng trong hoạt động hướng đạo, gậy của người chăn cừu. Nhóm này cũng bao gồm các loại roi thông thường gồm chuôi cầm nối với dây buộc đầu roi, và roi điều khiển súc vật thường gồm chuôi cầm nối với thòng lọng ngắn bằng da thay cho dây buộc đầu roi.", contentEn: "In addition to ordinary walking-sticks, this group also includes seat-sticks (with handles designed to open out to form a seat), walking-sticks specially designed for disabled persons and senior citizens, boy scouts' poles, shepherds' crooks. The group also includes whips of all kinds generally consisting of combined stocks and lashes, and riding-crops consisting of stocks with, generally, a short leather loop in place of a lash." },
      { code: "66.03", titleVi: "Các bộ phận, đồ trang trí và đồ phụ trợ cho các mặt hàng thuộc nhóm 66.01 hoặc 66.02", titleEn: "Parts, trimmings and accessories of articles of heading 66.01 or 66.02", contentVi: "Nhóm này không bao gồm các bộ phận, đồ trang trí hoặc đồ phụ kiện bằng nguyên liệu dệt, và các loại bao bì, các loại tua rua, dây, hộp đựng ô và các loại tương tự bằng chất liệu bất kỳ. Nhóm bao gồm các bộ phận, các đồ trang trí và các đồ phụ trợ có thể nhận biết được của các mặt hàng thuộc nhóm 66.01 hoặc 66.02: các loại tay cầm và tay nắm của ô, dù, ba toong, gậy chống, roi da; các loại khung bao gồm các loại khung có gắn liền với cán, gọng và khung căng; các loại cán (gậy); con trượt, đầu gọng, vòng bít đỉnh và vòng bít tay nắm, đầu bịt cán ô, lò xo đóng mở.", contentEn: "This heading excludes parts, trimmings and accessories, of textile material, and covers, tassels, thongs, umbrella cases and the like of any material. The heading covers identifiable parts, fittings and accessories for articles of heading 66.01 or 66.02: handles and knobs for umbrellas, sun umbrellas, walking-sticks, whips; frames, including frames mounted on sticks, and ribs and stretchers; shafts (sticks); runners, rib tips, open cups and tip cups, ferrules, springs." }
    ]
  },
  {
    chapter: 67,
    section: 12,
    sectionTitleVi: "GIÀY, DÉP, MŨ VÀ CÁC VẬT ĐỘI ĐẦU KHÁC; LÔNG VŨ CHẾ BIẾN; HOA NHÂN TẠO; SẢN PHẨM TỪ TÓC NGƯỜI",
    sectionTitleEn: "FOOTWEAR, HEADGEAR; PREPARED FEATHERS; ARTIFICIAL FLOWERS; ARTICLES OF HUMAN HAIR",
    titleVi: "Lông vũ và lông tơ chế biến, các sản phẩm bằng lông vũ hoặc lông tơ; hoa nhân tạo; các sản phẩm làm từ tóc người",
    titleEn: "Prepared feathers and down and articles made of feathers or of down; artificial flowers; articles of human hair",
    notesVi: ["Chương này không bao gồm: (a) Vải lọc loại làm bằng tóc người (nhóm 59.11); (b) Các hoa văn trang trí bằng ren, đồ thêu hoặc vải dệt khác (Phần XI); (c) Giày, dép (Chương 64); (d) Mũ và các vật đội đầu khác hoặc lưới bao tóc (Chương 65); (e) Đồ chơi, dụng cụ thể thao hoặc các mặt hàng dùng trong lễ hội carnival (Chương 95); hoặc (f) Chổi phất trần, nùi bông thoa phấn hoặc mạng lọc bằng lông (Chương 96)."],
    notesEn: ["This Chapter does not cover: (a) Filtering and straining cloth of human hair (heading 59.11); (b) Floral motifs of lace, of embroidery or other textile fabric (Section XI); (c) Footwear (Chapter 64); (d) Headgear or hair-nets (Chapter 65); (e) Toys, sports requisites or carnival articles (Chapter 95); or (f) Feather dusters, powder-puffs or hair sieves (Chapter 96)."],
    generalVi: "Chương này bao gồm da và các bộ phận khác của loài chim có lông vũ hoặc lông tơ, lông vũ, các phần của lông vũ, lông tơ và các sản phẩm làm từ chúng; hoa, lá, quả nhân tạo và các phần của chúng; tóc người đã được chải, chuốt, tẩy; tóc giả, râu, lông mi, lông mày giả và các sản phẩm tương tự.",
    generalEn: "This Chapter covers skins and other parts of birds with their feathers or down, feathers, parts of feathers, down and articles thereof; artificial flowers, foliage, fruit and parts thereof; human hair dressed, thinned, bleached; wigs, false beards, eyebrows, eyelashes and the like.",
    headings: [
      { code: "67.01", titleVi: "Da và các bộ phận khác của loài chim có lông vũ hoặc lông tơ, lông vũ, các phần của lông vũ, lông tơ và các sản phẩm làm từ chúng", titleEn: "Skins and other parts of birds with their feathers or down, feathers, parts of feathers, down and articles thereof", contentVi: "Nhóm này bao gồm các loại da và các phần khác của chim có lông vũ hoặc lông tơ đã được tẩy trắng, nhuộm, uốn quăn; các mặt hàng chế biến từ lông vũ bao gồm các loại lông vũ được ghép lại để tạo thành chùm, các đồ dùng để trang trí, các loại quạt được làm bằng lông vũ.", contentEn: "This heading covers skins and other parts of birds with their feathers or down which have been bleached, dyed, curled; articles made of feathers including feathers assembled in clusters, trimmings, fans made of ornamental feathers." },
      { code: "67.02", titleVi: "Hoa, cành, lá, quả nhân tạo và các phần của chúng; các sản phẩm làm bằng hoa, cành, lá hoặc quả nhân tạo", titleEn: "Artificial flowers, foliage and fruit and parts thereof; articles made of artificial flowers, foliage or fruit", contentVi: "Nhóm này bao gồm hoa, lá và quả nhân tạo ở dạng giống với những sản phẩm tự nhiên; các phần của hoa, lá hoặc quả nhân tạo; những sản phẩm được làm từ hoa, lá hay quả nhân tạo như các bó hoa, tràng hoa, vòng hoa.", contentEn: "This heading covers artificial flowers, foliage and fruit resembling natural products; parts of artificial flowers, foliage or fruit; made up articles of artificial flowers, foliage or fruit such as bouquets, wreaths, garlands." },
      { code: "67.03", titleVi: "Tóc người, đã được chải, chuốt, tẩy hoặc xử lý bằng cách khác; lông cừu hoặc lông động vật khác, được chế biến để dùng làm tóc giả", titleEn: "Human hair, dressed, thinned, bleached or otherwise worked; wool or other animal hair prepared for use in making wigs", contentVi: "Nhóm này bao gồm tóc người đã được chải, chuốt, tẩy, nhuộm, uốn quăn để phục vụ cho việc sản xuất tóc giả; lông cừu, lông động vật khác và các loại nguyên liệu dệt khác được sử dụng để làm tóc giả.", contentEn: "This heading covers human hair which has been dressed, thinned, bleached, dyed, waved or curled for postiche manufacture; wool, other animal hair and other textile materials prepared for use in making wigs." },
      { code: "67.04", titleVi: "Tóc giả, râu, lông mi, lông mày giả, tóc độn và các loại sản phẩm tương tự; các sản phẩm bằng tóc người chưa được chi tiết ở nơi khác", titleEn: "Wigs, false beards, eyebrows and eyelashes, switches and the like; articles of human hair not elsewhere specified", contentVi: "Nhóm này bao gồm những món tóc giả dưới tất cả các dạng được làm từ tóc thật, lông động vật hoặc các loại vật liệu dệt, bao gồm tóc giả, râu, lông mi, lông mày, độn tóc, lọn tóc, búi tóc, râu mép; các mặt hàng bằng tóc chưa được nêu ở nơi khác.", contentEn: "This heading covers made up articles of postiche manufactured of human or animal hair or textile materials, including wigs, beards, eyebrows and eyelashes, switches, curls, chignons, moustaches; articles of human hair not elsewhere specified." }
    ]
  },
  {
    chapter: 68,
    section: 13,
    sectionTitleVi: "SẢN PHẨM BẰNG ĐÁ, THẠCH CAO, XI MĂNG, AMIĂNG, MICA; ĐỒ GỐM SỨ; THỦY TINH",
    sectionTitleEn: "ARTICLES OF STONE, PLASTER, CEMENT, ASBESTOS, MICA; CERAMIC PRODUCTS; GLASS AND GLASSWARE",
    titleVi: "Sản phẩm làm bằng đá, thạch cao, xi măng, amiăng, mica hoặc các vật liệu tương tự",
    titleEn: "Articles of stone, plaster, cement, asbestos, mica or similar materials",
    notesVi: ["Chương này không bao gồm: (a) Hàng hóa thuộc Chương 25; (b) Giấy và bìa đã được tráng, ngâm tẩm hoặc phủ thuộc nhóm 48.10 hoặc 48.11; (c) Vải dệt đã được tráng, ngâm tẩm hoặc phủ thuộc Chương 56 hoặc 59; (d) Các sản phẩm của Chương 71; (e) Dụng cụ hoặc các bộ phận của dụng cụ thuộc Chương 82."],
    notesEn: ["This Chapter does not cover: (a) Goods of Chapter 25; (b) Coated, impregnated or covered paper and paperboard of heading 48.10 or 48.11; (c) Coated, impregnated or covered textile fabric of Chapter 56 or 59; (d) Articles of Chapter 71; (e) Tools or parts of tools of Chapter 82."],
    generalVi: "Chương này bao gồm: (A) Các loại sản phẩm thuộc Chương 25 đã được gia công vượt qua mức độ được cho phép. (B) Các sản phẩm không được đưa vào Chương 25. (C) Một số sản phẩm được làm bằng các nguyên liệu khoáng thuộc Phần V. (D) Các sản phẩm được làm từ một số nguyên vật liệu thuộc Chương 28.",
    generalEn: "This Chapter covers: (A) Various products of Chapter 25 worked to a degree beyond that permitted. (B) Products excluded from Chapter 25. (C) Certain goods made from mineral materials of Section V. (D) Goods made from certain materials of Chapter 28.",
    headings: [
      { code: "68.01", titleVi: "Đá lát, đá lề đường và phiến đá lát đường, bằng đá tự nhiên (trừ đá phiến)", titleEn: "Setts, curbstones and flagstones, of natural stone (except slate)", contentVi: "Nhóm này bao gồm đá tự nhiên trừ đá phiến được gia công thành các hình dạng thông thường dùng để lát hoặc xây bó vỉa đường, vỉa hè.", contentEn: "This heading covers natural stone other than slate worked into shapes commonly used for paving or bordering roads, pavements." },
      { code: "68.02", titleVi: "Đá làm tượng đài hoặc đá xây dựng đã được gia công và các sản phẩm làm từ đá; đá khối dùng để khảm", titleEn: "Worked monumental or building stone and articles thereof; mosaic cubes and the like", contentVi: "Nhóm này bao gồm các loại đá tự nhiên làm tượng đài hoặc đá dùng trong xây dựng đã được gia công hoàn chỉnh hơn so với các sản phẩm lấy từ mỏ thông thường thuộc Chương 25.", contentEn: "This heading covers natural monumental or building stone which has been worked beyond the stage of the normal quarry products of Chapter 25." },
      { code: "68.04", titleVi: "Đá nghiền, đá mài, đá mài dạng hình tròn và sản phẩm tương tự, dùng để nghiền, mài, đánh bóng, truốt hoặc cắt", titleEn: "Millstones, grindstones, grinding wheels and the like, for grinding, sharpening, polishing, trueing or cutting", contentVi: "Nhóm này bao gồm các loại đá nghiền, đá mài, đá mài dạng hình tròn, đĩa mài dùng để mài, mài sắc, đánh bóng, truốt hoặc cắt.", contentEn: "This heading covers millstones, grindstones, grinding wheels, grinding discs for grinding, sharpening, polishing, trueing or cutting." },
      { code: "68.06", titleVi: "Sợi xỉ, bông len đá và các loại sợi khoáng tương tự; vermiculite nung nở, đất sét trương nở; các hỗn hợp và sản phẩm cách nhiệt, cách âm", titleEn: "Slag wool, rock wool and similar mineral wools; exfoliated vermiculite, expanded clays; heat-insulating, sound-insulating mixtures and articles", contentVi: "Sợi xỉ và bông len đá thu được bằng cách nấu chảy đá granite, bazan, đá vôi và chuyển hoá thành sợi. Tất cả vật liệu này đều là loại sản phẩm cách nhiệt, cách âm cực tốt.", contentEn: "Slag wool and rock wool are obtained by melting granite, basalt, limestone and converting into fibres. All these materials are excellent heat-insulating, sound-insulating products." },
      { code: "68.10", titleVi: "Các sản phẩm bằng xi măng, bê tông hoặc đá nhân tạo, đã hoặc chưa được gia cố", titleEn: "Articles of cement, of concrete or of artificial stone, whether or not reinforced", contentVi: "Nhóm này bao gồm các sản phẩm được làm từ xi măng và cát, xi măng và đá nghiền như cột, dầm, tấm, cửa sổ, thang, bể chứa, ống, tấm lát, ngói.", contentEn: "This heading covers articles made of cement and sand, cement and crushed stone such as columns, beams, slabs, window frames, stairs, tanks, pipes, tiles." }
    ]
  },
  {
    chapter: 69,
    section: 13,
    sectionTitleVi: "SẢN PHẨM BẰNG ĐÁ, THẠCH CAO, XI MĂNG, AMIĂNG, MICA; ĐỒ GỐM SỨ; THỦY TINH",
    sectionTitleEn: "ARTICLES OF STONE, PLASTER, CEMENT, ASBESTOS, MICA; CERAMIC PRODUCTS; GLASS AND GLASSWARE",
    titleVi: "Đồ gốm, sứ",
    titleEn: "Ceramic products",
    notesVi: ["Chương này chỉ áp dụng đối với những sản phẩm gốm, sứ đã được nung sau khi tạo hình. Các sản phẩm được nung ở nhiệt độ dưới 800°C không được coi là nung.", "Chương này không bao gồm: các sản phẩm thuộc nhóm 28.44; các sản phẩm thuộc nhóm 68.04; các sản phẩm thuộc Chương 71; gốm kim loại thuộc nhóm 81.13."],
    notesEn: ["This Chapter applies only to ceramic products which have been fired after shaping. Articles heated to temperatures less than 800°C are not considered to be fired.", "This Chapter does not cover: products of heading 28.44; articles of heading 68.04; articles of Chapter 71; cermets of heading 81.13."],
    generalVi: "Thuật ngữ \"các sản phẩm gốm\" áp dụng cho các sản phẩm thu được bằng cách nung các vật liệu phi kim loại, vô cơ đã được chuẩn bị và tạo hình trước đó. Công đoạn nung sau khi tạo hình là cơ sở phân biệt chủ yếu giữa các sản phẩm của chương này với các sản phẩm khoáng hoặc đá được phân loại ở Chương 68.",
    generalEn: "The term \"ceramic products\" applies to products obtained by firing inorganic, non-metallic materials which have been prepared and shaped previously. Firing after shaping is the essential distinction between the goods of this Chapter and the mineral or stone articles classified in Chapter 68.",
    headings: [
      { code: "69.01", titleVi: "Gạch, gạch khối, tấm lát và các loại hàng gốm sứ khác làm từ bột silic hóa thạch", titleEn: "Bricks, blocks, tiles and other ceramic goods of siliceous fossil meals", contentVi: "Nhóm này bao gồm tất cả các sản phẩm được làm từ bột silic hóa thạch hoặc đất silic tương tự như đất tảo cát, tripolit, diatomit.", contentEn: "This heading covers all products made from siliceous fossil meals or similar siliceous earths such as kieselguhr, tripolite, diatomite." },
      { code: "69.02", titleVi: "Gạch, gạch khối, tấm lát chịu lửa và các loại vật liệu xây dựng bằng gốm sứ chịu lửa tương tự", titleEn: "Refractory bricks, blocks, tiles and similar refractory ceramic constructional goods", contentVi: "Nhóm này bao gồm một nhóm các sản phẩm chịu lửa thường được dùng trong xây dựng lò, lò nung cho các ngành công nghiệp luyện kim, hoá chất, gốm, thủy tinh.", contentEn: "This heading covers a group of refractory products commonly used in the construction of furnaces, kilns for metallurgical, chemical, ceramic, glass industries." },
      { code: "69.04", titleVi: "Gạch xây dựng, gạch khối lát nền, tấm đỡ hoặc tấm lót và các loại tương tự bằng gốm sứ", titleEn: "Ceramic building bricks, flooring blocks, support or filler tiles and the like", contentVi: "Nhóm này bao gồm gạch gốm sứ không chịu lửa thuộc loại thường được dùng để xây tường, nhà, thân ống khói công nghiệp.", contentEn: "This heading covers non-refractory ceramic bricks of the kind commonly used for building walls, houses, industrial chimney-stacks." },
      { code: "69.07", titleVi: "Các loại phiến lát và gạch lát đường, lát nền và lòng lò hoặc gạch ốp tường bằng gốm sứ; các khối khảm bằng gốm sứ", titleEn: "Ceramic flags and paving, hearth or wall tiles; ceramic mosaic cubes and the like", contentVi: "Nhóm này bao gồm các loại phiến lát và gạch lát bằng gốm sứ, thường được sử dụng để lát hoặc ốp tường, lát nền.", contentEn: "This heading covers ceramic flags and tiles, commonly used for paving or wall covering." },
      { code: "69.10", titleVi: "Bồn rửa, chậu giặt, bồn tắm, bệ xí, bình xả nước và các vật cố định tương tự dùng cho vệ sinh bằng gốm sứ", titleEn: "Ceramic sinks, wash basins, baths, water closet pans, flushing cisterns and similar sanitary fixtures", contentVi: "Nhóm này bao gồm tất cả các loại thiết bị vệ sinh cố định bằng gốm sứ như bồn rửa mặt, bồn tắm, bệ xí, bình xả nước.", contentEn: "This heading covers all ceramic sanitary fixtures such as wash basins, baths, water closet pans, flushing cisterns." },
      { code: "69.11", titleVi: "Bộ đồ ăn, bộ đồ nhà bếp, đồ gia dụng khác và đồ vệ sinh, bằng sứ hoặc đồ sứ", titleEn: "Tableware, kitchenware, other household articles and toilet articles, of porcelain or china", contentVi: "Nhóm này bao gồm các đồ gia dụng bằng sứ hoặc đồ sứ như bộ đồ ăn, bộ đồ bếp, các đồ vệ sinh.", contentEn: "This heading covers household articles of porcelain or china such as tableware, kitchenware, toilet articles." }
    ]
  },
  {
    chapter: 70,
    section: 13,
    sectionTitleVi: "SẢN PHẨM BẰNG ĐÁ, THẠCH CAO, XI MĂNG, AMIĂNG, MICA; ĐỒ GỐM SỨ; THỦY TINH",
    sectionTitleEn: "ARTICLES OF STONE, PLASTER, CEMENT, ASBESTOS, MICA; CERAMIC PRODUCTS; GLASS AND GLASSWARE",
    titleVi: "Thủy tinh và các sản phẩm bằng thủy tinh",
    titleEn: "Glass and glassware",
    notesVi: ["Chương này không bao gồm: (a) Hàng hóa thuộc nhóm 32.07 (men kính, frit thủy tinh, thủy tinh ở dạng bột, hạt hoặc vẩy); (b) Các sản phẩm thuộc Chương 71; (c) Cáp sợi quang thuộc nhóm 85.44, vật cách điện (nhóm 85.46).", "Khái niệm \"thủy tinh\" bao gồm cả thạch anh nung chảy và dioxit silic nung chảy khác."],
    notesEn: ["This Chapter does not cover: (a) Goods of heading 32.07 (vitrifiable enamels and glazes, glass frit, other glass in powder, granule or flake form); (b) Articles of Chapter 71; (c) Optical fibre cables of heading 85.44, electrical insulators (heading 85.46).", "The expression \"glass\" includes fused quartz and other fused silica."],
    generalVi: "Chương này bao gồm thủy tinh ở tất cả các dạng và các sản phẩm bằng thủy tinh. Thủy tinh là một hỗn hợp nấu chảy đồng nhất của silicat kiềm với một hay nhiều silicat của canxi và chì. Chương này cũng bao gồm thủy tinh trắng đục hoặc mờ đục, các vật liệu gốm-thủy tinh, thủy tinh có hệ số giãn nở thấp như thủy tinh borosilicat.",
    generalEn: "This Chapter covers glass in all its forms and glassware. Glass is a homogeneous fused mixture of alkaline silicates with one or more silicates of calcium and lead. This Chapter also covers milk or opal glasses, glass-ceramics, glass having a low coefficient of expansion such as borosilicate glass.",
    headings: [
      { code: "70.01", titleVi: "Thủy tinh vụn và thủy tinh phế liệu; thủy tinh ở dạng khối", titleEn: "Cullet and other waste and scrap of glass; glass in the mass", contentVi: "Nhóm này bao gồm thủy tinh vụn và thủy tinh phế liệu của tất cả các loại thu được từ quá trình gia công thủy tinh; thủy tinh ở dạng khối không có mục đích sử dụng cụ thể.", contentEn: "This heading covers waste and scrap of glass of all kinds arising from the manufacture of glass; glass in the mass with no particular intended use." },
      { code: "70.02", titleVi: "Thủy tinh ở dạng hình cầu, dạng thanh hoặc ống, chưa gia công", titleEn: "Glass in balls, rods or tubes, unworked", contentVi: "Nhóm này bao gồm thủy tinh ở dạng hình cầu đặc, các thanh và ống thủy tinh có đường kính khác nhau, được sử dụng cho nhiều mục đích.", contentEn: "This heading covers solid glass balls, glass rods and tubes of various diameters, used for many purposes." },
      { code: "70.03", titleVi: "Thủy tinh đúc và thủy tinh cán, ở dạng tấm hoặc dạng hình", titleEn: "Cast glass and rolled glass, in sheets or profiles", contentVi: "Nhóm này bao gồm tất cả các loại thủy tinh đúc và thủy tinh cán ở dạng tấm hoặc dạng hình.", contentEn: "This heading covers all cast and rolled glass in sheets or in profiles." },
      { code: "70.05", titleVi: "Thủy tinh nổi và thủy tinh mài hoặc đánh bóng bề mặt, ở dạng tấm", titleEn: "Float glass and surface ground or polished glass, in sheets", contentVi: "Nhóm này bao gồm thủy tinh nổi và thủy tinh mài hoặc đánh bóng bề mặt ở dạng tấm. Kính nổi được sản xuất bằng cách làm nổi thủy tinh nóng chảy trên bề mặt kim loại nóng chảy.", contentEn: "This heading covers float glass and surface ground or polished glass in sheets. Float glass is manufactured by floating molten glass on a surface of molten metal." },
      { code: "70.07", titleVi: "Kính an toàn, kể cả kính được tôi cứng hoặc kính dán nhiều lớp", titleEn: "Safety glass, consisting of toughened (tempered) or laminated glass", contentVi: "Nhóm này bao gồm kính tôi (thu được bằng cách nung nóng và làm nguội nhanh) và kính dán nhiều lớp (được làm ở dạng nhiều lớp, có lớp xen kẽ bằng nhựa dẻo).", contentEn: "This heading covers toughened glass (obtained by heating and rapid cooling) and laminated glass (made in multiple layers with plastic interlayers)." },
      { code: "70.09", titleVi: "Gương thủy tinh, có hoặc không có khung, kể cả gương chiếu hậu", titleEn: "Glass mirrors, whether or not framed, including rear-view mirrors", contentVi: "Nhóm này bao gồm gương kính có một mặt đã được phủ kim loại để tạo sự phản chiếu, bao gồm gương ở dạng tấm, gương đã được tạo hình, gương chiếu hậu.", contentEn: "This heading covers glass mirrors with one surface coated with metal to produce reflection, including mirrors in sheets, shaped mirrors, rear-view mirrors." },
      { code: "70.10", titleVi: "Bình lớn, chai, bình thót cổ, lọ, ống, ống dạng ampoule và các loại đồ chứa khác bằng thủy tinh, dùng trong vận chuyển hoặc đóng hàng; nút chai, nắp đậy bằng thủy tinh", titleEn: "Carboys, bottles, flasks, jars, pots, phials, ampoules and other containers, of glass, for the conveyance or packing of goods; stoppers, lids and other closures, of glass", contentVi: "Nhóm này bao gồm tất cả các đồ chứa bằng thủy tinh thuộc loại thường dùng cho các mục đích thương mại để vận chuyển hoặc đóng các chất lỏng hay các sản phẩm rắn khác.", contentEn: "This heading covers all glass containers commonly used for commercial purposes for the conveyance or packing of liquids or other products." },
      { code: "70.13", titleVi: "Đồ thủy tinh dùng trong gia dụng, trong văn phòng, để trang trí nội thất hoặc cho các mục đích tương tự", titleEn: "Glassware of a kind used for table, kitchen, toilet, office, indoor decoration or similar purposes", contentVi: "Nhóm này bao gồm đồ thủy tinh dùng trong gia dụng, trong văn phòng, để trang trí nội thất, bao gồm bộ đồ ăn (ly, cốc, đĩa, bát), đồ bếp, đồ trang trí (lọ hoa, bình, tượng nhỏ).", contentEn: "This heading covers glassware used for household, office, indoor decoration, including tableware (glasses, cups, plates, bowls), kitchenware, decorative articles (vases, ornaments, statuettes)." }
    ]
  },
  {
    chapter: 71,
    section: 14,
    sectionTitleVi: "NGỌC TRAI TỰ NHIÊN HOẶC NUÔI CẤY, ĐÁ QUÝ HOẶC ĐÁ BÁN QUÝ, KIM LOẠI QUÝ, KIM LOẠI ĐƯỢC DÁT PHỦ KIM LOẠI QUÝ, VÀ CÁC SẢN PHẨM CỦA CHÚNG; ĐỒ TRANG SỨC LÀM BẰNG CHẤT LIỆU KHÁC; TIỀN KIM LOẠI",
    sectionTitleEn: "NATURAL OR CULTURED PEARLS, PRECIOUS OR SEMI-PRECIOUS STONES, PRECIOUS METALS, METALS CLAD WITH PRECIOUS METAL, AND ARTICLES THEREOF; IMITATION JEWELLERY; COIN",
    titleVi: "Ngọc trai tự nhiên hoặc nuôi cấy, đá quý hoặc đá bán quý, kim loại quý, kim loại được dát phủ kim loại quý, và các sản phẩm của chúng; đồ trang sức làm bằng chất liệu khác; tiền kim loại",
    titleEn: "Natural or cultured pearls, precious or semi-precious stones, precious metals, metals clad with precious metal, and articles thereof; imitation jewellery; coin",
    notesVi: [
      "Theo Chú giải 1 (A) của Phần VI và loại trừ những sản phẩm được liệt kê ở các mục dưới đây, thì tất cả các sản phẩm gồm toàn bộ hoặc từng phần bằng: (a) Ngọc trai tự nhiên hoặc nuôi cấy hoặc bằng đá quý hoặc đá bán quý (tự nhiên, tổng hợp hoặc tái tạo), hoặc (b) Kim loại quý hoặc kim loại dát phủ kim loại quý, được phân loại trong Chương này.",
      "Các nhóm 71.13, 71.14 và 71.15 không bao gồm các sản phẩm mà trong đó kim loại quý hoặc kim loại được dát phủ kim loại quý chỉ đóng vai trò như là thành phần phụ, chẳng hạn như các đồ đính kèm hoặc đồ trang trí phụ (ví dụ, chữ lồng, đai và viền), và mục (b) của Chú giải trên không áp dụng cho các sản phẩm này.",
      "Chương này không bao gồm: (a) Hỗn hống của kim loại quý, hoặc kim loại quý dạng keo (nhóm 28.43); (b) Vật liệu khâu vô trùng trong phẫu thuật, các chất hàn răng hoặc các hàng hóa khác thuộc Chương 30; (c) Các sản phẩm thuộc Chương 32 (ví dụ, các chất bóng); (d) Các chất xúc tác có nền (nhóm 38.15); (e) Các sản phẩm thuộc nhóm 42.02 hoặc 42.03 ghi trong Chú giải 3 (B) của Chương 42; (f) Các sản phẩm thuộc nhóm 43.03 hoặc 43.04; (g) Hàng hóa thuộc Phần XI (nguyên liệu dệt và các sản phẩm dệt); (h) Giày dép, mũ và các vật đội đầu khác hoặc các sản phẩm khác thuộc Chương 64 hoặc 65; (ij) Ô dù, batoong, gậy chống hoặc các sản phẩm khác thuộc Chương 66."
    ],
    notesEn: [
      "Subject to Note 1 (A) to Section VI and except as provided below, all articles consisting wholly or partly: (a) Of natural or cultured pearls or of precious or semi-precious stones (natural, synthetic or reconstructed), or (b) Of precious metal or of metal clad with precious metal, are to be classified in this Chapter.",
      "Headings 71.13, 71.14 and 71.15 do not cover articles in which precious metal or metal clad with precious metal is present as minor constituents only, such as minor fittings or minor ornamentation (for example, monograms, ferrules and rims), and paragraph (b) of the foregoing Note does not apply to such articles.",
      "This Chapter does not cover: (a) Amalgams of precious metal, or colloidal precious metal (heading 28.43); (b) Sterile surgical suture materials, dental fillings or other goods of Chapter 30; (c) Goods of Chapter 32 (for example, lustres); (d) Supported catalysts (heading 38.15); (e) Articles of heading 42.02 or 42.03 referred to in Note 3 (B) to Chapter 42; (f) Articles of heading 43.03 or 43.04; (g) Goods of Section XI (textiles and textile articles); (h) Footwear, headgear or other articles of Chapter 64 or 65; (ij) Umbrellas, walking-sticks or other articles of Chapter 66."
    ],
    generalVi: "Chương này bao gồm: (1) Trong các nhóm từ 71.01 đến 71.04, ngọc trai tự nhiên hoặc nhân tạo, kim cương, các loại đá quý hoặc đá bán quý khác (tự nhiên, tổng hợp hoặc tái tạo), ngọc trai thô hoặc ngọc trai thô, nhưng chưa được gắn, nạm dát hoặc xâu chuỗi; trong nhóm 71.05, phế liệu từ quá trình gia công các loại đá. (2) Trong các nhóm từ 71.06 đến 71.11, các kim loại quý và kim loại được phủ kim loại quý, chưa được gia công, bán thành phẩm, hoặc ở dạng bột; trong nhóm 71.12, phế liệu và phế thải của kim loại quý. Theo Chú giải 4 của Chương này, khái niệm 'kim loại quý' có nghĩa là bạc, vàng và bạch kim. Thuật ngữ 'bạch kim' cũng bao gồm iridi, osmi, paladi, rhodi và rutheni.",
    generalEn: "This Chapter covers: (1) In headings 71.01 to 71.04, natural or cultured pearls, diamonds, other precious or semi-precious stones (natural, synthetic or reconstructed), but not mounted or set; in heading 71.05, waste from the working of such stones. (2) In headings 71.06 to 71.11, precious metals and metals clad with precious metal, unwrought, semi-manufactured, or in powder form; in heading 71.12, waste and scrap of precious metals. According to Note 4 to this Chapter, 'precious metal' means silver, gold and platinum. The term 'platinum' also includes iridium, osmium, palladium, rhodium and ruthenium.",
    headings: [
      { code: "71.01", titleVi: "Ngọc trai, tự nhiên hoặc nuôi cấy, đã hoặc chưa được gia công hoặc phân loại nhưng chưa xâu thành chuỗi, chưa gắn hoặc nạm dát; ngọc trai, tự nhiên hoặc nuôi cấy, đã được xâu thành chuỗi tạm thời để tiện vận chuyển", titleEn: "Natural or cultured pearls, whether or not worked or graded but not strung, mounted or set; natural or cultured pearls, temporarily strung for convenience of transport", contentVi: "Ngọc trai được phân loại trong nhóm này là kết quả của sự tiết chất tự nhiên của nhiều loại động vật thân mềm nước biển và nước ngọt (đặc biệt là của con sò ngọc trai và con trai ngọc trai). Ngọc trai có bề mặt sáng bóng và chủ yếu bao gồm những lớp bằng cacbonat canxi. Nhóm này cũng bao gồm ngọc trai nuôi cấy (có nghĩa là những ngọc trai được tạo ra với sự can thiệp của con người).", contentEn: "Pearls classified in this heading are the result of natural secretion of certain marine and freshwater molluscs (especially pearl oysters and freshwater mussels). Pearls have a lustrous surface and consist mainly of layers of calcium carbonate. This heading also covers cultured pearls (i.e., pearls produced with human intervention)." },
      { code: "71.02", titleVi: "Kim cương, đã hoặc chưa được gia công, nhưng chưa được gắn hoặc nạm dát", titleEn: "Diamonds, whether or not worked, but not mounted or set", contentVi: "Nhóm này bao gồm kim cương tự nhiên, là loại đá cứng nhất được biết đến và có chỉ số khúc xạ cao, tạo ra độ sáng và 'lửa' đặc trưng. Kim cương được phân loại như kim cương không dùng trong công nghiệp hoặc kim cương dùng trong công nghiệp. Kim cương công nghiệp gồm những loại không phù hợp cho đồ kim hoàn do khuyết tật hoặc màu sắc xấu.", contentEn: "This heading covers natural diamonds, the hardest known stone with high refractive index producing characteristic brilliance and 'fire'. Diamonds are classified as non-industrial or industrial. Industrial diamonds include those unsuitable for jewellery due to defects or poor colour." },
      { code: "71.03", titleVi: "Đá quý (trừ kim cương) và đá bán quý, đã hoặc chưa được gia công hoặc phân loại, nhưng chưa xâu thành chuỗi, chưa gắn hoặc nạm dát; đá quý (trừ kim cương) và đá bán quý chưa phân loại, được xâu thành chuỗi tạm thời để tiện vận chuyển", titleEn: "Precious stones (other than diamonds) and semi-precious stones, whether or not worked or graded but not strung, mounted or set; ungraded precious stones (other than diamonds) and semi-precious stones, temporarily strung for convenience of transport", contentVi: "Nhóm này bao gồm đá quý và đá bán quý tự nhiên (trừ kim cương), như ruby, sapphire, ngọc lục bảo, opal, thạch anh, ngọc bích, topaz, garnet và nhiều loại đá quý khác được liệt kê trong Phụ lục của Chương này.", contentEn: "This heading covers natural precious and semi-precious stones (other than diamonds), such as rubies, sapphires, emeralds, opals, quartz, jade, topaz, garnets and many other precious stones listed in the Annex to this Chapter." },
      { code: "71.04", titleVi: "Đá quý hoặc đá bán quý tổng hợp hoặc tái tạo, đã hoặc chưa được gia công hoặc phân loại, nhưng chưa xâu thành chuỗi, chưa gắn hoặc nạm dát; đá quý hoặc đá bán quý tổng hợp hoặc tái tạo chưa được phân loại, xâu thành chuỗi tạm thời để tiện vận chuyển", titleEn: "Synthetic or reconstructed precious or semi-precious stones, whether or not worked or graded but not strung, mounted or set; ungraded synthetic or reconstructed precious or semi-precious stones, temporarily strung for convenience of transport", contentVi: "Nhóm này bao gồm đá quý và đá bán quý tổng hợp được sản xuất bằng phương pháp hoá học có cùng thành phần hoá học và cấu trúc tinh thể như đá tự nhiên (ví dụ: rubi, saphia, emerald, kim cương tổng hợp, thạch anh áp điện). Nhóm cũng bao gồm đá tái tạo thu được từ việc thiêu kết, nén ép hoặc nung chảy các mảnh đá quý tự nhiên.", contentEn: "This heading covers synthetic precious and semi-precious stones produced chemically with the same chemical composition and crystal structure as natural stones (e.g., rubies, sapphires, emeralds, synthetic diamonds, piezo-electric quartz). It also covers reconstructed stones obtained by sintering, pressing or fusing fragments of natural precious stones." },
      { code: "71.05", titleVi: "Bụi và bột của đá quý hoặc đá bán quý tự nhiên hoặc tổng hợp", titleEn: "Dust and powder of natural or synthetic precious or semi-precious stones", contentVi: "Nhóm này bao gồm bụi và bột thu được từ việc đánh bóng hoặc mài các loại đá thuộc ba nhóm trước. Quan trọng nhất trong các bụi này là bụi kim cương và bụi đá garnet. Bụi và bột này thường được sử dụng cho các mục đích mài mòn.", contentEn: "This heading covers dust and powder obtained from polishing or grinding stones of the three preceding headings. The most important of these are diamond dust and garnet dust. Such dust and powder are commonly used for abrasive purposes." },
      { code: "71.06", titleVi: "Bạc (kể cả bạc được mạ vàng hoặc bạch kim), chưa gia công hoặc ở dạng bán thành phẩm, hoặc dạng bột", titleEn: "Silver (including silver plated with gold or platinum), unwrought or in semi-manufactured forms, or in powder form", contentVi: "Nhóm này bao gồm nhiều dạng khác nhau như chưa gia công, dạng bán thành phẩm hoặc dạng bột của bạc hoặc các hợp kim bạc, của bạc mạ vàng hoặc của bạc mạ bạch kim. Bạc là kim loại màu trắng, không bị gỉ trong môi trường không khí, là chất dẫn nhiệt và dẫn điện tốt nhất.", contentEn: "This heading covers various forms such as unwrought, semi-manufactured or powder of silver or silver alloys, of silver plated with gold or platinum. Silver is a white metal that does not rust in air and is the best conductor of heat and electricity." },
      { code: "71.07", titleVi: "Kim loại cơ bản dát phủ bạc, chưa gia công quá mức bán thành phẩm", titleEn: "Base metals clad with silver, not further worked than semi-manufactured", contentVi: "Nhóm này bao gồm các kim loại cơ bản được dát phủ bạc, ở dạng bán thành phẩm như thanh, que, dây, tấm, ống.", contentEn: "This heading covers base metals clad with silver, in semi-manufactured forms such as bars, rods, wire, sheets, tubes." },
      { code: "71.08", titleVi: "Vàng (kể cả vàng mạ bạch kim), chưa gia công hoặc ở dạng bán thành phẩm, hoặc dạng bột", titleEn: "Gold (including gold plated with platinum) unwrought or in semi-manufactured forms, or in powder form", contentVi: "Nhóm này bao gồm vàng chưa gia công (thỏi, khối, hạt), vàng ở dạng bán thành phẩm (thanh, que, dây, tấm, lá) và vàng ở dạng bột. Vàng là kim loại màu vàng đặc trưng, không bị gỉ và rất bền với hầu hết các hoá chất.", contentEn: "This heading covers unwrought gold (ingots, blocks, granules), gold in semi-manufactured forms (bars, rods, wire, sheets, strips) and gold in powder form. Gold is a characteristically yellow metal that does not rust and is very resistant to most chemicals." },
      { code: "71.09", titleVi: "Kim loại cơ bản hoặc bạc, dát phủ vàng, chưa gia công quá mức bán thành phẩm", titleEn: "Base metals or silver, clad with gold, not further worked than semi-manufactured", contentVi: "Nhóm này bao gồm các kim loại cơ bản hoặc bạc được dát phủ vàng, ở dạng bán thành phẩm.", contentEn: "This heading covers base metals or silver clad with gold, in semi-manufactured forms." },
      { code: "71.10", titleVi: "Bạch kim, chưa gia công hoặc ở dạng bán thành phẩm, hoặc ở dạng bột", titleEn: "Platinum, unwrought or in semi-manufactured forms, or in powder form", contentVi: "Nhóm này bao gồm bạch kim và các kim loại thuộc nhóm bạch kim (iridi, osmi, paladi, rhodi và rutheni). Bạch kim là kim loại màu trắng xám, mềm và dễ kéo sợi, không bị xỉn mờ trong nhiệt độ phòng và bền với axít trừ nước cường toan.", contentEn: "This heading covers platinum and the platinum group metals (iridium, osmium, palladium, rhodium and ruthenium). Platinum is a greyish-white metal, soft and ductile, does not tarnish at room temperature and is resistant to acids except aqua regia." },
      { code: "71.11", titleVi: "Kim loại cơ bản, bạc hoặc vàng, dát phủ bạch kim, chưa gia công quá mức bán thành phẩm", titleEn: "Base metals, silver or gold, clad with platinum, not further worked than semi-manufactured", contentVi: "Nhóm này bao gồm các kim loại cơ bản, bạc hoặc vàng được dát phủ bạch kim, ở dạng bán thành phẩm.", contentEn: "This heading covers base metals, silver or gold clad with platinum, in semi-manufactured forms." },
      { code: "71.12", titleVi: "Phế liệu và mảnh vụn của kim loại quý hoặc của kim loại dát phủ kim loại quý; phế liệu và mảnh vụn khác chứa kim loại quý hoặc các hợp chất kim loại quý, loại sử dụng chủ yếu cho việc thu hồi kim loại quý, trừ hàng hóa thuộc nhóm 85.49", titleEn: "Waste and scrap of precious metal or of metal clad with precious metal; other waste and scrap containing precious metal or precious metal compounds, of a kind used principally for the recovery of precious metal, other than goods of heading 85.49", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn kim loại chỉ phù hợp cho quá trình thu hồi kim loại quý, bao gồm tro có chứa kim loại quý, phế liệu từ gia công cơ khí kim loại quý (vụn, bụi, phoi), phế thải của sản phẩm hỏng hoặc gãy vỡ.", contentEn: "This heading covers waste and scrap suitable only for recovery of precious metal, including ash containing precious metal, waste from mechanical working of precious metal (turnings, dust, filings), waste from broken or damaged products." },
      { code: "71.13", titleVi: "Đồ trang sức và các bộ phận của đồ trang sức, bằng kim loại quý hoặc kim loại được dát phủ kim loại quý", titleEn: "Articles of jewellery and parts thereof, of precious metal or of metal clad with precious metal", contentVi: "Nhóm này bao gồm các mặt hàng kim hoàn: (A) Các đồ trang sức cá nhân nhỏ như nhẫn, vòng đeo tay, vòng cổ, trâm cài, hoa tai, dây đeo cổ, dây đồng hồ, mặt dây chuyền, ghim cài cà vạt, khuy cài cổ tay áo, các huy chương hoặc huy hiệu. (B) Các sản phẩm sử dụng cá nhân thuộc loại mang theo thông thường trong túi như hộp thuốc lá, hộp phấn, ví tay có dây, chuỗi tràng hạt.", contentEn: "This heading covers articles of jewellery: (A) Small personal ornaments such as rings, bracelets, necklaces, brooches, earrings, watch straps and chains, pendants, tie clips, cufflinks, medals or badges. (B) Personal articles normally carried in the pocket such as cigarette cases, powder compacts, chain purses, rosaries." },
      { code: "71.14", titleVi: "Đồ kỹ nghệ vàng hoặc bạc và các bộ phận của đồ kỹ nghệ vàng hoặc bạc, bằng kim loại quý hoặc kim loại được dát phủ kim loại quý", titleEn: "Articles of goldsmiths' or silversmiths' wares and parts thereof, of precious metal or of metal clad with precious metal", contentVi: "Nhóm này bao gồm các sản phẩm kỹ nghệ vàng bạc như các đồ vật trang trí, bộ đồ ăn, đồ vệ sinh, đồ dùng của người hút thuốc và các sản phẩm khác sử dụng trong gia đình, văn phòng hoặc tôn giáo.", contentEn: "This heading covers goldsmiths' or silversmiths' wares such as ornaments, tableware, toilet articles, smokers' requisites and other articles for domestic, office or religious use." },
      { code: "71.15", titleVi: "Các sản phẩm khác bằng kim loại quý hoặc kim loại dát phủ kim loại quý", titleEn: "Other articles of precious metal or of metal clad with precious metal", contentVi: "Nhóm này bao gồm các sản phẩm khác bằng kim loại quý hoặc kim loại dát phủ kim loại quý không được phân loại ở nơi khác trong Chương này.", contentEn: "This heading covers other articles of precious metal or metal clad with precious metal not classified elsewhere in this Chapter." },
      { code: "71.16", titleVi: "Các sản phẩm bằng ngọc trai tự nhiên hoặc nuôi cấy, đá quý hoặc đá bán quý (tự nhiên, tổng hợp hoặc tái tạo)", titleEn: "Articles of natural or cultured pearls, precious or semi-precious stones (natural, synthetic or reconstructed)", contentVi: "Nhóm này bao gồm các sản phẩm bằng ngọc trai hoặc đá quý/đá bán quý (tự nhiên, tổng hợp hoặc tái tạo), với kim loại quý hoặc kim loại dát phủ kim loại quý chỉ biểu hiện như những thành phần phụ, như cây thánh giá, vòng, ly, tượng nhỏ, cối giã, dao dọc giấy, gạt tàn thuốc lá bằng mã não.", contentEn: "This heading covers articles of pearls or precious/semi-precious stones (natural, synthetic or reconstructed), with precious metal or metal clad with precious metal present only as minor constituents, such as crosses, rings, cups, statuettes, mortars, paper knives, ashtrays of agate." },
      { code: "71.17", titleVi: "Đồ trang sức làm bằng chất liệu khác", titleEn: "Imitation jewellery", contentVi: "Nhóm này bao gồm đồ trang sức cá nhân nhỏ như nhẫn, vòng đeo tay, vòng cổ, hoa tai, khuy cài cổ tay, không gắn kim loại quý hoặc kim loại dát phủ kim loại quý (trừ trường hợp tráng mạ hoặc chỉ là thành phần phụ) và cũng không gắn ngọc trai tự nhiên hoặc nhân tạo, đá quý hoặc đá bán quý.", contentEn: "This heading covers small personal ornaments such as rings, bracelets, necklaces, earrings, cufflinks, not containing precious metal or metal clad with precious metal (except as plating or minor constituents) and not containing natural or cultured pearls, precious or semi-precious stones." },
      { code: "71.18", titleVi: "Tiền kim loại", titleEn: "Coin", contentVi: "Nhóm này áp dụng cho những đồng tiền kim loại bằng kim loại bất kỳ (kể cả kim loại quý) theo trọng lượng và hình dáng tạo mẫu trang trí được quy định chính thức, được phát hành dưới sự kiểm soát của chính phủ như một loại tiền tệ chính thức. Nhóm này gồm cả tiền kim loại không còn giá trị tiền tệ hợp pháp.", contentEn: "This heading applies to coins of any metal (including precious metal) of a weight and design officially prescribed, issued under the control of a government as legal tender. This heading also includes demonetised coins." }
    ]
  },
  {
    chapter: 72,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Sắt và thép",
    titleEn: "Iron and steel",
    notesVi: [
      "Phần này không bao gồm: (a) Sơn, mực hoặc các sản phẩm khác đã được pha chế với chất cơ bản là vảy hoặc bột kim loại; (b) Hợp kim ferro-xeri hoặc các hợp kim tự cháy khác; (c) Mũ và các vật đội đầu khác hoặc các bộ phận của chúng; (d) Khung ô hoặc các sản phẩm khác thuộc nhóm 66.03; (e) Hàng hóa thuộc Chương 71; (f) Các sản phẩm thuộc Phần XVI (máy móc, các thiết bị cơ khí và đồ điện); (g) Đường ray đường sắt hoặc đường ray tàu điện đã được lắp ráp hoặc các sản phẩm khác thuộc Phần XVII; (h) Dụng cụ hoặc thiết bị phụ tùng thuộc Phần XVIII; (ij) Các viên chì nhỏ được chế tạo để sản xuất đạn dược hoặc các sản phẩm khác thuộc Phần XIX; (k) Các mặt hàng thuộc Chương 94; (l) Các sản phẩm thuộc Chương 95; (m) Giần, sàng bằng tay, khuy, bút máy, quản bút chì, ngòi bút, chân để loại một chân, hai chân, ba chân và các sản phẩm tương tự hoặc các sản phẩm khác thuộc Chương 96; hoặc (n) Các sản phẩm thuộc Chương 97.",
      "Trong Chương này, thuật ngữ 'gang thỏi' có nghĩa là sắt có chứa carbon từ 2% trở lên tính theo trọng lượng và có thể chứa một hay nhiều nguyên tố khác. Thuật ngữ 'thép hợp kim' và 'thép không hợp kim' được định nghĩa dựa trên hàm lượng các nguyên tố hợp kim trong thành phần thép."
    ],
    notesEn: [
      "This Section does not cover: (a) Prepared paints, inks or other products with a basis of metallic flakes or powder; (b) Ferro-cerium or other pyrophoric alloys; (c) Headgear or parts thereof; (d) Umbrella frames or other articles of heading 66.03; (e) Goods of Chapter 71; (f) Articles of Section XVI (machinery, mechanical appliances and electrical goods); (g) Assembled railway or tramway track or other articles of Section XVII; (h) Instruments or apparatus of Section XVIII; (ij) Lead shot prepared for ammunition or other articles of Section XIX; (k) Articles of Chapter 94; (l) Articles of Chapter 95; (m) Hand sieves, buttons, pens, pencil-holders, pen nibs, monopods, bipods, tripods and similar articles or other articles of Chapter 96; or (n) Articles of Chapter 97.",
      "In this Chapter, the term 'pig iron' means iron containing by weight 2% or more of carbon and may contain one or more other elements. The terms 'alloy steel' and 'non-alloy steel' are defined based on the content of alloying elements in the steel composition."
    ],
    generalVi: "Chương này bao gồm các kim loại đen, có nghĩa là gang thỏi, gang kính, hợp kim fero và các vật liệu thô khác (phân Chương I), cũng như một số các sản phẩm của ngành công nghiệp sắt và thép (dạng thỏi và các dạng thô khác, bán thành phẩm và các sản phẩm chính thu được trực tiếp từ đó) bằng sắt hoặc thép không hợp kim (phân Chương II), bằng thép không gỉ (phân Chương III) và bằng thép hợp kim (phân Chương IV). Các sản phẩm được gia công tiếp theo, như đúc, rèn, và cọc cừ, thép góc, khuôn và hình được hàn, các đường ống và nguyên vật liệu xây dựng đường ray xe lửa và đường tàu điện được phân loại ở Chương 73.",
    generalEn: "This Chapter covers ferrous metals, namely pig iron, spiegeleisen, ferro-alloys and other primary materials (Sub-Chapter I), as well as certain products of the iron and steel industry (ingots and other primary forms, semi-finished products and main products obtained directly therefrom) of non-alloy steel (Sub-Chapter II), stainless steel (Sub-Chapter III) and alloy steel (Sub-Chapter IV). Further worked products, such as castings, forgings, and sheet piling, welded angles, shapes and sections, tubes and railway or tramway construction materials are classified in Chapter 73.",
    headings: [
      { code: "72.01", titleVi: "Gang thỏi và gang kính ở dạng thỏi, khối hoặc dạng thô khác", titleEn: "Pig iron and spiegeleisen in pigs, blocks or other primary forms", contentVi: "Nhóm này bao gồm gang thỏi và gang kính ở dạng thỏi, khối hoặc các dạng thô khác, thu được từ quặng sắt trong lò cao hoặc lò điện.", contentEn: "This heading covers pig iron and spiegeleisen in pigs, blocks or other primary forms, obtained from iron ore in blast furnaces or electric furnaces." },
      { code: "72.02", titleVi: "Hợp kim fero", titleEn: "Ferro-alloys", contentVi: "Nhóm này bao gồm các hợp kim fero như fero-mangan, fero-silic, fero-silic-mangan, fero-crôm, fero-niken, fero-molipđen, fero-vonfram và các hợp kim fero khác. Các hợp kim fero được sử dụng trong công nghiệp sắt thép chủ yếu để thêm các thành phần hợp kim cho thép.", contentEn: "This heading covers ferro-alloys such as ferro-manganese, ferro-silicon, ferro-silico-manganese, ferro-chromium, ferro-nickel, ferro-molybdenum, ferro-tungsten and other ferro-alloys. Ferro-alloys are used in the iron and steel industry mainly to add alloying elements to steel." },
      { code: "72.03", titleVi: "Các sản phẩm chứa sắt được hoàn nguyên trực tiếp từ quặng sắt và các sản phẩm sắt xốp khác, dạng tảng, cục hoặc các dạng tương tự; sắt có độ tinh khiết tối thiểu là 99,94%, ở dạng tảng, cục hoặc các dạng tương tự", titleEn: "Ferrous products obtained by direct reduction of iron ore and other spongy ferrous products, in lumps, pellets or similar forms; iron having a minimum purity by weight of 99.94%, in lumps, pellets or similar forms", contentVi: "Nhóm này bao gồm các sản phẩm có chứa sắt thu được bằng cách hoàn nguyên quặng sắt không nung chảy (sắt xốp). Những sản phẩm này thu được từ quặng ở dạng cục hoặc hạt hoặc từ quặng tinh ở dạng bánh hoặc viên.", contentEn: "This heading covers ferrous products produced by reducing the ore without fusion (sponge iron). These products are obtained from ore in lumps or in granules or from concentrated ore in the form of briquettes or pellets." },
      { code: "72.04", titleVi: "Phế liệu và mảnh vụn sắt; thỏi đúc phế liệu nấu lại từ sắt hoặc thép", titleEn: "Ferrous waste and scrap; remelting scrap ingots of iron or steel", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn sắt hoặc thép, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí sắt hoặc thép, và các sản phẩm sắt hoặc thép không sử dụng được nữa. Nhóm cũng bao gồm thỏi đúc phế liệu nấu lại.", contentEn: "This heading covers ferrous waste and scrap, including waste from the manufacture or mechanical working of iron or steel, and iron or steel articles definitely not usable. The heading also covers remelting scrap ingots." },
      { code: "72.05", titleVi: "Hạt và bột, của gang thỏi, gang kính, sắt hoặc thép", titleEn: "Granules and powders, of pig iron, spiegeleisen, iron or steel", contentVi: "Nhóm này bao gồm hạt và bột của gang thỏi, gang kính, sắt hoặc thép. Bột sắt hoặc thép được sử dụng trong luyện kim bột để sản xuất các chi tiết thiêu kết.", contentEn: "This heading covers granules and powders of pig iron, spiegeleisen, iron or steel. Iron or steel powders are used in powder metallurgy to produce sintered parts." },
      { code: "72.06", titleVi: "Sắt và thép không hợp kim ở dạng thỏi hoặc các dạng thô khác (trừ sắt thuộc nhóm 72.03)", titleEn: "Iron and non-alloy steel in ingots or other primary forms (excluding iron of heading 72.03)", contentVi: "Nhóm này bao gồm sắt và thép không hợp kim ở dạng thỏi hoặc các dạng thô khác, thu được từ quá trình luyện thép.", contentEn: "This heading covers iron and non-alloy steel in ingots or other primary forms, obtained from the steelmaking process." },
      { code: "72.07", titleVi: "Sắt hoặc thép không hợp kim ở dạng bán thành phẩm", titleEn: "Semi-finished products of iron or non-alloy steel", contentVi: "Nhóm này bao gồm các bán thành phẩm của sắt hoặc thép không hợp kim như phôi, phôi tấm, phôi dẹt, được sản xuất bằng đúc liên tục hoặc cán.", contentEn: "This heading covers semi-finished products of iron or non-alloy steel such as billets, slabs, blanks, produced by continuous casting or rolling." },
      { code: "72.08", titleVi: "Các sản phẩm sắt hoặc thép không hợp kim được cán phẳng, có chiều rộng từ 600 mm trở lên, được cán nóng, chưa dát phủ, phủ, mạ hoặc tráng", titleEn: "Flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, hot-rolled, not clad, plated or coated", contentVi: "Nhóm này bao gồm các sản phẩm cán phẳng bằng sắt hoặc thép không hợp kim, có chiều rộng từ 600 mm trở lên, được cán nóng, chưa được dát phủ, phủ, mạ hoặc tráng. Bao gồm cuộn rộng, thép lá và thép tấm cán nóng.", contentEn: "This heading covers flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, hot-rolled, not clad, plated or coated. Includes wide coils, hot-rolled sheets and plates." },
      { code: "72.09", titleVi: "Các sản phẩm sắt hoặc thép không hợp kim được cán phẳng, có chiều rộng từ 600 mm trở lên, cán nguội, chưa dát phủ, phủ, mạ hoặc tráng", titleEn: "Flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, cold-rolled, not clad, plated or coated", contentVi: "Nhóm này bao gồm các sản phẩm cán phẳng bằng sắt hoặc thép không hợp kim, có chiều rộng từ 600 mm trở lên, được cán nguội. Các sản phẩm này có bề mặt hoàn thiện hơn, khả năng dập nguội tốt hơn và chiều dày thường giảm mỏng hơn.", contentEn: "This heading covers flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, cold-rolled. These products have better surface finish, better aptitude to cold-forming and generally reduced thickness." },
      { code: "72.10", titleVi: "Các sản phẩm sắt hoặc thép không hợp kim được cán phẳng, có chiều rộng từ 600mm trở lên, đã dát phủ, phủ, mạ hoặc tráng", titleEn: "Flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, clad, plated or coated", contentVi: "Nhóm này bao gồm các sản phẩm cán phẳng bằng sắt hoặc thép không hợp kim, có chiều rộng từ 600 mm trở lên, đã được dát phủ, phủ, mạ hoặc tráng (thiếc, kẽm, nhôm, crôm, sơn, plastic).", contentEn: "This heading covers flat-rolled products of iron or non-alloy steel, of a width of 600 mm or more, clad, plated or coated (tin, zinc, aluminium, chromium, paint, plastics)." },
      { code: "72.11", titleVi: "Các sản phẩm sắt hoặc thép không hợp kim cán phẳng, có chiều rộng dưới 600mm, chưa dát phủ, phủ, mạ hoặc tráng", titleEn: "Flat-rolled products of iron or non-alloy steel, of a width of less than 600 mm, not clad, plated or coated", contentVi: "Nhóm này bao gồm các sản phẩm cán phẳng bằng sắt hoặc thép không hợp kim có chiều rộng dưới 600mm, chưa được dát phủ, phủ, mạ hoặc tráng.", contentEn: "This heading covers flat-rolled products of iron or non-alloy steel of a width of less than 600 mm, not clad, plated or coated." },
      { code: "72.12", titleVi: "Các sản phẩm sắt hoặc thép không hợp kim cán phẳng, có chiều rộng dưới 600mm, đã dát phủ, phủ, mạ hoặc tráng", titleEn: "Flat-rolled products of iron or non-alloy steel, of a width of less than 600 mm, clad, plated or coated", contentVi: "Nhóm này bao gồm các sản phẩm cán phẳng bằng sắt hoặc thép không hợp kim có chiều rộng dưới 600mm, đã được dát phủ, phủ, mạ hoặc tráng.", contentEn: "This heading covers flat-rolled products of iron or non-alloy steel of a width of less than 600 mm, clad, plated or coated." },
      { code: "72.13", titleVi: "Thanh và que, bằng sắt hoặc thép không hợp kim, cán nóng, ở dạng cuộn cuốn không đều", titleEn: "Bars and rods, hot-rolled, in irregularly wound coils, of iron or non-alloy steel", contentVi: "Nhóm này bao gồm thanh và que bằng sắt hoặc thép không hợp kim, cán nóng, ở dạng cuộn cuốn không đều. Các sản phẩm này có thể có khía răng cưa, gân, rãnh (thanh và que gia cố).", contentEn: "This heading covers bars and rods, hot-rolled, in irregularly wound coils, of iron or non-alloy steel. These products may have indentations, ribs, grooves (reinforcing bars)." },
      { code: "72.14", titleVi: "Thanh và que khác, bằng sắt hoặc thép không hợp kim, chưa được gia công quá mức rèn, cán nóng, kéo nóng hoặc ép đùn nóng, nhưng kể cả những sản phẩm đã được xoắn sau khi cán", titleEn: "Other bars and rods of iron or non-alloy steel, not further worked than forged, hot-rolled, hot-drawn or hot-extruded, but including those twisted after rolling", contentVi: "Nhóm này bao gồm các thanh và que khác bằng sắt hoặc thép không hợp kim, chưa được gia công quá mức rèn, cán nóng, kéo nóng hoặc ép đùn nóng.", contentEn: "This heading covers other bars and rods of iron or non-alloy steel, not further worked than forged, hot-rolled, hot-drawn or hot-extruded." },
      { code: "72.15", titleVi: "Thanh và que khác, bằng sắt hoặc thép không hợp kim", titleEn: "Other bars and rods of iron or non-alloy steel", contentVi: "Nhóm này bao gồm các thanh và que khác bằng sắt hoặc thép không hợp kim đã được gia công nguội hoặc hoàn thiện nguội.", contentEn: "This heading covers other bars and rods of iron or non-alloy steel, cold-formed or cold-finished." },
      { code: "72.16", titleVi: "Thép góc, khuôn và hình, bằng sắt hoặc thép không hợp kim", titleEn: "Angles, shapes and sections of iron or non-alloy steel", contentVi: "Nhóm này bao gồm thép góc, khuôn và hình bằng sắt hoặc thép không hợp kim, như thép chữ I, thép chữ H, thép chữ U, thép góc.", contentEn: "This heading covers angles, shapes and sections of iron or non-alloy steel, such as I-beams, H-beams, U-channels, angle sections." },
      { code: "72.17", titleVi: "Dây của sắt hoặc thép không hợp kim", titleEn: "Wire of iron or non-alloy steel", contentVi: "Nhóm này bao gồm dây của sắt hoặc thép không hợp kim, được sản xuất bằng phương pháp kéo nguội từ dây thô.", contentEn: "This heading covers wire of iron or non-alloy steel, produced by cold-drawing from wire rod." },
      { code: "72.18", titleVi: "Thép không gỉ ở dạng thỏi hoặc các dạng thô khác; bán thành phẩm bằng thép không gỉ", titleEn: "Stainless steel in ingots or other primary forms; semi-finished products of stainless steel", contentVi: "Nhóm này bao gồm thép không gỉ ở dạng thỏi hoặc các dạng thô khác và bán thành phẩm bằng thép không gỉ.", contentEn: "This heading covers stainless steel in ingots or other primary forms and semi-finished products of stainless steel." },
      { code: "72.19", titleVi: "Các sản phẩm thép không gỉ cán phẳng, có chiều rộng từ 600 mm trở lên", titleEn: "Flat-rolled products of stainless steel, of a width of 600 mm or more", contentVi: "Nhóm này bao gồm các sản phẩm thép không gỉ cán phẳng, có chiều rộng từ 600 mm trở lên.", contentEn: "This heading covers flat-rolled products of stainless steel, of a width of 600 mm or more." },
      { code: "72.20", titleVi: "Các sản phẩm thép không gỉ cán phẳng, có chiều rộng dưới 600 mm", titleEn: "Flat-rolled products of stainless steel, of a width of less than 600 mm", contentVi: "Nhóm này bao gồm các sản phẩm thép không gỉ cán phẳng, có chiều rộng dưới 600 mm.", contentEn: "This heading covers flat-rolled products of stainless steel, of a width of less than 600 mm." },
      { code: "72.21", titleVi: "Thanh và que cán nóng, ở dạng cuộn cuốn không đều, bằng thép không gỉ", titleEn: "Bars and rods, hot-rolled, in irregularly wound coils, of stainless steel", contentVi: "Nhóm này bao gồm thanh và que cán nóng, ở dạng cuộn cuốn không đều, bằng thép không gỉ.", contentEn: "This heading covers bars and rods, hot-rolled, in irregularly wound coils, of stainless steel." },
      { code: "72.22", titleVi: "Thanh và que khác bằng thép không gỉ; thép góc, khuôn và hình, bằng thép không gỉ", titleEn: "Other bars and rods of stainless steel; angles, shapes and sections of stainless steel", contentVi: "Nhóm này bao gồm các thanh và que khác bằng thép không gỉ, cũng như thép góc, khuôn và hình bằng thép không gỉ.", contentEn: "This heading covers other bars and rods of stainless steel; angles, shapes and sections of stainless steel." },
      { code: "72.23", titleVi: "Dây thép không gỉ", titleEn: "Wire of stainless steel", contentVi: "Nhóm này bao gồm dây thép không gỉ, được sản xuất bằng phương pháp kéo nguội.", contentEn: "This heading covers wire of stainless steel, produced by cold-drawing." },
      { code: "72.24", titleVi: "Thép hợp kim khác ở dạng thỏi hoặc các dạng thô khác; bán thành phẩm bằng thép hợp kim khác", titleEn: "Other alloy steel in ingots or other primary forms; semi-finished products of other alloy steel", contentVi: "Nhóm này bao gồm thép hợp kim khác (không phải thép không gỉ) ở dạng thỏi hoặc các dạng thô khác và bán thành phẩm.", contentEn: "This heading covers other alloy steel (other than stainless steel) in ingots or other primary forms and semi-finished products." },
      { code: "72.25", titleVi: "Các sản phẩm thép hợp kim khác cán phẳng, có chiều rộng từ 600 mm trở lên", titleEn: "Flat-rolled products of other alloy steel, of a width of 600 mm or more", contentVi: "Nhóm này bao gồm các sản phẩm thép hợp kim khác cán phẳng, có chiều rộng từ 600 mm trở lên.", contentEn: "This heading covers flat-rolled products of other alloy steel, of a width of 600 mm or more." },
      { code: "72.26", titleVi: "Các sản phẩm thép hợp kim khác cán phẳng, có chiều rộng dưới 600 mm", titleEn: "Flat-rolled products of other alloy steel, of a width of less than 600 mm", contentVi: "Nhóm này bao gồm các sản phẩm thép hợp kim khác cán phẳng, có chiều rộng dưới 600 mm.", contentEn: "This heading covers flat-rolled products of other alloy steel, of a width of less than 600 mm." },
      { code: "72.27", titleVi: "Thanh và que, cán nóng, ở dạng cuộn cuốn không đều, bằng thép hợp kim khác", titleEn: "Bars and rods, hot-rolled, in irregularly wound coils, of other alloy steel", contentVi: "Nhóm này bao gồm thanh và que, cán nóng, ở dạng cuộn cuốn không đều, bằng thép hợp kim khác.", contentEn: "This heading covers bars and rods, hot-rolled, in irregularly wound coils, of other alloy steel." },
      { code: "72.28", titleVi: "Thanh và que khác bằng thép hợp kim khác; thép góc, khuôn và hình khác, bằng thép hợp kim khác; thanh và que rỗng, bằng thép hợp kim hoặc thép không hợp kim", titleEn: "Other bars and rods of other alloy steel; angles, shapes and sections, of other alloy steel; hollow drill bars and rods, of alloy or non-alloy steel", contentVi: "Nhóm này bao gồm các thanh và que khác bằng thép hợp kim khác, thép góc, khuôn và hình, và thanh và que rỗng dùng cho mũi khoan.", contentEn: "This heading covers other bars and rods of other alloy steel; angles, shapes and sections; hollow drill bars and rods." },
      { code: "72.29", titleVi: "Dây bằng thép hợp kim khác", titleEn: "Wire of other alloy steel", contentVi: "Nhóm này bao gồm dây bằng thép hợp kim khác, được sản xuất bằng phương pháp kéo nguội.", contentEn: "This heading covers wire of other alloy steel, produced by cold-drawing." }
    ]
  },
  {
    chapter: 73,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Các sản phẩm bằng sắt hoặc thép",
    titleEn: "Articles of iron or steel",
    notesVi: [
      "Trong Chương này khái niệm 'gang đúc' áp dụng cho các sản phẩm thu được từ quá trình đúc trong đó hàm lượng sắt tính theo khối lượng lớn hơn hàm lượng của từng nguyên tố khác và thành phần hoá học của nó khác với thành phần hóa học của thép theo định nghĩa của Chú giải 1(d) Chương 72.",
      "Trong chương này từ 'dây' là các loại sản phẩm được tạo hình nóng hoặc nguội, có hình dạng mặt cắt ngang bất kỳ với kích thước không vượt quá 16 mm."
    ],
    notesEn: [
      "In this Chapter the expression 'cast iron' applies to products obtained by casting in which iron predominates by weight over each of the other elements and which do not comply with the chemical composition of steel as defined in Note 1 (d) to Chapter 72.",
      "In this Chapter the word 'wire' means hot or cold-formed products of any cross-sectional shape, of which no cross-sectional dimension exceeds 16 mm."
    ],
    generalVi: "Chương này bao gồm số lượng nhất định các sản phẩm đặc trưng trong các nhóm 73.01 đến 73.24 và trong các nhóm 73.25 và 73.26 một nhóm các sản phẩm không được định rõ hoặc không thuộc Chương 82 hoặc 83 và không thuộc các Chương khác của Danh mục, bằng sắt (gồm cả gang đúc như được định nghĩa trong Chú giải 1 cho Chương này) hoặc bằng thép. Ống và ống dẫn là những sản phẩm rỗng đồng tâm, có mặt cắt ngang đồng nhất với chỉ một khoảng trống chứa đựng dọc theo toàn bộ chiều dài của chúng, có các bề mặt ở trong và ở phía ngoài có cùng dạng.",
    generalEn: "This Chapter covers a number of specific products in headings 73.01 to 73.24 and in headings 73.25 and 73.26 a group of products not elsewhere specified or included in Chapter 82 or 83 and not included in other Chapters of the Nomenclature, made of iron (including cast iron as defined in Note 1 to this Chapter) or steel. Tubes and pipes are concentric hollow products having a uniform cross-section with only one enclosed void along their whole length, with inner and outer surfaces of the same form.",
    headings: [
      { code: "73.01", titleVi: "Cọc cừ bằng sắt hoặc thép, đã hoặc chưa khoan lỗ, đục lỗ hoặc ghép từ các bộ phận lắp ráp; sắt hoặc thép, ở dạng góc, khuôn và dạng hình, đã được hàn", titleEn: "Sheet piling of iron or steel, whether or not drilled, punched or made from assembled elements; welded angles, shapes and sections, of iron or steel", contentVi: "Cọc cừ bao gồm các thép hình thu được bằng cách cán, kéo, nén, gấp nếp - dập hoặc được tạo hình dáng trong các máy cán, hoặc bằng cách lắp ráp các bộ phận đã được cán. Những thép hình này có thể được gắn với nhau bằng cách được khoá liên động một cách đơn giản hoặc bằng cách mang các cạnh dọc được đặt cạnh nhau.", contentEn: "Sheet piling consists of steel sections obtained by rolling, drawing, pressing, folding or formed in rolling machines, or by assembling rolled elements. These sections can be joined together by simple interlocking or by bringing the longitudinal edges together." },
      { code: "73.02", titleVi: "Vật liệu xây dựng đường ray xe lửa hoặc xe điện bằng sắt hoặc thép: ray, ray đối, ray lưỡi ghi và các thanh ray chéo, ghi chuyển làn, giá lắp ray chéo và các chi tiết chéo khác, tà vẹt ray, tấm nối đường ray, đế ray, má ray, tấm đệm, tấm kê, thanh gắn, tấm đệm lót và các vật liệu chuyên dụng khác dùng cho việc nối hoặc cố định ray", titleEn: "Railway or tramway track construction material of iron or steel, the following: rails, check-rails and rack rails, switch blades, crossing frogs, point rods and other crossing pieces, sleepers, fish-plates, chairs, chair wedges, sole plates, rail clips, bedplates, ties and other material specialized for jointing or fixing rails", contentVi: "Nhóm này bao gồm các vật liệu xây dựng đường ray xe lửa hoặc xe điện bằng sắt hoặc thép, bao gồm ray, tà vẹt, tấm nối, đế ray và các vật liệu chuyên dụng khác.", contentEn: "This heading covers railway or tramway track construction material of iron or steel, including rails, sleepers, fish-plates, sole plates and other specialized materials." },
      { code: "73.03", titleVi: "Các loại ống, ống dẫn và thanh hình rỗng, bằng gang đúc", titleEn: "Tubes, pipes and hollow profiles, of cast iron", contentVi: "Nhóm này bao gồm các loại ống, ống dẫn và thanh hình rỗng bằng gang đúc, được sử dụng chủ yếu cho hệ thống cấp nước, thoát nước và trong công nghiệp.", contentEn: "This heading covers tubes, pipes and hollow profiles of cast iron, used mainly for water supply, drainage and in industry." },
      { code: "73.04", titleVi: "Các loại ống, ống dẫn và thanh hình rỗng, không hàn, bằng sắt (trừ gang đúc) hoặc thép", titleEn: "Tubes, pipes and hollow profiles, seamless, of iron (other than cast iron) or steel", contentVi: "Nhóm này bao gồm các ống và ống dẫn không hàn bằng sắt hoặc thép, được sản xuất bằng các phương pháp như cán nóng, kéo nóng hoặc ép đùn nóng. Các sản phẩm này đặc biệt bao gồm các ống dẫn thuộc loại sử dụng cho dầu hoặc khí, ống chống, đường ống và các ống khoan sử dụng trong việc khoan dầu và khí.", contentEn: "This heading covers seamless tubes and pipes of iron or steel, manufactured by methods such as hot-rolling, hot-drawing or hot-extrusion. These products include line pipes for oil or gas, casing, tubing and drill pipes used in oil and gas drilling." },
      { code: "73.05", titleVi: "Các loại ống và ống dẫn khác bằng sắt hoặc thép (ví dụ, được hàn, tán bằng đinh hoặc ghép với nhau bằng cách tương tự), có mặt cắt ngang hình tròn, đường kính ngoài trên 406,4 mm", titleEn: "Other tubes and pipes (for example, welded, riveted or similarly closed), having circular cross-sections, the external diameter of which exceeds 406.4 mm, of iron or steel", contentVi: "Các ống và ống dẫn thuộc nhóm này thu được bằng cách hàn hoặc tán đinh các dạng được tạo hình trước, có hình ống, hở được làm từ các sản phẩm cán phẳng. Chúng bao gồm cả các ống dẫn thuộc loại sử dụng cho khí hoặc dầu, các ống chống cho các giếng dầu mỏ hoặc giếng khí.", contentEn: "The tubes and pipes of this heading are obtained by welding or riveting pre-formed tubular shapes made from flat-rolled products. They include line pipes for oil or gas, casing for oil or gas wells." },
      { code: "73.06", titleVi: "Các loại ống, ống dẫn và thanh hình rỗng khác, bằng sắt hoặc thép (ví dụ, nối hở hoặc hàn, tán đinh hoặc ghép bằng cách tương tự)", titleEn: "Other tubes, pipes and hollow profiles (for example, open seam or welded, riveted or similarly closed), of iron or steel", contentVi: "Nhóm này bao gồm các ống và ống dẫn được hàn bằng cách rèn (ống và ống dẫn được hàn giáp mối), các ống và ống dẫn với các cạnh mép kín (ống nối hở), và các ống và ống dẫn mà trong đó các cạnh mép tiếp xúc được nối bằng cách kẹp.", contentEn: "This heading covers tubes and pipes welded by forging (butt-welded tubes and pipes), tubes and pipes with closed edges (open seam tubes), and tubes and pipes in which the abutting edges are joined by clipping." },
      { code: "73.07", titleVi: "Phụ kiện để ghép nối của ống hoặc ống dẫn (ví dụ, khớp nối đôi, khuỷu, măng sông), bằng sắt hoặc thép", titleEn: "Tube or pipe fittings (for example, couplings, elbows, sleeves), of iron or steel", contentVi: "Nhóm này bao gồm các phụ kiện để ghép nối của ống hoặc ống dẫn bằng sắt hoặc thép, như khớp nối đôi, khuỷu, măng sông, được sử dụng để nối các ống hoặc ống dẫn với nhau.", contentEn: "This heading covers tube or pipe fittings of iron or steel, such as couplings, elbows, sleeves, used for joining tubes or pipes together." },
      { code: "73.08", titleVi: "Các kết cấu (trừ nhà lắp ghép thuộc nhóm 94.06) và các bộ phận của các kết cấu (ví dụ, cầu và nhịp cầu, cửa cống, tháp, cột lưới, mái nhà, khung mái, cửa ra vào và cửa sổ và các loại khung cửa và ngưỡng cửa, cửa chớp, lan can, cột trụ và các loại cột), bằng sắt hoặc thép", titleEn: "Structures (excluding prefabricated buildings of heading 94.06) and parts of structures (for example, bridges and bridge-sections, lock-gates, towers, lattice masts, roofs, roofing frameworks, doors and windows and their frames and thresholds for doors, shutters, balustrades, pillars and columns), of iron or steel", contentVi: "Nhóm này bao gồm các kết cấu và các bộ phận của kết cấu bằng sắt hoặc thép như cầu, tháp, cột lưới, mái nhà, khung cửa, lan can. Các kết cấu này thường được lắp ghép từ các tấm, thanh, thép hình, ống.", contentEn: "This heading covers structures and parts of structures of iron or steel such as bridges, towers, lattice masts, roofs, door frames, balustrades. These structures are usually assembled from plates, bars, sections, tubes." },
      { code: "73.09", titleVi: "Các loại bể chứa, két, bình chứa và các loại tương tự, dùng để chứa các loại vật liệu (trừ khí nén hoặc khí hóa lỏng), bằng sắt hoặc thép, có dung tích trên 300 lít, đã hoặc chưa lót hoặc cách nhiệt, nhưng chưa lắp ghép với thiết bị cơ khí hoặc thiết bị nhiệt", titleEn: "Reservoirs, tanks, vats and similar containers for any material (other than compressed or liquefied gas), of iron or steel, of a capacity exceeding 300 litres, whether or not lined or heat-insulated, but not fitted with mechanical or thermal equipment", contentVi: "Nhóm này bao gồm các loại bể chứa, két, bình chứa lớn bằng sắt hoặc thép có dung tích trên 300 lít, dùng để chứa các loại vật liệu trừ khí nén hoặc khí hóa lỏng.", contentEn: "This heading covers reservoirs, tanks, vats and similar large containers of iron or steel with a capacity exceeding 300 litres, for any material other than compressed or liquefied gas." },
      { code: "73.10", titleVi: "Thùng phuy, thùng hình trống, lon, hộp và các loại đồ chứa tương tự, dùng để chứa các loại vật liệu (trừ khí nén hoặc khí hóa lỏng), bằng sắt hoặc thép, có dung tích không quá 300 lít, đã hoặc chưa lót hoặc cách nhiệt, nhưng chưa lắp ghép với thiết bị cơ khí hoặc thiết bị nhiệt", titleEn: "Tanks, casks, drums, cans, boxes and similar containers, for any material (other than compressed or liquefied gas), of iron or steel, of a capacity not exceeding 300 litres, whether or not lined or heat-insulated, but not fitted with mechanical or thermal equipment", contentVi: "Nhóm này bao gồm các thùng phuy, thùng hình trống, lon, hộp bằng sắt hoặc thép có dung tích không quá 300 lít, dùng để chứa các loại vật liệu trừ khí nén hoặc khí hóa lỏng.", contentEn: "This heading covers tanks, casks, drums, cans, boxes of iron or steel with a capacity not exceeding 300 litres, for any material other than compressed or liquefied gas." },
      { code: "73.11", titleVi: "Các loại đồ chứa dùng để chứa khí nén hoặc khí hóa lỏng, bằng sắt hoặc thép", titleEn: "Containers for compressed or liquefied gas, of iron or steel", contentVi: "Nhóm này bao gồm các loại đồ chứa bằng sắt hoặc thép dùng để chứa khí nén hoặc khí hóa lỏng, như bình khí, chai khí.", contentEn: "This heading covers containers of iron or steel for compressed or liquefied gas, such as gas cylinders, gas bottles." },
      { code: "73.12", titleVi: "Dây bện tao, cáp, dây tết, dây treo và các loại tương tự, bằng sắt hoặc thép, chưa được cách điện", titleEn: "Stranded wire, ropes, cables, plaited bands, slings and the like, of iron or steel, not electrically insulated", contentVi: "Nhóm này bao gồm dây bện tao, cáp, dây tết, dây treo bằng sắt hoặc thép, chưa được cách điện, được sử dụng trong xây dựng, nâng hạ và kéo.", contentEn: "This heading covers stranded wire, ropes, cables, plaited bands, slings of iron or steel, not electrically insulated, used in construction, lifting and hauling." },
      { code: "73.13", titleVi: "Dây có gai bằng sắt hoặc thép; dây xoắn đơn hoặc dây dẹt, có gai hoặc không, và dây đôi xoắn lỏng, loại sử dụng để rào, bằng sắt hoặc thép", titleEn: "Barbed wire of iron or steel; twisted hoop or single flat wire, barbed or not, and loosely twisted double wire, of a kind used for fencing, of iron or steel", contentVi: "Nhóm này bao gồm dây có gai bằng sắt hoặc thép, dây xoắn đơn hoặc dây dẹt, được sử dụng để làm hàng rào.", contentEn: "This heading covers barbed wire of iron or steel, twisted hoop or single flat wire, used for fencing." },
      { code: "73.14", titleVi: "Vải (kể cả vải liên tục hoặc vải không đầu mối), tấm đan mắt lưới, phên và lưới rào bằng dây sắt hoặc thép; tấm lưới được tạo hình bằng phương pháp đột dập và kéo dãn, bằng sắt hoặc thép", titleEn: "Cloth (including endless bands), grill, netting and fencing, of iron or steel wire; expanded metal of iron or steel", contentVi: "Nhóm này bao gồm vải, tấm đan mắt lưới, phên và lưới rào bằng dây sắt hoặc thép, cũng như tấm lưới được tạo hình bằng phương pháp đột dập và kéo dãn.", contentEn: "This heading covers cloth, grill, netting and fencing of iron or steel wire, as well as expanded metal of iron or steel." },
      { code: "73.15", titleVi: "Xích và các bộ phận của xích, bằng sắt hoặc thép", titleEn: "Chain and parts thereof, of iron or steel", contentVi: "Nhóm này bao gồm xích và các bộ phận của xích bằng sắt hoặc thép, bao gồm xích mắt nối khớp, xích chống trượt, xích truyền động.", contentEn: "This heading covers chain and parts thereof of iron or steel, including articulated link chain, skid chain, transmission chain." },
      { code: "73.16", titleVi: "Neo, móc neo và các bộ phận của chúng, bằng sắt hoặc thép", titleEn: "Anchors, grapnels and parts thereof, of iron or steel", contentVi: "Nhóm này bao gồm neo, móc neo và các bộ phận của chúng bằng sắt hoặc thép, được sử dụng cho tàu thuyền.", contentEn: "This heading covers anchors, grapnels and parts thereof of iron or steel, used for ships and boats." },
      { code: "73.17", titleVi: "Đinh, đinh bấm, đinh rệp, đinh dạng ghim (trừ các loại thuộc nhóm 83.05), ghim bấm, đinh dẹt đầu nhọn, đinh gợn sóng và các sản phẩm tương tự, bằng sắt hoặc thép, có hoặc không có đầu mũ bằng vật liệu khác, nhưng trừ các loại có đầu mũ bằng đồng", titleEn: "Nails, tacks, drawing pins, corrugated nails, staples (other than those of heading 83.05) and similar articles, of iron or steel, whether or not with heads of other material, but excluding such articles with heads of copper", contentVi: "Nhóm này bao gồm đinh, đinh bấm, đinh rệp, ghim bấm và các sản phẩm tương tự bằng sắt hoặc thép.", contentEn: "This heading covers nails, tacks, drawing pins, staples and similar articles of iron or steel." },
      { code: "73.18", titleVi: "Đinh vít, bu lông, đai ốc, đinh đầu xoắn, móc vít, đinh tán, chốt hãm, chốt chẻ, vòng đệm (kể cả vòng đệm chịu lực) và các sản phẩm tương tự, bằng sắt hoặc thép", titleEn: "Screws, bolts, nuts, coach screws, screw hooks, rivets, cotters, cotter-pins, washers (including spring washers) and similar articles, of iron or steel", contentVi: "Nhóm này bao gồm đinh vít, bu lông, đai ốc, đinh tán, vòng đệm và các sản phẩm tương tự bằng sắt hoặc thép.", contentEn: "This heading covers screws, bolts, nuts, rivets, washers and similar articles of iron or steel." },
      { code: "73.19", titleVi: "Kim khâu, kim đan, kim dùi, kim móc, kim thêu và các sản phẩm tương tự, sử dụng bằng tay, bằng sắt hoặc thép; ghim băng và ghim khác, bằng sắt hoặc thép, chưa được chi tiết hoặc ghi ở nơi khác", titleEn: "Sewing needles, knitting needles, bodkins, crochet hooks, embroidery stilettos and similar articles, for use in the hand, of iron or steel; safety pins and other pins of iron or steel, not elsewhere specified or included", contentVi: "Nhóm này bao gồm kim khâu, kim đan, kim móc và các sản phẩm tương tự sử dụng bằng tay, cũng như ghim băng và ghim khác bằng sắt hoặc thép.", contentEn: "This heading covers sewing needles, knitting needles, crochet hooks and similar articles for use in the hand, as well as safety pins and other pins of iron or steel." },
      { code: "73.20", titleVi: "Lò xo và lá lò xo, bằng sắt hoặc thép", titleEn: "Springs and leaves for springs, of iron or steel", contentVi: "Nhóm này bao gồm lò xo và lá lò xo bằng sắt hoặc thép, được sử dụng trong xe cộ, máy móc và các ứng dụng khác.", contentEn: "This heading covers springs and leaves for springs of iron or steel, used in vehicles, machinery and other applications." },
      { code: "73.21", titleVi: "Bếp lò, bếp sưởi nóng bằng đốt, lò nấu ăn, vỉ nướng, bếp than, bếp dùng nấu thức ăn liền bàn và các bếp tương tự không dùng điện, và các bộ phận của chúng, bằng sắt hoặc thép", titleEn: "Stoves, ranges, grates, cookers (including those with subsidiary boilers for central heating), barbecues, braziers, gas-rings, plate warmers and similar non-electric domestic appliances, and parts thereof, of iron or steel", contentVi: "Nhóm này bao gồm bếp lò, bếp sưởi, lò nấu ăn, vỉ nướng và các thiết bị gia dụng không dùng điện tương tự bằng sắt hoặc thép.", contentEn: "This heading covers stoves, ranges, cookers, barbecues and similar non-electric domestic appliances of iron or steel." },
      { code: "73.22", titleVi: "Bộ tản nhiệt để sưởi ấm trung tâm, không dùng điện, và các bộ phận của chúng, bằng sắt hoặc thép; máy sưởi không khí và các bộ phận phân phối không khí nóng (kể cả các bộ phận phân phối có thể phân phối không khí trong lành hoặc được điều hòa), không làm nóng bằng điện, có lắp quạt hoặc quạt gió chạy bằng mô tơ, và các bộ phận của chúng, bằng sắt hoặc thép", titleEn: "Radiators for central heating, not electrically heated, and parts thereof, of iron or steel; air heaters and hot air distributors (including distributors which can also distribute fresh or conditioned air), not electrically heated, incorporating a motor-driven fan or blower, and parts thereof, of iron or steel", contentVi: "Nhóm này bao gồm bộ tản nhiệt để sưởi ấm trung tâm và máy sưởi không khí bằng sắt hoặc thép, không dùng điện.", contentEn: "This heading covers radiators for central heating and air heaters of iron or steel, not electrically heated." },
      { code: "73.23", titleVi: "Bộ đồ ăn, đồ nhà bếp hoặc các loại đồ gia dụng khác và các bộ phận của chúng, bằng sắt hoặc thép; bùi nhùi bằng sắt hoặc thép; đồ cọ rửa nồi và các loại bàn chải, miếng đánh bóng và đồ tương tự, bằng sắt hoặc thép", titleEn: "Table, kitchen or other household articles and parts thereof, of iron or steel; iron or steel wool; pot scourers and scouring or polishing pads, gloves and the like, of iron or steel", contentVi: "Nhóm này bao gồm bộ đồ ăn, đồ nhà bếp và đồ gia dụng khác bằng sắt hoặc thép, cũng như bùi nhùi và đồ cọ rửa.", contentEn: "This heading covers table, kitchen and household articles of iron or steel, as well as iron or steel wool and pot scourers." },
      { code: "73.24", titleVi: "Các đồ trang bị vệ sinh và các bộ phận của chúng, bằng sắt hoặc thép", titleEn: "Sanitary ware and parts thereof, of iron or steel", contentVi: "Nhóm này bao gồm các đồ trang bị vệ sinh bằng sắt hoặc thép như bồn tắm, bồn rửa, chậu rửa.", contentEn: "This heading covers sanitary ware of iron or steel such as baths, sinks, wash basins." },
      { code: "73.25", titleVi: "Các sản phẩm đúc khác bằng sắt hoặc thép", titleEn: "Other cast articles of iron or steel", contentVi: "Nhóm này bao gồm các sản phẩm đúc khác bằng sắt hoặc thép không được phân loại ở nơi khác.", contentEn: "This heading covers other cast articles of iron or steel not elsewhere classified." },
      { code: "73.26", titleVi: "Các sản phẩm khác bằng sắt hoặc thép", titleEn: "Other articles of iron or steel", contentVi: "Nhóm này bao gồm các sản phẩm khác bằng sắt hoặc thép không được phân loại ở nơi khác trong Chương này hoặc trong Chương 82 hoặc 83.", contentEn: "This heading covers other articles of iron or steel not elsewhere classified in this Chapter or in Chapter 82 or 83." }
    ]
  },
  {
    chapter: 74,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Đồng và các sản phẩm bằng đồng",
    titleEn: "Copper and articles thereof",
    notesVi: [
      "Trong Chương này, (a) Đồng tinh luyện: Kim loại có ít nhất 99,85% tính theo khối lượng là đồng; hoặc Kim loại có ít nhất 97,5% tính theo khối lượng là đồng, với điều kiện hàm lượng các tạp chất không vượt quá giới hạn quy định.",
      "(b) Hợp kim đồng: Vật liệu kim loại trừ đồng chưa tinh luyện trong đó hàm lượng đồng tính theo khối lượng lớn hơn so với từng nguyên tố khác.",
      "(c) Các hợp kim đồng chủ: Hợp kim chứa các nguyên tố khác với hàm lượng lớn hơn 10% tính theo khối lượng của đồng, không có tính rèn và thường sử dụng như chất phụ gia trong sản xuất các hợp kim khác."
    ],
    notesEn: [
      "In this Chapter, (a) Refined copper: Metal containing at least 99.85% by weight of copper; or Metal containing at least 97.5% by weight of copper, provided that the content of any other element does not exceed the limit specified.",
      "(b) Copper alloys: Metallic substances other than unrefined copper in which copper predominates by weight over each of the other elements.",
      "(c) Master alloys: Alloys containing with other elements more than 10% by weight of copper, not usefully malleable and commonly used as an additive in the manufacture of other alloys."
    ],
    generalVi: "Đồng là kim loại dễ uốn và dễ dát mỏng; sau bạc, nó là chất dẫn nhiệt và dẫn điện tốt nhất. Đồng được sử dụng ở trạng thái tinh khiết, đặc biệt dưới dạng dây cho mục đích điện, hoặc dưới dạng cuộn hoặc tấm như là một phần tử làm mát, nhưng cho các mục đích chung nó chủ yếu được sử dụng dưới dạng hợp kim. Chương này bao gồm: (A) Sten và các sản phẩm trung gian của luyện đồng, đồng chưa gia công, đồng phế liệu và mảnh vụn; (B) Bột và vảy đồng; (C) Các sản phẩm thường thu được bởi cán, ép, kéo hoặc rèn đồng; (D) Các mặt hàng khác đã chi tiết hoá ở nhóm.",
    generalEn: "Copper is very ductile and malleable; it is, after silver, the best conductor of heat and electricity. It is used in the pure state, particularly in the form of wire for electrical use, or in the form of coils or plates as a refrigerating element, but for general purposes it is mainly used in the form of alloys. This Chapter covers: (A) Mattes and other intermediate products of copper metallurgy and unwrought copper and waste and scrap; (B) Copper powders and flakes; (C) Products generally obtained by rolling, extruding, drawing or forging the copper; (D) Various articles specified in headings.",
    headings: [
      { code: "74.01", titleVi: "Sten đồng; đồng xi măng hóa (đồng kết tủa)", titleEn: "Copper mattes; cement copper (precipitated copper)", contentVi: "Sten đồng thu được bằng cách nung chảy quặng đồng sunphua đã thiêu kết để phân tách đồng sunphua từ quặng nghèo. Đồng xi măng hóa (đồng kết tủa) là sản phẩm thu được bởi sự kết tủa, ví dụ bằng cách thêm sắt vào dung dịch nước thu được từ ngâm chiết quặng nung.", contentEn: "Copper matte is obtained by the fusion of roasted copper sulphide ores to separate the copper sulphide from the gangue. Cement copper (precipitated copper) is a product obtained by precipitation, e.g., by adding iron to the aqueous solution resulting from the leaching of certain roasted ores." },
      { code: "74.02", titleVi: "Đồng chưa tinh luyện; cực dương đồng dùng cho điện phân tinh luyện", titleEn: "Unrefined copper; copper anodes for electrolytic refining", contentVi: "Nhóm này bao gồm đồng đen (dạng không tinh khiết của đồng), đồng xốp và Anod đồng dùng cho điện phân tinh luyện.", contentEn: "This heading covers black copper (an impure form of copper), blister copper and copper anodes for electrolytic refining." },
      { code: "74.03", titleVi: "Đồng tinh luyện và hợp kim đồng, chưa gia công", titleEn: "Refined copper and copper alloys, unwrought", contentVi: "Nhóm này bao gồm đồng đã tinh luyện và hợp kim đồng chưa gia công. Đồng tinh luyện có chứa ít nhất 99,85% tính theo khối lượng đồng thu được bởi điện phân tinh luyện, chiết điện phân, tinh luyện hoá học hoặc tinh luyện bằng ngọn lửa.", contentEn: "This heading covers unwrought refined copper and copper alloys. Refined copper containing at least 99.85% by weight of copper is obtained by electrolytic refining, electrolytic extraction, chemical refining or fire refining." },
      { code: "74.04", titleVi: "Phế liệu và mảnh vụn của đồng", titleEn: "Copper waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn của đồng, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí đồng.", contentEn: "This heading covers copper waste and scrap, including waste from the manufacture or mechanical working of copper." },
      { code: "74.05", titleVi: "Hợp kim đồng chủ", titleEn: "Master alloys of copper", contentVi: "Nhóm này bao gồm hợp kim đồng chủ, là hợp kim không có tính rèn được sử dụng như chất phụ gia trong sản xuất các hợp kim khác.", contentEn: "This heading covers master alloys of copper, which are alloys not usefully malleable used as an additive in the manufacture of other alloys." },
      { code: "74.06", titleVi: "Bột và vảy đồng", titleEn: "Copper powders and flakes", contentVi: "Nhóm này bao gồm bột và vảy đồng, được sử dụng trong luyện kim bột, sơn kim loại và các ứng dụng khác.", contentEn: "This heading covers copper powders and flakes, used in powder metallurgy, metallic paints and other applications." },
      { code: "74.07", titleVi: "Đồng ở dạng thanh, que và dạng hình", titleEn: "Copper bars, rods and profiles", contentVi: "Nhóm này bao gồm đồng ở dạng thanh, que và dạng hình, được sản xuất bằng cán, ép đùn hoặc kéo.", contentEn: "This heading covers copper bars, rods and profiles, manufactured by rolling, extruding or drawing." },
      { code: "74.08", titleVi: "Dây đồng", titleEn: "Copper wire", contentVi: "Nhóm này bao gồm dây đồng, được sản xuất bằng phương pháp kéo. Dây đồng được sử dụng rộng rãi trong ngành điện.", contentEn: "This heading covers copper wire, manufactured by drawing. Copper wire is widely used in the electrical industry." },
      { code: "74.09", titleVi: "Đồng ở dạng tấm, lá và dải, có chiều dày trên 0,15 mm", titleEn: "Copper plates, sheets and strip, of a thickness exceeding 0.15 mm", contentVi: "Nhóm này bao gồm đồng ở dạng tấm, lá và dải có chiều dày trên 0,15 mm.", contentEn: "This heading covers copper plates, sheets and strip of a thickness exceeding 0.15 mm." },
      { code: "74.10", titleVi: "Đồng lá mỏng (đã hoặc chưa in hoặc bồi trên giấy, bìa, plastic hoặc vật liệu bồi tương tự) có chiều dày (trừ phần bồi) không quá 0,15 mm", titleEn: "Copper foil (whether or not printed or backed with paper, paperboard, plastics or similar backing materials) of a thickness (excluding any backing) not exceeding 0.15 mm", contentVi: "Nhóm này bao gồm đồng lá mỏng có chiều dày không quá 0,15 mm.", contentEn: "This heading covers copper foil of a thickness not exceeding 0.15 mm." },
      { code: "74.11", titleVi: "Các loại ống và ống dẫn bằng đồng", titleEn: "Copper tubes and pipes", contentVi: "Nhóm này bao gồm các loại ống và ống dẫn bằng đồng, được sử dụng trong hệ thống nước, điều hòa không khí và các ứng dụng công nghiệp.", contentEn: "This heading covers copper tubes and pipes, used in plumbing, air conditioning and industrial applications." },
      { code: "74.12", titleVi: "Phụ kiện để ghép nối của ống hoặc ống dẫn (ví dụ, khớp nối đôi, khuỷu, măng sông), bằng đồng", titleEn: "Copper tube or pipe fittings (for example, couplings, elbows, sleeves)", contentVi: "Nhóm này bao gồm các phụ kiện để ghép nối của ống hoặc ống dẫn bằng đồng.", contentEn: "This heading covers copper tube or pipe fittings." },
      { code: "74.13", titleVi: "Dây bện tao, cáp, dây tết và các loại tương tự, bằng đồng, chưa được cách điện", titleEn: "Stranded wire, cables, plaited bands and the like, of copper, not electrically insulated", contentVi: "Nhóm này bao gồm dây bện tao, cáp, dây tết bằng đồng, chưa được cách điện.", contentEn: "This heading covers stranded wire, cables, plaited bands of copper, not electrically insulated." },
      { code: "74.15", titleVi: "Đinh, đinh bấm, đinh rệp, ghim (trừ loại thuộc nhóm 83.05) và các sản phẩm tương tự, bằng đồng hoặc bằng sắt hoặc thép có mũ bằng đồng; đinh vít, bu lông, đai ốc, móc vít, đinh tán, chốt hãm, chốt chẻ, vòng đệm (kể cả vòng đệm chịu lực) và các sản phẩm tương tự, bằng đồng", titleEn: "Nails, tacks, drawing pins, staples (other than those of heading 83.05) and similar articles, of copper or of iron or steel with heads of copper; screws, bolts, nuts, screw hooks, rivets, cotters, cotter-pins, washers (including spring washers) and similar articles, of copper", contentVi: "Nhóm này bao gồm đinh, đinh vít, bu lông, đai ốc và các sản phẩm tương tự bằng đồng.", contentEn: "This heading covers nails, screws, bolts, nuts and similar articles of copper." },
      { code: "74.18", titleVi: "Bộ đồ ăn, đồ nhà bếp hoặc các loại đồ gia dụng khác và các bộ phận của chúng, bằng đồng; bàn chải, miếng đánh bóng và đồ tương tự bằng đồng; đồ trang bị vệ sinh và các bộ phận của chúng, bằng đồng", titleEn: "Table, kitchen or other household articles and parts thereof, of copper; pot scourers and scouring or polishing pads, gloves and the like, of copper; sanitary ware and parts thereof, of copper", contentVi: "Nhóm này bao gồm bộ đồ ăn, đồ nhà bếp, đồ gia dụng và đồ trang bị vệ sinh bằng đồng.", contentEn: "This heading covers table, kitchen, household articles and sanitary ware of copper." },
      { code: "74.19", titleVi: "Các sản phẩm khác bằng đồng", titleEn: "Other articles of copper", contentVi: "Nhóm này bao gồm các sản phẩm khác bằng đồng không được phân loại ở nơi khác.", contentEn: "This heading covers other articles of copper not elsewhere classified." }
    ]
  },
  {
    chapter: 75,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Niken và các sản phẩm bằng niken",
    titleEn: "Nickel and articles thereof",
    notesVi: [
      "Trong Chương này, (a) Niken không hợp kim: Là kim loại có tổng hàm lượng niken và coban tối thiểu 99% tính theo khối lượng, với điều kiện hàm lượng coban không vượt quá 1,5% và hàm lượng của bất kỳ nguyên tố nào khác không vượt quá giới hạn quy định.",
      "(b) Niken hợp kim: Vật liệu kim loại mà trong đó hàm lượng của niken trội hơn so với hàm lượng của mỗi nguyên tố nào khác với điều kiện hàm lượng của coban trên 1,5% tính theo khối lượng."
    ],
    notesEn: [
      "In this Chapter, (a) Nickel, not alloyed: Metal containing by weight at least 99% of nickel plus cobalt, provided that the cobalt content does not exceed 1.5% and the content of any other element does not exceed the limit specified.",
      "(b) Nickel alloys: Metallic substances in which nickel predominates by weight over each other element, provided that the cobalt content exceeds 1.5% by weight."
    ],
    generalVi: "Chương này gồm niken, các hợp kim của niken và các hàng hóa từ niken. Niken là kim loại màu trắng, có thể được đánh bóng cao và có độ bền cao với ăn mòn và oxy hóa. Các sản phẩm và hàng hoá bằng niken thường được xử lý khác nhau để cải thiện đặc tính riêng hoặc bề mặt của kim loại. Chương này bao gồm: (A) Sten niken, oxit niken thiêu kết và các sản phẩm trung gian khác; (B) Niken chưa gia công; (C) Phế liệu và mảnh vụn niken; (D) Bột và vảy niken; (E) Các sản phẩm thường thu được bởi cán, rèn, kéo hoặc ép đùn.",
    generalEn: "This Chapter covers nickel, nickel alloys and articles of nickel. Nickel is a white metal that can be highly polished and has high resistance to corrosion and oxidation. Products and articles of nickel are frequently subjected to various treatments to improve the properties or appearance of the metal. This Chapter covers: (A) Nickel mattes, nickel oxide sinters and other intermediate products; (B) Unwrought nickel; (C) Nickel waste and scrap; (D) Nickel powders and flakes; (E) Products generally obtained by rolling, forging, drawing or extruding.",
    headings: [
      { code: "75.01", titleVi: "Sten niken, oxit niken thiêu kết và các sản phẩm trung gian khác của quá trình luyện niken", titleEn: "Nickel mattes, nickel oxide sinters and other intermediate products of nickel metallurgy", contentVi: "Sten niken thu được bởi các công đoạn (nung, nấu chảy) quặng niken. Oxit niken thiêu kết thu được bởi quá trình xử lý quặng sunphua hoặc quặng oxit có chứa niken.", contentEn: "Nickel mattes are obtained by processing (roasting, smelting) nickel ores. Nickel oxide sinters are obtained by processing sulphide ores or oxide ores containing nickel." },
      { code: "75.02", titleVi: "Niken chưa gia công", titleEn: "Unwrought nickel", contentVi: "Niken chưa gia công thường ở dạng thỏi, dạng cục, viên, tấm, hình khối, vành, viên gạch, hạt, cathod hoặc dạng thanh mạ điện âm cực khác. Những dạng ban đầu này thường được sử dụng như phụ gia trong sản xuất thép hợp kim và hợp kim không chứa sắt.", contentEn: "Unwrought nickel is usually in the form of ingots, pigs, pellets, flats, cubes, rondelles, briquettes, shots, cathodes or other electrodeposited shapes. These primary forms are mainly used as an additive in the manufacture of alloy steels and non-ferrous alloys." },
      { code: "75.03", titleVi: "Phế liệu và mảnh vụn niken", titleEn: "Nickel waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn niken, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí niken.", contentEn: "This heading covers nickel waste and scrap, including waste from the manufacture or mechanical working of nickel." },
      { code: "75.04", titleVi: "Bột và vảy niken", titleEn: "Nickel powders and flakes", contentVi: "Nhóm này bao gồm tất cả các dạng bột và vảy niken bất kể mục đích sử dụng của chúng. Bột và vảy được sử dụng trong ắc quy Niken-cadmi, sản xuất muối Niken, làm chất xúc tác.", contentEn: "This heading covers nickel powders and flakes of all types, regardless of their intended use. The powders and flakes are used in nickel-cadmium batteries, production of nickel salts, as catalysts." },
      { code: "75.05", titleVi: "Niken ở dạng thanh, que, hình và dây", titleEn: "Nickel bars, rods, profiles and wire", contentVi: "Nhóm này bao gồm niken ở dạng thanh, que, hình và dây, được sản xuất bằng cán, ép đùn hoặc kéo.", contentEn: "This heading covers nickel bars, rods, profiles and wire, manufactured by rolling, extruding or drawing." },
      { code: "75.06", titleVi: "Niken ở dạng tấm, lá, dải và lá mỏng", titleEn: "Nickel plates, sheets, strip and foil", contentVi: "Nhóm này bao gồm tấm, lá, dải và lá mỏng bằng niken. Dạng tấm và lá có thể được sử dụng để tráng sắt hoặc thép và trong công nghiệp hoá chất.", contentEn: "This heading covers nickel plates, sheets, strip and foil. Plates and sheets may be used to clad iron or steel and in the chemical industry." },
      { code: "75.07", titleVi: "Các loại ống, ống dẫn và các phụ kiện để ghép nối của ống hoặc ống bằng niken (ví dụ, khớp nối đôi, khuỷu, măng sông)", titleEn: "Nickel tubes, pipes and tube or pipe fittings (for example, couplings, elbows, sleeves)", contentVi: "Do đặc tính chống ăn mòn (với axit, hơi nước) các loại ống, ống dẫn và phụ kiện bằng niken hoặc hợp kim niken được sử dụng trong kết cấu của các thiết bị cho công nghiệp hoá chất, thực phẩm, sản xuất giấy.", contentEn: "Because of their resistance to corrosion (by acids, steam, etc.), tubes, pipes and fittings of nickel or of nickel alloys are used in apparatus for the chemical, food, papermaking industries." },
      { code: "75.08", titleVi: "Sản phẩm khác bằng niken", titleEn: "Other articles of nickel", contentVi: "Nhóm này bao gồm tấm đan, phên và lưới bằng dây niken, cũng như các sản phẩm mạ điện cực dương và các sản phẩm khác bằng niken không được phân loại ở nơi khác.", contentEn: "This heading covers cloth, grill and netting of nickel wire, as well as electroplating anodes and other articles of nickel not elsewhere classified." }
    ]
  },
  {
    chapter: 76,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Nhôm và các sản phẩm bằng nhôm",
    titleEn: "Aluminium and articles thereof",
    notesVi: [
      "Trong chương này, (a) Nhôm, không hợp kim: Là kim loại có hàm lượng nhôm chiếm ít nhất 99% tính theo khối lượng, với điều kiện hàm lượng của bất kỳ nguyên tố nào khác không vượt quá giới hạn quy định.",
      "(b) Hợp kim nhôm: Vật liệu kim loại mà trong đó hàm lượng nhôm lớn hơn so với hàm lượng của mỗi nguyên tố khác tính theo khối lượng."
    ],
    notesEn: [
      "In this Chapter, (a) Aluminium, not alloyed: Metal containing by weight at least 99% of aluminium, provided that the content by weight of any other element does not exceed the limit specified.",
      "(b) Aluminium alloys: Metallic substances in which aluminium predominates by weight over each of the other elements."
    ],
    generalVi: "Nhôm là kim loại màu trắng bạc, nhẹ (tỷ trọng khoảng 2,7), có độ dẫn điện và dẫn nhiệt tốt. Nó có thể được cán, kéo và ép đùn dễ dàng. Nhôm có khả năng chống ăn mòn do một lớp oxit bảo vệ mỏng hình thành trên bề mặt của nó. Chương này bao gồm: (A) Nhôm chưa gia công; (B) Phế liệu và mảnh vụn nhôm; (C) Bột và vảy nhôm; (D) Các sản phẩm thường thu được bởi cán, ép đùn hoặc kéo; (E) Các mặt hàng khác đã chi tiết hoá ở nhóm.",
    generalEn: "Aluminium is a silvery white metal, light (density approximately 2.7), with good electrical and thermal conductivity. It can be rolled, drawn and extruded easily. Aluminium has good resistance to corrosion due to a thin protective oxide film that forms on its surface. This Chapter covers: (A) Unwrought aluminium; (B) Aluminium waste and scrap; (C) Aluminium powders and flakes; (D) Products generally obtained by rolling, extruding or drawing; (E) Various articles specified in headings.",
    headings: [
      { code: "76.01", titleVi: "Nhôm chưa gia công", titleEn: "Unwrought aluminium", contentVi: "Nhóm này bao gồm nhôm chưa gia công, thường ở dạng thỏi, phôi, viên hoặc các dạng thô khác. Nhôm chưa gia công được sản xuất bằng điện phân alumina (nhôm oxit).", contentEn: "This heading covers unwrought aluminium, usually in the form of ingots, billets, pellets or other primary forms. Unwrought aluminium is produced by electrolysis of alumina (aluminium oxide)." },
      { code: "76.02", titleVi: "Phế liệu và mảnh vụn nhôm", titleEn: "Aluminium waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn nhôm, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí nhôm.", contentEn: "This heading covers aluminium waste and scrap, including waste from the manufacture or mechanical working of aluminium." },
      { code: "76.03", titleVi: "Bột và vảy nhôm", titleEn: "Aluminium powders and flakes", contentVi: "Nhóm này bao gồm bột và vảy nhôm. Bột và vảy nhôm được sử dụng trong pháo hoa, làm chất tạo nhiệt, bảo vệ kim loại khỏi ăn mòn, trong nhiên liệu tên lửa và trong sản xuất xi măng đặc biệt.", contentEn: "This heading covers aluminium powders and flakes. Aluminium powders and flakes are used in pyrotechnics, as heat generators, to protect other metals from corrosion, in rocket propellants and in the preparation of special cements." },
      { code: "76.04", titleVi: "Nhôm ở dạng thanh, que và hình", titleEn: "Aluminium bars, rods and profiles", contentVi: "Nhóm này bao gồm nhôm ở dạng thanh, que và hình (bao gồm cả hình rỗng), được sản xuất bằng cán, ép đùn hoặc kéo.", contentEn: "This heading covers aluminium bars, rods and profiles (including hollow profiles), manufactured by rolling, extruding or drawing." },
      { code: "76.05", titleVi: "Dây nhôm", titleEn: "Aluminium wire", contentVi: "Nhóm này bao gồm dây nhôm, được sản xuất bằng phương pháp kéo.", contentEn: "This heading covers aluminium wire, manufactured by drawing." },
      { code: "76.06", titleVi: "Nhôm ở dạng tấm, lá và dải, chiều dày trên 0,2 mm", titleEn: "Aluminium plates, sheets and strip, of a thickness exceeding 0.2 mm", contentVi: "Nhóm này bao gồm nhôm ở dạng tấm, lá và dải có chiều dày trên 0,2 mm.", contentEn: "This heading covers aluminium plates, sheets and strip of a thickness exceeding 0.2 mm." },
      { code: "76.07", titleVi: "Nhôm lá mỏng (đã hoặc chưa in hoặc bồi trên giấy, bìa, plastic hoặc vật liệu bồi tương tự) có chiều dày (trừ phần bồi) không quá 0,2 mm", titleEn: "Aluminium foil (whether or not printed or backed with paper, paperboard, plastics or similar backing materials) of a thickness (excluding any backing) not exceeding 0.2 mm", contentVi: "Nhóm này bao gồm nhôm lá mỏng có chiều dày không quá 0,2 mm. Nhôm lá mỏng được sử dụng trong sản xuất nắp chai, đóng gói thực phẩm, xì gà, thuốc lá và để cách nhiệt.", contentEn: "This heading covers aluminium foil of a thickness not exceeding 0.2 mm. Aluminium foil is used in the manufacture of bottle caps, for packing foodstuffs, cigars, cigarettes, tobacco and for thermal insulation." },
      { code: "76.08", titleVi: "Các loại ống và ống dẫn bằng nhôm", titleEn: "Aluminium tubes and pipes", contentVi: "Các loại ống và ống dẫn của nhóm này có thể được sản xuất bằng việc ép đùn, hàn nối hoặc đúc. Chúng được sử dụng cho nhiều mục đích như làm đường ống dẫn dầu hoặc dẫn nước, làm ống dẫn dây điện, trong sản xuất đồ nội thất, bộ trao đổi nhiệt.", contentEn: "The tubes and pipes of this heading may be manufactured by extruding, welding or casting. They are used for many purposes, e.g., as pipelines for oil or water, as conduits for electrical wiring, in the manufacture of furniture, heat exchangers." },
      { code: "76.09", titleVi: "Phụ kiện để ghép nối của ống hoặc ống dẫn (ví dụ, khớp nối đôi, khuỷu, măng sông), bằng nhôm", titleEn: "Aluminium tube or pipe fittings (for example, couplings, elbows, sleeves)", contentVi: "Nhóm này bao gồm các phụ kiện để ghép nối của ống hoặc ống dẫn bằng nhôm.", contentEn: "This heading covers aluminium tube or pipe fittings." },
      { code: "76.10", titleVi: "Các kết cấu bằng nhôm (trừ nhà lắp ghép thuộc nhóm 94.06) và các bộ phận của các kết cấu bằng nhôm; tấm, thanh, dạng hình, ống và các loại tương tự bằng nhôm, đã được gia công để sử dụng làm kết cấu", titleEn: "Aluminium structures (excluding prefabricated buildings of heading 94.06) and parts of structures; aluminium plates, rods, profiles, tubes and the like, prepared for use in structures", contentVi: "Vì đặc tính nhẹ nên nhôm và các hợp kim của nhôm đôi khi được sử dụng thay cho sắt hoặc thép trong sản xuất các khung kết cấu, các siêu kết cấu của tàu thuỷ, cầu cống, các cửa ra vào dạng trượt, khuôn cửa ra vào hoặc cửa sổ, tay vịn.", contentEn: "Because of their lightness, aluminium and its alloys are sometimes used instead of iron or steel in the manufacture of structural frameworks, ship superstructures, bridges, sliding doors, door or window frames, hand-rails." },
      { code: "76.11", titleVi: "Các loại bể chứa, két, bình chứa và các loại tương tự, dùng để chứa các loại vật liệu (trừ khí nén hoặc khí hóa lỏng), bằng nhôm, có dung tích trên 300 lít, đã hoặc chưa lót hoặc cách nhiệt, nhưng chưa lắp ghép với thiết bị cơ khí hoặc thiết bị nhiệt", titleEn: "Aluminium reservoirs, tanks, vats and similar containers, for any material (other than compressed or liquefied gas), of a capacity exceeding 300 litres, whether or not lined or heat-insulated, but not fitted with mechanical or thermal equipment", contentVi: "Vì đặc tính nhẹ và chống ăn mòn nên nhôm có khuynh hướng thay thế sắt và thép trong việc sản xuất ra các loại bể chứa nước, két chứa, đặc biệt trong các ngành công nghiệp hoá chất, các nhà máy bia, các nhà máy bơ sữa.", contentEn: "Because of their lightness and resistance to corrosion, aluminium tends to replace iron and steel in the manufacture of water tanks, storage containers, particularly in the chemical industries, breweries, dairies." },
      { code: "76.12", titleVi: "Thùng phuy, thùng hình trống, lon, hộp và các loại đồ chứa tương tự (kể cả thùng chứa hình ống cứng hoặc có thể xếp lại được), dùng để chứa các loại vật liệu (trừ khí nén hoặc khí hóa lỏng), bằng nhôm, có dung tích không quá 300 lít", titleEn: "Aluminium casks, drums, cans, boxes and similar containers (including rigid or collapsible tubular containers), for any material (other than compressed or liquefied gas), of a capacity not exceeding 300 litres", contentVi: "Nhóm này bao gồm thùng phuy, thùng hình trống, lon, hộp và các loại đồ chứa tương tự bằng nhôm có dung tích không quá 300 lít.", contentEn: "This heading covers aluminium casks, drums, cans, boxes and similar containers of a capacity not exceeding 300 litres." },
      { code: "76.13", titleVi: "Các loại đồ chứa bằng nhôm dùng để chứa khí nén hoặc khí hóa lỏng", titleEn: "Aluminium containers for compressed or liquefied gas", contentVi: "Nhóm này bao gồm các loại đồ chứa bằng nhôm dùng để chứa khí nén hoặc khí hóa lỏng.", contentEn: "This heading covers aluminium containers for compressed or liquefied gas." },
      { code: "76.14", titleVi: "Dây bện tao, cáp, dây tết và các loại tương tự, bằng nhôm, chưa được cách điện", titleEn: "Stranded wire, cables, plaited bands and the like, of aluminium, not electrically insulated", contentVi: "Nhóm này bao gồm dây bện tao, cáp, dây tết bằng nhôm, chưa được cách điện.", contentEn: "This heading covers stranded wire, cables, plaited bands of aluminium, not electrically insulated." },
      { code: "76.15", titleVi: "Bộ đồ ăn, đồ nhà bếp hoặc các loại đồ gia dụng khác và các bộ phận của chúng, bằng nhôm; bàn chải, miếng đánh bóng và đồ tương tự bằng nhôm; đồ trang bị vệ sinh và các bộ phận của chúng, bằng nhôm", titleEn: "Table, kitchen or other household articles and parts thereof, of aluminium; pot scourers and scouring or polishing pads, gloves and the like, of aluminium; sanitary ware and parts thereof, of aluminium", contentVi: "Nhóm này bao gồm bộ đồ ăn, đồ nhà bếp, đồ gia dụng và đồ trang bị vệ sinh bằng nhôm.", contentEn: "This heading covers table, kitchen, household articles and sanitary ware of aluminium." },
      { code: "76.16", titleVi: "Các sản phẩm khác bằng nhôm", titleEn: "Other articles of aluminium", contentVi: "Nhóm này bao gồm các sản phẩm khác bằng nhôm không được phân loại ở nơi khác, bao gồm sản phẩm dạng lưới được tạo hình bằng phương pháp đột dập và kéo giãn thành lưới.", contentEn: "This heading covers other articles of aluminium not elsewhere classified, including expanded metal." }
    ]
  },
  {
    chapter: 77,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "(Dự phòng cho việc sử dụng trong tương lai trong Hệ thống hài hòa)",
    titleEn: "(Reserved for possible future use in the Harmonized System)",
    notesVi: [
      "Chương này được dự phòng cho việc sử dụng trong tương lai trong Hệ thống hài hòa."
    ],
    notesEn: [
      "This Chapter is reserved for possible future use in the Harmonized System."
    ],
    generalVi: "Chương 77 được dự phòng cho việc sử dụng trong tương lai trong Hệ thống hài hòa (HS). Hiện tại không có mã HS nào được phân loại trong chương này.",
    generalEn: "Chapter 77 is reserved for possible future use in the Harmonized System (HS). Currently no HS codes are classified in this chapter.",
    headings: []
  },
  {
    chapter: 78,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Chì và các sản phẩm bằng chì",
    titleEn: "Lead and articles thereof",
    notesVi: [
      "Trong Chương này khái niệm \"chì tinh luyện\" có nghĩa: Là kim loại có hàm lượng chì chiếm ít nhất 99,9% tính theo khối lượng, với điều kiện hàm lượng của mỗi nguyên tố khác trong thành phần không vượt quá giới hạn nêu trong bảng (Ag: 0,02%; As: 0,005%; Bi: 0,05%; Ca: 0,002%; Cd: 0,002%; Cu: 0,08%; Fe: 0,002%; S: 0,002%; Sb: 0,005%; Sn: 0,005%; Zn: 0,002%; các nguyên tố khác: 0,001%)."
    ],
    notesEn: [
      "In this Chapter the expression \"refined lead\" means: Metal containing by weight at least 99.9% of lead, provided that the content by weight of any other element does not exceed the limit specified in the table (Ag: 0.02%; As: 0.005%; Bi: 0.05%; Ca: 0.002%; Cd: 0.002%; Cu: 0.08%; Fe: 0.002%; S: 0.002%; Sb: 0.005%; Sn: 0.005%; Zn: 0.002%; other elements: 0.001% each)."
    ],
    generalVi: "Chương này gồm chì, các hợp kim của chì và các hàng hóa từ chì. Chì chủ yếu thu được từ Galena, là một loại quặng chì sunfua tự nhiên thường có chứa bạc. Sau khi làm giàu bằng phương pháp tuyển nổi, quặng nghiền vụn thường được nung hoặc thiêu kết và sau đó được khử bằng nấu chảy. Chì là kim loại nặng có màu xanh xám, nó rất dễ dát mỏng, dễ nấu chảy và rất mềm. Chì chống lại tác dụng của hầu hết các axit và được sử dụng trong việc xây dựng nhà máy hoá chất.",
    generalEn: "This Chapter covers lead and its alloys, and certain articles thereof. Lead is mainly extracted from galena, a natural lead sulphide ore often containing silver. The crushed ore, after concentration by flotation, is generally roasted or sintered, and is then reduced by smelting. Lead is a heavy, bluish-grey metal; it is very malleable, easily melted and very soft. It resists the action of most acids and is therefore used in the construction of chemical plant.",
    headings: [
      { code: "78.01", titleVi: "Chì chưa gia công", titleEn: "Unwrought lead", contentVi: "Nhóm này bao gồm chì tinh luyện, chì chưa tinh luyện và các sản phẩm trung gian khác của quá trình luyện kim chì. Chì chưa gia công thường ở dạng thỏi, phôi, viên hoặc các dạng thô khác.", contentEn: "This heading covers refined lead, unrefined lead and other intermediate products of lead metallurgy. Unwrought lead is usually in the form of ingots, billets, pellets or other primary forms." },
      { code: "78.02", titleVi: "Phế liệu và mảnh vụn chì", titleEn: "Lead waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn chì, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí chì.", contentEn: "This heading covers lead waste and scrap, including waste from the manufacture or mechanical working of lead." },
      { code: "78.04", titleVi: "Chì ở dạng tấm, lá, dải và lá mỏng; bột và vảy chì", titleEn: "Lead plates, sheets, strip and foil; lead powders and flakes", contentVi: "Nhóm này bao gồm các sản phẩm thu được bằng việc cán hoặc ép đùn chì chưa gia công. Tấm chì được sử dụng để lợp mái, ốp tường và bảo vệ khỏi bức xạ.", contentEn: "This heading covers products obtained by rolling or extruding unwrought lead. Lead sheets are used for roofing, wall cladding and radiation shielding." },
      { code: "78.06", titleVi: "Sản phẩm khác bằng chì", titleEn: "Other articles of lead", contentVi: "Nhóm này bao gồm các ống, ống dẫn và phụ kiện bằng chì, và các sản phẩm chì khác không được phân loại ở nơi khác. Các ống chì được sử dụng cho các mục đích công nghiệp như ống dẫn axit.", contentEn: "This heading covers tubes, pipes and fittings of lead, and other articles of lead not elsewhere classified. Lead pipes are used for industrial purposes such as acid conduits." }
    ]
  },
  {
    chapter: 79,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Kẽm và các sản phẩm bằng kẽm",
    titleEn: "Zinc and articles thereof",
    notesVi: [
      "(a) Kẽm, không hợp kim: Là kim loại có hàm lượng kẽm ít nhất 97,5% tính theo khối lượng.",
      "(b) Hợp kim kẽm: Vật liệu kim loại mà trong đó hàm lượng của kẽm lớn hơn so với hàm lượng của mỗi nguyên tố khác, với điều kiện tổng hàm lượng của các nguyên tố khác trên 2,5%.",
      "(c) Bụi kẽm: Bụi thu được từ quá trình ngưng tụ hơi kẽm, bao gồm những hạt hình cầu nhỏ hơn bột kẽm. Có tối thiểu 80% tính theo khối lượng các hạt lọt qua mắt sàng 63 micromét. Hàm lượng của kẽm ít nhất là 85% tính theo khối lượng."
    ],
    notesEn: [
      "(a) Zinc, not alloyed: Metal containing by weight at least 97.5% of zinc.",
      "(b) Zinc alloys: Metallic substances in which zinc predominates by weight over each of the other elements, provided that the total content by weight of such other elements exceeds 2.5%.",
      "(c) Zinc dust: Dust obtained by condensation of zinc vapour, consisting of spherical particles which are finer than zinc powders. At least 80% by weight of the particles pass through a sieve with 63 micrometres mesh. It must contain at least 85% by weight of metallic zinc."
    ],
    generalVi: "Chương này bao gồm kẽm và các hợp kim của kẽm, và một số sản phẩm của nó. Kẽm chủ yếu thu được từ quặng sunfua (hỗn hợp kẽm hoặc các Sphalerit). Kẽm là một kim loại có màu trắng xanh có thể được cán, kéo, dập, ép... ở những nhiệt độ thích hợp. Kẽm là chất có khả năng chống lại sự ăn mòn trong bầu khí quyển và được sử dụng trong công trình xây dựng và để tạo nên các lớp vỏ bọc bảo vệ những kim loại khác, đặc biệt là sắt và thép.",
    generalEn: "This Chapter covers zinc and zinc alloys, and certain articles thereof. Zinc is mainly extracted from the sulphide ore (zinc blende or sphalerite). Zinc is a bluish-white metal which can be rolled, drawn, stamped, extruded, etc., at suitable temperatures. Zinc has good resistance to atmospheric corrosion and is used in construction and to provide protective coatings for other metals, especially iron and steel.",
    headings: [
      { code: "79.01", titleVi: "Kẽm chưa gia công", titleEn: "Unwrought zinc", contentVi: "Nhóm này bao gồm kẽm không hợp kim và hợp kim kẽm ở dạng chưa gia công, thường ở dạng thỏi, phôi, viên hoặc các dạng thô khác.", contentEn: "This heading covers unwrought zinc, not alloyed and zinc alloys, usually in the form of ingots, billets, pellets or other primary forms." },
      { code: "79.02", titleVi: "Phế liệu và mảnh vụn kẽm", titleEn: "Zinc waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn kẽm, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí kẽm.", contentEn: "This heading covers zinc waste and scrap, including waste from the manufacture or mechanical working of zinc." },
      { code: "79.03", titleVi: "Bụi, bột và vảy kẽm", titleEn: "Zinc dust, powders and flakes", contentVi: "Nhóm này bao gồm bụi, bột và vảy kẽm. Bụi kẽm được sử dụng trong luyện kim (ví dụ: để kết tủa vàng và bạc), trong sản xuất sơn và trong tổng hợp hóa học.", contentEn: "This heading covers zinc dust, powders and flakes. Zinc dust is used in metallurgy (e.g., to precipitate gold and silver), in paint manufacture and in chemical synthesis." },
      { code: "79.04", titleVi: "Kẽm ở dạng thanh, que, hình và dây", titleEn: "Zinc bars, rods, profiles and wire", contentVi: "Nhóm này bao gồm kẽm ở dạng thanh, que, hình và dây, được sản xuất bằng cán, ép đùn hoặc kéo.", contentEn: "This heading covers zinc bars, rods, profiles and wire, manufactured by rolling, extruding or drawing." },
      { code: "79.05", titleVi: "Kẽm ở dạng tấm, lá, dải và lá mỏng", titleEn: "Zinc plates, sheets, strip and foil", contentVi: "Nhóm này bao gồm kẽm ở dạng tấm, lá, dải và lá mỏng. Chúng được sử dụng để lợp mái, làm mạ, trong sản xuất pin khô và các ứng dụng khác.", contentEn: "This heading covers zinc plates, sheets, strip and foil. They are used for roofing, plating, in the manufacture of dry batteries and other applications." },
      { code: "79.07", titleVi: "Sản phẩm khác bằng kẽm", titleEn: "Other articles of zinc", contentVi: "Nhóm này bao gồm các ống, ống dẫn và phụ kiện bằng kẽm, và các sản phẩm kẽm khác không được phân loại ở nơi khác.", contentEn: "This heading covers tubes, pipes and fittings of zinc, and other articles of zinc not elsewhere classified." }
    ]
  },
  {
    chapter: 80,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Thiếc và các sản phẩm bằng thiếc",
    titleEn: "Tin and articles thereof",
    notesVi: [
      "(a) Thiếc, không hợp kim: Là kim loại có hàm lượng thiếc chiếm ít nhất 99% tính theo khối lượng, với điều kiện hàm lượng của bismut hoặc đồng phải thấp hơn giới hạn (Bi: 0,1%; Cu: 0,4%).",
      "(b) Hợp kim thiếc: Vật liệu kim loại mà trong đó hàm lượng thiếc lớn hơn so với hàm lượng của mỗi nguyên tố khác tính theo khối lượng, với điều kiện tổng hàm lượng các nguyên tố khác trên 1% hoặc hàm lượng của bismut hoặc đồng bằng hoặc lớn hơn giới hạn nêu trên."
    ],
    notesEn: [
      "(a) Tin, not alloyed: Metal containing by weight at least 99% of tin, provided that the content by weight of any bismuth or copper is less than the limit specified (Bi: 0.1%; Cu: 0.4%).",
      "(b) Tin alloys: Metallic substances in which tin predominates by weight over each of the other elements, provided that the total content by weight of such other elements exceeds 1%, or the content by weight of bismuth or copper is equal to or greater than the limit specified above."
    ],
    generalVi: "Chương này bao gồm thiếc và các hợp kim của thiếc, và một số sản phẩm làm bằng thiếc. Thiếc chiết xuất từ các quặng ôxit Cassiterite (hoặc đá thiếc). Thiếc tinh khiết có màu trắng bạc và rất bóng, không thật dẻo, nhưng có thể rèn được, dễ dàng bị nấu chảy và mềm. Thiếc có thể dễ dàng được tạo hình qua đúc khuôn dập, cán hoặc ép đùn. Thiếc chủ yếu được dùng trong quá trình mạ thiếc cho các kim loại cơ bản khác và trong việc tạo ra các hợp kim.",
    generalEn: "This Chapter covers tin and its alloys, and certain articles thereof. Tin is extracted from the oxide ore cassiterite (or tinstone). Pure tin is silvery white and very bright, not very ductile but malleable, easily melted and soft. Tin can easily be shaped by die-casting, rolling or extruding. Tin is mainly used for tinplating other base metals and for making alloys.",
    headings: [
      { code: "80.01", titleVi: "Thiếc chưa gia công", titleEn: "Unwrought tin", contentVi: "Nhóm này bao gồm thiếc không hợp kim và hợp kim thiếc ở dạng chưa gia công, thường ở dạng thỏi, phôi, viên hoặc các dạng thô khác.", contentEn: "This heading covers unwrought tin, not alloyed and tin alloys, usually in the form of ingots, billets, pellets or other primary forms." },
      { code: "80.02", titleVi: "Phế liệu và mảnh vụn thiếc", titleEn: "Tin waste and scrap", contentVi: "Nhóm này bao gồm phế liệu và mảnh vụn thiếc, bao gồm phế liệu từ sản xuất hoặc gia công cơ khí thiếc.", contentEn: "This heading covers tin waste and scrap, including waste from the manufacture or mechanical working of tin." },
      { code: "80.03", titleVi: "Thiếc ở dạng thanh, que, hình và dây", titleEn: "Tin bars, rods, profiles and wire", contentVi: "Nhóm này bao gồm thiếc ở dạng thanh, que, hình và dây, được sản xuất bằng cán, ép đùn hoặc kéo.", contentEn: "This heading covers tin bars, rods, profiles and wire, manufactured by rolling, extruding or drawing." },
      { code: "80.07", titleVi: "Sản phẩm khác bằng thiếc", titleEn: "Other articles of tin", contentVi: "Nhóm này bao gồm các tấm, lá, dải; ống, ống dẫn và phụ kiện; và các sản phẩm thiếc khác không được phân loại ở nơi khác. Thiếc được sử dụng trong sản xuất các thiết bị, đường ống cho ngành công nghiệp thực phẩm, các sản phẩm trang trí và bộ đồ ăn.", contentEn: "This heading covers plates, sheets, strip; tubes, pipes and fittings; and other articles of tin not elsewhere classified. Tin is used in the manufacture of equipment, pipelines for the food industry, decorative articles and tableware." }
    ]
  },
  {
    chapter: 81,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Kim loại cơ bản khác; gốm kim loại; các sản phẩm của chúng",
    titleEn: "Other base metals; cermets; articles thereof",
    notesVi: [
      "Chương này chỉ giới hạn bao gồm các kim loại cơ bản sau, các hợp kim của chúng, và các sản phẩm của chúng mà không được đề cập riêng ở bất cứ phần nào trong Danh mục."
    ],
    notesEn: [
      "This Chapter is limited to the following base metals, their alloys, and articles thereof which are not more specifically covered elsewhere in the Nomenclature."
    ],
    generalVi: "Chương này bao gồm: (A) Vôn-fram (nhóm 81.01), Molybden (nhóm 81.02), Tantan (nhóm 81.03), Magie (nhóm 81.04), Coban (nhóm 81.05), Bitmut (nhóm 81.06), Cađimi (nhóm 81.07), Titan (nhóm 81.08), Zirconi (nhóm 81.09), Antimon (nhóm 81.10) và Mangan (nhóm 81.11). (B) Berili, crôm, hafini, reni, tali, gecmani, vanadi, gali, indi và niobi (columbi) (nhóm 81.12). Chương này cũng bao gồm gốm kim loại (nhóm 81.13).",
    generalEn: "This Chapter covers: (A) Tungsten (heading 81.01), Molybdenum (heading 81.02), Tantalum (heading 81.03), Magnesium (heading 81.04), Cobalt (heading 81.05), Bismuth (heading 81.06), Cadmium (heading 81.07), Titanium (heading 81.08), Zirconium (heading 81.09), Antimony (heading 81.10) and Manganese (heading 81.11). (B) Beryllium, chromium, hafnium, rhenium, thallium, germanium, vanadium, gallium, indium and niobium (columbium) (heading 81.12). This Chapter also covers cermets (heading 81.13).",
    headings: [
      { code: "81.01", titleVi: "Vonfram và các sản phẩm làm từ vonfram, kể cả phế liệu và mảnh vụn", titleEn: "Tungsten (wolfram) and articles thereof, including waste and scrap", contentVi: "Volfram chủ yếu thu được từ các quặng Volframit và Sêêlit. Volfram là kim loại có màu xám thép, mật độ cao, điểm nóng chảy cao, giòn, cứng và có khả năng chống lại sự ăn mòn kim loại cao. Volfram được sử dụng làm sợi dây tóc của các bóng đèn, điện cực cho hàn hồ quang, và trong chế luyện các loại thép đặc biệt.", contentEn: "Tungsten is mainly extracted from wolframite and scheelite ores. Tungsten is a dense, steel-grey metal, with a high melting point. It is brittle, hard and has a high resistance to corrosion. Tungsten is used for filaments of electric lamps, electrodes for arc welding, and in making special steels." },
      { code: "81.02", titleVi: "Molypđen và các sản phẩm làm từ molypđen, kể cả phế liệu và mảnh vụn", titleEn: "Molybdenum and articles thereof, including waste and scrap", contentVi: "Molypđen chủ yếu thu được từ quặng Molypđenit. Molypđen là kim loại có màu xám sáng, cứng, có điểm nóng chảy cao và chống lại sự ăn mòn tốt. Nó được sử dụng trong sản xuất thép hợp kim và trong các ứng dụng điện tử.", contentEn: "Molybdenum is mainly extracted from molybdenite ore. Molybdenum is a light grey metal, hard, with a high melting point and good corrosion resistance. It is used in the production of alloy steels and in electronic applications." },
      { code: "81.03", titleVi: "Tantan và các sản phẩm làm từ tantan, kể cả phế liệu và mảnh vụn", titleEn: "Tantalum and articles thereof, including waste and scrap", contentVi: "Tantan là kim loại có màu xám xanh, có độ dẻo cao và chống lại hầu hết các axit. Tantan được sử dụng trong sản xuất tụ điện, thiết bị phẫu thuật và trong công nghiệp hóa chất.", contentEn: "Tantalum is a bluish-grey metal, highly ductile and resistant to most acids. Tantalum is used in the manufacture of capacitors, surgical equipment and in the chemical industry." },
      { code: "81.04", titleVi: "Magie và các sản phẩm làm từ magie, kể cả phế liệu và mảnh vụn", titleEn: "Magnesium and articles thereof, including waste and scrap", contentVi: "Magie là kim loại có màu trắng bạc, nhẹ nhất trong các kim loại kết cấu. Magie và các hợp kim của nó được sử dụng rộng rãi trong ngành hàng không, sản xuất ô tô và các ứng dụng yêu cầu trọng lượng nhẹ.", contentEn: "Magnesium is a silvery white metal, the lightest of the structural metals. Magnesium and its alloys are widely used in aerospace, automobile manufacture and applications requiring light weight." },
      { code: "81.05", titleVi: "Coban mát và các sản phẩm trung gian khác trong quá trình luyện kim coban; coban và các sản phẩm làm từ coban, kể cả phế liệu và mảnh vụn", titleEn: "Cobalt mattes and other intermediate products of cobalt metallurgy; cobalt and articles thereof, including waste and scrap", contentVi: "Coban là kim loại có màu xám thép với ánh xanh. Coban được sử dụng trong sản xuất hợp kim chịu nhiệt, nam châm vĩnh cửu, và làm chất xúc tác trong công nghiệp hóa chất.", contentEn: "Cobalt is a steel-grey metal with a bluish tinge. Cobalt is used in the production of heat-resistant alloys, permanent magnets, and as a catalyst in the chemical industry." },
      { code: "81.06", titleVi: "Bitmut và các sản phẩm làm từ bitmut, kể cả phế liệu và mảnh vụn", titleEn: "Bismuth and articles thereof, including waste and scrap", contentVi: "Bitmut là kim loại có màu trắng ánh hồng với vẻ ngoài sáng bóng. Bitmut được sử dụng trong sản xuất hợp kim có điểm nóng chảy thấp, trong dược phẩm và trong mỹ phẩm.", contentEn: "Bismuth is a pinkish-white metal with a bright lustre. Bismuth is used in the manufacture of low-melting alloys, in pharmaceuticals and in cosmetics." },
      { code: "81.07", titleVi: "Cađimi và các sản phẩm làm từ cađimi, kể cả phế liệu và mảnh vụn", titleEn: "Cadmium and articles thereof, including waste and scrap", contentVi: "Cađimi là kim loại có màu trắng bạc mềm. Cađimi được sử dụng trong mạ điện, trong sản xuất pin và trong các hợp kim có điểm nóng chảy thấp.", contentEn: "Cadmium is a soft silvery-white metal. Cadmium is used in electroplating, in the manufacture of batteries and in low-melting alloys." },
      { code: "81.08", titleVi: "Titan và các sản phẩm làm từ titan, kể cả phế liệu và mảnh vụn", titleEn: "Titanium and articles thereof, including waste and scrap", contentVi: "Titan là kim loại có màu xám sáng, nhẹ, bền và có khả năng chống ăn mòn cao. Titan được sử dụng rộng rãi trong ngành hàng không vũ trụ, y tế và công nghiệp hóa chất.", contentEn: "Titanium is a light grey metal, lightweight, strong and highly corrosion-resistant. Titanium is widely used in aerospace, medical and chemical industries." },
      { code: "81.09", titleVi: "Zirconi và các sản phẩm làm từ zirconi, kể cả phế liệu và mảnh vụn", titleEn: "Zirconium and articles thereof, including waste and scrap", contentVi: "Zirconi là kim loại có màu xám sáng với khả năng chống ăn mòn cao. Zirconi được sử dụng trong lò phản ứng hạt nhân, trong ngành hóa chất và trong sản xuất đồ gốm sứ.", contentEn: "Zirconium is a greyish-white metal with high corrosion resistance. Zirconium is used in nuclear reactors, in the chemical industry and in ceramics production." },
      { code: "81.10", titleVi: "Antimon và các sản phẩm làm từ antimon, kể cả phế liệu và mảnh vụn", titleEn: "Antimony and articles thereof, including waste and scrap", contentVi: "Antimon là kim loại có màu trắng bạc ánh xanh, giòn và dễ nghiền thành bột. Antimon được sử dụng trong sản xuất hợp kim (đặc biệt với chì), trong chất chống cháy và trong sản xuất bán dẫn.", contentEn: "Antimony is a silvery-white metal with a bluish tinge, brittle and easily powdered. Antimony is used in alloys (especially with lead), in flame retardants and in semiconductor production." },
      { code: "81.11", titleVi: "Mangan và các sản phẩm làm từ mangan, kể cả phế liệu và mảnh vụn", titleEn: "Manganese and articles thereof, including waste and scrap", contentVi: "Mangan là kim loại có màu xám thép, cứng và giòn. Mangan chủ yếu được sử dụng trong sản xuất thép và hợp kim, cũng như trong sản xuất pin.", contentEn: "Manganese is a steel-grey metal, hard and brittle. Manganese is mainly used in steel and alloy production, as well as in battery manufacture." },
      { code: "81.12", titleVi: "Berili, crôm, hafini (celtium), rheni, tali, cađimi, gecmani, vanadi, gali, indi và niobi (columbi), và các sản phẩm làm từ các kim loại này, kể cả phế liệu và mảnh vụn", titleEn: "Beryllium, chromium, hafnium (celtium), rhenium, thallium, cadmium, germanium, vanadium, gallium, indium and niobium (columbium), and articles of these metals, including waste and scrap", contentVi: "Nhóm này bao gồm các kim loại cơ bản khác và các sản phẩm của chúng. Các kim loại này được sử dụng trong nhiều ứng dụng công nghệ cao như điện tử, hàng không vũ trụ, năng lượng hạt nhân và công nghiệp bán dẫn.", contentEn: "This heading covers other base metals and their articles. These metals are used in many high-tech applications such as electronics, aerospace, nuclear energy and semiconductor industry." },
      { code: "81.13", titleVi: "Gốm kim loại và các sản phẩm làm từ gốm kim loại, kể cả phế liệu và mảnh vụn", titleEn: "Cermets and articles thereof, including waste and scrap", contentVi: "Gốm kim loại là vật liệu kết hợp giữa thành phần kim loại và thành phần gốm trong cấu trúc vi mô. Chúng được sử dụng trong các ứng dụng yêu cầu khả năng chịu nhiệt cao và độ cứng, như công cụ cắt và các bộ phận chịu mài mòn.", contentEn: "Cermets are materials combining metallic and ceramic components in their microstructure. They are used in applications requiring high heat resistance and hardness, such as cutting tools and wear-resistant parts." }
    ]
  },
  {
    chapter: 82,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Dụng cụ, đồ nghề, dao, kéo, bộ đồ ăn làm từ kim loại cơ bản; các bộ phận của chúng làm từ kim loại cơ bản",
    titleEn: "Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal",
    notesVi: [
      "1. Ngoài các mặt hàng như đèn khò, bộ bệ rèn di động, các loại đá mài có lắp gá đỡ, bộ sửa móng tay hoặc móng chân, và các mặt hàng thuộc nhóm 82.09, Chương này chỉ bao gồm các sản phẩm có lưỡi dao, lưỡi cắt, bề mặt làm việc hoặc bộ phận làm việc khác bằng: (a) Kim loại cơ bản; (b) Cacbua kim loại hoặc gốm kim loại; (c) Đá quý hoặc đá bán quý (tự nhiên, tổng hợp hoặc tái tạo); (d) Vật liệu mài gắn với nền kim loại cơ bản.",
      "2. Các bộ phận bằng kim loại cơ bản của các sản phẩm thuộc Chương này được phân loại theo các sản phẩm đó, trừ các bộ phận được chi tiết riêng và tay cầm cho các loại dụng cụ cầm tay. Tuy nhiên, các bộ phận có công dụng chung nêu trong Chú giải 2 Phần XV được loại trừ khỏi Chương này trong mọi trường hợp.",
      "3. Bộ gồm 1 hoặc nhiều dao thuộc nhóm 82.11 và ít nhất là một số lượng tương đương các sản phẩm thuộc nhóm 82.15 được phân loại trong nhóm 82.15."
    ],
    notesEn: [
      "1. Apart from blow lamps, portable forges, grinding wheels with frameworks, manicure or pedicure sets, and goods of heading 82.09, this Chapter covers only articles with a blade, working edge, working surface or other working part of: (a) Base metal; (b) Metal carbides or cermets; (c) Precious or semi-precious stones (natural, synthetic or reconstructed); (d) Abrasive materials on a support of base metal.",
      "2. Parts of base metal of the articles of this Chapter are to be classified with the articles of which they are parts, except parts separately specified as such and tool-holders for hand tools. However, parts of general use as defined in Note 2 to Section XV are in all cases excluded from this Chapter.",
      "3. Sets consisting of one or more knives of heading 82.11 and at least an equal number of articles of heading 82.15 are to be classified in heading 82.15."
    ],
    generalVi: "Chương này bao gồm các loại dụng cụ, đồ nghề, dao, kéo, bộ đồ ăn làm từ kim loại cơ bản và các bộ phận của chúng. Chương bao gồm: (A) Các dụng cụ sử dụng bằng tay (nhóm 82.01-82.05); (B) Bộ dụng cụ từ hai nhóm trở lên (nhóm 82.06); (C) Các dụng cụ có thể tháo lắp thay thế được (nhóm 82.07-82.09); (D) Các mặt hàng dao, kéo và bộ đồ ăn (nhóm 82.10-82.15).",
    generalEn: "This Chapter covers tools, implements, cutlery, spoons and forks of base metal and parts thereof. It includes: (A) Tools used in the hand (headings 82.01-82.05); (B) Tools of two or more headings put up in sets (heading 82.06); (C) Interchangeable tools (headings 82.07-82.09); (D) Cutlery and tableware articles (headings 82.10-82.15).",
    headings: [
      { code: "82.01", titleVi: "Dụng cụ cầm tay: mai, xẻng, cuốc, chim, cuốc, cào; rìu, câu liêm và dụng cụ cắt chặt tương tự; kéo cắt cây; hái, liềm, dao cắt cỏ, kéo tỉa hàng rào và dụng cụ làm nông, vườn, lâm nghiệp khác", titleEn: "Hand tools: spades, shovels, mattocks, picks, hoes, forks and rakes; axes, bill hooks and similar hewing tools; secateurs; scythes, sickles, hay knives, hedge shears and other tools for agriculture, horticulture or forestry", contentVi: "Nhóm này bao gồm dụng cụ cầm tay chủ yếu sử dụng trong nông nghiệp, làm vườn hoặc lâm nghiệp, như mai, xẻng, cuốc chim, cuốc, dụng cụ xới và cào, rìu, câu liêm, kéo cắt cây và kéo cắt tỉa, hái, liềm, dao cắt cỏ, kéo tỉa xén hàng rào.", contentEn: "This heading covers hand tools mainly used in agriculture, horticulture or forestry, such as spades, shovels, mattocks, picks, hoes, rakes, axes, bill hooks, secateurs and pruners, scythes, sickles, hay knives, hedge shears." },
      { code: "82.02", titleVi: "Cưa tay; lưỡi cưa các loại (kể cả các loại lưỡi rạch, lưỡi khía răng cưa hoặc lưỡi cưa không răng)", titleEn: "Hand saws; blades for saws of all kinds (including slitting, slotting or toothless saw blades)", contentVi: "Nhóm này bao gồm cưa tay dùng để cưa gỗ, cưa kim loại, đá hoặc các chất liệu khác, và lưỡi cưa các loại như lưỡi cưa vòng, lưỡi cưa đĩa, lưỡi cưa xích, lưỡi cưa thẳng.", contentEn: "This heading covers hand saws for wood, metal, stone or other materials, and saw blades of all kinds such as band saw blades, circular saw blades, chain saw blades, straight saw blades." },
      { code: "82.03", titleVi: "Giũa, nạo, kìm (kể cả kìm cắt), panh, nhíp, kéo cắt kim loại, dụng cụ cắt ống, xén bu lông, mũi đột lỗ và các dụng cụ cầm tay tương tự", titleEn: "Files, rasps, pliers (including cutting pliers), pincers, tweezers, metal cutting shears, pipe-cutters, bolt croppers, perforating punches and similar hand tools", contentVi: "Nhóm này bao gồm các dụng cụ cầm tay như giũa, nạo và các dụng cụ tương tự; kìm, panh, nhíp; kéo cắt kim loại; dụng cụ cắt ống, xén bulông, đột lỗ và các dụng cụ tương tự.", contentEn: "This heading covers hand tools such as files, rasps and similar tools; pliers, pincers, tweezers; metal cutting shears; pipe-cutters, bolt croppers, perforating punches and similar tools." },
      { code: "82.04", titleVi: "Cờ lê và thanh vặn ốc (bu lông) và đai ốc loại vặn bằng tay (kể cả cờ lê định lực nhưng trừ thanh văn tarô); đầu cờ lê có thể thay đổi được, có hoặc không có tay vặn", titleEn: "Hand-operated spanners and wrenches (including torque meter wrenches but not including tap wrenches); interchangeable spanner sockets, with or without handles", contentVi: "Nhóm này bao gồm cờ lê và thanh vặn đai ốc bằng tay các loại như loại không điều chỉnh được, loại điều chỉnh được, và các đầu cờ lê có thể thay đổi.", contentEn: "This heading covers hand-operated spanners and wrenches of all kinds including non-adjustable, adjustable, and interchangeable spanner sockets." },
      { code: "82.05", titleVi: "Dụng cụ cầm tay chưa được ghi ở nơi khác; đèn xì; mỏ cặp, bàn cặp và các đồ nghề tương tự; đe; bộ bệ rèn xách tay; bàn mài quay hoạt động bằng tay hoặc chân", titleEn: "Hand tools (including glaziers' diamonds), not elsewhere specified; blow lamps; vices, clamps and the like; anvils; portable forges; hand or pedal-operated grinding wheels with frameworks", contentVi: "Nhóm này bao gồm các dụng cụ cầm tay khác như dụng cụ khoan, rèn, búa, bào, đục, tuốc nơ vít, các dụng cụ gia đình, đèn xì, mỏ cặp, bàn cặp, đe, bộ bệ rèn xách tay và bàn mài quay.", contentEn: "This heading covers other hand tools such as drilling, tapping tools, hammers, planes, chisels, screwdrivers, household tools, blow lamps, vices, clamps, anvils, portable forges and grinding wheels." },
      { code: "82.06", titleVi: "Bộ dụng cụ từ hai nhóm trở lên thuộc các nhóm từ 82.02 đến 82.05, đã đóng bộ để bán lẻ", titleEn: "Tools of two or more of the headings 82.02 to 82.05, put up in sets for retail sale", contentVi: "Nhóm này bao gồm các bộ dụng cụ thuộc từ 2 nhóm trở lên từ nhóm 82.02 đến 82.05 với điều kiện là những dụng cụ đó được ghép thành bộ để bán lẻ, ví dụ trong hộp nhựa hoặc trong hộp dụng cụ bằng kim loại.", contentEn: "This heading covers sets of tools falling in two or more of the headings 82.02 to 82.05, provided they are put up in sets for retail sale, e.g., in a plastic case or in a metallic tool box." },
      { code: "82.07", titleVi: "Các dụng cụ có thể thay đổi được dùng cho các dụng cụ cầm tay, có hoặc không hoạt động bằng điện, hoặc dùng cho máy công cụ để ép, dập, đục lỗ, tarô, ren, khoan, doa, chuốt, phay, tiện hoặc vặn vít, kể cả khuôn kéo hoặc ép đùn kim loại, và dụng cụ để khoan đá hoặc khoan đất", titleEn: "Interchangeable tools for hand tools, whether or not power-operated, or for machine-tools for pressing, stamping, punching, tapping, threading, drilling, boring, broaching, milling, turning or screw driving, including dies for drawing or extruding metal, and rock drilling or earth boring tools", contentVi: "Nhóm này bao gồm các dụng cụ có thể tháo lắp thay thế được dùng cho dụng cụ cầm tay, máy công cụ, bao gồm dụng cụ khoan đá, khoan đất, khuôn kéo kim loại, dụng cụ ép, dập, tarô, ren, khoan, doa, chuốt, phay, tiện.", contentEn: "This heading covers interchangeable tools for hand tools or machine tools, including rock drilling and earth boring tools, dies for drawing metal, tools for pressing, stamping, tapping, threading, drilling, boring, broaching, milling, turning." },
      { code: "82.08", titleVi: "Dao và lưỡi cắt, dùng cho máy hoặc dụng cụ cơ khí", titleEn: "Knives and cutting blades, for machines or for mechanical appliances", contentVi: "Nhóm này áp dụng cho các loại dao hoặc lưỡi cắt có hình chữ nhật, hình tròn hoặc hình dạng khác, dùng cho máy móc hoặc thiết bị cơ khí như gia công kim loại, chế biến gỗ, dụng cụ nhà bếp, máy nông nghiệp.", contentEn: "This heading applies to unmounted knives or cutting blades, rectangular, circular or of other shapes, for machines or for mechanical appliances such as metal working, wood working, kitchen appliances, agricultural machines." },
      { code: "82.09", titleVi: "Chi tiết hình đĩa, thanh cỡ nhỏ, mũi chóp và các chi tiết tương tự cho dụng cụ, chưa được gắn vào dụng cụ, làm bằng gốm kim loại", titleEn: "Plates, sticks, tips and the like for tools, unmounted, of cermets", contentVi: "Nhóm này bao gồm các chi tiết hình đĩa, thanh, mũi chóp làm bằng gốm kim loại, rất cứng và rắn, được hàn hoặc kẹp chặt trên dụng cụ máy tiện, máy phay, máy khoan để gia công kim loại hoặc vật liệu cứng khác.", contentEn: "This heading covers plates, sticks, tips of cermets, which are very hard and rigid, welded or clamped to lathe tools, milling cutters, drills for working metal or other hard materials." },
      { code: "82.10", titleVi: "Đồ dùng cơ khí hoạt động bằng tay, nặng 10 kg trở xuống, dùng để chế biến, pha chế hoặc phục vụ đồ ăn hoặc đồ uống", titleEn: "Hand-operated mechanical appliances, weighing 10 kg or less, used in the preparation, conditioning or serving of food or drink", contentVi: "Nhóm này bao gồm các dụng cụ cơ khí không dùng điện, nói chung là đồ dùng cầm tay nặng không quá 10 kg dùng để chế biến, pha chế hoặc phục vụ việc làm đồ ăn hoặc đồ uống như máy xay cà phê, máy xay thịt, máy mở hộp, máy ép trái cây.", contentEn: "This heading covers non-electric mechanical appliances, generally hand-operated, not exceeding 10 kg in weight, used in the preparation, serving or conditioning of food or drink such as coffee mills, meat mincers, can openers, fruit juice extractors." },
      { code: "82.11", titleVi: "Dao có lưỡi cắt, có hoặc không có răng cưa (kể cả dao tỉa), trừ loại dao thuộc nhóm 82.08, và lưỡi của nó", titleEn: "Knives with cutting blades, serrated or not (including pruning knives), other than knives of heading 82.08, and blades therefor", contentVi: "Nhóm này bao gồm các loại dao có lưỡi cắt như dao ăn, dao nhà bếp, dao của thợ thủ công, dao gấp, dao tỉa xén cành và lưỡi dao. Dao có thể có lưỡi cố định hoặc gấp được.", contentEn: "This heading covers knives with cutting blades such as table knives, kitchen knives, craft knives, folding knives, pruning knives and blades therefor. Knives may have fixed or folding blades." },
      { code: "82.12", titleVi: "Dao cạo và lưỡi dao cạo (kể cả lưỡi dao cạo chưa hoàn thiện ở dạng dải)", titleEn: "Razors and razor blades (including razor blade blanks in strips)", contentVi: "Nhóm này bao gồm dao cạo có lưỡi hở, dao cạo râu an toàn và các bộ phận, lưỡi dao cạo đã hoàn tất hoặc chưa, và dụng cụ cạo râu khô không dùng điện.", contentEn: "This heading covers open blade razors, safety razors and their base metal parts, razor blades finished or not, and non-electric dry shavers." },
      { code: "82.13", titleVi: "Kéo, kéo thợ may và các loại kéo tương tự, và lưỡi của chúng", titleEn: "Scissors, tailors' shears and similar shears, and blades therefor", contentVi: "Nhóm này bao gồm các loại kéo có hai lưỡi chồng lên nhau, có khớp trên một đinh vít hoặc chốt, với vòng xỏ ngón tay ở mỗi lưỡi, như kéo gia đình, kéo thợ may, kéo thợ cắt tóc, kéo cắt móng tay.", contentEn: "This heading covers scissors consisting of two superimposed blades articulated on a screw or pin, with finger rings, such as household scissors, tailors' scissors, hairdressers' scissors, manicure scissors." },
      { code: "82.14", titleVi: "Đồ dao kéo khác (ví dụ, tông đơ cắt tóc, dao pha thịt, dao bầu và dao băm); bộ đồ và dụng cụ cắt sửa móng tay hoặc móng chân (kể cả dũa móng)", titleEn: "Other articles of cutlery (for example, hair clippers, butchers' or kitchen cleavers, choppers and mincing knives, paper knives); manicure or pedicure sets and instruments (including nail files)", contentVi: "Nhóm này bao gồm dao rọc giấy, dao mở thư, dao cào giấy, dao gọt bút chì; bộ đồ và dụng cụ cắt sửa móng tay móng chân; tông đơ cắt tóc cầm tay không dùng điện; dao mổ, dao bầu và dao băm.", contentEn: "This heading covers paper knives, letter openers, erasing knives, pencil sharpeners; manicure or pedicure sets and instruments; hand-operated non-electric hair clippers; kitchen cleavers, choppers and mincing knives." },
      { code: "82.15", titleVi: "Thìa, dĩa, muôi, thìa hớt kem, hớt bọt, đồ xúc bánh, dao ăn cá, dao cắt bơ, kẹp gắp đường và các loại đồ dùng nhà bếp hoặc bộ đồ ăn tương tự", titleEn: "Spoons, forks, ladles, skimmers, cake-servers, fish-knives, butter-knives, sugar tongs and similar kitchen or tableware", contentVi: "Nhóm này bao gồm các loại thìa, nĩa, muôi, thìa hớt kem, dao cắt lát mỏng, dao ăn cá, dao phết bơ, kẹp gắp đường và các đồ dùng bàn ăn tương tự. Các bộ bao gồm dao của nhóm 82.11 và các sản phẩm của nhóm này cũng thuộc nhóm này.", contentEn: "This heading covers spoons, forks, ladles, skimmers, slices for serving, fish-knives, butter-knives, sugar tongs and similar tableware. Sets consisting of knives of heading 82.11 and articles of this heading are also included." }
    ]
  },
  {
    chapter: 83,
    section: 15,
    sectionTitleVi: "KIM LOẠI CƠ BẢN VÀ CÁC SẢN PHẨM BẰNG KIM LOẠI CƠ BẢN",
    sectionTitleEn: "BASE METALS AND ARTICLES OF BASE METAL",
    titleVi: "Hàng tạp hóa làm từ kim loại cơ bản",
    titleEn: "Miscellaneous articles of base metal",
    notesVi: [
      "1. Theo mục đích của Chương này, các bộ phận của sản phẩm bằng kim loại cơ bản được phân loại theo sản phẩm gốc. Tuy nhiên, các sản phẩm bằng sắt hoặc thép thuộc nhóm 73.12, 73.15, 73.17, 73.18 hoặc 73.20, hoặc các sản phẩm tương tự bằng kim loại cơ bản khác (Chương 74 đến 76 và 78 đến 81) sẽ không được xem như các bộ phận của các sản phẩm thuộc Chương này.",
      "2. Theo mục đích của nhóm 83.02, thuật ngữ \"bánh xe đẩy (castor)\" có nghĩa là loại bánh xe có đường kính không quá 75 mm (kể cả lốp)."
    ],
    notesEn: [
      "1. For the purposes of this Chapter, parts of base metal are to be classified with their parent articles. However, articles of iron or steel of heading 73.12, 73.15, 73.17, 73.18 or 73.20, or similar articles of other base metal (Chapters 74 to 76 and 78 to 81) are not to be taken as parts of articles of this Chapter.",
      "2. For the purposes of heading 83.02, the word \"castors\" means those having a diameter (including, where appropriate, tyres) not exceeding 75 mm."
    ],
    generalVi: "Chương này bao gồm các sản phẩm tạp hóa làm từ kim loại cơ bản như khóa móc và ổ khóa, giá và phụ kiện, két an toàn, đồ dùng văn phòng, chuông, khung ảnh, ống dễ uốn, móc cài và khóa thắt lưng, nút chai và bộ phận đóng gói, biển chỉ dẫn, và các sản phẩm hàn.",
    generalEn: "This Chapter covers miscellaneous articles of base metal such as padlocks and locks, mountings and fittings, safes, office articles, bells, frames, flexible tubing, clasps and buckles, stoppers and packaging fittings, signposts, and welding products.",
    headings: [
      { code: "83.01", titleVi: "Khóa móc và ổ khóa (loại mở bằng chìa, số hoặc điện), bằng kim loại cơ bản; móc cài và khung có móc cài, đi cùng ổ khóa, bằng kim loại cơ bản; chìa của các loại khóa trên, bằng kim loại cơ bản", titleEn: "Padlocks and locks (key, combination or electrically operated), of base metal; clasps and frames with clasps, incorporating locks, of base metal; keys for any of the foregoing articles, of base metal", contentVi: "Nhóm này bao gồm các loại khóa sử dụng bằng chìa khóa hoặc khóa số, ổ khóa hoạt động bằng điện, khóa móc các loại, ổ khóa cho cửa, đồ nội thất, xe cộ, móc cài và khung có móc cài đi cùng với ổ khóa, và các loại chìa khóa.", contentEn: "This heading covers locks operated by key or combination, electrically operated locks, padlocks of all kinds, locks for doors, furniture, vehicles, clasps and frames with clasps incorporating locks, and keys." },
      { code: "83.02", titleVi: "Giá, khung, phụ kiện và các sản phẩm tương tự bằng kim loại cơ bản dùng cho đồ nội thất, cửa ra vào, cầu thang, cửa sổ, thân xe, yên cương, rương; giá để mũ, mắc mũ, chân giá đỡ; bánh xe đẩy; cơ cấu đóng cửa tự động", titleEn: "Base metal mountings, fittings and similar articles suitable for furniture, doors, staircases, windows, coachwork, saddlery, trunks; hat-racks, hat-pegs, brackets; castors with mountings; automatic door closers", contentVi: "Nhóm này bao gồm các loại bản lề, bánh xe đẩy, giá khung và phụ kiện cho xe có động cơ, cho xây dựng, cho đồ nội thất, cho hòm và tủ, giá để mũ, mắc mũ, và cơ cấu đóng cửa tự động.", contentEn: "This heading covers hinges, castors, mountings and fittings for motor vehicles, for buildings, for furniture, for trunks and cases, hat-racks, hat-pegs, brackets, and automatic door closers." },
      { code: "83.03", titleVi: "Két an toàn đã được bọc thép hoặc gia cố, két bạc và cửa bọc thép và két để đồ an toàn có khóa dùng cho phòng bọc thép, hòm để tiền hoặc tủ đựng chứng từ tài liệu và các loại tương tự, bằng kim loại cơ bản", titleEn: "Armoured or reinforced safes, strong-boxes and doors and safe deposit lockers for strong-rooms, cash or deed boxes and the like, of base metal", contentVi: "Nhóm này bao gồm những vật dụng để chứa đồ và cửa phòng bọc thép được thiết kế để giữ an toàn đồ quý giá, đồ nữ trang, tài liệu với mục đích phòng ngừa mất trộm và hỏa hoạn, như két an toàn, két bạc, hòm để tiền hoặc văn kiện.", contentEn: "This heading covers containers and strong-room doors designed for securing valuables, jewels, documents against theft and fire, such as safes, strong-boxes, cash or deed boxes." },
      { code: "83.04", titleVi: "Tủ đựng hồ sơ, tủ đựng bộ phiếu thư mục, khay để giấy tờ, giá kẹp giấy, khay để bút, giá để con dấu văn phòng và các loại đồ dùng văn phòng hoặc các đồ dùng để bàn tương tự, bằng kim loại cơ bản, trừ đồ nội thất văn phòng thuộc nhóm 94.03", titleEn: "Filing cabinets, card-index cabinets, paper trays, paper rests, pen trays, office-stamp stands and similar office or desk equipment, of base metal, other than office furniture of heading 94.03", contentVi: "Nhóm này bao gồm tủ đựng hồ sơ, tủ đựng bộ phiếu thư mục, các loại hộp phân loại, khay giấy, giá giữ giấy, ke giữ sách, cái chặn giấy, khay đựng lọ mực, hộp bút và các đồ dùng văn phòng tương tự.", contentEn: "This heading covers filing cabinets, card-index cabinets, sorting boxes, paper trays, paper rests, bookends, paper weights, ink-stand trays, pen cases and similar office equipment." },
      { code: "83.05", titleVi: "Các chi tiết ghép nối dùng cho cặp giữ tờ rời hoặc hồ sơ tài liệu rời, cái kẹp thư, để thư, kẹp giấy, kẹp phiếu mục lục và các vật phẩm văn phòng tương tự, bằng kim loại cơ bản; ghim dập dạng băng, bằng kim loại cơ bản", titleEn: "Fittings for loose-leaf binders or files, letter clips, letter corners, paper clips, indexing tags and similar office articles, of base metal; staples in strips, of base metal", contentVi: "Nhóm này bao gồm các chi tiết ghép nối bằng kim loại cơ bản cho cặp giữ tờ rời hoặc hộp giữ hồ sơ, các loại kẹp ghim, kẹp giấy, nẹp giấy, kẹp phiếu mục lục, và ghim dập dạng băng dùng trong máy dập ghim, văn phòng, đóng gói.", contentEn: "This heading covers fittings of base metal for loose-leaf binders or files, paper clips, letter clips, indexing tags, and staples in strips for staplers, office use, packaging." },
      { code: "83.06", titleVi: "Chuông, chuông đĩa và các loại tương tự, không dùng điện, bằng kim loại cơ bản; tượng nhỏ và các đồ trang trí khác, bằng kim loại cơ bản; khung ảnh, khung tranh hoặc các loại khung tương tự, bằng kim loại cơ bản; gương bằng kim loại cơ bản", titleEn: "Bells, gongs and the like, non-electric, of base metal; statuettes and other ornaments, of base metal; photograph, picture or similar frames, of base metal; mirrors of base metal", contentVi: "Nhóm này bao gồm chuông và chuông đĩa không dùng điện các loại, tượng nhỏ và đồ trang trí bằng kim loại cơ bản (như bức tượng, đồ trang trí tường, bình lọ trang trí, đồ dùng hành lễ), khung ảnh, khung tranh, và gương kim loại.", contentEn: "This heading covers non-electric bells and gongs, statuettes and ornaments of base metal (such as decorative figures, wall ornaments, decorative vases, articles for religious use), photograph and picture frames, and metallic mirrors." },
      { code: "83.07", titleVi: "Ống dễ uốn bằng kim loại cơ bản, có hoặc không có phụ kiện để ghép nối", titleEn: "Flexible tubing of base metal, with or without fittings", contentVi: "Nhóm này bao gồm ống dễ uốn bằng kim loại như ống làm từ dải hình được cuốn theo chiều xoắn, ống mềm dạng xếp nếp. Các loại ống này được sử dụng làm vỏ bọc cáp điện, đường dẫn khí, hơi nước, nước, xăng, dầu.", contentEn: "This heading covers flexible metal tubing such as tubing made from spirally wound strip, corrugated flexible tubing. These are used as cable sheathing, conduits for gas, steam, water, petrol, oil." },
      { code: "83.08", titleVi: "Móc cào, khóa móc cài, khóa thắt lưng, cài thắt lưng, khóa có chốt, mắt cài khóa, khoen và các loại tương tự, bằng kim loại cơ bản, dùng cho quần áo, giày dép, đồng hồ đeo tay, sách, bạt che, đồ da, hàng du lịch hoặc yên cương; đinh tán hình ống hoặc đinh tán có chân xòe, bằng kim loại cơ bản; hạt trang trí và trang kim, bằng kim loại cơ bản", titleEn: "Clasps, frames with clasps, buckles, buckle-clasps, hooks, eyes, eyelets and the like, of base metal, of a kind used for clothing, footwear, awnings, leather goods, travel goods or saddlery; tubular or bifurcated rivets, of base metal; beads and spangles, of base metal", contentVi: "Nhóm này bao gồm khóa có chốt, mắt cài khóa và khoen dùng cho quần áo, giày dép, vải bạt; đinh tán hình ống hoặc đinh tán có chân xòe; móc cài, khoá cài, quai có móc cài; khoá thắt lưng và móc cài khóa thắt lưng; hạt kim loại và đồ trang kim.", contentEn: "This heading covers hooks, eyes and eyelets for clothing, footwear, awnings; tubular or bifurcated rivets; clasps, frames with clasps; buckles and buckle-clasps; metal beads and spangles." },
      { code: "83.09", titleVi: "Nút chai lọ, nút bịt và nắp đậy (kể cả nắp hình vương miện, nút xoáy và nút một chiều), bao thiếc bịt nút chai, nút thùng có ren, tấm đậy lỗ thoát của thùng, dụng cụ niêm phong và bộ phận đóng gói khác, bằng kim loại cơ bản", titleEn: "Stoppers, caps and lids (including crown corks, screw caps and pouring stoppers), capsules for bottles, threaded bungs, bung covers, seals and other packing accessories, of base metal", contentVi: "Nhóm này bao gồm nút chai lọ, nút bịt và nắp đậy như nắp hình vương miện, nút bịt hình vương miện; bao thiếc bịt nút chai; nút ren ở các thùng kim loại; nút để rót, nút định lượng; băng niêm phong; nắp đậy có nắp được vạch sẵn và vòng kéo.", contentEn: "This heading covers stoppers, caps and lids such as crown corks, crown closures; bottle capsules; threaded bungs for metal drums; pouring or measured dose stoppers; sealing bands; ring-pull lids." },
      { code: "83.10", titleVi: "Biển chỉ dẫn, ghi tên, ghi địa chỉ và các loại biển báo tương tự, chữ số, chữ và các loại biểu tượng khác, bằng kim loại cơ bản, trừ các loại thuộc nhóm 94.05", titleEn: "Sign-plates, name-plates, address-plates and similar plates, numbers, letters and other symbols, of base metal, excluding those of heading 94.05", contentVi: "Nhóm này bao gồm các bảng bằng kim loại cơ bản có các từ, chữ cái, con số hay hình vẽ mang lại thông tin cần thiết của bản chỉ dẫn, biển tên, biển quảng cáo, biển địa chỉ, như biển tên địa phương, đường, biển số nhà, biển quảng cáo, bảng số xe.", contentEn: "This heading covers metal plates with words, letters, numbers or designs providing information for signposts, nameplates, advertising signs, address plates, such as street signs, house numbers, advertising plates, vehicle number plates." },
      { code: "83.11", titleVi: "Dây, que, ống, tấm, điện cực và các sản phẩm tương tự, bằng kim loại cơ bản hoặc carbua kim loại, được bọc, phủ hoặc có lõi bằng chất trợ dung, loại dùng để hàn xì, hàn hơi, hàn điện hoặc bằng cách ngưng tụ kim loại hoặc carbua kim loại; dây và que từ bột kim loại cơ bản, dùng để phun kim loại", titleEn: "Wire, rods, tubes, plates, electrodes and similar products, of base metal or of metal carbides, coated or cored with flux material, of a kind used for soldering, brazing, welding or deposition of metal or of metal carbides; wire and rods, of agglomerated base metal powder, used for metal spraying", contentVi: "Nhóm này bao gồm điện cực bằng kim loại cơ bản đã được phủ chất trợ dung để hàn hồ quang điện, dây hàn có lõi là chất trợ dung, que hàn được phủ bọc dùng để hàn chảy, hàn hơi, và dây que từ bột kim loại dùng để phun kim loại.", contentEn: "This heading covers base metal electrodes coated with flux for electric arc welding, flux cored wire for electric arc welding, coated rods for soldering, brazing or flame welding, and powder agglomerated wire and rods for metal spraying." }
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
  } else if (section === 7) {
    return {
      vi: "Phần này bao gồm plastic và các sản phẩm bằng plastic; cao su và các sản phẩm bằng cao su.",
      en: "This Section covers plastics and articles thereof; rubber and articles thereof."
    };
  } else if (section === 8) {
    return {
      vi: "Phần này bao gồm da sống, da thuộc, da lông và các sản phẩm từ da; yên cương và bộ đồ yên cương; hàng du lịch, túi xách tay và các loại đồ chứa tương tự; các mặt hàng từ ruột động vật (trừ ruột con tằm).",
      en: "This Section covers raw hides and skins, leather, furskins and articles thereof; saddlery and harness; travel goods, handbags and similar containers; articles of animal gut (other than silk-worm gut)."
    };
  } else if (section === 9) {
    return {
      vi: "Phần này bao gồm gỗ và các mặt hàng bằng gỗ; than từ gỗ; lie và các sản phẩm bằng lie; các sản phẩm từ rơm, cỏ giấy hoặc các vật liệu tết bện khác; các sản phẩm bằng liễu gai và song mây.",
      en: "This Section covers wood and articles of wood; wood charcoal; cork and articles of cork; manufactures of straw, of esparto or of other plaiting materials; basketware and wickerwork."
    };
  } else if (section === 10) {
    return {
      vi: "Phần này bao gồm bột giấy từ gỗ hoặc từ nguyên liệu xơ sợi xenlulo khác; giấy loại hoặc bìa loại thu hồi (phế liệu và vụn thừa); giấy và bìa và các sản phẩm của chúng.",
      en: "This Section covers pulp of wood or of other fibrous cellulosic material; recovered (waste and scrap) paper or paperboard; paper and paperboard and articles thereof."
    };
  } else if (section === 11) {
    return {
      vi: "Phần này bao gồm nguyên liệu dệt và các sản phẩm dệt, bao gồm tơ tằm, lông cừu, bông, các loại xơ dệt thực vật và nhân tạo khác, vải dệt, hàng may mặc và các sản phẩm dệt khác.",
      en: "This Section covers textiles and textile articles, including silk, wool, cotton, other vegetable and man-made textile fibres, woven fabrics, apparel and other textile products."
    };
  }
  return { vi: "", en: "" };
};
