"use client"

import React, { useState } from "react"
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
    extendedDesc: "We provide corporate network configuration, server maintenance, active cloud migration security, and proactive 24/7 technical helpdesk support tailored to keep your business workflows scaling smoothly across East Africa."
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    desc: "Strategic advisory and process optimization to help your enterprise scale efficiently and confidently.",
    extendedDesc: "Our advisory experts analyze your current operational workflows, identify production bottlenecks, design automated pipeline sequences, and structure clear technology roadmaps to optimize overhead costs."
  },
  {
    icon: BookOpenCheck,
    title: "QuickBooks Implementation",
    desc: "Certified setup, migration, and training on QuickBooks tailored to your accounting workflows.",
    extendedDesc: "Get complete configuration and deployment of point-of-sale systems alongside full cloud QuickBooks ledger integrations, giving management real-time inventory tracking and multi-branch visibility."
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "End-to-end point-of-sale deployment for retail and hospitality, with inventory and payment integration.",
    extendedDesc: "Seamless deployment of custom retail transactional terminals paired with automated inventory count scripts, credit merchant pathways, and localized secure hardware arrays."
  },
  {
    icon: Calculator,
    title: "Taxation",
    desc: "Compliant tax preparation, filing, and advisory aligned with regional regulatory requirements.",
    extendedDesc: "We handle thorough corporate financial compliance checks, direct tax structuring advisory, and complete alignment with local revenue authorities to shield your organization from legal friction."
  },
  {
    icon: LineChart,
    title: "Accounting Technology",
    desc: "Modern financial systems, automation, and reporting that turn your numbers into clear decisions.",
    extendedDesc: "Deploy scalable cloud based data analytics dashboards that bridge corporate accounting workflows with live executive financial planning matrices."
  },
]

export function Services() {
  // Tracks which card index number is currently clicked open
  const [openCard, setOpenCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index)
  }

  return (
    <section id="services" className="bg-background py-20 lg:py-28 select-none">
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
            solutions modern businesses need to grow. Click a card to expand features.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const isOpen = openCard === idx
            
            return (
              <article
                key={s.title}
                onClick={() => toggleCard(idx)}
                className={`group relative rounded-2xl border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)] transition-all duration-300 cursor-pointer ${
                  isOpen 
                    ? "border-green bg-green/5 shadow-[0_12px_24px_rgba(11,31,53,0.08)]" 
                    : "border-border hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-20px_rgba(11,31,53,0.2)]"
                }`}
              >
                {/* PICTURE / ICON IN MOTION */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green transition-all duration-300 ${
                  isOpen ? "scale-110 bg-green text-white" : ""
                }`}>
                  <div className={isOpen ? "animate-pulse" : "animate-none"}>
                    <s.icon className={`h-6 w-6 transition-transform duration-500 ${isOpen ? "rotate-12 scale-110" : "group-hover:scale-110"}`} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 flex items-center justify-between font-heading text-xl font-bold text-navy">
                  <span className="flex items-center gap-1">
                    {s.title}
                    <ArrowUpRight className={`h-4 w-4 text-muted-foreground transition-all duration-300 ${isOpen ? "opacity-100 text-green translate-x-0.5 -translate-y-0.5" : "opacity-0 group-hover:opacity-100"}`} />
                  </span>
                  <span className={`text-xs text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-green font-bold" : ""}`}>
                    ▼
                  </span>
                </h3>

                {/* Short Original Description */}
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{s.desc}</p>

                {/* SMOOTH SLIDE EXPANSIBLE TAB PANEL */}
                <div className={`transition-all duration-300 ease-out overflow-hidden ${
                  isOpen ? "max-h-60 opacity-100 mt-4 pt-4 border-t border-dashed border-border" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  <p className="text-sm text-navy leading-relaxed bg-background p-3.5 rounded-xl border border-border/60 shadow-inner">
                    {s.extendedDesc}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
