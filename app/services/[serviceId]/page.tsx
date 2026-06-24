import React from "react"

// A simple, universal type layout that works for all Next.js versions
interface PageProps {
  params: {
    serviceId: string
  }
}

export default function DynamicServicePage({ params }: PageProps) {
  // Read the variable directly without using "await"
  const serviceSlug = params?.serviceId || ""
  
  // Format the text nicely (e.g. "it-services" becomes "IT SERVICES")
  const title = serviceSlug.replace("-", " ").toUpperCase()

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="border-l-4 border-green pl-4">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Nexora Enterprise Solutions
        </span>
        <h1 className="mt-1 text-4xl font-extrabold text-navy tracking-tight">
          {title || "SERVICE"}
        </h1>
      </div>
      
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
        Discover custom, reliable solutions for {title.toLowerCase() || "our systems"} tailored to empower your business operations and fuel growth across East Africa.
      </p>
    </main>
  )
}
