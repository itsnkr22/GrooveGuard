'use client'

import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { SITE_NAME, SITE_TAGLINE, SERVICES, MARKETS } from '@/lib/constants'

const COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Book Free Audit', href: '/audit' },
  { label: 'Contact', href: '/audit' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
] as const

const LINKEDIN_URL = 'https://www.linkedin.com/company/groovegaurd/'

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              <span
                aria-hidden
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              {SITE_NAME}
            </Link>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {SITE_TAGLINE}
            </p>
            <p
              className="mt-4 text-xs font-medium uppercase tracking-wider"
              style={{ color: 'var(--color-text-muted)' }}
            >
              US · UK · EU · UAE · Australia
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              Company
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-accent)]"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Markets + Social */}
          <div>
            <h3
              className="mb-4 text-sm font-semibold uppercase tracking-wider"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-primary)',
              }}
            >
              Serving Agencies In
            </h3>
            <ul className="space-y-2.5">
              {MARKETS.map((market) => (
                <li
                  key={market.label}
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {market.label}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-all duration-200 hover:border-[var(--color-accent)]"
                style={{
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border)',
                }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)',
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Built for P&amp;C &amp; Commercial Lines Insurance Agencies
          </p>
        </div>
      </div>
    </footer>
  )
}
