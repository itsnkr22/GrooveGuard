import React from 'react';
import Badge from './Badge';

type BadgeVariant = 'blue' | 'cyan' | 'amber' | 'emerald';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
  gradient?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  badgeVariant = 'blue',
  gradient = false,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant}>{badge}</Badge>
      )}
      <h2
        className={`
          text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight
          ${gradient ? 'gradient-text' : 'text-white'}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
