import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { SERVICES } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'About Drrizo',
  description:
    'Drrizo helps founder-led startups build practical AI content engines and AI-first MVPs with clear workflows, human review, and launch-ready execution.',
  path: '/about',
})

const principles = [
  'Build around real founder knowledge and real user workflows.',
  'Use AI to accelerate extraction, drafting, automation, and product experience.',
  'Keep human review, fallback states, and privacy-aware data handling in the system.',
  'Ship the smallest useful version, then improve with real performance data.',
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>About Drrizo</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Practical AI systems for founder-led startups.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Drrizo helps founders turn existing expertise, startup workflows, and AI product
              ideas into systems that can be used, reviewed, launched, and improved.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <EyebrowBadge variant="muted">Point of View</EyebrowBadge>
                <h2
                  className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  The best AI systems begin with context.
                </h2>
                <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  Founder voice, customer objections, product constraints, user behavior, and
                  approval workflows matter. Drrizo builds around that context so AI becomes a
                  useful operating layer, not a pile of disconnected prompts.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {principles.map((principle, index) => (
                <Reveal key={principle} delay={index * 0.06}>
                  <div
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                      {principle}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Services</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Two focused ways to help founders ship.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <Link
                  href={service.href}
                  className="card-lift block h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Sparkles className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  <h3
                    className="mt-4 text-xl font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {service.description}
                  </p>
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: 'var(--color-accent-dark)' }}
                  >
                    {service.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-accent-border)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <ShieldCheck className="h-6 w-6 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h2
                    className="text-2xl font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    Responsible by design
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    AI should accelerate the workflow, not remove judgment. Drrizo designs with
                    human review, fallback states, privacy-aware data handling, and practical
                    guardrails from the start.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
