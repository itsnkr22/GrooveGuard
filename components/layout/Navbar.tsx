'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
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
        background: scrolled
          ? `var(--nav-bg)`
          : `var(--nav-bg-transparent)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? `1px solid var(--border-color)`
          : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-90"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
        >
          {SITE_NAME}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium transition-colors"
              style={{
                color: isActive(link.href) ? '#3B82F6' : 'var(--text-secondary)',
              }}
            >
              {link.label}
              {/* Active indicator */}
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-accent-blue transition-transform duration-200 group-hover:scale-x-100"
                style={{
                  transform: isActive(link.href) ? 'scaleX(1)' : undefined,
                  backgroundColor: '#3B82F6',
                }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-lg md:inline-flex"
            style={{
              background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
              color: '#FFFFFF',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            }}
          >
            Book a Free Audit
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 top-0 z-40 flex flex-col md:hidden"
            style={{ background: 'var(--mobile-overlay)' }}
          >
            {/* Close button at top-right */}
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                onClick={() => setMobileOpen(false)}
              >
                {SITE_NAME}
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 transition-colors"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
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
                    className="text-2xl font-semibold transition-colors"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: isActive(link.href) ? '#3B82F6' : 'var(--text-primary)',
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
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex rounded-lg px-8 py-3 text-lg font-semibold transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                    color: '#FFFFFF',
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  Book a Free Audit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
