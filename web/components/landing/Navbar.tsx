"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { easePremium } from "@/lib/motion";

const navLinks = [
  { href: "#features", label: "Fonctionnalités" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#packs", label: "Offres" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="sticky top-0 z-50 px-4 pt-4 pb-3 sm:px-6"
      initial={reduce ? false : { opacity: 0, y: -14 }}
      animate={reduce ? false : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easePremium, delay: 0.04 }}
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-outline-variant/50 bg-surface/55 shadow-card-sm backdrop-blur-2xl ring-1 ring-white/70 transition-shadow duration-300",
            "supports-[backdrop-filter]:bg-surface/45",
            mobileOpen && "shadow-card-md",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-outline-variant/80"
            aria-hidden
          />

          <div className="relative grid h-[60px] w-full grid-cols-2 items-center gap-2 px-3 sm:h-14 sm:px-4 sm:pl-5 sm:pr-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            <div className="min-w-0 justify-self-start">
              <BrandLogo href="/" variant="landing" />
            </div>

            <nav className="hidden justify-self-center md:flex" aria-label="Navigation principale">
              <div className="flex items-center gap-0.5 rounded-full border border-outline-variant/35 bg-background/40 p-1 shadow-inner">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-2 text-[13px] font-medium text-on-surface-variant transition-all hover:bg-surface hover:text-on-surface hover:shadow-sm active:scale-[0.98]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
              <Button href="#packs" className="hidden px-5 py-2 text-sm sm:inline-flex">
                Commencer
              </Button>
              <Button href="#packs" className="px-4 py-2 text-xs sm:hidden">
                Démarrer
              </Button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant/50 bg-background/50 text-on-surface transition-colors hover:bg-surface-container-highest md:hidden"
                aria-expanded={mobileOpen}
                aria-controls="landing-nav-mobile"
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          <div
            id="landing-nav-mobile"
            className={cn(
              "border-t border-outline-variant/40 bg-surface/80 px-3 py-3 backdrop-blur-md md:hidden",
              mobileOpen ? "block" : "hidden",
            )}
          >
            <nav className="flex flex-col gap-0.5" aria-label="Navigation principale (mobile)">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
