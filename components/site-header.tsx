"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { NexoraMark } from "@/components/nexora-mark"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Nexora", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [isBrandHovered, setIsBrandHovered] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="#" 
          onMouseEnter={() => setIsBrandHovered(true)}
          onMouseLeave={() => setIsBrandHovered(false)}
          className="inline-flex items-center gap-5 cursor-pointer group select-none relative py-1" 
          aria-label="Nexora Solutions home"
        >
          <NexoraMark className="h-9 w-9" isParentHovered={isBrandHovered} />
          
          {/* 🟢 ATTRACTIVE TEXT EFFECT: Smooth brand color shift with an ambient mist look */}
          <span 
            className={`font-heading text-lg font-extrabold tracking-tight text-navy transition-all duration-500 ${
              isBrandHovered ? "text-green [text-shadow:0_0_20px_rgba(16,185,129,0.35)]" : ""
            }`}
          >
            NEXORA
            <span className={`transition-colors duration-500 ${isBrandHovered ? "text-green" : "text-muted-foreground"} sm:inline ml-1`}>
              Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-blue"
          >
            Book a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
