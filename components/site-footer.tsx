"use client"

import React, { useState } from "react"
import Link from "next/link"
import { NexoraMark } from "@/components/nexora-mark"

// 🟢 FIXED ROUTING: Configured to absolute root paths (/#section) for home sections 
// and explicit sub-directories (/blog, /support) for dedicated landing pages.
const columns = [
  {
    title: "Services",
    links: [
      { label: "IT Services", href: "/services/it-services" }, // Dynamic page
      { label: "Consulting", href: "/services/consulting" },   // Dynamic page
      { label: "QuickBooks", href: "/services/quickbooks" },   // Dynamic page
      { label: "POS Systems", href: "/services/pos-systems" }, // Dynamic page
      { label: "Taxation", href: "/services/taxation" },       // Dynamic page
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#why" },       // Prepend '/' so it works from any sub-page
      { label: "Why Nexora", href: "/#why" },
      { label: "Process", href: "/#process" }, 
      { label: "Industries", href: "/#industries" },
      { label: "Careers", href: "/careers" },  // Dedicated landing page
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },                 // Dedicated landing page
      { label: "Case Studies", href: "/case-studies" }, // Dedicated landing page
      { label: "Support", href: "/support" },           // Dedicated landing page
      { label: "Privacy", href: "/privacy-policy" },    // Dedicated landing page
      { label: "Terms", href: "/terms-of-service" },    // Dedicated landing page
    ],
  },
]

export function SiteFooter() {
  const [isBrandHovered, setIsBrandHovered] = useState(false)

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            {/* 🟢 FIXED: Points back to main root homepage instead of empty '#' symbol */}
            <Link 
              href="/"
              onMouseEnter={() => setIsBrandHovered(true)}
              onMouseLeave={() => setIsBrandHovered(false)}
              className="inline-flex items-center gap-5 cursor-pointer group select-none relative pl-2 py-2 transition-all duration-200"
              aria-label="Back to top hero landing page"
            >
              <NexoraMark className="h-9 w-9" isParentHovered={isBrandHovered} />
              
              <span 
                className={`font-heading text-xl font-extrabold tracking-tight text-navy transition-all duration-300 ${
                  isBrandHovered ? "text-green [text-shadow:0_0_25px_#10b981,0_0_10px_rgba(16,185,129,0.6)] transform translate-x-1" : ""
                }`}
              >
                NEXORA Solutions
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-muted-foreground">
              Enterprise-grade IT, consulting, and accounting technology
              empowering businesses to grow across East Africa.
            </p>

            {/* Social Ribbon Links Block */}
            <div className="mt-6 flex items-center gap-5">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-200 hover:text-green hover:scale-110" aria-label="LinkedIn">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-200 hover:text-green hover:scale-110" aria-label="Twitter">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-200 hover:text-green hover:scale-110" aria-label="Facebook">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-all duration-200 hover:text-green hover:scale-110" aria-label="Instagram">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexora Solutions Ltd. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Business Solutions · East Africa</p>
        </div>
      </div>
    </footer>
  )
}
