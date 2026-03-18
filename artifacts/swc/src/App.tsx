import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Landing from "./pages/Landing";
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

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/curriculum" component={Curriculum} />
        <Route path="/vault" component={Vault} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function AppShell({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isLanding = location === "/";

  if (isLanding) {
    return (
      <>
        <LandingNav />
        <main className="max-w-2xl mx-auto bg-white shadow-[0_0_50px_rgba(0,0,0,0.05)] min-h-screen pt-20">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto bg-card shadow-[0_0_50px_rgba(0,0,0,0.05)] min-h-screen pt-20 flex flex-col justify-between">
        <div className="flex-grow">{children}</div>
        <Footer />
      </main>
    </>
  );
}

function LandingNav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(245,242,237,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        padding: "1rem 1.5rem"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.25rem", letterSpacing: "0.1em", fontWeight: 700 }}>
          SWC 2.0
        </span>
        <a
          href="/home"
          style={{
            backgroundColor: "#1A1A1A",
            color: "#fff",
            padding: "0.6rem 1.25rem",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            fontWeight: 700,
            borderRadius: "99px",
            textDecoration: "none",
            display: "inline-block"
          }}
        >
          SWC 2.0 →
        </a>
      </div>
    </nav>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <AppShell>
            <Router />
          </AppShell>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
