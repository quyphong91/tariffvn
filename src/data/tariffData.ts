import { parseFirstMarkdownTable } from '@/utils/markdownTable';

export interface TariffItem {
  level: number;
  hsCode: string;
  descriptionVN: string;
  descriptionEN: string;
  standard: string;
  mfn: string;
  acfta: string;
  atiga: string;
  ajcep: string;
  vjepa: string;
  akfta: string;
  aanzfta: string;
  aifta: string;
  vkfta: string;
  vcfta: string;
  vnEaeu: string;
  cptpp: string;
  ahkfta: string;
  evfta: string;
  ukvfta: string;
  vifta: string;
  rcepAF: string;
}

export interface TaxColumn {
  key: keyof TariffItem;
  label: string;
  shortLabel: string;
}

export const TAX_COLUMNS: TaxColumn[] = [
  { key: 'standard', label: 'Thuế NK thường (Standard)', shortLabel: 'NK thường' },
  { key: 'mfn', label: 'Thuế MFN', shortLabel: 'MFN' },
  { key: 'acfta', label: 'ACFTA (Trung Quốc)', shortLabel: 'ACFTA' },
  { key: 'atiga', label: 'ATIGA (ASEAN)', shortLabel: 'ATIGA' },
  { key: 'ajcep', label: 'AJCEP (Nhật Bản-ASEAN)', shortLabel: 'AJCEP' },
  { key: 'vjepa', label: 'VJEPA (Nhật Bản)', shortLabel: 'VJEPA' },
  { key: 'akfta', label: 'AKFTA (Hàn Quốc-ASEAN)', shortLabel: 'AKFTA' },
  { key: 'aanzfta', label: 'AANZFTA (Úc-New Zealand)', shortLabel: 'AANZFTA' },
  { key: 'aifta', label: 'AIFTA (Ấn Độ)', shortLabel: 'AIFTA' },
  { key: 'vkfta', label: 'VKFTA (Hàn Quốc)', shortLabel: 'VKFTA' },
  { key: 'vcfta', label: 'VCFTA (Chi-lê)', shortLabel: 'VCFTA' },
  { key: 'vnEaeu', label: 'VN-EAEU (Liên minh kinh tế Á-Âu)', shortLabel: 'VN-EAEU' },
  { key: 'cptpp', label: 'CPTPP', shortLabel: 'CPTPP' },
  { key: 'ahkfta', label: 'AHKFTA (Hong Kong)', shortLabel: 'AHKFTA' },
  { key: 'evfta', label: 'EVFTA (EU)', shortLabel: 'EVFTA' },
  { key: 'ukvfta', label: 'UKVFTA (Anh)', shortLabel: 'UKVFTA' },
  { key: 'vifta', label: 'VIFTA (Israel)', shortLabel: 'VIFTA' },
  { key: 'rcepAF', label: 'RCEP (A-F)', shortLabel: 'RCEP' },
];

export interface MarketFilter {
  id: string;
  label: string;
  columns: (keyof TariffItem)[];
}

export const MARKET_FILTERS: MarketFilter[] = [
  { id: 'default', label: 'Mặc định', columns: ['mfn'] },
  { id: 'europe', label: 'Châu Âu', columns: ['mfn', 'evfta', 'ukvfta'] },
  { id: 'asean', label: 'ASEAN', columns: ['mfn', 'atiga', 'rcepAF'] },
  { id: 'china', label: 'Trung Quốc', columns: ['mfn', 'acfta', 'rcepAF'] },
  { id: 'japan', label: 'Nhật Bản', columns: ['mfn', 'ajcep', 'vjepa', 'cptpp', 'rcepAF'] },
  { id: 'korea', label: 'Hàn Quốc', columns: ['mfn', 'akfta', 'vkfta', 'rcepAF'] },
  { id: 'oceania', label: 'Úc/New Zealand', columns: ['mfn', 'aanzfta', 'cptpp', 'rcepAF'] },
  { id: 'india', label: 'Ấn Độ', columns: ['mfn', 'aifta', 'rcepAF'] },
  { id: 'americas', label: 'Châu Mỹ', columns: ['mfn', 'vcfta', 'cptpp'] },
];

