import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

const resourcesContent: Record<string, { subtitle: string; description: string }> = {
  blog: {
    subtitle: "Tech Insights & Trends",
    description: "Stay ahead of the curve with expert technology guides, corporate accounting tips, security updates, and modern point-of-sale breakdowns curated directly by the senior engineering team at Nexora Solutions.",
  },
  support: {
    subtitle: "24/7 Corporate Technical Desk",
    description: "Need immediate assistance? Our dedicated technical customer service team is standing by to resolve infrastructure server glitches, point-of-sale transaction issues, accounting setups, or remote workspace network drops.",
  },
  "case-studies": {
    subtitle: "Real Results For East African Brands",
    description: "Explore deep-dive technical reviews highlighting how Nexora Solutions completely overhauled outmoded inventory tracking, secured legacy accounting infrastructure, and optimized corporate workflows for regional enterprises.",
  },
  "privacy-policy": {
    subtitle: "Data Security Compliance Parameters",
    description: "Nexora Solutions takes data privacy seriously. This document outlines how we securely isolate client server data, manage secure QuickBooks integrations, deploy firewalls, and maintain absolute confidentiality across all enterprise contracts.",
  },
  "terms-of-service": {
    subtitle: "Legal Operations & Service Framework",
    description: "Review our standard engineering service level agreements, legal service boundaries, system warranty parameters, and software support framework required for project engagement and cross-regional enterprise infrastructure maintenance.",
  },
}

interface PageProps {
  params: { slug: string | string[] }
}

export default function ResourcesCatchAll({ params }: PageProps) {
  // 🟢 FIXED: Safely extracts the string from the dynamic routing catch-all array
  const currentSlug = Array.isArray(params?.slug) 
    ? params.slug[0] 
    : params?.slug || ""

  const title = currentSlug.replace("-", " ").toUpperCase()
  const pageData = resourcesContent[currentSlug] || {
    subtitle: "Nexora Client Support Library",
    description: "Vetted technical architecture blueprints, corporate documentation logs, and regional analytical whitepapers are live for client review.",
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">{pageData.subtitle}</span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">{title || "RESOURCE"}</h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">{pageData.description}</p>
    </main>
  )
}
