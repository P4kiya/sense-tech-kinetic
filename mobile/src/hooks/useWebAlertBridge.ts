import { useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { fetchAlertsSince, getApiBaseUrl, type BridgeAlert } from '../lib/alert-bridge';

const POLL_MS = 3000;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

async function ensureNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') {
    return false;
  }

  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') {
    return true;
  }

  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

async function presentLocalNotification(alert: BridgeAlert) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title:
        alert.alertType === 'CRITICAL'
          ? 'Alerte critique'
          : alert.alertType === 'WARNING'
            ? 'Avertissement'
            : 'Information',
      body: `${alert.sensorName} — ${alert.location}\n${alert.message}`,
      sound: alert.alertType === 'CRITICAL',
      data: { alertId: alert.id },
    },
    trigger: null,
  });
}

type Options = {
  enabled: boolean;
  onCriticalAlert: (alert: BridgeAlert) => void;
};

export function useWebAlertBridge({ enabled, onCriticalAlert }: Options) {
  const seenIds = useRef(new Set<string>());
  const pollSince = useRef(new Date().toISOString());
  const onCriticalRef = useRef(onCriticalAlert);
  onCriticalRef.current = onCriticalAlert;

  useEffect(() => {
    const base = getApiBaseUrl();
    if (!enabled || !base) {
      return;
    }

    let cancelled = false;

    void ensureNotificationPermission();

    const poll = async () => {
      try {
        const alerts = await fetchAlertsSince(pollSince.current);
        if (cancelled || alerts.length === 0) {
          return;
        }

        let latestTime = pollSince.current;

        for (const alert of alerts) {
          if (seenIds.current.has(alert.id)) {
            continue;
          }
          seenIds.current.add(alert.id);

          if (Date.parse(alert.triggeredAt) > Date.parse(latestTime)) {
            latestTime = alert.triggeredAt;
          }

          await presentLocalNotification(alert);

          if (alert.alertType === 'CRITICAL') {
            onCriticalRef.current(alert);
          }
        }

        pollSince.current = latestTime;
      } catch {
        /* réseau indisponible — prochain poll */
      }
    };

    void poll();
    const id = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [enabled]);
}
