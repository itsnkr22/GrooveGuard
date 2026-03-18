'use client';

import { Search, Wrench, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const stepIcons: LucideIcon[] = [Search, Wrench, TrendingUp];

const badgeVariants: Array<'blue' | 'cyan' | 'emerald'> = ['blue', 'cyan', 'emerald'];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            badge="Process"
            title="How It Works"
            subtitle="Three simple steps from chaos to clarity."
            gradient
          />
        </FadeInOnScroll>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Horizontal connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-px">
            <div className="h-full w-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-emerald opacity-40" />
            {/* Animated pulse */}
            <div className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_infinite]" />
          </div>

          {/* Vertical connecting line (mobile) */}
          <div className="lg:hidden absolute left-8 top-16 bottom-16 w-px">
            <div className="h-full w-full bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-emerald opacity-40" />
          </div>

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <FadeInOnScroll key={step.step} direction="up" delay={index * 0.2}>
                  <div className="relative flex flex-col items-center text-center lg:items-center">
                    {/* Number badge */}
                    <div className="relative z-10 mb-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-secondary border border-border">
                        <Badge variant={badgeVariants[index]}>
                          {step.step}
                        </Badge>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <Icon size={22} className="text-accent-cyan" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold font-heading text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary font-body max-w-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInOnScroll>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
