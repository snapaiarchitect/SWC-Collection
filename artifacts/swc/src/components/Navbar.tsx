import { Link } from "wouter";

export function Navbar() {
  return (
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
            className="bg-foreground text-background px-6 py-2.5 text-[10px] uppercase font-bold rounded-full btn-luxury inline-block text-center"
          >
            The Vault
          </Link>
        </div>
      </div>
    </nav>
  );
}
