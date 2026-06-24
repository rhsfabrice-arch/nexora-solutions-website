import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

const companyContent: Record<string, { subtitle: string; description: string }> = {
  careers: {
    subtitle: "Build Your Professional Future with Nexora Solutions",
    description: "Are you passionate about engineering high-impact technology solutions? Nexora Solutions is a rapidly growing hub for enterprise network engineers, technical consultants, and financial software experts. We offer a highly collaborative environment, competitive compensation, continuous professional training, and the unique opportunity to build technology that drives business growth across East Africa. Explore our open positions and build your career with us today.",
  },
  about: {
    subtitle: "Who We Are: Technology Partner for East African Businesses",
    description: "Nexora Solutions was founded with a clear mission: to eliminate technical friction and protect corporate assets for growing businesses. We specialize in engineering secure IT infrastructures, deploying streamlined accounting software, and installing reliable point of sale networks. By acting as a trusted technology partner, we help regional enterprises modernize their daily workflows, secure critical databases, and scale confidently.",
  },
}

interface PageProps {
  params: { slug: string[] }
}

export default function CompanyCatchAll({ params }: PageProps) {
  const currentSlug = params?.slug?.[0] || ""
  const title = currentSlug.replace("-", " ").toUpperCase()
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
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">{pageData.subtitle}</span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">{title || "COMPANY"}</h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">{pageData.description}</p>
    </main>
  )
}
