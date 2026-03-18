import { Link } from "wouter";
import { ArrowLeft, Lock, Check, Copy } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

export default function Vault() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(`"I used to think [Pain Point] was just my reality. Then I discovered [SWC 2.0 Method]. Fast forward [Time] and I've [Specific Result]. Want the roadmap? Link in bio."`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <section className="pt-12 pb-20 px-8">
        <Link 
          href="/home" 
          className="text-[9px] uppercase tracking-widest mb-12 opacity-40 hover:opacity-100 flex items-center gap-2 w-fit transition-opacity"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Home
        </Link>

        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-foreground/90">The Resource Vault</h2>
          <p className="uppercase tracking-[0.3em] text-[10px] font-semibold opacity-50">Your Plug-and-Play Assets</p>
        </div>

        <div className="space-y-10 max-w-lg mx-auto">
          {/* Visual Assets */}
          <div className="luxury-border p-10 rounded-3xl relative overflow-hidden group bg-card shadow-lg shadow-black/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muted rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">Visual Assets</span>
            <h4 className="font-display text-2xl mt-3 mb-4 text-foreground/90">Instagram Reel Covers</h4>
            <p className="text-xs font-light leading-relaxed opacity-70 mb-8">
              30+ Luxury, minimalist reel covers designed in Canva. Just swap the text and upload to maintain a highly aesthetic feed.
            </p>
            <div className="flex gap-4">
              <div className="h-20 w-14 bg-muted border border-foreground/10 rounded-sm shadow-sm transform -rotate-6 transition-transform group-hover:rotate-0"></div>
              <div className="h-20 w-14 bg-foreground/5 border border-foreground/10 rounded-sm shadow-sm z-10 -translate-y-2"></div>
              <div className="h-20 w-14 bg-muted border border-foreground/10 rounded-sm shadow-sm transform rotate-6 transition-transform group-hover:rotate-0"></div>
            </div>
          </div>

          {/* Caption Templates */}
          <div className="luxury-border p-10 rounded-3xl bg-muted shadow-inner">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">Plug & Play Copy</span>
            <h4 className="font-display text-2xl mt-3 mb-4 italic text-foreground/90">Caption Templates</h4>
            <p className="text-xs font-light opacity-70 mb-8 leading-relaxed">
              High-conversion captions for when you're stuck. Just copy, paste, and fill in the blanks.
            </p>
            
            <div className="bg-card p-6 rounded-xl border border-foreground/5 shadow-sm relative group">
              <p className="text-[9px] font-bold mb-4 uppercase opacity-40 flex justify-between items-center">
                Template: The Result Hook
                <button 
                  onClick={handleCopy}
                  className="text-foreground opacity-100 hover:text-gold transition-colors flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </button>
              </p>
              <p className="text-xs leading-loose opacity-80 font-display italic">
                "I used to think [Pain Point] was just my reality. Then I discovered [SWC 2.0 Method]. Fast forward [Time] and I've [Specific Result]. Want the roadmap? Link in bio."
              </p>
            </div>
          </div>

          {/* Secure Checkout Section */}
          <div className="bg-card luxury-border p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden mt-16">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            
            <div className="flex justify-center mb-6 text-foreground/30">
              <Lock className="w-10 h-10 stroke-[1.5]" />
            </div>
            
            <h4 className="font-display text-3xl mb-3 italic text-foreground/90">Secure Enrollment</h4>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 mb-10 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              SSL Secured &bull; Instant Access
            </p>
            
            <div className="space-y-5 max-w-sm mx-auto mb-10">
              <div className="flex justify-between text-xs py-3 border-b border-foreground/10">
                <span className="opacity-80">SWC 2.0 Collection</span>
                <span className="font-semibold">$497.00</span>
              </div>
              <div className="flex justify-between text-xs py-3">
                <span className="opacity-80">Lifetime Updates</span>
                <span className="text-green-600/80 font-bold uppercase tracking-widest text-[9px] bg-green-50 px-2 py-1 rounded-sm">Included</span>
              </div>
            </div>

            <button className="w-full bg-foreground text-background py-6 text-[11px] font-bold uppercase tracking-[0.3em] shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:tracking-[0.4em] transition-all duration-300 rounded-sm">
              PAY WITH STRIPE / CARD
            </button>
            <p className="text-[8px] uppercase tracking-widest opacity-30 mt-6 font-semibold">
              Guaranteed secure checkout
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
