'use client';

import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface ROIMetric {
  label: string;
  before: string;
  after: string;
}

interface ROISummaryProps {
  metrics: ROIMetric[];
}

export default function ROISummary({ metrics }: ROISummaryProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInOnScroll direction="up">
          <SectionHeading
            badge="ROI"
            badgeVariant="emerald"
            title="Before & After"
            subtitle="See the measurable impact of AI workflow automation on your operations."
            gradient
          />
        </FadeInOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <FadeInOnScroll key={metric.label} direction="up" delay={index * 0.1}>
              <div className="rounded-2xl border border-border bg-bg-secondary/70 backdrop-blur-xl p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-accent-emerald/5">
                {/* Label */}
                <p className="text-sm font-medium text-text-secondary font-body mb-5">
                  {metric.label}
                </p>

                {/* Before / After comparison */}
                <div className="flex items-center gap-4">
                  {/* Before */}
                  <div className="flex-1">
                    <p className="text-xs font-medium text-text-muted font-body uppercase tracking-wider mb-1">
                      Before
                    </p>
                    <p className="text-2xl font-bold font-heading text-red-400/80 line-through decoration-red-400/40">
                      {metric.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <ArrowRight size={20} className="text-text-muted" />
                  </div>

                  {/* After */}
                  <div className="flex-1">
                    <p className="text-xs font-medium text-accent-emerald font-body uppercase tracking-wider mb-1">
                      After
                    </p>
                    <p className="text-2xl font-bold font-heading text-accent-emerald">
                      {metric.after}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
