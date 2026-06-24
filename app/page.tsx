import React from "react"
import { SiteHeader } from "@/components/site-header"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      {/* 🟢 Premium Animated Header Component */}
      <SiteHeader />
      
      {/* 
        MASTER LANDING BLOCK LAYOUT: 
        Your homepage components will render inside this vertical flow stack sequence.
      */}
      <main className="flex-1">
        
        {/* Placeholder structural container ensuring your page layout stays stable while rebuilding sections */}
        <section id="home" className="py-20 text-center bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="text-4xl font-heading font-extrabold tracking-tight text-[#0b1f35] sm:text-6xl">
              Empowering Innovation Across East Africa
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade IT systems, cloud infrastructures, automated accounting frameworks, and specialized financial technology solutions built for business growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#contact" className="rounded-full bg-[#0b1f35] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors">
                Get Started
              </a>
              <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Mapped Single-Page Routing Anchors */}
        <section id="services">
          {/* Your Services grid components render cleanly here */}
        </section>

        <section id="why">
          {/* Your Why Nexora column components render cleanly here */}
        </section>

        <section id="process">
          {/* Your Process steps components render cleanly here */}
        </section>

        <section id="industries">
          {/* Your Industries layout components render cleanly here */}
        </section>

        {/* 🟢 Clean Formspree Activated Contact Engine */}
        <ContactCta />
        
      </main>

      {/* 🟢 Synchronized Hover Glow Interactive Footer */}
      <SiteFooter />
    </div>
  )
}
