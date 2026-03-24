import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight, ChevronDown, Star, Shield, Check } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const BASE = import.meta.env.BASE_URL;

const INCOME_STREAMS = [
  { emoji: "🔗", name: "Affiliate Marketing", outcome: "Earn recurring commissions promoting products you don't own." },
  { emoji: "📦", name: "Master Resell Rights", outcome: "Buy once, resell forever and keep 100% of the profit." },
  { emoji: "📁", name: "PLR Products", outcome: "Rebrand done-for-you content and sell it as your own." },
  { emoji: "🛒", name: "Drop Shipping", outcome: "Sell physical products online without holding any inventory." },
  { emoji: "🎥", name: "UGC Branding", outcome: "Get paid by brands to create authentic, scroll-stopping content." },
  { emoji: "⭐", name: "Amazon Influencer", outcome: "Earn commissions through your personalised Amazon storefront." },
  { emoji: "🏪", name: "Etsy Digital Shop", outcome: "Sell printables and digital downloads while you sleep." },
  { emoji: "📌", name: "Pinterest Ads", outcome: "Drive high-intent buyers to your offers on autopilot." },
  { emoji: "🛍️", name: "TikTok Shop", outcome: "Monetise your TikTok audience directly through in-app shopping." },
  { emoji: "🖨️", name: "Print on Demand", outcome: "Design once, ship globally — zero upfront inventory cost." },
  { emoji: "📚", name: "Course Creation", outcome: "Package your knowledge and sell it as a premium digital product." },
  { emoji: "🧑‍💼", name: "Coaching / Mentorship", outcome: "Charge premium rates for your expertise and 1:1 guidance." },
  { emoji: "🌐", name: "Website Flipping", outcome: "Buy undervalued sites, improve them, and sell for a profit." },
  { emoji: "🏠", name: "Airbnb Management", outcome: "Generate passive income managing short-term rental properties." },
  { emoji: "♻️", name: "E-com Reselling", outcome: "Find undervalued products and flip them for consistent profit." },
  { emoji: "📣", name: "Facebook Ads", outcome: "Run high-ROI paid campaigns for your own or clients' offers." },
  { emoji: "🎙️", name: "Podcast Scaling", outcome: "Monetise long-form content through sponsorships and downloads." },
  { emoji: "🧵", name: "Threads Mastery", outcome: "Build an engaged audience and funnel them to paid offers." },
];

const FEATURED_MODULES = [
  {
    number: "01",
    title: "Beginners Blueprint",
    outcome: "Map your digital business from scratch — even if you've never earned a dollar online.",
  },
  {
    number: "02",
    title: "Content Mastery",
    outcome: "Learn the posting framework that turns followers into buyers consistently.",
  },
  {
    number: "03",
    title: "Affiliate Setup",
    outcome: "Launch your first affiliate funnel in a weekend using our plug-and-play templates.",
  },
  {
    number: "04",
    title: "Mastering Reels",
    outcome: "Create viral-worthy reels that grow your account and drive real revenue.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    handle: "Digital Creator",
    avatar: "avatar-sarah.png",
    quote:
      "The plug-and-play stories alone paid for the course in my first week. I didn't have to guess what to post — I just followed the template and the sales rolled in.",
    result: "Made back the course price in Week 1",
  },
  {
    name: "Jordan K.",
    handle: "Stay-At-Home Mom",
    avatar: "avatar-jordan.png",
    quote:
      "I had zero tech skills and zero followers when I started. Three months later I'm making $2,100/month in digital product sales. This course is the real deal.",
    result: "$2,100/month in 90 days",
  },
  {
    name: "Marcus T.",
    handle: "Side Hustler → Full Time",
    avatar: "avatar-marcus.png",
    quote:
      "I'd bought other courses that gave me fluff. SWC 2.0 gave me an actual system. I quit my 9-to-5 within 5 months. No regrets whatsoever.",
    result: "Replaced 9-to-5 income in 5 months",
  },
];

