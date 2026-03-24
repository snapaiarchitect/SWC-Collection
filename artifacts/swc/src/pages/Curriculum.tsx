import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Lock } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { LessonView } from "@/components/LessonView";
import { curriculumModules } from "@/data/curriculumData";

const STORAGE_KEY = "swc_completed_modules";

const INCOME_STREAMS = [
  "Affiliate Marketing", "Master Resell Rights", "PLR Products", "Drop Shipping",
  "UGC Branding", "Amazon Influencer", "Etsy Digital Shop", "Pinterest Ads",
  "TikTok Shop", "Print on Demand", "Course Creation", "Coaching/Mentorship",
  "Website Flipping", "Airbnb Management", "E-com Reselling", "Facebook Ads",
  "Podcast Scaling", "Threads Mastery"
];

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return new Set<number>(parsed);
  } catch {}
  return new Set();
}

function saveCompleted(ids: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]));
}

export default function Curriculum() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted);

  useEffect(() => {
    saveCompleted(completed);
  }, [completed]);

  const markComplete = useCallback((id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const selectedModule = selectedId !== null
    ? curriculumModules.find((m) => m.id === selectedId) ?? null
    : null;

  const completedCount = completed.size;
  const totalCount = curriculumModules.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const handlePrev = () => {
    if (selectedId && selectedId > 1) setSelectedId(selectedId - 1);
  };
  const handleNext = () => {
    if (selectedId && selectedId < totalCount) setSelectedId(selectedId + 1);
  };

  return (
    <PageTransition>
      {/* ── STICKY PROGRESS BAR ─── */}
      <div className="sticky top-20 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-b border-foreground/5 px-8 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">
            Course Progress
          </span>
          <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: completedCount > 0 ? "#b47d2e" : undefined, opacity: completedCount > 0 ? 1 : 0.4 }}>
            {completedCount} / {totalCount} modules — {progressPct}%
          </span>
        </div>
        <div className="w-full h-1 bg-foreground/8 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progressPct}%`,
              background: completedCount > 0
                ? "linear-gradient(90deg, #C5A059, #b47d2e)"
                : "rgba(26,26,26,0.2)",
            }}
          />
        </div>
      </div>

      {/* ── LESSON VIEW or MODULE LIST ─── */}
      {selectedModule ? (
        <LessonView
          module={selectedModule}
          totalModules={totalCount}
          isCompleted={completed.has(selectedModule.id)}
          onMarkComplete={markComplete}
          onPrev={handlePrev}
          onNext={handleNext}
          onBack={() => setSelectedId(null)}
        />
      ) : (
        <section className="pt-10 pb-20 px-8">
          <Link
            href="/"
            className="text-[9px] uppercase tracking-widest mb-12 opacity-40 hover:opacity-100 flex items-center gap-2 w-fit transition-opacity"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Home
          </Link>

          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-foreground/90">The Roadmap</h2>
            <p className="uppercase tracking-[0.3em] text-[10px] font-semibold opacity-50">
              Everything you need to scale
            </p>
            {completedCount > 0 && (
              <p className="mt-3 text-[9px] uppercase tracking-widest font-bold" style={{ color: "#b47d2e" }}>
                {progressPct}% complete — keep going 🏆
              </p>
            )}
          </div>

          {/* 18 Streams */}
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

          {/* Module List */}
          <div className="relative">
            <div className="absolute -left-8 top-10 w-1 h-20 bg-foreground/10" />
            <h3 className="font-display text-2xl mb-4 border-b border-foreground/5 pb-5 text-foreground/90">
              Course Modules
            </h3>
            <p className="text-[9px] uppercase tracking-widest opacity-40 mb-8">
              Click any module to open the lesson
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 pl-2">
              {curriculumModules.map((module) => {
                const isDone = completed.has(module.id);
                return (
                  <button
                    key={module.id}
                    onClick={() => setSelectedId(module.id)}
                    className="flex items-center gap-5 py-5 border-b border-foreground/[0.04] transition-all duration-300 hover:pl-3 hover:bg-muted/50 text-left w-full group"
                  >
                    {/* Number or checkmark */}
                    <span className="w-6 shrink-0 flex items-center justify-center">
                      {isDone ? (
                        <svg
                          width="16" height="16" viewBox="0 0 16 16" fill="none"
                          className="shrink-0"
                        >
                          <circle cx="8" cy="8" r="7.5" stroke="#C5A059" strokeWidth="1" fill="rgba(197,160,89,0.08)" />
                          <path d="M5 8.5L7 10.5L11 6" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <span className="font-display text-sm italic font-bold opacity-20">
                          {String(module.id).padStart(2, "0")}
                        </span>
                      )}
                    </span>

                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[10px] uppercase tracking-widest font-semibold block transition-opacity"
                        style={{ opacity: isDone ? 0.45 : 0.8 }}
                      >
                        {module.title}
                      </span>
                      <span className="text-[8px] uppercase tracking-widest opacity-30 mt-0.5 block">
                        {module.duration}
                      </span>
                    </div>

                    <Lock
                      className="w-3 h-3 opacity-0 group-hover:opacity-20 transition-opacity shrink-0"
                    />
                  </button>
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
      )}
    </PageTransition>
  );
}
