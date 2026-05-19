import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Check,
  FileText,
  MessageSquareText,
  Package,
  RefreshCw,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import {
  PAIN_POINTS,
  PROCESS_STEPS,
  ROI_STATS,
  SERVICES,
  SITE_NAME,
  SITE_URL,
} from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import LogoMarquee from '@/components/insurance/LogoMarquee'
import DashboardMock from '@/components/insurance/DashboardMock'
import RenewalFlow from '@/components/insurance/RenewalFlow'

export const metadata = generatePageMetadata({
  title: 'AI-First Services for Startup Founders',
  description:
    'Drrizo helps founders turn AI ideas, existing expertise, and startup workflows into launch-ready systems, from content engines that multiply distribution to AI-powered MVPs that prove real product value.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'AI-first services for startup founders, including AI-powered content repurposing engines and AI MVP development for B2B and B2C startups.',
  url: SITE_URL,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Content Systems and AI MVP Development',
}

const SERVICE_ICONS: Record<string, typeof RefreshCw> = {
  document: FileText,
  package: Package,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pb-24 pt-20 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <EyebrowBadge>For Startup Founders</EyebrowBadge>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[64px]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Turn founder knowledge and AI ideas into{' '}
                  <span className="gradient-text-amber">systems that ship.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p
                  className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Drrizo helps founders turn existing expertise, customer conversations, and
                  startup workflows into launch-ready systems: content engines that multiply
                  distribution and AI-powered MVPs that prove real product value.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/audit"
                    className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold transition-transform active:scale-[0.98]"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: '#FAF8F3',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Start AI Project <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                    style={{
                      border: '1px solid var(--color-border-accent)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Explore Services
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div
                  className="mt-12 grid grid-cols-3 gap-4 border-t pt-8"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {[
                    { big: '2', small: 'Founder-focused AI services' },
                    { big: '1', small: 'Human review loop in every system' },
                    { big: '0', small: 'Generic AI hype or bloated roadmaps' },
                  ].map((s) => (
                    <div key={s.big}>
                      <div
                        className="text-lg font-semibold tracking-tight md:text-2xl"
                        style={{
                          color: 'var(--color-accent-dark)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {s.big}
                      </div>
                      <div
                        className="mt-1 text-xs leading-snug"
                        style={{
                          color: 'var(--color-text-secondary)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {s.small}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <span
              className="font-mono text-xs uppercase tracking-[0.22em]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Built for
            </span>
          </div>
          <LogoMarquee />
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Founder Bottleneck</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Most startups do not need more AI experiments.
                <br />
                <span style={{ color: 'var(--color-accent)' }}>They need working systems.</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Founder knowledge, customer conversations, product ideas, and early workflows
                already contain the raw material. Drrizo turns that raw material into practical
                systems your audience and users can actually experience.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((p, i) => {
              const icons = [MessageSquareText, Workflow, Brain]
              const Icon = icons[i] ?? Sparkles
              return (
                <Reveal key={p.statLabel} delay={i * 0.1}>
                  <div
                    className="card-lift relative h-full overflow-hidden rounded-2xl p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-accent)',
                    }}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(232, 160, 32, 0.1), transparent 70%)',
                      }}
                    />
                    <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    <div
                      className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {p.stat}
                    </div>
                    <p
                      className="mt-2 text-sm font-semibold leading-snug md:text-base"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {p.statLabel}
                    </p>
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {p.description}
                    </p>
                    <p
                      className="mt-4 font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {p.source}
                    </p>
                  </div>
                </Reveal>
              )
            })}
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
              <EyebrowBadge variant="muted">What We Build</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                AI-First Services for Startup Founders
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Drrizo helps founders turn AI ideas, existing expertise, and startup workflows
                into launch-ready systems, from content engines that multiply distribution to
                AI-powered MVPs that prove real product value.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon] ?? RefreshCw
              return (
                <Reveal key={service.title} delay={i * 0.08}>
                  <div
                    className="card-lift card-gold-glow group h-full rounded-2xl p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all group-hover:scale-110"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(232, 160, 32, 0.15), rgba(184, 134, 11, 0.08))',
                          border: '1px solid var(--color-accent-border)',
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: 'var(--color-accent)' }}
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-lg font-semibold leading-snug md:text-xl"
                          style={{
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--color-text-primary)',
                          }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="mt-2.5 text-sm leading-relaxed"
                          style={{
                            color: 'var(--color-text-secondary)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {service.description}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <Check
                                className="mt-0.5 h-4 w-4 flex-shrink-0"
                                style={{ color: 'var(--color-accent)' }}
                              />
                              <span
                                className="text-sm"
                                style={{ color: 'var(--color-text-primary)' }}
                              >
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={service.href}
                          className="mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-all hover:bg-white"
                          style={{
                            border: '1px solid var(--color-border-accent)',
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {service.cta} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">How We Think</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                AI should accelerate the workflow,
                <br />
                <span style={{ color: 'var(--color-accent)' }}>not remove judgment.</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                We design systems with human review, clear fallback states, privacy-aware data
                handling, and practical guardrails so founders can move fast without shipping
                careless automation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div
              className="mt-14 rounded-2xl p-8 md:p-12"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <RenewalFlow />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div
                  className="card-lift relative h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-sm font-semibold tracking-[0.2em]"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: 'var(--color-accent-soft)',
                        color: 'var(--color-accent-dark)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <h3
                    className="mt-4 text-xl font-semibold leading-snug md:text-2xl"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {step.description}
                  </p>
                  <div className="mt-5 border-t pt-4" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                      />
                      <p
                        className="text-xs font-medium leading-snug md:text-sm"
                        style={{
                          color: 'var(--color-text-primary)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
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
              <EyebrowBadge variant="muted">Useful Outputs</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                From raw input to assets founders can use.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {ROI_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div
                  className="card-lift relative h-full overflow-hidden rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(232, 160, 32, 0.12), transparent 70%)',
                    }}
                  />
                  <div
                    className="text-4xl font-semibold tracking-tight md:text-5xl"
                    style={{
                      color: 'var(--color-accent-dark)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    {stat.number}
                  </div>
                  <p
                    className="mt-2 text-sm font-semibold md:text-base"
                    style={{
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {stat.subtext}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <OrbField variant="cta" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>AI project audit</EyebrowBadge>
            <h2
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              Find the smallest AI system
              <br />
              <span className="gradient-text-amber">worth building first.</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Share the content sources, MVP idea, user workflow, or launch problem you want to
              solve. We will help identify the best first system to build.
            </p>
            <div className="mt-10">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FAF8F3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Request AI Project Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs md:text-sm"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {['Content engine', 'AI MVP', 'Human review', 'Launch plan'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