let cachedTariffData: TariffItem[] | null = null;
let loadingPromise: Promise<TariffItem[]> | null = null;

function s(v: string | undefined): string {
  return (v ?? '').trim();
}

function parseLevel(value: string | undefined): number {
  const n = value ? parseInt(value, 10) : 0;
  return Number.isFinite(n) && !Number.isNaN(n) ? n : 0;
}

export async function loadTariffData(): Promise<TariffItem[]> {
  if (cachedTariffData) {
    return cachedTariffData;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      // Security hardening: avoid parsing XLSX in-browser via vulnerable dependency.
      // We instead load a pre-extracted markdown table from /public.
      const response = await fetch('/data/Tariff.extracted.md');
      const markdown = await response.text();
      const rows = parseFirstMarkdownTable(markdown);

      const items: TariffItem[] = [];
      // rows[0] is header
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 4) continue;

        const level = parseLevel(row[0]);
        const hsCode = s(row[1]);
        const descriptionVN = s(row[2]);
        const descriptionEN = s(row[3]);

        if (descriptionVN || descriptionEN) {
          items.push({
            level,
            hsCode,
            descriptionVN,
            descriptionEN,
            standard: s(row[4]),
            mfn: s(row[5]),
            acfta: s(row[6]),
            atiga: s(row[7]),
            ajcep: s(row[8]),
            vjepa: s(row[9]),
            akfta: s(row[10]),
            aanzfta: s(row[11]),
            aifta: s(row[12]),
            vkfta: s(row[13]),
            vcfta: s(row[14]),
            vnEaeu: s(row[15]),
            cptpp: s(row[16]),
            ahkfta: s(row[17]),
            evfta: s(row[18]),
            ukvfta: s(row[19]),
            vifta: s(row[20]),
            rcepAF: s(row[21]),
          });
        }
      }

      cachedTariffData = items;
      return items;
    } catch (error) {
      console.error('Failed to load tariff data:', error);
      throw error;
    }
  })();

  return loadingPromise;
}

export function searchTariffData(
  data: TariffItem[],
  keyword: string
): TariffItem[] {
  const trimmed = keyword.trim().toLowerCase();
  if (!trimmed) return [];

  // Exact match logic - HS code must start with the search term, or description must contain exact phrase
  const matchedItems = data.filter(item => {
    // For HS code: exact match (starts with the search term)
    const hsCodeClean = item.hsCode.replace(/\./g, '').toLowerCase();
    const searchClean = trimmed.replace(/\./g, '');
    const hsMatch = hsCodeClean.startsWith(searchClean) || item.hsCode.toLowerCase().startsWith(trimmed);
    
    // For description: exact phrase match (not token-based)
    const vnMatch = item.descriptionVN.toLowerCase().includes(trimmed);
    const enMatch = item.descriptionEN.toLowerCase().includes(trimmed);
    
    return hsMatch || vnMatch || enMatch;
  });

  // For each matched item, find and include parent rows
  const resultsWithParents: TariffItem[] = [];
  const addedIndices = new Set<number>();

  matchedItems.forEach(matchedItem => {
    const matchedIndex = data.indexOf(matchedItem);
    
    // Find parent rows by looking backwards for items with lower levels
    const parents: TariffItem[] = [];
    let currentLevel = matchedItem.level;
    
    for (let i = matchedIndex - 1; i >= 0 && currentLevel > 0; i--) {
      const item = data[i];
      if (item.level < currentLevel) {
        parents.unshift(item);
        currentLevel = item.level;
      }
    }

    // Add parents first (if not already added)
    parents.forEach(parent => {
      const parentIndex = data.indexOf(parent);
      if (!addedIndices.has(parentIndex)) {
        addedIndices.add(parentIndex);
        resultsWithParents.push(parent);
      }
    });

    // Add the matched item (if not already added)
    if (!addedIndices.has(matchedIndex)) {
      addedIndices.add(matchedIndex);
      resultsWithParents.push(matchedItem);
    }
  });

  return resultsWithParents;
}
