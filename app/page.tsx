import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Check,
  Layers3,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { PAIN_POINTS, ROI_STATS, SERVICES, SITE_NAME, SITE_URL } from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import LogoMarquee from '@/components/insurance/LogoMarquee'
import DashboardMock from '@/components/insurance/DashboardMock'
import RenewalFlow from '@/components/insurance/RenewalFlow'

export const metadata = generatePageMetadata({
  title: 'Drrizo | Customer/GTM Brain for Founder-Led Startups',
  description:
    'Drrizo builds Customer/GTM Brains for founder-led startups, turning sales calls, CRM notes, emails, Slack, support tickets, and customer feedback into AI-powered GTM intelligence.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'Drrizo builds Customer/GTM Brains for founder-led startups: AI-powered revenue intelligence systems that turn customer conversations, sales calls, CRM data, Slack threads, emails, support tickets, product feedback, and founder knowledge into a living GTM operating system.',
  url: SITE_URL,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'Customer/GTM Brain and GTM Intelligence Systems',
}

const serviceIcons: Record<string, typeof Brain> = {
  brain: Brain,
  layers: Layers3,
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
                <EyebrowBadge>Customer/GTM Brain for founder-led startups</EyebrowBadge>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[64px]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Build a Customer/GTM Brain that helps your startup{' '}
                  <span className="gradient-text-amber">sell, learn, and grow faster.</span>
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
                  Drrizo helps founder-led startups turn scattered customer conversations,
                  sales notes, CRM activity, support tickets, product feedback, and GTM
                  knowledge into an AI-powered brain for better follow-ups, sharper
                  positioning, faster onboarding, and clearer revenue decisions.
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
                    Request GTM Brain Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services/customer-gtm-brain"
                    className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                    style={{
                      border: '1px solid var(--color-border-accent)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Explore Customer/GTM Brain
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div
                  className="mt-12 grid grid-cols-3 gap-4 border-t pt-8"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {[
                    { big: '1', small: 'Active flagship GTM Brain offer' },
                    { big: 'Soon', small: 'Company Brain as the future expansion' },
                    { big: 'QA', small: 'Human-reviewed setup and BrainOps' },
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
                Your best GTM knowledge is scattered across conversations.
              </h2>
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
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <Reveal>
              <EyebrowBadge variant="muted">What We Build</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                AI-first revenue systems for founder-led startups.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Drrizo builds Customer/GTM Brains for founder-led startups: AI-powered revenue
                intelligence systems that turn customer conversations, sales calls, CRM data,
                Slack threads, emails, support tickets, product feedback, and founder knowledge
                into a living GTM operating system. Company Brain is the future expansion.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Brain
              const isComingSoon = service.status.includes('Coming Soon')
              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <article
                    className="card-lift flex h-full flex-col rounded-2xl p-7 md:p-8"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: isComingSoon
                        ? '1px dashed var(--color-border-accent)'
                        : '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{ backgroundColor: 'rgba(232, 160, 32, 0.12)' }}
                      >
                        <Icon className="h-6 w-6" style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                        style={{
                          borderColor: 'var(--color-border-accent)',
                          color: isComingSoon ? 'var(--color-accent-dark)' : 'var(--color-accent)',
                        }}
                      >
                        {service.status}
                      </span>
                    </div>
                    <h3
                      className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="mt-4 text-sm leading-relaxed md:text-base"
                      style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                    >
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: 'var(--color-accent-dark)' }}
                    >
                      {service.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Useful Outputs</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                From scattered customer context to usable GTM assets.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ROI_STATS.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <div
                  className="card-lift h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    className="text-3xl font-semibold tracking-tight"
                    style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.number}
                  </div>
                  <h3 className="mt-3 text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.subtext}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <Reveal>
              <EyebrowBadge variant="muted">How It Works</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Start with one valuable workflow, then let the brain compound.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <RenewalFlow />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-8 w-8" style={{ color: 'var(--color-accent)' }} />
            <h2
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Build the GTM intelligence layer your startup can actually use.
            </h2>
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Customer/GTM Brain is the active paid offer. Company Brain is the next step once
              the customer and revenue layer is working.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
                style={{ backgroundColor: 'var(--color-accent)', color: '#FAF8F3' }}
              >
                Request GTM Brain Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/company-brain"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                style={{
                  border: '1px solid var(--color-border-accent)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Ask About Company Brain
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
