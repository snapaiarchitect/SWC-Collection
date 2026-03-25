import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  const isIOS =
    typeof navigator !== "undefined" &&
    /ipad|iphone|ipod/i.test(navigator.userAgent) &&
    !("MSStream" in window);

  const isInStandaloneMode =
    typeof window !== "undefined" &&
    ("standalone" in window.navigator
      ? (window.navigator as { standalone?: boolean }).standalone === true
      : window.matchMedia("(display-mode: standalone)").matches);

  useEffect(() => {
    if (isInStandaloneMode) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setIsInstalled(true));

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, [isInStandaloneMode]);

  const promptInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const dismiss = () => setDismissed(true);

  const canInstall = !dismissed && !isInstalled && !!deferredPrompt;
  const showIOSHint = !dismissed && !isInstalled && isIOS && !deferredPrompt;

  return { canInstall, showIOSHint, promptInstall, dismiss, isInstalled };
}
