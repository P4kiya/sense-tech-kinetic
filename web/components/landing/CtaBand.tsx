import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-20 md:py-24">
      <Reveal direction="up" distance={28}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary to-[#3d56d4] px-6 py-12 text-center shadow-card-md sm:px-10 sm:py-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-lead-title mb-4 text-balance text-on-primary">
              Prêt à sécuriser votre site ?
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-on-primary/90">
              Démarrez avec la console admin en démo, explorez les alertes et choisissez l&apos;offre
              adaptée à votre parc de capteurs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/admin"
                className="bg-surface text-primary shadow-lg hover:brightness-100"
              >
                Accéder à la console
              </Button>
              <Button
                href="#packs"
                variant="secondary"
                className="border-on-primary/30 bg-on-primary/10 text-on-primary backdrop-blur-sm hover:bg-on-primary/20"
              >
                Voir les offres
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
