import React from 'react';

type BadgeVariant = 'blue' | 'cyan' | 'amber' | 'emerald';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: 'bg-accent-blue/15 text-accent-blue border-accent-blue/25',
  cyan: 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/25',
  amber: 'bg-accent-amber/15 text-accent-amber border-accent-amber/25',
  emerald: 'bg-accent-emerald/15 text-accent-emerald border-accent-emerald/25',
};

export default function Badge({
  variant = 'blue',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        rounded-full border px-3 py-1
        text-xs font-semibold font-body
        tracking-wide uppercase
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
