import { useState, useEffect, useMemo } from 'react';
import { loadHSData, HSItem } from '@/data/hsData';

export interface HSHeading {
  code: string;
  chapter: number;
  titleVi: string;
  titleEn: string;
}

export interface ChapterHeadings {
  chapter: number;
  headings: HSHeading[];
}

/**
 * Formats an HS code to the standard XX.XX format for headings (4-digit codes)
 */
function formatHSCode(code: string): string {
  // Remove all non-digit characters
  const digits = code.replace(/\D/g, '');
  
  // For 4-digit codes (headings), format as XX.XX
  if (digits.length >= 4) {
    return `${digits.slice(0, 2)}.${digits.slice(2, 4)}`;
  }
  
  return code;
}

/**
 * Extracts chapter number from HS code
 */
function getChapterFromCode(code: string): number {
  const digits = code.replace(/\D/g, '');
  if (digits.length >= 2) {
    return parseInt(digits.slice(0, 2), 10);
  }
  return 0;
}

/**
 * Hook to load all Level 0 headings (4-digit HS codes) from the HS data source
 * These are grouped by chapter for use in the ChapterNotes landing page
 */
export function useHSHeadings() {
  const [hsData, setHsData] = useState<HSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    loadHSData()
      .then((data) => {
        if (mounted) {
          setHsData(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
          setIsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Extract all Level 0 items (headings) and convert to HSHeading format
  const allHeadings = useMemo<HSHeading[]>(() => {
    return hsData
      .filter((item) => item.level === 0 && item.hsCode)
      .map((item) => ({
        code: formatHSCode(item.hsCode),
        chapter: getChapterFromCode(item.hsCode),
        titleVi: item.description,
        titleEn: item.descriptionEN || item.description,
      }));
  }, [hsData]);

  // Group headings by chapter
  const headingsByChapter = useMemo<Map<number, HSHeading[]>>(() => {
    const map = new Map<number, HSHeading[]>();
    
    for (const heading of allHeadings) {
      const chapter = heading.chapter;
      if (chapter > 0) {
        if (!map.has(chapter)) {
          map.set(chapter, []);
        }
        map.get(chapter)!.push(heading);
      }
    }
    
    return map;
  }, [allHeadings]);

  // Get headings for a specific chapter
  const getHeadingsForChapter = (chapter: number): HSHeading[] => {
    return headingsByChapter.get(chapter) || [];
  };

  return {
    allHeadings,
    headingsByChapter,
    getHeadingsForChapter,
    isLoading,
    error,
  };
}
