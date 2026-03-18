import { Link } from "wouter";
import { LandingSection } from "@/pages/Landing";

interface NavbarProps {
  isLanding: boolean;
  landingSection?: LandingSection;
  onLandingNavigate?: (section: LandingSection) => void;
}

export function Navbar({ isLanding, landingSection, onLandingNavigate }: NavbarProps) {
  if (isLanding) {
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
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          padding: "1rem 1.5rem"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={() => onLandingNavigate?.("home")}
            style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "1.25rem",
              letterSpacing: "0.1em",
              fontWeight: 700,
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1A1A1A",
              padding: 0
            }}
          >
            SWC 2.0
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <button
              onClick={() => onLandingNavigate?.("curriculum")}
              style={{
                background: "none",
                border: "none",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontWeight: 600,
                opacity: landingSection === "curriculum" ? 1 : 0.55,
                cursor: "pointer",
                color: "#1A1A1A",
                padding: 0,
                display: "none"
              }}
              id="landing-nav-curriculum"
            >
              Curriculum
            </button>
            <Link
              href="/home"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#fff",
                padding: "0.6rem 1.25rem",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                fontWeight: 700,
                borderRadius: "99px",
                textDecoration: "none",
                display: "inline-block",
                whiteSpace: "nowrap"
              }}
            >
              Experience SWC 2.0 →
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/home" className="font-display text-xl tracking-widest font-bold cursor-pointer hover:opacity-70 transition-opacity">
          SWC 2.0
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hidden md:block text-[10px] uppercase tracking-widest font-semibold opacity-40 hover:opacity-80 transition-opacity"
          >
            ← Original
          </Link>
          <Link
            href="/curriculum"
            className="hidden md:block text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
          >
            Curriculum
          </Link>
          <Link
            href="/vault"
            className="bg-foreground text-background px-6 py-2.5 text-[10px] uppercase font-bold rounded-full btn-luxury inline-block text-center"
          >
            The Vault
          </Link>
        </div>
      </div>
    </nav>
  );
}
