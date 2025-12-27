import * as XLSX from 'xlsx';

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
  { id: 'default', label: 'Mặc định', columns: ['mfn', 'standard'] },
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

export async function loadTariffData(): Promise<TariffItem[]> {
  if (cachedTariffData) {
    return cachedTariffData;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const response = await fetch('/data/Tariff.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as unknown[][];

      const items: TariffItem[] = [];
      // Skip header row
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (row && row.length >= 3) {
          const level = typeof row[0] === 'number' ? row[0] : parseInt(String(row[0] || '0'), 10);
          const hsCode = String(row[1] || '').trim();
          const descriptionVN = String(row[2] || '').trim();
          const descriptionEN = String(row[3] || '').trim();

          if (descriptionVN || descriptionEN) {
            items.push({
              level: isNaN(level) ? 0 : level,
              hsCode,
              descriptionVN,
              descriptionEN,
              standard: String(row[4] || ''),
              mfn: String(row[5] || ''),
              acfta: String(row[6] || ''),
              atiga: String(row[7] || ''),
              ajcep: String(row[8] || ''),
              vjepa: String(row[9] || ''),
              akfta: String(row[10] || ''),
              aanzfta: String(row[11] || ''),
              aifta: String(row[12] || ''),
              vkfta: String(row[13] || ''),
              vcfta: String(row[14] || ''),
              vnEaeu: String(row[15] || ''),
              cptpp: String(row[16] || ''),
              ahkfta: String(row[17] || ''),
              evfta: String(row[18] || ''),
              ukvfta: String(row[19] || ''),
              vifta: String(row[20] || ''),
              rcepAF: String(row[21] || ''),
            });
          }
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

  return data.filter(item => {
    const hsMatch = item.hsCode.toLowerCase().includes(trimmed);
    const vnMatch = item.descriptionVN.toLowerCase().includes(trimmed);
    const enMatch = item.descriptionEN.toLowerCase().includes(trimmed);
    return hsMatch || vnMatch || enMatch;
  });
}
