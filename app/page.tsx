import Link from 'next/link'
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  TrendingDown,
  RefreshCw,
  FileText,
  Package,
  Users,
  TrendingUp,
  UserCheck,
  Receipt,
  Bell,
  Calendar,
  Handshake,
  Check,
  X,
  Sparkles,
  HardHat,
  Truck,
  Building2,
  Leaf,
  Laptop,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import {
  SITE_NAME,
  SITE_URL,
  PAIN_POINTS,
  SERVICES,
  ROI_STATS,
  PROCESS_STEPS,
  SPECIALTIES,
} from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import CountUp from '@/components/insurance/CountUp'
import Reveal from '@/components/insurance/Reveal'
import RenewalFlow from '@/components/insurance/RenewalFlow'
import OrbField from '@/components/insurance/OrbField'
import LogoMarquee from '@/components/insurance/LogoMarquee'
import AnimatedRing from '@/components/insurance/AnimatedRing'
import DashboardMock from '@/components/insurance/DashboardMock'

export const metadata = generatePageMetadata({
  title: 'AI Workflow Automation for Commercial P&C Insurance Agencies',
  description:
    'Drrizo builds AI-powered workflow systems for US-based commercial P&C independent insurance agencies — construction, trucking, habitational, cannabis, tech E&O. Automate COIs, renewals, new-business submissions, and direct-bill reconciliation.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'AI workflow automation for US-based commercial P&C independent insurance agencies — construction, trucking, habitational, cannabis, and tech E&O specialties.',
  url: SITE_URL,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Workflow Automation',
}

const SERVICE_ICONS: Record<string, typeof RefreshCw> = {
  refresh: RefreshCw,
  document: FileText,
  package: Package,
  funnel: Users,
  'trending-up': TrendingUp,
  'user-check': UserCheck,
  receipt: Receipt,
  bell: Bell,
  calendar: Calendar,
  users: Handshake,
}

const PAIN_ICONS = [AlertTriangle, Droplets, TrendingDown]

const SPECIALTY_ICONS = {
  'Construction & Contractors': HardHat,
  'Trucking & Transportation': Truck,
  'Habitational & Real Estate': Building2,
  'Cannabis & Emerging Markets': Leaf,
  'Tech E&O / Professional Liability': Laptop,
} as const

const FIT_FOR_YOU = [
  '$500K\u2013$1.5M in annual commission income',
  '60%+ commercial P&C book',
  '5\u201315 staff on a modern AMS (EZLynx, Applied Epic, HawkSoft)',
  '5\u201315 years operating \u2014 past the DIY stage, not yet enterprise',
] as const

const NOT_FOR_YOU = [
  'Personal-lines-heavy or captive/franchise agency',
  'Under $500K annual commission income',
  'Looking for generic SaaS software',
  'Want automation only to cut headcount',
] as const

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ───────────────────── HERO ───────────────────── */}
      <section className="relative overflow-hidden pb-24 pt-20 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-60" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            {/* LEFT — Copy */}
            <div>
              <Reveal>
                <EyebrowBadge>For Commercial P&amp;C Insurance Agencies</EyebrowBadge>
              </Reveal>
              <Reveal delay={0.1}>
                <h1
                  className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[64px]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Your Renewal Book Is Leaking Money.{' '}
                  <span className="gradient-text-amber">We Fix That.</span>
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
                  We build AI-powered workflow systems that protect renewals, clear the COI
                  backlog, and compound commission year over year &mdash; purpose-built for
                  US-based commercial P&amp;C agencies, with flagship specialty depth in{' '}
                  <span
                    style={{
                      color: 'var(--color-accent-dark)',
                      fontWeight: 500,
                    }}
                  >
                    construction and contractor insurance
                  </span>
                  .
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
                    Book Your Free Workflow Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#process"
                    className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                    style={{
                      border: '1px solid var(--color-border-accent)',
                      color: 'var(--color-text-primary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    See How It Works
                  </Link>
                </div>
              </Reveal>

              {/* Stat strip */}
              <Reveal delay={0.45}>
                <div className="mt-12 grid grid-cols-3 gap-4 border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
                  {[
                    { big: '$3,000\u2013$30,000', small: 'Saved per protected commercial renewal' },
                    { big: '87%', small: 'Retention via proactive communication' },
                    { big: '10x', small: 'Higher conversion with sub-5-min response' },
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

            {/* RIGHT — Dashboard preview */}
            <div className="relative">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── MARQUEE STRIP ───────────────────── */}
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

      {/* ───────────────────── PROBLEM ───────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Problem</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                Your agency is growing.
                <br />
                <span style={{ color: 'var(--color-accent)' }}>Your workflows are not.</span>
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Every week your team spends on administrative work is a week they are not
                protecting renewals, responding to leads, or strengthening client relationships.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((p, i) => {
              const Icon = PAIN_ICONS[i] ?? AlertTriangle
              return (
                <Reveal key={p.stat} delay={i * 0.1}>
                  <div
                    className="card-lift relative h-full overflow-hidden rounded-2xl p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-danger)',
                    }}
                  >
                    {/* soft red corner glow */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(185, 28, 28, 0.08), transparent 70%)',
                      }}
                    />
                    <Icon
                      className="h-5 w-5"
                      style={{ color: 'var(--color-danger)' }}
                      strokeWidth={2}
                    />
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <CountUp
                        value={p.stat}
                        className="text-4xl font-semibold tracking-tight md:text-5xl"
                        style={{
                          color: 'var(--color-text-primary)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      />
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

      {/* ───────────────────── SERVICES ───────────────────── */}
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
                Ten workflow systems that protect and grow your book.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon] ?? RefreshCw
              return (
                <Reveal key={service.title} delay={i * 0.04}>
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
                        <div
                          className="mt-4 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold"
                          style={{
                            backgroundColor: 'var(--color-accent-soft)',
                            color: 'var(--color-accent-dark)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          <Sparkles className="h-3 w-3" />
                          {service.roi}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────────────────── ROI / STATS ───────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Numbers</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                What automation actually does for your agency.
              </h2>
            </Reveal>
          </div>

          {/* Top row: progress rings (motion graphics) */}
          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
              <AnimatedRing
                value={91}
                label="Client retention rate achievable with consistent automated communication"
                caption="Retention"
              />
              <AnimatedRing
                value={76}
                label="Reduction in weekly admin hours across renewals, COIs, and follow-ups"
                caption="Time Saved"
              />
              <AnimatedRing
                value={82}
                label="Of commercial renewals protected when outreach starts 90 days out"
                caption="Renewals"
              />
            </div>
          </Reveal>

          {/* Bottom stat cards */}
          <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
            {ROI_STATS.map((stat, i) => (
              <Reveal key={stat.number} delay={i * 0.08}>
                <div
                  className="card-lift relative h-full overflow-hidden rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(232, 160, 32, 0.12), transparent 70%)',
                    }}
                  />
                  <CountUp
                    value={stat.number}
                    className="text-4xl font-semibold tracking-tight md:text-5xl"
                    style={{
                      color: 'var(--color-accent-dark)',
                      fontFamily: 'var(--font-heading)',
                    }}
                  />
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

          {/* Amber full-width callout */}
          <Reveal delay={0.2}>
            <div
              className="relative mt-12 overflow-hidden rounded-2xl p-8 text-center md:p-12"
              style={{
                background:
                  'linear-gradient(135deg, #B8860B 0%, #E8A020 55%, #F5B840 100%)',
                boxShadow: '0 20px 50px -20px rgba(184, 134, 11, 0.5)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 animate-spin-slow opacity-20"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent 50%)',
                }}
              />
              <p
                className="relative text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
                style={{ fontFamily: 'var(--font-heading)', color: '#0A0E1A' }}
              >
                The math is simple.
              </p>
              <p
                className="relative mx-auto mt-3 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: 'rgba(10, 14, 26, 0.85)', fontFamily: 'var(--font-body)' }}
              >
                Protect three commercial renewals that would have otherwise slipped and the entire
                system pays for itself &mdash; for the next decade.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── PROCESS ───────────────────── */}
      <section
        id="process"
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">How It Works</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                From renewal risk to renewal secured.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                An animated preview of what one automated renewal looks like end-to-end.
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
                  <div
                    className="mt-5 border-t pt-4"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
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

      {/* ───────────────────── WHO WE SERVE ───────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Who We Serve</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text-primary)',
                }}
              >
                We don&rsquo;t work with everyone.
                <br />
                <span style={{ color: 'var(--color-accent)' }}>On purpose.</span>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div
                className="relative h-full overflow-hidden rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1.5px solid var(--color-accent)',
                  boxShadow: '0 8px 32px -12px rgba(184, 134, 11, 0.25)',
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(232, 160, 32, 0.22), transparent 70%)',
                  }}
                />
                <div className="relative">
                  <EyebrowBadge variant="muted">Perfect fit</EyebrowBadge>
                  <h3
                    className="mt-3 text-2xl font-semibold leading-tight md:text-3xl"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    This is for you if:
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {FIT_FOR_YOU.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                          <Check className="h-3.5 w-3.5" style={{ color: '#FAF8F3' }} />
                        </div>
                        <span
                          className="text-sm leading-relaxed md:text-base"
                          style={{
                            color: 'var(--color-text-primary)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                className="h-full rounded-2xl p-8"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                  opacity: 0.92,
                }}
              >
                <EyebrowBadge variant="muted">Not a fit</EyebrowBadge>
                <h3
                  className="mt-3 text-2xl font-semibold leading-tight md:text-3xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  This isn&rsquo;t for you if:
                </h3>
                <ul className="mt-6 space-y-4">
                  {NOT_FOR_YOU.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: 'var(--color-bg-tertiary)',
                          border: '1px solid var(--color-border-accent)',
                        }}
                      >
                        <X className="h-3.5 w-3.5" style={{ color: 'var(--color-text-muted)' }} />
                      </div>
                      <span
                        className="text-sm leading-relaxed md:text-base"
                        style={{
                          color: 'var(--color-text-muted)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Specialties strip */}
          <Reveal delay={0.3}>
            <div className="mt-14">
              <div className="divider-gold mb-8" />
              <p
                className="mb-5 text-center font-mono text-xs uppercase tracking-[0.22em]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Specialty Depth
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {SPECIALTIES.map((s) => {
                  const Icon = SPECIALTY_ICONS[s.label as keyof typeof SPECIALTY_ICONS]
                  return (
                    <span
                      key={s.label}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-primary)',
                        border: s.flagship
                          ? '1.5px solid var(--color-accent)'
                          : '1px solid var(--color-border)',
                        fontFamily: 'var(--font-body)',
                        boxShadow: s.flagship
                          ? '0 6px 20px -10px rgba(184, 134, 11, 0.4)'
                          : 'none',
                      }}
                    >
                      {Icon && (
                        <Icon
                          className="h-3.5 w-3.5"
                          style={{ color: 'var(--color-accent)' }}
                          strokeWidth={1.8}
                        />
                      )}
                      {s.label}
                      {s.flagship && (
                        <span
                          className="ml-1 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                          style={{
                            backgroundColor: 'var(--color-accent-soft)',
                            color: 'var(--color-accent-dark)',
                          }}
                        >
                          Flagship
                        </span>
                      )}
                    </span>
                  )
                })}
              </div>
              <p
                className="mt-6 text-center text-xs"
                style={{
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                US-based retail commercial P&amp;C agencies only. Not a fit for captive, franchise,
                or wholesale/MGA.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────── FINAL CTA ───────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <OrbField variant="cta" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Free workflow audit</EyebrowBadge>
            <h2
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              See exactly where your agency
              <br />
              <span className="gradient-text-amber">is leaking money.</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Thirty minutes. A written Workflow Opportunity Report. A clear answer on what to
              automate first. No cost.
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
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-5 text-xs md:text-sm"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {[
                '30 minutes',
                'Written opportunity report',
                'No obligation',
              ].map((t) => (
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
