import * as XLSX from 'xlsx';

export interface HSItem {
  level: number;
  hsCode: string;
  description: string;
  standard?: string;
  mfn?: string;
  vat?: string;
  note?: string;
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

          if (hsCode && description) {
            items.push({
              level: isNaN(level) ? 0 : level,
              hsCode,
              description,
              standard: row[3] ? String(row[3]) : undefined,
              mfn: row[4] ? String(row[4]) : undefined,
              vat: row[5] ? String(row[5]) : undefined,
              note: row[29] ? String(row[29]) : undefined,
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

// Filter function for search
export function searchHSData(
  hsData: HSItem[],
  keyword: string
): {
  headings: HSItem[];
  detailed: { item: HSItem; parents: HSItem[] }[];
} {
  const lowerKeyword = keyword.toLowerCase().trim();
  if (!lowerKeyword) {
    return { headings: [], detailed: [] };
  }

  const matchingItems = hsData.filter(
    item =>
      item.hsCode.toLowerCase().includes(lowerKeyword) ||
      item.description.toLowerCase().includes(lowerKeyword)
  );

  // Get unique headings for matching items
  const headingsSet = new Set<HSItem>();
  matchingItems.forEach(item => {
    const heading = getHeadingForItem(item, hsData);
    if (heading) {
      headingsSet.add(heading);
    }
  });

  // Get detailed results with parent chains
  const detailed = matchingItems.map(item => ({
    item,
    parents: getParentChain(item, hsData),
  }));

  return {
    headings: Array.from(headingsSet),
    detailed,
  };
}
