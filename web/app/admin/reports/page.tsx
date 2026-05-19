import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminReportsPage() {
  return (
    <>
      <AdminPageHeader
        title="Rapports"
        description="Export des tendances et synthèses de conformité. Bientôt disponible — espace réservé."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-section-title mb-2 font-semibold">Tendance CO sur 24 h</h3>
          <p className="text-caption leading-relaxed">
            Les exports PDF / CSV planifiés apparaîtront ici.
          </p>
        </Card>
        <Card>
          <h3 className="text-section-title mb-2 font-semibold">Journal des incidents</h3>
          <p className="text-caption leading-relaxed">
            Piste d&apos;audit filtrable pour les alertes et les acquittements.
          </p>
        </Card>
      </div>
    </>
  );
}
