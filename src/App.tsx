import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import StepPage from "./pages/StepPage";
import TicketEasyPage from "./pages/TicketEasyPage";
import ProfilePage from "./pages/ProfilePage";
import DesignPage from "./pages/DesignPage";
import MichelinPage from "./pages/MichelinPage";
import XrpPage from "./pages/XrpPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/step" element={<StepPage />} />
            <Route path="/ticket-easy" element={<TicketEasyPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/michelin" element={<MichelinPage />} />
            <Route path="/xrp" element={<XrpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* LinkedIn and GitHub redirect externally */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
  );
};

export default App;
