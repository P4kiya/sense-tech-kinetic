export type BridgeAlertType = "CRITICAL" | "WARNING" | "INFO";

export type BridgeAlert = {
  id: string;
  sensorId: string;
  sensorName: string;
  location: string;
  alertType: BridgeAlertType;
  message: string;
  triggeredAt: string;
};

const MAX_ALERTS = 100;
const alerts: BridgeAlert[] = [];

function buildMessage(alertType: BridgeAlertType, sensorName: string): string {
  switch (alertType) {
    case "CRITICAL":
      return `Alerte critique — ${sensorName}`;
    case "WARNING":
      return `Seuil d'avertissement — ${sensorName}`;
    default:
      return `Info maintenance — ${sensorName}`;
  }
}

export function addBridgeAlert(input: {
  sensorId: string;
  sensorName: string;
  location?: string;
  alertType: BridgeAlertType;
  triggeredAt?: string;
}): BridgeAlert {
  const alert: BridgeAlert = {
    id: `bridge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    sensorId: input.sensorId,
    sensorName: input.sensorName,
    location: input.location ?? "Zone non précisée",
    alertType: input.alertType,
    message: buildMessage(input.alertType, input.sensorName),
    triggeredAt: input.triggeredAt ?? new Date().toISOString(),
  };

  alerts.unshift(alert);
  if (alerts.length > MAX_ALERTS) {
    alerts.length = MAX_ALERTS;
  }

  return alert;
}

export function listBridgeAlerts(since?: string | null): BridgeAlert[] {
  if (!since) {
    return [...alerts];
  }

  const sinceMs = Date.parse(since);
  if (Number.isNaN(sinceMs)) {
    return [...alerts];
  }

  return alerts.filter((a) => Date.parse(a.triggeredAt) > sinceMs);
}
