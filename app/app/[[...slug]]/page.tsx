import React from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

interface PageProps {
  params: {
    slug?: string[]
  }
}

export default function CatchAllPages({ params }: PageProps) {
  // Grab the URL folder name (e.g., "privacy-policy" or "blog")
  const currentSlug = params?.slug?.[0] || ""
  
  // Format the slug beautifully (e.g., "privacy-policy" becomes "PRIVACY POLICY")
  const title = currentSlug.replace("-", " ").toUpperCase()

  // Prevent routing conflicts with the true homepage
  if (!currentSlug) return null

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Premium flex row alignment with vertical green marker bar */}
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        {/* Clickable Logo Mark that routes back to homepage */}
        <Link 
          href="/" 
          className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Return to Nexora home page"
        >
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
            Nexora Hub
          </span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">
            {title || "NEXORA"}
          </h1>
        </div>
      </div>
      
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Welcome to the official {title.toLowerCase()} center. We are currently preparing specialized enterprise frameworks and documentation modules for this section.
      </p>
    </main>
  )
}
