import type { ReactNode } from "react";

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
 * Includes both full phrases and their individual tokens.
 */
export function buildHighlightKeywords(inputs: Array<string | undefined>): string[] {
  const phrases = inputs
    .map(v => (v ?? "").trim())
    .filter(Boolean);

  const expanded = phrases.flatMap(p => [p, ...tokenizeForHighlight(p)]);

  const dedup = new Map<string, string>();
  for (const k of expanded) {
    const key = k.toLowerCase();
    if (!dedup.has(key)) dedup.set(key, k);
  }

  return Array.from(dedup.values());
}

export function highlightText(text: string, inputs: Array<string | undefined>): ReactNode {
  const keywords = buildHighlightKeywords(inputs);
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
