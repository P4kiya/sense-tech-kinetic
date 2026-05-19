import { StatsRow } from "@/components/dashboard/StatsRow";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { FakeAlertPanel } from "@/components/dashboard/FakeAlertPanel";
import { RecentAlertsTable } from "@/components/dashboard/RecentAlertsTable";
import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { sensors } from "@/lib/mock-data";

export default function AdminOverviewPage() {
  return (
    <>
      <AdminPageHeader
        title="Vue d'ensemble"
        description="Surveillez votre parc de capteurs et simulez des alertes pour les démonstrations."
      />

      <section className="mb-8">
        <StatsRow />
      </section>

      <section className="mb-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-section-title mb-5 font-semibold tracking-tight">Parc de capteurs</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sensors.map((sensor) => (
              <SensorCard key={sensor.id} sensor={sensor} />
            ))}
          </div>
        </div>
        <div>
          <FakeAlertPanel />
        </div>
      </section>

      <section>
        <RecentAlertsTable />
      </section>
    </>
  );
}
