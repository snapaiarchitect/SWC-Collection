import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Curriculum from "./pages/Curriculum";
import Vault from "./pages/Vault";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function InnerApp() {
  const [location] = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="max-w-2xl mx-auto bg-card shadow-[0_0_50px_rgba(0,0,0,0.05)] min-h-screen pt-20 flex flex-col justify-between">
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Switch location={location} key={location}>
              <Route path="/" component={Home} />
              <Route path="/curriculum" component={Curriculum} />
              <Route path="/vault" component={Vault} />
              <Route component={NotFound} />
            </Switch>
          </AnimatePresence>
        </div>
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <InnerApp />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
