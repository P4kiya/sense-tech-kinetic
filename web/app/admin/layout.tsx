import { DashboardFrame } from "@/components/dashboard/DashboardFrame";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardFrame>{children}</DashboardFrame>;
}
