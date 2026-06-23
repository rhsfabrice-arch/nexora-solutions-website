"use client"

import React, { useState, FormEvent } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"

// 🔴 PASTE YOUR 8-CHARACTER FORMSPREE ID BETWEEN THE QUOTES HERE:
const FORMSPREE_FORM_ID = "YOUR_ACTUAL_FORM_ID_HERE"

const contactItems = [
  { icon: Mail, label: "Email", value: "info@nexorasolutionsrw.qzz.io" },
  { icon: Phone, label: "Phone", value: "+250 789 671 130" },
  { icon: MapPin, label: "Office", value: "Kigali, Rwanda · East Africa" },
]

export function ContactCta() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch(`https://formspree.io{FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        setIsSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      } else {
        const errData = await response.json()
        throw new Error(errData.error || "Formspree submission error. Please check your Form ID.")
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network error. Please check your data connection.")
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
                {contactItems.map((c) => (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">
                        {c.label}
                      </span>
                      <span className="font-medium text-white">{c.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Form Layout */}
            <div className="relative rounded-2xl bg-background p-6 sm:p-8">
              {isSuccess ? (
                /* IN-PAGE SUCCESS TAB VIEW */
                <div className="flex flex-col items-center justify-center text-center h-full py-12">
                  <CheckCircle2 className="h-16 w-16 text-green animate-bounce" />
                  <h3 className="mt-4 font-heading text-2xl font-bold text-navy">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                    Thank you for reaching out. Your request has been transmitted securely inside the workspace. Our team will review your project parameters and respond shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-semibold text-green underline hover:text-green-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* ACTUAL RAW INPUT FORM BLOCK */
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact Nexora">
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

                  {errorMessage && (
                    <p className="text-xs font-semibold text-red-500 mt-2 bg-red-50 p-2.5 rounded-lg border border-red-100">
                      ⚠️ {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-[#0f9d63] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending Parameters..." : "Send message"}
                    <ArrowRight className={`h-4 w-4 ${isSubmitting ? "animate-spin" : ""}`} />
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
