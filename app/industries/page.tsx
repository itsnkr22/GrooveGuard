import Link from 'next/link';
import { Users, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import Hero from '@/components/sections/Hero';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import Card from '@/components/ui/Card';

export const metadata = generatePageMetadata({
  title: 'Industries We Serve',
  description:
    'Purpose-built AI automation for recruitment agencies, e-commerce brands, and marketing agencies. Industry-specific workflows that eliminate repetitive work and drive measurable results.',
  path: '/industries',
});

interface IndustryFeature {
  icon: LucideIcon;
  name: string;
  valueProposition: string;
  workflows: string[];
  href: string;
  ctaLabel: string;
}

const industries: IndustryFeature[] = [
  {
    icon: Users,
    name: 'Recruitment Agencies',
    valueProposition:
      'Recruitment agencies lose hours to admin — candidate screening, scheduling, reporting. We automate the operational backbone so your recruiters focus on placements and relationships.',
    workflows: [
      'AI-Powered Candidate Sourcing & Screening',
      'Automated Interview Scheduling & Follow-Ups',
      'Client Reporting & Pipeline Dashboards',
    ],
    href: '/industries/recruitment',
    ctaLabel: 'Explore Recruitment Workflows',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce Brands',
    valueProposition:
      'E-commerce operations are repetitive by nature — product listings, support tickets, inventory management. We build AI systems that handle it all, across every channel.',
    workflows: [
      'AI-Powered Product Listing Automation',
      'AI Customer Support Agent',
      'Inventory & Order Workflow Automation',
    ],
    href: '/industries/ecommerce',
    ctaLabel: 'Explore E-Commerce Workflows',
  },
  {
    icon: Megaphone,
    name: 'Marketing Agencies',
    valueProposition:
      'Marketing agencies juggle reporting, content pipelines, and lead nurture across dozens of clients. We automate the delivery layer so your team focuses on strategy and creative.',
    workflows: [
      'Automated Client Reporting',
      'Content Pipeline Automation',
      'Lead Capture & Nurture Sequences',
    ],
    href: '/industries/marketing',
    ctaLabel: 'Explore Marketing Workflows',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        headline="AI Automation, Purpose-Built for Your Industry"
        subheadline="We don't do generic. Every workflow we build is designed around the specific pain points, tools, and processes of your industry — so automation actually works from day one."
        primaryCTA={{ label: 'Book Your Free Automation Audit', href: '/contact' }}
        secondaryCTA={{ label: 'See Our Services', href: '/services' }}
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <FadeInOnScroll key={industry.name} direction="up" delay={index * 0.15}>
                  <Card className="glass p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <Icon size={28} className="text-accent-blue" />
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl font-bold font-heading text-white">
                      {industry.name}
                    </h2>

                    {/* Value Proposition */}
                    <p className="mt-4 text-sm text-text-secondary font-body leading-relaxed">
                      {industry.valueProposition}
                    </p>

                    {/* Workflow Previews */}
                    <div className="mt-6 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted font-body mb-3">
                        Key Workflows
                      </p>
                      <ul className="flex flex-col gap-2">
                        {industry.workflows.map((workflow) => (
                          <li
                            key={workflow}
                            className="flex items-start gap-2 text-sm text-text-secondary font-body"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-cyan" />
                            {workflow}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Link */}
                    <Link
                      href={industry.href}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-cyan transition-colors font-body group"
                    >
                      {industry.ctaLabel}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </Card>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
