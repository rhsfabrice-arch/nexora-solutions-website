"use client"

import React, { useState } from "react"

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

export default function Services() {
  const [openCard, setOpenCard] = useState<number | null>(null)

  return (
    <section id="services" style={{ padding: "80px 0", backgroundColor: "#f8fafc", position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#0f172a", marginBottom: "16px" }}>
            Our Business Solutions
          </h2>
          <p style={{ fontSize: "18px", color: "#475569" }}>
            Click on any solution card below to expand and explore our core corporate implementation parameters.
          </p>
        </div>

        {/* Flex Layout Grid (No broken CSS configurations) */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {servicesList.map((service, idx) => {
            const isOpen = openCard === idx
            
            return (
              <div 
                key={service.title}
                onClick={() => setOpenCard(isOpen ? null : idx)}
                style={{ 
                  flex: "1 1 250px", 
                  maxWidth: "280px",
                  padding: "24px", 
                  borderRadius: "16px", 
                  border: isOpen ? "2px solid #10b981" : "1px solid #e2e8f0", 
                  backgroundColor: isOpen ? "#f0fdf4" : "#ffffff", 
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                }}
              >
                {/* Icon */}
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{service.icon}</div>

                {/* Title */}
                <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#0f172a", marginBottom: "8px", display: "flex", justifyContent: "between", alignItems: "center" }}>
                  <span>{service.title}</span>
                  <span style={{ fontSize: "12px", color: "#64748b", marginLeft: "10px" }}>{isOpen ? "▲" : "▼"}</span>
                </h3>

                {/* Short Text */}
                <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.5" }}>
                  {service.shortDesc}
                </p>

                {/* Dropdown Animation Text */}
                {isOpen && (
                  <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px dashed #cbd5e1" }}>
                    <p style={{ fontSize: "13px", color: "#334155", lineHeight: "1.6" }}>
                      {service.longDesc}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
