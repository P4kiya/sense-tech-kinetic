import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { sensors } from "@/lib/mock-data";

export default function AdminSensorsPage() {
  return (
    <>
      <AdminPageHeader
        title="Capteurs"
        description="Liste complète du parc avec statut, niveau de gaz et batterie. Données statiques pour ce prototype."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </>
  );
}
