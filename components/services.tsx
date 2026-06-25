"use client"

import React, { useState } from "react"

const servicesList = [
  { 
    id: "it-services", 
    title: "IT Services", 
    desc: "Managed IT support and cloud infrastructure blueprints.",
    longDesc: "We provide corporate network configuration, server maintenance, active cloud migration security, and proactive 24/7 technical helpdesk support tailored to keep your business workflows scaling smoothly across East Africa.",
    meta: "Infrastructure · Cloud Support · Systems Engineering",
    imageUrl: "/images/it-services.jpeg" 
  },
  { 
    id: "consulting", 
    title: "Business Consulting", 
    desc: "Strategic advisory and workflow transformation roadmaps.",
    longDesc: "Our advisory experts analyze your current operational workflows, identify production bottlenecks, design automated pipeline sequences, and structure clear technology roadmaps to optimize overhead costs.",
    meta: "Digital Transformation · Overhead Optimization",
    imageUrl: "/images/business-consulting.jpeg" 
  },
  { 
    id: "quickbooks", 
    title: "QuickBooks Integration", 
    desc: "Certified setup, file migrations, and custom dashboards.",
    longDesc: "Get complete configuration and deployment of point-of-sale systems alongside full cloud QuickBooks ledger integrations, giving management real-time inventory tracking and multi-branch visibility.",
    meta: "Ledger Migration · Auditing Dashboards",
    imageUrl: "/images/quickbooks-integration.jpeg" 
  },
  { 
    id: "pos-systems", 
    title: "POS Systems", 
    desc: "Cloud retail transactional terminals and inventory tracking.",
    longDesc: "Seamless deployment of custom retail transactional terminals paired with automated inventory count scripts, credit merchant pathways, and localized secure hardware arrays.",
    meta: "Multi-branch Logging · Retail Hardware",
    imageUrl: "/images/pos-systems.jpeg" 
  },
  { 
    id: "taxation", 
    title: "Taxation Systems", 
    desc: "Automated regional compliance and automated filing structures.",
    longDesc: "We handle thorough corporate financial compliance checks, direct tax structuring advisory, and complete alignment with local revenue authorities to shield your organization from legal friction.",
    meta: "Revenue Sync · Compliance Auditing",
    // 🟢 SECURE FALLBACK PATH: Using a direct high-speed uncompressed hosted cloud asset link
    imageUrl: "https://unsplash.com" 
  },
  { 
    id: "accounting-technology", 
    title: "Accounting Technology", 
    desc: "Modern reporting frameworks and cloud ledger integrations.",
    longDesc: "Deploy scalable cloud based data analytics dashboards that bridge corporate accounting workflows with live executive financial planning matrices.",
    meta: "Analytics Dashboards · Forecasting Matrices",
    imageUrl: "/images/accounting-technology.jpeg" 
  }
]

export function Services() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const currentService = activeIdx !== null ? servicesList[activeIdx] : null

  return (
    <section id="services" style={{ padding: "80px 20px", background: "#ffffff", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div>
          <span style={{ color: "#10b981", fontSize: "14px", fontWeight: "bold" }}>What we do</span>
          <h2 style={{ color: "#0b1f35", fontSize: "32px", fontWeight: "800", marginTop: "10px" }}>Complete business technology, under one roof</h2>
          <p style={{ color: "#6b7280", marginTop: "12px" }}>Click any card below to open interactive operational parameters.</p>
        </div>

        {/* Main Grid View */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
          {servicesList.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setActiveIdx(idx)}
              style={{ padding: "28px", border: "1px solid #e5e7eb", borderRadius: "16px", cursor: "pointer", background: "#f9fafb", transition: "all 0.2s" }}
            >
              <h3 style={{ color: "#0b1f35", fontSize: "20px", fontWeight: "bold", margin: "0 0 10px 0" }}>{s.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 16px 0" }}>{s.desc}</p>
              <span style={{ color: "#10b981", fontSize: "12px", fontWeight: "bold" }}>Learn more →</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Popup Window */}
      {currentService && (
        <div 
          onClick={() => setActiveIdx(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", background: "rgba(11,31,53,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "750px", background: "#ffffff", borderRadius: "24px", overflow: "hidden", border: "1px solid #e5e7eb", display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            
            {/* 🟢 FIXED DUAL-LAYER CONTAINER OVERLAY: 
                Renders background graphics natively through absolute layout containers to ensure immediate asset delivery */}
            <div 
              style={{
                flex: "1 1 250px",
                minHeight: "250px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#ffffff",
                position: "relative",
                backgroundColor: "#0f172a",
                overflow: "hidden"
              }}
            >
              {/* Native background layout filter layer */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${currentService.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.85,
                  zIndex: 1,
                  pointerEvents: "none"
                }}
              />

              {/* Readability protective overlay filter */}
              <div 
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(15,23,42,0.9) 40%, rgba(15,23,42,0.3) 100%)",
                  zIndex: 2,
                  pointerEvents: "none"
                }}
              />

              <div style={{ fontSize: "24px", position: "relative", zIndex: 10, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>💎</div>
              <div style={{ position: "relative", zIndex: 10 }}>
                <span style={{ fontSize: "10px", fontWeight: "bold", tracking: "wider", opacity: 0.9, textTransform: "uppercase", display: "block", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
                  {currentService.meta}
                </span>
                <h4 style={{ fontSize: "24px", fontWeight: "900", margin: "6px 0 0 0", lineHeight: "1.2", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                  {currentService.title}
                </h4>
              </div>
            </div>

            {/* Right Side Content Details */}
            <div style={{ flex: "1 1 350px", padding: "32px", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff" }}>
              <button 
                onClick={() => setActiveIdx(null)}
                style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#6b7280" }}
              >
                ✕
              </button>

              <div style={{ paddingTop: "10px" }}>
                <span style={{ color: "#10b981", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase" }}>Service Framework Deep-Dive</span>
                <h5 style={{ color: "#0b1f35", fontSize: "20px", fontWeight: "bold", margin: "4px 0 14px 0" }}>Integrated Engineering Blueprint</h5>
                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: "1.5" }}>{currentService.desc}</p>
                
                <div style={{ marginTop: "16px", padding: "14px", background: "#f3f4f6", border: "1px dashed #e5e7eb", borderRadius: "12px" }}>
                  <p style={{ color: "#0b1f35", fontSize: "13px", lineHeight: "1.5", margin: 0 }}>{currentService.longDesc}</p>
                </div>
              </div>

              {/* Footer action row */}
              <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
                <a 
                  href={`/services/${currentService.id}`}
                  style={{ fontSize: "13px", fontWeight: "bold", color: "#10b981", textDecoration: "none" }}
                >
                  View full landing page ↗
                </a>
                <button 
                  onClick={() => setActiveIdx(null)}
                  style={{ padding: "10px 20px", background: "#0b1f35", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}
