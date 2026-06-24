import { SiteHeader } from "@/components/site-header"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"
// Import your other section blocks here (e.g., Hero, Services, Process, etc.)

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* 🟢 Drop your main page section components here right in order */}
        <section id="home">
          {/* <Hero /> */}
        </section>
        <section id="services">
          {/* <ServicesGrid /> */}
        </section>
        <section id="why">
          {/* <WhyNexora /> */}
        </section>
        <section id="process">
          {/* <ProcessRoadmap /> */}
        </section>
        <section id="industries">
          {/* <IndustriesOverview /> */}
        </section>
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
