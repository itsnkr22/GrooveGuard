'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Mail,
  FileCheck,
  Clock,
  CheckCircle2,
  DollarSign,
  Users,
} from 'lucide-react'

const BARS = [58, 72, 64, 85, 91, 78, 94]

/**
 * Stylized agency-automation dashboard preview. Decorative — not a real app.
 * Built to illustrate what an automated workflow stack feels like at a glance.
 */
export default function DashboardMock() {
  return (
    <div className="relative w-full">
      {/* Floating pill — top-left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -left-4 top-10 z-20 hidden items-center gap-2 rounded-full px-3.5 py-2 md:flex"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lift)',
        }}
      >
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-success-soft)' }}
        >
          <CheckCircle2 className="h-3.5 w-3.5" style={{ color: 'var(--color-success)' }} />
        </div>
        <span
          className="text-xs font-medium"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
        >
          Renewal protected
        </span>
      </motion.div>

      {/* Floating pill — bottom-right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -right-2 bottom-6 z-20 hidden items-center gap-2 rounded-full px-3.5 py-2 md:flex"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lift)',
        }}
      >
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: 'var(--color-accent-soft)' }}
        >
          <DollarSign className="h-3.5 w-3.5" style={{ color: 'var(--color-accent)' }} />
        </div>
        <span
          className="text-xs font-medium"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
        >
          +$18,400 protected
        </span>
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="card-gold-glow relative overflow-hidden rounded-2xl p-5 md:p-7"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lift)',
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#E5E5E0' }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: '#D4CEBE' }} />
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            </div>
            <span
              className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em]"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Agency Command Center
            </span>
          </div>
          <div
            className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold"
            style={{
              backgroundColor: 'var(--color-success-soft)',
              color: 'var(--color-success)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: 'var(--color-success)' }}
            />
            LIVE
          </div>
        </div>

        {/* Metric row */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { icon: TrendingUp, label: 'Retention', value: '91%', delay: 0.2 },
            { icon: Clock, label: 'Hours saved / wk', value: '47', delay: 0.35 },
            { icon: DollarSign, label: 'Protected', value: '$180k', delay: 0.5 },
          ].map((m) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: m.delay, duration: 0.5 }}
                className="rounded-xl p-3"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <Icon
                  className="h-3.5 w-3.5"
                  style={{ color: 'var(--color-accent)' }}
                  strokeWidth={2}
                />
                <div
                  className="mt-2 text-lg font-semibold md:text-xl"
                  style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {m.value}
                </div>
                <div
                  className="text-[10px] font-medium uppercase tracking-wider"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {m.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Chart-y bars */}
        <div className="mt-5 rounded-xl p-4" style={{ backgroundColor: 'var(--color-bg)' }}>
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-semibold"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Weekly workflow completion
            </span>
            <span
              className="font-mono text-[10px]"
              style={{ color: 'var(--color-accent)' }}
            >
              +24% MoM
            </span>
          </div>
          <div className="mt-3 flex h-20 items-end justify-between gap-2">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-t-sm"
                style={{
                  background:
                    i === BARS.length - 1
                      ? 'linear-gradient(180deg, #F5B840, #B8860B)'
                      : 'linear-gradient(180deg, rgba(184, 134, 11, 0.35), rgba(184, 134, 11, 0.15))',
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[9px] font-mono uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="mt-5 space-y-2.5">
          {[
            { icon: Mail, label: 'Renewal outreach sent', time: '2 min ago', tone: 'accent' },
            { icon: FileCheck, label: 'COI generated & delivered', time: '12 min ago', tone: 'success' },
            { icon: Users, label: 'Client onboarding completed', time: '1h ago', tone: 'accent' },
          ].map((a, i) => {
            const Icon = a.icon
            const bg =
              a.tone === 'success' ? 'var(--color-success-soft)' : 'var(--color-accent-soft)'
            const fg =
              a.tone === 'success' ? 'var(--color-success)' : 'var(--color-accent)'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: fg }} strokeWidth={2} />
                </div>
                <span
                  className="flex-1 text-xs font-medium md:text-sm"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-body)' }}
                >
                  {a.label}
                </span>
                <span
                  className="font-mono text-[10px]"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {a.time}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
