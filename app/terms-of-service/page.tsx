import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Drrizo AI assessments and implementation services.',
  path: '/terms-of-service',
})

const sections = [
  {
    title: 'Website use',
    body: 'The Drrizo website provides information about AI mini assessments and paid AI implementation services. Website content is informational and does not create a client relationship by itself.',
  },
  {
    title: 'Service proposals',
    body: 'Project scope, deliverables, timelines, fees, ownership, source access, tool responsibilities, and support terms are defined in a separate written proposal or agreement before work begins.',
  },
  {
    title: 'Client responsibilities',
    body: 'Clients are responsible for providing accurate project context, rights to shared materials, appropriate source access, timely feedback, and final approval before using outputs in live workflows.',
  },
  {
    title: 'AI outputs',
    body: 'AI can accelerate research, writing, synthesis, task execution, drafting, and workflow support, but outputs should be reviewed before use. Drrizo designs for practical guardrails and human review rather than careless automation.',
  },
  {
    title: 'No guaranteed outcomes',
    body: 'Drrizo does not guarantee revenue, time savings, customer outcomes, model behavior, or platform performance. The goal is to build useful AI workflows that can be tested, reviewed, and improved.',
  },
]

export default function TermsOfServicePage() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <OrbField variant="subtle" />
      <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <EyebrowBadge>Terms of Service</EyebrowBadge>
          <h1
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
          >
            Terms for using the Drrizo website.
          </h1>
          <p className="mt-5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Last updated May 24, 2026
          </p>
        </Reveal>
        <div className="mt-12 space-y-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.04}>
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
