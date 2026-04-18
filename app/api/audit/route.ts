import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'nkrajput.a6@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@groovegaurd.com'

interface AuditPayload {
  firstName?: string
  lastName?: string
  agencyName?: string
  email?: string
  phone?: string
  commissionVolume?: string
  painPoint?: string
  message?: string
}

const escape = (input: string) =>
  input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AuditPayload
    const {
      firstName,
      lastName,
      agencyName,
      email,
      phone,
      commissionVolume,
      painPoint,
      message,
    } = body

    if (!firstName || !lastName || !agencyName || !email || !commissionVolume || !painPoint) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const fullName = `${firstName} ${lastName}`.trim()

    const { error } = await resend.emails.send({
      from: `GrooveGuard Audit <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Free Audit Request — ${agencyName} (${fullName})`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #0A0E1A; color: #F5F5F0; border-radius: 12px;">
          <h2 style="color: #E8A020; margin: 0 0 24px; font-size: 22px; font-family: 'Playfair Display', Georgia, serif;">
            New Free Audit Request
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF; width: 42%;">Name</td>
              <td style="padding: 12px 0; font-weight: 600;">${escape(fullName)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Agency</td>
              <td style="padding: 12px 0; font-weight: 600;">${escape(agencyName)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Email</td>
              <td style="padding: 12px 0;">
                <a href="mailto:${escape(email)}" style="color: #E8A020; text-decoration: none;">${escape(email)}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Phone</td>
              <td style="padding: 12px 0;">${phone ? escape(phone) : '—'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Annual Commission Volume</td>
              <td style="padding: 12px 0;">${escape(commissionVolume)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Primary Pain Point</td>
              <td style="padding: 12px 0;">${escape(painPoint)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #9CA3AF; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; white-space: pre-wrap;">${message ? escape(message) : '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #E8A020;">
            <p style="margin: 0; color: #9CA3AF; font-size: 13px;">
              Reply directly to this email to respond to ${escape(fullName)}.
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
    console.error('Audit API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
