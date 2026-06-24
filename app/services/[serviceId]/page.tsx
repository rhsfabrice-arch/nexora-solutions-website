import React from "react"
// 🟢 IMPORTED: Reusing your brand mark component
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
      {/* 
        🟢 FIXED CONTAINER: Added a flex row to cleanly align 
        your logo mark right alongside the vertical border line 
      */}
      <div className="flex items-center gap-4 border-l-4 border-green pl-4">
        {/* Logo Mark wrapper with explicit sizing metrics */}
        <div className="flex-shrink-0">
          <NexoraMark className="h-10 w-10 text-green" isParentHovered={false} />
        </div>
        
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
