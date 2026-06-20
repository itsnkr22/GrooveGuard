import Link from 'next/link'
import { ArrowUpRight, Check, Search } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import RenewalFlow from '@/components/insurance/RenewalFlow'

export const metadata = generatePageMetadata({
  title: 'Free AI Mini Assessment | Drrizo',
  description:
    'Book a free AI mini assessment to find one repeated bottleneck, map it to revenue, time, or customer happiness, and get one practical AI prescription.',
  path: '/services/free-ai-mini-assessment',
  keywords: [
    'free AI assessment',
    'AI mini assessment',
    'AI consulting discovery',
    'AI bottleneck assessment',
    'AI workflow assessment',
  ],
})

const callOne = [
  'What matters more: more revenue, more time, or happier customers?',
  'What is your most repeated weekly task?',
  'Where do things stall or slip through the cracks?',
  'How many hours per week does this cost?',
  'If this ran itself tomorrow, what would change?',
]

const callTwo = [
  'The one bottleneck worth addressing first',
  'The prescribed path: tool, Claude Cowork, or custom Claude skill',
  'The tool name or implementation direction',
  'The expected cost range or software cost',
  'The first step you could take this week',
  'The paid option if you want Drrizo involved',
]

export default function FreeAssessmentPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-24 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <h1
                className="text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Find the first AI fix before you spend on implementation.
              </h1>
              <p
                className="mt-6 max-w-2xl text-base leading-relaxed md:text-xl"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                The free mini assessment is a two-call process. Call one listens. Call two prescribes one practical next step.
              </p>
              <Link
                href="/audit"
                className="group btn-shimmer mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-text-inverse)' }}
              >
                Book Free Assessment
                <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                </span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RenewalFlow />
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="bezel-shell h-full">
              <div className="bezel-core h-full p-7 md:p-9">
                <Search className="h-6 w-6" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em]" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                  Call one is pure discovery.
                </h2>
                <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  Drrizo asks, listens, and names the pain back to you. No prescription happens on the first call.
                </p>
                <ul className="mt-6 grid gap-3">
                  {callOne.map((item) => (
                    <li key={item} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="bezel-shell h-full">
              <div className="bezel-core h-full p-7 md:p-9">
                <Search className="h-6 w-6" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em]" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                  Call two gives one prescription.
                </h2>
                <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  Between calls, Drrizo finds where frequency meets friction. The result is one clear recommendation.
                </p>
                <ul className="mt-6 grid gap-3">
                  {callTwo.map((item) => (
                    <li key={item} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
