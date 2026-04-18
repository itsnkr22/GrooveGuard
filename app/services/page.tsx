import Link from 'next/link'
import {
  ArrowRight,
  RefreshCw,
  FileText,
  Filter,
  TrendingUp,
  UserCheck,
  FileUp,
  Bell,
  Calendar,
  Users,
  Route,
  Sparkles,
} from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { SERVICES } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Services — AI Workflow Automation for Insurance Agencies',
  description:
    'Ten workflow automation systems built specifically for independent P&C and commercial lines insurance agencies. Renewals, COIs, onboarding, follow-up, retention, and more.',
  path: '/services',
})

const ICON_MAP = {
  refresh: RefreshCw,
  document: FileText,
  funnel: Filter,
  'trending-up': TrendingUp,
  'user-check': UserCheck,
  'file-up': FileUp,
  bell: Bell,
  calendar: Calendar,
  users: Users,
  route: Route,
} as const

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Our Services</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Ten Workflow Systems.
              <br />
              <span className="gradient-text-amber">One Protected Book of Business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Each one targets a specific leak in your agency&rsquo;s operations. We deploy them
              in the order that protects the most commission fastest &mdash; starting with
              whichever workflow is costing you the most today.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services — alternating zig-zag grid with gold number rail */}
      <section
        className="relative py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-6">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? RefreshCw
              const num = String(index + 1).padStart(2, '0')
              return (
                <Reveal key={service.title} delay={index * 0.04}>
                  <div
                    className="card-lift card-gold-glow group grid grid-cols-1 gap-6 rounded-2xl p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {/* Left rail — number + icon */}
                    <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                      <span
                        className="font-mono text-sm font-semibold tracking-[0.2em]"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {num}
                      </span>
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(232, 160, 32, 0.18), rgba(184, 134, 11, 0.08))',
                          border: '1px solid var(--color-accent-border)',
                        }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: 'var(--color-accent)' }}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    <div>
                      <h2
                        className="text-xl font-semibold leading-snug md:text-2xl"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: 'var(--color-text-primary)',
                        }}
                      >
                        {service.title}
                      </h2>
                      <p
                        className="mt-3 text-sm leading-relaxed md:text-base"
                        style={{
                          color: 'var(--color-text-secondary)',
                          fontFamily: 'var(--font-body)',
                        }}
                      >
                        {service.description}
                      </p>
                      <div
                        className="mt-5 inline-flex items-start gap-2 rounded-lg px-3.5 py-2"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(232, 160, 32, 0.12), rgba(184, 134, 11, 0.06))',
                          border: '1px solid var(--color-accent-border)',
                        }}
                      >
                        <Sparkles
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                          style={{ color: 'var(--color-accent)' }}
                        />
                        <span
                          className="text-xs font-medium leading-snug md:text-sm"
                          style={{
                            color: 'var(--color-accent-dark)',
                            fontFamily: 'var(--font-body)',
                          }}
                        >
                          {service.roi}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Deployment order */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <EyebrowBadge variant="muted">Deployment order</EyebrowBadge>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              We don&rsquo;t build all ten at once.
            </h2>
            <p
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              We start with the one system that&rsquo;s costing your agency the most today &mdash;
              usually renewals or COIs &mdash; and expand from there. Each workflow earns its
              place before the next is scoped. No bloated roadmaps, no feature theatre.
            </p>
          </Reveal>
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
              Not sure which workflow to start with?
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              That&rsquo;s exactly what the free audit is for. Thirty minutes, a written report,
              and a clear answer on where to begin.
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
