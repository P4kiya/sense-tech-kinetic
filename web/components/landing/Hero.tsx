import { Button } from "@/components/ui/Button";
import { SensorMockup } from "./SensorMockup";

export function Hero() {
  return (
    <section className="hero-glow relative border-b border-outline-variant/30">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:items-center md:gap-16 md:py-28">
        <div className="flex max-w-xl flex-col gap-8">
          <span className="text-kicker w-fit rounded-full bg-primary-container/80 px-3 py-1.5">
            Industrial safety monitoring
          </span>
          <h1 className="text-page-title text-balance">
            Protect your facility with real-time gas intelligence
          </h1>
          <p className="max-w-md text-[15px] leading-[1.55] text-on-surface-variant">
            SENSE-TECH Kinetic connects wireless CO sensors to instant alerts and
            historical analytics — so your team can act before thresholds become
            emergencies.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/admin">Start monitoring</Button>
            <Button href="#features" variant="secondary">
              See features
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <SensorMockup />
        </div>
      </div>
    </section>
  );
}
