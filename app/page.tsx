import { generatePageMetadata } from '@/lib/metadata';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import Hero from '@/components/sections/Hero';
import IndustryCards from '@/components/sections/IndustryCards';
import HowItWorks from '@/components/sections/HowItWorks';
import BenefitsGrid from '@/components/sections/BenefitsGrid';
import CTASection from '@/components/sections/CTASection';
import CountUpMetric from '@/components/animations/CountUpMetric';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = generatePageMetadata({
  title: 'AI Workflow Automation Agency',
  description:
    'Custom AI workflow automations for recruitment agencies, e-commerce brands, and marketing agencies. Save 40+ hours/week with intelligent automation.',
  path: '/',
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'Custom AI workflow automations for recruitment agencies, e-commerce brands, and marketing agencies. Save 40+ hours/week with intelligent automation.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${SITE_URL}/contact`,
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <Hero
        headline="We Build AI Systems That Run Your Business — So You Don't Have To"
        subheadline="Custom AI workflows for recruitment agencies, e-commerce brands, and marketing teams. We automate the busywork so your team can focus on what actually grows the business."
        primaryCTA={{ label: 'Book Your Free Automation Audit', href: '/contact' }}
        secondaryCTA={{ label: 'See Our Workflows', href: '/services' }}
        showWorkflow
      />

      {/* Social Proof Strip */}
      <section className="relative py-16 lg:py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <p className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-text-muted font-body">
              Trusted by teams across UK, EU, Gulf &amp; US
            </p>
          </FadeInOnScroll>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <FadeInOnScroll direction="up" delay={0}>
              <div className="text-center">
                <CountUpMetric value={150} suffix="+" label="Workflows Built" />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.15}>
              <div className="text-center">
                <CountUpMetric value={40} suffix="+" label="Hours Saved Per Week" />
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.3}>
              <div className="text-center">
                <CountUpMetric value={3} label="Core Industries" />
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Solutions"
              title="What We Automate"
              subtitle="Industry-specific AI workflows that eliminate the repetitive work slowing your team down."
              gradient
            />
          </FadeInOnScroll>
        </div>
      </section>

      {/* IndustryCards (includes its own container/padding) */}
      <IndustryCards />

      {/* How It Works */}
      <HowItWorks />

      {/* Benefits */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Benefits"
              title="Why Businesses Choose GrooveGuard"
              subtitle="Real results, not just promises. Here's what changes when you automate."
              gradient
            />
          </FadeInOnScroll>
        </div>
      </section>

      <BenefitsGrid />

      {/* Final CTA */}
      <CTASection
        headline="Ready to Stop Doing Manually What AI Can Do in Seconds?"
        subtext="Book a free 30-minute automation audit. We'll map your workflows, identify what can be automated, and show you exactly how much time and money you'll save."
        buttonLabel="Book Your Free Audit →"
        buttonHref="/contact"
      />
    </>
  );
}
