import { useState, useEffect } from "react";
import {
  ArrowLeft, ArrowRight, Play, CheckCircle, Circle,
  FileText, LayoutTemplate, CheckSquare, BookOpen,
  Zap, Clock, Check,
} from "lucide-react";
import type { CurriculumModule } from "@/data/curriculumData";

interface LessonViewProps {
  module: CurriculumModule;
  totalModules: number;
  isCompleted: boolean;
  onMarkComplete: (id: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onBack: () => void;
}

type ResourceType = "checklist" | "template" | "guide" | "pdf";

function detectResourceType(name: string): ResourceType {
  const lower = name.toLowerCase();
  if (lower.includes("checklist")) return "checklist";
  if (
    lower.includes("template") ||
    lower.includes("canva") ||
    lower.includes("swipe file") ||
    lower.includes("script") ||
    lower.includes("sequence") ||
    lower.includes("matrix")
  )
    return "template";
  if (
    lower.includes("guide") ||
    lower.includes("blueprint") ||
    lower.includes("playbook") ||
    lower.includes("roadmap")
  )
    return "guide";
  return "pdf";
}

function ResourceIcon({ type }: { type: ResourceType }) {
  const cls = "w-3.5 h-3.5 opacity-60";
  switch (type) {
    case "checklist":
      return <CheckSquare className={cls} />;
    case "template":
      return <LayoutTemplate className={cls} />;
    case "guide":
      return <BookOpen className={cls} />;
    default:
      return <FileText className={cls} />;
  }
}

const TYPE_LABELS: Record<ResourceType, string> = {
  checklist: "Action Checklist",
  template: "Template / Canva",
  guide: "Strategy Guide",
  pdf: "Download PDF",
};

export function LessonView({
  module,
  totalModules,
  isCompleted,
  onMarkComplete,
  onPrev,
  onNext,
  onBack,
}: LessonViewProps) {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    setCheckedItems([false, false, false]);
  }, [module.id]);

  const toggleCheck = (index: number) => {
    const next = [...checkedItems];
    next[index] = !next[index];
    setCheckedItems(next);
  };

  const allChecked = checkedItems.every(Boolean);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Back button */}
      <div className="px-4 md:px-8 pt-10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity min-h-[44px]"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Curriculum
        </button>
      </div>

      {/* Module badge */}
      <div className="px-4 md:px-8 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs italic opacity-20">
            {String(module.id).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest opacity-50">
            <Clock className="w-3 h-3" />
            {module.duration}
          </div>
          {isCompleted && (
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-bold" style={{ color: "#b47d2e" }}>
              <Check className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>
        <h1
          className="font-display text-3xl md:text-4xl italic mt-2 mb-1 text-foreground/90 leading-tight"
          style={{ fontFamily: "'Bodoni Moda', serif" }}
        >
          {module.title}
        </h1>
        <div className="w-12 h-[1px] bg-foreground/20 mt-4" />
      </div>

      {/* 16:9 Video Placeholder */}
      <div className="px-4 md:px-8 py-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg group cursor-pointer"
          style={{ aspectRatio: "16/9" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 flex items-end p-6">
            <p
              className="font-display text-2xl md:text-3xl italic text-foreground/10 leading-tight"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {module.title}
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-background fill-background ml-1" />
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Clock className="w-3 h-3 opacity-60" />
            <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">{module.duration}</span>
          </div>
        </div>
      </div>

      {/* TL;DR Block */}
      <div className="px-4 md:px-8 py-4">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "rgba(197,160,89,0.06)", borderColor: "rgba(197,160,89,0.2)" }}
        >
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: "#b47d2e" }}>
            TL;DR
          </p>
          <p className="text-sm font-light leading-relaxed opacity-80">{module.tldr}</p>
        </div>
      </div>

      {/* Main content: description + sidebar — flex on mobile, grid on md+ */}
      <div className="px-4 md:px-8 py-6 flex flex-col md:grid md:grid-cols-3 gap-8">

        {/* RIGHT: Resources sidebar — order-first on mobile, order-last on desktop */}
        <div className="order-first md:order-last md:col-span-1">
          <div className="md:sticky md:top-24 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-3.5 h-3.5 opacity-50" />
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">
                  Resources for this lesson
                </p>
              </div>
              <div className="space-y-3">
                {module.resources.map((resource, idx) => {
                  const type = detectResourceType(resource);
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl border border-foreground/8 bg-muted hover:border-foreground/20 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-foreground/15 transition-colors">
                        <ResourceIcon type={type} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold leading-snug opacity-80">{resource}</p>
                        <p className="text-[8px] uppercase tracking-widest opacity-30 mt-0.5">
                          {TYPE_LABELS[type]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Module progress indicator */}
            <div className="mt-6 p-4 rounded-xl border border-foreground/8 bg-muted">
              <p className="text-[9px] uppercase tracking-widest font-bold opacity-30 mb-2">Module</p>
              <p className="text-[10px] font-light opacity-60">
                <span className="font-bold opacity-100">{module.id}</span> of {totalModules}
              </p>
            </div>
          </div>
        </div>

        {/* LEFT: Description + Action Items — order-last on mobile, order-first on desktop */}
        <div className="order-last md:order-first md:col-span-2 space-y-8">
          {/* Mastery Description */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 mb-4">What You'll Master</p>
            <p className="text-sm font-light leading-loose opacity-80">{module.mastery}</p>
          </div>

          {/* Action Items Checklist */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-3.5 h-3.5 opacity-50" />
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Action Checklist</p>
            </div>
            <div className="space-y-3">
              {module.actionItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className="w-full flex items-start gap-4 text-left group p-4 rounded-xl border transition-all duration-200 hover:border-foreground/20 min-h-[56px]"
                  style={{
                    borderColor: checkedItems[idx] ? "rgba(180,140,60,0.3)" : "rgba(26,26,26,0.08)",
                    backgroundColor: checkedItems[idx] ? "rgba(195,160,89,0.06)" : "transparent",
                  }}
                >
                  <div className="shrink-0 mt-0.5">
                    {checkedItems[idx] ? (
                      <CheckCircle className="w-5 h-5" style={{ color: "#b47d2e" }} />
                    ) : (
                      <Circle className="w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" />
                    )}
                  </div>
                  <span
                    className="text-xs font-light leading-relaxed transition-opacity"
                    style={{ opacity: checkedItems[idx] ? 0.5 : 0.8, textDecoration: checkedItems[idx] ? "line-through" : "none" }}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Mark Complete */}
            <div className="mt-6">
              {!isCompleted ? (
                <button
                  onClick={() => {
                    if (allChecked) onMarkComplete(module.id);
                  }}
                  disabled={!allChecked}
                  className="w-full py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
                  style={{
                    backgroundColor: allChecked ? "#1A1A1A" : "transparent",
                    color: allChecked ? "#F5F2ED" : "#1A1A1A",
                    border: "1px solid",
                    borderColor: allChecked ? "#1A1A1A" : "rgba(26,26,26,0.2)",
                    opacity: allChecked ? 1 : 0.5,
                    cursor: allChecked ? "pointer" : "not-allowed",
                  }}
                >
                  {allChecked ? "✓ Mark Lesson Complete" : "Complete all action items to finish"}
                </button>
              ) : (
                <div
                  className="w-full py-4 text-[10px] uppercase tracking-widest font-bold rounded-sm text-center"
                  style={{ backgroundColor: "rgba(195,160,89,0.12)", color: "#b47d2e", border: "1px solid rgba(195,160,89,0.3)" }}
                >
                  ✓ Lesson Completed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Previous / Next Navigation */}
      <div className="px-4 md:px-8 py-8 mt-4 border-t border-foreground/5 flex justify-between items-center gap-4">
        <button
          onClick={onPrev}
          disabled={module.id === 1}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-opacity disabled:opacity-20 hover:opacity-100 opacity-50 min-h-[44px] min-w-[44px] px-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex flex-col items-center gap-1">
          <div className="flex gap-1">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const dotId = module.id + offset;
              if (dotId < 1 || dotId > totalModules) return <span key={offset} className="w-1.5" />;
              return (
                <div
                  key={offset}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: offset === 0 ? "20px" : "6px",
                    backgroundColor: offset === 0 ? "#1A1A1A" : "rgba(26,26,26,0.15)",
                  }}
                />
              );
            })}
          </div>
          <span className="text-[8px] uppercase tracking-widest opacity-30">{module.id} / {totalModules}</span>
        </div>

        <button
          onClick={onNext}
          disabled={module.id === totalModules}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-opacity disabled:opacity-20 hover:opacity-100 opacity-50 min-h-[44px] min-w-[44px] px-2"
        >
          <span className="hidden sm:inline">Next</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
