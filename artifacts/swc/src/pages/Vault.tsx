import { Link } from "wouter";
import { ArrowLeft, Lock, Check, Copy, ChevronDown } from "lucide-react";
import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";

const BASE = import.meta.env.BASE_URL;

const CAPTION_TEMPLATES = [
  {
    name: "The Result Hook",
    category: "Story Selling",
    template: `"I used to think [Pain Point] was just my reality. Then I discovered [SWC 2.0 Method]. Fast forward [Time] and I've [Specific Result]. Want the roadmap? Link in bio."`,
  },
  {
    name: "The Before & After",
    category: "Transformation",
    template: `"[Time] ago I was [Old Situation]. No followers. No strategy. No income. Today? [New Reality]. The only thing that changed was [What You Did]. If I can do it, so can you. DM me 'START' and I'll show you exactly how."`,
  },
  {
    name: "The Authority Builder",
    category: "Trust & Credibility",
    template: `"Here's what nobody tells you about [Topic]: [Counterintuitive Truth]. I've spent [Time] testing this across [Number] income streams. The result? [Specific Outcome]. Save this post — you'll need it. 🔖"`,
  },
  {
    name: "The Myth Buster",
    category: "Objection Handling",
    template: `"'You need [Common Objection] to start an online business.' FALSE. ❌ Here's what you actually need: ✅ [Simple Requirement 1] ✅ [Simple Requirement 2] ✅ [Simple Requirement 3]. That's it. I started with nothing and built [Result]. Stop waiting for perfect — start now."`,
  },
  {
    name: "The Social Proof",
    category: "Testimonial Format",
    template: `"Another student win 🏆 [Student Name] just [Achievement] in only [Timeframe] — starting from zero. The exact playbook? Inside SWC 2.0. This is what happens when you follow a proven system instead of guessing. Ready for your win? Link in bio."`,
  },
  {
    name: "The Curiosity Gap",
    category: "Engagement Driver",
    template: `"I made $[Amount] last month from my phone. No, I didn't sell [Common Assumption]. No, I don't have [Big Following]. What I DO have is a system that works while I [Lifestyle Activity]. If you want to know exactly how ↓ [Call to Action]"`,
  },
];

const STORY_SCRIPTS = [
  {
    name: "The 3-Slide Sell",
    slides: [
      "Slide 1: 'POV: You just got your first sale from a digital product you didn't even create 👀'",
      "Slide 2: 'It's called Master Resell Rights. You buy once. Sell forever. Keep 100%.'",
      "Slide 3: 'I used to think this was too good to be true. [X] sales later... it's very real. DM me GUIDE for the free breakdown.'"
    ],
  },
  {
    name: "The Daily Routine",
    slides: [
      "Slide 1: 'My 30-min morning digital income routine ☕'",
      "Slide 2: '1. Check overnight sales → 2. Schedule 1 reel from the Vault → 3. Reply to 5 DMs → 4. Post 1 story using the caption template'",
      "Slide 3: 'That's literally it. Consistency > Hustle. The templates do the heavy lifting. Want the same toolkit? Link in bio.'"
    ],
  },
];

const OFFER_FRAMEWORKS = [
  {
    name: "The Stack Offer",
    framework: "Lead with the transformation, not the product. Structure: Pain → Agitate → Solution → Stack (list everything they get) → Price Anchor ($3,000+ value) → Reveal ($497) → Guarantee → CTA."
  },
  {
    name: "The DM Closer",
    framework: "When someone replies to your story or DMs 'INFO': 1. Acknowledge ('Hey! Glad you reached out 🙌') → 2. Qualify ('What's your biggest challenge right now with [Topic]?') → 3. Bridge ('That's exactly what Module [X] covers...') → 4. Soft Close ('Want me to send you the details?')"
  },
];

function CopyableTemplate({ template }: { template: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="text-foreground opacity-80 hover:opacity-100 transition-colors flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy
        </>
      )}
    </button>
  );
}

