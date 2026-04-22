import Link from 'next/link'
import { ArrowRight, Compass, Wrench, Users, LineChart } from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'About — Operators Building for Insurance',
  description:
    'Drrizo is a workflow automation firm built specifically for independent insurance agencies. We are operators, not order-takers.',
  path: '/about',
})

const PRINCIPLES = [
  {
    icon: Compass,
    title: 'Specialists, not generalists.',
    description:
      'We only work with independent P&C and commercial lines insurance agencies. Every workflow we build is informed by how your industry actually operates \u2014 renewal cycles, carrier relationships, COI obligations, commission economics.',
  },
  {
    icon: Wrench,
    title: 'Operators, not order-takers.',
    description:
      'We don\u2019t build what you ask for. We build what protects and grows your book. If the right answer is a simpler workflow than you imagined, you\u2019ll hear it. If the right answer is to not build something yet, you\u2019ll hear that too.',
  },
  {
    icon: Users,
    title: 'Partners, not vendors.',
    description:
      'Our work compounds when we stay engaged. We optimise the systems we deploy, expand them as your agency grows, and treat your roadmap the way we\u2019d treat our own. No hand-off and disappear.',
  },
  {
    icon: LineChart,
    title: 'ROI, not theatre.',
    description:
      'Every workflow we build is justified by a specific, measurable outcome \u2014 protected commission, recovered hours, improved retention. If we can\u2019t articulate the math, we don\u2019t build it.',
  },
] as const

const COMMITMENTS = [
  {
    title: 'We will turn you down if we are not a fit.',
    description:
      'If your agency is too small, too early, or if the problem you bring us is better solved another way \u2014 we will tell you. A bad fit costs everyone.',
  },
  {
    title: 'We will not nickel-and-dime scope.',
    description:
      'When we commit to a workflow deployment, we commit to the outcome. We do not bill hours for scoped work, and we do not add fees for things that should have been obvious at the start.',
  },
  {
    title: 'We will not lock you in.',
    description:
      'Every system we build is documented, handed off cleanly, and portable. You should never feel trapped by the infrastructure we deploy.',
  },
] as const

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>About Drrizo</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              We&rsquo;re Operators,
              <br />
              <span className="gradient-text-amber">Not Order-Takers.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Drrizo is a workflow automation firm built specifically for independent
              insurance agencies. We don&rsquo;t sell software. We don&rsquo;t chase trends. We
              build the systems that protect your book and grow your commission &mdash; one
              workflow at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why we exist */}
      <section
        className="relative py-16 md:py-24"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <EyebrowBadge variant="muted">Why we exist</EyebrowBadge>
            <h2
              className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Independent agencies are being asked to do more with less &mdash; every year.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="mt-8 space-y-5 text-base leading-relaxed md:text-lg"
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              <p>
                Carriers are consolidating. Clients expect instant responses. Producers are
                stretched thinner than ever. And the administrative load of running a modern
                agency &mdash; renewals, COIs, follow-ups, onboarding, compliance &mdash; grows
                every quarter.
              </p>
              <p>
                The agencies that thrive in this environment are not the ones with the most
                producers or the biggest book. They are the ones with the best underlying
                systems. Systems that protect renewals automatically. Systems that respond to
                leads in minutes, not days. Systems that run annual reviews at scale.
              </p>
              <p
                className="text-lg font-medium md:text-xl"
                style={{ color: 'var(--color-text-primary)' }}
              >
                That&rsquo;s what we build. Nothing else.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">How we work</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Four principles, strictly enforced.
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div
                    className="card-lift card-gold-glow h-full rounded-2xl p-7"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <div
                      className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg"
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
                      className="text-xl font-semibold leading-snug"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed md:text-base"
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <EyebrowBadge variant="muted">Our commitments</EyebrowBadge>
              <h2
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                What you can hold us to.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 space-y-4">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div
                  className="card-lift rounded-2xl p-6 md:p-8"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '3px solid var(--color-accent)',
                  }}
                >
                  <h3
                    className="text-lg font-semibold leading-snug md:text-xl"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed md:text-base"
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
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
              Let&rsquo;s see if we&rsquo;re a fit.
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Thirty minutes. A written Workflow Opportunity Report. A clear answer either way.
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
