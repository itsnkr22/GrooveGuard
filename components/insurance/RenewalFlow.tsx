'use client'

import { motion } from 'framer-motion'
import { Clock, Mail, FileText, User, CheckCircle2, DollarSign } from 'lucide-react'

type Step = {
  icon: typeof Clock
  label: string
  final?: boolean
}

const STEPS: readonly Step[] = [
  { icon: Clock, label: 'Renewal due in 90 days' },
  { icon: Mail, label: 'Automated outreach sequence' },
  { icon: FileText, label: 'Client information collected' },
  { icon: User, label: 'Producer notified & briefed' },
  { icon: CheckCircle2, label: 'Policy renewed. Commission secured.', final: true },
]

export default function RenewalFlow() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Desktop — horizontal flow */}
      <div className="hidden lg:block">
        <div className="relative flex items-start justify-between gap-4">
          {/* Connecting line — base */}
          <div
            aria-hidden
            className="absolute left-[6%] right-[6%] top-8 h-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, var(--color-border-accent) 0 6px, transparent 6px 12px)',
            }}
          />

          {/* Animated gold progress line */}
          <motion.div
            aria-hidden
            className="absolute left-[6%] top-8 h-px origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              right: '6%',
              background:
                'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%)',
              boxShadow: '0 0 8px rgba(232, 160, 32, 0.35)',
            }}
          />

          {/* Traveling pulse */}
          <motion.div
            aria-hidden
            className="absolute top-8 h-2 w-2 -translate-y-1/2 rounded-full"
            initial={{ left: '6%', opacity: 0 }}
            whileInView={{ left: '94%', opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2, ease: 'easeInOut', times: [0, 0.1, 0.9, 1] }}
            style={{
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 0 12px rgba(232, 160, 32, 0.8)',
            }}
          />

          {STEPS.map((step, index) => {
            const Icon = step.final ? DollarSign : step.icon
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.18, duration: 0.5 }}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                <motion.div
                  className={`relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full ${step.final ? 'animate-pulse-gold' : ''}`}
                  style={{
                    backgroundColor: step.final ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                    border: step.final
                      ? '1.5px solid var(--color-accent-dark)'
                      : '1px solid var(--color-border-accent)',
                    boxShadow: step.final
                      ? '0 10px 24px -6px rgba(184, 134, 11, 0.5)'
                      : 'var(--shadow-soft)',
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{
                      color: step.final ? '#0A0E1A' : 'var(--color-accent)',
                    }}
                  />
                </motion.div>
                <p
                  className="max-w-[150px] text-xs font-medium leading-snug md:text-sm"
                  style={{
                    color: step.final
                      ? 'var(--color-accent-dark)'
                      : 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {step.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile — vertical stack */}
      <div className="flex flex-col gap-4 lg:hidden">
        {STEPS.map((step, index) => {
          const Icon = step.final ? DollarSign : step.icon
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${step.final ? 'animate-pulse-gold' : ''}`}
                style={{
                  backgroundColor: step.final ? 'var(--color-accent)' : 'var(--color-bg-secondary)',
                  border: step.final
                    ? '1.5px solid var(--color-accent-dark)'
                    : '1px solid var(--color-border-accent)',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{
                    color: step.final ? '#0A0E1A' : 'var(--color-accent)',
                  }}
                />
              </div>
              <p
                className="text-sm font-medium"
                style={{
                  color: step.final
                    ? 'var(--color-accent-dark)'
                    : 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {step.label}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
