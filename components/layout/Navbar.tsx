'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250, 248, 243, 0.88)' : 'rgba(250, 248, 243, 0.6)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled
          ? '1px solid var(--color-border)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px -12px rgba(10, 14, 26, 0.08)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href)
                  ? 'var(--color-accent)'
                  : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full transition-transform duration-200 group-hover:scale-x-100"
                style={{
                  transform: isActive(link.href) ? 'scaleX(1)' : undefined,
                  backgroundColor: 'var(--color-accent)',
                }}
              />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/audit"
            className="btn-shimmer hidden rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:brightness-110 md:inline-flex"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#0A0E1A',
              fontFamily: 'var(--font-body)',
            }}
          >
            Request GTM Brain Audit
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden"
            style={{ color: 'var(--color-text-secondary)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 z-40 flex flex-col md:hidden"
            style={{ background: 'rgba(250, 248, 243, 0.98)' }}
          >
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />
                {SITE_NAME}
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2"
                style={{ color: 'var(--color-text-secondary)' }}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: isActive(link.href)
                        ? 'var(--color-accent)'
                        : 'var(--color-text-primary)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 + 0.1 }}
              >
                <Link
                  href="/audit"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex rounded-md px-8 py-3 text-lg font-semibold"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#0A0E1A',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Request GTM Brain Audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
