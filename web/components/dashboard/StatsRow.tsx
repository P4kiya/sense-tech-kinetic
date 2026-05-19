import { AlertTriangle, CheckCircle, Cpu, Wifi } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { dashboardStats } from "@/lib/mock-data";

const stats = [
  {
    label: "Capteurs au total",
    value: dashboardStats.totalSensors,
    icon: Cpu,
    iconBg: "bg-primary-container/80",
    iconColor: "text-primary",
  },
  {
    label: "Alertes actives",
    value: dashboardStats.activeAlerts,
    icon: AlertTriangle,
    iconBg: "bg-error-container/90",
    iconColor: "text-error",
  },
  {
    label: "Capteurs en ligne",
    value: dashboardStats.onlineSensors,
    icon: Wifi,
    iconBg: "bg-success-container/80",
    iconColor: "text-success",
  },
  {
    label: "Résolues aujourd'hui",
    value: dashboardStats.resolvedToday,
    icon: CheckCircle,
    iconBg: "bg-success-container/80",
    iconColor: "text-success",
  },
];

export function StatsRow() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="!p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-caption mb-1.5 font-medium">{stat.label}</p>
              <p className="text-metric tracking-tight">{stat.value}</p>
            </div>
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg} ring-1 ring-black/[0.03]`}
            >
              <stat.icon className={`h-5 w-5 ${stat.iconColor}`} strokeWidth={2} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
