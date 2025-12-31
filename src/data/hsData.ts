import * as XLSX from 'xlsx';
import { searchNotesAdvanced, NoteMatch } from '@/utils/searchNotes';

export type SearchLanguage = 'vi' | 'en';
export type SearchMatchType = 'contains' | 'exact' | 'phrase';

export interface HSItem {
  level: number;
  hsCode: string;
  description: string;
  descriptionEN?: string;
  standard?: string;
  mfn?: string;
  vat?: string;
  note?: string;
}

export interface SearchResultItem {
  item: HSItem;
  parents: HSItem[];
  score: number;
  noteMatches?: NoteMatch[];
}

export interface AdvancedSearchParams {
  keyword: string;
  material?: string;
  functionFeature?: string;
  language?: SearchLanguage;
  matchType?: SearchMatchType;
}

let cachedData: HSItem[] | null = null;
let loadingPromise: Promise<HSItem[]> | null = null;

export async function loadHSData(): Promise<HSItem[]> {
  if (cachedData) {
    return cachedData;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const response = await fetch('/data/HS_PBI_VN.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as unknown[][];

      // Skip header row
      const items: HSItem[] = [];
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (row && row.length >= 3) {
          const level = typeof row[0] === 'number' ? row[0] : parseInt(String(row[0] || '0'), 10);
          const hsCode = String(row[1] || '').trim();
          const description = String(row[2] || '').trim();
          const descriptionEN = row[3] ? String(row[3]).trim() : undefined;

          if (description) {
            items.push({
              level: isNaN(level) ? 0 : level,
              hsCode,
              description,
              descriptionEN,
              standard: row[4] ? String(row[4]) : undefined,
              mfn: row[5] ? String(row[5]) : undefined,
              vat: row[6] ? String(row[6]) : undefined,
              note: row[30] ? String(row[30]) : undefined,
            });
          }
        }
      }

      cachedData = items;
      return items;
    } catch (error) {
      console.error('Failed to load HS data:', error);
      throw error;
    }
  })();

  return loadingPromise;
}

// Helper function to get heading (Level 0) for any item
export function getHeadingForItem(item: HSItem, allItems: HSItem[]): HSItem | null {
  const itemIndex = allItems.indexOf(item);
  if (itemIndex === -1) return null;

  // Search backwards for the nearest Level 0 item
  for (let i = itemIndex; i >= 0; i--) {
    if (allItems[i].level === 0) {
      return allItems[i];
    }
  }
  return null;
}

// Helper function to get parent chain for an item
export function getParentChain(item: HSItem, allItems: HSItem[]): HSItem[] {
  const result: HSItem[] = [];
  const itemIndex = allItems.indexOf(item);
  if (itemIndex === -1) return result;

  let currentLevel = item.level;

  // Search backwards for parent items
  for (let i = itemIndex - 1; i >= 0; i--) {
    if (allItems[i].level < currentLevel) {
      result.unshift(allItems[i]);
      currentLevel = allItems[i].level;
    }
    if (allItems[i].level === 0) break;
  }

  return result;
}

// Helper to get description based on language
export function getDescription(item: HSItem, language: SearchLanguage): string {
  if (language === 'en' && item.descriptionEN) {
    return item.descriptionEN;
  }
  return item.description;
}

// Filter function for search (legacy - still used for basic search)
export function searchHSData(
  hsData: HSItem[],
  keyword: string,
  language: SearchLanguage = 'vi',
  matchType: SearchMatchType = 'contains'
): {
  headings: HSItem[];
  detailed: SearchResultItem[];
} {
  const trimmedKeyword = keyword.trim();
  if (!trimmedKeyword) {
    return { headings: [], detailed: [] };
  }

  const lowerKeyword = trimmedKeyword.toLowerCase();

  const matchingItems = hsData.filter(item => {
    const desc = language === 'en' && item.descriptionEN 
      ? item.descriptionEN.toLowerCase() 
      : item.description.toLowerCase();
    const hsCode = item.hsCode.toLowerCase();

    switch (matchType) {
      case 'exact':
        // Exact match: keyword matches a complete word
        const wordPattern = new RegExp(`\\b${escapeRegex(lowerKeyword)}\\b`, 'i');
        return wordPattern.test(hsCode) || wordPattern.test(desc);
      
      case 'phrase':
        // Phrase match: all words in keyword must appear in order
        return hsCode.includes(lowerKeyword) || desc.includes(lowerKeyword);
      
      case 'contains':
      default:
        // Contains: keyword appears anywhere (default behavior)
        return hsCode.includes(lowerKeyword) || desc.includes(lowerKeyword);
    }
  });

  // Get unique headings for matching items
  const headingsSet = new Set<HSItem>();
  matchingItems.forEach(item => {
    const heading = getHeadingForItem(item, hsData);
    if (heading) {
      headingsSet.add(heading);
    }
  });

  // Get detailed results with parent chains and basic scoring
  const detailed: SearchResultItem[] = matchingItems.map(item => ({
    item,
    parents: getParentChain(item, hsData),
    score: calculateBasicScore(item, lowerKeyword, language),
  }));

  // Sort by score descending
  detailed.sort((a, b) => b.score - a.score);

  return {
    headings: Array.from(headingsSet),
    detailed,
  };
}

