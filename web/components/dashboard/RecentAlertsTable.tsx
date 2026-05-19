import { Card } from "@/components/ui/Card";
import { recentAlerts } from "@/lib/mock-data";
import { cn } from "@/lib/cn";

const typeStyles = {
  CRITICAL: "bg-error-container text-on-error-container",
  WARNING: "bg-warning-container text-warning",
  INFO: "bg-primary-container text-primary",
};

function formatTime(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function RecentAlertsTable() {
  return (
    <Card padding={false} staticSurface className="overflow-hidden">
      <div className="border-b border-outline-variant/60 bg-surface-container-highest/40 px-5 py-5">
        <h2 className="text-section-title font-semibold tracking-tight">Recent alerts</h2>
        <p className="text-caption mt-1">Latest events across the sensor fleet</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-outline-variant/50 bg-surface-container-highest/35">
              <th className="text-overline px-5 py-3">Sensor</th>
              <th className="text-overline px-5 py-3">Type</th>
              <th className="text-overline px-5 py-3">Message</th>
              <th className="text-overline px-5 py-3">Time</th>
              <th className="text-overline px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAlerts.map((alert) => (
              <tr
                key={alert.id}
                className="border-b border-outline-variant/40 transition-colors last:border-0 hover:bg-surface-container-highest/25"
              >
                <td className="text-section-title px-5 py-3.5 text-sm">
                  {alert.sensorName}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={cn(
                      "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      typeStyles[alert.type],
                    )}
                  >
                    {alert.type}
                  </span>
                </td>
                <td className="text-body max-w-xs px-5 py-3.5 text-on-surface-variant">
                  {alert.message}
                </td>
                <td className="text-caption px-5 py-3.5 whitespace-nowrap">
                  {formatTime(alert.timestamp)}
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={cn(
                      "text-caption font-semibold",
                      alert.resolved ? "text-success" : "text-error",
                    )}
                  >
                    {alert.resolved ? "Resolved" : "Active"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
