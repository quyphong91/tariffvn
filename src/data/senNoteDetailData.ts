// ============================================================
// SEN NOTE DETAIL DATA - Bilingual Side-by-Side Notes
// ============================================================

/**
 * Represents a single row of bilingual content
 */
export interface SENNoteRow {
  type: 'heading' | 'paragraph' | 'list';
  vi: string;
  en: string;
}

/**
 * Represents the complete detail for a SEN chapter
 */
export interface SENChapterDetail {
  chapterNumber: number;
  titleVi: string;
  titleEn: string;
  content: SENNoteRow[];
}

// ============================================================
// SEN CHAPTER DATA
// ============================================================

export const senNoteDetailData: SENChapterDetail[] = [
  // ------------------------------------------------------------
  // CHAPTER 1
  // ------------------------------------------------------------
  {
    chapterNumber: 1,
    titleVi: 'CHƯƠNG 1',
    titleEn: 'CHAPTER 1',
    content: [
      {
        type: 'heading',
        vi: '0102.29.11',
        en: '0102.29.11'
      },
      {
        type: 'paragraph',
        vi: 'BÒ THIẾN',
        en: 'OXEN'
      },
      {
        type: 'paragraph',
        vi: 'Bò thiến là động vật đực họ trâu bò giống Bos loài Bos Taurus trưởng thành, đã bị thiến.',
        en: 'Oxen are castrated adult male bovine animals of the genus Bos of the species Bos Taurus.'
      },
      {
        type: 'paragraph',
        vi: 'Chúng được huấn luyện làm động vật kéo (kéo xe cart, xe kéo bốn bánh (wagons), cày…) vì chúng có đặc trưng là to lớn, vạm vỡ và mạnh mẽ. Hầu hết bò thiến có trọng lượng tương đương với các con bò đực trưởng thành của cùng một giống, nhưng bò thiến thường cao hơn và gọn hơn ở cổ và ngực.',
        en: 'They are trained as draft animals (pulling carts, wagons, plows etc) because of they are characteristically more massive, muscular, and sturdy. Most oxen weigh about the same as a mature bull of the same breed, but oxen often grow taller and leaner in the neck and chest.'
      },
      {
        type: 'paragraph',
        vi: '(Nguồn: In-đô-nê-xi-a)',
        en: '(Source: Indonesia)'
      },
      {
        type: 'heading',
        vi: '0105.11.10 0105.12.10 0105.13.10 0105.14.10 0105.15.10 0105.94.10 0105.99.10 0105.99.30',
        en: '0105.11.10 0105.12.10 0105.13.10 0105.14.10 0105.15.10 0105.94.10 0105.99.10 0105.99.30'
      },
      {
        type: 'paragraph',
        vi: 'ĐỂ NHÂN GIỐNG',
        en: 'BREEDING'
      },
      {
        type: 'paragraph',
        vi: 'Theo mục đích của các phân nhóm của ASEAN thuộc nhóm 01.05, thuật ngữ “để nhân giống” để chỉ gia cầm sống, được nuôi lớn để trở thành động vật để nhân giống.',
        en: 'For the purpose of the ASEAN subheadings under heading 01.05, the term “breeding” refers to live poultry of a kind presented for raising as a breeding animal.'
      },
      {
        type: 'paragraph',
        vi: 'Động vật để nhân giống được kèm theo chứng nhận của các cơ quan có thẩm quyền theo quy định của luật quốc gia.',
        en: 'Breeding animals are accompanied by certification from the competent authorities as provided for under the national law.'
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
      { 
        type: 'heading', 
        vi: 'Chú giải SEN - Chương 2', 
        en: 'SEN Notes - Chapter 2' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
  },
  // ------------------------------------------------------------
  // CHAPTER 3
  // ------------------------------------------------------------
  {
    chapterNumber: 3,
    titleVi: 'CHƯƠNG 3: CÁ VÀ ĐỘNG VẬT GIÁP XÁC, ĐỘNG VẬT THÂN MỀM',
    titleEn: 'CHAPTER 3: FISH AND CRUSTACEANS, MOLLUSCS',
    content: [
      { 
        type: 'heading', 
        vi: 'Chú giải SEN - Chương 3', 
        en: 'SEN Notes - Chapter 3' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
  },
  // ------------------------------------------------------------
  // CHAPTER 4
  // ------------------------------------------------------------
  {
    chapterNumber: 4,
    titleVi: 'CHƯƠNG 4: SẢN PHẨM BƠ SỮA; TRỨNG CHIM VÀ TRỨNG GIA CẦM',
    titleEn: 'CHAPTER 4: DAIRY PRODUCE; BIRDS\' EGGS',
    content: [
      { 
        type: 'heading', 
        vi: 'Chú giải SEN - Chương 4', 
        en: 'SEN Notes - Chapter 4' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
  },
  // ------------------------------------------------------------
  // CHAPTER 5
  // ------------------------------------------------------------
  {
    chapterNumber: 5,
    titleVi: 'CHƯƠNG 5: CÁC SẢN PHẨM KHÁC CÓ NGUỒN GỐC TỪ ĐỘNG VẬT',
    titleEn: 'CHAPTER 5: PRODUCTS OF ANIMAL ORIGIN',
    content: [
      { 
        type: 'heading', 
        vi: 'Chú giải SEN - Chương 5', 
        en: 'SEN Notes - Chapter 5' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
  },
  // Continue with remaining chapters (6-97) with placeholder content
  ...Array.from({ length: 92 }, (_, i) => ({
    chapterNumber: i + 6,
    titleVi: `CHƯƠNG ${i + 6}`,
    titleEn: `CHAPTER ${i + 6}`,
    content: [
      { 
        type: 'heading' as const, 
        vi: `Chú giải SEN - Chương ${i + 6}`, 
        en: `SEN Notes - Chapter ${i + 6}` 
      },
      { 
        type: 'paragraph' as const, 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
  })),
];

/**
 * Get SEN detail for a specific chapter
 */
export const getSENChapterDetail = (chapterNumber: number): SENChapterDetail | undefined => {
  return senNoteDetailData.find(ch => ch.chapterNumber === chapterNumber);
};
