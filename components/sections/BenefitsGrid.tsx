'use client';

import { Clock, UserX, DollarSign, Settings, Zap, RefreshCw } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { BENEFITS } from '@/lib/constants';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

const benefitIcons: LucideIcon[] = [Clock, UserX, DollarSign, Settings, Zap, RefreshCw];

export default function BenefitsGrid() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            badge="Benefits"
            title="Why GrooveGuard?"
            subtitle="Real results, not just promises. Here's what changes when you automate."
            gradient
          />
        </FadeInOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, index) => {
            const Icon = benefitIcons[index];

            return (
              <FadeInOnScroll key={benefit.title} direction="up" delay={index * 0.1}>
                <Card className="group relative p-6 h-full border border-border hover:border-accent-blue/30 transition-colors duration-300">
                  {/* Hover glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent-blue/5 to-accent-cyan/5" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                      <Icon size={20} className="text-accent-blue" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold font-heading text-white">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-sm text-text-secondary font-body leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </FadeInOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
