import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-muted py-16 px-8 text-center border-t border-foreground/5 mt-10">
      <p className="font-display italic text-2xl mb-3 text-foreground/90">SWC 2.0</p>
      <p className="text-[8px] uppercase tracking-[0.4em] opacity-40 mb-8 font-semibold">Success with Canva 2026</p>
      <div className="flex justify-center gap-8 text-[9px] uppercase tracking-widest opacity-40">
        <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        <a href="#" className="hover:opacity-100 transition-opacity">MRR License</a>
      </div>
    </footer>
  );
}
