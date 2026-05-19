import type { SensorStatus } from "@/components/ui/StatusBadge";

export interface Sensor {
  id: string;
  name: string;
  location: string;
  status: SensorStatus;
  gasLevelPpm: number;
  batteryPercent: number;
}

export interface RecentAlert {
  id: string;
  sensorName: string;
  type: "CRITICAL" | "WARNING" | "INFO";
  message: string;
  timestamp: string;
  resolved: boolean;
}

export const sensors: Sensor[] = [
  {
    id: "s1",
    name: "CO-Zone A",
    location: "Entrepôt Nord",
    status: "NORMAL",
    gasLevelPpm: 12,
    batteryPercent: 92,
  },
  {
    id: "s2",
    name: "CO-Zone B",
    location: "Quai de chargement",
    status: "WARNING",
    gasLevelPpm: 48,
    batteryPercent: 78,
  },
  {
    id: "s3",
    name: "CO-Zone C",
    location: "Salle des chaudières",
    status: "DANGER",
    gasLevelPpm: 124,
    batteryPercent: 65,
  },
  {
    id: "s4",
    name: "CO-Zone D",
    location: "Baie de stockage 2",
    status: "NORMAL",
    gasLevelPpm: 8,
    batteryPercent: 88,
  },
  {
    id: "s5",
    name: "CO-Zone E",
    location: "Hall maintenance",
    status: "NORMAL",
    gasLevelPpm: 15,
    batteryPercent: 95,
  },
  {
    id: "s6",
    name: "CO-Zone F",
    location: "Parking souterrain",
    status: "WARNING",
    gasLevelPpm: 52,
    batteryPercent: 71,
  },
];

export const dashboardStats = {
  totalSensors: 24,
  activeAlerts: 3,
  onlineSensors: 22,
  resolvedToday: 7,
};

export const recentAlerts: RecentAlert[] = [
  {
    id: "a1",
    sensorName: "CO-Zone C",
    type: "CRITICAL",
    message: "Niveau CO au-dessus du seuil critique (124 PPM)",
    timestamp: "2026-05-19T08:12:00",
    resolved: false,
  },
  {
    id: "a2",
    sensorName: "CO-Zone B",
    type: "WARNING",
    message: "CO élevé détecté (48 PPM)",
    timestamp: "2026-05-19T07:45:00",
    resolved: false,
  },
  {
    id: "a3",
    sensorName: "CO-Zone F",
    type: "WARNING",
    message: "CO élevé détecté (52 PPM)",
    timestamp: "2026-05-19T06:30:00",
    resolved: false,
  },
  {
    id: "a4",
    sensorName: "CO-Zone A",
    type: "INFO",
    message: "Étalonnage planifié terminé",
    timestamp: "2026-05-19T05:00:00",
    resolved: true,
  },
  {
    id: "a5",
    sensorName: "CO-Zone D",
    type: "WARNING",
    message: "Pic bref détecté (35 PPM) — résolu automatiquement",
    timestamp: "2026-05-18T22:15:00",
    resolved: true,
  },
];

export const alertTypes = [
  { value: "CRITICAL", label: "Alerte CO critique" },
  { value: "WARNING", label: "Seuil d'avertissement" },
  { value: "INFO", label: "Info / maintenance" },
] as const;

export type AlertTypeValue = (typeof alertTypes)[number]["value"];
