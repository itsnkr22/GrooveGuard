'use client'

import Link from 'next/link'
import { Linkedin, ArrowUpRight } from 'lucide-react'
import { SITE_NAME, SITE_TAGLINE, INDUSTRIES } from '@/lib/constants'

const FOOTER_COLUMNS = [
  {
    title: 'Industries',
    links: INDUSTRIES.map((industry) => ({
      label: industry.name,
      href: industry.href,
    })),
  },
  {
    title: 'Services',
    links: [
      { label: 'Workflow Automation', href: '/services' },
      { label: 'AI Integration', href: '/services' },
      { label: 'Custom AI Agents', href: '/services' },
      { label: 'Reporting Dashboards', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Recruitment AI Guide', href: '/resources/recruitment-ai-guide' },
      { label: 'E-Commerce AI Guide', href: '/resources/ecommerce-ai-guide' },
      { label: 'Marketing AI Guide', href: '/resources/marketing-ai-guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
] as const

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
] as const

const MARKETS = ['UK', 'EU', 'Gulf', 'US'] as const

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        backgroundColor: 'var(--footer-bg)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top section: Logo/tagline + columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
            >
              {SITE_NAME}
            </Link>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {SITE_TAGLINE}
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 transition-all duration-200"
                  style={{
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)',
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3
                  className="mb-4 text-sm font-semibold uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm transition-colors"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {link.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--border-color), transparent)',
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            &copy; 2025 {SITE_NAME}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="mr-1">Markets:</span>
            {MARKETS.map((market, index) => (
              <span key={market} className="flex items-center gap-2">
                <span>{market}</span>
                {index < MARKETS.length - 1 && (
                  <span style={{ color: 'var(--border-color)' }}>|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
