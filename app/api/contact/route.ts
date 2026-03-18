import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'nkrajput.a6@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, company, industry, bottleneck, referralSource } = body

    // Basic validation
    if (!fullName || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      from: `GrooveGuard Contact <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Audit Request — ${company} (${fullName})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #111118; color: #e2e8f0; border-radius: 12px;">
          <h2 style="color: #3B82F6; margin-bottom: 24px; font-size: 22px;">
            New Free Audit Request
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #232338;">
              <td style="padding: 12px 0; color: #94A3B8; width: 40%;">Name</td>
              <td style="padding: 12px 0; font-weight: 600;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #232338;">
              <td style="padding: 12px 0; color: #94A3B8;">Email</td>
              <td style="padding: 12px 0;">
                <a href="mailto:${email}" style="color: #3B82F6;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #232338;">
              <td style="padding: 12px 0; color: #94A3B8;">Company</td>
              <td style="padding: 12px 0; font-weight: 600;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #232338;">
              <td style="padding: 12px 0; color: #94A3B8;">Industry</td>
              <td style="padding: 12px 0;">${industry || '—'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #232338;">
              <td style="padding: 12px 0; color: #94A3B8;">Biggest Bottleneck</td>
              <td style="padding: 12px 0;">${bottleneck || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #94A3B8;">How they found us</td>
              <td style="padding: 12px 0;">${referralSource || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #1A1A25; border-radius: 8px; border-left: 3px solid #3B82F6;">
            <p style="margin: 0; color: #94A3B8; font-size: 13px;">
              Reply directly to this email to respond to ${fullName}.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
