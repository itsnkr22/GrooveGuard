import { generatePageMetadata } from '@/lib/metadata';
import ContactForm from '@/components/forms/ContactForm';
import FAQSection from '@/components/sections/FAQSection';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import { Clock, Zap } from 'lucide-react';

export const metadata = generatePageMetadata({
  title: 'Contact - Book Your Free Automation Audit',
  description:
    'Book a free 30-minute automation audit. We\'ll analyze your workflows, identify automation opportunities, and give you a clear roadmap.',
  path: '/contact',
});

const faqs = [
  {
    question: 'Do I need to be technical?',
    answer:
      'No. We handle all the technical work. You just need to tell us about your current processes and what you\'d like to automate. We\'ll handle the implementation, integrations, and testing.',
  },
  {
    question: 'How quickly can you build automations?',
    answer:
      'Most workflows are live within 2-4 weeks. Simple automations can be deployed in as little as a week. Complex multi-system integrations may take 4-6 weeks.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer:
      'Yes. Whether you\'re a 5-person agency or a 100-person operation, our workflows scale to fit. We\'ve built automations for startups and enterprise-level organizations alike.',
  },
  {
    question: 'What if I\'m not sure what to automate?',
    answer:
      'That\'s exactly what the free audit is for. We\'ll analyze your workflows and identify the highest-impact automation opportunities — showing you exactly where AI can save you the most time and money.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We offer ongoing optimisation retainers to keep your automations running smoothly and expanding as your business grows. We monitor performance, fix edge cases, and continuously improve your workflows.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInOnScroll direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold font-heading text-white md:text-5xl lg:text-6xl">
                Let&apos;s Map Your Automation Opportunities
              </h1>
              <p className="text-lg text-text-secondary font-body leading-relaxed">
                Book a free 30-minute audit call. We&apos;ll analyse your current
                workflows, identify the highest-impact automation opportunities, and
                give you a clear roadmap — whether you work with us or not.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <FadeInOnScroll direction="up" delay={0.1}>
              <ContactForm />
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.2}>
              <div className="flex flex-col gap-8 rounded-2xl border border-border bg-bg-secondary/50 p-8">
                <div>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    Get in touch
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Clock size={20} className="text-accent-blue" />
                      <span className="font-body">We respond within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-border" />

                <div>
                  <h3 className="mb-4 text-xl font-bold font-heading text-white">
                    What to expect
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <Zap size={18} className="mt-0.5 text-accent-amber flex-shrink-0" />
                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        A 30-minute call where we audit your workflows and show you exactly
                        where AI can save time and money.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Zap size={18} className="mt-0.5 text-accent-amber flex-shrink-0" />
                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        No pitch, no pressure. We&apos;ll give you actionable insights
                        regardless of whether you proceed.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Zap size={18} className="mt-0.5 text-accent-amber flex-shrink-0" />
                      <p className="text-sm text-text-secondary font-body leading-relaxed">
                        A clear roadmap with estimated time-to-value for each automation
                        opportunity we identify.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </>
  );
}
