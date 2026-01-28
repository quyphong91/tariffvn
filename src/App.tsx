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
import AIHSLookup from "./pages/AIHSLookup";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import AdminArticleCreate from "./pages/AdminArticleCreate";
import AdminArticleEdit from "./pages/AdminArticleEdit";
import AboutHSTC from "./pages/AboutHSTC";
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
            <Route path="/tra-cuu-hs-code" element={<Search />} />
            <Route path="/quy-tac-phan-loai-hs" element={<GRIRules />} />
            <Route path="/chu-giai-hs" element={<ChapterNotes />} />
            <Route path="/chu-giai-hs/full/:chapterNumber" element={<ChapterNoteFull />} />
            <Route path="/chu-giai-hs/full-all" element={<ChapterNoteFullAll />} />
            <Route path="/chu-giai-sen" element={<SENNotes />} />
            <Route path="/chu-giai-sen/full/:chapterNumber" element={<SENNoteFull />} />
            <Route path="/tuyen-tap-phan-loai-wco" element={<WCOCompendium />} />
            <Route path="/tra-cuu-thue-nhap-khau" element={<TariffLookup />} />
            <Route path="/ai-tra-cuu-hs" element={<AIHSLookup />} />
            <Route path="/tin-tuc" element={<NewsList />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/articles/create" element={<AdminArticleCreate />} />
            <Route path="/admin/articles/edit/:id" element={<AdminArticleEdit />} />
            <Route path="/gioi-thieu" element={<AboutHSTC />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
