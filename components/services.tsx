"use client"

import React, { useState } from "react"
import {
  Server,
  Lightbulb,
  BookOpenCheck,
  ScanLine,
  Calculator,
  LineChart,
  X,
} from "lucide-react"

// 🟢 EXTENDED STRUCTURE: Added visual anchors and highly specific identifiers for the modal viewports
const services = [
  {
    icon: Server,
    title: "IT Services",
    desc: "Managed IT, networks, cloud infrastructure, security, and reliable support that keeps your operations running.",
    extendedDesc: "We provide corporate network configuration, server maintenance, active cloud migration security, and proactive 24/7 technical helpdesk support tailored to keep your business workflows scaling smoothly across East Africa.",
    meta: "Infrastructure · Cloud Support · Systems Engineering",
    bgPattern: "bg-gradient-to-br from-blue-600 to-indigo-900"
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    desc: "Strategic advisory and process optimization to help your enterprise scale efficiently and confidently.",
    extendedDesc: "Our advisory experts analyze your current operational workflows, identify production bottlenecks, design automated pipeline sequences, and structure clear technology roadmaps to optimize overhead costs.",
    meta: "Digital Transformation · Overhead Optimization",
    bgPattern: "bg-gradient-to-br from-emerald-600 to-teal-900"
  },
  {
    icon: BookOpenCheck,
    title: "QuickBooks Implementation",
    desc: "Certified setup, migration, and training on QuickBooks tailored to your accounting workflows.",
    extendedDesc: "Get complete configuration and deployment of point-of-sale systems alongside full cloud QuickBooks ledger integrations, giving management real-time inventory tracking and multi-branch visibility.",
    meta: "Ledger Migration · Auditing Dashboards",
    bgPattern: "bg-gradient-to-br from-orange-500 to-amber-800"
  },
  {
    icon: ScanLine,
    title: "POS Systems",
    desc: "End-to-end point-of-sale deployment for retail and hospitality, with inventory and payment integration.",
    extendedDesc: "Seamless deployment of custom retail transactional terminals paired with automated inventory count scripts, credit merchant pathways, and localized secure hardware arrays.",
    meta: "Multi-branch Logging · Retail Hardware",
    bgPattern: "bg-gradient-to-br from-violet-600 to-purple-950"
  },
  {
    icon: Calculator,
    title: "Taxation",
    desc: "Compliant tax preparation, filing, and advisory aligned with regional regulatory requirements.",
    extendedDesc: "We handle thorough corporate financial compliance checks, direct tax structuring advisory, and complete alignment with local revenue authorities to shield your organization from legal friction.",
    meta: "Revenue Sync · Compliance Auditing",
    bgPattern: "bg-gradient-to-br from-red-600 to-rose-950"
  },
  {
    icon: LineChart,
    title: "Accounting Technology",
    desc: "Modern financial systems, automation, and reporting that turn your numbers into clear decisions.",
    extendedDesc: "Deploy scalable cloud based data analytics dashboards that bridge corporate accounting workflows with live executive financial planning matrices.",
    meta: "Analytics Dashboards · Forecasting Matrices",
    bgPattern: "bg-gradient-to-br from-sky-600 to-cyan-950"
  },
]

export function Services() {
  // Tracks which card index is clicked open for the modal popup overlay
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null)

  const activeService = activeModalIdx !== null ? services[activeModalIdx] : null

  return (
    <section id="services" className="bg-background py-20 lg:py-28 select-none relative">
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
            solutions modern businesses need to grow. Click any card to explore.
          </p>
        </div>

        {/* Core Services Overview Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <article
              key={s.title}
              onClick={() => setActiveModalIdx(idx)}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-[0_2px_8px_rgba(11,31,53,0.04)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_20px_40px_-20px_rgba(11,31,53,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green group-hover:bg-green group-hover:text-white transition-all duration-300">
                <s.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="mt-5 font-heading text-xl font-bold text-navy flex items-center gap-2 group-hover:text-green transition-colors duration-200">
                {s.title}
              </h3>

              <p className="mt-2.5 leading-relaxed text-muted-foreground text-sm">{s.desc}</p>
              
              <div className="mt-4 text-xs font-semibold text-green inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                Learn more <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🟢 IMMERSIVE POPUP MODAL OVERLAY PORTAL */}
      {activeService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveModalIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Main Container Window */}
          <div 
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-card shadow-2xl border border-border flex flex-col md:flex-row transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside the window
          >
            {/* Left Column Layout: Branded Image & Visual Anchor Placeholder */}
            <div className={`w-full md:w-2/5 p-8 flex flex-col justify-between text-white relative overflow-hidden ${activeService.bgPattern}`}>
              {/* Decorative Geometric Light Ring Shapes */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-45 h-45 rounded-full bg-black/20 blur-xl pointer-events-none" />
              
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
                <activeService.icon className="h-7 w-7 text-white animate-pulse" />
              </div>

              <div className="relative z-10 mt-16 md:mt-0">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-75 block text-white/90">
                  {activeService.meta}
                </span>
                <h4 className="mt-2 text-2xl font-black font-heading tracking-tight leading-tight">
                  {activeService.title}
                </h4>
              </div>
            </div>

            {/* Right Column Layout: Real Technical Descriptions */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-between bg-card relative">
              {/* Close Button element anchor */}
              <button 
                onClick={() => setActiveModalIdx(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-navy transition-all duration-200"
                aria-label="Close detail viewport panel"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="pr-2 pt-4 md:pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-green">
                  Service Framework Deep-Dive
                </span>
                <h5 className="mt-1 text-xl font-bold text-navy font-heading">
                  Integrated Engineering Blueprint
                </h5>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {activeService.desc}
                </p>
                
                <div className="mt-5 p-4 rounded-xl bg-secondary/80 border border-border/60 shadow-inner">
                  <p className="text-xs font-medium text-navy leading-relaxed">
                    {activeService.extendedDesc}
                  </p>
                </div>
              </div>

              {/* Action Button Navigation Trigger */}
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setActiveModalIdx(null)}
                  className="px-5 py-2.5 bg-navy text-white text-xs font-bold rounded-xl hover:bg-green shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Got it, close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
