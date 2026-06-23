import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 🔴 PASTE YOUR 8-CHARACTER FORMSPREE ID HERE:
    const FORMSPREE_FORM_ID = "xjgqvbry"

    // Secure server-to-server dispatch call (Bypasses all browser CORS firewalls)
    const formspreeResponse = await fetch(`https://formspree.io{FORMSPREE_FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })

    if (formspreeResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      const errText = await formspreeResponse.text()
      return NextResponse.json({ error: errText || "Formspree rejected submission" }, { status: 400 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal network drop" }, { status: 500 })
  }
}
