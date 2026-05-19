import { BarChart3, BellRing, Radio } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Radio,
    title: "Real-time monitoring",
    description:
      "Live PPM readings, battery health, and connectivity status from every sensor in your fleet.",
  },
  {
    icon: BellRing,
    title: "Instant alerts",
    description:
      "Critical, warning, and info notifications pushed the moment thresholds are crossed.",
  },
  {
    icon: BarChart3,
    title: "Historical data",
    description:
      "24-hour trends and export-ready logs to support audits, compliance, and root-cause analysis.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 rounded-t-[2rem] bg-surface py-20 shadow-[0_-1px_0_rgba(232,235,240,0.9)] md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-lg">
          <p className="text-overline mb-3 text-on-surface-variant">Features</p>
          <h2 className="text-lead-title mb-4 text-balance">
            Built for industrial operators
          </h2>
          <p className="text-[15px] leading-relaxed text-on-surface-variant">
            Everything you need to monitor gas levels and respond fast — in one
            unified platform.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {features.map((feature) => (
            <Card key={feature.title} className="group border-outline-variant/40 !p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/70 transition-colors group-hover:bg-primary-container">
                <feature.icon className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-section-title mb-2 font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
