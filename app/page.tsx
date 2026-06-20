import Link from 'next/link'
import {
  ArrowUpRight,
  Clock3,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import { PAIN_POINTS, SITE_NAME, SITE_URL } from '@/lib/constants'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import LogoMarquee from '@/components/insurance/LogoMarquee'
import DashboardMock from '@/components/insurance/DashboardMock'
import RenewalFlow from '@/components/insurance/RenewalFlow'

export const metadata = generatePageMetadata({
  title: 'Drrizo | AI Bottleneck Consulting',
  description:
    'Drrizo offers free AI mini assessments and paid implementation help for founders and operators who want one practical AI fix tied to revenue, time, or customer happiness.',
  path: '/',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description:
    'AI consulting for founders and operators. Drrizo helps teams find one repeated bottleneck, prescribe one practical AI tool, and choose the right implementation path.',
  url: SITE_URL,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: 'AI Consulting and AI Workflow Implementation',
}

const leverIcons = [TrendingUp, Clock3, HeartHandshake]

const questions = [
  {
    title: 'The forking question',
    body: 'What matters more right now: more revenue, more time, or happier customers?',
  },
  {
    title: 'The repetition question',
    body: 'What is your most repeated weekly task? One thing usually sticks out fast.',
  },
  {
    title: 'The friction question',
    body: 'Where do things stall, get messy, or slip through the cracks?',
  },
  {
    title: 'The ROI anchor',
    body: 'Hours per week multiplied by the value of your time. You price the fix yourself.',
  },
  {
    title: 'The magic wand question',
    body: 'If this ran itself tomorrow, what would change? Then we listen carefully.',
  },
]

const prescriptionPaths = [
  {
    title: 'Off-the-shelf tool',
    body: 'For common repeated tasks where an existing product is enough.',
  },
  {
    title: 'Claude Cowork',
    body: 'For judgment, writing, research, synthesis, and thinking alongside the operator.',
  },
  {
    title: 'Custom Claude skill',
    body: 'For repeatable workflows that are unique to how the business actually works.',
  },
]

const paidOptions = [
  {
    title: 'Hand it off',
    body: 'You get the prescription, the tool, the cost, and the first step. Your team runs it.',
  },
  {
    title: 'Build it with you',
    body: 'Drrizo works alongside you to configure the workflow, test it, and train the operator.',
  },
  {
    title: 'Build it for you',
    body: 'Drrizo designs, implements, documents, and hands off the AI workflow.',
  },
]

function PrimaryCta({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/audit"
      className={`group btn-shimmer inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] ${className}`}
      style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-text-inverse)' }}
    >
      Book Free Assessment
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
      </span>
    </Link>
  )
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden pb-24 pt-20 md:pt-24">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-45" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <Reveal>
                <EyebrowBadge>Free AI mini assessment</EyebrowBadge>
              </Reveal>
              <Reveal delay={0.08}>
                <h1
                  className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-6xl lg:text-[76px]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Find the one bottleneck AI should fix first.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p
                  className="mt-6 max-w-xl text-base leading-relaxed md:text-xl"
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  A free mini assessment that maps one repeated friction point to one practical AI tool or paid build.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <PrimaryCta />
                  <Link
                    href="#method"
                    className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white"
                    style={{
                      border: '1px solid var(--color-border-accent)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    See The Method
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <DashboardMock />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl">
          <LogoMarquee />
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                If it does not hit one ROI lever, it does not make the cut.
              </h2>
              <p
                className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                The first filter is deliberately simple. The right AI target should make money,
                save time, or improve the customer experience.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="bezel-shell h-full">
                <div className="bezel-core h-full p-7 md:p-9">
                  {(() => {
                    const Icon = leverIcons[0]
                    const first = PAIN_POINTS[0]
                    return (
                      <>
                        <Icon className="h-7 w-7" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                        <h3
                          className="mt-8 text-4xl font-semibold tracking-[-0.02em] md:text-5xl"
                          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                        >
                          {first.stat}
                        </h3>
                        <p className="mt-3 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                          {first.statLabel}
                        </p>
                        <p className="mt-5 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                          {first.description}
                        </p>
                      </>
                    )
                  })()}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {PAIN_POINTS.slice(1).map((point, index) => {
                const Icon = leverIcons[index + 1]
                return (
                  <Reveal key={point.stat} delay={index * 0.08}>
                    <div className="bezel-shell">
                      <div className="bezel-core p-6">
                        <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                        <h3
                          className="mt-5 text-2xl font-semibold tracking-[-0.01em]"
                          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                        >
                          {point.stat}
                        </h3>
                        <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                          {point.statLabel}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Discovery first. Prescription second.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Meeting one is for listening. Between calls, Drrizo finds where frequency meets friction. Meeting two gives the prescription.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <RenewalFlow />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Five questions reveal the first useful AI target.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {questions.map((question, index) => (
              <Reveal
                key={question.title}
                delay={index * 0.05}
                className={index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <div className="bezel-shell h-full">
                  <div className="bezel-core h-full p-6">
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                      {question.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {question.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <h2
                className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                One bottleneck. Three possible prescriptions.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Drrizo tells you what to use, what it costs, and what the first step should be. The build stays behind the paid engagement.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr_0.9fr]">
            {prescriptionPaths.map((path, index) => (
              <Reveal key={path.title} delay={index * 0.08}>
                <div className="bezel-shell h-full">
                  <div className="bezel-core h-full p-7">
                    <Sparkles className="h-5 w-5" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                    <h3
                      className="mt-6 text-2xl font-semibold tracking-[-0.01em]"
                      style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                    >
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

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <Reveal>
              <div className="sticky top-28">
                <h2
                  className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  Free value first. Paid work when the fix is obvious.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  At the end of call two, the money question is simple: want to hand this off, build it with Drrizo, or have Drrizo build it?
                </p>
                <PrimaryCta className="mt-7" />
              </div>
            </Reveal>
            <div className="grid gap-5">
              {paidOptions.map((option, index) => (
                <Reveal key={option.title} delay={index * 0.08}>
                  <div className="bezel-shell">
                    <div className="bezel-core p-7">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h3 className="text-2xl font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>
                            {option.title}
                          </h3>
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                            {option.body}
                          </p>
                        </div>
                        <Wrench className="h-5 w-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Pick the first step, not the biggest system.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                The assessment earns trust by being useful before it becomes a paid engagement.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <PrimaryCta />
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white"
                  style={{ border: '1px solid var(--color-border-accent)', color: 'var(--color-text-primary)' }}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
