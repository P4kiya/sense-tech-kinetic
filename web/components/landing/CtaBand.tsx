import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-20 md:py-24">
      <Reveal direction="up" distance={28}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#1d1d1f] px-6 py-12 text-center shadow-card-md sm:px-10 sm:py-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl">
            <h2 className="text-lead-title mb-4 text-balance !text-white">
              Prêt à sécuriser votre site ?
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-white/75">
              Démarrez avec la console admin en démo, explorez les alertes et choisissez l&apos;offre
              adaptée à votre parc de capteurs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                href="/admin"
                className="border-0 bg-white !text-[#1d1d1f] shadow-sm hover:bg-[#f5f5f7] hover:!text-[#1d1d1f]"
              >
                Accéder à la console
              </Button>
              <Button
                href="#packs"
                className="border border-white/35 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white"
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
