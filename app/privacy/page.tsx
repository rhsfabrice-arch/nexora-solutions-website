import React from "react"
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[#0b1f35] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
          <p>Nexora Solutions Ltd operates corporate automation models across East Africa. We protect client operational datasets with institutional security protocols.</p>
          <h2 className="text-lg font-bold text-[#0b1f35] mt-6">Data Collection</h2>
          <p>We collect form metadata containing company names, representative identities, and system parameters solely to process project evaluations.</p>
        </div>
      </div>
    </main>
  )
}
