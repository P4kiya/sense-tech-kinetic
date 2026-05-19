import { Building2, Factory, HardHat, Warehouse } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";

const useCases = [
  {
    icon: Warehouse,
    title: "Entrepôts & logistique",
    description:
      "Surveillez les zones de stockage, quais de chargement et locaux techniques où le CO peut s'accumuler.",
  },
  {
    icon: Factory,
    title: "Sites industriels",
    description:
      "Salles de machines, chaufferies et ateliers : seuils par zone et historique pour vos audits HSE.",
  },
  {
    icon: Building2,
    title: "Parkings & sous-sols",
    description:
      "Détection précoce dans les parkings souterrains et circulations confinées, avec alertes ciblées.",
  },
  {
    icon: HardHat,
    title: "Chantiers & maintenance",
    description:
      "Capteurs portables ou fixes pour interventions temporaires, avec visibilité depuis la console admin.",
  },
];

export function UseCases() {
  return (
    <section
      id="secteurs"
      className="relative scroll-mt-24 border-t border-outline-variant/25 bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up" distance={32} className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="badge-kicker mb-4">
            Secteurs
          </span>
          <h2 className="text-lead-title mb-4 text-balance">
            Une solution adaptée à vos environnements à risque
          </h2>
          <p className="text-[15px] leading-relaxed text-on-surface-variant">
            Kinetic s&apos;intègre aux sites où la qualité de l&apos;air et la réactivité des équipes
            font la différence.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {useCases.map((item) => (
            <RevealItem key={item.title} className="min-w-0">
              <Card className="flex h-full gap-4 rounded-2xl border-outline-variant/45 !p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-container-highest ring-1 ring-outline-variant">
                  <item.icon className="h-5 w-5 text-on-surface" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-section-title mb-2 text-[16px] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-on-surface-variant">
                    {item.description}
                  </p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
