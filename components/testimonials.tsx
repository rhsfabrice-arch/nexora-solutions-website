import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Nexora migrated our books to QuickBooks and rebuilt our POS in weeks. Our month-end close went from days to hours.",
    name: "Amina Wanjiru",
    role: "Finance Director, Savannah Retail Group",
  },
  {
    quote:
      "Their IT and consulting team feels like part of ours. Reliable, proactive, and genuinely invested in our growth.",
    name: "David Okello",
    role: "CEO, Lakeside Logistics",
  },
  {
    quote:
      "Tax compliance used to be stressful. Nexora made it seamless and gave us reporting we can actually act on.",
    name: "Grace Mutuku",
    role: "Owner, Urban Bites Hospitality",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green">
            Client stories
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Businesses that grow with Nexora
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)]"
            >
              <Quote className="h-8 w-8 text-green" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-navy">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="font-heading font-bold text-navy">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
