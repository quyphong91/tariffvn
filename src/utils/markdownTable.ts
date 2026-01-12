export function parseFirstMarkdownTable(markdown: string): string[][] {
  const lines = markdown.split(/\r?\n/);

  const tableLines: string[] = [];
  let inTable = false;

  for (const line of lines) {
    const trimmed = line.trim();
    const isTableLine = trimmed.startsWith('|') && trimmed.endsWith('|');

    if (!inTable) {
      if (isTableLine) {
        inTable = true;
        tableLines.push(trimmed);
      }
      continue;
    }

    if (isTableLine) {
      tableLines.push(trimmed);
    } else if (tableLines.length > 0) {
      break;
    }
  }

  const rows: string[][] = [];

  for (const line of tableLines) {
    const cells = line
      .slice(1, -1)
      .split('|')
      .map((c) => c.trim());

    // Skip separator rows like: |-|-|-|
    const isSeparatorRow = cells.every((c) => /^-+$/.test(c) || c === '');
    if (isSeparatorRow) continue;

    rows.push(cells);
  }

  return rows;
}
