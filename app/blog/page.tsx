import React from "react"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#0b1f35] sm:text-5xl">
          Nexora Insights & Blog
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Enterprise technology updates, accounting guidelines, and compliance frameworks for East Africa.
        </p>
        <div className="mt-12 rounded-2xl border border-gray-200 border-dashed p-12 text-center">
          <p className="text-sm text-gray-500 font-medium">Articles and insights are being compiled by our consultants. Check back shortly!</p>
        </div>
      </div>
    </main>
  )
}
