import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { X, Share, Download } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export function InstallBanner() {
  const { canInstall, showIOSHint, promptInstall, dismiss } = useInstallPrompt();

  if (!canInstall && !showIOSHint) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] animate-in slide-in-from-bottom-2 duration-500"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div
        className="flex items-center gap-4 px-5 py-4 border-t"
        style={{ backgroundColor: "#1A1A1A", borderColor: "rgba(197,160,89,0.2)" }}
      >
        <img
          src={`${BASE}icons/icon-512.png`}
          alt="SWC 2.0"
          className="w-10 h-10 rounded-xl shrink-0 object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        <div className="flex-1 min-w-0">
          <p
            className="text-[10px] uppercase tracking-widest font-bold leading-snug"
            style={{ color: "#C5A059" }}
          >
            SWC 2.0
          </p>
          {canInstall ? (
            <p className="text-[10px] text-white/60 font-light leading-snug mt-0.5 truncate">
              Access your course offline, instantly
            </p>
          ) : (
            <p className="text-[10px] text-white/60 font-light leading-snug mt-0.5">
              <Share className="w-2.5 h-2.5 inline mr-1 mb-0.5" />
              Tap Share → Add to Home Screen
            </p>
          )}
        </div>

        {canInstall && (
          <button
            onClick={promptInstall}
            className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-sm text-[9px] uppercase tracking-widest font-bold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#C5A059", color: "#1A1A1A" }}
          >
            <Download className="w-3 h-3" />
            Install
          </button>
        )}

        <button
          onClick={dismiss}
          className="shrink-0 p-1.5 rounded-full transition-opacity hover:opacity-80"
          style={{ color: "rgba(255,255,255,0.4)" }}
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
