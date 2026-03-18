import { generatePageMetadata } from '@/lib/metadata';
import { Users, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'Free AI Automation Guides | Recruitment, E-Commerce & Marketing',
  description:
    'Everything you need to understand how AI can transform your operations. No fluff, no gatekeeping — just actionable blueprints.',
  path: '/resources',
});

const guides = [
  {
    icon: Users,
    title: 'Recruitment Agencies',
    description:
      'The Complete Guide to AI Automation for Recruitment Agencies (2025). Learn how to automate candidate sourcing, screening, scheduling, and reporting.',
    href: '/resources/recruitment-ai-guide',
    workflowPreview: [
      'Candidate Sourcing & Screening',
      'Interview Scheduling & Follow-Ups',
      'Client Reporting & Pipeline Dashboards',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Brands',
    description:
      'The Complete Guide to AI Automation for E-Commerce Brands (2025). Learn how to automate product listings, customer support, and inventory management.',
    href: '/resources/ecommerce-ai-guide',
    workflowPreview: [
      'Product Listing Automation',
      'AI Customer Support Agent',
      'Inventory & Order Workflow',
    ],
  },
  {
    icon: Megaphone,
    title: 'Marketing Agencies',
    description:
      'The Complete Guide to AI Automation for Marketing Agencies (2025). Learn how to automate reporting, content pipelines, and lead nurturing.',
    href: '/resources/marketing-ai-guide',
    workflowPreview: [
      'Automated Client Reporting',
      'Content Pipeline Automation',
      'Lead Capture & Nurture Sequences',
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold font-heading text-white md:text-5xl lg:text-6xl">
                Free AI Automation Guides
              </h1>
              <p className="text-lg text-text-secondary font-body leading-relaxed">
                Everything you need to understand how AI can transform your operations.
                No fluff, no gatekeeping — just actionable blueprints.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <FadeInOnScroll key={guide.href} direction="up" delay={index * 0.1}>
                  <Link href={guide.href}>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/5">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={28} className="text-accent-blue" />
                      </div>

                      <h3 className="mb-3 text-xl font-bold font-heading text-white">
                        {guide.title}
                      </h3>

                      <p className="mb-6 text-sm text-text-secondary font-body leading-relaxed">
                        {guide.description}
                      </p>

                      <div className="mt-auto">
                        <p className="mb-3 text-xs font-semibold text-text-muted font-body uppercase tracking-wider">
                          What you&apos;ll learn
                        </p>
                        <ul className="mb-6 flex flex-col gap-2">
                          {guide.workflowPreview.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm text-text-secondary font-body"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center gap-2 text-sm font-semibold text-accent-blue font-body transition-colors group-hover:text-white">
                          Read the guide <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
