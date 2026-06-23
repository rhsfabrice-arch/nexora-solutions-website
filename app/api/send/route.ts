import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // 🔴 PASTE YOUR RESEND API KEY OBTAINED FROM RESEND.COM HERE:
    const RESEND_API_KEY = "re_A4tCBpoZ_BVxWHkxYHsavSnk3VswpRrjy"

    // Server-to-server email dispatch directly via Vercel's backend environment
    const emailResponse = await fetch("https://resend.com", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Free secure delivery address verified by default
        to: "info@nexorasolutionsrw.qzz.io", // Your target company business mailbox
        subject: `New Nexora Corporate Lead: ${data.name}`,
        html: `
          <h3>New Website Message Submission</h3>
          <p><strong>Full Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Email Address:</strong> ${data.email}</p>
          <p><strong>Phone Number:</strong> ${data.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      })
    })

    if (emailResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      const errLogs = await emailResponse.text()
      return NextResponse.json({ error: errLogs }, { status: 400 })
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
