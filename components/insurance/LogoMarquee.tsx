'use client'

import { Building2, Shield, Briefcase, FileCheck, Home, Users, Landmark, ClipboardCheck } from 'lucide-react'

const TOKENS = [
  { icon: Building2, label: 'Commercial Lines' },
  { icon: Shield, label: 'P&C Specialists' },
  { icon: Home, label: 'Personal Lines' },
  { icon: Briefcase, label: 'Mixed-Book Agencies' },
  { icon: FileCheck, label: 'MGA / Wholesale' },
  { icon: Users, label: 'Growing Independents' },
  { icon: Landmark, label: 'Established Books' },
  { icon: ClipboardCheck, label: 'Specialty Risk' },
] as const

/**
 * Scrolling marquee of agency types served. Replaces a traditional logo bar
 * (we have no client logos to show yet) with visually rich iconography.
 * Duplicates the track twice so the keyframe -50% creates a seamless loop.
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
            'linear-gradient(90deg, var(--color-bg) 0%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 z-10 h-full w-20 md:w-32"
        style={{
          background:
            'linear-gradient(270deg, var(--color-bg) 0%, transparent 100%)',
        }}
      />

      <div className="flex w-max animate-marquee gap-10">
        {track.map((t, i) => {
          const Icon = t.icon
          return (
            <div
              key={`${t.label}-${i}`}
              className="flex flex-shrink-0 items-center gap-3 rounded-full px-5 py-2.5"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-soft)',
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
