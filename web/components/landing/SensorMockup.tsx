import { Activity, Battery, Wifi } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function SensorMockup() {
  return (
    <Card
      elevated
      padding={false}
      className="relative w-full max-w-[300px] border-outline-variant/35 !shadow-card-md sm:max-w-[320px]"
    >
      <div className="relative px-6 pb-7 pt-8 sm:px-8 sm:pb-8 sm:pt-10">
        {/* Soft halo behind device — stays inside padding, no clipping */}
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-on-surface/[0.04] blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto flex w-full max-w-[260px] flex-col items-center">
          {/* Device + side rail in one silhouette (no negative positioning) */}
          <div className="mb-6 flex overflow-hidden rounded-2xl border border-outline-variant/55 bg-surface shadow-inner ring-1 ring-black/[0.03]">
            <div className="flex h-[11.5rem] w-[8.25rem] shrink-0 flex-col justify-between bg-gradient-to-b from-surface-container-highest via-surface-container-highest/90 to-surface-container-highest/70 p-3.5 sm:h-48 sm:w-[8.5rem] sm:p-4">
              <div className="flex w-full items-center justify-between">
                <span
                  className="h-2 w-2 shrink-0 rounded-full bg-success shadow-sm ring-2 ring-success/25"
                  aria-hidden
                />
                <Wifi className="h-4 w-4 text-on-surface-variant" strokeWidth={2} />
              </div>
              <div className="flex flex-col items-center gap-0.5 py-1 text-center">
                <p className="text-overline">CO PPM</p>
                <p className="text-metric-lg tabular-nums tracking-tighter">24</p>
              </div>
              <div className="flex w-full items-end justify-between gap-1 text-caption">
                <span className="inline-flex min-w-0 items-center gap-1 tabular-nums">
                  <Battery className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
                  <span className="truncate">92%</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-success">
                  <Activity className="h-3.5 w-3.5" aria-hidden />
                  Normal
                </span>
              </div>
            </div>
            <div
              className="w-2.5 shrink-0 bg-on-surface sm:w-3"
              aria-hidden
            />
          </div>

          <p className="text-center text-[12px] font-medium leading-snug text-on-surface-variant sm:text-caption">
            Unité capteur Kinetic — démo
          </p>
        </div>
      </div>
    </Card>
  );
}
