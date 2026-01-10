import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GRIRules from "./pages/GRIRules";
import ChapterNotes from "./pages/ChapterNotes";
import ChapterNoteFull from "./pages/ChapterNoteFull";
import ChapterNoteFullAll from "./pages/ChapterNoteFullAll";
import SENNotes from "./pages/SENNotes";
import SENNoteFull from "./pages/SENNoteFull";
import WCOCompendium from "./pages/WCOCompendium";
import TariffLookup from "./pages/TariffLookup";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/gri-rules" element={<GRIRules />} />
            <Route path="/chapter-notes" element={<ChapterNotes />} />
            <Route path="/chapter-notes/full/:chapterNumber" element={<ChapterNoteFull />} />
            <Route path="/chapter-notes/full-all" element={<ChapterNoteFullAll />} />
            <Route path="/sen-notes" element={<SENNotes />} />
            <Route path="/sen-notes/full/:chapterNumber" element={<SENNoteFull />} />
            <Route path="/wco-compendium" element={<WCOCompendium />} />
            <Route path="/tariff-lookup" element={<TariffLookup />} />
            <Route path="/news" element={<NewsList />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
