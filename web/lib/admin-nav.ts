import {
  LayoutDashboard,
  Radio,
  BellRing,
  Cpu,
  BarChart3,
  Settings,
  type LucideIcon,
} from "lucide-react";

export const ADMIN_BASE = "/admin" as const;

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const adminNavItems: AdminNavItem[] = [
  { href: "/admin", label: "Vue d'ensemble", icon: LayoutDashboard },
  { href: "/admin/sensors", label: "Capteurs", icon: Radio },
  { href: "/admin/alerts", label: "Alertes", icon: BellRing },
  { href: "/admin/devices", label: "Équipements", icon: Cpu },
  { href: "/admin/reports", label: "Rapports", icon: BarChart3 },
  { href: "/admin/settings", label: "Réglages", icon: Settings },
];
