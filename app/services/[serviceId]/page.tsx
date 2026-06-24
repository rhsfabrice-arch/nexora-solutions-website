import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

// 🟢 REAL SERVICES CONTENT: Tailored descriptions for each enterprise service offering
const servicesContent: Record<string, { subtitle: string; description: string }> = {
  "it-services": {
    subtitle: "Managed IT Support & Cloud Infrastructure",
    description: "Deploy robust corporate computing foundations. Nexora Solutions engineers scalable local network setups, localized security firewalls, remote cloud workspaces, server virtualization configurations, and continuous technical systems monitoring to ensure zero business downtime across your East African facilities.",
  },
  "consulting": {
    subtitle: "Strategic Enterprise Architecture Strategy",
    description: "Align your corporate operational targets with modern technology investments. Our senior engineering staff evaluates your legacy technical stack, analyzes system vulnerabilities, and builds actionable long-term digital growth roadmaps tailored to maximize operational efficiency.",
  },
  "quickbooks": {
    subtitle: "Certified QuickBooks Deployments & Training",
    description: "Streamline your corporate accounting operations. We deliver professional enterprise-wide setup, legacy ledger database migrations, customized multi-user authorization configs, chart of accounts optimization, and hands-on staff execution training for QuickBooks modules.",
  },
  "pos-systems": {
    subtitle: "Robust Retail Point of Sale Networks",
    description: "Modernize your retail or supply operations. Nexora installs cloud-integrated transactional retail terminals built with heavy-duty inventory control frameworks, real-time branch sales logging, multi-currency processing capabilities, and barcode integration systems.",
  },
  "taxation": {
    subtitle: "Automated Regulatory Compliance Systems",
    description: "Eliminate regional regulatory compliance friction. We integrate specialized tax monitoring interfaces that automate domestic filing structures, sync transactional tax computations directly with point of sale equipment, and generate comprehensive end-of-year audit logging maps.",
  },
}

interface PageProps {
  params: {
    serviceId: string
  }
}

export default function DynamicServicePage({ params }: PageProps) {
  const serviceSlug = params?.serviceId || ""
  const title = serviceSlug.replace("-", " ").toUpperCase()

  // Match the service link slug to its custom paragraph data blocks
  const pageData = servicesContent[serviceSlug] || {
    subtitle: "Nexora Specialized Enterprise Operations",
    description: "Discover custom, reliable solutions for our systems tailored to empower your business operations and fuel growth across East Africa.",
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        <Link 
          href="/" 
          className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Return to Nexora home page"
        >
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
            {pageData.subtitle}
          </span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">
            {title || "SERVICE"}
          </h1>
        </div>
      </div>
      
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        {pageData.description}
      </p>
    </main>
  )
}
