const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We assess your operations, systems, and goals to map the right solution.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We architect a tailored plan across IT, accounting, and compliance.",
  },
  {
    num: "03",
    title: "Implement",
    desc: "We deploy, migrate, and configure with minimal disruption to your business.",
  },
  {
    num: "04",
    title: "Support & Grow",
    desc: "Ongoing support, training, and optimization that scale with you.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green">
            How we work
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A proven path from challenge to growth
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)]"
            >
              <span className="font-heading text-4xl font-extrabold text-green-soft">
                {step.num}
              </span>
              <span className="sr-only">Step {step.num}</span>
              <h3 className="mt-3 font-heading text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
