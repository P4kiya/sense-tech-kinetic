import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { StatsStrip } from "@/components/landing/StatsStrip";
import { Features } from "@/components/landing/Features";
import { UseCases } from "@/components/landing/UseCases";
import { Packs } from "@/components/landing/Packs";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Faq } from "@/components/landing/Faq";
import { CtaBand } from "@/components/landing/CtaBand";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <UseCases />
        <Packs />
        <HowItWorks />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
