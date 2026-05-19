"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SensorMockup } from "./SensorMockup";
import { easePremium } from "@/lib/motion";

const copyContainerActive: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const copyItemActive: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easePremium },
  },
};

const copyItemReduced: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const copyContainerReduced: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0, delayChildren: 0 },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const itemVariants = reduce ? copyItemReduced : copyItemActive;
  const containerVariants = reduce ? copyContainerReduced : copyContainerActive;

  return (
    <section className="hero-glow relative border-b border-outline-variant/30">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:items-center md:gap-x-0 md:gap-y-14 md:py-24 lg:py-28">
        <motion.div
          className="order-2 flex max-w-xl flex-col gap-7 md:order-1 md:gap-8 md:pr-6 lg:pr-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="badge-kicker w-fit"
          >
            Surveillance sécurité industrielle
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-page-title text-balance">
            Protégez votre site grâce à une vision gaz en temps réel
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-md text-[15px] leading-[1.6] text-on-surface-variant"
          >
            SENSE-TECH Kinetic relie les capteurs CO sans fil aux alertes instantanées et à
            l&apos;historique analytique — pour que vos équipes agissent avant que les seuils ne
            deviennent des urgences.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <Button href="/admin">Lancer la surveillance</Button>
            <Button href="#features" variant="secondary">
              Voir les fonctionnalités
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 flex w-full justify-center md:order-2 md:pl-6 lg:pl-10"
          initial={reduce ? false : { opacity: 0, x: 40, scale: 0.96, rotate: -1.5 }}
          animate={
            reduce
              ? false
              : {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.75, delay: 0.14, ease: easePremium },
                }
          }
        >
          <div className="flex w-full max-w-sm justify-center sm:max-w-md">
            <SensorMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
