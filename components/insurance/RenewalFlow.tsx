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
          {/* Connecting dotted line */}
          <div
            aria-hidden
            className="absolute left-[6%] right-[6%] top-8 h-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, var(--color-border-accent) 0 6px, transparent 6px 12px)',
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
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-1 flex-col items-center text-center"
              >
                <div
                  className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: step.final
                      ? '1.5px solid var(--color-accent)'
                      : '1px solid var(--color-border-accent)',
                    boxShadow: step.final
                      ? '0 0 24px rgba(232, 160, 32, 0.3)'
                      : 'none',
                  }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{
                      color: step.final ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    }}
                  />
                </div>
                <p
                  className="max-w-[140px] text-xs font-medium leading-snug"
                  style={{
                    color: step.final ? 'var(--color-accent)' : 'var(--color-text-secondary)',
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
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: step.final
                    ? '1.5px solid var(--color-accent)'
                    : '1px solid var(--color-border-accent)',
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{
                    color: step.final ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  }}
                />
              </div>
              <p
                className="text-sm font-medium"
                style={{
                  color: step.final ? 'var(--color-accent)' : 'var(--color-text-secondary)',
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
