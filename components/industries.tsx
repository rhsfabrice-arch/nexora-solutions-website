import { Store, Building2, UtensilsCrossed, Stethoscope, GraduationCap, Truck } from "lucide-react"

const industries = [
  { icon: Store, label: "Retail & Wholesale" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Building2, label: "SMEs & Enterprise" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
]

export function Industries() {
  return (
    <section id="industries" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-green">
            Industries we serve
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Trusted across sectors and borders
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((i) => (
            <div
              key={i.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-7 text-center transition-colors hover:border-green/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
                <i.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold text-navy">{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
