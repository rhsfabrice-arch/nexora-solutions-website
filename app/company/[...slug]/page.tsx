import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

interface PageProps {
  params: { slug: string[] }
}

export default function ResourcesCatchAll({ params }: PageProps) {
  const currentSlug = params?.slug?.[0] || ""
  const title = currentSlug.replace("-", " ").toUpperCase()

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        <Link href="/" className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer">
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">Nexora Resources Hub</span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">{title || "RESOURCE"}</h1>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Welcome to the {title.toLowerCase()} portal. Vetted technical case reviews, articles, and enterprise documentation are processing for activation.
      </p>
    </main>
  )
}
