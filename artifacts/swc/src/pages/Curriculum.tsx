import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const INCOME_STREAMS = [
  "Affiliate Marketing", "Master Resell Rights", "PLR Products", "Drop Shipping",
  "UGC Branding", "Amazon Influencer", "Etsy Digital Shop", "Pinterest Ads",
  "TikTok Shop", "Print on Demand", "Course Creation", "Coaching/Mentorship",
  "Website Flipping", "Airbnb Management", "E-com Reselling", "Facebook Ads",
  "Podcast Scaling", "Threads Mastery"
];

const MODULES = [
  "Start Up Steps", "Beginners Blueprint", "Affiliate Setup", "The Game Plan", 
  "First Impression", "Knowledge Is Power", "All Things Confidence", "Authenticity Matters",
  "Effective Selling", '"Selling" without Selling', "Content Mastery", "All Things Branding",
  "Consistency is KEY", "Let's talk Mindset", "Digital Ethics", "A Day In The Life",
  "Instagram Blueprint", "Going Faceless", "Multi Platform Mastery", "Navigating Stan.store",
  "PLR Vault", "Mastering Reels", "Email Marketing", "Digital Products",
  "The Content Vault", "Live Recordings", "Drop Shipping", "UGC",
  "Securing Brand Deals", "Let's Talk Taxes", "Creating on Canva", "APPS for Visuals",
  "TikTok Mastery", "TikTok Lives", "TikTok Shop Level Up", "Selling on Etsy",
  "Selling on Pinterest", "Branding Essentials", "Faceless PLR", "Selling in Stories",
  "Sales Mastery", "Amazon Reviews", "Affiliate Marketing", "Print on Demand",
  "Theme Pages", "Website Flipping", "Coach Masters", "Creating Your Course",
  "Airbnb", "Art of Reselling", "Monetizing FB", "Monetizing Reels",
  "Podcast Setup", "Threads Mastery", "Network Marketing", "Pinterest Sales"
];

export default function Curriculum() {
  return (
    <PageTransition>
      <section className="pt-12 pb-20 px-8">
        <Link 
          href="/" 
          className="text-[9px] uppercase tracking-widest mb-12 opacity-40 hover:opacity-100 flex items-center gap-2 w-fit transition-opacity"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Home
        </Link>
        
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-foreground/90">The Roadmap</h2>
          <p className="uppercase tracking-[0.3em] text-[10px] font-semibold opacity-50">Everything you need to scale</p>
        </div>

        {/* 18 Streams Detail */}
        <div className="mb-24 relative">
          <div className="absolute -left-8 top-10 w-1 h-20 bg-foreground/10" />
          <h3 className="font-display text-2xl mb-10 border-b border-foreground/5 pb-5 text-foreground/90">
            The 18 Income Streams
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pl-2">
            {INCOME_STREAMS.map((stream, idx) => (
              <div key={idx} className="text-[10px] uppercase tracking-widest flex items-center gap-4 group cursor-default">
                <CheckCircle2 className="w-3.5 h-3.5 text-foreground/30 group-hover:text-gold transition-colors" />
                <span className="opacity-80 group-hover:opacity-100 transition-opacity">{stream}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-10 w-1 h-20 bg-foreground/10" />
          <h3 className="font-display text-2xl mb-10 border-b border-foreground/5 pb-5 text-foreground/90">
            Course Modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 pl-2">
            {MODULES.map((module, index) => {
              const num = (index + 1).toString().padStart(2, '0');
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-5 py-5 border-b border-foreground/[0.04] transition-all duration-300 hover:pl-3 hover:bg-muted/50 cursor-default"
                >
                  <span className="font-display text-sm italic font-bold opacity-30 w-6">{num}</span>
                  <span className="text-[10px] uppercase tracking-widest font-semibold opacity-80">{module}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-28 p-12 bg-muted rounded-2xl text-center border border-foreground/5 shadow-inner">
          <h3 className="font-display text-3xl mb-6 italic text-foreground/90">Ready to start?</h3>
          <Link 
            href="/vault" 
            className="inline-block bg-foreground text-background px-10 py-5 text-[10px] uppercase btn-luxury font-bold rounded-sm shadow-2xl"
          >
            Get Instant Access
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
