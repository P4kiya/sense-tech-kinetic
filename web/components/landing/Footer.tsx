import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Reveal } from "@/components/ui/Reveal";

const footerLinks = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#packs", label: "Offres" },
  { href: "#how-it-works", label: "Comment ça marche" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-outline-variant/40 bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        aria-hidden
      />
      <Reveal direction="up" distance={20} duration={0.45}>
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div className="min-w-0 max-w-md space-y-3">
              <BrandLogo href="/" />
              <p className="text-[13px] leading-relaxed text-on-surface-variant">
                Surveillance des gaz industriels et de l&apos;environnement — interface prototype.
              </p>
            </div>

            <nav className="shrink-0 sm:pt-0.5" aria-label="Pied de page">
              <ul className="flex flex-col gap-2 sm:items-end">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex py-0.5 text-[14px] font-medium text-on-surface-variant transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 border-t border-outline-variant/50 pt-6">
            <p className="text-[12px] text-on-surface-variant">
              © {new Date().getFullYear()} SENSE-TECH Kinetic
            </p>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
