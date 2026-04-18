'use client'

import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'none'
  className?: string
}

/**
 * Lightweight reveal wrapper — fade + optional upward slide on viewport enter.
 * Triggers once (viewport: once: true) to avoid re-animating on scrollback.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: RevealProps) {
  const initial =
    direction === 'up'
      ? { opacity: 0, y: 24 }
      : { opacity: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
