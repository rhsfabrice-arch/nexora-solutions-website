import React from "react"
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[#0b1f35] sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-600">
          <p>By engaging Nexora Solutions Ltd for IT consulting, QuickBooks accounting architecture provisioning, or enterprise business compliance feeds, you agree to these baseline structural parameters.</p>
          <h2 className="text-lg font-bold text-[#0b1f35] mt-6">Service Provisioning</h2>
          <p>All tech support protocols, network design operations, and consultation parameters are executed based on explicit statement-of-work assignments.</p>
        </div>
      </div>
    </main>
  )
}
