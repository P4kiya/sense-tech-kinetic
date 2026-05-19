"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const faqs = [
  {
    question: "Quels gaz sont pris en charge ?",
    answer:
      "Kinetic est optimisé pour le monoxyde de carbone (CO) en PPM. D'autres capteurs peuvent être ajoutés selon votre offre et votre déploiement.",
  },
  {
    question: "Faut-il une connexion réseau sur site ?",
    answer:
      "Les capteurs se connectent via passerelle ou réseau local. Les données remontent dans la console admin dès que la liaison est établie.",
  },
  {
    question: "Comment sont déclenchées les alertes ?",
    answer:
      "Vous définissez des seuils d'avertissement et critique par zone. Les notifications partent par e-mail, push et peuvent être reliées à votre astreinte.",
  },
  {
    question: "Puis-je essayer avant de déployer ?",
    answer:
      "Oui — utilisez la console admin en mode démo pour simuler des alertes et parcourir le tableau de bord sans matériel connecté.",
  },
  {
    question: "Les données sont-elles exportables ?",
    answer:
      "Les offres Operations et Enterprise incluent l'historique et des exports pour vos audits, conformité et analyses post-incident.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 border-t border-outline-variant/30 bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal direction="up" distance={32} className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <span className="badge-kicker mb-4">FAQ</span>
          <h2 className="text-lead-title mb-4 text-balance">Questions fréquentes</h2>
          <p className="text-[15px] leading-relaxed text-on-surface-variant">
            Tout ce qu&apos;il faut savoir avant de déployer Kinetic sur votre site.
          </p>
        </Reveal>

        <RevealStagger className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <RevealItem key={item.question}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-surface shadow-card-sm transition-[box-shadow,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-outline/80 hover:shadow-card-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                    isOpen ? "border-outline shadow-card-md" : "border-outline-variant/50",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-section-title text-[15px] font-semibold leading-snug tracking-tight">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant transition-transform duration-200",
                        isOpen && "rotate-180 bg-on-surface text-on-primary",
                      )}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-outline-variant/50 px-5 pb-5 pt-0 text-[15px] leading-relaxed text-on-surface-variant sm:px-6 sm:pb-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
