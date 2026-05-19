import { BarChart3, BellRing, Cpu, Radio } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

const features = [
  {
    icon: Radio,
    title: "Surveillance en temps réel",
    description:
      "Lecture PPM en direct, état des batteries et connectivité pour chaque capteur de votre parc.",
  },
  {
    icon: BellRing,
    title: "Alertes instantanées",
    description:
      "Notifications critique, avertissement et information dès qu'un seuil est franchi.",
  },
  {
    icon: BarChart3,
    title: "Données historiques",
    description:
      "Tendances sur 24 h et journaux exportables pour audits, conformité et analyse des causes.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-24 rounded-t-[2rem] border-t border-outline-variant/30 bg-surface pb-20 pt-16 shadow-[0_-8px_32px_rgba(28,33,48,0.04)] md:pb-28 md:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(0,0,0,0.03),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up" distance={36} className="mb-14 md:mb-16">
          <div className="max-w-xl">
            <span className="badge-kicker mb-4">
              <Cpu className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
              Fonctionnalités
            </span>
            <h2 className="text-lead-title mb-4 text-balance">
              Conçu pour les opérateurs industriels
            </h2>
            <p className="text-[15px] leading-relaxed text-on-surface-variant">
              Tout ce qu'il faut pour suivre les niveaux de gaz et réagir vite — au sein d'une
              plateforme unifiée.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <RevealItem key={feature.title} className="min-w-0">
              <Card className="group relative h-full rounded-2xl border-outline-variant/45 !p-7">
                <span
                  className="text-caption mb-5 flex h-7 w-7 items-center justify-center rounded-lg bg-surface-container-highest font-bold tabular-nums text-on-surface-variant transition-colors group-hover:bg-on-surface group-hover:text-on-primary"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-highest ring-1 ring-outline-variant transition-transform duration-300 group-hover:scale-[1.03]">
                  <feature.icon className="h-5 w-5 text-on-surface" strokeWidth={2} />
                </div>
                <h3 className="text-section-title mb-2.5 text-[16px] font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
