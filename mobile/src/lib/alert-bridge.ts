export type BridgeAlertType = 'CRITICAL' | 'WARNING' | 'INFO';

export type BridgeAlert = {
  id: string;
  sensorId: string;
  sensorName: string;
  location: string;
  alertType: BridgeAlertType;
  message: string;
  triggeredAt: string;
};

type AlertsResponse = {
  ok: boolean;
  alerts: BridgeAlert[];
  serverTime: string;
};

export function getApiBaseUrl(): string | null {
  const url = process.env.EXPO_PUBLIC_API_URL?.trim();
  return url && url.length > 0 ? url.replace(/\/$/, '') : null;
}

export async function fetchAlertsSince(since: string | null): Promise<BridgeAlert[]> {
  const base = getApiBaseUrl();
  if (!base) {
    return [];
  }

  const query = since ? `?since=${encodeURIComponent(since)}` : '';
  const res = await fetch(`${base}/api/alerts${query}`, {
    headers: { Accept: 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const data = (await res.json()) as AlertsResponse;
  return data.alerts ?? [];
}
