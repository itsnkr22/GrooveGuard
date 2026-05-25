import Link from 'next/link'
import { ArrowRight, Brain, Check, Layers3, ShieldCheck } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { SERVICES } from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'

export const metadata = generatePageMetadata({
  title: 'Services | Drrizo',
  description:
    'Explore Drrizo services: Customer/GTM Brain for founder-led startups and Company Brain, a coming soon internal knowledge system.',
  path: '/services',
})

const icons: Record<string, typeof Brain> = {
  brain: Brain,
  layers: Layers3,
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-20 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>Services</EyebrowBadge>
            <h1
              className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Customer/GTM Brain now. Company Brain next.
            </h1>
            <p
              className="mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Drrizo is focused on practical AI systems for founder-led startups. The active
              paid offer is Customer/GTM Brain: a revenue intelligence layer for customer
              memory, account context, follow-up workflows, objections, win/loss learning, and
              product feedback. Company Brain is the broader internal knowledge system coming
              after GTM Brain pilots.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon] ?? Brain
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
                  <div className="flex flex-wrap items-start justify-between gap-4">
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

                  <h2
                    className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="mt-4 text-sm leading-relaxed md:text-base"
                    style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                  >
                    {service.description}
                  </p>
                  <div
                    className="mt-6 rounded-xl border p-4 text-sm font-semibold leading-relaxed"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-primary)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {service.roi}
                  </div>
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
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <ShieldCheck className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
                  <h2
                    className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    Practical systems, human-reviewed.
                  </h2>
                </div>
                <p
                  className="text-base leading-relaxed md:text-lg"
                  style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
                >
                  Drrizo is not positioned as a generic automation vendor. Customer/GTM Brain
                  starts with real revenue workflows, source context, founder judgment, and
                  usefulness. Company Brain will expand that operating model to internal
                  decisions, SOPs, onboarding, and team memory once the GTM layer is working.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
