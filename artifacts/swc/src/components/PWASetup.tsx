import { useRegisterSW } from "virtual:pwa-register/react";

export function PWASetup() {
  useRegisterSW({
    onRegistered(sw) {
      console.log("[SWC PWA] Service worker registered:", sw);
    },
    onNeedRefresh() {
      console.log("[SWC PWA] Update found — new version available");
    },
    onOfflineReady() {
      console.log("[SWC PWA] App is ready for offline use");
    },
    onRegisterError(err) {
      console.warn("[SWC PWA] Service worker registration failed:", err);
    },
  });
  return null;
}
