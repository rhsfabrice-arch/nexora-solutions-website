import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyNexora } from "@/components/why-nexora"
import { Process } from "@/components/process"
import { Industries } from "@/components/industries"
import { Testimonials } from "@/components/testimonials"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyNexora />
        <Process />
        <Industries />
        <Testimonials />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
