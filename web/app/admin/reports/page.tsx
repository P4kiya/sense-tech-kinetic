import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminReportsPage() {
  return (
    <>
      <AdminPageHeader
        title="Reports"
        description="Export trends and compliance summaries. Coming soon — placeholder only."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="text-section-title mb-2 font-semibold">24-hour CO trend</h3>
          <p className="text-caption leading-relaxed">
            Scheduled PDF / CSV exports will appear here.
          </p>
        </Card>
        <Card>
          <h3 className="text-section-title mb-2 font-semibold">Incident log</h3>
          <p className="text-caption leading-relaxed">
            Filterable audit trail for alerts and acknowledgements.
          </p>
        </Card>
      </div>
    </>
  );
}