function ExpandableSection({ title, count, children }: { title: string; count: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-foreground/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest">{title}</p>
          <p className="text-[9px] font-light opacity-50 mt-1">{count}</p>
        </div>
        <ChevronDown className={`w-4 h-4 opacity-40 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px]" : "max-h-0"}`}>
        <div className="px-6 pb-6 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Vault() {
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
          <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-foreground/90">The Resource Vault</h2>
          <p className="uppercase tracking-[0.3em] text-[10px] font-semibold opacity-50">Your Plug-and-Play Assets</p>
        </div>

        <div className="space-y-10 max-w-lg mx-auto">

          {/* ── REEL COVERS ───────────────────────────── */}
          <div className="luxury-border p-10 rounded-3xl relative overflow-hidden group bg-card shadow-lg shadow-black/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muted rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">Visual Assets</span>
            <h4 className="font-display text-2xl mt-3 mb-4 text-foreground/90">Instagram Reel Covers</h4>
            <p className="text-xs font-light leading-relaxed opacity-70 mb-8">
              30+ Luxury, minimalist reel covers designed in Canva. Just swap the text and upload to maintain a highly aesthetic feed.
            </p>
            <div className="flex gap-4 justify-center">
              {["reel-cover-1.png", "reel-cover-2.png", "reel-cover-3.png"].map((src, i) => (
                <div
                  key={i}
                  className={`h-32 w-[5.5rem] rounded-lg overflow-hidden border border-foreground/10 shadow-md ${i === 0 ? "-rotate-6" : i === 2 ? "rotate-6" : "-translate-y-3 z-10"} transition-transform group-hover:rotate-0`}
                >
                  <img
                    src={`${BASE}images/${src}`}
                    alt={`Reel cover template ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── CAPTION TEMPLATES ─────────────────────── */}
          <div className="luxury-border p-10 rounded-3xl bg-muted shadow-inner">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">Plug & Play Copy</span>
            <h4 className="font-display text-2xl mt-3 mb-2 italic text-foreground/90">Caption Templates</h4>
            <p className="text-xs font-light opacity-70 mb-8 leading-relaxed">
              {CAPTION_TEMPLATES.length} high-conversion captions ready to copy, paste, and personalise. Each one is designed to trigger engagement, build trust, and drive sales.
            </p>

            <div className="space-y-4">
              {CAPTION_TEMPLATES.map((ct) => (
                <div key={ct.name} className="bg-card p-5 rounded-xl border border-foreground/5 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-wider opacity-70">{ct.name}</p>
                      <p className="text-[8px] uppercase tracking-widest opacity-30 mt-0.5">{ct.category}</p>
                    </div>
                    <CopyableTemplate template={ct.template} />
                  </div>
                  <p className="text-[10px] leading-loose opacity-70 font-display italic">{ct.template}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DONE-FOR-YOU CONTENT ──────────────────── */}
          <div className="luxury-border p-10 rounded-3xl bg-card shadow-sm">
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">Ready-Made Assets</span>
            <h4 className="font-display text-2xl mt-3 mb-2 text-foreground/90">Done-For-You Content</h4>
            <p className="text-xs font-light opacity-70 mb-8 leading-relaxed">
              Story scripts, DM closing frameworks, and offer structures — pre-written so you never start from scratch.
            </p>

            <div className="space-y-4">
              <ExpandableSection title="Story Scripts" count={`${STORY_SCRIPTS.length} ready-to-post scripts`}>
                {STORY_SCRIPTS.map((script) => (
                  <div key={script.name} className="bg-muted p-5 rounded-xl border border-foreground/5">
                    <p className="text-[9px] font-bold uppercase tracking-wider opacity-70 mb-3">{script.name}</p>
                    <ul className="space-y-2">
                      {script.slides.map((slide, i) => (
                        <li key={i} className="text-[10px] leading-relaxed opacity-70 font-display italic pl-3 border-l-2 border-foreground/10">
                          {slide}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ExpandableSection>

              <ExpandableSection title="Offer Frameworks" count={`${OFFER_FRAMEWORKS.length} plug-and-play frameworks`}>
                {OFFER_FRAMEWORKS.map((fw) => (
                  <div key={fw.name} className="bg-muted p-5 rounded-xl border border-foreground/5">
                    <p className="text-[9px] font-bold uppercase tracking-wider opacity-70 mb-3">{fw.name}</p>
                    <p className="text-[10px] leading-loose opacity-70">{fw.framework}</p>
                  </div>
                ))}
              </ExpandableSection>
            </div>
          </div>

          {/* ── SECURE CHECKOUT ───────────────────────── */}
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
