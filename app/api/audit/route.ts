import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type AuditRequest = {
  name?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as AuditRequest
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail =
      process.env.AUDIT_NOTIFICATION_EMAIL ||
      process.env.CONTACT_TO_EMAIL ||
      process.env.RESEND_TO_EMAIL
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Drrizo <onboarding@resend.dev>'

    if (!resendApiKey || !toEmail) {
      console.info('Customer/GTM Brain audit request received:', {
        name,
        email,
        company,
        service,
        message,
      })
      return NextResponse.json({ ok: true })
    }

    const resend = new Resend(resendApiKey)

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Drrizo GTM Brain request: ${service || 'Customer/GTM Brain Audit'}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        `Request type: ${service || 'Not provided'}`,
        '',
        'GTM context:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to submit Customer/GTM Brain audit request:', error)
    return NextResponse.json({ error: 'Unable to submit request' }, { status: 500 })
  }
}
