import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // 🔴 CHANGE THIS to your real 8-character Formspree ID:
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
      return NextResponse.json({ error: errText }, { status: 400 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
