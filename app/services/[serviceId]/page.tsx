import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

const servicesContent: Record<string, { subtitle: string; description: string }> = {
  "it-services": {
    subtitle: "Reliable Managed IT Support & Infrastructure Services",
    description: "Eliminate downtime and protect your company data with Nexora’s enterprise-grade IT management. We design and maintain secure local server networks, deploy robust business firewalls, set up automated daily data backups, and configure secure remote workspaces for your team. From hardware sourcing to continuous 24/7 network monitoring, we ensure your technical infrastructure scales smoothly with your operations across East Africa.",
  },
  "consulting": {
    subtitle: "Strategic IT Consulting & Digital Transformation Roadmaps",
    description: "Stop guessing your technology needs. Our senior consultants evaluate your current hardware and software systems to identify security risks, operational bottlenecks, and wasted expenses. We then map out a step-by-step digital strategy aligned perfectly with your long-term business goals, helping you invest in technologies that actually increase productivity, reduce costs, and secure a competitive advantage.",
  },
  "quickbooks": {
    subtitle: "Professional QuickBooks Integration, Setup & Staff Training",
    description: "Take absolute control of your business financials. Nexora provides certified, end-to-end QuickBooks implementation tailored to your industry. We safely migrate your legacy financial data, optimize your chart of accounts, configure multi-user security controls, and design automated financial reporting dashboards. Additionally, we provide hands-on, practical training for your accounting team to ensure flawless daily entry and tax-ready reporting.",
  },
  "pos-systems": {
    subtitle: "Cloud-Integrated Point of Sale (POS) Retail Networks",
    description: "Run your retail operations smoothly across multiple branches with our cloud-powered POS solutions. Track inventory changes in real-time, prevent employee leakages, process transactions faster, and access detailed daily sales reports from anywhere in the world. Our robust systems support multi-currency sales, automated barcode scanning, and receipt printing hardware, making it the perfect match for wholesale, retail, and hospitality brands.",
  },
  "taxation": {
    subtitle: "Automated Tax Compliance Systems & Financial Auditing Solutions",
    description: "Take the stress out of regional regulatory compliance. We integrate smart compliance systems directly into your daily transaction networks. Our software solutions automate tax calculations, organize financial logs into clear domestic filing structures, and generate comprehensive end-of-year audit logging maps. We keep your systems perfectly synchronized with the latest regional tax updates, ensuring your business stays fully compliant and audit-ready.",
  },
}

interface PageProps {
  params: {
    serviceId: string | string[]
  }
}

export default function DynamicServicePage({ params }: PageProps) {
  // 🟢 FIXED: Safely extracts the string from an array if Next.js passes it as one
  const serviceSlug = Array.isArray(params?.serviceId) 
    ? params.serviceId[0] 
    : params?.serviceId || ""

  const title = serviceSlug.replace("-", " ").toUpperCase()
  const pageData = servicesContent[serviceSlug] || {
    subtitle: "Nexora Specialized Enterprise Operations",
    description: "Discover custom, reliable solutions for our systems tailored to empower your business operations and fuel growth across East Africa.",
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">{pageData.subtitle}</span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">{title || "SERVICE"}</h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">{pageData.description}</p>
    </main>
  )
}
