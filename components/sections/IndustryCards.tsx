'use client';

import Link from 'next/link';
import { Users, ShoppingCart, Megaphone, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import Card from '@/components/ui/Card';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  recruitment: Users,
  ecommerce: ShoppingCart,
  marketing: Megaphone,
};

export default function IndustryCards() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            badge="Industries"
            title="Built for Your Industry"
            subtitle="Tailored AI workflows that solve the specific pain points holding your team back."
            gradient
          />
        </FadeInOnScroll>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.slug] ?? Users;

            return (
              <FadeInOnScroll key={industry.slug} direction="up" delay={index * 0.15}>
                <Card className="glass p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 border border-accent-blue/20">
                    <Icon size={24} className="text-accent-blue" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold font-heading text-white">
                    {industry.name}
                  </h3>

                  {/* Pain point quote */}
                  <p className="mt-3 text-sm text-text-secondary font-body italic border-l-2 border-accent-amber/40 pl-3">
                    &ldquo;{industry.pain}&rdquo;
                  </p>

                  {/* Workflows */}
                  <ul className="mt-5 flex flex-col gap-2 flex-1">
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

                  {/* Link */}
                  <Link
                    href={industry.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-cyan transition-colors font-body group"
                  >
                    Explore Workflows
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
  );
}
