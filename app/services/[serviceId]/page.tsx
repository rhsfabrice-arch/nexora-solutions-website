interface Props {
  params: { serviceId: string }
}

export default function DynamicServicePage({ params }: Props) {
  // Format slug text nicely (e.g. "it-services" becomes "It Services")
  const title = params.serviceId.replace("-", " ")

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 capitalize">
      <h1 className="text-4xl font-extrabold text-navy font-heading">{title}</h1>
      <p className="mt-4 text-muted-foreground lowercase">
        Explore enterprise-grade solutions for {title} built by Nexora Solutions.
      </p>
    </main>
  )
}
