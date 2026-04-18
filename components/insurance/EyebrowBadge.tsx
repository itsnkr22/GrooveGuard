interface EyebrowBadgeProps {
  children: React.ReactNode
  variant?: 'outlined' | 'muted'
}

export default function EyebrowBadge({ children, variant = 'outlined' }: EyebrowBadgeProps) {
  if (variant === 'muted') {
    return (
      <span
        className="inline-block text-xs font-semibold uppercase tracking-[0.2em]"
        style={{
          color: 'var(--color-accent)',
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className="inline-block rounded-full px-3.5 py-1 text-xs font-medium"
      style={{
        border: '1px solid var(--color-accent)',
        color: 'var(--color-accent)',
        backgroundColor: 'rgba(232, 160, 32, 0.05)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </span>
  )
}