const VALUE_ITEMS = [
  { label: "SWC 2.0 Core Course (56+ Modules)", value: "$1,497" },
  { label: "18 Income Stream Playbooks", value: "$497" },
  { label: "The Resource Vault (Reel Covers, Captions, Templates)", value: "$397" },
  { label: "Master Resell Rights License", value: "$297" },
  { label: "Lifetime Course Updates", value: "$297" },
  { label: "Community & 24/7 Support Access", value: "$197" },
];

const FAQS = [
  {
    q: "Is this beginner-friendly?",
    a: "Absolutely. The course starts from zero — no following, no tech skills, no prior online business experience required. Module 1 is literally called 'Beginners Blueprint' for a reason.",
  },
  {
    q: "What exactly are Master Resell Rights (MRR)?",
    a: "MRR means you purchase the course once and receive the legal right to resell it as your own and keep 100% of the revenue. You never pay a commission or royalty. It's one of the most powerful digital business models available.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. We offer a 30-day satisfaction guarantee. If you complete the first 10 modules, implement the strategies, and aren't satisfied, contact our support team for a full refund.",
  },
  {
    q: "How long do I have access to the course?",
    a: "Lifetime access — including all future updates. The digital landscape changes fast, so we continuously add new modules. You pay once and benefit forever.",
  },
  {
    q: "What platform is the course hosted on?",
    a: "The course is delivered via Stan.store, a simple and elegant platform optimised for digital creators. You'll receive instant access to your private dashboard the moment your payment is confirmed.",
  },
  {
    q: "How quickly can I realistically start earning?",
    a: "Results vary, but many students make their first digital sale within the first two weeks of implementing the Affiliate Setup and Vault modules. A realistic 90-day target for a committed student is $500–$2,500/month.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-center gap-4 hover:opacity-80 transition-opacity"
      >
        <span className="text-[11px] uppercase tracking-widest font-bold">{q}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 opacity-50 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <p className="text-xs font-light leading-loose opacity-70">{a}</p>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-foreground text-foreground opacity-80" />
      ))}
    </div>
  );
}

