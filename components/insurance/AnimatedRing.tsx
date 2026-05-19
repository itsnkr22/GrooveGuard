type AnimatedRingProps = {
  value: number
  label: string
  caption: string
}

export default function AnimatedRing({ value, label, caption }: AnimatedRingProps) {
  const clamped = Math.max(0, Math.min(value, 100))

  return (
    <div className="text-center">
      <div
        className="mx-auto flex h-32 w-32 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(var(--color-accent) ${clamped}%, rgba(10,14,26,0.08) 0)`,
        }}
      >
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full text-3xl font-semibold"
          style={{
            backgroundColor: 'var(--color-bg-primary)',
            color: 'var(--color-accent-dark)',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {clamped}
        </div>
      </div>
      <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        {caption}
      </p>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </p>
    </div>
  )
}
