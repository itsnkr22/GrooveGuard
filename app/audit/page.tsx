import { Check, Sparkles } from 'lucide-react'
import AuditForm from '@/components/forms/AuditForm'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Free AI Mini Assessment',
  description:
    'Request a free AI mini assessment from Drrizo to find one repeated bottleneck, one ROI lever, and one practical AI prescription.',
  path: '/audit',
})

const auditPoints = [
  'Choose the primary ROI lever: more revenue, more hours back, or happier customers.',
  'Identify the most repeated weekly task and where it stalls or slips.',
  'Anchor the value in your words using hours per week and the value of your time.',
  'Leave call two with one tool, one cost reference, and one practical first step.',
]

export default function AuditPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Free AI Mini Assessment</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Find the one bottleneck AI should fix first.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share your current work, repeated tasks, friction points, tools, and goals. Drrizo
              will help isolate the smallest useful AI target before any paid implementation.
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
              <h2
                className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Start with the task that repeats.
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                The assessment is built for founders, operators, and service teams who suspect AI
                could help, but need a grounded recommendation before buying tools or funding a build.
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
                    Call one is discovery only. The prescription comes after Drrizo finds where
                    frequency meets friction and checks the ROI lever.
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
