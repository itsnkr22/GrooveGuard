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
    'Drrizo helps founders and operators find one repeated bottleneck, prescribe one practical AI tool, and choose the right implementation path.',
  path: '/about',
})

const principles = [
  'Start with discovery, not a tool recommendation.',
  'Only prescribe when the work maps to revenue, time, or customer happiness.',
  'Choose one bottleneck instead of a scattered AI wish list.',
  'Keep human review inside judgment-heavy workflows.',
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
              Practical AI consulting for the work that repeats.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Drrizo helps founders and operators find one bottleneck, prescribe one practical
              AI path, and turn the right workflow into a paid implementation when it is worth fixing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <h2
                  className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  The best AI work begins with one clear constraint.
                </h2>
                <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  The goal is not to automate everything. The goal is to find the repeated work
                  that creates pain, price the value of fixing it, and choose the simplest AI path
                  that makes business sense.
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
              <h2
                className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Assessment first. Implementation second.
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
                    border: service.status.includes('Coming Soon')
                      ? '1px dashed var(--color-border-accent)'
                      : '1px solid var(--color-border)',
                  }}
                >
                  <Sparkles className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  <div
                    className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: 'var(--color-accent-dark)' }}
                  >
                    {service.status}
                  </div>
                  <h3
                    className="mt-3 text-xl font-semibold"
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
                    AI should accelerate work without removing judgment. Drrizo designs with human
                    review, clear ownership, practical guardrails, and privacy-aware source handling
                    from the start.
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
