import { Battery, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Sensor } from "@/lib/mock-data";

interface SensorCardProps {
  sensor: Sensor;
}

export function SensorCard({ sensor }: SensorCardProps) {
  return (
    <Card className="!p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-section-title">{sensor.name}</h3>
          <p className="text-caption mt-0.5 inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {sensor.location}
          </p>
        </div>
        <StatusBadge status={sensor.status} />
      </div>
      <div className="grid grid-cols-2 gap-3 border-t border-outline-variant pt-3">
        <div>
          <p className="text-overline mb-0.5">Gas level</p>
          <p className="text-metric">
            {sensor.gasLevelPpm}
            <span className="text-caption ml-1 font-medium">PPM</span>
          </p>
        </div>
        <div>
          <p className="text-overline mb-0.5">Battery</p>
          <p className="text-metric inline-flex items-center gap-1.5">
            <Battery className="h-5 w-5 text-primary" strokeWidth={2} />
            {sensor.batteryPercent}%
          </p>
        </div>
      </div>
    </Card>
  );
}
