'use client'

import {
  HardHat,
  Truck,
  Building2,
  Leaf,
  Laptop,
  Briefcase,
  Users,
  MapPin,
} from 'lucide-react'

const TOKENS = [
  { icon: HardHat, label: 'Construction & Contractors', flagship: true },
  { icon: Truck, label: 'Trucking & Transportation' },
  { icon: Building2, label: 'Habitational / Real Estate' },
  { icon: Leaf, label: 'Cannabis & Emerging Markets' },
  { icon: Laptop, label: 'Tech E&O' },
  { icon: Briefcase, label: 'Commercial P&C Specialists' },
  { icon: Users, label: '5–15 Staff Independents' },
  { icon: MapPin, label: 'US-Based Retail Agencies' },
] as const

/**
 * Scrolling marquee of specialty verticals we serve.
 * Construction/contractors is our flagship specialty — shown first with a highlight.
 */
export default function LogoMarquee() {
  const track = [...TOKENS, ...TOKENS]

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* edge fades */}
      <div
        aria-hidden
        className="absolute left-0 top-0 z-10 h-full w-20 md:w-32"
        style={{
          background:
            'linear-gradient(90deg, var(--color-bg-tertiary) 0%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 z-10 h-full w-20 md:w-32"
        style={{
          background:
            'linear-gradient(270deg, var(--color-bg-tertiary) 0%, transparent 100%)',
        }}
      />

      <div className="flex w-max animate-marquee gap-10">
        {track.map((t, i) => {
          const Icon = t.icon
          const isFlagship = 'flagship' in t && t.flagship
          return (
            <div
              key={`${t.label}-${i}`}
              className="flex flex-shrink-0 items-center gap-3 rounded-full px-5 py-2.5"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: isFlagship
                  ? '1px solid var(--color-accent)'
                  : '1px solid var(--color-border)',
                boxShadow: isFlagship
                  ? '0 4px 20px -8px rgba(184, 134, 11, 0.3)'
                  : 'var(--shadow-soft)',
              }}
            >
              <Icon
                className="h-4 w-4"
                style={{ color: 'var(--color-accent)' }}
                strokeWidth={1.8}
              />
              <span
                className="text-sm font-medium whitespace-nowrap"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {t.label}
              </span>
              {isFlagship && (
                <span
                  className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: 'var(--color-accent-soft)',
                    color: 'var(--color-accent-dark)',
                  }}
                >
                  Flagship
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
