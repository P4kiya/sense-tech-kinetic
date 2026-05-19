import { Activity, Battery, Wifi } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function SensorMockup() {
  return (
    <Card
      elevated
      padding={false}
      className="relative w-full max-w-sm overflow-visible border-outline-variant/35 !shadow-card-md"
    >
      <div className="p-8">
        <div className="mx-auto flex flex-col items-center">
          <div className="relative mb-8">
            <div className="h-44 w-32 rounded-2xl border border-outline-variant/50 bg-gradient-to-b from-surface-container-highest to-surface-container-highest/60 shadow-inner">
              <div className="flex h-full flex-col items-center justify-between p-4">
                <div className="flex w-full items-center justify-between">
                  <span className="h-2 w-2 rounded-full bg-success shadow-sm shadow-success/30" aria-hidden />
                  <Wifi className="h-4 w-4 text-primary" strokeWidth={2} />
                </div>
                <div className="text-center">
                  <p className="text-overline text-primary/90">CO PPM</p>
                  <p className="text-metric-lg text-primary">24</p>
                </div>
                <div className="flex w-full items-center justify-between text-caption">
                  <span className="inline-flex items-center gap-1">
                    <Battery className="h-3.5 w-3.5 opacity-70" />
                    92%
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-success">
                    <Activity className="h-3.5 w-3.5" />
                    Normal
                  </span>
                </div>
              </div>
            </div>
            <div
              className="absolute -right-2 top-1/2 h-14 w-2.5 -translate-y-1/2 rounded-r-lg bg-primary shadow-sm shadow-primary/25"
              aria-hidden
            />
          </div>
          <p className="text-caption text-center text-on-surface-variant/90">
            Kinetic Sensor Unit — demo
          </p>
        </div>
      </div>
    </Card>
  );
}
