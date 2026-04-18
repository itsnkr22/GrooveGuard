'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Parses a display string like "$180,000+", "91%", "40+", "30 Days"
 * and animates the primary numeric part from 0 to its final value on
 * first viewport entry. Non-numeric prefix/suffix characters are preserved.
 */
export default function CountUp({
  value,
  duration = 1800,
  className,
  style,
}: CountUpProps) {
  const [display, setDisplay] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Extract prefix (non-digits before first digit), number, and suffix
    const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/)
    if (!match) {
      setDisplay(value)
      return
    }

    const [, prefix, numberStr, suffix] = match
    const target = parseFloat(numberStr.replace(/,/g, ''))
    if (Number.isNaN(target)) {
      setDisplay(value)
      return
    }

    const formatNumber = (n: number) => {
      const rounded = Math.round(n)
      return rounded.toLocaleString('en-US')
    }

    // Set initial state to zero-valued
    setDisplay(`${prefix}${formatNumber(0)}${suffix}`)

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const startTime = performance.now()

            const tick = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              // ease-out cubic for a premium feel
              const eased = 1 - Math.pow(1 - progress, 3)
              const current = target * eased
              setDisplay(`${prefix}${formatNumber(current)}${suffix}`)

              if (progress < 1) {
                requestAnimationFrame(tick)
              } else {
                // Lock to exact original string for final value fidelity
                setDisplay(value)
              }
            }

            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className={className} style={style}>
      {display}
    </span>
  )
}
