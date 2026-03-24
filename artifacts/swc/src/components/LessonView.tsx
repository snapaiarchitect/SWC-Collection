import { useState } from "react";
import { ArrowLeft, ArrowRight, Play, CheckCircle, Circle, FileText, Zap, Clock, Check } from "lucide-react";
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

  const toggleCheck = (index: number) => {
    const next = [...checkedItems];
    next[index] = !next[index];
    setCheckedItems(next);
  };

  const allChecked = checkedItems.every(Boolean);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* Back button */}
      <div className="px-8 pt-10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[9px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Roadmap
        </button>
      </div>

      {/* Module badge */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-xs italic opacity-20">
            {String(module.id).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest opacity-50">
            <Clock className="w-3 h-3" />
            {module.duration}
          </div>
          {isCompleted && (
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-widest font-bold text-amber-600">
              <Check className="w-3 h-3" />
              Completed
            </span>
          )}
        </div>
        <h1 className="font-display text-3xl md:text-4xl italic mt-2 mb-1 text-foreground/90 leading-tight">
          {module.title}
        </h1>
        <div className="w-12 h-[1px] bg-foreground/20 mt-4" />
      </div>

      {/* 16:9 Video Placeholder */}
      <div className="px-8 py-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-foreground/5 border border-foreground/10 shadow-lg group cursor-pointer"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />

          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Module title watermark */}
          <div className="absolute inset-0 flex items-end p-6">
            <p
              className="font-display text-2xl md:text-3xl italic text-foreground/10 leading-tight"
              style={{ fontFamily: "'Bodoni Moda', serif" }}
            >
              {module.title}
            </p>
          </div>

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-background fill-background ml-1" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <Clock className="w-3 h-3 opacity-60" />
            <span className="text-[9px] uppercase tracking-widest font-bold opacity-60">{module.duration}</span>
          </div>
        </div>
      </div>

      {/* Main content: description + sidebar */}
      <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT: Description + Action Items */}
        <div className="md:col-span-2 space-y-8">
          {/* Mastery Description */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 mb-4">What You'll Master</p>
            <p className="text-sm font-light leading-loose opacity-80">{module.mastery}</p>
          </div>

          {/* Action Items Checklist */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Zap className="w-3.5 h-3.5 opacity-50" />
              <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Now Do This</p>
            </div>
            <div className="space-y-3">
              {module.actionItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className="w-full flex items-start gap-4 text-left group p-4 rounded-xl border transition-all duration-200 hover:border-foreground/20"
                  style={{
                    borderColor: checkedItems[idx] ? "rgba(180,140,60,0.3)" : "rgba(26,26,26,0.08)",
                    backgroundColor: checkedItems[idx] ? "rgba(195,160,89,0.06)" : "transparent",
                  }}
                >
                  <div className="shrink-0 mt-0.5">
                    {checkedItems[idx] ? (
                      <CheckCircle className="w-4 h-4 text-amber-600" />
                    ) : (
                      <Circle className="w-4 h-4 opacity-30 group-hover:opacity-60 transition-opacity" />
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

        {/* RIGHT: Resources sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-3.5 h-3.5 opacity-50" />
                <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Resources</p>
              </div>
              <div className="space-y-3">
                {module.resources.map((resource, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl border border-foreground/8 bg-muted hover:border-foreground/20 transition-colors cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-foreground/15 transition-colors">
                      <FileText className="w-3.5 h-3.5 opacity-60" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold leading-snug opacity-80">{resource}</p>
                      <p className="text-[8px] uppercase tracking-widest opacity-30 mt-0.5">Download PDF</p>
                    </div>
                  </div>
                ))}
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
      </div>

      {/* Previous / Next Navigation */}
      <div className="px-8 py-8 mt-4 border-t border-foreground/5 flex justify-between items-center gap-4">
        <button
          onClick={onPrev}
          disabled={module.id === 1}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-opacity disabled:opacity-20 hover:opacity-100 opacity-50"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Previous
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
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold transition-opacity disabled:opacity-20 hover:opacity-100 opacity-50"
        >
          Next
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