// Calculate basic score for tariff matches
function calculateBasicScore(item: HSItem, lowerKeyword: string, language: SearchLanguage): number {
  let score = 0;
  const hsCode = item.hsCode.toLowerCase();
  const desc = language === 'en' && item.descriptionEN 
    ? item.descriptionEN.toLowerCase() 
    : item.description.toLowerCase();

  // HS Code Match: +100 points if starts with keyword
  if (hsCode.startsWith(lowerKeyword)) {
    score += 100;
  } else if (hsCode.includes(lowerKeyword)) {
    score += 80;
  }

  // Tariff Name Match: +50 points
  if (desc.includes(lowerKeyword)) {
    score += 50;
  }

  // Level 0 (headings) get bonus
  if (item.level === 0) {
    score += 10;
  }

  return score;
}

// Advanced search with weighted scoring system
export function advancedSearchHSData(
  hsData: HSItem[],
  params: AdvancedSearchParams
): {
  headings: HSItem[];
  detailed: SearchResultItem[];
} {
  const { 
    keyword, 
    material, 
    functionFeature, 
    language = 'vi', 
    matchType = 'contains' 
  } = params;

  const trimmedKeyword = keyword.trim();
  if (!trimmedKeyword) {
    return { headings: [], detailed: [] };
  }

  const lowerKeyword = trimmedKeyword.toLowerCase();
  const lowerMaterial = material?.trim().toLowerCase() || '';
  const lowerFunction = functionFeature?.trim().toLowerCase() || '';

  // Step 1: Search the Tariff
  const tariffMatches = new Map<string, SearchResultItem>();
  
  for (const item of hsData) {
    const desc = language === 'en' && item.descriptionEN 
      ? item.descriptionEN.toLowerCase() 
      : item.description.toLowerCase();
    const hsCode = item.hsCode.toLowerCase();

    let matches = false;
    let score = 0;

    // Check main keyword
    switch (matchType) {
      case 'exact':
        const wordPattern = new RegExp(`\\b${escapeRegex(lowerKeyword)}\\b`, 'i');
        if (wordPattern.test(hsCode)) {
          matches = true;
          score += 100;
        } else if (wordPattern.test(desc)) {
          matches = true;
          score += 50;
        }
        break;
      
      case 'phrase':
      case 'contains':
      default:
        if (hsCode.startsWith(lowerKeyword)) {
          matches = true;
          score += 100;
        } else if (hsCode.includes(lowerKeyword)) {
          matches = true;
          score += 80;
        } else if (desc.includes(lowerKeyword)) {
          matches = true;
          score += 50;
        }
    }

    // Check material filter (+30 points)
    if (lowerMaterial && desc.includes(lowerMaterial)) {
      score += 30;
      matches = true;
    }

    // Check function filter (+30 points)
    if (lowerFunction && desc.includes(lowerFunction)) {
      score += 30;
      matches = true;
    }

    // Level 0 (headings) get bonus
    if (item.level === 0) {
      score += 5;
    }

    if (matches) {
      tariffMatches.set(item.hsCode, {
        item,
        parents: getParentChain(item, hsData),
        score,
      });
    }
  }

  // Step 2: Search Notes (EN and SEN)
  const noteMatches = searchNotesAdvanced(trimmedKeyword, language, material, functionFeature);

  // Step 3: Group note matches by heading code
  const noteMatchesByHeading = new Map<string, NoteMatch[]>();
  for (const match of noteMatches) {
    const headingCode = match.hsCode.substring(0, 4);
    if (!noteMatchesByHeading.has(headingCode)) {
      noteMatchesByHeading.set(headingCode, []);
    }
    noteMatchesByHeading.get(headingCode)!.push(match);
  }

  // Step 4: Merge note matches with tariff results
  for (const [headingCode, matches] of noteMatchesByHeading) {
    // Find existing tariff items for this heading
    let foundInTariff = false;
    
    for (const [hsCode, result] of tariffMatches) {
      if (hsCode.startsWith(headingCode)) {
        // Update existing result with note matches
        result.noteMatches = result.noteMatches || [];
        result.noteMatches.push(...matches);
        
        // Add score for note matches
        for (const match of matches) {
          if (match.source === 'sen') {
            result.score += 40; // SEN Note Match
          } else {
            result.score += 20; // EN Note Match
          }
        }
        foundInTariff = true;
      }
    }

    // If not found in tariff, try to add from notes
    if (!foundInTariff) {
      // Find the heading item in hsData
      const headingItem = hsData.find(item => 
        item.level === 0 && item.hsCode.replace(/\./g, '').startsWith(headingCode)
      );
      
      if (headingItem) {
        let score = 0;
        for (const match of matches) {
          score += match.source === 'sen' ? 40 : 20;
        }
        
        tariffMatches.set(headingItem.hsCode, {
          item: headingItem,
          parents: [],
          score,
          noteMatches: matches,
        });
      }
    }
  }

  // Step 5: Get unique headings
  const headingsSet = new Set<HSItem>();
  for (const result of tariffMatches.values()) {
    const heading = getHeadingForItem(result.item, hsData);
    if (heading) {
      headingsSet.add(heading);
    }
  }

  // Step 6: Sort by score descending
  const detailed = Array.from(tariffMatches.values()).sort((a, b) => b.score - a.score);

  // Deduplicate note matches per result
  for (const result of detailed) {
    if (result.noteMatches && result.noteMatches.length > 0) {
      const uniqueMatches = new Map<string, NoteMatch>();
      for (const match of result.noteMatches) {
        const key = `${match.source}-${match.snippet.substring(0, 30)}`;
        if (!uniqueMatches.has(key)) {
          uniqueMatches.set(key, match);
        }
      }
      result.noteMatches = Array.from(uniqueMatches.values()).slice(0, 4); // Max 4 evidence chips
    }
  }

  return {
    headings: Array.from(headingsSet),
    detailed,
  };
}

// Helper to escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