function EnrollCTA({ label = "Enroll Now — $497" }: { label?: string }) {
  return (
    <a
      href="#pricing"
      className="w-full max-w-sm mx-auto bg-foreground text-background py-5 px-8 text-[11px] font-bold uppercase btn-luxury rounded-sm shadow-2xl hover:shadow-black/20 inline-block text-center"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <PageTransition>

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="pt-16 pb-20 px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-muted border border-foreground/10 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] uppercase tracking-widest font-bold opacity-70">
            Join 5,000+ members building their digital empires
          </span>
        </div>

        <p className="text-[9px] uppercase tracking-[0.4em] mb-4 opacity-50 font-semibold">
          Master Resell Rights Included
        </p>
        <h1 className="text-5xl md:text-7xl mb-4 leading-tight">
          THE NEW <br />
          <span className="italic text-4xl md:text-6xl font-light text-foreground/90">Collection</span>
        </h1>
        <p className="text-sm font-light opacity-60 mb-8 max-w-xs mx-auto leading-relaxed">
          The structured system that turns complete beginners into confident digital entrepreneurs — step by step.
        </p>

        <div className="relative my-10 luxury-border rounded-2xl overflow-hidden bg-muted aspect-video flex items-center justify-center group shadow-xl">
          <img
            src={`${BASE}images/hero-abstract.png`}
            alt="SWC 2.0 Course Preview"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
          <span className="relative z-10 font-display text-2xl md:text-3xl italic text-white drop-shadow-lg px-6 text-center tracking-wide">
            Your Gateway to Digital Wealth
          </span>
        </div>

        <p className="text-sm leading-loose font-light mb-10 max-w-md mx-auto opacity-80">
          A comprehensive system built for the modern digital entrepreneur. 56+ modules, 18 income streams, and a complete library of plug-and-play marketing assets.
        </p>

        <div className="flex flex-col gap-5 items-center">
          <EnrollCTA label="Enroll Now — $497" />
          <Link
            href="/curriculum"
            className="py-4 px-8 text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity inline-flex items-center gap-2 group"
          >
            See All 56 Modules
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── 2. PAIN POINTS ──────────────────────────── */}
      <section className="py-20 px-8 border-t border-foreground/5 bg-muted">
        <div className="max-w-md mx-auto">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-6 text-center">
            Sound familiar?
          </p>
          <h2 className="font-display text-3xl italic text-center mb-12 text-foreground/90 leading-snug">
            You're not the problem. <br/>The system is.
          </h2>
          <ul className="space-y-6">
            {[
              "I don't know where to start — there's so much noise online.",
              "I've tried courses before and still have no real income strategy.",
              "I'm posting content but nothing is actually converting to sales.",
              "I feel like I'm missing a step everyone else already knows.",
            ].map((pain, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                </span>
                <p className="text-sm font-light leading-relaxed opacity-80">"{pain}"</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. SOLUTION BRIDGE ──────────────────────── */}
      <section className="py-20 px-8 border-b border-foreground/5 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-6">The Answer</p>
          <h2 className="font-display text-3xl italic mb-8 text-foreground/90">
            Introducing SWC 2.0
          </h2>
          <p className="text-sm font-light leading-loose opacity-75">
            SWC 2.0 isn't another vague "mindset course." It's a complete, step-by-step business operating system that takes you from zero audience and zero income to a fully functioning digital business — in the shortest possible time.
          </p>
          <p className="text-sm font-light leading-loose opacity-75 mt-4">
            Inside, you'll find 56 practical modules, 18 income stream playbooks, and a vault of done-for-you marketing assets — everything you need to start, build, and scale without guesswork.
          </p>
        </div>
      </section>

      {/* ── 4. INCOME STREAMS GRID ──────────────────── */}
      <section className="py-20 px-6 text-center border-b border-foreground/5">
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent mx-auto mb-2" />
        <h2 className="font-display text-3xl italic mb-4 text-foreground/90">One Course. 18 Income Streams.</h2>
        <p className="text-sm font-light opacity-50 mb-12 max-w-xs mx-auto">
          Every stream comes with its own playbook inside SWC 2.0.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto text-left">
          {INCOME_STREAMS.map((stream) => (
            <div
              key={stream.name}
              className="bg-muted border border-foreground/5 rounded-2xl p-5 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="text-xl mb-2 block">{stream.emoji}</span>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">{stream.name}</p>
              <p className="text-[10px] font-light opacity-60 leading-relaxed">{stream.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA REPEAT #1 ───────────────────────────── */}
      <section className="py-16 px-8 text-center border-b border-foreground/5">
        <p className="text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-6">Ready to unlock all 18?</p>
        <div className="flex flex-col items-center gap-4">
          <EnrollCTA label="Get Instant Access — $497" />
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="w-3 h-3" />
            <span className="text-[9px] uppercase tracking-widest font-semibold">30-Day Guarantee</span>
          </div>
        </div>
      </section>

      {/* ── 5. CURRICULUM PREVIEW ───────────────────── */}
      <section className="py-20 px-8 border-b border-foreground/5">
        <div className="text-center mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-4">Course Preview</p>
          <h2 className="font-display text-3xl italic text-foreground/90">Featured Modules</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-10">
          {FEATURED_MODULES.map((mod) => (
            <div
              key={mod.number}
              className="luxury-border rounded-2xl p-6 bg-card hover:-translate-y-0.5 transition-transform duration-300 shadow-sm"
            >
              <span className="font-display text-xs italic font-bold opacity-20 mb-3 block">{mod.number}</span>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2">{mod.title}</p>
              <p className="text-[10px] font-light opacity-60 leading-relaxed">{mod.outcome}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 hover:opacity-100 transition-opacity border-b border-foreground/30 pb-1 group"
          >
            View full curriculum — all 56 modules
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── 6. INSTRUCTOR SECTION ───────────────────── */}
      <section className="py-20 px-8 bg-muted border-b border-foreground/5">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-8">Meet Your Mentor</p>
          <div className="w-24 h-24 rounded-full bg-foreground/10 mx-auto mb-8 overflow-hidden ring-4 ring-background shadow-xl">
            <img
              src={`${BASE}images/mentor.png`}
              alt="Your Mentor"
              className="w-full h-full object-cover grayscale-[30%]"
            />
          </div>
          <h2 className="font-display text-2xl italic mb-4 text-foreground/90">The Creator Behind SWC 2.0</h2>
          <p className="text-sm font-light leading-loose opacity-70 mb-10">
            A full-time digital entrepreneur who built a six-figure online business using the exact systems taught inside SWC 2.0. Having helped thousands of students across the globe, she created this course to make the path clear, duplicable, and fast.
          </p>
          <ul className="space-y-4 text-left max-w-xs mx-auto">
            {[
              "7+ years building digital income streams online",
              "Personally uses all 18 income streams taught in this course",
              "5,000+ students mentored worldwide",
            ].map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-60" />
                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-70">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 7. EXPANDED TESTIMONIALS ────────────────── */}
      <section className="py-24 px-8 border-b border-foreground/5">
        <h2 className="font-display text-3xl text-center mb-14 italic text-foreground/90">Voices of Success</h2>
        <div className="space-y-6 max-w-md mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-card p-10 luxury-border rounded-2xl shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform duration-500"
            >
              <Stars />
              <p className="text-sm italic font-light leading-loose mb-6 text-foreground/80">
                "{t.quote}"
              </p>
              <div className="border-t border-foreground/5 pt-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 overflow-hidden ring-2 ring-background">
                    <img
                      src={`${BASE}images/${t.avatar}`}
                      alt={t.name}
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest">{t.name}</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-40 mt-0.5">{t.handle}</div>
                  </div>
                </div>
                <span className="text-[8px] bg-green-50 text-green-700 font-bold uppercase tracking-wider px-2 py-1 rounded-sm whitespace-nowrap">
                  {t.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA REPEAT #2 ───────────────────────────── */}
      <section className="py-16 px-8 text-center border-b border-foreground/5">
        <p className="text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-6">Your story starts here</p>
        <div className="flex flex-col items-center gap-4">
          <EnrollCTA label="Start My Journey — $497" />
          <div className="flex items-center gap-2 opacity-50">
            <Shield className="w-3 h-3" />
            <span className="text-[9px] uppercase tracking-widest font-semibold">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* ── 8. VAULT PREVIEW ────────────────────────── */}
      <section className="py-20 px-8 bg-muted border-b border-foreground/5">
        <div className="text-center mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-4">Exclusive Bonus</p>
          <h2 className="font-display text-3xl italic text-foreground/90">What's In The Vault</h2>
          <p className="text-sm font-light opacity-50 mt-3 max-w-xs mx-auto">
            A complete library of plug-and-play assets so you never start from a blank canvas.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-10">
          <div className="luxury-border rounded-2xl p-8 bg-card shadow-sm mb-6">
            <div className="flex gap-3 mb-5 justify-center">
              {["reel-cover-1.png", "reel-cover-2.png", "reel-cover-3.png"].map((src, i) => (
                <div
                  key={i}
                  className={`h-28 w-20 rounded-lg overflow-hidden border border-foreground/10 shadow-sm ${i === 0 ? "-rotate-6" : i === 2 ? "rotate-6" : "-translate-y-2 z-10"} transition-transform hover:rotate-0 hover:-translate-y-3`}
                >
                  <img
                    src={`${BASE}images/${src}`}
                    alt={`Reel cover template ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-center mb-1">30+ Reel Cover Templates</p>
            <p className="text-[10px] font-light opacity-60 text-center leading-relaxed">Luxury Canva templates — swap text, upload, done.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="luxury-border rounded-2xl p-6 bg-card shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl overflow-hidden">
                <img src={`${BASE}images/icon-captions.png`} alt="Caption Templates" className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Caption Templates</p>
              <p className="text-[10px] font-light opacity-60 leading-relaxed">High-conversion copy — just fill the blanks.</p>
            </div>
            <div className="luxury-border rounded-2xl p-6 bg-card shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl overflow-hidden">
                <img src={`${BASE}images/icon-content.png`} alt="Done-For-You Content" className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Done-For-You Content</p>
              <p className="text-[10px] font-light opacity-60 leading-relaxed">Story scripts, hooks, and offer frameworks.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/vault"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-semibold opacity-50 hover:opacity-100 transition-opacity border-b border-foreground/30 pb-1 group"
          >
            Preview The Vault
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── 9. VALUE STACK + PRICING ────────────────── */}
      <section id="pricing" className="py-24 px-8 border-b border-foreground/5 text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-4">Everything You Get</p>
        <h2 className="font-display text-3xl italic mb-12 text-foreground/90">The Full Value Stack</h2>

        <div className="max-w-sm mx-auto mb-10 text-left space-y-3">
          {VALUE_ITEMS.map((item) => (
            <div key={item.label} className="flex justify-between items-start gap-4 py-3 border-b border-foreground/5">
              <div className="flex items-start gap-3">
                <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-50" />
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-80">{item.label}</span>
              </div>
              <span className="text-[10px] font-bold opacity-50 shrink-0">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="max-w-sm mx-auto bg-muted rounded-2xl luxury-border p-8 mb-8">
          <p className="text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-2">Total Value</p>
          <p className="text-2xl font-light line-through opacity-30 mb-1">$3,182</p>
          <p className="font-display text-5xl italic mb-2">$497</p>
          <p className="text-[9px] uppercase tracking-widest font-semibold opacity-40 mb-6">One-time payment · Lifetime access</p>
          <div className="flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest font-bold opacity-60 mb-6">
            <Shield className="w-3.5 h-3.5" />
            30-Day Money-Back Guarantee
          </div>
          <EnrollCTA label="Enroll Now — $497" />
        </div>

        <p className="text-[9px] uppercase tracking-widest opacity-30 font-semibold">
          SSL Secured &bull; Instant Access &bull; Lifetime Updates
        </p>
      </section>

      {/* ── 10. FAQ ─────────────────────────────────── */}
      <section className="py-20 px-8 border-b border-foreground/5">
        <div className="text-center mb-12">
          <p className="text-[9px] uppercase tracking-[0.3em] font-semibold opacity-40 mb-4">Got Questions?</p>
          <h2 className="font-display text-3xl italic text-foreground/90">Frequently Asked</h2>
        </div>
        <div className="max-w-md mx-auto">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* ── 11. FINAL DARK CTA ──────────────────────── */}
      <section className="py-24 px-8 text-center bg-foreground text-background rounded-t-3xl mx-2 shadow-2xl">
        <p className="text-[9px] uppercase tracking-widest opacity-40 font-semibold mb-4">The time is now</p>
        <h2 className="font-display text-4xl mb-4 tracking-wide">
          The time is <span className="italic font-light opacity-90">now.</span>
        </h2>
        <p className="text-sm font-light mb-10 opacity-60 max-w-xs mx-auto leading-relaxed">
          Join 5,000+ members who stopped waiting and started building. One decision. Lifetime access.
        </p>
        <a
          href="#pricing"
          className="w-full max-w-sm mx-auto bg-background text-foreground py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:tracking-[0.4em] transition-all duration-300 block rounded-sm mb-6"
        >
          Secure Access — $497
        </a>
        <div className="flex items-center justify-center gap-2 opacity-40">
          <Shield className="w-3.5 h-3.5" />
          <span className="text-[9px] uppercase tracking-widest font-semibold">30-Day Guarantee · SSL Secured</span>
        </div>
      </section>

    </PageTransition>
  );
}
