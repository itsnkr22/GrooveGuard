'use client';

import { AlertTriangle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface PainPointsProps {
  title: string;
  points: string[];
}

export default function PainPoints({ title, points }: PainPointsProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            title={title}
            align="center"
          />
        </FadeInOnScroll>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => (
            <FadeInOnScroll key={index} direction="up" delay={index * 0.1}>
              <div className="flex items-start gap-3 rounded-xl border border-red-500/15 bg-red-500/5 p-5 transition-colors hover:border-accent-amber/30">
                <div className="flex-shrink-0 mt-0.5">
                  <AlertTriangle size={18} className="text-accent-amber" />
                </div>
                <p className="text-sm text-text-secondary font-body leading-relaxed">
                  {point}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
