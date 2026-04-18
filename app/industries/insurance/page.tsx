import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Shield,
  Briefcase,
  Users,
  Home,
  FileCheck,
  Check,
} from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import CountUp from '@/components/insurance/CountUp'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI Workflow Automation for Independent Insurance Agencies',
  description:
    'GrooveGuard builds AI-powered workflow automation for independent P&C and commercial lines insurance agencies. Protect renewals, recover staff time, and grow commission without adding headcount.',
  path: '/industries/insurance',
})

const AGENCY_TYPES = [
  {
    icon: Building2,
    title: 'Commercial Lines Agencies',
    description:
      'Complex renewals, COI-heavy accounts, multi-policy clients. We automate the work that eats your account managers alive.',
  },
  {
    icon: Home,
    title: 'Personal Lines Agencies',
    description:
      'High client volumes, tight margins, retention-dependent economics. We build the touchpoints you can\u2019t manually sustain.',
  },
  {
    icon: Briefcase,
    title: 'Mixed-Book Independent Agencies',
    description:
      'Personal + commercial under one roof. We design workflows that handle both without duplicating effort.',
  },
  {
    icon: Shield,
    title: 'Specialty & Niche Agencies',
    description:
      'Trucking, construction, professional liability, habitational. Vertical-specific follow-up and compliance workflows.',
  },
  {
    icon: Users,
    title: 'Growing Agencies (2–25 Producers)',
    description:
      'Past the solo stage, not yet enterprise. The operational leverage gap is where we add the most value.',
  },
  {
    icon: FileCheck,
    title: 'MGAs & Wholesale Brokers',
    description:
      'Submission management, carrier follow-through, retail agent communication — automated where it matters.',
  },
] as const

const INDUSTRY_STATS = [
  {
    number: '51%',
    label: 'of agency frontline staff report burnout',
    source: 'Liberty Mutual 2025 Independent Agents Study',
  },
  {
    number: '84%',
    label: 'industry-average client retention rate',
    source: 'Industry benchmark data',
  },
  {
    number: '$15k+',
    label: 'average commercial commission at risk per lost client',
    source: 'Based on industry commission averages',
  },
] as const

const WHY_INSURANCE = [
  {
    title: 'We understand the renewal cycle.',
    description:
      'We build around the 90-day renewal window, not against it. Our workflows respect carrier submission timelines, client communication norms, and the rhythm your producers already operate in.',
  },
  {
    title: 'We understand COIs.',
    description:
      'Certificate generation, tracking, renewal reminders, and compliance logging. We treat COIs as a first-class automation target because we know what they cost your team.',
  },
  {
    title: 'We understand commission-based economics.',
    description:
      'Every dollar of protected renewal commission is a dollar of recurring, compounding value. Our ROI math is built around the multiple of EBITDA you&rsquo;ll eventually sell for — not vanity metrics.',
  },
  {
    title: 'We understand carrier and agency management systems.',
    description:
      'AMS360, Applied Epic, EZLynx, HawkSoft, NowCerts — we integrate with the systems you already use, rather than forcing you to migrate.',
  },
] as const

const OUTCOMES = [
  'Protect renewals that would otherwise slip through the cracks.',
  'Recover 40+ hours of weekly staff time across your account managers.',
  'Respond to inbound leads in under 5 minutes — automatically.',
  'Run annual reviews at scale without adding headcount.',
  'Generate COIs in the background while your team focuses on relationships.',
  'Build a systematic referral engine from your existing book.',
  'Lift retention from 84% toward 91%+ — compounding commission year over year.',
] as const

export default function InsuranceIndustryPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 radial-glow"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Built for Insurance</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              We Only Work With
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Independent Insurance Agencies.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Generic automation consultants don&rsquo;t understand the renewal cycle, COI
              workflows, or the commission-based economics of your book. We do. That&rsquo;s the
              only kind of work we take on.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#0A0E1A',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium"
                style={{
                  border: '1px solid var(--color-border-accent)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                See Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry stats strip */}
      <section
        className="relative border-y py-14"
        style={{
          borderColor: 'var(--color-border-accent)',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {INDUSTRY_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <CountUp
                  value={stat.number}
                  className="block text-4xl font-semibold tracking-tight md:text-5xl"
                  style={{
                    color: 'var(--color-accent)',
                    fontFamily: 'var(--font-heading)',
                  }}
                />
                <p
                  className="mt-3 text-sm leading-relaxed md:text-base"
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-1 text-xs"
                  style={{
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {stat.source}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why insurance specifically */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Why we specialise</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Generic automation doesn&rsquo;t work in insurance.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                The difference between a workflow that protects commission and one that annoys
                clients is industry context. We&rsquo;ve built ours.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {WHY_INSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-accent)',
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: 'rgba(232, 160, 32, 0.08)',
                      border: '1px solid var(--color-accent)',
                    }}
                  >
                    <Check className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3
                    className="text-xl font-semibold leading-snug"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed md:text-base"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agency types served */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Who we serve</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                The agencies we&rsquo;re built for.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCY_TYPES.map((agency, i) => {
              const Icon = agency.icon
              return (
                <Reveal key={agency.title} delay={i * 0.06}>
                  <div
                    className="card-lift h-full rounded-xl p-6"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border-accent)',
                    }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: 'var(--color-accent)' }}
                      strokeWidth={1.8}
                    />
                    <h3
                      className="mt-4 text-lg font-semibold leading-snug"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {agency.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {agency.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">What changes</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                What your agency looks like after we&rsquo;re done.
              </h2>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal delay={0.1}>
              <ul className="space-y-4">
                {OUTCOMES.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-4 rounded-xl px-5 py-4"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border-accent)',
                    }}
                  >
                    <div
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: 'rgba(232, 160, 32, 0.12)',
                        border: '1px solid var(--color-accent)',
                      }}
                    >
                      <Check className="h-3.5 w-3.5" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <span
                      className="text-sm leading-relaxed md:text-base"
                      style={{
                        color: 'var(--color-text-primary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div aria-hidden className="absolute inset-0 radial-glow-strong" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Ready to see where your agency is leaking?
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              A 30-minute audit. A written report. No cost. No obligation.
            </p>
            <div className="mt-9">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#0A0E1A',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
