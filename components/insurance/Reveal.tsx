'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.72, delay, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  )
}
