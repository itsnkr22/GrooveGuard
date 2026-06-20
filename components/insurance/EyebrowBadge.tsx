import type { ReactNode } from 'react'

type EyebrowBadgeProps = {
  children: ReactNode
  variant?: 'default' | 'muted'
}

export default function EyebrowBadge({ children, variant = 'default' }: EyebrowBadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em]"
      style={{
        backgroundColor:
          variant === 'muted' ? 'rgba(47, 111, 99, 0.08)' : 'rgba(47, 111, 99, 0.12)',
        border: '1px solid var(--color-accent-border)',
        color: variant === 'muted' ? 'var(--color-accent-dark)' : 'var(--color-accent)',
      }}
    >
      {children}
    </span>
  )
}
