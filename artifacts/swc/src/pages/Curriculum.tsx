import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Lock, Award, Download } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { LessonView } from "@/components/LessonView";
import { ModuleListSkeleton } from "@/components/ModuleListSkeleton";
import { curriculumModules, phases } from "@/data/curriculumData";
import type { PhaseId } from "@/data/curriculumData";
import { useProgress } from "@/hooks/useProgress";
import confetti from "canvas-confetti";

const INCOME_STREAMS = [
  "Affiliate Marketing", "Master Resell Rights", "PLR Products", "Drop Shipping",
  "UGC Branding", "Amazon Influencer", "Etsy Digital Shop", "Pinterest Ads",
  "TikTok Shop", "Print on Demand", "Course Creation", "Coaching/Mentorship",
  "Website Flipping", "Airbnb Management", "E-com Reselling", "Facebook Ads",
  "Podcast Scaling", "Threads Mastery"
];

export default function Curriculum() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [lastViewedId, setLastViewedId] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState<PhaseId | "all">("all");
  const [confettiFired, setConfettiFired] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const {
    isComplete,
    markComplete,
    isPhaseComplete,
    completedCount,
    totalCount,
    progressPct,
  } = useProgress();

  useEffect(() => {
    const t = setTimeout(() => setShowSkeleton(false), 1);
    return () => clearTimeout(t);
  }, []);

  const selectedModule = selectedId !== null
    ? curriculumModules.find((m) => m.id === selectedId) ?? null
    : null;

  const handleOpenLesson = (id: number) => {
    setSelectedId(id);
    setLastViewedId(id);
  };

  const handlePrev = () => {
    if (selectedId && selectedId > 1) {
      const newId = selectedId - 1;
      setSelectedId(newId);
      setLastViewedId(newId);
    }
  };
  const handleNext = () => {
    if (selectedId && selectedId < totalCount) {
      const newId = selectedId + 1;
      setSelectedId(newId);
      setLastViewedId(newId);
    }
  };

  const handlePhaseChange = (phase: PhaseId | "all") => {
    setShowSkeleton(true);
    setTimeout(() => {
      setActivePhase(phase);
      setTimeout(() => setShowSkeleton(false), 1);
    }, 180);
  };

  const displayedModules = activePhase === "all"
    ? curriculumModules
    : curriculumModules.filter((m) => m.phase === activePhase);

  useEffect(() => {
    if (completedCount === totalCount && totalCount > 0 && !confettiFired) {
      setConfettiFired(true);
      const duration = 3000;
      const end = Date.now() + duration;
      const colors = ["#C5A059", "#b47d2e", "#F5F2ED", "#1A1A1A"];
      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.65 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.65 },
          colors,
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [completedCount, totalCount, confettiFired]);

  return (
    <PageTransition>
      {/* ── STICKY PROGRESS BAR ─── */}
      <div className="sticky top-20 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-b border-foreground/5 px-8 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] uppercase tracking-widest font-bold opacity-40">
            Course Progress
          </span>
          <span
            className="text-[9px] uppercase tracking-widest font-bold"
            style={{ color: completedCount > 0 ? "#b47d2e" : undefined, opacity: completedCount > 0 ? 1 : 0.4 }}
          >
            {completedCount} / {totalCount} — {progressPct}% Complete
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
          isCompleted={isComplete(selectedModule.id)}
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

          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4 italic text-foreground/90">The Roadmap</h2>
            <p className="uppercase tracking-[0.3em] text-[10px] font-semibold opacity-50">
              Everything you need to scale
            </p>
            {completedCount > 0 && completedCount < totalCount && (
              <p className="mt-3 text-[9px] uppercase tracking-widest font-bold" style={{ color: "#b47d2e" }}>
                {progressPct}% complete — keep going
              </p>
            )}
            {completedCount === totalCount && totalCount > 0 && (
              <div className="mt-6 flex flex-col items-center gap-4">
                <p className="text-[9px] uppercase tracking-widest font-bold" style={{ color: "#b47d2e" }}>
                  🏆 Course Complete — You did it!
                </p>
                <a
                  href="data:text/plain;charset=utf-8,SWC%202.0%20%7C%20Certificate%20of%20Completion%0A%0AThis%20certifies%20that%20you%20have%20successfully%20completed%20all%2056%20modules%20of%20the%20SWC%202.0%20Masterclass.%0A%0ACongratulations%20on%20your%20achievement."
                  download="SWC-2.0-Certificate.txt"
                  className="flex items-center gap-2 px-8 py-3 text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300 hover:opacity-80"
                  style={{
                    backgroundColor: "#C5A059",
                    color: "#F5F2ED",
                    textDecoration: "none",
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Certificate
                </a>
              </div>
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

            {/* Phase Navigation */}
            <div className="mb-8 -mx-1 flex flex-wrap gap-2">
              <button
                onClick={() => handlePhaseChange("all")}
                className="px-4 py-2 text-[9px] uppercase tracking-widest font-bold rounded-sm transition-all duration-200"
                style={{
                  backgroundColor: activePhase === "all" ? "#1A1A1A" : "transparent",
                  color: activePhase === "all" ? "#F5F2ED" : "#1A1A1A",
                  border: "1px solid",
                  borderColor: activePhase === "all" ? "#1A1A1A" : "rgba(26,26,26,0.15)",
                  opacity: activePhase === "all" ? 1 : 0.6,
                }}
              >
                All
              </button>
              {phases.map((phase) => {
                const mastered = isPhaseComplete(phase.id);
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => handlePhaseChange(phase.id)}
                    className="flex items-center gap-1.5 px-4 py-2 text-[9px] uppercase tracking-widest font-bold rounded-sm transition-all duration-200"
                    style={{
                      backgroundColor: isActive ? "#1A1A1A" : "transparent",
                      color: isActive ? "#F5F2ED" : "#1A1A1A",
                      border: "1px solid",
                      borderColor: mastered
                        ? "rgba(197,160,89,0.5)"
                        : isActive
                        ? "#1A1A1A"
                        : "rgba(26,26,26,0.15)",
                      opacity: isActive ? 1 : 0.6,
                    }}
                  >
                    {phase.label}
                    {mastered && (
                      <span
                        className="flex items-center gap-0.5 text-[8px] font-bold"
                        style={{ color: isActive ? "#C5A059" : "#b47d2e" }}
                      >
                        <Award className="w-3 h-3" />
                        Phase Mastered
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Module grid — skeleton or real list */}
            {showSkeleton ? (
              <ModuleListSkeleton />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 pl-2">
                {displayedModules.map((module) => {
                  const isDone = isComplete(module.id);
                  const isLastViewed = !isDone && module.id === lastViewedId;

                  return (
                    <button
                      key={module.id}
                      onClick={() => handleOpenLesson(module.id)}
                      className="flex items-center gap-5 py-5 border-b border-foreground/[0.04] transition-all duration-300 hover:pl-3 hover:bg-muted/50 text-left w-full group relative"
                      style={isLastViewed ? {
                        borderLeft: "2px solid rgba(197,160,89,0.6)",
                        paddingLeft: "12px",
                      } : undefined}
                    >
                      {/* Pulsing "Now Playing" dot for last-viewed modules */}
                      {isLastViewed && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                          style={{ backgroundColor: "#C5A059" }}
                          aria-hidden="true"
                        />
                      )}

                      {/* Number, checkmark, or now-playing indicator */}
                      <span className="w-6 shrink-0 flex items-center justify-center">
                        {isDone ? (
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            className="shrink-0"
                          >
                            <circle cx="8" cy="8" r="7.5" stroke="#C5A059" strokeWidth="1" fill="rgba(197,160,89,0.08)" />
                            <path d="M5 8.5L7 10.5L11 6" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : isLastViewed ? (
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: "#C5A059" }}
                          />
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
                        {isLastViewed && (
                          <span
                            className="text-[8px] uppercase tracking-[0.2em] font-bold mt-1 block"
                            style={{ color: "#b47d2e" }}
                          >
                            ▶ Resume
                          </span>
                        )}
                      </div>

                      <Lock
                        className="w-3 h-3 opacity-0 group-hover:opacity-20 transition-opacity shrink-0"
                      />
                    </button>
                  );
                })}
              </div>
            )}
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
