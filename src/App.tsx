import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import GRIRules from "./pages/GRIRules";
import ChapterNotes from "./pages/ChapterNotes";
import ChapterNoteFull from "./pages/ChapterNoteFull";
import SENNotes from "./pages/SENNotes";
import WCOCompendium from "./pages/WCOCompendium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/sen-notes" element={<SENNotes />} />
          <Route path="/wco-compendium" element={<WCOCompendium />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
