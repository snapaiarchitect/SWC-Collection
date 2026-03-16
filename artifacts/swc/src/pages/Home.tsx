import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-8 text-center">
        <p className="text-[9px] uppercase tracking-[0.4em] mb-6 opacity-50 font-semibold">
          Master Resell Rights Included
        </p>
        <h1 className="text-5xl md:text-7xl mb-8 leading-tight">
          THE NEW <br />
          <span className="italic text-4xl md:text-6xl font-light text-foreground/90">Collection</span>
        </h1>
        
        <div className="relative my-14 luxury-border rounded-2xl overflow-hidden bg-muted aspect-video flex items-center justify-center group shadow-xl">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-abstract.png`} 
            alt="Abstract presentation" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
          <span className="relative z-10 font-display text-2xl md:text-3xl italic text-white drop-shadow-lg px-6 text-center tracking-wide">
            Your Gateway to Digital Wealth
          </span>
        </div>

        <p className="text-sm leading-loose font-light mb-12 max-w-md mx-auto opacity-80">
          A comprehensive system built for the modern digital entrepreneur. 56+ modules, 18 income streams, and a complete library of plug-and-play marketing assets.
        </p>

        <div className="flex flex-col gap-5 items-center">
          <Link 
            href="/vault" 
            className="w-full max-w-sm bg-foreground text-background py-5 px-8 text-[11px] font-bold uppercase btn-luxury rounded-sm shadow-2xl hover:shadow-black/20 inline-block text-center"
          >
            Explore The Vault
          </Link>
          <Link 
            href="/curriculum" 
            className="py-4 px-8 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity inline-flex items-center gap-2 group"
          >
            Full Course Details
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 18 Streams Quick View */}
      <section className="py-16 px-8 text-center border-t border-foreground/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        
        <h3 className="font-display text-2xl mb-10 italic text-foreground/90">One Course. 18 Income Streams.</h3>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
          {["Affiliate Marketing", "MRR / Resell", "PLR Vault", "Drop Shipping", "UGC Branding", "Amazon Influencer", "Digital Etsy", "TikTok Shop"].map((stream) => (
            <span key={stream} className="income-pill">{stream}</span>
          ))}
        </div>
        
        <Link 
          href="/curriculum" 
          className="inline-block mt-12 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-40 hover:opacity-100 transition-opacity border-b border-foreground/30 pb-1"
        >
          See full list of 18 &rarr;
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-muted border-y border-foreground/5">
        <h3 className="font-display text-3xl text-center mb-14 italic text-foreground/90">Voices of Success</h3>
        <div className="space-y-6 max-w-md mx-auto">
          <div className="bg-card p-10 luxury-border rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform duration-500">
            <p className="text-sm italic font-light leading-loose mb-8 text-foreground/80">
              "The plug-and-play stories alone paid for the course in my first week. I didn't have to guess what to post—I just followed the template and the sales rolled in."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-foreground/10 overflow-hidden ring-2 ring-background">
                <img 
                  src={`${import.meta.env.BASE_URL}images/avatar.png`} 
                  alt="Sarah M." 
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Sarah M.</div>
                <div className="text-[9px] uppercase tracking-widest opacity-40 mt-0.5">Digital Creator</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support / Contact */}
      <section className="py-20 px-8 text-center">
        <h3 className="font-display text-2xl mb-4 italic text-foreground/90">Have questions?</h3>
        <p className="text-sm font-light mb-8 opacity-60 max-w-xs mx-auto">
          Our dedicated support team is available 24/7 to help you transition into the digital space.
        </p>
        <a 
          href="mailto:support@swccollection.com" 
          className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity border border-foreground/10 px-6 py-3 rounded-full hover:bg-muted"
        >
          <Mail className="w-3.5 h-3.5" />
          support@swccollection.com
        </a>
      </section>

      {/* Final Home CTA */}
      <section className="py-24 px-8 text-center bg-foreground text-background rounded-t-3xl mx-2 shadow-2xl">
        <h2 className="font-display text-4xl mb-6 tracking-wide">The time is <span className="italic font-light opacity-90">now.</span></h2>
        <p className="text-sm font-light mb-10 opacity-70">Join 5,000+ members building their digital empires.</p>
        <Link 
          href="/vault" 
          className="w-full max-w-sm mx-auto bg-background text-foreground py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300 block rounded-sm"
        >
          Secure Access — $497
        </Link>
      </section>
    </PageTransition>
  );
}
