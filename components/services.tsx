"use client"

const servicesList = [
  {
    title: "IT Services",
    description: "Enterprise-grade infrastructure, network security, and managed IT support tailored for your business scaling.",
    icon: "💻"
  },
  {
    title: "Consulting",
    description: "Strategic technology planning and operational workflow optimization to drive efficiency across East Africa.",
    icon: "📊"
  },
  {
    title: "QuickBooks & POS",
    description: "Seamless deployment of point-of-sale configurations and accounting integrations for real-time tracking.",
    icon: "🛒"
  },
  {
    title: "Taxation Solutions",
    description: "Corporate compliance auditing, tax structuring, and complete local regulatory alignment services.",
    icon: "🏛️"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Our Business Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Professional engineering and corporate advisory technology designed to empower market growth.
          </p>
        </div>

        {/* COMPACT RESPONSIVE GRID LAYOUT */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="flex flex-col p-6 rounded-2xl border border-border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-3xl mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
