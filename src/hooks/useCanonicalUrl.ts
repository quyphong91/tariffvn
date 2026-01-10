import { useLocation } from "react-router-dom";

const BASE_URL = "https://tracuuhs.com";

export function useCanonicalUrl(): string {
  const location = useLocation();
  // For BrowserRouter, location.pathname gives us the clean path directly
  return `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;
}

export function getCanonicalUrl(path: string): string {
  return `${BASE_URL}${path === "/" ? "" : path}`;
}
