'use client';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import WorkflowDiagram from '@/components/animations/WorkflowDiagram';
import Button from '@/components/ui/Button';

interface CTALink {
  label: string;
  href: string;
}

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTALink;
  secondaryCTA?: CTALink;
  showWorkflow?: boolean;
}

const workflowNodes = [
  { id: 'inbound', label: 'Inbound Lead', description: 'New lead enters your pipeline' },
  { id: 'screening', label: 'AI Screening', description: 'Automated qualification & scoring' },
  { id: 'schedule', label: 'Auto-Schedule', description: 'Calendar sync & booking' },
  { id: 'report', label: 'Placement Report', description: 'Auto-generated insights' },
];

export default function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  showWorkflow = false,
}: HeroProps) {
  // Split headline to highlight the last two words in gradient
  const words = headline.split(' ');
  const mainText = words.slice(0, -2).join(' ');
  const highlightText = words.slice(-2).join(' ');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-accent-cyan/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div
          className={`flex flex-col ${
            showWorkflow ? 'lg:flex-row lg:items-center lg:gap-16' : 'items-center text-center'
          } gap-12`}
        >
          {/* Text content */}
          <div className={`flex flex-col gap-6 ${showWorkflow ? 'lg:w-1/2' : 'max-w-3xl'}`}>
            <FadeInOnScroll direction="up" delay={0}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                {mainText}{' '}
                <span className="gradient-text">{highlightText}</span>
              </h1>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.15}>
              <p className="text-lg sm:text-xl text-text-secondary font-body leading-relaxed max-w-xl">
                {subheadline}
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll direction="up" delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-2">
                <Button variant="primary" size="lg" href={primaryCTA.href}>
                  {primaryCTA.label}
                </Button>
                {secondaryCTA && (
                  <Button variant="secondary" size="lg" href={secondaryCTA.href}>
                    {secondaryCTA.label}
                  </Button>
                )}
              </div>
            </FadeInOnScroll>
          </div>

          {/* Workflow diagram */}
          {showWorkflow && (
            <FadeInOnScroll direction="right" delay={0.4} className="lg:w-1/2 flex justify-center">
              <WorkflowDiagram nodes={workflowNodes} className="w-full" />
            </FadeInOnScroll>
          )}
        </div>
      </div>
    </section>
  );
}
