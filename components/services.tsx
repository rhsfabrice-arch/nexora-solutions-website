import {
  Server,
  Lightbulb,
  BookOpenCheck,
  ScanLine,
  Calculator,
  LineChart,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Server,
    title: "IT Services",
    desc: "Managed IT, networks, cloud infrastructure, security, and reliable support that keeps your operations running.",
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    desc: "Strategic advisory and process optimization to help your enterprise scale efficiently and confidently.",
  },
  {
    icon: BookOpenCheck,
    title: "QuickBooks Implementation",
    desc: "Certified setup, migration, and training on QuickBooks tailored to your accounting workflows.",
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "End-to-end point-of-sale deployment for retail and hospitality, with inventory and payment integration.",
  },
  {
    icon: Calculator,
    title: "Taxation",
    desc: "Compliant tax preparation, filing, and advisory aligned with regional regulatory requirements.",
  },
  {
    icon: LineChart,
    title: "Accounting Technology",
    desc: "Modern financial systems, automation, and reporting that turn your numbers into clear decisions.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-green">
            What we do
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Complete business technology, under one roof
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From infrastructure to accounting, Nexora provides the integrated
            solutions modern businesses need to grow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)] transition-all hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-20px_rgba(11,31,53,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 flex items-center gap-1 font-heading text-xl font-bold text-navy">
                {s.title}
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
