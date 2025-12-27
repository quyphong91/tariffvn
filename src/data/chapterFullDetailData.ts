export interface NoteRow {
  type: 'heading' | 'paragraph' | 'list-item';
  vi: string;
  en: string;
}

export interface ChapterDetail {
  chapter: number;
  content: NoteRow[];
}

export const chapterFullDetailData: ChapterDetail[] = [
  {
    chapter: 1,
    content: [
      {
        type: 'heading',
        vi: 'CHƯƠNG 1: ĐỘNG VẬT SỐNG',
        en: 'CHAPTER 1: LIVE ANIMALS'
      },
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
        type: 'list-item',
        vi: '(a) Cá và động vật giáp xác, động vật thân mềm và động vật thuỷ sinh không xương sống khác, thuộc nhóm 03.01, 03.06, 03.07 hoặc 03.08;',
        en: '(a) Fish and crustaceans, molluscs and other aquatic invertebrates, of heading 03.01, 03.06, 03.07 or 03.08;'
      },
      {
        type: 'list-item',
        vi: '(b) Các chủng vi sinh vật nuôi cấy và các sản phẩm khác thuộc nhóm 30.02; và',
        en: '(b) Cultures of micro-organisms and other products of heading 30.02; and'
      },
      {
        type: 'list-item',
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
        vi: 'Chương này bao gồm tất cả các loài động vật sống, dù còn non hay đã trưởng thành, thuần hóa hay hoang dã (kể cả cá và động vật giáp xác, động vật thân mềm và các động vật thuỷ sinh không xương sống khác đã sống và được dành để nuôi thả vào hồ, ao, sông, ngòi...).',
        en: 'This Chapter covers all live animals, whether young or adult, domesticated or wild (including fish and crustaceans, molluscs and other aquatic invertebrates which are alive and intended for stocking in ponds, rivers, streams, etc.).'
      },
      {
        type: 'paragraph',
        vi: 'Động vật sống thường được phân loại theo loài hoặc phân theo mục đích sử dụng (ví dụ: ngựa thuần chủng để giống, trâu bò để giết thịt...).',
        en: 'Live animals are generally classified according to species or according to their use (e.g., pure-bred breeding horses, cattle for slaughter, etc.).'
      },
      {
        type: 'heading',
        vi: 'Nhóm 01.01',
        en: 'Heading 01.01'
      },
      {
        type: 'paragraph',
        vi: 'Nhóm này bao gồm ngựa, lừa, la và các động vật lai của ngựa và lừa, dù đã thuần hóa hay hoang dã.',
        en: 'This heading covers horses, asses, mules and hinnies, whether domesticated or wild.'
      },
      {
        type: 'paragraph',
        vi: 'Ngựa thuần chủng để giống phải đáp ứng các tiêu chuẩn do cơ quan có thẩm quyền quy định.',
        en: 'Pure-bred breeding horses must meet the standards established by the competent authorities.'
      }
    ]
  }
];

export const getChapterFullDetail = (chapterNumber: number): ChapterDetail | undefined => {
  return chapterFullDetailData.find(c => c.chapter === chapterNumber);
};
