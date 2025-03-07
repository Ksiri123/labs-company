
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Image preloader to optimize loading times
const preloadImages = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce"
  ];

  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

const App = () => {
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
