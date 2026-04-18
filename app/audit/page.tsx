import { Calendar, Clock, ShieldCheck, FileText } from 'lucide-react'
import AuditForm from '@/components/forms/AuditForm'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Book Your Free Workflow Audit',
  description:
    'Request your free 30-minute workflow audit. We map where your agency is leaking time and commission, and give you a written Workflow Opportunity Report — at no cost.',
  path: '/audit',
})

const REASSURANCE = [
  {
    icon: Clock,
    title: '30 minutes of your time',
    description: 'Focused conversation. No pitch deck, no pressure.',
  },
  {
    icon: FileText,
    title: 'Written Workflow Opportunity Report',
    description:
      'You leave with a document that identifies exactly where your agency is losing time and commission.',
  },
  {
    icon: ShieldCheck,
    title: 'No obligation, no sales pressure',
    description:
      'We only work with agencies that are a clear fit. You decide if and when we take the next step.',
  },
] as const

const WHAT_TO_EXPECT = [
  'We map your current renewal, onboarding, and client communication workflows.',
  'We identify where time is being lost and where commission is at risk today.',
  'We show you the 1–2 highest-impact automations for your agency specifically.',
  'You receive a written Workflow Opportunity Report — whether you hire us or not.',
] as const

export default function AuditPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-36"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 radial-glow"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Free Workflow Audit</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Find Out Exactly Where
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Your Agency Is Leaking Money.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Thirty focused minutes. A written Workflow Opportunity Report. A clear picture of
              what to automate first and what it&rsquo;s worth. No cost, no obligation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + what to expect */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            {/* What to expect */}
            <div className="lg:col-span-2">
              <Reveal>
                <EyebrowBadge variant="muted">What to expect</EyebrowBadge>
                <h2
                  className="mt-3 text-2xl font-semibold leading-tight md:text-3xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  A 30-minute conversation, not a sales call.
                </h2>
                <ul className="mt-6 space-y-4">
                  {WHAT_TO_EXPECT.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed md:text-base"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      <span
                        aria-hidden
                        className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Booking widget placeholder */}
                <div
                  className="mt-10 rounded-xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px dashed var(--color-border-accent)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <Calendar
                      className="mt-0.5 h-5 w-5 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{
                          color: 'var(--color-text-primary)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Prefer to pick a time directly?
                      </p>
                      <p
                        className="mt-1 text-xs leading-relaxed"
                        style={{
                          color: 'var(--color-text-muted)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Submit the form and we&rsquo;ll send you a link to book a slot that works
                        for you — usually within one business day.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form card */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <div
                  className="rounded-2xl p-6 md:p-10"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-accent)',
                  }}
                >
                  <h2
                    className="text-2xl font-semibold leading-tight md:text-3xl"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Request Your Free Audit
                  </h2>
                  <p
                    className="mt-2 text-sm"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Tell us a little about your agency. We&rsquo;ll reply within one business day.
                  </p>

                  <div className="mt-8">
                    <AuditForm />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section
        className="relative border-t py-16 md:py-20"
        style={{ borderColor: 'var(--color-border-accent)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {REASSURANCE.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="flex flex-col items-start">
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: 'rgba(232, 160, 32, 0.08)',
                        border: '1px solid var(--color-border-accent)',
                      }}
                    >
                      <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h3
                      className="text-base font-semibold"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
