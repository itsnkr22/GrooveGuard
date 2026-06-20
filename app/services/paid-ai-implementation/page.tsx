import Link from 'next/link'
import { ArrowUpRight, Check, Wrench } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'

export const metadata = generatePageMetadata({
  title: 'Paid AI Implementation | Drrizo',
  description:
    'Drrizo helps implement the AI prescription through handoff, guided build, or done-for-you workflow design using practical tools, Claude Cowork, or custom Claude skills.',
  path: '/services/paid-ai-implementation',
  keywords: [
    'AI implementation consultant',
    'Claude Cowork setup',
    'custom Claude skill',
    'AI workflow implementation',
    'AI consulting engagement',
  ],
})

const paths = [
  {
    title: 'Off-the-shelf tool',
    body: 'A common task does not need a custom build. Drrizo helps select and set up the right tool.',
  },
  {
    title: 'Claude Cowork',
    body: 'Useful when the work involves judgment, writing, research, synthesis, or repeated thinking with context.',
  },
  {
    title: 'Custom Claude skill',
    body: 'Useful when your workflow is repeatable, high-value, and specific enough to deserve a custom operating pattern.',
  },
]

const engagement = [
  'Workflow design around the selected bottleneck',
  'Tool setup or Claude workspace configuration',
  'Prompting, source structure, and operator instructions',
  'Human review points for judgment-heavy work',
  'Testing against real examples',
  'Documentation and handoff',
]

export default function PaidImplementationPage() {
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
                When the bottleneck is worth fixing, Drrizo helps build the fix.
              </h1>
              <p
                className="mt-6 max-w-3xl text-base leading-relaxed md:text-xl"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Paid work begins after the assessment points to a frequent, painful, financially useful workflow.
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
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] md:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
              Three build paths, chosen after discovery.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr_1.1fr]">
            {paths.map((path, index) => (
              <Reveal key={path.title} delay={index * 0.08}>
                <div className="bezel-shell h-full">
                  <div className="bezel-core h-full p-7">
                    <Wrench className="h-5 w-5" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                    <h3 className="mt-6 text-2xl font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                      {path.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                      {path.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}>
                What paid work can include
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                The scope stays narrow. The point is business usefulness, not novelty.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagement.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="bezel-shell h-full">
                  <div className="bezel-core flex h-full gap-3 p-5">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {item}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
