"use client"

import React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

// 🔴 PASTE YOUR 8-CHARACTER FORMSPREE ID BETWEEN THE QUOTES HERE:
const FORMSPREE_FORM_ID = "xjgqvbry"

export function ContactCta() {
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
              {/* Native Submission Form (Bypasses Javascript blocks completely) */}
              <form 
                action={`https://formspree.io{FORMSPREE_FORM_ID}`}
                method="POST"
                className="space-y-4" 
                aria-label="Contact Nexora"
              >
                {/* Tells Formspree to automatically return users to your website after sending */}
                <input type="hidden" name="_next" value="https://qzz.io" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" name="name" label="Full name" placeholder="Jane Doe" required />
                  <Field id="company" name="company" label="Company" placeholder="Acme Ltd" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="email" name="email" label="Email" type="email" placeholder="jane@acme.com" required />
                  <Field id="phone" name="phone" label="Phone" placeholder="+250 ..." required />
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
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-[#0f9d63]"
                >
                  Send message
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required = false,
}: {
  id: string
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/30"
      />
    </div>
  )
}
