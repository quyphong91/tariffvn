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
  // CHAPTERS 5
  // ------------------------------------------------------------

  {
    chapterNumber: 5,
    titleVi: 'CHƯƠNG 5: SẢN PHẨM GỐC ĐỘNG VẬT, CHƯA ĐƯỢC CHI TIẾT HOẶC GHI Ở CÁC NƠI KHÁC',
    titleEn: 'CHAPTER 5: PRODUCTS OF ANIMAL ORIGIN, NOT ELSEWHERE SPECIFIED OR INCLUDED',
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
      { type: 'heading', vi: 'Chương 5: Sản phẩm gốc động vật, chưa được chi tiết hoặc ghi ở các nơi khác', en: 'Chapter 5: Products of animal origin, not elsewhere specified or included' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1. Chương này không bao gồm:', en: '1.- This Chapter does not cover:' },
      { type: 'list', vi: '(a) Các sản phẩm ăn được (trừ ruột, bong bóng và dạ dày của động vật, nguyên dạng và các mảnh của chúng, và tiết động vật, ở dạng lỏng hoặc khô);', en: '(a) Edible products (other than guts, bladders and stomachs of animals, whole and pieces thereof, and animal blood, liquid or dried);' },
      { type: 'list', vi: '(b) Da hoặc da sống (kể cả da lông), trừ các hàng hoá thuộc nhóm 05.05 và các đầu mẩu và phế liệu tương tự từ da hoặc da sống thô thuộc nhóm 05.11 (Chương 41 hoặc 43);', en: '(b) Hides or skins (including furskins) other than goods of heading 05.05 and parings and similar waste of raw hides or skins of heading 05.11 (Chapter 41 or 43);' },
      { type: 'list', vi: '(c) Vật liệu dệt gốc động vật, trừ lông đuôi hoặc bờm ngựa và phế liệu lông đuôi hoặc bờm ngựa (Phần XI); hoặc', en: '(c) Animal textile materials, other than horsehair and horsehair waste (Section XI); or' },
      { type: 'list', vi: '(d) Túm hoặc búi đã chuẩn bị sẵn để làm chổi hoặc bàn chải (nhóm 96.03).', en: '(d) Prepared knots or tufts for broom or brush making (heading 96.03).' },
      { type: 'paragraph', vi: '2. Theo mục đích của nhóm 05.01, việc phân loại tóc theo độ dài (với điều kiện là chưa sắp xếp theo đầu và đuôi với nhau) sẽ không được coi là gia công.', en: '2. - For the purposes of heading 05.01. the sorting of hair by length (provided the root ends and tip ends respectively are not arranged together) shall be deemed not to constitute working.' },
      { type: 'paragraph', vi: '3. Trong toàn bộ Danh mục này, ngà voi, sừng hà mã, sừng con moóc (hải mã), sừng kỳ lân biển và răng nanh lợn lòi đực, sừng tê giác và răng của các loài động vật đều được coi là "ngà".', en: '3. - Throughout the Nomenclature, elephant, hippopotamus, walrus, narwhal and wild boar tusks, rhinoceros horns and the teeth of all animals are regarded as “ ivory ".' },
      { type: 'paragraph', vi: '4. Trong toàn bộ Danh mục này, khái niệm "lông đuôi hoặc bờm ngựa" để chỉ lông đuôi hoặc bờm của ngựa hay động vật họ trâu bò. Ngoài các mặt hàng khác, nhóm 05.11 còn bao gồm lông đuôi hoặc bờm ngựa và phế liệu lông đuôi hoặc bờm ngựa, đã hoặc chưa xếp thành lớp mà lớp này có hoặc không có vật liệu phụ trợ.', en: '4. - Throughout the Nomenclature, the expression “horsehair" means hair of the manes or tails of equine or bovine animals. Heading 05.11 covers, inter alia , horsehair and horsehair waste, whether or not put up as a layer with or without supporting material.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm một tập hợp đa dạng những chất liệu khác nhau có nguồn gốc từ động vật, chưa gia công hoặc đã qua quá trình xử lý đơn giản, thường không dùng làm thực phẩm ( ngoại trừ một số loại tiết, ruột, bong bóng và dạ dày của động vật) và chưa được nêu trong các Chương khác của Danh mục.', en: 'This Chapter covers a variety of materials of animal origin, unworked or having undergone a simple process of preparation, which are not normally used as food ( except certain blood, guts, bladders and stomachs of animals) and which are not dealt with in other Chapters of the Nomenclature.' },
      { type: 'paragraph', vi: 'Chương này không bao gồm :', en: 'The following are excluded from this Chapter:' },
      { type: 'list', vi: '(a) Mỡ động vật ( Chương 2 hoặc Chương 15 ).', en: '(a) Animal fats ( Chapter 2 or 15).' },
      { type: 'list', vi: '(b) Da sống của động vật dùng làm thực phẩm ( Chương 2 ) hoặc của cá ( Chương 3 ). (Khi chín, chúng được phân loại vào Chương 16 ).', en: '(b) Uncooked edible skins of animals ( Chapter 2 ) or of fish ( Chapter 3 ). (When cooked, such skins are classified in Chapter 16 .)' },
      { type: 'list', vi: '(c) Vây, đầu, đuôi, bong bóng của cá, ăn được và các phụ phẩm ăn được khác của cá ( Chương 3 ).', en: '(c) Edible fish fins, heads, tails, maws (swim bladders) and other edible fish offal ( Chapter 3 ).' },
      { type: 'list', vi: '(d) Những tuyến và cơ quan khác dùng để trị liệu, được làm khô, đã hoặc chưa làm thành bột ( Chương 30 ).', en: '(d) Organo-therapeutic glands or other organs, dried, whether or not powdered ( Chapter 30 ).' },
      { type: 'list', vi: '(e) Phân bón có nguồn gốc từ động vật ( Chương 31 ).', en: '(e) Fertilisers of animal origin ( Chapter 31 ).' },
      { type: 'list', vi: '(f) Da và da sống thô ( trừ da chim và các phần của da chim, còn lông vũ hoặc lông tơ, chưa xử lý, đã làm sạch, khử trùng hoặc xử lý để bảo quản, nhưng chưa gia công theo cách khác) ( Chương 41 ).', en: '(f) Raw hides and skins ( except birdskins and parts of birdskins, with their feathers or down, unworked, cleaned, disinfected or treated for preservation, but not otherwise worked) ( Chapter 41 ).' },
      { type: 'list', vi: '(g) Da lông ( Chương 43 ).', en: '(g) Furskins ( Chapter 43 ).' },
      { type: 'list', vi: '(h) Lụa và len và các vật liệu thô để dệt khác có nguồn gốc từ động vật ( trừ lông đuôi hoặc bờm ngựa và phế liệu lông đuôi hoặc bờm ngựa) ( Phần XI ).', en: '(h) Silk and wool and other textile raw materials of animal origin ( except horsehair and horsehair waste) ( Section XI ).' },
      { type: 'list', vi: '(ij) Ngọc trai tự nhiên hoặc nuôi cấy ( Chương 71 ).', en: '(ij) Natural or cultured pearls ( Chapter 71 ).' },

      { type: 'heading', vi: '05.01 - Tóc người, chưa xử lý, đã hoặc chưa rửa sạch hoặc gột tẩy; phế liệu tóc người.', en: '05.01 - Human hair, unworked, whether or not washed or scoured; waste of human hair.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tóc người, chưa xử lý, đã hoặc chưa rửa sạch hoặc gột tẩy, kể cả tóc duỗi thẳng nhưng chưa sắp xếp đầu và đuôi tương ứng với nhau, và phế liệu tóc người.', en: 'This heading covers human hair, unworked, whether or not washed or scoured, including hair laid parallel but not arranged so that the root ends and tip ends are respectively together, and waste human hair.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm tóc người (trừ phế liệu) đã được xử lý trên mức rửa sạch hoặc gột tẩy đơn giản, ví dụ: chuốt, nhuộm, tẩy, làm quăn hoặc chuẩn bị sẵn để làm tóc giả... và tóc người đã được sắp xếp đầu và đuôi tương ứng với nhau ( nhóm 67.03 , xem Chú giải tương ứng). Loại trừ này không áp dụng đối với phế liệu của tóc người, luôn được phân vào nhóm này, ngay cả khi, ví dụ, là phế liệu của tóc nhuộm hoặc tẩy trắng.', en: 'Human hair (other than waste) which has been processed beyond simple washing or scouring, e.g., thinned, dyed, bleached, curled or prepared for the manufacture of postiches, wigs, etc., and also human hair which has been arranged so that the root ends and tip ends are respectively together, is excluded ( heading 67.03 , see corresponding Explanatory Note). This exclusion does not apply to waste human hair, which is always classified in this heading, even if it results from, for example, bleached or dyed hair.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Vải lọc làm từ tóc người ( nhóm 59.11 ).', en: '(a) Straining cloth made from human hair ( heading 59.11 ).' },
      { type: 'list', vi: '(b) Lưới bao tóc làm từ tóc người ( nhóm 65.05 ).', en: '(b) Hair-nets made of human hair ( heading 65.05 ).' },
      { type: 'list', vi: '(c) Những vật phẩm khác làm bằng tóc người ( nhóm 67.04 ).', en: '(c) Other articles made of human hair ( heading 67.04 ).' },

      { type: 'heading', vi: '05.02 - Lông và lông cứng của lợn hoặc lợn lòi; lông dùng làm chổi và bàn chải khác; phế liệu từ các loại lông trên.', en: '05.02 - Pigs\', hogs\' or boars\' bristles and hair; badger hair and other brush making hair; waste of such bristles or hair.' },
      { type: 'list', vi: '0502.10 - Lông và lông cứng của lợn hoặc lợn lòi và phế liệu của chúng', en: '0502.10 - Pigs’, hogs’ or boars’ bristles and hair and waste thereof' },
      { type: 'list', vi: '0502.90 - Loại khác', en: '0502.90 - Other' },
      { type: 'paragraph', vi: 'Những sản phẩm này có thể ở dạng rời hoặc buộc thành bó lỏng hoặc chặt trong đó lông hoặc lông cứng được sắp xếp song song và phần đuôi dài ngắn khác nhau. Chúng có thể ở dạng thô hoặc đã được làm sạch, tẩy, nhuộm hoặc khử trùng.', en: 'These goods may be in bulk, in loose bundles, or in tied bunches in which the bristles or hairs are laid parallel and the root ends more or less levelled. They may be raw or they may have been cleaned, bleached, dyed or sterilised.' },
      { type: 'paragraph', vi: 'Những loại lông khác dùng làm bàn chải gồm lông chồn hôi (skunk), lông sóc hoặc lông chồn mactet.', en: 'Other brush making hair includes that of the skunk, squirrel and marten.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm lông hoặc lông cứng thuộc nhóm 96.03 khi chúng ở dạng túm hoặc búi đã được xử lý (tức là làm thành túm, búi đã được làm sẵn để làm chổi hoặc bàn chải hoặc chỉ cần một số hoạt động gia công nhỏ là có thể sẵn sàng dùng được) (xem Chú giải 3 của Chương 96).', en: 'The heading excludes , however, bristles or hairs when in the form of prepared knots or tufts (i.e., made up into unmounted bundles ready for incorporation without division in brooms or brushes or requiring only certain minor processes to be ready for such incorporation); these fall in heading 96.03 (see Note 3 to Chapter 96).' },

      { type: 'heading', vi: '05.04 - Ruột, bong bóng và dạ dày động vật (trừ cá), nguyên dạng và các mảnh của chúng, tươi, ướp lạnh, đông lạnh, muối, ngâm nước muối, làm khô hoặc hun khói.', en: '05.04 - Cuts, bladders and stomachs of animals (other than fish), whole and pieces thereof, fresh, chilled, frozen, salted, in brine, dried or smoked.' },
      { type: 'paragraph', vi: 'Nhóm này gồm ruột, bong bóng và dạ dày của động vật ( trừ của cá, thuộc nhóm 05.11 ), nguyên dạng hoặc từng mảnh, có thể ăn được hoặc không, tươi, ướp lạnh, đông lạnh, muối hoặc ngâm nước muối, làm khô hoặc hun khói. Không bao gồm những sản phẩm được chế biến hoặc bảo quản cách khác (nhìn chung thuộc Chương 16 ).', en: 'This heading covers guts, bladders and stomachs of animals ( other than those of fish, which fall in heading 05.11 ), whether whole or in pieces, and whether or not edible, fresh, chilled, frozen, salted, in brine, dried or smoked. If otherwise prepared or preserved such products are excluded (generally Chapter 16 ).' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading includes :' },
      { type: 'list', vi: '(1) Dạ múi khế (của bê, dê non, v.v...), đã hoặc chưa cắt hoặc làm khô dùng để chiết lấy men dịch vị.', en: '(1) Rennet bags (calf, kid, etc.), whether or not cut or dried; these are used for the extraction of rennet.' },
      { type: 'list', vi: '(2) Lòng và dạ cỏ. (Khi làm chín, chúng được phân loại vào Chương 16 ).', en: '(2) Tripe and paunches. (When cooked, they are classified in Chapter 16 .)' },
      { type: 'list', vi: '(3) Màng ruột già chưa được xử lý, bao phía ngoài ruột tịt (manh tràng) của bò hoặc của cừu.', en: '(3) Unworked goldbeater\'s skin, which is the outer envelope of the caecum of the ox or sheep.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm ruột và màng ruột già (nhất là của bò) đã được xẻ dọc hoặc cắt dọc thành dải, đã hoặc chưa được nạo bỏ phần màng trong của ruột.', en: 'The heading also covers guts and goldbeater\'s skin (of the ox, in particular) which have been split or cut lengthwise into strips, whether or not the inner coats have been removed by scraping.' },
      { type: 'paragraph', vi: 'Ruột chủ yếu dùng để làm vỏ xúc xích. Chúng cũng được sử dụng để sản xuất chỉ catgut phẫu thuật vô trùng ( nhóm 30.06 ), dây để căng vợt tennis ( nhóm 42.06 ) hoặc dây nhạc cụ ( nhóm 92.09 ).', en: 'Guts are mainly used as sausage casings. They are also used for the manufacture of sterile surgical catgut (heading 30.06), tennis racket strings ( heading 42.06 ) or musical instrument strings ( heading 92.09 ).' },
      { type: 'paragraph', vi: 'Nhóm cũng không bao gồm “ruột nhân tạo” được tạo bởi sự ép đùn bột nhão từ da hoặc xơ da, sau đó làm cứng lại bằng dung dịch formaldehyde và phenol ( nhóm 39.17 ) và ruột “nhân tạo” làm bằng cách dính các khúc ruột tự nhiên đã tách rời lại với nhau ( nhóm 42.06 ).', en: 'The heading also excludes “ artificial guts ” made by extrusion of a paste of hide or skin fibres, subsequently hardened with a solution of formaldehyde and phenols ( heading 39.17 ) and “artificial ” guts made by glueing together split natural guts ( heading 42.06 ).' },

      { type: 'heading', vi: '05.05 - Da và các bộ phận khác của loài chim và gia cầm, có lông vũ hoặc lông tơ, lông vũ và các phần của lông vũ (đã hoặc chưa cắt tỉa) và lông tơ, mới chỉ được làm sạch, khử trùng hoặc xử lý để bảo quản; bột và phế liệu từ lông vũ hoặc các phần của lông vũ.', en: '05.05 - Skins and other parts of birds, with their feathers or down, feathers and parts of feathers (whether or not with trimmed edges) and down, not further worked than cleaned, disinfected or treated for preservation; powder and waste of feathers or parts of feathers (+).' },
      { type: 'list', vi: '0505.10 - Lông vũ dùng để nhồi; lông tơ', en: '0505.10 - Feathers of a kind used for stuffing: down' },
      { type: 'list', vi: '0505.90 - Loại khác', en: '0505.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Da và các bộ phận khác của chim và gia cầm (ví dụ: đầu, cánh) có lông vũ hoặc lông tơ, và', en: '(1) Skins and other parts of birds (e.g., heads, wings) with their feathers or down, and' },
      { type: 'list', vi: '(2) Lông vũ và các phần của lông vũ (đã hoặc chưa cắt tỉa), và lông tơ, với điều kiện chúng chưa được xử lý, mới chỉ làm sạch, khử trùng hay xử lý để bảo quản, nhưng chưa được xử lý theo cách khác hoặc chưa được gắn với nhau.', en: '(2) Feathers and parts of feathers (whether or not with trimmed edges), and down, provided they are either unworked, or merely cleaned, disinfected or treated for preservation, but not otherwise worked or mounted.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm bột, bột thô và phế liệu của lông vũ hoặc các phần của lông vũ.', en: 'The heading also covers powder, meal and waste of feathers or parts of feathers.' },
      { type: 'paragraph', vi: 'Những mặt hàng thuộc nhóm này là loại dùng làm lông trải giường, trang trí (thường sau khi đã xử lý thêm) hoặc có những công dụng khác. Đối với mục đích phân loại, sẽ không có sự phân biệt giữa các loại lông vũ khác nhau.', en: 'The goods of this heading are of a kind intended for use as bed feathers, for ornamental purposes (usually after further preparation) or for other purposes. For classification purposes, no distinction is made between the different kinds of feathers.' },
      { type: 'paragraph', vi: 'Các phần của lông vũ thuộc nhóm này bao gồm lông vũ chẻ dọc, tơ được cắt từ ống lông hoặc được gắn với một ống lông đã được cạo mỏng (đã hoặc chưa cắt tỉa), lông ống và ống lông.', en: 'The parts of feathers of this heading include feathers split along their length, barbs cut from the scape or attached to a thin shaving of the scape (whether or not with trimmed edges), quills and scapes.' },
      { type: 'paragraph', vi: 'Lông vũ và lông tơ được đóng gói để bán lẻ trong các túi vải và hoàn toàn không phải loại dùng làm nệm hoặc gối cũng được phân loại vào nhóm này. Nhóm này cũng bao gồm cả lông vũ xâu tạm với nhau để dễ vận chuyển.', en: 'Feathers and down packed for retail sale in cloth bags and clearly of a kind not constituting cushions or pillows are classified in this heading. Feathers simply strung together for convenience of transport also remain classified in this heading.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm da và các bộ phận khác của loài chim và gia cầm, lông vũ và các phần của lông vũ đã qua xử lý nhiều hơn mức cho phép tại nhóm này (như tẩy, nhuộm, làm quăn hoặc tạo sóng), hoặc đã được gắn lại, và các sản phẩm làm từ lông vũ,v.v... ; nói chung chúng được phân loại vào nhóm 67.01 (xem Chú giải của nhóm). Tuy nhiên lông ống đã xử lý và các sản phẩm làm từ lông ống được phân loại theo đặc tính của chúng (ví dụ: phao để câu thuộc nhóm 95.07 , tăm xỉa răng thuộc nhóm 96.01 ).', en: 'The heading excludes skins and other parts of birds, feathers and parts of feathers which have undergone working other than that permitted in this heading (e.g., bleaching, dyeing, curling or waving), or which have been mounted, and articles of feathers, etc.; these are generally classified in heading 67.01 (see the Explanatory Note thereto). Worked quills, and articles made from quills, however, are classified according to their character (e.g. : angling floats - heading 95.07 , toothpicks heading 96.01 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0505.10', en: 'Subheading 0505.10' },
      { type: 'paragraph', vi: '“Lông vũ loại dùng để nhồi” tức là lông của gia cầm (nhất là của ngỗng hoặc vịt, ngan), của chim bồ câu, của gà gô hoặc động vật tương tự, trừ lông vũ lớn từ cánh hoặc từ đuôi cũng như những lông vũ lớn bị loại bỏ sau khi tuyển chọn. “Lông tơ” là phần mượt và mềm nhất của bộ lông, nhất là của ngỗng hoặc của vịt, ngan và khác với lông vũ vì không có lông ống cứng. Những lông vũ và lông tơ này được dùng chủ yếu để nhồi bộ đồ giường ngủ hoặc những sản phẩm khác như nệm và quần áo cách ly (ví dụ áo mặc khi trượt tuyết).', en: '“Feathers of a kind used for stuffing’’ means feathers of poultry (in particular goose or duck), of pigeon, of partridge or the like, other than large wing or tail feathers and large feathers rejected on grading. "Down" is the finest and softest part of the plumage of goose or duck in particular and differs from feathers in not having rigid scapes. Such feathers and down are mainly used for stuffing articles of bedding or other articles such as cushions and insulating clothing (for example, anoraks).' },

      { type: 'heading', vi: '05.06 - Xương và lõi sừng, chưa xử lý, đã khử mỡ, sơ chế (nhưng chưa cắt thành hình), đã xử lý bằng axit hoặc khử gelatin; bột và phế liệu từ các sản phẩm trên.', en: '05.06 - Bones and horn-cores, unworked, defatted, simply prepared (but not cut to shape), treated with acid or degelatinised; powder and waste of these products.' },
      { type: 'list', vi: '0506.10 - Ossein và xương đã xử lý bằng axit', en: '0506.10 - Ossein and bones treated with acid' },
      { type: 'list', vi: '0506.90 - Loại khác', en: '0506.90 - Other' },
      { type: 'paragraph', vi: 'Những sản phẩm của nhóm này chủ yếu dùng làm nguyên liệu chạm khắc, để sản xuất hồ dán và gelatin hoặc làm phân bón.', en: 'The products of this heading are used mainly as carving materials, for the manufacture of glue and gelatin or as fertilisers.' },
      { type: 'paragraph', vi: 'Nhóm này gồm:', en: 'The heading covers:' },
      { type: 'list', vi: '(1) Xương và lõi sừng (xương trong của sừng), chưa xử lý hoặc đã khử mỡ (xương loại bỏ mỡ bằng nhiều cách chế biến khác nhau).', en: '(1 ) Bones and horn-cores (inner bones of horns), unworked or defatted (bones from which the fat has been removed by various processes).' },
      { type: 'list', vi: '(2) Xương sơ chế (nhưng không cắt thành hình) , tức là xương chưa qua quá trình gia công ngoài việc cưa đơn giản để loại bỏ những phần thừa, cắt (cắt khúc hoặc xẻ dọc), đôi khi được bào thô hoặc tẩy trắng. Bởi vậy, nhóm này không bao gồm những tấm và mảnh hình chữ nhật (kể cả hình vuông) và những hình khác, đã hoặc chưa đánh bóng hoặc xử lý cách khác, và những sản phẩm hình thành từ việc đúc khuôn bột xương; tất cả các sản phẩm này thuộc nhóm 96.01 hoặc ở các nhóm khác chi tiết hơn.', en: '(2) Bones, simply prepared (but not cut to shape) , i.e., not having undergone processes extending beyond simple sawing for the removal of superfluous parts, cutting (crosswise or lengthwise), sometimes followed by rough planing or bleaching. The heading therefore excludes rectangular (including square) plates and sheets and other shapes, whether or not polished or otherwise worked, and products obtained by moulding powdered bone: all these goods fall in heading 96.01 or in other more specific headings.' },
      { type: 'list', vi: '(3) Xương xử lý bằng axit , tức là xương mà phần vôi được hoà tan bằng axit clohydric, nhưng không bị mất đi hình dạng ban đầu và chỉ giữ lại mô tế bào và phần sụn (ossein), phần này có thể dễ dàng chuyển thành chất gelatin.', en: '(3) Bones treated with acid , i.e., bones, the calcareous part of which has been dissolved by means of hydrochloric acid, and which, without having lost their original form, retain only their cellular tissue and cartilaginous parts (ossein) which can be easily transformed into gelatin.' },
      { type: 'list', vi: '(4) Xương khử gelatin là xương đã loại bỏ chất hữu cơ gelatin bằng cách làm chín bằng hơi và thường ở dạng bột (bột xương hấp).', en: '(4 ) Degelatinised bones from which the gelatin has been removed by steaming and which are usually in the form of powder (steam bone flour).' },
      { type: 'list', vi: '(5) Bột và phế liệu từ xương (bao gồm cả xương nghiền nhỏ), ví dụ phần sinh ra từ quá trình xử lý xương.', en: '(5) Powder and waste of bones (including crushed bones), e.g., that produced by working the bone.' },

      { type: 'heading', vi: '05.07 - Ngà, mai động vật họ rùa, lược cá voi (phiến sừng hàm trên) và hàm răng lược cá voi, sừng, gạc, móng guốc, móng, vuốt và mỏ, chưa xử lý hoặc đã sơ chế nhưng chưa cắt thành hình; bột và phế liệu từ các sản phẩm trên.', en: '05.07 - Ivory, tortoise-shell, whalebone and whalebone hair, horns, antlers, hooves, nails, claws and beaks, unworked or simply prepared but not cut to shape; powder and waste of these products.' },
      { type: 'list', vi: '0507.10 - Ngà; bột và phế liệu từ ngà', en: '0507.10 - Ivory: ivory powder and waste' },
      { type: 'list', vi: '0507.90 - Loại khác', en: '0507.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm những sản phẩm miêu tả dưới đây, ở dạng chưa xử lý hoặc đã sơ chế nhưng chưa cắt thành hình, tức là, chưa qua xử lý ngoài việc nạo, cạo, làm sạch, loại bỏ những phần thừa, gọt, xẻ, cắt chưa thành hình, bào thô, chuốt thẳng hoặc dát mỏng:', en: 'This heading covers the products described below, unworked or simply prepared but not cut to shape, i.e., not having undergone processes extending beyond rasping, scraping, cleaning, removal of superfluous parts, trimming, splitting, cutting other than to shape, rough planing, straightening or flattening :' },
      { type: 'paragraph', vi: '(A) Ngà .', en: '(A) Ivory .' },
      { type: 'paragraph', vi: 'Trong toàn bộ Danh mục này, thuật ngữ “ngà” được xem như là lớp phủ ngoài chất xương cấu tạo từ:', en: 'Throughout the Nomenclature, the term “ ivory " is regarded as covering the bony substance which constitutes :' },
      { type: 'list', vi: '(1) Ngà voi, sừng hà mã, sừng con moóc (hải mã), kỳ lân biển hoặc răng nanh lợn lòi đực.', en: '(1) The tusks of the elephant, hippopotamus, walrus, narwhal or wild boar.' },
      { type: 'list', vi: '(2) Sừng tê giác', en: '(2) The horns of the rhinoceros.' },
      { type: 'list', vi: '(3) Răng của tất cả động vật trên cạn hoặc động vật dưới biển.', en: '(3) The teeth of any land or marine animal.' },
      { type: 'paragraph', vi: '(B) Mai động vật họ rùa.', en: '(B) Tortoise-shell .' },
      { type: 'paragraph', vi: 'Mai động vật họ rùa dùng vào mục đích thương mại thường là mai rùa (nói chung lấy từ các loài như rùa Kemp’s, rùa careta và đồi mồi) và các phần liên quan đến mai động vật họ rùa bao gồm mai rùa.', en: 'The tortoise-shell of commerce is normally turtle shell (generally obtained from the species known as Kemp\'s Turtles, Loggerheads and Hawksbill Turtles), and references to tortoise-shell include turtle shell.' },
      { type: 'paragraph', vi: 'Mai động vật họ rùa là một loại chất liệu sừng dưới dạng tấm (vảy), với kích cỡ và độ dày khác nhau, bảo vệ khung sừng gắn với thân con vật.', en: 'Tortoise-shell is a horny material in the form of plates (scales), of varying size and thickness, protecting the horny frame-work which encloses the body of the animal.' },
      { type: 'paragraph', vi: 'Trong nhóm này "mai động vật họ rùa" là:', en: 'In this heading “tortoise-shell” means :' },
      { type: 'list', vi: '(1) Toàn phần hay một phần của mai.', en: '(1) Shells , whole or in part.' },
      { type: 'list', vi: '(2) Những mảnh vảy từ mai, hầu như luôn tìm thấy tại bãi đánh cá, và gồm những tấm có độ dày không đều nhau, có bề mặt cong. Những mảnh vảy này được mô tả như là vảy lưng hoặc vảy bụng , tuỳ theo phần cơ thể sinh ra chúng; phần phủ bụng và ngực còn được gọi là vảy yếm .', en: '(2) Scales from these shells, almost always detached at the fishing ground, and consisting of plates of uneven thickness, with a curved surface. These scales are described as dorsal or ventral according to the part of the body from which they are obtained; the part which covers the stomach and breast is known as the plastron .' },
      { type: 'paragraph', vi: '(C) Lược cá voi (phiến sừng hàm trên) và hàm răng lược cá voi.', en: '(C) Whalebone and whalebone hair.' },
      { type: 'paragraph', vi: 'Trong tình trạng tự nhiên, lược (của cá voi hoặc của động vật có vú sống dưới biển) có dạng tấm dẹt bằng sừng được uốn cong với lớp da mầu xám dính trên bề mặt và có loại diềm cùng chất liệu với lược cá voi ở mặt trong.', en: 'In its natural state, whalebone (of whales or other marine mammals) takes the form of curved, homy blades with a greyish skin adhering to the surface and with a kind of fringe of the same material as the whalebone (whalebone hair) on the inner edge.' },
      { type: 'paragraph', vi: '(D) Sừng, gạc, móng guốc, móng, vuốt và mỏ.', en: '(D) Horns, antlers, hooves, nails, claws and beaks.' },
      { type: 'paragraph', vi: 'Sừng thuộc nhóm này có thể ở dạng gắn hoặc không gắn với lõi sừng hoặc xương trán. Gạc là sừng có nhiều nhánh của hươu, của nai, v.v...', en: 'The horns of this group may be presented with or without their cores and their frontal bones. Antlers are branched horns of deer, elk, etc.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả bột và phế liệu (cả những mẩu, vụn xén) của các sản phẩm trên.', en: 'The heading also covers powder and waste (including parings) of these products.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm những sản phẩm đã được cắt thành hình chữ nhật (bao gồm cả hình vuông), hoặc hình que, hình ống hoặc hình bán hoàn chỉnh khác và những sản phẩm làm bằng đúc khuôn ( nhóm 96.01 hoặc các nhóm khác chi tiết hơn).', en: 'The heading excludes products which have been cut to rectangular (including square) shapes or into rods, tubes or other semi-finished forms and products obtained by moulding ( heading 96.01 or other more specific headings).' },

      { type: 'heading', vi: '05.08 - San hô và các chất liệu tương tự, chưa xử lý hoặc đã sơ chế nhưng chưa gia công thêm; mai, vỏ động vật thân mềm, động vật giáp xác hoặc động vật da gai và mai mực, chưa xử lý hoặc đã sơ chế nhưng chưa cắt thành hình, bột và phế liệu từ các sản phẩm trên.', en: '05.08 - Coral and similar materials, unworked or simply prepared but not otherwise worked; shells of molluscs, crustaceans or echinoderms and cuttle-bone, unworked or simply prepared but not cut to shape, powder and waste thereof.' },
      { type: 'paragraph', vi: 'San hô là xương can xi của polip biển và thường được dùng trong nghề làm kim hoàn.', en: 'Coral is the calcareous skeleton of a marine polyp and is generally used for articles of jewellery.' },
      { type: 'paragraph', vi: 'Về mặt công nghiệp, loại vỏ quan trọng nhất là vỏ tạo ra xà cừ.', en: 'The most important shell for industrial purposes is that used as mother of pearl.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'The heading covers :' },
      { type: 'list', vi: '(1) San hô, chưa xử lý, hoặc chỉ loại bỏ lớp vỏ cứng bên ngoài.', en: '(1) Coral, unworked , or from which only the outer crust has been removed.' },
      { type: 'list', vi: '(2) San hô, sơ chế nhưng chưa xử lý cách khác, tức là, san hô chưa làm gì ngoài việc cắt gọt đơn giản.', en: '(2) Coral, simply prepared but not otherwise worked, i.e., coral not having undergone processes extending beyond simple cutting.' },
      { type: 'list', vi: '(3) Mai, vỏ, chưa xử lý hoặc đã sơ chế nhưng chưa cắt thành hình, tức là, chưa làm gì ngoài việc làm sạch hoặc cắt gọt đơn giản.', en: '(3) Shells, unworked or simply prepared but not cut to shape, i.e.. shells not having undergone processes extending beyond cleaning or simple cutting.' },
      { type: 'paragraph', vi: 'Nhóm này gồm cả mai mực, mai, vỏ, đã nghiền nhỏ hoặc tán thành bột dùng làm thức ăn cho gia súc, và phế liệu của mai, vỏ.', en: 'The heading includes cuttle-fish bone, crushed or powdered shells used as animal foodstuffs, and waste of shells.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm que, mảnh hình chữ nhật (kể cả hình vuông) và những hình khác, đã hoặc chưa đánh bóng hoặc xử lý cách khác; các mặt hàng này thuộc nhóm 96.01 hoặc các nhóm khác chi tiết hơn.', en: 'The heading excludes rods, rectangular (including square) plates and other shapes, whether or not polished or otherwise worked; these fall in heading 96.01 or in other more specific headings.' },

      { type: 'heading', vi: '05.10 - Long diên hương, hương hải ly, chất xạ hương (từ cầy hương và hươu xạ); côn trùng cánh cứng cantharides; mật, đã hoặc chưa được làm khô; các tuyến và các sản phẩm động vật khác dùng để điều chế dược phẩm, tươi, ướp lạnh, đông lạnh hoặc bảo quản tạm thời dưới hình thức khác.', en: '05.10 - Ambergris, castoreum, civet and musk; cantharides; bile, whether or not dried; glands and other animal products used in the preparation of pharmaceutical products, fresh, chilled, frozen or otherwise provisionally preserved.' },
      { type: 'paragraph', vi: 'Long diên hương là chất tiết ra bởi cá nhà táng (cá voi trắng) và được tìm thấy ở dạng khối tròn tạo bởi những tầng đồng tâm và có thể nặng tới 100kg. Nó có độ đặc gần như sáp và toát lên mùi thơm dịu ngọt khi chà xát. Nó có màu sắc khác nhau từ xám tro đến đen và tỷ trọng thấp hơn tỷ trọng của nước. Không nên nhầm lẫn long diên hương với hổ phách vàng (succinite) vốn là một chất nhựa khoáng và thuộc nhóm 25.30 .', en: 'Ambergris is a substance secreted by the sperm-whale and is found in the form of rounded masses made up of concentric layers and weighing up to a hundred kilograms. It has a waxy consistency and gives a sweet odour when rubbed. It varies from ash grey to black in colour and its density is less than that of water. Ambergris should not be confused with yellow amber (succinite) which is a mineral resin and falls in heading 25.50 .' },
      { type: 'paragraph', vi: 'Hương hải ly là chất như nhựa, có mầu nâu, phớt đỏ, hoặc phớt vàng, có vị đắng và mùi nồng. Hương hải ly tiết ra từ con hải ly và thường có trong những chiếc túi (thường gắn với phần thân dưới) từ đó hương hải ly được tạo thành. Những chiếc túi này thường được xếp nếp và có độ dài từ 5 đến 10 cm.', en: 'Castoreum is a resinous substance, brown, reddish or yellowish, with a bitter flavour and a pungent smell. It is secreted by beavers and is usually presented in the pouches (generally joined at their ends) in which it is formed. These pouches are often pleated and range in length from 5 to 10 cm.' },
      { type: 'paragraph', vi: 'Chất xạ hương do con cầy hương tiết ra và là một chất như nhựa nhão và sánh như dầu, có mầu nâu vàng hoặc nâu, có mùi rất nồng, gần giống mùi của xạ tự nhiên.', en: 'Civet is produced by the civet cat and is a golden brown or brown resinous substance of pasty and oily consistency, with a very strong odour which closely resembles natural musk.' },
      { type: 'paragraph', vi: 'Xạ hương , do một loại hươu tiết ra, thường ở trong các túi (một phía phẳng không có lông và phía kia phồng có lông trắng) từ đó xạ hương được tạo thành. Chất được tiết ra có mầu nâu sẫm và mùi nồng. Không nên nhầm lẫn giữa xạ hương này với xạ hương nhân tạo (xạ xilen, xạ cây vông vàng v.v...) thuộc Chương 29 .', en: 'Musk , secreted by a kind of deer, is normally enclosed in pouches (flat and hairless on one side and convex and covered with whitish hair on the other) in which it is formed. The secretion is dark brown and has a strong smell. The musk in question should not be confused with artificial musk (musk xylene, musk ambrette, etc.) included in Chapter 29 .' },
      { type: 'paragraph', vi: 'Côn trùng cánh cứng cantharide là những côn trùng chủ yếu được sử dụng do đặc tính làm giộp da hoặc kích thích giảm đau của chúng. Chúng thường ở dạng được làm khô hoặc được tán thành bột.', en: 'Cantharides are beetles used primarily for their vesicant or counter-irritant properties. They are usually presented in dried or powdered form.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm:', en: 'The heading also includes :' },
      { type: 'list', vi: '(1) Những tuyến và những cơ quan khác từ động vật dùng trong các chế phẩm trị liệu nguồn gốc hữu cơ và không thích hợp dùng làm thức ăn cho người do bản chất hoặc nguồn gốc giải phẫu của chúng (tuyến tụy, tinh hoàn, buồng trứng, túi mật, tuyến giáp, tuyến yên…), tươi, ướp lạnh hoặc đông lạnh, hoặc bảo quản tạm thời bằng cách khác để vận chuyển hoặc tích trữ (ví dụ bảo quản trong glycerol, acetone hoặc cồn). Khi ở dạng khô hoặc chiết xuất, những sản phẩm này bị loại trừ ( nhóm 30.01 ) (tuy nhiên, đối với những sản phẩm dùng làm thực phẩm, xem Chú giải 1(a) của Chương này).', en: '(1) Animal glands and other animal organs used in the preparation of organo-therapeutic products and unfit, by reason of their nature or of the manner in which they are put up, for human consumption (pancreas, testes, ovaries, gall hags, thyroid glands, pituitary glands, etc.), fresh, chilled or frozen, or otherwise provisionally preserved for the purposes of transport or storage (e.g., in glycerol, acetone or alcohol). When dried or in the form of extract, these products are excluded ( heading 30.01 ). (See however Note 1 (a) to this Chapter as regards edible products.)' },
      { type: 'list', vi: '(2) Mật , đã hoặc chưa làm khô (chất chiết từ mật bị loại trừ - nhóm 30.01 ).', en: '(2) Bile , whether or not dried. (Bile extract is excluded - heading 30.01 ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm nọc của rắn hoặc của ong dưới dạng mảnh khô đựng trong ống hàn kín ( nhóm 30.01 ).', en: 'The heading also excludes snake or bee venom put up in dried flakes in sealed ampoules ( heading 30.01 ).' },

      { type: 'heading', vi: '05.11 - Các sản phẩm động vật khác chưa được chi tiết hoặc ghi ở nơi khác; động vật chết thuộc Chương 1 hoặc Chương 3, không thích hợp sử dụng cho người.', en: '05.11 - Animal products not elsewhere specified or included; dead animals of Chapter 1 or 3, unfit for human consumption.' },
      { type: 'list', vi: '0511.10 - Tinh dịch động vật họ trâu, bò', en: '0511.10 - Bovine semen' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0511.91 - - Sản phẩm từ cá hoặc động vật giáp xác, động vật thân mềm hoặc động vật thuỷ sinh không xương sống khác; động vật đã chết thuộc Chương 3', en: '0511.91 - - Products of fish or crustaceans, molluscs or other aquatic invertebrates; dead animals of Chapter 3' },
      { type: 'list', vi: '0511.99 - - Loại khác', en: '0511.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading includes :' },
      { type: 'list', vi: '(1) Tinh dịch của động vật.', en: '(1) Animal semen.' },
      { type: 'list', vi: '(2) Phôi động vật , ở dạng đông lạnh để cấy vào một con vật cái khác.', en: '(2) Animal embryos , which are shipped frozen with the intended purpose of transplanting them into a recipient mother.' },
      { type: 'list', vi: '(3) Tiết động vật , ở dạng lỏng hoặc khô, có thể ăn được hoặc không.', en: '(3) Animal blood , liquid or dried, edible or not.' },
      { type: 'paragraph', vi: 'Nhóm này loại trừ tiết động vật điều chế dùng cho chữa bệnh, phòng bệnh hoặc chẩn đoán bệnh ( nhóm 30.02 ).', en: 'The heading excludes animal blood prepared for therapeutic, prophylactic or diagnostic uses ( heading 30.02 ).' },
      { type: 'list', vi: '(4) Bọ yên chi (bọ phấn thoa mặt/rệp son) và các côn trùng tương tự, không thích hợp dùng làm thức ăn cho người. Bọ yên chi là côn trùng sống trên một vài loài xương rồng. Trên thị trường có ba loại bọ yên chi: Loại đen, xám hoặc ánh bạc, và đo đỏ. Bọ yên chi cung cấp phẩm màu đỏ (chiết xuất bọ yên chi) ( nhóm 32.03 ) dùng để chế biến chất màu đỏ ( nhóm 32.05 ).', en: '(4) Cochineal and similar insects , unfit for human consumption. The cochineal is an insect which lives on certain cactus plants. There are three kinds of cochineal on the market - black, grey or silver, and reddish. The cochineal furnishes a red dye (cochineal extract) ( heading 32.03 ) which is used in the preparation of carmine lake ( heading 32.05 ).' },
      { type: 'paragraph', vi: 'Trong những côn trùng giống với bọ yên chi, quan trọng nhất là bọ kemet, sống trên một loại cây sồi lùn. Bọ kemet được sử dụng để chế thuốc nhuộm màu đỏ tươi và rất bền màu, loại thuốc nhuộm này được phân loại vào nhóm 32.03 .', en: 'Amongst the insects similar to the cochineal the most important is the animal kermes, which lives on a variety of dwarf oak tree. Kermes is used for the preparation of vivid and lasting red dyes which are classified in heading 32.03 .' },
      { type: 'paragraph', vi: 'Không nên nhầm lẫn giữa bọ kemet với “khoáng kemet” ( nhóm 38.24 ).', en: 'Animal kermes should not be confused with “kermes mineral ” ( heading 38.24 ).' },
      { type: 'paragraph', vi: 'Bọ yên chi và bọ kemet thường ở dạng khô và có thể ở nguyên dạng hoặc ở dạng bột.', en: 'Cochineal and kermes are presented dried and may be whole or powdered.' },
      { type: 'list', vi: '(5) Trứng , sẹ và bọc trứng cá, không dùng làm thực phẩm .', en: '(5) Inedible fish eggs, roes and mill.' },
      { type: 'paragraph', vi: 'Bao gồm:', en: 'These comprise :' },
      { type: 'list', vi: '(i) Trứng sống để sinh sản, chúng được nhận biết bằng các chấm đen là mắt của phôi.', en: '(i) Fertile eggs for hatching, recognisable by the presence of black spots which are the embryonic eyes.' },
      { type: 'list', vi: '(ii) Trứng muối (của cá tuyết hoặc cá nục hoa) dùng làm mồi câu. Chúng có thể phân biệt với những chế phẩm thay thế trứng cá tầm muối ( nhóm 16.04 ) bởi mùi khó chịu và vì chúng thường được đóng chung với số lượng lớn.', en: '(ii) Salted roes (e.g., of cod or mackerel) used as fishing bait. These can be distinguished from caviar substitutes ( heading 16.04 ) by their strong disagreeable odour and because they are usually packed in bulk.' },
      { type: 'paragraph', vi: 'Nhóm này loại trừ sẹ và bọc trứng cá dùng làm thực phẩm ( Chương 3 ).', en: 'The heading excludes edible roes and milt ( Chapter 3 ).' },
      { type: 'list', vi: '(6) Phế liệu của cá hoặc động vật giáp xác, động vật thân mềm hoặc động vật thủy sinh không xương sống khác.', en: '(6) Waste of fish or crustaceans, molluscs or other aquatic invertebrates.' },
      { type: 'paragraph', vi: 'Loại này có thể kể ra:', en: 'This category covers, inter alia :' },
      { type: 'list', vi: '(i) Vẩy của cá trắng nhỏ (whitebait) hoặc các loại cá tương tự, tươi hoặc bảo quản (nhưng không trong dung dịch); các loại này dùng để chế tinh chất ánh ngọc trai phủ ngọc trai nhân tạo.', en: '(i) Scales of whitebait or of similar fish, fresh or preserved (but not in solution): these are used for the preparation of pearl essence for the coating of imitation pearls.' },
      { type: 'list', vi: '(ii) Bong bóng cá, chưa chế biến, làm khô hoặc muối, dùng làm keo cá và thạch cá.', en: '(ii) Maws (swim bladders), raw, dried or salted, used in the manufacture of isinglass and fish glues.' },
      { type: 'list', vi: '(iii) Ruột cá và phế liệu của da cá dùng sản xuất keo...', en: '(iii) Fish guts and waste of skins used for glue manufacture, etc.' },
      { type: 'list', vi: '(iv) Phế liệu từ cá.', en: '(iv) Fish waste.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Gan cá, vây cá, đầu, đuôi, bong bóng cá ăn được và phụ phẩm khác ăn được từ cá ( Chương 3 ).', en: '(a) Edible fish livers, fish fins, heads, tails, maws (swim bladders) and other edible fish offal ( Chapter 3 ).' },
      { type: 'list', vi: '(b) Mai, vỏ động vật thân mềm, động vật giáp xác hoặc động vật da gai thuộc nhóm 05.08 .', en: '(b) Shells of molluscs, crustaceans or echinoderms of heading 05.08.' },
      { type: 'list', vi: '(c) Gan cá không thích hợp để làm thực phẩm mà dùng chế biến dược phẩm ( nhóm 05.10 ).', en: '(c) Inedible fish livers used in the preparation of pharmaceutical products ( heading 05.10 ).' },
      { type: 'list', vi: '(7) Trứng tằm. Chúng trông giống như những hạt rất nhỏ, màu vàng nhạt chuyển dần sang mầu tro hoặc vàng đất. Chúng thường được đóng trong hộp (hoặc lỗ tổ ong) hoặc trong túi vải.', en: '(7) Silkworm eggs . These have the appearance of small seeds, pale yellow turning gradually to ash grey or earthy yellow. They are usually presented in boxes (or cellular combs) or in cloth sachets.' },
      { type: 'list', vi: '(8) Trứng kiến.', en: '(8 ) Ant eggs .' },
      { type: 'list', vi: '(9) Gân và dây chằng , giống như phế liệu nêu trong Mục (10) và (11) dưới đây, được dùng chủ yếu như nguyên liệu thô để sản xuất keo.', en: '(9) Sinews and tendons used, like the waste cited in Items (10) and (11) below, mainly as raw materials for the manufacture of glue.' },
      { type: 'list', vi: '(10) Mẩu vụn và phế liệu tương tự, của da và da sống thô .', en: '(10) Parings and similar waste, of raw hides or skins .' },
      { type: 'list', vi: '(11) Phế thải của da lông thô mà những người kinh doanh/thuộc da lông thú không thể tận dụng được.', en: '(11) Waste of raw furskins , clearly not capable of use by furriers.' },
      { type: 'list', vi: '(12) Động vật chết thuộc Chương 1 hoặc Chương 3 và thịt của chúng hoặc các phụ phẩm dạng thịt không thích hợp dùng làm thức ăn cho người trừ các sản phẩm thuộc nhóm 02.09 hoặc thuộc một trong các nhóm trước của Chương này.', en: '(12) Dead animals of Chapter 1 or 3 and their meat or meat offals unfit for human consumption other than products of heading 02.09 or of one of the preceding headings of this Chapter.' },
      { type: 'list', vi: '(13) Lông đuôi hoặc bờm ngựa và phế liệu từ lông đuôi hoặc bờm ngựa , đã hoặc chưa xếp thành lớp, có hoặc không có vật liệu phụ trợ. Loại này gồm lông của bờm hoặc đuôi ngựa hoặc của động vật họ trâu bò. Nó bao gồm không chỉ lông đuôi hoặc bờm ngựa chưa xử lý mà còn bao gồm lông đuôi hoặc bờm ngựa đã được rửa sạch, chà sạch, tẩy trắng, nhuộm, làm xoăn hoặc xử lý theo cách khác. Các mặt hàng này có thể ở dạng đống, dạng bó hoặc dạng cuộn, v.v…', en: '(13) Horsehair and horsehair waste , whether or not put up as a layer with or without supporting material. This category covers hair of the manes or tails of equine or bovine animals. It includes not only unworked horsehair but also horsehair which has been washed, scoured, bleached, dyed, curled or otherwise prepared. The goods may be in bulk, in hunches or may be put up in skeins, etc.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm một lớp của lông đuôi hoặc bờm ngựa trên nền vải dệt, giấy, v.v… hoặc được đặt giữa các tấm vải dệt, giấy, v.v…., bằng cách ghim hoặc khâu đơn giản.', en: 'This heading also covers a layer of horsehair on a support of textile fabric, paper, etc., or put up between sheets of textile fabric, paper, etc., by stapling or simple sewing.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm lông đuôi hoặc bờm ngựa đã trải qua quá trình xe sợi và lông đuôi hoặc bờm ngựa được nối với nhau ( Chương 51 ).', en: 'The heading excludes horsehair which has undergone a spinning process and horsehair knotted end to end ( Chapter 51 ).' },
      { type: 'list', vi: '(14) Bọt biển thiên nhiên có nguồn gốc động vật. Chúng bao gồm cả bọt biển thô (kể cả loại mới chỉ làm sạch đơn thuần) và bọt biển đã được xử lý (ví dụ bằng cách loại bỏ chất vôi hoặc bằng cách tẩy trắng). Loại này cũng bao gồm bọt biển phế liệu.', en: '(14) Natural sponges of animal origin . They comprise both raw sponges (including those merely washed) and sponges which have been prepared (e.g., by removal of calcareous matter or by bleaching). This category also covers waste sponge.' },
      { type: 'paragraph', vi: 'Xơ mướp, còn được gọi là bọt biển thực vật, được phân loại vào nhóm 14.04 .', en: 'Loofah, also known as vegetable sponge, is classified in heading 14.04 .' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'The heading further excludes :' },
      { type: 'list', vi: '(a) Nhựa cánh kiến đỏ dạng phiến mỏng, nhựa cánh kiến đỏ dạng hạt, nhựa cánh kiến đỏ dạng thỏi và các loại nhựa cánh kiến đỏ khác ( nhóm 13.01 ).', en: '(a) Shellac, seed lac, stick lac and other lacs ( heading 13.01 ).' },
      { type: 'list', vi: '(b) Mỡ động vật thuộc Chương 15 .', en: '(b) Animal fats of Chapter 15 .' },
      { type: 'list', vi: '(c) Bộ sưu tập và các vật phẩm sưu tập về động vật học, bao gồm cả động vật được nhồi hoặc bảo quản cách khác, các loài bướm và côn trùng, trứng khác, v.v… ( nhóm 97.05 ).', en: '(c) Collections and collectors\' pieces of zoological interest, consisting of stuffed or otherwise preserved animals, butterflies and other insects, eggs, etc. ( heading 97.05 ).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 6
  // ------------------------------------------------------------
  {
    chapterNumber: 6,
    titleVi: 'CHƯƠNG 6: CÂY SỐNG VÀ CÁC LOẠI CÂY TRỒNG KHÁC; CỦ, RỄ VÀ LOẠI TƯƠNG TỰ; CÀNH HOA VÀ CÀNH LÁ TRANG TRÍ',
    titleEn: 'CHAPTER 6: LIVE TREES AND OTHER PLANTS; BULBS, ROOTS AND THE LIKE; CUT FLOWERS AND ORNAMENTAL FOLIAGE',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 6: Cây sống và các loại cây trồng khác; củ, rễ và loại tương tự; cành hoa và cành lá trang trí', en: 'Chapter 6: Live trees and other plants; bulbs, roots and the like; cut flowers and ornamental foliage' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { 
        type: 'paragraph', 
        vi: '1.- Ngoài phần 2 của tên nhóm 06.01, Chương này chỉ bao gồm cây sống và các sản phẩm (kể cả cây giống từ hạt) thường được cung cấp bởi người trồng hoa hoặc người làm vườn ươm cây để trồng hay trang trí; tuy nhiên Chương này không bao gồm khoai tây, hành tây, hành, hẹ, tỏi hoặc các sản phẩm khác thuộc Chương 7.', 
        en: '1.- Subject to the second part of heading 06.01, this Chapter covers only live trees and goods (including seedling vegetables) of a kind commonly supplied by nursery gardeners or florists for planting or for ornamental use; nevertheless it does not include potatoes, onions, shallots, garlic or other products of Chapter 7.' 
      },
      { 
        type: 'paragraph', 
        vi: '2.- Khi xem xét một mặt hàng nào đó trong nhóm 06.03 hoặc 06.04 phải coi các bó, lẵng hoa, vòng hoa và các sản phẩm tương tự như các loại hoa hoặc cành lá thuộc 2 nhóm trên nhưng không tính đến các phụ kiện bằng chất liệu khác. Tuy nhiên, các nhóm này không bao gồm các tác phẩm ghép hoặc các họa tiết trang trí tương tự thuộc nhóm 97.01.', 
        en: '2.- Any reference in heading 06.03 or 06.04 to goods of any kind shall be construed as including a reference to bouquets, floral baskets, wreaths and similar articles made wholly or partly of goods of that kind, account not being taken of accessories of other materials. However, these headings do not include collages or similar decorative plaques of heading 97.01.' 
      },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm tất cả các loại thực vật sống, thường được cung cấp bởi các người làm vườn ươm (bao gồm cả nghề trồng hoa) hoặc những người trồng hoa, để phù hợp cho mục đích trồng trọt hoặc trang trí, và cũng bao gồm cả cây rau giống (cây giống rau). Tuy nhiên, các loại củ, thân củ, rễ củ, thân dạng củ, thân rễ của khoai tây, hành tây, hành, hẹ, tỏi và các sản phẩm khác thuộc Chương 7 được loại trừ khỏi Chương này.', 
        en: 'This Chapter covers all living plants, of a kind commonly supplied by nursery gardeners (including horticulturists) or florists, which are in a condition suitable for planting or for ornamental purposes, and also includes seedling vegetables. Bulbs, corms, tubers, tuberous roots, rhizomes and crowns, of potatoes, onions, shallots, garlic and other products of Chapter 7 are, however, excluded from this Chapter.' 
      },
      { type: 'paragraph', vi: 'Chương này cũng bao gồm:', en: 'The Chapter also covers :' },
      { type: 'list', vi: '(1) rễ cây nấm (nấm myxen).', en: '(1) Mushroom spawn.' },
      { type: 'list', vi: '(2) Cành hoa, và cành lá, lá..., dùng để trang trí.', en: '(2) Cut flowers, and foliage, leaves, etc., for ornamental purposes.' },

      { type: 'heading', vi: '06.01 - Củ, thân củ, rễ củ, thân dạng củ và thân rễ, ở dạng ngủ, dạng sinh trưởng hoặc dạng hoa; cây và rễ rau diếp xoăn (chicory), trừ các loại rễ thuộc nhóm 12.12.', en: '06.01 - Bulbs, tubers, tuberous roots, corms, crowns and rhizomes, dormant, in growth or in flower; chicory plants and roots other than roots of heading 12.12.' },
      { type: 'paragraph', vi: '0601.10 - Củ, thân củ, rễ củ, thân dạng củ và thân rễ, ở dạng ngủ', en: '0601.10 - Bulbs, tubers, tuberous roots, corms, crowns and rhizomes, dormant' },
      { type: 'paragraph', vi: '0601.20 - Củ, thân củ, rễ củ, thân dạng củ và thân rễ, ở dạng sinh trưởng hoặc dạng hoa; cây và rễ rau diếp xoăn (chicory)', en: '0601.20 - Bulbs, tubers, tuberous roots, corms, crowns and rhizomes, in growth or in flower; chicory plants and roots' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm củ, thân củ, rễ củ, thân dạng củ và thân rễ, ở dạng ngủ, dạng sinh trưởng hoặc dạng hoa, của loại thực vật mà bộ phận sinh trưởng ở trên mặt đất chết đi, nhưng rễ vẫn tiếp tục sống dưới mặt đất, hoặc thực vật thuộc loại này nhưng bộ phận sinh trưởng ở trên mặt đất không bị chết đi.', 
        en: 'This heading includes bulbs, tubers, tuberous roots, corms, crowns and rhizomes, dormant, in growth or in flower, whether or not presented in pots, boxes, etc., of plants in which the aerial vegetative portion dies off but the underground portion remains alive, or plants in which the aerial portion does not die off.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Những sản phẩm trên bao gồm: Amaryllis (huệ tây đỏ), anemone (cây cỏ chân ngỗng), begonia (thu hải đường), canna (cây dong riềng), chionodoxa, convallaria (hoa lan chuông), crocus (cây nghệ tây), cyclamen (cây anh thảo), dahlia (cây thược dược), eremurus, freesia (cây lan nam phi), fritillaria (cây bối mẫu), galanthus (cây giọt tuyết), gladiolus (cây lay-ơn), gloxinia, hyacinthus (cây lan dạ hương), iris (cây diên vĩ), lilium (cây loa kèn), montbretia (cây lay-ơn montbretia), narcissus (cây thuỷ tiên), ornithogalum (cây sao bethlehem), oxalis (cây chua me đất), polianthes (cây huệ), ranunculus (cây mao lương), richardia, tigridia, tulipa (cây tulip).', 
        en: 'These products include those of the following plants : Amaryllis, anemone, begonia, canna, chionodoxa, convallaria (lily of the valley), crocus, cyclamen, dahlia, eremurus, freesia, fritillaria, galanthus (snow-drop), gladiolus, gloxinia, hyacinthus, iris, lilium, montbretia, narcissus, ornithogalum, oxalis, polianthes (tuberose), ranunculus, richardia, tigridia, tulipa.' 
      },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm củ, thân củ, rễ củ, thân dạng củ và thân rễ của các loại cây (ví dụ cây măng tây và cây đại hoàng - rhubarb) không dùng để trang trí.', en: 'The heading also includes bulbs, corms, tubers, tuberous roots, rhizomes and crowns of plants (e.g., asparagus, rhubarb) not used for ornamental purposes.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm rễ cây măng tây (Asparagus crowns) và rễ cây đại hoàng (Rhubarb crowns).', en: 'The heading also covers asparagus crowns and rhubarb crowns.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả cây và rễ rau diếp xoăn (chicory) (ngoại trừ rễ rau diếp xoăn thuộc nhóm 12.12). Rễ rau diếp xoăn thuộc nhóm này có thể chưa được rang và chưa làm khô.', en: 'The heading also covers chicory plants and roots other than roots of heading 12.12. Chicory roots of this heading may be unroasted and undried.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm cây giống, củ hoặc thân củ, củ khoai tây, củ hành, củ hẹ, củ tỏi đã đề cập trong Chương 7.', en: 'This heading excludes certain bulbs, tubers, tuberous roots, corms, crowns and rhizomes (e.g., onions, shallots, garlic, potatoes), which are classified in Chapter 7.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm cây rau diếp xoăn (chicory) đã rang hoặc các sản phẩm thay thế cà phê rang khác (nhóm 21.01).', en: 'The heading also excludes roasted chicory roots and other roasted coffee substitutes (heading 21.01).' },

      { type: 'heading', vi: '06.02 - Cây sống loại khác (kể cả rễ), cành giâm và cành ghép; rễ cây nấm (nấm myxen).', en: '06.02 - Other live plants (including their roots), cuttings and slips; mushroom spawn.' },
      { type: 'list', vi: '0602.10 - Cành giâm và cành ghép chưa có rễ', en: '0602.10 - Unrooted cuttings and slips' },
      { type: 'list', vi: '0602.20 - Cây (loại cây thân gỗ hoặc thân thảo), loại cho quả hoặc hạt thực phẩm, đã hoặc chưa ghép', en: '0602.20 - Trees, shrubs and bushes, grafted or not, of kinds which bear edible fruit or nuts' },
      { type: 'list', vi: '0602.30 - Cây đỗ quyên (Rhododendrons) và cây đỗ quyên (Azaleas), đã hoặc chưa ghép', en: '0602.30 - Rhododendrons and azaleas, grafted or not' },
      { type: 'list', vi: '0602.40 - Hoa hồng, đã hoặc chưa ghép', en: '0602.40 - Roses, grafted or not' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0602.90 - - Loại khác', en: '0602.90 - - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm tất cả các cây sống và các loại rễ cây, cành giâm và cành ghép, rễ nấm (nấm myxen) khác, chưa được phân loại trong nhóm 06.01. Các loại cây sống được phân loại trong nhóm này, bất kể là chúng có được trồng trong chậu, hộp, v.v... hay không.', 
        en: 'This heading covers all live plants and roots thereof, cuttings and slips, mushroom spawn, not included in heading 06.01. The heading includes such plants, roots, cuttings and slips, whether or not presented in pots, boxes, etc.' 
      },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading includes:' },
      { type: 'list', vi: '(1) Cây (thân gỗ, thân thảo và cây bụi) và cây bụi nhỏ, dùng để trang trí hoặc dùng cho các mục đích khác (ví dụ: dùng trong nông nghiệp, trồng rừng).', en: '(1) Trees, shrubs and bushes of all kinds (forest, fruit, ornamental, etc.), including stocks for grafting.' },
      { type: 'list', vi: '(2) Cây dùng để ghép.', en: '(2) Plants for grafting.' },
      { type: 'list', vi: '(3) Cành ghép và cành giâm chưa có rễ.', en: '(3) Unrooted cuttings and slips.' },
      { type: 'list', vi: '(4) Cây giống (cây ươm), trừ cây rau diếp xoăn (nhóm 06.01).', en: '(4) Seedlings, other than those of chicory (heading 06.01).' },
      { type: 'list', vi: '(5) Rễ nấm (nấm myxen), bao gồm sợi nấm (sợi sinh dưỡng của nấm) đã phát triển, trồng trên đất, rơm rạ, phân, ngũ cốc, mùn cưa, hoặc trên các chất liệu tương tự khác, hoặc được nuôi cấy trong ống nghiệm.', en: '(5) Mushroom spawn, consisting of mushroom mycelium (vegetative growth) mixed with manure, soil, straw, cereal, sawdust or other similar substances, or grown on a sterile medium.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm:', en: 'The heading excludes:' },
      { type: 'list', vi: '(a) Củ, thân củ, rễ củ, thân dạng củ và thân rễ của nhóm 06.01.', en: '(a) Bulbs, corms, tubers, tuberous roots, rhizomes and crowns of heading 06.01.' },
      { type: 'list', vi: '(b) Khoai tây (nhóm 07.01).', en: '(b) Potatoes (heading 07.01).' },
      { type: 'list', vi: '(c) Hành, hẹ, tỏi (nhóm 07.03).', en: '(c) Onions, shallots, garlic (heading 07.03).' },
      { type: 'list', vi: '(d) Gừng (nhóm 09.10).', en: '(d) Ginger (heading 09.10).' },

      { type: 'heading', vi: '06.03 - Cành hoa và nụ hoa, dùng để làm bó hoa hoặc để trang trí, tươi, khô, đã nhuộm, tẩy, thấm tẩm hoặc xử lý cách khác.', en: '06.03 - Cut flowers and flower buds of a kind suitable for bouquets or for ornamental purposes, fresh, dried, dyed, bleached, impregnated or otherwise prepared.' },
      { type: 'paragraph', vi: '- Tươi:', en: '- Fresh:' },
      { type: 'list', vi: '0603.11 - - Hoa hồng', en: '0603.11 - - Roses' },
      { type: 'list', vi: '0603.12 - - Hoa cẩm chướng', en: '0603.12 - - Carnations' },
      { type: 'list', vi: '0603.13 - - Hoa lan', en: '0603.13 - - Orchids' },
      { type: 'list', vi: '0603.14 - - Hoa cúc', en: '0603.14 - - Chrysanthemums' },
      { type: 'list', vi: '0603.15 - - Hoa ly (Lilium spp.)', en: '0603.15 - - Lilies (Lilium spp.)' },
      { type: 'list', vi: '0603.19 - - Loại khác', en: '0603.19 - - Other' },
      { type: 'list', vi: '0603.90 - Loại khác', en: '0603.90 - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm không những hoa và nụ hoa đã cắt cành, mà còn gồm cả bó hoa, vòng hoa, lẵng hoa và các sản phẩm tương tự (ví dụ, hoa cài áo), kết hợp với hoa hoặc nụ hoa. Miễn là các sản phẩm này giữ được tính chất cơ bản của các sản phẩm trồng hoa, nhóm này vẫn bao gồm các sản phẩm đó ngay cả khi chúng có chứa phụ kiện bằng chất liệu khác (ruy băng, giấy trang trí, v.v...).', 
        en: 'This heading covers not only cut flowers and flower buds, but also bouquets, wreaths, floral baskets and similar articles incorporating flowers or flower buds. Provided that such bouquets, etc., have the essential character of florists\' wares, they remain in the heading even if they contain accessories of other materials (ribbons, paper trimmings, etc.).' 
      },
      { type: 'paragraph', vi: 'Cành hoa và nụ hoa của các loài cây (như cây keo, cây mimosa) mà lá và hoa hoặc nụ của chúng dùng để trang trí thì được phân loại trong nhóm này. Nếu chỉ có cành lá không có hoa và nụ thì được phân loại trong nhóm 06.04.', en: 'Cut branches of trees, shrubs or bushes (e.g., magnolia, certain types of roses) which bear flowers or flower buds are classified in this heading. Branches which do not bear flowers or flower buds fall in heading 06.04.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm hoa, cánh hoa và nụ hoa của các loại cây chủ yếu dùng để làm nước hoa, dược phẩm, thuốc trừ sâu, thuốc diệt nấm hoặc các mục đích tương tự (nhóm 12.11) hoặc các tác phẩm ghép và các họa tiết trang trí tương tự của nhóm 97.01.', en: 'The heading excludes flowers, flower petals and buds of a kind used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes (heading 12.11) and collages and similar decorative plaques of heading 97.01.' },

      { type: 'heading', vi: '06.04 - Cành lá, lá, cành và các bộ phận khác của cây, không có hoa hoặc nụ hoa, và các loại cỏ, rêu và địa y, dùng để làm bó hoa hoặc để trang trí, tươi, khô, đã nhuộm, tẩy, thấm tẩm hoặc xử lý cách khác.', en: '06.04 - Foliage, branches and other parts of plants, without flowers or flower buds, and grasses, mosses and lichens, being goods of a kind suitable for bouquets or for ornamental purposes, fresh, dried, dyed, bleached, impregnated or otherwise prepared.' },
      { type: 'list', vi: '0604.20 - Tươi', en: '0604.20 - Fresh' },
      { type: 'list', vi: '0604.90 - Loại khác', en: '0604.90 - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm cành lá, lá, cành cây và các bộ phận khác của cây (trừ hoa và nụ hoa thuộc nhóm 06.03), và các loại cỏ, rêu và địa y, với điều kiện là chúng phù hợp để làm bó hoa hoặc dùng để trang trí. Các sản phẩm này có thể ở dạng bó, lẵng hoa, vòng hoa và các sản phẩm tương tự. Miễn là các sản phẩm này giữ được tính chất cơ bản của các sản phẩm trồng hoa, nhóm này vẫn bao gồm các sản phẩm đó ngay cả khi chúng có chứa phụ kiện bằng chất liệu khác (ruy băng, khung dây, v.v...).', 
        en: 'This heading covers foliage, branches and other parts of plants (other than flowers and flower buds of heading 06.03), and grasses, mosses and lichens, provided they are suitable for bouquets or for ornamental purposes. These goods may be in the form of bouquets, wreaths, floral baskets and similar articles. Provided that such bouquets, etc., have the essential character of florists\' wares, they remain in the heading even if they contain accessories of other materials (ribbons, wire frames, etc.).' 
      },
      { type: 'paragraph', vi: 'Những sản phẩm thuộc nhóm này có thể mang các loại quả trang trí, nhưng nếu chúng gắn hoa hoặc nụ hoa thì chúng bị loại trừ (nhóm 06.03).', en: 'Goods of this heading may bear decorative fruits, but if they incorporate flowers or flower buds they are excluded (heading 06.03).' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm cây noel tự nhiên, miễn là chúng rõ ràng không thích hợp để trồng lại (ví dụ, rễ bị cưa, rễ bị làm chín trong nước sôi).', en: 'The heading covers natural Christmas trees, provided that they are clearly unfit for replanting (e.g., root sawn off, root killed by immersion in boiling water).' },
      { type: 'paragraph', vi: 'Nhóm này cũng loại trừ những cây con và các bộ phận của chúng (bao gồm cả cỏ, rêu và địa y) chủ yếu dùng làm nước hoa, trong bào chế dược phẩm, hoặc làm thuốc trừ sâu, thuốc trừ nấm hoặc các mục đích tương tự (nhóm 12.11) hoặc để tết bện (nhóm 14.01), miễn là chúng ở dạng không thích hợp để làm bó hoa hoặc để trang trí. Nhóm này cũng loại trừ những tác phẩm ghép và phù điêu trang trí tương tự của nhóm 97.01.', en: 'The heading also excludes plants and parts of plants (including grasses, mosses and lichens) of a kind used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes (heading 12.11) or for plaiting (heading 14.01), provided that, in the condition in which they are presented, they are not suitable for bouquets or for ornamental purposes. It also excludes collages and similar decorative plaques of heading 97.01.' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 7
  // ------------------------------------------------------------
  {
    chapterNumber: 7,
    titleVi: 'CHƯƠNG 7: RAU VÀ MỘT SỐ LOẠI CỦ, THÂN CỦ VÀ RỄ ĂN ĐƯỢC',
    titleEn: 'CHAPTER 7: EDIBLE VEGETABLES AND CERTAIN ROOTS AND TUBERS',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 7: Rau và một số loại củ, thân củ và rễ ăn được', en: 'Chapter 7: Edible vegetables and certain roots and tubers' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1.- Chương này không bao gồm các sản phẩm thức ăn cho gia súc thuộc nhóm 12.14.', en: '1.- This Chapter does not cover forage products of heading 12.14.' },
      { 
        type: 'paragraph', 
        vi: '2.- Trong các nhóm 07.09, 07.10, 07.11 và 07.12, từ “rau” bao gồm các loại ăn được: nấm, nấm cục (nấm củ), ôliu, nụ bạch hoa, bí, bí ngô, cà tím, ngô ngọt (Zea mays var. saccharata), quả ớt thuộc chi Capsicum hoặc thuộc chi Pimenta, rau thì là, rau mùi tây, rau mùi, rau ngải giấm, cải xoong và kinh giới ngọt (Majorana hortensis hoặc Origanum majorana).', 
        en: '2.- In headings 07.09, 07.10, 07.11 and 07.12 the word “vegetables” includes edible mushrooms, truffles, olives, capers, marrows, pumpkins, aubergines, sweet corn (Zea mays var. saccharata), fruits of the genus Capsicum or of the genus Pimenta, fennel, parsley, chervil, tarragon, cress and sweet marjoram (Majorana hortensis or Origanum majorana).' 
      },
      { type: 'paragraph', vi: '3.- Nhóm 07.12 bao gồm tất cả các loại rau khô từ các loại rau thuộc các nhóm từ 07.01 đến 07.11, trừ:', en: '3. - Heading 07.12 covers all dried vegetables of the kinds falling in headings 07.01 to 07.11, other than:' },
      { type: 'list', vi: '(a) các loại rau đậu khô, đã bóc vỏ (nhóm 07.13);', en: '(a) dried leguminous vegetables, shelled (heading 07.13);' },
      { type: 'list', vi: '(b) ngô ngọt ở các dạng được nêu trong các nhóm từ 11.02 đến 11.04;', en: '(b) sweet corn in the forms specified in headings 11.02 to 11.04;' },
      { type: 'list', vi: '(c) bột, bột thô, bột mịn, mảnh lát, hạt và viên của khoai tây (nhóm 11.05);', en: '(c) flour, meal, powder, flakes, granules and pellets of potatoes (heading 11.05);' },
      { type: 'list', vi: '(d) bột, bột thô và bột mịn của các loại rau đậu khô thuộc nhóm 07.13 (nhóm 11.06).', en: '(d) flour, meal and powder of the dried leguminous vegetables of heading 07.13 (heading 11.06).' },
      { type: 'paragraph', vi: '4.- Tuy nhiên, Chương này không bao gồm các loại ớt thuộc chi Capsicum hoặc chi Pimenta được làm khô hoặc xay hoặc nghiền (nhóm 09.04).', en: '4. - However, dried or crushed or ground fruits of the genus Capsicum or of the genus Pimenta are excluded from this Chapter (heading 09.04).' },
      { type: 'paragraph', vi: '5. - Nhóm 07.11 áp dụng cho các loại rau đã được xử lý chỉ để bảo quản tạm thời trong quá trình vận chuyển hoặc lưu trữ trước khi sử dụng (ví dụ: bảo quản bằng khí sunphurơ, ngâm nước muối, ngâm nước lưu huỳnh hoặc ngâm trong dung dịch bảo quản khác), với điều kiện chúng không phù hợp dùng ngay được khi ở dạng đó.', en: '5. - Heading 07.11 applies to vegetables which have been treated solely to ensure their provisional preservation during transport or storage prior to use (for example, by sulphur dioxide gas, in brine, in sulphur water or in other preservative solutions), provided they remain unsuitable for immediate consumption in that state.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm các loại rau, kể cả các loại được nêu trong Chú giải 2 của Chương, ở dạng tươi, ướp lạnh, đông lạnh (đã hoặc chưa được hấp chín hoặc luộc chín trong nước) được bảo quản hoặc làm khô tạm thời (bao gồm cả khử nước, làm bay hơi hoặc làm khô bằng đông lạnh). Cần phải lưu ý là một số loại sản phẩm này khi làm khô và nghiền thành bột đôi khi được sử dụng làm vật liệu tạo hương nhưng vẫn được phân loại trong nhóm 07.12.', 
        en: 'This Chapter covers vegetables, including the products listed in Note 2 to the Chapter, whether fresh, chilled, frozen (uncooked or cooked by steaming or boiling in water), provisionally preserved or dried (including dehydrated, evaporated or freeze-dried). It should be noted that some of these products when dried and powdered are sometimes used as flavouring materials but nevertheless remain classified in heading 07.12.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Khái niệm “ướp lạnh” nghĩa là nhiệt độ của một sản phẩm đã được hạ xuống, thường là trên dưới 0°C, nhưng chưa đến mức đông lạnh. Tuy nhiên, một số sản phẩm, như khoai tây, có thể coi là được ướp lạnh khi được bảo quản ở nhiệt độ + 10°C.', 
        en: 'The term “chilled” means that the temperature of a product has been reduced, generally to around 0 °C, without the product being frozen. However, some products, such as potatoes, may be considered to be chilled when their temperature has been reduced to and maintained at + 10 °C.' 
      },
      { type: 'paragraph', vi: 'Khái niệm “đông lạnh” nghĩa là sản phẩm được làm lạnh ở nhiệt độ dưới điểm đóng băng và đến tận khi được đông lạnh hoàn toàn.', en: 'The expression “frozen” means that the product has been cooled to below the product’s freezing point until it is frozen throughout.' },
      { type: 'paragraph', vi: 'Trừ khi có các quy định khác, các loại rau trong Chương này có thể được để nguyên, thái miếng, cắt, đập giập, nạo, cạo hoặc bỏ vỏ.', en: 'Unless the context otherwise requires, vegetables of this Chapter may be whole, sliced, chopped, shredded, pulped, grated, peeled or shelled.' },
      { type: 'paragraph', vi: 'Chương này bao gồm cả một số loại củ, thân củ và rễ có hàm lượng bột và inulin cao, ở dạng tươi, ướp lạnh, đông lạnh hay làm khô, đã hoặc chưa thái thành lát hoặc ở dạng viên.', en: 'The Chapter also includes certain tubers and roots with a high starch or inulin content, fresh, chilled, frozen or dried, whether or not sliced or in the form of pellets.' },
      { 
        type: 'paragraph', 
        vi: 'Những loại rau ở dạng không thuộc bất kỳ nhóm nào trong Chương này được phân loại vào Chương 11 hoặc Phần IV. Ví dụ, bột, bột mịn, bột thô được chế biến từ các loại rau đậu khô và khoai tây dạng bột, bột mịn, bột thô, mảnh, hạt và viên được phân loại vào Chương 11, và một số rau được chế biến hoặc bảo quản khác với các phương pháp không được nêu tại Chương này sẽ thuộc Chương 20.', 
        en: 'Vegetables not presented in a state covered by any heading of this Chapter are classified in Chapter 11 or Section IV. For example, flour, meal and powder of dried leguminous vegetables and flour, meal, powder, flakes, granules and pellets of potatoes are classified in Chapter 11, and vegetables prepared or preserved by any process not provided for in this Chapter fall in Chapter 20.' 
      },
      { type: 'paragraph', vi: 'Tuy nhiên, cũng phải lưu ý rằng việc đồng nhất hoá, tự bản thân nó, không làm cho một sản phẩm của Chương này có đủ điều kiện để phân loại như là một chế phẩm của Chương 20.', en: 'However, it should be noted that homogenisation, by itself, does not qualify a product of this Chapter for classification as a preparation of Chapter 20.' },
      { 
        type: 'paragraph', 
        vi: 'Cũng nên lưu ý là những loại rau thuộc Chương này vẫn được phân loại ở đây ngay cả khi chúng được đóng bao bì kín khí (ví dụ bột hành đóng hộp). Tuy nhiên, trong hầu hết các trường hợp, các sản phẩm đóng gói như vậy đã được chế biến hoặc bảo quản khác với qui định tại các nhóm của Chương này, và vì vậy bị loại trừ (Chương 20).', 
        en: 'It should also be noted that vegetables of this Chapter remain classified here even if put up in airtight containers (e.g., onion flour in cans). In most cases, however, products put up in these packings have been prepared or preserved otherwise than as provided for in the headings of this Chapter, and are therefore excluded (Chapter 20).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Tương tự, các sản phẩm thuộc Chương này vẫn được phân loại ở đây (ví dụ, rau tươi hoặc ướp lạnh) khi chúng được đóng gói bằng phương pháp Đóng gói điều chỉnh không khí - Modified Atmospheric Packaging (MAP). Trong phương pháp MAP, không khí bao quanh sản phẩm được thay đổi hay kiểm soát (ví dụ bằng cách loại bỏ hoặc giảm hàm lượng oxy và thay bằng hay làm tăng hàm lượng nitơ và carbon dioxide).', 
        en: 'Similarly, products of this Chapter remain classified here (e.g., fresh or chilled vegetables) when subjected to packaging by means of a Modified Atmospheric Packaging (MAP) process. In a MAP process the atmosphere surrounding the product is altered or controlled (e.g., by removing or reducing the oxygen content and replacing it with or increasing the nitrogen or carbon dioxide content).' 
      },
      { type: 'paragraph', vi: 'Chương này bao gồm các loại rau tươi hoặc khô dùng làm thực phẩm hay để gieo trồng (ví dụ: khoai tây, hành tây, hành, hẹ, tỏi, rau đậu). Tuy nhiên, Chương này không bao gồm những loại rau giống từ hạt dùng để cấy trồng lại (nhóm 06.02).', en: 'Fresh or dried vegetables fall in this Chapter whether intended for use as food, for sowing or for planting (e.g., potatoes, onions, shallots, garlic, leguminous vegetables). However, the Chapter does not cover seedling vegetables in a condition for replanting (heading 06.02).' },
      { type: 'paragraph', vi: 'Ngoài những loại trừ nêu trên và trong các Chú giải của Chương, Chương này cũng không bao gồm:', en: 'In addition to the exclusions mentioned above and in the Chapter Notes, this Chapter does not include:' },
      { type: 'list', vi: '(a) Rễ và cây rau diếp xoăn (nhóm 06.01 hoặc nhóm 12.12).', en: '(a) Chicory plants or chicory roots (heading 06.01 or 12.12).' },
      { type: 'list', vi: '(b) Một số loại sản phẩm rau được sử dụng làm nguyên liệu thô của ngành công nghiệp thực phẩm, ví dụ như ngũ cốc (Chương 10) và củ cải đường và mía đường (nhóm 12.12).', en: '(b) Certain vegetable products used as raw materials in the food industries e.g., cereals (Chapter 10) and sugar beet and sugar cane (heading 12.12).' },
      { type: 'list', vi: '(c) Bột, bột mịn và bột thô của một số loại rễ, củ hoặc thân củ thuộc nhóm 07.14 (nhóm 11.06).', en: '(c) Flour, meal and powder of roots or tubers of heading 07.14 (heading 11.06).' },
      { type: 'list', vi: '(d) Một số loại cây và các bộ phận của chúng, mặc dù đôi khi chúng được sử dụng làm gia vị nấu ăn, ví dụ: húng quế, cây borage (cây lá nhám, hoa xanh), cây bài hương, các loại cây bạc hà, cây hương thảo, cây cửu ly hương, cây xả thơm và rễ khô của cây ngưu bàng (Arctium lappa) (nhóm 12.11).', en: '(d) Certain plants and parts of plants, although sometimes used for culinary purposes, e.g., basil, borage, hyssop, all species of mint, rosemary, rue, sage and dried roots of burdock (Arctium lappa) (heading 12.11).' },
      { type: 'list', vi: '(e) Các loại rong biển và tảo khác ăn được (nhóm 12.12).', en: '(e) Edible seaweeds and other algae (heading 12.12).' },
      { type: 'list', vi: '(f) Cải củ Thụy Điển, cải cầu vồng (mangold), rễ cỏ khô, cỏ khô, cỏ linh lăng, cỏ ba lá, cây hồng đậu, cải xoăn, đậu lu-pin, đậu tằm và những sản phẩm tương tự dùng làm thức ăn cho gia súc (nhóm 12.14).', en: '(f) Swedes, mangolds, fodder roots, hay, lucerne (alfalfa), clover, sainfoin, forage kale, lupines, vetches and similar forage products (heading 12.14).' },
      { type: 'list', vi: '(g) Lá cà rốt hoặc lá củ cải (nhóm 23.08).', en: '(g) Beet or carrot tops (heading 23.08).' },

      { type: 'heading', vi: '07.01 - Khoai tây, tươi hoặc ướp lạnh (+).', en: '07.01 - Potatoes, fresh or chilled (+).' },
      { type: 'list', vi: '0701.10 - Để làm giống', en: '0701.10 - Seed' },
      { type: 'list', vi: '0701.90 - Loại khác', en: '0701.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại khoai tây tươi hoặc ướp lạnh (trừ khoai lang thuộc nhóm 07.14). Ngoài những loại khác, nhóm này có thể kể đến khoai tây giống dùng để trồng và khoai tây đầu mùa.', en: 'This heading covers fresh or chilled potatoes of all kinds (other than sweet potatoes of heading 07.14). The heading includes, inter alia, seed potatoes intended for sowing and new potatoes.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0701.10', en: 'Subheading 0701.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 0701.10, khái niệm "để làm giống" chỉ bao gồm các loại khoai tây được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 0701.10, the expression “seed” covers only potatoes which are regarded by the competent national authorities as intended for sowing.' },

      { type: 'heading', vi: '07.02 - Cà chua, tươi hoặc ướp lạnh.', en: '07.02 - Tomatoes, fresh or chilled.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại cà chua tươi hoặc ướp lạnh.', en: 'This heading covers fresh or chilled tomatoes of all kinds.' },

      { type: 'heading', vi: '07.03 - Hành tây, hành, hẹ, tỏi, tỏi tây và các loại rau họ hành, tỏi khác, tươi hoặc ướp lạnh.', en: '07.03 - Onions, shallots, garlic, leeks and other alliaceous vegetables, fresh or chilled.' },
      { type: 'list', vi: '0703.10 - Hành tây và hành, hẹ', en: '0703.10 - Onions and shallots' },
      { type: 'list', vi: '0703.20 - Tỏi', en: '0703.20 - Garlic' },
      { type: 'list', vi: '0703.90 - Tỏi tây và các loại rau họ hành, tỏi khác', en: '0703.90 - Leeks and other alliaceous vegetables' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại rau họ hành, tỏi, tươi hoặc ướp lạnh sau:', en: 'This heading covers the following fresh or chilled alliaceous vegetables :' },
      { type: 'list', vi: '(1) Hành tây (gồm cả hành củ để trồng và hành lá) và hành, hẹ.', en: '(1) Onions (including onion sets and Spring onions) and shallots.' },
      { type: 'list', vi: '(2) Tỏi.', en: '(2) Garlic.' },
      { type: 'list', vi: '(3) Tỏi tây, hẹ tây và các loại rau họ hành, tỏi khác.', en: '(3) Leeks, chives and other alliaceous vegetables.' },

      { type: 'heading', vi: '07.04 - Bắp cải, súp lơ, su hào, cải xoăn và cây họ bắp cải ăn được tương tự, tươi hoặc ướp lạnh.', en: '07.04 - Cabbages, cauliflowers, kohlrabi, kale and similar edible brassicas, fresh or chilled.' },
      { type: 'list', vi: '0704.10 - Súp lơ và súp lơ xanh', en: '0704.10 - Cauliflowers and broccoli' },
      { type: 'list', vi: '0704.20 - Cải Bruc-xen', en: '0704.20 - Brussels sprouts' },
      { type: 'list', vi: '0704.90 - Loại khác', en: '0704.90 - Other' },
      { type: 'paragraph', vi: 'Các loại sản phẩm tươi hoặc ướp lạnh thuộc nhóm này bao gồm:', en: 'The fresh or chilled products of this heading include the following :' },
      { type: 'list', vi: '(1) Súp lơ và súp lơ xanh (ví dụ. Brassica oleracea botrytis và Brassica oleracea var. italica).', en: '(1) Cauliflowers and broccoli (e.g., Brassica oleracea botrytis and Brassica oleracea var. italica ).' },
      { type: 'list', vi: '(2) Cải Bruc-xen.', en: '(2) Brussels sprouts.' },
      { type: 'list', vi: '(3) Các loại khác dạng bắp thuộc chi Brassica (ví dụ: Bắp cải trắng, bắp cải vùng Savoy, bắp cải đỏ, bắp cải Trung Quốc), bắp cải vụ xuân, bắp cải xoăn và những loại rau thuộc họ bắp cải lá khác, cũng như các loại bắp cải đã mọc mầm khác và su hào.', en: '(3) Other headed brassicas, (e.g., white cabbage, Savoy cabbage, red cabbage, Chinese cabbage), collards, kale and other leafy brassicas, as well as other sprouting brassicas, and kohlrabi.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm các loại rễ củ khác thuộc chi Brassica (như củ cải nhóm 07.06, cải củ Thụy Điển (rutabaga) của nhóm 12.14).', en: 'Other brassicas in the form of roots arc, however, excluded (e.g., turnips of heading 07.06 , swedes (rutabagas) of heading 12.14 ).' },

      { type: 'heading', vi: '07.05 - Rau diếp, xà lách (Lactuca sativa) và rau diếp xoăn (Cichorium spp.), tươi hoặc ướp lạnh.', en: '07.05 - Lettuce ( Lactuca saliva ) and chicory ( Cichorium spp .), fresh or chilled.' },
      { type: 'paragraph', vi: '- Rau diếp, xà lách:', en: '- Lettuce :' },
      { type: 'list', vi: '0705.11 - - Xà lách cuộn (head lettuce)', en: '0705.11 - - Cabbage lettuce (head lettuce)' },
      { type: 'list', vi: '0705.19 - - Loại khác', en: '0705.19 - - Other' },
      { type: 'paragraph', vi: '- Rau diếp xoăn:', en: '- Chicory :' },
      { type: 'list', vi: '0705.21 - - Rau diếp xoăn rễ củ (Cichorium intybus var. foliosum)', en: '0705.21 - - Witloof chicory ( Cichorium intybus var. foliosum )' },
      { type: 'list', vi: '0705.29 - - Loại khác', en: '0705.29 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm rau diếp, xà lách (Lactuca sativa) tươi hoặc ướp lạnh trong đó loại chủ yếu là xà lách cuộn. Ngoài ra, nhóm này cũng bao gồm cả rau diếp xoăn (Cichorium spp.) tươi hoặc ướp lạnh, kể cả rau cúc đắng, gồm những loại chính sau đây:', en: 'This heading covers fresh or chilled lettuce ( Lactuca saliva ) of which the principal type is cabbage or head lettuce. In addition the heading covers fresh or chilled chicory ( Cichorium spp .), including endive, which includes the following principal varieties :' },
      { type: 'list', vi: '(1) Rau diếp xoăn rễ củ (Cichorium intybus var. foliosum).', en: '(1) Witloof (blanched) chicory (Cichorium intybus var. foliosum)' },
      { type: 'list', vi: '(2) Rau diếp mạ (Cichorium endivia var.latifolia).', en: '(2) Escarole chicory (Cichorium endivia var. latifolia) .' },
      { type: 'list', vi: '(3) Rau diếp xoăn cũng được biết đến như rau cúc đắng (Cichorium endivia var. crispa).', en: '(3) Curly chicory also known as endive (Cichorium endivia var. crispa) .' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm cây và rễ rau diếp xoăn (nhóm 06.01 hoặc 12.12).', en: 'The heading excludes chicory plants and chicory roots ( heading 06.01 or 12.12 ).' },

      { type: 'heading', vi: '07.06 - Cà rốt, củ cải, củ dền làm sa- lát, diếp củ (salsify), cần củ (celeriac), củ cải ri (radish) và các loại củ rễ ăn được tương tự, tươi hoặc ướp lạnh.', en: '07.06 - Carrots, turnips, salad beetroot, salsify, celeriac, radishes and similar edible roots, fresh or chilled.' },
      { type: 'list', vi: '0706.10 - Cà rốt và củ cải', en: '0706.10 - Carrots and turnips' },
      { type: 'list', vi: '0706.90 - Loại khác', en: '0706.90 - Other' },
      { type: 'paragraph', vi: 'Những loại rễ củ tươi hoặc ướp lạnh thuộc nhóm này bao gồm: Cà rốt, củ cải, củ dền làm sa- lát, diếp củ, cần củ (cần có rễ giống củ cải hoặc cần tây Đức), củ cải ri (radish), diếp củ đen (scorzonera), củ cải ngựa, rễ củ a-ti-sô Trung Quốc (Stachys afffinis), củ ngưu bàng (Arcticum lappa) và củ cải vàng (Pastinaca sativa). Những sản phẩm này vẫn ở trong nhóm này cho dù đã hoặc chưa cắt bỏ lá.', en: 'The fresh or chilled roots of this heading include carrots, turnips, salad beetroot (salad beets), salsify, celeriac (turnip-rooted or German celery), radishes, scorzonera, horseradish, Chinese artichokes ( Stachys afffinis ), burdock (Arctium lappa) and parsnips (Pastinaca saliva). These products remain in this heading whether or not their tops have been removed.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Cần tây thuộc nhóm 07.09.', en: '(a) Celery of heading 07.09 .' },
      { type: 'list', vi: '(b) Rễ cây ngưu bàng bảo quản tạm thời (nhóm 07.11).', en: '(b) Provisionally preserved roots of burdock ( heading 07.11 ).' },
      { type: 'list', vi: '(c) Thức ăn cho gia súc thuộc nhóm 12.14.', en: '(c) Forage products of heading 12.14 .' },

      { type: 'heading', vi: '07.07 - Dưa chuột và dưa chuột ri, tươi hoặc ướp lạnh.', en: '07.07 - Cucumbers and gherkins, fresh or chilled.' },
      { type: 'paragraph', vi: 'Nhóm này chỉ bao gồm các loại dưa chuột và dưa chuột ri tươi hoặc ướp lạnh.', en: 'This heading covers only fresh or chilled cucumbers and gherkins.' },

      { type: 'heading', vi: '07.08 - Rau đậu, đã hoặc chưa bóc vỏ, tươi hoặc ướp lạnh.', en: '07.08 - Leguminous vegetables, shelled or unshelled, fresh or chilled.' },
      { type: 'list', vi: '0708.10 - Đậu Hà Lan ( Pisum sativum )', en: '0708.10 - Peas ( Pisum sativum )' },
      { type: 'list', vi: '0708.20 - Đậu hạt ( Vigna spp., Phaseolus spp. )', en: '0708.20 - Beans ( Vigna spp., Phaseolus spp. )' },
      { type: 'list', vi: '0708.90 - Các loại rau đậu khác', en: '0708.90 - Other leguminous vegetables' },
      { type: 'paragraph', vi: 'Các loại rau đậu thuộc nhóm này bao gồm:', en: 'The leguminous vegetables of this heading include :' },
      { type: 'list', vi: '(1) Đậu Hà Lan (Pisum sativum), gồm cả đậu Hà Lan hạt xanh hoặc đậu làm thức ăn cho gia súc.', en: '(1) Peas ( Pisum sativum ), including green peas and fodder peas.' },
      { type: 'list', vi: '(2) Đậu hạt (Vigna spp., Phaasseolus spp) gồm cả đậu Lima hoặc đậu bơ, đậu xanh, đậu ăn được cả vỏ (rất đa dạng như là đậu lửa, đậu Pháp, đậu tây, đậu dây, đậu sáp hoặc đậu ngủ) và đậu bò (kể cả loại có chấm đen).', en: '(2) Beans ( Phaseolus spp.. Vigna spp. ), which include Lima or butter beans, mung beans, beans in edible pods (variously known as kidney beans, French beans, runner beans, string beans, wax beans or snap beans) and cowpeas (including black eye).' },
      { type: 'list', vi: '(3) Đậu tằm (Vicia faba var. major), đậu ngựa (Vicia faba var. equina hoặc var.minor) và đậu dạ hương (Dolichos lablab L.).', en: '(3) Broad beans ( Vicia faba var. major ), horse beans ( Vicia faba var. equina hoặc var.minor ) and hyacinth beans ( Dolichos lablab L. ).' },
      { type: 'list', vi: '(4) Đậu Hà Lan loại nhỏ (garbanzos).', en: '(4) Chickpeas (garbanzos).' },
      { type: 'list', vi: '(5) Đậu lăng.', en: '(5) Lentils.' },
      { type: 'list', vi: '(6) Hạt Guar.', en: '(6) Guar seeds.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Hạt đỗ tương (nhóm 12.01).', en: '(a) Soya beans ( heading 12.01 ).' },
      { type: 'list', vi: '(b) Hạt cây minh quyết (nhóm 12.12).', en: '(b) Locust beans ( heading 12.12 ).' },

      { type: 'heading', vi: '07.09 - Rau khác, tươi hoặc ướp lạnh.', en: '07.09 - Other vegetables, fresh or chilled.' },
      { type: 'list', vi: '0709.20 - Măng tây', en: '0709.20 - Asparagus' },
      { type: 'list', vi: '0709.30 - Cà tím', en: '0709.30 - Aubergines (egg-plants)' },
      { type: 'list', vi: '0709.40 - Cần tây trừ loại cần củ (celeriac)', en: '0709.40 - Celery other than celeriac' },
      { type: 'paragraph', vi: '- Nấm và nấm cục (truffle):', en: '- Mushrooms and truffles :' },
      { type: 'list', vi: '0709.51 - - Nấm thuộc chi Agaricus', en: '0709.51 - - Mushrooms of the genus Agaricus' },
      { type: 'list', vi: '0709.52 - - Nấm thuộc chi Boletus', en: '0709.52 - - Mushrooms of the genus Boletus' },
      { type: 'list', vi: '0709.53 - - Nấm thuộc chi Cantharellus', en: '0709.53 - - Mushrooms of the genus Cantharellus' },
      { type: 'list', vi: '0709.54 - - Nấm hương (Lentinus edodes)', en: '0709.54 - - Shiitake (Lentinus edodes)' },
      { type: 'list', vi: '0709.55 - - Nấm Tùng Nhung (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum)', en: '0709.55 - - Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum)' },
      { type: 'list', vi: '0709.56 - - Nấm cục (Tuber spp.)', en: '0709.56 - - Truffles ( Tuber spp. )' },
      { type: 'list', vi: '0709.59 - - Loại khác:', en: '0709.59 - - Other' },
      { type: 'list', vi: '0709.60 - Quả ớt thuộc chi Capsicum hoặc chi Pimenta', en: '0709.60 - Fruits of the genus Capsicum or of the genus Pimenta' },
      { type: 'list', vi: '0709.70 - Rau chân vịt, rau chân vịt New Zealand, rau chân vịt lê (rau chân vịt trồng trong vườn)', en: '0709.70 - Spinaeh, New Zealand spinach and orache spinach (garden spinach)' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0709.91 - - Hoa a-ti-sô', en: '0709.91 - - Globe artichokes' },
      { type: 'list', vi: '0709.92 - - Ô liu', en: '0709.92 - - Olives' },
      { type: 'list', vi: '0709.93 - - Quả bí ngô, quả bí và quả bầu ( Cucurbita spp .)', en: '0709.93 - - Pumpkins, squash and gourds ( Cucurbita spp.)' },
      { type: 'list', vi: '0709.99 - - Loại khác', en: '0709.99 - - Other' },
      { type: 'paragraph', vi: 'Các loại rau ở nhóm này bao gồm:', en: 'The vegetables of this heading include :' },
      { type: 'list', vi: '(1) Măng tây.', en: '(1) Asparagus.' },
      { type: 'list', vi: '(2) Cà tím.', en: '(2) Aubergines (egg-plants).' },
      { type: 'list', vi: '(3) Cần tây (trừ cần củ thuộc nhóm 07.06).', en: '(3) Celery ( other than celeriac of heading 07.06 ).' },
      { type: 'list', vi: '(4) Nấm (bao gồm cả nấm thuộc chi Agaricus, như là nấm trắng thông thường, A.bisporus) nấm thuộc chi Boletus, nấm thuộc chi Cantharellus, Shiitake (Letinus edodes) và nấm Tùng Nhung (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum) và nấm cục (Tuber spp.)', en: '(4) Mushrooms (including mushrooms of the genus Agaricus , such as the common white mushroom, A. bisporus ), mushrooms of the genus Boletus , mushrooms of the genus Cantharellus , Shiitake (Letinus edodes) and Matsutake (Tricholoma matsutake, Tricholoma magnivelare, Tricholoma anatolicum, Tricholoma dulciolens, Tricholoma caligatum)) and truffles ( Tuber spp. ).' },
      { type: 'list', vi: '(5) Quả thuộc chi Capsicum hoặc chi Pimenta, thường là “quả ớt”. Quả thuộc chi Capsicum bao gồm ớt ngọt hoặc ớt chuông (Capsicum annuum var.annuum), là loại dịu và lớn nhất thuộc chi Capsicum và khi ở dạng xanh hoặc chín chúng thường hay được ăn như là một loại rau trong sa lát, và các loại vị cay hơn thuộc loài Capsicum frutescent và loài Capsicum annuum, gồm ớt cay, ớt đỏ, ớt Ghi-nê, ớt Cayenne, ớt cựa gà... chủ yếu được dùng làm gia vị đồ ăn. Quả thuộc chi Pimenta bao gồm cả ớt Ja-mai-ca (còn gọi là ớt hương, ớt Anh và ớt gia vị). Nhóm này không bao gồm các sản phẩm này khi được làm khô, xay hoặc tán (nhóm 09.04).', en: '(5) Fruits of the genus Capsicum or of the genus Pimenta , commonly referred to as “peppers”. Fruits of the genus Capsicum range from the sweet or bell peppers ( Capsicum annuum var. annuum ), which are the mildest and largest of the genus Capsicum and which, either in their green or their ripened state, are most commonly eaten as a vegetable in salads, to the more pungent varieties of Capsicum frutescens and Capsicum annuum , which include chillies. Cayenne pepper, paprikas, etc., used most often to flavour foods. Fruits of the genus Pimenta include Jamaica pepper (also known as clove pepper, English pepper and allspice). The heading does not cover these products when dried, crushed or ground ( heading 09.04 ).' },
      { type: 'list', vi: '(6) Rau chân vịt, kể cả rau chân vịt New Zealand và rau chân vịt lê (trồng trong vườn).', en: '(6) Spinach, including New Zealand and orache (garden) spinach.' },
      { type: 'list', vi: '(7) Hoa a-ti-sô.', en: '(7) Globe artichokes.' },
      { type: 'list', vi: '(8) Ngô ngọt (Zea mays var. saccharata), còn hoặc không còn trên bắp.', en: '(8) Sweet com ( Zea mays var. saccharata ), whether or not on the cob.' },
      { type: 'list', vi: '(9) Quả bí ngô, rau bí, quả bí và quả bầu (Cucurbita spp.).', en: '(9) Pumpkins, marrows, squash and gourds ( Cucurbita spp. ).' },
      { type: 'list', vi: '(10) Ôliu.', en: '(10) Olives.' },
      { type: 'list', vi: '(11) Cây đại hoàng, rau Các-đông ăn được, cây thì là, cây bạch hoa và cây chua me đất.', en: '(11) Rhubarb, edible cardoons, fennel, capers and sorrel.' },
      { type: 'list', vi: '(12) Củ cải trắng và mướp tây.', en: '(12) Chard (white beet) and okra (gumbo).' },
      { type: 'list', vi: '(13) Mùi tây, xếp-phơi, ngải thơm, cải xoong (thí dụ như cải xoong nước), húng hương (Satureia hortensis), rau mùi, thì là, kinh giới ngọt (Majorana hortensis hoặc Origanum majorana). Cây kinh giới ô dại (Origanum vulgare) bị loại trừ (nhóm 12.11).', en: '(13) Parsley, chervil, tarragon, cress (e.g., watercress), savory ( Satureia hortensis ), coriander, dill, sweet marjoram ( Majorana hortensis or Origanum majorana ). Wild marjoram ( Origanum vulgare ) is excluded ( heading 12.11 ).' },
      { type: 'list', vi: '(14) Măng tre và giá đỗ.', en: '(14) Bamboo shoots and soya bean sprouts.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm loại củ, thân củ ăn được thuộc loài Elcochairis dulcis hoặc Eleocharis tuberosa, thường được gọi là củ mã thầy Trung Quốc (nhóm 07.14).', en: 'The heading also excludes the edible tuber of the species Eleochairis dulcis or Eleocharis tuberosa , commonly known as the Chinese water chestnut ( heading 07.14 ).' },

      { type: 'heading', vi: '07.10 - Rau các loại (đã hoặc chưa hấp chín hoặc luộc chín trong nước), đông lạnh.', en: '07.10 - Vegetables (uncooked or cooked by steaming or boiling in water), frozen.' },
      { type: 'list', vi: '0710.10 - Khoai tây', en: '0710.10 - Potatoes' },
      { type: 'paragraph', vi: '- Rau đậu các loại, đã hoặc chưa bóc vỏ:', en: '- Leguminous vegetables, shelled or unshelled :' },
      { type: 'list', vi: '0710.21 - - Đậu Hà Lan (Pisum sativum)', en: '0710.21 - - Peas (Pisum sativum)' },
      { type: 'list', vi: '0710.22 - - Đậu hạt (Vigna spp., Phaseolus spp.)', en: '0710.22 - - Beans (Vigna spp., Phaseolus spp.)' },
      { type: 'list', vi: '0710.29 - - Loại khác', en: '0710.29 - - Other' },
      { type: 'list', vi: '0710.30 - Rau chân vịt, rau chân vịt New Zealand, rau chân vịt lê (rau chân vịt trồng trong vườn)', en: '0710.30 - Spinach, New Zealand spinach and orache spinach (garden spinach)' },
      { type: 'list', vi: '0710.40 - Ngô ngọt', en: '0710.40 - Sweet corn' },
      { type: 'list', vi: '0710.80 - Rau khác', en: '0710.80 - Other vegetables' },
      { type: 'list', vi: '0710.90 - Hỗn hợp các loại rau', en: '0710.90 - Mixtures of vegetables' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại rau đông lạnh mà khi ở dạng tươi hoặc ướp lạnh thì được phân loại vào các nhóm từ 07.01 đến 07.09.', en: 'This heading covers frozen vegetables which, when fresh or chilled, are classified in headings 07.01 to 07.09.' },
      { type: 'paragraph', vi: 'Khái niệm "đông lạnh" đã được định nghĩa trong phần Chú giải tổng quát của Chương này.', en: 'The expression "frozen” is defined in the General Explanatory Note to this Chapter.' },
      { type: 'paragraph', vi: 'Các loại rau đông lạnh thuộc nhóm này nói chung được xử lý ở cấp độ công nghiệp bằng qui trình đông lạnh nhanh. Phương thức này cho phép đạt đến độ đông cứng rất nhanh. Việc này tránh phá huỷ cấu trúc tế bào và vì thế khi hết đông lạnh các sản phẩm rau này vẫn giữ nguyên được bề ngoài như khi còn tươi.', en: 'The frozen vegetables of this heading are generally obtained at the industrial level by quick-freezing processes. Such processes are used in order that the temperature range of maximum crystallisation is passed quickly. This avoids the rupture of the cellular structure and the vegetables therefore substantially retain their fresh appearance on thawing.' },
      { type: 'paragraph', vi: 'Rau được thêm muối hoặc đường trước khi đông lạnh vẫn được phân vào nhóm này, tương tự như vậy đối với rau đã được luộc hoặc hấp chín trước khi đông lạnh. Tuy nhiên, nhóm này loại trừ những loại rau được làm chín bằng các cách khác (Chương 20) hoặc được chế biến cùng với các thành phần khác, như là đồ ăn sẵn (Phần IV).', en: 'Vegetables to which salt or sugar has been added before freezing remain classified in this heading, as do vegetables which have been cooked by steaming or boiling in water before freezing. However, the heading excludes vegetables cooked by other processes ( Chapter 20 ) or prepared with other ingredients, such as prepared meals ( Section IV ).' },
      { type: 'paragraph', vi: 'Các loại rau chính được bảo quản bằng phương pháp đông lạnh là khoai tây, đậu Hà Lan, đậu hạt, rau chân vịt, ngô ngọt, măng tây, cà rốt và củ dền.', en: 'The principal kinds of vegetables preserved by freezing are potatoes, peas, beans, spinach, sweet corn, asparagus, carrots and beetroot.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm hỗn hợp các loại rau đông lạnh.', en: 'This heading also includes mixtures of frozen vegetables.' },

      { type: 'heading', vi: '07.11 - Rau các loại đã bảo quản tạm, nhưng không ăn ngay được.', en: '07.11 - Vegetables provisionally preserved, but unsuitable in that state for immediate consumption.' },
      { type: 'list', vi: '0711.20 - Ôliu', en: '0711.20 - Olives' },
      { type: 'paragraph', vi: '0711.40 - Dưa chuột và dưa chuột ri', en: '0711.40 - Cucumbers and gherkins' },
      { type: 'paragraph', vi: '- Nấm và nấm cục (truffle):', en: '- Mushrooms and truffles :' },
      { type: 'list', vi: '0711.51 - - Nấm thuộc chi Agaricus', en: '0711.51 - - Mushrooms of the genus Agaricus' },
      { type: 'list', vi: '0711.59 - - Loại khác', en: '0711.59 --Other' },
      { type: 'list', vi: '0711.90 - Rau khác; hỗn hợp các loại rau', en: '0711.90 - Other vegetables; mixtures of vegetables' },
      { type: 'paragraph', vi: 'Nhóm này áp dụng cho các loại rau đã được xử lý chỉ để bảo quản tạm thời trong quá trình vận chuyển hoặc lưu trữ trước khi sử dụng (ví dụ: bảo quản bằng khí sunphurơ, ngâm nước muối, ngâm nước lưu huỳnh hoặc ngâm trong dung dịch bảo quản khác), với điều kiện chúng vẫn không thể ăn ngay được khi ở dạng đó.', en: 'This heading applies to vegetables which have been treated solely to ensure their provisional preservation during transport or storage prior to use (for example, by sulphur dioxide gas, in brine, in sulphur water or in other preservative solutions), provided they remain unsuitable for immediate consumption in that state.' },
      { type: 'paragraph', vi: 'Rau thuộc nhóm này nói chung được đóng gói trong thùng phuy hoặc thùng tô nô, và chủ yếu dùng làm nguyên liệu thô cho sản xuất; các loại chính là hành tây, ôliu, nụ bạch hoa, dưa chuột, dưa chuột ri, nấm, nấm cục (truffle) và cà chua.', en: 'Vegetables covered by this heading are generally packed in casks or barrels, and are mainly used as raw materials for manufacturing purposes: the principal varieties are onions, olives, capers, cucumbers, gherkins, mushrooms, truffles and tomatoes.' },
      { type: 'paragraph', vi: 'Tuy nhiên nhóm này loại trừ những sản phẩm mà ngoài việc bảo quản tạm thời bằng cách ngâm trong nước muối, cũng đã được xử lý theo phương pháp đặc biệt (ví dụ: ngâm trong dung dịch natri carbonate, lên men lactic); chúng thuộc Chương 20 (ví dụ ôliu xanh (ngâm dấm), dưa bắp cải, dưa chuột ri và hạt đậu xanh).', en: 'However the heading excludes goods which, in addition to having been provisionally preserved in brine, have also been specially treated (e.g., by soda solution, by lactic fermentation); these fall in Chapter 20 (for example, olives, sauerkraut, gherkins and green beans).' },

      { type: 'heading', vi: '07.12 - Rau khô, ở dạng nguyên, cắt, thái lát, vụn hoặc ở dạng bột, nhưng chưa chế biến thêm.', en: '07.12 - Dried vegetables, whole, cut, sliced, broken or in powder, but not further prepared.' },
      { type: 'list', vi: '0712.20 - Hành tây', en: '0712.20 - Onions' },
      { type: 'paragraph', vi: '- Nấm, mộc nhĩ (Auricularia spp.), nấm tuyết (Tremella spp.) và nấm cục (truffles):', en: '- Mushrooms, wood ears (Auricularia spp.) , jelly fungi (Tremella spp.) and truffles :' },
      { type: 'list', vi: '0712.31 - - Nấm thuộc chi Agaricus', en: '0712.31 - - Mushrooms of the genus Agaricus' },
      { type: 'list', vi: '0712.32 - - Mộc nhĩ (Auricularia spp.)', en: '0712.32 - - Wood ears (Auricularia spp.)' },
      { type: 'list', vi: '0712.33 - - Nấm tuyết (Tremella spp.)', en: '0712.33 - - Jelly fungi (Tremella spp.)' },
      { type: 'list', vi: '0712.34 - - Nấm hương (Lentinus edodes)', en: '0712.34 - - Shiitake (Lentinus edodes)' },
      { type: 'list', vi: '0712.39 - - Loại khác:', en: '0712.39 - - Other' },
      { type: 'list', vi: '0712.90 - Rau khác; hỗn hợp các loại rau', en: '0712.90 - Other vegetables: mixtures of vegetables' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại rau thuộc nhóm từ 07.01 đến 07.11 đã được làm khô (gồm cả khử nước, làm bay hơi hoặc làm khô bằng đông lạnh) tức là, đã được rút hết hàm lượng nước tự nhiên bằng các phương thức khác nhau. Những loại rau chính được xử lý như vậy là khoai tây, hành tây, nấm, mộc nhĩ (Auricularia spp.), nấm nhầy (Tremella spp.), nấm cục (truffle), cà rốt, bắp cải, rau chân vịt. Chúng thường được thái chỉ hoặc thái lát, cùng loại hoặc hỗn hợp nhiều loại (julienne).', en: 'This heading covers vegetables of headings 07.01 to 07.11 which have been dried (including dehydrated, evaporated or freeze-dried) i.e., with their natural water content removed by various processes. The principal kinds of vegetables treated in this way are potatoes, onions, mushrooms, wood ears ( Auricularia spp .), jelly fungi ( Tremella spp ), truffles, carrots, cabbage and spinach. They are usually prepared in strips or slices, either of one variety or mixed ( julienne ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm những loại rau khô, vụn hoặc ở dạng bột, như là măng tây, súp lơ, mùi tây, rau mùi, cần tây, hành, tỏi, nói chung dùng làm hương liệu hoặc nấu súp.', en: 'The heading also covers dried vegetables, broken or powdered, such as asparagus, cauliflower, parsley, chervil, onion, garlic, celery, generally used either as flavouring materials or in the preparation of soups.' },
      { type: 'paragraph', vi: 'Ngoài các loại khác, nhóm này không bao gồm :', en: 'The heading excludes , inter alia :' },
      { type: 'list', vi: '(a) Rau đậu khô, đã bóc vỏ (nhóm 07.13).', en: '(a) Dried leguminous vegetables, shelled ( heading 07.13 ).' },
      { type: 'list', vi: '(b) Các loại ớt thuộc chi Capsicum hoặc chi Pimenta, đã làm khô, xay hoặc tán thành bột (nhóm 09.04), khoai tây dạng bột, bột thô, bột mịn, dạng mảnh lát, hạt và viên (nhóm 11.05), bột, bột thô và bột mịn của các loại rau đậu khô thuộc nhóm 07.13 (nhóm 11.06).', en: '(b) Dried, crushed or ground fruits of the genus Capsicum or of the genus Pimenta ( heading 09.04 ), potato flour, meal, powder, flakes, granules and pellets ( heading 11.05 ), flour, meal and powder of the dried leguminous vegetables of heading 07.13 ( heading 11.06 ).' },
      { type: 'list', vi: '(c) Gia vị hỗn hợp và bột canh hỗn hợp (nhóm 21.03).', en: '(c) Mixed condiments and mixed seasonings ( heading 21.03 ).' },
      { type: 'list', vi: '(d) Chế phẩm súp làm từ rau khô (nhóm 21.04).', en: '(d) Soup preparations based on dried vegetables ( heading 21.04 ).' },

      { type: 'heading', vi: '07.13 - Các loại rau đậu khô, đã bóc vỏ quả, đã hoặc chưa bóc vỏ hạt hoặc làm vỡ hạt.', en: '07.13 - Dried leguminous vegetables, shelled, whether or not skinned or split (+).' },
      { type: 'list', vi: '0713.10 - Đậu Hà Lan (Pisum sativum)', en: '0713.10 - Peas (Pisum sativum)' },
      { type: 'list', vi: '0713.20 - Đậu gà (chickpeas) (garbanzos)', en: '0713.20 - Chickpeas (garbanzos)' },
      { type: 'paragraph', vi: '- Đậu hạt (Vigna spp., Phaseolus spp.):', en: '- Beans (Vigna spp., Phaseolus spp.):' },
      { type: 'list', vi: '0713.31 - - Đậu thuộc loài Vigna mungo (L.) Hepper hoặc Vigna radiata (L.) Wilczek', en: '0713.31 - - Beans of the species Vigna mungo (L.) Hepper or Vigna radiata (L.) Wilczek' },
      { type: 'list', vi: '0713.32 - - Đậu hạt đỏ nhỏ (Adzuki) (Phaseolus hoặc Vigna angularis)', en: '0713.32 - - Small red (Adzuki) beans (Phaseolus or Vigna angularis)' },
      { type: 'list', vi: '0713.33 - - Đậu tây, kể cả đậu trắng (Phaseolus vulgaris)', en: '0713.33 - - Kidney beans, including white pea beans (Phaseolus vulgaris)' },
      { type: 'list', vi: '0713.34 - - Đậu bambara (Vigna subterranea hoặc Voandzeia subterranea)', en: '0713.34 - - Bambara beans (Vigna subterranea or Voandzeia subterranea)' },
      { type: 'list', vi: '0713.35 - - Đậu đũa (Vigna unguiculata)', en: '0713.35 - - Cow peas (Vigna unguiculata)' },
      { type: 'list', vi: '0713.39 - - Loại khác', en: '0713.39 - - Other' },
      { type: 'list', vi: '0713.40 - Đậu lăng', en: '0713.40 - Lentils' },
      { type: 'list', vi: '0713.50 - Đậu tằm (Vicia faba var. major) và đậu ngựa (Vicia faba var. equina, Vicia faba var. minor)', en: '0713.50 - Broad beans (Vicia faba var. major) and horse beans (Vicia faba var. equina, Vicia faba var. minor)' },
      { type: 'list', vi: '0713.60 - Đậu triều, đậu săng (Cajanus cajan)', en: '0713.60 - Pigeon peas (Cajanus cajan)' },
      { type: 'list', vi: '0713.90 - Loại khác', en: '0713.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại rau đậu thuộc nhóm 07.08 đã làm khô và được bóc vỏ quả, thuộc loại được sử dụng cho người hoặc động vật (ví dụ, đậu Hà Lan, đậu gà, đậu hạt đỏ nhỏ và một số loại đậu khác, đậu lăng, đậu tằm, đậu ngựa, hạt guar), thậm chí khi chúng có thể sử dụng để gieo trồng (cho dù có hoặc không ăn được vì đã qua xử lý bằng hoá chất) hoặc được dùng vào mục đích khác. Các loại đậu này có thể đã qua xử lý nhiệt mức độ vừa phải chủ yếu nhằm bảo quản tốt hơn bằng cách khử hoạt tính của enzyme (đặc biệt là peroxidase) và loại trừ bớt độ ẩm; tuy nhiên, cách xử lý như vậy cần không làm ảnh hưởng đến đặc tính bên trong của phôi mầm.', en: 'This heading covers leguminous vegetables of heading 07.08 which have been dried and shelled, of a kind used for human or animal consumption (e.g., peas, chickpeas, Adzuki and other beans, lentils, broad beans, horse beans, guar seeds), even if intended for sowing (whether or not rendered inedible by chemical treatment) or for other purposes. They may have undergone moderate heat treatment designed mainly to ensure better preservation by inactivating the enzymes (the peroxidases in particular) and eliminating part of the moisture; however, such treatment should not affect the internal character of the cotyledon.' },
      { type: 'paragraph', vi: 'Các loại rau đậu đã làm khô thuộc nhóm này có thể đã được bóc vỏ hạt hoặc làm vỡ hạt.', en: 'The dried leguminous vegetables of this heading may be skinned or split.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'This heading excludes :' },
      { type: 'list', vi: '(a) Rau đậu khô đã bóc vỏ dưới dạng bột, bột thô, bột mịn ( nhóm 11.06 ).', en: '(a) Flour, meal and powder of dried shelled leguminous vegetables ( heading 11.06 ).' },
      { type: 'list', vi: '(b) Đậu tương ( nhóm 12.01 ).', en: '(b) Soya beans ( heading 12.01 ).' },
      { type: 'list', vi: '(c) Hạt đậu tằm (trừ đậu tằm (broad bean) và đậu ngựa), hạt tare và hạt đậu lu-pin ( nhóm 12.09 ).', en: '(c) Seeds of vetches (other than broad beans and horse beans), tares and lupines ( heading 12.09 ).' },
      { type: 'list', vi: '(d) Hạt cây minh quyết ( nhóm 12.12 ).', en: '(d) Locust beans ( heading 12.12 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0713.31', en: 'Subheading 0713.31' },
      { type: 'paragraph', vi: 'Phân nhóm này chỉ bao gồm các loại đậu thuộc loài Vigna mungo (L) Hepper, cũng được gọi là đậu đen hoặc đậu urd, và các loại đậu thuộc loài Vigna radiata (L) Wilczek, cũng được gọi là đậu xanh. Cả hai loài này rất hay được dùng làm giá đỗ.', en: 'This subheading covers only beans of the species Vigna mungo (L) Hepper , also known as urd or black gram, and beans of the species Vigna radiata (L.) Wilczek, also known as mung or green gram. Both species are widely used for bean sprout production.' },

      { type: 'heading', vi: '07.14 - Sắn, củ dong, củ lan, a-ti-sô Jerusalem, khoai lang và các loại củ và rễ tương tự có hàm lượng tinh bột hoặc inulin cao, tươi, ướp lạnh, đông lạnh hoặc khô, đã hoặc chưa thái lát hoặc làm thành dạng viên; lõi cây cọ sago.', en: '07.14 - Manioc, arrowroot, salep, Jerusalem artichokes, sweet potatoes and similar roots and tubers with high starch or inulin content, fresh, chilled, frozen or dried, whether or not sliced or in the form of pellets; sago pith.' },
      { type: 'list', vi: '0714.10 - Sắn', en: '0714.10 - Manioc (cassava)' },
      { type: 'list', vi: '0714.20 - Khoai lang', en: '0714.20 - Sweet potatoes' },
      { type: 'list', vi: '0714.30 - Củ từ, khoai mỡ, khoai tím (Dioscorea spp.)', en: '0714.30 - Yams ( Dioscorea spp. )' },
      { type: 'list', vi: '0714.40 - Khoai sọ, khoai môn (Colacasia spp.)', en: '0714.40 - Taro ( Colacasia spp. )' },
      { type: 'list', vi: '0714.50 - Khoai sáp, khoai mùng ( Xanthosoma spp. )', en: '0714.50 - Yautia ( Xanthosoma spp. )' },
      { type: 'list', vi: '0714.90 - Loại khác', en: '0714.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại củ và rễ có hàm lượng tinh bột hoặc hàm lượng inulin cao và vì vậy được sử dụng để chế biến thành thực phẩm hoặc các sản phẩm công nghiệp; nó cũng bao gồm lõi cây cọ sago. Trong một vài trường hợp, các loại củ và rễ này cũng được sử dụng trực tiếp cho người và động vật.', en: 'This heading covers tubers and roots with high starch or inulin content and which are therefore used for manufacturing food or industrial products; it also covers sago pith. In some cases, the tubers and roots are also used directly for human or animal consumption.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các sản phẩm này, ở dạng tươi, ướp lạnh, đông lạnh hay khô, đã hoặc chưa thái lát hoặc dưới dạng viên được chế biến từ các mảnh (ví dụ miếng nhỏ) của các loại củ hoặc rễ trong nhóm này hoặc từ bột, bột thô, bột mịn của chúng thuộc nhóm 11.06. Các sản phẩm dạng viên được làm bằng cách ép trực tiếp hoặc cho thêm một chất gắn (mật đường, dung dịch kiềm sulphit cô đặc...); hàm lượng phụ gia chất gắn không vượt quá 3% tính theo trọng lượng. Các sản phẩm dạng viên làm từ sắn có thể bị phân rã, nhưng vẫn được phân loại vào nhóm này với điều kiện chúng có thể nhận dạng được. Viên từ bột sắn phân rã có thể nhận biết bằng cách quan sát các đặc tính vật lý của chúng, thí dụ như có những hạt không đồng nhất cùng những mảnh vỡ của viên bột sắn, có màu nâu nhạt với những chấm đen, những mẩu xơ sợi mà mắt thường có thể nhìn thấy và một lượng nhỏ cát hoặc silica còn lại trong sản phẩm.', en: 'The heading covers these products, fresh, chilled, frozen or dried, whether or not sliced or in the form of pellets made either from pieces (e.g., chips) of the roots or tubers of this heading or from their flours, meals or powders of heading 11.06. The pellets are proudced either directly by compression or by the addition of a binder (molasses, concentrated sulphite lyes, etc.); the proportion of added binder may not exceed 3 % by weight. Manioc pellets may be disintegrated, but remain classified here provided that they are identifiable as such. The disintegrated manioc pellets can be identified by observing their physical characteristics, e.g., non-homogeneous particles with broken pieces of manioc pellets, brownish colour with black spots, pieces of fibre visible to the naked eye and a small quantity of sand or silica left in.' },
      { type: 'paragraph', vi: 'Ngoài những củ, thân củ và rễ nêu cụ thể trong nhóm này (sắn (Manihot esculenta), khoai lang (Ipomoea batatas)…), nhóm này bao gồm cả củ ăn được thuộc loài Elcocharis dulcis hoặc Eleocharis tuberosa, thường được gọi là củ mã thầy Trung Quốc.', en: 'In addition to the tubers and roots specifically mentioned in the heading text (manioc ( Manihot esculenta ), sweet potatoes ( Ipomoea batatas ), etc.), the heading includes the edible tuber of the species Elcocharis dulcis or Eleocharis tuberosa, commonly known as the Chinese water chestnut.' },
      { type: 'paragraph', vi: 'Những sản phẩm thuộc nhóm này nếu được chế biến theo những cách khác sẽ được phân loại vào các Chương khác, ví dụ, bột, bột thô và bột mịn (nhóm 11.06), tinh bột (nhóm 11.08) và tinh bột sắn (nhóm 19.03).', en: 'Products of this heading which are otherwise prepared fall in other Chapters, e.g., flour, meal and powder ( heading 11.06 ), starches ( heading 11.08 ) and tapioca ( heading 19.03 ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng loại trừ rễ củ thược dược sống (nhóm 06.01) và khoai tây, tươi hoặc khô (tương ứng, nhóm 07.01 hoặc 07.12).', en: 'The heading also excludes live dahlia tubers ( heading 06.01 ), and potatoes, fresh or dried ( heading 07.01 or 07.12 , respectively).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 8
  // ------------------------------------------------------------
  {
    chapterNumber: 8,
    titleVi: 'CHƯƠNG 8: QUẢ VÀ QUẢ HẠCH (NUT) ĂN ĐƯỢC; VỎ QUẢ THUỘC HỌ CAM QUÝT HOẶC CÁC LOẠI DƯA',
    titleEn: 'CHAPTER 8: EDIBLE FRUIT AND NUTS; PEEL OF CITRUS FRUIT OR MELONS',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 8: Quả và quả hạch (nut) ăn được; vỏ quả thuộc họ cam quýt hoặc các loại dưa', en: 'Chapter 8: Edible fruit and nuts; peel of citrus fruit or melons' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1. Chương này không bao gồm các loại quả hạch (nuts) hoặc quả không ăn được.', en: '1. - This Chapter does not cover inedible nuts or fruits.' },
      { type: 'paragraph', vi: '2. Quả và quả hạch (nuts) ướp lạnh được xếp cùng nhóm với quả và quả hạch (nuts) tươi tương ứng.', en: '2. - Chilled fruits and nuts are to be classified in the same headings as the corresponding fresh fruits and nuts.' },
      { type: 'paragraph', vi: '3. Quả khô hoặc quả hạch (nuts) khô thuộc Chương này có thể được hydrat hóa lại một phần, hoặc xử lý nhằm các mục đích sau:', en: '3. - Dried fruit or dried nuts of this Chapter may be partially rehydrated, or treated for the following purposes :' },
      { type: 'list', vi: '(a) Tăng cường bảo quản hoặc làm ổn định (ví dụ: xử lý bằng nhiệt vừa phải, bằng lưu huỳnh, bằng cách cho thêm axit sorbic hoặc kali sorbat),', en: '(a) For additional preservation or stabilisation (for example, by moderate heat treatment, sulphuring, the addition of sorbic acid or potassium sorbate),' },
      { type: 'list', vi: '(b) Cải thiện hoặc duy trì bề ngoài của chúng (ví dụ: bằng cách cho thêm dầu thực vật hoặc một lượng nhỏ xirô glucoza), với điều kiện là chúng vẫn giữ được đặc tính của quả và quả hạch (nuts) khô.', en: '(b) To improve or maintain their appearance (for example, by the addition of vegetable oil or small quantities of glucose syrup), provided that they retain the character of dried fruit or dried nuts.' },
      { type: 'paragraph', vi: '4. Nhóm 08.12 áp dụng cho những loại quả và quả hạch (nut) đã qua xử lý chỉ để bảo quản tạm thời trong quá trình vận chuyển hoặc lưu trữ trước khi đưa vào sử dụng (ví dụ: bảo quản bằng khí sunphurơ, ngâm nước muối, nước lưu huỳnh hoặc trong các dung dịch bảo quản khác), với điều kiện chúng không phù hợp để dùng ngay khi ở dạng đó.', en: '4.- Heading 08.12 applies to fruit and nuts which have been treated solely to ensure their provisional preservation during transport or storage prior to use (for example, by sulphur dioxide gas, in brine, in sulphur water or in other preservative solutions), provided they remain unsuitable for immediate consumption in that state.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này bao gồm các loại quả, quả hạch (nut) và vỏ quả thuộc chi cam, quýt, chanh (citrus) hoặc dưa (kể cả dưa hấu), nói chung dùng làm thực phẩm cho người (cho dù còn nguyên trạng hoặc đã chế biến). Chúng có thể ở dạng tươi (kể cả ướp lạnh), đông lạnh (trước đó đã hoặc chưa được hấp chín hoặc luộc chín trong nước hoặc cho thêm chất làm ngọt) hoặc làm khô (kể cả khử nước, làm bay hơi hoặc làm khô bằng đông lạnh); miễn là chúng không thích hợp để ăn ngay dưới trạng thái đó, chúng có thể được bảo quản tạm thời (ví dụ: bằng khí sulphur dioxide, ngâm nước muối, nước lưu huỳnh hoặc trong các dung dịch bảo quản khác).', 
        en: 'This Chapter covers fruit, nuts and peel of citrus fruit or melons (including watermelons), generally intended for human consumption (whether as presented or after processing). They may be fresh (including chilled), frozen (whether or not previously cooked by steaming or boiling in water or containing added sweetening matter) or dried (including dehydrated, evaporated or freeze-dried); provided they are unsuitable for immediate consumption in that state, they may be provisionally preserved (e.g., by sulphur dioxide gas, in brine, in sulphur water or in other preservative solutions).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Khái niệm "ướp lạnh" nghĩa là nhiệt độ của một sản phẩm đã được hạ xuống thường là quanh 0 °C, nhưng chưa đến mức đông lạnh. Tuy nhiên một số sản phẩm, như dưa hoặc một số loại thuộc chi cam, quýt, chanh (citrus), có thể được coi là được ướp lạnh khi nhiệt độ của chúng được giảm và duy trì ở mức +10°C. Khái niệm "đông lạnh" nghĩa là sản phẩm được làm lạnh ở nhiệt độ dưới điểm đóng băng của sản phẩm cho đến khi đông lạnh hoàn toàn.', 
        en: 'The term “chilled” means that the temperature of a product has been reduced, generally to around 0 °C, without the product being frozen. However, some products, such as melons and certain citrus fruit, may be considered to be chilled when their temperature has been reduced to and maintained at + 10 °C. The expression “frozen” means that the product has been cooled to below the product\'s freezing point until it is frozen throughout.' 
      },
      { type: 'paragraph', vi: 'Quả và quả hạch (nut) thuộc Chương này có thể nguyên dạng hoặc được cắt lát, thái miếng, bỏ hạt, nghiền nát, nạo, cạo gọt hay bóc vỏ.', en: 'Fruit and nuts of this Chapter may be whole, sliced, chopped, shredded, stoned, pulped, grated, peeled or shelled.' },
      { type: 'paragraph', vi: 'Cần lưu ý rằng việc đồng nhất hoá các sản phẩm của Chương này, bản thân nó, sẽ không làm sản phẩm thuộc Chương này đủ điều kiện để được phân loại vào Chương 20.', en: 'It should be noted that homogenisation, by itself, does not qualify a product of this Chapter for classification as a preparation of Chapter 20.' },
      { type: 'paragraph', vi: 'Việc bổ sung một lượng nhỏ đường không làm ảnh hưởng đến việc phân loại của quả vào Chương này. Chương này cũng bao gồm cả những loại quả khô (ví dụ: chà là và mận khô, với một lớp đường tự nhiên đã khô còn lại trên bề mặt khiến chúng có vẻ giống với những quả bọc đường của nhóm 20.06.', en: 'The addition of small quantities of sugar does not affect the classification of fruit in this Chapter. The Chapter also includes dried fruit (e.g., dates and prunes), the exterior of which may be covered with a deposit of dried natural sugar thus giving the fruit an appearance somewhat similar to that of the crystallised fruit of heading 20.06.' },
      { type: 'paragraph', vi: 'Tuy nhiên, Chương này không bao gồm quả được bảo quản bằng cách thấm lọc tách nước. Khái niệm “thấm lọc tách nước” dùng để chỉ quá trình xử lý mà theo đó các mảnh quả được ngâm kéo dài trong xirô đường đậm đặc cho đến khi phần lớn nước và đường tự nhiên của quả được thay thế bằng đường có trong xirô. Quả sau đó có thể được hong khô (air-dried) để giảm thêm độ ẩm. Quả như vậy được phân loại vào Chương 20 ( nhóm 20.08 ).', en: 'However, this Chapter does not cover fruit preserved by osmotic dehydration. The expression “osmotic dehydration” refers to a process whereby pieces of fruit are subjected to prolonged soaking in a concentrated sugar syrup so that much of the water and the natural sugar of the fruit is replaced by sugar from the syrup. The fruit may subsequently be air-dried to further reduce the moisture content. Such fruit is classified in Chapter 20 (heading 20.08).' },
      { type: 'paragraph', vi: 'Chương này cũng không bao gồm một số sản phẩm rau quả được nêu cụ thể hơn tại các Chương khác, mặc dù về mặt thực vật một số là các loại quả, ví dụ:', en: 'This Chapter also excludes a number of vegetable products more specifically covered in other Chapters even though botanically some of them are fruits, e.g.:' },
      { type: 'list', vi: '(a) Ôliu, cà chua, dưa chuột, dưa chuột ri, bí, bí đỏ, cà tím, các loại quả thuộc chi Capsicum hoặc chi Pimenta ( Chương 7 ).', en: '(a) Olives, tomatoes, cucumbers, gherkins, marrows, pumpkins, aubergines (egg-plant), fruits of the genus Capsicum or of the genus Pimenta ( Chapter 7 ).' },
      { type: 'list', vi: '(b) Cà phê, vani, hạt bách xù (juniper berries) và các sản phẩm khác của Chương 9 .', en: '(b) Coffee, vanilla, juniper berries and other products of Chapter 9 .' },
      { type: 'list', vi: '(c) Lạc và một số hạt có dầu, các loại quả chủ yếu dùng trong dược phẩm hoặc chế nước hoa, quả minh quyết, hạt mơ hoặc hạt của các quả tương tự ( Chương 12 ).', en: '(c) Ground-nuts and other oleaginous fruit, fruit used primarily in pharmacy or in perfumery, locust beans, kernels of apricots or of similar fruit ( Chapter 12 ).' },
      { type: 'list', vi: '(d) Hạt ca cao ( nhóm 18.01 ).', en: '(d) Cocoa beans ( heading 18.01 ).' },
      { type: 'paragraph', vi: 'Chương này cũng không bao gồm :', en: 'The Chapter further excludes :' },
      { type: 'list', vi: '(i) Bột, bột thô, bột mịn chế biến từ quả ( nhóm 11.06 ).', en: '(i) Fruit Flour, meal and powder ( heading 11.06 ).' },
      { type: 'list', vi: '(ii) Quả và quả hạch (nut) ăn được và vỏ quả dưa hoặc quả thuộc chi cam quýt, được chế biến hoặc bảo quản theo các phương pháp khác với các phương pháp đã được kể trên', en: '(ii) Edible fruit and nuts and peel of melons or citrus fruit, prepared or preserved otherwise than as described above ( Chapter 20 ).' },
      { type: 'list', vi: '(iii) Quả và quả hạch (nut) được rang chín (ví dụ: hạt dẻ, hạnh nhân và sung, vả) đã hoặc chưa xay, nghiền, thường được sử dụng như chất thay thế cà phê ( nhóm 21.01 ).', en: '(iii) Roasted fruit and nuts (e.g., chestnuts, almonds and figs), whether or not ground, generally used as coffee substitutes ( heading 21.01 ).' },
      { type: 'paragraph', vi: 'Cần lưu ý quả và quả hạch (nut) thuộc Chương này vẫn được phân loại ở đây ngay cả khi chúng được đóng bao bì kín khí (ví dụ: mận khô, quả hạch (nut) khô đóng hộp). Tuy nhiên, trong hầu hết các trường hợp, những sản phẩm đóng gói theo cách này đều đã được chế biến hoặc bảo quản theo cách khác với cách đã nêu tại các nhóm thuộc Chương này và vì vậy chúng bị loại trừ ( Chương 20 ).', en: 'It should be noted that fruit and nuts of this Chapter remain classified here even if put up in airtight packings (e.g., dried prunes, dried nuts in cans). In most cases, however, products put up in these packings have been prepared or preserved otherwise than as provided for in the headings of this Chapter, and are therefore excluded (Chapter 20) .' },
      { type: 'paragraph', vi: 'Các sản phẩm thuộc Chương này vẫn được phân loại vào Chương này (ví dụ: dâu tươi) khi chúng được đóng gói bằng Phương pháp đóng gói điều chỉnh không khí- Modified Atmospheric Packaging (MAP). Trong phương pháp MAP, không khí bao quanh sản phẩm được thay đổi hay kiểm soát (ví dụ: bằng cách loại bỏ hoặc giảm hàm lượng oxy và thay bằng hay làm tăng hàm lượng nitơ và carbon dioxide).', en: 'Products of this Chapter remain classified here (e.g., fresh strawberries) when subjected to packaging by means of a Modified Atmospheric Packaging (MAP) process. In a MAP process the atmosphere surrounding the product is altered or controlled (e.g., by removing or reducing the oxygen content and replacing it with or increasing the nitrogen or carbon dioxide content).' },

      { type: 'heading', vi: '08.01 - Dừa, quả hạch Brazil (Brazil nuts) và hạt điều, tươi hoặc khô, đã hoặc chưa bóc vỏ hoặc lột vỏ..', en: '08.01 - Coconuts, Brazil nuts and cashew nuts, fresh or dried, whether or not shelled or peeled (+).' },
      { type: 'paragraph', vi: '- Dừa:', en: '- Coconuts:' },
      { type: 'list', vi: '0801.11 - - Đã qua công đoạn làm khô', en: '0801.11 - - Desiccated' },
      { type: 'list', vi: '0801.12 - - Dừa còn nguyên sọ', en: '0801.12 - - In the inner shell (endocarp)' },
      { type: 'list', vi: '0801.19 - - Loại khác', en: '0801.19 - - Other' },
      { type: 'paragraph', vi: '- Quả hạch Brazil (Brazil nut):', en: '- Brazil nuts :' },
      { type: 'list', vi: '0801.21 - - Chưa bóc vỏ', en: '0801.21 - - In shell' },
      { type: 'list', vi: '0801.22 - - Đã bóc vỏ', en: '0801.22 - - Shelled' },
      { type: 'paragraph', vi: '- Hạt điều:', en: '- Cashew nuts :' },
      { type: 'list', vi: '0801.31 - - Chưa bóc vỏ', en: '0801.31 - - In shell' },
      { type: 'list', vi: '0801.32 - - Đã bóc vỏ', en: '0801.32 - - Shelled' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm cả dừa đã qua công đoạn làm khô, tức là cùi dừa nạo và làm khô, nhưng loại trừ copra, phần cùi dừa khô dùng để chiết xuất dầu dừa và không thích hợp làm thức ăn cho người ( nhóm 12.03 ).', en: 'The heading includes desiccated coconut, that is dried and shredded flesh of coconut, but it excludes copra, the dried flesh of coconut used for the expression of coconut oil and unsuitable for human consumption ( heading 12.03 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0801.12', en: 'Subheading 0801.12' },
      { type: 'paragraph', vi: 'Phân nhóm này chỉ bao gồm dừa có lớp vỏ thô sơ bên ngoài (vỏ quả giữa) bị loại bỏ một phần hoặc hoàn toàn.', en: 'This subheading covers only coconuts whose outer fibrous husk (mesocarp) has been partially or completely removed.' },

      { type: 'heading', vi: '08.02 - Quả hạch (nut) khác, tươi hoặc khô, đã hoặc chưa bóc vỏ hoặc lột vỏ.', en: '08.02 - Other nuts, fresh or dried, whether or not shelled or peeled.' },
      { type: 'paragraph', vi: '- Quả hạnh nhân:', en: '- Almonds :' },
      { type: 'list', vi: '0802.11 - - Chưa bóc vỏ', en: '0802.11 - - In shell' },
      { type: 'list', vi: '0802.12 - - Đã bóc vỏ', en: '0802.12 - - Shelled' },
      { type: 'paragraph', vi: '- Quả phỉ hay hạt phỉ ( Corylus spp. ):', en: '- Hazelnuts or filberts ( Corylus spp. ):' },
      { type: 'list', vi: '0802.21 - - Chưa bóc vỏ', en: '0802.21 - - In shell' },
      { type: 'list', vi: '0802.22 - - Đã bóc vỏ', en: '0802.22 - - Shelled' },
      { type: 'paragraph', vi: '- Quả óc chó:', en: '- Walnuts :' },
      { type: 'list', vi: '0802.31 - - Chưa bóc vỏ', en: '0802.31 - - In shell' },
      { type: 'list', vi: '0802.32 - - Đã bóc vỏ', en: '0802.32 - - Shelled' },
      { type: 'paragraph', vi: '- Hạt dẻ ( Castanea spp. ):', en: '- Chestnuts ( Castanea spp. ):' },
      { type: 'list', vi: '0802.41 - - Chưa bóc vỏ', en: '0802.41 - - In shell' },
      { type: 'list', vi: '0802.42 - - Đã bóc vỏ', en: '0802.42 - - Shelled' },
      { type: 'paragraph', vi: '- Quả hồ trăn (Hạt dẻ cười):', en: '- Pistachios:' },
      { type: 'list', vi: '0802.51 - - Chưa bóc vỏ', en: '0802.51 - - In shell' },
      { type: 'list', vi: '0802.52 - - Đã bóc vỏ', en: '0802.52 - - Shelled' },
      { type: 'paragraph', vi: '- Hạt mắc-ca (Macadamia nuts):', en: '- Macadanda nuts:' },
      { type: 'list', vi: '0802.61 - - Chưa bóc vỏ', en: '0802.61 - - In shell' },
      { type: 'list', vi: '0802.62 - - Đã bóc vỏ', en: '0802.62 - - Shelled' },
      { type: 'list', vi: '0802.70 - Hạt cây côla ( Cola spp. )', en: '0802.70 - Kola nuts ( Cola spp. )' },
      { type: 'list', vi: '0802.80 - Quả cau', en: '0802.80 - Areca nuts' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '0802.91 - - Hạt thông, chưa bóc vỏ', en: '0802.91 - - Pine nuts, in shell' },
      { type: 'list', vi: '0802.92 - - Hạt thông, đã bóc vỏ', en: '0802.92 - - Pine nuts, shelled' },
      { type: 'list', vi: '0802.99 - Loại khác', en: '0802.99 - - Other' },
      { type: 'paragraph', vi: 'Những quả hạch (nut) chủ yếu thuộc nhóm này là hạnh nhân (ngọt hoặc đắng), quả phỉ hoặc hạt phỉ, quả óc chó, hạt dẻ ( Castanea spp. ), hồ trăn, quả macadamia, quả hồ đào pecan và hạt thông.', en: 'The principal nuts of this heading are almonds (sweet or bitter), hazelnuts or filberts, walnuts, chestnuts ( Castanea spp .), pistachios, macadamia nuts, peancs and pine nuts.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả quả cau (betel) chủ yếu được sử dụng để nhai trầu, hạt cola (cây côla) được dùng để nhai và làm nguyên liệu để sản xuất đồ uống và cả loại quả ăn được, giống quả hạch (nutlike), có vỏ gai thuộc loài Trapa natans , đôi khi được gọi là củ mã thầy.', en: 'This heading also covers areca (betel) nuts used chiefly as a masticatory, cola (kola) nuts used both as a masticatory and as a base in the manufacture of beverages, and an edible, nutlike, spiny-angled fruit of the species Trapa natans , sometimes referred to as a water chestnut.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not include :' },
      { type: 'list', vi: '(a) Loại củ ăn được thuộc loài Elcocharis dulcis hoặc Elcocharis tuberosa , thường gọi là củ mã thầy Trung Quốc ( nhóm 07.14 ).', en: '(a) The edible tuber of the species Elcocharis dulcis or Elcocharis tuberosa, commonly known as the Chinese water chestnut ( heading 07.14 ).' },
      { type: 'list', vi: '(b) Vỏ quả óc chó (bồ đào) hoặc hạnh nhân rỗng ( nhóm 14.04 ).', en: '(b) Empty walnut or almond hulls ( heading 14.04 ).' },
      { type: 'list', vi: '(c) Lạc ( nhóm 12.02 ), lạc rang hoặc bơ lạc ( nhóm 20.08 ).', en: '(e) Ground-nuts ( heading 12.02 ), roasted ground-nuts or peanut butter ( heading 20.08 ).' },
      { type: 'list', vi: '(d) Hạt dẻ ngựa ( Aesculus hippocastanum ) ( nhóm 23.08 ).', en: '(d) Horse chestnuts ( Aesculus hippocastanum ) ( heading 23.08 ).' },

      { type: 'heading', vi: '08.03 - Chuối, kể cả chuối lá, tươi hoặc khô.', en: '08.03 - Bananas, including plantains, fresh or dried.' },
      { type: 'list', vi: '0803.10 - Chuối lá', en: '0803.10 - Plantains' },
      { type: 'list', vi: '0803.90 - Loại khác', en: '0803.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại quả ăn được thuộc chi Musa .', en: 'This heading covers all edible fruit of the species of the genus Musa .' },
      { type: 'paragraph', vi: 'Chuối lá là chuối có nhiều chất tinh bột mà ít ngọt hơn các chuối khác. Tinh bột chứa trong chuối lá khác với tinh bột chứa trong các chuối khác bởi vì nó không trở nên ngọt trong quá trình chín. Chuối lá được tiêu thụ chủ yếu sau khi được làm khô, chiên, nướng, hấp, luộc hoặc nấu chín cách khác.', en: 'Plantains are starchy bananas that are less sweet than other bananas. The starch contained in plantains differs from that contained in other bananas in that it does not become sweet during ripening. Plantains are primarily consumed after being fried, roasted, steamed, boiled or otherwise cooked.' },

      { type: 'heading', vi: '08.04 - Quả chà là, sung, vả, dứa, bơ, ổi, xoài và măng cụt, tươi hoặc khô.', en: '08.04 - Dates, figs, pineapples, avocados, guavas, mangoes and mangosteens, fresh or dried.' },
      { type: 'list', vi: '0804.10 - Quả chà là', en: '0804.10 - Dates' },
      { type: 'list', vi: '0804.20 - Quả sung, vả', en: '0804.20 - Figs' },
      { type: 'list', vi: '0804.30 - Quả dứa', en: '0804.30 - Pineapples' },
      { type: 'list', vi: '0804.40 - Quả bơ', en: '0804.40 - Avocados' },
      { type: 'list', vi: '0804.50 - Quả ổi, xoài và măng cụt', en: '0804.50 - Guavas, mangoes and mangosteens' },
      { type: 'paragraph', vi: 'Theo mục đích của nhóm này, khái niệm "quả sung, vả" chỉ áp dụng cho các loại quả thuộc loài Fucus carica , đã hoặc chưa dùng để trưng cất; vì vậy nhóm này không bao gồm các loại vả xương rồng (lê gai) thuộc nhóm 08.10 .', en: 'For the purposes of this heading the term “ figs ” applies only to fruits of he species Ficus carica, whether or not to be used for distillation; the leading therefore does not cover cactus figs (prickly pears) which fall in heading 08.10 .' },

      { type: 'heading', vi: '08.05 - Quả thuộc chi cam quýt, tươi hoặc khô (+).', en: '18.05 - Citrus fruit, fresh or dried (+).' },
      { type: 'list', vi: '0805.10 - Quả cam', en: '0805.10 - Oranges' },
      { type: 'paragraph', vi: '- Quả quýt các loại (kể cả quất); cam nhỏ (clementines) và các loại giống lai chi cam quýt tương tự:', en: '- Mandarins (including tangerines and satsumas); clementines, wilkings and similar citrus hybrids:' },
      { type: 'list', vi: '0805.21 - - Quả quýt các loại (kể cả quất)', en: '0805.21 - - Mandarins (including tangerines and satsumas)' },
      { type: 'list', vi: '0805.22 - - Cam nhỏ (Clementines)', en: '0805.22 - - Clementines' },
      { type: 'list', vi: '0805.29 - - Loại khác', en: '0805.29 - - Other' },
      { type: 'list', vi: '0805.40 - Bưởi chùm (Grapefruit) và bưởi (pomelos)', en: '0805.40 - Grapefruit and pomelos' },
      { type: 'list', vi: '0805.50 - Quả chanh vàng (lemon) ( Citrus limon, Citrus limonum ) và quả chanh xanh (chanh ta Citrus aurantifolia, chanh không hạt Citrus latifolia )', en: '0805.50 - Lemons ( Citrus limon, Citrus limonum ) and limes ( Citrus aurantifolia, Citrus latifolia )' },
      { type: 'list', vi: '0805.90 - Loại khác', en: '0805.90 - Other' },
      { type: 'paragraph', vi: 'Ngoài những loại khác , khái niệm "quả thuộc chi cam, quýt, chanh (citrus)," áp dụng cho:', en: 'The expression “citrus fruit” applies inter alia to:' },
      { type: 'list', vi: '(1) Cam, ngọt hoặc đắng (cam đắng).', en: '1) Oranges, sweet or bitter (Seville oranges).' },
      { type: 'list', vi: '(2) Cam/quýt mandarin các loại (kể cả quýt tangerine và quýt satsuma). Cam/quýt mandarin các loại có thể được chia thành các loại hoặc nhóm chính sau đây:', en: '2) Mandarins (including tangerines and satsumas). Mandarins can be grouped in the following main classes or groups :' },
      { type: 'list', vi: '- Quýt satsuma ( Citrus unshiu Marcovitch) gồm nhiều loại.', en: '- Satsuma ( Citrus unshiu Marcovitch), which consists of many varieties.' },
      { type: 'list', vi: '- Quýt Hoàng Đế ( Citrus nobilis Loureiro) gồm một vài loại.', en: '- King ( Citrus nobilis Loureiro), which contains a few varieties.' },
      { type: 'list', vi: '- Quýt Địa Trung Hải (Citrus deliciosa Tenore ), còn được gọi là quýt Willowleaf.', en: '- Mediterranean ( Citrus deliciosa Tenore), also known as Willowleaf.' },
      { type: 'list', vi: '- Quýt thường ( Citrus reticulata Blanco) gồm nhiều loại.', en: '- Common ( Citrus reticulata Blanco), which is represented by numerous varieties.' },
      { type: 'list', vi: '- Cam/quýt mandarin nhỏ gồm nhiều loại.', en: '- Small-fruited mandarins, which consist of many species.' },
      { type: 'list', vi: '(3) Cam nhỏ (Clementines), quýt wilking và các loại quả lai tương tự thuộc chi cam quýt.', en: '(3) Clementines, walkings and similar citrus hybrids' },
      { type: 'list', vi: '(4) Quả bưởi (bao gồm cả bưởi chùm).', en: '(4) Grapefruit và pomelos.' },
      { type: 'list', vi: '(5) Quả chanh vàng (Citrus limon, Citrus limonum) và quả chanh xanh (Citrus aurantifolia, Citrus latifolia) .', en: '(5) Lemons (Citrus limon, Citrus limonum) and limes (Citrus aurantifolia, Citrus latifolia) .' },
      { type: 'list', vi: '(6) Quả thanh yên, quất vàng và cam bergamot,...', en: '(6) Citrons, kumquats and bergamots, etc.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các loại quả chanh xanh nhỏ và cam xanh nhỏ dùng để bảo quản.', en: 'The heading also includes small green oranges and small green lemons of a kind used for preserving.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Vỏ quả thuộc chi cam quýt ( nhóm 08.14 ).', en: '(a) Citrus fruit peel ( heading 08.14 ).' },
      { type: 'list', vi: '(b) Cam non, không ăn được, rụng ngay sau khi hoa kết trái, được để khô chủ yếu dùng để chiết xuất tinh dầu chứa trong quả (petit-grain) ( nhóm 12.11 ).', en: '(b) “Orange peas” or “orangettes” which are immature inedible oranges having fallen soon after the tree has blossomed, gathered dry with a view, in particular, to extraction of their essential oil (petit-grain) ( heading 12.11 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Notes.' },
      { type: 'paragraph', vi: 'Phân nhóm 0805.21', en: 'Subheading 0805.21' },
      { type: 'paragraph', vi: 'Phân nhóm này bao gồm cả cam/quýt mandarin các loại (kể cả quýt tangerine và quýt satsuma)', en: 'This subheading covers mandarins (including tangerines and satsumas).' },
      { type: 'paragraph', vi: 'Cam/quýt mandarin ( Citrus reticulata Blanco) thuộc loại "thông thường" có thể được phân biệt với loại cam bình thường qua hình dẹt, nhỏ hơn, dễ bóc vỏ hơn, dễ tách múi và chúng có hương vị ngọt và thơm hơn. Quýt mandarin có một lõi giữa (to hơn so với các loại cam) và hạt với lá mầm hơi xanh lục (rất ít ngoại lệ).', en: 'Mandarins ( Citrus reticulata Blanco) under the “Common” group may be distinguished from ordinary oranges by their smaller, flattened shape, by easier peeling, by a more distinct division of their segments and by their sweeter and more perfumed taste. Mandarins have an open core (much more so than any of the oranges) and seeds with greenish cotyledons (minor exceptions).' },
      { type: 'paragraph', vi: 'Quýt tangerine có hình tròn và hơi nhỏ hơn so với cam. Vỏ có màu cam sáng hoặc đỏ. Quýt tangerine dễ bóc vỏ, và hương vị ít chua hơn so với trái cây thuộc chi cam quýt khác.', en: 'Tangerines are round in shape and slightly smaller than an orange. Their peel is bright orange or red in colour. Tangerines peel easily, and their taste is less acid than that of other citrus fruit.' },
      { type: 'paragraph', vi: 'Quýt satsuma ( Citrus unshiu Marcovitch) là một dạng của cam/quýt mandarin. Quả lớn, màu vàng cam, mọng nước, không chua và không có hạt.', en: 'Satsumas ( Citrus unshiu Marcovitch) are an early variety of mandarin. The fruit is large, yellow-orange in colour, juicy, nonacid and without pips.' },
      { type: 'paragraph', vi: 'Quýt mandarin lai (kể cả quýt tangerine và quýt satsuma lai) được phân loại vào phân nhóm 0805.29', en: 'Mandarin hybrids (including tangerine and satsuma hybrids) are classified in subheading 0805.29' },
      { type: 'paragraph', vi: 'Phân nhóm 0805.22', en: 'Subheading 0805.22' },
      { type: 'paragraph', vi: 'Phân nhóm này bao gồm cam nhỏ (clementines).', en: 'This subheading covers clementines.' },
      { type: 'paragraph', vi: 'Cam nhỏ (clementines) ( Citrus reticulate \'Clementina\') có thể phân biệt với cam/quýt mandarin bởi màu vỏ, có màu cam đến màu cam hơi đỏ. Vỏ mịn và bóng, nhưng hơi có nốt sần nhỏ. Hơn nữa, chúng không có hình dẹt như cam/quýt mandarin, nhưng rất tròn và kích cỡ nhỏ hơn. Giống như quýt mandarin, cam nhỏ (clementines) có thể được bóc vỏ và tách múi dễ dàng. Vị ngọt, hơi chua và thơm, và giống với cam hơn.', en: 'Clementines ( Citrus reticulate \'Clementina\') may be distinguished from mandarins by the colour of their peel, which is orange to reddish-orange. The peel is smooth and glossy, but slightly pebbled. Furthermore, they are never flattened in shape as are mandarins, but are well rounded and smaller in size. Like mandarins, clementines can be peeled and divided into sections with ease. The taste is sweet, sub acid and aromatic, and is rather more orange-like' },
      { type: 'paragraph', vi: 'Phân nhóm 0805.29', en: 'Subheading 0805.29' },
      { type: 'paragraph', vi: 'Phân nhóm này bao gồm quýt wilking và các loại giống lai chi cam quýt tương tự.', en: 'This subheading covers Wilkings and similar citrus hybrids.' },
      { type: 'paragraph', vi: 'Quýt wilking là quả lai giữa hai loại cam/quýt mandarin khác nhau (Willowleaf và King). Chúng có kích cỡ từ nhỏ đến trung bình và hình dạng hơi dẹt. Khi chín vỏ có màu cam, bóng và hơi có nốt sần nhỏ. Vỏ khá mỏng, giòn, dính nhưng dễ bóc. Múi có màu cam đậm và nhiều hạt. Quýt wilking rất mọng nước và có hương vị đậm, thơm và đặc trưng.', en: 'Wilkings are hybrids with parents belonging to two different mandarin groups (Willowleaf and King). They are small to medium-sized and slightly flattened in shape. Their peel is orange in colour at maturity, and is glossy and slightly pebbled. It is medium-thin, somewhat brittle, somewhat adherent but readily peelable. Their flesh is deep orange in colour, and they have more pips. Wilkings are very juicy and have a rich, aromatic and distinctive flavour.' },
      { type: 'paragraph', vi: 'Một loại quả lai cơ bản khác là quýt tangelo (quả lai của quýt mandarin với bưởi hoặc bưởi chùm), quýt tangor (quả lai của cam/quýt tangerine với cam ngọt), quýt lai calamondin, quýt lyo và quýt rangpur.', en: 'The other main hybrids are tangelos (hybrid of the mandarin with the grapefruit or the pomelo), tangors (hybrid of the tangerine with the sweet orange), calamondins, lyos and rangpurs.”.' },

      { type: 'heading', vi: '08.06 - Quả nho, tươi hoặc khô.', en: '08.06 - Grapes, fresh or dried.' },
      { type: 'list', vi: '0806.10 - Tươi', en: '0806.10 - Fresh' },
      { type: 'list', vi: '0806.20 - Khô', en: '0806 20 - Dried' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại nho tươi dùng để ăn tráng miệng hay để sản xuất rượu vang (kể cả loại đóng thô trong thùng tô nô), và cho dù chúng được trồng tự nhiên hay trong nhà kính.', en: 'The heading covers fresh grapes whether for dessert purposes or for wine-production (including those rough-packed in barrels), and whether grown outdoors or under glass (hot-house).' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các loại nho khô, loại chủ yếu là “currants”, “sultanas”, “Izmir”, “Thompson” hoặc loại được gọi là nho khô “không hạt” (tất cả các loại này phần lớn là không hột) và loại nho khô lớn có hạt như “Muscatel”, “Malaga”, “Denia”, “Damascus”, “Lexir” hoặc “Gordo”.', en: 'The heading also covers dried grapes, the principal kinds being those known as currants”, “sultanas”, “Izmir”, “Thompson” or the so-called “seedless” raisins (all of which are substantially without pips) and the large raisins with seeds, such as “Muscatel”, “Malaga”, “Denia”, “Damascus”, “Lexir” or “Gordo” raisins.' },

      { type: 'heading', vi: '08.07 - Các loại quả họ dưa (kể cả dưa hấu) và đu đủ, tươi.', en: '08.07 - Melons (including watermelons) and papaws (papayas), fresh.' },
      { type: 'paragraph', vi: '- Các loại quả họ dưa (kể cả dưa hấu):', en: '- Melons (including watermelons):' },
      { type: 'list', vi: '0807.11 - - Quả dưa hấu', en: '0807.11 - - Watermelons' },
      { type: 'list', vi: '0807.19 - - Loại khác', en: '0807.10 - - Other' },
      { type: 'list', vi: '0807.20 - Quả đu đủ', en: '0807.20 - Papaws (papayas)' },
      { type: 'paragraph', vi: 'Ngoài những loại khác, nhóm này bao gồm các loại dưa tươi thuộc loài Citrrullus vulgaris hoặc Cucumis melo , kể cả dưa hấu, dưa thanh yên (để bảo quản), dưa lê, dưa đỏ, dưa vàng và dưa mật. Nhóm này cũng bao gồm quả giống trái dưa thuộc loài Carica papaya , như là đu đủ (papaws or papaya). Tuy nhiên nhóm này không gồm quả thuộc loài Asimina triloba mà có tên theo tiếng Anh là "Pawpaws" (đu đủ) ( nhóm 08.10 ).', en: 'This heading covers fresh melons of the species Citrrullus vulgaris or Cucumis melo , including, inter alia , watermelons, citron (preserving) melons, muskmelons, cantaloupes, casaba and honeydew melons. The heading also covers the melon-like fruit of the species Carica papaya , known as papaws or papaya. However, the heading excludes fruit of the species Asimina triloba known in English as pawpaws ( heading 08.10 ).' },

      { type: 'heading', vi: '08.08 - Quả táo (apple), lê và quả mộc qua, tươi.', en: '08.08 - Apples, pears and quinces, fresh.' },
      { type: 'list', vi: '0808.10 - Quả táo (apple)', en: '0808.10 - Apples' },
      { type: 'list', vi: '0808.30 - Quả lê', en: '0808.30 - Pears' },
      { type: 'list', vi: '0808.40 - Quả mộc qua', en: '0808.40 - Quinces' },
      { type: 'paragraph', vi: 'Quả táo (apple) và quả lê được phân loại vào nhóm này cho dù chúng thích hợp để ăn tráng miệng, để sản xuất đồ uống (ví dụ: rượu táo hoặc rượu lê) hoặc dùng cho các mục đích công nghiệp (như chế phẩm bột, mứt hoặc thạch từ táo, chiết xuất của pectin).', en: 'Apples and pears are classified in this heading whether they are suitable for dessert, for making beverages (e.g., cider or perry) or for industrial purposes (e.g., preparation of apple paste, jam or jelly, extraction of pectin).' },
      { type: 'paragraph', vi: 'Quả mộc qua chủ yếu dùng để làm mứt hoặc thạch.', en: 'Quinces are mainly used for making jam or jelly.' },

      { type: 'heading', vi: '08.09 - Quả mơ, anh đào, đào (kể cả xuân đào), mận và mận gai, tươi.', en: '08.09 - Apricots, cherries, peaches (including nectarines), plums and sloes, fresh.' },
      { type: 'list', vi: '0809.10 - Quả mơ', en: '0809.10 - Apricots' },
      { type: 'paragraph', vi: '- Quả anh đào:', en: '- Cherries :' },
      { type: 'list', vi: '0809.21 - - Quả anh đào chua ( Prunus cerasus )', en: '0809.21 - - Sour cherries ( Prunus cerasus )' },
      { type: 'list', vi: '0809.29 - - Loại khác', en: '0809.29 - - Other' },
      { type: 'list', vi: '0809.30 - Quả đào, kể cả xuân đào', en: '0809.30 - Peaches, including nectarines' },
      { type: 'list', vi: '0809.40 - Quả mận và quả mận gai', en: '0809.40 - Plums and sloes' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm quả mơ, tất cả các loại quả anh đào (anh đào hình trái tim, anh đào chua...), đào các loại (kể cả xuân đào), tất cả các loại mận (mận lục, mận vàng, mận tím...) và mận gai.', en: 'This heading covers apricots, all varieties of cherries (whiteheart cherries, morello cherries, etc.), peaches (including nectarines), plums of all kinds (greengages, mirabelles, damsons, etc.), and sloes.' },

      { type: 'heading', vi: '08.10 - Quả khác, tươi.', en: '08.10 - Other fruit, fresh.' },
      { type: 'list', vi: '0810.10 - Quả dâu tây', en: '0810.10 - Strawberries' },
      { type: 'list', vi: '0810.20 - Quả mâm xôi (Raspberries, blackberries), dâu tằm và dâu đỏ (loganberries)', en: '0810.20 - Raspberries, blackberries, mulberries and loganberries' },
      { type: 'list', vi: '0810.30 - Quả lý gai và quả lý chua, đen, trắng hoặc đỏ', en: '0810.30 - Black, white or red currants and gooseberries' },
      { type: 'list', vi: '0810.40 - Quả nam việt quất, quả việt quất và các loại quả khác thuộc chi Vaccinium', en: '0810.40 - Cranberries, bilberries and other fruits of the genus Vaccinium' },
      { type: 'list', vi: '0810.50 - Quả kiwi', en: '0810.50 - Kiwifruit' },
      { type: 'list', vi: '0810.60 - Quả sầu riêng', en: '0810.60 - Durians' },
      { type: 'list', vi: '0810.70 - Quả hồng (Persimmons)', en: '0810.70 - Persimmons' },
      { type: 'list', vi: '0810.90 - Loại khác', en: '0810.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại quả ăn được không thuộc bất kỳ nhóm nào trước đó của Chương này hoặc chưa thuộc các Chương khác của Danh mục (xem các phần loại trừ trong Chú giải tổng quát của Chương này).', en: 'This heading covers all edible fruits not falling in any preceding heading of this Chapter nor included in other Chapters of the Nomenclature (see the exclusions in the General Explanatory Note to this Chapter).' },
      { type: 'paragraph', vi: 'Vì vậy nhóm này bao gồm:', en: 'It therefore includes:' },
      { type: 'list', vi: '(1) Quả dâu tây.', en: '(1) Strawberries.' },
      { type: 'list', vi: '(2) Quả mâm xôi, dâu tằm và dâu đỏ.', en: '(2) Raspberries, blackberries, mulberries and loganberries.' },
      { type: 'list', vi: '(3) Quả lý gai và quả lý chua đen, trắng hoặc đỏ.', en: '(3) Black, white or red currants and gooseberries.' },
      { type: 'list', vi: '(4) Quả nam việt quất đỏ, quả việt quất, nam việt quất xanh, sim và các loại quả khác thuộc chi Vaccinium .', en: '(4) Cranberries, bilberries, blueberries, myrtle berries and other fruits of the genus Vaccinium .' },
      { type: 'list', vi: '(5) Quả Ki-wi ( Actinidia chinensis Planch , hoặc Actinidia deliciosa ).', en: '(5) Kiwi fruit ( Actinidia chinensis Planch , or Actinidia deliciosa ).' },
      { type: 'list', vi: '(6) Quả sầu riêng ( Durio zibethinus ).', en: '(6) Durians ( Durio zibethinus ).' },
      { type: 'list', vi: '(7) Quả hồng vàng (kakis).', en: '(7) Persimmons (kakis).' },
      { type: 'list', vi: '(8) Quả lê đá, quả thanh hương trà, quả cơm cháy, hồng xiêm, lựu, vả xương rồng (quả lê gai), quả tầm xuân, táo tàu (jujubes), sơn trà Nhật, nhãn, vải, mãng cầu xiêm, na và quả thuộc loài Asimine triloba như là pawpaws (đu đủ).', en: '(8) Boysenberries, rowan berries, elderberries, sapodilla (naseberries), pomegranates, cactus figs (prickly pears), rose hips, jujubes, medlars, longans, litchi, soursops, sweetsops and fruit of the species Asimina triloba also known as pawpaws.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm hạt bách xù (juniper berries) ( nhóm 09.09 ).', en: 'The heading excludes juniper berries (head ing 09.09 ).' },

      { type: 'heading', vi: '08.11 - Quả và quả hạch (nut), đã hoặc chưa hấp chín hoặc luộc chín trong nước, đông lạnh, đã hoặc chưa thêm đường hoặc chất làm ngọt khác.', en: '08.11 - Fruit and nuts, uncooked or cooked by steaming or boiling in water, frozen, whether or not containing added sugar or other sweetening matter.' },
      { type: 'list', vi: '0811.10 - Quả dâu tây', en: '0811.10 - Strawberries' },
      { type: 'list', vi: '0811.20 - Quả mâm xôi (Raspberries, blackberries), dâu tằm và dâu đỏ (loganberries), quả lý chua đen, trắng hoặc đỏ và quả lý gai', en: '0811.20 - Raspberries, blackberries, mulberries, loganberries, black, white or red currants and gooseberries' },
      { type: 'list', vi: '0811.90 - Loại khác', en: '0811.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này áp dụng cho quả và quả hạch (nut) đông lạnh, nếu ở dạng tươi và ướp lạnh chúng được phân loại vào các nhóm trước đó của Chương này. (Về khái niệm "ướp lạnh" và "đông lạnh", xem Chú giải tổng quát của Chương này).', en: 'This heading applies to frozen fruit and nuts which, when fresh or chilled, are classified in the preceding headings of this Chapter. (As regards the meanings of the expressions “chilled” and “frozen”, see the General Explanatory Note to this Chapter.)' },
      { type: 'paragraph', vi: 'Quả và quả hạch (nut) đã được hấp chín hoặc luộc chín trong nước trước khi đông lạnh đều được phân loại vào nhóm này. Quả và quả hạch (nut) đông lạnh được làm chín bằng các phương pháp khác trước khi đông lạnh bị loại trừ ( Chương 20 ).', en: 'Fruit and nuts which have been cooked by steaming or boiling in water before freezing remain classified in this heading. Frozen fruit and nuts cooked by other methods before freezing are excluded ( Chapter 20 ).' },
      { type: 'paragraph', vi: 'Quả và quả hạch (nut) đông lạnh đã cho thêm đường hoặc các chất làm ngọt khác cũng được phân loại vào nhóm này, đường có tác dụng ngăn hiện tượng oxy hoá làm cho quả không bị đổi màu khi hết đông lạnh. Các sản phẩm thuộc nhóm này cũng có thể cho thêm muối.', en: 'Frozen fruit and nuts to which sugar or other sweetening matter has been added are also covered by this heading, the sugar having the effect of inhibiting oxidation and thus preventing the change of colour which would otherwise occur, generally on thawing out. The products of this heading may also contain added salt.' },

      { type: 'heading', vi: '08.12 - Quả và quả hạch (nut), được bảo quản tạm thời, nhưng không phù hợp dùng ngay được.', en: '08.12 - Fruit and nuts, provisionally preserved, but unsuitable in that state for immediate consumption.' },
      { type: 'list', vi: '0812.10 - Quả anh đào', en: '0812.10 - Cherries' },
      { type: 'list', vi: '0812.90 - Quả khác', en: '0812.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này áp dụng cho những loại quả và quả hạch (nut) (đã hoặc chưa làm trắng hoặc nhúng nước nóng) đã qua xử lý chỉ để bảo quản tạm thời trong quá trình vận chuyển hoặc lưu trữ trước khi đưa vào sử dụng (ví dụ: bảo quản bằng khí sulphur dioxide, ngâm nước muối, nước lưu huỳnh hoặc trong các dung dịch bảo quản khác), với điều kiện chúng không thích hợp để ăn ngay trong tình trạng đó', en: 'This heading applies to fruit and nuts (whether or not blanched or scalded) which have been treated solely to ensure their provisional preservation during transport or storage prior to use (e.g., by sulphur dioxide gas, in brine, in sulphur water or in other preservative solutions), provided they remain unsuitable for immediate consumption in that state.' },
      { type: 'paragraph', vi: 'Những sản phẩm như vậy chủ yếu dùng trong công nghiệp thực phẩm (làm mứt, quả ngâm đường,...). Các loại quả thường được sử dụng là anh đào, dâu tây, cam, thanh yên, mơ và mận lục. Chúng thường được đóng trong thùng phuy, khay hoặc thùng gỗ thưa.', en: 'Such products are used mainly in the food industry (manufacture of jam, preparation of candied fruits, etc.). The products most commonly presented in this state are cherries, strawberries, oranges, citrons, apricots and greengages. They are usually packed in casks, trays or open-lath type containers.' },

      { type: 'heading', vi: '08.13 - Quả, khô, trừ các loại quả thuộc nhóm 08.01 đến 08.06; hỗn hợp các loại quả hạch (nut) hoặc quả khô thuộc Chương này.', en: '08.13 - Fruit, dried, other than that of headings 08.010 to 08.06; mixtures of nuts or dried fruits of this Chapter.' },
      { type: 'list', vi: '0813.10 - Quả mơ', en: '0813.10 - Apricots' },
      { type: 'list', vi: '0813.20 - Quả mận đỏ', en: '0813.20 - Prunes' },
      { type: 'list', vi: '0813.30 - Quả táo (apple)', en: '0813.30 - Apples' },
      { type: 'list', vi: '0813.40 - Quả khác', en: '0813.40 - Other fruit' },
      { type: 'list', vi: '0813.50 - Hỗn hợp các loại quả hạch (nut) hoặc quả khô thuộc Chương này', en: '0813.50 - Mixtures of nuts or dried fruits of this Chapter' },
      { type: 'paragraph', vi: '(A) Quả khô.', en: '(A) Dried fruit.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại quả khô khi ở trạng thái tươi chúng được phân loại vào các nhóm 08.07 đến 08.10. Chúng được xử lý bằng cách phơi khô ngoài nắng hoặc bằng các phương pháp công nghiệp (ví dụ, lò sấy Tuy-nen).', en: 'This heading includes dried fruits which when fresh are classified in headings 08.07 to 08.10. They are prepared either by direct drying in the sun or by industrial processes (e.g., tunnel-drying).' },
      { type: 'paragraph', vi: 'Những loại quả thường xử lý bằng cách này là quả mơ, mận đỏ, táo, đào và lê. Táo và lê khô được sử dụng để làm rượu táo hoặc rượu lê cũng như cho công việc bếp núc. Trừ mận đỏ, những loại quả này thường được cắt đôi hoặc thái lát, và tách hạt, bỏ lõi hoặc bỏ hạt. Chúng cũng có thể (nhất là đối với quả mơ và mận) được thái lát hoặc đóng thành khối bột, làm khô hoặc phơi khô.', en: 'The fruits most commonly processed in this way are apricots, prunes, apples, peaches and pears. Dried apples and pears are used for the manufacture of cider or perry as well as for culinary purposes. With the exception of prunes, the fruits are usually halved or sliced, and stoned, cored or seeded. They may also be presented (particularly in the case of apricots and prunes) in the form of slices or blocks of pulp, dried or evaporated.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm quả me. Nhóm cũng bao gồm bột me chưa cho thêm đường hoặc các chất khác và chưa được chế biến cách khác, còn hoặc không còn hạt, xơ và vỏ lụa.', en: 'The heading covers tamarind pods. It also includes tamarind pulp, without sugar or other substances added and not otherwise processed, with or without seeds, strings or pieces of the endocarp.' },
      { type: 'paragraph', vi: '(B) Hỗn hợp các loại quả hạch (nut) hoặc quả khô .', en: '(B) Mixtures of nuts or dried fruits.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm tất cả hỗn hợp quả hạch (nut) hoặc quả khô thuộc Chương này (kể cả các hỗn hợp quả hạch (nut) hoặc quả khô thuộc cùng một nhóm). Vì vậy nó bao gồm cả các hỗn hợp quả hạch (nut) tươi hoặc khô, hỗn hợp quả khô (trừ quả hạch (nut)) và hỗn hợp quả hạch (nut) tươi hoặc khô và quả khô. Các loại hỗn hợp này thường được đóng gói trong các hộp, gói bằng các màng mỏng cellulose,...', en: 'The heading also covers all mixtures of nuts or dried fruits of this Chapter (including mixtures of nuts or dried fruits falling in the same heading). It therefore includes mixtures of fresh or dried nuts, mixtures of dried fruits (excluding nuts) and mixtures of fresh or dried nuts and dried fruits. These mixtures are often presented in boxes, cellulose packets, etc.' },
      { type: 'paragraph', vi: 'Một số loại quả khô hoặc hỗn hợp quả khô thuộc nhóm này có thể được đóng gói (ví dụ: trong những túi nhỏ) dùng để pha chế hoặc làm trà thảo dược.', en: 'Certain dried fruits or mixtures of dried fruits of this heading may be put up (e.g., in sachets) for making herbal infusions or herbal “teas”. These products remain classified here.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm những sản phẩm có chứa hỗn hợp của một hay nhiều quả khô thuộc nhóm này với các thực vật hoặc các phần của chúng thuộc các Chương khác hoặc với các chất khác như là một hay nhiều chiết xuất từ thực vật) (thường thuộc nhóm 21.06 ).', en: 'However, the heading excludes such products consisting of a mixture of one or more of the dried fruits of this heading with plants or parts of plants of other Chapters or with other substances such as one or more plant extracts (generally heading 21.06 ).' },

      { type: 'heading', vi: '08.14 - Vỏ các loại quả thuộc chi cam quýt, hoặc các loại dưa (kể cả dưa hấu), tươi, đông lạnh, khô hoặc bảo quản tạm thời trong nước muối, nước lưu huỳnh hoặc trong các dung dịch bảo quản khác.', en: '08.14 - Peel of citrus fruit or melons (including watermelons), fresh, frozen, dried or provisionally preserved in brine, in sulphur water or in other preservative solutions.' },
      { type: 'paragraph', vi: 'Vỏ các loại quả chi cam quýt thường dùng để ăn là cam (kể cả cam đắng hoặc cam Seville), chanh và thanh yên. Những loại vỏ này chủ yếu được dùng để làm vỏ tẩm đường hoặc để chiết xuất lấy tinh dầu.', en: 'The citrus fruit peels most commonly used for edible purposes are orange (including bitter or Seville orange), lemon and citron. These peels are mainly used for milking candied peel or for extracting the essential oils.' },
      { type: 'paragraph', vi: 'Nhóm này loại trừ vỏ được tán thành bột ( nhóm 11.06 ) và vỏ quả ngâm đường ( nhóm 20.06 ).', en: 'The heading excludes powdered peel ( heading 11.06 ) and candied fruit peel ( heading 20.06 ).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 9
  // ------------------------------------------------------------
  {
    chapterNumber: 9,
    titleVi: 'CHƯƠNG 9: CÀ PHÊ, CHÈ, CHÈ PARAGOAY VÀ CÁC LOẠI GIA VỊ',
    titleEn: 'CHAPTER 9: COFFEE, TEA, MATÉ AND SPICES',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 9: Cà phê, chè, chè Paragoay và các loại gia vị', en: 'Chapter 9: Coffee, tea, maté and spices' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1. Hỗn hợp của các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 được phân loại như sau:', en: '1. - Mixtures of the products of headings 09.04 to 09.10 are to be classified as follows:' },
      { type: 'list', vi: 'a) Hỗn hợp của hai hay nhiều sản phẩm thuộc cùng một nhóm cũng được xếp trong nhóm đó;', en: '(a) Mixtures of two or more of the products of the same heading are to be classified in that heading:' },
      { type: 'list', vi: '(b) Hỗn hợp của hai hay nhiều sản phẩm thuộc các nhóm khác nhau cũng được xếp trong nhóm 09.10.', en: '(b) Mixtures of two or more of the products of different headings are to be classified in heading 09.10.' },
      { 
        type: 'paragraph', 
        vi: 'Việc pha thêm các chất khác vào các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 (hoặc vào hỗn hợp đã nêu trong mục (a) hoặc (b) trên đây) sẽ không ảnh hưởng tới việc phân loại sản phẩm nếu như hỗn hợp mới vẫn giữ được đặc tính cơ bản của các mặt hàng thuộc các nhóm đó. Trong các trường hợp khác các hỗn hợp mới đó không được phân loại trong Chương này; gia vị hỗn hợp hoặc bột canh hỗn hợp được phân loại trong nhóm 21.03.', 
        en: 'The addition of other substances to the products of headings 09.04 to 09.10 (or to the mixtures referred to in paragraph (a) or (b) above) shall not affect their classification provided the resulting mixtures retain the essential character of the goods of those headings. Otherwise such mixtures are not classified in this Chapter; those constituting mixed condiments or mixed seasonings are classified in heading 21.03.' 
      },
      { type: 'paragraph', vi: '2. Chương này không bao gồm hạt tiêu Cubeb ( Piper cubeba ) hoặc các sản phẩm khác thuộc nhóm 12.11.', en: '2. - This Chapter does not cover Cubeb pepper (Piper cubeba) or other products of heading 12.11.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm:', en: 'This Chapter covers:' },
      { type: 'list', vi: '(1) Cà phê, chè và chè Paragoay.', en: '(1) Coffee, tea and maté.' },
      { type: 'list', vi: '(2) Gia vị, tức là nhóm các sản phẩm rau (kể cả hạt,...), có hàm lượng tinh dầu và hương liệu cao, chủ yếu được sử dụng làm gia vị nhờ hương vị đặc trưng.', en: '(2) Spices, i.e., a group of vegetable products (including seeds, etc.), rich in essential oils and aromatic principles, and which, because of their characteristic taste, are mainly used as condiments.' },
      { type: 'paragraph', vi: 'Những sản phẩm này có thể được giữ nguyên dạng hoặc xay hoặc tán thành bột.', en: 'These products may be whole or in crushed or powdered form.' },
      { 
        type: 'paragraph', 
        vi: 'Về phần phân loại những hỗn hợp các sản phẩm thuộc các nhóm từ 09.04 đến 09.10, xem Chú giải 1 của Chương này. Theo như quy định của Chú giải này, việc pha thêm các chất khác vào các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 (hoặc vào các hỗn hợp đã nêu trong đoạn (a) và (b) của Chú giải Chương nêu trên) sẽ không ảnh hưởng đến việc phân loại các sản phẩm đó miễn là hỗn hợp mới vẫn giữ được đặc tính cơ bản của các mặt hàng thuộc các nhóm đó.', 
        en: 'As regards the classification of mixtures of products of headings 09.04 to 09.10, see Note 1 to this Chapter. Under the provisions of this Note, the addition of other substances to the products of headings 09.04 to 09.10 (or to the mixtures referred to in paragraph (a) or (b) of the Note) shall not affect their classification provided the resulting mixtures retain the essential character of the goods falling in those headings.' 
      },
      { type: 'paragraph', vi: 'Cụ thể áp dụng cho các gia vị và hỗn hợp gia vị được pha thêm:', en: 'This applies, in particular, to spices and mixed spices containing added:' },
      { type: 'list', vi: '(a) Chất pha loãng (trên cơ sở “lan truyền”) được thêm vào giúp cho việc lấy liều lượng và trộn gia vị vào các chế phẩm thực phẩm dễ dàng hơn (bột ngũ cốc, vỏ bánh mỳ tán vụn, đường dextrose,...).', en: '(a) Diluents ("spreader" bases) added to facilitate measuring out of the spices and their distribution in the food preparation (cereal flour, ground rusk, dextrose, etc.).' },
      { type: 'list', vi: '(b) Màu thực phẩm (ví dụ: xanthophyll).', en: '(b) Food colourings (e.g.. xanthophyll).' },
      { type: 'list', vi: '(c) Những sản phẩm thêm vào để làm dậy mùi gia vị ( phụ gia ), như là mì chính (sodium glutamate).', en: '(c) Products added to intensify or enhance the flavour of the spices ( synergetics ), such as sodium glutamate.' },
      { type: 'list', vi: '(d) Những chất như muối hoặc chất chống oxy hoá được thêm vào, thường với lượng nhỏ, để bảo quản sản phẩm và giữ hương vị được lâu hơn.', en: '(d) Substances such as salt or chemical antioxidants added, usually in small quantity, to preserve the products and prolong their flavouring powers.' },
      { type: 'paragraph', vi: 'Các loại gia vị (bao gồm cả gia vị hỗn hợp) được cho thêm một số chất thuộc các Chương khác, nhưng bản thân chúng có đặc tính gia vị hoặc hương thơm riêng, vẫn được phân loại vào Chương này với điều kiện lượng các chất thêm vào không làm thay đổi đặc tính cơ bản là gia vị của hỗn hợp đó.', en: 'Spices (including mixed spices) containing added substances of other Chapters, but themselves having flavouring or seasoning properties, remain in this Chapter provided the added quantity does not affect the essential character of the mixture as a spice.' },
      { type: 'paragraph', vi: 'Chương này cũng bao gồm cả những hỗn hợp có chứa cây, các phần của cây, hạt hoặc quả (để nguyên dạng, được cắt nhỏ, nghiền hoặc tán thành bột) thuộc những loài nằm trong các Chương khác (ví dụ, các Chương 7, 9, 11, 12), được sử dụng trực tiếp để tạo hương cho đồ uống hoặc để chiết xuất dùng sản xuất đồ uống,', en: 'This Chapter also includes mixtures consisting of plants, parts of plants, seeds or fruit (whole, cut, crushed, ground or powdered) of species falling in different Chapters (e.g., Chapters 7, 9, 11, 12), of a kind used either directly for flavouring beverages or for preparing extracts for the manufacture of beverages,' },
      { type: 'list', vi: '(i) nếu đặc tính cơ bản được xác định bởi một hay nhiều loại của cùng một nhóm từ 09.04 đến 09.10 (các nhóm từ 09.04 đến 09.10 tuỳ từng trường hợp);', en: '(i) if the essential character is given by one or more species of any single one of the headings 09.04 to 09.10 (headings 09.04 to 09.10 as the case may be);' },
      { type: 'list', vi: '(ii) nếu đặc tính cơ bản được xác định bởi một hỗn hợp các loại của hai hay nhiều nhóm từ 09.04 đến 09.10 (nhóm 09.10).', en: '(ii) if the essential character is given by a mixture of species of two or more of the headings 09.04 to 09.10 (heading 09.10).' },
      { type: 'paragraph', vi: 'Tuy nhiên, Chương này không bao gồm những hỗn hợp trên nếu đặc tính cơ bản không được xác định bởi các loại nêu tại phần (i) hoặc bởi các hỗn hợp nêu tại phần (ii) ở trên ( nhóm 21.06 ).', en: 'This Chapter however excludes such mixtures if the essential character is not given by the species mentioned in (i) or by the mixtures referred to in (ii) above ( heading 21.06 ).' },
      { type: 'paragraph', vi: 'Ngoài ra Chương này cũng không bao gồm :', en: 'This Chapter further excludes :' },
      { type: 'list', vi: '(a) Các loại rau (ví dụ: mùi tây, ngải thơm, cải xoong, kinh giới ngọt, rau mùi và thì là) thuộc Chương 7 .', en: '(a) Vegetables (e.g., parsley, chervil, tarragon, cress, sweet marjoram, coriander and dill) of Chapter 7 .' },
      { type: 'list', vi: '(b) Hạt mù tạt (cải cay) ( nhóm 12.07 ); bột mù tạt đã hoặc chưa chế biến ( nhóm 21.03 ).', en: '(b) Mustard seed ( heading 12.07 ); mustard flour, whether unprepared or prepared ( heading 21.03 ).' },
      { type: 'list', vi: '(c) Hublong (hoa bia) ( nhóm 12.10 ).', en: '(c) Hop cones ( heading 12.10 ).' },
      { type: 'list', vi: '(d) Một số loại quả, hạt và các bộ phận của cây mà, mặc dù chúng có thể được sử dụng làm gia vị, chúng thường được sử dụng vào quá trình chế tạo nước hoa hoặc trong chế biến thuốc ( nhóm 12.11 ) (ví dụ, muồng, hương thảo, kinh giới ô dại, húng, borage, bài hương, các loại bạc hà, cửu lý hương và cây xô thơm).', en: '(d) Certain fruits, seeds and parts of plants which, although they can be used as spices, are more often employed in perfumery or in medicine ( heading 12.11 ) (e.g., cassia pods, rosemary, wild marjoram, basil, borage, hyssop, all species of mint, rue and sage).' },
      { type: 'list', vi: '(e) Gia vị và bột canh hỗn hợp (nhóm 21.03).', en: '(e) Mixed condiments and mixed seasonings ( heading 21.03 ).' },

      { type: 'heading', vi: '09.01 - Cà phê, rang hoặc chưa rang, đã hoặc chưa khử chất caffeine; vỏ quả và vỏ lụa cà phê; các chất thay thế cà phê có chứa cà phê theo tỷ lệ nào đó.', en: '09.01 - Coffee, whether or not roasted or decaffeinated; coffee husks and skins; coffee substitutes containing coffee in any proportion.' },
      { type: 'paragraph', vi: '- Cà phê, chưa rang:', en: '- Coffee, not roasted :' },
      { type: 'list', vi: '0901.11 - - Chưa khử chất caffeine', en: '0901.11 - - Not decaffeinated' },
      { type: 'list', vi: '0901.12 - - Đã khử chất caffeine', en: '0901.12 - - Decaffeinated' },
      { type: 'paragraph', vi: '- Cà phê, đã rang:', en: '- Coffee, roasted:' },
      { type: 'list', vi: '0901.21 - - Chưa khử chất caffeine', en: '0901.21 - - Not decaffeinated' },
      { type: 'list', vi: '0901.22 - - Đã khử chất caffeine', en: '0901.22 - - Decaffeinated' },
      { type: 'list', vi: '0901.90 - Loại khác', en: '0901.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm:', en: 'This heading includes:' },
      { type: 'list', vi: '(1) Cà phê nguyên liệu dưới tất cả các dạng, tức là: còn trong quả, mới thu hoạch; dạng hột hoặc hạt còn vỏ lụa màu vàng nhạt; dạng hột và hạt đã lột vỏ lụa.', en: '(1) Raw coffee in ail forms, i.e. : in berries, as gathered from the shrub: in beans or seeds complete with their yellowish skins; in beans or seeds stripped of their skins.' },
      { type: 'list', vi: '(2) Cà phê đã khử chất caffeine bằng cách ngâm hột nguyên liệu vào các dung môi khác nhau.', en: '(2) Coffee from which the caffeine has been extracted by soaking the raw beans in various solvents.' },
      { type: 'list', vi: '(3) Cà phê đã rang (đã hoặc chưa khử chất caffeine) đã hoặc chưa xay, nghiền.', en: '(3) Roasted coffee (with or without caffeine content) whether or not ground.' },
      { type: 'list', vi: '(4) Vỏ quả và vỏ lụa cà phê.', en: '(4) Husks and skins of coffee.' },
      { type: 'list', vi: '(5) Các chất thay thế cà phê có chứa cà phê theo tỷ lệ nào đó.', en: '(5) Coffee substitutes containing coffee in any proportion.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Sáp cà phê ( nhóm 15.21 ).', en: '(a) Coffee wax ( heading 15.21 ).' },
      { type: 'list', vi: '(b) Những chiết xuất, tinh dầu và chất cô đặc cà phê (đôi khi được gọi là cà phê tan) và những chế phẩm có chứa chiết xuất, tinh dầu hoặc chất cô đặc này như là chất cơ bản; những chất thay thế cà phê rang không chứa cà phê ( nhóm 21.01 ).', en: '(b) Extracts, essences and concentrates of coffee (sometimes known as instant coffee) and preparations with a basis of those extracts, essences or concentrates; roasted coffee substitutes not containing coffee ( heading 21.01 ).' },
      { type: 'list', vi: '(c) Chất caffeine, alkaloid có trong cà phê ( nhóm 29.39 ).', en: '(c) Caffeine, the alkaloid in coffee ( heading 29.39 ).' },

      { type: 'heading', vi: '09.02 - Chè, đã hoặc chưa pha hương liệu.', en: '09.02 - Tea, whether or not flavoured.' },
      { type: 'list', vi: '0902.10 - Chè xanh (chưa ủ men) đóng gói sẵn trọng lượng không quá 3 kg', en: '0902.10 - Green tea (not fermented) in immediate packings of a content not exceeding 3 kg' },
      { type: 'list', vi: '0902.20 - Chè xanh khác (chưa ủ men)', en: '0902.20 - Other green tea (not fermented)' },
      { type: 'list', vi: '0902.30 - Chè đen (đã ủ men) và chè đã ủ men một phần, đóng gói sẵn trọng lượng không quá 3kg', en: '0902.30 - Black tea (fermented) and partly fermented tea, in immediate packings of a content not exceeding 3 kg' },
      { type: 'list', vi: '0902.40 - Chè đen khác (đã ủ men) và chè khác đã ủ men một phần', en: '0902.40 - Other black tea (fermented) and other partly fermented tea' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại chè khác nhau được lấy từ các cây thuộc giống thực vật Thea ( Camellia ).', en: 'The heading covers the different varieties of tea derived from the plants of the botanical genus Thea (Camellia).' },
      { type: 'paragraph', vi: 'Việc chế biến chè xanh về cơ bản gồm sấy nóng lá tươi, cuộn lại và làm khô. Chè đen được chế biến bằng cách cuộn lại lá chè và ủ men trước khi đun lửa hoặc làm khô.', en: 'The preparation of green tea consists essentially of heating the fresh leaves, rolling them and drying them. In the ease of black tea, the leaves are rolled and fermented before being fired or dried.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả chè được ủ men một phần (ví dụ: chè Oolong).', en: 'The heading also includes partly fermented tea (e.g., Oolong tea).' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm hoa chè, búp chè và những vụn chè, cũng như chè được tán thành bột (lá, hoa hoặc búp) được ép thành hòn hoặc viên, cũng như chè được ép thành các hình dạng và kích cỡ khác nhau.', en: 'The heading includes tea flowers, buds and residues, as well as powdered tea (leaves, flowers or buds) agglomerated in balls or tablets, as well as tea presented compressed into various shapes and sizes.' },
      { type: 'paragraph', vi: 'Chè tẩm hương bằng hơi nước (ví dụ trong quá trình ủ men) hoặc cho thêm tinh dầu (ví dụ tinh dầu chanh hoặc cam bergamot), hương nhân tạo (có dạng tinh thể hoặc bột) hoặc các phần của những hoa, quả hoặc cây thơm khác (ví dụ, hoa nhài, vỏ cam khô hoặc nụ đinh hương khô) cũng được phân loại vào nhóm này.', en: 'Tea which has been flavoured by a steaming process (during fermentation, for example) or by the addition of essential oils (e.g., lemon or bergamot oil), artificial flavourings (which may be in crystalline or powder form) or parts of various other aromatic plants or fruits (such as jasmine flowers, dried orange peel or cloves) is also classified in this heading.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả chè đã được khử caffeine, nhưng loại trừ caffeine ( nhóm 29.39 ).', en: 'The heading also includes decaffeinated tea, but it excludes caffeine as such ( heading 29.39 ).' },
      { type: 'paragraph', vi: 'Ngoài ra nhóm này cũng không bao gồm các sản phẩm không phải lấy từ các cây thuộc giống thực vật Thea nhưng đôi khi cũng gọi là “chè”, ví dụ:', en: 'The heading further excludes products not derived from the plants of the botanical genus Thea but sometimes called “ teas ”, e.g.:' },
      { type: 'list', vi: '(a) Chè Paragoay ( nhóm 09.03 ).', en: '(a) Maté (Paraguay tea) ( heading 09.03 ).' },
      { type: 'list', vi: '(b) Những sản phẩm dùng để pha chế thảo mộc hoặc pha chè thảo dược. Chúng được phân loại, ví dụ, vào các nhóm 08.13 , 09.09 , 12.11 hoặc 21.06 .', en: '(b) Products for making herbal infusions or herbal “ teas ”. These are classified, for example, in heading 08.13, 09.09, 12.11 or 21.06.' },
      { type: 'list', vi: '(c) “Chè” sâm (hỗn hợp chiết suất sâm với lactoza hoặc glucoza) ( nhóm 21.06 ).', en: '(c) Ginseng “tea” (a mixture of ginseng extract with lactose or glucose) ( heading 21.06 ).' },

      { type: 'heading', vi: '09.03 - Chè Paragoay (Maté).', en: '09.03 - Maté.' },
      { type: 'paragraph', vi: 'Chè Paragoay gồm lá khô của một số loại cây bụi thuộc họ "nhựa ruồi" mọc ở vùng Nam Mỹ. Người ta thường gọi là "chè Paragoay" hoặc "chè Jesuits (dòng Tên)". Chè Paragoay được sử dụng để pha đồ uống có chứa một hàm lượng nhỏ caffeine.', en: 'Maté consists of the dried leaves of certain shrubs of the holly family which grow in South America. It is sometimes known as “Paraguay tea" or “Jesuits’ tea”. Maté is used for the preparation by infusion of a drink containing only a little caffeine.' },

      { type: 'heading', vi: '09.04 - Hạt tiêu thuộc chi Piper ; quả ớt thuộc chi Capsicum hoặc chi Pimenta , khô hoặc xay hoặc nghiền.', en: '09.04 - Pepper of the genus Piper ; dried or crushed or ground fruits of the genus Capsicum or of the genus Pimenta .' },
      { type: 'paragraph', vi: '- Hạt tiêu:', en: '- Pepper:' },
      { type: 'list', vi: '0904.11 - - Chưa xay hoặc chưa nghiền', en: '0904.11 - - Neither crushed nor ground' },
      { type: 'list', vi: '0904.12 - - Đã xay hoặc nghiền', en: '0904.12 - - Crushed or ground' },
      { type: 'paragraph', vi: '- Quả ớt thuộc chi Capsicum hoặc chi Pimenta :', en: '- Fruits of the genus Capsicum or of the genus Pimenta :' },
      { type: 'list', vi: '0904.21 - - Đã làm khô, chưa xay hoặc chưa nghiền', en: '0904.21 - - Dried, neither crushed nor ground' },
      { type: 'list', vi: '0904.22 - - Đã xay hoặc nghiền', en: '0904.22 - - Crushed or ground' },
      { type: 'paragraph', vi: '(1) Hạt tiêu thuộc chi Piper .', en: '(1) Pepper of the genus Piper .' },
      { type: 'paragraph', vi: 'Thuật ngữ này bao gồm hạt hoặc quả của tất cả các loại cây hạt tiêu thuộc chi Piper , trừ hạt tiêu Cubeb ( Piper cubera ) ( nhóm 12.11 ). Giống thương phẩm chính là hạt tiêu giống Piper nigrum, có dạng hạt tiêu đen và tiêu trắng.', en: 'This term includes the seeds or fruits of all pepper plants of the genus Piper , except Cubeb pepper ( Piper cubeba ) ( heading 12.11 ). The main commercial variety is pepper of the species Piper nigrum , which takes the form of black or white pepper.' },
      { type: 'paragraph', vi: 'Hạt tiêu đen được chế biến từ quả chưa chín bằng cách phơi nắng hoặc hun khói, đôi khi sau khi xử lý bằng nước sôi.', en: 'Black pepper-corns are obtained from the unripe fruits by sun-drying or smoking, sometimes after treatment with boiling water.' },
      { type: 'paragraph', vi: 'Hạt tiêu trắng được chế biến từ những quả sắp chín, được ngâm hoặc lên men nhẹ để tách phần thịt và vỏ ngoài của hạt. Hạt tiêu trắng cũng thường được chế biến từ hạt tiêu đen bằng cách xay xát để loại bỏ lớp vỏ bên ngoài. Trong thực tế, hạt tiêu trắng có màu xám vàng và không cay bằng hạt tiêu đen.', en: 'White pepper is prepared from the nearly ripe fruit from which the pulp and outer coating of the seed have been removed by soaking or slight fermentation. White pepper is also often prepared from black pepper-corns by grinding off the outer parts. White pepper, which is in fact yellowish grey, is not so pungent as black.' },
      { type: 'paragraph', vi: 'Hạt tiêu dài ( Piper longum ) là một loại hạt tiêu khác.', en: 'Long pepper ( Piper longum ) is another variety of pepper.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả cám và bụi hạt tiêu.', en: 'The heading also covers pepper dust and sweepings.' },
      { type: 'paragraph', vi: 'Một số sản phẩm thực tế là ớt (pimento) nhưng lại được gọi một cách không chính xác là tiêu (pepper), ví dụ: tiêu Ấn Độ, tiêu Thổ Nhĩ Kỳ, tiêu Tây Ban Nha, tiêu Cayenne và tiêu Jamaica.', en: 'Certain products incorrectly known as peppers are in fact pimentos, e.g., Indian, Turkish, Spanish, Cayenne and Jamaica peppers.' },
      { type: 'paragraph', vi: '(2) Các quả đã làm khô hoặc nghiền hoặc xay thuộc chi Capsicum hoặc chi Pimenta .', en: '(2) Dried or crushed or ground fruits of the genus Capsicum or of the genus Pimenta .' },
      { type: 'paragraph', vi: 'Quả chi Capsicum nói chung thuộc giống Capsicum frutescens hoặc Capsicum annum và gồm hai nhóm chính, ớt và ớt cựa gà. Có nhiều giống khác nhau (ớt Cayenne, ớt Sierra leone và Zanzibar, ớt cựa gà Tây ban nha và Hung ga ri...).', en: 'Fruits of the genus Capsicum generally belong to the species Capsicum frutescens or Capsicum annuum and include two main groups, the chillies and the paprikas. There are many varieties (Cayenne pepper, Sierra Leone and Zanzibar pepper, Spanish and Hungarian paprika, etc.).' },
      { type: 'paragraph', vi: 'Quả chi Pimenta gồm ớt Jamaica (còn gọi là ớt hương, ớt Anh quốc và ớt allspice).', en: 'Fruits of the genus Pimenta include Jamaica pepper (also known as clove pepper, English pepper and allspice).' },
      { type: 'paragraph', vi: 'Những loại quả này có chung đặc tính là có vị hăng, nồng, cay và lâu mất hương vị; tuy nhiên các giống khác của chi Capsicum không có vị cay (ví dụ: chi Capsicum annuum var.grossum (ớt ngọt)).', en: 'These fruits share the common characteristic of a bitter, strong, burning and long-lasting flavour; however there are other varieties of the genus Capsicum which do not have a pungent odour (e.g., Capsicum annuum var. grossum ).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm những quả tươi chưa nghiền hoặc xay thuộc chi Capsicum hoặc Pimenta ( nhóm 07.09 ).', en: 'The heading does not include uncrushed or unground fresh fruits of the genus Capsicum or of the genus Pimenta ( heading 07.09 ).' },

      { type: 'heading', vi: '09.05 - Vani.', en: '09.05 - Vanilla.' },
      { type: 'list', vi: '0905.10 - Chưa xay hoặc chưa nghiền', en: '0905.10 - Neither crushed nor ground' },
      { type: 'list', vi: '0905.20 - Đã xay hoặc nghiền', en: '0905.20 - Crushed or ground' },
      { type: 'paragraph', vi: 'Đây là quả (hoặc đậu) của một loại cây dây leo thuộc họ "lan". Nó có màu đen nhạt và hương rất thơm. Có hai loại vani, dài và ngắn, và cả một giống phẩm cấp rất thấp nữa được gọi là Vanillon (thuộc dòng Vanilla pompana ), mềm, gần như là nhão và lúc nào cũng nở.', en: 'This is the fruit (or bean) of a climbing plant of the orchid family. It is blackish in colour and very aromatic. There are two kinds of vanilla, long and short, as well as a very low-grade variety known as vanillon (obtained from the species Vanilla pompana ), soft, almost viscous and always open.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not include :' },
      { type: 'list', vi: '(a) Nhựa dầu vani (đôi khi còn được gọi sai là “nhựa vani” hoặc “chiết xuất vani”) ( nhóm 13.02 ).', en: '(a) Vanilla oleoresin (sometimes erroneously known as “vanilla resinoid “or” vanilla extract") ( heading 13.02 ).' },
      { type: 'list', vi: '(b) Đường đã ướp hương vani ( nhóm 17.01 hoặc 17.02 ).', en: '(b) Vanilla sugar ( heading 17.01 or 17.02 ).' },
      { type: 'list', vi: '(c) Chất vanillin (nguồn gốc hương thơm của vani) ( nhóm 29.12 ).', en: '(c) Vanillin (the odoriferous principle of vanilla) ( heading 29.12 ).' },

      { type: 'heading', vi: '09.06 - Quế và hoa quế (+).', en: '09.06 - Cinnamon and cinnamon-tree flowers (+).' },
      { type: 'paragraph', vi: '- Chưa xay hoặc chưa nghiền:', en: '- Neither crushed nor ground :' },
      { type: 'list', vi: '0906.11 - - Quế ( Cinnamomum zeylanicum Blume )', en: '0906.11 - - Cinnamon ( Cinnamomum zeylanicum Blume )' },
      { type: 'list', vi: '0906.19 - - Loại khác', en: '0906.19 - - Other' },
      { type: 'list', vi: '0906.20 - Đã xay hoặc nghiền', en: '0906.20 - Crushed or ground' },
      { type: 'paragraph', vi: 'Quế là phần vỏ trong của các cành non của một số loại cây thuộc họ Laurus. Quế Sri Lanka (Ceylon), Seychelles và Madagasca ( Cinnamomum zeylanicum Blume ), còn được gọi là quế thượng hạng, thường ở dạng bó gồm những mảnh vỏ mầu xanh xám cuộn lại với nhau. Quế Tàu ( Cinnamomum cassia (Nees) ex Blume ), quế Indonesia ( Cinnamomum burmanii (C.G.Nees) ) và Việt Nam ( Cinnamomum loureirii Nees ), còn được gọi là muồng hoặc quế thường, lấy từ các lớp vỏ dày hơn, có sọc nâu; nó thường ở dạng cuộn một lớp. Các loại quế khác bao gồm Cinnamomum obtusifolium , Cinnamomum tamala và Cinnamomum sintek .', en: 'Cinnamon is the inner bark of young branches of certain trees of the Laurus family. Sri Lankan (Ceylon) type, Seychelles type and Madagascan type cinnamon ( Cinnamomum zeylanicum Blume ), also called tine cinnamon, is generally presented in bundles of pale-coloured strips of bark rolled together. Chinese type ( Cinnamomum cassia (Nees) ex Blume ). Indonesian type ( Cinnamomum burmanii (C.G.Nees) ) and Vietnamese type ( Cinnamomum loureirii Nees ) cinnamon, also known as cassia or common cinnamon, is formed of thicker layers of bark, streaked with brown; it is generally presented in rolls of a single layer. Other varieties of cinnamon include Cinnamomum obtusifolium , Cinnamomum tamala and Cinnamomum sintek .' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm quế vụn, được gọi là “quế dạng lát”, chủ yếu dùng để chiết xuất tinh dầu quế.', en: 'This heading also covers cinnamon waste, known as “chips”, used chiefly for the preparation of cinnamon essence.' },
      { type: 'paragraph', vi: 'Hoa quế là hoa của cây quế đã được giần sàng và làm khô. Chúng có hình như cái chuỳ và dài không quá 1cm. Sau khi nghiền, chúng được trộn lẫn với quế.', en: 'Cinnamon-tree flowers are the dried and sieved flowers of the cinnamon tree. They are club-shaped and of a length not normally exceeding 1 cm. After grinding, they are mixed with cinnamon.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả quả quế.', en: 'The heading also includes cinnamon fruit.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 0906.11', en: 'Subheading 0906.11' },
      { type: 'paragraph', vi: 'Phạm vi của phân nhóm này giới hạn ở quế có vỏ trong của các cành non của cây hoặc cây bụi Cinnamomum zeylanicum Blume , thường được gọi là quế Sri Lanka (Ceylon), Seychelles và Madagasca.', en: 'The scope of this subheading is limited to cinnamon which is the inner bark of young branches of the tree or shrub Cinnamomum zeylanicum Blume , commonly known as Sri Lankan (Ceylon) type, Seychelles type and Madagascan type cinnamon.' },
      { type: 'paragraph', vi: 'Các loại thương phẩm phổ biến là quế dạng thanh, xếp nếp hình tổ ong, sợi mỏng và lát mỏng.', en: 'General commercial grades are quills, quillings, featherings and chips.' },

      { type: 'heading', vi: '09.07 - Đinh hương (cả quả, thân và cành).', en: '09.07 - Cloves (whole fruit, cloves and stems).' },
      { type: 'list', vi: '0907.10 - Chưa xay hoặc chưa nghiền', en: '0907.10 - Neither crushed nor ground' },
      { type: 'list', vi: '0907.20 - Đã xay hoặc nghiền', en: '0907.20 - Crushed or ground' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading includes :' },
      { type: 'list', vi: '(1) Quả đinh hương, (có vị và hương thơm đặc trưng của nụ đinh hương nhưng nhẹ hơn).', en: '(1) Whole fruit of the clove tree (these have the characteristic taste and smell of cloves although less pronounced).' },
      { type: 'list', vi: '(2) Nụ và hoa đinh hương, hái trước khi hoa nở và phơi khô.', en: '(2) Cloves (the flowers of the clove tree picked before maturity and dried in the sun).' },
      { type: 'list', vi: '(3) Thân, cành nhỏ màu nâu nhạt, hương rất đậm của hoa đinh hương.', en: '(3) The fine, greyish, strongly scented stems of the clove flowers.' },
      { type: 'paragraph', vi: 'Nhóm này loại trừ vỏ và lá đinh hương ( nhóm 12.11 ).', en: 'The heading excludes clove bark and leaves ( heading 12.11 ).' },

      { type: 'heading', vi: '09.08 - Hạt nhục đậu khấu, vỏ nhục đậu khấu và bạch đậu khấu.', en: '09.08 - Nutmeg, mace and cardamoms.' },
      { type: 'paragraph', vi: '- Hạt nhục đậu khấu:', en: '- Nutmeg :' },
      { type: 'list', vi: '0908.11 - - Chưa xay hoặc chưa nghiền', en: '0908.11 - - Neither crushed nor ground' },
      { type: 'list', vi: '0908.12 - - Đã xay hoặc nghiền', en: '0908.12 - - crushed or ground' },
      { type: 'paragraph', vi: '- Vỏ nhục đậu khấu:', en: '- Mace:' },
      { type: 'list', vi: '0908.21 - - Chưa xay hoặc chưa nghiền', en: '0908.21 - - Neither crushed nor ground' },
      { type: 'list', vi: '0908.22 - - Đã xay hoặc nghiền', en: '0908.22 - - Crushed or ground' },
      { type: 'paragraph', vi: '- Bạch đậu khấu:', en: '- Cardamoms:' },
      { type: 'list', vi: '0908.31 - - Chưa xay hoặc chưa nghiền', en: '0908.31 - - Neither crushed nor ground' },
      { type: 'list', vi: '0908.32 - - Đã xay hoặc nghiền', en: '0908.32 - - Crushed or ground' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(a) Hạt nhục đậu khấu , tròn hoặc dài, đã hoặc chưa bóc vỏ.', en: '(a) Nutmegs , round or long, whether or not shelled.' },
      { type: 'list', vi: '(b) Vỏ nhục đậu khấu , là lớp vỏ màng của hạt đậu khấu, nằm giữa phần vỏ ngoài và phần lõi hạch. Phần này, khi được cắt thành mảnh, có đặc tính giống như hạt nhục đậu khấu, thậm chí hương vị còn đậm đà hơn. Lúc tươi nó có màu đỏ tươi nhưng để lâu nó chuyển sang màu vàng và trở nên giòn và có màu trong mờ giống như sừng. Một số loại khác lại có màu nâu vàng nhạt hoặc thậm chí trắng.', en: '(b) Mace , which is the membraneous envelope of the nutmeg, between the outer shell and the kernel. This substance, which is cut into strips, has the same properties as nutmeg, but even more marked. It is bright red when fresh, but turns yellow with age, and becomes brittle and translucent like horn. Some mace is flaxen-coloured or even white.' },
      { type: 'paragraph', vi: '(c) Bạch đậu khấu :', en: '(c) Cardamoms :' },
      { type: 'list', vi: '(1) Bạch đậu khấu chùm , gọi như vậy vì loại này mọc thành đám bám chặt vào nhau, có khi dứt được cả chùm, nhưng thường thì để rời từng quả to bằng quả nho. Chúng có màu trăng trắng, hình tròn, có ba múi, nhẹ và có màng dính; bên trong quả được chia thành ba phần chứa nhiều hạt rất thơm có vị hăng và cay.', en: '(1) Grape cardamoms , so-called because this variety grows in the form of closely packed clusters which are sometimes presented whole, but are more usually presented as single nuts about the size of a grape-pip. The nuts are whitish, rounded with three projecting sides, light and membraneous; they are divided internally into three sections containing many very aromatic seeds with a bitter, pungent flavour.' },
      { type: 'list', vi: '(2) Bạch đậu khấu loại nhỏ và vừa , gần giống với bạch đậu khấu chùm về mặt cấu trúc và đặc tính, nhưng có dáng giống hình tam giác và thuôn dài hơn.', en: '(2) Small or medium cardamoms , similar to grape cardamoms in structure and properties, but more triangular and elongated.' },
      { type: 'list', vi: '(3) Bạch đậu khấu loại to , hình tam giác, dài từ 27 đến 40 mm, và có vỏ cứng mầu nâu nhạt.', en: '(3) Large cardamoms , which are triangular, from 27 to 40 mm long, and have a brownish shell.' },
      { type: 'list', vi: '(4) Hạt sa nhân hoặc “hạt thiên đường” ( Aframomum melegueta ) thường được bóc vỏ rồi, hạt nhỏ và dài, có góc cạnh, sần sùi, hơi sáng như thể chúng đã được làm bóng. Chúng không có mùi, nhưng có vị hăng, cay bỏng như vị của hạt tiêu.', en: '(4) Malaguetta pepper or “ grains of paradise " ( Aframomum melegueta ) are almost invariably presented shelled, in small, elongated, angular seeds which, though rough surfaced, gleam as if they had been varnished. They are odourless but have a bitter, burning flavour similar to that of pepper.' },

      { type: 'heading', vi: '09.09 - Hạt của hoa hồi anise (tiểu hồi), hoa hồi badian (đại hồi), thì là, rau mùi, thì là Ai cập hoặc ca-rum (caraway); hạt bách xù (juniper berries).', en: '09.09 - Seeds of anise, badian, fennel, coriander, cumin or caraway; juniper berries.' },
      { type: 'paragraph', vi: '- Hạt của cây rau mùi:', en: '- Seeds of coriander:' },
      { type: 'list', vi: '0909.21 - - Chưa xay hoặc chưa nghiền', en: '0909.21 - - Neither crushed nor ground' },
      { type: 'list', vi: '0909.22 - - Đã xay hoặc nghiền', en: '0909.22 - - Crushed or ground' },
      { type: 'paragraph', vi: '- Hạt cây thì là Ai cập:', en: '- Seeds of cumin :' },
      { type: 'list', vi: '0909.31 - - Chưa xay hoặc chưa nghiền', en: '0909.31 - - Neither crushed nor ground' },
      { type: 'list', vi: '0909.32 - - Đã xay hoặc nghiền', en: '0909.32 - - Crushed or ground' },
      { type: 'paragraph', vi: '- Hạt của hoa hồi anise (tiểu hồi), hoa hồi badian (đại hồi), cây ca-rum (caraway) hoặc hạt cây thì là; hạt cây bách xù (juniper berries):', en: '- Seeds of anise, badian, caraway or fennel: juniper berries:' },
      { type: 'list', vi: '0909.61 - - Chưa xay hoặc chưa nghiền', en: '0909.61 - - Neither crushed nor ground' },
      { type: 'list', vi: '0909.62 - - Đã xay hoặc nghiền', en: '0909.62 - - Crushed or ground' },
      { type: 'paragraph', vi: 'Những loại quả hoặc hạt này được dùng làm gia vị, dùng trong ngành công nghiệp (ví dụ, trong chưng cất) và dùng trong y tế. Chúng vẫn được phân loại trong nhóm này ngay cả khi được đóng gói (ví dụ, trong túi nhỏ) để sắc thuốc hoặc pha trà thảo dược đặc biệt là hạt của hoa hồi.', en: 'These fruits or seeds are used for consumption as spices, for industrial purposes (e.g., in distilleries) and for medicinal purposes. They remain in this heading even when, in the case of anise seeds in particular, they are put up (e.g., in sachets) for making herbal infusions or herbal “teas”.' },
      { type: 'paragraph', vi: 'Hạt của hoa hồi ở đây chỉ loại hồi xanh, hạt hình trứng, có vân sọc dài, màu xanh xám, có mùi và hương thơm rất đặc trưng. Badian là hoa hồi dạng ngôi sao.', en: 'The seeds of anise referred to here are the green anise, an egg-shaped seed, striped lengthwise, greyish-green, with a very characteristic odour and aromatic flavour. Badian is star anise.' },
      { type: 'paragraph', vi: 'Hạt cây rau mùi, hạt cây thì là Ai cập và hạt cây ca -rum là hạt có hương thơm của một số loại cây họ hoa tán, chủ yếu dùng trong sản xuất rượu mùi.', en: 'Coriander, cumin and caraway seeds are the aromatic seeds of certain plants of the umbelliferous family, used chiefly in the preparation of liqueurs.' },
      { type: 'paragraph', vi: 'Hạt cây rau mùi, là hạt của cây dùng làm gia vị trong nấu ăn, có màu xám đậm, hương đậm và dễ chịu, hoặc màu xanh xám toả ra một mùi ngọt rất đặc trưng.', en: 'Fennel seeds , obtained from the culinary herb, may be dark grey giving off a strong and agreeable odour, or pale green with a very individual sweet scent.' },
      { type: 'paragraph', vi: 'Quả cây bách xù có màu nâu đậm ánh xanh tím và được phủ một lớp bụi nhựa. Phần thịt quả màu đỏ, có hương thơm, vị đắng và hơi ngọt, trong quả có ba hạt nhỏ và rất cứng. Quả cây bách xù được dùng làm hương liệu cho nhiều loại đồ uống có cồn (ví dụ, rượu Gin), bắp cải muối và nhiều chế phẩm thực phẩm, và để chiết xuất lấy tinh dầu.', en: 'Juniper berries are a very dark brown faintly tinted with purplish-blue, and are covered with a resinous dust. They contain a reddish aromatic pulp, with a bitter and slightly sweetened taste, enclosing three small and very hard pips. These berries are used to flavour various alcoholic beverages (e.g., gin), sauerkraut and sundry food preparations, and for the extraction of the essential oil.' },

      { type: 'heading', vi: '09.10 - Gừng, nghệ tây, nghệ (curcuma), húng tây, cỏ xạ hương, lá nguyệt quế, ca-ri (curry) và các loại gia vị khác.', en: '09.10 - Ginger, saffron, turmeric (curcuma), thyme, bay leaves, curry and other spices.' },
      { type: 'paragraph', vi: '- Gừng:', en: '- Ginger:' },
      { type: 'list', vi: '0910.11 - - Chưa xay hoặc chưa nghiền', en: '0910.11 - - Neither crushed nor ground' },
      { type: 'list', vi: '0910.12 - - Đã xay hoặc nghiền', en: '0910.12 - - Crushed or ground' },
      { type: 'list', vi: '0910.20 - Nghệ tây', en: '0910.20 - Saffron' },
      { type: 'list', vi: '0910.30 - Nghệ (curcuma)', en: '0910.30 - Turmeric (curcuma)' },
      { type: 'paragraph', vi: '- Gia vị khác:', en: '- Other spices:' },
      { type: 'list', vi: '0910.91 - - Hỗn hợp đã nêu trong Chú giải 1(b) của Chương này', en: '0910.91 - - Mixtures referred to in Note 1 (b) to this Chapter' },
      { type: 'list', vi: '0910.99 - - Loại khác', en: '0910.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'The heading includes :' },
      { type: 'list', vi: '(a) Gừng (kể cả gừng tươi, được tạm thời bảo quản trong muối, không thích hợp để sử dụng ngay); loại trừ gừng bảo quản trong xirô ( nhóm 20.08 ).', en: '(a) Ginger (including fresh ginger, provisionally preserved in brine, unsuitable in that state for immediate consumption); ginger preserved in syrup is excluded ( heading 20.08 ).' },
      { type: 'list', vi: '(b) Nghệ tây , gồm cả đầu nhụy và vòi nhuỵ khô của hoa nghệ tây ( Crocus sativus ). Nghệ tây cũng có thể ở dạng bột màu đỏ da cam, có mùi đậm, xông và dễ chịu. Nghệ tây chứa chất tạo mầu ít ổn định (không bền). Nó được dùng làm gia vị và trong ngành sản xuất bánh kẹo và dược phẩm.', en: '(b) Saffron , which consists of the dried stigmas and styles of the flowers of the saffron crocus ( Crocus sativus ). It may also be presented as an orange-red powder with a strong, penetrating and agreeable odour. It contains a colouring element of little stability. It is used as a seasoning and also in confectionery and medicine.' },
      { type: 'list', vi: '(c) Nghệ ( Curcuma longa ) đôi khi được gọi không chính xác là “nghệ tây Ấn Độ” do có màu vàng óng; củ nghệ được bán trên thị trường ở dạng nguyên củ, hoặc thường là ở dạng bột.', en: '(c) Turmeric or curcuma ( Curcuma longa ), sometimes incorrectly called “Indian saffron” because of its vivid yellow colour; the curcuma rhizome is marketed either whole or, more often, in powder form.' },
      { type: 'list', vi: '(d) Húng tây (kể cả húng dại) và lá nguyệt quế , đã hoặc chưa làm khô.', en: '(d) Thyme (including wild thyme) and bay leaves , whether or not dried.' },
      { type: 'list', vi: '(e) Bột cà ri , đó là hỗn hợp theo một tỉ lệ nào đó của nghệ (curcuma), của một số gia vị khác (ví dụ: hạt mùi, tiêu đen, thì là Ai cập, gừng, nụ đinh hương) và của một số hương liệu khác (ví dụ bột tỏi), tuy không được phân loại vào Chương này nhưng được sử dụng thường xuyên như gia vị.', en: '(c) Curry powder , consisting of a mixture in variable proportions of turmeric (curcuma), of various other spices (e.g., coriander, black pepper, cumin, ginger, cloves) and of other flavouring substances (e.g., garlic powder) which, although not falling in this Chapter, are often used as spices.' },
      { type: 'list', vi: '(f) Hạt cây rau thì là (Anethum graveolens) và hạt cây cỏ ca ri (Trigonella foenum graecum).', en: '(f) Dill seed (Anethum graveolens), and fenugreek seed (Trigonclla foenum graceum).' },
      { type: 'list', vi: '(g) Hỗn hợp của các sản phẩm thuộc các nhóm từ 09.04 đến 09.10 khi tách riêng các thành phần của hỗn hợp được phân loại vào các nhóm khác nhau, ví dụ hỗn hợp giữa hạt tiêu (nhóm 09.04) với các sản phẩm của nhóm 09.08.', en: '(g) Mixtures of the products of headings 09.04 to 09.10 when the separate ingredients of the mixture fall in different headings, e.g., mixtures of pepper (heading 09.04) with products of heading 09.08.' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 10
  // ------------------------------------------------------------ 
  {
    chapterNumber: 10,
    titleVi: 'CHƯƠNG 10: NGŨ CỐC',
    titleEn: 'CHAPTER 10: CEREALS',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 10: Ngũ cốc', en: 'Chapter 10: Cereals' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { 
        type: 'paragraph', 
        vi: '1.- (A) Các sản phẩm kể tên trong các nhóm của Chương này chỉ được phân loại trong các nhóm đó khi ở dạng hạt, còn hoặc không còn ở trên bông hay trên thân cây.', 
        en: '1. - (A) The products specified in the headings of this Chapter are to be classified in those headings only if grains are present, whether or not in the car or on the stalk.' 
      },
      { 
        type: 'paragraph', 
        vi: ' (B) Chương này không bao gồm các loại hạt đã xát vỏ hoặc chế biến cách khác. Tuy nhiên, thóc, được xay để bỏ trấu, gạo được xát, đánh bóng, hồ (glazed), gạo đồ (1) hoặc gạo tấm vẫn được phân loại trong nhóm 10.06. Tương tự, hạt diêm mạch (quinoa) đã được loại bỏ toàn bộ hoặc một phần vỏ lụa để tách saponin, nhưng không trải qua bất kỳ quá trình chế biến nào khác, vẫn được phân loại trong nhóm 10.08', 
        en: '(B) The Chapter does not cover grains which have been hulled or otherwise worked. However, rice, husked, milled, polished, glazed, parboiled or broken remains classified in heading 10.06. Similarly, quinoa from which the pericarp has been wholly or partly removed in order to separate the saponin, but which has not undergone any other processes, remains classified in heading 10.08.' 
      },
      { type: 'paragraph', vi: '2.- Nhóm 10.05 không bao gồm ngô ngọt (Chương 7).', en: '2. - Heading 10.05 does not cover sweet corn (Chapter 7).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Note.' },
      { 
        type: 'paragraph', 
        vi: '1.- Khái niệm "lúa mì durum" có nghĩa là loại lúa mì thuộc loài Triticum durum và các giống lai tạo từ việc kết hợp giữa các loài của Triticum durum có cùng số nhiễm sắc thể (28) như loài đó.', 
        en: '1.- The term “ durum wheat ” means wheat of the Triticum durum species and the hybrids derived from the inter-specific crossing of Triticum durum which have the same number (28) of chromosomes as that species.' 
      },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Chương này chỉ bao gồm các loại hạt ngũ cốc, đã được hoặc chưa được tách khỏi bông hoặc bắp. Các loại hạt từ ngũ cốc được thu hoạch non, vẫn còn nguyên vỏ, được phân loại như loại hạt thường. Các loại ngũ cốc tươi ( trừ ngô ngọt thuộc Chương 7 ), được dùng hay không được dùng làm rau, vẫn được phân loại vào Chương này.', 
        en: 'This Chapter covers cereal grains only, whether or not presented in sheaves or in the ear. Grain obtained from cereals cut before maturity and still complete with husks is classified with ordinary grain. Fresh cereals ( other than sweet corn of Chapter 7 ), whether or not suitable for use as vegetables, remain classified in this Chapter.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Lúa gạo vẫn được phân loại trong nhóm 10.06 ngay cả khi lúa gạo đã được xay để bỏ trấu (gạo lứt), xát, đánh bóng, hồ (glazed), gạo đồ, hoặc gạo tấm, miễn là không được chế biến theo cách khác. Tương tự, hạt diêm mạch (quinoa) đã được loại bỏ toàn bộ hoặc một phần vỏ lụa để tách saponin, nhưng không trải qua bất kỳ quá trình chế biến nào khác, vẫn được phân loại trong nhóm 10.08. Tuy nhiên, những loại hạt khác không thuộc Chương này nếu chúng đã được xát vỏ hoặc sơ chế theo các cách khác, ví dụ, như được mô tả tại nhóm 11.04 (xem Chú giải tương ứng).', 
        en: 'Rice remains classified in heading 10.06 even if it has been husked, milled, glazed, polished, parboiled, or broken, provided it has not been otherwise worked. Similarly, quinoa from which the pericarp has been wholly or partly removed in order to separate the saponin, but which has not undergone any other processes, remains classified in heading 10.08. Other grains are, however, excluded from the Chapter if they have been hulled or otherwise worked, for example, as described in heading 11.04 (see the corresponding Explanatory Note).' 
      },

      { type: 'heading', vi: '10.01 - Lúa mì và meslin (+).', en: '10.01 - Wheat and meslin (+).' },
      { type: 'paragraph', vi: '- Lúa mì Durum:', en: '- Durum wheal :' },
      { type: 'list', vi: '1001.11 - - Hạt giống', en: '1001.11 - - Seed' },
      { type: 'list', vi: '1001.19 - - Loại khác', en: '1001.19 - - Other' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1001.91 - - Hạt giống', en: '1001.91 - - Seed' },
      { type: 'list', vi: '1001.99 - - Loại khác', en: '1001.99 - - Other' },
      { type: 'paragraph', vi: 'Lúa mì được phân thành 2 loại chính:', en: 'Wheat can be divided into two main classes' },
      { type: 'list', vi: '(1) Lúa mì thường , mềm, nửa cứng hoặc cứng và thường có vết bột nứt;', en: '(1) Common wheat , soft, semi-hard or hard, usually having a floury fracture;' },
      { type: 'list', vi: '(2) Lúa mì Durum (xem Chú giải phân nhóm 1 của Chương này). Lúa mì Durum thường có màu từ vàng hổ phách ngả sang nâu; nó thường có vết nứt có màu trắng đục, giống sừng, trong mờ.', en: '(2) Durum wheat (see Subheading Note 1 to this Chapter). Durum wheat is generally of a colour ranging from amber yellow to brown; it usually shows a translucent, hornlike, vitreous fracture.' },
      { type: 'paragraph', vi: 'Lúa mì Spelt , loại lúa mì nâu hạt nhỏ vẫn còn vỏ sau khi được đập cũng được phân loại vào nhóm này.', en: 'Spelt , a type of wheat with a small brown grain which retains its husk even after threshing, is also classified in this heading.' },
      { type: 'paragraph', vi: 'Lúa mì Meslin là một hỗn hợp giữa lúa mì và lúa mạch đen, thường có tỉ lệ là 2 phần lúa mì và 1 phần mạch đen.', en: 'Meslin is a mixture of wheat and rye, generally in proportions of two to one.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1001.11 và 1001.91', en: 'Subheadings 1001.11 and 1001.91' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1001.11 và 1001.91, thuật ngữ “hạt giống” chỉ bao gồm lúa mì hoặc lúa mì Meslin được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheadings 1001.11 and 1001.91. the term "seed” covers only wheat or meslin regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.02 - Lúa mạch đen (+).', en: '10.02 - Rye (+).' },
      { type: 'list', vi: '1002.10 - Hạt giống', en: '1002.10 - Seed' },
      { type: 'list', vi: '1002.90 - Loại khác', en: '1002.00 - Other' },
      { type: 'paragraph', vi: 'Lúa mạch đen có hạt hình dạng dài hơn, màu xanh xám hoặc xám sáng. Bột của nó màu xám.', en: 'Rye has a rather elongated grain, greenish-grey or light grey in eolour. Its flour is grey.' },
      { type: 'paragraph', vi: 'Lúa mạch đen có cựa dùng làm thuốc do nấm gây nên gọi là hạt cựa (ergot) không thuộc nhóm này ( nhóm 12.11 ).', en: 'Rye bearing the fungoid growth known as ergot is excluded ( heading 12.11 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1002.10', en: 'Subheading 1002.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1002.10, thuật ngữ “hạt giống” chỉ bao gồm lúa mạch đen được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1002.10, the term “seed” covers only rye regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.03 - Lúa đại mạch (+).', en: '10.03 - Barley (+).' },
      { type: 'list', vi: '1003.10 - Hạt giống', en: '1003.10 - Seed' },
      { type: 'list', vi: '1003.90 - Loại khác', en: '1003.90 - Other' },
      { type: 'paragraph', vi: 'Lúa đại mạch có hạt to hơn hạt lúa mì, thường được dùng làm thức ăn chăn nuôi. Nó chủ yếu được sử dụng để tạo ra malt và, khi được đánh bóng hoặc nghiền thì được dùng để chế biến thức ăn hoặc nấu súp.', en: 'Barley has a fleshier grain than that of wheat. It is mainly used as livestock feed, for the manufacture of malt and, when polished or pearled, for the preparation of soups or cooked foods.' },
      { type: 'paragraph', vi: 'Các loại lúa đại mạch Bracteifeous khác với phần lớn các loại ngũ cốc khác bởi vì vỏ của các loại lúa mạch dính chặt vào phần hạt trong quá trình phát triển và vì vậy người ta không thể tách được vỏ chỉ bằng các biện pháp đập và sàng sẩy đơn thuần. Lúa đại mạch loại này, có màu vàng rơm và thuôn 2 đầu, được phân loại vào nhóm này chỉ khi vẫn còn nguyên vỏ. Khi đã bị xát hết phần vỏ, nó bị loại trừ ( nhóm 11.04 ); việc xát vỏ đòi hỏi cả một quy trình xát trong đó đôi khi xát mất một phần vỏ.', en: 'Bracteiferous varieties of barley differ from most other cereals in that their husks (or hulls) become fused to the grain kernel in the course of growth and therefore cannot be separated by simple threshing or winnowing. Barley grain of this kind, which is straw-yellow in colour and pointed at the ends, falls in the heading only if presented complete with husk (or hull). When this husk or hull has been removed bracteiferous barley grains are excluded ( heading 11.04 ); this removal requires a milling process which sometimes also removes part of the pericarp.' },
      { type: 'paragraph', vi: 'Còn loại lúa đại mạch về bản chất tự nhiên không có vỏ, vẫn thuộc nhóm này miễn là chưa qua bất kỳ một quá trình chế biến nào trừ đập và sàng sẩy.', en: 'The variety of barley which in its natural state has no husk or hull, remains in this heading provided it has not undergone any process other than threshing or winnowing.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not include :' },
      { type: 'list', vi: '(a) Lúa đại mạch đã nảy mầm (malt), và malt đã rang (xem Chú giải nhóm 11.07 ).', en: '(a) Sprouted barley (malt), nor roasted malt (see Explanatory Note to heading 11.07 ).' },
      { type: 'list', vi: '(b) Lúa đại mạch đã rang (thay thế cà phê) ( nhóm 21.01 ).', en: '(b) Roasted barley (coffee substitutes) ( heading 21.01 ).' },
      { type: 'list', vi: '(c) Mầm malt được tách từ malt trong quá trình tách mầm và các loại phế phẩm từ quá trình sản xuất bia (ví dụ, bã hoa bia, cặn ngũ cốc...) ( nhóm 23.03 ).', en: '(c) Malt sprouts separated from the malted grain during the kilning process and other brewing wastes (dregs of cereals, hops, etc.) ( heading 23.03 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1003.10', en: 'Subheading 1003.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1003.10, thuật ngữ “hạt giống” chỉ bao gồm lúa đại mạch được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1003.10, the term “seed” covers only barley regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.04 - Yến mạch (+).', en: '10.04 - Oats (+).' },
      { type: 'list', vi: '1004.10 - Hạt giống', en: '1004.10 - Seed' },
      { type: 'list', vi: '1004.90 - Loại khác', en: '1004.90 - Other' },
      { type: 'paragraph', vi: 'Có hai loại yến mạch chính: Yến mạch xám (hoặc đen) và yến mạch trắng (hoặc vàng).', en: 'There are two main kinds of oats: grey (or black) oats and white (or yellow) oats.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm hạt yến mạch có vỏ cũng như các hạt về bản chất tự nhiên không có trấu hoặc vỏ, miễn là chưa qua bất kỳ một quá trình chế biến nào trừ đập hay sàng sẩy.', en: 'This heading covers grains with their husks as well as those which in their natural state have no husk or hull, provided they have not undergone any process other than threshing or winnowing.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm loại yến mạch phần mày có thể đã bị mất trong quá trình chế biến hoặc xử lý đơn thuần (đập, chuyên chở, chất hàng...).', en: 'The heading also covers oats from which the glume tips may have been removed during normal processing or handling (threshing, transportation, reloading, etc.).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1004.10', en: 'Subheading 1004.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1004.10, thuật ngữ “hạt giống” chỉ bao gồm yến mạch được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1004.10, the term “seed” covers only oats regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.05 - Ngô (+).', en: '10.05 - Maize (corn)(+).' },
      { type: 'list', vi: '1005.10 - Hạt giống', en: '1005.10 - Seed' },
      { type: 'list', vi: '1005.90 - Loại khác', en: '1005.90 - Other' },
      { type: 'paragraph', vi: 'Có một vài loại ngô, với các loại hạt có màu sắc khác nhau (vàng óng, trắng, đôi khi nâu đỏ hoặc kết hợp nhiều màu), và có nhiều hình dạng khác nhau (tròn, răng ngựa, phẳng bẹt...)', en: 'There are several kinds of maize (corn), with grains of different colours (golden yellow, white, sometimes reddish-brown or mottled), and of different shapes (round, dog-tooth shaped, flattened, etc.).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm ngô ngọt ( Chương 7 ).', en: 'The heading does not include sweet corn ( Chapter 7 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1005.10', en: 'Subheading 1005.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1005.10, thuật ngữ "hạt giống" chỉ bao gồm ngô được được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1005.10. the term “ seed ” covers only maize (corn) regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.06 - Lúa gạo.', en: '10.06 - Rice.' },
      { type: 'list', vi: '1006.10 - Thóc', en: '1006.10 - Rice in the husk (paddy or rough)' },
      { type: 'list', vi: '1006.20 - Gạo lứt', en: '1006.20 - Husked (brown) rice' },
      { type: 'list', vi: '1006.30 - Gạo đã xát toàn bộ hoặc sơ bộ, đã hoặc chưa được đánh bóng hoặc hồ (glazed)', en: '1006.30 - Semi-milled or wholly milled rice, whether or not polished or glazed' },
      { type: 'list', vi: '1006.40 - Tấm', en: '1006.40 - Broken rice' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Gạo còn nguyên vỏ (thóc hay thóc chưa xay), tức là, gạo còn nguyên vỏ trấu bao chặt lấy hạt.', en: '(1) Rice in the husk ( paddy or rough rice ), that is to say, rice grain still tightly enveloped by the husk.' },
      { type: 'list', vi: '(2) Gạo lứt (gạo mới xay bỏ phần trấu), mặc dù đã được xay bỏ hết phần trấu bởi máy xay, nhưng vẫn còn phần vỏ lụa. Gạo lứt dường như vẫn còn chứa lượng nhỏ thóc.', en: '(2) Husked (brown) rice (cargo rice) which, although the husk has been removed by mechanical hullers, is still enclosed in the pericarp. Husked rice almost always still contains a small quantity of paddy.' },
      { type: 'list', vi: '(3) Gạo đã xát sơ bộ , tức là, gạo còn nguyên hạt nhưng một phần vỏ lụa đã bị tách.', en: '(3) Semi-milled rice , that is to say, whole rice grains from which the pericarp has been partly removed.' },
      { type: 'list', vi: '(4) Gạo đã xát toàn bộ (gạo đã tẩy trắng) , gạo nguyên hạt đã được xát hết phần vỏ lụa bằng máy xát (hình phễu).', en: '(4) Wholly milled rice (bleached rice), whole rice grains from which the pericarp has been removed by passage through special tapering cylinders.' },
      { type: 'paragraph', vi: 'Loại gạo đã xát toàn bộ có thể được đánh bóng rồi hồ (glazed) bề mặt để tăng giá trị cảm quan. Đánh bóng gạo (làm bóng bề mặt đục của gạo xát trơn) bằng các máy có trang bị bàn chải hoặc các máy đánh bóng (hình phễu). "Hồ gạo", tức là bao phủ vỏ gạo một hỗn hợp gồm glucoza và bột talc bằng các máy hồ gạo.', en: 'Wholly milled rice may be polished and subsequently glazed to improve its appearance. The polishing process (which is designed to embellish the mat surface of the plain milled rice) is carried out in brush machines or “ polishing cones ”. “ Glazing ” consists of coating the grains with a mixture of glucose and talcum in special glazing drums.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm loại gạo "làm bóng bằng dầu (Camolino)" là loại gạo đã xát trắng được phủ một lớp dầu mỏng.', en: 'The heading also includes “ Camolino ” rice, which consists of milled rice coated with a thin film of oil.' },
      { type: 'list', vi: '(5) Gạo tấm , là loại gạo bị vỡ trong quá trình chế biến.', en: '(5) Broken rice , i.e., rice broken during processing.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm:', en: 'The heading also includes the following :' },
      { type: 'list', vi: '(a) Gạo giàu vitamin , là hỗn hợp giữa loại gạo xát trắng thường và một lượng rất nhỏ (1%) hạt gạo đã được phủ hoặc tẩm các chất vitamin.', en: '(a) Enriched rice , consisting of a mixture of ordinary milled rice grains and a very small proportion (in the order of 1 %) of rice grains coated or impregnated with vitamin substances.' },
      { type: 'list', vi: '(b) Gạo đồ , là loại gạo khi vẫn còn vỏ và trước khi được sơ chế (ví dụ, xay, xát, đánh bóng), được ngâm nước nóng hoặc hấp rồi được làm khô. Trong quá trình làm chín sơ, gạo có thể được xử lý dưới áp lực hoặc được đặt trong chân không toàn phần hoặc một phần.', en: '(b) Parboiled rice , which, while still in the husk and before being subjected to other processes (e.g., husking, milling, polishing), has been soaked in hot water or steamed and then dried. At certain stages of the parboiling process, the rice may have been treated under pressure or exposed to a complete or partial vacuum.' },
      { type: 'paragraph', vi: 'Cấu trúc hạt của gạo đồ thay đổi không đáng kể qua các quá trình sơ chế trên. Gạo đồ, sau khi được xát, đánh bóng… phải đun từ 20 đến 35 phút để nấu chín hoàn toàn.', en: 'The grain structure of parboiled rice is only modified to a minor extent by the process it has undergone. Such rice, after milling, polishing, etc., takes from 20 to 35 minutes to cook fully.' },
      { type: 'paragraph', vi: 'Những loại gạo khác mà cấu trúc hạt đã bị thay đổi đáng kể trong quá trình chế biến không được phân loại vào nhóm này. Loại gạo đã được nấu chín trước là gạo đã được nấu chín một phần hay toàn phần và sau đó được rút hết nước thuộc vào nhóm 19.04 . Loại gạo đã được nấu chín sẵn một phần mất từ 5 đến 12 phút để chuẩn bị cho bữa ăn, còn đối với loại gạo đã được làm chín trước toàn phần thì chỉ cần cho vào nước và đun sôi trước khi ăn. Còn bỏng gạo (puffed rice) có được sau quá trình nổ bỏng và ăn được ngay cũng được phân loại vào nhóm 19.04 .', en: 'The varieties of rice which have been submitted to treatments considerably modifying the grain structure are excluded from this heading. Pre-cooked rice consisting of worked rice grains cooked either fully or partially and then dehydrated falls in heading 19.04 . Partially pre-cooked rice takes 5 to 12 minutes to prepare for consumption, whereas fully pre-cooked rice needs only to be soaked in water and brought to the boil before consumption. “Puffed" rice obtained by a swelling process and ready for consumption is also classified in heading 19.04 .' },

      { type: 'heading', vi: '10.07 - Lúa miến.', en: '10.07 - Grain sorghum (+).' },
      { type: 'list', vi: '1007.10 - Hạt giống', en: '1007.10 - Seed' },
      { type: 'list', vi: '1007.90 - Loại khác', en: '1007.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này chỉ bao gồm những loại lúa miến mà hạt có thể được sử dụng làm ngũ cốc dùng làm thức ăn cho người. Cũng được phân loại vào nhóm này là các loại lúa miến như Caffrorum , cernuum (kê trắng), durra (kê nâu) và nervosum (cao lương).', en: 'This heading covers only those varieties of sorghum which are known as grain sorghums and whose grains may be used as cereals for human consumption. The heading includes sorghums such as caffrorum (kafir), cernuum (white durra), durra (brown durra) and nervosum (kaoliang).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm lúa miến dùng làm thức ăn cho gia súc (để làm cỏ khô hoặc ủ tươi) như loại halepensis ( halepense ) , các loại miến cỏ (trồng trong các bãi cỏ) như loại sudanensis (Xu đăng) hoặc các loại miến ngọt (chủ yếu được dùng làm xirô hoặc làm mật) như loại miến saccharatum . Nếu là hạt giống, các sản phẩm được phân loại vào nhóm 12.09 . Trong các trường hợp khác, lúa miến dùng làm thức ăn cho gia súc và lúa miến cỏ được phân loại vào nhóm 12.14 và lúa miến ngọt vào nhóm 12.12 . Nhóm này cũng không bao gồm loại miến "chổi" ( Sorghum vulgare var. technicum ) được phân loại vào nhóm 14.04 .', en: 'The heading does not include forage sorghums (which are used for making hay or silage) such as halepensis (halepense), grass sorghums (which are used for grazing) such as sudanensis (sudanense) or sweet sorghums (which are used primarily for the manufacture of syrup or molasses) such as saccharatum . When presented as seeds for sowing, these products are classified in heading 12.09 . Otherwise, forage sorghums and grass sorghums fall to be classified in heading 12.14 and sweet sorghums in heading 12.12 . The heading also excludes broomcorn ( Sorghum vulgare var. technicum ), which is classified in heading 14.04 .' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1007.10', en: 'Subheading 1007.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1007.10, thuật ngữ “hạt giống” chỉ bao gồm lúa miến được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1007.10, the term “seed” covers only grain sorghum regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '10.08 - Kiều mạch, kê, hạt cây thóc chim; các loại ngũ cốc khác.', en: '10.08 - Buckwheat, millet and canary seeds; other cereals (+).' },
      { type: 'list', vi: '1008.10 - Kiều mạch', en: '1008.10 - Buckwheat' },
      { type: 'paragraph', vi: '- Kê:', en: '- Millet:' },
      { type: 'list', vi: '1008.21 - - Hạt giống', en: '1008.21 - - Seed' },
      { type: 'list', vi: '1008.29 - - Loại khác', en: '1008.29 - - Other' },
      { type: 'list', vi: '1008.30 - Hạt cây thóc chim (họ lúa)', en: '1008.30 - Canary seeds' },
      { type: 'list', vi: '1008.40 - Hạt kê Fonio ( Digitaria spp. )', en: '1008.40 - Fonio ( Digitaria spp. )' },
      { type: 'list', vi: '1008.50 - Hạt diêm mạch ( Chenopodium quinoa )', en: '1008.50 - Quinoa ( Chenopodium quinoa )' },
      { type: 'list', vi: '1008.60 - Lúa mì lai lúa mạch đen (Triticale)', en: '1008.60 - Triticale' },
      { type: 'list', vi: '1008.90 - Ngũ cốc loại khác', en: '1008.90 - Other cereals' },
      { type: 'paragraph', vi: '(A) KIỀU MẠCH, KÊ, HẠT CÂY THÓC CHIM (HỌ LÚA)', en: '(A) BUCKWHEAT, MILLET AND CANARY SEED' },
      { type: 'paragraph', vi: 'Nhóm các sản phẩm này bao gồm:', en: 'This group covers :' },
      { type: 'list', vi: '(1) Kiều mạch : Loại ngũ cốc này còn được gọi là lúa mỳ đen, thuộc họ Polygonaceae , tương đối khác với họ Gramineae mà bao gồm phần lớn các loại ngũ cốc khác.', en: '(1) Buckwheat . This cereal, also known as black wheat, belongs to the Polygonaceae family, quite different from the Gramineae family which includes most other cereals.' },
      { type: 'list', vi: '(2) Kê , hạt tròn màu vàng rơm và bao gồm các loại: Setaria, Pennisetum, Echinochloa, Eleusine (kể cả Eleusine coracana (Coracan)) , Panicum, Digitaria sanguinalis và Eragrostis tef .', en: '(2) Millet , a round grain, pale-yellow in colour. It includes the following species: Setaria spp., Pennisetum spp., Echinochloa spp., Eleusine spp. ( including Eleusine coracana (Coracan)) , Panicum spp., Digitaria sanguinalis and Eragrostis tef .' },
      { type: 'list', vi: '(3) Hạt cây thóc chim , là hạt có màu rơm, bóng, thon 2 đầu.', en: '(3) Canary seed , a shining straw coloured seed, elongated and pointed at both ends.' },
      { type: 'paragraph', vi: '(B) NHỮNG LOẠI NGŨ CỐC KHÁC', en: '(B) OTHER CEREALS' },
      { type: 'paragraph', vi: 'Nhóm các sản phẩm này bao gồm một số loại ngũ cốc lai, ví dụ, lúa mì đen (triticale), loại ngũ cốc lai giữa lúa mì và mạch đen.', en: 'This group includes certain hybrid grains, e.g., triticale, a cross between wheal and rye.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1008.21', en: 'Subheading 1008.21' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1008.21, thuật ngữ “hạt giống” chỉ bao gồm kê được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1008.21. the term “seed” covers only millet regarded by the competent national authorities as being for sowing.' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 11
  // ------------------------------------------------------------
  {
    chapterNumber: 11,
    titleVi: 'CHƯƠNG 11: CÁC SẢN PHẨM XAY XÁT; MALT; TINH BỘT; INULIN; GLUTEN LÚA MÌ',
    titleEn: 'CHAPTER 11: PRODUCTS OF THE MILLING INDUSTRY; MALT; STARCHES; INULIN; WHEAT GLUTEN',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 11: Các sản phẩm xay xát; malt; tinh bột; inulin; gluten lúa mì', en: 'Chapter 11: Products of the milling industry; malt; starches; inulin; wheat gluten' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1. Chương này không bao gồm:', en: '1.-This Chapter does not cover:' },
      { type: 'list', vi: '(a) Malt đã rang dùng như chất thay thế cà phê (nhóm 09.01 hoặc nhóm 21.01);', en: '(a) Roasted malt put up as coffee substitutes (heading 09.01 or 21.01);' },
      { type: 'list', vi: '(b) Bột mịn, tấm, bột thô hoặc tinh bột đã chế biến thuộc nhóm 19.01;', en: '(b) Prepared flours, groats, meals or starches of heading 19.01;' },
      { type: 'list', vi: '(c) Mảnh ngô chế biến từ bột ngô (corn flakes) hoặc các sản phẩm khác thuộc nhóm 19.04;', en: '(c) Corn flakes or other products of heading 19.04:' },
      { type: 'list', vi: '(d) Các loại rau, đã chế biến hay bảo quản, thuộc nhóm 20.01, 20.04 hoặc 20.05;', en: '(d) Vegetables, prepared or preserved, of heading 20.01, 20.04 or 20.05:' },
      { type: 'list', vi: '(e) Dược phẩm (Chương 30); hoặc', en: '(e) Pharmaceutical products (Chapter 30); or' },
      { type: 'list', vi: '(f) Tinh bột có đặc tính của nước hoa, mỹ phẩm hay chế phẩm vệ sinh (Chương 33).', en: '(f) Starches having the character of perfumery , cosmetic or toilet preparations (Chapter 33).' },
      { 
        type: 'paragraph', 
        vi: '2. (A) Các sản phẩm thu được từ quá trình xay xát ngũ cốc liệt kê trong bảng dưới đây được xếp vào Chương này, nếu tính theo trọng lượng trên sản phẩm khô các sản phẩm này có:', 
        en: '2.- (A) Products from the milling of the cereals listed in the table below fall in this Chapter if they have, by weight on the dry product:' 
      },
      { type: 'list', vi: '(a) hàm lượng tinh bột (được xác định theo phương pháp phân cực Ewer cải tiến) vượt quá chỉ dẫn ghi trong Cột (2); và', en: '(a) a starch content (determined by the modified Ewers polarimetric method) exceeding that indicated in Column (2): and' },
      { type: 'list', vi: '(b) hàm lượng tro (sau khi loại trừ các khoáng chất bổ sung) không vượt quá chỉ dẫn ghi trong Cột (3).', en: '(b) an ash content (affter deduction of any added minerals) not exceeding that indicated in Columm (3).' },
      { type: 'paragraph', vi: 'Các sản phẩm không giống như vậy sẽ được xếp vào nhóm 23.02. Tuy nhiên, mầm ngũ cốc nguyên dạng, đã được xay, vỡ mảnh hoặc nghiền, luôn luôn được phân loại vào nhóm 11.04.', en: 'Otherwise, they fall in heading 23.02. However, germ of cereals, whole, rolled, flaked or ground is always classified in heading 11.04.' },
      { 
        type: 'paragraph', 
        vi: '(B) Các sản phẩm thuộc Chương này theo những quy định trên đây sẽ được xếp vào nhóm 11.01 hoặc 11.02 nếu có tỷ lệ phần trăm lọt qua sàng bằng lưới kim loại với kích thước mắt sàng ghi trong Cột (4) hoặc (5) không thấp hơn tỷ lệ ghi cho từng loại ngũ cốc, tính theo trọng lượng.', 
        en: '(B) Products falling in this Chapter under the above provisions shall be classified in heading 11.01 or 11.02 if the percentage passing through a woven metal wire cloth sieve with the aperture indicated in Column (4) or (5) is not less, by weight, than that shown against the cereal concerned.' 
      },
      { type: 'paragraph', vi: 'Các trường hợp khác sẽ được xếp vào nhóm 11.03 hoặc 11.04.', en: 'Otherwise, they tall in heading 11.03 or 11.04.' },
      { type: 'paragraph', vi: 'Bảng tiêu chuẩn các loại ngũ cốc:', en: 'Table of standards for cereals:' },
      { type: 'list', vi: '- Lúa mì và lúa mạch đen: Hàm lượng tinh bột 45%; Hàm lượng tro 2,5%; Tỉ lệ lọt qua sàng 315 micron: 80%.', en: '- Wheat and rye: Starch content 45%; Ash content 2.5%; Rate of passage through a sieve 315 micrometres: 80%.' },
      { type: 'list', vi: '- Lúa đại mạch: Hàm lượng tinh bột 45%; Hàm lượng tro 3%; Tỉ lệ lọt qua sàng 315 micron: 80%.', en: '- Barley: Starch content 45%; Ash content 3%; Rate of passage through a sieve 315 micrometres: 80%.' },
      { type: 'list', vi: '- Yến mạch: Hàm lượng tinh bột 45%; Hàm lượng tro 5%; Tỉ lệ lọt qua sàng 315 micron: 80%.', en: '- Oats: Starch content 45%; Ash content 5%; Rate of passage through a sieve 315 micrometres: 80%.' },
      { type: 'list', vi: '- Ngô và lúa miến: Hàm lượng tinh bột 45%; Hàm lượng tro 2%; Tỉ lệ lọt qua sàng 500 micron: 90%.', en: '- Maize (corn) and grain sorghum: Starch content 45%; Ash content 2%; Rate of passage through a sieve 500 micrometres: 90%.' },
      { type: 'list', vi: '- Gạo: Hàm lượng tinh bột 45%; Hàm lượng tro 1,6%; Tỉ lệ lọt qua sàng 315 micron: 80%.', en: '- Rice: Starch content 45%; Ash content 1.6%; Rate of passage through a sieve 315 micrometres: 80%.' },
      { type: 'list', vi: '- Kiều mạch: Hàm lượng tinh bột 45%; Hàm lượng tro 4%; Tỉ lệ lọt qua sàng 315 micron: 80%.', en: '- Buckwheat: Starch content 45%; Ash content 4%; Rate of passage through a sieve 315 micrometres: 80%.' },
      { type: 'paragraph', vi: '3. Theo mục đích của nhóm 11.03 khái niệm "tấm" và "bột thô" được hiểu là các sản phẩm thu được từ quá trình xay vỡ hạt ngũ cốc, trong đó:', en: '3.- For the purposes of heading 11.03, the terms "groats" and "meal" mean products obtained by the fragmentation of cereal grains, of which:' },
      { type: 'list', vi: '(a) đối với sản phẩm ngô, tối thiểu 95% tính theo trọng lượng lọt qua sàng bằng lưới kim loại với kích thước mắt sàng là 2 mm;', en: '(a) in the case of maize (corn) products, at least 95 % by weight passes through a woven metal wire cloth sieve with an aperture of 2 mm;' },
      { type: 'list', vi: '(b) đối với sản phẩm ngũ cốc khác, tối thiểu 95% tính theo trọng lượng lọt qua sàng có lưới bằng kim loại với kích thước mắt sàng là 1,25 mm.', en: '(b) in the case of other cereal products, at least 95 % by weight passes through a woven metal wire cloth sieve with an aperture of 1.25 mm.' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này bao gồm:', en: 'This Chapter includes:' },
      { type: 'list', vi: '(1) Những sản phẩm thu được từ quá trình xay xát các loại ngũ cốc thuộc Chương 10 và ngô ngọt thuộc Chương 7, trừ những phế liệu xay xát thuộc nhóm 23.02 .', en: '(1) Products from the milling of the cereals of Chapter 10 and of sweet corn of Chapter 7, other than milling residues of heading 23.02.' },
      { 
        type: 'paragraph', 
        vi: 'Trong phạm vi này, các sản phẩm thu được từ quá trình xay xát bột mì, lúa mạch đen, lúa đại mạch, yến mạch, ngô (kể cả loại ngô còn nguyên bắp, vẫn còn hay không còn vỏ ngô), lúa miến, gạo và kiều mạch thuộc Chương này được phân biệt với những phế liệu thuộc nhóm 23.02 dựa trên những tiêu chí về mặt hàm lượng tinh bột và hàm lượng tro nêu tại Chú giải 2 (A) của Chương này.', 
        en: 'In this context, the products from the milling of wheat, rye, barley, oats, maize (corn) (including whole cobs ground with or without their husks), grain sorghum, rice and buckwheat falling in this Chapter are to be distinguished from the residues of heading 23.02 in accordance with the criteria as to starch and ash content laid down in Chapter Note 2(A).' 
      },
      { type: 'paragraph', vi: 'Trong phạm vi Chương này, đối với những loại ngũ cốc được kể tên trên, các loại bột thuộc nhóm 11.01 hoặc 11.02 phải được phân biệt với các sản phẩm thuộc nhóm 11.03 hoặc 11.04 dựa trên các tiêu chí về tỉ lệ lọt qua sàng được nêu trong phần Chú giải 2 (B) của Chương này.', en: 'Within the Chapter, as regards the cereals mentioned by name above, the flours of heading 11.01 or 11.02 are to be distinguished from the products of heading 11.03 or 11.04 in accordance with the criterion as to passage through a sieve laid down in Chapter Note 2 (B).' },
      { type: 'paragraph', vi: 'Đồng thời, tất cả ngũ cốc ở dạng tấm và bột thô thuộc nhóm 11.03 cũng phải đáp ứng đầy đủ những tiêu chí về tỉ lệ lọt qua sàng được nêu trong Chú giải 3 của Chương này.', en: 'At the same time, all cereal groats and meal of heading 11.03 must fulfil the relevant criterion as to passage through a sieve laid down in Chapter Note 3.' },
      { type: 'list', vi: '(2) Những sản phẩm cũng được thu từ các sản phẩm ngũ cốc của Chương 10 đã qua công đoạn chế biến được nêu trong các nhóm khác nhau của Chương này, như ủ malt hoặc chiết xuất tinh bột hoặc gluten lúa mì.', en: '(2) Products also obtained from the cereals of Chapter 10 by submitting them to the processes provided for in the various headings of the Chapter, such as malting or the extraction of starch or wheat gluten.' },
      { type: 'list', vi: '(3) Những sản phẩm thu được từ nguyên liệu thô thuộc các Chương khác (rau đậu khô, khoai tây, quả...) được chế biến theo các công đoạn giống như được nêu trong đoạn (1) và đoạn (2) ở trên.', en: '(3) Products obtained by submitting raw materials of other Chapters (dried leguminous vegetables, potatoes, fruit, etc.) to processes similar to those indicated in paragraph (1) or (2) above.' },
      { type: 'paragraph', vi: 'Ngoài các loại khác, Chương này không bao gồm:', en: 'This Chapter excludes , inter alia :' },
      { type: 'list', vi: '(a) Malt đã rang và được dùng làm sản phẩm thay thế cà phê ( nhóm 09.01 hoặc 21.01 ).', en: '(a) Roasted malt put up as coffee substitutes ( heading 09.01 or 21.01 ).' },
      { type: 'list', vi: '(b) Vỏ ngũ cốc ( nhóm 12.13 ).', en: '(b) Cereal husks ( heading 12.13 ).' },
      { type: 'list', vi: '(c) Bột, bột mịn, bột thô hoặc tinh bột, đã chế biến thuộc nhóm 19.01.', en: '(c) Prepared flours, groats, meals or starches of heading 19.01 .' },
      { type: 'list', vi: '(d) Tinh bột sắn ( nhóm 19.03 ).', en: '(d) Tapioca ( heading 19.03 ).' },
      { type: 'list', vi: '(e) Bỏng gạo, bỏng ngô dạng mảnh và các sản phẩm tương tự, thu được từ quá trình rang sấy hoặc rang và lúa mì sấy khô đóng bánh ( nhóm 19.04 ).', en: '(e) Puffed rice, corn flakes and the like, obtained by swelling or roasting, and bulgur wheat in the form of worked grains ( heading 19.04 ).' },
      { type: 'list', vi: '(f) Rau đã được chế biến hoặc bảo quản thuộc các nhóm 20.01, 20.04 và 20.05 .', en: '(f) Vegetables, prepared or preserved, of headings 20.01, 20.04 and 20.05 .' },
      { type: 'list', vi: '(g) Phế liệu thu được từ quá trình sàng sẩy, xay xát hoặc sau những công đoạn chế biến ngũ cốc hay rau đậu khác ( nhóm 23.02 ).', en: '(g) Residues derived from the sifting, milling or other working of cereals or of leguminous plants ( heading 23.02 ).' },
      { type: 'list', vi: '(h) Dược phẩm ( Chương 30 ).', en: '(h) Pharmaceutical products ( Chapter 30 ).' },
      { type: 'list', vi: '(ij) Các sản phẩm của Chương 33 (xem Chú giải 3 và 4 của Chương 33).', en: '(ij) Products of Chapter 33 (see Notes 3 and 4 to Chapter 33).' },

      { type: 'heading', vi: '11.01 - Bột mì hoặc bột meslin.', en: '11.01 - Wheat or meslin flour.' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm bột mì hoặc bột meslin (nghĩa là những sản phẩm dạng bột thu được từ quá trình xay xát các loại ngũ cốc thuộc nhóm 10.01 ) đáp ứng đầy đủ các tiêu chí hàm lượng tinh bột và hàm lượng tro được quy định trong đoạn (A) của Chú giải 2 (xem Chú giải Tổng quát) và phù hợp với tỷ lệ lọt qua sàng như quy định tại đoạn (B) của Chú giải 2 của Chương.', 
        en: 'This heading covers wheat or meslin flour (i.e., the pulverised products obtained by milling the cereals of heading 10.01) which fulfil the requirements as to starch content and ash content set out in paragraph (A) of Chapter Note 2 (see General Explanatory Note) and comply with the criterion of passage through a standard sieve as required by paragraph (B) of that Note.' 
      },
      { type: 'paragraph', vi: 'Các loại bột thuộc nhóm này có thể được nâng cao chất lượng tốt hơn khi được thêm một lượng rất nhỏ khoáng phốt phát, chất chống oxy hoá, chất tạo nhũ, vitamin hoặc bột nở đã chế biến (bột ủ men).', en: 'Flours of this heading may be improved by the addition of very small quantities of mineral phosphates, anti-oxidants, emulsifiers, vitamins or prepared baking powders (self-raising flour).' },
      { type: 'paragraph', vi: 'Bột mì có thể được làm giàu hơn bằng cách cho thêm chất gluten, với hàm lượng không quá 10%.', en: 'Wheat flour may be further enriched by an addition of gluten, generally not exceeding 10 %.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các "loại bột nở", bột được xử lý nhiệt để nấu thành keo.', en: 'The heading also covers “ swelling " (pregelatinised) flours which have been heat treated to pregelatinise the starch.' },
      { type: 'paragraph', vi: 'Loại bột này được sử dụng để sản xuất các chế phẩm thuộc nhóm 19.01, chất phụ gia vào bánh hoặc thức ăn chăn nuôi hoặc trong một số ngành công nghiệp như công nghiệp dệt may, giấy hoặc luyện kim (dùng làm nguyên liệu để sản xuất các chất gắn lõi đúc).', en: 'They are used for making preparations of heading 19.01, bakery improvers or animal feeds or in certain industries such as the textile or paper industries or in metallurgy (for the preparation of foundry core binders).' },
      { type: 'paragraph', vi: 'Các loại bột qua những công đoạn chế biến thêm hoặc có pha thêm một số chất dùng để làm chế phẩm thực phẩm bị loại trừ (thường thuộc nhóm 19.01 ).', en: 'Flours which have been further processed or had other substances added with a view to their use as food preparations are excluded (generally heading 19.01 ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng loại trừ bột trộn với cacao ( nhóm 18.06 nếu chứa hàm lượng cacao từ 40% trọng lượng đã khử chất béo trở lên, hoặc nếu dưới 40% thì thuộc nhóm 19.01 ).', en: 'The heading also excludes flours mixed with cocoa ( heading 18.06 if they contain 40 % or more by weight of cocoa calculated on a totally defatted basis, or heading 19.01 if less).' },

      { type: 'heading', vi: '11.02 - Bột ngũ cốc, trừ bột mì hoặc bột meslin.', en: '11.02 - Cereal flours other than of wheat or meslin.' },
      { type: 'list', vi: '1102.20 - Bột ngô', en: '1102.20 - Maize (corn) flour' },
      { type: 'list', vi: '1102.90 - Loại khác', en: '1102.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm bột (nghĩa là bột có được từ quá trình xay xát các loại ngũ cốc thuộc Chương 10) trừ bột mì hoặc bột meslin.', en: 'This heading covers flours (i.e., the pulverised products obtained by milling the cereals of Chapter 10) other than flours of wheat or meslin.' },
      { 
        type: 'paragraph', 
        vi: 'Các sản phẩm thu được từ quá trình xay xát của lúa mạch đen, lúa đại mạch, yến mạch, ngô (kể cả ngô còn nguyên bắp, vẫn còn hoặc không còn vỏ), lúa miến, gạo hoặc kiều mạch được phân loại vào nhóm này như các loại bột nếu chúng đáp ứng đầy đủ các tiêu chí về hàm lượng tinh bột và hàm lượng tro được quy định trong đoạn (A) của Chú giải 2 (xem Chú giải tổng quát) và phù hợp với tỷ lệ lọt qua sàng như quy định tại đoạn (B) của Chú giải 2 của Chương.', 
        en: 'Products of the milling of rye, barley, oats, maize (corn) (including whole cobs ground with or without their husks) grain sorghum, rice or buckwheat are classified in this heading as flours if they fulfil the requirements as to starch content and ash content set out in paragraph (A) of Chapter Note 2 (see General Explanatory Note) and comply with the criterion of passage through a standard sieve as required by paragraph (B) of that Note.' 
      },
      { type: 'paragraph', vi: 'Các loại bột thuộc nhóm này có thể được cải thiện tốt hơn khi được thêm một lượng rất nhỏ khoáng phosphate, chất chống oxy hoá, chất tạo nhũ, vitamin hoặc bột nở đã chế biến (bột ủ men).', en: 'Flours of this heading may be improved by the addition of very small quantities of mineral phosphates, anti-oxidants, emulsifiers, vitamins or prepared baking powders (self-raising flour).' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các loại bột "trương nở" (đã được hồ hóa sơ bộ) đã được xử lý nhiệt để hồ hóa sơ bộ tinh bột.', en: 'The heading also covers “ swelling ” (pregelatinised) flours which have been heat treated to pregelatinise the starch.' },
      { type: 'paragraph', vi: 'Loại bột này được sử dụng để sản xuất các chế phẩm thuộc nhóm 19.01, chất phụ gia vào bánh hoặc thức ăn cho gia súc hoặc trong một số ngành công nghiệp như công nghiệp dệt may, giấy hoặc luyện kim (dùng làm nguyên liệu để sản xuất các chất gắn lõi đúc).', en: 'They are used for making preparations of heading 19.01, bakery improvers or animal feeds or in certain industries such as the textile or paper industries or in metallurgy (for the preparation of foundry core binders).' },
      { type: 'paragraph', vi: 'Các loại bột đã qua các công đoạn chế biến thêm hoặc có pha thêm một số chất dùng làm chế phẩm thực phẩm bị loại trừ (thường được phân loại vào nhóm 19.01 ).', en: 'Flours which have been further processed or had other substances added with a view to their use as food preparations are excluded (generally heading 19.01 ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng loại trừ bột trộn với cacao ( nhóm 18.06 nếu chứa hàm lượng cacao từ 40% trọng lượng đã khử chất béo trở lên, hoặc nếu dưới 40% thì thuộc nhóm 19.01 ).', en: 'The heading also excludes flours mixed with cocoa ( heading 18.06 if they contain 40 % or more by weight of cocoa calculated on a totally defatted basis, or heading 19.01 if less).' },

      { type: 'heading', vi: '11.03 - Ngũ cốc dạng tấm, dạng bột thô và viên.', en: '11.03 - Cereal groats, meal and pellets.' },
      { type: 'paragraph', vi: '- Dạng tấm và bột thô:', en: '- Groats and meal :' },
      { type: 'list', vi: '1103.11 - - Của lúa mì', en: '1103.11 - - Of wheat' },
      { type: 'list', vi: '1103.13 - - Của ngô', en: '1103.13 - - Of maize (corn)' },
      { type: 'list', vi: '1103.19 - - Của ngũ cốc khác', en: '1103.19 - - Of other cereals' },
      { type: 'list', vi: '1103.20 - Dạng viên', en: '1103.20 - Pellets' },
      { 
        type: 'paragraph', 
        vi: 'Ngũ cốc dạng tấm và bột thô thuộc nhóm này là các sản phẩm, thu được từ các mảnh vỡ của các hạt ngũ cốc (bao gồm cả ngô nguyên bắp vẫn còn hoặc không có lá bao), mà, trong trường hợp thích hợp, đáp ứng đầy đủ các tiêu chí về hàm lượng tinh bột và hàm lượng tro theo quy định trong Chú giải 2 (A) và trong tất cả các trường hợp đáp ứng những tiêu chí liên quan về tỉ lệ lọt qua sàng theo quy định trong Chú giải 3 của Chương này.', 
        en: 'The cereal groats and meal of this heading are products, obtained by the fragmentation of cereal grains (including whole maize (corn) cobs ground with or without their husks), which, where appropriate, fulfil the requirements as to starch and ash content laid down in Chapter Note 2 (A) and which in all cases comply with the relevant criterion as to passage through a sieve laid down in Chapter Note 3.' 
      },
      { type: 'paragraph', vi: 'Về việc phân biệt với các loại bột của các nhóm 11.01 hoặc 11.02, ngũ cốc dạng tấm và bột thô thuộc nhóm này và các sản phẩm của nhóm 11.04, xem phần Chú giải tổng quát của Chương này (Mục (1), đoạn thứ hai).', en: 'As regards the distinction to be made between the flours of heading 11.01 or 11.02, the groats and meal of this heading and the products of heading 11.04, see the General Explanatory Note to the Chapter (Item (1), second paragraph).' },
      { type: 'paragraph', vi: 'Ngũ cốc dạng tấm là những mảnh vỡ nhỏ hoặc lõi chứa bột của hạt ngũ cốc từ quá trình xay thô ngũ cốc.', en: 'Cereal groats are small fragments or floury kernels obtained by the rough grinding of grains.' },
      { type: 'paragraph', vi: 'Bột thô là sản phẩm có hình hạt hơn so với bột mịn và được tạo ra từ quá trình sàng đầu tiên sau xay xát, hoặc nghiền lại và sàng lại tấm từ quá trình xay xát đầu tiên.', en: 'Meal is a more granular product than flour and is obtained either from the first sifting after the initial milling operation, or by re-grinding and re-sifting the groats resulting from that initial milling.' },
      { type: 'paragraph', vi: 'Bột lúa mì thô Durum, hoặc semolina, là nguyên liệu thô chính trong việc sản xuất mỳ macaroni, mỳ spaghetti hoặc các sản phẩm tương tự.', en: 'Durum wheat meal, or semolina, is the principal raw material in the manufacture of macaroni, spaghetti or the like.' },
      { type: 'paragraph', vi: 'Semolina cũng được sử dụng trực tiếp làm thực phẩm (ví dụ, làm bánh puddingsemolina).', en: 'Semolina is also used directly as a foodstuff (e.g., in making semolina puddings).' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm các loại bột thô (ví dụ, bột ngô) được hồ hóa sơ bộ bằng cách xử lý nhiệt, được sử dụng, ví dụ, làm chất phụ gia trong sản xuất bia.', en: 'This heading also includes meal (e.g., of maize (corn)) pregelatinised by heat treatment, used, for instance, as an additive in brewing.' },
      { type: 'paragraph', vi: 'Viên là những sản phẩm thu được từ quá trình xay xát các loại ngũ cốc thuộc Chương này được tích tụ bằng cách nén trực tiếp bằng áp lực hay bổ sung chất kết dính với tỉ lệ không quá 3% trọng lượng (xem Chú giải 1 của Phần II).', en: 'Pellets are products from the milling of cereals of this Chapter which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight (see Note 1 to Section II).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm những phế liệu được viên lại từ quá trình xay xát ngũ cốc ( Chương 23 ).', en: 'The heading does not cover pelletised residues derived from the milling of cereals ( Chapter 23 ).' },

      { type: 'heading', vi: '11.04 - Hạt ngũ cốc được chế biến theo cách khác (ví dụ, xát vỏ, xay, vỡ mảnh, nghiền vụn, cắt lát hoặc nghiền thô), trừ gạo thuộc nhóm 10.06; mầm ngũ cốc, nguyên dạng, xay, vỡ mảnh hoặc nghiền.', en: '11.04 - Cereal grains otherwise worked (for example, hulled, rolled, flaked, pearled, sliced or kibbled), except rice of heading 10.06; germ of cereals, whole, rolled, flaked or ground.' },
      { type: 'paragraph', vi: '- Ngũ cốc xay hoặc vỡ mảnh:', en: '- Rolled or flaked grains:' },
      { type: 'list', vi: '1104.12 - - Của yến mạch', en: '1104.12 - - Of oats' },
      { type: 'list', vi: '1104.19 - - Của ngũ cốc khác', en: '1104.19 - - Of other cereals' },
      { type: 'paragraph', vi: '- Ngũ cốc đã chế biến cách khác (ví dụ, xát vỏ, nghiền vụn, cắt lát hoặc nghiền thô):', en: '- Other worked grains (for example, hulled, pearled, sliced or kibbled):' },
      { type: 'list', vi: '1104.22 - - Của yến mạch', en: '1104.22 - - Of oats' },
      { type: 'list', vi: '1104.23 - - Của ngô', en: '1104.23 - - Of maize (corn)' },
      { type: 'list', vi: '1104.29 - - Của ngũ cốc khác', en: '1104.29 - - Of other cereals' },
      { type: 'list', vi: '1104.30 - Mầm ngũ cốc, nguyên dạng, xay, vỡ mảnh hoặc nghiền', en: '1104.30 - Germ of cereals, whole, rolled, flaked or ground' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các sản phẩm ngũ cốc đã quá trình xay xát nhưng chưa xác định mục đích sử dụng, trừ bột ( nhóm 11.01 và 11.02 ), ngũ cốc dạng tấm, bột thô và viên ( nhóm 11.03 ) và phế liệu ( nhóm 23.02 ).', en: 'This heading covers all unprepared milling products of cereals, except flours ( headings 11.01 and 11.02 ), groats, meal and pellets ( heading 11.03 )., and residues ( heading 23.02 ).' },
      { type: 'paragraph', vi: 'Về việc phân biệt các sản phẩm của nhóm này với các sản phẩm được phân loại trong các nhóm vừa loại trừ nêu trên, xem Mục (1) Chú giải tổng quát của Chương này.', en: 'As regards the distinction to be made between the products of this heading and the exceptions referred to, see Item (1) of the General Explanatory Note to the Chapter.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Ngũ cốc xay hoặc vỡ mảnh (thí dụ, lúa đại mạch hoặc yến mạch), thu được từ quá trình nghiền hoặc cán hạt ngũ cốc nguyên dạng (đã hoặc chưa xay bỏ vỏ) hoặc các loại hạt ngũ cốc đã qua nghiền thô hoặc các sản phẩm được nêu trong Mục (2) và (3) dưới đây và nêu trong Mục (2) đến (5) của Chú giải nhóm 10.06.', en: '(1) Rolled or flaked grain (e.g., barley or oats), obtained by crushing or rolling the whole grain (whether or not dehulled) or kibbled grain or the products described in Items (2) and (3) below and in Items (2) to (5) of the Explanatory Note to heading 10.06.' },
      { type: 'paragraph', vi: 'Trong quá trình chế biến này, hạt ngũ cốc thông thường được hấp hoặc được nghiền trong các máy cán nóng.', en: 'In this process, the grain is usually steam-heated or rolled between heated rollers.' },
      { type: 'paragraph', vi: 'Các loại thực phẩm ăn sáng chế biến từ “Mảnh ngô” (conrn flakes) đã được nấu chín sẵn sàng cho sử dụng và vì vậy, cũng như các sản phẩm ngũ cốc được nấu chín tương tự, thuộc nhóm 19.04 .', en: 'Breakfast foods of the “corn flakes” type are cooked preparations ready for consumption and therefore fall, like similar cooked cereals, in heading 19.04 .' },
      { type: 'list', vi: '(2) Yến mạch, kiều mạch và kê đã được xay bỏ vỏ ngoài nhưng còn vỏ lụa.', en: '(2) Oats, buckwheat and millet from which the husk but not the pericarp has been removed.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm loại hạt yến mạch trong tình trạng tự nhiên không có vỏ trấu, miễn là chúng chưa qua bất kỳ quá trình chế biến nào trừ đập hoặc sàng sẩy ( nhóm 10.04 ).', en: 'However, the heading does not cover oats which in their natural state have no husk or hull, provided they have not undergone any process other than threshing or winnowing ( heading 10.04 ).' },
      { type: 'list', vi: '(3) Các hạt đã được xay xát hoặc chế biến cách khác để loại bỏ một phần hoặc toàn bộ vỏ ngoài và phần vỏ lụa (lớp vỏ mỏng nằm dưới vỏ).', en: '(3) Grain which has been hulled or otherwise worked to remove wholly or partly the pericarp (the skin beneath the husk).' },
      { type: 'paragraph', vi: 'Phần lõi bột khi đó có thể nhìn thấy được. Hạt thuộc các giống lúa đại mạch cũng được phân loại vào nhóm này nếu đã được xát hết phần vỏ bao. (Phần vỏ ngoài chỉ có thể bị loại bỏ bằng việc nghiền vì phần vỏ bao dính quá chặt vào phần lõi mà đập và sàng sẩy không tách ra được - xem Chú giải nhóm 10.03).', en: 'The floury kernel may then be visible. Grains of the bracteiferous varieties of barley are also classified in this heading if their husks (or hulls) have been removed. (The husks can be removed only by grinding since they adhere too firmly to the grain kernel to be separated by mere threshing or winnowing - see the Explanatory Note to heading 10.03).' },
      { type: 'list', vi: '(4) Hạt xát tròn (chủ yếu là của lúa đại mạch), tức là, loại hạt đã được xay và xát gần như hết vỏ lụa; hai đầu được làm khá tròn.', en: '(4) Pearled grains (principally barley), i.e., grain from which practically the whole pericarp has been removed; these are more rounded at the ends.' },
      { type: 'list', vi: '(5) Hạt nghiền thô , tức là, loại hạt (xay hoặc chưa xay bỏ vỏ) được cắt hoặc nghiền thành mảnh vụn nhưng khác dạng tấm ở chỗ các mảnh vụn này thô hơn và kém đều hơn.', en: '(5) Kibbled grain , i.e., grain (whether or not dehulled) cut or broken into fragments and differing from groats in that the fragments are coarser and more irregular.' },
      { type: 'list', vi: '(6) Mầm ngũ cốc , được tách khỏi hạt từ bước đầu tiên của quá trình xay xát, mầm có thể được tách nguyên hay hơi dát mỏng (bị cán).', en: '(6) Germ of cereals, separated from the grain in the first stage of milling, which leaves the germ whole or slightly flattened (rolled).' },
      { type: 'paragraph', vi: 'Để nâng cao chất lượng bảo quản, mầm có thể được rút bớt dầu hoặc qua xử lý nhiệt.', en: 'In order to improve its keeping qualities, the germ may be partly defatted or heat treated.' },
      { type: 'paragraph', vi: 'Dựa vào những mục đích sử dụng khác nhau, mầm có thể được làm vỡ mảnh hoặc nghiền (nghiền thô hoặc nghiền vụn) và được thêm vitamin, ví dụ, để bù vào lượng đã mất trong quá trình sơ chế.', en: 'Depending on the use to which it is to be put, the germ is flaked or ground (coarsely or as flour) and vitamins may be added, e.g., to compensate for losses during the treatment.' },
      { type: 'paragraph', vi: 'Những mầm nguyên dạng hoặc bị cán thường được sử dụng để chiết xuất dầu.', en: 'Whole or rolled germ is generally used lor the extraction of oil.' },
      { type: 'paragraph', vi: 'Loại mầm nghiền hoặc vỡ mảnh thường được sử dụng chế biến món ăn (bánh bích quy hoặc các loại bánh khác, sản phẩm ăn kiêng), thức ăn chăn nuôi (làm thức ăn bổ sung) hoặc trong sản xuất dược phẩm.', en: 'Flaked or ground germ is used for foodstuffs (biscuits or other bakers’ wares, dietetic preparations), animal feeds (manufacture of feed supplements) or in the manufacture of pharmaceutical preparations.' },
      { type: 'paragraph', vi: 'Phần cặn còn lại sau khi chiết xuất dầu từ mầm ngũ cốc được phân loại vào nhóm 23.06 .', en: 'The residues resulting from the extraction of oil from cereal germ are to be classified in heading 23.06.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Gạo lứt, gạo đã xát toàn bộ hay xát sơ bộ, đã bóc vỏ, đã hoặc chưa được đánh bóng, hồ (glazed), hoặc gạo đồ, và gạo tấm ( nhóm 10.06 ).', en: '(a) Husked, semi-milled or wholly milled rice, whether or not polished, glazed, or parboiled, and broken rice ( heading 10.06 ).' },
      { type: 'list', vi: '(b) Hạt diêm mạch (quinoa) đã được loại bỏ toàn bộ hoặc một phần vỏ lụa để tách saponin, nhưng không trải qua bất kỳ quá trình chế biến nào khác (nhóm 10.08) .', en: '(b) Quinoa from which the pericarp has been wholly or partly removed in order to separate the saponin, but which has not undergone any other processes( heading 10.08 )' },
      { type: 'list', vi: '(c) Lúa mì sấy khô đóng bánh ở dạng hạt đã được chế biến ( nhóm 19.04 ).', en: '(c) Bulgur wheat in the form of worked grains ( heading 19.04 ).' },

      { type: 'heading', vi: '11.05 - Bột, bột thô, bột mịn, mảnh lát, hạt và viên từ khoai tây.', en: '11.05 - Flour, meal, powder, flakes, granules and pellets of potatoes.' },
      { type: 'list', vi: '1105.10 - Bột, bột thô và bột mịn', en: '1105.10 - Flour, meal and powder' },
      { type: 'list', vi: '1105.20 - Dạng mảnh lát, hạt và viên', en: '1105.20 - Flakes, granules and pellets' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm khoai tây khô dưới dạng bột, bột thô, bột mịn, dạng mảnh lát, hạt hoặc viên.', en: 'This heading applies to dried potatoes presented as flour, meal, powder, flakes, granules or pellets.' },
      { type: 'paragraph', vi: 'Bột thô, bột mịn, dạng mảnh lát và hạt của nhóm này thu được từ khoai tây tươi hấp chín và được nghiền nhừ rồi sau đó làm khô phần nghiền nhừ đó thành bột, bột thô, bột mịn hoặc hạt hoặc thành tấm mỏng được cắt thành các mảnh lát nhỏ.', en: 'The flour, powder, flakes and granules of the heading may be obtained by steam-cooking and mashing fresh potatoes and subsequent drying of the resulting mash either to a flour, powder or granules or to thin sheets which are cut into small flakes.' },
      { type: 'paragraph', vi: 'Viên thuộc nhóm này thường thu được từ quá trình ép nén bột, bột thô, bột mịn hoặc các mẩu vụn của khoai tây.', en: 'The pellets of the heading are usually obtained by agglomeration of flour, meal, powder or pieces of potato.' },
      { type: 'paragraph', vi: 'Các sản phẩm thuộc nhóm này có thể được cải thiện bằng cách cho thêm một lượng rất nhỏ chất chống oxy hoá, chất nhũ hoá hay vitamin.', en: 'Products of this heading may be improved by the addition of very small amounts of anti- oxidants, emulsifiers or vitamins.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm các sản phẩm được cho thêm một số chất thay đổi đặc tính của chế phẩm khoai tây.', en: 'However, the heading excludes products to which other substances have been added so that they take on the characteristics of potato preparations.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Khoai tây mới chỉ được làm khô đơn giản, được phơi khô hoặc tách nước, mà không được chế biến thêm ( nhóm 07.12 ).', en: '(a) Potatoes which have been simply dried, dehydrated or evaporated, without further processing ( heading 07.12 ).' },
      { type: 'list', vi: '(b) Tinh bột khoai tây ( nhóm 11.08 ).', en: '(b) Potato starch ( heading 11.08 ).' },
      { type: 'list', vi: '(c) Những sản phẩm thay thế tinh bột sắn được làm từ tinh bột khoai tây ( nhóm 19.03 ).', en: '(c) Tapioca substitutes prepared from potato starch ( heading 19.03 ).' },

      { type: 'heading', vi: '11.06 - Bột, bột thô và bột mịn, chế biến từ các loại rau đậu khô thuộc nhóm 07.13, từ cọ sago hoặc từ rễ, củ hoặc thân củ thuộc nhóm 07.14 hoặc từ các sản phẩm thuộc Chương 8.', en: '11.06 - Flour, meal and powder of the dried leguminous vegetables of heading 07.13 , of sago or of roots or tubers of heading 07.14 or of the products of Chapter 8.' },
      { type: 'list', vi: '1106.10 - Từ các loại rau đậu khô thuộc nhóm 07.13', en: '1106.10 - Of the dried leguminous vegetables of heading 07.13' },
      { type: 'list', vi: '1106.20 - Từ cọ sago hoặc từ rễ hoặc thân củ thuộc nhóm 07.14', en: '1106.20 - Of sago or of roots or tubers of heading 07.14' },
      { type: 'list', vi: '1106.30 - Từ các sản phẩm thuộc Chương 8', en: '1106.30 - Of the products of Chapter 8' },
      { type: 'paragraph', vi: '(A) Bột, bột thô và bột mịn của các loại rau đậu khô thuộc nhóm 07.13 .', en: '(A) Flour, meal and powder of the dried leguminous vegetables of heading 07.13.' },
      { type: 'paragraph', vi: 'Nhóm này gồm bột, bột thô và bột mịn được làm từ đậu Hà lan, đậu hạt hoặc đậu lăng; chủ yếu được dùng vào việc nấu súp hoặc quấy bột.', en: 'This heading includes the flour, meal and powder made from peas, beans or lentils; they are mainly used for prepared soups or purees.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Bột đậu tương chưa được tách dầu ( nhóm 12.08 ).', en: '(a) Non-defatted soya flour ( heading 12.08 ).' },
      { type: 'list', vi: '(b) Bột quả minh quyết ( nhóm 12.12 ).', en: '(b) Locust bean flour ( heading 12.12 ).' },
      { type: 'list', vi: '(c) Súp và nước xuýt (ngay cả ở dạng lỏng, rắn hoặc bột), có thành phần cơ bản là bột hoặc bột thô của rau ( nhóm 21.04 ).', en: '(c) Soups and broths (whether in liquid, solid or powder form), with a basis of vegetable flours or meals ( heading 21.04 ).' },
      { type: 'paragraph', vi: '(B) Bột, bột thô và bột mịn của cọ sago hoặc từ rễ, củ hoặc thân củ thuộc nhóm 07.14.', en: '(B) Flour, meal and powder of sago or of roots or tubers of heading 07.14.' },
      { type: 'paragraph', vi: 'Các sản phẩm này thu được từ việc nạo hoặc xay lõi cọ sago hoặc rễ của củ sắn khô... Một số trong những sản phẩm này thường được xử lý bằng nhiệt trong quá trình chế biến để loại bỏ các độc tố; quá trình này có thể làm hồ hoá sơ bộ tinh bột.', en: 'These products are obtained by the simple grinding or grating of the pith of the sago palm or of the dried roots of the manioc, etc. Some of these products are often subjected to heat treatment in the course of manufacture to eliminate toxic substances; this treatment may entail pregelatinisation of the starch.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm loại tinh bột thu được từ các nguồn này (cần lưu ý rằng tinh bột từ cọ sago đôi khi được gọi là “tinh bột sago”). Những loại tinh bột này được phân loại vào nhóm 11.08 và có thể phân biệt với loại bột thuộc nhóm này, vì bột, khác tinh bột, không bị vụn khi ta lấy 2 ngón tay bóp.', en: 'The heading does not cover starches obtained from these sources (it should be noted that the starch obtained from sago is sometimes called “ sago flour "). These starches fall in heading 11.08 and can be distinguished from the flours of this heading, because flours, unlike starches, do not crackle when rubbed between the fingers.' },
      { type: 'paragraph', vi: 'Các loại bột, bột thô, bột mịn của cọ sago hoặc của các loại rễ, củ hoặc thân củ thuộc nhóm 07.14 được ép dưới dạng viên cũng không được phân loại vào nhóm này ( nhóm 07.14 ).', en: 'Pelletised flour, meal and powder of sago or of roots or tubers of heading 07.14 are also excluded ( heading 07.14 ).' },
      { type: 'paragraph', vi: '(C) Bột, bột thô và bột mịn của các sản phẩm thuộc Chương 8 .', en: '(C) Flour, meal and powder of the products of Chapter 8.' },
      { type: 'paragraph', vi: 'Các loại quả hoặc quả hạch (nut) chủ yếu thuộc Chương 8 thường được làm thành bột, bột thô hoặc bột mịn là hạt dẻ, hạnh nhân, chà là, chuối, dừa và me. Nhóm này cũng bao gồm bột, bột thô và bột mịn của các loại vỏ quả.', en: 'The principal fruits or nuts of Chapter 8 which are made into flours, meals or powders are chestnuts, almonds, dates, bananas, coconuts and tamarinds. The heading also includes flour, meal and powder of peel of fruits.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm loại bột me được đóng gói để bán lẻ dùng để phòng hoặc chữa bệnh ( nhóm 30.04 ).', en: 'However, the heading does not cover tamarind powder in packings for retail sale for prophylactic or therapeutic purposes ( heading 30.04 ).' },
      { type: 'paragraph', vi: 'Những sản phẩm thuộc nhóm này có thể được cải thiện nếu được thêm một lượng rất nhỏ chất chống oxy hoá hoặc chất nhũ hoá.', en: 'Products of this heading may be improved by the addition of very small amounts of anti-oxidants or emulsifiers.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Lõi cây cọ sago ( nhóm 07.14 ).', en: '(a) Sago pith ( heading 07.14 ).' },
      { type: 'list', vi: '(b) Thực phẩm chế biến sẵn được biết đến như bột sắn ( nhóm 19.03 ).', en: '(b) Prepared foodstuffs known as tapioca ( heading 19.03 ).' },

      { type: 'heading', vi: '11.07 - Malt, rang hoặc chưa rang.', en: '11.07 - Malt, whether or not roasted.' },
      { type: 'list', vi: '1107.10 - Chưa rang', en: '1107.10 - Not roasted' },
      { type: 'list', vi: '1107.20 - Đã rang', en: '1107.20 - Roasted' },
      { type: 'paragraph', vi: 'Malt là hạt nảy mầm (chủ yếu từ lúa đại mạch), sau đó thường được làm khô trong các lò khí nóng (lò sấy malt).', en: 'Malt is germinated grain (most frequently barley), which is usually subsequently dried in hot-air kilns (malt-kilns).' },
      { type: 'paragraph', vi: 'Malt có những vệt nhăn mờ chạy từ đầu này đến đầu kia hạt và có màu trắng bên trong và vàng nâu bên ngoài. Malt để lại các vạch dấu hiệu như phấn và, không giống hạt chưa là malt, malt thường nổi trên bề mặt nước và cũng bở. Malt có mùi đặc trưng của hạt được nấu chín và có vị ngọt nhẹ.', en: 'It has faint wrinkles running from end to end and is brownish-yellow outside and white inside. It leaves tracing marks like chalk and, unlike non-malted grain, it usually floats on water and is also friable. Malt has a characteristic odour of cooked grain and a faintly sweetened flavour.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm malt nguyên dạng, nghiền vụn và bột.', en: 'This heading covers whole malt, ground malt and malt flour.' },
      { type: 'paragraph', vi: 'Nhóm cũng bao gồm loại malt đã rang (ví dụ, được sử dụng tạo màu cho bia), tuy nhiên nhóm này không bao gồm những sản phẩm đã qua những công đoạn chế biến thêm, như chiết xuất malt và chế phẩm thực phẩm của chiết xuất malt thuộc nhóm 19.01 và cả các loại malt đã rang được dùng làm chất thay thế cà phê ( nhóm 21.01 ).', en: 'It also covers roasted malt (e.g., for colouring beers), but it excludes products which have undergone further processing, such as malt extract and food preparations of malt extract of heading 19.01 and roasted malt put up as coffee substitutes ( heading 21.01 ).' },

      { type: 'heading', vi: '11.08 - Tinh bột; inulin.', en: '11.08 - Starches; inulin.' },
      { type: 'paragraph', vi: '- Tinh bột:', en: '- Starches :' },
      { type: 'list', vi: '1108.11 - - Tinh bột mì', en: '1108.11 - - Wheat starch' },
      { type: 'list', vi: '1108.12 - - Tinh bột ngô', en: '1108.12 - - Maize (corn) starch' },
      { type: 'list', vi: '1108.13 - - Tinh bột khoai tây', en: '1108.13 - - Potato starch' },
      { type: 'list', vi: '1108.14 - - Tinh bột sắn', en: '1108.14 - - Manioc (cassava) starch' },
      { type: 'list', vi: '1108.19 - - Tinh bột khác:', en: '1108.19 - - Other starches' },
      { type: 'list', vi: '1108.20 - Inulin', en: '1108.20 - Inulin' },
      { type: 'paragraph', vi: 'Tinh bột , về tính chất hóa học là các carbohydrate, có trong các tế bào của các sản phẩm rau. Nguồn quan trọng chủ yếu của tinh bột là các loại hạt ngũ cốc (ví dụ như ngô, lúa mỳ và gạo), một số loại địa y nhất định, một số loại thân rễ củ và rễ củ (khoai tây, sắn, dong...) và lõi cọ sago.', en: 'Starches , which chemically are carbohydrates, are contained in the cells of many vegetable products. The most important sources of starch are the cereal grains (e.g., maize (corn), wheat and rice), certain lichens, certain tubers and roots (potato, manioc, arrowroot, etc.) and the pith of the sago palm.' },
      { type: 'paragraph', vi: 'Tinh bột là bột trắng không mùi gồm các hạt nguyên chất dễ vỡ vụn khi lấy ngón tay bóp. Cùng với iốt tinh bột thường có màu xanh da trời sẫm ( trừ các loại tinh bột amylopectin, có màu nâu đỏ). Quan sát dưới kính hiển vi dưới ánh sáng phân cực, các hạt li ti hiện ra dưới dạng dấu thập đen rất đặc trưng. Không tan trong nước lạnh, nhưng, nếu nước nóng trên nhiệt độ hồ hoá (60°C với hầu hết các loại tinh bột), tinh bột bị phá vỡ và trở thành bột nhão.', en: 'Starches are white odourless powders composed of fine grains which crackle when rubbed between the lingers. They generally give an intense dark blue colour with iodine ( except amylopectin starches, where the colour is reddish brown). Viewed under the microscope in polarised light the grains display characteristic dark polarisation crosses. They are insoluble in cold water, but, if heated in water to above their gelatinisation temperature (about 60 °C for most starches), the grains break up and a starch paste is formed.' },
      { type: 'paragraph', vi: 'Tinh bột thương phẩm gồm nhiều loại được phân loại ở các nhóm khác, như tinh bột biến tính, tinh bột sấy hoà tan, dextrin, malto-dextrin, dextrose và glucoza. Tinh bột cũng được sử dụng rộng rãi trong công nghiệp, đặc biệt là công nghiệp thực phẩm, giấy, chuyển đổi giấy và dệt.', en: 'Starches are commercially processed to give a wide range of products classified under other headings, e.g., modified starch, roasted soluble starch, dextrin, malto-dextrin, dextrose, glucose. They are also used as such in a wide variety of industries, especially the food, paper, paper converting and textile industries.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm cả inulin ; nó có thành phần hoá học tương tự với tinh bột tuy nhiên khi cho vào iốt không đổi màu thành xanhmà có màu nâu vàng nhạt. Inulin được chiết xuất từ a-ti-sô Jerusalem, củ thược dược và rễ rau diếp xoăn. Khi thuỷ phân lâu trong nước sôi sẽ tạo thành fructose (laevulose).', en: 'The heading also includes inulin ; this is chemically similar to starch but gives a light yellowish-brown coloration with iodine instead of blue. It is extracted from Jerusalem artichokes, dahlia roots and chicory roots. When hydroliscd by long boiling in water it forms fructose (laevulose).' },
      { type: 'paragraph', vi: 'Ngoài các loại khác , nhóm này không bao gồm :', en: 'This heading excludes , inter alia :' },
      { type: 'list', vi: '(a) Chế phẩm tinh bột thuộc nhóm 19.01 .', en: '(a) Starch preparations of heading 19.01 .' },
      { type: 'list', vi: '(b) Tinh bột sắn và các sản phẩm thay thế chế biến từ tinh bột (xem Chú giải nhóm 19.03 ).', en: '(b) Tapioca and substitutes therefore prepared from starches (sec the Explanatory Note to heading 19.03 ).' },
      { type: 'list', vi: '(c) Tinh bột sử dụng trong sản xuất nước hoa và các chế phẩm vệ sinh (toilet preparation) ( Chương 33 ).', en: '(c) Starches put up as perfumery or toilet preparations ( Chapter 33 ).' },
      { type: 'list', vi: '(d) Các loại dextrin và tinh bột biến tính khác thuộc nhóm 35.05 .', en: '(d) Dextrins and other modified starches of heading 35.05 .' },
      { type: 'list', vi: '(e) Keo sản xuất từ tinh bột ( nhóm 35.05 hoặc 35.06 )', en: '(e) Glues based on starch ( heading 35.05 or 35.06 ).' },
      { type: 'list', vi: '(f) Nước bóng hoặc chất xử lý hoàn tất đã điều chế làm từ tinh bột ( nhóm 38.09 ).', en: '(f) Prepared glazings or dressings made from starch ( heading 38.09).' },
      { type: 'list', vi: '(g) Amylopectine và Amylo tách riêng thu được sau quá trình phân đoạn tinh bột ( nhóm 39.13 ).', en: '(g) Isolated amylopectin and isolated amylose obtained by the fractionation of starch ( heading 39.13 ).' },

      { type: 'heading', vi: '11.09 - Gluten lúa mì, đã hoặc chưa làm khô.', en: '11.09 - Wheat gluten, whether or not dried.' },
      { type: 'paragraph', vi: 'Gluten được chiết xuất từ bột mỳ bởi quá trình phân tách đơn giản trong nước từ các thành phần khác nhau (tinh bột...). Chất này hoặc ở dạng lỏng hoặc sệt màu hơi trắng (gluten "ẩm") hoặc có dạng bột màu kem (gluten khô).', en: 'Gluten is extracted from wheat flour by simple aqueous separation from the other constituents (starch, etc.). It comes in the form of a whitish viscous liquid or paste (“ moist ” gluten) or a cream-coloured powder (dry gluten).' },
      { type: 'paragraph', vi: 'Về cơ bản, chất này bao gồm một hỗn hợp các loại protein, mà những protein chính là gliadin và glutenin (chiếm từ 85 đến 95% của hỗn hợp). Sự hiện diện của hai loại protein này là đặc trưng của gluten lúa mì, khi trộn gluten với nước theo một tỷ lệ nhất định, nhờ có hai loại protein này mà gluten có tính đàn hồi và mềm dẻo.', en: 'It consists essentially of a mixture of various proteins, the main ones being gliadin and glutenin (which account for 85 to 95 % of the total). The presence of these two proteins is characteristic of wheat gluten, which owes to them its elasticity and plasticity when mixed with water in suitable proportions.' },
      { type: 'paragraph', vi: 'Gluten chủ yếu được sử dụng để làm giàu protein cho các loại bột dùng trong chế biến bánh mì hoặc bánh bích quy, macaroni hoặc các sản phẩm tương tự hoặc chế phẩm ăn kiêng. Chất này cũng được sử dụng như một chất kết dính trong một số chế phẩm thịt, trong sản xuất hồ dán hoặc các sản phẩm như gluten sulphate hoặc gluten phosphate, các protein thực vật thuỷ phân hoặc mỳ chính.', en: 'Gluten is used mainly to enrich in proteins flours used in making certain types of bread or biscuits, of macaroni or similar products or of dietetic preparations. It is also used as a binder in certain meat preparations, for the manufacture of certain glues or of products such as gluten sulphate or gluten phosphate, hydrolysed vegetable proteins or sodium glutamate.' },
      { type: 'paragraph', vi: 'Ngoài các loại khác , nhóm này không bao gồm :', en: 'The heading excludes , inter alia :' },
      { type: 'list', vi: '(a) Bột lúa mì được làm giàu bằng cách cho thêm gluten ( nhóm 11.01 ).', en: '(a) Wheat flour enriched by the addition of gluten ( heading 11.01 ).' },
      { type: 'list', vi: '(b) Các protein chiết xuất từ gluten lúa mì ( nhóm 35.04 ).', en: '(b) Proteins extracted from wheat gluten (generally heading 35.04 ).' },
      { type: 'list', vi: '(c) Gluten lúa mì chế biến dùng làm hồ dán hoặc nước bóng hoặc chất xử lý hoàn tất trong công nghiệp dệt ( nhóm 35.06 hoặc 38.09 ).', en: '(c) Wheat gluten prepared for use as a glue or as a glazing or dressing for the textile industry ( heading 35.06 or 38.09 ).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 12
  // ------------------------------------------------------------

  {
    chapterNumber: 12,
    titleVi: 'CHƯƠNG 12: HẠT DẦU VÀ QUẢ CÓ DẦU; CÁC LOẠI HẠT, HẠT GIỐNG VÀ QUẢ KHÁC; CÂY CÔNG NGHIỆP HOẶC CÂY DƯỢC LIỆU; RƠM, RẠ VÀ CỎ KHÔ',
    titleEn: 'CHAPTER 12: OIL SEEDS AND OLEAGINOUS FRUITS; MISCELLANEOUS GRAINS, SEEDS AND FRUIT; INDUSTRIAL OR MEDICINAL PLANTS; STRAW AND FODDER',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 12: Hạt dầu và quả có dầu; các loại hạt, hạt giống và quả khác; cây công nghiệp hoặc cây dược liệu; rơm, rạ và cỏ khô', en: 'Chapter 12: Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { 
        type: 'paragraph', 
        vi: '1. Không kể những đề cập khác , nhóm 12.07 áp dụng cho hạt và nhân hạt cọ, hạt bông, hạt thầu dầu, hạt vừng, hạt mù tạt, hạt rum, hạt thuốc phiện và hạt mỡ (hạt karite). Không áp dụng đối với các sản phẩm thuộc nhóm 08.01 hoặc 08.02 hoặc ôliu (Chương 7 hoặc Chương 20).', 
        en: '1. - Heading 12.07 applies, inter alia , to palm nuts and kernels, cotton seeds, castor oil seeds, sesamum seeds, mustard seeds, safflower seeds, poppy seeds and shea nuts (karite nuts). It does not apply to products of heading 08.01 or 08.02 or to olives (Chapter 7 or Chapter 20).' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Nhóm 12.08 không chỉ áp dụng cho tất cả bột mịn và bột thô chưa khử chất béo mà còn áp dụng cho bột mịn và bột thô đã được khử một phần hoặc toàn bộ chất béo và bột mịn và bột thô sau khi khử chất béo được bổ sung lại toàn phần hoặc một phần bằng dầu lấy từ chính các bột ấy. Tuy nhiên, nhóm này không áp dụng cho các loại phế liệu thuộc các nhóm 23.04 đến 23.06.', 
        en: '2. - Heading 12.08 applies not only to non-defatted flours and meals but also to flours and meals which have been partially defatted or defatted and wholly or partially refatted with their original oils. It does not, however, apply to residues of headings 23.04 to 23.06.' 
      },
      { 
        type: 'paragraph', 
        vi: '3. Theo mục đích của nhóm 12.09, hạt củ cải đường, hạt cây cỏ và hạt cây dạng cỏ khác, hạt cây hoa trang trí, hạt rau, hạt cây rừng, hạt cây ăn quả, hạt đậu tằm (trừ hạt cây thuộc loài Vicia faba) hoặc hạt đậu lupin được coi là "hạt để gieo trồng".', 
        en: '3. - For the purposes of heading 12.09, beet seeds, grass and other herbage seeds, seeds of ornamental flowers, vegetable seeds, seeds of forest trees, seeds of fruit trees, seeds of vetches (other than those of the species Vicia faba ) or of lupines are to be regarded as “ seeds of a kind used for sowing”.' 
      },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm 12.09 không áp dụng đối với những loại sau, cho dù dùng để gieo trồng:', en: 'Heading 12.09 does not, however, apply to the following even if for sowing:' },
      { type: 'list', vi: '(a) Các loại rau đậu hay ngô ngọt (Chương 7);', en: '(a) Leguminous vegetables or sweet corn (Chapter 7);' },
      { type: 'list', vi: '(b) Các loại gia vị hoặc các sản phẩm khác thuộc Chương 9;', en: '(b) Spices or other products of Chapter 9;' },
      { type: 'list', vi: '(c) Ngũ cốc (Chương 10); hoặc', en: '(c) Cereals (Chapter 10); or' },
      { type: 'list', vi: '(d) Các sản phẩm thuộc các nhóm từ 12.01 đến 12.07 hay 12.11.', en: '(d) Products of headings 12.01 to 12.07 or 12.11.' },
      { 
        type: 'paragraph', 
        vi: '4. Không kể những đề cập khác , nhóm 12.11 áp dụng với các loại cây hoặc các phần của các loại cây sau đây: húng quế, cây borage (cây lá nhám, hoa xanh), cây nhân sâm, cây bài hương, cây cam thảo, các loại cây bạc hà, cây hương thảo, cây cửu ly hương, cây xả thơm và cây ngải tây.', 
        en: '4. - Heading 12.11 applies, inter alia , to the following plants or parts thereof : basil, borage, ginseng, hyssop, liquorice, all species of mint, rosemary, me. sage and wormwood.' 
      },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm 12.11 không áp dụng đối với những loại sau:', en: 'Heading 12.11 does not, however, apply to :' },
      { type: 'list', vi: '(a) Dược phẩm thuộc Chương 30;', en: '(a) Medicaments of Chapter 30;' },
      { type: 'list', vi: '(b) Nước hoa, mỹ phẩm hay chế phẩm vệ sinh (toilet preparation) thuộc Chương 33; hoặc', en: '(h) Perfumery, cosmetic or toilet preparations of Chapter 33; or' },
      { type: 'list', vi: '(c) Thuốc diệt côn trùng, thuốc diệt nấm, thuốc diệt cỏ, thuốc khử trùng hay các loại tương tự thuộc nhóm 38.08.', en: '(c) Insecticides, fungicides, herbicides, disinfectants or similar products of heading 38.08.' },
      { type: 'paragraph', vi: '5. Theo mục đích của nhóm 12.12, khái niệm "rong biển và các loại tảo khác" không bao gồm:', en: '5.- For the purposes of heading 12.12, the term “ seaweeds and other algae ” does not include :' },
      { type: 'list', vi: '(a) Các vi sinh đơn bào đã chết thuộc nhóm 21.02;', en: '(a) Dead single-cell micro-organisms of heading 21.02;' },
      { type: 'list', vi: '(b) Các vi sinh nuôi cấy thuộc nhóm 30.02; hoặc', en: '(b) Cultures of micro-organisms of heading 30.02; or' },
      { type: 'list', vi: '(c) Phân bón thuộc nhóm 31.01 hoặc 31.05.', en: '(c) Fertilisers of heading 31.01 or 31.05.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Note.' },
      { 
        type: 'paragraph', 
        vi: '1. Theo mục đích của phân nhóm 1205.10, cụm từ "hạt cải dầu có hàm lượng axit eruxic thấp" có nghĩa là hạt cải dầu có chứa một lượng dầu không bay hơi với hàm lượng axit eruxic chiếm dưới 2% tính theo trọng lượng và thành phần rắn chứa dưới 30 micromol glucosinolate trên 1 gram.', 
        en: '1.- For the purposes of subheading 1205.10, the expression “ low erucic acid rape or colza seeds " means rape or colza seeds yielding a fixed oil which has an erucic acid content of less than 2 % by weight and yielding a solid component which contaias less than 30 micromoles of glucosinolates per gram.' 
      },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm 12.01 đến 12.07 gồm các loại hạt và quả dùng cho quá trình chiết xuất (bằng áp lực hoặc bằng dung môi) dầu và mỡ dùng cho công nghiệp hoặc thực phẩm, dù chúng dùng cho mục đích này, cho việc làm giống hoặc cho các mục đích khác. Tuy nhiên, nhóm này không bao gồm các sản phẩm của các nhóm 08.01 hoặc 08.02 ; ôliu ( Chương 7 hoặc Chương 20 ) hoặc một số quả và hạt khác có thể chiết xuất dầu, nhưng chủ yếu phục vụ cho các mục đích khác, như nhân hạt mơ, đào, mận ( nhóm 12.12 ) và hạt cacao ( nhóm 18.01 ).', 
        en: 'Headings 12.01 to 12.07 cover seeds and fruits of a kind used for the extraction (by pressure or by solvents) of edible or industrial oils and fats, whether they are presented for that purpose, for sowing or for other purposes. These headings do not , however, include products of heading 08.01 or 08.02 , olives ( Chapter 7 or 20 ) or certain seeds and fruits from which oil may be extracted but which are primarily used for other purposes, e.g., apricot, peach or plum kernels ( heading 12.12 ) and cocoa beans ( heading 18.01 ).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Các loại hạt và quả của nhóm này có thể còn nguyên hạt, được nghiền vụn, xay hay bỏ vỏ. Các loại hạt và quả nhóm này có thể bị xử lý nhiệt chủ yếu để bảo quản tốt hơn (ví dụ, bằng cách khử hoạt tính enzyme lipolytic và loại bỏ một phần độ ẩm), để khử vị đắng, để khử các yếu tố kháng dinh dưỡng hoặc để dễ dàng sử dụng chúng. Tuy nhiên, quá trình xử lý chỉ được áp dụng với điều kiện việc xử lý này không làm thay đổi tính đặc trưng tự nhiên của hạt và quả và không chế biến chúng theo mục đích riêng thay vì mục đích chung.', 
        en: 'The seeds and fruits covered by the heading may be whole, broken, crushed, husked or shelled. They may also have undergone heat treatment designed mainly to ensure better preservation (e.g., by inactivating the lipolytic enzymes and eliminating part of the moisture), for the purpose of de-bittering. for inactivating anti nutritional factors or to facilitate their use. However, such treatment is permitted only if it does not alter the character of the seeds and fruits as natural products and does not make them suitable for a specific use rather than for general use.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này không bao gồm các phế liệu dạng rắn thu từ quá trình chiết xuất dầu thực vật của các loại hạt dầu hoặc quả có dầu (bao gồm cả bột và bột thô được loại bỏ chất béo) (nhóm 23.04 , 23.05 hoặc 23.06 ).', 
        en: 'The headings exclude solid residues resulting from the extraction of vegetable oil from oil seeds or oleaginous fruits (including defatted flours and meals) ( heading 23.04, 23.05 or 23.06 ).' 
      },

      { type: 'heading', vi: '12.01 - Đậu tương, đã hoặc chưa vỡ mảnh (+).', en: '12.01 - Soya beans, whether or not broken (+).' },
      { type: 'list', vi: '1201.10 - Hạt giống', en: '1201.10 - Seed' },
      { type: 'list', vi: '1201.90 - Loại khác', en: '1201.90 - Other' },
      { type: 'paragraph', vi: 'Đậu tương là một nguồn rất quan trọng của dầu thực vật. Các loại đậu tương thuộc nhóm này có thể được xử lý nhiệt để giảm vị đắng (xem trong phần Chú giải tổng quát).', en: 'Soya beans are very important source of vegetable oil. The soya beans of this heading may be heat-treated for the purpose of de-bittering (see General Explanatory Note).' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm đậu tương rang được dùng làm các chất thay thế cà phê ( nhóm 21.01 ).', en: 'However, the heading excludes roasted soya beans used as a coffee substitute ( heading 21.01 ).' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1201.10', en: 'Subheading 1201.10' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1201.10, thuật ngữ “hạt giống” chỉ bao gồm đậu tương được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1201.10, the term “seed" covers only soya beans regarded by the competent national authorities as being for sowing.' },

      { type: 'heading', vi: '12.02 - Lạc chưa rang, hoặc chưa làm chín cách khác, đã hoặc chưa bóc vỏ hoặc vỡ mảnh. (+).', en: '12.02 - Ground-nuts, not roasted or otherwise cooked, whether or not shelled or broken (+).' },
      { type: 'list', vi: '1202.30 - Hạt giống', en: '1202.30 - Seed' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1202.41 - - Lạc chưa bóc vỏ', en: '1202.41 - - In shell' },
      { type: 'list', vi: '1202.42 - - Lạc nhân, đã hoặc chưa vỡ mảnh', en: '1202.42 - - Shelled, whether or not broken' },
      { type: 'paragraph', vi: 'Nhóm này gồm các loại lạc (hay còn gọi là hạt đậu phộng) đã hoặc chưa tách vỏ hoặc vỡ mảnh, chưa rang hoặc chưa làm chín cách khác. Lạc thuộc nhóm này có thể bị xử lý nhiệt nhằm bảo quản tốt hơn (xem trong phần Chú giải tổng quát). Lạc đã rang hoặc đã làm chín cách khác thuộc Chương 20', en: 'This heading covers ground-nuts (also known as peanuts), whether or not shelled or broken, which are not roasted or otherwise cooked. The ground-nuts of this heading may be heat-treated to ensure better preservation (see the General Explanatory Note). Roasted or otherwise cooked ground-nuts fall in Chapter 20 .' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1202.30', en: 'Subheading 1202.30' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1202.30, thuật ngữ “hạt giống” chỉ bao gồm lạc được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1202.30, the term “seed” covers only ground-nuts regarded by the competent national authorities as bieng for sowing.' },

      { type: 'heading', vi: '12.03 - Cùi (cơm) dừa khô.', en: '12.03 - Copra.' },
      { type: 'paragraph', vi: 'Cùi (cơm) dừa khô là phần cùi được làm khô của quả dừa dùng để ép dầu dừa và không thích hợp dùng làm thức ăn cho người.', en: 'Copra is the dried flesh of coconut used for the expression of coconut oil and unsuitable for human consumption.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm dừa làm khô, tức là, cùi dừa được cắt thành miếng nhỏ và được làm khô thích hợp dùng làm thức ăn cho người (nhóm 08.01 ).', en: 'This heading does not include desiccated coconut, i.e., the dried and shredded flesh of coconut suitable for human consumption ( heading 08.01).' },

      { type: 'heading', vi: '12.04 - Hạt lanh, đã hoặc chưa vỡ mảnh.', en: '12.04 - Linseed, whether or not broken.' },
      { type: 'paragraph', vi: 'Hạt lanh, nghĩa là, hạt của cây lanh, cung cấp một trong những loại dầu làm khô quan trọng nhất.', en: 'Linseed, i.e., the seed of the flax plant, is the source of one of the most important of the drying oils.' },

      { type: 'heading', vi: '12.05 - Hạt cải dầu đã hoặc chưa vỡ mảnh.', en: '12.05 - Rape or colza seeds, whether or not broken.' },
      { type: 'list', vi: '1205.10 - Hạt cải dầu có hàm lượng axit eruxic thấp', en: '1205.10 - Low erucic acid rape or colza seeds' },
      { type: 'list', vi: '1205.90 - Loại khác', en: '1205.90 - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này gồm các loại hạt cải dầu (các loại hạt của một số loài cải Brassica , nhất là cải Brassica napus (cải dầu) và brassica rapa (hoặc B. campestris)) . Nhóm này bao gồm cả hạt cải dầu truyền thống và hạt cải dầu có hàm lượng axit erucic thấp. Hạt cải dầu có hàm lượng axit erucic thấp, như hạt Canola, hoặc hạt cải dầu Châu âu “ double zero ”, có chứa một lượng dầu không bay hơi với hàm lượng axit eruxic chiếm dưới 2% tính theo trọng lượng và thành phần rắn chứa dưới 30 micromol glucosinolate trên 1 gram.', 
        en: 'This heading includes rape or colza seeds (the seeds of several species of Brassica , particularly B. napus and B. rapa (or B. campestris )). The heading covers both the traditional rape or colza seeds and the low erucic acid rape or colza seeds. Low erucic acid rape or colza seeds, e.g., canola seeds or the European rape or colza seeds “ double zero ”, yield a fixed oil which has a total erucic acid content of less than 2 % by weight and yield a solid component which contains less than 30 micromoles of glucosinolatcs per gram.' 
      },

      { type: 'heading', vi: '12.06 - Hạt hướng dương, đã hoặc chưa vỡ mảnh.', en: '12.06 - Sunflower seeds, whether or not broken.' },
      { type: 'paragraph', vi: 'Nhóm này gồm các loại hạt của hoa hướng dương thông thường ( Heleanthus annuus ).', en: 'This heading covers the seeds of the common sunflower ( Heleanthus annuus ).' },

      { type: 'heading', vi: '12.07 - Quả và hạt có dầu khác, đã hoặc chưa vỡ mảnh (+).', en: '12.07 - Other oil seeds and oleaginous fruits, whether or not broken' },
      { type: 'list', vi: '1207.10 - Hạt cọ và nhân hạt cọ', en: '1207.10 - Palm nuts and kernels' },
      { type: 'paragraph', vi: '- Hạt bông:', en: '- Cotton seeds:' },
      { type: 'list', vi: '1207.21 - - Hạt giống', en: '1207.21 - - Seed' },
      { type: 'list', vi: '1207.29 - - Loại khác', en: '1207.29 - - Other' },
      { type: 'list', vi: '1207.30 - Hạt thầu dầu', en: '1207.30 - Castor oil seeds' },
      { type: 'list', vi: '1207.40 - Hạt vừng', en: '1207.40 - Sesamum seeds' },
      { type: 'list', vi: '1207.50 - Hạt mù tạt', en: '1207.50 - Mustard seeds' },
      { type: 'list', vi: '1207.60 - Hạt rum (Carthamus tinctorius)', en: '1207.60 - Safflower ( Carthamus tinctorius ) seeds' },
      { type: 'list', vi: '1207.70 - Hạt dưa (melon seeds)', en: '1207.70 - Melon seeds' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1207.91 - - Hạt thuốc phiện', en: '1207.91 - - Poppy seeds' },
      { type: 'list', vi: '1207.99 - - Loại khác', en: '1207.99 - - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm các loại hạt và quả dùng để ép dầu hoặc chất béo dùng cho thực phẩm hay công nghiệp, trừ các sản phẩm từ nhóm 12.01 đến 12.06 (xem trong phần Chú giải tổng quát).', en: 'This heading covers seeds and fruits of a kind used for the extraction of edible or industrial oils and fats, other than those specified in headings 12.01 to 12.06 (see also General Explanatory Note).' },
      { type: 'paragraph', vi: 'Nhóm này có thể kể đến:', en: 'The heading covers, inter alia :' },
      { type: 'list', vi: '- Hạt ba-ba-su', en: '- Babassu kernels' },
      { type: 'list', vi: '- Hạt sồi', en: '- Beech nuts' },
      { type: 'list', vi: '- Hạt quả lai', en: '- Candlenuts' },
      { type: 'list', vi: '- Hạt carapa (ví dụ, hạt touloucouna)', en: '- Carapa nuts (e.g., touloucouna nuts)' },
      { type: 'list', vi: '- Hạt thầu dầu', en: '- Castor oil seeds' },
      { type: 'list', vi: '- Hạt dầu chùm bao', en: '- Chaulmoogra seeds' },
      { type: 'list', vi: '- Hạt bông', en: '- Cotton seeds' },
      { type: 'list', vi: '- Hạt khổ sâm (hay hạt thông lọng Ấn Độ)', en: '- Croton seeds' },
      { type: 'list', vi: '- Hạt cây anh thảo đêm thuộc loài Oenothera biennis và Oenothera lamarckiana', en: '- Evening primrose seeds of the species Oenothera biennis and Oenothera lamarckiana' },
      { type: 'list', vi: '- Hạt nho', en: '- Grape pips' },
      { type: 'list', vi: '- Hạt gai dầu', en: '- Hemp seeds' },
      { type: 'list', vi: '- Hạt illipe', en: '- Illipe seeds' },
      { type: 'list', vi: '- Hạt bông gạo', en: '- Kapok seeds' },
      { type: 'list', vi: '- Hạt mowra', en: '- Mowra seeds' },
      { type: 'list', vi: '- Hạt mù tạt', en: '- Mustard seeds' },
      { type: 'list', vi: '- Hạt niger', en: '- Niger seeds' },
      { type: 'list', vi: '- Hạt oiticica', en: '- Oiticica seeds' },
      { type: 'list', vi: '- Hạt và nhân hạt cọ', en: '- Palm nuts and kernels' },
      { type: 'list', vi: '- Hạt cây tía tô', en: '- Perilla seeds' },
      { type: 'list', vi: '- Hạt thuốc (pulza)', en: '- Physic (pulza) nuts' },
      { type: 'list', vi: '- Hạt thuốc phiện', en: '- Poppy seeds' },
      { type: 'list', vi: '- Hạt rum', en: '- Safflower seeds' },
      { type: 'list', vi: '- Hạt vừng', en: '- Sesamum seeds' },
      { type: 'list', vi: '- Hạt mỡ (Hạt Karite)', en: '- Shea nuts (Karite nuts)' },
      { type: 'list', vi: '- Hạt stillingia', en: '- Stillingia seeds' },
      { type: 'list', vi: '- Hạt chè', en: '- Tea seeds' },
      { type: 'list', vi: '- Hạt tung (hoặc hạt oleococca)', en: '- Tung nuts (or oleococca seeds)' },
      { type: 'heading', vi: 'Chú giải phân nhóm', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1207.21', en: 'Subheading 1207.21' },
      { type: 'paragraph', vi: 'Theo mục đích của phân nhóm 1207.21, thuật ngữ “hạt giống” chỉ bao gồm hạt bông được các cơ quan quốc gia có thẩm quyền đánh giá là để gieo trồng.', en: 'For the purposes of subheading 1207.21, the term “seed” covers only cotton seeds regarded by the competent national authorities as being lor sowing.' },

      { type: 'heading', vi: '12.08 - Bột mịn và bột thô từ các loại hạt hoặc quả có dầu, trừ bột và bột thô từ hạt mù tạt.', en: '12.08 - Flours and meals of oil seeds or oleaginous fruits, other than those of mustard.' },
      { type: 'list', vi: '1208.10 - Từ đậu tương', en: '1208.10 - Of soya beans' },
      { type: 'list', vi: '1208.90 - Loại khác', en: '1208.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm bột mịn hoặc bột thô không bị loại bỏ chất béo hay chỉ bị loại bỏ một phần chất béo thu được từ quá trình xay xát hạt và quả có dầu từ nhóm 12.01 đến 12.07. Nhóm này cũng bao gồm bột mịn hoặc bột thô đã được loại bỏ chất béo hoặc đã được bổ sung một phần hay toàn bộ chất béo bằng dầu lấy từ các loại bột đó (xem Chú giải 2 của Chương này).', en: 'This heading covers non-defatted or partially defatted flours or meals obtained by grinding the oil seeds or oleaginous fruits covered by headings 12.01 to 12.07. It also includes flours and meals defatted and wholly or partially refatted with their original oils (see Note 2 to this Chapter).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Bơ lạc ( nhóm 20.08 ).', en: '(a) Peanut butter ( heading 20.08 ).' },
      { type: 'list', vi: '(b) Bột mịn và bột thô của mù tạt, đã hoặc chưa khử chất béo, đã hoặc chưa chế biến ( nhóm 21.03 ).', en: '(b) Mustard flour and meal, whether or not defatted, prepared or not ( heading 21.03 ).' },
      { type: 'list', vi: '(c) Bột mịn và bột thô bị khử chất béo (trừ loại của hạt mù tạt) (các nhóm từ nhóm 23.04 đến nhóm 23.06 ).', en: '(c) Defatted flours and meals (other than those of mustard) ( headings 23.04 to 23.06 ).' },

      { type: 'heading', vi: '12.09 - Hạt, quả và mầm, dùng để gieo trồng.', en: '12.09 - Seeds, fruit and spores, of a kind used for sowing.' },
      { type: 'list', vi: '1209.10 - Hạt củ cải đường (sugar beet)', en: '1209.10 - Sugar beet seeds' },
      { type: 'paragraph', vi: '- Hạt của các loại cây dùng làm thức ăn gia súc:', en: '- Seeds of forage plants :' },
      { type: 'list', vi: '1209.21 - - Hạt cỏ linh lăng (alfalfa)', en: '1209.21 - - Lucerne (alfalfa) seeds' },
      { type: 'list', vi: '1209.22 - - Hạt cỏ ba lá ( Trifolium spp. )', en: '1209.22 - - Clover ( Trifolium spp. ) seeds' },
      { type: 'list', vi: '1209.23 - - Hạt cỏ đuôi trâu', en: '1209.23 - - Fescue seeds' },
      { type: 'list', vi: '1209.24 - - Hạt cỏ kentucky màu xanh da trời ( Poa pratensis L. )', en: '1209.24 - - Kentucky blue grass ( Poa pratensis L.) seeds' },
      { type: 'list', vi: '1209.25 - - Hạt cỏ mạch đen ( Lolium multiflorum Lam., Lolium perenne L. )', en: '1209.25 - - Rye grass ( Lolium multiflorum Lam., Lolium perenne L. ) seeds' },
      { type: 'list', vi: '1209.29 - - Loại khác', en: '1209.29 - - Other' },
      { type: 'list', vi: '1209.30 - Hạt của các loại cây thân cỏ trồng chủ yếu để lấy hoa', en: '1209.30 - Seeds of herbaceous plants cultivated principally for their flowers' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1209.91 - - Hạt rau', en: '1209.91 - - Vegetable seeds' },
      { type: 'list', vi: '1209.99 - - Loại khác', en: '1209.99 - - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm 12.09 gồm tất cả các loại hạt, quả và mầm dùng để gieo trồng. Nhóm này bao gồm các hạt thậm chí không còn khả năng nảy mầm nữa. Tuy nhiên, nhóm này không bao gồm các sản phẩm như các sản phẩm được nêu ở phần cuối của Chú giải này, mặc dù được dùng để gieo trồng, chúng được phân loại trong các nhóm khác của Danh mục, vì chúng thường được dùng cho các mục đích khác không phải để gieo trồng.', 
        en: 'This heading covers all seeds, fruit and spores of a kind used for sowing. It includes such products even if they are no longer capable of germination. However, it does not include products such as those mentioned at the end of this Explanatory Note, which, although intended for sowing, are classified elsewhere in the Nomenclature because they are normally used other than for sowing.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm các loại hạt củ cải, hạt cỏ, hạt cỏ đồng nội hay các loại hạt cỏ khác (cỏ linh lăng, cây hồng đậu, cỏ ba lá, cỏ ray, cỏ đuôi trâu, lúa mạch đen, cỏ kentucky màu xanh da trời, cỏ đuôi mèo…), các loại hạt hoa trang trí, hạt rau, hạt cây rừng (kể cả quả của cây thông có hạt), hạt cây ăn quả, hạt của đậu tằm (vetch) ( trừ hạt thuộc loài Vicia faba , tức là, hạt đậu tằm (broad bean) và đậu ngựa), hạt đậu lupin, hạt me, hạt cây thuốc lá, hạt của các cây cho các sản phẩm thuộc nhóm 12.11 ( không dùng chủ yếu làm nước hoa, dược phẩm, thuốc trừ sâu, thuốc diệt nấm hoặc mục đích tương tự).', 
        en: 'The heading includes beet seeds, grass or other herbage seeds (lucerne, sainfoin, clover, fescue, rye grass, Kentucky blue grass, timothy grass, etc.), seeds of ornamental flowers, vegetable seeds, seeds of forest trees (including pine cones bearing seeds), seeds of fruit trees, seeds of vetches ( other than those of the species Vicia faba , i.e., broad beans and horse beans), seeds of lupines, tamarind seeds, tobacco seeds, and seeds ( not themselves used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes) of plants yielding the products of heading 12.11.' 
      },
      { type: 'paragraph', vi: 'Các sản phẩm thuộc nhóm này (đặc biệt là hạt cỏ) có thể được phân tán cùng với lượng nhỏ phân mịn trên 1 lớp lót bằng giấy và được phủ một lớp mền xơ mịn được giữ đúng vị trí bởi một chiếc lưới được gia cố bằng plastic.', en: 'Products of this heading (especially grass seeds) may be dispersed with fine fertiliser particles on a paper backing and covered with a fine layer of wadding held in place by a reinforcing mesh of plastics.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Hệ sợi nấm ( nhóm 06.02 ).', en: '(a) Mushroom spawn ( heading 06.02 ).' },
      { type: 'list', vi: '(b) Rau đậu và ngô ngọt ( Chương 7 ).', en: '(b) Leguminous vegetables and sweet corn ( Chapter 7 ).' },
      { type: 'list', vi: '(c) Quả của Chương 8 .', en: '(c) Fruit of Chapter 8 .' },
      { type: 'list', vi: '(d) Gia vị và các loại sản phẩm khác thuộc Chương 9 .', en: '(d) Spices and other products of Chapter 9 .' },
      { type: 'list', vi: '(e) Hạt ngũ cốc ( Chương 10 ).', en: '(c) Cereal grains ( Chapter 10 ).' },
      { type: 'list', vi: '(f) Hạt và quả có dầu từ nhóm 12.01 đến nhóm 12.07 .', en: '(f) Oil seeds and oleaginous fruits of headings 12.01 to 12.07.' },
      { type: 'list', vi: '(g) Các loại hạt và quả dùng chủ yếu làm nước hoa, dược phẩm, thuốc trừ sâu, thuốc diệt nấm hoặc cho các mục đích tương tự ( nhóm 12.11 ).', en: '(g) Seeds and fruit which are themselves of a kind used primarily in perfumery, in pharmacy, or for insecticidal, fungicidal or similar purposes ( heading 12.11 ).' },
      { type: 'list', vi: '(h) Hạt minh quyết ( nhóm 12.12 ).', en: '(h) Locust beans ( heading 12.12 ).' },

      { type: 'heading', vi: '12.10 - Hublong (hoa bia), tươi hoặc khô, đã hoặc chưa nghiền, xay thành bột hoặc ở dạng viên; phấn hoa bia.', en: '12.10 - Hop cones, fresh or dried, whether or not ground, powdered or in the form of pellets; lupulin.' },
      { type: 'list', vi: '1210.10 - Hublong, chưa nghiền và chưa xay thành bột và chưa ở dạng viên', en: '1210.10 - Hop cones, neither ground nor powdered nor in the form of pellets' },
      { type: 'list', vi: '1210.20 - Hublong, đã nghiền, đã xay thành bột hoặc ở dạng viên; phấn hoa bia', en: '1210.20 - Hop cones, ground, powdered or in the form of pellets; lupulin' },
      { type: 'paragraph', vi: 'Hublong là loại hoa đuôi sóc có vảy giống hình nón hoặc hoa của cây hublong ( Humulus lupulus ). Chúng được dùng chủ yếu trong công nghiệp sản xuất bia tạo hương vị cho bia, nhưng Hublong còn dùng làm dược phẩm. Nhóm 12.10 gồm hublong tươi hay khô, đã hoặc chưa xay, nghiền thành bột hoặc ở dạng viên (nghĩa là, được tích tụ lại bằng cách nén trực tiếp hoặc cho thêm chất kết dính với tỉ lệ không quá 3% trọng lượng).', en: 'Hop cones are the scaly cone-like catkins or flowers of the hop plant ( Humulus lupulus ). They are used mainly in the brewing industry to give flavour to the beer, but they are also used for medicinal purposes. The cones fall in this heading whether fresh or dried and whether or not ground or powdered or in the form of pellets (i.e., agglomerated cither directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight).' },
      { type: 'paragraph', vi: 'Phấn hoa bia là một loại bụi phấn nhựa màu vàng bao phủ hublong, bột này có vị đắng, mùi thơm tạo nên tính đặc trưng của hoa. Phấn hoa được sử dụng trong công nghiệp sản xuất bia như là sản phẩm thay thế phần nào hublong và trong dược phẩm. Phấn hoa được tách khỏi hoa bằng máy móc, sau khi làm khô.', en: 'Lupulin is a yellow resinous powder which covers the hop cones and contains the bitter, aromatic principle which gives hops their characteristic properties. It is used in brewing as a partial substitute for hops and in medicine. It may be separated from the hops mechanically after drying.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Chiết xuất từ hublong ( nhóm 13.02 ).', en: '(a) Extract of hops ( heading 13.02 ).' },
      { type: 'list', vi: '(b) Phế liệu của hublong chưa được khai thác hết ( nhóm 23.03 ).', en: '(b) Spent hops ( heading 23.03 ).' },
      { type: 'list', vi: '(c) Tinh dầu hublong ( nhóm 33.01 ).', en: '(c) The essential oil of hops ( heading 33.01 ).' },

      { type: 'heading', vi: '12.11 - Các loại cây và các bộ phận của cây (kể cả hạt và quả), chủ yếu dùng làm nước hoa, làm dược phẩm hoặc thuốc trừ sâu, thuốc diệt nấm hoặc các mục đích tương tự, tươi, ướp lạnh, đông lạnh hoặc khô, đã hoặc chưa cắt, nghiền hoặc xay thành bột.', en: '12.11 - Plants and parts of plants (including seeds and fruits), of a kind used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes, fresh, chilled, frozen or dried, whether or not cut, crushed or powdered.' },
      { type: 'list', vi: '1211.20 - Rễ cây nhân sâm', en: '1211.20 - Ginseng roots' },
      { type: 'list', vi: '1211.30 - Lá coca', en: '1211.30 - Coca leaf' },
      { type: 'list', vi: '1211.40 - Thân cây anh túc', en: '1211.40 - Poppy straw' },
      { type: 'list', vi: '1211.50 - Cây ma hoàng', en: '1211.50 - Ephedra' },
      { type: 'list', vi: '1211.60 - Vỏ cây anh đào Châu Phi (Prunus africana)', en: '1211.60 - Bark of African cherry ( Prunus africana )' },
      { type: 'list', vi: '1211.90 - Loại khác', en: '1211.90 - Other' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này gồm các sản phẩm rau chủ yếu dùng làm nước hoa, dược phẩm, thuốc trừ sâu, thuốc diệt nấm hoặc các mục đích tương tự. Sản phẩm thuộc nhóm này có thể ở dạng cả cây, rêu hoặc địa y, hoặc chỉ là một phần cây (như vỏ cây, rễ cây, thân cây, lá, bông hoa, cánh hoa, quả và hạt ( trừ các loại hạt và quả có dầu được phân loại trong các nhóm từ nhóm 12.01 đến 12.07 )), hoặc ở dạng phế phẩm thu chủ yếu từ quá trình xử lý cơ học. Các sản phẩm này dù tươi, ướp lạnh, đông lạnh hoặc khô, đã hoặc chưa cắt, nghiền hoặc xay thành bột hoặc (trong trường hợp thích hợp) nạo hoặc bóc vỏ vẫn thuộc nhóm này. Các sản phẩm này dù được tẩm rượu vẫn được phân loại vào nhóm này.', 
        en: 'This heading covers vegetable products of a kind used primarily in perfumery, in pharmacy or medicine, or for insecticidal, fungicidal, parasiticidal or similar purposes. They may be in the form of whole plants, mosses or lichens, or of parts (such as wood, bark, roots, stems, leaves, flowers, petals, fruits and seeds ( other than oleaginous fruits and oil seeds classified in headings 12.01 to 12.07 )), or in the form of waste resulting, in the main, from mechanical treatment. They remain in the heading whether fresh, chilled, frozen or dried, whole, cut, crushed, ground or powdered or (where appropriate) grated or hulled. Products of this heading impregnated with alcohol remain classified here.' 
      },
      { type: 'paragraph', vi: 'Các loại cây, các phần của cây (kể cả hạt và quả), bụi cây, cây bụi hoặc các loại cây khác được phân loại vào trong nhóm này nếu trực tiếp được dùng cho các mục đích nêu ở trên hoặc được dùng để sản xuất các chất chiết xuất, alkaloid hoặc tinh dầu phù hợp dùng cho các mục đích đó. Mặt khác, nhóm này không bao gồm các loại hạt, quả được dùng để chiết xuất dầu không bay hơi mặc dù lượng dầu đó được sử dụng cho các mục đích nêu tại nhóm này; chúng được phân loại vào các nhóm từ nhóm 12.01 đến 12.07 .', en: 'Plants and parts (including seeds and fruits) of trees, bushes, shrubs or other plants are classified here if of a kind used directly for the purposes specified above or if used for the production of extracts, alkaloids or essential oils suitable lor those purposes. On the other hand, the heading excludes seeds and fruits of a kind used for the extraction of fixed oils; these fall in headings 12.01 to 12.07 even if the oils are to be used for the purposes mentioned in this heading.' },
      { type: 'paragraph', vi: 'Cần lưu ý sản phẩm thực vật được mô tả cụ thể hơn trong các nhóm khác của danh mục bị loại khỏi nhóm này, cho dù chúng có khả năng được dùng trong sản xuất nước hoa, dược phẩm... Đó là trường hợp đối với vỏ chi cam quýt ( nhóm 08.14 ); đinh hương, vani, hạt hồi, hoa hồi dạng sao (badian) và các sản phẩm khác của Chương 9 ; hublong ( nhóm 12.10 ); rễ rau diếp xoăn của nhóm 12.12 ; gôm, nhựa, nhựa-gôm và nhựa dầu tự nhiên ( nhóm 13.01 ).', en: 'It should also be noted that vegetable products more specifically described in other headings of the Nomenclature are excluded from this heading, even if they are suitable for use in perfumer) , pharmacy, etc.. e.g. : citrus fruit peel ( heading 08.14 ): vanilla, cloves, aniseed, badian and other products of Chapter 9 ; hop cones ( heading 12.10 ); chicory roots of heading 12.12 : natural gums, resins, gum-resins and oleoresins ( heading 13.01 ).' },
      { type: 'paragraph', vi: 'Cây sống và rễ rau diếp xoăn và cây giống sống khác, củ, rễ, vv, nhằm mục đích rõ ràng để trồng, và hoa, lá, ..., để trang trí, thuộc Chương 6 .', en: 'Live chicory plants and roots and other live seedling plants, bulbs, rhizomes, etc., clearly intended for planting, and flowers, foliage, etc., for ornamental purposes, fall in Chapter 6 .' },
      { type: 'paragraph', vi: 'Cũng cần chú ý rằng các loại gỗ dùng chủ yếu làm nước hoa, dược phẩm, thuốc trừ sâu, thuốc diệt nấm hoặc cho các mục đích tương tự thuộc nhóm này chỉ khi chúng ở dưới dạng vỏ bào, gỗ mảnh, hoặc ở dạng nghiền, xay, hoặc bột. Nếu ở dưới dạng khác thì gỗ này bị loại trừ khỏi nhóm này ( Chương 44 ).', en: 'It should be noted that woods of a kind used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes are classified in this heading only if in chips, in shavings or in crushed, ground or powdered form. In other forms, such wood is excluded ( Chapter 44 ).' },
      { type: 'paragraph', vi: 'Một số các loại cây hoặc bộ phận của cây (kể cả hạt hoặc quả) thuộc nhóm này có thể được đóng gói (ví dụ, trong gói) để pha thảo dược hoặc làm trà thảo dược. Các sản phẩm này bao gồm cả cây hoặc bộ phận của cây (kể cả hạt hoặc quả) của riêng một loại (ví dụ, trà bạc hà) vẫn được phân loại vào nhóm này.', en: 'Certain plants or parts of plants (including seeds or fruits) of this heading may be put up (e.g., in sachets) for making herbal infusions or herbal “teas”. Such products consisting of plants or parts of plants (including seeds or fruits) of a single species (e.g., peppermint “tea”) remain classified in this heading.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này loại trừ các sản phẩm bao gồm các loại cây hoặc các bộ phận của cây (kể cả hạt hoặc quả) của các loài khác nhau (có hay không phải là tổ hợp cây hoặc các bộ phận của cây thuộc các nhóm khác) hoặc bao gồm cây hoặc bộ phận cây của một hay nhiều loài pha trộn với các chất khác, ví dụ một hoặc nhiều chiết xuất của cây ( nhóm 21.06 ).', en: 'However, the heading excludes such products consisting of plants or parts of plants (including seeds or fruits) of different species (whether or not incorporating plants or plant parts of other headings) or consisting of plants or parts of plants of a single or of different species mixed with other substances, such as one or more plant extracts ( heading 21.06 ).' },
      { type: 'paragraph', vi: 'Ngoài ra, cần lưu ý tùy từng trường hợp cụ thể mà có thể phân loại các sản phẩm dưới đây vào các nhóm 30.03, 30.04, từ 33.03 đến 33.07 hoặc 38.08 :', en: 'It should also be noted that the following products fall in headings 30.03, 30.04, 33.03 to 33.07 or 38.08, as the case may be :' },
      { type: 'list', vi: '(a) Các sản phẩm của nhóm này, không pha trộn, nhưng được đóng gói ở dạng các liều thuốc hoặc dưới dạng đóng gói để bán lẻ, được dùng để chữa bệnh hoặc phòng bệnh, hay còn được đóng gói để bán lẻ như các sản phẩm nước hoa hoặc như thuốc diệt côn trùng, thuốc diệt ký sinh hoặc cho các sản phẩm tương tự.', en: '(a) Products of this heading, unmixed, but put up in measured doses or in forms or packings for retail sale, whether for therapeutic or prophylactic purposes, or put up for retail sale as perfumery products or as insecticidal, fungicidal or similar products.' },
      { type: 'list', vi: '(b) Các sản phẩm được pha trộn cho các mục đích được nêu ở mục (a) trên.', en: '(b) Products which have been mixed for use for the purposes described in (a) above.' },
      { 
        type: 'paragraph', 
        vi: 'Tuy nhiên, việc phân loại các sản phẩm rau trong nhóm này vì chúng dùng chủ yếu trong y tế, không nhất thiết hàm ý rằng chúng được xem như thuốc chữa bệnh thuộc nhóm 30.03 hoặc 30.04 khi chúng được pha trộn hoặc không được pha trộn nhưng được đóng gói dưới dạng liều thuốc hoặc được đóng gói để bán lẻ. Trong khi thuật ngữ “thuốc” thuộc nhóm 30.03 hoặc 30.04 chỉ đề cập đến các sản phẩm dùng để phòng hoặc chữa bệnh, thì khái niệm rộng hơn “dược phẩm” bao hàm cả thuốc chữa bệnh và các loại thuốc không chữa bệnh hoặc phòng bệnh (ví dụ, thuốc bổ, thức ăn bổ dưỡng, chất gây phản ứng để xác định nhóm máu hoặc thành phần máu).', 
        en: 'However, the classification of vegetable products in this heading, by virtue of their being used primarily in pharmacy, does not necessarily imply that they may be regarded as medicaments of heading 30.03 or 30.04 when they are mixed, or unmixed but put up in measured doses or in forms or packings for retail sale. While the term “ medicaments ” within the meaning of heading 30.03 or 30.04 refers only to products which have therapeutic or prophylactic uses, the broader term “ pharmacy ” has reference both to medicaments and to products having no therapeutic or prophylactic uses (e.g., tonic beverages, fortified foods, blood-grouping reagents).' 
      },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm :', en: 'This heading also excludes :' },
      { type: 'list', vi: '(a) hỗn hợp bao gồm các loài thực vật khác nhau hoặc các bộ phận của thực vật thuộc nhóm này loại dùng làm nước xốt gia vị ( nhóm 21.03 );', en: '(a) mixtures consisting of different species of plants or parts of plants of this heading of a kind used for seasoning sauces ( heading 21.03 );' },
      { type: 'paragraph', vi: '(b) các sản phẩm liệt kê dưới đây dùng trực tiếp để tạo mùi thơm đồ uống hoặc để điều chế các chiết xuất nhằm sản xuất đồ uống:', en: '(b) the following products of a kind used either directly for flavouring beverages or for preparing extracts for the manufacture of beverages:' },
      { type: 'list', vi: '(i) các hỗn hợp bao gồm các loài cây khác nhau hoặc các phần của cây trong nhóm này (nhóm 21.06) ; và', en: '(i) mixtures consisting of different species of plants or parts of plants of this heading ( heading 21.06 ): and' },
      { type: 'list', vi: '(ii) các hỗn hợp cây hoặc phần cây của nhóm này với các loại nông sản khác thuộc các Chương khác (ví dụ, Chương 7, Chương 9, Chương 11) ( Chương 9 hoặc nhóm 21.06 ).', en: '(ii) mixtures of plants or parts of plants of this heading with vegetable products falling in other Chapters (e.g., Chapters 7, 9, 11) ( Chapter 9 or heading 21.06 ).' },
      { type: 'paragraph', vi: 'Các sản phẩm sau đây thuộc nhóm này:', en: 'The following products are included in the heading :' },
      { type: 'list', vi: '- Cây phụ tử ( Aconitum naplellus ): rễ và lá.', en: 'Aconite ( Aconitum naplellus ): roots and leaves.' },
      { type: 'list', vi: '- Cây vông vang ( Hibiscus abelmoschus ): hạt.', en: 'Ambrette (musk) ( Hibiscus abelmoschus ): seeds.' },
      { type: 'list', vi: '- Cây bạch chỉ ( Archangelica officinalis ): rễ và hạt.', en: 'Angelica ( Archangelica officinalis ): roots and seeds.' },
      { type: 'list', vi: '- Cây vỏ đắng- chi cam quýt ( Galipea officinalis ): vỏ.', en: 'Angostura ( Galipea officinalis ): bark.' },
      { type: 'list', vi: '- Cây bách tán ( Andira araroba ): bột.', en: 'Araroba ( Andira araroba ): powder.' },
      { type: 'list', vi: '- Cây kim sa ( Armica montana ): rễ, thân, lá và hoa.', en: 'Arnica ( Arnica montana ): roots, stems, leaves and flowers.' },
      { type: 'list', vi: '- Cây húng quế ( Ocimum basilicum ): lá và hoa', en: 'Basil ( Ocimum basilicum ): flowers and leaves.' },
      { type: 'list', vi: '- Cây mạn việt quất ( Uva ursi ): lá.', en: 'Bearberry (Uva ursi): leaves.' },
      { type: 'list', vi: '- Cây cà dược ( Atropa belladonna ): thảo dược (herbs), rễ, quả, lá và hoa', en: 'Belladonna ( Atropa belladonna ): herbs, roots, berries, leaves and flowers.' },
      { type: 'list', vi: '- Cây bônđo ( Penmus boldus ): lá.', en: 'Boldo ( Penmus boldus ): leaves.' },
      { type: 'list', vi: '- Cây mồ hôi ( Borago officinalis ): thân, lá và hoa.', en: 'Borage ( Borago officinalis ): stems and flowers.' },
      { type: 'list', vi: '- Cây nhăng ( Bryonia dioica ): rễ.', en: 'Bryony ( Bryonia dioica ): roots.' },
      { type: 'list', vi: '- Buchu ( Barosma betulina, Barosma serratifolia và Barosma crenulata ): lá.', en: 'Buchu ( Barosma betulina, Barosma serratifolia and Barosma crenulata ): leaves.' },
      { type: 'list', vi: '- Buckbean ( Menyanthes trifoliata ): lá.', en: 'Buckbean ( Menyanthes trifoliata ): leaves.' },
      { type: 'list', vi: '- Cây ngưu bàng ( Arctium lappa ): Hạt và rễ khô.', en: 'Burdock ( Arctium lappa ): Seeds and dried roots.' },
      { type: 'list', vi: '- Cây họ đậu ( Physostigma venenosum ): hạt.', en: 'Calabar (Physostigma venenosum) : beans.' },
      { type: 'list', vi: '- Cây thạch xương bồ ( Acorus calamus ): rễ.', en: 'Calamus (Acorus calamus): roots.' },
      { type: 'list', vi: '- Calumba ( Jateorhiza palmata ): rễ.', en: 'Calumba ( Jateorhiza palmata )roots.' },
      { type: 'list', vi: '- Cây gai dầu ( Canabis sativa ): thảo dược (herbs).', en: 'Cannabis (Cannabis sativa): herbs.' },
      { type: 'list', vi: '- Cascara sagrada ( Rhamnus purshiana ): vỏ.', en: 'Cascara sagrada (Rhamnus purshiana): bark.' },
      { type: 'list', vi: '- Cascarilla ( Croton eluteria ): vỏ.', en: 'Cascarilla (Croton eluteria): bark.' },
      { type: 'list', vi: '- Cây muồng ( Casia fistula ): hạt và cùi chưa tinh chế. (Cùi cây đã tinh chế (rút nước) được phân loại vào nhóm 13.02 ).', en: 'Cassia ( Cassia fistula ) : pods and unpurified pulp. (Purified cassia pulp (aqueous extract) is classified in heading 13.02. )' },
      { type: 'list', vi: '- Cây xa cúc ( Erythraea centaurium ): thảo dược (herbs).', en: 'Centauria ( Erythraea centaurium ): herbs.' },
      { type: 'list', vi: '- Cevadilla ( Sabadilla ) ( Schoenocaulon officinale ): hạt.', en: 'Cevadilla (Sabadilla) ( Schoenocaulon officinale ): seeds.' },
      { type: 'list', vi: '- Cây cúc cam ( Matricaria chamomilla, Anthemis nobilis ): hoa.', en: 'Chamomile ( Matricaria chamomilla, Anthemis nobilis ): flowers.' },
      { type: 'list', vi: '- Cây ra muối ( Chenopdium ): hạt .', en: 'Chenopodium : seeds.' },
      { type: 'list', vi: '- Cây anh đào : thân.', en: 'Cherry : stalks.' },
      { type: 'list', vi: '- Cây nguyệt quế anh đào ( Prunus laurocerasus ): quả.', en: 'Cherry laurel ( Prunus laurocerasus ): berries.' },
      { type: 'list', vi: '- Cây canh-ki-na : vỏ.', en: 'Cinchona : bark.' },
      { type: 'list', vi: '- Cây đinh hương ( Caryophyllus aromaticus ): vỏ và lá.', en: 'Clove ( Caryophyllus aromaticus ): bark and leaves.' },
      { type: 'list', vi: '- Cây coca ( Erythroxylon coca, E.truxillense ): lá.', en: 'Coca ( Erythroxylon coca and Erythroxylon truxillense ): leaves.' },
      { type: 'list', vi: '- Cây lơvăng (quả Ấn Độ) ( Animirta paniculata ): vỏ.', en: 'Cocculus indicus (Indian berry) ( Anamirta paniculata ): fruit.' },
      { type: 'list', vi: '- Cocillana ( Guarea rusbyi ): vỏ.', en: 'Cocillana ( Guarea rusbyi ): bark.' },
      { type: 'list', vi: '- Cây bả chó ( Colchicum antumnale ): thân và hạt.', en: 'Colchicum ( Colchicum antumnale ): corms and seeds.' },
      { type: 'list', vi: '- Cây dưa đắng ( Citrullus colocynthis ): quả.', en: 'Colocynth ( Citrullus colocynthis ): fruit.' },
      { type: 'list', vi: '- Cây se ( Symphytum officinale ): rễ', en: 'Comfrey ( Symphytum officinale ): roots.' },
      { type: 'list', vi: '- Condurango ( Marsdenia condurango ): vỏ.', en: 'Condurango ( Marsdenia condurango ): bark.' },
      { type: 'list', vi: '- Cỏ gà ( Agropyrum repens ): rễ', en: 'Couchgrass (Triticum) ( Agropyrum repens ): roots.' },
      { type: 'list', vi: '- Cubé ( barbasco or timbo ) ( Lonchocarpus nicou ): vỏ và rễ.', en: 'Cubé (barbasco or timbo) ( Lonchocarpus nicou ): bark and roots.' },
      { type: 'list', vi: '- Hạt tiêu (Cubeba officinalis miquel hoặc Piper cebeba): bột.', en: 'Cubeb ( Cubeba officinalis miquel or Piper cebeba ): powder.' },
      { type: 'list', vi: '- Damiana (Turnera diffusa): lá.', en: 'Damiana ( Turnera diffusa ): leaves.' },
      { type: 'list', vi: '- Cây bồ công anh ( Taraxacum officinale ): rễ.', en: 'Dandelion ( Taraxacum officinale ): roots.' },
      { type: 'list', vi: '- Datura metel : lá và hạt.', en: 'Datura metel : leaves and seeds.' },
      { type: 'list', vi: '- Cây dây mật ( Derris elliptica và Derris trifoliata ): rễ .', en: 'Derris (or tuba ) ( Derris elliptica and Derris trifoliata ): roots.' },
      { type: 'list', vi: '- Cây dương địa hoành ( Digitalis purpurea ): lá và hạt.', en: 'Digitalis ( Digitalis purpurea ): leaves and seeds.' },
      { type: 'list', vi: '- Cây cơm cháy ( Sambucus nigra ): vỏ và hoa.', en: 'Elder ( Sambucus nigra ): flowers and bark.' },
      { type: 'list', vi: '- Cây ma hoàng ( Ephedra (Mahuang ): nhánh và thân.', en: 'Ephedra ( Mahuang ): stems and branches.' },
      { type: 'list', vi: '- Cựa lúa mạch đen .', en: 'Ergot of rye.' },
      { type: 'list', vi: '- Cây bạch đàn ( Encalyptus globulus ): lá', en: 'Eucalyptus ( Encalyptus globulus ): leaves.' },
      { type: 'list', vi: '- Frangula : vỏ.', en: 'Frangula : bark.' },
      { type: 'list', vi: '- Cây lam cận ( Fumaria officinalis ): lá và hoa.', en: 'Fumitory ( Fumaria officinalis ): leaves and flowers.' },
      { type: 'list', vi: '- Củ riềng ( Alpinia oficinarum ): thân rễ.', en: 'Galangal ( Alpinia officinarum ): rhizomes.' },
      { type: 'list', vi: '- Cây long đờm ( Gentiana lutea ): rễ và hoa.', en: 'Cientian ( Gentiana lutea ): roots.' },
      { type: 'list', vi: '- Cây nhân sâm ( Panax quinguefolium và Panax ginseng ): rễ.', en: 'Ginseng ( Panax quinguefolium and Panax ginseng ): roots.' },
      { type: 'list', vi: '- Golden seal ( Hydrastis ) ( Hydrastis canadensis ): rễ.', en: 'Golden seal (Hydrastis) ( Hydrastis canadensis ): roots.' },
      { type: 'list', vi: '- Cây dũ sung ( Guaiacum officinale and Guaiacum sanctum ): gỗ.', en: 'Guaiaeum ( Guaiacum officinale and Guaiacum sanctum ): wood.' },
      { type: 'list', vi: '- Cây kim mai ( Hamamelis virginiana ): vỏ và lá.', en: 'Hamamelis ( witch hazel ) ( Hamamelis virginiana ): bark and leaves.' },
      { type: 'list', vi: '- Cây trị điên ( Veratrum album and Veratrum viride ): rễ.', en: 'Hellebore ( Veratrum album and Veratrum viride ): roots.' },
      { type: 'list', vi: '- Cây kỳ nham ( Hyoscyamus niger, muticus ): rễ, hạt và lá.', en: 'Henbane ( Hyoscyanius ) ( Hyoscyamus niger ): roots, seeds and leaves.' },
      { type: 'list', vi: '- Cây húng xạ ( Marrubium vulgare ): thảo dược (herbs), nhánh, thân và lá.', en: 'Horehound ( Marrubium vulgare ): herbs and stems.' },
      { type: 'list', vi: '- Cây bài hương ( Hyssopus officinalis ): lá và hoa.', en: 'Hyssop ( Hyssopus officinalis ): flowers and leaves.' },
      { type: 'list', vi: '- Cây ipêca ( Cephaelis ipecacuanha ): rễ.', en: 'Ipecacuanha ( Cephaelis ipecacuanha ): roots.' },
      { type: 'list', vi: '- Cây bìm bìm ( Ipomoea orizabensis ): rễ.', en: 'Ipomoea ( Ipomoea orizabensis ): roots.' },
      { type: 'list', vi: '- Cây chanh tím ( Pilocarpus jaborandi và Pilocarpus microphyllus ): lá', en: 'Jaborandi ( Pilocarpus jaborandi and Pilocarpus microphyllus ): leaves.' },
      { type: 'list', vi: '- Cây khoai sổ ( Ipomoea purga ): rễ.', en: 'Jalap ( Ipomoea purga ): roots.' },
      { type: 'list', vi: '- Cây oải hương ( Lavandula vera ): thảo dược (herbs) và hoa.', en: 'Lavender ( Lavandula vera ): flowers and herbs.' },
      { type: 'list', vi: '- Leptandra ( Veronica virginica ): rễ.', en: 'Leptandra ( Veronica virginica ): roots.' },
      { type: 'list', vi: '- Linaloe ( Bursera delpechiana ): gỗ.', en: 'Linaloe ( Bursera delpechiana ): wood.' },
      { type: 'list', vi: '- Cây đoan ( Tilia europaea ): hoa và lá.', en: 'Linden ( Tilia europaea ): flowers and leaves.' },
      { type: 'list', vi: '- Cây cam thảo ( Glycynhiza glabra ): rễ', en: 'Liquorice ( Glycynhiza glabra ): roots.' },
      { type: 'list', vi: '- Cây lobelia ( Lobelia inflata ): thảo dược (herbs) và hoa.', en: 'Lobelia ( Lobelia inflata ): herbs and flowers.' },
      { type: 'list', vi: '- Long pepper ( Piper longum ): rễ và thân dưới đất.', en: 'Long pepper ( Piper longum ): roots and underground stems.' },
      { type: 'list', vi: '- Cây dương xỉ đực ( Dryopteris filix-mas ): rễ.', en: 'Male fern ( Dryopteris filix-mas ): root.' },
      { type: 'list', vi: '- Cây cẩm quỳ ( Malva silvestris and Malva rotundifolia ): lá và hoa.', en: 'Mallow ( Malva silvestris and Malva rotundifolia ): leaves and flowers.' },
      { type: 'list', vi: '- Cây độc có quả vàng ( mandrake ): rễ và thân rễ.', en: 'Mandrake : roots or rhizomes.' },
      { type: 'list', vi: '- Cây kinh giới ô (xem “cây kinh giới ô dại” ở dưới).', en: 'Marjoram (see “Wild marjoram” below).' },
      { type: 'list', vi: '- Cây thục quỳ ( Althaea officinalis ): rễ, lá và hoa', en: 'Marshmallow ( Althaea officinalis ): flowers, leaves and roots.' },
      { type: 'list', vi: '- Cây hương phong ( Melissa officinalis ): lá và hoa', en: 'Melissa ( Melissa officinalis ): leaves, flowers and tops.' },
      { type: 'list', vi: '- Cây bạc hà (tất cả các loài).', en: 'Mint (all species).' },
      { type: 'list', vi: '- Mousse de chêne (rêu sồi) ( Evernia furfuracea ) (một loài địa y).', en: 'Mousse de chêne (oak moss) ( Evernia furfuracea ) (a lichen).' },
      { type: 'list', vi: '- Cây ngải ( Artemisia vulgaris ) : rễ và lá', en: 'Mugwort ( Artemisia vulgaris ): roots.' },
      { type: 'list', vi: '- Hạt mã tiền ( Strychnos nux-vomica ): hạt.', en: 'Nux vomica ( Strychnos nux-vomica ): seeds.' },
      { type: 'list', vi: '- Cây cam ( Citrus aurantium ): lá và hoa.', en: 'Orange free Citrus aurantium ): leaves and flowers.' },
      { type: 'list', vi: '- Cây đuôi diều ( Iris germanica, Iris pallida và Iris florentina ): rễ.', en: 'Orris ( Iris germanica, Iris pallida and Iris florentina ): roots.' },
      { type: 'list', vi: '- Cây hoa păng xê : hoa.', en: 'Pansy : flowers.' },
      { type: 'list', vi: '- Cây hoắc hương ( Pogostemon patchouli ): lá.', en: 'Patchouli ( Pogostemon patchouli ): leaves.' },
      { type: 'list', vi: '- Cây bạc hà cay (xem cây bạc hà).', en: 'Peppermint (sec mint).' },
      { type: 'list', vi: '- Cây thông và cây lãnh sam : chồi', en: 'Pine : buds.' },
      { type: 'list', vi: '- Plantago psyllium : cỏ và hạt.', en: 'Plantago psyllium : herbs and seeds.' },
      { type: 'list', vi: '- Podophyllum ( Podophyllum peltatum ): rễ hoặc thân rễ.', en: 'Podophyllum ( Podophyllum peltatum ): roots or rhizomes.' },
      { type: 'list', vi: '- Cây thuốc phiện ( Papaver somniferum ): ngọn (chưa chín, khô).', en: 'Poppy ( Papaver somniferum ): heads (unripe, dried).' },
      { type: 'list', vi: '- Pulsatilla ( Anemone pulsatilla ): cỏ.', en: 'Pulsatilla ( Anemone pulsatilla ): herbs.' },
      { type: 'list', vi: '- Cây cúc trừ sâu ( Chrysanthemum cinerariaefolium ): thân, lá và hoa.', en: 'Pyrethrum ( Chrysanthemum cinerariaefolium ): leaves, stems and flowers.' },
      { type: 'list', vi: '- Cây cúc trừ sâu ( Anacyclus pyrethrum ): rễ.', en: 'Pyrethrum ( Anacyclus pyrethrum ): roots.' },
      { type: 'list', vi: '- Cây thằn lằn ( Quassia amara và Picraena excelsa ): gỗ và vỏ', en: 'Quassia ( Quassia amara and Picraena excelsa ): wood and bark.' },
      { type: 'list', vi: '- Cây mộc qua : hạt.', en: 'Quince : seeds.' },
      { type: 'list', vi: '- Cây hoa gáo ( Krameria triadra ): rễ', en: 'Rhatany ( Krameria triadra ): roots.' },
      { type: 'list', vi: '- Cây đại hoàng ( Rheum officinale ): rễ', en: 'Rhubarb ( Rheum officinale ): roots.' },
      { type: 'list', vi: '- Cây hoa hồng : hoa', en: 'Rose : flowers.' },
      { type: 'list', vi: '- Cây cỏ hương thảo ( Rosmarinus officinalis ): lá và hoa', en: 'Rosemary ( Rosmarinus officinalis ): herbs, flowers and leaves.' },
      { type: 'list', vi: '- Cây cửu lý hương ( Ruta graveolens ): lá', en: 'Rue ( Ruta graveolens ): leaves.' },
      { type: 'list', vi: '- Cây hoa xôn ( Salvia officinalis ): hoa và lá', en: 'Sage ( Salvia officinalis ): leaves and flowers.' },
      { type: 'list', vi: '- Đậu St. Ignatius ( Strychnos ignatii ).', en: 'St. Ignatius beans ( Strychnos ignatii ).' },
      { type: 'list', vi: '- Cây gỗ đàn hương : mảnh (trắng và vàng).', en: 'Sandalwood : chips (white and yellow).' },
      { type: 'list', vi: '- Cây thổ phục linh ( Smilax ): rễ', en: 'Sarsaparilla ( Smilax ): roots.' },
      { type: 'list', vi: '- Cây de vàng ( Sassafras officinalis ): gỗ, vỏ và rễ.', en: 'Sassafras ( Sassafras officinalis ): bark, roots and wood.' },
      { type: 'list', vi: '- Cây bìm bìm nhựa xổ ( Convolvulus scammonia ): rễ.', en: 'Scammony ( Convolvulus scammonia ): roots.' },
      { type: 'list', vi: '- Cây viễn chí ( Polygala senega ): rễ', en: 'Senega ( Polygala senega ): roots.' },
      { type: 'list', vi: '- Cây lá keo ( Cassia acutifolia and Cassia angustifolia ): quả và lá', en: 'Senna ( Cassia acutifolia and Cassia angustifolia ): pods and leaves.' },
      { type: 'list', vi: '- Cây du ( Ulmus fulra ): vỏ', en: 'Slippery elm ( Ulmus fulra ): bark.' },
      { type: 'list', vi: '- Cây học cà ( Solanum nigrum ),', en: 'Solanum nigrum.' },
      { type: 'list', vi: '- Cây hành biển ( Urginea maritima, Urginea scilla ): thân', en: 'Squill ( Urginea maritima, Urginea scilla )): bulbs.' },
      { type: 'list', vi: '- Cây cà độc dược ( Datura stramonium ): lá và thân trên', en: 'Stramonium ( Datura stramonium ): leaves and tops.' },
      { type: 'list', vi: '- Họ La bố ma ( Strophanthus kombe ) : hạt.', en: 'Strophanthus ( Strophanthus kombe ): seeds.' },
      { type: 'list', vi: '- Cây cúc ngải ( Tanacetum vulgare ): rễ, lá và hạt.', en: 'Tansy ( Tanacetum vulgare ): roots, leaves and seeds.' },
      { type: 'list', vi: '- Tonka (tonquin) ( Dipterix odorata ): hột.', en: 'Tonka (tonquin) ( Dipterix odorata ): beans.' },
      { type: 'list', vi: '- Cây nữ lang ( Valeriana officinalis ): rễ', en: 'Valerian ( Valeriana officinalis ): roots.' },
      { type: 'list', vi: '- Cây hoa phổi ( Verbuscum thapsus, verbascum phlomoides ): lá và hoa', en: 'Verbascum (mullein) ( Verbuscum thapsus and verbascum phlomoides ): leaves and flowers.' },
      { type: 'list', vi: '- Cỏ roi ngựa : Lá và thân trên', en: 'Verbena : leaves and tops.' },
      { type: 'list', vi: '- Cây rau thuỷ ( Veronica officinalis ): lá', en: 'Veronica ( Veronica officinalis ): leaves.' },
      { type: 'list', vi: '- Cây giáng cua ( Viburnum prunifolium ): vỏ rễ.', en: 'Viburnum ( Viburnum prunifolium ): root bark.' },
      { type: 'list', vi: '- Cây hoa violet ( Viola odorata ): rễ và hoa khô.', en: 'Violets ( Viola odorata ): roots and dried flowers.' },
      { type: 'list', vi: '- Cây óc chó : lá.', en: 'Walnut : leaves.' },
      { type: 'list', vi: '- Cây kinh giới ô dại ( Origanum vulgare ); cây kinh giới ô ngọt ( Majorana hortensis hoặc Origanum majorana ) bị loại trừ ( Chương 7 ).', en: 'Wild marjoram ( Origanum vulgare ); sweet marjoram ( Majorana hortensis or Origanum majorana ) is excluded ( Chapter 7 ).' },
      { type: 'list', vi: '- Cây cỏ xa diệp ( Asperula odorata ): lá và hoa', en: 'Woodruff ( Asperula odorata ): herbs.' },
      { type: 'list', vi: '- Woodruff ( Asperula odorata ): thảo dược (herbs).', en: 'Wormseed ( Artemisia cina ): flowers.' },
      { type: 'list', vi: '- Cây ngải đắng ( Artemisia abssinthium ): lá và hoa.', en: 'Wormwood ( Artemisia abssinthium ): leaves and flowers.' },
      { type: 'list', vi: '- Yohimba ( Corynanthe johimbe ) : vỏ.', en: 'Yobimba ( Corynanthe johimbe ): bark.' },
      { type: 'paragraph', vi: 'Tên thực vật trong bảng tên nêu trên ( không toàn diện ) được đưa ra để giúp việc xác định cây một cách dễ dàng hơn. Các tên thực vật nêu trên của các loài cụ thể không có nghĩa là các loài khác cùng họ cây không được phân loại vào nhóm này.', en: 'The botanical names in the list above (which is not exhaustive ) are given to assist in the identification of the plants. Mention of the botanical name of a particular species does not necessarily indicate that other species of the same plant family are not classified in the heading.' },
      { type: 'paragraph', vi: 'Một số sản phẩm của nhóm này, theo các văn bản quốc tế được coi như là chất gây nghiện, được nêu trong danh sách ở cuối Chương 29.', en: 'Certain products of this heading, which are regarded as narcotic drugs under international instruments, are indicated in the list which appears at the end of Chapter 29.' },

      { type: 'heading', vi: '12.12 - Quả minh quyết (1), rong biển và các loại tảo khác, củ cải đường (sugar beet) và mía đường, tươi, ướp lạnh, đông lạnh hoặc khô, đã hoặc chưa nghiền; hạt và nhân của hạt và các sản phẩm thực vật khác (kể cả rễ rau diếp xoăn chưa rang thuộc loài Cichorium intybus satibium ) chủ yếu dùng làm thức ăn cho người, chưa được chi tiết hoặc ghi ở nơi khác.', en: '12.12 - Locust beans, seaweeds and other algae, sugar beet and sugar cane, fresh, chilled, frozen or dried, whether or not ground; fruit stones and kernels and other vegetable products (including unroasted chicory roots of the variety Cichorium intybus sativum ) of a kind used primarily for human consumption, not elsewhere specified or included.' },
      { type: 'paragraph', vi: '- Rong biển và các loại tảo khác:', en: '- Seaweeds and other algae :' },
      { type: 'list', vi: '1212.21 - - Thích hợp dùng làm thức ăn cho người', en: '1212.21 - - Fit for human consumption' },
      { type: 'list', vi: '1212.29 - - Loại khác', en: '1212.29 - - Other' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1212.91 - - Củ cải đường', en: '1212.91 - - Sugar beet' },
      { type: 'list', vi: '1212.92 - - Quả minh quyết (carob)', en: '1212.92 - - Locust beans (carob)' },
      { type: 'list', vi: '1212.93 - - Mía:', en: '1212.93 - - Sugar cane' },
      { type: 'list', vi: '1212.94 - - Rễ rau diếp xoăn', en: '1212.94 - - Chicory roots' },
      { type: 'list', vi: '1212.99 - - Loại khác', en: '1212.99 - - Other' },
      { type: 'paragraph', vi: '(A) Rong biển và các loại tảo khác.', en: '(A) Seaweeds and other algae.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm tất cả các loại rong biển và các loại tảo khác, ăn được hay không ăn được. Chúng có thể ở dạng tươi, ướp lạnh, đông lạnh, làm khô hoặc nghiền. Rong biển và các loại tảo khác dùng cho nhiều mục đích (ví dụ, dược phẩm, mỹ phẩm, thức ăn cho người, thức ăn chăn nuôi, phân bón).', en: 'This heading covers all seaweeds and other algae, whether or not edible. They may be fresh, chilled, frozen, dried or ground. Seaweeds and other algae are used for various purposes (e.g., pharmaceutical products, cosmetics, human consumption, animal feeding, fertilisers).' },
      { type: 'paragraph', vi: 'Nhóm này cũng gồm bột thô rong biển và bột thô của các loại tảo khác, dù tạo thành hay không tạo thành hỗn hợp của các loại rong biển và các loại tảo khác.', en: 'The heading also covers seaweed meal and meal of other algae, whether or not consisting of a mixture of many different varieties of seaweeds and other algae.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Thạch rau câu và carrageenan ( nhóm 13.02 ).', en: '(a) Agar-agar and carrageenan ( heading 13.02 ).' },
      { type: 'list', vi: '(b) Các loại tảo đơn bào chết ( nhóm 21.02 ).', en: '(b) Dead single-cell algae ( heading 21.02 ).' },
      { type: 'list', vi: '(c) Vi sinh nuôi cấy thuộc nhóm 30.02', en: '(c) Cultures of micro-organisms of heading 30.02 .' },
      { type: 'list', vi: '(d) Các loại phân bón thuộc nhóm 31.01 hoặc 31.05 .', en: '(d) Fertilisers of heading 31.01 or 31.05 .' },
      { type: 'paragraph', vi: '(B) Củ cải đường và mía đường.', en: '(B) Sugar beet and sugar cane .' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm củ cải đường và mía đường, dưới các dạng được nêu cụ thể trong nhóm này. Nhóm này không bao gồm bã mía, phần bã của cây mía còn lại sau khi ép lấy nước mía ( nhóm 23.03 ).', en: 'This heading also covers sugar beet and sugar cane, in the forms specified in the heading. The heading excludes bagasse, the fibrous portion of the sugar cane remaining after the juice has been extracted ( heading 23.03 ).' },
      { type: 'paragraph', vi: '(C) Quả minh quyết .', en: '(C) Locust beans .' },
      { type: 'paragraph', vi: 'Quả minh quyết là một loại quả của cây xanh nhỏ ( Ceratonia siliqua ) sinh sôi ở vùng Địa Trung Hải. Quả có vỏ màu nâu, nhiều hạt, chủ yếu được dùng để chưng cất hoặc làm thức ăn cho động vật.', en: 'Locust (or carob) beans are the fruit of a small evergreen tree ( Ceratonia siliqua ) indigenous to the Mediterranean region. They consist of a brown pod which contains a large number of seeds and are used mainly as a material for distilling or as animal feeding stuff.' },
      { type: 'paragraph', vi: 'Quả minh quyết chứa một tỷ lệ đường cao và đôi khi được ăn như mứt.', en: 'Locust beans contain a high proportion of sugar and are sometimes eaten as a sweetmeat.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm phôi nhũ, mầm, hạt quả cây minh quyết và cả bột mầm đã hoặc chưa trộn với bột vỏ.', en: 'This heading covers the endosperm, the germs, the whole seeds, and also powdered germs, whether or not mixed with powdered tegument.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm bột của phôi nhũ cây minh quyết, loại được phân loại vào nhóm 13.02 như chất nhầy hoặc chất làm đông.', en: 'The heading excludes locust bean endosperm flour which is classified in heading 13.02 as a mucilage or thickener.' },
      { type: 'paragraph', vi: '(D) Hạt quả và nhân của hạt và các sản phẩm rau khác (gồm cả rễ rau diếp xoăn chưa rang thuộc loài Cichorium intybus satirum ) chủ yếu dùng làm thức ăn cho người, chưa được chi tiết hoặc ghi ở nơi khác .', en: '(D) Fruit stones and kernels and other vegetable products (including unroasted chicory roots of the variety Cichorium intybus sativum ) of a kind used primarily for human consumption, not elsewhere specified or included.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm hạt quả và nhân quả và các sản phẩm rau khác, chủ yếu dùng làm thức ăn cho người một cách trực tiếp hay gián tiếp, chưa được chi tiết hoặc ghi ở nơi khác trong Danh mục.', en: 'This group includes fruit stones and kernels and other vegetable products of a kind mainly used, directly or indirectly, for human consumption, but not elsewhere specified or included in the Nomenclature.' },
      { type: 'paragraph', vi: 'Nhóm này do đó bao gồm nhân hạt đào (kể cả xuân đào), mơ và mận (được dùng chủ yếu làm sản phẩm thay thế hạt hạnh nhân). Các sản phẩm này vẫn được phân loại vào nhóm này mặc dù chúng được dùng để chiết xuất lấy dầu.', en: 'It therefore includes kernels of peaches (including nectarines), apricots and plums (used mainly as substitutes for almonds). These products remain in the heading even though they may also be used for the extraction of oil.' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm rễ rau diếp xoăn chưa rang thuộc loài Cichorium intybus satirum , tươi hoặc khô, còn nguyên rễ hay bị chặt. Rễ rau diếp xoăn đã rang thuộc loài này được dùng làm chất thay thế cà phê bị loại trừ ( nhóm 21.01 ). Các loại rễ của rau diếp xoăn thuộc loài khác chưa rang được phân loại vào nhóm 06.01 .', en: 'The heading also includes unroasted chicory roots of the variety Cichorium intybus satirum , whether fresh or dried, whole or chopped. The roasted chicory root of this variety, which is used as a coffee substitute, is excluded ( heading 21.01 ). Other unroasted chicory roots are classified in heading 06.01 .' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm thân của cây bạch chỉ, được dùng chủ yếu để sản xuất đường bạch chỉ hoặc làm mứt bạch chỉ. Thân cây này thông thường được bảo quản trong nước muối.', en: 'Angelica stems, used mainly to prepare candied angelica or angelica preserved by sugar, also fall in this heading. They are generally provisionally preserved in brine.' },
      { type: 'paragraph', vi: 'Nhóm này còn gồm cả cây lúa miến ngọt như loại saccharatum , dùng chủ yếu để làm xirô hoặc mật đường.', en: 'The heading also covers sweet sorghums, such as saccharatum , which are used primarily for the manufacture of syrup or molasses.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các loại hạt quả hoặc các loại hạt dùng trong nghệ thuật trạm khắc (ví dụ, hạt chà là) ( nhóm 14.04 ) và các nhân quả đã rang (thường được phân loại như các chất thay thế cà phê - nhóm 21.01 ).', en: 'The heading excludes fruit stones and pips of a kind used for carving (e.g., date stones) ( heading 14.04 ) and roasted fruit kernels (generally classified as coffee substitutes - heading 21.01 ).' },

      { type: 'heading', vi: '12.13 - Rơm, rạ và trấu từ cây ngũ cốc, chưa xử lý, đã hoặc chưa băm, nghiền, ép hoặc làm thành dạng viên.', en: '12.13 - Cereal straw and husks, unprepared, whether or not chopped, ground, pressed or in the form of pellets.' },
      { type: 'paragraph', vi: 'Nhóm này chỉ gồm rơm, rạ và trấu từ cây ngũ cốc chưa chế biến thu được từ quá trình đập ngũ cốc, hoặc băm, nghiền, ép hoặc làm thành dạng viên (nghĩa là được tích tụ lại bằng cách nén trực tiếp hoặc cho thêm chất kết dính với tỉ lệ không quá 3% tính theo trọng lượng), nhưng không được chế biến thêm. Nhóm này không bao gồm rơm rạ đã được làm sạch, được tẩy trắng hoặc nhuộm ( nhóm 14.01 ).', en: 'This heading is restricted to cereal straw and husks in an unprepared state as obtained from the threshing of cereals, or chopped, ground or pressed, or put up in the form of pellets (i.e. agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight), but not further prepared. It excludes cleaned, bleached or dyed straw ( heading 14.01 ).' },

      { type: 'heading', vi: '12.14 - Cải củ Thụy Điển, cải cầu vồng (mangold), rễ cỏ khô, cỏ khô, cỏ linh lăng, cỏ ba lá, cây hồng đậu, cải xoăn, đậu lu-pin, đậu tằm và các sản phẩm tương tự dùng làm thức ăn cho gia súc, đã hoặc chưa làm thành viên.', en: '12.14 - Swedes, mangolds, fodder roots, hay, lucerne (alfalfa), clover, sainfoin, forage kale, lupines, vetches and similar forage products, whether or not in the form of pellets.' },
      { type: 'list', vi: '1214.10 - Bột thô và viên cỏ linh lăng (alfalfa)', en: '1214.10 - Lucerne (alfalfa) meal and pellets' },
      { type: 'list', vi: '1214.90 - Loại khác', en: '1214.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers:' },
      { type: 'list', vi: '(1) Củ cải Thụy Điển ( Brassica nopobrassica ), cải cầu vồng (mangold), cà rốt (có màu trắng hoặc vàng nhạt) và các loại rễ cây, dùng làm thức ăn cho gia súc. Những loại rễ cây này vẫn được phân loại vào nhóm này ngay cả khi một số rễ cây cũng thích hợp dùng làm thức ăn cho người.', en: '(1) Swedes (rutabagas) ( Brassica napobrassica ), mangolds, forage turnips, forage carrots (white or pale yellow in colour) and other forage roots. These roots remain classified in this heading even though some of them may be suitable for human consumption.' },
      { type: 'list', vi: '(2) Cỏ khô, cỏ linh lăng (alfalfa), cỏ ba lá, cây hồng đậu, cải xoăn, đậu lu-pin, đậu tằm và các sản phẩm tương tự làm thức ăn cho gia súc, tươi hoặc khô, đã hoặc chưa cắt, ép hoặc băm vụn nhỏ. Những sản phẩm này vẫn thuộc nhóm này ngay cả khi chúng có hay không được ướp muối hoặc xử lý cách khác trong hầm chứa để ngăn chặn quá trình lên men hoặc hư hỏng.', en: '(2) Hay, lucerne (alfalfa), clover, sainfoin, forage kale, lupines, vetches and similar forage products, fresh or dried, whole, cut, chopped or pressed. These products remain in the heading whether or not they have been salted or otherwise treated in a silo to prevent fermentation or deterioration.' },
      { type: 'paragraph', vi: 'Khái niệm "các sản phẩm tương tự làm thức ăn cho gia súc" chỉ đề cập đến các loại cây trồng riêng cho mục đích này. Nó không bao gồm các phế liệu thực vật có thể được dùng cho mục đích tương tự ( nhóm 23.08 ).', en: 'The expression “similar forage products” refers only to plants specially grown for animal food. It does not include vegetable waste which may be used for the same purpose ( heading 23.08 ).' },
      { type: 'paragraph', vi: 'Sản phẩm dùng làm thức ăn cho gia súc thuộc nhóm này cũng có thể ở dạng viên, tức là, được tích tụ bằng cách nén, ép hoặc thêm chất kết dính với tỉ lệ không quá 3% tính theo trọng lượng.', en: 'The forage products of this heading may also be in the form of pellets, i.e. agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Cà rốt (có màu vàng đỏ nhạt) thuộc nhóm 07.06.', en: '(a) Carrots (reddish-yellow in colour) of heading 07.06 .' },
      { type: 'list', vi: '(b) Rơm, rạ và trấu từ cây ngũ cốc ( nhóm 12.13 ).', en: '(b) Cereal straw and husks ( heading 12.13 ).' },
      { type: 'list', vi: '(c) Sản phẩm rau dù được dùng làm thức ăn gia súc, nhưng không phải là được trồng cho riêng mục đích này như lá củ cải hoặc lá cà rốt và lá ngô ( nhóm 23.08 ).', en: '(c) Vegetable products which, though used for animal food, are not specially grown for that purpose, e.g., beet or carrot tops and maize (corn) leaves ( heading 23.08 ).' },
      { type: 'list', vi: '(d) Các chế phẩm dùng làm thức ăn chăn nuôi (ví dụ, thức ăn cho gia súc được làm ngọt) ( nhóm 23.09 ).', en: '(d) Preparations of a kind used in animal feeding (e.g., sweetened forage) ( heading 23.09 ).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 13
  // ------------------------------------------------------------
  {
    chapterNumber: 13,
    titleVi: 'CHƯƠNG 13: NHỰA CÁNH KIẾN ĐỎ; GÔM, NHỰA CÂY, CÁC CHẤT NHỰA VÀ CÁC CHẤT CHIẾT XUẤT TỪ THỰC VẬT KHÁC',
    titleEn: 'CHAPTER 13: LAC; GUMS, RESINS AND OTHER VEGETABLE SAPS AND EXTRACTS',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 13: Nhựa cánh kiến đỏ; gôm, nhựa cây, các chất nhựa và các chất chiết xuất từ thực vật khác', en: 'Chapter 13: Lac; gums, resins and other vegetable saps and extracts' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. Ngoài các mặt hàng khác , nhóm 13.02 áp dụng cho các chất chiết xuất từ cây cam thảo và cây kim cúc, cây hublong (hoa bia), cây lô hội và cây thuốc phiện.', 
        en: '1.- Heading 13.02 applies, inter alia , to liquorice extract and extract of pyrethrum, extract of hops, extract of aloes and opium.' 
      },
      { type: 'paragraph', vi: 'Nhóm này không áp dụng cho:', en: 'The heading does not apply to :' },
      { type: 'list', vi: '(a) Chất chiết xuất từ cây cam thảo có hàm lượng trên 10% tính theo trọng lượng là đường sucroza hoặc được đóng gói như kẹo (nhóm 17.04);', en: '(a) Liquorice extract containing more than 10 % by weight of sucrose or put up as confectioner) (heading 17.04);' },
      { type: 'list', vi: '(b) Chất chiết xuất từ malt (nhóm 19.01);', en: '(b) Malt extract (heading 19.01);' },
      { type: 'list', vi: '(c) Chất chiết xuất từ cà phê, chè hay chè paragoay (nhóm 21.01);', en: '(c) Extracts of coffee, tea or maté (heading 21.01);' },
      { type: 'list', vi: '(d) Các chất nhựa hoặc chất chiết xuất từ thực vật để làm đồ uống có cồn (Chương 22);', en: '(d) Vegetable saps or extracts constituting alcoholic beverages (Chapter 22);' },
      { type: 'list', vi: '(e) Long não (camphor), glycyrrhizin hay các sản phẩm khác thuộc nhóm 29.14 hoặc 29.38;', en: '(e) Camphor, glycyrrhizin or other products of heading 29.14 or 29.38;' },
      { type: 'list', vi: '(f) Dịch chiết đậm đặc từ thân cây anh túc có chứa hàm lượng alkaloid từ 50% trở lên tính theo trọng lượng (nhóm 29.39);', en: '(f) Concentrates of poppy straw containing not less than 50 % by weight of alkaloids (heading 29.39);' },
      { type: 'list', vi: '(g) Dược phẩm thuộc nhóm 30.03 hoặc 30.04 hoặc thuốc thử nhóm máu (nhóm 30.06);', en: '(g) Medicaments of heading 30.03 or 30.04 or blood-grouping reagents (heading 30.06);' },
      { type: 'list', vi: '(h) Chất chiết xuất làm thuốc nhuộm hoặc thuộc da (nhóm 32.01 hoặc 32.03);', en: '(h) Tanning or dyeing extracts (heading 32.01 or 32.03);' },
      { type: 'list', vi: '(ij) Tinh dầu, thể rắn, nguyên chất, chất tựa nhựa, nhựa dầu, nước cất tinh dầu hoặc dung dịch nước của tinh dầu hoặc các chế phẩm dựa trên chất thơm sử dụng để sản xuất đồ uống (Chương 33); hoặc', en: '(ij) Essential oils, concretes, absolutes, resinoids, extracted oleoresins, aqueous distillates or aqueous solutions of essential oils or preparations based on odoriferous substances of a kind used for the manufacture of beverages (Chapter 33); or' },
      { type: 'list', vi: '(k) Cao su tự nhiên, nhựa cây balata, nhựa két, nhựa cây cúc cao su, nhựa chicle hoặc các loại nhựa tự nhiên tương tự (nhóm 40.01).', en: '(k) Natural rubber, balata, gutta-percha, guayule, chicle or similar natural gums (heading 40.01).' },

      { type: 'heading', vi: '13.01 - Nhựa cánh kiến đỏ; gôm, nhựa cây, nhựa gôm và nhựa dầu tự nhiên (ví dụ, nhựa thơm từ cây balsam).', en: '13.01 - Lac; natural gums, resins, gum-resins and oleoresins (for example, balsams).' },
      { type: 'list', vi: '1301.20 - Gôm Ả rập', en: '1301.20 - Gum Arabic' },
      { type: 'list', vi: '1301.90 - Loại khác', en: '1301.00 - Other' },
      { type: 'paragraph', vi: '(I) Nhựa cánh kiến đỏ.', en: '(I) Lac .' },
      { type: 'paragraph', vi: 'Nhựa cánh kiến đỏ là chất nhựa do loại côn trùng có cùng họ với sâu yên chi (rệp son) và sâu kemet tạo ra trên một số cây ở vùng nhiệt đới.', en: 'Lac is a resinous substance produced on several kinds of tropical trees by an insect belonging to the same family as the cochineal and the kermes.' },
      { type: 'paragraph', vi: 'Một số thương phẩm quan trọng nhất là:', en: 'The most important commercial varieties are the following :' },
      { type: 'list', vi: '(A) Nhựa cánh kiến đỏ dạng thỏi (lắc thỏi), thường gồm các cành trên đó có lớp màng dày hoặc mỏng nhựa cánh kiến; nó có màu đỏ sẫm và là loại nhựa cánh kiến đỏ có mầu đậm nhất.', en: '(A) Stick lac , usually consisting of twigs on which the lac has been deposited in a more or less thick layer; it is dark red and the most highly coloured variety of lac.' },
      { type: 'list', vi: '(B) Nhựa cánh kiến đỏ dạng hạt ( lắc hạt), là loại cánh kiến đỏ được nghiền sau khi tách ra khỏi cành, thông thường người ra rửa để loại bỏ chất phẩm màu của cánh kiến đỏ.', en: '(B) Seed lac, the crushed lac detached from the branches, usually by washing which removes part of its colouring matter.' },
      { type: 'list', vi: '(C) Nhựa cánh kiến đỏ dạng phiến mỏng , còn gọi là cánh kiến đỏ dạng lá, lắc phiến hoặc lắc bản (shellac) thu được từ quá trình làm nóng chảy và lọc để tinh chế gôm. Nó có dạng các phiến mỏng, trong suốt và có màu hổ phách hoặc hơi đỏ. Sản phẩm tương tự ở dạng hình đĩa được gọi là “cánh kiến cúc áo”.', en: '(C) Shellac , also known as sheet, plate, or slab-lac, obtained by fusion and filtering which purifies the gum. It takes the form of thin, vitreous flakes, amber-coloured or reddish. A similar product in the shape of discs is known as “button lac ”.' },
      { type: 'paragraph', vi: 'Nhựa cánh kiến đỏ dạng phiến mỏng được được sử dụng rộng rãi trong quá trình sản xuất sáp dán, vecni và dùng trong kỹ thuật điện.', en: 'Shellac is used largely in the preparation of varnishes, in the electrical industry and for the production of sealing wax.' },
      { type: 'list', vi: '(D) Nhựa cánh kiến đỏ dạng khối (hay là cánh kiến ngọc hồng lựu) thu được chủ yếu từ các phế liệu trong quá trình chế biến nhựa cánh kiến đỏ dạng phiến mỏng.', en: '(D) Refuse lac (or garnet lac) obtained from the residues left from the preparation of shellac.' },
      { type: 'paragraph', vi: 'Nhựa cánh kiến đỏ cũng có thể được tẩy mầu hoặc tẩy trắng và đôi khi ở dạng các nùi được xoắn.', en: 'Lac may also be decolourised or bleached and is then sometimes put up in the form of twisted hanks.' },
      { type: 'paragraph', vi: 'Nhựa của một số cây phương Đông có thể đông lại, tạo thành một mảng bền khi ở ngoài không khí (như "sơn mài Trung Quốc", "sơn mài Nhật Bản"...) bị loại trừ ( nhóm 13.02 ).', en: 'The sap of certain oriental trees which hardens, forming a resistant film when exposed to air (known as “Japan lacquer”, “Chinese lacquer”, etc.), is excluded ( heading 13.02 ).' },
      { type: 'paragraph', vi: '(II) Gôm tự nhiên, nhựa cây, nhựa gôm và nhựa dầu.', en: '(II) Natural gums, resins, gum-resins and oleoresins.' },
      { type: 'paragraph', vi: 'Gôm tự nhiên, nhựa cây, nhựa gôm và nhựa dầu là chất được tiết ra từ thực vật, có thể bị đông khi để ngoài không khí. Các thuật ngữ này được sử dụng rộng rãi. Các sản phẩm này có các đặc tính khác biệt như sau:', en: 'Natural gums, resins, gum-resins and oleoresins are vegetable secretions, which may solidify on contact with air. These terms are often used indiscriminately. These products have the following distinguishing features :' },
      { type: 'list', vi: '(A) Gôm thật không mùi, không vị và ít nhiều hòa tan trong nước, tạo thành chất dính. Chúng cháy mà không tan chảy và không mùi.', en: '(A) True gums are odourless, tasteless and more or less soluble in water, forming sticky substances. They bum without melting and without odour.' },
      { type: 'list', vi: '(B) Nhựa cây không tan trong nước, có mùi nhẹ, là chất dẫn điện kém và có khả năng nhiễm điện âm. Chúng mềm đi và chảy ra hầu như hoàn toàn khi dùng nhiệt, và khi được đốt cháy chúng phát lửa có khói và có mùi đặc trưng.', en: '(B) Resins are insoluble in water, have a slight odour, are poor conductors of electricity and acquire a negative electric charge. They soften and melt more or less completely on the application of heat, and when ignited bum with a smoky flame and characteristic odour.' },
      { type: 'list', vi: '(C) Nhựa gôm , như tên gọi, gồm hỗn hợp tự nhiên của gôm và nhựa cây với các tỉ lệ khác nhau, và do đó hoà tan được một phần trong nước; nói chung chúng có mùi và vị hắc nồng và đặc trưng.', en: '(C) Gum-resins , as the name implies, consist of natural mixtures of gums and resins in variable proportions, and are therefore partly soluble in water; they generally have a penetrating and characteristic odour and taste.' },
      { type: 'list', vi: '(D) Nhựa dầu là tiết dịch thành phần chính chủ yếu là các thành phần giống nhựa cây và dễ bay hơi. Nhựa Balsams là nhựa dầu có mùi thơm đặc trưng do hàm lượng chất benzoic hoặc hợp chất cinnamic.', en: '(D) Oleoresins are exudates consisting mainly of volatile and resinous constituents. Balsams are oleoresins characterized by a high content of benzoic or cinnamic compounds.' },
      { type: 'paragraph', vi: 'Các sản phẩm chủ yếu là:', en: 'The principal products are :' },
      { type: 'list', vi: '(1) Gôm Ả rập (thu được từ nhiều loại cây keo khác nhau) (đôi khi còn được gọi là gôm Nil, gôm Ađen, gôm Sênêgan); gôm tragacanth (thu được từ một số cây họ bộ đậu Astragalus ); gôm Basra; gôm Anacardium (gôm từ cây đào lộn hột); gôm Ấn Độ; một số loại được gọi là “gôm bản xứ” thu được từ loại cây có họ Rosaceae như cây anh đào, cây mận, cây mơ, cây đào, cây hạnh nhân.', en: '(1) Gum Arabic (from various acacias) (sometimes also called Nile gum, Aden gum, Senegal gum); gum tragacanth (obtained from certain varieties of Astragalus ); Basra gum; Anacardium (gum of the cashew nut tree); Indian gum; certain so-called “ indigenous ” gums from various species of Rosaceae , such as cherry, plum, apricot, peach or almond trees.' },
      { type: 'list', vi: '(2) Nhựa dầu tươi (dạng lỏng) của cây thông (bao gồm cả nhựa thông), cây linh sam hoặc các loài cây lá kim khác (thô hoặc tinh chế), cũng như nhựa của cây lá kim (galipot,...) mà đã khô trên vết nứt của cây và có chứa phế thải thực vật.', en: '(2) Fresh oleoresins (liquids) of the pine (including turpentine), fir or other conifers (crude or refined), as well as conifer resins (galipot, etc.) which are dried on the incision on the tree and which contain vegetable waste.' },
      { type: 'list', vi: '(3) Nhựa copal (của Ấn độ, Braxin, Cônggô…), kể cả thạch copal; gôm nhựa cây côri; nhựa damar, nhựa mastic; nhựa elemi; nhựa trắc bách diệp; nhựa cây song máu rồng.', en: '(3) Copal (India, Brazil, Congo, etc.), including fossil copal; kauri gum; damar; mastic; clemi; sandarac; dragon’s blood.' },
      { type: 'list', vi: '(4) Gôm gút hay gôm campuchia; gôm amôniac; gôm a ngùy; gôm cây đại kích, gôm galbanum, gôm cây xương khô; nhựa hương hay hương trầm, nhựa thơm, nhựa acaroid; nhựa cây gaiac.', en: '(4) Gamboge; gum ammoniac; asafoetida; scammony; euphorbia; galbanum; opoponax; olibanum or incense; myrrh; acaroid; guaiacum.' },
      { type: 'list', vi: '(5) Cánh kiến trắng; nhựa cây bồ đề (thể rắn hay lỏng); nhựa bôm tôhe, peru, canada, copaihu; nhựa mecca; nhựa thapsia.', en: '(5) Gum benzoin; styrax or storax (solid or liquid); tolu balsam; Peruvian balsam; Canada balsam; copaiba balsam; Mecca balsam; thapsia.' },
      { type: 'list', vi: '(6) Nhựa gai dầu (canabis) (thô hoặc đã tinh chế) thu được từ cây gai dầu. (Nhựa gai dầu là loại nhựa có chứa chất gây nghiện xem bảng liệt kê ở cuối Chương 29).', en: '(6) Cannabis resin (crude or purified) obtained from the Cannabis plant. (Cannabis resin is a narcotic drug see the list at the end of Chapter 29.)' },
      { type: 'paragraph', vi: 'Nhựa, nhựa cây, nhựa gôm và nhựa dầu tự nhiên thuộc nhóm này có thể ở dạng thô, được tẩy rửa, tinh chế, tẩy trắng, được nghiền, hoặc xay thành dạng bột. Tuy nhiên, chúng không thuộc nhóm này nếu trải qua các quá trình xử lý như xử lý với nước dưới áp suất, được xử lý bằng axit vô cơ hoặc bằng nhiệt; ví dụ: gôm và nhựa - gôm được hòa tan qua xử lý áp suất nước ( nhóm 13.02 ), gôm được hòa tan qua xử lý bằng axit sulphuric ( nhóm 35.06 ), và nhựa được xử lý nhiệt để chúng hòa tan trong dầu khô ( nhóm 38.06 ).', en: 'The natural gums, resins, gum-resins and oleoresins covered by this heading may be crude, washed, purified, bleached, crushed or powdered. They are, however, excluded from this heading when they have been subjected to processes such as treatment with water under pressure, treatment with mineral acids or heat-treatment; for example : gums and gum-resins rendered water-soluble by treatment with water under pressure ( heading 13.02 ), gums rendered soluble by treatment with sulphuric acid ( heading 35.06), and resins which have been heat-treated to make them soluble in drying oils ( heading 38.06 ).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Hổ phách ( nhóm 25.30 ).', en: '(a) Amber ( heading 25.30 ).' },
      { type: 'list', vi: '(b) Thuốc có chứa nhựa balsam tự nhiên cũng như các thuốc được điều chế có chứa các nhựa balsam khác ( nhóm 30.03 hoặc 30.04 ).', en: '(b) Medicaments containing natural balsams and prepared medicaments of various kinds known as balsams ( heading 30.03 or 30.04 ).' },
      { type: 'list', vi: '(c) Thuốc nhuộm cánh kiến đỏ, chất màu được chiết xuất từ nhựa cánh kiến đỏ ( nhóm 32.03 ).', en: '(c) Lac-dye, the colouring matter extracted from lac ( heading 32.03 ).' },
      { type: 'list', vi: '(d) Chất tựa nhựa (thu được từ các chất của nhóm này) và nhựa dầu đã chiết ( nhóm 33.01 ).', en: '(d) Resinoids (extracted from the substances of this heading) and extracted oleoresins ( heading 33.01 ).' },
      { type: 'list', vi: '(e) Dầu tall (tall oil) đôi khi còn được gọi là nhựa thể lỏng ( nhóm 38.03 ).', en: '(e) Tall oil (sometimes known as “ liquid rosin ”) ( heading 38.03 ).' },
      { type: 'list', vi: '(f) Dầu nhựa thông ( nhóm 38.05 ).', en: '(f) Spirits of turpentine ( heading 38.05 ).' },
      { type: 'list', vi: '(g) Colophan, axit nhựa, tinh dầu colophan và dầu colophan, nhựa dính colophan, nhựa dính hắc ín dùng trong sản xuất rượu bia và các chế phẩm tương tự làm từ colophan ( Chương 38 ).', en: '(g) Rosin, resin acids, rosin spirit and rosin oils, resinates, rosin pitch, brewers’ pitch and similar preparations based on rosin ( Chapter 38 ).' },

      { type: 'heading', vi: '13.02 - Nhựa và các chiết xuất từ thực vật; chất pectic, muối của axit pectinic và muối của axit pectic; thạch rau câu (agar-agar) và các chất nhầy và các chất làm đặc, làm dày khác, đã hoặc chưa cải biến, thu được từ các sản phẩm thực vật.', en: '13.02 - Vegetable saps and extracts; pectic substances, pectinates and pectates; agar-agar and other mucilages and thickeners, whether or not modified, derived from vegetable products.' },
      { type: 'paragraph', vi: '- Nhựa và các chất chiết xuất từ thực vật:', en: '- Vegetable saps and extracts:' },
      { type: 'list', vi: '1302.11 - - Thuốc phiện', en: '1302.11 - - Opium' },
      { type: 'list', vi: '1302.12 - - Từ cam thảo', en: '1302.12 - - Of liquorice' },
      { type: 'list', vi: '1302.13 - - Từ hoa bia (hublong)', en: '1302.13 - - Of hops' },
      { type: 'list', vi: '1302.14 - - Từ cây ma hoàng', en: '1302.14 - - Of ephedra' },
      { type: 'list', vi: '1302.19 - - Loại khác', en: '1302.19 - - Other' },
      { type: 'list', vi: '1302.20 - Chất pectic, muối của axit pectinic và muối của axit pectic', en: '1302.20 - Pectic substances, pectinates and pectates' },
      { type: 'paragraph', vi: '- Chất nhầy và chất làm đặc, làm dày, đã hoặc chưa biến đổi thu được từ các sản phẩm thực vật:', en: '- Mucilages and thickeners, whether or not modified, derived from vegetable products :' },
      { type: 'list', vi: '1302.31 - - Thạch rau câu (agar-agar)', en: '1302.31 - - Agar-agar' },
      { type: 'list', vi: '1302.32 - - Chất nhầy và chất làm đặc, làm dày, đã hoặc chưa biến đổi, thu được từ quả minh quyết, hạt minh quyết hoặc hạt guar', en: '1302.32 - - Mucilages and thickeners, whether or not modified, derived from locust beans, locust bean seeds or guar seeds' },
      { type: 'list', vi: '1302.39 - - Loại khác', en: '1302.39 - - Other' },
      { type: 'paragraph', vi: '(A) Nhựa và các chiết xuất từ thực vật.', en: '(A) Vegetable saps and extracts.' },
      { 
        type: 'paragraph', 
        vi: 'Nhóm này bao gồm nhựa thực vật (sản phẩm thực vật thường thu được từ sự rỉ tự nhiên hoặc bị rạch), và các chiết xuất (sản phẩm thực vật chiết xuất từ nguyên liệu có nguồn gốc từ thực vật bằng dung môi) miễn là các chất chiết xuất này không được chi tiết hoặc được ghi tại các nhóm chi tiết hơn của Danh mục (xem danh sách loại trừ ở cuối phần (A) của phần Chú giải này).', 
        en: 'The heading covers vegetable saps (vegetable products usually obtained by natural exudation or incision) and extracts (vegetable products extracted from the original vegetable material by solvents), provided that they are not specified or included in more specific headings of the Nomenclature (see list of exclusions at the end of Part (A) of this Explanatory Note).' 
      },
      { type: 'paragraph', vi: 'Nhựa và các chiết xuất này khác với tinh dầu, chất tựa nhựa và nhựa dầu đã chiết thuộc nhóm 33.01, ở chỗ, ngoài các thành phần thơm dễ bay hơi, chúng có chứa các thành phần khác của cây với tỉ lệ cao hơn nhiều (ví dụ, chất diệp lục, chất tanin, chất đắng, carbohydrate và các chất được chiết xuất khác).', en: 'These saps and extracts differ from the essential oils, resinoids and extracted oleoresins of heading 33.01, in that, apart from volatile odoriferous constituents, they contain a far higher proportion of other plant substances (e.g., chlorophyll, tannins, bitter principles, carbohydrates and other extractive matter).' },
      { type: 'paragraph', vi: 'Nhựa và các chiết xuất được phân loại vào nhóm này bao gồm:', en: 'The saps and extracts classified here include :' },
      { type: 'list', vi: '(1) Thuốc phiện, nhựa khô của quả nang chưa chín của cây anh túc ( Papaver somniferum ) thu được từ vết rạch, hoặc chiết xuất, từ thân hoặc vỏ hạt. Thuốc phiện thường ở dưới dạng viên hoặc bánh có hình dạng và kích cỡ khác nhau. Tuy nhiên, dịch chiết đậm đặc từ thân cây anh túc có chứa hàm lượng alkaloid từ 50% trở lên tính theo trọng lượng thì bị loại trừ khỏi nhóm này (xem Chú giải 1(f) của Chương này).', en: '(1) Opium , the dried sap of the unripe capsules of the poppy ( Papaver somniferum ) obtained by incision of, or by extraction from, the stems or seed pods. It is generally in the form of balls or cakes of varying size and shape. However, concentrates of poppy straw containing not less than 50 % by weight of alkaloids are excluded from this heading (sec Note 1 (f) to this Chapter).' },
      { type: 'list', vi: '(2) Cam thảo chiết xuất từ rễ khô của cây thuộc họ Leguminosae ( Glycyrrhiza glabra ) bằng nước nóng dưới áp suất và sau đó cô đặc. Chất chiết xuất này có thể dưới dạng chất lỏng hoặc hình khối, bánh, thỏi, lát hoặc bột. (Chất cam thảo chứa hàm lượng đường sucroza trên 10% tính theo trọng lượng, hoặc được đóng gói (tức là, được chế biến) dưới dạng kẹo đường với hàm lượng đường bất kỳ, bị loại trừ , xem nhóm 17.04 ).', en: '(2) Liquorice extracted from the dried roots of a plant of the Leguminosae family ( Glycyrrhiza glabra ) by hot water under pressure and then concentrated. It may be In liquid form or in blocks, cakes, sticks, slices or powder. (Liquorice containing more than 10 % by weight of sucrose, or put up (i.e., prepared) as confectionery whatever the sugar content, is excluded, see heading 17.04 .)' },
      { type: 'list', vi: '(3) Chiết xuất từ hublong (hoa bia).', en: '(3) Extract of hops.' },
      { type: 'list', vi: '(4) Chiết xuất từ cây kim cúc , chủ yếu thu được từ hoa của các loài cây kim cúc khác nhau (ví dụ, Chrysanthemum cinerariaefolium ) bằng cách chiết xuất với dung môi hữu cơ như chất hexan thông thường hoặc "ete của dầu mỏ".', en: '(4) Pyrethrum extract , obtained mainly from the flowers of various pyrethrum varieties (e.g., Chrysanthemum cinerariaefolium ) by extraction with an organic solvent such as normal hexane or “petroleum ether".' },
      { type: 'list', vi: '(5) Chiết xuất từ rễ cây có chứa chất rotenone (dây mật, cubé, timbo, barbasco,...)', en: '(5) Extracts of the roots of plants containing rotenone (denis, cubé, timbo, barbasco, etc.).' },
      { type: 'list', vi: '(6) Chiết xuất và cồn của bất kỳ cây nào họ Cannabis (gai dầu).', en: '(6) Extracts and tinctures of any plant of the genus Cannabis.' },
      { type: 'paragraph', vi: 'Nhựa gai dầu, thô hoặc đã tinh chế, không thuộc nhóm này (nhóm 13.01).', en: 'Cannabis resin, whether crude or purified, is excluded (heading 13.01).' },
      { type: 'list', vi: '(7) Chiết xuất từ nhân sâm , thu được từ rút nước hoặc chất cồn, được đóng gói hay không được đóng gói để bán lẻ.', en: '(7) Ginseng extract , obtained by water or alcohol extraction, whether or not put up for retail sale.' },
      { type: 'paragraph', vi: 'Hỗn hợp gồm chiết xuất từ nhân sâm trộn với các thành phần khác (ví dụ, lactoza hoặc glucoza) được dùng để chế biến "trà sâm" hoặc đồ uống từ sâm bị loại trừ ( nhóm 21.06 ).', en: 'Mixtures of ginseng extract with other ingredients (e.g., lactose or glucose) used for the preparation of ginseng “ tea ” or beverage are excluded ( heading 21.06 ).' },
      { type: 'list', vi: '(8) Nhựa lô hội , là lớp nhựa dày có vị rất đắng, được lấy từ một số loại cây có cùng tên (họ Liliaceae) .', en: '(8) Aloes , a thickened sap with a very bitter taste, obtained from several varieties of the plant with the same name ( Liliaceae family).' },
      { type: 'list', vi: '(9) Podophyllum , là chất như nhựa được chiết xuất bằng chất có cồn từ thân rễ khô của podophyllum peltatum .', en: '(9) Podophyllum , a resinous substance extracted by alcohol from the dried rhizomes of Podophyllum peltatum .' },
      { type: 'list', vi: '(10) Hoàng nà (nhựa độc curare), nước chiết xuất từ lá và vỏ của các loại cây có họ Strychnos .', en: '(10) Curare , an aqueous extract from the leaves and bark of various plants of the Strychnos family.' },
      { type: 'list', vi: '(11) Chiết xuất từ cây thằn lằn hoa giềng (quassia amara), thu được từ gỗ của nhiều dạng cây có cùng tên thuộc họ Simaroubaceae , sống ở vùng Nam Mỹ.', en: '(11) Quassia amara extract, obtained from the wood of the shrub of the same name ( Simaroubaceae family), which grows in South America.' },
      { type: 'paragraph', vi: 'Quassin, vị đắng chiết xuất từ gỗ cây thằn lằn hoa giềng, là một hợp chất dị vòng thuộc nhóm 29.32.', en: 'Quassin, the principal bitter extract of the wood of the Quassia amara , is a heterocyclic compound of heading 29.32 .' },
      { type: 'list', vi: '(12) Các chiết xuất dược phẩm khác , ví dụ, cây cà dược, alder đen (alder buckthorn), cây hắc mai, tỏi, cây gentian, cây jalap, cây canhkina, cây đại hoàng, cây thổ phục linh, cây me, cây nữ lang, búp thông, cây coca, cây dưa đắng, cây dương xỉ đực, cây phỉ, cây kỳ nham, cây lúa mạch đen.', en: '(12) Other medicinal extracts , e.g., belladonna, black alder (alder buckthorn), cascara sagrada. garlic, gentian, jalap, cinchona, rhubarb, sarsaparilla, tamarind, valerian, pine buds, coca, colocynth, male fern, witch hazel, henbane, ergot of rye.' },
      { type: 'list', vi: '(13) " Manna ", nhựa ngọt, thể rắn thu được từ vết nứt, rãnh của một số loại cây tần bì.', en: '(13) Manna , a solid, sweet sap obtained by incision from certain varieties of ash tree.' },
      { type: 'list', vi: '(14) Nhựa bẫy chim , keo nhầy và quánh, có màu lục nhạt, được chiết xuất từ quả cây tầm gửi hoặc từ cây nhựa ruồi.', en: '(14) Bird lime , the viscous and stringy glue, greenish in colour, extracted from mistletoe berries or holly.' },
      { type: 'list', vi: '(15) Chiết xuất nước thu được từ lõi cây cassia. Tuy nhiên, quả và lõi cây cassia bị loại trừ ( nhóm 12.11 ).', en: '(15) Aqueous extract obtained from cassia pulp. Cassia pods and cassia pulp are, however, excluded ( heading 12.11 ).' },
      { type: 'list', vi: '(16) Gôm " Kino ", một loại nhựa cô đặc của một số cây nhiệt đới được dùng làm thuốc và thuộc da.', en: '(16) Cum kino , a thickened sap of certain tropical trees used in tanning and medicine.' },
      { type: 'list', vi: '(17) Sơn mài Nhật Bản (hoặc Trung Quốc) (sơn mài tự nhiên), là loại nhựa thu được từ vết nứt, rạch từ một số cây bụi họ Rhus (urushi) mọc ở vùng Viễn Đông (ví dụ, Rhus vernicifera ). Nó dùng làm lớp phủ hoặc trang trí các đồ vật khác nhau (tráp, hộp...)', en: '(17) Japan ( or Chinese ) lacquer (natural lacquer), a sap obtained by incision from certain species of shrubs known as rhus (urushi) growing in the Far East (e.g., Rhus vernicifera ). It is used for coaling or decorating various articles (trays, chests, etc.).' },
      { type: 'list', vi: '(18) Nhựa đu đủ (papaw) , đã hoặc chưa làm khô, nhưng chưa được tinh chế thành enzym đu đủ. (Những giọt nhựa cô đọng có thể được quan sát qua kính hiển vi). Nhóm này không bao gồm papain ( nhóm 35.07) .', en: '(18) Papaw juice, whether or not dried, but not purified as papain enzyme. (The agglomerated latex globules can still be observed on microscopic examination.) Papain is excluded ( heading 35.07 ).' },
      { type: 'list', vi: '(19) Chiết xuất từ cola, được lấy từ hạt cola (hạt của nhiều loại cola , ví dụ, cola nitida ) và dùng chủ yếu để sản xuất một số loại đồ uống.', en: '(19) Cola (kola) extract , obtained from cola nuts (seeds of various Cola species, e.g., Cola nitida ) and used mainly in the manufacture of certain beverages.' },
      { type: 'list', vi: '(20) Chiết xuất từ vỏ hạt điều. Tuy nhiên, nhóm này không bao gồm chất polymer của chiết xuất dung dịch của vỏ hạt điều (thường thuộc nhóm 39.11 ).', en: '(20) Cashew nutshell extract . The polymers of cashew nutshell liquid extract are, however, excluded (generally heading 39.11 ).' },
      { type: 'list', vi: '(21) Nhựa dầu vani , đôi khi người ta gọi sai thành “chất tựa nhựa vani” hoặc “chiết xuất của vani”.', en: '(21) Vanilla oleoresin (sometimes erroneously known as “vanilla resinoid” or “vanilla extract”).' },
      { type: 'paragraph', vi: 'Nhựa cây thường được làm cho đặc, dày, hoặc được làm đông đặc. Chiết xuất có thể ở dạng lỏng, sệt hoặc rắn. “ Cồn thuốc ” là các chiết xuất vẫn bị phân hủy trong cồn tùy theo cách chúng được chiết xuất; cái được gọi là “ chiết xuất lỏng ” là dung dịch của các chiết xuất hòa tan trong cồn, glycerin hoặc dầu khoáng, chẳng hạn. Cồn thuốc và chiết xuất lỏng nói chung được tiêu chuẩn hóa (ví dụ, chiết xuất từ cây kim cúc có thể được chuẩn hóa bằng cách pha thêm dầu khoáng để đạt các phẩm cấp với hàm lượng kim cúc tiêu chuẩn, ví dụ, 2%, 20% hoặc 25%). Chất chiết xuất thể rắn thu được bằng cách làm bay hơi dung môi. Chất trơ đôi khi được bổ sung vào một số chất chiết xuất để các chất này dễ làm thành bột hơn (ví dụ, chiết xuất cây cà dược, được bổ sung gôm Ả rập đã nghiền thành bột), hoặc để thu được nồng độ tiêu chuẩn (ví dụ, một lượng tinh bột nhất định được bổ sung vào thuốc phiện để tạo ra sản phẩm chứa lượng morphine nhất định). Việc thêm vào các chất nói trên không ảnh hưởng đến việc phân loại các chất chiết xuất thể rắn này. Tuy nhiên, chất chiết xuất có thể không cần trải qua các chu trình chiết bổ sung hoặc các quy trình tinh chế, ví dụ tinh chế bằng phương pháp sắc ký, làm tăng hoặc giảm các hợp chất hoặc nhóm hợp chất nhất định đến mức độ không thể đạt được chỉ bằng phương pháp chiết xuất dung môi ban đầu.', en: 'Saps are usually thickened or solidified. Extracts may be in liquid, paste or solid form. “Tinctures" are extracts still dissolved in the alcohol by means of which they are extracted; the so-called “ fluid extracts ” are solutions of extracts in, for example, alcohol, glycerol or mineral oil. Tinctures and fluid extracts are generally standardised (for instance, pyrethrum extract may be standardised by adding mineral oil to produce commercial grades with a standard pyrethrins content of, e.g., 2 %, 20 % or 25 %). Solid extracts are obtained by evaporating the solvent. Inert substances are sometimes added to certain extracts so that they can be more easily reduced to powder (e.g., belladonna extract, to which powdered gum Arabic is added), or to obtain a standard strength (for instance, certain quantities of starch are added to opium in order to obtain a product containing a known portion of morphine). The addition of such substances does not affect the classification of these solid extracts. However, extracts may not be subjected to additional extraction cycles or to purification processes, such as chromatograhic purification, that increase or decrease certain compounds or compound classes to a degree that cannot be achieved solely by means of initial solven extraction.' },
      { type: 'paragraph', vi: 'Các chiết xuất có thể là đơn giản hoặc là hợp chất. Các chiết xuất đơn giản thu được từ quá trình xử lý một loại cây duy nhất. Chiết xuất hợp chất thu được bằng cách pha trộn các chiết xuất đơn giản hoặc bằng cách xử lý các hợp chất của nhiều loại cây khác nhau. Chiết xuất hợp chất (ở dạng cồn lỏng hay ở các dạng khác) do đó có chứa các thành phần của một số loại cây; chúng bao gồm chiết xuất hợp chất thuốc tẩy jalap, chiết xuất hợp chất của cây lô hội, chiết xuất hợp chất của cây canhkina …', en: 'Extracts may be simple or compound. Simple extracts are obtained by the treatment of only one variety of plant. Compound extracts are obtained either by mixing simple extracts or by treating mixtures of different varieties of plants. Compound extracts (whether in the form of alcoholic tinctures or in any other forms) therefore contain the constituents of several kinds of plant; they include compound jalap extract, compound extract of aloes, compound extract of cinchona, etc.' },
      { type: 'paragraph', vi: 'Nhựa và các chiết xuất từ thực vật thuộc nhóm này thường là các nguyên liệu thô dùng cho nhiều sản phẩm khác nhau. Chúng bị loại trừ khỏi nhóm này khi chúng có đặc tính của chế phẩm thực phẩm, thuốc… do được bổ sung thêm một số chất khác. Chúng cũng bị loại trừ khỏi nhóm này khi chúng được tinh luyện hoặc tinh chế ở mức độ cao, ví dụ, bằng phương pháp sắc ký tinh chế, siêu lọc, hoặc các chu trình chiết xuất bổ sung (ví dụ: chiết xuất lỏng- lỏng) sau khi chiết xuất lần đầu.', en: 'The vegetable saps and extracts of this heading are generally raw materials for various manufactured products. They are excluded from the heading when, because of the addition of other substances, they have the character of food preparations, medicaments, etc. They are also excluded from the heading when they are highly refined or purified, e.g., by means of chromatographic purification, ultrafiltration, or additional extraction cycles (e.g liquid-liquid extraction) following initial extraction.' },
      { type: 'paragraph', vi: 'Một số sản phẩm thuộc nhóm này, được coi là chất gây nghiện theo các văn kiện quốc tế, được nêu trong danh sách ở cuối Chương 29.', en: 'Certain products of this heading, which are regarded as narcotic drugs under international instruments, are indicated in the list appearing at the end of Chapter 29.' },
      { type: 'paragraph', vi: 'Các ví dụ cho các chế phẩm bị loại trừ là:', en: 'Examples of excluded preparations are :' },
      { type: 'paragraph', vi: '(i) Xirô đã pha hương liệu có chứa các chiết xuất từ thực vật ( nhóm 21.06 ).', en: '(i) Flavoured syrups containing vegetable extracts ( heading 21.06 ).' },
      { type: 'paragraph', vi: '(ii) Chế phẩm dùng trong sản xuất đồ uống. Các chế phẩm này được thu từ việc trộn các chiết xuất thực vật thuộc nhóm này với axit lactic, axit tartaric, axit citric, axit phosphoric, chất bảo quản, chất tạo bọt, nước hoa quả...và đôi khi với tinh dầu. Chế phẩm trên thường được phân loại vào nhóm 21.06 hoặc 33.02 .', en: '(ii) Preparations used for making beverages . These preparations are obtained by compounding vegetable extracts of this heading with lactic acid, tartaric acid, citric acid, phosphoric acid, preserving agents, foaming agents, fruit juices, etc., and sometimes with essential oils. The preparations thus obtained are generally classified in heading 21.06 or 33.02 .' },
      { type: 'paragraph', vi: '(iii) Chế phẩm dược (một số được biết đến như “cồn thuốc”) gồm các hợp chất của các chiết xuất thực vật với các sản phẩm khác (ví dụ, chế phẩm bao gồm hợp chất của các chiết xuất capsicum, cồn của nhựa thông, long não và methyl salixylate, hoặc các hợp chất của cồn thuốc phiện, dầu cây hồi, long não và axit benzoic) ( nhóm 30.03 hoặc nhóm 30.04 ).', en: '(iii) Medicinal preparations (some of which are also known as “ tinctures” consisting of mixtures of vegetable extracts with other products (e.g., preparations which consist of a mixture of extract of capsicum, spirits of turpentine, camphor and methyl salicylate, or of a mixture of tincture of opium, anise oil, camphor and benzoic acid) ( heading 30.03 or 30.04 ).' },
      { type: 'paragraph', vi: '(iv) Các sản phẩm trung gian dùng cho quá trình sản xuất thuốc trừ sâu , bao gồm chiết xuất từ loài hoa kim cúc được pha loãng bằng cách bổ sung thêm dầu khoáng với hàm lượng kim cúc dưới 2%, hoặc với các chất khác như synergist (ví dụ, Piper onyl butoxide.) được thêm vào ( nhóm 38.08 ).', en: '(iv) Intermediate products for the manufacture of insecticides , consisting of pyrethrum extracts diluted by addition of mineral oil in such quantities that the pyrethrins content is less than 2 %, or with other substances such as synergists (e.g., pipcronyl butoxide) added ( heading 38.08 ).' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm các chiết xuất từ thực vật đã được trộn hoặc pha (mà không thêm các chất khác) cho mục đích phòng hoặc chữa bệnh. Những hợp chất này, và các chiết xuất hợp chất thuốc tương tự thu được từ quá trình xử lý hợp chất của các loại cây, được phân loại vào nhóm 30.03 hay 30.04 . Nhóm sau (30.04) cũng bao gồm cả các chiết xuất thực vật bằng phương pháp đơn giản (dù được hay chưa được chuẩn hóa hoặc được hòa tan trong dung môi bất kỳ) khi được đóng gói thành liều lượng để dùng cho việc phòng và chữa bệnh hoặc thành các dạng hoặc đóng gói để bán lẻ cho cùng mục đích nêu trên.', en: 'The heading also excludes vegetable extracts which have been mixed or compounded (without the addition of other substances) for therapeutic or prophylactic purposes. Such mixtures, and similar medicinal compound extracts made by treating a mixture of plants, are classified in heading 30.03 or 30.04 . That latter heading also covers simple vegetable extracts (whether or not standardised or dissolved in any solvent) when put up in measured doses for therapeutic or prophylactic purposes or in forms or packings for retail sale for such purposes.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm tinh dầu, chất tựa nhựa và nhựa dầu đã chiết ( nhóm 33.01 ). Tinh dầu (có thể cũng thu được từ việc chiết xuất dung môi) khác với các chiết xuất được phân loại trong nhóm này bởi vì chúng chủ yếu bao gồm các thành phần chất thơm dễ bay hơi. Chất tựa nhựa khác với chiết xuất trong nhóm này vì chúng thu được bằng cách chiết xuất các nguyên liệu nhựa cây từ thực vật không có tế bào tự nhiên hoặc nguyên liệu giống nhựa cây từ động vật thông qua dung môi hữu cơ hoặc chất lưu siêu hạn (ví dụ, khí cacbonic dưới áp suất). Nhựa dầu đã chiết khác với các chiết xuất thuộc nhóm này vì chúng (1) thu được từ các chất thực vật thô có tế bào tự nhiên (hầu hết là cây gia vị hoặc cây có chất thơm), hoặc bằng cách chiết xuất dung môi hữu cơ hoặc bằng cách chiết xuất chất lưu tới hạn, và (2) bao gồm các thành phần thơm dễ bay hơi cùng với các hương liệu không bay hơi, quyết định mùi hoặc vị đặc trưng của cây gia vị hoặc cây có mùi thơm.', en: 'The heading excludes essential oils, resinoids and extracted oleoresins ( heading 33.01 ). Essential oils (which may also be obtained by solvent extraction) differ from the extracts classified under this heading in that they are essentially composed of volatile odoriferous substances. Resinoids differ from the extracts of this heading in that they are obtained by the organic solvent or super-critical fluid (e.g., carbon dioxide gas under pressure) extraction of dried natural non-cellular vegetable or animal resinous materials. Extracted oleoresins differ from the extracts provided for in this heading in that they (1) are obtained from natural cellular raw plant materials (almost always spices or aromatic plants), either by organic solvent extraction or by super-critical fluid extraction, and (2) contain volatile odoriferous principles together with non-volatile flavouring principles, which define the characteristic odour or flavour of the spice or aromatic plant.' },
      { type: 'paragraph', vi: 'Nhóm này cũng không bao gồm các sản phẩm thực vật sau đây, mà được phân loại vào các nhóm chi tiết hơn tại Danh mục:', en: 'The heading further excludes the following vegetable products, classified under more specific headings of the Nomenclature :' },
      { type: 'list', vi: '(a) Gôm, nhựa cây, nhựa gôm và nhựa dầu tự nhiên ( nhóm 13.01 ).', en: '(a) Natural gums, resins, gum-resins and oleoresins ( heading 13.01 ).' },
      { type: 'list', vi: '(b) Chiết xuất malt ( nhóm 19.01 ).', en: '(b) Malt extract ( heading 19.01 ).' },
      { type: 'list', vi: '(c) Chiết xuất của cà phê, chè hoặc chè Paragoay ( nhóm 21.01 ).', en: '(c) Extracts of coffee, tea or maté ( heading 21.01 ).' },
      { type: 'list', vi: '(d) Nhựa và chất chiết xuất của thực vật làm đồ uống có cồn ( Chương 22 ).', en: '(d) Vegetable saps and extracts constituting alcoholic beverages ( Chapter 22 ).' },
      { type: 'list', vi: '(e) Chiết xuất của thuốc lá ( nhóm 24.03 ).', en: '(e) Tobacco extracts ( heading 24.03 ).' },
      { type: 'list', vi: '(f) Long não ( nhóm 29.14 ), glycyrrhizin và glycyrrhizates ( nhóm 29.38 ).', en: '(f) Camphor ( heading 29.14 ) and glycyrrhizin and glycyrrhizates ( heading 29.38 ).' },
      { type: 'list', vi: '(g) Chiết xuất được dùng làm thuốc thử để xác định nhóm máu ( nhóm 30.06 ).', en: '(g) Extracts used as blood-grouping reagents ( heading 30.06 ).' },
      { type: 'list', vi: '(h) Chiết xuất tanin ( nhóm 32.01 ).', en: '(h) Tanning extracts ( heading 32.01 ).' },
      { type: 'list', vi: '(ij) Chiết xuất nhuộm ( nhóm 32.03 ).', en: '(ij) Dyeing extracts ( heading 32.03 ).' },
      { type: 'list', vi: '(k) Cao su tự nhiên, nhựa cây balata, nhựa két, nhựa cây cúc cao su, nhựa cây họ sacolasea tự nhiên và các loại nhựa tự nhiên tương tự ( nhóm 40.01 ).', en: '(k) Natural rubber, balata, gutta-percha, guayule, chicle and similar natural gunis ( heading 40.01 ).' },
      { type: 'paragraph', vi: '(B) Chất pectic, muối của axit pectinic và muối của axit pectic.', en: '(B) Pectic substances, pectinates and pectates.' },
      { type: 'paragraph', vi: 'Chất pectic (trong thương phẩm được biết với cái tên “pectin”) là các polisacarit mà thành phần cơ bản cấu tạo là axit polygalacturonic. Chất pectic có trong tế bào của cây, đặc biệt là trong quả và rau, được chiết xuất bằng phương pháp công nghiệp từ bã của táo, lê, quả mộc qua, cam quýt, củ cải đường... Pectin chủ yếu được dùng như tác nhân “kết dính” để làm mứt quả hoặc các chất bảo quản khác. Chúng có thể ở dưới dạng lỏng hoặc dạng bột, và được phân loại trong nhóm này dù có hay không được chuẩn hóa bằng cách pha thêm đường (glucoza, sucroza,…) hoặc các sản phẩm khác (để đảm bảo không thay đổi đặc tính khi sử dụng). Đôi khi chúng bao gồm citrate natri hoặc các muối đệm khác.', en: 'Pectic substances (generally known in commerce as “ pectin ”) are polysaccharides, the basic structure of which consists of polygalacturonic acids. They occur in the cells of plants, particularly fruit and vegetables, and are commercially extracted from the residues of apples, pears, quinces, citrus fruit, sugar beet, etc. Pectins are mainly used as “ setting ” agents in the preparation of jam and other preserves. They may be liquids or powders, and are classified in this heading whether or not standardised by the addition of sugars (glucose, sucrose, etc.) or other products (in order to ensure a constant activity in use). They sometimes contain sodium citrate or other buffer salts.' },
      { type: 'paragraph', vi: 'Muối pectinate là muối của axit pectinic (một phần là axit methoxylated polygalacturonic) và muối pectate là muối của axit pectic (axit demethoxylate pectinic). Chúng có chung nhiều tính chất và mục đích sử dụng như chất pectin.', en: 'Pectinates are salts of pectinic acids (partially methoxylated polygalacturonic acids) and pectates are salts of pectic acids (demethoxylated pectinic acids). They have much the same properties and uses as pectins.' },
      { type: 'paragraph', vi: '(C) Thạch rau câu và các chất nhầy và chất làm đặc, làm dày khác, đã hoặc chưa cải biến, thu được từ các sản phẩm thực vật .', en: '(C) Agar-agar and other mucilages and thickeners, whether or not modified, derived from vegetable products.' },
      { type: 'paragraph', vi: 'Các chất nhầy và chất làm đặc, làm dày, thu được từ các sản phẩm thực vật , phồng lên trong nước lạnh và hoà tan trong nước nóng, khi gặp lạnh trở thành khối đồng nhất, sền sệt và thường không vị khi được làm mát. Các sản phẩm này chủ yếu được dùng như sản phẩm thay thế chất gelatin dùng trong công nghiệp thực phẩm, dùng để làm hồ giấy hoặc hồ vải, lọc một số chất lỏng, sử dụng cho nuôi cấy vi khuẩn, trong dược phẩm và để sản xuất mỹ phẩm. Chúng có thể được biến đổi thông qua xử lý hoá học (ví dụ, este hoá, ete hoá, được xử lý với borax, axit hoặc chất kiềm).', en: 'Mucilages and thickeners, derived from vegetable products , swell in cold water and dissolve in hot, forming a homogeneous, gelatinous and generally tasteless mass on cooling. They are chiefly used as alternatives to gelatin in the preparation of food, in the manufacture of textile or paper dressings, to clarify certain liquids, for bacterial culture, in pharmacy and in the manufacture of cosmetics. They may be modified by chemical treatment (for example, esterified. etherified, treated with borax, acids or alkalis).' },
      { type: 'paragraph', vi: 'Các sản phẩm này vẫn được phân loại trong nhóm này dù có hay không được chuẩn hóa bằng cách pha thêm đường (glucoza, sucroza…) hoặc các sản phẩm khác (để đảm bảo không thay đổi đặc tính khi sử dụng).', en: 'These products remain classified in this heading whether or not standardized by the addition of sugars (glucose, sucrose, etc.) or other products (in order to ensure a constant activity in use).' },
      { type: 'paragraph', vi: 'Các sản phẩm quan trọng nhất là:', en: 'The most important are :' },
      { type: 'list', vi: '(1) Thạch rau câu thu được từ quá trình chiết xuất một số loại tảo biển được thấy chủ yếu ở vùng Ấn Độ Dương và Thái Bình Dương, và thường ở dưới dạng sợi nhỏ được làm khô, dạng vảy, dạng bột hoặc ở thể keo sau khi được xử lý bằng axit. Trong thương mại, loại thạch này còn được biết đến trong tên “thạch trắng” và cũng là chất gelatin thực vật Nhật Bản (hoặc rêu) hoặc Tảo spinosa .', en: '(1) Agar-agar (or agar) obtained by extraction from certain marine algae found mainly in the Indian and Pacific Oceans, and usually presented in the form of dried fibres, flakes, powder or in a gelatinous form obtained by treatment with acids. It is commercially known as “ gelose " and also as Japanese vegetable gelatin (or moss) or Alga spinosa .' },
      { type: 'list', vi: '(2) Bột phôi nhũ từ hạt minh quyết ( Ceratonia siliqua ) hoặc hạt guar ( Cyamopsis psoralioides hoặc Cyamopsis tetragonoloba ). Các loại bột này được phân loại trong nhóm này, dù có hay không bị biến đổi do được xử lý bằng hoá học để cải tiến hoặc ổn định thuộc tính nhầy (tính nhớt, độ tan...).', en: '(2) Endosperm flour of locust beans ( Ceratonia siliqua ) or guar seeds ( Cyamopsis psoralioides or Cyamopsis tetragonoloba ). These flours are included in this heading, whether or not modified by chemical treatment in order to improve or stabilise their mucilaginous properties (viscosity, solubility, etc.).' },
      { type: 'list', vi: '(3) Carrageenan được chiết xuất từ tảo carrageen (có tên là rêu ngọc hoặc rêu Ai-Len) và thường có dạng chỉ sợi, dạng vảy hoặc bột. Nhóm này cũng bao gồm các chất nhầy thu được từ quá trình xử lý hoá học carrageenan (ví dụ, “natri carrageenate”)', en: '(3) Carrageenan extracted from carrageen (known also as Irish moss or pearl moss) and usually in the form of fibrous threads, flakes or powder. The heading also includes mucilaginous substances obtained from carrageenan by chemical transformation (e.g., “sodium carrageenate”).' },
      { type: 'list', vi: '(4) Chất làm đặc, làm dày thu được từ gôm hoặc nhựa gôm hoà tan được trong nước nhờ xử lý bằng áp suất nước hoặc quá trình khác bất kỳ.', en: '(4) Thickeners obtained from gums or gum-resins rendered water-soluble by treatment with water under pressure or by any other process.' },
      { type: 'list', vi: '(5) Bột lá mầm từ hạt me ( tamarindus indica ). Bột này được phân loại trong nhóm này cả trong trường hợp được cải biến qua xử lý bằng nhiệt hoặc hoá chất.', en: '(5) Cotyledon flour of tamarind seeds ( Tamarindus indica ). These flours are included in this heading even if modified by heat or chemical treatment.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Rong biển và các loại tảo khác tươi hoặc đã làm khô (nói chung thuộc nhóm 12.12 ).', en: '(a) Raw or dried seaweed and other algae (generally heading 12.12 ).' },
      { type: 'list', vi: '(b) Axit alginic và muối alginate ( nhóm 39.13 ).', en: '(b) Alginic acid and alginates ( heading 39.13 ).' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 14
  // ------------------------------------------------------------
  {
    chapterNumber: 14,
    titleVi: 'CHƯƠNG 14: VẬT LIỆU THỰC VẬT DÙNG ĐỂ TẾT BỆN; CÁC SẢN PHẨM THỰC VẬT CHƯA ĐƯỢC CHI TIẾT HOẶC GHI Ở NƠI KHÁC',
    titleEn: 'CHAPTER 14: VEGETABLE PLAITING MATERIALS; VEGETABLE PRODUCTS NOT ELSEWHERE SPECIFIED OR INCLUDED',
    content: [
      { type: 'heading', vi: 'Phần II: CÁC SẢN PHẨM THỰC VẬT', en: 'Section II: VEGETABLE PRODUCTS' },
      { type: 'heading', vi: 'Chú giải.', en: 'Note.' },
      { 
        type: 'paragraph', 
        vi: '1. - Trong Phần này khái niệm “viên” có nghĩa là những sản phẩm được liên kết bằng cách nén trực tiếp hoặc thêm chất dính với hàm lượng không quá 3% tính theo trọng lượng.', 
        en: '1.- In this Section the term “pellets” means products which have been agglomerated either directly by compression or by the addition of a binder in a proportion not exceeding 3 % by weight.' 
      },
      { type: 'heading', vi: 'Chương 14: Vật liệu thực vật dùng để tết bện; các sản phẩm thực vật chưa được chi tiết hoặc ghi ở nơi khác', en: 'Chapter 14: Vegetable plaiting materials; vegetable products not elsewhere specified or included' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { 
        type: 'paragraph', 
        vi: '1. Chương này không bao gồm các sản phẩm sau đây đã được xếp trong Phần XI: vật liệu thực vật hoặc xơ từ nguyên liệu thực vật đã chế biến chủ yếu dùng cho ngành dệt, hoặc các vật liệu thực vật khác, đã xử lý thích hợp chỉ để dùng làm vật liệu dệt.', 
        en: '1. - This Chapter does not cover the following products which are to be classified in Section XI : vegetable materials or fibres of vegetable materials of a kind used primarily in the manufacture of textiles, however prepared, or other vegetable materials which have undergone treatment so as to render them suitable for use only as textile materials.' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Không kể những đề cập khác , nhóm 14.01 áp dụng cho các loại tre (đã hoặc chưa chẻ, xẻ dọc, cắt thành từng đoạn, tiện tròn đầu, tẩy trắng, chống cháy, đánh bóng hoặc nhuộm), liễu gai, sậy và các loại tương tự đã tách, lõi song mây hoặc song mây chẻ. Nhóm này không áp dụng cho nan gỗ (nhóm 44.04).', 
        en: '2. - Heading 14.01 applies, inter alia , to bamboos (whether or not split, sawn lengthwise, cut to length, rounded at the ends, bleached, rendered non-inflammable, polished or dyed), split osier, reeds and the like, to rattan cores and to drawn or split rattans. The heading does not apply to chipwood (heading 44.04).' 
      },
      { type: 'paragraph', vi: '3. Nhóm 14.04 không áp dụng cho sợi gỗ (nhóm 44.05) và túm hoặc búi đã làm sẵn dùng để làm chổi hoặc bàn chải (nhóm 96.03).', en: '3. - Heading 14.04 does not apply to wood wool (heading 44.05) and prepared knots or tufts for broom or brush making (heading 96.03).' },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: 'Chương này gồm:', en: 'This Chapter covers:' },
      { type: 'list', vi: '(1) Vật liệu thực vật, thô hoặc đã sơ chế, loại chủ yếu dùng để tết bện, làm chổi hoặc bàn chải, hoặc lót hoặc nhồi.', en: '(1) Vegetable materials, raw or simply worked, of a kind used primarily for plaiting, broom or brush making, or as stuffing or padding.' },
      { type: 'list', vi: '(2) Hạt, hạt mềm, vỏ trái cây và quả hạch (nut) loại sử dụng để chạm, khắc, để làm khuy hoặc một số đồ trang trí nhỏ khác.', en: '(2) Seeds, pips, hulls and nuts of a kind used for carving, for the manufacture of buttons and other small fancy-goods.' },
      { type: 'list', vi: '(3) Các sản phẩm thực vật khác chưa được chi tiết ở nơi khác.', en: '(3) Other vegetable products not elsewhere specified.' },
      { type: 'paragraph', vi: 'Chương này không bao gồm các vật liệu thực vật loại chủ yếu dùng cho ngành dệt, tuy nhiên đã được xử lý, cũng như các nguyên liệu từ thực vật khác đã được xử lý để dùng làm nguyên liệu dệt ( Phần XI ).', en: 'The Chapter excludes vegetable materials of a kind used primarily in the manufacture of textiles, however prepared, and other vegetable materials processed for use as textile materials ( Section XI ).' },

      { type: 'heading', vi: '14.01 - Nguyên liệu thực vật chủ yếu dùng để tết bện (như: tre, song, mây, sậy, liễu gai, cây bấc, cọ sợi, các loại rơm, rạ ngũ cốc đã làm sạch, tẩy trắng hoặc đã nhuộm và vỏ cây đoạn).', en: '14.01 - Vegetable materials of a kind used primarily for plaiting (for example, bamboos, rattans, reeds, rushes, osier, raffia, cleaned, bleached or dyed cereal straw, and lime bark).' },
      { type: 'list', vi: '1401.10 - Tre', en: '1401.10 - Bamboos' },
      { type: 'list', vi: '1401.20 - Song, mây', en: '1401.20 - Rattans' },
      { type: 'list', vi: '1401.90 - Loại khác', en: '1401.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm nguyên liệu thực vật thô loại chủ yếu sử dụng để sản xuất các đồ vật bằng cách gắn kết hoặc tết bện như chiếu, tấm chùi chân, thảm, khay, giỏ các loại (bao gồm giỏ trái cây, rau, sò...), hòm, vali, đồ nội thất (ví dụ, ghế, bàn), mũ... Các nguyên liệu thô này cũng có thể được sử dụng để làm bàn chải, cán ô, ba toong, cần câu, ống tẩu, thừng,..., chúng còn dùng để sản xuất bột giấy, hoặc là rác thải.', en: 'This heading covers raw vegetable materials of a kind used primarily for the manufacture, by joining or plaiting, of articles such as mats and matting, trays, basket-ware of all kinds (including baskets for packing fruit, vegetables, oysters, etc.), hampers, valises, furniture (e.g., chairs and tables), hats, etc. These raw materials may also be used for the manufacture of brushes, umbrella handles, walking sticks, fishing rods, pipe stems, coarse ropes, etc., for the manufacture of paper pulp, or as litter.' },
      { type: 'paragraph', vi: 'Ngoài các mặt hàng khác, nhóm này bao gồm các nguyên liệu thô sau:', en: 'The heading covers, inter alia , the following raw materials :' },
      { type: 'list', vi: '(1) Tre, loài cỏ đặc biệt, mọc rất phổ biến ở một số vùng và đặc biệt là ở Trung Quốc, Nhật Bản và Ấn Độ. Tre có thân rỗng, rất nhẹ, mặt ngoài bóng, một số có rãnh khía giữa hai đốt. Tre (đã hoặc chưa chẻ, cắt thành đoạn, cắt dọc, tiện tròn đầu, chuội, chống cháy, đánh bóng hoặc nhuộm) thuộc nhóm này.', en: '(1) Bamboos , special varieties of grasses, which grow profusely in some regions and particularly in China, Japan and India. Bamboos have a very light, shiny, generally hollow stalk, in some cases with a groove between alternate pairs of nodes. Bamboos (whether or not split, sawn lengthwise or cut to length, rounded at the ends, bleached, rendered non-inflammable, polished or dyed) are covered by this heading.' },
      { type: 'list', vi: '(2) Song, mây là thân của loại cây họ cọ có thân leo thường thuộc họ Calamus và chủ yếu ở các vùng Nam á. Chúng có thân dẻo, hình trụ, đặc và đường kính từ 0,3-6cm và có màu từ vàng đến nâu; chúng có thể có bề mặt xỉn hoặc bóng. Sản phẩm phân loại trong nhóm này gồm cả lõi song, mây và vỏ song cứng; nhóm cũng bao gồm các sợi song, mây dài có được từ việc chẻ dọc các lõi hoặc các khúc song, mây hoặc toàn bộ cây song, mây.', en: '(2) Rattans are stems of climbing palms usually of the genus Calamus and come mainly from Southern Asia. They are cylindrical, solid and flexible and generally vary between 0.3 cm and 6 cm in diameter and in colour vary from yellow to brown; they may have a dull (matt) or glossy surface. The heading includes rattan cores and the hard outer canes; it also covers the long strips obtained by cutting longitudinally these cores or canes or the whole rattans.' },
      { type: 'list', vi: '(3) Sậy và cói , bấc, là tên gọi chung của các cây thân thảo sống nơi ẩm ướt, cả trong vùng ôn đới và nhiệt đới. Sậy là loại cây có thân cứng hơn, thẳng và ruột rỗng, có đốt ở từng đoạn đều nhau, đánh dấu chỗ lá mọc. Trong số các loại cây này phải kể đến: cây cói sống ở vùng đầm lầy ( Scirpus lacustris ), sậy thông thường và sậy đầm lầy ( Arundo donax và Phragmites communis ), cũng như nhiều loại cây sậy loài Ceperus ( Cyperus tegetiformis , cỏ chiếu Trung Quốc) hoặc loài Juncus ( Juncus effusus - cây cói chiếu Nhật Bản).', en: '(3) Reeds and rushes , collective terms applied to many herbaceous plants which grow in damp places, both in temperate zones and in the tropics. Reeds generally have the more rigid stalks or stems, straight and hollow, with nodes at fairly regular intervals, marking the place of the leaves. The best known varieties include water rushes ( Scirpus lacustris ), common or wild reeds ( Arundo donax and Phragmites communis ), various species of Cyperus (e.g., Cyperus tegetiformis, the Chinese mat grass) and species of Juncus (e.g., Juncus effusus , the Japanese mat rush).' },
      { type: 'list', vi: '(4) Cây liễu gai (trắng, vàng, xanh hoặc đỏ), là cành non hoặc cành cây mềm dẻo, dài của một số loại cây liễu ( Salix ).', en: '(4) Osier (white, yellow, green or red), the long, pliable young shoots or branches of certain varieties of the willow tree ( Salix ).' },
      { type: 'list', vi: '(5) Cọ sợi , tên thương mại để chỉ các dải sợi được tách từ lá của một số loại cây cọ thuộc họ Raphia , trong họ này quan trọng nhất là loại Raphia ruffia sống chủ yếu ở Madagasca. Cọ sợi dùng để tết, bện và được sử dụng như các vật liệu buộc trong công việc làm vườn. Vải từ cọ sợi chưa xe sợi bị loại trừ ( nhóm 46.01 ). Nhóm này bao gồm các loại lá và cỏ khác (ví dụ, các loại của Panama và latania) được sử dụng với cùng mục đích như cọ sợi và trong việc làm mũ, nón.', en: '(5) Raffia , the commercial name for the fibrous strips obtained from the leaves of certain palm trees of the genus Raphia , of which the most important is the Raphia ruffia grown chiefly in Madagascar. Raffia is used for plaiting and as a tying material in horticulture. Fabrics of unspun raffia are excluded ( heading 46.01 ). The heading includes other leaves and grasses (e.g., those of the Panama and latania) which are used for the same purposes as raffia and in hat-making.' },
      { type: 'list', vi: '(6) Rơm ngũ cốc, còn hoặc không còn bông, đã được làm sạch, chuội hoặc đã nhuộm (xem dưới đây).', en: '(6) Cereal straw , with or without ears, which has been cleaned, bleached or dyed (see below).' },
      { type: 'list', vi: '(7) Vỏ trong (sợi vỏ) của một số loại cây đoan (loài Tilia ). Sợi của vỏ này rất bền và dùng tết thừng, dệt thành tấm vải và dệt thành thảm và còn để buộc cây. Nhóm này bao gồm vỏ cây bao báp và vỏ của một số loại liễu hoặc dương, cũng được dùng như vậy.', en: '(7) The inner bark (bast) of several varieties of lime ( Tilia species). The fibres of this bark are very strong and are used for the manufacture of ropes, packing cloth and coarse matting and also for tying plants. The heading includes baobab bark and the bark of certain willows or poplars, which serve similar purposes.' },
      { 
        type: 'paragraph', 
        vi: 'Ngoại trừ rơm ngũ cốc, mà trong tình trạng chưa chế biến bị loại trừ ( nhóm 12.13 ), các nguyên liệu thực vật dùng để tết bện được xếp trong nhóm này cho dù đã hoặc chưa rửa sạch và thuộc dạng thô hoặc được chẻ, tước vỏ, đánh bóng, tẩy trắng, chuẩn bị để nhuộm, đã nhuộm, đánh vecni hoặc sơn, hoặc làm cho chống cháy. Các vật liệu thuộc nhóm này cũng có thể được chẻ dọc, đã hoặc chưa tiện tròn đầu (ống để làm ống hút nước, cây để làm cần câu, tre để nhuộm...), hoặc được sắp xếp thành bó hoặc nùi mà có thể được xoắn nhẹ để dễ dàng cho việc đóng gói, bảo quản, vận chuyển...; các vật liệu trong nhóm này được tập hợp lại bằng cách xoắn để thích hợp sử dụng trong tình trạng đó thay cho dây tết bện được phân loại vào nhóm 46.01 .', 
        en: 'Apart from cereal straws, which in the unprepared state are excluded ( heading 12.13 ), vegetable plaiting materials fall in this heading whether or not washed and whether raw, or split in strips, peeled, polished, bleached, prepared for dyeing, dyed, varnished or lacquered, or rendered non-inflammable. The goods of the heading may also be cut to length, whether or not rounded at the ends (straw for making drinking straws, canes for making fishing-rods, bamboos for dyeing, etc.), or assorted in bundles or hanks which may be lightly twisted for convenience of packing, storage, transport, etc.; the materials of this heading which have been assembled by twisting so as to be suitable for use in that state in place of plaits are classified in heading 46.01 .' 
      },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Nan gỗ (chipwood) ( nhóm 44.04 ).', en: '(a) Chipwood ( heading 44.04 ).' },
      { type: 'list', vi: '(b) Nguyên liệu từ thực vật mô tả ở trên được dát mỏng, dùi đập, chải hoặc chế biến cách khác làm sợi xe ( các nhóm 53.03 hoặc 53.05 ).', en: '(b) Vegetable materials described above which have been rolled, crushed, combed or otherwise prepared for spinning ( headings 53.03 or 53.05 ).' },

      { type: 'heading', vi: '14.04 - Các sản phẩm từ thực vật chưa được chi tiết hoặc ghi ở nơi khác.', en: '14.04 - Vegetable products not elsewhere specified or included.' },
      { type: 'list', vi: '1404.20 - Xơ của cây bông', en: '1404.20 - Cotton linters' },
      { type: 'list', vi: '1404.90 - Loại khác', en: '1404.00 - Other' },
      { type: 'paragraph', vi: 'Nhóm này gồm các sản phẩm từ thực vật chưa được chi tiết hoặc ghi ở nơi khác của Danh mục.', en: 'This heading covers all vegetable products, not specified or included elsewhere in the Nomenclature.' },
      { type: 'paragraph', vi: 'Nhóm này gồm:', en: 'It includes :' },
      { type: 'paragraph', vi: '(A) Xơ của cây bông.', en: '(A) Cotton linters .' },
      { type: 'paragraph', vi: 'Hạt của một số loại cây bông, sau khi tách khỏi sợi bông bằng cách tỉa, vẫn còn phủ lông tơ mịn hình thành các sợi rất ngắn (thường có chiều dài dưới 5mm). Các sợi này được gọi là xơ của cây bông.', en: 'The seeds of certain varieties of cotton plants, after separation from the cotton fibres by ginning, are still covered with a fine down formed of very short fibres (usually less than 5 mm long). These fibres are known as cotton linters.' },
      { type: 'paragraph', vi: 'Các xơ quá ngắn để kéo sợi được; hàm lượng cellulose rất cao của chúng khiến chúng thành một nguyên liệu thô lý tưởng để chế biến bột không khói và sản xuất sợi nhân tạo (ví dụ, rayon) hoặc plastic cellulose. Đôi khi chúng còn được sử dụng trong sản xuất một số loại giấy, khối lọc và được sử dụng như chất độn trong công nghiệp sản xuất cao su.', en: 'Linters are too short for spinning; their very high cellulose content makes them an ideal raw material for the preparation of smokeless powders and the manufacture of man-made fibres (e.g., rayon) and cellulose plastics. They are also sometimes used in the manufacture of certain varieties of paper, filter blocks and as a filler in the rubber industry.' },
      { type: 'paragraph', vi: 'Xơ của cây bông được phân loại ở nhóm này dù dùng vào mục đích gì và dù thô, được làm sạch, tẩy trắng, nhuộm hay được làm thành chất thấm hút. Chúng có thể ở dạng đống hoặc được ép mạnh thành hình tấm hoặc phiến.', en: 'Cotton linters are classified here irrespective of their intended use and whether raw, cleaned, bleached, dyed or rendered absorbent. They may be presented in bulk or strongly compressed in the form of sheets or slabs.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading does not cover :' },
      { type: 'list', vi: '(a) Bông, y tế hoặc đóng gói bán lẻ dùng cho y tế, phẫu thuật, nha khoa hoặc thú y ( nhóm 30.05 ).', en: '(a) Wadding, medicated or put up in forms or packings for retail sale for medical, surgical, dental or veterinary purposes ( heading 30.05 ).' },
      { type: 'list', vi: '(b) Các loại bông khác ( nhóm 56.01 ).', en: '(b) Other wadding ( heading 56.01 ).' },
      { type: 'paragraph', vi: '(B) Nguyên liệu thực vật thô loại chủ yếu dùng trong công nghệ nhuộm hoặc thuộc da .', en: '(B) Raw vegetable materials of a kind used primarily in dyeing or tanning.' },
      { type: 'paragraph', vi: 'Sản phẩm này chủ yếu dùng trong công nghệ nhuộm hoặc thuộc da cả bằng cách trực tiếp hoặc trong sản xuất chiết xuất nhuộm hoặc thuộc da. Các nguyên liệu này có thể chưa được xử lý, đã làm sạch, làm khô, xay hoặc tán thành bột (đã hoặc chưa được ép).', en: 'Such products are used primarily in dyeing or tanning either directly or in the preparation of dyeing or tanning extracts. The materials may be untreated, cleaned, dried, ground or powdered (whether or not compressed).' },
      { type: 'paragraph', vi: 'Các sản phẩm quan trọng hơn gồm:', en: 'The more important are :' },
      { type: 'list', vi: '(1) Gỗ: gỗ cây sơn, gỗ hoàng mộc (bao gồm cả gỗ gọi là “gỗ hoàng mộc non”), gỗ huyết mộc, cây mẻ rừu, gỗ Brazin (kể cả gỗ Pernambouco và gỗ vang), gỗ dẻ, gỗ tinh dầu (gỗ đàn hương đỏ).', en: '(1) Wood : Sumach, fustic (including the so-called “ young fustic”), logwood, quebracho. Brazil wood (including Pernambuco wood and sappan wood), chestnut, red sandalwood.' },
      { type: 'paragraph', vi: 'Cần phải lưu ý rằng các loại gỗ chủ yếu dùng trong công nghệ nhuộm hoặc thuộc da chỉ được phân loại trong nhóm này nếu chúng ở dạng mảnh vụn, mảnh vỡ hoặc dạng bột. Còn ở các dạng khác, chúng bị loại trừ ( Chương 44 ).', en: 'It should be noted that woods of a kind used primarily in dyeing or in tanning are classified here only if in chips, in shavings or in ground or powdered form. In other forms, such wood is excluded ( Chapter 44 ).' },
      { type: 'list', vi: '(2) Vỏ cây: vỏ của cây sồi các loại (kể cả sồi đen (sồi nhuộm) và lớp vỏ thứ hai của cây sồi bần), vỏ cây dẻ, cây bulô trắng, cây sơn, “cây hoàng mộc”, cây keo (wattle), cây trinh nữ, cây đước, cây tùng hemlock và cây liễu.', en: '(2) Bark : oaks of various kinds (including the black oak (quercitron) and the second bark of the cork-oak), chestnut, silver birch, sumach, “young fustic”, wattle, mimosa, mangrove, hemlock and willow.' },
      { type: 'list', vi: '(3) Rễ cây và các loại tương tự: cây thiên thảo căn, cây chút chít chát (canaigre), cây hoàng liên gai ( Berberis vulgaris ) và cây alkanet.', en: '(3) Roots and the like : madder, canaigre, Berberis vulgaris and alkanet.' },
      { type: 'list', vi: '(4) Quả, quả mọng và hạt: quả đậu Algarobilla, quả vallonia, quả kha tử, quả Libidibi, quả buckthorn (được biết đến là hạt quả vùng Iran, hạt quả vùng Thổ Nhĩ Kỳ, hạt vàng...), hạt và bột quả điều (annatto), vỏ quả óc chó, vỏ quả hạnh nhân.', en: '(4) Fruit, berries and seeds : Algarobilla pods, vallonia, myrobalans, dividivi (libidibi), buckthorn berries (known also as Persian berries, Turkish seeds, yellow berries, etc.), annatto seeds and pulp, walnut hulls and almond hulls.' },
      { type: 'list', vi: '(5) Mụn cây (vú lá): là các nốt nổi ở lá hoặc trên cây (hạt galle, galle Trung Quốc, galle Alep, galle Hungari...)', en: '(5) Gall nuts : Aleppo galls, Chinese galls, Hungarian galls, pine galls, etc.' },
      { type: 'paragraph', vi: 'Các hạt nổi là các "u" hoặc "bướu" xuất hiện trên lá cây hoặc cành cây sồi hoặc các cây khác do vết châm của một số côn trùng như loại côn trùng giống Cynipis. Các "u” này có chất tanin và axit galic, và dùng trong công nghệ nhuộm và để sản xuất một số loại mực viết.', en: 'Gall nuts are excrescences produced on the leaves or twigs of various oak and other trees when punctured by certain insects such as those of the Cynips genus. They contain tannin and gallic acid, and are used in dyeing and in the preparation of certain writing inks.' },
      { type: 'list', vi: '(6) Thân cây, lá và hoa: thân cây, thân và lá cây tùng lam, cây sơn, cây hoàng mộc, cây nhựa ruồi, cây sim, cây hướng dương, cây lá móng, cây cỏ mọc tê, cây chàm; lá cây nhũ hương, hoa cây rum (nghệ cây hoang) và cây bụi nhỏ Á Âu (cây tước kim chỉ tinctoria Genista tinctoria ; cây tùng lam)..', en: '(6) Stems, stalks, leaves and flowers : stems, stalks and leaves of woad, sumach, “young fustic”, holly, myrtle, sunflower, henna, reseda, indigo plant; leaves of lentiscus (mastic); flowers of safflower (bastard saffron) and dyer\'s greenwood ( Genista tinctoria ; woadwaxen).' },
      { type: 'paragraph', vi: 'Cần chú ý rằng đầu nhụy và bầu nhị của cây nghệ tây bị loại trừ ( nhóm 09.10 ).', en: 'It is to be noted that saffron stigmas and styles are excluded ( heading 09.10 ).' },
      { type: 'list', vi: '(7) Địa y: thuốc nhuộm từ cây địa y được biết đến là ocxen (hoặc thuốc nhuộm ocxen), địa y nhuộm và quỳ thu được từ địa y ( Rocella tinctoria và Fucipomis, lichen tartareurs và lichen parellus , pustulous lichen hoặc Umbilcaria pustulat ).', en: '(7) Lichens : lichens from which the dyes known as orchil (or archil), cudbear and litmus are obtained ( Rocella tinctoria and fuciformis, Lichen tartareus and Lichen pareIIus , pustulous lichen or Umbilicaria pustulata ).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm:', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Chiết xuất tannin từ gốc thực vật và chất tanin (axit tanic) gồm tanin từ các "u" nước trên lá cây hoặc thân cây ( nhóm 32.01 ).', en: '(a) Tanning extracts of vegetable origin and tannins (tannic acids) including water-extracted gall-nut tannin ( heading 32.01 ).' },
      { type: 'list', vi: '(b) Chiết xuất nhuộm từ gỗ hoặc các loại chiết xuất thực vật để nhuộm khác ( nhóm 32.03 ).', en: '(b) Dyewood extract and other vegetable dyeing extracts ( heading 32.03).' },
      { type: 'paragraph', vi: '(C) Hạt cứng, hạt mềm, vỏ trái cây và quả hạch (nut) loại sử dụng để chạm khắc .', en: '(C) Hard seeds, pips, hulls and nuts of a kind used for carving.' },
      { type: 'paragraph', vi: 'Các sản phẩm này chủ yếu làm khuy, chuỗi hạt, tràng hạt hoặc các đồ trang trí nhỏ khác.', en: 'These products are primarily used for the manufacture of buttons, beads, rosaries and other small fancy-goods.' },
      { type: 'paragraph', vi: 'Ngoài các mặt hàng khác , chúng có thể kể đến:', en: 'They include, inter alia :' },
      { type: 'list', vi: '(1) Quả dừa ngà , là hạt (“nut”) của một vài loại cây cọ mọc chủ yếu ở Nam Mỹ. Cấu tạo, độ cứng và màu sắc của nó giống ngà voi, do đó có tên thường gọi là “ngà thực vật”.', en: '(1) Corozo , the seeds (“ nuts ”) of several varieties of palm trees which grow mainly in South America. Its texture, hardness and colour resemble those of ivory, hence its common name, “vegetable ivory”.' },
      { type: 'list', vi: '(2) Hạt (“ nut ”) của cọ đum sống chủ yếu ở vùng Đông và Trung Phi (Eritrea, Somalie, Sudan...)', en: '(2) The seeds (“nuts”) of the doum palm which grows chiefly in East and Central Africa (Eritrea, Somaliland, the Sudan, etc.).' },
      { type: 'list', vi: '(3) Các loại hạt (" nut ") tương tự của một số cây cọ khác (ví dụ, quả hạch Tahiti hoặc Pamira)', en: '(3) Similar “nuts” of certain other palms (e.g., Palmyra or Tahiti nuts).' },
      { type: 'list', vi: '(4) Hạt của cây sậy họ Canna indica (hạt cà na) ; hạt Abrus ( Abrus precatorius ) (còn gọi là cây tràng hạt); quả chà là; hạt của cây cọ sợi .', en: '(4) Seeds of the Canna indica variety of reed (Indian shot) ; the seeds of the Abrus precatorius ( also called bead-tree); date stones; the nuts of the piassava palm.' },
      { type: 'list', vi: '(5) Vỏ quả dừa .', en: '(5) Coconut shells.' },
      { type: 'paragraph', vi: 'Các sản phẩm trên vẫn thuộc nhóm này dù nguyên dạng hoặc (như thường thấy trong trường hợp quả dừa ngà hoặc quả cọ đum) được thái lát, nhưng không được gia công cách khác. Khi được gia công cách khác, chúng bị loại trừ (thường thuộc nhóm 96.02 hoặc nhóm 96.06 ).', en: 'The above products remain in this heading whether whole or (as is frequently the ease with corozo and doum nuts) sliced, but not if otherwise worked. When otherwise worked, they are excluded (usually heading 96.02 or 96.06 ).' },
      { type: 'paragraph', vi: '(D) Nguyên liệu thực vật chủ yếu dùng để lót hoặc nhồi (ví dụ, bông gòn, lông thực vật và rong lươn), đã hoặc chưa làm thành lớp, có hoặc không có nguyên liệu phụ trợ.', en: '(D) Vegetable materials of a kind used primarily as stuffing or as padding (for example, kapok, vegetable hair and eel-grass), whether or not put up as a layer with or without supporting material.' },
      { type: 'paragraph', vi: 'Loại này bao gồm các nguyên liệu thực vật chủ yếu dùng để nhồi đồ đạc, đệm, nệm, gối, yên cương, phao cứu sinh,… Những nguyên liệu này vẫn được phân loại trong nhóm này ngay cả khi chúng có các công dụng phụ trợ khác.', en: 'This category includes vegetable materials primarily used for stuffing furniture, cushions, mattresses, pillows, saddlery and harness, life-buoys, etc. These materials remain classified in the heading even if they have subsidiary uses.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các nguyên liệu thực vật được sử dụng để nhồi nhưng đã được chi tiết ở nơi khác hoặc được sử dụng chủ yếu cho các mục đích khác, ví dụ, sợi gỗ ( nhóm 44.05 ), sợi lie ( nhóm 45.01 ), xơ dừa (hoặc sợi dừa) ( nhóm 53.05 ) và phế liệu từ xơ dệt thực vật ( Chương 52 hoặc 53 ).', en: 'The heading excludes vegetable materials used as stuffing but specified elsewhere or used principally for other purposes, e.g., wood wool ( heading 44.05 ), cork wool ( heading 45.01 ), coconut fibres (or coir) ( heading 53.05 ) and waste of vegetable textile fibres ( Chapter 52 or 53 ).' },
      { type: 'paragraph', vi: 'Ngoài các mặt hàng khác , các sản phẩm thuộc nhóm này bao gồm:', en: 'The products of this group include, inter alia :' },
      { type: 'list', vi: '(1) Bông gòn, tên thương mại của một loại tơ sợi màu vàng nhạt hoặc đôi khi có màu nâu nhạt bao xung quanh hạt của một số các loại cây thuộc họ Bombacaceae . Các sợi này dài từ 15 đến 30 mm, tùy từng loài, và có tính đàn hồi, không thấm nước, khối lượng nhẹ nhưng mỏng manh.', en: '(1) Kapok , the commercial name for the pale yellow or sometimes brownish floss surrounding the seeds of various trees of the Bombacaceae family. The fibres are 15 to 30 mm in length, according to the variety, and are clastic, impermeable to water, light in weight but fragile.' },
      { type: 'list', vi: '(2) Một số loại lông mịn thực vật khác (đôi khi còn được gọi là tơ lụa thực vật), được hình thành từ lông đơn bào của hạt của một số loại cây nhiệt đới (ví dụ, Asclepias ).', en: '(2) Certain other vegetable downs (sometimes known as vegetable silks), formed by the unicellular hairs of the seeds of certain varieties of tropical plants (e.g., Asclepias ).' },
      { type: 'list', vi: '(3) Các sản phẩm còn gọi là lông thực vật, bao gồm xơ Algeria ( crin vegetal ), thu được từ lá của một số loài cọ lùn (đặc biệt là Chamaerops humilis ).', en: '(3) The products known as vegetable hair, including Algerian fibre ( crin vegetal ), obtained from the leaves of certain varieties of dwarf palm trees (particularly the Chamaerops humiIis ).' },
      { type: 'list', vi: '(4) Rong lươn (ví dụ, Zostera marina ), một loài cây ở biển, có hình dạng giống tóc hoặc cỏ.', en: '(4) Eel-grass (e.g., Zostera marina ), a variety of marine plant, which is hair-like or grass-like in form.' },
      { type: 'list', vi: '(5) Một sản phẩm xoăn tự nhiên ( foin frisé ) thu được từ lá của một số loại sậy thuộc giống Carex .', en: '(5) A naturally curled product ( foin frisé ) obtained from the leaves of certain reeds of the genus Carex .' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các nguyên liệu này nếu thô, hoặc đã được làm sạch, tẩy trắng, nhuộm, chải hoặc đã được sơ chế cách khác (trừ việc se sợi). Chúng vẫn được phân loại trong nhóm này ngay cả khi được nhập khẩu dưới dạng con sợi (hoặc nùi sợi).', en: 'The heading covers these materials if raw, or if cleaned, bleached, dyed, carded or otherwise prepared (except for spinning). They remain classified in the heading when imported' },
      { type: 'paragraph', vi: 'Nhóm này cũng bao gồm một lớp các nguyên liệu thực vật thuộc loại đã được mô tả trên đây được đặt trên một nền phụ trợ bằng vải dệt, giấy…, hoặc được đặt vào giữa các lớp vải dệt, giấy…, bằng cách dập ghim hay khâu đơn giản.', en: 'The heading also covers a layer of vegetable materials of the types described above on a support of textile fabric, paper, etc., or put up between sheets of textile fabric, paper, etc., by stapling or simple sewing.' },
      { type: 'paragraph', vi: '(E) Nguyên liệu thực vật chủ yếu dùng làm chổi hay bàn chải (ví dụ, cây ngũ cốc dùng làm chổi, sợi cỏ, cỏ băng, sợi thùa), đã hoặc chưa làm thành nùi hoặc bó .', en: '(E) Vegetable materials of a kind used primarily in brooms or in brushes (for example, broomcorn, piassava, couch-grass and istle), whether or not in hanks or bundles.' },
      { type: 'paragraph', vi: 'Loại này bao gồm các nguyên liệu thực vật chủ yếu dùng làm chổi hay bàn chải…, ngay cả khi chúng có các công dụng phụ trợ cho các mục đích khác. Nhưng loại này không bao gồm các nguyên liệu thực vật đã được chi tiết ở nơi khác trong Danh mục hoặc không được sử dụng chủ yếu để làm chổi hay bàn chải, ví dụ, tre, đã hoặc chưa chẻ, sậy và cây bấc ( nhóm 14.01 ), cỏ alfa, cỏ giấy và thân của cây đậu chổi, nếu được chế biến để sử dụng cho mục đích dệt may ( nhóm 53.03 (cây đậu chổi) hoặc nhóm 53.05 (cỏ alfa và cỏ giấy)), xơ dừa (hoặc sợi dừa) ( nhóm 53.05 ).', en: 'This category includes vegetable materials primarily used in brooms and brushes, etc., even if they have subsidiary uses for other purposes. But it excludes vegetable materials specified elsewhere in the Nomenclature or not used principally for broom or brush making, for example, bamboos, whether or not split, reeds and rushes ( heading 14.01 ), alfa, esparto grass and stalks of broom, if prepared for textile use ( heading 53.03 (broom) or heading 53.05 (alfa and esparto grass)), coconut fibres (or coir) ( heading 53.05 ).' },
      { type: 'paragraph', vi: 'Ngoài các mặt hàng khác , các sản phẩm thuộc nhóm này có thể kể đến:', en: 'The products of this group include, inter alia :' },
      { type: 'list', vi: '(1) Chùy hoa gạo, cây ngũ cốc dùng làm chổi ( Sorghum vulgare var. technicum ) hoặc cây kê, đã được loại bỏ hạt .', en: '(1) The panicles of rice, broomcorn ( Sorghum vulgare var. technicum ) or certain millets, with their seeds removed.' },
      { type: 'list', vi: '(2) Sợi cỏ Piassava , một loại xơ thu được từ lá của một số loại cọ nhiệt đới. Loại sợi cỏ được biết đến nhiều nhất là các chủng loại của Brazil và Châu Phi.', en: '(2) P iassava , the fibres obtained from the leaves of certain tropical palms. The best known varieties are Brazilian and African piassava.' },
      { type: 'list', vi: '(3) Rễ của cỏ băng , một loài cây thuộc họ lúa giống Andropogon, được trồng trên đất cát, khô. Loại cây này, còn được gọi là “cỏ đuôi chồn”, một loại cỏ dùng làm bàn chải, là một loại cỏ được tìm thấy ở Châu Âu, cụ thể là ở Hungary và Italy. Rễ của cỏ băng cần được phân biệt với rễ của cỏ vetiver (cỏ Khus-Khus hay cỏ băng Ấn Độ) là loại cỏ tiết ra tinh dầu, và phân biệt với cỏ băng chữa bệnh, rễ của chúng có đặc tính trị bệnh (nhóm 12.11).', en: '(3) Roots of couch-grass , a graminaceous plant of the genus Andropogon , which grows in dry, sandy soil. This plant, sometimes known as "brush-grass”, is a weed found in Europe, particularly in Hungary and Italy. The couch-grass roots should not be confused with those of vetiver (Khus-Khus grass or Indian couch-grass) which give an essential oil, nor with medicinal couch-grass the roots of which have curative properties (heading 12.11).' },
      { type: 'list', vi: '(4) Rễ của một số loài thực vật thuộc họ lúa ở vùng Trung Mỹ như các loại thuộc giống Epicampes (ví dụ, rễ cây đậu chổi hoặc zacaton).', en: '(4) The roots of certain other graminaceous plants of Central America such as those of the genus Epicampes (e.g., the broomroot or zacaton).' },
      { type: 'list', vi: '(5) Xơ Gomuti lấy từ Arenga saccharifera hoặc pinnata .', en: '(5) Gomuti fibres obtained from the Arenga saccharifera or pinnata .' },
      { type: 'list', vi: '(6) Sợi thùa hoặc ixtle (Tampico, xơ Tam pico hoặc xơ Mexico) là các loại xơ, bao gồm cả các xơ cứng ngắn lấy từ thân cây thùa lá ngắn ở Mexico.', en: '(6) Istle or ixtle (Tampico, Tampico-fibre, or Mexican fibre) composed of fibres, including the short stiff fibres obtained from the short-leaved Mexican agave.' },
      { type: 'paragraph', vi: 'Tất cả các nguyên liệu này vẫn thuộc nhóm này dù đã hoặc chưa được cắt, tẩy trắng, nhuộm hoặc chải (trừ xe sợi), và đã hoặc chưa làm thành nùi hoặc bó.', en: 'All these materials remain in this heading whether or not cut, bleached, dyed or combed (other than for spinning), and whether or not in hanks or bundles.' },
      { type: 'paragraph', vi: 'Tuy nhiên, nhóm này không bao gồm các túm hoặc búi xơ đã làm sẵn để kết chặt không tách rời làm thành chổi hoặc bàn chải (hoặc chỉ cần xử lý rất ít để sẵn sàng cho việc kết chặt trên). Những loại này được phân loại vào nhóm 96.03 (xem Chú giải 3 của Chương 96).', en: 'The heading does not , however, include prepared knots or tufts of fibre, ready for incorporation without division in brooms or brushes (or requiring only certain minor processes to be ready for such incorporation). These are classified in heading 96.03 (see Note 3 to Chapter 96).' },
      { type: 'paragraph', vi: '(F) Các sản phẩm khác từ thực vật.', en: '(F) Other vegetable products.' },
      { type: 'paragraph', vi: 'Các sản phẩm này bao gồm:', en: 'These products include :' },
      { type: 'list', vi: '(1) Cỏ giấy , từ loại cỏ giấy ( Stipa tenacissima ) và cỏ Lygeum spartum mọc ở Châu Phi và Tây Ban Nha. Chúng chủ yếu dùng làm bột giấy, nhưng chúng cũng được dùng làm dây và lưới, các sản phẩm tết bện như thảm, chiếu, giỏ, giầy, dép,… và như vật liệu nhồi và lót cho ghế hoặc đệm.', en: '(1) Esparto , from the esparto grass ( Stipa tenacissima ) and the grass Lygeum spartum which grow in Africa and Spain. Their main use is in the manufacture of paper pulp, but they are also used in the manufacture of ropes and nets, of plaited articles such as carpets, matting, baskets, footwear, etc., and as stuffing and padding materials for chairs and mattresses.' },
      { type: 'paragraph', vi: 'Cỏ giấy chỉ thuộc nhóm này nếu ở dạng thân cây hoặc lá, dù thô, được tẩy trắng hoặc nhuộm; khi đã được dát mỏng, đập bẹt hoặc chải như sợi dệt thì bị loại trừ ( nhóm 53.05 ).', en: 'Esparto is classified in this heading only if in the form of stems or leaves, whether raw, bleached or dyed; when rolled, crushed or combed as a textile fibre it is excluded (heading 53.05).' },
      { type: 'list', vi: '(2) Cỏ alfa, nếu không được chế biến cho mục đích dệt may.', en: '(2) Alfa , if not prepared for textile use.' },
      { type: 'list', vi: '(3) Cây đậu chổi thô (chưa là xơ lanh), là loại cây thuộc họ rau đậu có sợi dùng trong công nghiệp dệt; sợi hoặc sợi lanh của đậu chổi đã được chải bị loại trừ', en: '(3) Raw stalks of broom , a leguminous plant the fibres of which are used in the textile industry; combed broom fibres or tow are excluded (heading 53.03).' },
      { type: 'list', vi: '(4) Xơ mướp (loofah), còn gọi là bọt biển thực vật, do màng sợi của một loại họ bầu bí lai ( Luffa cylindrica ) tạo thành.', en: '(4) Loofah , also known as vegetable sponge, composed of the cellular tissue of a variety of gourd ( Luffa cylindrica ).' },
      { type: 'paragraph', vi: 'Loại trừ bọt biển có gốc động vật ( nhóm 05.11 ).', en: 'Sponges of animal origin are excluded ( heading 05.11 ).' },
      { type: 'list', vi: '(5) Bột quả dừa ngà , bột quả cọ đum, bột vỏ trái dừa hoặc tương tự.', en: '(5) Flours of corozo, of doum palm “nuts”, of coconut shell or the like.' },
      { type: 'list', vi: '(6) Cây địa y (trừ loại sử dụng để nhuộm (xem Mục (A)(7)), làm dược liệu hoặc trang trí). Thạch rau câu, carrageenan và chất làm đặc, làm dày tự nhiên khác được chiết xuất từ nguyên liệu thực vật bị loại trừ ( nhóm 13.02 ). Tảo biển và tảo khác thuộc nhóm 12.12 và tảo đơn bào đã chết ( nhóm 21.02 ) cũng bị loại trừ .', en: '(6) Lichens (but not those used for dyeing (see Item (A) (7)), medicinal or ornamental purposes). Agar-agar, carrageenan and other natural mucilages and thickeners extracted from vegetable materials are excluded ( heading 13.02 ). Seaweeds and other algae of heading 12.12 and dead unicellular algae ( heading 21.02 ) are also excluded.' },
      { type: 'list', vi: '(7) Ngọn lắc gai , kể cả loại đã chế biến dùng trong hồ vải, nhưng chưa đóng khuôn.', en: '(7) Teazle-heads , including those prepared for use in textile finishing, but unmounted.' },
      { type: 'list', vi: '(8) Giấy làm từ rơm rạ (rice paper) Nhật bản được chế biến từ việc cắt lát các lõi của một số cây bản địa sống ở vùng Viễn Đông. Các sản phẩm này dùng làm hoa giả, màu nước...', en: '(8) Japanese rice paper (so-called) made by slicing the pith of certain trees indigenous to the Far East. It is used for making artificial flowers, for paintings, etc.' },
      { type: 'paragraph', vi: 'Các lá giấy gạo này vẫn được phân loại vào nhóm này ngay cả khi được cán phẳng trên bề mặt và được cắt thành hình chữ nhật (kể cả hình vuông).', en: 'Sheets of this rice paper remain classified in this heading whether or not they have been calendered to level their surface or have been cut to rectangular (including square) shape.' },
      { type: 'list', vi: '(9) Lá trầu, là lá màu xanh, tươi của loại cây leo Piper betle L. Lá trầu thường được nhai sau bữa ăn vì nó có tác dụng làm tỉnh táo và kích thích.', en: '(9) Betel leaves , consisting of the fresh, green leaves of the vine Piper betle L. Betel leaves are most commonly chewed after meals for their refreshing and stimulating effects.' },
      { type: 'list', vi: '(10) Vỏ cây Quilaia (vỏ cây xà phòng ("Soap bark") hoặc vỏ cây Panama) ( Quillaia saponaria ).', en: '(10) Quillaia bark ( soap bark or Panama bark ) ( Quillaia saponaria ).' },
      { type: 'list', vi: '(11) Hạt hoặc quả bồ hòn ( Sapindus mukorossi, S. trifoliatus, S. saponaria, S. marginatus, S. drummondii ).', en: '(11) Sapindus berries or seeds (soapberries) Sapindus mukorossi, S. trifoliatus, S. saponaria, S. marginatus, S. drummondii).' },
      { type: 'paragraph', vi: 'Một lớp nguyên liệu từ thực vật (thuộc các loại trong nhóm này) trên nền phụ trợ bằng vải dệt, giấy…, hoặc được đặt vào giữa các tấm vải dệt, giấy…, bằng cách dập ghim hay khâu đơn giản, cũng được phân loại vào nhóm này.', en: 'A layer of vegetable materials (of the types proper to this heading) on a support of textile fabric, paper, etc., or put up between sheets of textile fabric, paper, etc., by stapling or simple sewing, is also classified in this heading.' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 15
  // ------------------------------------------------------------
  {
    chapterNumber: 15,
    titleVi: 'CHƯƠNG 15: CHẤT BÉO VÀ DẦU CÓ NGUỒN GỐC TỪ ĐỘNG VẬT, THỰC VẬT HOẶC VI SINH VẬT VÀ CÁC SẢN PHẨM TÁCH TỪ CHÚNG; CHẤT BÉO ĂN ĐƯỢC ĐÃ CHẾ BIẾN; CÁC LOẠI SÁP ĐỘNG VẬT HOẶC THỰC VẬT',
    titleEn: 'CHAPTER 15: ANIMAL, VEGETABLE OR MICROBIAL FATS AND OILS AND THEIR CLEAVAGE PRODUCTS; PREPARED EDIBLE FATS; ANIMAL OR VEGETABLE WAXES',
    content: [
      { type: 'heading', vi: 'PHẦN III: CHẤT BÉO VÀ DẦU CÓ NGUỒN GỐC TỪ ĐỘNG VẬT, THỰC VẬT HOẶC VI SINH VẬT VÀ CÁC SẢN PHẨM TÁCH TỪ CHÚNG; CHẤT BÉO ĂN ĐƯỢC ĐÃ CHẾ BIẾN; CÁC LOẠI SÁP ĐỘNG VẬT HOẶC THỰC VẬT', en: 'SECTION III: ANIMAL OR VEGETABLE FATS AND OILS AND THEIR CLEAVAGE PRODUCTS; PREPARED EDIBLE FATS; ANIMAL OR VEGETABLE WAXES' },
      { type: 'heading', vi: 'Chương 15: Chất béo và dầu có nguồn gốc từ động vật, thực vật hoặc vi sinh vật và các sản phẩm tách từ chúng; chất béo ăn được đã chế biến; các loại sáp động vật hoặc thực vật', en: 'Chapter 15: Animal, vegetable or microbial fats and oils and their cleavage products; prepared edible fats; animal or vegetable waxes.' },
      { type: 'heading', vi: 'Chú giải.', en: 'Notes.' },
      { type: 'paragraph', vi: '1. Chương này không bao gồm:', en: '1. This Chapter does not cover:' },
      { type: 'list', vi: '(a) Mỡ lợn hoặc mỡ gia cầm thuộc nhóm 02.09;', en: '(a) Pig fat or poultry fat of heading 02.09;' },
      { type: 'list', vi: '(b) Bơ ca cao, chất béo hoặc dầu cacao (nhóm 18.04);', en: '(b) Cocoa butter, fat or oil (heading 18.04);' },
      { type: 'list', vi: '(c) Các chế phẩm ăn được có chứa hàm lượng trên 15% tính theo trọng lượng các sản phẩm của nhóm 04.05 (thường thuộc Chương 21);', en: '(c) Edible preparations containing by weight more than 15% of the products of heading 04.05 (generally Chapter 21);' },
      { type: 'list', vi: '(d) Tóp mỡ (nhóm 23.01) hoặc phế liệu thuộc các nhóm từ 23.04 đến 23.06;', en: '(d) Greaves (heading 23.01) or residues of headings 23.04 to 23.06;' },
      { type: 'list', vi: '(e) Axit béo, sáp đã chế biến, dược phẩm, sơn, vecni, xà phòng, nước hoa, mỹ phẩm hoặc chế phẩm vệ sinh, dầu đã được sulphonat hoá hoặc các mặt hàng khác thuộc Phần VI; hoặc', en: '(e) Fatty acids, prepared waxes, medicaments, paints, varnishes, soap, perfumery, cosmetic or toilet preparations, sulphonated oils or other goods of Section VI; or' },
      { type: 'list', vi: '(f) Chất thay thế cao su được điều chế từ dầu (nhóm 40.02).', en: '(f) Factice derived from oils (heading 40.02).' },
      { type: 'paragraph', vi: '2. Nhóm 15.09 không áp dụng cho các loại dầu ô liu thu được bằng phương pháp tách chiết dung môi (nhóm 15.10).', en: '2. Heading 15.09 does not apply to oils obtained from olives by solvent extraction (heading 15.10).' },
      { type: 'paragraph', vi: '3. Nhóm 15.18 không bao gồm chất béo hoặc dầu hay phân đoạn của chúng, mới chỉ làm biến chất, những loại đó được phân loại vào nhóm thích hợp tương ứng với các loại chất béo và dầu và phân đoạn của chúng chưa bị biến chất.', en: '3. Heading 15.18 does not cover fats or oils or their fractions, merely denatured, which are to be classified in the heading appropriate to the corresponding undenatured fats and oils and their fractions.' },
      { type: 'paragraph', vi: '4. Nguyên liệu sản xuất xà phòng, cặn dầu, hắc ín stearin, hắc ín glyxerin và phế liệu mỡ lông (wool grease) được phân loại vào nhóm 15.22.', en: '4. Soap-stocks, oil foots and dregs, stearin pitch, glycerol pitch and wool grease residues fall in heading 15.22.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Note.' },
      { 
        type: 'paragraph', 
        vi: '1. Theo mục đích của phân nhóm 1509.30, dầu ô liu nguyên chất (virgin olive oil) có chỉ số axit tự do tính theo axit oleic không quá 2,0g/100g và được phân biệt với các loại dầu ô liu nguyên chất khác (other virgin olive oils) tùy thuộc vào đặc tính theo chỉ dẫn Tiêu chuẩn Codex Alimentarius 33-1981.', 
        en: '1. For the purposes of subheading 1509.30, virgin olive oil has a free acidity expressed as oleic acid not exceeding 2,0 g/ 100 g and can be distinguished from the other virgin olive oil categories according to the characteristics indicated in the Codex Alimentarius Standard 33-1981.' 
      },
      { 
        type: 'paragraph', 
        vi: '2. Theo mục đích của các phân nhóm 1514.11 và 1514.19, khái niệm "dầu cây cải dầu (rape oil hoặc colza oil) có hàm lượng axit eruxic thấp" có nghĩa là dầu không bay hơi với hàm lượng axit eruxic dưới 2% tính theo khối lượng.', 
        en: '2. For the purposes of subheadings 1514.11 and 1514.19, the expression “low erucic acid rape or colza oil” means the fixed oil which has an erucic acid content of less than 2% by weight.' 
      },

      { type: 'heading', vi: 'TỔNG QUÁT', en: 'GENERAL' },
      { type: 'paragraph', vi: '(A) Chương này gồm:', en: '(A) This Chapter covers :' },
      { type: 'list', vi: '(1) Chất béo và dầu có nguồn gốc động vật, thực vật hoặc vi sinh vật, dạng thô, làm sạch hoặc tinh lọc hoặc tinh chế hoặc chế biến theo một số cách khác (ví dụ, được đun sôi, sulphurơ hoá hoặc hydro hoá).', en: '(1) Animal, vegetable or microbial fats and oils, whether crude, purified or refined or treated in certain ways (e.g., boiled, sulphurised or hydrogenated).' },
      { type: 'list', vi: '(2) Một số sản phẩm từ chất béo hoặc từ dầu, nhất là những sản phẩm từ sự phân ly chất béo hoặc dầu (ví dụ, glycerin thô).', en: '(2) Certain products derived from fats or oils, particularly their cleavage products (e.g., crude glycerol).' },
      { type: 'list', vi: '(3) Hợp chất ăn được của chất béo và dầu (ví dụ, margarin).', en: '(3) Compounded edible fats and oils (e.g., margarine).' },
      { type: 'list', vi: '(4) Sáp động vật hoặc thực vật', en: '(4) Animal or vegetable waxes.' },
      { type: 'list', vi: '(5) Phế thải thu được từ việc chế biến các chất béo từ sáp động vật hoặc thực vật.', en: '(5) Residues resulting from the treatment of fatty substances or of animal or vegetable waxes.' },
      { type: 'paragraph', vi: 'Tuy nhiên, Chương này không bao gồm :', en: 'The following are, however, excluded :' },
      { type: 'list', vi: '(a) Mỡ lợn không dính nạc, và mỡ gia cầm, chưa nấu chảy hoặc chiết xuất cách khác, thuộc nhóm 02.09 .', en: '(a) Pig fat, free of lean meat, and poultry fat, not rendered or otherwise extracted, of heading 02.09 .' },
      { type: 'list', vi: '(b) Bơ và chất béo và dầu khác thu được từ sữa ( nhóm 04.05 ); chất phết từ bơ sữa thuộc nhóm 04.05 .', en: '(b) Rutter and other fats and oils derived from milk ( heading 04.05 ); dairy spreads of heading 04.05.' },
      { type: 'list', vi: '(c) Bơ, chất béo và dầu từ cacao ( nhóm 18.04 ).', en: '(c) Cocoa butter, fat and oil ( heading 18.04 ).' },
      { type: 'list', vi: '(d) Tóp mỡ ( nhóm 23.01 ); khô dầu, khô dầu ô liu và chất bã khác (trừ cặn) chiết từ chất béo hoặc dầu thực vật ( các nhóm từ 23.04 đến 23.06 ).', en: '(d) Greaves ( heading 23.01 ): oil cake, residual olive pulp and other residues (except dregs) resulting from the extraction of vegetable or microbial fats and oils ( headings 23.04 to 23.06 ).' },
      { type: 'list', vi: '(e) Axit béo, dầu axit tinh chế, cồn béo, glycerin (trừ glycerin thô), sáp đã chế biến, dược phẩm, sơn, vecni, xà phòng, nước hoa, mỹ phẩm hoặc chế phẩm vệ sinh, dầu sulphonat hóa hoặc những sản phẩm khác thuộc Phần VI .', en: '(e) Fatty acids, acid oils from refining, fatty alcohols, glycerol (other than crude glycerol), prepared waxes, medicaments, paints, varnishes, soap, perfumery, cosmetic or toilet preparations, sulphonated oils or other goods of Section VI.' },
      { type: 'list', vi: '(f) Chất thay thế cao su dẫn xuất từ dầu ( nhóm 40.02 ).', en: '(f) Factice derived from oils ( heading 40.02 ).' },
      { 
        type: 'paragraph', 
        vi: 'Trừ dầu cá nhà táng và dầu jojoba, chất béo và dầu thực vật hoặc động vật là este của glycerin với axit béo (như axit palmitic, stearic và oleic).', 
        en: 'With the exception of sperm oil and jojoba oil, animal, vegetable or microbial fats and oils are esters of glycerol with fatty acids (such as palmitic, stearic and oleic acids).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Các nhóm 15.04 và từ 15.06 đến 15.15 cũng bao gồm những phần phân đoạn của chất béo và của dầu được nêu trong các nhóm đó, với điều kiện chúng không được mô tả cụ thể hơn ở nơi khác trong Danh mục (ví dụ, mỡ cá nhà táng thuộc nhóm 15.21 ). Những phương pháp chính dùng để phân đoạn như sau:', 
        en: 'Headings 15.04 and 15.06 to 15.15 also cover fractions of the fats and oils mentioned in those headings, provided they are not more specifically described elsewhere in the Nomenclature (e.g., spermaceti, heading 15.21 ). The main methods used for fractionation are as follows :' 
      },
      { type: 'list', vi: '(a) Phân đoạn khô gồm ép, gạn, hóa đông và lọc;', en: '(a) dry fractionation which includes pressing, decantation, winterisation and filtration:' },
      { type: 'list', vi: '(b) Phân đoạn bằng dung môi; và', en: '(b) solvent fractionation; and' },
      { type: 'list', vi: '(c) Phân đoạn với sự trợ giúp của tác nhân hoạt động bề mặt.', en: '(c) fractionation with the assistance of a surface-active agent.' },
      { 
        type: 'paragraph', 
        vi: 'Thuật ngữ "chất béo hoặc dầu hoặc phân đoạn của chúng, mới chỉ làm biến chất" được nêu trong Chú giải 3 của Chương này đề cập đến chất béo hoặc dầu hoặc các phân đoạn của chúng mà một chất làm biến tính, như dầu cá, phenol, dầu mỏ, dầu nhựa thông, toluene, methyl salicylate (dầu cây lộc đề), dầu hương thảo, được thêm vào làm cho chúng không phù hợp để ăn. Những chất này được thêm vào với một lượng nhỏ (thường không quá 1%) làm cho chất béo hoặc dầu hoặc các phần phân đoạn của chúng trở nên, ví dụ, ôi, chua, cay, đắng.', 
        en: 'The expression “ fats or oils or their fractions, merely denatured " mentioned in Note 3 to this Chapter refers to fats or oils or their fractions to which a denaturant, such as fish oil, phenols, petroleum oils, oil of turpentine, toluene, methyl salicylate (wintergreen oil), oil of rosemary, has been added to render them inedible. These substances are added in small quantities (generally not more than 1 %) which render the fats or oils or their fractions, e.g., rancid, sour, pungent, bitter.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Sáp động vật hoặc thực vật cơ bản bao gồm các este của một số axit béo bậc cao (palmitic, cerotic, myristic) với một số loại cồn trừ glycerin (cetyl, v.v.). Chúng bao gồm một tỷ lệ nhất định của axit và cồn của chúng ở dạng tự do, như hydrocarbon', 
        en: 'Vegetable or animal waxes consist essentially of the esters of certain higher fatty acids (palmitic, cerotic, myristic) with certain alcohols other than glycerol (cetyl, etc.). They contain a certain proportion of their acids and alcohols in the free state, and also some hydrocarbons.' 
      },
      { 
        type: 'paragraph', 
        vi: '(B) Các nhóm từ 15.07 đến 15.15 của Chương này bao gồm chất béo và dầu thực vật đơn lẻ (tức là không trộn với chất béo hoặc dầu của chất tự nhiên khác), các chất béo và dầu thực vật không bay hơi được nêu trong những nhóm này, cùng với các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học.', 
        en: '(B) Headings 15.07 to 15.15 of this Chapter cover the single (i.e., not mixed with fats or oils of another nature), fixed vegetable or microbial fats and oils mentioned in the headings, together with their fractions, whether or not refined, but not chemically modified.' 
      },
      { 
        type: 'paragraph', 
        vi: 'Chất béo và dầu thực vật hoặc vi sinh vật trong các nhóm này là chất béo và dầu không bay hơi, tức là, chất béo và dầu không thể dễ dàng chưng cất mà không phân ly, những dầu và chất béo này không bay hơi và không thể mất đi bằng hơi nước nhiệt cao (hơi nước nóng phân ly và xà phòng hoá chúng).', 
        en: 'The vegetable or microbial fats and oils classified in these headings are fixed fats and oils - i.e., fats and oils which cannot easily be distilled without decomposition, which are not volatile and which cannot be carried off by superheated steam (which decomposes and saponifies them).' 
      },
      { 
        type: 'paragraph', 
        vi: 'Các nhóm này không bao gồm các hỗn hợp hoặc các chế phẩm ăn được hoặc không ăn được, hoặc chất béo và dầu thực vật đã thay đổi về mặt hoá học ( nhóm 15.16, 15.17 hoặc 15.18, trừ khi chúng có đặc tính của các sản phẩm được phân loại nơi khác, ví dụ, trong các nhóm 30.03, 30.04, từ 33.03 đến 33.07, 34.03 ).', 
        en: 'These headings do not cover edible or inedible mixtures or preparations, or vegetable fats and oils that have been chemically modified ( heading 15.16, 15.17 or 15.18 , unless they have the character of products classified elsewhere, e.g., in headings 30.03, 30.04,33.03 to 33.07, 34.03 )' 
      },

      { type: 'heading', vi: '15.01 - Mỡ lợn (kể cả mỡ từ mỡ lá và mỡ khổ) và mỡ gia cầm, trừ các loại thuộc nhóm 02.09 hoặc 15.03.', en: '15.01 - Pig fat (including lard) and poultry fat, other than that of heading 02.09 or 15.03.' },
      { type: 'list', vi: '1501.10 - Mỡ lợn từ mỡ lá và mỡ khổ', en: '1501.10 - Lard' },
      { type: 'list', vi: '1501.20 - Mỡ lợn khác', en: '1501.20 - Other pig fat' },
      { type: 'list', vi: '1501.90 - Loại khác', en: '1501.90 - Other' },
      { type: 'paragraph', vi: 'Theo những nhận xét đã nêu trên, nhóm này bao gồm:', en: 'Subject to the above considerations, the heading includes :' },
      { type: 'list', vi: '- Mỡ lợn từ mỡ lá và mỡ khổ của lợn là mỡ làm thực phẩm, cứng hoặc nửa cứng, mềm và dạng kem, màu trắng lấy từ những mô mỡ lợn. Theo từng phương pháp chế biến và mô mỡ, các loại mỡ từ mỡ lá và mỡ khổ khác nhau được sản xuất. Ví dụ, mỡ lợn ăn được chất lượng tốt nhất thường thu được bởi làm chảy bằng phương pháp khô từ mỡ trong phần bụng của lợn. Phần lớn mỡ từ mỡ lá và mỡ khổ được khử mùi và trong một số trường hợp có thể có thêm chất chống oxy hoá để ngăn ngừa ôi thiu.', en: '- Lard , an edible soft creamy white solid or semi-solid fat obtained from the fatty tissue of pigs. Depending on the production method and the fatty tissue used, different lards are produced. For example, the best grade of edible pig fat is obtained, generally by dry rendering, front the internal fat of the abdomen of the pig. Most lards are deodorised and in some eases, antioxidants may be added to prevent rancidity.' },
      { type: 'list', vi: '- Những loại mỡ khác của lợn, gồm cả mỡ xương, mỡ phế liệu và các loại mỡ không ăn được khác sử dụng cho các mục đích trừ làm thức ăn cho người, như để sản xuất và làm thức ăn cho động vật.', en: 'Other pig fats , including bone fat, fats obtained from waste and other inedible fats for uses other than human consumption, such as for manufacturing and animal feeding.' },
      { type: 'list', vi: '- Mỡ gia cầm , kể cả mỡ xương và mỡ phế liệu', en: 'Poultry fats , including bone fat and fats obtained from waste.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading also excludes :' },
      { type: 'list', vi: '(a) Mỡ lợn không dính nạc và mỡ gia cầm, chưa nấu chảy hoặc chưa chiết xuất cách khác, thuộc nhóm 02.09 .', en: '(a) Pig fat, free of lean meat, and poultry fat. not rendered or otherwise extracted, of heading 02.09.' },
      { type: 'list', vi: '(b) Stearin mỡ lá và mỡ khổ và dầu mỡ lá và mỡ khổ ( nhóm 15.03 ).', en: '(b) Lard stearin and lard oil ( heading 15.03 ).' },
      { type: 'list', vi: '(c) Mỡ thu được từ động vật trừ những loại nêu trong nhóm này ( nhóm 15.02, 15.04 hoặc 15.06 ).', en: '(c) Fats obtained from animals other than those mentioned in this heading ( heading 15.02, 15.04 or 15.06 ).' },
      { type: 'list', vi: '(d) Dầu xương thuộc nhóm 15.06 .', en: '(d) Bone oil of heading 15.06.' },
      { type: 'list', vi: '(e) Chế phẩm giả mỡ lá và mỡ khổ ( nhóm 15.17) .', en: '(e) Imitation lard ( heading 15.17 ).' },

      { type: 'heading', vi: '15.02 - Mỡ của động vật họ trâu bò, cừu hoặc dê, trừ các loại mỡ thuộc nhóm 15.03.', en: '15.02 - Fats of bovine animals, sheep or goats, other than those of heading 15.03.' },
      { type: 'list', vi: '1502.10 - Mỡ (tallow)', en: '1502.10 - Tallow' },
      { type: 'list', vi: '1502.90 - Loại khác', en: '1502.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm mỡ ở các bộ phận nội tạng và cơ của động vật họ trâu bò, cừu hoặc dê và chủ yếu từ động vật họ trâu bò. Mỡ này có thể chưa tinh chế (tươi, ướp lạnh hoặc đông lạnh), ướp muối, ngâm nước muối, làm khô, hun khói hoặc ở dạng mỡ nấu chảy (tallow). Quá trình nấu chảy được sử dụng cũng như quá trình nấu chảy được nêu tại nhóm 15.01. Nhóm này cũng bao gồm mỡ được ép hoặc đã chiết xuất bằng dung môi.', en: 'This heading covers the fat surrounding the viscera and muscles of bovine animals, sheep or goats, that from bovine animals being the most important. This fat may be raw (fresh, chilled or frozen), salted, in brine, dried, smoked or in the form of rendered fat (tallow). The rendering processes used are the same as those for obtaining the fats of heading 15.01. The heading also covers fats obtained by pressing or solvent- extraction.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'The heading excludes :' },
      { type: 'list', vi: '(a) Oleostearin, dầu oleo và dầu mỡ (dầu tallow) ( nhóm 15.03 ).', en: '(a) Oleostearin, oleo-oil and tallow oil ( heading 15.03 ).' },
      { type: 'list', vi: '(b) Mỡ của các loại ngựa ( nhóm 15.06 ).', en: '(b) Fat obtained from horses ( heading 15.06 ).' },
      { type: 'list', vi: '(c) Mỡ xương và mỡ thu được từ phế liệu, của động vật không được nêu trong nhóm này ( nhóm 15.01 , 15.04 hoặc 15.06 ).', en: '(c) Bone fat and fats obtained from waste, of animals other than those mentioned in this heading ( heading 15.01, 15.04 or 15.06 ).' },
      { type: 'list', vi: '(d) Dầu gốc động vật (ví dụ, dầu từ chân bò và dầu xương, thuộc nhóm 15.06 ).', en: '(d) Oils of animal origin (e.g., neat’s foot oil and bone oil, of heading 15.06 ).' },
      { type: 'list', vi: '(e) Một số chất béo thực vật, gọi là "tallow thực vật", ví dụ, tallow thực vật Trung Quốc (chất béo thực vật chiết từ hạt stillingia) và "tallow Borneo" (chất béo thực vật chiết từ nhiều cây ở Indonesia) ( nhóm 15.15 ).', en: '(c) Certain vegetable fats known as “vegetable tallows”, e.g., “Chinese vegetable tallow” (stillingia fat) and “Borneo tallow” ( heading 15.15 ).' },

      { type: 'heading', vi: '15.03 - Stearin mỡ lợn, dầu mỡ lợn, oleostearin, dầu oleo và dầu tallow, chưa nhũ hoá hoặc chưa pha trộn hoặc chưa chế biến cách khác.', en: '15.03 - Lard stearin, lard oil, oleostearin, oleo-oil and tallow oil, not emulsified or mixed or otherwise prepared.' },
      { type: 'paragraph', vi: 'Stearin từ mỡ lá và mỡ khổ của lợn là phần mỡ cứng màu trắng còn lại sau khi ép mỡ lá và mỡ khổ của lợn hoặc ép mỡ lợn đã nấu chảy khác. Nhóm này bao gồm cả dạng ăn được và không ăn được.', en: 'Lard stearin is the solid white fat left after lard or other rendered pig fat has been pressed. The heading covers both the edible and inedible forms.' },
      { type: 'paragraph', vi: 'Dầu từ mỡ lá và mỡ khổ của lợn là sản phẩm thu được bằng việc ép lạnh mỡ lá và mỡ khổ của lợn hoặc ép mỡ lợn đã nấu chảy khác.', en: 'Lard oil is a product obtained by the cold pressing of lard or other rendered pig fat.' },
      { type: 'paragraph', vi: 'Dầu oleo (ăn được) là mỡ trắng hoặc hơi vàng, rắn, có mùi nhẹ của mỡ tallow và có vị dễ chịu, có cấu trúc tinh thể nhưng có thể có dạng hạt sau khi cán hoặc làm láng.', en: 'Oleo-oil (edible) is a white or yellowish solid fat of soft consistency with a faint smell of tallow and an agreeable flavour. It is crystalline but may become granular on rolling or smoothing.' },
      { type: 'paragraph', vi: 'Dầu tallow (dầu oleo không ăn được) là chất lỏng hơi vàng, có mùi của mỡ tallow, và rất dễ bị ôi khi để ngoài không khí.', en: 'Tallow oil (inedible oleo-oil) is a yellowish liquid, smells of tallow, and turns rancid very easily when exposed to air.' },
      { type: 'paragraph', vi: 'Phần cứng hơn còn lại sau khi chiết xuất dầu oleo hoặc dầu tallow là một hỗn hợp chủ yếu bao gồm các glycerit của axit stearic và palmitic (tristearin and tripalmitin). Gọi là oleostearin hoặc stearin mỡ tallow (tallow ép), nó thường ở dạng bánh hoặc thỏi, cứng và dễ gẫy.', en: 'The harder part which remains after the extraction of the oleo-oil or tallow oil is a mixture consisting mainly of the glycerides of stearic and palmitic acids (tristearin and tripalmitin). Known as oleostearin or tallow stearin (“pressed tallow”), it is generally in the form of hard, brittle cakes or tablets.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các sản phẩm đã nhũ hoá, đã pha trộn hoặc chế biến cách khác (nhóm 15.16, 15.17 hoặc 15.18).', en: 'The heading excludes products which have been emulsified, mixed or otherwise prepared ( heading 15.16, 15.17 or 15.18 ).' },

      { type: 'heading', vi: '15.04 - Mỡ và dầu và các phần phân đoạn của chúng, từ cá hoặc các loài động vật có vú sống ở biển, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học.', en: '15.04 - Fats and oils and their fractions, of fish or marine mammals, whether or not refined, but not chemically modified.' },
      { type: 'list', vi: '1504.10 - Dầu gan cá và các phần phân đoạn của chúng', en: '1504.10 - Fish-liver oils and their fractions' },
      { type: 'list', vi: '1504.20 - Mỡ và dầu và các phần phân đoạn của chúng, từ cá, trừ dầu gan cá', en: '1504.20 - Fats and oils and their fractions, of fish, other than liver oils' },
      { type: 'list', vi: '1504.30 - Mỡ và dầu và các phần phân đoạn của chúng, từ động vật có vú ở biển', en: '1504.30 - Fats and oils and their fractions, of marine mammals' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm mỡ và dầu và các phần phân đoạn của chúng, có nguồn gốc từ các loại cá (cá tuyết, cá bơn lưỡi ngựa (halibut), cá trích nước lạnh, cá trích dầu, cá cơm (cá trỏng), cá sac-đin biển Măng sơ (pilchard) v.v.) hoặc động vật có vú ở biển (cá voi, cá heo, hải cẩu v.v.).', en: 'This heading covers fats and oils and their fractions, derived from several varieties of fish (cod, halibut, menhaden, herring, sardines, anchovy, pilchard, etc.) or marine mammals (whales, dolphins, seals, etc.).' },
      { type: 'paragraph', vi: 'Mỡ và dầu có nguồn gốc từ cá hoặc động vật có vú ở biển vẫn thuộc nhóm này khi được tinh chế, nhưng bị loại trừ nếu được hydro hoá, este hoá liên hợp, tái este hóa hoặc eledin hoá một phần hoặc toàn bộ ( nhóm 15.16 ).', en: 'The fats and oils derived from fish or marine mammals remain in this heading when refined, but are excluded if partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised ( heading 15.16 ).' },

      { type: 'heading', vi: '15.05 - Mỡ lông và chất béo thu được từ mỡ lông (kể cả lanolin).', en: '15.05 - Wool grease and fatty substances derived therefrom (including lanolin).' },
      { type: 'paragraph', vi: 'Mỡ lông là một loại mỡ dính có mùi khó chịu, được chiết xuất từ nước xà phòng tẩy lông hoặc chuội hoặc hồ vải.', en: 'Wool grease is a sticky fat with a disagreeable odour, extracted from the soapy water in which the wool has been scoured or cloth fulled.' },
      { type: 'paragraph', vi: 'Lanolin, thu được bằng cách tinh chế mỡ lông, có tính đồng nhất của thuốc mỡ; nó có màu từ trắng hơi vàng đến nâu tuỳ theo mức độ tinh chế.', en: 'Lanolin , obtained by purifying wool grease, has the consistency of an ointment; it ranges in colour from yellowish-white to brown according to the degree of refining.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm các loại cồn đã xác định về mặt hóa học (thường thuộc Chương 29 ) và những chế phẩm dựa trên lanolin, ví dụ lanolin thêm thuốc hoặc chất thơm ( nhóm 30.03 hoặc 30.04 , hoặc Chương 33 ). Cũng không thuộc nhóm này là các lanolin thay đổi về mặt hoá học đến mức làm mất tính chất cơ bản của lanolin, ví dụ lanolin được ethoxylat hóa đến mức trở thành hoà tan trong nước (thường thuộc nhóm 34.02 ).', en: 'The heading excludes chemically defined alcohols (generally Chapter 29 ) and preparations based on lanolin, for example lanolin to which medicated or perfumed substances have been added ( heading 30.03 or 30.04 , or Chapter 33 ). Also excluded are lanolins so extensively modified chemically that they have lost the essential character of lanolin, for example lanolin ethoxylated to such an extent as to be water soluble (usually heading 34.02 ).' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm phế liệu của mỡ lông ( nhóm 15.22 ).', en: 'The heading excludes wool grease residues ( heading 15.22).' },

      { type: 'heading', vi: '15.06 - Mỡ và dầu động vật khác và các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học.', en: '15.06 - Other animal fats and oils and their fractions, whether or not refined, but not chemically modified.' },
      { type: 'paragraph', vi: 'Đặc biệt, nhóm này bao gồm:', en: 'The heading includes in particular :' },
      { type: 'list', vi: '(1) Mỡ của các loại ngựa, hà mã, gấu, thỏ, cua đất, rùa v.v. (kể cả mỡ từ xương, xương tuỷ hoặc từ phế liệu của các động vật này).', en: '(1) Fat obtained from horses, hippopotamuses, bears, rabbits, land-crabs, turtles, etc. (including fats obtained from bone, marrow or waste of these animals).' },
      { type: 'list', vi: '(2) Dầu từ chân của bò và các loại dầu tương tự là sản phẩm của việc ép lạnh mỡ thu được bằng cách đun sôi xương chân hoặc xương cẳng chân chân của động vật họ trâu bò, ngựa hoặc cừu.', en: '(2) Neat’s-foot and similar oils obtained by cold pressing the grease obtained by boiling the foot or shin bones of bovine animals, horses or sheep.' },
      { type: 'list', vi: '(3) Dầu xương được chiết xuất từ mỡ xương bằng cách ép, hoặc bằng cách xử lý xương bằng nước nóng.', en: '(3) Bone oil extracted from bone fat by pressure, or by the treatment of bones with hot water.' },
      { type: 'list', vi: '(4) Dầu chiết từ tủy , là sản phẩm màu trắng hoặc hơi vàng, được dùng trong dược phẩm và nước hoa.', en: '(4) Oil extracted from marrow . A white or yellowish product used in pharmacy and in perfumery.' },
      { type: 'list', vi: '(5) Dầu của lòng đỏ trứng được chiết xuất từ lòng đỏ trứng đã luộc chín bằng cách ép hoặc bằng dung môi.', en: '(5) Egg-yolk oil extracted from hard-boiled egg-yolks by pressure or by solvents.' },
      { type: 'list', vi: '(6) Dầu trứng rùa , có màu vàng nhạt, không mùi, dùng làm thực phẩm.', en: '(6) Turtle-egg oil . Pale yellow and odourless; used for food.' },
      { type: 'list', vi: '(7) Dầu nhộng chiết từ nhộng tằm, màu nâu đỏ, có mùi nồng và rất khó chịu, dùng trong sản xuất xà phòng.', en: '(7) Chrysalis oil extracted from silk-worm chrysalises. This is a reddish-brown oil with a pronounced and very disagreeable odour; it is used in soap manufacture.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm :', en: 'This heading excludes :' },
      { type: 'list', vi: '(a) Mỡ lợn hoặc mỡ gia cầm ( nhóm 02.09 hoặc 15.01 ).', en: '(a) Pig or poultry fat ( heading 02.09 or 15.01 ).' },
      { type: 'list', vi: '(b) Mỡ của động vật họ trâu bò, dê hoặc cừu ( nhóm 15.02 ).', en: '(b) Fats of bovine animals, sheep or goats ( heading 15.02 ).' },
      { type: 'list', vi: '(c) Mỡ và dầu của cá hoặc động vật có vú ở biển và các phần phân đoạn của chúng ( nhóm 15.04 ).', en: '(c) Fats and oils of fish or marine mammals and their fractions ( heading 15.04 ).' },
      { type: 'list', vi: '(d) Những sản phẩm bao gồm chủ yếu bazơ piriddin (dầu dippel, thường gọi dầu xương) ( nhóm 38.24 ).', en: '(d) Products consisting mainly of pyridine bases (known as Dipper’s oil, also sometimes called bone-oil) ( heading 38.24 ).' },

      { type: 'heading', vi: '15.07 - Dầu đậu tương và các phần phân đoạn của dầu đậu tương, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học', en: '15.07 - Soya-bean oil and its fractions, whether or not refined, but not chemically modified (+).' },
      { type: 'list', vi: '1507.10 - Dầu thô, đã hoặc chưa khử chất nhựa', en: '1507.10 - Crude oil, whether or not degummed' },
      { type: 'list', vi: '1507.90 - Loại khác', en: '1507.90 - Other' },
      { type: 'paragraph', vi: 'Dầu đậu tương thu được bằng cách chiết xuất từ hạt đậu tương ( Glycine max ), bằng cách ép thuỷ lực hoặc bằng ép dầu bật ra (expeller presses), hoặc bằng dung môi.', en: 'Soya-bean oil is obtained by extraction from the seeds of the soya bean ( Glycine max ), using hydraulic or expeller presses, or solvents.' },
      { type: 'heading', vi: 'Chú giải phân nhóm.', en: 'Subheading Explanatory Note.' },
      { type: 'paragraph', vi: 'Phân nhóm 1507.10', en: 'Subheading 1507.10' },
      { 
        type: 'paragraph', 
        vi: 'Dầu thực vật không bay hơi, lỏng hoặc rắn, thu được bằng cách ép, được coi như dầu thô nếu không qua quá trình chế biến nào khác ngoài gạn, quay ly tâm hoặc lọc, với điều kiện, để tách dầu ra khỏi các hạt cứng, chỉ cần đến lực cơ học như sức nặng, nén hoặc lực ly tâm, trừ các phương pháp lọc hấp thụ, bằng việc phân đoạn hoặc phương pháp hoá hoặc lý nào khác. Dầu thu được từ việc chiết được coi là dầu thô nếu không có thay đổi về màu sắc, mùi, vị so với dầu tương ứng thu được từ việc ép.', 
        en: 'Fixed vegetable oils, fluid or solid, obtained by pressure, shall be considered as “ crude ’’ if they have undergone no processing other than decantation, centrifugation or filtration, provided that, in order to separate the oils from solid particles only mechanical force, such as gravity, pressure or centrifugal force, has been employed, excluding any adsorption filtering process, fractionation or any other physical or chemical process. If obtained by extraction an oil shall continue to be considered as “crude”, provided it has undergone no change in colour, odour or taste when compared with the corresponding oil obtained by pressure.' 
      },

      { type: 'heading', vi: '15.08 - Dầu lạc và các phần phân đoạn của dầu lạc, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học. (+).', en: '15.08 - Ground-nut oil and its fractions, whether or not refined, but not chemically modified (+).' },
      { type: 'list', vi: '1508.10 - Dầu thô', en: '1508.10 - Crude oil' },
      { type: 'list', vi: '1508.90 - Loại khác', en: '1508.90 - Other' },
      { type: 'paragraph', vi: 'Dầu lạc là một loại dầu không khô, thu được từ lạc thông thường ( Arachis hypogaea ) bằng cách chiết xuất dung môi hay ép.', en: 'Ground-nut oil or peanut oil is a non-drying oil obtained from the seeds or “nuts’’ of the common ground-nut ( Arachis hypogaea ), by solvent extraction or by pressing.' },

      { type: 'heading', vi: '15.09 - Dầu ô liu và các phần phân đoạn của dầu ô liu, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hoá học.', en: '15.09 - Olive oil and its fractions, whether or not refined, but not chemically modified.' },
      { type: 'list', vi: '1509.20 - Dầu ô liu nguyên chất đặc biệt (Extra virgin olive oil)', en: '1509.20 - Extra virgin olive oil' },
      { type: 'list', vi: '1509.30 - Dầu ô liu nguyên chất (Virgin olive oil)', en: '1509.30 - Virgin olive oil' },
      { type: 'list', vi: '1509.40 - Dầu ô liu nguyên chất khác', en: '1509.40 - Other virgin olive oils' },
      { type: 'list', vi: '1509.90 - Loại khác', en: '1509.90 - Other' },
      { type: 'paragraph', vi: 'Dầu ôliu nguyên chất (vigrin) là dầu thu được từ quả ôliu chỉ bằng phương pháp cơ học hoặc vật lý khác trong các điều kiện, đặc biệt là điều kiện nhiệt, không làm biến chất dầu, và không qua chế biến khác ngoài rửa sạch, gạn, quay ly tâm hoặc lọc.', en: 'Virgin olive oils are the oils obtained from the fruit of the olive tree solely by mechanical or other physical means under conditions, particularly thermal conditions, that do not lead to alterations in the oil, and which have not undergone any treatment other than washing, decanting, centrifuging and filtration.' },
      { 
        type: 'paragraph', 
        vi: '(A) Dầu ôliu nguyên chất đặc biệt, thu được trong các điều kiện cụ thể, đặc biệt liên quan đến việc xử lý ô liu trước khi chế biến hoặc kiểm soát nhiệt độ trong quá trình chế biến và bảo quản, không dẫn đến bất kỳ thay đổi nào trong dầu... Dầu ô liu nguyên chất đặc biệt có chỉ số axit tự do tính theo axit oleic không vượt quá 0,8 gam trên 100 gam.', 
        en: '(A) Extra virgin olive oil , which is obtained under specific conditions, in particular as regards the handling of the olives prior to processing or the temperature control during processing and storage, which do not lead to any alterations in the oil... Extra virgin olive oil has a free acidity expressed as oleic acid not exceeding 0.8 grams per 100 grams.' 
      },
      { 
        type: 'paragraph', 
        vi: '(B) Dầu ôliu nguyên chất , thu được trong các điều kiện cụ thể... Dầu ô liu nguyên chất có chỉ số axit tự do tính theo axit oleic không vượt quá 2,0 gam trên 100 gam.', 
        en: '(B) Virgin olive oil, which is obtained under specific conditions... Virgin olive oil has a free acidity expressed as oleic acid not exceeding 2.0 grams per 100 grams.' 
      },
      { type: 'paragraph', vi: '(C) Các dầu ô liu nguyên chất khác, thu được trong các điều kiện tạo ra sản phẩm có thể không thích hợp dùng làm thức ăn cho người nếu không tinh chế thêm.', en: '(C) Other virgin olive oils , which are obtained under conditions that lead to a product that may not be suitable for human consumption without further refining.' },
      { type: 'paragraph', vi: '(D) Loại khác bao gồm các loại dầu thu được từ dầu ô liu nguyên chất thuộc các phân nhóm nêu trên bằng phương pháp tinh chế, không làm thay đổi cấu trúc glyceride ban đầu. Nó bao gồm hai loại sau:', en: '(D) Other includes oils obtained from the virgin olive oils of the above-listed subheadings by refining methods, which do not lead to alterations in the initial glyceride structure. It includes the following two categories:' },
      { type: 'list', vi: '(1) Dầu ô liu tinh chế có chỉ số axit tự do tính theo axit oleic không vượt quá 0,3 gam trên 100 gam.', en: '(1) Refined olive oil has a free acidity expressed as oleic acid not exceeding 0.3 grams per 100 grams.' },
      { type: 'list', vi: '(2) Dầu ô liu bao gồm dầu ô liu tinh chế và dầu ô liu nguyên chất. Nó có chỉ số axit tự do, tính theo axit oleic, không quá 1 gam trên 100 gam.', en: '(2) Olive oil composed of refined olive oil and virgin olive oils. It has a free acidity, expressed as oleic acid, of not more than 1 gram per 100 grams.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm dầu bã ô liu và hỗn hợp của nó với dầu ô liu nguyên chất ( nhóm 15.10 ) hoặc dầu tái este hóa thu được từ dầu ô liu ( nhóm 15.16 ).', en: 'This heading does not cover olive pomace oil and its blends with virgin olive oils ( heading 15.10 ) or re-esterified oil obtained from olive oil ( heading 15.16 ).' },

      { type: 'heading', vi: '15.10 - Dầu khác và các phần phân đoạn của chúng, thu được duy nhất từ ô liu, đã hoặc chưa tinh chế, nhưng chưa thay đổi về mặt hóa học, kể cả hỗn hợp của các loại dầu này hoặc các phần phân đoạn của các loại dầu này với dầu hoặc các phần phân đoạn của dầu thuộc nhóm 15.09.', en: '15.10 - Other oils and their fractions, obtained solely from olives, whether or not refined, but not chemically modified, including blends of these oils or fractions with oils or fractions of heading 15.09.' },
      { type: 'list', vi: '1510.10 - Dầu bã ô liu (olive pomace oil) thô', en: '1510.10 - Crude olive pomace oil' },
      { type: 'list', vi: '1510.90 - Loại khác', en: '1510.90 - Other' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm các loại dầu thu được từ bã ô liu. Bã ô liu là chất rắn còn sót lại của ô liu sau khi chiết xuất dầu ô liu của nhóm 15.09.', en: 'This heading includes oils obtained from olive pomace. Olive pomace is the residual solids of olives after extraction of olive oils of heading 15.09.' },
      { type: 'paragraph', vi: '(A) Dầu bã ô liu thô , là loại dầu thu được bằng cách chiết dung môi hoặc các xử lý vật lý khác các cặn còn lại sau khi chiết xuất dầu ô liu thuộc nhóm 15.09.', en: '(A) Crude olive pomace oil, which is oil obtained by solvent-extraction or other physical treatments of the residues left after the extraction of olive oils of heading 15.09.' },
      { type: 'paragraph', vi: '(B) Dầu bã ô liu tinh chế , là loại dầu thu được từ dầu bã ô liu thô bằng phương pháp tinh chế, không dẫn đến thay đổi cấu trúc glyceridic ban đầu.', en: '(B) Refined olive pomace oil, which is oil obtained from crude olive pomace oil by refining methods, which do not lead to alterations in the initial glyceridic structure.' },

      { type: 'heading', vi: '15.11 - Dầu cọ và các phần phân đoạn của dầu cọ, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hóa học (+).', en: '15.11 - Palm oil and its fractions, whether or not refined, but not chemically modified (+)' },
      { type: 'list', vi: '1511.10 - Dầu thô', en: '1511.10 - Crude oil' },
      { type: 'list', vi: '1511.90 - Loại khác', en: '1511.90 - Other' },
      { type: 'paragraph', vi: 'Dầu cọ là một loại chất béo thực vật thu được từ cơm của quả cọ dầu. Nguồn gốc chủ yếu từ cây cọ dầu châu Phi ( Elacis guineensis ) mọc tự nhiên ở vùng Châu Phi nhiệt đới.', en: 'Palm oil is a vegetable fat obtained from the pulp of the fruits of oil palms. The main source is the African oil palm ( Elaeis guineensis ) which is native to tropical Africa.' },
      { type: 'paragraph', vi: 'Nhóm này không bao gồm dầu hạt cọ, dầu ba-ba-su ( nhóm 15.13 ).', en: 'This heading does not cover palm kernel oil or babassu oil ( heading 15.13 ).' },

      { type: 'heading', vi: '15.12 - Dầu hạt hướng dương, dầu cây rum hoặc dầu hạt bông và các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hóa học (+).', en: '15.12 - Sunflower-seed, safflower or cotton-seed oil and fractions thereof, whether or not refined, but not chemically modified (+).' },
      { type: 'paragraph', vi: '- Dầu hạt hướng dương hoặc dầu cây rum và các phần phân đoạn của chúng:', en: '- Sunflower-seed or safflower oil and fractions thereof:' },
      { type: 'list', vi: '1512.11 - - Dầu thô', en: '1512.11 - - Crude oil' },
      { type: 'list', vi: '1512.19 - - Loại khác', en: '1512.19 - - Other' },
      { type: 'paragraph', vi: '- Dầu hạt bông và các phần phân đoạn của chúng:', en: '- Cotton-seed oil and its fractions:' },
      { type: 'list', vi: '1512.21 - - Dầu thô, đã hoặc chưa khử gossypol', en: '1512.21 - - Crude oil, whether or not gossypol has been removed' },
      { type: 'list', vi: '1512.29 - - Loại khác', en: '1512.29 - - Other' },

      { type: 'heading', vi: '15.13 - Dầu dừa (copra), dầu hạt cọ hoặc dầu cọ ba-ba-su và các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hóa học (+).', en: '15.13 - Coconut (copra), palm kernel or babassu oil and fractions thereof, whether or not refined, but not chemically modified (+).' },
      { type: 'paragraph', vi: '- Dầu dừa (copra) và các phân đoạn của dầu dừa:', en: '- Coconut (copra) oil and its fractions:' },
      { type: 'list', vi: '1513.11 - - Dầu thô', en: '1513.11 - - Crude oil' },
      { type: 'list', vi: '1513.19 - - Loại khác', en: '1513.19 - - Other' },
      { type: 'paragraph', vi: '- Dầu hạt cọ hoặc dầu cọ ba-ba-su và các phần phân đoạn của chúng:', en: '- Palm kernel or babassu oil and fractions thereof:' },
      { type: 'list', vi: '1513.21 - - Dầu thô', en: '1513.21 - - Crude oil' },
      { type: 'list', vi: '1513.29 - - Loại khác', en: '1513.29 - - Other' },

      { type: 'heading', vi: '15.14 - Dầu cây cải dầu (rape oil hoặc colza oil) hoặc dầu mù tạt và các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hóa học (+).', en: '15.14 - Rape, colza or mustard oil and fractions thereof, whether or not refined, but not chemically modified (+).' },
      { type: 'paragraph', vi: '- Dầu cây cải dầu hàm lượng axit eruxic thấp và các phần phân đoạn của chúng:', en: '- Low erucic acid rapte or colz oil and its fractions:' },
      { type: 'list', vi: '1514.11 - - Dầu thô', en: '1514.11 - - Crude oil' },
      { type: 'list', vi: '1514.19 - - Loại khác', en: '1514.19 - - Other' },
      { type: 'paragraph', vi: '- Loại khác:', en: '- Other:' },
      { type: 'list', vi: '1514.91 - - Dầu thô', en: '1514.91 - - Crude oil' },
      { type: 'list', vi: '1514.99 - - Loại khác', en: '1514.99 - - Other' },

      { type: 'heading', vi: '15.15 - Chất béo và dầu không bay hơi khác của thực vật hoặc vi sinh vật (kể cả dầu jojoba) và các phần phân đoạn của chúng, đã hoặc chưa tinh chế, nhưng không thay đổi về mặt hóa học (+).', en: '15.15 - Other fixed vegetable or microbial fats and oils (including jojoba oil) and their fractions, whether or not refined, but not chemically modified (+).' },
      { type: 'paragraph', vi: '- Dầu hạt lanh và các phần phân đoạn của dầu hạt lanh:', en: '- Linseed oil and its fractions:' },
      { type: 'list', vi: '1515.11 - - Dầu thô', en: '1515.11 - - Crude oil' },
      { type: 'list', vi: '1515.19 - - Loại khác', en: '1515.19 - - Other' },
      { type: 'paragraph', vi: '- Dầu hạt ngô và các phần phân đoạn của dầu hạt ngô:', en: '- Maize (corn) oil and its fractions:' },
      { type: 'list', vi: '1515.21 - - Dầu thô', en: '1515.21 - Crude oil' },
      { type: 'list', vi: '1515.29 - - Loại khác', en: '1515.29 - - Other' },
      { type: 'list', vi: '1515.30 - Dầu thầu dầu và các phần phân đoạn của dầu thầu dầu', en: '1515.30 - Castor oil and its fractions' },
      { type: 'list', vi: '1515.50 - Dầu hạt vừng và các phần phân đoạn của dầu hạt vừng', en: '1515.50 - Sesame oil and its fractions' },
      { type: 'list', vi: '1515.60 - Chất béo và dầu vi sinh vật và các phần phân đoạn của chúng', en: '1515.60 - Microbial fats and oils and their fractions' },
      { type: 'list', vi: '1515.90 - Loại khác', en: '1515.90 - Other' },
      { type: 'paragraph', vi: '(5) Chất béo và dầu vi sinh vật, còn được gọi là dầu đơn bào (SCO), thu được bằng cách chiết xuất lipid từ các vi sinh vật có dầu như nấm (bao gồm cả nấm men), vi khuẩn và vi tảo.', en: '(5) Microbial fats and oils , also known as single cell oils (SCOs), are obtained by extracting lipids from oleaginous microorganisms such as fungi (including yeasts), bacteria and microalgae.' },

      { type: 'heading', vi: '15.16 - Chất béo và dầu động vật, thực vật hoặc vi sinh vật và các phần phân đoạn của chúng, đã qua hydro hóa, este hóa liên hợp, tái este hóa hoặc elaiđin hóa toàn bộ hoặc một phần, đã hoặc chưa tinh chế, nhưng chưa chế biến thêm.', en: '15.16 - Animal, vegetable or microbial fat and oils and their fractions, partly or wholly hydrogenated, inter-esterified, re-esterified or elaidinised, whether or not refined, but not further prepared.' },
      { type: 'list', vi: '1516.10 - Mỡ và dầu động vật và các phần phân đoạn của chúng', en: '1516.10 - Animal fats and oils and their fractions' },
      { type: 'list', vi: '1516.20 - Chất béo và dầu thực vật và các phần phân đoạn của chúng', en: '1516.20 - Vegetable fats and oils and their fractions' },
      { type: 'list', vi: '1516.30 - Chất béo và dầu vi sinh vật và các phần phân đoạn của chúng', en: '1516.30 - Microbial fats and oils and their fractions' },

      { type: 'heading', vi: '15.17 - Margarin; các hỗn hợp hoặc các chế phẩm ăn được của chất béo hoặc dầu động vật, thực vật hoặc vi sinh vật hoặc các phần phân đoạn của các loại chất béo hoặc dầu khác nhau thuộc Chương này, trừ chất béo hoặc dầu ăn được hoặc các phần phân đoạn của chúng thuộc nhóm 15.16 (+).', en: '15.17 - Margarine; edible mixtures or preparations of animal or vegetable or microbial fats or oils or of fractions of different fats or oils of this Chapter, other than edible fats and oils or their fractions of heading 15.16 (+).' },
      { type: 'list', vi: '1517.10 - Margarin, trừ loại margarin lỏng', en: '1517.10 - Margarine, excluding liquid margarine' },
      { type: 'list', vi: '1517.90 - Loại khác', en: '1517.90 - Other' },

      { type: 'heading', vi: '15.18 - Chất béo và dầu động vật hoặc thực vật và các phần phân đoạn của chúng, đã đun sôi, oxy hoá, khử nước, sulphat hoá, thổi khô, polyme hoá bằng cách đun nóng trong chân không hoặc trong khí trơ hoặc bằng biện pháp thay đổi về mặt hoá học khác, trừ loại thuộc nhóm 15.16; các hỗn hợp hoặc các chế phẩm không ăn được từ chất béo hoặc dầu động vật hoặc thực vật hoặc vi sinh vật hoặc từ các phần phân đoạn của các loại chất béo hoặc dầu khác nhau thuộc Chương này, chưa được chi tiết hoặc ghi ở nơi khác.', en: '15.18 - Animal, vegetable or microbial fats and oils and their fractions, boiled, oxidised, dehydrated, sulphurised, blown, polymerised by heat in vacuum or in inert gas or otherwise chemically modified, excluding those of heading 15.16; inedible mixtures or preparations of animal, vegetable or microbial fats or oils or of fractions of different fats or oils of this Chapter, not elsewhere specified or included.' },

      { type: 'heading', vi: '15.20 - Glycerin, thô; nước glycerin và dung dịch kiềm glycerin.', en: '15.20 - Glycerol, crude; glycerol waters and glycerol lyes.' },

      { type: 'heading', vi: '15.21 - Sáp thực vật (trừ triglyxerit), sáp ong, sáp côn trùng khác và sáp cá nhà táng, đã hoặc chưa tinh chế hay pha màu.', en: '15.21 - Vegetable waxes (other than triglycerides), beeswax, other insect waxes and spermaceti, whether or not refined or coloured.' },
      { type: 'list', vi: '1521.10 - Sáp thực vật', en: '1521.10 - Vegetable waxes' },
      { type: 'list', vi: '1521.90 - Loại khác', en: '1521.90 - Other' },
      { type: 'paragraph', vi: 'Sáp thực vật thuộc nhóm này có thể ở dạng thô hoặc tinh chế, đã tẩy trắng hoặc pha màu, đã hoặc chưa thành khối, thanh v.v.', en: 'The heading covers vegetable waxes, crude or refined, bleached or coloured, whether or not in cakes, sticks, etc.' },

      { type: 'heading', vi: '15.22 - Chất nhờn; bã, cặn còn lại sau quá trình xử lý các chất béo hoặc sáp động vật hoặc thực vật.', en: '15.22 - Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes.' },
      { type: 'paragraph', vi: '(A) Chất nhờn.', en: '(A) Degras.' },
      { type: 'paragraph', vi: '(B) Phế thải có từ xử lý chất béo hoặc sáp động vật hoặc thực vật.', en: '(B) Residues resulting from the treatment of fatty substances or animal or vegetable waxes.' },
      { type: 'paragraph', vi: 'Nhóm này bao gồm:', en: 'This heading covers, inter alia :' },
      { type: 'list', vi: '(1) Cặn dầu. Phế thải dầu hoặc nhầy có từ lọc dầu.', en: '(1) Oil foots and dregs. Oily or mucilaginous residues resulting from the purification of oils.' },
      { type: 'list', vi: '(2) Nguyên liệu sản xuất xà phòng (soap- stocks).', en: '(2) Soap-stocks.' },
      { type: 'list', vi: '(3) Hắc ín stearin hoặc nhựa stearin thu được từ chưng cất axit béo.', en: '(3) Stearin pitch from the distillation of fatty acids.' },
      { type: 'list', vi: '(4) Phế thải từ chưng cất mỡ lông , nó có dạng nhìn giống hắc ín phế thải stearin.', en: '(4) Residues from the distillation of wool grease. These look like stearin residues.' },
      { type: 'list', vi: '(5) Hắc ín glycerin , phế thải của chưng cất glycerin.', en: '(5) Glycerol pitch. Residue resulting from the distillation of glycerol.' },
      { type: 'list', vi: '(6) Đất sử dụng đã tẩy màu đã qua sử dụng có chứa chất béo hoặc sáp động vật hoặc thực vật.', en: '(6) Used decolourising earths containing fats or animal or vegetable waxes.' },
      { type: 'list', vi: '(7) Phế thải của việc lọc sáp động vật hoặc thực vật, cấu tạo bởi là tạp chất còn giữ lượng sáp nhất định.', en: '(7) Filtration residues of animal or vegetable waxes consisting of impurities containing certain quantities of wax.' }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 16
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 17
  // ------------------------------------------------------------



  // ------------------------------------------------------------
  // CHAPTERS 18
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 19
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 20
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 21
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 22
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 23
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 24
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 25
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 26
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 27
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 28
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 29
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 30
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 31
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 32
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 33
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 34
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 35
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 36
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 37
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 38
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 39
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 40
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 41
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 42
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 43
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 44
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 45
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 46
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 47
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 47
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 49
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 50
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 51
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 52
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 53
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 54
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 55
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 56
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 57
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 58
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 59
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 60
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 61
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 62
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 63
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 64
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 65
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 66
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 67
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 68
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 69
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 70
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 71
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 72
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 73
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 74
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 75
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 76
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 77
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 78
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 79
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 80
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 81
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 82
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 83
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 84
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 85
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 86
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 87
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 88
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 89
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 90
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 91
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 92
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 93
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 94
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 95
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 96
  // ------------------------------------------------------------


  // ------------------------------------------------------------
  // CHAPTERS 97
  // ------------------------------------------------------------



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
