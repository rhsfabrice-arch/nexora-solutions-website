import { ShieldCheck, Rocket, TrendingUp, Users } from "lucide-react"

const pillars = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Transparent partnerships and certified expertise you can rely on.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Modern tools and automation that keep you ahead of the curve.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    desc: "Solutions engineered to grow seamlessly with your business.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "Dedicated local support built around your team's goals.",
  },
]

const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "10+", label: "Years of expertise" },
  { value: "5", label: "Countries served" },
]

export function WhyNexora() {
  return (
    <section id="why" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-green">
              Why Nexora
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Enterprise-grade solutions, built on the values that matter
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our circular approach — innovate, implement, support, and improve —
              keeps your business moving steadily upward across East Africa.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
                  <dt className="font-heading text-3xl font-extrabold text-navy">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-navy">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
