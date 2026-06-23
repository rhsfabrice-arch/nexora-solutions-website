"use client"

import React, { useState } from "react"
import {
  Server,
  Lightbulb,
  BookOpenCheck,
  ScanLine,
  Calculator,
  LineChart,
  ArrowUpRight
} from "lucide-react"

const services = [
  {
    icon: Server,
    title: "IT Services",
    desc: "Managed IT, networks, cloud infrastructure, security, and reliable support that keeps your operations running.",
    extendedDesc: "We provide complete corporate network installations, server maintenance, cloud migration security, and proactive 24/7 technical helpdesk support tailored to keep your business workflows scaling across East Africa without interruptions."
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    desc: "Strategic advisory and process optimization to help your enterprise scale efficiently and confidently.",
    extendedDesc: "Our advisory experts analyze your current operational technology, spot bottlenecks, design automated workflow pipelines, and structure clear roadmap architectures to optimize your corporate overhead costs."
  },
  {
    icon: BookOpenCheck,
    title: "QuickBooks Implementation",
    desc: "Certified setup, migration, and training on QuickBooks tailored to your accounting workflows.",
    extendedDesc: "Get complete configuration and deployment of cloud QuickBooks ledger integrations. This gives your management real-time inventory tracking and multi-branch financial visibility."
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "End-to-end point-of-sale deployment for retail and hospitality, with inventory and payment integration.",
    extendedDesc: "Seamless deployment of custom point-of-sale hardware configurations paired with real-time transactional monitoring systems built for modern retail operations."
  },
  {
    icon: Calculator,
    title: "Taxation",
    desc: "Compliant tax preparation, filing, and advisory aligned with regional regulatory requirements.",
    extendedDesc: "We handle thorough end-of-year corporate auditing, direct tax structuring advisory, and complete alignment with local revenue authority compliance to shield your organization from legal friction."
  },
  {
    icon: LineChart,
    title: "Accounting Technology",
    desc: "Modern digital ledger management and financial reporting systems custom built for scale.",
    extendedDesc: "Deploy scalable cloud based data analytics dashboards that bridge corporate accounting workflows with live executive financial planning matrices."
  }
]

export default function ServicesSection() {
  // Tracks which card index number is currently clicked open
  const [openCard, setOpenCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 bg-slate-50 relative z-10 block">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Our Business Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Click on any solution card below to expand and explore our core corporate implementation parameters.
          </p>
        </div>

        {/* COMPACT RESPONSIVE INTERACTIVE GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            const isOpen = openCard === idx
            
            return (
              <div 
                key={service.title}
                onClick={() => setOpenCard(isOpen ? null : idx)}
                className={`flex flex-col p-6 rounded-2xl border text-left select-none cursor-pointer transition-all duration-300 ${
                  isOpen 
                    ? "border-emerald-500 bg-emerald-50/30 shadow-md ring-1 ring-emerald-500/20" 
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                {/* ICON CONTAINER WITH SMOOTH MOTION HOVER */}
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 ${
                  isOpen 
                    ? "bg-emerald-500 text-white scale-110 rotate-3" 
                    : "bg-slate-100 text-slate-700 group-hover:scale-110"
                }`}>
                  {/* Small Picture in Motion Layout Wrapper */}
                  <div className={isOpen ? "animate-bounce" : "animate-none"}>
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                </div>

                {/* Title and Dropdown Arrow Utility */}
                <h3 className="text-lg font-bold text-slate-950 mb-2 flex items-center justify-between">
                  <span>{service.title}</span>
                  <span className={`text-xs text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : ""}`}>
                    ▼
                  </span>
                </h3>

                {/* Short Original Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                  {service.desc}
                </p>

                {/* DYNAMIC OPENING EXPANDABLE TAB PANEL */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-60 opacity-100 mt-4 pt-4 border-t border-dashed border-slate-200" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <p className="text-xs text-slate-700 leading-relaxed bg-white border border-slate-100 p-3 rounded-xl shadow-inner flex items-start gap-2">
                    <ArrowUpRight size={14} className="text-emerald-500 flex-shrink-0 mt-0.5 animate-pulse" />
                    <span>{service.extendedDesc}</span>
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
