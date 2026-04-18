'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedRingProps {
  value: number // 0–100 percent
  label: string
  size?: number
  strokeWidth?: number
  duration?: number
  caption?: string
}

/**
 * Circular progress ring with animated stroke. Reveals on viewport entry.
 */
export default function AnimatedRing({
  value,
  label,
  size = 160,
  strokeWidth = 10,
  duration = 1.8,
  caption,
}: AnimatedRingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#ringGold)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B8860B" />
              <stop offset="50%" stopColor="#E8A020" />
              <stop offset="100%" stopColor="#F5B840" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            style={{
              color: 'var(--color-accent-dark)',
              fontFamily: 'var(--font-heading)',
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: duration * 0.6, duration: 0.4 }}
          >
            {value}%
          </motion.span>
          {caption && (
            <span
              className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]"
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {caption}
            </span>
          )}
        </div>
      </div>
      <p
        className="mt-4 max-w-[180px] text-center text-sm font-medium leading-snug"
        style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        {label}
      </p>
    </div>
  )
}
