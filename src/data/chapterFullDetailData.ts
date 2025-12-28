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
      // NOTE FOR SECTION I
      { 
        type: 'heading', 
        vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', 
        en: 'SECTION I: LIVE ANIMALS; ANIMAL PRODUCTS' 
      },
      
      { 
        type: 'heading', 
        vi: 'Chú giải Phần', 
        en: 'Section Notes' 
      },
      
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
      // END NOTE FOR SECTION I

      { 
        type: 'heading', 
        vi: 'Chương 1: Động vật sống', 
        en: 'Chapter 1: Live animals' 
      },
      
      // NOTE FOR CHAPTER 1
      { 
        type: 'heading', 
        vi: 'Chú giải Chương', 
        en: 'Chapter Notes' 
      },
      
      { 
        type: 'paragraph', 
        vi: '1. Chương này bao gồm tất cả các loại động vật sống trừ:', 
        en: '1. This Chapter covers all live animals except :' 
      },
      
      { 
        type: 'list', 
        vi: '(a) Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác, thuộc nhóm 03.01, 03.06, 03.07 hoặc 03.08;', 
        en: '(а) Fish and crustaceans, molluscs and other aquatic invertebrates, of heading 03.01, 03.06, 03.07 or 03.08;' 
      },
      
      { 
        type: 'list', 
        vi: '(b) Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; và', 
        en: '(b) Cultures of micro-organisms and other products of heading 30.02; and' 
      },
      
      { 
        type: 'list', 
        vi: '(c) Động vật thuộc nhóm 95.08.', 
        en: '(c) Animals of heading 95.08.' 
      },
      // END NOTE FOR CHAPTER 1

      // GENERAL NOTE FOR CHAPTER 1
      { 
        type: 'heading', 
        vi: 'TỔNG QUÁT', 
        en: 'GENERAL' 
      },

      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm tất cả các loại sinh vật sống (dùng làm thực phẩm hoặc có các mục đích khác) trừ:', 
        en: 'This Chapter covers all living creatures (for food or other purposes) except :' 
      },

      { 
        type: 'list', 
        vi: '(1) Cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác.', 
        en: '(1) Fish and crustaceans, molluscs and other aquatic invertebrates.' 
      },

      { 
        type: 'list', 
        vi: '(2) Vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02 .', 
        en: '(2) Cultures of micro-organisms and other products of heading 30.02.' 
      },

      { 
        type: 'list', 
        vi: '(3) Bầy thú thuộc rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác ( nhóm 95.08 ).', 
        en: '(3) Animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08).' 
      },

      { 
        type: 'paragraph', 
        vi: 'Động vật, kể cả côn trùng, chết trên đường vận chuyển được phân loại vào các nhóm từ 02.01 đến 02.05, 02.07, 02.08 hoặc 04.10 nếu chúng là những động vật ăn được thích hợp dùng làm thức ăn cho người. Trong những trường hợp khác, chúng được phân loại vào nhóm 05.11 .', 
        en: 'Animals, including insects, which die during transport are classified in headings 02.01 to 02.05, 02.07, 02.08 or 04.10 if they are edible animals fit for human consumption. In other cases, they are classified in heading 05.11 .' 
      },
      // END GENERAL NOTE FOR CHAPTER 1

      // NOTE FOR HEADING 01.01
      { 
        type: 'heading', 
        vi: '01.01 - Ngựa, lừa, la sống (+).', 
        en: '01.01 - Live horses, asses, mules and hinnies (+).' 
      },

      { 
        type: 'paragraph', 
        vi: '- Ngựa:', 
        en: '- Horses:' 
      },

      { 
        type: 'list', 
        vi: '0101.21 - - Loại thuần chủng để nhân giống', 
        en: '0101.21 - - Pure-bred breeding animals' 
      },

      { 
        type: 'list', 
        vi: '0101.29 - - Loại khác', 
        en: '0101.29 - - Other' 
      },

      { 
        type: 'list', 
        vi: '0101.30 - Lừa', 
        en: '0101.30 - Asses' 
      },

      { 
        type: 'list', 
        vi: '0101.90 - Loại khác', 
        en: '0101.90 - Other' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này gồm các loại ngựa (ngựa cái, ngựa đực, ngựa thiến, ngựa con và ngựa nhỏ (pony)), lừa, la, nuôi hoặc hoang.', 
        en: 'This heading covers horses (mares, stallions, geldings, foals and ponies), asses, mules and hinnies, whether domestic or wild. Mules are the hybrid offspring of the ass and the mare. The hinny is bred from the stallion and the ass.' 
      },

      { 
        type: 'paragraph', 
        vi: 'Con la (mule) là con lai giữa lừa đực và ngựa cái. Con la (hinny) là con lai giữa ngựa đực và lừa cái.', 
        en: 'Mules are the hybrid offspring of the ass and the mare. The hinny is bred from the stallion and the ass.' 
      },
      // NOTE FOR SUBHEADING 0101.21
      { 
        type: 'heading', 
        vi: 'Chú giải phân nhóm 0101.21', 
        en: 'Subheading Explanatory Note 0101.21' 
      },
      
      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của phân nhóm 0101.21, thuật ngữ "loại thuần chủng để nhân giống” chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là “thuần chủng”.', 
        en: 'For the purposes of subheading 0101.21, the expression “pure-bred breeding animals” covers only those breeding animals which are regarded as “pure-bred” by the competent national authorities.' 
      },
      // END NOTE FOR SUBHEADING 0101.21
      // END NOTE FOR HEADING 0101

      // NOTE FOR HEADING 0102
      { 
        type: 'heading', 
        vi: '01.02 - Động vật sống họ trâu bò (+).', 
        en: '01.02 - Live bovine animals (+).' 
      },

      { 
        type: 'paragraph', 
        vi: '- Gia súc:', 
        en: '- Cattle :' 
      },

      { 
        type: 'list', 
        vi: '0102.21 - - Loại thuần chủng để nhân giống', 
        en: '0102.21 - - Pure-bred breeding animals' 
      },

      { 
        type: 'list', 
        vi: '0102.29 - - Loại khác', 
        en: '0102.29 - - Other' 
      },

      { 
        type: 'paragraph', 
        vi: '- Trâu:', 
        en: '- Buffalo :' 
      },

      { 
        type: 'list', 
        vi: '0102.31 - - Loại thuần chủng để nhân giống', 
        en: '0102.31 - - Pure-bred breeding animals' 
      },

      { 
        type: 'list', 
        vi: '0102.39 - - Loại khác', 
        en: '0102.39 - - Other' 
      },

      { 
        type: 'list', 
        vi: '0102.90 - Loại khác', 
        en: '0102.90 - Other' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm tất cả các loại trâu bò thuộc phân họ Bovinae, nuôi hoặc hoang và dù mục đích sử dụng thế nào (ví dụ: dự trữ, chăn nuôi, vỗ béo, nhân giống, làm thịt). Trong số đó có thể dẫn ra:', 
        en: 'This heading covers all animals of the sub-family Bovinae, whether or not domestic and irrespective of their intended use (e.g., stock, raising, fattening, breeding, slaughter). These include, inter alia:' 
      },

      { type: 'paragraph', 
        vi: '(1) Gia súc: Loại này bao gồm các động vật họ trâu bò thuộc giống Bos, được chia thành bốn phân giống: Bos, Bibos, Novibos và Poephagus. Có thể kể ra:', 
        en: '(1) Cattle: This category covers bovine animals of the genus Bos, which is divided into four sub-genera: Bos, Bibos, Novibos and Poephagus. These include, inter alia:' 
      },

      { 
        type: 'list', 
        vi: '(A) Bò thông thường (Bos taurus), bò Zebu hoặc bò có bướu (Bos indicus) và bò Watussi.', 
        en: '(A) The common ox (Bos taurus), the Zebu or humped ox (Bos indicus) and the Watussi ox.' 
      },

      { 
        type: 'list', 
        vi: '(B) Các loại bò Châu Á thuộc phân giống Bibos như bò tót rừng (Bos gaurus), bò tót nhà (Bos frontalis) và bò banteng (Bos Sondaicus hoặc Bos javanicus).', 
        en: '(B) The Asiatic oxen of the sub-genus Bibos, such as the gaur (Bos gaurus), the gayal (Bos frontalis) and the banteng (Bos sondaicus or Bos javanicus).' 
      },

      { 
        type: 'list', 
        vi: '(C) Các động vật thuộc phân giống Poephagus, như bò Tây Tạng (Bos grunniens).', 
        en: '(C) Animals of the sub-genus Poephagus, such as the Tibetan yak (Bos grunniens).' 
      },

      { 
        type: 'paragraph', 
        vi: '(2) Trâu: loại này bao gồm các động vật thuộc giống Bubalus, Syncerus và Bison. Có thể kể ra:', 
        en: '(2) Buffalo: This category covers animals of the genera Bubalus, Syncerus and Bison. These include, inter alia:' 
      },

      { 
        type: 'list', 
        vi: '(A) Các động vật thuộc giống Bubalus, kể cả trâu Ấn Độ hoặc trâu nước (Bubalus bubalus), trâu Châu Á hoặc trâu arni (Bubalus arni) và trâu Anoa hoặc trâu lùn đồng bằng (Bubalus depressicornis hoặc Anoa depressicornis).', 
        en: '(A) Animals of the genus Bubalus, including the Indian or water buffalo (Bubalus bubalus), the Asiatic buffalo or arni (Bubalus arni) and the Celebese anoa or pigmy buffalo (Bubalus depressicornis or Anoa depressicornis).' 
      },

      { 
        type: 'list', 
        vi: '(B) Trâu Châu Phi thuộc giống Syncerus, như trâu rừng lùn (Syncerus nanus) và trâu rừng lớn Caffrarian (Syncerus caffer).', 
        en: '(B) African buffaloes of the genus Syncerus, such as the dwarf buffalo (Syncerus nanus) and the large Caffrarian buffalo (Syncerus caffer).' 
      },

      { 
        type: 'list', 
        vi: '(C) Động vật thuộc giống Bison, như bò rừng bizon Châu Mỹ (Bison Bison) hoặc “trâu” và bò rừng bizon Châu Âu (Bison bonasus).', 
        en: '(C) Animals of the genus Bison. i.e., the American bison (Bison bison) or “buffalo” and the European bison (Bison bonasus).' 
      },

      { 
        type: 'list', 
        vi: '(D) "Beeffalo" (con lai giữa bò rừng bizon và bò nuôi).', 
        en: '(D) The Beeffalo (a cross between a bison and a domestic beef animal).' 
      },

      { 
        type: 'paragraph', 
        vi: '(3) Loại khác, kể cả linh dương bốn sừng (Tetracerus quadricornis) và linh dương sừng xoắn thuộc giống Taurotragus và Tragelaphus.', 
        en: '(3) Other, including the four-horned antelope (Tetracerus quadricornis) and the spiral-horned antelopes of the genera Taurotragus and Tragelaphus.' 
      },

      // NOTE FOR SUBHEADING 0102.21 and 0102.31
      { 
        type: 'heading', 
        vi: 'Chú giải phân nhóm 0102.21 và 0102.31', 
        en: 'Subheading Explanatory Note 0101.21 and 0102.31' 
      },
      
      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của phân nhóm 0102.21 và 0102.31, thuật ngữ "loại thuần chủng để nhân giống” chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là “thuần chủng”.', 
        en: 'For the purposes of subheadings 0102.21 and 0102.31, the expression “pure-bred breeding animals" covers only those breeding animals which are regarded as “pure-bred ” by the competent national authorities.' 
      },
      // END NOTE FOR SUBHEADING 0102.21 and 0102.31
      
      // NOTE FOR HEADING 0103
      { 
        type: 'heading', 
        vi: '01.03 - Lợn sống (+).', 
        en: '01.03 - Live swine (+).' 
      },

      { 
        type: 'list', 
        vi: '0103.10 - Loại thuần chủng để nhân giống', 
        en: '0103.10 - Pure-bred breeding animals' 
      },

      { 
        type: 'paragrpah', 
        vi: '- Loại khác:', 
        en: '- Other:' 
      },

      { 
        type: 'list', 
        vi: '0103.91 - - Trọng lượng dưới 50 kg', 
        en: '0103.91 - - Weighing less than 50 kg' 
      },

      { 
        type: 'list', 
        vi: '0103.92 - - Trọng lượng từ 50 kg trở lên', 
        en: '0103.92 - - Weighing 50 kg or more' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này gồm lợn nuôi và hoang (như lợn lòi).', 
        en: 'This heading covers both domestic pigs and wild pigs (e.g., wild boars).' 
      },
      
      // NOTE FOR SUBHEADING 0103.10
      { 
        type: 'heading', 
        vi: 'Chú giải phân nhóm 0103.10', 
        en: 'Subheading Explanatory Note 0103.10' 
      },

      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của phân nhóm 0103.10, thuật ngữ "loại thuần chủng để nhân giống” chỉ gồm những động vật giống được các cơ quan quốc gia có thẩm quyền công nhận là “thuần chủng”.', 
        en: 'For the purposes of subheading 0103.10, the expression “pure-bred breeding animals” covers only those breeding animals which are regarded as “pure-bred” by the competent national authorities.' 
      },
      // END NOTE FOR SUBHEADING 0103.10
      
      // NOTE FOR SUBHEADING 0103.91 and 0103.92
      { 
        type: 'heading', 
        vi: 'Chú giải phân nhóm 0103.91 và 0103.92', 
        en: 'Subheading Explanatory Notes 0103.91 and 0103.92' 
      },

      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của các phân nhóm 0103.91 và 0103.92, các giới hạn trọng lượng được mô tả liên quan đến trọng lượng của mỗi con vật.', 
        en: 'For the purposes of subheadings 0103.91 and 0103.92, the specified weight limits relate to the weight of each animal.' 
      },
      // END NOTE FOR SUBHEADING 0103.91 and 0103.92
      // END NOTE FOR HEADING 0103

      // NOTE FOR HEADING 0104
      { 
        type: 'heading', 
        vi: '01.04 - Cừu, dê sống.', 
        en: '01.04 - Live sheep and goats.' 
      },

      { 
        type: 'list', 
        vi: '0104.10 - Cừu', 
        en: '0104.10 - Sheep' 
      },

      { 
        type: 'list', 
        vi: '0104.20 - Dê', 
        en: '0104.20 - Goats' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm cừu nuôi hoặc hoang (cừu đực, cừu cái và cừu non), dê và dê con nuôi hoặc hoang.', 
        en: 'This heading covers domestic or wild sheep (rams, ewes, and lambs) and domestic or wild goats and kids.' 
      },
      // END NOTE FOR HEADING 0104

      // NOTE FOR HEADING 0105
      { 
        type: 'heading', 
        vi: '01.05 - Gia cầm sống, gồm các loại gà thuộc loài Gallus domesticus, vịt, ngan, ngỗng, gà tây và gà lôi (+).', 
        en: '01.05 - Live poultry , that is to say, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls (+)' 
      },

      { 
        type: 'paragraph', 
        vi: '- Loại trọng lượng không quá 185g:', 
        en: '- Weighing not more than 185g:' 
      },

      { 
        type: 'list', 
        vi: '0105.11 - - Gà thuộc loài Gallus domesticus', 
        en: '0105.11 - - Fowls of the species Gallus domesticus' 
      },

      { 
        type: 'list', 
        vi: '0105.12 - - Gà tây', 
        en: '0105.12 - - Turkeys' 
      },

      { 
        type: 'list', 
        vi: '0105.13 - - Vịt', 
        en: '0105.13 - - Ducks' 
      },

      { 
        type: 'list', 
        vi: '0105.14 - - Ngỗng', 
        en: '0105.14 - - Geese' 
      },

      { 
        type: 'list', 
        vi: '0105.15 - - Gà lôi', 
        en: '0105.15 - - Guinea fowls' 
      },

      { 
        type: 'paragraph', 
        vi: '- Loại khác:', 
        en: '- Other:' 
      },

      { 
        type: 'list', 
        vi: '0105.94 - - Gà thuộc loài Gallus domesticus', 
        en: '0105.94 - - Fowls of the species Gallus domesticus' 
      },

      { 
        type: 'list', 
        vi: '0105.99 - - Loại khác', 
        en: '0105.99 - - Other' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này chỉ bao gồm các loại chim nuôi còn sống được chỉ rõ trong nhóm. Gà thuộc các loài Gallus domesticus gồm gà giò và gà trống thiến. Nhóm này không bao gồm các loại chim sống khác (vd, gà gô, gà lôi, chim bồ câu, vịt trời, ngỗng trời) (nhóm 01.06).', 
        en: 'This heading covers only live domestic birds of the kinds specified in the heading. Fowls of the species Gallus domesticuss include chickens and capons. Other live birds (e.g., partridges, pheasants, pigeons, wild ducks, wild geese) are excluded (heading 01.06).' 
      },

      // NOTE FOR SUBHEADING 0105.11, 0105.12, 0105.13, 01015.14 and 0105.15
      { 
        type: 'heading', 
        vi: 'Chú giải phân nhóm 0105.11, 0105.12, 0105.13, 0105.14, và 0105.15', 
        en: 'Subheading Explanatory Notes 0105.11, 0105.12, 0105.13, 0105.14 and 0105.15' 
      },

      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của các phân nhóm 0105.11, 0105.12, 0105.13, 0105.14 và 0105.15, giới hạn trọng lượng được mô tả liên quan đến trọng lượng của mỗi con chim.', 
        en: 'For the purposes of subheadings 0105.11, 0105.12, 0105.13, 0105.14 and 0105.15, the specified weight limit relates to the weight of each bird.' 
      },
      // END NOTE FOR SUBHEADING 0105.11, 0105.12, 0105.13, 01015.14 and 0105.15
      // END NOTE FOR HEADING 0105

      // NOTE FOR HEADING 0106
      { 
        type: 'heading', 
        vi: '01.06 - Động vật sống khác.', 
        en: '01.06 - Other live animals.' 
      },

      { 
        type: 'paragraph', 
        vi: '- Động vật có vú:', 
        en: '- Mammals:' 
      },

      { 
        type: 'list', 
        vi: '0106.11 - - Bộ động vật linh trưởng', 
        en: '0106.11 - - Primates' 
      },

      { 
        type: 'list', 
        vi: '0106.12 - - Cá voi, cá heo chuột và cá heo (động vật có vú thuộc bộ cá voi Cetacea); lợn biển và cá nược (động vật có vú thuộc bộ Sirenia); hải cẩu, sư tử biển và hải mã (con moóc) (động vật có vú thuộc phân bộ Pinnipedia)', 
        en: '0106.12 - - Whales, dolphins and porpoises (mammals of the order Cetacea): manatees and dugongs (mammals of the order Sirenia); seals, sea lions and walruses (mammals of the suborder Pinnipedia)' 
      },

      { 
        type: 'list', 
        vi: '0106.13 - - Lạc đà và họ lạc đà (Camelidae)', 
        en: '0106.13 - - Camels and other camelids (Camelidae)' 
      },

      { 
        type: 'list', 
        vi: '0106.14 - - Thỏ (Rabbits và hares)', 
        en: '0106.14 - - Rabbits and hares' 
      },

      { 
        type: 'list', 
        vi: '0106.19 - - Loại khác', 
        en: '0106.19 - - Other' 
      },

      { 
        type: 'list', 
        vi: '0106.20 - Loài bò sát (kể cả rắn và rùa)', 
        en: '0106.20 - Reptiles (including snakes and turtles)' 
      },

      { 
        type: 'paragraph', 
        vi: '- Các loại chim:', 
        en: '- Birds:' 
      },

      { 
        type: 'list', 
        vi: '0106.31 - - Chim săn mồi', 
        en: '0106.31 - - Birds of prey' 
      },

      { 
        type: 'list', 
        vi: '0106.32 - - Vẹt (kể cả vẹt lớn châu Mỹ (parrots), vẹt nhỏ đuôi dài (parakeets), vẹt đuôi dài và vẹt có mào)', 
        en: '0106.32 - - Psittaciformes (including parrots, parakeets, macaws and cockatoos)' 
      },

      { 
        type: 'list', 
        vi: '0106.33 - - Đà điểu; đà điểu châu Úc (Dromaius novaehollandiae)', 
        en: '0106.33 - - Ostriches; emus (Dromaius novaehollandiae)' 
      },

      { 
        type: 'list', 
        vi: '0106.39 - - Loại khác', 
        en: '0106.39 - - Other' 
      },

      { 
        type: 'paragraph', 
        vi: '- Côn trùng:', 
        en: '- Insects:' 
      },

      { 
        type: 'list', 
        vi: '0106.41 - - Các loại ong', 
        en: '0106.41 - - Bees' 
      },

      { 
        type: 'list', 
        vi: '0106.49 - - Loại khác', 
        en: '0106.49 - - Other' 
      },

      { 
        type: 'list', 
        vi: '0106.90 - Loại khác', 
        en: '0106.90 - Other' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này có thể kể ra các động vật nuôi hoặc hoang sau:', 
        en: 'This heading includes, inter alia, the following domestic or wild animals:' 
      },

      { 
        type: 'paragraph', 
        vi: '(A) Động vật có vú:', 
        en: '(A) Mammals:' 
      },

      { 
        type: 'list', 
        vi: '(1) Bộ động vật linh trưởng', 
        en: '(1) Primates.' 
      },

      { 
        type: 'list', 
        vi: '(2) Cá voi, cá nục heo và cá heo (động vật có vú thuộc bộ cá voi Cetacea); lợn biển và cá nược (động vật có vú thuộc bộ Sirenia); hải cẩu, sư tử biển và hải mã (con moóc) (động vật có vú thuộc phân bộ Pinnipedia)', 
        en: '(2) Whales, dolphins and porpoises (mammals of the order Cetacea); manatees and dugongs (mammals of the order Sirenia); seals, sea lions and walruses (mammals of the suborder Pinnipedia).' 
      },

      { 
        type: 'list', 
        vi: '(3) Loại khác (ví dụ: tuần lộc, mèo, chó, sư tử, hổ, gấu, voi, lạc đà (bao gồm lạc đà một bướu), ngựa vằn, thỏ, thỏ rừng, hươu nai, linh dương (trừ những động vật thuộc phân họ Bovinae), sơn dương, cáo, chồn vizon (mink) và những loại thú nuôi lấy lông khác).', 
        en: '(3) Other (e.g., reindeer, cals, dogs, lions, tigers, bears, elephants, camels (including dromedaries), zebras, rabbits, hares, deer, antelope (other than those of the sub-family Bovinae), chamois, foxes, minks and other animals for fur farms).' 
      },

      { type: 'paragraph', 
        vi: '(B) Loài bò sát (bao gồm cả rắn và rùa).', 
        en: '(B) Reptiles (including snakes and turtles).' 
      },

      { 
        type: 'paragraph', 
        vi: '(C) Các loại chim:', 
        en: '(C) Birds:' 
      },

      { 
        type: 'list', 
        vi: '(1) Chim săn mồi.', 
        en: '(1) Birds of prey.' 
      },

      { 
        type: 'list', 
        vi: '(2) Vẹt (kể cả vẹt lớn châu Mỹ (parrots), vẹt nhỏ đuôi dài (parakeets), vẹt đuôi dài và vẹt có mào).', 
        en: '(2) Psittaciformes (including parrots, parakeets, macaws and cockatoos).' 
      },

      { 
        type: 'list', 
        vi: '(3) Loại khác (ví dụ: gà gô, gà lôi, chim cút, chim dẽ gà, chim dẽ giun, chim bồ câu, gà gô trắng, chim sẻ rừng, vịt trời, ngỗng trời, chim hoét (thrushes), chim két, chim chiền chiện, chim họ sẻ, chim sẻ ngô, chim ruồi, công, thiên nga và những loại chim khác chưa được chi tiết trong nhóm 01.05).', 
        en: '(3) Other (e.g., partridges, pheasants, quail, woodcocks, snipe, pigeons, grouse, ortolan, wild ducks, wild geese, thrushes, blackbirds, larks, finches, tits, humming birds, peacocks, swans and other birds not specified in heading 01.05).' 
      },

      { 
        type: 'paragrpah', 
        vi: '(D) Côn trùng, ví dụ các loại ong (có hay không ở trong các thùng hoặc lồng hoặc tổ ong lưu động).', 
        en: '(D) Insects, e.g., bees (whether or not in travelling boxes or cages or hives).' 
      },

      { 
        type: 'paragraph', 
        vi: '(E) Loại khác, ví dụ các loại ếch.', 
        en: '(E.) Other, e.g., frogs.' 
      },

      { 
        type: 'paragraph', 
        vi: 'Nhóm này không bao gồm bầy thú thuộc rạp xiếc, bầy thú hoặc động vật làm trò lưu động tương tự khác (nhóm 95.08).', 
        en: 'This heading excludes animals forming part of circuses, menageries or other similar travelling animal shows (heading 95.08).' 
      }
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
      { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I : LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
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
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { type: 'paragraph', vi: '1- Chương này không bao gồm:', en: '1 - This Chapter does not cover :' },
      { type: 'list', vi: '(a) Những sản phẩm thuộc loại đã được mô tả trong các nhóm 02.01 đến 02.08 hoặc 02.10, nhưng không thích hợp làm thức ăn cho người;', en: '(a) Products of the kinds described in headings 02.01 to 02.08 or 02.10, unfit or unsuitable for human consumption:' },
      { type: 'list', vi: '(b) Côn trùng không còn sống, ăn được (nhóm 04.10);', en: '(b) Edible, non-living insects (heading 04.10);' },
      { type: 'list', vi: '(c) Ruột, bong bóng hoặc dạ dày của động vật (nhóm 05.04) hoặc tiết động vật (nhóm 05.11 hoặc 30.02); hoặc', en: '(c) Guts, bladders or stomachs of animals (heading 05.04) or animal blood (heading 05.11 or 30.02): or' },
      { type: 'list', vi: '(d) Mỡ động vật, trừ các sản phẩm của nhóm 02.09 (Chương 15).', en: '(d) Animal fat, other than rpoducts of heading 02.09 (Chapter 15).' },
      
      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm thịt cả con (tức là thân thịt động vật có hoặc không có đầu), nửa con (tức là thân thịt động vật bổ dọc làm đôi), phần tư con, miếng v.v..., phụ phẩm dạng thịt sau giết mổ, và bột mịn và bột thô của thịt hoặc phụ phẩm dạng thịt sau giết mổ, của tất cả các loại động vật ( trừ cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác - Chương 3 ), thích hợp dùng làm thức ăn cho người.', 
        en: 'This Chapter applies to meat in carcasses (i.e., the body of an animal with or without the head), half-carcasses (resulting from the lengthwise splitting of a carcass), quarters, pieces, etc., to meat offal, and to flours and meals of meat or meat offal, of all animals ( except fish and crustaceans, molluscs and other aquatic invertebrates - Chapter 3 ), suitable for human consumption.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Thịt và phụ phẩm dạng thịt không phù hợp hoặc không thích hợp dùng làm thức ăn cho người bị loại trừ ( nhóm 05.11 ). Bột mịn, bột thô và viên từ thịt hoặc phụ phẩm thịt sau giết mổ, không thích hợp dùng làm thức ăn cho người cũng bị loại trừ ( nhóm 23.01 ).', 
        en: 'Meat and meat offal unsuitable or unfit for human consumption are excluded (heading 05.11) . Flours, meals and pellets unfit for human consumption, obtained from meat or meat offal, are also excluded (heading 23.01).' 
      },
      { type: 'paragraph', vi: 'Nhìn chung phụ phẩm sau giết mổ có thể chia thành bốn loại:', en: 'Offal generally can be grouped in four categories :' },
      { type: 'list', vi: '(1) Chủ yếu làm thức ăn cho người (ví dụ: đầu và những phần của đầu (bao gồm cả tai), chân, đuôi, tim, lưỡi, thịt hông (thick skirts, thin skirts), màng ruột (cauls), cổ họng, ức).', en: '(1) That which is mainly used for human consumption (e.g., heads and cuts thereof (including ears), feet, tails, hearts, tongues, thick skirts, thin skirts, cauls, throats, thymus glands).' },
      { type: 'list', vi: '(2) Chỉ dùng làm chế phẩm của các mặt hàng dược phẩm (ví dụ: túi mật, tuyến thượng thận, nhau thai).', en: '(2) That which is used solely in the preparation of pharmaceutical products (e.g., gall bags, adrenal glands, placenta).' },
      { type: 'list', vi: '(3) Có thể dùng làm thức ăn cho người hoặc làm chế phẩm của các mặt hàng dược phẩm (ví dụ: gan, bầu dục, phổi, óc, tụy, lá lách, tuỷ sống, buồng trứng, dạ con, tinh hoàn, vú, tuyến giáp, tuyến yên).', en: '(3) That which can be used for human consumption or for the preparation of pharmaceutical products (e.g., livers, kidneys, lungs, brains, pancreas, spleens, spinal cords, ovaries, uteri, testes, udders, thyroid glands, pituitary glands).' },
      { type: 'list', vi: ' (4) Như là da, có thể dùng làm thức ăn cho người hoặc dùng vào mục đích khác (ví dụ sản xuất da thuộc).', en: '(4) That, such as skins, which can be used for human consumption or for other purposes (e.g., manufacture of leather).' },
      { 
        type: 'paragraph', 
        vi: 'Phụ phẩm sau giết mổ nêu tại đoạn (1), tươi, ướp lạnh, đông lạnh, muối, ngâm nước muối, làm khô hoặc hun khói, vẫn được phân loại vào Chương này, trừ trường hợp không thích hợp dùng làm thức ăn cho người, thì phân loại vào nhóm 05.11 .', 
        en: 'The offal referred to in paragraph (1), fresh, chilled, frozen, salted, in brine, dried or smoked, remains classified in this Chapter unless it is unfit for human consumption, in which case it is to he classified in heading 05.11.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Phụ phẩm sau giết mổ nêu tại đoạn (2) được phân loại vào nhóm 05.10 khi ở dạng tươi, ướp lạnh, đông lạnh hoặc bảo quản tạm thời dưới hình thức khác và trong nhóm 30.01 khi ở dạng được làm khô.', 
        en: 'The offal referred to in paragraph (2) falls in heading 05.10 when fresh, chilled, frozen or otherwise provisionally preserved and in heading 30.01 when dried.' 
      },
      { type: 'paragraph', vi: 'Phụ phẩm sau giết mổ nêu tại đoạn (3) được phân loại như sau:', en: 'The offal referred to in paragraph (3) is classified as follows :' },
      { type: 'list', vi: '(a) Vào nhóm 05.10 khi được bảo quản tạm thời để làm chế phẩm của các mặt hàng dược phẩm (ví dụ bảo quản bằng glycerol, acetone, cồn, formaldehyde, natri borate).', en: '(a) In heading 05.10 when provisionally preserved for the preparation of pharmaceutical products (e.g., in glycerol, acetone, alcohol, formaldehyde, sodium borate).' },
      { type: 'list', vi: '(b) Vào nhóm 30.01 khi ở dạng được làm khô.', en: '(b) In heading 30.01 when dried.' },
      { type: 'list', vi: '(c) Vào Chương 2 khi thích hợp dùng làm thức ăn cho người, tuy nhiên phân loại vào nhóm 05.11 nếu không thích hợp dùng làm thức ăn cho người.', en: '(c) In Chapter 2 when suitable for human consumption, but in heading 05.11 if unfit for human consumption.' },
      { 
        type: 'paragraph', 
        vi: 'Phụ phẩm sau giết mổ nêu tại đoạn (4) được phân loại vào Chương 2 khi thích hợp dùng làm thức ăn cho người hoặc thường vào nhóm 05.11 hoặc Chương 41 nếu không thích hợp dùng làm thức ăn cho người.', 
        en: 'The offal referred to in paragraph (4) is clasisfied in Chapter 2 when suitable for human consumption or generally in heading 05.11 or Chapter 41 if unfit for human consumption.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Ruột, bong bóng và dạ dày của động vật (trừ của cá), có hoặc không ăn được, được phân loại vào nhóm 05.04 .', 
        en: 'Guts, bladders and stomachs of animals (other than fish), whether or not edible, are classified in heading 05.04.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Mỡ động vật để riêng bị loại trừ ( Chương 15 ) (trừ mỡ lợn không dính nạc và mỡ gia cầm, chưa nấu chảy hoặc chiết xuất cách khác, chúng được phân loại vào nhóm 02.09 ngay cả khi chỉ thích hợp dùng trong công nghiệp), nhưng mỡ dính vào thân thịt hoặc dính vào thịt được xem như là một phần của thịt.', 
        en: 'Animal fat presented separately is excluded (Chapter 15) (except in the case of pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, which fall in heading 02.09 even if fit only for industrial use), but fat presented in the carcass or adhering to meat is treated as forming part of the meat.' 
      },
      
      { type: 'heading', vi: 'Phân biệt giữa thịt và phụ phẩm dạng thịt sau giết mổ trong Chương này và những sản phẩm trong Chương 16.', en: 'Distinction between meat and meat offal of this Chapter and those of Chapter 16.' },
      { type: 'paragraph', vi: 'Chương này bao gồm thịt và phụ phẩm dạng thịt sau giết mổ chỉ ở các dạng sau, dù trước đó chúng đã hoặc chưa được tráng nước sôi hoặc xử lý tương tự, nhưng không làm chín hẳn:', en: 'This Chapter covers meat and meat offal in the following states only, whether or not they have been previously scalded or similarly treated but not cooked:' },
      { type: 'list', vi: '(1) Tươi (bao gồm thịt và phụ phẩm dạng thịt sau giết mổ, được đóng gói cùng với muối nhằm bảo quản tạm thời trong khi vận chuyển).', en: '(1) Fresh (including meat and meat offal, packed with salt as a temporary preservative during transport).' },
      { type: 'list', vi: '(2) Được ướp lạnh, tức là làm lạnh thông thường đến khoảng 0°C, không dẫn đến đông lạnh.', en: '(2) Chilled, that is reduced in temperature generally to around 0 °C, without being frozen.' },
      { type: 'list', vi: '(3) Được đông lạnh, tức là làm lạnh dưới điểm đóng băng của sản phẩm cho đến khi đông lạnh toàn phần.', en: '(3) Frozen, that is, cooled to below the product\'s freezing point until it is frozen throughout.' },
      { type: 'list', vi: '(4) Được muối, ngâm nước muối, làm khô hoặc hun khói.', en: '(4) Salted, in brine, dried or smoked.' },
      { type: 'paragraph', vi: 'Thịt và phụ phẩm dạng thịt sau giết mổ, ướp ít đường hoặc tưới nước đường cũng thuộc Chương này.', en: 'Meat and meat offal, slightly sprinkled with sugar or with an aqueous solution of sugar are also classified in this Chapter.' },
      { 
        type: 'paragraph', 
        vi: 'Thịt và phụ phẩm dạng thịt sau giết mổ ở dạng như đã liệt kê từ Mục (1) đến (4) ở trên vẫn được phân loại vào Chương này dù chúng có được làm mềm bằng các enzyme phân giải protein (ví dụ papain) hoặc được cắt, chặt hoặc xay (nghiền) hay không. Thêm vào đó, sự pha trộn hoặc kết hợp các sản phẩm thuộc các nhóm khác nhau của Chương này (ví dụ thịt gia cầm thuộc nhóm 02.07 được bọc mỡ lợn thuộc nhóm 02.09) cũng thuộc Chương này.', 
        en: 'Meat and meat offal in the states referred to in Items (1) to (4) above remain classified in this Chapter whether or not they have undergone tenderising treatment with proteolytic enzymes (e.g., papain) or have been cut, chopped or minced (ground). In addition, mixtures or combinations of products of different headings of the Chapter (e.g., poultry meat of heading 02.07 covered with pig fat of heading 02.09) remain classified in this Chapter.' 
      },
      { type: 'paragraph', vi: 'Thịt và phụ phẩm dạng thịt sau giết mổ không thuộc bất cứ nhóm nào của Chương này được phân loại vào Chương 16 , ví dụ:', en: 'Meat and meat offal not falling in any heading of this Chapter are classified in Chapter 16 . e.g. :' },
      { type: 'list', vi: '(a) Xúc xích hoặc sản phẩm tương tự, chín hoặc chưa chín ( nhóm 16.01 )', en: '(a) Sausages and similar products, whether or not cooked (heading 16.01).' },
      { type: 'list', vi: '(b) Thịt và phụ phẩm dạng thịt được làm chín bằng bất cứ cách nào (luộc, hấp, nướng, rán hoặc quay), hoặc được chế biến hoặc bảo quản bởi bất cứ phương pháp nào không nêu trong Chương này, bao gồm cả thịt và phụ phẩm dạng thịt chỉ bao bột hoặc vụn bánh mì, thêm nấm hoặc ướp gia vị (ví dụ: hạt tiêu và muối), bao gồm cả patê và patê gan (nhóm 16.02).', en: '(b) Meat and meat offal cooked in any way (boiled, steamed, grilled, fried or roasted), or otherwise prepared or preserved by any process not provided for in this Chapter, including those merely covered with batter or bread crumbs, truffled or seasoned (e.g., with pepper and salt), as well as liver pastés and patés ( heading 16.02 ).' },
      { type: 'paragraph', vi: 'Chương này cũng bao gồm thịt và phụ phẩm dạng thịt thích hợp dùng làm thức ăn cho người, dù được nấu chín hoặc chưa chín, ở dạng bột mịn hoặc bột thô.', en: 'This Chapter also includes meat and meat offal suitable for human consumption, whether or not cooked, in the form of flour or meal.' },
      { 
        type: 'paragraph', 
        vi: 'Cần lưu ý là thịt và phụ phẩm dạng thịt sau giết mổ trong Chương này vẫn được phân loại vào Chương này ngay cả khi được đóng bao bì kín khí (ví dụ: thịt làm khô đựng trong hộp). Tuy nhiên, trong hầu hết các trường hợp, các sản phẩm đóng gói bằng cách này, được phân loại vào Chương 16 , nếu chúng đã được chế biến hoặc bảo quản khác với những phương pháp nêu tại các nhóm của Chương này.', 
        en: 'It should be noted that meat and meat offal of this Chapter remain classified here even if put up in airtight packings (e.g., dried meat in cans). In most cases, however, products put up in these packings have been prepared or preserved otherwise than as provided for in the headings of this Chapter and, accordingly, are classified in Chapter 16.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Tương tự, thịt và các phụ phẩm dạng thịt sau giết mổ của Chương này vẫn được phân loại vào Chương này (ví dụ: thịt tươi hoặc ướp lạnh của động vật họ trâu bò) khi chúng được đóng gói bằng phương pháp Đóng gói điều chỉnh không khí- Modified Atmospheric Packaging (MAP). Trong phương pháp MAP, không khí bao quanh sản phẩm được thay đổi hay kiểm soát (ví dụ bằng cách loại bỏ hoặc giảm hàm lượng oxy và thay bằng hay làm tăng hàm lượng nitơ hoặc carbon dioxide).', 
        en: 'Similarly, meat and meat offal of this Chapter remain classified here (e.g., fresh or chilled meat of bovine animals) when subjected to packaging by means of a Modified Atmospheric Packaging (MAP) process. In a MAP process the atmosphere surrounding the product is altered or controlled (e.g., by removing or reducing the oxygen content and replacing it with or increasing the nitrogen or carbon dioxide content).' 
      },
      
      { type: 'heading', vi: 'Chú giải phân nhóm. ', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Có xương', en: 'With bone in' },
      { 
        type: 'paragraph', 
        vi: 'Thuật ngữ “có xương” nghĩa là thịt với tất cả xương nguyên vẹn, cũng như thịt có một số hoặc một phần xương bị lọc bỏ (ví dụ: thịt mông đùi (hams) đã rút xương ống và rút một nửa xương mông đùi). Thuật ngữ này không bao gồm các sản phẩm có xương bị lọc ra và sau đó được nhồi lại vì những xương đó không còn nối liền với mô thịt.', 
        en: 'The expression “with bone in” means meat with all bones intact, as well as meat where some or part of the bones have been removed (e.g., shankless and semi-boneless hams). This expression does not cover products where the bones have been removed and thereafter reinserted so that they are no longer connected to the meat tissues.' 
      },

      { type: 'heading', vi: '02.01 - Thịt của động vật họ trâu bò, tươi hoặc ướp lạnh.', en: '02.01 - Meat of bovine animals, fresh or chilled.' },
      { type: 'list', vi: '0201.10 - Thịt cả con và nửa con', en: '0201.10 - Carcasses and half-carcasses' },
      { type: 'list', vi: '0201.20 - Thịt pha có xương khác', en: '0201.20 - Other cuts with bone in' },
      { type: 'list', vi: '0201.30 - Thịt lọc không xương', en: '0201.30 - Boneless' },
      { type: 'paragraph', vi: 'Nhóm này gồm thịt tươi hoặc ướp lạnh của động vật họ trâu bò nuôi hoặc hoang thuộc nhóm 01.02.', en: 'This heading covers fresh or chilled meat of domestic or wild bovine animals of heading 01.02.' },

      { type: 'heading', vi: '02.02 - Thịt của động vật họ trâu bò, đông lạnh.', en: '02.02 - Meat of bovine animals, frozen.' },
      { type: 'list', vi: '0202.10 - Thịt cả con và nửa con', en: '0202.10 - Carcasses and half-carcasses' },
      { type: 'list', vi: '0202.20 - Thịt pha có xương khác', en: '0202.20 - Other cuts with bone in' },
      { type: 'list', vi: '0202.30 - Thịt lọc không xương', en: '0202.30 - Boneless' },
      { type: 'paragraph', vi: 'Nhóm này gồm thịt đông lạnh của động vật họ trâu bò nuôi hoặc hoang thuộc nhóm 01.02.', en: 'This heading covers frozen meat of domestic or wild bovine animals of heading 01.02.' },

      { type: 'heading', vi: '02.03 - Thịt lợn, tươi, ướp lạnh hoặc đông lạnh.', en: '02.03 - Meat of swine, fresh, chilled or frozen.' },
      { type: 'paragraph', vi: '- Tươi hoặc ướp lạnh:', en: '- Fresh or chilled :' },
      { type: 'list', vi: '0203.11 - - Thịt cả con và nửa con', en: '0203.11 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0203.12 - - Thịt mông đùi (hams), thịt vai và các mảnh của chúng, có xương', en: '0203.12 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0203.19 - - Loại khác', en: '0203.19 - - Other' },
      { type: 'paragraph', vi: '- Đông lạnh:', en: '- Frozen:' },
      { type: 'list', vi: '0203.21 - - Thịt cả con và nửa con', en: '0203.21 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0203.22 - - Thịt mông đùi (hams), thịt vai và các mảnh của chúng, có xương', en: '0203.22 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0203.29 - - Loại khác', en: '0203.29 - - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm thịt tươi, ướp lạnh hoặc đông lạnh của lợn nuôi hoặc hoang (ví dụ: lợn lòi). Nhóm này gồm thịt ba chỉ và các loại thịt tương tự có tỷ lệ mỡ giắt cao và mỡ tạo thành lớp dính với thịt.', 
        en: 'This heading covers fresh, chilled or frozen meat of pigs and other swine, whether domestic or wild (e.g., wild boars). The heading includes streaky pork and similar meats interlarded with a high proportion of fat, and fat with an adhering layer of meat.' 
      },

      { type: 'heading', vi: '02.04 - Thịt cừu hoặc dê, tươi, ướp lạnh hoặc đông lạnh (+).', en: '02.04 - Meat of sheep or goats, fresh, chilled or frozen (+).' },
      { type: 'list', vi: '0204.10 - Thịt cừu non cả con và nửa con, tươi hoặc ướp lạnh', en: '0204.10 - Carcasses and half-carcasses of lamb, fresh or chilled' },
      { type: 'paragraph', vi: '- Thịt cừu khác, tươi hoặc ướp lạnh:', en: '- Other meat of sheep, fresh or chilled :' },
      { type: 'list', vi: '0204.21 - - Thịt cả con và nửa con', en: '0204.21 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0204.22 - - Thịt pha có xương khác', en: '0204.22 - - Other cuts with bone in' },
      { type: 'list', vi: '0204.23 - - Thịt lọc không xương', en: '0204.23 - - Boneless' },
      { type: 'list', vi: '0204.30 - Thịt cừu non, cả con và nửa con, đông lạnh', en: '0204.30 - Carcasses and half-carcasses of lamb, frozen' },
      { type: 'paragraph', vi: '- Thịt cừu khác, đông lạnh:', en: '- Other meat of sheep, frozen :' },
      { type: 'list', vi: '0204.41 - - Thịt cả con và nửa con', en: '0204.41 - - Carcasses and half-carcasses' },
      { type: 'list', vi: '0204.42 - - Thịt pha có xương khác', en: '0204.42 - - Other cuts with bone in' },
      { type: 'list', vi: '0204.43 - - Thịt lọc không xương', en: '0204.43 - - Boneless' },
      { type: 'list', vi: '0204.50 - Thịt dê', en: '0204.50 - Meat of goats' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm thịt tươi, ướp lạnh hoặc đông lạnh của cừu (cừu đực, cừu cái và cừu non), dê hoặc dê non, nuôi hoặc hoang.', en: 'This heading covers fresh, chilled or frozen meat of sheep (rams, ewes and lambs), goats or kids, whether domestic or wild.' },
      
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0204.10 và 0204.30', en: 'Subheadings 0204.10 and 0204.30' },
      { 
        type: 'paragraph', 
        vi: 'Theo mục đích của các phân nhóm 0204.10 và 0204.30, thịt cừu non là thịt từ một động vật thuộc loài cừu không quá 12 tháng tuổi. Thịt đó là thịt thớ mịn và kết cấu khít, màu hồng đậm và bề mặt mịn. Cân nặng cả thân thịt không quá 26kg.', 
        en: 'For the purposes of subheadings 0204.10 and 0204.30, meat of lamb is meat derived from an animal of the ovine species not more than 12 months of age. The flesh is of fine grain and texture, pinkish-red in colour and of velvety appearance. The weight of carcasses does not exceed 26 kg.' 
      },

      { type: 'heading', vi: '02.05 - Thịt ngựa, lừa, la, tươi, ướp lạnh hoặc đông lạnh.', en: '02.05 - Meat of horses, asses, mules or hinnies, fresh, chilled or frozen.' },
      { type: 'paragraph', vi: 'Nhóm này gồm thịt tươi, ướp lạnh hoặc đông lạnh của những động vật mà khi còn sống được phân loại vào nhóm 01.01.', en: 'This heading covers fresh, chilled or frozen meat of those animals which, when live, are classified in heading 01.01.' },

      { type: 'heading', vi: '02.06 - Phụ phẩm ăn được sau giết mổ của lợn, động vật họ trâu bò, cừu, dê, ngựa, la, lừa, tươi, ướp lạnh hoặc đông lạnh.', en: '02.06 - Edible offal of bovine animals, swine, sheep, goats, horses, asses, mules or hinnies, fresh, chilled or frozen.' },
      { type: 'list', vi: '0206.10 - Của động vật họ trâu bò, tươi hoặc ướp lạnh', en: '0206.10 - Of bovine animals, fresh or chilled' },
      { type: 'paragraph', vi: '- Của động vật họ trâu bò, đông lạnh:', en: '- Of bovine animals, frozen :' },
      { type: 'list', vi: '0206.21 - - Lưỡi', en: '0206.21 - -Tongues' },
      { type: 'list', vi: '0206.22 - - Gan', en: '0206.22 - - Livers' },
      { type: 'list', vi: '0206.29 - - Loại khác', en: '0206.29 - - Other' },
      { type: 'list', vi: '0206.30 - Của lợn, tươi hoặc ướp lạnh', en: '0206.30 - Of swine, fresh or chilled ' },
      { type: 'paragraph', vi: '- Của lợn, đông lạnh:', en: '- Of swine, frozen :' },
      { type: 'list', vi: '0206.41 - - Gan', en: '0206.41 - - Livers' },
      { type: 'list', vi: '0206.49 - - Loại khác', en: '0206.49 - - Other' },
      { type: 'list', vi: '0206.80 - Loại khác, tươi hoặc ướp lạnh', en: '0206.80 - Other, fresh or chilled' },
      { type: 'list', vi: '0206.90 - Loại khác, đông lạnh', en: '0206.90 - Other, frozen' },
      { 
        type: 'paragraph', 
        vi: 'Phụ phẩm ăn được sau giết mổ thuộc nhóm này bao gồm: đầu và những bộ phận của đầu (gồm cả tai), chân, đuôi, tim, vú, gan, bầu dục, ức, tụy, óc, phổi, cổ họng, thịt hông (thick skirts, thin skirts), lá lách, lưỡi, màng ruột, tuỷ sống, da ăn được, cơ quan sinh sản (ví dụ: dạ con, buồng trứng và tinh hoàn), tuyến giáp, tuyến yên. Về những nguyên tắc dùng để phân loại các phụ phẩm ăn được, xem Chú giải Tổng quát của Chương này.', 
        en: 'The edible offal of this heading includes the following : heads and cuts thereof (including ears), feet, tails, hearts, udders, livers, kidneys, sweetbreads (thymus glands and pancreas), brains, lungs, throats, thick skirts, thin skirts, spleens, tongues, caul, spinal cords, edible skin, reproductive organs (e.g., uteri, ovaries and testes), thyroid glands, pituitary glands. For the principles to be applied for the classification of offal, see the General Explanatory Note to this Chapter.' 
      },

      { type: 'heading', vi: '02.07 - Thịt và phụ phẩm ăn được sau giết mổ, của gia cầm thuộc nhóm 01.05, tươi, ướp lạnh hoặc đông lạnh.', en: '02.07 - Meat and edible offal, of the poultry of heading 01.05 , fresh, chilled or frozen.' },
      { type: 'paragraph', vi: '- Của gà thuộc loài Gallus domesticus :', en: '- Of fowls of the species Gallus domesticus :' },
      { type: 'list', vi: '0207.11 - - Chưa chặt mảnh, tươi hoặc ướp lạnh', en: '0207.11 - - Not cut in pieces, fresh or chilled' },
      { type: 'list', vi: '0207.12 - - Chưa chặt mảnh, đông lạnh', en: '0207.12 - - Not cut in pieces, frozen' },
      { type: 'list', vi: '0207.13 - - Đã chặt mảnh và phụ phẩm sau giết mổ, tươi hoặc ướp lạnh', en: '0207.13 - - Cuts and offal, fresh or chilled' },
      { type: 'list', vi: '0207.14 - - Đã chặt mảnh và phụ phẩm sau giết mổ, đông lạnh', en: '0207.14 - - Cuts and offal, frozen ' },
      { type: 'paragraph', vi: '- Của gà tây:', en: '- Of turkeys:' },
      { type: 'list', vi: '0207.24 - - Chưa chặt mảnh, tươi hoặc ướp lạnh', en: '0207.24 - - Not cut in pieces, fresh or chilled' },
      { type: 'list', vi: '0207.25 - - Chưa chặt mảnh, đông lạnh', en: '0207.25 - - Not cut in pieces, frozen' },
      { type: 'list', vi: '0207.26 - - Đã chặt mảnh và phụ phẩm sau giết mổ, tươi hoặc ướp lạnh', en: '0207.26 - - Cuts and offal, fresh or chilled' },
      { type: 'list', vi: '0207.27 - - Đã chặt mảnh và phụ phẩm sau giết mổ, đông lạnh', en: '0207.27 - Cuts and offal, frozen ' },
      { type: 'paragraph', vi: '- Của vịt, ngan:', en: '- Of ducks :' },
      { type: 'list', vi: '0207.41 - - Chưa chặt mảnh, tươi hoặc ướp lạnh', en: '0207.41 - Not cut in pieces, fresh or chilled' },
      { type: 'list', vi: '0207.42 - - Chưa chặt mảnh, đông lạnh', en: '020742 - Not cut in pieces, frozen' },
      { type: 'list', vi: '0207.43 - - Gan béo, tươi hoặc ướp lạnh', en: '020743 - Fatty livers, fresh or chilled' },
      { type: 'list', vi: '0207.44 - - Loại khác, tươi hoặc ướp lạnh', en: '0207.44 - Other, fresh or chilled' },
      { type: 'list', vi: '0207.45 - - Loại khác, đông lạnh', en: '0207.45 - Other, frozen' },
      { type: 'paragraph', vi: '- Của ngỗng:', en: 'Of geese :' },
      { type: 'list', vi: '0207.51 - - Chưa chặt mảnh, tươi hoặc ướp lạnh', en: '0207.51 - Not cut in pieces, fresh or chilled' },
      { type: 'list', vi: '0207.52 - - Chưa chặt mảnh, đông lạnh', en: '0207.52 - Not cut in pieces, frozen' },
      { type: 'list', vi: '0207.53 - - Gan béo, tươi hoặc ướp lạnh', en: '0207.53 - Fatty livers, fresh or chilled' },
      { type: 'list', vi: '0207.54 - - Loại khác, tươi hoặc ướp lạnh', en: '0207.54 - Other, fresh or chilled' },
      { type: 'list', vi: '0207.55 - - Loại khác, đông lạnh', en: '0207.55 - - Other, frozen ' },
      { type: 'list', vi: '0207.60 - Của gà lôi', en: '0207.60 - Of guinea fowls' },
      { type: 'paragraph', vi: 'Nhóm này chỉ bao gồm thịt và phụ phẩm ăn được sau giết mổ, tươi, ướp lạnh hoặc đông lạnh của gia cầm nuôi mà khi sống, được phân loại vào nhóm 01.05.', en: 'This heading covers only fresh, chilled or frozen meat and edible offal of domestic poultry which, when live, are classified in heading 01.05.' },
      { 
        type: 'paragraph', 
        vi: 'Những phụ phẩm ăn được sau giết mổ của gia cầm chiếm phần quan trọng trong thương mại quốc tế là gan gà, gan ngỗng hoặc gan vịt, ngan. Những loại này bao gồm cả "gan béo" của ngỗng hoặc của vịt, ngan có thể phân biệt được với những loại gan khác vì chúng to hơn, nặng hơn, đặc hơn và nhiều mỡ hơn; màu của “gan béo" thay đổi từ be trắng sang màu hạt dẻ nhạt, trong khi những loại gan khác nói chung có màu đỏ đậm hoặc nhạt.', 
        en: 'The poultry offal of greatest importance in international trade is chicken, goose or duck livers. These include “fatty livers” of geese or ducks which may be distinguished from other livers by the fact that they are much larger and heavier, firmer and richer in fat; their colour varies from whitish beige to light chestnut, while the other livers are in general of a dark or light reddish colour.' 
      },

      { type: 'heading', vi: '02.08 - Thịt và phụ phẩm dạng thịt ăn được sau giết mổ của động vật khác, tươi, ướp lạnh hoặc đông lạnh.', en: '02.08 - Other meat and edible meat offal, fresh, chilled or frozen.' },
      { type: 'list', vi: '0208.10 - Của thỏ hoặc thỏ rừng', en: '0208.10 - Of rabbits or hares' },
      { type: 'list', vi: '0208.30 - Của bộ động vật linh trưởng', en: '0208.30 - Of primates' },
      { type: 'list', vi: '0208.40 - Của cá voi, cá heo chuột và cá heo (động vật có vú thuộc bộ Cetacea); của lợn biển và cá nược (động vật có vú thuộc bộ Sirenia); của hải cẩu, sư tử biển và con moóc (hải mã) (động vật có vú thuộc phân bộ Pinnipedia)', en: '0208.40 - Of whales, dolphins and porpoises (mammals of the order Cetacea); of manatees and dugongs (mammals of the order Sirenia): of seals, sea lions and walruses (mammals of the suborder Pinnipedia)' },
      { type: 'list', vi: '0208.50 - Của loài bò sát (kể cả rắn và rùa)', en: '0208.50 - Of reptiles (including snakes and turtles)' },
      { type: 'list', vi: '0208.60 - Của lạc đà và họ lạc đà ( Camelidae )', en: '0208.60 - Of camels and other camelids ( Camelidae )' },
      { type: 'list', vi: '0208.90 - Loại khác', en: '0208.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm thịt và phụ phẩm dạng thịt sau giết mổ của động vật thuộc nhóm 01.06, miễn là chúng thích hợp dùng làm thức ăn cho người (ví dụ, thỏ, thỏ rừng, ếch, tuần lộc, hải ly, cá voi, rùa).', en: 'This heading covers meat and meat offal of the animals classified in heading 01.06, provided that they are suitable for human consumption (e.g., rabbit, hare, frog, reindeer, beaver, whale, turtle).' },

      { type: 'heading', vi: '02.09 - Mỡ lợn không dính nạc và mỡ gia cầm, chưa nấu chảy hoặc chiết xuất cách khác, tươi, ướp lạnh, đông lạnh, muối, ngâm nước muối, làm khô hoặc hun khói.', en: '02.09 - Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, fresh, chilled, frozen, salted, in brine, dried or smoked.' },
      { type: 'list', vi: '0209.10 - Của lợn', en: '0209.10 - Of pigs' },
      { type: 'list', vi: '0209.90 - Loại khác', en: '0209.90 - Other' },
      { 
        type: 'paragraph', 
        vi: 'Mỡ lợn của nhóm này được giới hạn là mỡ không dính nạc; mỡ như vậy thuộc nhóm này ngay cả khi chỉ thích hợp dùng cho công nghiệp. Thịt ở các dạng ăn được nói chung bị loại trừ khỏi nhóm này (ví dụ, thịt lợn ba chỉ và các loại thịt tương tự có tỷ lệ mỡ giắt cao và mỡ tạo thành lớp dính với thịt tuỳ trường hợp được phân loại vào nhóm 02.03 hoặc 02.10 ).', 
        en: 'The pig fat of this heading is restricted to fat free of lean meat; such fat falls in the heading even if suitable only for industrial use. Meat in forms commonly eaten as such is excluded (heading 02.03 or 02.10 as the case may be, for example, streaky pork and similar meals interlarded with a high proportion of fat, and fat with an adhering layer of meat).' 
      },
      { type: 'paragraph', vi: 'Đặc biệt nhóm này bao gồm mỡ chủ yếu ở xung quanh những bộ phận nội tạng của lợn mà khi được nấu chảy hoặc chiết xuất cách khác thì được phân loại vào nhóm 15.01 .', en: 'This heading includes, in particular, the fat found mainly round the pig’s viscera and which, when rendered, or otherwise extracted, is classified in heading 15.01.' },
      { type: 'paragraph', vi: 'Mỡ của những động vật có vú ở biển bị loại trừ ( Chương 15 ).', en: 'Fat from marine mammals is excluded (Chapter 15).' },

      { type: 'heading', vi: '02.10 - Thịt và phụ phẩm dạng thịt ăn được sau giết mổ, muối, ngâm nước muối, làm khô hoặc hun khói; bột mịn và bột thô ăn được làm từ thịt hoặc phụ phẩm dạng thịt sau giết mổ.', en: '02.10 - Meat and edible meat offal, salted, in brine, dried or smoked; edible flours and meals of meat or meat offal.' },
      { type: 'paragraph', vi: '- Thịt lợn:', en: '- Meat of swine :' },
      { type: 'list', vi: '0210.11 - - Thịt mông đùi (hams), thịt vai và các mảnh của chúng, có xương', en: '0210.11 - - Hams, shoulders and cuts thereof, with bone in' },
      { type: 'list', vi: '0210.12 - - Thịt dọi (ba chỉ) và các mảnh của chúng', en: '0210.12 - - Bellies (streaky) and cuts thereof' },
      { type: 'list', vi: '0210.19 - - Loại khác', en: '0210.19 - - Other' },
      { type: 'list', vi: '0210.20 - Thịt động vật họ trâu bò', en: '0210.20 - Meat of bovine animals' },
      { type: 'paragraph', vi: '- Loại khác, kể cả bột mịn và bột thô ăn được làm từ thịt hoặc phụ phẩm dạng thịt sau giết mổ:', en: '- Other, including edible flours and meals of meat or meat offal:' },
      { type: 'list', vi: '0210.91 - - Của bộ động vật linh trưởng', en: '0210.91 - - Of primates' },
      { type: 'list', vi: '0210.92 - - Của cá voi, cá heo chuột và cá heo (động vật có vú thuộc bộ Cetacea); của lợn biển và cá nược (động vật có vú thuộc bộ Sirenia); của hải cẩu, sư tử biển và con moóc (hải mã) (động vật có vú thuộc phân bộ Pinnipedia)', en: '0210.92 - - Of whales, dolphins and porpoises (mammals of the order Cetacea); of manatees and dugongs (mammals of the order Sirenia); of seals, sea lions and walruses (mammals of the suborder Pinnipedia)' },
      { type: 'list', vi: '0210.93 - - Của loài bò sát (kể cả rắn và rùa)', en: '0210.93 - - Of reptiles (including snakes and turtles)' },
      { type: 'list', vi: '0210.99 - - Loại khác', en: '0210.99 - - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này áp dụng cho tất cả các loại thịt và phụ phẩm dạng thịt ăn được sau giết mổ đã được chế biến theo như mô tả trong nhóm, ngoại trừ mỡ lợn không dính nạc và mỡ gia cầm, chưa nấu chảy hoặc chưa chiết xuất cách khác ( nhóm 02.09 ). Nhóm này bao gồm cả thịt ba chỉ và các loại thịt tương tự có tỷ lệ mỡ giắt cao và mỡ tạo thành lớp dính với thịt, miễn là chúng được chế biến theo như mô tả trong nhóm.', 
        en: 'This heading applies to all kinds of meat and edible meat offal which have been prepared as described in the heading, other than pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted (heading 02.09) . The heading includes streaky pork and similar meats interlarded with a high proportion of fat, and fat with an adhering layer of meat, provided they have been prepared as described in the heading.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Thịt muối, thịt làm khô (kể cả bằng cách làm mất nước hoặc làm khô bằng đông lạnh) hoặc hun khói (như thịt lợn muối xông khói, thịt mông đùi (hams) xông khói, thịt vai xông khói) vẫn được phân loại trong nhóm này khi chúng được nhồi trong ruột, dạ dày, bong bóng, da hoặc vỏ bọc tương tự (tự nhiên hoặc nhân tạo), với điều kiện chúng chưa được chặt nhỏ hoặc băm nhỏ và kết hợp với thành phần khác trước khi được đặt trong vỏ bọc ( nhóm 16.01 ).', 
        en: 'Salted, dried (including dehydrated or freeze-dried) or smoked meat (e.g., bacon, ham, shoulder) remains classified in this heading if it has been enclosed in guts, stomachs, bladders, skins or similar casings (natural or artificial), provided that it has not been previously chopped or minced and combined with other ingredients (heading 16.01).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Bột mịn và bột thô từ thịt hoặc phụ phẩm dạng thịt ăn được sau giết mổ cũng được phân loại trong nhóm này; bột mịn và bột thô từ thịt và phụ phẩm dạng thịt sau giết mổ không thích hợp dùng làm thức ăn cho người (ví dụ làm thức ăn gia súc) bị loại trừ (nhóm 23.01 ).', 
        en: 'Edible flours and meals of meat or meat offal also fall in this heading: flours and meals of meat or meat offal unfit for human consumption (e.g., for feeding animals) are excluded (heading 23.01).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Chú giải của nhóm 02.06 áp dụng cho các phụ phẩm dạng thịt ăn được sau giết mổ của nhóm này với những sửa đổi chi tiết thích hợp.', 
        en: 'The provisions of Explanatory Note to heading 02.06 apply, mutatis mutandis , to edible meat offal of this heading.' 
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
      { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I : LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
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
      { type: 'heading', vi: 'Chương 3: Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác', en: 'Chapter 3 : Fish and crustaceans, molluscs and other aquatic invertebrates' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1.- Chương này không bao gồm:', en: '1.- This Chapter does not cover:' },
      { type: 'list', vi: '(a) Động vật có vú thuộc nhóm 01.06;', en: '(a) Mammals of heading 01.06;' },
      { type: 'list', vi: '(b) Thịt của động vật có vú thuộc nhóm 01.06 (nhóm 02.08 hoặc 02.10);', en: '(b) Meat of mammals of heading 01.06 (heading 02.08 or 02.10);' },
      { 
        type: 'list', 
        vi: '(c) Cá (kể cả gan, sẹ và bọc trứng cá) hoặc động vật giáp xác, động vật thân mềm hay động vật thuỷ sinh không xương sống khác, đã chết và không thích hợp dùng làm thức ăn cho người hoặc vì lý do chủng loại hoặc vì trạng thái của chúng (Chương 5); các loại bột mịn, bột thô hoặc viên làm từ cá hoặc động vật giáp xác, động vật thân mềm hoặc động vật thuỷ sinh không xương sống khác, không thích hợp dùng làm thức ăn cho người (nhóm 23.01); hoặc', 
        en: '(c) Fish (including livers, roes and milt thereof) or crustaceans, molluscs or other aquatic invertebrates, dead and unfit or unsuitable for human consumption by reason of either their species or their condition (Chapter 5); flours, meals or pellets of fish or of crustaceans, molluscs or other aquatic invertebrates, unfit for human consumption (heading 23.01); or' 
      },
      { type: 'list', vi: '(d) Trứng cá tầm muối hoặc các sản phẩm thay thế trứng cá tầm muối từ trứng cá (nhóm 16.04).', en: '(d) Caviar or caviar substitutes prepared from fish eggs (heading 16.04).' },
      { type: 'paragraph', vi: '2.- Trong Chương này khái niệm "viên" (pellets) có nghĩa là các sản phẩm được liên kết hoặc bằng cách nén trực tiếp hoặc bằng cách cho thêm một lượng nhỏ chất kết dính.', en: '2. - In this Chapter the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a small quantity of binder.' },
      { type: 'paragraph', vi: '3.- Các nhóm từ 03.05 đến 03.08 không bao gồm bột mịn, bột thô và viên, thích hợp dùng làm thức ăn cho người (nhóm 03.09).', en: '3. - Headings 03.05 to 03.08 do not cover flours, meals and pellets, fit for human consumption (heading 03.09).' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm tất cả các loại cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, sống hoặc chết, dùng làm thức ăn trực tiếp hoặc dùng trong công nghiệp (đóng hộp v.v...), để cho đẻ, cho nuôi làm cảnh, v.v..., trừ cá chết (kể cả gan, sẹ và bọc trứng cá), động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác đã chết không phù hợp hoặc không thích hợp dùng làm thức ăn cho người vì lý do về chủng loại hoặc vì trạng thái của chúng (Chương 5).', 
        en: 'This Chapter covers all fish and crustaceans, molluscs and other aquatic invertebrates, whether live or dead, presented for direct consumption, or for industrial purposes (canning, etc.), for spawning, for aquaria, etc., with the exception of dead fish (including livers and roes thereof), crustaceans, molluscs and other aquatic invertebrates which are unfit or unsuitable for human consumption by reason of either their species or their condition (Chapter 5).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Thuật ngữ “ướp lạnh" là nhiệt độ của sản phẩm thường được hạ đến khoảng 0°C nhưng không làm đông lạnh sản phẩm. Thuật ngữ "đông lạnh" có nghĩa là một sản phẩm bị làm lạnh xuống dưới điểm đông lạnh cho đến khi đông lạnh toàn phần.', 
        en: 'The term “chilled ” means that the temperature of a product has been reduced, generally to around 0 °C, without the product being frozen. The expression “frozen” means that the product has been cooled to below the product’s freezing point until it is frozen throughout.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Chương này cũng bao gồm sẹ và bọc trứng cá dùng làm thức ăn, chưa được chế biến hay bảo quản, hoặc chỉ được chế biến và bảo quản bằng những cách nêu trong Chương này. Sẹ và bọc trứng cá dùng làm thức ăn được chế biến hoặc bảo quản bằng cách khác, hoặc những loại thích hợp để dùng ngay như trứng cá tầm muối và sản phẩm thay thế trứng cá tầm muối được phân loại vào nhóm 16.04 .', 
        en: 'This Chapter also covers edible fish roes and milt, not prepared or preserved, or prepared or preserved only by processes provided for in this Chapter. Otherwise prepared or preserved edible roes and milt, or those suitable for immediate consumption as caviar or caviar substitutes are classified in heading 16.04.' 
      },
      { type: 'heading', vi: 'Phân biệt giữa sản phẩm của Chương này và sản phẩm của Chương 16.', en: 'Distinction between goods of this Chapter and those of Chapter 16.' },
      { 
        type: 'paragraph', 
        vi: 'Chương này chỉ giới hạn đối với cá (kể cả gan, sẹ và bọc trứng cá) và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác ở những dạng được mô tả trong các nhóm của Chương. Theo điều kiện này chúng vẫn được phân loại trong Chương dù chúng đã hoặc chưa được cắt, chặt, xay, nghiền vv... Ngoài ra, những hỗn hợp hoặc phối trộn của các sản phẩm nêu trong những nhóm khác nhau của Chương (ví dụ cá thuộc các nhóm từ 03.02 đến 03.04 phối hợp với động vật giáp xác nhóm 03.06 ) vẫn được phân loại trong Chương này.', 
        en: 'This Chapter is limited to fish (including livers and roes thereof) and crustaceans, molluscs and other aquatic invertebrates in the states described in the headings. Subject to this proviso, they remain classified in the Chapter whether or not they have been cut, chopped, minced, ground, etc. In addition, mixtures or combinations of products of different headings of the Chapter (e.g., fish of headings 03.02 to 03.04 combined with crustaceans of heading 03.06 ) remain classified in this Chapter.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Mặt khác, cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác được phân loại trong Chương 16 nếu chúng được nấu chín hoặc chế biến hoặc bảo quản khác với cách đã nêu trong Chương này (ví dụ: phi-lê cá chỉ bao bột hoặc vụn bánh mỳ, cá chín). Tuy nhiên, cần lưu ý rằng cá hun khói và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác hun khói, mà có thể đã được làm chín trước hoặc trong quá trình hun khói, và động vật giáp xác còn vỏ chỉ mới được hấp hoặc luộc trong nước vẫn được phân loại tương ứng vào nhóm 03.05 , 03.06, 03.07 và 03.08 . Động vật thân mềm chỉ được trụng/ chần nước sôi (scalding) hoặc các dạng sốc nhiệt khác (không đòi hỏi phải nấu chín), cần thiết để mở vỏ hoặc cố định nhuyễn thể trước khi vận chuyển hoặc đông lạnh, cũng vẫn thuộc Chương này. Bột mịn, bột thô và viên chế biến từ cá, động vật giáp xác, động vật thân mềm hoặc động vật thủy sinh không xương sống khác đã chín thì vẫn được phân loại tương ứng vào nhóm 03.09.', 
        en: 'On the other hand, fish and crustaceans, molluscs and other aquatic invertebrates are classified in Chapter 16 if they have been cooked or otherwise prepared or preserved by processes not provided for in this Chapter (e.g., fish fillets merely covered with batter or bread crumbs, cooked fish). It should, however, be noted that smoked fish and smoked crustaceans, molluscs and other aquatic invertebrates, which may have undergone cooking during or before the smoking process, and crustaceans in their shells simply steamed or boiled in water, remain classified in headings 03.05, 03.06, 03.07 and 03.08 , respectively. Molluscs that have been subjected only to scalding or other types of heat shock (which do not entail cooking as such), necessary to open the shell or stabilize the mollusc prior to transportation or freezing, also remain in this Chapter. Flours, meals and pellets obtained from cooked fish and cooked crustaceans, molluscs or other aquatic invertebrates remain classified in heading 03.09.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Lưu ý: Cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác trong Chương này vẫn được phân loại vào đây ngay cả khi chúng được đóng bao bì kín khí (ví dụ cá hồi hun khói đóng hộp). Tuy nhiên, trong hầu hết các trường hợp, sản phẩm đóng trong các loại bao bì này được chế biến hoặc bảo quản khác với các cách nêu trong các nhóm thuộc Chương này sẽ được phân loại vào Chương 16 .', 
        en: 'It should also be noted that fish and crustaceans, molluscs and other aquatic invertebrates of this Chapter remain classified here even if put up in airtight containers (e.g., smoked salmon in cans). In most cases, however, products put up in these packings have been prepared or preserved otherwise than as provided for in the headings of this Chapter, and accordingly fall to be classified in Chapter 16.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Tương tự, cá và động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác của Chương này vẫn được phân loại vào đây (ví dụ: cá tươi hoặc ướp lạnh) khi đóng gói bằng phương pháp Đóng gói điều chỉnh không khí- Modified Atmospheric Packaging (MAP). Trong phương pháp MAP, không khí bao quanh sản phẩm được thay đổi hay kiểm soát (ví dụ bằng cách loại bỏ hoặc giảm hàm lượng oxy và thay bằng hay làm tăng hàm lượng nitơ và carbon dioxide).', 
        en: 'Similarly, fish and crustaceans, molluscs and other aquatic invertebrates of this Chapter remain classified here (e.g., fresh or chilled fish) when subjected to packaging by means of a Modified Atmospheric Packaging (MAP) process. In a MAP process the atmosphere surrounding the product is altered or controlled (e.g., by removing or reducing the oxygen content and replacing it with or increasing the nitrogen or carbon dioxide content).' 
      },
      { type: 'paragraph', vi: 'Ngoài những phần loại trừ đã nêu trên, Chương này cũng không bao gồm : ', en: 'In addition to the exclusions referred to above, the Chapter also excludes :' },
      { type: 'list', vi: '(a) Động vật có vú thuộc nhóm 01.06.', en: '(a) Mammals of heading 01.06 .' },
      { type: 'list', vi: '(b) Thịt của động vật có vú thuộc nhóm 01.06 ( nhóm 02.08 hoặc 02.10 ).', en: '(b) Meat of mammals of heading 01.06 ( heading 02.08 or 02.10 ).' },
      { type: 'list', vi: '(c) Phế liệu của cá và trứng cá không làm thực phẩm (ví dụ: trứng cá tuyết muối dùng làm mồi câu) ( nhóm 05.11 ).', en: '(c) Fish waste and inedible roes (e.g., salted cod roes used as fishing bait) (heading 05.11).' },
      { type: 'list', vi: '(d) Bột mịn, bột thô và viên làm từ cá hoặc động vật giáp xác, động vật thân mềm hoặc động vật thủy sinh không xương sống khác, không thích hợp dùng làm thức ăn cho người ( nhóm 23.01 ).', en: '(d) Flours, meals and pellets of fish or of crustaceans, molluscs or other aquatic invertebrates, unfit for human consumption (heading 23.01).' },

      { type: 'heading', vi: '03.01 - Cá sống (+).', en: '03.01 - Live fish (+).' },
      { type: 'paragraph', vi: '- Cá cảnh:', en: '- Ornamental fish' },
      { type: 'list', vi: '0301.11 - - Cá nước ngọt', en: '0301.11 - - Freshwater' },
      { type: 'list', vi: '0301.19 - - Loại khác', en: '0301.19 - - Other' },
      { type: 'paragraph', vi: '- Cá sống khác:', en: '- Other live fish :' },
      { type: 'list', vi: '0301.91 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0301.91 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0301.92 - - Cá chình ( Anguilla spp. )', en: '0301.92 - - Eels (Anguilla spp.)' },
      { type: 'list', vi: '0301.93 - - Cá chép ( Cyprinus spp. , Carassius spp. , Ctenopharyngodon idellus , Hypophthalmichthys spp ., Cirrhinus spp ., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )', en: '0301.93 - - Carp ( Cyprinus spp. , Carassius spp. , Ctenopharyngodon idellus , Hypophthalmichthys spp ., Cirrhinus spp ., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )' },
      { type: 'list', vi: '0301.94 - - Cá ngừ vây xanh Đại Tây Dương và Thái Bình Dương ( Thunnus thynnus, Thunnus orientalis)', en: '0301.94 - - Atlantic and Pacific bluefin tunas ( Thunnus thunnus, Thunnus orientalis )' },
      { type: 'list', vi: '0301.95 - - Cá ngừ vây xanh phương Nam ( Thunnus maccoyii )', en: '0301.95 - - Southern bluefin tunas ( Thunnus maccoyii )' },
      { type: 'list', vi: '0301.99 - - Loại khác', en: '0301.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại cá sống, không kể công dụng như thế nào (ví dụ cá cảnh).', en: 'This heading covers all live fish, whatever their intended use (e.g., ornamental fish).' },
      { type: 'paragraph', vi: 'Cá thuộc nhóm này thường được chuyên chở trong những thùng chứa thích hợp (bể, thùng cá... ) có thể giữ cá còn sống trong điều kiện tương tự như ở môi trường tự nhiên.', en: 'The fish of this heading are normally transported in suitable containers (aquaria, fish tanks, etc.) in which they can be kept alive in conditions similar to those found in their natural environment.' },
      
      { type: 'heading', vi: 'Chú giải phân nhóm', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0301.11 và 0301.19', en: 'Subheadings 0301.11 and 0301.19' },
      { type: 'paragraph', vi: 'Thuật ngữ “cá cảnh” có nghĩa là cá còn sống được dùng với mục đích trang trí, đặc biệt là nuôi trong bể cảnh vì màu sắc và hình dáng của chúng.', en: 'The expression “ ornamental fish ” means live fish which, because of their colours or shapes, are normally used for ornamental purposes, in particular, in aquaria.' },

      { type: 'heading', vi: '03.02 - Cá, tươi hoặc ướp lạnh, trừ phi-lê cá (fillets) và các loại thịt cá khác thuộc nhóm 03.04 (+).', en: '03.02 - Fish, fresh or chilled, excluding fish fillets and other fish meat of heading 03.04 (+).' },
      { type: 'paragraph', vi: '- Cá hồi, trừ phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- - Salmonidae, excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.11 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0302.11 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0302.13 - - Cá hồi Thái Bình Dương (Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus)', en: '0302.13 - - Pacific salmon (Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou and Oncorhynchus rhodurus)' },
      { type: 'list', vi: '0302.14 - - Cá hồi Đại Tây Dương ( Salmo salar ) và cá hồi sông Đa-nuýp (Hucho hucho )', en: '0302.14 - - Atlantic salmon ( Salmo salar ) and Danube salmon (Hucho hucho )' },
      { type: 'list', vi: '0302.19 - - Loại khác', en: '0302.19 - - Other' },
      { type: 'paragraph', vi: '- Cá bơn (Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae và Citharidae) , trừ phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Flat fish (Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae and Citharidae) , excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.21 - - Cá bơn lưỡi ngựa (Halibut) (Reinhardtius hippoglossoides, Hippoglossus hippoglossus, Hippoglossus stenolepis)', en: '0302.21 - - Halibut (Reinhardtius hippoglossoides, Hippoglossus hippoglossus, Hippoglossus stenolepis)' },
      { type: 'list', vi: '0302.22 - - Cá bơn sao ( Pleuronectes platessa )', en: '0302.22 - - Plaice (Pleuronectes platessa)' },
      { type: 'list', vi: '0302.23 - - Cá bơn sole ( Solea spp. )', en: '0302.23 - - Sole ( Solea spp )' },
      { type: 'list', vi: '0302.24 - - Cá bơn turbot ( Psetta maxima )', en: '0302.24 - - Turbots ( Psetta maxima )' },
      { type: 'list', vi: '0302.29 - - Loại khác', en: '0302.29 - - Other' },
      { type: 'paragraph', vi: '- Cá ngừ đại dương (thuộc giống Thunnus ), cá ngừ vằn (cá ngừ sọc dưa) (Katsuwonus pelamis ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Tunas (of the genus Thunnus ), skipjack tuna (stripe- bellied bonito) ( Katsuwonus pelamis ), excluding edible fish offal of subheadings 0302.91 to 0302.99:' },
      { type: 'list', vi: '0302.31 - - Cá ngừ vây dài (Thunnus alalunga)', en: '0302.31 - - Albacore or longfinned tunas ( Thunnus alalunga )' },
      { type: 'list', vi: '0302.32 - - Cá ngừ vây vàng (Thunnus albacares)', en: '0302.32 - - Yellowfin tunas (Thunnus albacares )' },
      { type: 'list', vi: '0302.33 - - Cá ngừ vằn (cá ngừ sọc dưa) (Katsuwonus pelamis )', en: '0302.33 - - Skipjack tuna (stripe-bellied bonito) ( Katsuwonus pelamis )' },
      { type: 'list', vi: '0302.34 - - Cá ngừ mắt to ( Thunnus obesus )', en: '0302.34 - - Bigeye tunas ( Thunnus obesus )' },
      { type: 'list', vi: '0302.35 - - Cá ngừ vây xanh Đại Tây Dương và Thái Bình Dương ( Thunnus thynnus, Thunnus orientalis )', en: '0302.35 - - Atlantic and Pacific bluefin tunas ( Thunnus thynnus, Thunnus orientalis )' },
      { type: 'list', vi: '0302.36 - - Cá ngừ vây xanh phương Nam ( Thunnus maccoyii )', en: '0302.36 - - Southern bluefin tunas (Thunnus maccoyii)' },
      { type: 'list', vi: '0302.39 - - Loại khác', en: '0302.39 - - Other' },
      { type: 'paragraph', vi: '- Cá trích nước lạnh ( Clupea harengus, Clupea pallasii ), cá cơm (cá trỏng) ( Engraulis spp. ), cá trích dầu ( Sardina pilchardus, Sardinops spp. ), cá trích xương ( Sardinella spp. ), cá trích kê hoặc cá trích cơm ( Sprattus sprattus ), cá nục hoa ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), cá bạc má ( Rastrelliger spp. ), cá thu ( Scomberomorus spp. ), cá nục gai và cá sòng ( Trachurus spp. ), cá khế jacks, cá khế crevalles ( Caranx spp. ), cá giò ( Rachycentron canadum ), cá chim trắng ( Pampus spp. ), cá thu đao ( Cololabis saira ), cá nục ( Decapterus spp. ), cá trứng ( Mallotus villosus ), cá kiếm ( Xiphias gladius ), cá ngừ chấm ( Euthynnus affinis ), cá ngừ ba chấm ( Sarda spp. ), cá cờ marlin, cá cờ lá ( sailfish ), cá cờ spearfish ( Istiophoridae ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Herrings (Clupea harengus, Clupea pallasii), anchovies (Engrauhs spp), sardines (Sardina pilchardus, Sardinops spp.), sardinella (Sardinella spp.). brisling or sprats ( Sprattus sprattus ), mackerel ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), Indian mackerels (Rastrelliger spp.) , seerfishes ( Scomberomorus spp.), jack and horse mackerel ( Trachurus spp ). jacks, erevalles ( Caranx spp .), cobia ( Rachycentron Canadian ), silver pomfrets ( Pampus spp .), Pacific saury ( Cololabis saira ), scads ( Decapterus spp .), capelin ( Mallotus villosus ), swordfish ( Xiphias gladius ), Kawakawa ( Euthynnus affinis ), bonitos ( Sarda spp. ), marlins, sailfishes, spearlish ( Isliophoridae ), excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.41 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii )', en: '0302.41 - - Herrings ( Clupea harengus, Clupea pallasii )' },
      { type: 'list', vi: '0302.42 - - Cá cơm (cá trỏng) ( Engraulis spp. )', en: '0302.42 - - Anchovies (Engraulis sp)' },
      { type: 'list', vi: '0302.43 - - Cá trích dầu ( Sardina pilchardus, Sardinops spp. ), cá trích xương ( Sardinella spp. ), cá trích kê hoặc cá trích cơm ( Sprattus sprattus )', en: '0302.43 - - Sardines ( Sordina pilchardus, Sardinops spp ), sardinella ( Sardinella spp ), brisling or sprats Sprattus sprattus' },
      { type: 'list', vi: '0302.44 - - Cá nục hoa ( Scomber scombrus, Scomber australasicus, Scomber japonicus )', en: '0302.44 - - Mackerel (Scomber scombrus, Scomber australasicus, Scomber japonicus)' },
      { type: 'list', vi: '0302.45 - - Cá nục gai và cá sòng ( Trachurus spp. )', en: '0302.45 - - Jack and horse mackerel ( Trachurus spp .)' },
      { type: 'list', vi: '0302.46 - - Cá giò ( Rachycentron canadum )', en: '0302.46 - - Cobia ( Rachycentron canadum )' },
      { type: 'list', vi: '0302.47 - - Cá kiếm ( Xiphias gladius )', en: '0302.47 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0302.49 - - Loại khác', en: '0302.49 - -Other' },
      { type: 'paragraph', vi: '- Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae , trừ phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae and Muraenolepididae , excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.51 - - Cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0302.51 - - Cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0302.52 - - Cá tuyết chấm đen ( Melanogrammus aeglefinus )', en: '0302.52 - - Haddock ( Melanogrammus aeglefinus )' },
      { type: 'list', vi: '0302.53 - - Cá tuyết đen ( Pollachius virens )', en: '0302 53 - - Coal fish ( Pollachius virens )' },
      { type: 'list', vi: '0302.54 - - Cá tuyết hake ( Merluccius spp., Urophycis spp. )', en: '0302.54 - - Hake ( Merluccius spp., Urophycis spp. )' },
      { type: 'list', vi: '0302.55 - - Cá Minh Thái (Pollack Alaska) ( Theragra chalcogramma )', en: '0302.55 - - Alaska Pollock (Theragra chalcogramma)' },
      { type: 'list', vi: '0302.56 - - Cá tuyết lam ( Micromesistius poutassou, Micromesistius australis )', en: '0302.56 - - Blue whitings ( Micromesistius poutassou, Micromesistius australis )' },
      { type: 'list', vi: '0302.59 - - Loại khác', en: '0302.59 - - Other' },
      { type: 'paragraph', vi: '- Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile ( Lates niloticus ) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Tilapias ( Oreochromis spp .), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch ( Lates niloticus ) and snakeheads ( Channa spp ), excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.71 - - Cá rô phi ( Oreochromis spp. )', en: '0302.71 - - Tilapias ( Oreochromis spp .)' },
      { type: 'list', vi: '0302.72 - - Cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. )', en: '0302.72 - - Catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. )' },
      { type: 'list', vi: '0302.73 - - Cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )', en: '0302.73 - - Carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )”.' },
      { type: 'list', vi: '0302.74 - - Cá chình ( Anguilla spp. )', en: '0302.74 - - Eels ( Anguilla spp. )' },
      { type: 'list', vi: '0302.79 - - Loại khác', en: '0302.79 - - Other' },
      { type: 'paragraph', vi: '- Cá khác, trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0302.91 đến 0302.99:', en: '- Other fish, excluding edible fish offal of subheadings 0302.91 to 0302.99 :' },
      { type: 'list', vi: '0302.81 - - Cá nhám góc và cá mập khác', en: '0302.81 - - Dogfish and other sharks' },
      { type: 'list', vi: '0302.82 - - Cá đuối (Rajidae )', en: '0302.82 - - Rays and skates (Rajidae )' },
      { type: 'list', vi: '0302.83 - - Cá răng cưa ( Dissostichus spp. )', en: '0302.83 - - Toothfish ( Dissostichus spp. )' },
      { type: 'list', vi: '0302.84 - - Cá vược (hoặc cá vược Châu Âu) ( Dicentrarchus spp. )', en: '0302.84 - - Seabass ( Dicentrarchus spp. )' },
      { type: 'list', vi: '0302.85 - - Cá tráp biển ( Sparidae )', en: '0302.85 - - Seabream ( Sparidae )' },
      { type: 'list', vi: '0302.89 - - Loại khác', en: '0302.89 - - Other' },
      { type: 'paragraph', vi: '- Gan, sẹ và bọc trứng cá, vây, đầu, đuôi, bong bóng và các phụ phẩm ăn được sau giết mổ khác của cá:', en: '- Livers, roes, milt, fish fins, heads, tails, maws and other edible fish offal:' },
      { type: 'list', vi: '0302.91 - - Gan, sẹ và bọc trứng cá', en: '0302.91 - - Livers, roes and milt' },
      { type: 'list', vi: '0302.92 - - Vây cá mập', en: '0302.92 - - Shark fins' },
      { type: 'list', vi: '0302.99 - - Loại khác', en: '0302.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm cá, tươi hoặc ướp lạnh, có thể nguyên con, bỏ đầu, moi ruột hoặc cắt khúc còn xương hoặc sụn. Tuy nhiên, nhóm này không bao gồm phi-lê cá và thịt cá khác thuộc nhóm 03.04 . Cá có thể được đóng gói với muối hoặc đá hoặc tưới nước muối để bảo quản tạm thời trong lúc vận chuyển.', en: 'This heading covers fish, fresh or chilled, whether whole, headless, gutted, or in cuts containing bones or cartilage. However, the heading does not include fish fillets and other fish meat of heading 03.04 . The fish may be packed with salt or ice or sprinkled with salt water as a temporary preservative during transport.' },
      { type: 'paragraph', vi: 'Cá được ướp với ít đường hoặc được đóng gói với ít lá nguyệt quế thơm vẫn được phân loại trong nhóm này.', en: 'Fish slightly sugared or packed with a few bay leaves remains in this heading.' },
      { type: 'paragraph', vi: 'Phụ phẩm cá ăn được không dính với các phần còn lại của thân cá (ví dụ: da, đuôi, bong bóng, đầu và nửa đầu (có hoặc không có óc, má, lưỡi, mắt, hàm hoặc miệng), dạ dày, vây, lưỡi), cũng như gan, sẹ và bọc trứng cá, tươi hoặc ướp lạnh, cũng được phân loại vào nhóm này.', en: 'Edible fish offal separated from the rest of the body of the fish (e.g., skins, tails, maws (swim bladders), heads and halves of heads (with or without the brains, cheeks, tongues, eyes, jaws, or lips), stomachs, fins, tongues), as well as livers, roes and milt, fresh or chilled, are also classified in this heading.' },
      { type: 'heading', vi: 'Chú giải phân nhóm', en: 'Subheading Explanatory Note' },
      { type: 'paragraph', vi: 'Phân nhóm 0302.92', en: 'Subheading 0302.92' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 0302.92, thuật ngữ “vây cá mập” bao gồm vây lưng, vây ngực, vây bụng, vây hậu môn và phần vây đuôi dưới của cá mập. Tuy nhiên, các phần trên của đuôi cá mập không được coi là vây cá mập.', en: 'For the purposes of subheading 0302.92, the term “shark fins” covers dorsal, pectoral, ventral, anal fins and the lower lobe of the tail (caudal fin) of sharks. However, the upper parts of shark tails are not regarded as shark tins.' },

      { type: 'heading', vi: '03.03 - Cá, đông lạnh, trừ phi-lê cá (fillets) và các loại thịt cá khác thuộc nhóm 03.04 (+).', en: '03.03 - Fish, frozen, excluding fish fillets and other fish meat of heading 03.04 (+).' },
      { type: 'paragraph', vi: '- Cá hồi, trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Salmonidae, excluding edible fish offal of subheadings 0303.91 to 0303.99 :' },
      { type: 'list', vi: '0303.11 - - Cá hồi đỏ ( Oncorhynchus nerka )', en: '0303.11 - - Sockeye salmon (red salmon) ( Oncorhynchus nerka )' },
      { type: 'list', vi: '0303.12 - - Cá hồi Thái Bình Dương khác ( Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus )', en: '0303.12 - - Other Pacific salmon ( Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus )' },
      { type: 'list', vi: '0303.13 - - Cá hồi Đại Tây Dương ( Salmo salar ) và cá hồi sông Đa-nuýp ( Hucho hucho )', en: '0303.13 - - Atlantic salmon ( Salmo salar ) and Danube salmon ( Hucho hucho )' },
      { type: 'list', vi: '0303.14 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0303.14 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0303.19 - - Loại khác', en: '0303.19 - - Other' },
      { type: 'paragraph', vi: '- Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá lóc hay cá chuối) ( Channa spp. ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels (Anguilla spp.) , Nile perch (Lates niloticus) and snakeheads ( Channa spp. ), excluding edible fish offal of subheadings 0303.91 to 0303.99 :' },
      { type: 'list', vi: '0303.23 - - Cá rô phi ( Oreochromis spp .)', en: '0303.23 - - Tilapias (Oreochromis spp.)' },
      { type: 'list', vi: '0303.24 - - Cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. )', en: '0303.24 - - Catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. )' },
      { type: 'list', vi: '0303.25 - - Cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )', en: '0303.25 - - Carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. )' },
      { type: 'list', vi: '0303.26 - - Cá chình ( Angullla spp .)', en: '0303.26 - - Eels ( Anguilla spp )' },
      { type: 'list', vi: '0303.29 - - Loại khác', en: '0303.29 - - Other' },
      { type: 'paragraph', vi: '- Cá bơn ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae và Citharidae ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99', en: '- Flat fish ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae and Citharidae ), excluding edible fish offal of subheadings 0303.91 to 0303.99 :' },
      { type: 'list', vi: '0303.31 - - Cá bơn lưỡi ngựa (Halibut) ( Reinhardtius hippoglossoides, Hippoglossus hippoglossus, Hippoglossus stenolepis )', en: '0303.31 - - Halibut ( Reinhardtius hippoglossoides, Hippoglossus hippoglossus, Hippoglossus stenolepis )' },
      { type: 'list', vi: '0303.32 - - Cá bơn sao ( Pleuronectes platessa )', en: '0303.32 - - Plaice ( Pleuronectes platessa )' },
      { type: 'list', vi: '0303.33 - - Cá bơn sole ( Solea spp. )', en: '0303.33 - - Sole ( Solea spp. )' },
      { type: 'list', vi: '0303.34 - - Cá bơn turbot ( Psetta maxima )', en: '0303.34 - - Turbots (Psetta maxima)' },
      { type: 'list', vi: '0303.39 - - Loại khác', en: '0303.39 - - Other' },
      { type: 'paragraph', vi: '- Cá ngừ đại dương (thuộc giống Thunus ), cá ngừ vằn (cá ngừ sọc dưa) (Katsuwonus pelamis) , trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Tunas (of the genus Thunnus), skipjack tuna (stripe- bellied bonito) (Katsuwonus pelamis), excluding edible fish offal of subheadings 0303.91 to 0303.99:' },
      { type: 'list', vi: '0303.41 - - Cá ngừ vây dài ( Thunnus alalunga )', en: '0303.41 - - Albacore or longfinned tunas ( Thunnus alalunga )' },
      { type: 'list', vi: '0303.42 - - Cá ngừ vây vàng ( Thunnus albacares )', en: '0303.42 - - Yellowfin tunas (Thunnus albacares)' },
      { type: 'list', vi: '0303.43 - - Cá ngừ vằn (cá ngừ sọc dưa) (Katsuwonus pelamis)', en: '0303.43 - - Skipjack tuna (stripe-bellied bonito) (Katsuwonus pelamis)' },
      { type: 'list', vi: '0303.44 - - Cá ngừ mắt to ( Thunnus obesus )', en: '0303.44 - - Bigeye tunas (Thunnus obesus)' },
      { type: 'list', vi: '0303.45 - - Cá ngừ vây xanh Đại Tây Dương và Thái Bình Dương ( Thunnus thynnus, Thunnus orientalis )', en: '0303.45 - - Atlantic and Pacific bluefin tunas ( Thunnus thynnus, Thunnus orientalis )' },
      { type: 'list', vi: '0303.46 - - Cá ngừ vây xanh phương Nam ( Thunnus maccoyii )', en: '0303.46 - - Southern bluefin tunas (Thunnus maccoyii)' },
      { type: 'list', vi: '0303.49 - - Loại khác', en: '0303.49 - - Other' },
      { type: 'paragraph', vi: '- Cá trích nước lạnh ( Clupea harengus, Clupea pallasii ), cá cơm (cá trỏng) ( Engraulis spp. ), cá trích dầu ( Sardina pilchardus, Sardinops spp. ), cá trích xương ( Sardinella spp. ), cá trích kê hoặc cá trích cơm ( Sprattus sprattus ), cá nục hoa ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), cá bạc má ( Rastrelliger spp. ), cá thu ( Scomberomorus spp. ), cá nục gai và cá sòng ( Trachurus spp. ), cá khế jacks, cá khế crevalles ( Caranx spp. ), cá giò ( Rachycentron canadum ), cá chim trắng ( Pampus spp. ), cá thu đao ( Cololabis saira ), cá nục ( Decapterus spp. ), cá trứng ( Mallotus villosus ), cá kiếm ( Xiphias gladius ), cá ngừ chấm ( Euthynnus affinis ), cá ngừ ba chấm ( Sarda spp. ), cá cờ marlin, cá cờ lá (sailfishes), cá cờ spearfish ( Istiophoridae ), trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Herrings ( Clupea harengus, Clupea pallasii ), anchovies (Engraulis spp.) , sardines ( Sardina pilchardus, Sardinops spp. ), sardinella ( Sardinella spp. ), brisling or sprats ( Sprattus sprattus ), mackerel ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), Indian mackerels (Rastrelliger spp.) , seerfishes (Scomberomorus spp.) , jack and horse mackerel (Trachurus spp.), jacks, crevalles (Caranx spp), cobia ( Rachycentron canadum ), silver pomfrets (Pampus spp.) , Pacific saury (Cololabis saira), scads (Decapterus spp.) , capelin (Mallotus villosus) , swordfish (Xiphias gladius), Kawakawa ( Euthynnus affinis ), bonitos (Sarda spp.) , marlins, sailfishes, spearfish (Istiophoridae), excluding edible fish offal of subheadings 0303.91 to 0303.99:' },
      { type: 'list', vi: '0303.51 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii )', en: '0303.51 - - Herrings ( Clupea harengus, Clupea pallasii )' },
      { type: 'list', vi: '0303.53 - - Cá trích dầu ( Sardina pilchardus, Sardinops spp. ), cá trích xương ( Sardinella spp. ), cá trích kê hoặc cá trích cơm ( Sprattus sprattus )', en: '0303.53 - -Sardines ( Sardina pilchardus, Sardinops spp. ), sardinella ( Sardinella spp. ), brisling or sprats ( Sprattus sprattus )' },
      { type: 'list', vi: '0303.54 - - Cá nục hoa ( Scomber scombrus, Scomber australasicus, Scomber japonicus )', en: '0303.54 - - Mackerel ( Scomber scombrus, Scomber australasicus, Scomber japonicus )' },
      { type: 'list', vi: '0303.55 - - Cá nục gai và cá sòng (Trachurus spp. )', en: '0303.55 - - Jack and horse mackerel (Trachurus spp. )' },
      { type: 'list', vi: '0303.56 - - Cá giò ( Rachycentron canadum )', en: '0303.56 - - Cobia ( Rachycentron canadum )' },
      { type: 'list', vi: '0303.57 - - Cá kiếm ( Xiphias gladius )', en: '0303.57 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0303.59 - - Other', en: '0303.59 - - Other' },
      { type: 'paragraph', vi: '- Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae , trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae and Muraenolepididae , excluding edible fish offal of subheadings 0303.91 to 0303.99 :' },
      { type: 'list', vi: '0303.63 - - Cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0303.63 - - Cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0303.64 - - Cá tuyết chấm đen ( Melanogrammus aeglefinus )', en: '0303.64 - - Haddock ( Melanogrammus aeglefinus )' },
      { type: 'list', vi: '0303.65 - - Cá tuyết đen ( Pollachius virens )', en: '0303.65 - - Coal fish ( Pollachius virens )' },
      { type: 'list', vi: '0303.66 - - Cá tuyết hake ( Merluccius spp., Urophycis spp. )', en: '0303.66 - - Hake ( Merluccius spp., Urophycis spp. )' },
      { type: 'list', vi: '0303.67 - - Cá Minh Thái (Pollack Alaska) ( Theragra chalcogramma )', en: '0303.67 - - Alaska Pollock (Pollack Alaska) ( Theragra chalcogramma )' },
      { type: 'list', vi: '0303.68 - - Cá tuyết lam ( Micromesistius poutassou, Micromesistius australis )', en: '0303.68 - - Blue whitings ( Micromesistius poutassou, Micromesistius australis )' },
      { type: 'list', vi: '0303.69 - - Loại khác', en: '0303.69 - - Other' },
      { type: 'paragraph', vi: '- Loại cá khác, trừ các phụ phẩm ăn được sau giết mổ của cá thuộc các phân nhóm từ 0303.91 đến 0303.99:', en: '- Other fish, excluding edible fish offal of subheadings 0303.91 to 0303.99:' },
      { type: 'list', vi: '0303.81 - - Cá nhám góc và cá mập khác', en: '0303.81 - - Dogfish and other sharks' },
      { type: 'list', vi: '0303.82 - - Cá đuối ( Rajidae )', en: '0303.82 - - Rays and skates ( Rajidae )' },
      { type: 'list', vi: '0303.83 - - Cá răng cưa ( Dissostichus spp .)', en: '0303.83 - - Toothfish ( Dissostichus spp .)' },
      { type: 'list', vi: '0303.84 - - Cá vược (hoặc cá vược Châu Âu) ( Dicentrarchus spp. )', en: '0303.84 - - Seabass ( Dicentrarchus spp. )' },
      { type: 'list', vi: '0303.89 - - Loại khác', en: '0303.89 - - Other' },
      { type: 'paragraph', vi: '- Gan, sẹ và bọc trứng cá, vây, đầu, đuôi, dạ dày và các phụ phẩm ăn được sau giết mổ khác của cá:', en: '- Livers, roes, milt, fish fins, heads, tails, maws and other edible fish offal :' },
      { type: 'list', vi: '0303.91 - - Gan, sẹ và bọc trứng cá', en: '0303.91 - - Livers, roes and milt' },
      { type: 'list', vi: '0303.92 - - Vây cá mập', en: '0303.92 - - Shark fins' },
      { type: 'list', vi: '0303.99 - - Loại khác', en: '0303.99 - - Other' },
      { type: 'paragraph', vi: 'Nội dung Chú giải nhóm 03.02 áp dụng, một cách tương tự, cho các sản phẩm của nhóm này với những sửa đổi chi tiết thích hợp.', en: 'The provisions of the Explanatory Note to heading 03.02 apply, mutatis mutandis , to the products of this heading.' },
      { type: 'heading', vi: 'Chú giải phân nhóm', en: 'Subheading Explanatory Note' },
      { type: 'paragraph', vi: 'Phân nhóm 0303.92', en: 'Subheading 0303.92' },
      { type: 'paragraph', vi: 'Nội dung Chú giải chi tiết phân nhóm 0302.92 áp dụng, một cách tương tự, cho các sản phẩm của phân nhóm này với những sửa đổi chi tiết thích hợp.', en: 'The provisions of the Subheading Explanatory Note to subheading 0302.92 apply, mutatis mutandis , to the products of this subheading.”.' },

      { type: 'heading', vi: '03.04 - Phi-lê cá và các loại thịt cá khác (đã hoặc chưa xay, nghiền, băm), tươi, ướp lạnh hoặc đông lạnh.', en: '03.04 - Fish fillets and other fish meat (whether or not minced), fresh, chilled or frozen.' },
      { type: 'paragraph', vi: '- Phi-lê cá tươi hoặc ướp lạnh của cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. ):', en: '- Fresh or chilled fillets of tilapias ( Oreochromis spp. ), cattish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. ):' },
      { type: 'list', vi: '0304.31 - - Cá rô phi ( Oreochromis spp .)', en: '0304.31 - - Tilapias (Oreochromis spp.)' },
      { type: 'list', vi: '0304.32 - - Cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp .)', en: '0304.32 - - Catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp .)' },
      { type: 'list', vi: '0304.33 - - Cá rô sông Nile (Lates niloticus)', en: '0304.33 - - Nile Perch (Lates niloticus)' },
      { type: 'list', vi: '0304.39 - - Loại khác', en: '0304.39 - - Other' },
      { type: 'paragraph', vi: '- Phi-lê cá tươi hoặc ướp lạnh của các loại cá khác:', en: '- Fresh or chilled fillets of other fish :' },
      { type: 'list', vi: '0304.41 - - Cá hồi Thái Bình Dương ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), cá hồi Đại Tây Dương ( Salmo salar ) và cá hồi sông Đa-nuýp ( Hucho hucho )', en: '0304.41 - - Pacific salmon ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), Atlantic salmon ( Salmo salar ) and Danube salmon ( Hucho hucho )' },
      { type: 'list', vi: '0304.42 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0304.42 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0304.43 - - Cá bơn ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae và Citharidae )', en: '0304.43 - - Flat fish ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae và Citharidae )' },
      { type: 'list', vi: '0304.44 - - Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae', en: '0304.44 - - Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae' },
      { type: 'list', vi: '0304.45 - - Cá kiếm ( Xiphias gladius )', en: '0304.45 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0304.46 - - Cá răng cưa ( Dissostichus spp .)', en: '0304.46 - - Toothfish ( Dissostichus spp .)' },
      { type: 'list', vi: '0304.47 - - Cá nhám góc và cá mập khác', en: '0304.47 - - Dogfish and other sharks' },
      { type: 'list', vi: '0304.48 - - Cá đuối ( Rajidae )', en: '0304.48 - - Rays and skates ( Rajidae )' },
      { type: 'list', vi: '0304.49 - - Loại khác', en: '0304.49 - - Other' },
      { type: 'paragraph', vi: '- Loại khác, tươi hoặc ướp lạnh:', en: '- Other, fresh or chilled :' },
      { type: 'list', vi: '0304.51 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0304.51 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0304.52 - - Cá hồi', en: '0304.52 - - Salmonidae' },
      { type: 'list', vi: '0304.53 - - Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae', en: '0304.53 - - Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae' },
      { type: 'list', vi: '0304.54 - - Cá kiếm ( Xiphias gladius )', en: '0304.54 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0304.55 - - Cá răng cưa ( Dissostichus spp .)', en: '0304.55 - - Toothfish ( Dissostichus spp .)' },
      { type: 'list', vi: '0304.56 - - Cá nhám góc và cá mập khác', en: '0304.56 - - Dogfish and other sharks' },
      { type: 'list', vi: '0304.57 - - Cá đuối (Rajidae)', en: '0304.57 - - Rays and skates ( Rajidae )' },
      { type: 'list', vi: '0304.59 - - Loại khác', en: '0304.59 - - Other' },
      { type: 'paragraph', vi: '- Phi-lê đông lạnh của cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. ):', en: '- Frozen fillets of tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. ):' },
      { type: 'list', vi: '0304.61 - - Cá rô phi ( Oreochromis spp .)', en: '0304.61 - - Tilapias ( Oreochromis spp .)' },
      { type: 'list', vi: '0304.62 - - Cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp .)', en: '0304.62 - - Cattish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp .)' },
      { type: 'list', vi: '0304.63 - - Cá rô sông Nile (Lates niloticus)', en: '0304.63 - - Nile Perch (Lates niloticus)' },
      { type: 'list', vi: '0304.69 - - Loại khác', en: '0304.69 - - Other' },
      { type: 'paragraph', vi: '- Phi-lê đông lạnh của cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae :', en: '- Frozen fillets of fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae :' },
      { type: 'list', vi: '0304.71 - - Cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0304.71 - - Cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0304.72 - - Cá tuyết chấm đen ( Melanogrammus aeglefinus )', en: '0304.72 - - Haddock ( Melanogrammus aeglefinus )' },
      { type: 'list', vi: '0304.73 - - Cá tuyết đen ( Pollachius virens )', en: '0304.73 - - Coalfish ( Pollachius virens )' },
      { type: 'list', vi: '0304.74 - - Cá tuyết hake ( Merluccius spp., Urophycis spp .)', en: '0304.74 - - Hake ( Merluccius spp., Urophycis spp .)' },
      { type: 'list', vi: '0304.75- - Cá Minh Thái (Pollack Alaska) ( Theragra chalcogramma )', en: '0304.75- - Alaska Pollock ( Theragra chalcogramma )' },
      { type: 'list', vi: '0304.79 - - Loại khác', en: '0304.79 - - Other' },
      { type: 'paragraph', vi: '- Phi-lê đông lạnh của các loại cá khác:', en: '- Frozen fillets of other fish :' },
      { type: 'list', vi: '0304.81 - - Cá hồi Thái Bình Dương ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), cá hồi Đại Tây Dương ( Salmo salar ) và cá hồi sông Đa-nuýp ( Hucho hucho )', en: '0304.81 - - Pacific salmon ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), Atlantic salmon ( Salmo salar ) and Danube salmon ( Hucho hucho )' },
      { type: 'list', vi: '0304.82 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0304.82 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0304.83 - - Cá bơn ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae và Citharidae )', en: '0304.83 - - Flat fish ( Pleuronectidae, Bothidae, Cynoglossidae, Soleidae, Scophthalmidae and Citharidae )' },
      { type: 'list', vi: '0304.84 - - Cá kiếm ( Xiphias gladius )', en: '0304.84 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0304.85 - - Cá răng cưa ( Dissostichus spp .)', en: '0304.85 - - Toothfish ( Dissostichus spp .)' },
      { type: 'list', vi: '0304.86 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii )', en: '0304.86 - - Herrings ( Clupea harengus, Clupea pallasii )' },
      { type: 'list', vi: '0304.87 - - Cá ngừ đại dương (thuộc giống Thunus ), cá ngừ vằn (cá ngừ sọc dưa) (Katsuwonus pelamis)', en: '0304.87 - - Tunas (of the genus Thunnus), skipjack or stripe- bellied bonito ( Euthynnus (Katsuwonus) pelamis)' },
      { type: 'list', vi: '0304.88 - - Cá nhám góc, cá mập khác, cá đuối ( Rajidae )', en: '0304.88 - - Dogfish, other sharks, rays and skates ( Rajidae )' },
      { type: 'list', vi: '0304.89 - - Loại khác', en: '0304.89 - - Other' },
      { type: 'paragraph', vi: '- Loại khác, đông lạnh:', en: '- Other, frozen :' },
      { type: 'list', vi: '0304.91 - - Cá kiếm ( Xiphias gladius )', en: '0304.91 - - Swordfish ( Xiphias gladius )' },
      { type: 'list', vi: '0304.92 - - Cá răng cưa ( Dissostichus spp .)', en: '0304.92 - - Toothfish ( Dissostichus spp .)' },
      { type: 'list', vi: '0304.93 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0304.93 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0304.94 - - Cá Minh Thái (Pollack Alaska) ( Theragra chalcogramma )', en: '0304.94 - - Alaska Pollock (Pollack Alaska) ( Theragra chalcogramma )' },
      { type: 'list', vi: '0304.95 - - Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae , trừ cá Minh Thái (Pollack Alaska) ( Theragra chalcogramma )', en: '0304.95 - - Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae and Muraenolepididae , other than Alaska Pollock ( Theragra chalcogramma )' },
      { type: 'list', vi: '0304.96 - - Cá nhám góc và cá mập khác', en: '0304.96 - - Dogfish and other sharks' },
      { type: 'list', vi: '0304.97 - - Cá đuối ( Rajidae )', en: '0304.97 - - Rays and skates ( Rajidae )' },
      { type: 'list', vi: '0304.99 - - Loại khác', en: '0304.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'paragraph', vi: '(1) Phi-lê cá .', en: '(1) Fish fillets.' },
      { type: 'paragraph', vi: 'Theo mục đích của nhóm này thuật ngữ phi-lê cá có nghĩa là những dải thịt được cắt dọc hai bên theo xương sống của con cá và tạo thành bên phải hoặc bên trái của con cá đến mức mà đầu, ruột, vây (lưng, hậu môn, đuôi, bụng, ngực) và xương (cột sống hoặc xương lưng chính, xương bụng hoặc sườn, xương mang hoặc xương bàn đạp...) đã được loại bỏ ra và hai bên không dính nhau, ví dụ như không còn dính ở phần lưng hoặc bụng.', en: 'For the purposes of this heading the term fish fillets means the strips of meat cut parallel to the backbone of the fish and constituting the right or left side of a fish insofar as the head, guts, fins (dorsal, anal, caudal, ventral, pectoral) and bones (spinal column or main backbone, ventral or costal bones, branchial bone or stapes, etc.) have been removed and the two sides are not joined together, for example by the back or belly.' },
      { type: 'paragraph', vi: 'Da cá vẫn còn trên miếng phi-lê không ảnh hưởng đến việc phân loại các sản phẩm này vì cũng có khi phải để lại da cho miếng phi-lê chắc hoặc dễ thái lát sau này. Tương tự, việc phân loại cũng không bị ảnh hưởng nếu miếng phi-lê còn có xương dăm hoặc xương rất nhỏ chưa được loại bỏ hết.', en: 'The classification of these products is not affected by the possible presence of the skin, sometimes left attached to the fillet to hold it together or to facilitate subsequent slicing. Classification is similarly unaffected by the presence of pin bones or other minor bones which may not have been completely removed.' },
      { type: 'paragraph', vi: 'Phi-lê cá cắt thành miếng nhỏ cũng được phân loại như phi-lê trong nhóm này.', en: 'Fillets cut in pieces are also classified as fillets in this heading.' },
      { type: 'paragraph', vi: 'Phi-lê cá đã chín, và phi-lê chỉ bao bột hoặc bao vụn bánh mì, có hoặc không đông lạnh, được phân loại vào nhóm 16.04 .', en: 'Cooked fillets, and fillets merely covered with batter or bread crumbs, whether or not frozen, are classified in heading 16.04.' },
      { type: 'paragraph', vi: '(2) Tất cả các loại thịt cá khác (đã hoặc chưa xay, nghiền) tức là thịt cá mà đã được loại bỏ xương. Như trong trường hợp phi-lê cá, sự có mặt của xương rất nhỏ có thể chưa được loại bỏ hoàn toàn cũng không thay đổi việc phân loại thịt cá.', en: '(2) Other fish meat (whether or not minced), i.e., fish meat from which the bones have been removed. As in the case of fish fillets, classification of fish meat is unaffected by the presence of minor bones which may not have been completely removed.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm phi-lê cá và tất cả thịt cá khác (đã hoặc chưa xay, nghiền) chỉ ở các dạng sau:', en: 'This heading covers fish fillets and other fish meat (whether or not minced) in the follow ing states only :' },
      { type: 'list', vi: '(i) Tươi hoặc ướp lạnh, có hoặc không đóng gói với muối hoặc đá lạnh hoặc tưới nước muối để bảo quản tạm thời trong khi vận chuyển.', en: '(i) Fresh or chilled, whether or not packed with salt or ice or sprinkled with salt water as a temporary preservative during transport.' },
      { type: 'list', vi: '(ii) Đông lạnh, thường dưới dạng khối đông lạnh.', en: '(ii) Frozen, often presented in the form of frozen blocks.' },
      { type: 'paragraph', vi: 'Phi-lê cá và thịt cá khác (đã hoặc chưa xay, nghiền) được ướp với ít đường hoặc được đóng gói với ít lá nguyệt quế thơm cũng thuộc nhóm này.', en: 'Fish fillets and other fish meat (whether or not minced) slightly sugared or packed with a few bay leaves remain in this heading.' },

      { type: 'heading', vi: '03.05 - Cá, làm khô, muối hoặc ngâm nước muối; cá hun khói, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói.', en: '03.05 - Fish, dried, salted or in brine; smoked fish, whether or not cooked before or during the smoking process.' },
      { type: 'list', vi: '0305.20 - Gan, sẹ và bọc trứng cá, làm khô, hun khói, muối hoặc ngâm nước muối:', en: '0305.20 - Livers, roes and milt of fish, dried, smoked, salted or in brine' },
      { type: 'paragraph', vi: '- Phi-lê cá, làm khô, muối hoặc ngâm nước muối, nhưng không hun khói:', en: '- Fish filets, dried, salted or in brine, but not smoked :' },
      { type: 'list', vi: '0305.31 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0305.31 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0305.32 - - Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae', en: '0305.32 - - Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae and Muraenolepididae' },
      { type: 'list', vi: '0305.39 - - Loại khác:', en: '0305.39 - - Other:' },
      { type: 'paragraph', vi: '- Cá hun khói, kể cả phi-lê cá, trừ phụ phẩm ăn được sau giết mổ:', en: '- Smoked fish, including fillets, other than edible fish offal :' },
      { type: 'list', vi: '0305.41 - - Cá hồi Thái Bình Dương ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), cá hồi Đại Tây Dương ( Salmo salar ) và cá hồi sông Đa-nuýp ( Hucho hucho )', en: '0305.41 - - Pacific salmon ( Oncorhynchus nerka, Oncorhynchus gorbuscha, Oncorhynchus keta, Oncorhynchus tschawytscha, Oncorhynchus kisutch, Oncorhynchus masou và Oncorhynchus rhodurus ), Atlantic salmon ( Salmo salar ) and Danube salmon ( Hucho hucho )' },
      { type: 'list', vi: '0305.42 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii )', en: '0305.42 - - Herrings ( Clupea harengus, Clupea pallasii )' },
      { type: 'list', vi: '0305.43 - - Cá hồi chấm (trout) ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache và Oncorhynchus chrysogaster )', en: '0305.43 - - Trout ( Salmo trutta, Oncorhynchus mykiss, Oncorhynchus clarki, Oncorhynchus aguabonita, Oncorhynchus gilae, Oncorhynchus apache and Oncorhynchus chrysogaster )' },
      { type: 'list', vi: '0305.44 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0305.44 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0305.49 - - Loại khác', en: '0305.49 - - Other' },
      { type: 'paragraph', vi: '- Cá khô, trừ phụ phẩm ăn được sau giết mổ, có hoặc không muối nhưng không hun khói:', en: '- Dried fish, other than edible fish offal, whether or not salted but not smoked :' },
      { type: 'list', vi: '0305.51 - - Cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0305.51 - - Cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0305.52 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0305.52 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0305.53 - - Cá thuộc các họ Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae và Muraenolepididae , trừ cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0305.53 - - Fish of the families Bregmacerotidae, Euclichthyidae, Gadidae, Macrouridae, Melanonidae, Merlucciidae, Moridae and Muraenolepididae , other than cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0305.54 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii ), cá cơm (cá trỏng) ( Engraulis spp. ), cá trích dầu ( Sardina pilchardus, Sardinops spp. ), cá trích xương ( Sardinella spp. ), cá trích kê hoặc cá trích cơm ( Sprattus sprattus ), cá nục hoa ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), cá bạc má ( Rastrelliger spp. ), cá thu ( Scomberomorus spp. ), cá nục gai và cá sòng ( Trachurus spp. ), cá khế jacks, cá khế crevalles ( Caranx spp. ), cá giò ( Rachycentron canadum ), cá chim trắng ( Pampus spp. ), cá thu đao ( Cololabis saira ), cá nục ( Decapterus spp. ), cá trứng ( Mallotus villosus ), cá kiếm ( Xiphias gladius ), cá ngừ chấm ( Euthynnus affinis ), cá ngừ ba chấm ( Sarda spp. ), cá cờ gòn, cá cờ lá (sailfishes), cá cờ spearfish ( Istiophoridae )', en: '0305.54 - - Herrings ( Clupea harengus, Clupea pallasii ), anchovies ( Engraulis spp. ), sardines ( Sardina pilchardus, Sardinops spp. ), sardinella ( Sardinella spp. ), brisling or sprats ( Sprattus sprattus ), mackerel ( Scomber scombrus, Scomber australasicus, Scomber japonicus ), Indian mackerels ( Rastrelliger spp. ), seerfishes ( Scomberomorus spp. ), jack and horse mackerel ( Trachurus spp. ), jacks, crevalles ( Caranx spp. ), cobia ( Rachycentron canadum ), silver pomfrets ( Pampus spp. ), Pacific saury ( Cololabis saira ), scads ( Decapterus spp. ), capelin ( Mallotus villosus ), swordfish ( Xiphias gladius ), Kawakawa ( Euthynnus affinis ), bonitos ( Sarda spp. ), marlins, sailtlshes, spearfish ( Istiophoridae )' },
      { type: 'list', vi: '0305.59 - - Loại khác:', en: '0305.59 - - Other' },
      { type: 'paragraph', vi: '- Cá, muối nhưng không làm khô hoặc hun khói và cá ngâm nước muối, trừ phụ phẩm ăn được sau giết mổ:', en: '- Fish, salted but not dried or smoked and fish in brine, other than edible fish offal :' },
      { type: 'list', vi: '0305.61 - - Cá trích nước lạnh ( Clupea harengus, Clupea pallasii )', en: '0305.61 - - Herrings ( Clupea harengus, Clupea pallasii )' },
      { type: 'list', vi: '0305.62 - - Cá tuyết ( Gadus morhua, Gadus ogac, Gadus macrocephalus )', en: '0305.62 - - Cod ( Gadus morhua, Gadus ogac, Gadus macrocephalus )' },
      { type: 'list', vi: '0305.63 - - Cá cơm (cá trỏng) (Engraulis spp. )', en: '0305.63 - - Anchovies (Engraulis spp. )' },
      { type: 'list', vi: '0305.64 - - Cá rô phi ( Oreochromis spp. ), cá da trơn ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), cá chép ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), cá chình ( Anguilla spp. ), cá rô sông Nile (Lates niloticus) và cá quả (cá chuối hoặc cá lóc) ( Channa spp. )', en: '0305.64 - - Tilapias ( Oreochromis spp. ), catfish ( Pangasius spp., Silurus spp., Clarias spp., Ictalurus spp. ), carp ( Cyprinus spp., Carassius spp., Ctenopharyngodon idellus, Hypophthalmichthys spp., Cirrhinus spp., Mylopharyngodon piceus, Catla catla, Labeo spp., Osteochilus hasselti, Leptobarbus hoeveni, Megalobrama spp. ), eels ( Anguilla spp. ), Nile perch (Lates niloticus) and snakeheads ( Channa spp. )' },
      { type: 'list', vi: '0305.69 - - Loại khác', en: '0305.69 - - Other' },
      { type: 'paragraph', vi: '- Vây cá, đầu, đuôi, bong bóng và phụ phẩm khác ăn được của cá sau giết mổ:', en: '- Fish fins, heads, tails, maws and other edible fish offal :' },
      { type: 'list', vi: '0305.71 - - Vây cá mập', en: '0305.71 - - Shark fins' },
      { type: 'list', vi: '0305.72 - - Đầu cá, đuôi và bong bóng', en: '0305.72 - - Fish heads, tails and maws' },
      { type: 'list', vi: '0305.79 - - Loại khác', en: '0305.79 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại cá (nguyên con, không đầu, ở dạng miếng, dạng phi-lê hoặc đã được xay, nghiền) và các phụ phẩm ăn được của cá, mà các sản phẩm này:', en: 'This heading covers fish (whole, headless, in pieces, in fillets or minced) and edible fish offal which are :' },
      { type: 'list', vi: '(1) đã được làm khô;', en: '(1) dried;' },
      { type: 'list', vi: '(2) đã được muối hoặc ngâm nước muối; hoặc', en: '(2) salted or in brine; or' },
      { type: 'list', vi: '(3) đã được hun khói.', en: '(3) smoked.' },
      { type: 'paragraph', vi: 'Muối dùng trong chế biến cá như để ướp muối hoặc ngâm nước muối, có thể chứa nitrit natri hoặc nitrat natri. Có thể dùng một chút đường trong chế biến cá muối mà không làm thay đổi việc phân loại cá trong nhóm này.', en: 'The salt used in the preparation of fish, salted or in brine, may contain added sodium nitrite or sodium nitrate. Small quantities of sugar may be used in the preparation of salted fish without affecting the classification of the fish in this heading.' },
      { type: 'paragraph', vi: 'Cá đã qua từ hai quá trình chế biến trở lên , thích hợp dùng làm thức ăn cho người, vẫn được phân loại vào nhóm này', en: 'Fish having undergone two or more of these processes, fit for human consumption, remain classified in this heading.' },
      { type: 'paragraph', vi: 'Cá hun khói đôi khi được xử lý nhiệt trước hoặc trong khi hun khói (hun khói nóng) để làm chín một phần hoặc toàn bộ thịt cá; điều này không ảnh hưởng đến việc phân loại vào nhóm này miễn là chúng không được chế biến thêm làm mất đi đặc tính của cá hun khói.', en: 'Smoked fish is sometimes submitted, either before smoking or during smoking (hot smoking), to a heat treatment which partly or wholly cooks the meat; this does not affect its classification in this heading provided that it has not undergone any other processing which deprives it of the character of smoked fish.' },
      { type: 'paragraph', vi: 'Những loại cá chính được chế biến theo cách nêu tại nhóm này là cá trích dầu, cá cơm (cá trỏng), cá mòi cơm (pilchard), cá trích cơm, cá ngừ đại dương, cá nục hoa, cá hồi, cá trích nước lạnh, cá tuyết, cá tuyết chấm đen và cá bơn lưỡi ngựa.', en: 'The principal varieties of fish prepared in the manner covered by this heading are sardines, anchovies, pilchards, sprats, tunas, mackerel, salmon, herring, cod, haddock and halibut.' },
      { type: 'paragraph', vi: 'Phụ phẩm cá ăn được sau giết mổ không dính với các phần còn lại của thân cá (ví dụ: da, đuôi, bong bóng, đầu và nửa đầu (có hoặc không có óc, má, lưỡi, mắt, hàm hoặc miệng), dạ dày, vây, lưỡi), cũng như gan, sẹ và bọc trứng cá, được làm khô, muối, ngâm nước muối hoặc hun khói, cũng được phân loại vào nhóm này.', en: 'Edible fish offal separated from the rest of the body of the fish (e.g., skins, tails, maws (swim bladders), heads and halves of heads (with or without the brains, checks, tongues, eyes, jaws or lips), stomachs, fins, tongues), as well as livers, roes and milt, dried, salted, in brine or smoked, are also classified in this heading.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Phụ phẩm cá không ăn được (ví dụ loại được sử dụng trong công nghiệp) và các phần phế liệu từ cá ( nhóm 05.11 ).', en: '(a) Inedible fish offal (e.g., of a kind used in industrial applications) and fish waste (heading 05.11).' },
      { type: 'list', vi: '(b) Cá đã chín (trừ nội dung nêu trên liên quan đến cá hun khói), cá được chế biến theo bất kỳ cách nào khác (ví dụ bảo quản trong dầu hay trong dấm hoặc trong nước xốt), trứng cá muối và các sản phẩm thay thế trứng cá muối ( nhóm 16.04 ).', en: '(b) Cooked fish (subject to the above provisions regarding smoked fish) and fish prepared in any other way, for example preserved in oil or vinegar or in a marinade, and caviar and caviar substitutes (heading 16.04).' },
      { type: 'list', vi: ' (c) Súp cá ( nhóm 21.04 ).', en: '(c) Fish soups (heading 21.04).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0305.71', en: 'Subheading 0305.71' },
      { type: 'paragraph', vi: 'Nội dung của Chú giải chi tiết phân nhóm 0302.92 áp dụng, một cách tương tự , cho các sản phẩm của phân nhóm này với những sửa đổi chi tiết thích hợp.', en: 'The provisions of the Subheading Explanatory Note to subheading 0302.92 apply, mutatis mutandis , to the products of this subheading.' },
      { type: 'paragraph', vi: 'Phân nhóm này có thể kể đến vây cá mập không lột da, chỉ mới làm khô đơn giản và những phần vây cá mập được nhúng trong nước nóng, lột da hoặc tước thành sợi trước khi làm khô.', en: 'This subheading includes, inter alia , unskinned sharks’ fins, simply dried, and parts of sharks’ fins which have been immersed in hot water, skinned or shredded before drying.' },

      { type: 'heading', vi: '03.06 - Động vật giáp xác, đã hoặc chưa bóc mai, vỏ, sống, tươi, ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối; động vật giáp xác hun khói, đã hoặc chưa bóc mai, vỏ, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói; động vật giáp xác chưa bóc mai, vỏ, đã hấp chín hoặc luộc chín trong nước, đã hoặc chưa ướp lạnh, đông lạnh, làm khô, muối, hoặc ngâm nước muối.', en: '0.3.06 - Crustaceans, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine; smoked crustaceans, whether in shell or not, whether or not cooked before or during the smoking process; crustaceans, in shell, cooked by stearning or by boiling in water, whether or not chilled, frozen, dried, salted or in brine.' },
      { type: 'paragraph', vi: '- Đông lạnh:', en: '- Frozen :' },
      { type: 'list', vi: '0306.11 - - Tôm hùm đá và các loại tôm biển khác ( Palinurus spp., Panulirus spp., Jasus spp. )', en: '0306.11 - - Rock lobster and other sea crawfish ( Palinurus spp., Panulirus spp., Jasus spp. )' },
      { type: 'list', vi: '0306.12 - - Tôm hùm ( Homarus spp. )', en: '0306.12 - - Lobsters ( Homarus spp. )' },
      { type: 'list', vi: '0306.14 - - Cua, ghẹ', en: '0306.14 - - Crabs' },
      { type: 'list', vi: '0306.15 - - Tôm hùm Na Uy ( Nephrops norvegicus )', en: '0306.15 - - Norway lobsters ( Nephrops norvegicus )' },
      { type: 'list', vi: '0306.16 - - Tôm shrimps và tôm prawn nước lạnh (Pandalus spp., Crangon crangon )', en: '0306.16 - - Cold-water shrimps and prawns (Pandalus spp., Crangon crangon )' },
      { type: 'list', vi: '0306.17 - - Tôm shrimps và tôm prawn khác', en: '0306.17 - - Other shrimps and prawns' },
      { type: 'list', vi: '0306.19 - - Loại khác', en: '0306.19 - - Other' },
      { type: 'paragraph', vi: '- Sống, tươi hoặc ướp lạnh:', en: '- Live, fresh or chilled:' },
      { type: 'list', vi: '0306.31 - - Tôm hùm đá và các loại tôm biển khác ( Palinurus spp., Panulirus spp., Jasus spp. )', en: '0306.31 - - Rock lobster and other sea crawfish ( Palinurus spp., Panulirus spp., Jasus spp. )' },
      { type: 'list', vi: '0306.32 - - Tôm hùm ( Homarus spp. )', en: '0306.32 - - Lobsters ( Homarus spp. )' },
      { type: 'list', vi: '0306.33 - - Cua, ghẹ', en: '0306.33 - - Crabs' },
      { type: 'list', vi: '0306.34 - - Tôm hùm Na Uy ( Nephrops norvegicus )', en: '0306.34 - - Norway lobsters ( Nephrops norvegicus )' },
      { type: 'list', vi: '0306.35 - - Tôm shrimps và tôm prawn nước lạnh ( Pandalus spp., Crangon crangon )', en: '0306.35 - - Cold-water shrimps and prawns ( Pandalus spp., Crangon crangon )' },
      { type: 'list', vi: '0306.36 - - Tôm shrimps và tôm prawn loại khác', en: '0306.36 - - Other shrimps and prawns' },
      { type: 'list', vi: '0306.39 - - Loại khác', en: '0306.39 - - Other' },
      { type: 'paragraph', vi: '- Loại khác :', en: '- Other :' },
      { type: 'list', vi: '0306.91 - - Tôm hùm đá và các loại tôm biển khác ( Palinurus spp., Panulirus spp., Jasus spp. )', en: '0306.91 - - Rock lobster and other sea crawfish ( Palinurus spp., Panulirus spp., Jasus spp. )' },
      { type: 'list', vi: '0306.92 - - Tôm hùm ( Homarus spp. )', en: '0306.92 - - Lobsters ( Homarus spp. )' },
      { type: 'list', vi: '0306.93 - - Cua, ghẹ', en: '0306.93 - - Crabs' },
      { type: 'list', vi: '0306.94 - - Tôm hùm Na Uy ( Nephrops norvegicus )', en: '0306.94 - - Norway lobsters ( Nephrops norvegicus )' },
      { type: 'list', vi: '0306.95 - - Tôm shrimps và tôm prawn', en: '0306.95 - - Shrimps and prawns' },
      { type: 'list', vi: '0306.99 - - Loại khác', en: '0306.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Động vật giáp xác, đã hoặc chưa bóc mai, vỏ, sống, tươi, ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối.', en: '(1) Crustaceans, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine.' },
      { type: 'list', vi: '(2) Động vật giáp xác hun khói, đã hoặc chưa bóc mai, vỏ, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói.', en: '(2) Smoked crustaceans, whether in shell or not, whether or not cooked before or during the smoking process.' },
      { type: 'list', vi: '(3) Động vật giáp xác chưa bóc mai, vỏ, đã hấp chín hoặc luộc chín trong nước (có hoặc không bổ sung một lượng nhỏ hoá chất bảo quản tạm thời); chúng cũng có thể được ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối.', en: '(3) Crustaceans, in their shells, cooked by steaming or by boiling in water (whether or not small quantities of provisional chemical preserving agents have been added); they may also be chilled, frozen, dried, salted or in brine.' },
      { type: 'paragraph', vi: 'Những loại động vật giáp xác chính là tôm hùm, tôm biển (sea crawfish), tôm hùm nước ngọt (crayfish), cua, ghẹ, tôm shrimp và tôm prawn.', en: 'The main kinds of crustaceans are lobsters, sea crawfish, crayfish, crabs, shrimps and prawns.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các bộ phận của động vật giáp xác (ví dụ: đuôi của tôm hùm hay tôm hùm nước ngọt, càng cua, ghẹ), với điều kiện những bộ phận đó đã bóc mai, vỏ và được chế biến như cách đã nêu ở mục (1) trên.', en: 'The heading also covers parts of crustaceans (e.g., “ tails” of lobsters or crayfish, crabs’ claws), provided those not in shell have been subjected to no other processes than those specified in (1) above.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Cầu gai và những động vật thủy sinh không xương sống khác thuộc nhóm 03.08 .', en: '(a) Sea-urchins and other aquatic invertebrates of heading 0.3.08.' },
      { type: 'list', vi: '(b) Động vật giáp xác (kể cả các bộ phận của chúng) được chế biến hoặc bảo quản không theo những cách đã nêu trong nhóm này (ví dụ, những động vật giáp xác đã bóc mai, vỏ được luộc trong nước) ( nhóm 16.05 ).', en: '(b) Crustaceans (including parts thereof) prepared or preserved by processes not provided for in this heading (e.g., shelled crustaceans boiled in water) (heading 16.05).' },

      { type: 'heading', vi: '03.07 - Động vật thân mềm, đã hoặc chưa bóc mai, vỏ, sống, tươi, ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối; động vật thân mềm hun khói, đã hoặc chưa bóc mai, vỏ, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói.', en: '03.07 - Molluscs, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine; smoked molluscs, whether in shell or not, whether or not cooked before or during the smoking process.' },
      { type: 'paragraph', vi: '- Hàu:', en: '- Oysters :' },
      { type: 'list', vi: '0307.11 - - Sống, tươi hoặc ướp lạnh', en: '0307.11 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.12 - - Đông lạnh', en: '0307.12 - - Frozen' },
      { type: 'list', vi: '0307.19 - - Loại khác', en: '0307.10 - - Other' },
      { type: 'paragraph', vi: '- Điệp và các loài động vật thân mềm khác thuộc họ Pectinidae :', en: '- Scallops and other molluscs Pectinidae:' },
      { type: 'list', vi: '0307.21 - - Sống, tươi hoặc ướp lạnh', en: '0307.21 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.22 - - Đông lạnh', en: '0307.22 - - Frozen' },
      { type: 'list', vi: '0307.29 - - Loại khác', en: '0307.29 - - Other' },
      { type: 'paragraph', vi: '- Vẹm ( Mytilus spp., Perna spp. ):', en: '- Mussels (Mytilus spp. Perna spp )' },
      { type: 'list', vi: '0307.31 - - Sống, tươi hoặc ướp lạnh', en: '0307.31 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.32 - - Đông lạnh', en: '0307.32 - - Frozen' },
      { type: 'list', vi: '0307.39 - - Loại khác', en: '0307.39 - - Other' },
      { type: 'paragraph', vi: '- Mực nang và mực ống:', en: '- Cuttle fish and squid :' },
      { type: 'list', vi: '0307.42 - - Sống, tươi hoặc ướp lạnh', en: '0307.42 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.43 - - Đông lạnh', en: '0307.43 - - Frozen' },
      { type: 'list', vi: '0307.49 - - Loại khác', en: '0307.49 - - Other' },
      { type: 'paragraph', vi: '- Bạch tuộc ( Octopus spp .):', en: '- Octopus (Octopus spp.)' },
      { type: 'list', vi: '0307.51 - - Sống, tươi hoặc ướp lạnh', en: '0307.51 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.52 - - Đông lạnh', en: '0307.52 - - Frozen' },
      { type: 'list', vi: '0307.59 - - Loại khác', en: '0307.59 - - Other' },
      { type: 'list', vi: '0307.60 - Ốc, trừ ốc biển', en: '0307.60 - Snails, other than sea snails ' },
      { type: 'paragraph', vi: '- Nghêu (ngao), sò (thuộc các họ Arcidae, Arcticidae, Cardiidae, Donacidae, Hiatellidae, Mactridae, Mesodesmatidae, Myidae, Semelidae, Solecurtidae, Solenidae, Tridacnidae và Veneridae ):', en: '- Clams, cockles and ark shells (families Arcidae, Arcticidae, Cardiidae, Donacidae, Hiatellidae, Mactridae, Mesodesmatidae, Myidae, Semelidae, Solecurtidae, Solenidae, Tridacnidae và Veneridae ):' },
      { type: 'list', vi: '0307.71 - - Sống, tươi hoặc ướp lạnh', en: '0307.71 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.72 - - Đông lạnh', en: '0307.72 - - Frozen' },
      { type: 'list', vi: '0307.79 - - Loại khác', en: '0307.79 - - Other' },
      { type: 'paragraph', vi: '- Bào ngư ( Haliotis spp .) và ốc nhảy ( Strombus spp.):', en: '- Abalone (Haliotis spp .) and stromboid conchs (Strombus spp.):' },
      { type: 'list', vi: '0307.81 - - Bào ngư ( Haliotis spp .) sống, tươi hoặc ướp lạnh', en: '0307.81 - - Live, fresh or chilled abalone ( Haliotis spp .)' },
      { type: 'list', vi: '0307.82 - - Ốc nhảy (Strombus spp.) sống, tươi hoặc ướp lạnh', en: '0307.82 - - Live, fresh or chilled stromboid conchs (Strombus spp.)' },
      { type: 'list', vi: '0307.83 - - Bào ngư ( Haliotis spp. ) đông lạnh', en: '0307.83 - - Frozen abalone (Haliotis spp.)' },
      { type: 'list', vi: '0307.84 - - Ốc nhảy ( Strombus spp. ) đông lạnh', en: '0307.84 - - Frozen stromboid conchs (Strombus spp.)' },
      { type: 'list', vi: '0307.87 - - Bào ngư ( Haliotis spp. ) ở dạng khác', en: '0307.87 - - Other abalone (Haliotis spp.)' },
      { type: 'list', vi: '0307.88 - - Ốc nhảy ( Strombus spp. ) ở dạng khác', en: '0307.88 - - Other stromboid conchs ( Strombus spp. )' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other' },
      { type: 'list', vi: '0307.91 - - Sống, tươi hoặc ướp lạnh', en: '0307.91 - - Live, fresh or chilled' },
      { type: 'list', vi: '0307.92 - - Đông lạnh', en: '0307.92 - - Frozen' },
      { type: 'list', vi: '0307.99 - - Loại khác', en: '0307.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers :' },
      { type: 'list', vi: '(1) Động vật thân mềm, đã hoặc chưa bóc mai, vỏ, sống, tươi, ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối.', en: '(1) Molluscs, whether in shell or not, live, fresh, chilled, frozen, dried, salted or in brine.' },
      { type: 'list', vi: '(2) Động vật thân mềm đã hun khói, đã hoặc chưa bóc mai, vỏ, đã hoặc chưa được nấu chín trước hoặc trong quá trình hun khói.', en: '(2) Smoked molluscs, whether in shell or not, whether or not cooked before or during the smoking process.' },
      { type: 'paragraph', vi: 'Các loại động vật thân mềm chính là hàu, điệp, vẹm, mực nang, mực ống, bạch tuộc, ốc, nghêu (ngao), sò, bào ngư và ốc nhảy (stromboid conchs).', en: 'The main kinds of molluscs are oysters, scallops, mussels, cuttle fish, squid, octopus, snails, clams, cockles, ark shells, abalone and stromboid conchs.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các loài động vật thân mềm chỉ được trụng/chần nước sôi (scalding) hoặc các dạng sốc nhiệt khác (không đòi hỏi phải nấu chín), cần thiết để mở vỏ hoặc cố định nhuyễn thể trước khi vận chuyển hoặc đông lạnh, cũng vẫn thuộc Chương này.', en: 'This heading also covers molluscs that have been subjected only to scalding or other types of heat shock (which do not entail cooking as such), necessary to open the shell or stabilize the mollusc prior to transportation or freezing.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các bộ phận của động vật thân mềm, với điều kiện chúng được chế biến như cách đã nêu ở mục (1) hoặc (2) trên.', en: 'This heading also covers parts of molluscs, provided they have been subjected to no other processes than those specified in (1) or (2) above. ' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm con hàu nhỏ (con hàu nhỏ dùng để nuôi), thích hợp hoặc phù hợp dùng làm thức ăn cho người.', en: 'The heading also includes oyster spat (small oysters intended for cultivation), fit or suitable for human consumption.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm động vật thân mềm đã chế biến hoặc bảo quản bằng cách không nêu trong nhóm (ví dụ, động vật thân mềm được luộc trong nước hoặc bảo quản trong dấm) ( nhóm 16.05 ).', en: 'The heading does not cover molluscs prepared or preserved by processes not provided for in this heading (e.g., molluscs cooked in boiling in water or preserved in vinegar) (heading 16.05).' },

      { type: 'heading', vi: '03.08 - Động vật thủy sinh không xương sống trừ động vật giáp xác và động vật thân mềm, sống, tươi, ướp lạnh, đông lạnh, khô, muối hoặc ngâm nước muối; động vật thủy sinh không xương sống hun khói trừ động vật giáp xác và động vật thân mềm, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói.', en: '03.08 - Aquatic invertebrates other than crustaceans and molluscs, live, fresh, chilled, frozen, dried, salted or in brine; smoked aquatic invertebrates other than crustaceans and molluscs, whether or not cooked before or during the smoking process.' },
      { type: 'paragraph', vi: '- Hải sâm ( Stichopus japonicus, Holothuroide ):', en: '- Sea cucumbers ( Stichopus japonicus, Holothuroide ):' },
      { type: 'list', vi: '0308.11 - - Sống, tươi hoặc ướp lạnh', en: '0308.11 - - Live, fresh or chilled' },
      { type: 'list', vi: '0308.12 - - Đông lạnh', en: '0308.12 - - Frozen' },
      { type: 'list', vi: '0308.19 - - Loại khác', en: '0308.19 - - Other' },
      { type: 'paragraph', vi: '- Cầu gai ( Strongylocentrotus spp., Paracentrotus lividus, Loxechinus albus, Echinus esculentus ):', en: '- Sea urchins ( Strongylocentrotus spp., Paracentrotus lividus, Loxechinus albus, Echinus esculentus ):' },
      { type: 'list', vi: '0308.21 - - Sống, tươi hoặc ướp lạnh', en: '0308.21 - - Live, fresh or chilled' },
      { type: 'list', vi: '0308.22 - - Đông lạnh', en: '0308.22 - - Frozen' },
      { type: 'list', vi: '0308.29 - - Loại khác', en: '0308.29 - - Other' },
      { type: 'list', vi: '0308.30 - Sứa ( Rhopilema spp .)', en: '0308.30 - - Jellyfish ( Rhopilema spp .)' },
      { type: 'list', vi: '0308.90 - Loại khác', en: '0308.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Động vật thủy sinh không xương sống trừ động vật giáp xác và động vật thân mềm, sống, tươi, ướp lạnh, đông lạnh, làm khô, muối hoặc ngâm nước muối.', en: '(1) Aquatic invertebrates other than crustaceans and molluscs, live, fresh, chilled, frozen, dried, salted or in brine.' },
      { type: 'list', vi: '(2) Động vật thủy sinh không xương sống hun khói trừ động vật giáp xác và động vật thân mềm, đã hoặc chưa làm chín trước hoặc trong quá trình hun khói.', en: '(2) Smoked aquatic invertebrates other than crustaceans and molluscs, whether or not cooked before or during the smoking process.' },
      { type: 'paragraph', vi: 'Các loài động vật thủy sinh không xương sống chủ yếu là cầu gai, hải sâm (beches-de-mer) và sứa.', en: 'The principal varieties of aquatic invertebrates are sea-urchins, sea cucumbers (beches-de-mer) and jellyfish.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các bộ phận của động vật thủy sinh không xương sống (ví dụ tuyến sinh dục của cầu gai), với điều kiện chúng được chế biến như cách đã nêu tại mục (1) hoặc (2) trên.', en: 'This heading also covers parts of aquatic invertebrates (e.g., gonads of sea-urchins), provided they have been subjected to no other processes than those specified in (1) or (2) above.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các động vật thủy sinh không xương sống được chế biến hay bảo quản theo những cách không được nêu trong nhóm này (ví dụ động vật thủy sinh không xương sống được luộc trong nước hoặc bảo quản trong dấm) ( nhóm 16.05 ).', en: 'The heading does not cover aquatic invertebrates prepared or preserved by processes not provided for in this heading (e.g., aquatic invertebrates boiled in water or preserved in vinegar) (heading 16.05).' },

      { type: 'heading', vi: '03.09 - Bột mịn, bột thô và viên của cá, động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, thích hợp dùng làm thức ăn cho người.', en: '03.09 - Flours, meals and pellets of fish, crustaceans, molluscs and other aquatic invertebrates, fit for human consumption.' },
      { type: 'list', vi: '0309.10 - Của cá', en: '0309.10 - Of fish' },
      { type: 'list', vi: '0309.90 - Loại khác', en: '0309.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại bột mịn, bột thô và viên từ cá, động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, đã hoặc chưa nấu chín.', en: 'This heading covers flours, meals and pellets obtained from fish, crustaceans, molluscs and other aquatic invertebrates, whether or not cooked.' },
      { type: 'paragraph', vi: 'Bột mịn và bột thô từ cá, đã khử chất béo (ví dụ bằng phương pháp chiết xuất dung môi) hoặc đã qua xử lý nhiệt, thích hợp dùng làm thức ăn cho người, vẫn được phân loại ở đây.', en: 'Fish flour and fish meal, defatted (for example by a solvent-extract method) or subjected to heat treatment, fit for human consumption, remain classified here.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các loại bột mịn, bột thô và viên của cá, động vật giáp xác, động vật thân mềm và động vật thủy sinh không xương sống khác, không thích hợp dùng làm thức ăn cho người (nhóm 23.01).', en: 'The heading does not cover flours, meals and pellets of fish, crustaceans, molluscs and other aquatic invertebrates, unfit for human consumption (heading 23.01).' }
    ]
  },
        
  // ------------------------------------------------------------
  // CHAPTER 4
  // ------------------------------------------------------------
  {
    chapterNumber: 4,
    titleVi: 'CHƯƠNG 4: SẢN PHẨM BƠ SỮA; TRỨNG CHIM VÀ TRỨNG GIA CẦM; MẬT ONG TỰ NHIÊN; SẢN PHẨM ĂN ĐƯỢC GỐC ĐỘNG VẬT, CHƯA ĐƯỢC CHI TIẾT HOẶC GHI Ở NƠI KHÁC',
    titleEn: 'CHAPTER 4: DAIRY PRODUCE; BIRDS\' EGGS; NATURAL HONEY; EDIBLE PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED',
    content: [
      { type: 'heading', vi: 'PHẦN I: ĐỘNG VẬT SỐNG; CÁC SẢN PHẨM TỪ ĐỘNG VẬT', en: 'SECTION I : LIVE ANIMALS; ANIMAL PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
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
      { type: 'heading', vi: 'Chương 4: Sản phẩm bơ sữa; trứng chim và trứng gia cầm; mật ong tự nhiên; sản phẩm ăn được gốc động vật, chưa được chi tiết hoặc ghi ở nơi khác', en: 'Chapter 4: Dairy produce; birds\' eggs; natural honey; edible products of animal origin, not elsewhere specified or included' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1.- Khái niệm "sữa" được hiểu là sữa còn nguyên kem hoặc sữa đã tách kem một phần hoặc toàn bộ.', en: '1. - The expression “milk" means full cream milk or partially or completely skimmed milk.' },
      { 
        type: 'paragraph', 
        vi: '2. - Theo mục đích của nhóm 04.03, sữa chua có thể được cô đặc hoặc được tạo hương và có thể chứa thêm đường hoặc chất làm ngọt khác, trái cây, quả hạch, ca cao, sô cô la, gia vị, cà phê hoặc chiết xuất cà phê, thực vật, các bộ phận của thực vật, ngũ cốc hoặc các loại bánh, với điều kiện chất được thêm vào không được sử dụng cho mục đích thay thế, toàn bộ hoặc một phần, bất kỳ thành phần nào của sữa, và sản phẩm vẫn giữ được đặc tính cơ bản của sữa chua.', 
        en: '2. - For the purposes of heading 04.03, yogurt may be concentrated or flavoured and may contain added sugar or other sweetening matter, fruit, nuts, cocoa, chocolate, spices, coffee or coffee extracts, plants, parts of plants, cereals or bakers’ wares, provided that any added substance is not used for the purpose of replacing, in whole or in part, any milk constituent, and the product retains the essential character of yogurt.' 
      },
      { type: 'paragraph', vi: '3.- Theo mục đích của nhóm 04.05:', en: '3. - For the purposes of heading 04.05 :' },
      { type: 'list', vi: '(a) Khái niệm "bơ" được hiểu là bơ tự nhiên, bơ whey hoặc bơ phối chế lại (tươi, muối hoặc bơ trở mùi, kể cả bơ đã đóng hộp) được tách từ sữa, với hàm lượng chất béo sữa từ 80% trở lên nhưng không quá 95% tính theo trọng lượng, có hàm lượng chất khô không có chất béo tối đa là 2% và hàm lượng nước tối đa là 16% tính theo trọng lượng. Bơ không chứa chất nhũ hoá, nhưng có thể chứa natri clorua, chất màu thực phẩm, muối làm trung hoà và vi khuẩn vô hại nuôi cấy để tạo ra axit lactic.', en: '(a) The term “butter” means natural butter, whey butter or recombined butter (fresh, salted or rancid, including canned butter) derived exclusively from milk, with a milkfat content of 80 % or more but not more than 95 % by weight, a maximum milk solids- not-fat content of 2 % by weight and a maximum water content of 16 % by weight. Butter does not contain added emulsifiers, but may contain sodium chloride, food colours, neutralising salts and cultures of harmless lactic-acid-producing bacteria.' },
      { type: 'list', vi: '(b) Khái niệm "chất phết từ bơ sữa" (dairy spreads) nghĩa là chất ở dạng nhũ tương nước trong dầu có thể phết lên bánh, chứa chất béo sữa như là chất béo duy nhất trong sản phẩm, với hàm lượng chất béo sữa từ 39% trở lên nhưng dưới 80% tính theo trọng lượng.', en: '(b) The expression “dairy spreads" means a spreadable emulsion of the water-in-oil type, containing milkfat as the only fat in the product, with a milkfat content of 39 % or more but less than 80 % by weight.' },
      { type: 'paragraph', vi: '4.- Các sản phẩm thu được từ quá trình cô đặc whey có pha thêm sữa hoặc chất béo của sữa được phân loại như pho mát trong nhóm 04.06 nếu có đủ ba tiêu chuẩn sau:', en: '4. - Products obtained by the concentration of whey and with the addition of milk or milkfat are to be classified as cheese in heading 04.06 provided that they have the three following characteristics:' },
      { type: 'list', vi: '(a) hàm lượng chất béo của sữa, chiếm từ 5% trở lên, tính theo trọng lượng ở thể khô;', en: '(a) a milkfal content, by weight of the dry matter, of 5 % or more;' },
      { type: 'list', vi: '(b) hàm lượng chất khô, tối thiểu là 70% nhưng không quá 85%, tính theo trọng lượng; và', en: '(b) a dry matter content, by weight, of at least 70 % but not exceeding 85 %; and' },
      { type: 'list', vi: '(c) sản phẩm được đóng khuôn hoặc có thể được đóng khuôn.', en: '(c) they are moulded or capable of being moulded.' },
      { type: 'paragraph', vi: '5.- Chương này không bao gồm:', en: '5.- This Chapter does not cover:' },
      { type: 'list', vi: '(a) Công trùng không còn sống, không thích hợp sử dụng cho người (nhóm 05.11);', en: '(a) Non-living insects, unfit for human consumption (heading 05.11);' },
      { type: 'list', vi: '(b) Các sản phẩm thu được từ whey, có hàm lượng lactoza khan chiếm trên 95%, tính theo trọng lượng ở thể khô (nhóm 17.02);', en: '(b) Products obtained from whey, containing by weight more than 95 % lactose, expressed as anhydrous lactose, calculated on the dry matter (heading 17.02);' },
      { type: 'list', vi: '(c) Các sản phẩm thu được từ sữa bằng cách thay thế một hoặc nhiều thành phần tự nhiên của sữa (ví dụ, chất béo butyric) bởi chất khác (ví dụ, chất béo oleic) (nhóm 19.01 hoặc 21.06); hoặc', en: '(c) Products obtained from milk by replacing one or more of its natural constituents (for example, butyric fats) by another substance (for example, oleic fats) (heading 19.01 or 21.06); or' },
      { type: 'list', vi: '(d) Các albumin (kể cả dịch cô đặc từ hai hay nhiều whey protein, có hàm lượng whey protein chiếm trên 80% tính theo trọng lượng ở thể khô) (nhóm 35.02) hoặc globulin (nhóm 35.04).', en: '(d) Albumins (including concentrates of two or more whey proteins, containing by weight more than 80 % whey proteins, calculated on the dry matter) (heading 35.02) or globulins (heading 35.04).' },
      { 
        type: 'paragraph', 
        vi: '6. - Theo mục đích của nhóm 04.10, thuật ngữ “côn trùng" có nghĩa là côn trùng không còn sống ăn được, toàn hộ hoặc từng phần, tươi, ướp lạnh, đông lạnh, làm khô, hun khói, muối hoặc ngâm nước muối, cũng như bột mịn và bột thô của côn trùng, thích hợp dùng làm thức ăn cho người. Tuy nhiên, nhóm này không bao gồm các loại côn trùng không còn sống ăn được, đã chế biến hoặc bảo quản bằng cách khác (thường thuộc Phần IV).', 
        en: '6.- For the purposes of heading 04.10, the term "insects” means edible non-living insects, whole or in parts, fresh, chilled, frozen, dried, smoked, salted or in brine, as well as flours and meals of insects, fit for human consumption. However, it does not cover edible nonliving insects otherwise prepared or preserved (generally Section IV).' 
      },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Notes.' },
      { 
        type: 'paragraph', 
        vi: '1. Theo mục đích của phân nhóm 0404.10, khái niệm "whey đã được cải biến" là các sản phẩm bao gồm các thành phần whey, nghĩa là whey đã tách toàn bộ hoặc một phần lactoza, protein hoặc chất khoáng, whey đã thêm các thành phần whey tự nhiên, và các sản phẩm thu được bằng cách pha trộn các thành phần whey tự nhiên.', 
        en: '1.- For the purposes of subheading 0404.10, the expression “modified whey” means products consisting of whey constituents, that is, whey from which all or part of the lactose, proteins or minerals have been removed, whey to which natural whey constituents have been added, and products obtained by mixing natural whey constituents.' 
      },
      { type: 'paragraph', vi: '2. Theo mục đích của phân nhóm 0405.10, khái niệm "bơ" không bao gồm bơ khử nước hoặc ghee (phân nhóm 0405.90).', en: '2.- For the purposes of subheading 0405.10 the term “ butter” does not include dehydrated butter or ghee (subheading 0405.90).' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm:', en: 'This Chapter covers:' },
      { type: 'list', vi: '(I) Các sản phẩm bơ sữa :', en: '(1) Dairy products :' },
      { type: 'list', vi: '(A) Sữa , nghĩa là, sữa nguyên kem và sữa đã tách kem một phần hoặc toàn bộ.', en: '(A) Milk , i.e., full cream milk and partially or completely skimmed milk.' },
      { type: 'list', vi: '(B) Kem.', en: '(B) Cream.' },
      { type: 'list', vi: '(C) Buttermilk, sữa đông và kem đông, sữa chua, kephir và sữa, kem khác đã lên men hoặc axit hoá.', en: '(C) Buttermilk, curdled milk and cream, yogurt, kephir and other fermented or acidified milk and cream.' },
      { type: 'list', vi: '(D) Whey .', en: '(D) Whey.' },
      { type: 'list', vi: '(E) Các sản phẩm có chứa thành phần sữa tự nhiên, chưa được chi tiết hoặc ghi ở nơi khác.', en: '(F) Products consisting of natural milk constituents, not elsewhere specified or included.' },
      { type: 'list', vi: '(F) Bơ và các chất béo và các loại dầu khác tách từ sữa; chất phết từ bơ sữa (dairy spreads).', en: '(F) Butter and other fats and oils derived from milk; dairy spreads.' },
      { type: 'list', vi: '(G) Pho mát và curd .', en: '(G) Cheese and curd.' },
      { type: 'paragraph', vi: 'Những sản phẩm nêu tại các Mục (A) đến (E) trên đây có thể chứa, ngoài những thành phần sữa tự nhiên (ví dụ sữa giàu vitamin hoặc muối khoáng), lượng nhỏ chất ổn định để duy trì tính ổn định tự nhiên của sản phẩm trong khi vận chuyển dưới dạng lỏng (ví dụ: dinatri photphát, trinatri xitrat và canxi clrorua), cũng như lượng rất nhỏ chất chống oxy hoá hoặc vitamin thường không có trong sản phẩm. Một số sản phẩm loại này cũng có thể chứa lượng nhỏ các chất hoá học (ví dụ natri bicacbonat) cần thiết trong chế biến; những sản phẩm dưới dạng bột hoặc hạt có thể bao gồm những chất chống đóng bánh (ví dụ, phospholipit, điôxít silic không định hình).', en: 'The products mentioned at Items (A) to (F) above may contain, in addition to natural milk constituents (e.g., milk enriched in vitamins or mineral salts), small quantities of stabilising agents which serve to maintain the natural consistency of the product during transport in liquid state (disodium phosphate, trisodium citrate and calcium chloride, for instance) as well as very small quantities of anti-oxidants or of vitamins not normally found in the product. Certain of these products may also contain small quantities of chemicals (e.g., sodium bicarbonate) necessary for their processing; products in the form of powder or granules may contain anticaking agents (for example, phospholipids, amorphous silicon dioxide).' },
      { type: 'paragraph', vi: 'Đối với mục đích của Chú giải 5 (c) của Chương này, khái niệm “chất béo butyric" có nghĩa là chất béo sữa và khái niệm "chất béo oleic" có nghĩa là các chất béo khác chất béo sữa, cụ thể là chất béo thực vật (ví dụ dầu ô liu).', en: 'For the purposes of Note 5 (c) to this Chapter the expression “butyric fats” means milk fats and the expression "oleic fats" means fats other than milk fats, in particular vegetable fats (e.g., olive oil).".' },
      { type: 'paragraph', vi: 'Mặt khác, Chương này không bao gồm những sản phẩm làm từ whey, chứa trên 95% lactose, dưới dạng lactose khan, tính theo hàm lượng vật chất khô, ( nhóm 17.02 ). Để tính tỷ lệ phần trăm hàm lượng lactose trong một sản phẩm, khái niệm "vật chất khô" cần được đưa vào để loại trừ cả nước tự do và nước kết tinh.', en: 'On the other hand, the Chapter excludes products obtained from whey, containing by weight more than 95 % lactose, expressed as anhydrous lactose, calculated on the dry matter (heading 17.02). For the purposes of calculating the percentage weight of lactose in a product the expression " dry matter" should be taken to exclude both free water and water of crystallisation.' },
      { type: 'paragraph', vi: 'Ngoài những loại khác, Chương này cũng không bao gồm các sản phẩm sau:', en: 'The Chapter also excludes , inter alia , the following :' },
      { type: 'list', vi: '(a) Những chế phẩm thực phẩm từ những sản phẩm bơ sữa (nhất là nhóm 19.01 ).', en: '(a) Food preparations based on dairy products (in particular, heading 19.01 ).' },
      { type: 'list', vi: '(b) Những sản phẩm làm từ sữa bằng cách thay thế một hay nhiều thành phần tự nhiên (ví dụ, chất béo butyric) bằng chất khác (ví dụ, chất béo oleic) ( nhóm 19.01 hoặc 21.06 ).', en: '(b) Products obtained from milk by replacing one or more of the natural constituents (e.g., butyric fats) by another substance (e.g., oleic fats) ( heading 19.01 or 21.06 ).' },
      { type: 'list', vi: '(c) Kem lạnh và sản phẩm ăn được tương tự khác ( nhóm 21.05 ).', en: '(c) Ice cream and other edible ice ( heading 21.05 ).' },
      { type: 'list', vi: '(d) Dược phẩm thuộc Chương 30 .', en: '(d) Medicaments of Chapter 30 .' },
      { type: 'list', vi: '(e) Casein ( nhóm 35.01 ), albumin sữa ( nhóm 35.02 ) và casein đã được làm cứng ( nhóm 39.13 ).', en: '(e) Casein ( heading 35.01 ), milk albumin ( heading 35.02 ) and hardened casein ( heading 39.13 ).' },
      { type: 'list', vi: '(II) Trứng và lòng đỏ trứng chim và gia cầm .', en: '(II) Birds’ eggs and egg yolks.' },
      { type: 'list', vi: '(III) Mật ong tự nhiên .', en: '(III) Natural honey.' },
      { type: 'list', vi: '(IV) Côn trùng và các sản phẩm ăn được gốc động vật khác, chưa được chi tiết hoặc ghi ở nơi khác.', en: '(IV) Insects or other edible products of animal origin, not elsewhere specified or included.' },

      { type: 'heading', vi: '04.01 - Sữa và kem, chưa cô đặc và chưa pha thêm đường hoặc chất tạo ngọt khác.', en: '04.01 - Milk and cream, not concentrated nor containing added sugar or other sweetening matter.' },
      { type: 'list', vi: '0401.10 - Có hàm lượng chất béo không quá 1% tính theo khối lượng', en: '0401.10 - Of a fat content, by weight, not exceeding 1 %' },
      { type: 'list', vi: '0401.20 - Có hàm lượng chất béo trên 1% nhưng không quá 6% tính theo khối lượng', en: '0401.20 - Of a fat content, by weight, exceeding 1 % but not exceeding 6 %' },
      { type: 'list', vi: '0401.40 - Có hàm lượng chất béo trên 6% nhưng không quá 10% tính theo khối lượng', en: '0401.40 - Of a fat content, by weight, exceeding 6% but not exceeding 10 %' },
      { type: 'list', vi: '0401.50 - Có hàm lượng chất béo trên 10% tính theo khối lượng', en: '0401.50 - Of a fat content, by weight, exceeding 10 %' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm sữa (như đã định nghĩa trong Chú giải 1 của Chương này) và kem đã hoặc chưa thanh trùng, tiệt trùng hoặc bảo quản cách khác, đồng thể hoá hoặc pepton hoá; nhưng nhóm này không bao gồm sữa và kem đã cô đặc hoặc pha thêm đường hoặc chất làm ngọt khác ( nhóm 04.02 ) và sữa và kem đã được làm đông, được lên men hoặc được axit hoá ( nhóm 04.03 ).', en: 'This heading covers milk (as defined in Note 1 to this Chapter) and cream, whether or not pasteurised, sterilised or otherwise preserved, homogenised or peptonised; but it excludes milk and cream which have been concentrated or which contain added sugar or other sweetening matter ( heading 04.02 ) and curdled, fermented or acidified milk and cream ( heading 04.03).' },
      { type: 'paragraph', vi: 'Các sản phẩm trong nhóm này có thể ở dạng đông lạnh và có thể chứa các chất phụ gia nêu trong Chú giải tổng quát của Chương này. Nhóm này cũng bao gồm cả sữa và kem được hoàn nguyên có chất lượng và số lượng các thành phần như sản phẩm tự nhiên.', en: 'The products of this heading may be frozen and may contain the additives referred to in the General Explanatory Note to this Chapter. The heading also covers reconstituted milk and cream having the same qualitative and quantitative composition as the natural products.' },

      { type: 'heading', vi: '04.02 - Sữa và kem, đã cô đặc hoặc đã pha thêm đường hoặc chất tạo ngọt khác (+).', en: '04.02 - Milk and cream, concentrated or containing added sugar or other sweetening matter (+).' },
      { type: 'list', vi: '0402.10 - Dạng bột, hạt hoặc các thể rắn khác, có hàm lượng chất béo không quá 1,5% tính theo khối lượng', en: '0402.10 - In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5 %' },
      { type: 'paragraph', vi: '- Dạng bột, hạt hoặc các thể rắn khác, có hàm lượng chất béo trên 1,5% tính theo khối lượng', en: '- In powder, granules or other solid forms, of a fat content, by weight, exceeding 1.5 % :' },
      { type: 'list', vi: '0402.21 - - Chưa pha thêm đường hoặc chất tạo ngọt khác', en: '0402.21 - - Not containing added sugar or other sweetening matter' },
      { type: 'list', vi: '0402.29 - - Loại khác', en: '0402.29 - - Other' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0402.91 - - Chưa pha thêm đường hoặc chất tạo ngọt khác', en: '0402.91 - - Not containing added sugar or other sweetening matter' },
      { type: 'list', vi: '0402.99 - - Loại khác', en: '0402.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm sữa (như đã định nghĩa trong Chú giải 1 của Chương này) và kem, cô đặc (ví dụ, bằng cách làm bay hơi) hoặc pha thêm đường hoặc chất tạo ngọt khác, ở dạng lỏng, nhão hoặc rắn (dạng khối, bột hoặc hạt) và đã hoặc chưa được bảo quản hoặc hoàn nguyên.', en: 'This heading covers milk (as defined in Note 1 to this Chapter) and cream, concentrated (for example, evaporated) or containing added sugar or other sweetening matter, whether liquid, paste or solid (in blocks, powder or granules) and whether or not preserved or reconstituted.' },
      { type: 'paragraph', vi: 'Sữa bột có thể chứa lượng nhỏ tinh bột (không quá 5% tính theo trọng lượng), được thêm vào, nhất là để giữ sữa hoàn nguyên trong trạng thái vật lý bình thường.', en: 'Milk powder may contain small quantities of starch (not exceeding 5 % by weight), added, in particular, to maintain the reconstituted milk in its normal physical state.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Sữa hoặc kem, đã được làm đông, được lên men hoặc được axit hoá ( nhóm 04.03 ).', en: '(a) Curdled, fermented or acidified milk or cream ( heading 04.03 ).' },
      { type: 'list', vi: '(b) Đồ uống gồm sữa được tạo hương bằng ca cao hoặc các chất khác ( nhóm 22.02 ).', en: '(b) Beverages consisting of milk flavoured with cocoa or other substances ( heading 22.02 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0402.10, 0402.21 và 0402.29.', en: 'Subheadings 0402.10, 0402.21 and 0402.29' },
      { type: 'paragraph', vi: 'Những phân nhóm này không gồm sữa hoặc kem cô đặc dưới dạng nhão ( phân nhóm 0402.91 và 0402.99 ).', en: 'These subheadings do not cover concentrated milk or cream in the form of paste ( subheadings 0402.91 and 0402.99 ).' },

      { type: 'heading', vi: '04.03 - Sữa chua; buttermilk, sữa đông và kem đông, kephir và sữa, kem khác đã lên men hoặc axit hoá, đã hoặc chưa cô đặc hoặc pha thêm đường hoặc chất tạo ngọt khác hoặc hương liệu hoặc bổ sung thêm hoa quả, quả hạch (nuts) hoặc ca cao.', en: '04.03 - Yogurt; buttermilk, curdled milk and cream, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar or other sweetening matter or flavoured or containing added fruit, nuts or cocoa.' },
      { type: 'list', vi: '0403.20 - Sữa chua', en: '0403.20 - Yogurt' },
      { type: 'list', vi: '0403.90 - Loại khác', en: '0403.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm buttermilk và tất cả sữa và kem đã lên men hoặc axit hoá và bao gồm cả sữa đông, kem đông, sữa chua và kephir. Những sản phẩm thuộc nhóm này có thể ở dạng lỏng, nhão hoặc rắn (bao gồm cả đông lạnh) và có thể được cô đặc (ví dụ bằng cách làm bay hơi hoặc ở dạng khối, bột hoặc hạt) hoặc được bảo quản.', en: 'This heading covers buttermilk, and all fermented or acidified milk and cream and includes curdled milk and cream, yogurt and kephir. The products of this heading may be in liquid, paste or solid (including frozen) form and may be concentrated (e.g., evaporated or in blocks, powder or granules) or preserved.' },
      { type: 'paragraph', vi: 'Sữa lên men thuộc nhóm này có thể gồm sữa bột nhóm 04.02 có chứa thêm lượng nhỏ men lactic để dùng trong các sản phẩm thịt chế biến sẵn hoặc như một phụ gia cho thức ăn chăn nuôi.', en: 'Fermented milk of this heading may consist of milk powder of heading 04.02 containing small quantities of added lactic ferments, with a view to its use in prepared meat products or as an additive tor animal feed.' },
      { type: 'paragraph', vi: 'Sữa axit hoá trong nhóm này có thể gồm sữa bột nhóm 04.02 có chứa thêm lượng nhỏ axit (bao gồm cả nước chanh) dạng tinh thể để làm sữa đông bằng cách hoàn nguyên với nước.', en: 'Acidified milk of this heading may consist of milk powder of heading 04.02 containing small quantities of added acid (including lemon juice) in crystal form in order to produce curdled milk on reconstitution with water.' },
      { type: 'paragraph', vi: 'Ngoài những chất bổ sung được nêu trong Chú giải tổng quát của Chương này, những sản phẩm của nhóm này cũng có thể được pha thêm đường hoặc chất tạo ngọt khác, hương liệu, hoa quả (gồm thịt, cùi, cơm của quả và mứt), quả hạch (nuts) hoặc ca cao.', en: 'Apart from the additives mentioned in the General Explanatory Note to this Chapter, the products of this heading may also contain added sugar or other sweetening matter, flavourings, fruit (including pulp and jams), nuts or cocoa.' },
      { type: 'paragraph', vi: 'Ngoài ra, sữa chua có thể chứa thêm sôcôla, gia vị, cà phê hoặc chiết xuất cà phê, thực vật, các bộ phận của thực vật, ngũ cốc hoặc các loại bánh, với điều kiện chất được thêm vào không được sử dụng cho mục đích thay thế, toàn bộ hoặc một phần, bất kỳ thành phần nào của sữa, và sản phẩm vẫn giữ được đặc tính cơ bản của sữa chua.', en: 'In addition, yogurt may contain added chocolate, spices, coffee or coffee extracts, plants, parts of plants, cereals or bakers’ wares, provided that any of these substances are not used for the purpose of replacing, in whole or in part, any milk constituent, and the product retains the essential character of yogurt.' },

      { type: 'heading', vi: '04.04 - Whey, đã hoặc chưa cô đặc hoặc pha thêm đường hoặc chất tạo ngọt khác; các sản phẩm có chứa thành phần tự nhiên của sữa, đã hoặc chưa pha thêm đường hoặc chất tạo ngọt khác, chưa được chi tiết hoặc ghi ở nơi khác.', en: '04.04 - Whey, whether or not concentrated or containing added sugar or other sweetening matter; products consisting of natural milk constituents, whether or not containing added sugar or other sweetening matter, not elsewhere specified or included.' },
      { type: 'list', vi: '0404.10 - Whey và whey đã cải biến, đã hoặc chưa cô đặc hoặc pha thêm đường hoặc chất tạo ngọt khác', en: '0404.10 - Whey and modified whey, whether or not concentrated or containing added sugar or other sweetening matter' },
      { type: 'list', vi: '0404.90 - Loại khác', en: '0404.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm whey (tức là những thành phần tự nhiên của sữa còn lại sau khi đã tách chất béo và casein) và whey đã cải biến (xem Chú giải phân nhóm 1 của Chương này). Những sản phẩm này có thể ở dạng lỏng, nhão hoặc rắn (kể cả đông lạnh) và có thể được cô đặc (ví dụ dạng bột) hoặc được bảo quản.', en: 'This heading covers whey (i.e., the natural constituents of milk which remain after the fat and casein have been removed) and modified whey (see Subheading Note 1 to this Chapter). These products may be in liquid, paste or solid (including frozen) form, and may be concentrated (e.g., in powder) or preserved.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm những sản phẩm tươi hoặc được bảo quản có chứa những thành phần sữa mà các sản phẩm này không có thành phần giống với thành phần của sản phẩm tự nhiên, miễn là những sản phẩm này chưa được chi tiết hơn ở nơi khác. Do vậy nhóm này bao gồm những sản phẩm thiếu một hoặc nhiều thành phần sữa tự nhiên, sữa đã bổ sung các thành phần sữa tự nhiên (ví dụ để tạo ra sản phẩm giàu protein).', en: 'The heading also covers fresh or preserved products consisting of milk constituents, which do not have the same composition as the natural product, provided they are not more specifically covered elsewhere. Thus the heading includes products which lack one or more natural milk constituents, milk to which natural milk constituents have been added (to obtain, for example, a protein-rich product).' },
      { type: 'paragraph', vi: 'Ngoài những thành phần sữa tự nhiên và các chất phụ gia đã nêu trong Chú giải tổng quát của Chương này, những sản phẩm thuộc nhóm này cũng có thể pha thêm đường hoặc chất làm ngọt khác.', en: 'Apart from natural milk constituents and the additives mentioned in the General Explanatory Note to this Chapter, the products of this heading may also contain added sugar or other sweetening matter.' },
      { type: 'paragraph', vi: 'Những sản phẩm dạng bột của nhóm này, nhất là whey, có thể được thêm vào lượng nhỏ men lactic để dùng trong các sản phẩm thịt chế biến sẵn hoặc như phụ gia cho thức ăn chăn nuôi.', en: 'The powdered products of this heading, particularly whey, may contain small quantities of added lactic ferments, with a view to their use in prepared meat products or as additives for animal feed.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Sữa tách kem hoặc sữa hoàn nguyên có chất lượng và số lượng các thành phần như sữa tự nhiên ( nhóm 04.01 hoặc 04.02 ).', en: '(a) Skimmed milk or reconstituted milk having the same qualitative and quantitative composition as natural milk ( heading 04.01 or 04.02 ).' },
      { type: 'list', vi: '(b) Pho mát whey ( nhóm 04.06 ).', en: '(b) Whey cheese ( heading 04.06 ).' },
      { type: 'list', vi: '(c) Những sản phẩm làm từ whey, chứa trên 95% lactose, dưới dạng lactose khan, tính theo hàm lượng vật chất khô ( nhóm 17.02 ).', en: '(c) Products obtained from whey, containing by weight more than 95 % lactose, expressed as anhydrous lactose, calculated on the dry matter ( heading 17.02 ).' },
      { type: 'list', vi: '(d) Chế phẩm thực phẩm từ thành phần sữa tự nhiên nhưng có chứa những chất khác không được phép có trong các sản phẩm của Chương này (nhất là nhóm 19.01 ).', en: '(d) Food preparations based on natural milk constituents but containing other substances not allowed in the products of this Chapter (in particular, heading 19.01 ).' },
      { type: 'list', vi: '(e) Albumin (kể cả những chất cô đặc từ hai hay nhiều protein whey, chiếm trên 80% protein whey tính theo hàm lượng vật chất khô ( nhóm 35.02 ) hoặc globulin ( nhóm 35.04 ).', en: '(e) Albumins (including concentrates of two or more whey proteins, containing by weight more than 80 % whey proteins, calculated on the dry matter) ( heading 35.02 ) or globulins ( heading 35.04 ).' },

      { type: 'heading', vi: '04.05 - Bơ và các chất béo và các loại dầu khác tách từ sữa; chất phết từ bơ sữa (dairy spreads).', en: '04.05 - Butter and other fats and oils derived from milk; dairy spreads.' },
      { type: 'list', vi: '0405.10 - Bơ', en: '0405.10 - Butter' },
      { type: 'list', vi: '0405.20 - Chất phết từ bơ sữa', en: '0405.20 - Dairy spreads' },
      { type: 'list', vi: '0405.90 - Loại khác', en: '0405.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'paragraph', vi: '(A) Bơ .', en: '(A) Butter .' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm bơ tự nhiên, bơ whey hoặc bơ phối chế lại (tươi, muối hoặc bơ trở mùi, kể cả bơ đã đóng hộp). Bơ phải được tách hoàn toàn từ sữa và phải có hàm lượng chất béo sữa từ 80% trở lên nhưng không quá 95% tính theo trọng lượng, có hàm lượng chất khô không có chất béo tối đa là 2% và hàm lượng nước tối đa là 16% tính theo trọng lượng. Bơ không chứa chất nhũ hoá nhưng có thể chứa natri clorua, chất màu thực phẩm, muối làm trung hoà và vi khuẩn vô hại nuôi cấy để tạo ra axit lactic. (Xem Chú giải 2(a) của Chương này).', en: 'This group covers natural butter, whey butter and recombined butter (fresh, salted or rancid, including canned butter). Butter must be derived exclusively from milk and must have a milkfat content of 80 % or more but not more than 95 % by weight, a maximum milk solids-not-fat content of 2 % by weight and a maximum water content of 16 % by weight. Butter contains no added emulsifiers, but may contain sodium chloride, food colours, neutralising salts and cultures of harmless lactic- acid-producing bacteria. (See Note 2 (a) to this Chapter).' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm bơ làm từ sữa dê hoặc sữa cừu.', en: 'Butter obtained from goat\'s or sheep\'s milk is also covered by this group.' },
      { type: 'paragraph', vi: '(B) Chất phết từ bơ sữa.', en: '(B) Dairy spreads.' },
      { type: 'paragraph', vi: 'Nhóm này gồm chất phết từ bơ sữa, tức là chất ở dạng nhũ tương nước trong dầu có thể phết lên bánh, chứa chất béo sữa như là chất béo duy nhất trong sản phẩm, với hàm lượng chất béo sữa từ 39% trở lên nhưng dưới 80% tính theo trọng lượng (xem Chú giải 2 (b) của Chương này). Chất phết từ bơ sữa có thể bao gồm những thành phần tùy chọn như vi khuẩn vô hại nuôi cấy để tạo ra axít lactic, vitamin, natri clorua, đường, gelatin, tinh bột; màu thực phẩm; hương liệu; chất nhũ hoá; chất làm đặc và chất bảo quản.', en: 'This group covers dairy spreads, i.e., spreadable emulsions of the water-in-oil type, containing milkfat as the only fat in the product, and having a milkfat content of 39 % or more but less than 80 % by weight (see Note 2 (b) to this Chapter). Dairy spreads may contain optional ingredients such as cultures of harmless lactic-acid- producing bacteria, vitamins, sodium chloride, sugars, gelatine, starches; food colours: flavours; emulsifiers; thickening agents and preservatives.' },
      { type: 'paragraph', vi: '(C) Những chất béo và dầu khác tách từ sữa .', en: '(C) Other fats and oils derived from milk .' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm những chất béo và dầu khác tách từ sữa (ví dụ: chất béo sữa, chất béo bơ và dầu bơ). Dầu bơ là sản phẩm được tạo ra bằng cách tách nước và chất không béo từ bơ hoặc kem.', en: 'This group covers fats and oils derived from milk (e.g., milkfat, butterfat and butteroil). Butteroil is the product obtained by extracting the water and non-fat content from butter or cream.' },
      { type: 'paragraph', vi: 'Ngoài ra nhóm này cũng bao gồm bơ khan và ghee (loại bơ thường được làm chủ yếu từ sữa trâu hoặc bò), cũng như những sản phẩm chứa hỗn hợp bơ và lượng nhỏ thảo dược, gia vị, hương liệu, tỏi, v.v...(miễn là chúng vẫn giữ được đặc tính của những sản phẩm thuộc nhóm này).', en: 'This group further includes dehydrated butter and ghee (a kind of butter made most commonly from the milk of buffaloes or cows), as well as products consisting of a mixture of butter and small quantities of herbs, spices, flavourings, garlic, etc. (provided they retain the character of the products falling in this heading).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm chất phết từ chất béo có chứa các chất béo khác chất béo sữa hoặc có chứa hàm lượng chất béo sữa dưới 39% tính theo trọng lượng (thường thuộc nhóm 15.17 hoặc 21.06 ).', en: 'The heading does not cover fat spreads containing fats other than milkfats or containing less than 39 % by weight of milkfat (generally heading 15.17 or 21.06 ).' },

      { type: 'heading', vi: '04.06 - Pho mát và curd.', en: '04.06 - Cheese and curd (+).' },
      { type: 'list', vi: '0406.10 - Pho mát tươi (chưa ủ chín hoặc chưa xử lý), kể cả pho mát whey, và curd', en: '0406.10 - Fresh (unripened or uncured) cheese, including whey cheese, and curd' },
      { type: 'list', vi: '0406.20 - Pho mát đã xát nhỏ hoặc đã làm thành bột, của tất cả các loại', en: '0406.20 - Grated or powdered cheese, of all kinds' },
      { type: 'list', vi: '0406.30 - Pho mát đã chế biến, chưa xát nhỏ hoặc chưa làm thành bột', en: '0406.30 - Processed cheese, not grated or powdered' },
      { type: 'list', vi: '0406.40 - Pho mát vân xanh và pho mát khác có vân được sản xuất từ men Penicillium roqueforti', en: '0406.40 - Blue-veined cheese and other cheese containing veins produced by Penicillium roqueforti' },
      { type: 'list', vi: '0406.90 - Pho mát loại khác', en: '0406.90 - Other cheese' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại pho mát, đó là:', en: 'This heading covers all kinds of cheese, viz. :' },
      { type: 'list', vi: '(1) Pho mát tươi (kể cả pho mát chế biến từ whey hoặc buttermilk) và curd. Pho mát tươi là pho mát chưa ủ chín hoặc chưa xử lý, được dùng ngay sau khi chế biến (ví dụ: Ricotta, Broccio, pho mát cottage, pho mát kem, Mozzarella).', en: '(1) Fresh cheese (including cheese made from whey or buttermilk) and curd. Fresh cheese is an unripened or uncured cheese which is ready for consumption shortly after manufacture (e.g., Ricotta, Broccio, cottage cheese, cream cheese, Mozzarella).' },
      { type: 'list', vi: '(2) Pho mát đã xát nhỏ hoặc đã làm thành bột.', en: '(2) Grated or powdered cheese.' },
      { type: 'list', vi: '(3) Pho mát đã chế biến, còn gọi là pho mát chế biến. Nó được sản xuất bằng cách nghiền, trộn, nấu chảy và nhũ hoá, dưới tác động của nhiệt và tác nhân nhũ hoá hoặc axit hóa (kể cả muối tan chảy), một hay nhiều loại pho mát và một hay nhiều thành phần sau: kem hoặc những sản phẩm bơ sữa khác, muối, gia vị, hương liệu, phẩm màu và nước.', en: '(3) Processed cheese, also known as process cheese. It is manufactured by comminuting, mixing, melting and emulsifying, with the aid of heat and emulsifying or acidifying agents (including melting salts), one or more varieties of cheese and one or more of the following : cream or other dairy products, salt, spices, flavouring, colouring and water.' },
      { type: 'list', vi: '(4) Pho mát vân xanh và pho mát khác có vân được sản xuất từ men Penicillium roqueforti.', en: '(4) Blue-veined cheese and other cheese containing veins produced by Penicillium roqueforti.' },
      { type: 'list', vi: '(5) Pho mát mềm (ví dụ: Camembert, Brie).', en: '(5) Soft cheese (e.g., Camembert, Brie).' },
      { type: 'list', vi: '(6) Pho mát cứng vừa và pho mát cứng (ví dụ: Cheddar, Gouda, Gruyère, Parmesan).', en: '(6) Medium-hard cheese and hard cheese (e.g., Cheddar, Gouda, Gruyère, Parmesan).' },
      { type: 'paragraph', vi: 'Pho mát whey thu được bằng cách cô đặc whey và bổ sung thêm sữa hoặc chất béo sữa. Chúng được phân loại vào nhóm này chỉ khi có 3 đặc điểm sau:', en: 'Whey cheeses are obtained by concentrating whey and adding milk or milk fat. They are classified in this heading only if they have the three following characteristics :' },
      { type: 'list', vi: '(a) hàm lượng chất béo sữa từ 5% trở lên, tính theo trọng lượng ở thể khô.', en: '(a) a milkfat content, by weight of the dry matter, of 5 % or more;' },
      { type: 'list', vi: '(b) hàm lượng ít nhất 70% nhưng không quá 85% tính theo trọng lượng ở thể khô;', en: '(b) a dry matter content, by weight, of at least 70 % but not exceeding 85 %:' },
      { type: 'list', vi: '(c) được đóng khuôn hoặc có thể đóng khuôn được.', en: '(c) they are moulded or capable of being moulded.' },
      { type: 'paragraph', vi: 'Việc có thịt, cá, động vật giáp xác, thảo dược, gia vị, rau, quả, quả hạch (nuts), vitamin, sữa bột tách kem, v.v... không làm thay đổi cách phân loại miễn là sản phẩm giữ được đặc tính của pho mát.', en: 'The presence of meat, fish, crustaceans, herbs, spices, vegetables, fruit, nuts, vitamins, skimmed milk powder, etc., does not affect classification provided that the goods retain the character of cheese. ' },
      { type: 'paragraph', vi: 'Pho mát bao bột hoặc vụn bánh mì vẫn được phân loại vào nhóm này cho dù đã hoặc chưa được nấu trước, miễn là sản phẩm giữ được đặc tính của pho mát.', en: 'Cheeses which have been coated with batter or bread crumbs remain classified in this heading whether or not they have been pre-cooked, provided that the goods retain the character of cheese.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0406.40', en: 'Subheading 0406.40' },
      { type: 'paragraph', vi: 'Phân nhóm này bao gồm cả pho mát chứa các vân nhìn thấy được trong pho mát, vân có thể màu xanh nước biển, xanh lá, xanh biển hơi lục hoặc xám hơi trắng, như Bleu d’Auvergne, Bleu de Causses, Bleu de Quercy, Blue Cheshire, Blue Dorset, Blue Wensleydale, Cabrales, Danish Blue (Danablu), Gorgonzola, Mycella, Roquefort, Saingorlon và Stilton, cũng như các pho mát với các tên độc quyền hoặc tên thương mại, miễn là chúng đáp ứng các tiêu chuẩn trên .', en: 'This subheading covers cheese containing visible veins in the body of the cheese that may be blue, green, greenish-blue or whitish-grey in colour, such as Bleu d’Auvergne, Bleu de Causses, Bleu de Quercy, Blue Cheshire, Blue Dorset, Blue Wensleydale, Cabrales, Danish Blue (Danablu), Gorgonzola, Mycella, Roquefort, Saingorlon and Stilton, as well as cheeses with proprietary or trade names, provided they meet the above criterion.' },

      { type: 'heading', vi: '04.07 - Trứng chim và trứng gia cầm, nguyên vỏ, sống, đã bảo quản hoặc đã làm chín.', en: '04.07 – Birds’ eggs, in shell, fresh, preserved or cooked.' },
      { type: 'paragraph', vi: '- Trứng đã thụ tinh để ấp:', en: '- Fertilised eggs for incubation :' },
      { type: 'list', vi: '0407.11 - - Của gà thuộc loài Gallus domesticus', en: '0407.11 - - Of fowls of the species Gallus domesticus' },
      { type: 'list', vi: '0407.19 - - Loại khác', en: '0407.19 - - Other' },
      { type: 'paragraph', vi: '- Trứng sống khác:', en: '- Other fresh eggs :' },
      { type: 'list', vi: '0407.21 - - Của gà thuộc loài Gallus domesticus', en: '0407.21 - - Of fowls of the species Gallus domesticus' },
      { type: 'list', vi: '0407.29 - - Loại khác', en: '0407.29 - - Other' },
      { type: 'list', vi: '0407.90 - Loại khác ', en: '0407.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm trứng đã thụ tinh để ấp và trứng sống khác (kể cả ướp lạnh) của tất cả các loài gia cầm và chim. Nhóm cũng bao gồm trứng đã bảo quản hoặc đã làm chín, nguyên vỏ.', en: 'This heading covers fertilised eggs for incubation and other fresh (including chilled) eggs of all birds. It also covers preserved or cooked eggs, in shell.' },

      { type: 'heading', vi: '04.08 - Trứng chim và trứng gia cầm, đã bóc vỏ, và lòng đỏ trứng, sống, làm khô, hấp chín hoặc luộc chín trong nước, đóng bánh, đông lạnh hoặc bảo quản cách khác, đã hoặc chưa thêm đường hoặc chất tạo ngọt khác.', en: '04.08 - Birds\' eggs, not in shell, and egg yolks, fresh, dried, cooked by steaming or by boiling in water, moulded, frozen or otherwise preserved, whether or not containing added sugar or other sweetening matter.' },
      { type: 'paragraph', vi: '- Lòng đỏ trứng:', en: '- Egg yolks' },
      { type: 'list', vi: '0408.11 - - Đã làm khô', en: '0408.11 - - Dried' },
      { type: 'list', vi: '0408.19 - - Loại khác', en: '0408.19 - - Other' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0408.91 - - Đã làm khô', en: '0408.91 - - Dried' },
      { type: 'list', vi: '0408.99 - - Loại khác', en: '0408.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm trứng cả quả, đã bóc vỏ, và lòng đỏ trứng của tất cả các loại gia cầm và chim. Những sản phẩm thuộc nhóm này có thể sống, được làm khô, hấp chín hoặc luộc chín trong nước, đóng khuôn (ví dụ "trứng dài" hình trụ), đông lạnh hoặc được bảo quản cách khác. Tất cả những sản phẩm thuộc nhóm này có thể đã hoặc chưa thêm đường hoặc chất tạo ngọt khác và có thể được dùng làm thực phẩm hoặc dùng cho mục đích công nghiệp (ví dụ trong thuộc da).', en: 'This heading covers whole eggs, not in the shell, and egg yolks of all birds. The products of this heading may be fresh, dried, cooked by steaming or by boiling in water, moulded (e.g., cylindrical “long eggs”), frozen or otherwise preserved. All these fall in the heading whether or not containing added sugar or other sweetening matter and whether for use as food or for industrial purposes (e.g., in tanning).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Dầu của lòng đỏ trứng ( nhóm 15.06 ).', en: '(a) Oil of egg yolk (heading 15.06).' },
      { type: 'list', vi: '(b) Những chế phẩm làm từ trứng có chứa gia vị hoặc các chất phụ gia khác ( nhóm 21.06 ).', en: '(b) Egg preparations containing seasoning, spices or other additives (heading 21.06) .' },
      { type: 'list', vi: '(c) Lecithin ( nhóm 29.23 ).', en: '(c) Lecithin (heading 29.23).' },
      { type: 'list', vi: '(d) Lòng trắng trứng tách riêng (albumin trứng) ( nhóm 35.02 ).', en: '(d) Separate egg white (egg albumin) (heading 35.02).' },

      { type: 'heading', vi: '04.09 - Mật ong tự nhiên.', en: '04.09 - Natural honey.' },
      { type: 'paragraph', vi: 'Nhóm này gồm mật của ong ( Apis mellifera ) hoặc của côn trùng khác, đã quay ly tâm hoặc ở trong bánh tổ hoặc có chứa những miếng bánh tổ, miễn là chưa cho thêm đường hoặc bất kỳ chất nào khác. Mật có thể phân theo nguồn, xuất xứ hoặc màu sắc của hoa cho mật.', en: 'This heading covers honey produced by bees ( Apis mellifera ) or by other insects, centrifuged, or in the comb or containing comb chunks, provided that neither sugar nor any other substance has been added. Such honey may be designated by floral source, origin or colour.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm mật ong nhân tạo hoặc hỗn hợp giữa mật ong tự nhiên và mật ong nhân tạo ( nhóm 17.02 ).', en: 'The heading excludes artificial honey and mixtures of natural and artificial honey ( heading 17.02 ).' },

      { type: 'heading', vi: '04.10 - Côn trùng và sản phẩm ăn được gốc động vật, chưa được chi tiết hoặc ghi ở nơi khác.', en: '04.10. Insects and other edible products of animal origin, not elsewhere specified or included.' },
      { type: 'list', vi: '0410.10 - Côn trùng', en: '0410.10 - Insects' },
      { type: 'list', vi: '0410.90 - Loại khác', en: '0410.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm côn trùng (như đã định nghĩa tại Chú giải 6 Chương này) và các sản phẩm ăn được gốc động vật khác thích hợp dùng làm thức ăn cho người, chưa được chi tiết hoặc chưa được ghi ở nơi khác trong Danh mục. Tuy nhiên, các loại côn trùng không còn sống không thích hợp dùng làm thức ăn cho người (kể cả bột mịn và bột thô của chúng) được phân loại và nhóm 05.11', en: 'This heading covers insects (as defined in Note 6 to this Chapter) and other products of animal origin suitable for human consumption, not specified or included elsewhere in the Nomenclature. However, non-living insects unfit for human consumption (including flours and meals thereof) are classified in heading 05.11.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'It includes :' },
      { type: 'list', vi: '(1) Trứng rùa. Trứng của rùa sông hoặc rùa biển; có thể sống, làm khô hoặc bảo quản cách khác.', en: '(1) Turtles\' eggs . These are eggs laid by river or marine turtles; they may be fresh, dried or otherwise preserved.' },
      { type: 'paragraph', vi: 'Loại trừ dầu làm từ trứng rùa ( nhóm 15.06 ).', en: 'Turtle-egg oil is excluded (heading 15.06 ).' },
      { type: 'list', vi: '(2) Tổ yến. Chúng gồm chất tiết ra bởi chim yến, chất tiết này rắn lại nhanh chóng khi tiếp xúc với không khí.', en: '(2) Salanganes’ nests (“birds’ nests”). These consist of a substance secreted by the bird which solidifies rapidly on exposure to air.' },
      { type: 'paragraph', vi: 'Tổ yến có thể ở dạng chưa xử lý hoặc đã làm sạch để loại bỏ lông vũ, lông tơ, bụi và các tạp chất khác để làm thực phẩm. Chúng thường có dạng dải hoặc sợi màu trắng ngà.', en: 'The nests may be presented untreated, or they may have been cleaned to remove feathers, down, dust and other impurities in order to render them suitable for consumption. They are generally in the form of whitish strips or threads.' },
      { type: 'paragraph', vi: 'Tổ yến có hàm lượng protein cao và hầu như chỉ được dùng để nấu súp hoặc các chế phẩm thực phẩm khác.', en: 'Salanganes’ nests have a high protein content and are used almost exclusively to make soups or other food preparations.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm tiết động vật, ăn được hoặc không ăn được, dạng lỏng hoặc khô ( nhóm 05.11 hoặc 30.02 ).', en: 'The heading excludes animal blood, edible or not, liquid or dried ( heading 05.11 or 30.02 ).' }
    ]
  },
  
  // ------------------------------------------------------------
  // CHAPTERS 4-97 (Placeholders - Add content later)
  // ------------------------------------------------------------
  
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
