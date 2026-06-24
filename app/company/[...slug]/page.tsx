import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

// 🟢 REAL CONTENT RECORD: Type out your actual page copy here!
const companyContent: Record<string, { subtitle: string; description: string }> = {
  careers: {
    subtitle: "Build the Future of IT with Nexora",
    description: "Join our fast-growing team of enterprise infrastructure engineers, technical consultants, and accounting automation specialists. At Nexora Solutions, we offer competitive benefits, remote flexibility, and the chance to build scalable corporate systems that empower businesses across East Africa.",
  },
  about: {
    subtitle: "Enterprise-Grade Technology Experts",
    description: "Founded with a mission to eliminate technical friction, Nexora Solutions engineers top-tier custom IT infrastructures, secure network setups, and point-of-sale systems. We serve corporate clients across East Africa, helping businesses modernize workflows and safely scale operations.",
  },
}

interface PageProps {
  params: { slug: string[] }
}

export default function CompanyCatchAll({ params }: PageProps) {
  const currentSlug = params?.slug?.[0] || ""
  const title = currentSlug.replace("-", " ").toUpperCase()

  // Match the slug to real text, or use a default if it's not typed out yet
  const pageData = companyContent[currentSlug] || {
    subtitle: "Nexora Corporate Operations Center",
    description: "Our organizational framework modules, corporate compliance parameters, and industrial consultation structures are active for this segment.",
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
            {pageData.subtitle}
          </span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">
            {title || "COMPANY"}
          </h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        {pageData.description}
      </p>
    </main>
  )
}
