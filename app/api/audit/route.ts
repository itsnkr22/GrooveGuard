import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'nkrajput.a6@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@drrizo.com'

interface AuditPayload {
  firstName?: string
  lastName?: string
  agencyName?: string
  email?: string
  phone?: string
  commissionVolume?: string
  commercialMix?: string
  ams?: string
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

/**
 * Crude pre-qualification flags shown in the internal email so we can see
 * at a glance whether a lead is ICP-aligned without opening a CRM.
 */
function qualify(p: AuditPayload) {
  const flags: string[] = []

  // ICP: $500K–$1.5M annual commission
  if (p.commissionVolume === 'Under $500k') flags.push('Below commission floor')
  if (p.commissionVolume === 'Over $1.5M') flags.push('Above commission ceiling (possible enterprise track)')

  // ICP: 60%+ commercial P&C
  if (p.commercialMix === 'Under 60% commercial') flags.push('Commercial mix below ICP threshold')

  // ICP: EZLynx / Applied Epic / HawkSoft preferred
  const preferredAms = ['EZLynx', 'Applied Epic', 'HawkSoft']
  if (p.ams && !preferredAms.includes(p.ams)) {
    if (p.ams === 'No AMS / Spreadsheets') flags.push('No AMS — workflow maturity risk')
    else flags.push(`Non-primary AMS: ${p.ams}`)
  }

  const icpAligned = flags.length === 0
  return { icpAligned, flags }
}

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
      commercialMix,
      ams,
      painPoint,
      message,
    } = body

    if (
      !firstName ||
      !lastName ||
      !agencyName ||
      !email ||
      !commissionVolume ||
      !commercialMix ||
      !ams ||
      !painPoint
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const fullName = `${firstName} ${lastName}`.trim()
    const { icpAligned, flags } = qualify(body)
    const fitBadge = icpAligned
      ? `<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#0F766E;color:#FAF8F3;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">ICP Aligned</span>`
      : `<span style="display:inline-block;padding:4px 10px;border-radius:999px;background:#B91C1C;color:#FAF8F3;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Review — Flags Set</span>`

    const flagsBlock = flags.length
      ? `<div style="margin-top:16px;padding:12px 14px;background:#1A1A25;border-radius:8px;border-left:3px solid #B91C1C;">
          <div style="font-size:11px;font-weight:600;color:#FCA5A5;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;">Qualification flags</div>
          <ul style="margin:0;padding-left:18px;color:#FCA5A5;font-size:13px;line-height:1.6;">
            ${flags.map((f) => `<li>${escape(f)}</li>`).join('')}
          </ul>
        </div>`
      : ''

    const { error } = await resend.emails.send({
      from: `Drrizo Audit <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `${icpAligned ? '✓' : '⚠'} Audit Request — ${agencyName} (${fullName})`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px; background: #0A0E1A; color: #F5F5F0; border-radius: 12px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
            <h2 style="color: #E8A020; margin: 0; font-size: 22px; font-family: 'Playfair Display', Georgia, serif;">
              New Free Audit Request
            </h2>
            ${fitBadge}
          </div>

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
              <td style="padding: 12px 0; color: #9CA3AF;">Annual Commission</td>
              <td style="padding: 12px 0;">${escape(commissionVolume)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">Commercial Mix</td>
              <td style="padding: 12px 0;">${escape(commercialMix)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1F2937;">
              <td style="padding: 12px 0; color: #9CA3AF;">AMS</td>
              <td style="padding: 12px 0;">${escape(ams)}</td>
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

          ${flagsBlock}

          <div style="margin-top: 24px; padding: 16px; background: #111827; border-radius: 8px; border-left: 3px solid #E8A020;">
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
