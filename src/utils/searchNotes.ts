// ============================================================
// SEARCH NOTES UTILITY - Search across EN and SEN notes
// ============================================================

import { chapterFullDetailData, NoteRow } from "@/data/AllchapterFullDetailData";
import { senNoteDetailData, SENNoteRow } from "@/data/senNoteDetailData";
import { SearchLanguage } from "@/data/hsData";

export interface NoteMatch {
  hsCode: string; // The HS Code or Heading (4 digits) the note belongs to
  source: 'sen' | 'en'; // 'sen' = Supplementary Notes, 'en' = Explanatory Notes
  snippet: string; // The extracted text showing the match
  chapterNumber: number;
}

/**
 * Extracts a substring (~150 chars) surrounding the keyword for context
 */
export function getSnippet(text: string, keyword: string, maxLength: number = 150): string {
  const lowerText = text.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  const index = lowerText.indexOf(lowerKeyword);
  
  if (index === -1) return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  
  // Calculate start and end positions to center the keyword
  const keywordLength = keyword.length;
  const contextLength = Math.floor((maxLength - keywordLength) / 2);
  
  let start = Math.max(0, index - contextLength);
  let end = Math.min(text.length, index + keywordLength + contextLength);
  
  // Adjust to not cut words
  if (start > 0) {
    const spaceIndex = text.indexOf(' ', start);
    if (spaceIndex !== -1 && spaceIndex < index) {
      start = spaceIndex + 1;
    }
  }
  
  if (end < text.length) {
    const spaceIndex = text.lastIndexOf(' ', end);
    if (spaceIndex !== -1 && spaceIndex > index + keywordLength) {
      end = spaceIndex;
    }
  }
  
  let snippet = text.substring(start, end);
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet = snippet + '...';
  
  return snippet;
}

/**
 * Extract HS codes from SEN heading text (e.g., "0102.29.11" or "0105.11.10 0105.12.10")
 */
function extractHSCodesFromHeading(headingText: string): string[] {
  const hsCodePattern = /\d{4}(?:\.\d{2}(?:\.\d{2})?)?/g;
  const matches = headingText.match(hsCodePattern);
  return matches || [];
}

/**
 * Get the 4-digit heading code from a full HS code
 */
function getHeadingCode(hsCode: string): string {
  return hsCode.replace(/\./g, '').substring(0, 4);
}

/**
 * Search through Explanatory Notes (EN)
 */
function searchENNotes(keyword: string, language: SearchLanguage): NoteMatch[] {
  const matches: NoteMatch[] = [];
  const lowerKeyword = keyword.toLowerCase();
  
  for (const chapter of chapterFullDetailData) {
    let currentHeading = chapter.chapterNumber.toString().padStart(2, '0');
    
    for (const row of chapter.content) {
      const text = language === 'en' && row.en ? row.en : row.vi;
      const lowerText = text.toLowerCase();
      
      // Check if this is a heading row that might contain HS codes
      if (row.type === 'heading') {
        // Try to extract HS code from heading (e.g., "01.01", "Nhóm 01.02")
        const hsMatch = text.match(/\d{2}\.\d{2}/);
        if (hsMatch) {
          currentHeading = hsMatch[0].replace('.', '');
        }
      }
      
      // Check if content matches keyword
      if (lowerText.includes(lowerKeyword)) {
        matches.push({
          hsCode: currentHeading,
          source: 'en',
          snippet: getSnippet(text, keyword),
          chapterNumber: chapter.chapterNumber
        });
      }
    }
  }
  
  return matches;
}

/**
 * Search through Supplementary Explanatory Notes (SEN)
 */
function searchSENNotes(keyword: string, language: SearchLanguage): NoteMatch[] {
  const matches: NoteMatch[] = [];
  const lowerKeyword = keyword.toLowerCase();
  
  for (const chapter of senNoteDetailData) {
    let currentHSCodes: string[] = [];
    
    for (let i = 0; i < chapter.content.length; i++) {
      const row = chapter.content[i];
      const text = language === 'en' && row.en ? row.en : row.vi;
      const lowerText = text.toLowerCase();
      
      // If this is a heading, it likely contains HS codes
      if (row.type === 'heading') {
        currentHSCodes = extractHSCodesFromHeading(text);
      }
      
      // Check if content matches keyword
      if (lowerText.includes(lowerKeyword) && row.type !== 'heading') {
        // Create a match for each associated HS code
        const headingCodes = [...new Set(currentHSCodes.map(getHeadingCode))];
        
        if (headingCodes.length > 0) {
          for (const headingCode of headingCodes) {
            matches.push({
              hsCode: headingCode,
              source: 'sen',
              snippet: getSnippet(text, keyword),
              chapterNumber: chapter.chapterNumber
            });
          }
        } else {
          // Fallback to chapter number as heading
          matches.push({
            hsCode: chapter.chapterNumber.toString().padStart(2, '0'),
            source: 'sen',
            snippet: getSnippet(text, keyword),
            chapterNumber: chapter.chapterNumber
          });
        }
      }
    }
  }
  
  return matches;
}

/**
 * Main search function that searches both EN and SEN notes
 */
export function searchNotes(keyword: string, language: SearchLanguage): NoteMatch[] {
  if (!keyword || keyword.trim().length === 0) {
    return [];
  }
  
  const enMatches = searchENNotes(keyword.trim(), language);
  const senMatches = searchSENNotes(keyword.trim(), language);
  
  // Combine and deduplicate matches (keep unique by hsCode + source + snippet combination)
  const allMatches = [...senMatches, ...enMatches];
  
  // Limit snippets per HS code to avoid overwhelming results
  const matchesByCode: Record<string, NoteMatch[]> = {};
  
  for (const match of allMatches) {
    const key = `${match.hsCode}-${match.source}`;
    if (!matchesByCode[key]) {
      matchesByCode[key] = [];
    }
    // Keep max 2 snippets per HS code per source
    if (matchesByCode[key].length < 2) {
      matchesByCode[key].push(match);
    }
  }
  
  return Object.values(matchesByCode).flat();
}

/**
 * Search notes with material and function filters
 */
export function searchNotesAdvanced(
  keyword: string,
  language: SearchLanguage,
  material?: string,
  functionFeature?: string
): NoteMatch[] {
  const mainMatches = searchNotes(keyword, language);
  
  // If we have additional filters, search for those too
  let materialMatches: NoteMatch[] = [];
  let functionMatches: NoteMatch[] = [];
  
  if (material && material.trim().length > 0) {
    materialMatches = searchNotes(material.trim(), language);
  }
  
  if (functionFeature && functionFeature.trim().length > 0) {
    functionMatches = searchNotes(functionFeature.trim(), language);
  }
  
  // Combine all matches
  const allMatches = [...mainMatches, ...materialMatches, ...functionMatches];
  
  // Deduplicate by creating a unique key
  const uniqueMatches = new Map<string, NoteMatch>();
  for (const match of allMatches) {
    const key = `${match.hsCode}-${match.source}-${match.snippet.substring(0, 50)}`;
    if (!uniqueMatches.has(key)) {
      uniqueMatches.set(key, match);
    }
  }
  
  return Array.from(uniqueMatches.values());
}
