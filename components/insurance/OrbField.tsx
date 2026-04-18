'use client'

import { motion } from 'framer-motion'

interface OrbFieldProps {
  variant?: 'hero' | 'subtle' | 'cta'
  className?: string
}

/**
 * Animated gradient orb backdrop. Purely decorative — aria-hidden.
 * Layered behind hero and CTA sections for a warm premium glow.
 */
export default function OrbField({ variant = 'hero', className }: OrbFieldProps) {
  if (variant === 'cta') {
    return (
      <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}>
        <motion.div
          className="orb orb-gold"
          style={{ width: 600, height: 600, top: '-20%', left: '50%', x: '-50%' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    )
  }

  if (variant === 'subtle') {
    return (
      <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}>
        <motion.div
          className="orb orb-gold"
          style={{ width: 420, height: 420, top: '-10%', right: '-8%', opacity: 0.28 }}
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="orb orb-cream"
          style={{ width: 380, height: 380, bottom: '-12%', left: '-6%' }}
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    )
  }

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="orb orb-gold"
        style={{ width: 520, height: 520, top: '-8%', right: '-6%' }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-cream"
        style={{ width: 440, height: 440, top: '40%', left: '-8%', opacity: 0.7 }}
        animate={{ y: [0, -24, 0], x: [0, 18, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="orb orb-gold"
        style={{ width: 300, height: 300, bottom: '-6%', right: '30%', opacity: 0.35 }}
        animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  )
}
