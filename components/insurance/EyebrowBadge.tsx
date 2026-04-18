interface EyebrowBadgeProps {
  children: React.ReactNode
  variant?: 'outlined' | 'muted'
}

export default function EyebrowBadge({ children, variant = 'outlined' }: EyebrowBadgeProps) {
  if (variant === 'muted') {
    return (
      <span
        className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.22em]"
        style={{
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <span className="eyebrow-line" />
        {children}
      </span>
    )
  }

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium backdrop-blur"
      style={{
        border: '1px solid var(--color-accent-border)',
        color: 'var(--color-accent-dark)',
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(184, 134, 11, 0.06))',
        fontFamily: 'var(--font-body)',
        boxShadow: '0 2px 8px -2px rgba(184, 134, 11, 0.15)',
      }}
    >
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full animate-pulse-gold"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      {children}
    </span>
  )
}
