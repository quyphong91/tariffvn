import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Workaround for occasional truncated optimized-deps chunks in some preview/CDN setups.
  // Excluding supabase-js forces Vite to serve it unoptimized (no /node_modules/.vite/deps/@supabase_*.js).
  optimizeDeps: {
    exclude: ["@supabase/supabase-js"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
