'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES, SITE_NAME, SITE_TAGLINE, SPECIALTIES } from '@/lib/constants'

const COMPANY_LINKS = [
  { label: 'Book Free Assessment', href: '/audit' },
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
        className="surface-field"
        style={{ opacity: 0.18 }}
      />
      <div aria-hidden className="absolute inset-0 dot-pattern opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.72, ease: [0.32, 0.72, 0, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-6 border-b pb-12 md:flex-row md:items-center"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <div>
            <h3
              className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Find the bottleneck before you buy the tool.
            </h3>
            <p
              className="mt-4 max-w-xl text-sm leading-relaxed md:text-base"
              style={{ color: 'rgba(251, 246, 236, 0.7)', fontFamily: 'var(--font-body)' }}
            >
              Start with one free assessment. Leave with one practical AI prescription and a clear next step.
            </p>
          </div>
          <Link
            href="/audit"
            className="group btn-shimmer inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-accent-glow)',
              color: 'var(--color-bg-navy)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book Free Assessment
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ backgroundColor: 'rgba(16, 19, 24, 0.1)' }}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-inverse)' }}
            >
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: 'rgba(251, 246, 236, 0.7)' }}>
              {SITE_TAGLINE}
            </p>
            <p
              className="mt-4 font-mono text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: 'var(--color-accent-glow)' }}
            >
              One bottleneck. One prescription.
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
                    style={{ color: 'rgba(251, 246, 236, 0.72)' }}
                  >
                    {service.title}
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
                    style={{ color: 'rgba(251, 246, 236, 0.72)' }}
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
              Built For
            </h3>
            <ul className="space-y-2.5">
              {SPECIALTIES.map((s) => (
                <li key={s.label} className="text-sm" style={{ color: 'rgba(251, 246, 236, 0.72)' }}>
                  {s.label}
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
              'linear-gradient(90deg, transparent, rgba(130, 197, 183, 0.3), transparent)',
          }}
        />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs" style={{ color: 'rgba(251, 246, 236, 0.55)' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p
            className="font-mono text-xs tracking-wide"
            style={{ color: 'rgba(251, 246, 236, 0.55)' }}
          >
            AI consulting for revenue, time, and customer experience
          </p>
        </div>
      </div>
    </footer>
  )
}
