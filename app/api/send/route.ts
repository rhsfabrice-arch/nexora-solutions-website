import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Your private Resend key token
    const RESEND_API_KEY = "re_A4tCBpoZ_BVxWHkxYHsavSnk3VswpRrjy"

    // Secure backend server dispatch call straight to Resend's delivery pipeline
    const emailResponse = await fetch("https://resend.com", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Free sandbox secure origin address
        
        // 🟢 FIX: We are ONLY sending to your verified personal registration email profile. 
        // This removes the custom domain block that was causing Resend to drop your emails.
        to: "nexorasolutionsrw@gmail.com", 
        
        subject: `Nexora Corporate Lead: ${data.name || "New Submission"}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #0b1f35; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
            <h2 style="color: #10b981; margin-bottom: 20px; border-bottom: 2px dashed #cbd5e1; padding-bottom: 10px;">
              New Website Message Submission
            </h2>
            <p style="margin-bottom: 10px;"><strong>Full Name:</strong> ${data.name || "Not Provided"}</p>
            <p style="margin-bottom: 10px;"><strong>Company:</strong> ${data.company || "Not Provided"}</p>
            <p style="margin-bottom: 10px;"><strong>Email Address:</strong> ${data.email || "Not Provided"}</p>
            <p style="margin-bottom: 10px;"><strong>Phone Number:</strong> ${data.phone || "Not Provided"}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="margin-top: 0; font-weight: bold; color: #0b1f35;">Message Parameters:</p>
              <p style="line-height: 1.6; color: #334155; white-space: pre-wrap;">${data.message || "No content provided."}</p>
            </div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center;">
              Nexora Solutions Ltd · Enterprise Business Systems Data Feed
            </p>
          </div>
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
    return NextResponse.json({ error: error.message || "Server environment exception" }, { status: 500 })
  }
}
