import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Check,
  FileText,
  Package,
  RefreshCw,
  Sparkles,
  Workflow,
} from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { SERVICES } from '@/lib/constants'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI-First Services for Startup Founders',
  description:
    'Explore Drrizo services for founders: AI-powered content repurposing engines and AI-first MVP development for B2B and B2C startups.',
  path: '/services',
  keywords: [
    'AI services for startups',
    'AI content engine',
    'AI MVP development',
    'founder-led content',
    'AI product studio',
  ],
})

const ICON_MAP = {
  document: FileText,
  package: Package,
} as const

const serviceNotes = [
  {
    title: 'Repurpose what already exists',
    description:
      'Founder calls, demos, customer conversations, product updates, webinars, and long-form content become structured distribution assets.',
    icon: Brain,
  },
  {
    title: 'Build around the real workflow',
    description:
      'AI MVPs are scoped around the core user action, not a vague list of features or a generic chatbot wrapper.',
    icon: Workflow,
  },
  {
    title: 'Keep judgment in the loop',
    description:
      'Human review, fallback states, privacy-aware handling, and practical guardrails are part of the system from the start.',
    icon: Check,
  },
]

export default function ServicesPage() {
  return (
    <div>
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
              AI-first systems for founders.
              <br />
              <span className="gradient-text-amber">Built to ship, learn, and improve.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Drrizo helps founders turn AI ideas, existing expertise, and startup workflows into
              launch-ready systems, from content engines that multiply distribution to AI-powered
              MVPs that prove real product value.
            </p>
          </Reveal>
        </div>
      </section>

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
                <Reveal key={service.title} delay={index * 0.06}>
                  <div
                    className="card-lift card-gold-glow group grid grid-cols-1 gap-6 rounded-2xl p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:p-8"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
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
                      <ul className="mt-5 grid gap-2 md:grid-cols-3">
                        {service.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 h-4 w-4 flex-shrink-0"
                              style={{ color: 'var(--color-accent)' }}
                            />
                            <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
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

                    <div className="md:justify-self-end">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all hover:bg-white"
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
              <EyebrowBadge variant="muted">Built Responsibly</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Practical AI systems, not generic automation theatre.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceNotes.map((note, index) => {
              const Icon = note.icon
              return (
                <Reveal key={note.title} delay={index * 0.08}>
                  <div
                    className="card-lift h-full rounded-2xl p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    <h3
                      className="mt-4 text-xl font-semibold leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                    >
                      {note.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {note.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <OrbField variant="cta" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Not sure which system to build first?
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share what you already have: content sources, product idea, customer workflow, or
              launch goal. Drrizo will help identify the most useful first system.
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
                Request AI Project Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
