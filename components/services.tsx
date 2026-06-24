"use client"

import React, { useState } from "react"
import Link from "next/link"

const servicesList = [
  { id: "it-services", title: "IT Services", desc: "Managed IT support and cloud infrastructure blueprints." },
  { id: "consulting", title: "Business Consulting", desc: "Strategic advisory and workflow transformation roadmaps." },
  { id: "quickbooks", title: "QuickBooks Integration", desc: "Certified setup, file migrations, and custom dashboards." },
  { id: "pos-systems", title: "POS Systems", desc: "Cloud retail transactional terminals and inventory tracking." },
  { id: "taxation", title: "Taxation Systems", desc: "Automated regional compliance and automated filing structures." },
  { id: "accounting-technology", title: "Accounting Technology", desc: "Modern reporting frameworks and cloud ledger integrations." }
]

export function Services() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const currentService = activeIdx !== null ? servicesList[activeIdx] : null

  return (
    <section id="services" style={{ padding: "80px 20px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        <div>
          <span style={{ color: "#10b981", fontSize: "14px", fontWeight: "bold", uppercase: "true" }}>What we do</span>
          <h2 style={{ color: "#0b1f35", fontSize: "32px", fontWeight: "800", marginTop: "10px" }}>Complete business technology, under one roof</h2>
          <p style={{ color: "#6b7280", marginTop: "12px" }}>Click any card below to open interactive operational parameters.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
          {servicesList.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => setActiveIdx(idx)}
              style={{ padding: "28px", border: "1px solid #e5e7eb", borderRadius: "16px", cursor: "pointer", background: "#f9fafb" }}
            >
              <h3 style={{ color: "#0b1f35", fontSize: "20px", fontWeight: "bold", margin: "0 0 10px 0" }}>{s.title}</h3>
              <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 16px 0" }}>{s.desc}</p>
              <span style={{ color: "#10b981", fontSize: "12px", fontWeight: "bold" }}>Learn more →</span>
            </div>
          ))}
        </div>

      </div>

      {currentService && (
        <div 
          onClick={() => setActiveIdx(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "center", justifyCenter: "center", padding: "20px", background: "rgba(11,31,53,0.6)", backdropFilter: "blur(4px)" }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "600px", background: "#ffffff", borderRadius: "24px", padding: "32px", border: "1px solid #e5e7eb", position: "relative", margin: "auto" }}
          >
            <button 
              onClick={() => setActiveIdx(null)}
              style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#6b7280" }}
            >
              ✕
            </button>

            <span style={{ color: "#10b981", fontSize: "12px", fontWeight: "bold" }}>Integrated System Overview</span>
            <h4 style={{ color: "#0b1f35", fontSize: "28px", fontWeight: "800", margin: "4px 0 16px 0" }}>{currentService.title}</h4>
            <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: "1.6" }}>{currentService.desc}</p>

            <div style={{ marginTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #e5e7eb", paddingTop: "16px" }}>
              <Link 
                href={`/services/${currentService.id}`}
                style={{ fontSize: "13px", fontWeight: "bold", color: "#10b981", textDecoration: "none" }}
              >
                View full landing page ↗
              </Link>
              <button 
                onClick={() => setActiveIdx(null)}
                style={{ padding: "10px 20px", background: "#0b1f35", color: "#ffffff", border: "none", borderRadius: "10px", fontSize: "12px", fontWeight: "bold", cursor: "pointer" }}
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
