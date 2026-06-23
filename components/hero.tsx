import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* subtle geometric backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, rgba(22,185,120,0.08), transparent 70%), radial-gradient(50% 40% at 0% 10%, rgba(18,63,112,0.07), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-blue">
            <span className="h-2 w-2 rounded-full bg-green" />
            Enterprise Business Solutions · East Africa
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Technology that moves your business{" "}
            <span className="text-green">upward.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nexora Solutions Ltd delivers IT services, consulting, QuickBooks
            implementation, POS systems, taxation, and accounting technology —
            built to scale trusted, modern enterprises across the region.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-[#0f9d63]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-secondary"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-green" />
            Certified QuickBooks &amp; POS implementation partners
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary" aria-hidden />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-20px_rgba(11,31,53,0.25)]">
            <Image
              src="/hero-dashboard.png"
              alt="Nexora accounting and business technology dashboard with financial charts and POS widgets"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
