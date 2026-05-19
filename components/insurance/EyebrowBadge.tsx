import type { ReactNode } from 'react'

type EyebrowBadgeProps = {
  children: ReactNode
  variant?: 'default' | 'muted'
}

export default function EyebrowBadge({ children, variant = 'default' }: EyebrowBadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em]"
      style={{
        backgroundColor:
          variant === 'muted' ? 'rgba(184, 134, 11, 0.09)' : 'rgba(232, 160, 32, 0.14)',
        border: '1px solid var(--color-accent-border)',
        color: variant === 'muted' ? 'var(--color-accent-dark)' : 'var(--color-accent)',
      }}
    >
      {children}
    </span>
  )
}
