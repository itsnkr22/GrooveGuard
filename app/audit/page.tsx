import { Check, Sparkles } from 'lucide-react'
import AuditForm from '@/components/forms/AuditForm'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI Project Audit for Startup Founders',
  description:
    'Request a focused AI project audit for a content engine, AI-powered MVP, or startup workflow system.',
  path: '/audit',
})

const auditPoints = [
  'Clarify whether the first build should be a content engine, AI MVP, or supporting workflow.',
  'Map your existing source material, product idea, user workflow, and launch constraints.',
  'Identify the smallest practical system that can create learning quickly.',
  'Define the review, guardrails, and handoff process needed before launch.',
]

export default function AuditPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>AI Project Audit</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Find the first AI system worth building.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share your content sources, MVP idea, target users, workflow, and timeline. Drrizo
              will review the context and help shape a practical first step.
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
                Scope before you overbuild.
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                The audit is designed for founders who have useful raw material or a promising AI
                product direction, but need a sharper build plan before spending time and budget.
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
                    You do not need a complete technical spec. A clear problem, useful source
                    material, or early product idea is enough to begin the conversation.
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
