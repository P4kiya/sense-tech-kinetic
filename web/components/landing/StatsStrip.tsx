import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

const stats = [
  { value: "500+", label: "Sites équipés", detail: "En France et en Europe" },
  { value: "< 30 s", label: "Délai d'alerte", detail: "Du franchissement au push" },
  { value: "24/7", label: "Surveillance", detail: "Mesures et statut en continu" },
  { value: "99,9 %", label: "Disponibilité", detail: "Objectif SLA Enterprise" },
];

export function StatsStrip() {
  return (
    <section
      aria-label="Chiffres clés"
      className="relative border-b border-outline-variant/30 bg-background py-12 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <RevealItem key={stat.label} className="min-w-0 text-center sm:text-left">
              <p className="text-metric-lg tabular-nums tracking-tight">{stat.value}</p>
              <p className="text-section-title mt-2 font-semibold tracking-tight">{stat.label}</p>
              <p className="text-caption mt-1 leading-relaxed">{stat.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
