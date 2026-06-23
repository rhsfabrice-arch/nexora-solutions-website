import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

const contactItems = [
  { icon: Mail, label: "Email", value: "hello@nexorasolutions.com" },
  { icon: Phone, label: "Phone", value: "+254 700 000 000" },
  { icon: MapPin, label: "Office", value: "Nairobi, Kenya · East Africa" },
]

export function ContactCta() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div className="text-primary-foreground">
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
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
                      <span className="font-medium">{c.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <form className="rounded-2xl bg-background p-6 sm:p-8" aria-label="Contact Nexora">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="name" label="Full name" placeholder="Jane Doe" />
                <Field id="company" label="Company" placeholder="Acme Ltd" />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field id="email" label="Email" type="email" placeholder="jane@acme.com" />
                <Field id="phone" label="Phone" placeholder="+254 ..." />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-sm font-medium text-navy">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project or challenge..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/30"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[#0f9d63]"
              >
                Send message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-green focus:ring-2 focus:ring-green/30"
      />
    </div>
  )
}
