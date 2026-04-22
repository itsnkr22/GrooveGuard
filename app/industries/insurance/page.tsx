import Link from 'next/link'
import {
  ArrowRight,
  HardHat,
  Truck,
  Building2,
  Leaf,
  Laptop,
  Briefcase,
  Check,
} from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import CountUp from '@/components/insurance/CountUp'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI Workflow Automation for Commercial P&C Insurance Agencies',
  description:
    'GrooveGuard builds AI-powered workflow automation for US-based commercial P&C independent insurance agencies. Flagship specialty: construction and contractor insurance. Also serving trucking, habitational, cannabis, and tech E&O.',
  path: '/industries/insurance',
})

/**
 * Agency types — construction flagship first, then other specialties, then the
 * general commercial-first catch-all card.
 */
const AGENCY_TYPES = [
  {
    icon: HardHat,
    title: 'Construction & Contractor-Focused Agencies',
    description:
      'Our flagship specialty. COI volume is brutal \u2014 3.5+ hours of daily staff time, 45\u201355% first-pass rejection, constant re-issues. Accounts run $50K\u2013$500K premium, so every renewal matters. We make your agency the one contractors recommend because the paperwork just works.',
    flagship: true,
  },
  {
    icon: Truck,
    title: 'Trucking & Transportation Agencies',
    description:
      'Heavy submission workload, FMCSA filings, MCS-150 updates, constant certificate requests from shippers. We automate the compliance grind so your producers can write more, not chase more.',
  },
  {
    icon: Building2,
    title: 'Habitational & Real Estate-Owner Agencies',
    description:
      'Fewer accounts, enormous premiums each, lender-driven COI requirements, annual statement-of-values updates. Every renewal matters. Every evidence of insurance letter matters. We protect them all.',
  },
  {
    icon: Leaf,
    title: 'Cannabis & Emerging-Market Agencies',
    description:
      'Specialty carrier appetite, rapid regulatory change, complex underwriting narratives. We automate intake and carrier-matching so you can compete on speed in a market where speed decides who writes.',
  },
  {
    icon: Laptop,
    title: 'Tech E&O / Professional Liability Agencies',
    description:
      'Subjectivity-heavy underwriting, repeat-renewal sensitivity, and a client base that expects instant digital response. We build the communication layer commercial tech buyers actually notice.',
  },
  {
    icon: Briefcase,
    title: 'Commercial-First Independent Agencies',
    description:
      'US-based, owner-operated, writing 60%+ commercial P&C on EZLynx, Applied Epic, or HawkSoft. 5\u201315 staff and $500K\u2013$1.5M in commission income. Past the DIY stage, not yet enterprise \u2014 that\u2019s our zone.',
  },
] as const

const INDUSTRY_STATS = [
  {
    number: '51%',
    label: 'of agency frontline staff report burnout',
    source: 'Liberty Mutual 2025 Independent Agents Study',
  },
  {
    number: '45%+',
    label: 'first-pass COI rejection rate in commercial lines',
    source: 'Industry benchmark data, PathwayPort',
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
      'We build around the 90\u2013120 day renewal window, not against it. Our workflows respect carrier submission timelines, client communication norms, and the rhythm your producers already operate in.',
  },
  {
    title: 'We understand COIs cold.',
    description:
      'Certificate generation, validation against request requirements, coverage-gap flagging, renewal tracking, and compliance logging. For construction-focused agencies, COIs are the highest-ROI workflow we build \u2014 and we treat them that way.',
  },
  {
    title: 'We understand commission-based economics.',
    description:
      'Every dollar of protected renewal commission is a dollar of recurring, compounding value. Our ROI math is built around the multiple of EBITDA you\u2019ll eventually sell for \u2014 not vanity metrics.',
  },
  {
    title: 'We understand your AMS.',
    description:
      'EZLynx, Applied Epic, HawkSoft, AMS360, NowCerts \u2014 we integrate with the systems you already use, rather than forcing you to migrate. Our wedge is the bespoke glue between your AMS and the workflows your team actually runs.',
  },
] as const

const OUTCOMES = [
  'Protect renewals that would otherwise slip through the cracks.',
  'Cut COI first-pass rejection rate from 45%+ to under 10%.',
  'Recover 40+ hours of weekly staff time across your account managers.',
  'Respond to inbound leads in under 5 minutes \u2014 automatically.',
  'Submit to 3\u20136 markets in parallel on every new-business opportunity.',
  'Close month-end in days, not weeks \u2014 and recover missed commission automatically.',
  'Lift commercial retention from 84% toward 91%+ \u2014 compounding commission year over year.',
] as const

export default function InsuranceIndustryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Built for Commercial P&amp;C</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Purpose-Built for
              <br />
              <span className="gradient-text-amber">Commercial P&amp;C Agencies.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Generic automation consultants don&rsquo;t understand the COI workflow, the 90-day
              renewal window, or the commission-based economics of a commercial book. We do. US
              commercial P&amp;C is the only kind of work we take on &mdash; with flagship depth
              in construction and contractor insurance.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FAF8F3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
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
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-bg-tertiary)',
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
                    color: 'var(--color-accent-dark)',
                    fontFamily: 'var(--font-heading)',
                  }}
                />
                <p
                  className="mt-3 text-sm leading-relaxed md:text-base"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
                >
                  {stat.label}
                </p>
                <p
                  className="mt-1 font-mono text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stat.source}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we specialise */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Why we specialise</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Generic automation doesn&rsquo;t work in commercial P&amp;C.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                The difference between a workflow that protects commission and one that annoys
                clients is industry context. We&rsquo;ve built ours around the accounts you
                actually write.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {WHY_INSURANCE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className="card-lift card-gold-glow h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(232, 160, 32, 0.18), rgba(184, 134, 11, 0.08))',
                      border: '1px solid var(--color-accent-border)',
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

      {/* Agency types */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
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
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Construction and contractor-focused agencies are our flagship. Other commercial
                specialties are first-class too.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCY_TYPES.map((agency, i) => {
              const Icon = agency.icon
              const isFlagship = 'flagship' in agency && agency.flagship
              return (
                <Reveal key={agency.title} delay={i * 0.06}>
                  <div
                    className={`card-lift card-gold-glow relative h-full rounded-xl p-6 ${isFlagship ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: isFlagship
                        ? '1.5px solid var(--color-accent)'
                        : '1px solid var(--color-border)',
                      boxShadow: isFlagship
                        ? '0 12px 32px -14px rgba(184, 134, 11, 0.35)'
                        : 'var(--shadow-soft)',
                    }}
                  >
                    {isFlagship && (
                      <div
                        className="absolute -top-3 left-6 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          backgroundColor: 'var(--color-accent)',
                          color: '#FAF8F3',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        Flagship Specialty
                      </div>
                    )}
                    <div
                      className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(232, 160, 32, 0.18), rgba(184, 134, 11, 0.08))',
                        border: '1px solid var(--color-accent-border)',
                      }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: 'var(--color-accent)' }}
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold leading-snug"
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

          <Reveal delay={0.3}>
            <p
              className="mt-10 text-center text-xs md:text-sm"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              US-based retail agencies only. Not a fit for captive, franchise, or
              wholesale/MGA/program administrators.
            </p>
          </Reveal>
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
            <ul className="space-y-4">
              {OUTCOMES.map((outcome, i) => (
                <Reveal key={outcome} delay={i * 0.05}>
                  <li
                    className="card-lift flex items-start gap-4 rounded-xl px-5 py-4"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                      }}
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
                      {outcome}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <OrbField variant="cta" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
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
                  color: '#FAF8F3',
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
