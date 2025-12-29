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
    titleVi: 'CHƯƠNG 1: ĐỘNG VẬT SỐNG',
    titleEn: 'CHAPTER 1: LIVE ANIMALS',
    content: [
      // Placeholder content - to be filled later
      { 
        type: 'heading', 
        vi: 'Chú giải SEN - Chương 1', 
        en: 'SEN Notes - Chapter 1' 
      },
      { 
        type: 'paragraph', 
        vi: 'Nội dung đang được cập nhật...', 
        en: 'Content is being updated...' 
      },
    ],
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
