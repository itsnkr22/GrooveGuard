'use client';

import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import Button from '@/components/ui/Button';

interface CTASectionProps {
  headline: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTASection({
  headline,
  subtext,
  buttonLabel,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-purple-600/10 to-accent-blue/10" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-60" />

      {/* Extra glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent-blue/8 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeInOnScroll direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-white">
            {headline}
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.1}>
          <p className="mt-5 text-lg text-text-secondary font-body leading-relaxed">
            {subtext}
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={buttonHref}>
              {buttonLabel}
            </Button>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
