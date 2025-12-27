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
      {
        type: 'heading',
        vi: 'Chú giải',
        en: 'Notes'
      },
      {
        type: 'paragraph',
        vi: '1. Chương này bao gồm tất cả các loại động vật sống trừ:',
        en: '1. This Chapter covers all live animals except:'
      },
      {
        type: 'list',
        vi: '(a) Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác, thuộc nhóm 03.01, 03.06, 03.07 hoặc 03.08;',
        en: '(a) Fish and crustaceans, molluscs and other aquatic invertebrates, of heading 03.01, 03.06, 03.07 or 03.08;'
      },
      {
        type: 'list',
        vi: '(b) Các chủng vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; và',
        en: '(b) Cultures of micro-organisms and other products of heading 30.02; and'
      },
      {
        type: 'list',
        vi: '(c) Động vật thuộc nhóm 95.08.',
        en: '(c) Animals of heading 95.08.'
      },
      {
        type: 'heading',
        vi: 'Chú giải chi tiết',
        en: 'Explanatory Notes'
      },
      {
        type: 'paragraph',
        vi: 'Chương này bao gồm tất cả các loài động vật sống, dù còn non hay đã trưởng thành, thuần hóa hay hoang dã.',
        en: 'This Chapter covers all live animals, whether young or adult, domesticated or wild.'
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
        vi: 'Chú giải',
        en: 'Notes'
      },
      {
        type: 'paragraph',
        vi: '1. Chương này không bao gồm:',
        en: '1. This Chapter does not cover:'
      },
      {
        type: 'list',
        vi: '(a) Các sản phẩm thuộc loại được mô tả trong các nhóm 02.01 đến 02.08 hoặc 02.10, không thích hợp hoặc không phù hợp cho người sử dụng;',
        en: '(a) Products of the kinds described in headings 02.01 to 02.08 or 02.10, unfit or unsuitable for human consumption;'
      },
      {
        type: 'list',
        vi: '(b) Ruột, bong bóng hoặc dạ dày của động vật (nhóm 05.04) hoặc tiết động vật (nhóm 05.11 hoặc 30.02); và',
        en: '(b) Guts, bladders or stomachs of animals (heading 05.04) or animal blood (heading 05.11 or 30.02); and'
      },
      {
        type: 'list',
        vi: '(c) Mỡ động vật, trừ các sản phẩm của nhóm 02.09 (Chương 15).',
        en: '(c) Animal fat, other than products of heading 02.09 (Chapter 15).'
      }
    ]
  },

  // ------------------------------------------------------------
  // CHAPTERS 3-97 (Placeholders - Add content later)
  // ------------------------------------------------------------
  { chapterNumber: 3, titleVi: 'CHƯƠNG 3', titleEn: 'CHAPTER 3', content: [] },
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
