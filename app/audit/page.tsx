import { Check, Sparkles } from 'lucide-react'
import AuditForm from '@/components/forms/AuditForm'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Customer/GTM Brain Audit',
  description:
    'Request a focused Customer/GTM Brain audit to identify the highest-impact GTM intelligence workflow to build first.',
  path: '/audit',
})

const auditPoints = [
  'Review your current GTM motion, customer sources, sales process, CRM, and follow-up gaps.',
  'Map where customer knowledge lives across calls, email, Slack, support, docs, and founder memory.',
  'Identify the smallest Customer/GTM Brain pilot that can create real business value.',
  'Define the human review, source handling, and BrainOps rhythm needed before expanding.',
]

export default function AuditPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Customer/GTM Brain Audit</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Find the highest-impact GTM Brain workflow to build first.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share your current GTM process, customer sources, sales workflow, CRM, call notes,
              support channels, and growth goals. Drrizo will help identify the smallest
              Customer/GTM Brain pilot that can create real business value.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <EyebrowBadge variant="muted">What This Helps Clarify</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Start with the workflow that matters.
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                The audit is designed for founder-led startups with customer conversations,
                GTM activity, and scattered revenue knowledge that needs to become useful
                account context, follow-ups, insight loops, or decision support.
              </p>
              <div className="mt-8 space-y-4">
                {auditPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-8 rounded-2xl p-5"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-accent-border)',
                }}
              >
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    You do not need a perfect CRM or polished data warehouse. Messy customer
                    context is often exactly where the first GTM Brain workflow should begin.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AuditForm />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
