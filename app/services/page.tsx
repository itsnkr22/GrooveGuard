import { generatePageMetadata } from '@/lib/metadata';
import { Settings, Bot, BarChart3, Puzzle } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import CTASection from '@/components/sections/CTASection';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = generatePageMetadata({
  title: 'AI Automation Services | Workflow, Agents, Integration & Reporting',
  description:
    'We design, build, deploy, and maintain AI-powered workflows that eliminate bottlenecks and scale your operations.',
  path: '/services',
});

const services = [
  {
    icon: Settings,
    title: 'Workflow Automation',
    description:
      'We map your existing processes, identify automation opportunities, and build end-to-end workflows that run without human intervention.',
    useCases: [
      'Data entry and document processing',
      'Scheduling and calendar management',
      'Automated notifications and reminders',
      'Reporting and data compilation',
    ],
    tools: ['n8n', 'Make', 'Zapier', 'Custom Integrations'],
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description:
      'Custom AI agents that handle customer support, lead qualification, content generation, data analysis, and more — powered by the latest LLMs.',
    useCases: [
      'Customer support bots',
      'Sales qualification agents',
      'Content generation systems',
      'Research assistants',
    ],
    tools: ['GPT-4', 'Claude', 'LangChain', 'Vector Databases'],
  },
  {
    icon: BarChart3,
    title: 'Data & Reporting Automation',
    description:
      'We connect your data sources, build real-time dashboards, and generate automated reports with AI-written commentary.',
    useCases: [
      'Client reporting automation',
      'Internal KPI dashboards',
      'Competitive intelligence',
      'Performance monitoring',
    ],
    tools: ['APIs', 'Google Sheets', 'Data Studio', 'Custom Dashboards', 'LLM-Generated Insights'],
  },
  {
    icon: Puzzle,
    title: 'System Integration',
    description:
      'We connect your existing tools — CRM, ATS, e-commerce platform, ad platforms, email tools — into a unified automated ecosystem.',
    useCases: [
      'CRM-to-email automation',
      'ATS-to-calendar sync',
      'Multi-channel data aggregation',
      'Custom API connections',
    ],
    tools: ['REST APIs', 'Webhooks', 'n8n/Make', 'Custom Middleware'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Audit',
    timeline: 'Week 1',
    description:
      'Deep-dive into your current workflows. We identify bottlenecks, manual processes, and automation opportunities.',
    deliverable: 'Automation Opportunity Map',
  },
  {
    step: '02',
    title: 'Design & Architecture',
    timeline: 'Week 2',
    description:
      'We design the technical workflow, select tools, and map integrations. You approve the blueprint before we build.',
    deliverable: 'Workflow Blueprint',
  },
  {
    step: '03',
    title: 'Build & Deploy',
    timeline: 'Weeks 3-4',
    description:
      'We build, test, and deploy the automations into your live environment. Full documentation and team training included.',
    deliverable: 'Live, Tested Automations',
  },
  {
    step: '04',
    title: 'Optimise & Scale',
    timeline: 'Ongoing',
    description:
      'We monitor performance, fix edge cases, and expand automations as your needs evolve.',
    deliverable: 'Monthly Performance Reviews',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        headline="Our AI Automation Services"
        subheadline="We design, build, deploy, and maintain AI-powered workflows that eliminate bottlenecks and scale your operations."
        primaryCTA={{ label: 'Book Your Free Audit', href: '/contact' }}
      />

      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Services"
              title="What We Do"
              subtitle="End-to-end AI automation solutions tailored to your business needs."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeInOnScroll key={service.title} direction="up" delay={index * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-8 transition-all duration-300 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/5">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
                          <Icon size={24} className="text-accent-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-heading text-white">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                          Use Cases
                        </p>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {service.useCases.map((useCase) => (
                            <li
                              key={useCase}
                              className="flex items-start gap-2 text-sm text-text-secondary font-body"
                            >
                              <CheckCircle2
                                size={14}
                                className="mt-0.5 flex-shrink-0 text-accent-cyan"
                              />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-text-muted font-body uppercase tracking-wider mb-3">
                          Tools We Use
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <Badge key={tool} variant="cyan">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <SectionHeading
              badge="Process"
              title="How We Work"
              subtitle="A proven 4-step methodology that delivers results from day one."
              gradient
            />
          </FadeInOnScroll>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {process.map((item, index) => (
              <FadeInOnScroll key={item.step} direction="up" delay={index * 0.1}>
                <div className="relative rounded-2xl border border-border bg-bg-secondary/50 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl font-bold font-heading text-accent-blue/60">
                      {item.step}
                    </span>
                      <Badge variant="blue">{item.timeline}</Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-text-secondary font-body leading-relaxed">
                    {item.description}
                  </p>
                  <div className="rounded-lg bg-accent-blue/5 border border-accent-blue/10 px-3 py-2">
                    <p className="text-xs font-semibold text-accent-blue font-body">
                      {item.deliverable}
                    </p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-text-muted" />
                    </div>
                  )}
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Map Your Automation Opportunities."
        subtext="Book a free 30-minute audit call. We'll analyze your workflows, identify automation opportunities, and give you a clear roadmap."
        buttonLabel="Book Your Free Audit →"
        buttonHref="/contact"
      />
    </>
  );
}
