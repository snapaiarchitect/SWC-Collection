import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useAuth } from "@workspace/replit-auth-web";
import { LogIn, LogOut, User } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";
  const { user, isLoading, isAuthenticated, login, logout } = useAuth();

  const enrollHref = isHome ? "#pricing" : `${BASE}#pricing`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav px-6 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-display text-xl tracking-widest font-bold cursor-pointer hover:opacity-70 transition-opacity">
            SWC 2.0
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/curriculum"
              className="hidden md:block text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
            >
              Curriculum
            </Link>
            <Link
              href="/vault"
              className="hidden md:block text-[10px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
            >
              The Vault
            </Link>

            {!isLoading && (
              isAuthenticated ? (
                <div className="flex items-center gap-3">
                  {user?.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt={user.firstName ?? "Profile"}
                      className="w-7 h-7 rounded-full object-cover border border-foreground/20"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-foreground/10 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  )}
                  <button
                    onClick={logout}
                    className="hidden md:flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-semibold opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <LogOut className="w-3 h-3" />
                    Log out
                  </button>
                </div>
              ) : (
                <button
                  onClick={login}
                  className="hidden md:flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
                >
                  <LogIn className="w-3 h-3" />
                  Log in
                </button>
              )
            )}

            <a
              href={enrollHref}
              className="bg-foreground text-background px-6 py-2.5 text-[10px] uppercase font-bold rounded-full btn-luxury inline-block text-center"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {scrolled && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <a
            href={enrollHref}
            className="bg-foreground text-background px-8 py-3.5 text-[10px] uppercase font-bold rounded-full shadow-2xl shadow-black/30 inline-block hover:shadow-black/40 hover:-translate-y-0.5 transition-all duration-300 btn-luxury"
          >
            Enroll Now — $497
          </a>
        </div>
      )}
    </>
  );
}
