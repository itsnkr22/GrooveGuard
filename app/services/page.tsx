import Link from 'next/link'
import { ArrowUpRight, Check, Search, Wrench } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { SERVICES } from '@/lib/constants'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'

export const metadata = generatePageMetadata({
  title: 'Services | Drrizo',
  description:
    'Explore Drrizo AI consulting services: a free AI mini assessment and paid implementation help for practical AI workflows.',
  path: '/services',
})

const icons: Record<string, typeof Search> = {
  search: Search,
  wrench: Wrench,
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-24 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-4xl">
              <h1
                className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Free assessment first. Paid implementation only when the bottleneck is worth fixing.
              </h1>
              <p
                className="mt-6 max-w-3xl text-base leading-relaxed md:text-xl"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Drrizo starts by finding one repeated friction point tied to revenue, time, or customers. Then the paid work is scoped around the fix.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon] ?? Search
            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="bezel-shell h-full">
                  <div className="bezel-core flex h-full flex-col p-7 md:p-9">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full"
                        style={{ backgroundColor: 'var(--color-accent-soft)' }}
                      >
                        <Icon className="h-6 w-6" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                      </div>
                      <span
                        className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                        style={{
                          borderColor: 'var(--color-border-accent)',
                          color: 'var(--color-accent-dark)',
                        }}
                      >
                        {service.status}
                      </span>
                    </div>

                    <h2
                      className="mt-7 text-3xl font-semibold tracking-[-0.02em] md:text-4xl"
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
                      className="mt-6 rounded-3xl border p-4 text-sm font-semibold leading-relaxed"
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
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: 'var(--color-accent-dark)' }}
                    >
                      {service.cta} <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
