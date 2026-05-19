import type { Metadata } from "next";
import { DashboardFrame } from "@/components/dashboard/DashboardFrame";

export const metadata: Metadata = {
  title: "Administration — SENSE-TECH Kinetic",
  description: "Console d'administration pour la surveillance des capteurs et des alertes.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardFrame>{children}</DashboardFrame>;
}
