"use client"

import { useState } from "react"

const servicesList = [
  {
    title: "IT Services",
    shortDesc: "Enterprise-grade infrastructure & support.",
    longDesc: "We provide complete corporate network installations, server maintenance, cloud migration security, and proactive 24/7 technical helpdesk support tailored to keep your business workflows scaling across East Africa without interruptions.",
    icon: "💻"
  },
  {
    title: "Consulting",
    shortDesc: "Strategic technology planning for efficiency.",
    longDesc: "Our advisory experts analyze your current operational technology, spot bottlenecks, design automated workflow pipelines, and structure clear roadmap architectures to optimize your corporate overhead costs.",
    icon: "📊"
  },
  {
    title: "QuickBooks & POS",
    shortDesc: "Seamless retail & accounting technology.",
    longDesc: "Get complete configuration and deployment of point-of-sale hardware alongside full cloud QuickBooks ledger integrations. This gives your management real-time inventory tracking and multi-branch financial visibility.",
    icon: "🛒"
  },
  {
    title: "Taxation Solutions",
    shortDesc: "Corporate compliance & regulatory alignment.",
    longDesc: "We handle thorough end-of-year corporate auditing, direct tax structuring advisory, and complete alignment with local revenue authority compliance to shield your organization from legal friction or structural accounting oversight.",
    icon: "🏛️"
  }
]

export default function ServicesSection() {
  // Tracks which card index number is currently clicked open
  const [openCard, setOpenCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  return (
    <section id="services" className="py-20 bg-slate-50 relative z-10 block clear-both">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Business Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Click on any solution card below to expand and explore our core corporate implementation parameters.
          </p>
        </div>

        {/* INTERACTIVE COMPACT GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesList.map((service, idx) => {
            const isOpen = openCard === idx
            
            return (
              <div 
                key={idx}
                onClick={() => toggleCard(idx)}
                className={`flex flex-col p-6 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                  isOpen 
                    ? "border-emerald-500 bg-emerald-50/40 shadow-md ring-1 ring-emerald-500/30" 
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {/* Icon Wrapper */}
                <div className={`text-3xl mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                  isOpen ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-800"
                }`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
                  <span>{service.title}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded transition-all duration-300 ${
                    isOpen ? "bg-emerald-100 text-emerald-800 rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    ▼
                  </span>
                </h3>

                {/* Short Description (Always visible) */}
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-2">
                  {service.shortDesc}
                </p>

                {/* Expandable Brief Info Area (Opens smoothly on click) */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-60 opacity-100 mt-2 pt-2 border-t border-dashed border-slate-200" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <p className="text-xs text-slate-600 leading-relaxed bg-white/60 p-3 rounded-xl border border-slate-100">
                    {service.longDesc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
