import Link from 'next/link'
import { ArrowRight, Check, Layers3, ShieldCheck } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'

export const metadata = generatePageMetadata({
  title: 'Company Brain - Coming Soon | Drrizo',
  description:
    'Drrizo is developing Company Brain, a future AI-powered internal knowledge system for decisions, meetings, SOPs, onboarding, and team memory.',
  path: '/services/company-brain',
  keywords: [
    'Company Brain',
    'internal knowledge system',
    'AI company knowledge',
    'decision memory',
    'meeting intelligence',
    'SOP intelligence',
    'team memory',
  ],
})

const modules = [
  'Decision memory',
  'Meeting intelligence',
  'SOP and process brain',
  'Internal onboarding assistant',
  'Product and roadmap knowledge',
  'Team wiki intelligence',
  'Leadership weekly digest',
  'Cross-functional knowledge search',
  'Permission-aware internal knowledge workflows',
  'Company-wide BrainOps',
]

export default function CompanyBrainPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-20 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <EyebrowBadge>Company Brain</EyebrowBadge>
              <div
                className="mx-auto mt-6 inline-flex rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{
                  borderColor: 'var(--color-border-accent)',
                  color: 'var(--color-accent-dark)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                Coming Soon / Work in Progress
              </div>
              <h1
                className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                A shared intelligence layer for how your company thinks, decides, and operates.
              </h1>
              <p
                className="mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-xl"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Company Brain is Drrizo’s upcoming service for turning internal company
                knowledge into a living AI-powered operating system. It will help teams organize
                decisions, meetings, SOPs, onboarding, product context, strategy, policies, and
                internal workflows.
              </p>
              <p
                className="mx-auto mt-4 max-w-3xl text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Company Brain is not the main active offer yet. It is being developed as a future
                expansion after Customer/GTM Brain pilots.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link
                  href="/audit"
                  className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#FAF8F3' }}
                >
                  Ask About Company Brain / Join Waitlist <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/customer-gtm-brain"
                  className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                  style={{
                    border: '1px solid var(--color-border-accent)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Explore Customer/GTM Brain
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <EyebrowBadge variant="muted">Future Modules</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Potential future modules
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <Reveal key={module} delay={index * 0.04}>
                <div
                  className="flex h-full gap-3 rounded-2xl border p-5"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-bg-secondary)',
                  }}
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {module}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div>
                  <Layers3 className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
                  <h2
                    className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    The starting wedge is still Customer/GTM Brain.
                  </h2>
                </div>
                <p className="text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  Customer conversations, revenue workflows, account context, objections, and
                  product feedback are where the system can create focused business value first.
                  Company Brain expands the same practical operating model into internal
                  knowledge after that foundation is proven.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-8 w-8" style={{ color: 'var(--color-accent)' }} />
            <h2
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Join the waitlist or ask how this could fit your team later.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Drrizo is currently prioritizing Customer/GTM Brain pilots. Company Brain interest
              helps shape the future internal knowledge service.
            </p>
            <Link
              href="/audit"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
              style={{ backgroundColor: 'var(--color-accent)', color: '#FAF8F3' }}
            >
              Ask About Company Brain / Join Waitlist <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
