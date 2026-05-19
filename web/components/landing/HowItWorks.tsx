import { Bell, Radio, SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

const steps = [
  {
    icon: Radio,
    title: "Déployer les capteurs",
    description:
      "Installez les unités Kinetic par zone. Elles rejoignent le réseau et apparaissent dans la console admin en quelques minutes.",
  },
  {
    icon: SlidersHorizontal,
    title: "Définir les seuils",
    description:
      "Configurez les niveaux PPM d'avertissement et critique par zone. Les politiques se synchronisent sur tout le parc.",
  },
  {
    icon: Bell,
    title: "Surveiller et réagir",
    description:
      "Suivez les mesures en direct, recevez les alertes et clôturez les incidents avec une piste d'audit complète.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-24 border-t border-outline-variant/25 bg-background py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up" distance={32} className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="badge-kicker mb-4">Comment ça marche</span>
          <h2 className="text-lead-title mb-4 text-balance">
            Opérationnel en trois étapes
          </h2>
          <p className="text-[15px] leading-relaxed text-on-surface-variant">
            De l&apos;installation aux tableaux de bord en direct — un parcours simple pour vos équipes dès le
            premier jour.
          </p>
        </Reveal>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-10 z-0 hidden h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent sm:block md:left-[14%] md:right-[14%]"
            aria-hidden
          />

          <RevealStagger className="relative z-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {steps.map((item, i) => (
              <RevealItem key={item.title} className="min-w-0">
                <Card className="relative h-full rounded-2xl border-outline-variant/45 !p-7 text-center sm:text-left">
                  <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-[13px] font-bold tabular-nums text-on-primary sm:mx-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-outline-variant/50 bg-surface text-on-surface sm:mx-0">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-section-title mb-2.5 text-[16px] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
