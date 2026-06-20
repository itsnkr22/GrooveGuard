type OrbFieldProps = {
  variant?: 'hero' | 'subtle' | 'cta'
}

export default function OrbField({ variant = 'subtle' }: OrbFieldProps) {
  const hero = variant === 'hero'
  const cta = variant === 'cta'

  return (
    <div
      aria-hidden
      className="surface-field"
      style={{
        opacity: hero ? 1 : cta ? 0.82 : 0.66,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(47,111,99,0.35), transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-28 w-[72vw] -translate-x-1/2"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(47,111,99,0.08), rgba(16,24,23,0.07), transparent)',
          clipPath: 'polygon(8% 100%, 92% 100%, 76% 0, 24% 0)',
        }}
      />
    </div>
  )
}
