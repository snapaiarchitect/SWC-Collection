import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Landing, { LandingSection } from "./pages/Landing";
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
  const isLanding = location === "/";

  const [landingSection, setLandingSection] = useState<LandingSection>("home");

  const goLanding = (section: LandingSection) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLandingSection(section);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar
        isLanding={isLanding}
        landingSection={landingSection}
        onLandingNavigate={goLanding}
      />

      {isLanding ? (
        <main
          style={{
            maxWidth: "42rem",
            margin: "0 auto",
            backgroundColor: "#fff",
            boxShadow: "0 0 50px rgba(0,0,0,0.05)",
            minHeight: "100vh",
            paddingTop: "5rem"
          }}
        >
          <Landing section={landingSection} onNavigate={goLanding} />
        </main>
      ) : (
        <main className="max-w-2xl mx-auto bg-card shadow-[0_0_50px_rgba(0,0,0,0.05)] min-h-screen pt-20 flex flex-col justify-between">
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Switch location={location} key={location}>
                <Route path="/home" component={Home} />
                <Route path="/curriculum" component={Curriculum} />
                <Route path="/vault" component={Vault} />
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>
          </div>
          <Footer />
        </main>
      )}
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
