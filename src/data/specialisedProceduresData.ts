import { parseFirstMarkdownTable } from '@/utils/markdownTable';

export interface SpecialisedProcedureItem {
  hsCode: string;
  specialisedProcedures: string;
}

let cachedData: Map<string, string> | null = null;
let loadingPromise: Promise<Map<string, string>> | null = null;

function s(v: string | undefined): string {
  return (v ?? '').trim();
}

export async function loadSpecialisedProceduresData(): Promise<Map<string, string>> {
  if (cachedData) {
    return cachedData;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const response = await fetch('/data/Specialised_procedures.extracted.md');
      const markdown = await response.text();
      const rows = parseFirstMarkdownTable(markdown);

      const map = new Map<string, string>();
      // rows[0] is header: Level, HSCode, Description_VN, Description_EN, Specialised procedures
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (!row || row.length < 5) continue;

        const hsCode = s(row[1]);
        const specialisedProcedures = s(row[4]);

        if (hsCode && specialisedProcedures) {
          map.set(hsCode, specialisedProcedures);
        }
      }

      cachedData = map;
      return map;
    } catch (error) {
      console.error('Failed to load specialised procedures data:', error);
      throw error;
    }
  })();

  return loadingPromise;
}
