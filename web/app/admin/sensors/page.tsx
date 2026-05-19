import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { SensorCard } from "@/components/dashboard/SensorCard";
import { sensors } from "@/lib/mock-data";

export default function AdminSensorsPage() {
  return (
    <>
      <AdminPageHeader
        title="Sensors"
        description="Full fleet list with status, gas level, and battery. Data is static for this prototype."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </>
  );
}
