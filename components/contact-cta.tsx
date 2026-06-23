"use client"

import React, { useState, FormEvent } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

export function ContactCta() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      // 🟢 PRODUCTION ROUTE: Replace YOUR_NEW_FORMSPREE_ID with your clean 8-character Formspree ID
      const response = await fetch("mlgyddor", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        const errData = await response.json()
        throw new Error(errData.error || "Formspree gateway distribution error.")
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network transmission error. Please try again.")
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              {isSuccess ? (
                /* IN-PAGE INLINE SUCCESS VIEW */
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <CheckCircle2 className="h-16 w-16 text-green animate-bounce" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. Your request has been transmitted securely. Our team will review your project parameters and respond shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-semibold text-green underline hover:text-green-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact Nexora">
                  {errorMessage && (
                    <div className="rounded-xl bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-200">
                      {errorMessage}
                    </div>
                  )}
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
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0f9d63] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
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

// Simple internal helper component mapping to preserve your existing styling framework layouts
function Field({ id, name, label, type = "text", placeholder, required }: { id: string, name: string, label: string, type?: string, placeholder: string, required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/30"
      />
    </div>
  )
}
