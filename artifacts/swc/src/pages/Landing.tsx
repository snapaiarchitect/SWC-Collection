import { useState } from "react";

type LandingPage = "home" | "curriculum" | "vault";

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

const INCOME_STREAMS = [
  "Affiliate Marketing", "Master Resell Rights", "PLR Products", "Drop Shipping",
  "UGC Branding", "Amazon Influencer", "Etsy Digital Shop", "Pinterest Ads",
  "TikTok Shop", "Print on Demand", "Course Creation", "Coaching/Mentorship",
  "Website Flipping", "Airbnb Management", "E-com Reselling", "Facebook Ads",
  "Podcast Scaling", "Threads Mastery"
];

const PILLS_PREVIEW = [
  "Affiliate Marketing", "MRR / Resell", "PLR Vault", "Drop Shipping",
  "UGC Branding", "Amazon Influencer", "Digital Etsy", "TikTok Shop"
];

function navigateSmooth(fn: () => void) {
  window.scrollTo({ top: 0, behavior: "smooth" });
  fn();
}

export default function Landing() {
  const [page, setPage] = useState<LandingPage>("home");

  const go = (p: LandingPage) => navigateSmooth(() => setPage(p));

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#F5F2ED", color: "#1A1A1A" }}>

      {/* ── HOME ─────────────────────────────────── */}
      {page === "home" && (
        <>
          {/* Hero */}
          <section style={{ paddingTop: "3rem", paddingBottom: "4rem", paddingLeft: "2rem", paddingRight: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "9px", letterSpacing: "0.4em", marginBottom: "1rem", opacity: 0.5, textTransform: "uppercase" }}>
              Master Resell Rights Included
            </p>
            <h1 style={{
              fontFamily: "'Bodoni Moda', serif",
              fontSize: "clamp(2rem, 6vw, 3.75rem)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              fontWeight: 700
            }}>
              THE NEW <br />
              <span style={{ fontStyle: "italic", fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: 400 }}>Collection</span>
            </h1>

            {/* Video placeholder — faithful to original */}
            <div style={{
              position: "relative",
              margin: "3rem auto",
              border: "1px solid rgba(26,26,26,0.1)",
              borderRadius: "1rem",
              overflow: "hidden",
              backgroundColor: "#f3f4f6",
              aspectRatio: "16/9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "560px"
            }}>
              <div style={{ position: "absolute", inset: 0, opacity: 0.1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg style={{ width: "8rem", height: "8rem" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </div>
              <span style={{
                fontFamily: "'Bodoni Moda', serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                opacity: 0.3,
                padding: "0 1.5rem",
                textAlign: "center"
              }}>
                Your Gateway to Digital Wealth
              </span>
            </div>

            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, fontWeight: 300, marginBottom: "2.5rem", maxWidth: "28rem", margin: "0 auto 2.5rem", opacity: 0.8 }}>
              A comprehensive system built for the modern digital entrepreneur. 56+ modules, 18 income streams, and a complete library of plug-and-play marketing assets.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
              <button
                onClick={() => go("vault")}
                style={{
                  backgroundColor: "#1A1A1A",
                  color: "#fff",
                  padding: "1.25rem 2rem",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "320px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
              >
                Explore The Vault
              </button>
              <button
                onClick={() => go("curriculum")}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  opacity: 0.5,
                  cursor: "pointer",
                  color: "inherit"
                }}
              >
                Full Course Details ↓
              </button>
            </div>
          </section>

          {/* 18 Streams */}
          <section style={{ padding: "3rem 2rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.25rem", marginBottom: "2rem", fontStyle: "italic", fontWeight: 400 }}>
              One Course. 18 Income Streams.
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", maxWidth: "480px", margin: "0 auto" }}>
              {PILLS_PREVIEW.map(s => (
                <span key={s} style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(26,26,26,0.05)",
                  padding: "8px 16px",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  borderRadius: "99px",
                  textTransform: "uppercase"
                }}>{s}</span>
              ))}
            </div>
            <button
              onClick={() => go("curriculum")}
              style={{ marginTop: "2rem", background: "none", border: "none", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.4, cursor: "pointer", color: "inherit" }}
            >
              See full list of 18 →
            </button>
          </section>

          {/* Testimonials */}
          <section style={{ padding: "4rem 2rem", backgroundColor: "#f9f9f9", borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.875rem", textAlign: "center", marginBottom: "3rem", fontStyle: "italic", fontWeight: 400 }}>
              Voices of Success
            </h3>
            <div style={{ maxWidth: "480px", margin: "0 auto" }}>
              <div style={{ backgroundColor: "#fff", padding: "1.5rem", border: "1px solid rgba(26,26,26,0.1)", borderRadius: "0.75rem" }}>
                <p style={{ fontSize: "12px", fontStyle: "italic", fontWeight: 300, lineHeight: 2, marginBottom: "1rem" }}>
                  "The plug-and-play stories alone paid for the course in my first week. I didn't have to guess what to post—I just followed the template."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "#e5e7eb" }} />
                  <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Sarah M. <span style={{ opacity: 0.3, fontWeight: 300, marginLeft: "0.5rem" }}>Digital Creator</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginBottom: "1rem", fontStyle: "italic", fontWeight: 400 }}>
              Have questions?
            </h3>
            <p style={{ fontSize: "12px", fontWeight: 300, marginBottom: "1.5rem", opacity: 0.6 }}>
              Our dedicated support team is available 24/7 to help you transition into the digital space.
            </p>
            <a
              href="mailto:support@swccollection.com"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.8, color: "inherit", textDecoration: "none" }}
            >
              <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@swccollection.com
            </a>
          </section>

          {/* Dark CTA */}
          <section style={{ padding: "4rem 2rem", textAlign: "center", backgroundColor: "#1A1A1A", color: "#fff" }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.875rem", marginBottom: "1.5rem", fontWeight: 400 }}>
              The time is <span style={{ fontStyle: "italic" }}>now.</span>
            </h2>
            <p style={{ fontSize: "12px", fontWeight: 300, marginBottom: "2rem", opacity: 0.6 }}>
              Join 5,000+ members building their digital empires.
            </p>
            <button
              onClick={() => go("vault")}
              style={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#1A1A1A",
                padding: "1.25rem",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                border: "none",
                cursor: "pointer"
              }}
            >
              Secure Access — $497
            </button>
          </section>
        </>
      )}

      {/* ── CURRICULUM ───────────────────────────── */}
      {page === "curriculum" && (
        <section style={{ padding: "3rem 2rem 5rem" }}>
          <button
            onClick={() => go("home")}
            style={{ background: "none", border: "none", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.4, cursor: "pointer", marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "inherit" }}
          >
            ← Back to Home
          </button>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: "0.75rem", fontStyle: "italic", fontWeight: 400 }}>
              The Roadmap
            </h2>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600, opacity: 0.6 }}>
              Everything you need to scale
            </p>
          </div>

          {/* 18 Streams */}
          <div style={{ marginBottom: "5rem" }}>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.05)", fontWeight: 400 }}>
              The 18 Income Streams
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem 3rem" }}>
              {INCOME_STREAMS.map(s => (
                <div key={s} style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.2)", flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Modules */}
          <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginBottom: "2rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(0,0,0,0.05)", fontWeight: 400 }}>
            Course Modules
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 0 }}>
            {MODULES.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 0.5rem",
                  borderBottom: "1px solid rgba(0,0,0,0.03)",
                  transition: "padding-left 0.3s"
                }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "1rem")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0.5rem")}
              >
                <span style={{ fontSize: "10px", fontWeight: 700, opacity: 0.2, minWidth: "1.5rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, opacity: 0.8 }}>
                  {m}
                </span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "5rem", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "0.75rem", textAlign: "center", border: "1px solid rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginBottom: "1rem", fontStyle: "italic", fontWeight: 400 }}>
              Ready to start?
            </h3>
            <button
              onClick={() => go("vault")}
              style={{
                backgroundColor: "#1A1A1A",
                color: "#fff",
                padding: "1rem 2.5rem",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                fontWeight: 700,
                border: "none",
                cursor: "pointer"
              }}
            >
              Get Instant Access
            </button>
          </div>
        </section>
      )}

      {/* ── VAULT ────────────────────────────────── */}
      {page === "vault" && (
        <section style={{ padding: "3rem 2rem 5rem" }}>
          <button
            onClick={() => go("home")}
            style={{ background: "none", border: "none", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.4, cursor: "pointer", marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "inherit" }}
          >
            ← Back to Home
          </button>

          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "clamp(2rem, 5vw, 2.5rem)", marginBottom: "0.75rem", fontStyle: "italic", fontWeight: 400 }}>
              The Resource Vault
            </h2>
            <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600, opacity: 0.6 }}>
              Your Plug-and-Play Assets
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "520px", margin: "0 auto" }}>
            {/* Visual Assets */}
            <div style={{ border: "1px solid rgba(26,26,26,0.1)", padding: "2rem", borderRadius: "1rem", backgroundColor: "#fff" }}>
              <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.4 }}>Visual Assets</span>
              <h4 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "0.75rem", fontWeight: 400 }}>
                Instagram Reel Covers
              </h4>
              <p style={{ fontSize: "12px", fontWeight: 300, lineHeight: 1.7, opacity: 0.7, marginBottom: "1.5rem" }}>
                30+ Luxury, minimalist reel covers designed in Canva. Just swap the text and upload.
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["#f3f4f6", "#e5e7eb", "#d1d5db"].map((bg, i) => (
                  <div key={i} style={{ height: "3rem", width: "2rem", backgroundColor: bg, border: "1px solid rgba(26,26,26,0.1)" }} />
                ))}
              </div>
            </div>

            {/* Caption Templates */}
            <div style={{ border: "1px solid rgba(26,26,26,0.1)", padding: "2rem", borderRadius: "1rem", backgroundColor: "#f9f9f9" }}>
              <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.4 }}>Plug & Play Copy</span>
              <h4 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "0.75rem", fontStyle: "italic", fontWeight: 400 }}>
                Caption Templates
              </h4>
              <p style={{ fontSize: "12px", fontWeight: 300, opacity: 0.7, marginBottom: "1.5rem" }}>
                High-conversion captions for when you're stuck. Just copy and paste.
              </p>
              <div style={{ backgroundColor: "#fff", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase", opacity: 0.4 }}>
                  Template: The Result Hook
                </p>
                <p style={{ fontSize: "10px", lineHeight: 1.8, opacity: 0.8, fontStyle: "italic" }}>
                  "I used to think [Pain Point] was just my reality. Then I discovered [SWC 2.0 Method]. Fast forward [Time] and I've [Specific Result]. Want the roadmap? Link in bio."
                </p>
                <button style={{ marginTop: "1rem", background: "none", border: "none", fontSize: "9px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: "1px solid #1A1A1A", cursor: "pointer", padding: 0, color: "inherit" }}>
                  Copy Template
                </button>
              </div>
            </div>

            {/* Checkout */}
            <div style={{ backgroundColor: "#fff", border: "1px solid rgba(26,26,26,0.1)", padding: "2rem", borderRadius: "1rem", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem", opacity: 0.3 }}>
                <svg style={{ width: "3rem", height: "3rem" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.5 1.1 2.5 2.5S13.4 12 12 12s-2.5-1.1-2.5-2.5S10.6 7 12 7zm0 13.93c-3.73-1.12-6.5-5.06-6.5-9.43V6.26l6.5-2.89 6.5 2.89V11.5c0 4.37-2.77 8.31-6.5 9.43z" />
                </svg>
              </div>
              <h4 style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "1.5rem", marginBottom: "0.5rem", fontStyle: "italic", fontWeight: 400 }}>
                Secure Enrollment
              </h4>
              <p style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700, opacity: 0.3, marginBottom: "2rem" }}>
                SSL Secured | Instant Access
              </p>
              <div style={{ maxWidth: "280px", margin: "0 auto 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "0.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <span>SWC 2.0 Collection</span>
                  <span style={{ fontWeight: 700 }}>$497.00</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", padding: "0.5rem 0" }}>
                  <span>Lifetime Updates</span>
                  <span style={{ color: "#16a34a", fontWeight: 700, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em" }}>Included</span>
                </div>
              </div>
              <button style={{
                width: "100%",
                backgroundColor: "#1A1A1A",
                color: "#fff",
                padding: "1.25rem",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}>
                PAY WITH STRIPE/CREDIT CARD
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: "#f9f9f9", padding: "3rem 2rem", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <p style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic", fontSize: "1.125rem", marginBottom: "0.5rem" }}>SWC 2.0</p>
        <p style={{ fontSize: "8px", textTransform: "uppercase", letterSpacing: "0.4em", opacity: 0.4, marginBottom: "1.5rem" }}>Success with Canva 2026</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.3 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>MRR License</a>
        </div>
      </footer>
    </div>
  );
}
