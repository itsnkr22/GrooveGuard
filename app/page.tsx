import Link from 'next/link'
import {
  ArrowRight,
  AlertTriangle,
  Droplets,
  TrendingDown,
  RefreshCw,
  FileText,
  Users,
  TrendingUp,
  UserCheck,
  FileUp,
  Bell,
  Calendar,
  Handshake,
  Route,
  Check,
  X,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { SITE_NAME, SITE_URL, PAIN_POINTS, SERVICES, ROI_STATS, PROCESS_STEPS, MARKETS } from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import CountUp from '@/components/insurance/CountUp'
import Reveal from '@/components/insurance/Reveal'
import RenewalFlow from '@/components/insurance/RenewalFlow'

export const metadata = generatePageMetadata({
  title: 'AI Workflow Automation for Insurance Agencies',
  description:
    'GrooveGuard builds AI-powered workflow systems for independent P&C and commercial lines insurance agencies. Automate renewals, follow-ups, onboarding, and client communication. Protect your book. Grow your commissions.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'AI workflow automation for independent P&C and commercial lines insurance agencies',
  url: SITE_URL,
  areaServed: ['US', 'GB', 'EU', 'AE', 'AU'],
  serviceType: 'AI Workflow Automation',
}

// Icon mapping for the 10 services
const SERVICE_ICONS: Record<string, typeof RefreshCw> = {
  refresh: RefreshCw,
  document: FileText,
  funnel: Users,
  'trending-up': TrendingUp,
  'user-check': UserCheck,
  'file-up': FileUp,
  bell: Bell,
  calendar: Calendar,
  users: Handshake,
  route: Route,
}

// Icon mapping for pain points
const PAIN_ICONS = [AlertTriangle, Droplets, TrendingDown] as const

const AUDIENCE_YES = [
  'You run an independent agency with 2–30 staff',
  'You write commercial P&C, general liability, workers\u2019 comp, commercial property, or professional lines',
  'Your team spends significant time on renewals, certificates, follow-ups, or data entry',
  'You want to grow your book without proportionally growing your headcount',
  'You care about what your agency is worth when you eventually sell it',
  'You serve clients in the US, UK, EU, UAE, or Australia',
]

const AUDIENCE_NO = [
  'You are a captive agent (State Farm, Allstate, Farmers) — your systems are controlled by your carrier',
  'You are primarily a life or health insurance agent',
  'You are looking for a quick fix with no process change',
  'You are not willing to commit 2\u20133 hours upfront to the audit and onboarding',
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 1 — HERO                                            */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 dot-pattern opacity-60" aria-hidden />
        <div className="absolute inset-0 radial-glow" aria-hidden />

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:py-32">
          <Reveal>
            <EyebrowBadge>AI Workflow Automation for Insurance Agencies</EyebrowBadge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Your Renewal Book<br />
              Is Leaking Money.<br />
              <span style={{ color: 'var(--color-accent)' }}>We Fix That.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-8 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              GrooveGuard builds AI-powered workflow systems for independent P&amp;C and
              commercial lines agencies — automating renewals, follow-ups, onboarding, and
              client communication so your team stops doing manually what can run on its own.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-4">
              <Link
                href="/audit"
                className="btn-shimmer glow-amber inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all hover:brightness-110"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#0A0E1A',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Book Your Free Workflow Audit
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#process"
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all hover:bg-[rgba(232,160,32,0.1)]"
                style={{
                  border: '1px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                See How It Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p
              className="mx-auto mt-6 max-w-md text-sm"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              No commitment. No sales pressure. A 30-minute conversation about your
              agency&apos;s workflows.
            </p>
          </Reveal>
        </div>

        {/* Hero bottom stat strip */}
        <div
          className="relative border-t"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {[
                {
                  stat: '$3,000–$30,000',
                  label: 'average annual commission per commercial client',
                },
                {
                  stat: '87%',
                  label: 'of agency staff say workload increased in 2025',
                },
                {
                  stat: '10x',
                  label: 'EBITDA multiple — what every $1 of retained revenue is worth at exit',
                },
              ].map((item, index) => (
                <div
                  key={item.stat}
                  className={`px-4 ${
                    index < 2 ? 'md:border-r md:border-[var(--color-border)]' : ''
                  }`}
                >
                  <p
                    className="text-2xl font-semibold sm:text-[28px]"
                    style={{
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    className="mt-2 text-[13px] leading-relaxed"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 2 — THE PROBLEM                                    */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Reality</EyebrowBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Your Agency Is Growing.<br />
                Your Workflows Are Not.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                The independent insurance agency is one of the most cash-generative
                businesses in professional services. Recurring commissions. High-LTV clients.
                Strong EBITDA. But behind the book, most agencies are running on manual
                processes that were built for a fraction of their current volume — and the
                gaps are costing real money.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAIN_POINTS.map((pain, index) => {
              const Icon = PAIN_ICONS[index] ?? AlertTriangle
              return (
                <Reveal key={pain.stat} delay={0.1 * index}>
                  <div
                    className="card-lift h-full rounded-lg p-8"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-danger)',
                    }}
                  >
                    <Icon
                      className="mb-5 h-7 w-7"
                      style={{ color: 'var(--color-danger)' }}
                    />
                    <p
                      className="text-4xl font-bold"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <CountUp value={pain.stat} />
                    </p>
                    <p
                      className="mt-2 text-sm font-medium"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {pain.statLabel}
                    </p>
                    <p
                      className="mt-5 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {pain.description}
                    </p>
                    <p
                      className="mt-6 text-[11px] font-medium uppercase tracking-wider"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {pain.source}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.3}>
            <p
              className="mx-auto mt-16 max-w-3xl text-center text-lg italic leading-relaxed"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-heading)',
              }}
            >
              &ldquo;The agencies growing fastest aren&apos;t the ones with the best
              producers. They&apos;re the ones whose back-office runs without them.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 3 — WHAT WE BUILD                                   */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Our Systems</EyebrowBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Ten Workflows That Protect<br />
                Your Book and Grow Your Revenue
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Every system we build is custom to your agency — your carriers, your CRM,
                your processes. These are not generic automations. They are
                precision-engineered workflows designed specifically for how P&amp;C and
                commercial lines agencies operate.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.icon] ?? RefreshCw
              return (
                <Reveal key={service.title} delay={(index % 2) * 0.1}>
                  <div
                    className="card-lift group h-full rounded-lg p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md"
                        style={{
                          backgroundColor: 'rgba(232, 160, 32, 0.08)',
                          border: '1px solid rgba(232, 160, 32, 0.2)',
                        }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: 'var(--color-accent)' }}
                        />
                      </div>
                      <h3
                        className="flex-1 text-xl font-semibold leading-tight"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className="mt-5 text-[15px] leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {service.description}
                    </p>

                    <div
                      className="mt-6 inline-block rounded-full px-4 py-1.5 text-xs font-medium"
                      style={{
                        backgroundColor: 'rgba(232, 160, 32, 0.1)',
                        border: '1px solid rgba(232, 160, 32, 0.25)',
                        color: 'var(--color-accent-light)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {service.roi}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 4 — ROI NUMBERS                                     */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Numbers</EyebrowBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                What Changes When<br />
                Your Agency Runs on Automation
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ROI_STATS.map((stat, index) => {
              const color =
                stat.color === 'success' ? 'var(--color-success)' : 'var(--color-accent)'
              return (
                <Reveal key={stat.number} delay={(index % 2) * 0.1}>
                  <div
                    className="h-full rounded-lg p-8"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <p
                      className="text-5xl font-bold sm:text-6xl"
                      style={{ color, fontFamily: 'var(--font-mono)' }}
                    >
                      <CountUp value={stat.number} />
                    </p>
                    <p
                      className="mt-3 text-lg font-semibold"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="mt-4 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {stat.subtext}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Full-width callout */}
          <Reveal delay={0.2}>
            <div
              className="mt-12 rounded-lg p-10 lg:p-12"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <div className="mx-auto max-w-3xl text-center">
                <h3
                  className="text-2xl font-bold sm:text-3xl"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#0A0E1A',
                  }}
                >
                  The math is simple.
                </h3>
                <p
                  className="mx-auto mt-4 text-base leading-relaxed sm:text-lg"
                  style={{
                    color: '#1C2333',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  If our systems help you retain two additional commercial clients per year
                  at an average commission of $12,000 each — that&apos;s $24,000 in
                  protected revenue. Our annual fee is a fraction of that. Everything else
                  is pure upside.
                </p>
                <Link
                  href="/audit"
                  className="mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all hover:opacity-85"
                  style={{
                    backgroundColor: '#0A0E1A',
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Book Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 5 — HOW IT WORKS                                    */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="process" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">The Process</EyebrowBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                From Audit to Automation<br />
                in Three Steps
              </h2>
            </Reveal>
          </div>

          {/* Renewal workflow animation */}
          <Reveal delay={0.2}>
            <div className="mt-16">
              <RenewalFlow />
            </div>
          </Reveal>

          {/* Process steps */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div
                  className="h-full rounded-lg p-8"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-5xl font-bold"
                      style={{
                        color: 'var(--color-accent)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {step.number}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        border: '1px solid var(--color-border-accent)',
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <h3
                    className="mt-5 text-2xl font-semibold"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="mt-4 text-sm leading-relaxed"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {step.description}
                  </p>

                  <p
                    className="mt-6 border-t pt-5 text-sm italic"
                    style={{
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-accent-light)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {step.outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 6 — WHO WE SERVE                                    */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Who This Is For</EyebrowBadge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2
                className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Built Specifically for<br />
                Independent P&amp;C and Commercial Lines Agencies
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                GrooveGuard is not a generalist automation vendor. We work exclusively with
                independent insurance agencies who write P&amp;C and commercial lines
                business. This focus means our systems are built around how your agency
                actually operates — not adapted from a generic template.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* This is for you if */}
            <Reveal>
              <div
                className="h-full rounded-lg p-8"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-accent)',
                  borderLeft: '3px solid var(--color-accent)',
                }}
              >
                <h3
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-accent)',
                  }}
                >
                  This is for you if:
                </h3>
                <ul className="mt-6 space-y-4">
                  {AUDIENCE_YES.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{
                          color: 'var(--color-text-secondary)',
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

            {/* This is not for you if */}
            <Reveal delay={0.1}>
              <div
                className="h-full rounded-lg p-8"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  This is not for you if:
                </h3>
                <ul className="mt-6 space-y-4">
                  {AUDIENCE_NO.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X
                        className="mt-0.5 h-5 w-5 flex-shrink-0"
                        style={{ color: 'var(--color-text-muted)' }}
                      />
                      <span
                        className="text-sm leading-relaxed"
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

          {/* Geography strip */}
          <Reveal delay={0.2}>
            <div className="mt-14 text-center">
              <p
                className="text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Serving agencies across five markets
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {MARKETS.map((market) => (
                  <span
                    key={market.label}
                    className="rounded-full px-5 py-2 text-sm font-medium"
                    style={{
                      border: '1px solid var(--color-border-accent)',
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {market.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION 7 — FINAL CTA                                       */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        <div className="absolute inset-0 radial-glow-strong" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <EyebrowBadge variant="muted">Start Here</EyebrowBadge>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-[56px]"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Your Book Deserves<br />
              a Back-Office That Matches It.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-8 max-w-xl text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Book a free 30-minute Workflow Audit. We&apos;ll map your current processes,
              identify where commission is at risk, and show you exactly what we&apos;d
              automate first — and what the ROI looks like. No commitment required.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <Link
              href="/audit"
              className="btn-shimmer glow-amber mt-10 inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg font-semibold transition-all hover:brightness-110"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#0A0E1A',
                fontFamily: 'var(--font-body)',
              }}
            >
              Book Your Free Workflow Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <p
              className="mt-5 text-sm"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              30 minutes. No obligation. A written report included.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div
              className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
              style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                No long-term contract required
              </span>
              <span aria-hidden style={{ color: 'var(--color-border-accent)' }}>
                ·
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                Custom-built, not templated
              </span>
              <span aria-hidden style={{ color: 'var(--color-border-accent)' }}>
                ·
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
                Results within 30 days
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
