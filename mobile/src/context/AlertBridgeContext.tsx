import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { getApiBaseUrl } from '../lib/alert-bridge';

type AlertBridgeContextValue = {
  pushEnabled: boolean;
  setPushEnabled: (value: boolean) => void;
  hasApiUrl: boolean;
};

const AlertBridgeContext = createContext<AlertBridgeContextValue | null>(null);

export function AlertBridgeProvider({ children }: { children: ReactNode }) {
  const [pushEnabled, setPushEnabled] = useState(true);
  const hasApiUrl = Boolean(getApiBaseUrl());

  const value = useMemo(
    () => ({ pushEnabled, setPushEnabled, hasApiUrl }),
    [pushEnabled, hasApiUrl],
  );

  return <AlertBridgeContext.Provider value={value}>{children}</AlertBridgeContext.Provider>;
}

export function useAlertBridgeSettings() {
  const ctx = useContext(AlertBridgeContext);
  if (!ctx) {
    throw new Error('useAlertBridgeSettings must be used within AlertBridgeProvider');
  }
  return ctx;
}
