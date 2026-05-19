type OrbFieldProps = {
  variant?: 'hero' | 'subtle' | 'cta'
}

export default function OrbField({ variant = 'subtle' }: OrbFieldProps) {
  const hero = variant === 'hero'
  const cta = variant === 'cta'

  return (
    <>
      <div
        aria-hidden
        className="orb orb-gold animate-float"
        style={{
          width: hero ? 540 : 360,
          height: hero ? 540 : 360,
          top: hero ? -220 : cta ? -120 : -160,
          right: hero ? -120 : -90,
          opacity: hero ? 0.34 : cta ? 0.28 : 0.18,
        }}
      />
      <div
        aria-hidden
        className="orb orb-navy animate-float-slower"
        style={{
          width: hero ? 420 : 280,
          height: hero ? 420 : 280,
          bottom: hero ? -180 : -120,
          left: hero ? -130 : -80,
          opacity: hero ? 0.16 : 0.1,
        }}
      />
    </>
  )
}
