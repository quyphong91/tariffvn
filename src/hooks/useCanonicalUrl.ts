import { useLocation } from "react-router-dom";

const BASE_URL = "https://tracuuhs.com";

export function useCanonicalUrl(): string {
  const location = useLocation();
  // For HashRouter, we use the hash path (without the #) as the canonical path
  // The location.pathname gives us the path after the hash
  return `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;
}

export function getCanonicalUrl(path: string): string {
  return `${BASE_URL}${path === "/" ? "" : path}`;
}
