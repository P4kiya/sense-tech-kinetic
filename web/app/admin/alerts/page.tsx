import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { RecentAlertsTable } from "@/components/dashboard/RecentAlertsTable";

export default function AdminAlertsPage() {
  return (
    <>
      <AdminPageHeader
        title="Alerts"
        description="Recent alert history across all sensors. Use Overview to trigger demo alerts."
      />
      <RecentAlertsTable />
    </>
  );
}
