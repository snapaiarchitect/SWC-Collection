import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  import("virtual:pwa-register")
    .then(({ registerSW }) => {
      registerSW({
        onRegistered(sw) {
          console.log("[SWC PWA] Service worker registered:", sw);
        },
        onRegisterError(err) {
          console.warn("[SWC PWA] Service worker registration failed:", err);
        },
      });
    })
    .catch(() => {
    });
}
