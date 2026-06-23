"use client"

import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

// 🔴 PASTE YOUR 8-CHARACTER FORMSPREE ID BETWEEN THE QUOTES HERE:
const FORMSPREE_FORM_ID = "xjgqvbry"

export function ContactCta() {
  // Use Formspree's native official submission tracking hook layers
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            
            {/* Left Column Info Panel */}
            <div className="text-primary-foreground">
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Let&apos;s build your next chapter of growth
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/70">
                Tell us about your business and our team will get back to you with
                a tailored plan for your IT, accounting, and compliance needs.
              </p>

              <ul className="mt-10 space-y-5">
                {/* CLICKABLE EMAIL LINK */}
                <li className="flex items-center gap-4">
                  <a 
                    href="mailto:info@nexorasolutionsrw.qzz.io" 
                    className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-green transition-all duration-300 hover:bg-green/20 hover:scale-105"
                    aria-label="Send Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      Email
                    </span>
                    <a 
                      href="mailto:info@nexorasolutionsrw.qzz.io" 
                      className="font-medium text-white transition-colors duration-200 hover:text-green hover:underline"
                    >
                      info@nexorasolutionsrw.qzz.io
                    </a>
                  </div>
                </li>

                {/* CLICKABLE PHONE LINK */}
                <li className="flex items-center gap-4">
                  <a 
                    href="tel:+250789671130" 
                    className="group flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-green transition-all duration-300 hover:bg-green/20 hover:scale-105"
                    aria-label="Call Phone Number"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      Phone
                    </span>
                    <a 
                      href="tel:+250789671130" 
                      className="font-medium text-white transition-colors duration-200 hover:text-green hover:underline"
                    >
                      +250 789 671 130
                    </a>
                  </div>
                </li>

                {/* OFFICE LOCATION */}
                <li className="flex items-center gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-green">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-white/50">
                      Office
                    </span>
                    <span className="font-medium text-white">
                      Kigali, Rwanda · East Africa
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column Form Layout */}
            <div className="relative rounded-2xl bg-background p-6 sm:p-8">
              {state.succeeded ? (
                /* OFFICIAL IN-PAGE INLINE SUCCESS VIEWER STATE */
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <CheckCircle2 className="h-16 w-16 text-green animate-bounce" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. Your request has been transmitted securely inside the workspace. Our team will review your project parameters and respond shortly.
                  </p>
                </div>
              ) : (
                /* OFFICIAL FORMSPREE HOOKED ACTION CONTAINER */
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact Nexora">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-navy">Full name</label>
                      <input id="name" type="text" name="name" placeholder="Jane Doe" required className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none" />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-navy">Company</label>
                      <input id="company" type="text" name="company" placeholder="Acme Ltd" required className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none" />
                      <ValidationError prefix="Company" field="company" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-navy">Email Address</label>
                      <input id="email" type="email" name="email" placeholder="jane@acme.com" required className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-navy">Phone Number</label>
                      <input id="phone" type="text" name="phone" placeholder="+250 ..." required className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none" />
                      <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-navy">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project or challenge..."
                      required
                      className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/30"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-[#0f9d63] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending Parameters..." : "Send message"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
