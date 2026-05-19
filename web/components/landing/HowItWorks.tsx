const steps = [
  {
    step: "01",
    title: "Deploy sensors",
    description:
      "Mount Kinetic units across zones. They auto-join your network and appear in the dashboard within minutes.",
  },
  {
    step: "02",
    title: "Set thresholds",
    description:
      "Configure PPM warning and critical levels per zone. Policies sync to every device in the fleet.",
  },
  {
    step: "03",
    title: "Monitor & respond",
    description:
      "Watch live readings, receive instant alerts, and resolve incidents with a full audit trail.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-lg">
          <p className="text-overline mb-3">How it works</p>
          <h2 className="text-lead-title text-balance">
            Up and running in three steps
          </h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-3 md:gap-5">
          {steps.map((item, i) => (
            <li
              key={item.step}
              className="relative rounded-lg border border-outline-variant/40 bg-surface/80 p-6 shadow-card-sm backdrop-blur-sm transition-all duration-300 hover:border-outline-variant hover:shadow-card-md"
            >
              <span className="text-caption mb-4 block font-semibold tabular-nums text-primary/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-section-title mb-2 font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
