import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Radio,
  BellRing,
  Cpu,
  BarChart3,
  Settings,
} from "lucide-react";

export const ADMIN_BASE = "/admin" as const;

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const adminNavItems: AdminNavItem[] = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard },
  { href: "/admin/sensors", label: "Sensors", icon: Radio },
  { href: "/admin/alerts", label: "Alerts", icon: BellRing },
  { href: "/admin/devices", label: "Devices", icon: Cpu },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];
