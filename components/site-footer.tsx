"use client" // 🟢 FIXED: This structural rule tells Next.js to render the social icons safely

import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"
// Importing clean social icons from your lucide-react package
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const columns = [
  {
    title: "Services",
    links: ["IT Services", "Consulting", "QuickBooks", "POS Systems", "Taxation"],
  },
  {
    title: "Company",
    links: ["About", "Why Nexora", "Process", "Industries", "Careers"],
  },
  {
    title: "Resources",
    links: ["Blog", "Case Studies", "Support", "Privacy", "Terms"],
  },
]

// Centralized interactive social handle destinations
const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com", // Replace with your real page address later
    icon: Linkedin,
  },
  {
    name: "X / Twitter",
    href: "https://x.com", // Replace with your real page address later
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com", // Replace with your real page address later
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://instagram.com", // Replace with your real page address later
    icon: Instagram,
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <NexoraMark className="h-8 w-8" />
              <span className="font-heading text-lg font-extrabold tracking-tight text-navy">
                NEXORA Solutions
              </span>
            </div>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Enterprise-grade IT, consulting, and accounting technology
              empowering businesses to grow across East Africa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-green"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nexora Solutions Ltd. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Business Solutions · East Africa</p>
          </div>

          {/* Clean, interactive horizontal social media ribbon grid mapping */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all duration-200 hover:text-green hover:scale-110"
                  aria-label={`Follow Nexora on ${social.name}`}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
