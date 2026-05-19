import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { RecentAlertsTable } from "@/components/dashboard/RecentAlertsTable";

export default function AdminAlertsPage() {
  return (
    <>
      <AdminPageHeader
        title="Alertes"
        description="Historique des alertes récentes sur tous les capteurs. Utilisez la vue d'ensemble pour déclencher des alertes démo."
      />
      <RecentAlertsTable />
    </>
  );
}
