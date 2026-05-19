import { Check, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const packs = [
  {
    name: "Starter",
    tagline: "Un site, l'essentiel",
    price: "49",
    period: "par mois / site",
    highlights: [
      "Jusqu'à 12 capteurs CO",
      "Alertes e-mail et push",
      "Historique 7 jours",
      "Documentation communautaire",
    ],
    cta: "Choisir Starter",
    featured: false,
  },
  {
    name: "Operations",
    tagline: "Surveillance multi-zones à l'échelle",
    price: "149",
    period: "par mois / site",
    highlights: [
      "Jusqu'à 64 capteurs et passerelles",
      "Règles d'escalade et astreinte",
      "Rétention des données 1 an",
      "Support chat prioritaire",
    ],
    cta: "Choisir Operations",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Conformité et SLA à l'échelle du parc",
    price: "Sur mesure",
    period: "contrat annuel",
    highlights: [
      "Capteurs et régions illimités",
      "SSO, exports d'audit, API",
      "Ingénieur succès dédié",
      "Options SLA 99,9 % de disponibilité",
    ],
    cta: "Contacter les ventes",
    featured: false,
  },
];

export function Packs() {
  return (
    <section
      id="packs"
      className="relative scroll-mt-24 border-t border-outline-variant/30 bg-surface py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(79,107,237,0.06),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up" distance={32} className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <span className="text-kicker mb-4 inline-flex items-center gap-2 rounded-full bg-primary-container/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ring-1 ring-primary/10">
            <Package className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} aria-hidden />
            Offres
          </span>
          <h2 className="text-lead-title mb-4 text-balance">
            Des formules qui évoluent avec votre site
          </h2>
          <p className="text-[15px] leading-relaxed text-on-surface-variant">
            Trois niveaux clairs — du premier déploiement à la gouvernance d&apos;un parc
            d&apos;entreprise. Tarifs indicatifs pour ce prototype.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-6 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
          {packs.map((pack) => (
            <RevealItem key={pack.name} className="min-w-0">
              <Card
                className={cn(
                  "relative flex h-full flex-col rounded-2xl !p-0 transition-all duration-300",
                  pack.featured
                    ? "border-2 border-primary/40 bg-gradient-to-b from-primary-container/55 via-surface to-surface shadow-card-md ring-1 ring-primary/15 hover:border-primary/55"
                    : "border border-outline-variant/60 shadow-card-sm hover:border-outline-variant hover:shadow-card-md",
                )}
                elevated={pack.featured}
              >
                <div className="flex min-h-[36px] items-start justify-center px-6 pt-5">
                  {pack.featured ? (
                    <span className="rounded-full bg-primary px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-on-primary shadow-md shadow-primary/25">
                      Le plus populaire
                    </span>
                  ) : (
                    <span className="invisible select-none text-[10px] font-bold uppercase tracking-[0.14em]">
                      —
                    </span>
                  )}
                </div>

                <div className="px-6 pb-2">
                  <h3 className="text-[18px] font-bold leading-tight tracking-tight text-on-surface">
                    {pack.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-snug text-on-surface/75">
                    {pack.tagline}
                  </p>
                </div>

                <div className="mx-6 mb-6 rounded-xl border border-outline-variant bg-surface-container-highest/55 p-4 shadow-inner">
                  {pack.price === "Sur mesure" ? (
                    <p className="text-[2rem] font-bold leading-none tracking-tight text-on-surface">
                      Sur mesure
                    </p>
                  ) : (
                    <p className="flex items-baseline gap-0.5">
                      <span className="text-lg font-semibold text-on-surface-variant">€</span>
                      <span className="text-[2.5rem] font-bold leading-none tabular-nums tracking-tight text-on-surface">
                        {pack.price}
                      </span>
                    </p>
                  )}
                  <p className="mt-2 text-[13px] font-medium text-on-surface-variant">{pack.period}</p>
                </div>

                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-outline to-transparent opacity-90" />

                <div className="px-6 pb-6 pt-5">
                  <p className="text-overline mb-4 text-left text-on-surface-variant">
                    Inclus dans l&apos;offre
                  </p>
                  <ul className="flex flex-1 flex-col gap-3.5">
                    {pack.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex gap-3.5 text-left text-[15px] font-medium leading-snug text-on-surface"
                      >
                        <span
                          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success text-on-primary shadow-sm ring-2 ring-success/20"
                          aria-hidden
                        >
                          <Check className="h-4 w-4" strokeWidth={2.75} />
                        </span>
                        <span className="min-w-0 pt-0.5">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-outline-variant/70 bg-surface-container-highest/25 px-6 py-5">
                  <Button
                    href="/admin"
                    variant={pack.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    {pack.cta}
                  </Button>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
