/** Libellés admin — français */
export const alertTypeLabels: Record<"CRITICAL" | "WARNING" | "INFO", string> = {
  CRITICAL: "Critique",
  WARNING: "Avertissement",
  INFO: "Info",
};

export const sensorStatusLabels: Record<"NORMAL" | "WARNING" | "DANGER", string> = {
  NORMAL: "Normal",
  WARNING: "Avertissement",
  DANGER: "Danger",
};

export function formatAdminDateTime(iso: string): string {
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}
