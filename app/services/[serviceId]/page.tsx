import React from "react"
// 🟢 IMPORTED: Link component from Next.js to handle client-side routing
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

interface PageProps {
  params: {
    serviceId: string
  }
}

export default function DynamicServicePage({ params }: PageProps) {
  const serviceSlug = params?.serviceId || ""
  const title = serviceSlug.replace("-", " ").toUpperCase()

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        {/* 
          🟢 FIXED LINK WRAPPER: Wrapped the logo in a Next.js Link pointing to "/" (homepage).
          Added hover transitions and a cursor pointer for visual feedback.
        */}
        <Link 
          href="/" 
          className="flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Return to Nexora home page"
        >
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </Link>
        
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
            Nexora Enterprise Solutions
          </span>
          <h1 className="mt-0.5 text-4xl font-extrabold text-navy tracking-tight">
            {title || "SERVICE"}
          </h1>
        </div>
      </div>
      
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Discover custom, reliable solutions for {title.toLowerCase() || "our systems"} tailored to empower your business operations and fuel growth across East Africa.
      </p>
    </main>
  )
}
