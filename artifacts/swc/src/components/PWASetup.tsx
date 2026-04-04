import { useRegisterSW } from 'virtual:pwa-register/react';

export function PWASetup() {
  useRegisterSW({
    onRegistered(r) {
      console.log('SW Registered:', r);
    },
    onNeedRefresh() {
      console.log('New version available, please refresh.');
    },
    onOfflineReady() {
      console.log('Offline ready.');
    },
    onRegisterError(error) {
      console.log('SW registration error:', error);
    },
  });

  return null; // This component doesn't render anything
}
