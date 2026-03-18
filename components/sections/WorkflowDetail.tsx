'use client';

import { CheckCircle } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import FadeInOnScroll from '@/components/animations/FadeInOnScroll';

interface WorkflowDetailProps {
  index: number;
  title: string;
  problem: string;
  steps: string[];
  tools: string[];
  outcome: string;
}

export default function WorkflowDetail({
  index,
  title,
  problem,
  steps,
  tools,
  outcome,
}: WorkflowDetailProps) {
  return (
    <FadeInOnScroll direction="up">
      <div className="glass rounded-2xl p-8 lg:p-10">
        <div className="flex flex-col gap-6">
          {/* Header: number + title */}
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-blue/15 border border-accent-blue/30">
              <span className="text-sm font-bold font-heading text-accent-blue">
                {String(index).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold font-heading text-white leading-tight">
              {title}
            </h3>
          </div>

          {/* Problem */}
          <div className="rounded-xl bg-red-500/5 border border-red-500/15 p-4">
            <p className="text-sm font-semibold text-accent-amber font-body mb-1">The Problem</p>
            <p className="text-sm text-text-secondary font-body leading-relaxed">{problem}</p>
          </div>

          {/* Steps */}
          <div>
            <p className="text-sm font-semibold text-white font-body mb-3">How We Solve It</p>
            <ol className="flex flex-col gap-2.5">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-bold text-accent-cyan font-mono">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-secondary font-body leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tools */}
          <div>
            <p className="text-sm font-semibold text-white font-body mb-3">Tools Used</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="cyan">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="flex items-start gap-3 rounded-xl bg-accent-emerald/5 border border-accent-emerald/20 p-4">
            <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-accent-emerald" />
            <div>
              <p className="text-sm font-semibold text-accent-emerald font-body mb-1">Outcome</p>
              <p className="text-sm text-text-secondary font-body leading-relaxed">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
