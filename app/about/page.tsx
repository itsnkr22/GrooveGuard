import { generatePageMetadata } from '@/lib/metadata';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import CTASection from '@/components/sections/CTASection';
import { Hammer, MessageCircle, Target } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'About GrooveGuard',
  description:
    "We're a team of automation architects and AI engineers building intelligent workflow systems for businesses across UK, EU, Gulf, and US.",
  path: '/about',
});

const values = [
  {
    title: 'Build to Last',
    description:
      'We don\'t do quick hacks. Every workflow we build is documented, maintainable, and designed to scale with your business. When we hand it over, it works — and keeps working.',
    icon: Hammer,
  },
  {
    title: 'Plain English',
    description:
      'No jargon, no vague promises. We explain what we\'re building, why it matters, and exactly what results you can expect. If something won\'t work, we\'ll tell you upfront.',
    icon: MessageCircle,
  },
  {
    title: 'Results Over Hype',
    description:
      'We measure success in hours saved, costs cut, and revenue unlocked — not in buzzwords. Every automation we build has a clear, measurable ROI attached to it.',
    icon: Target,
  },
];

const differentiators = [
  {
    title: 'We Specialise in 3 Industries',
    description:
      'Recruitment, e-commerce, and marketing agencies. By going deep instead of wide, we understand the exact pain points, tools, and workflows that matter in your world.',
  },
  {
    title: 'We Build, Not Just Consult',
    description:
      'Plenty of agencies will tell you what to automate. We actually build it. You get live, working systems — not a PDF of recommendations gathering dust.',
  },
  {
    title: 'Ongoing Partnership',
    description:
      'We don\'t just build and disappear. We offer ongoing optimisation retainers to keep your automations running smoothly, adapting to changes, and expanding as you grow.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent-blue/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <FadeInOnScroll direction="up">
            <h1 className="text-4xl font-bold font-heading tracking-tight text-white sm:text-5xl lg:text-6xl">
              We&apos;re GrooveGuard. We Build AI Systems That Work.
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary font-body leading-relaxed">
              Automation architects and AI engineers on a mission to free businesses from the busywork that holds them back.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Our Story"
              title="Why We Started GrooveGuard"
              align="left"
            />
          </FadeInOnScroll>

          <div className="mt-12 space-y-6 text-base text-text-secondary font-body leading-relaxed">
            <FadeInOnScroll direction="up" delay={0.1}>
              <p>
                We started GrooveGuard because we kept seeing the same problem: smart, ambitious teams buried in repetitive work. Recruiters spending hours on admin instead of making placements. E-commerce operators drowning in manual product updates and support tickets. Marketing agencies losing entire days to client reporting. The tools existed to fix all of this — but nobody was connecting the dots.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.2}>
              <p>
                So we became the people who connect the dots. We&apos;re not a generic &ldquo;AI consultancy&rdquo; that talks in abstractions. We&apos;re automation architects — we get into the detail of your processes, understand exactly where time is being wasted, and build intelligent systems that handle it for you. Every workflow we create is tailored to your stack, your team, and your goals.
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.3}>
              <p>
                Today, we serve businesses across the UK, EU, Gulf, and US — from lean startups to established agencies with 100+ staff. Whether you need a single workflow automated or an entire operational overhaul powered by AI, we build systems that deliver measurable results within weeks, not quarters.
              </p>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 lg:py-32 bg-bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Values"
              title="What We Stand For"
              subtitle="The principles that guide every workflow we build."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeInOnScroll key={value.title} direction="up" delay={index * 0.15}>
                  <Card className="p-6 h-full">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <Icon size={20} className="text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary font-body leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Differentiators"
              title="What Makes Us Different"
              subtitle="We go deeper, build faster, and stay longer than the average automation agency."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {differentiators.map((item, index) => (
              <FadeInOnScroll key={item.title} direction="up" delay={index * 0.15}>
                <div className="relative rounded-2xl border border-border bg-bg-secondary/40 p-8">
                  {/* Step number */}
                  <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-cyan/10 text-sm font-bold text-accent-cyan font-heading border border-accent-cyan/20">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let's Talk About Your Workflows"
        subtext="Book a free 30-minute call. We'll learn about your processes, identify what can be automated, and outline a clear plan to save your team hours every week."
        buttonLabel="Book Your Free Audit →"
        buttonHref="/contact"
      />
    </>
  );
}
