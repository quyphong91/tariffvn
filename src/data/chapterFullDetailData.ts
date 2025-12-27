// ============================================================
// CHAPTER FULL DETAIL DATA - Bilingual Side-by-Side Notes
// ============================================================

/**
 * Represents a single row of bilingual content
 */
export interface NoteRow {
  type: 'heading' | 'paragraph' | 'list';
  vi: string;
  en: string;
}

/**
 * Represents the complete detail for a chapter
 */
export interface ChapterFullDetail {
  chapterNumber: number;
  titleVi: string;
  titleEn: string;
  content: NoteRow[];
}

// ============================================================
// CHAPTER DATA
// ============================================================

export const chapterFullDetailData: ChapterFullDetail[] = [
  // ------------------------------------------------------------
  // CHAPTER 1
  // ------------------------------------------------------------
{
    chapterNumber: 1,
    titleVi: 'CHƯƠNG 1: ĐỘNG VẬT SỐNG',
    titleEn: 'CHAPTER 1: LIVE ANIMALS',
    content: [
      { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I: LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải Phần', en: 'Section Notes' },
      { 
        type: 'paragraph', 
        vi: '1. Trong phần này, khi đề cập đến một giống hoặc một loài động vật, trừ khi có yêu cầu khác, cần phải kể đến cả giống hoặc loài động vật đó còn non.', 
        en: '1. Any reference in this Section to a particular genus or species of an animal, except where the context otherwise requires, includes a reference to the young of that genus or species.' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Trừ khi có yêu cầu khác, trong toàn bộ Danh mục này bất cứ đề cập nào liên quan đến các sản phẩm "được làm khô" cũng bao gồm các sản phẩm được khử nước, làm bay hơi hoặc làm khô bằng đông lạnh.', 
        en: '2. Except where the context otherwise requires, throughout the Nomenclature any reference to “dried” products also covers products which have been dehydrated, evaporated or freeze-dried.' 
      },
      { type: 'heading', vi: 'Chương 1: Động vật sống', en: 'Chapter 1: Live animals' },
      { type: 'heading', vi: 'Chú giải Chương', en: 'Chapter Notes' },
      { type: 'paragraph', vi: '1. Chương này bao gồm tất cả các loại động vật sống trừ:', en: '1. This Chapter covers all live animals except :' },
      { type: 'list', vi: '(a) Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác, thuộc nhóm 03.01, 03.06, 03.07 hoặc 03.08;', en: '(а) Fish and crustaceans, molluscs and other aquatic invertebrates, of heading 03.01, 03.06, 03.07 or 03.08;' },
      { type: 'list', vi: '(b) Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; và', en: '(b) Cultures of micro-organisms and other products of heading 30.02; and' },
      { type: 'list', vi: '(c) Động vật thuộc nhóm 95.08.', en: '(c) Animals of heading 95.08.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm tất cả các loại sinh vật sống (dùng làm thực phẩm hoặc có các mục đích khác) trừ:', en: 'This Chapter covers all living creatures (for food or other purposes) except :' },
      { type: 'list', vi: '(1) Cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác.', en: '(1) Fish and crustaceans, molluscs and other aquatic invertebrates.' },
      { type: 'list', vi: '(2) Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02 .', en: '(2) Cultures of micro-organisms and other products of heading 30.02.' },
      { type: 'list', vi: '(3) Bầy thú thuộc rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác ( nhóm 95.08 ).', en: '(3) Animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08).' },
      { type: 'paragraph', vi: 'Động vật, kể cả côn trùng, chết trên đường vận chuyển được phân loại vào các nhóm từ 02.01 đến 02.05, 02.07, 02.08 hoặc 04.10 nếu chúng là những động vật ăn được thích hợp dùng làm thức ăn cho người. Trong những trường hợp khác, chúng được phân loại vào nhóm 05.11 .', en: 'Animals, including insects, which die during transport are classified in headings 02.01 to 02.05, 02.07, 02.08 or 04.10 if they are edible animals fit for human consumption. In other cases, they are classified in heading 05.11 .' },

      { type: 'heading', vi: '01.01 - Ngựa, lừa, la sống (+).', en: '01.01 - Live horses, asses, mules and hinnies (+).' },
      { type: 'paragraph', vi: '- Ngựa:', en: '- Horses:' },
      { type: 'list', vi: '0101.21 - - Loại thuần chủng để nhân giống', en: '0101.21 - - Pure-bred breeding animals' },
      { type: 'list', vi: '0101.29 - - Loại khác', en: '0101.29 - - Other' },
      { type: 'list', vi: '0101.30 - Lừa', en: '0101.30 - Asses' },
      { type: 'list', vi: '0101.90 - Loại khác', en: '0101.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm các loại ngựa (ngựa cái, ngựa đực, ngựa thiến, ngựa con và ngựa nhỏ (pony)), lừa, la, nuôi hoặc hoang. Con la (mule) là con lai giữa lừa đực và ngựa cái. Con la (hinny) là con lai giữa ngựa đực và lừa cái.', en: 'This heading covers horses (mares, stallions, geldings, foals and ponies), asses, mules and hinnies, whether domestic or wild. Mules are the hybrid offspring of the ass and the mare. The hinny is bred from the stallion and the ass.' },
      { type: 'heading', vi: 'Chú giải phân nhóm 0101.21', en: 'Subheading Explanatory Note 0101.21' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 0101.21, thuật ngữ "loại thuần chủng để nhân giống” chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là “thuần chủng”.', en: 'For the purposes of subheading 0101.21, the expression “pure-bred breeding animals” covers only those breeding animals which are regarded as “pure-bred” by the competent national authorities.' },

      { type: 'heading', vi: '01.02 - Động vật sống họ trâu bò (+).', en: '01.02 - Live bovine animals (+).' },
      { type: 'paragraph', vi: '- Gia súc:', en: '- Cattle :' },
      { type: 'list', vi: '0102.21 - - Loại thuần chủng để nhân giống', en: '0102.21 - - Pure-bred breeding animals' },
      { type: 'list', vi: '0102.29 - - Loại khác', en: '0102.29 - - Other' },
      { type: 'paragraph', vi: '- Trâu:', en: '- Buffalo :' },
      { type: 'list', vi: '0102.31 - - Loại thuần chủng để nhân giống', en: '0102.31 - - Pure-bred breeding animals' },
      { type: 'list', vi: '0102.39 - - Loại khác', en: '0102.39 - - Other' },
      { type: 'list', vi: '0102.90 - Loại khác', en: '0102.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại trâu bò thuộc phân họ Bovinae, nuôi hoặc hoang và dù mục đích sử dụng thế nào (ví dụ: dự trữ, chăn nuôi, vỗ béo, nhân giống, làm thịt).', en: 'This heading covers all animals of the sub-family Bovinae, whether or not domestic and irrespective of their intended use (e.g., stock, raising, fattening, breeding, slaughter).' },
      { type: 'paragraph', vi: '(1) Gia súc thuộc giống Bos, chia làm 4 phân giống: Bos, Bibos, Novibos và Poephagus. Chúng bao gồm:', en: '(1) Cattle: Bovine animals of the genus Bos, divided into four sub-genera: Bos, Bibos, Novibos and Poephagus. They include:' },
      { type: 'list', vi: '(A) Bò thông thường (Bos taurus), bò Zebu hoặc bò có bướu (Bos indicus) và bò Watussi.', en: '(A) The common ox (Bos taurus), the Zebu or humped ox (Bos indicus) and the Watussi ox.' },
      { type: 'list', vi: '(B) Các loại bò Châu Á như bò tót rừng (gaur), bò tót nhà (gayal) và bò banteng.', en: '(B) The Asiatic oxen such as the gaur, the gayal and the banteng.' },
      { type: 'list', vi: '(C) Các động vật thuộc phân giống Poephagus, như bò Tây Tạng (Bos grunniens).', en: '(C) Animals of the sub-genus Poephagus, such as the Tibetan yak (Bos grunniens).' },
      { type: 'paragraph', vi: '(2) Trâu thuộc các giống Bubalus, Syncerus và Bison. Chúng bao gồm:', en: '(2) Buffalo: Animals of the genera Bubalus, Syncerus and Bison. They include:' },
      { type: 'list', vi: '(A) Trâu Ấn Độ hoặc trâu nước (Bubalus bubalis), trâu hoang Arni (Bubalus arnee) và trâu Anoa ở vùng Celebes (hoặc Sulawesi).', en: '(A) Indian or water buffalo (Bubalus bubalis), Asiatic buffalo or arni (Bubalus arnee) and Celebese (or Sulawesi) anoa.' },
      { type: 'list', vi: '(B) Trâu Châu Phi thuộc giống Syncerus, như trâu rừng lùn (Syncerus nanus) và trâu rừng lớn Caffrarian (Syncerus caffer).', en: '(B) African buffaloes of the genus Syncerus, such as the dwarf buffalo (Syncerus nanus) and the large Caffrarian buffalo (Syncerus caffer).' },
      { type: 'list', vi: '(C) Bò rừng bizon Châu Mỹ (Bison bison) hoặc “trâu” và bò rừng bizon Châu Âu (Bison bonasus).', en: '(C) American bison (Bison bison) or “buffalo” and the European bison (Bison bonasus).' },
      { type: 'list', vi: '(D) "Beeffalo" (con lai giữa bò rừng bizon và bò nuôi).', en: '(D) The Beeffalo (a cross between a bison and a domestic beef animal).' },

      { type: 'heading', vi: '01.03 - Lợn sống (+).', en: '01.03 - Live swine (+).' },
      { type: 'list', vi: '0103.10 - Loại thuần chủng để nhân giống', en: '0103.10 - Pure-bred breeding animals' },
      { type: 'list', vi: '0103.91 - - Trọng lượng dưới 50 kg', en: '0103.91 - - Weighing less than 50 kg' },
      { type: 'list', vi: '0103.92 - - Trọng lượng từ 50 kg trở lên', en: '0103.92 - - Weighing 50 kg or more' },
      { type: 'paragraph', vi: 'Nhóm này gồm lợn nuôi và hoang (như lợn lòi).', en: 'This heading covers both domestic pigs and wild pigs (e.g., wild boars).' },
      { type: 'heading', vi: 'Chú giải phân nhóm 0103.10', en: 'Subheading Explanatory Note 0103.10' },
      { type: 'paragraph', vi: 'Xem Chú giải phân nhóm 0101.21.', en: 'See the Explanatory Note to subheading 0101.21.' },
      { type: 'heading', vi: 'Chú giải phân nhóm 0103.91 và 0103.92', en: 'Subheading Explanatory Notes 0103.91 and 0103.92' },
      { type: 'paragraph', vi: 'Theo mục đích của các phân nhóm này, các giới hạn trọng lượng được quy định áp dụng cho mỗi con động vật.', en: 'For the purposes of these subheadings, the weight limits specified apply to each animal.' },

      { type: 'heading', vi: '01.04 - Cừu, dê sống.', en: '01.04 - Live sheep and goats.' },
      { type: 'list', vi: '0104.10 - Cừu', en: '0104.10 - Sheep' },
      { type: 'list', vi: '0104.20 - Dê', en: '0104.20 - Goats' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm cừu nuôi (đực, cái và cừu non) cũng như cừu hoang (ví dụ: cừu Argali (Ovis ammon), moufflon (Ovis musimon, Ovis orientalis...) ). Dê nuôi và dê hoang (ví dụ: sơn dương núi (Ibex), dê đá (Bezoar goat) ).', en: 'This heading covers domestic sheep (rams, ewes and lambs) as well as wild sheep (e.g., Argali (Ovis ammon), moufflon (Ovis musimon, Ovis orientalis...) ). Domestic and wild goats (e.g., Ibex, Bezoar goat).' },

      { type: 'heading', vi: '01.05 - Gia cầm sống, nghĩa là các loại gà thuộc loài Gallus domesticus, vịt, ngan, ngỗng, gà tây và gà lôi guinea.', en: '01.05 - Live poultry, that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls.' },
      { type: 'paragraph', vi: '- Trọng lượng không quá 185 g:', en: '- Weighing not more than 185 g:' },
      { type: 'list', vi: '0105.11 - - Gà thuộc loài Gallus domesticus', en: '0105.11 - - Fowls of the species Gallus domesticus' },
      { type: 'list', vi: '0105.12 - - Gà tây', en: '0105.12 - - Turkeys' },
      { type: 'list', vi: '0105.13 - - Vịt', en: '0105.13 - - Ducks' },
      { type: 'list', vi: '0105.14 - - Ngỗng', en: '0105.14 - - Geese' },
      { type: 'list', vi: '0105.15 - - Gà lôi guinea', en: '0105.15 - - Guinea fowls' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0105.94 - - Gà thuộc loài Gallus domesticus', en: '0105.94 - - Fowls of the species Gallus domesticus' },
      { type: 'list', vi: '0105.99 - - Loại khác', en: '0105.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này chỉ bao gồm các loại chim nuôi sống được chỉ rõ. Những loại chim sống khác (ví dụ: gà gô, gà lôi, bồ câu, vịt trời, ngỗng trời) bị loại trừ (nhóm 01.06).', en: 'This heading covers only live domestic birds of the kinds specified. Other live birds (e.g., partridges, pheasants, pigeons, wild ducks, wild geese) are excluded (heading 01.06).' },

      { type: 'heading', vi: '01.06 - Động vật sống khác.', en: '01.06 - Other live animals.' },
      { type: 'paragraph', vi: '- Động vật có vú:', en: '- Mammals:' },
      { type: 'list', vi: '0106.11 - - Bộ động vật linh trưởng', en: '0106.11 - - Primates' },
      { type: 'list', vi: '0106.12 - - Cá voi, cá heo và cá heo chuột (động vật có vú thuộc bộ Cetacea); lợn biển và bò biển (động vật có vú thuộc bộ Sirenia); hải cẩu, sư tử biển và hải mã (động vật có vú thuộc phân bộ Pinnipedia)', en: '0106.12 - - Whales, dolphins and porpoises (mammals of the order Cetacea); manatees and dugongs (mammals of the order Sirenia); seals, sea lions and walruses (mammals of the suborder Pinnipedia)' },
      { type: 'list', vi: '0106.13 - - Lạc đà và các động vật khác họ lạc đà (Camelidae)', en: '0106.13 - - Camels and other camelids (Camelidae)' },
      { type: 'list', vi: '0106.14 - - Thỏ và thỏ rừng', en: '0106.14 - - Rabbits and hares' },
      { type: 'list', vi: '0106.19 - - Loại khác', en: '0106.19 - - Other' },
      { type: 'list', vi: '0106.20 - Loài bò sát (kể cả rắn và rùa)', en: '0106.20 - Reptiles (including snakes and turtles)' },
      { type: 'paragraph', vi: '- Chim:', en: '- Birds:' },
      { type: 'list', vi: '0106.31 - - Chim săn mồi', en: '0106.31 - - Birds of prey' },
      { type: 'list', vi: '0106.32 - - Bộ Vẹt (Psittaciformes) (kể cả vẹt lớn châu Mỹ (parrots), vẹt nhỏ đuôi dài (parakeets), vẹt đuôi dài và vẹt có mào)', en: '0106.32 - - Psittaciformes (including parrots, parakeets, macaws and cockatoos)' },
      { type: 'list', vi: '0106.33 - - Chim đà điểu; chim đà điểu Nam Mỹ (Rhea americana)', en: '0106.33 - - Ostriches; emus (Dromaius novaehollandiae)' },
      { type: 'list', vi: '0106.39 - - Loại khác', en: '0106.39 - - Other' },
      { type: 'paragraph', vi: '- Côn trùng:', en: '- Insects:' },
      { type: 'list', vi: '0106.41 - - Các loại ong', en: '0106.41 - - Bees' },
      { type: 'list', vi: '0106.49 - - Loại khác', en: '0106.49 - - Other' },
      { type: 'list', vi: '0106.90 - Loại khác', en: '0106.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm, giữa các loại khác:', en: 'This heading includes, inter alia:' },
      { type: 'list', vi: '(A) Động vật có vú: (1) Linh trưởng. (2) Cá voi, cá heo... (3) Lạc đà và các loài họ Lạc đà. (4) Thỏ và thỏ rừng. (5) Loại khác (ví dụ: hươu nai, linh dương, lạc đà không bướu, thú túi, voi, chó, mèo, thú nuôi làm nông nghiệp như cáo, chồn mink...).', en: '(A) Mammals: (1) Primates. (2) Whales, dolphins... (3) Camels and other camelids. (4) Rabbits and hares. (5) Other (e.g., deer, antelopes, llamas, kangaroos, elephants, dogs, cats, animals for fur farms like foxes, minks...).' },
      { type: 'list', vi: '(B) Loài bò sát (kể cả rắn và rùa).', en: '(B) Reptiles (including snakes and turtles).' },
      { type: 'list', vi: '(C) Chim: (1) Chim săn mồi. (2) Vẹt... (3) Loại khác (ví dụ: gà gô, gà lôi, bồ câu, vịt trời, ngỗng trời, chim sẻ rừng, thiên nga và các loại chim khác không thuộc nhóm 01.05).', en: '(C) Birds: (1) Birds of prey. (2) Psittaciformes... (3) Other (e.g., partridges, pheasants, pigeons, wild ducks, wild geese, finches, swans and other birds not in 01.05).' },
      { type: 'list', vi: '(D) Côn trùng, ví dụ các loại ong (có hay không ở trong lồng hoặc tổ ong lưu động).', en: '(D) Insects, for example, bees (whether or not in hives or boxes).' },
      { type: 'list', vi: '(E) Các loại động vật sống khác (ví dụ: ếch).', en: '(E) Other live animals (e.g., frogs).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm bầy thú rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác (nhóm 95.08).', en: 'This heading excludes animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTER 2
  // ------------------------------------------------------------
  {
    chapterNumber: 2,
    titleVi: 'CHƯƠNG 2: THỊT VÀ PHỤ PHẨM DẠNG THỊT ĂN ĐƯỢC SAU GIẾT MỔ',
    titleEn: 'CHAPTER 2: MEAT AND EDIBLE MEAT OFFAL',
    content: [
      { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I: LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải Phần', en: 'Section Notes' },
      { 
        type: 'paragraph', 
        vi: '1. Trong phần này, khi đề cập đến một giống hoặc một loài động vật, trừ khi có yêu cầu khác, cần phải kể đến cả giống hoặc loài động vật đó còn non.', 
        en: '1. Any reference in this Section to a particular genus or species of an animal, except where the context otherwise requires, includes a reference to the young of that genus or species.' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Trừ khi có yêu cầu khác, trong toàn bộ Danh mục này bất cứ đề cập nào liên quan đến các sản phẩm "được làm khô" cũng bao gồm các sản phẩm được khử nước, làm bay hơi hoặc làm khô bằng đông lạnh.', 
        en: '2. Except where the context otherwise requires, throughout the Nomenclature any reference to “dried” products also covers products which have been dehydrated, evaporated or freeze-dried.' 
      },
      { type: 'heading', vi: 'Chương 2: Thịt và phụ phẩm dạng thịt ăn được sau giết mổ', en: 'Chapter 2: Meat and edible meat offal' },
      { type: 'heading', vi: 'Chú giải Chương', en: 'Chapter Notes' },
      { type: 'paragraph', vi: '1- Chương này không bao gồm:', en: '1 - This Chapter does not cover :' },
      { type: 'list', vi: '(a) Những sản phẩm thuộc loại đã được mô tả trong các nhóm 02.01 đến 02.08 hoặc 02.10, nhưng không thích hợp làm thức ăn cho người;', en: '(a) Products of the kinds described in headings 02.01 to 02.08 or 02.10, unfit or unsuitable for human consumption:' },
      { type: 'list', vi: '(b) Côn trùng không còn sống, ăn được (nhóm 04.10);', en: '(b) Edible non-living insects (heading 04.10);' },
      { type: 'list', vi: '(c) Ruột, bong bóng hoặc dạ dày của động vật (nhóm 05.04) hoặc tiết động vật (nhóm 05.11 hoặc 30.02); hoặc', en: '(c) Guts, bladders or stomachs of animals (heading 05.04) or animal blood (heading 05.11 or 30.02); or' },
      { type: 'list', vi: '(d) Mỡ động vật, trừ các sản phẩm của nhóm 02.09 (Chương 15).', en: '(d) Animal fat, other than products of heading 02.09 (Chapter 15).' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm thịt và phụ phẩm dạng thịt ở các dạng sau đây, cho dù chúng thích hợp dùng làm thức ăn cho người hay không thích hợp dùng làm thức ăn cho người (xem Chú giải 1(a) của Chương này):', en: 'This Chapter covers meat and meat offal in the following states only, whether or not they are fit or suitable for human consumption (see Note 1 (a) to this Chapter):' },
      { type: 'list', vi: '(1) Tươi hoặc ướp lạnh.', en: '(1) Fresh or chilled.' },
      { type: 'list', vi: '(2) Đông lạnh.', en: '(2) Frozen.' },
      { type: 'list', vi: '(3) Ướp muối hoặc ngâm nước muối, làm khô hoặc hun khói.', en: '(3) Salted or in brine, dried or smoked.' },
      { type: 'paragraph', vi: 'Thịt và phụ phẩm dạng thịt hơi được rắc đường hoặc dội nước đường trong quá trình bảo quản vẫn được phân loại trong Chương này.', en: 'Meat and meat offal slightly sprinkled with sugar or doused with sugar water in the course of preparation are classified in this Chapter.' },
      { type: 'paragraph', vi: 'Thịt và phụ phẩm dạng thịt của Chương này vẫn được phân loại vào đây cho dù đã được chặt nhỏ, xay nhỏ nhưng chưa được chế biến (ví dụ: ở dạng "hamburger").', en: 'Meat and meat offal of this Chapter remain so classified even if they have been chopped or minced but not further prepared (e.g., in the form of “hamburgers”).' },

      { type: 'heading', vi: '02.01 - Thịt động vật họ trâu bò, tươi hoặc ướp lạnh.', en: '02.01 - Meat of bovine animals, fresh or chilled.' },
      { type: 'list', vi: '0201.10 - Cả con hoặc nửa con', en: '0201.10 - Carcasses and half-carcasses' },
      { type: 'list', vi: '0201.20 - Các mảnh khác còn xương', en: '0201.20 - Other cuts with bone in' },
      { type: 'list', vi: '0201.30 - Loại lọc xương', en: '0201.30 - Boneless' },

      { type: 'heading', vi: '02.02 - Thịt động vật họ trâu bò, đông lạnh.', en: '02.02 - Meat of bovine animals, frozen.' },
      { type: 'list', vi: '0202.10 - Cả con hoặc nửa con', en: '0202.10 - Carcasses and half-carcasses' },
      { type: 'list', vi: '0202.20 - Các mảnh khác còn xương', en: '0202.20 - Other cuts with bone in' },
      { type: 'list', vi: '0202.30 - Loại lọc xương', en: '0202.30 - Boneless' },

      { type: 'heading', vi: '02.03 - Thịt lợn, tươi, ướp lạnh hoặc đông lạnh.', en: '02.03 - Meat of swine, fresh, chilled or frozen.' },
      { type: 'paragraph', vi: '- Tươi hoặc ướp lạnh:', en: '- Fresh or chilled:' },
      { type: 'list', vi: '0203.11 - - Cả con hoặc nửa con', en: '0203.11 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0203.12 - - Thịt mông đùi, thịt vai và các mảnh của chúng, còn xương', en: '0203.12 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0203.19 - - Loại khác', en: '0203.19 - - Other' },
      { type: 'paragraph', vi: '- Đông lạnh:', en: '- Frozen:' },
      { type: 'list', vi: '0203.21 - - Cả con hoặc nửa con', en: '0203.21 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0203.22 - - Thịt mông đùi, thịt vai và các mảnh của chúng, còn xương', en: '0203.22 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0203.29 - - Loại khác', en: '0203.29 - - Other' },

      { type: 'heading', vi: '02.04 - Thịt cừu hoặc thịt dê, tươi, ướp lạnh hoặc đông lạnh.', en: '02.04 - Meat of sheep or goats, fresh, chilled or frozen.' },
      { type: 'list', vi: '0204.10 - Thịt cả con hoặc nửa con cừu non, tươi hoặc ướp lạnh', en: '0204.10 - Carcasses and half-carcasses of lamb, fresh or chilled' },
      { type: 'paragraph', vi: '- Thịt cừu khác, tươi hoặc ướp lạnh:', en: '- Other meat of sheep, fresh or chilled:' },
      { type: 'list', vi: '0204.21 - - Cả con hoặc nửa con', en: '0204.21 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0204.30 - Thịt cả con hoặc nửa con cừu non, đông lạnh', en: '0204.30 - Carcasses and half-carcasses of lamb, frozen' },

      { type: 'heading', vi: '02.05 - Thịt ngựa, lừa, la, tươi, ướp lạnh hoặc đông lạnh.', en: '02.05 - Meat of horses, asses, mules or hinnies, fresh, chilled or frozen.' },

      { type: 'heading', vi: '02.06 - Phụ phẩm ăn được sau giết mổ của động vật họ trâu bò, lợn, cừu, dê, ngựa, lừa, la, tươi, ướp lạnh hoặc đông lạnh.', en: '02.06 - Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen.' },
      { type: 'paragraph', vi: 'Phụ phẩm ăn được sau giết mổ bao gồm: đầu và các mảnh của đầu (kể cả tai), chân, đuôi, tim, lưỡi, màng treo ruột, màng ngăn, lá lách, cổ, tuyến ức...', en: 'The edible offal of this heading includes: heads and cuts thereof (including ears), feet, tails, hearts, tongues, thick skirts, thin skirts, omentum, throatbreads, thymus glands...' },

      { type: 'heading', vi: '02.07 - Thịt và phụ phẩm ăn được sau giết mổ, của gia cầm thuộc nhóm 01.05, tươi, ướp lạnh hoặc đông lạnh.', en: '02.07 - Meat and edible offal, of the poultry of heading 01.05, fresh, chilled or frozen.' },
      { type: 'paragraph', vi: '- Của gà thuộc loài Gallus domesticus:', en: '- Of fowls of the species Gallus domesticus:' },
      { type: 'list', vi: '0207.11 - - Chưa chặt mảnh, tươi hoặc ướp lạnh', en: '0207.11 - - Not cut in pieces, fresh or chilled' },
      { type: 'list', vi: '0207.12 - - Chưa chặt mảnh, đông lạnh', en: '0207.12 - - Not cut in pieces, frozen' },
      { type: 'list', vi: '0207.13 - - Đã chặt mảnh và phụ phẩm sau giết mổ, tươi hoặc ướp lạnh', en: '0207.13 - - Cuts and offal, fresh or chilled' },
      { type: 'list', vi: '0207.14 - - Đã chặt mảnh và phụ phẩm sau giết mổ, đông lạnh', en: '0207.14 - - Cuts and offal, frozen' },

      { type: 'heading', vi: '02.08 - Thịt và phụ phẩm dạng thịt ăn được sau giết mổ khác, tươi, ướp lạnh hoặc đông lạnh.', en: '02.08 - Other meat and edible meat offal, fresh, chilled or frozen.' },
      { type: 'list', vi: '0208.10 - Của thỏ hoặc thỏ rừng', en: '0208.10 - Of rabbits or hares' },
      { type: 'list', vi: '0208.30 - Của động vật linh trưởng', en: '0208.30 - Of primates' },
      { type: 'list', vi: '0208.40 - Của cá voi, cá heo... (bộ Cetacea); lợn biển... (bộ Sirenia); hải cẩu... (phân bộ Pinnipedia)', en: '0208.40 - Of whales, dolphins... (order Cetacea); of manatees... (order Sirenia); of seals... (suborder Pinnipedia)' },

      { type: 'heading', vi: '02.09 - Mỡ lợn không lẫn thịt nạc và mỡ gia cầm, chưa chiết xuất hoặc cách khác đã chế biến, tươi, ướp lạnh, đông lạnh, ướp muối, ngâm nước muối, làm khô hoặc hun khói.', en: '02.09 - Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, fresh, chilled, frozen, salted, in brine, dried or smoked.' },

      { type: 'heading', vi: '02.10 - Thịt và phụ phẩm dạng thịt ăn được sau giết mổ, ướp muối, ngâm nước muối, làm khô hoặc hun khói; bột mịn và bột thô ăn được từ thịt hoặc phụ phẩm dạng thịt sau giết mổ.', en: '02.10 - Meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal.' },
      { type: 'paragraph', vi: '- Thịt lợn:', en: '- Meat of swine:' },
      { type: 'list', vi: '0210.11 - - Thịt mông đùi, thịt vai và các mảnh của chúng, còn xương', en: '0210.11 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0210.12 - - Thịt bụng (thịt ba chỉ) và các mảnh của nó', en: '0210.12 - - Bellies (streaky) and cuts thereof' },
      { type: 'list', vi: '0210.19 - - Loại khác', en: '0210.19 - - Other' },
      { type: 'list', vi: '0210.20 - Thịt động vật họ trâu bò', en: '0210.20 - Meat of bovine animals' },
      { type: 'paragraph', vi: 'Nhóm này áp dụng đối với tất cả các loại thịt và phụ phẩm dạng thịt ăn được sau giết mổ đã được chế biến như được mô tả trong tiêu đề nhóm, trừ mỡ lợn không lẫn thịt nạc và mỡ gia cầm (nhóm 02.09).', en: 'This heading applies to all kinds of meat and edible meat offal which have been prepared as described in the heading, other than pig fat free of lean meat and poultry fat (heading 02.09).' },
      { 
        type: 'paragraph', 
        vi: 'Thịt muối, khô (kể cả bằng cách làm mất nước hoặc làm khô bằng đông lạnh) hoặc hun khói (như thịt lợn muối xông khói, thịt mông đùi (hams) xông khói, thịt vai xông khói) vẫn được phân loại trong nhóm này khi chúng được nhồi trong ruột, dạ dày, bong bóng, da hoặc vỏ bọc tương tự (tự nhiên hoặc nhân tạo), với điều kiện chúng chưa được chặt nhỏ hoặc băm nhỏ và kết hợp với thành phần khác trước khi được đặt trong vỏ bọc (nhóm 16.01).', 
        en: 'Salted, dried (including dehydrated or freeze-dried) or smoked meat (e.g., bacon, ham, shoulder) remains classified in this heading if it has been enclosed in guts, stomachs, bladders, skins or similar casings (natural or artificial), provided that it has not been previously chopped or minced and combined with other ingredients (heading 16.01).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Bột mịn và bột thô từ thịt hoặc phụ phẩm dạng thịt ăn được sau giết mổ cũng được phân loại trong nhóm này; bột mịn và bột thô từ thịt và phụ phẩm dạng thịt sau giết mổ không thích hợp dùng làm thức ăn cho người (ví dụ làm thức ăn gia súc) bị loại trừ (nhóm 23.01).', 
        en: 'Edible flours and meals of meat or meat offal also fall in this heading: flours and meals of meat or meat offal unfit for human consumption (e.g., for feeding animals) are excluded (heading 23.01).' 
      }
    ]
  },

   // ------------------------------------------------------------
  // CHAPTER 3
  // ------------------------------------------------------------
  {
    chapterNumber: 3,
    titleVi: 'CHƯƠNG 3: CÁ VÀ ĐỘNG VẬT GIÁP XÁC, ĐỘNG VẬT THÂN MỀM VÀ ĐỘNG VẬT THUỶ SINH KHÔNG XƯƠNG SỐNG KHÁC',
    titleEn: 'CHAPTER 3: FISH AND CRUSTACEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES',
    content: [
       { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I: LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải Phần', en: 'Section Notes' },
      { 
        type: 'paragraph', 
        vi: '1. Trong phần này, khi đề cập đến một giống hoặc một loài động vật, trừ khi có yêu cầu khác, cần phải kể đến cả giống hoặc loài động vật đó còn non.', 
        en: '1. Any reference in this Section to a particular genus or species of an animal, except where the context otherwise requires, includes a reference to the young of that genus or species.' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Trừ khi có yêu cầu khác, trong toàn bộ Danh mục này bất cứ đề cập nào liên quan đến các sản phẩm "được làm khô" cũng bao gồm các sản phẩm được khử nước, làm bay hơi hoặc làm khô bằng đông lạnh.', 
        en: '2. Except where the context otherwise requires, throughout the Nomenclature any reference to “dried” products also covers products which have been dehydrated, evaporated or freeze-dried.' 
      },
      {
        type: "heading",
        vi: "CHƯƠNG 3",
        en: "CHAPTER 3"
      },
      {
        type: "heading",
        vi: "Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác",
        en: "Fish and crustaceans, molluscs and other aquatic invertebrates"
      },
      {
        type: "heading",
        vi: "Chú giải",
        en: "Notes"
      },
      {
        type: "list",
        vi: "1. Chương này không bao gồm:",
        en: "1. This Chapter does not cover:"
      },
      {
        type: "list",
        vi: "(a) Động vật có vú thuộc nhóm 01.06;",
        en: "(a) Mammals of heading 01.06;"
      },
      {
        type: "list",
        vi: "(b) Thịt của động vật có vú thuộc nhóm 01.06 (nhóm 02.08 hoặc 02.10);",
        en: "(b) Meat of mammals of heading 01.06 (heading 02.08 or 02.10);"
      },
      {
        type: "list",
        vi: "(c) Cá (kể cả gan, sẹ và bọc trứng cá) hoặc động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác, đã chết và không thích hợp dùng làm thức ăn cho người; bột mịn, bột thô hoặc viên không thích hợp dùng làm thức ăn cho người (Chương 5 hoặc nhóm 23.01);",
        en: "(c) Fish (including livers, roes and milt), crustaceans, molluscs or other aquatic invertebrates, dead and unfit for human consumption; flours, meals or pellets unfit for human consumption (Chapter 5 or heading 23.01);"
      },
      {
        type: "list",
        vi: "(d) Trứng cá tầm muối và các sản phẩm thay thế (nhóm 16.04).",
        en: "(d) Caviar or caviar substitutes (heading 16.04)."
      },
      {
        type: "list",
        vi: "2. Trong Chương này, thuật ngữ “viên” (pellets) là sản phẩm được kết khối bằng nén hoặc bằng chất kết dính.",
        en: "2. In this Chapter, the term “pellets” means products agglomerated by compression or by a binder."
      },
      {
        type: "list",
        vi: "3. Các nhóm từ 03.05 đến 03.08 không bao gồm bột mịn, bột thô và viên thích hợp dùng làm thức ăn cho người (nhóm 03.09).",
        en: "3. Headings 03.05 to 03.08 do not cover flours, meals and pellets fit for human consumption (heading 03.09)."
      },
      {
        type: "heading",
        vi: "TỔNG QUÁT",
        en: "GENERAL"
      },
      {
        type: "paragraph",
        vi: "Chương này bao gồm tất cả các loại cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, sống hoặc chết, dùng làm thức ăn trực tiếp hoặc cho mục đích công nghiệp, trừ các loại không phù hợp dùng làm thực phẩm.",
        en: "This Chapter covers all fish and crustaceans, molluscs and other aquatic invertebrates, whether live or dead, for direct consumption or industrial purposes, excluding those unfit for human consumption."
      },
      {
        type: "paragraph",
        vi: "Thuật ngữ “ướp lạnh” là nhiệt độ của sản phẩm được hạ xuống khoảng 0°C nhưng không làm đông lạnh; “đông lạnh” là làm lạnh dưới điểm đông cho đến khi đông hoàn toàn.",
        en: "The term “chilled” means cooled to around 0°C without freezing; “frozen” means cooled below freezing point until fully frozen."
      },
      {
        type: "paragraph",
        vi: "Chương này cũng bao gồm sẹ và bọc trứng cá ăn được, chưa chế biến hoặc chỉ chế biến theo các phương pháp quy định trong Chương này.",
        en: "This Chapter also covers edible fish roes and milt, not prepared or prepared only by processes provided for in this Chapter."
      },

      {
        type: "heading",
        vi: "03.01 – Cá sống",
        en: "03.01 – Live fish"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm tất cả các loại cá sống, bất kể mục đích sử dụng (làm giống, nuôi cảnh hoặc tiêu dùng).",
        en: "This heading covers all live fish, whether for breeding, ornamental purposes or for consumption."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Cá nuôi làm giống;",
        en: "– Fish for breeding;"
      },
      {
        type: "list",
        vi: "– Cá cảnh;",
        en: "– Ornamental fish;"
      },
      {
        type: "list",
        vi: "– Cá sống để tiêu thụ.",
        en: "– Live fish for consumption."
      },
      {
        type: "paragraph",
        vi: "Nhóm này không bao gồm động vật có vú biển (nhóm 01.06).",
        en: "This heading does not include marine mammals (heading 01.06)."
      },

      {
        type: "heading",
        vi: "03.02 – Cá tươi hoặc ướp lạnh, trừ phi lê cá và thịt cá khác thuộc nhóm 03.04",
        en: "03.02 – Fish, fresh or chilled, excluding fish fillets and other fish meat of heading 03.04"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm cá tươi hoặc ướp lạnh, nguyên con hoặc đã cắt khúc, nhưng chưa phi lê.",
        en: "This heading covers fresh or chilled fish, whole or cut into pieces, but not filleted."
      },
      {
        type: "paragraph",
        vi: "Cá có thể được xử lý sơ bộ như làm sạch, bỏ đầu hoặc ruột.",
        en: "The fish may have been preliminarily processed, such as cleaning, heading or gutting."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Cá nguyên con hoặc cắt khúc;",
        en: "– Whole fish or fish cut into pieces;"
      },
      {
        type: "list",
        vi: "– Cá đã làm sạch, bỏ đầu hoặc ruột;",
        en: "– Cleaned, headed or gutted fish;"
      },
      {
        type: "list",
        vi: "– Gan, sẹ và bọc trứng cá ăn được.",
        en: "– Edible fish livers, roes and milt."
      },

      {
        type: "heading",
        vi: "03.03 – Cá đông lạnh, trừ phi lê cá và thịt cá khác thuộc nhóm 03.04",
        en: "03.03 – Fish, frozen, excluding fish fillets and other fish meat of heading 03.04"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm cá đã được đông lạnh hoàn toàn, nguyên con hoặc cắt khúc.",
        en: "This heading covers fish which have been fully frozen, whole or cut into pieces."
      },
      {
        type: "paragraph",
        vi: "Cá có thể được xử lý sơ bộ như làm sạch, bỏ đầu hoặc ruột.",
        en: "The fish may have been preliminarily processed, such as cleaning, heading or gutting."
      },

      {
        type: "heading",
        vi: "03.04 – Phi lê cá và thịt cá khác (đã hoặc chưa băm nhỏ), tươi, ướp lạnh hoặc đông lạnh",
        en: "03.04 – Fish fillets and other fish meat (whether or not minced), fresh, chilled or frozen"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm phi lê cá và thịt cá khác, có hoặc không băm nhỏ, ở dạng tươi, ướp lạnh hoặc đông lạnh.",
        en: "This heading covers fish fillets and other fish meat, whether or not minced, fresh, chilled or frozen."
      },
      {
        type: "paragraph",
        vi: "Phi lê là phần thịt cá đã được tách ra khỏi xương, có hoặc không có da.",
        en: "Fillets are fish meat cut away from the bones, with or without skin."
      },
      {
        type: "list",
        vi: "Nhóm này không bao gồm:",
        en: "This heading does not include:"
      },
      {
        type: "list",
        vi: "– Cá nguyên con hoặc cắt khúc (nhóm 03.02 hoặc 03.03);",
        en: "– Whole fish or fish cut into pieces (heading 03.02 or 03.03);"
      },
      {
        type: "list",
        vi: "– Cá đã chế biến hoặc bảo quản (Chương 16).",
        en: "– Prepared or preserved fish (Chapter 16)."
      },
      {
        type: "heading",
        vi: "03.05 – Cá khô, muối hoặc ngâm nước muối; cá hun khói, đã hoặc chưa nấu chín trước hoặc trong quá trình hun khói",
        en: "03.05 – Fish, dried, salted or in brine; smoked fish, whether or not cooked before or during the smoking process"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm cá được bảo quản bằng cách làm khô, ướp muối, ngâm nước muối hoặc hun khói.",
        en: "This heading covers fish preserved by drying, salting, brining or smoking."
      },
      {
        type: "paragraph",
        vi: "Cá hun khói có thể đã được nấu chín trước hoặc trong quá trình hun khói.",
        en: "Smoked fish may have been cooked before or during the smoking process."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Cá khô;",
        en: "– Dried fish;"
      },
      {
        type: "list",
        vi: "– Cá muối hoặc ngâm nước muối;",
        en: "– Salted or brined fish;"
      },
      {
        type: "list",
        vi: "– Cá hun khói.",
        en: "– Smoked fish."
      },
      {
        type: "paragraph",
        vi: "Nhóm này không bao gồm cá đã được chế biến hoặc bảo quản theo cách khác (Chương 16).",
        en: "This heading does not include fish prepared or preserved by other processes (Chapter 16)."
      },

      {
        type: "heading",
        vi: "03.06 – Động vật giáp xác, đã hoặc chưa bóc mai, sống, tươi, ướp lạnh, đông lạnh, khô, muối, ngâm nước muối hoặc hun khói",
        en: "03.06 – Crustaceans, whether in shell or not, live, fresh, chilled, frozen, dried, salted, in brine or smoked"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm tất cả các loại động vật giáp xác, dù còn vỏ hay đã bóc vỏ.",
        en: "This heading covers all crustaceans, whether in shell or peeled."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Tôm, cua, tôm hùm;",
        en: "– Shrimps, prawns, crabs, lobsters;"
      },
      {
        type: "list",
        vi: "– Động vật giáp xác sống, tươi, đông lạnh, khô, muối hoặc hun khói.",
        en: "– Crustaceans live, fresh, frozen, dried, salted or smoked."
      },
      {
        type: "paragraph",
        vi: "Nhóm này không bao gồm động vật giáp xác đã chế biến hoặc bảo quản (Chương 16).",
        en: "This heading does not include prepared or preserved crustaceans (Chapter 16)."
      },

      {
        type: "heading",
        vi: "03.07 – Động vật thân mềm, đã hoặc chưa bóc vỏ, sống, tươi, ướp lạnh, đông lạnh, khô, muối, ngâm nước muối hoặc hun khói",
        en: "03.07 – Molluscs, whether in shell or not, live, fresh, chilled, frozen, dried, salted, in brine or smoked"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm tất cả các loại động vật thân mềm, dù còn vỏ hay đã bóc vỏ.",
        en: "This heading covers all molluscs, whether in shell or peeled."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Hàu, trai, sò, bạch tuộc, mực;",
        en: "– Oysters, mussels, clams, octopus, squid;"
      },
      {
        type: "paragraph",
        vi: "Nhóm này không bao gồm động vật thân mềm đã chế biến hoặc bảo quản (Chương 16).",
        en: "This heading does not include prepared or preserved molluscs (Chapter 16)."
      },

      {
        type: "heading",
        vi: "03.08 – Động vật thuỷ sinh không xương sống khác, trừ động vật giáp xác và động vật thân mềm, sống, tươi, ướp lạnh, đông lạnh, khô, muối, ngâm nước muối hoặc hun khói",
        en: "03.08 – Aquatic invertebrates other than crustaceans and molluscs, live, fresh, chilled, frozen, dried, salted, in brine or smoked"
      },
      {
        type: "paragraph",
        vi: "Nhóm này bao gồm các loài động vật thuỷ sinh không xương sống khác ngoài động vật giáp xác và thân mềm.",
        en: "This heading covers aquatic invertebrates other than crustaceans and molluscs."
      },
      {
        type: "list",
        vi: "Nhóm này bao gồm:",
        en: "This heading includes:"
      },
      {
        type: "list",
        vi: "– Hải sâm, nhím biển, sứa;",
        en: "– Sea cucumbers, sea urchins, jellyfish;"
      },
      {
        type: "paragraph",
        vi: "Nhóm này không bao gồm động vật đã chế biến hoặc bảo quản (Chương 16).",
        en: "This heading does not include prepared or preserved aquatic invertebrates (Chapter 16)."
      }
    ]
  },
        

  // ------------------------------------------------------------
  // CHAPTERS 4-97 (Placeholders - Add content later)
  // ------------------------------------------------------------
  { chapterNumber: 4, titleVi: 'CHƯƠNG 4', titleEn: 'CHAPTER 4', content: [] },
  { chapterNumber: 5, titleVi: 'CHƯƠNG 5', titleEn: 'CHAPTER 5', content: [] },
  { chapterNumber: 6, titleVi: 'CHƯƠNG 6', titleEn: 'CHAPTER 6', content: [] },
  { chapterNumber: 7, titleVi: 'CHƯƠNG 7', titleEn: 'CHAPTER 7', content: [] },
  { chapterNumber: 8, titleVi: 'CHƯƠNG 8', titleEn: 'CHAPTER 8', content: [] },
  { chapterNumber: 9, titleVi: 'CHƯƠNG 9', titleEn: 'CHAPTER 9', content: [] },
  { chapterNumber: 10, titleVi: 'CHƯƠNG 10', titleEn: 'CHAPTER 10', content: [] },
  { chapterNumber: 11, titleVi: 'CHƯƠNG 11', titleEn: 'CHAPTER 11', content: [] },
  { chapterNumber: 12, titleVi: 'CHƯƠNG 12', titleEn: 'CHAPTER 12', content: [] },
  { chapterNumber: 13, titleVi: 'CHƯƠNG 13', titleEn: 'CHAPTER 13', content: [] },
  { chapterNumber: 14, titleVi: 'CHƯƠNG 14', titleEn: 'CHAPTER 14', content: [] },
  { chapterNumber: 15, titleVi: 'CHƯƠNG 15', titleEn: 'CHAPTER 15', content: [] },
  { chapterNumber: 16, titleVi: 'CHƯƠNG 16', titleEn: 'CHAPTER 16', content: [] },
  { chapterNumber: 17, titleVi: 'CHƯƠNG 17', titleEn: 'CHAPTER 17', content: [] },
  { chapterNumber: 18, titleVi: 'CHƯƠNG 18', titleEn: 'CHAPTER 18', content: [] },
  { chapterNumber: 19, titleVi: 'CHƯƠNG 19', titleEn: 'CHAPTER 19', content: [] },
  { chapterNumber: 20, titleVi: 'CHƯƠNG 20', titleEn: 'CHAPTER 20', content: [] },
  { chapterNumber: 21, titleVi: 'CHƯƠNG 21', titleEn: 'CHAPTER 21', content: [] },
  { chapterNumber: 22, titleVi: 'CHƯƠNG 22', titleEn: 'CHAPTER 22', content: [] },
  { chapterNumber: 23, titleVi: 'CHƯƠNG 23', titleEn: 'CHAPTER 23', content: [] },
  { chapterNumber: 24, titleVi: 'CHƯƠNG 24', titleEn: 'CHAPTER 24', content: [] },
  { chapterNumber: 25, titleVi: 'CHƯƠNG 25', titleEn: 'CHAPTER 25', content: [] },
  { chapterNumber: 26, titleVi: 'CHƯƠNG 26', titleEn: 'CHAPTER 26', content: [] },
  { chapterNumber: 27, titleVi: 'CHƯƠNG 27', titleEn: 'CHAPTER 27', content: [] },
  { chapterNumber: 28, titleVi: 'CHƯƠNG 28', titleEn: 'CHAPTER 28', content: [] },
  { chapterNumber: 29, titleVi: 'CHƯƠNG 29', titleEn: 'CHAPTER 29', content: [] },
  { chapterNumber: 30, titleVi: 'CHƯƠNG 30', titleEn: 'CHAPTER 30', content: [] },
  { chapterNumber: 31, titleVi: 'CHƯƠNG 31', titleEn: 'CHAPTER 31', content: [] },
  { chapterNumber: 32, titleVi: 'CHƯƠNG 32', titleEn: 'CHAPTER 32', content: [] },
  { chapterNumber: 33, titleVi: 'CHƯƠNG 33', titleEn: 'CHAPTER 33', content: [] },
  { chapterNumber: 34, titleVi: 'CHƯƠNG 34', titleEn: 'CHAPTER 34', content: [] },
  { chapterNumber: 35, titleVi: 'CHƯƠNG 35', titleEn: 'CHAPTER 35', content: [] },
  { chapterNumber: 36, titleVi: 'CHƯƠNG 36', titleEn: 'CHAPTER 36', content: [] },
  { chapterNumber: 37, titleVi: 'CHƯƠNG 37', titleEn: 'CHAPTER 37', content: [] },
  { chapterNumber: 38, titleVi: 'CHƯƠNG 38', titleEn: 'CHAPTER 38', content: [] },
  { chapterNumber: 39, titleVi: 'CHƯƠNG 39', titleEn: 'CHAPTER 39', content: [] },
  { chapterNumber: 40, titleVi: 'CHƯƠNG 40', titleEn: 'CHAPTER 40', content: [] },
  { chapterNumber: 41, titleVi: 'CHƯƠNG 41', titleEn: 'CHAPTER 41', content: [] },
  { chapterNumber: 42, titleVi: 'CHƯƠNG 42', titleEn: 'CHAPTER 42', content: [] },
  { chapterNumber: 43, titleVi: 'CHƯƠNG 43', titleEn: 'CHAPTER 43', content: [] },
  { chapterNumber: 44, titleVi: 'CHƯƠNG 44', titleEn: 'CHAPTER 44', content: [] },
  { chapterNumber: 45, titleVi: 'CHƯƠNG 45', titleEn: 'CHAPTER 45', content: [] },
  { chapterNumber: 46, titleVi: 'CHƯƠNG 46', titleEn: 'CHAPTER 46', content: [] },
  { chapterNumber: 47, titleVi: 'CHƯƠNG 47', titleEn: 'CHAPTER 47', content: [] },
  { chapterNumber: 48, titleVi: 'CHƯƠNG 48', titleEn: 'CHAPTER 48', content: [] },
  { chapterNumber: 49, titleVi: 'CHƯƠNG 49', titleEn: 'CHAPTER 49', content: [] },
  { chapterNumber: 50, titleVi: 'CHƯƠNG 50', titleEn: 'CHAPTER 50', content: [] },
  { chapterNumber: 51, titleVi: 'CHƯƠNG 51', titleEn: 'CHAPTER 51', content: [] },
  { chapterNumber: 52, titleVi: 'CHƯƠNG 52', titleEn: 'CHAPTER 52', content: [] },
  { chapterNumber: 53, titleVi: 'CHƯƠNG 53', titleEn: 'CHAPTER 53', content: [] },
  { chapterNumber: 54, titleVi: 'CHƯƠNG 54', titleEn: 'CHAPTER 54', content: [] },
  { chapterNumber: 55, titleVi: 'CHƯƠNG 55', titleEn: 'CHAPTER 55', content: [] },
  { chapterNumber: 56, titleVi: 'CHƯƠNG 56', titleEn: 'CHAPTER 56', content: [] },
  { chapterNumber: 57, titleVi: 'CHƯƠNG 57', titleEn: 'CHAPTER 57', content: [] },
  { chapterNumber: 58, titleVi: 'CHƯƠNG 58', titleEn: 'CHAPTER 58', content: [] },
  { chapterNumber: 59, titleVi: 'CHƯƠNG 59', titleEn: 'CHAPTER 59', content: [] },
  { chapterNumber: 60, titleVi: 'CHƯƠNG 60', titleEn: 'CHAPTER 60', content: [] },
  { chapterNumber: 61, titleVi: 'CHƯƠNG 61', titleEn: 'CHAPTER 61', content: [] },
  { chapterNumber: 62, titleVi: 'CHƯƠNG 62', titleEn: 'CHAPTER 62', content: [] },
  { chapterNumber: 63, titleVi: 'CHƯƠNG 63', titleEn: 'CHAPTER 63', content: [] },
  { chapterNumber: 64, titleVi: 'CHƯƠNG 64', titleEn: 'CHAPTER 64', content: [] },
  { chapterNumber: 65, titleVi: 'CHƯƠNG 65', titleEn: 'CHAPTER 65', content: [] },
  { chapterNumber: 66, titleVi: 'CHƯƠNG 66', titleEn: 'CHAPTER 66', content: [] },
  { chapterNumber: 67, titleVi: 'CHƯƠNG 67', titleEn: 'CHAPTER 67', content: [] },
  { chapterNumber: 68, titleVi: 'CHƯƠNG 68', titleEn: 'CHAPTER 68', content: [] },
  { chapterNumber: 69, titleVi: 'CHƯƠNG 69', titleEn: 'CHAPTER 69', content: [] },
  { chapterNumber: 70, titleVi: 'CHƯƠNG 70', titleEn: 'CHAPTER 70', content: [] },
  { chapterNumber: 71, titleVi: 'CHƯƠNG 71', titleEn: 'CHAPTER 71', content: [] },
  { chapterNumber: 72, titleVi: 'CHƯƠNG 72', titleEn: 'CHAPTER 72', content: [] },
  { chapterNumber: 73, titleVi: 'CHƯƠNG 73', titleEn: 'CHAPTER 73', content: [] },
  { chapterNumber: 74, titleVi: 'CHƯƠNG 74', titleEn: 'CHAPTER 74', content: [] },
  { chapterNumber: 75, titleVi: 'CHƯƠNG 75', titleEn: 'CHAPTER 75', content: [] },
  { chapterNumber: 76, titleVi: 'CHƯƠNG 76', titleEn: 'CHAPTER 76', content: [] },
  { chapterNumber: 77, titleVi: 'CHƯƠNG 77', titleEn: 'CHAPTER 77', content: [] },
  { chapterNumber: 78, titleVi: 'CHƯƠNG 78', titleEn: 'CHAPTER 78', content: [] },
  { chapterNumber: 79, titleVi: 'CHƯƠNG 79', titleEn: 'CHAPTER 79', content: [] },
  { chapterNumber: 80, titleVi: 'CHƯƠNG 80', titleEn: 'CHAPTER 80', content: [] },
  { chapterNumber: 81, titleVi: 'CHƯƠNG 81', titleEn: 'CHAPTER 81', content: [] },
  { chapterNumber: 82, titleVi: 'CHƯƠNG 82', titleEn: 'CHAPTER 82', content: [] },
  { chapterNumber: 83, titleVi: 'CHƯƠNG 83', titleEn: 'CHAPTER 83', content: [] },
  { chapterNumber: 84, titleVi: 'CHƯƠNG 84', titleEn: 'CHAPTER 84', content: [] },
  { chapterNumber: 85, titleVi: 'CHƯƠNG 85', titleEn: 'CHAPTER 85', content: [] },
  { chapterNumber: 86, titleVi: 'CHƯƠNG 86', titleEn: 'CHAPTER 86', content: [] },
  { chapterNumber: 87, titleVi: 'CHƯƠNG 87', titleEn: 'CHAPTER 87', content: [] },
  { chapterNumber: 88, titleVi: 'CHƯƠNG 88', titleEn: 'CHAPTER 88', content: [] },
  { chapterNumber: 89, titleVi: 'CHƯƠNG 89', titleEn: 'CHAPTER 89', content: [] },
  { chapterNumber: 90, titleVi: 'CHƯƠNG 90', titleEn: 'CHAPTER 90', content: [] },
  { chapterNumber: 91, titleVi: 'CHƯƠNG 91', titleEn: 'CHAPTER 91', content: [] },
  { chapterNumber: 92, titleVi: 'CHƯƠNG 92', titleEn: 'CHAPTER 92', content: [] },
  { chapterNumber: 93, titleVi: 'CHƯƠNG 93', titleEn: 'CHAPTER 93', content: [] },
  { chapterNumber: 94, titleVi: 'CHƯƠNG 94', titleEn: 'CHAPTER 94', content: [] },
  { chapterNumber: 95, titleVi: 'CHƯƠNG 95', titleEn: 'CHAPTER 95', content: [] },
  { chapterNumber: 96, titleVi: 'CHƯƠNG 96', titleEn: 'CHAPTER 96', content: [] },
  { chapterNumber: 97, titleVi: 'CHƯƠNG 97', titleEn: 'CHAPTER 97', content: [] },
];

// ============================================================
// HELPER FUNCTION
// ============================================================

/**
 * Get the full detail data for a specific chapter
 * @param chapterNum - The chapter number (1-97)
 * @returns The ChapterFullDetail object or undefined if not found
 */
export const getChapterFullDetail = (chapterNum: number): ChapterFullDetail | undefined => {
  return chapterFullDetailData.find(chapter => chapter.chapterNumber === chapterNum);
};
