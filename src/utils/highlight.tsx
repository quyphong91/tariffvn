import type { ReactNode } from "react";

export type HighlightMatchType = 'tokens' | 'exact';

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenizeForHighlight(text: string): string[] {
  return text
    .trim()
    .split(/\s+/)
    .map(t => t.trim())
    .filter(Boolean);
}

/**
 * Expands user inputs into a deduplicated list of highlightable keywords.
 * In 'exact' mode, only full phrases are used (no tokenization).
 * In 'tokens' mode (default), includes both full phrases and their individual tokens.
 */
export function buildHighlightKeywords(inputs: Array<string | undefined>, matchType: HighlightMatchType = 'tokens'): string[] {
  const phrases = inputs
    .map(v => (v ?? "").trim())
    .filter(Boolean);

  // In exact match mode, only use full phrases without tokenization
  if (matchType === 'exact') {
    const dedup = new Map<string, string>();
    for (const phrase of phrases) {
      const key = phrase.toLowerCase();
      if (!dedup.has(key)) dedup.set(key, phrase);
    }
    return Array.from(dedup.values());
  }

  // Token mode: include both full phrases and individual tokens
  const expanded = phrases.flatMap(p => [p, ...tokenizeForHighlight(p)]);

  const dedup = new Map<string, string>();
  for (const k of expanded) {
    const key = k.toLowerCase();
    if (!dedup.has(key)) dedup.set(key, k);
  }

  return Array.from(dedup.values());
}

export function highlightText(text: string, inputs: Array<string | undefined>, matchType: HighlightMatchType = 'tokens'): ReactNode {
  const keywords = buildHighlightKeywords(inputs, matchType);
  if (!text || keywords.length === 0) return text;

  const escaped = keywords.map(escapeRegex);
  const splitter = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(splitter);

  return parts.map((part, i) => {
    const isMatch = new RegExp(`^(${escaped.join("|")})$`, "i").test(part);
    return isMatch ? (
      <mark key={i} className="bg-amber/50 text-foreground px-0.5 rounded font-medium">
        {part}
      </mark>
    ) : (
      part
    );
  });
}
