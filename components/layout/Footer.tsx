'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, SITE_NAME, SITE_TAGLINE, SPECIALTIES } from '@/lib/constants'

const COMPANY_LINKS = [
  { label: 'Request GTM Brain Audit', href: '/audit' },
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
] as const

export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-navy)',
        color: 'var(--color-text-inverse)',
      }}
    >
      <div
        aria-hidden
        className="orb orb-gold animate-float-slower"
        style={{ width: 520, height: 520, top: -240, right: -160, opacity: 0.2 }}
      />
      <div
        aria-hidden
        className="orb orb-gold animate-float"
        style={{ width: 340, height: 340, bottom: -160, left: -120, opacity: 0.15 }}
      />
      <div aria-hidden className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 border-b pb-12 md:flex-row md:items-center"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div>
            <h3
              className="text-3xl font-semibold leading-tight md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Ready to turn customer context into GTM intelligence?
            </h3>
            <p
              className="mt-2 text-sm md:text-base"
              style={{ color: 'rgba(245, 245, 240, 0.7)', fontFamily: 'var(--font-body)' }}
            >
              Start with a focused Customer/GTM Brain audit and identify the first workflow worth building.
            </p>
          </div>
          <Link
            href="/audit"
            className="btn-shimmer inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-transform active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-accent-glow)',
              color: '#0A0E1A',
              fontFamily: 'var(--font-body)',
            }}
          >
            Request GTM Brain Audit <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-inverse)' }}
            >
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-full animate-pulse-gold"
                style={{ backgroundColor: 'var(--color-accent-glow)' }}
              />
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: 'rgba(245, 245, 240, 0.7)' }}>
              {SITE_TAGLINE}
            </p>
            <p
              className="mt-4 font-mono text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: 'var(--color-accent-glow)' }}
            >
              Premium GTM intelligence systems
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent-glow)' }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(245, 245, 240, 0.72)' }}
                  >
                    {service.title}
                    {service.status.includes('Coming Soon') && ' - Coming Soon'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent-glow)' }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(245, 245, 240, 0.72)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent-glow)' }}
            >
              Founders
            </h3>
            <ul className="space-y-2.5">
              {SPECIALTIES.map((s) => (
                <li key={s.label} className="text-sm" style={{ color: 'rgba(245, 245, 240, 0.72)' }}>
                  {s.label}
                  {s.flagship && (
                    <span
                      className="ml-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: 'rgba(232, 160, 32, 0.18)',
                        color: 'var(--color-accent-glow)',
                      }}
                    >
                      Focus
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="my-10"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(232, 160, 32, 0.35), transparent)',
          }}
        />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs" style={{ color: 'rgba(245, 245, 240, 0.55)' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p
            className="font-mono text-xs tracking-wide"
            style={{ color: 'rgba(245, 245, 240, 0.55)' }}
          >
            Customer memory, GTM intelligence, and human-reviewed BrainOps
          </p>
        </div>
      </div>
    </footer>
  )
}
