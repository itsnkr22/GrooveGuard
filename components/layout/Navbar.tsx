'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

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
    <nav className="sticky top-3 z-40 px-4 pt-3 md:top-5 md:pt-5">
      <div
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-5 shadow-[0_18px_50px_-32px_rgba(16,19,24,0.55)] md:px-3 md:pl-6"
        style={{
          backgroundColor: 'rgba(255, 250, 241, 0.84)',
          border: '1px solid rgba(16, 19, 24, 0.1)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-80"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                color: isActive(link.href) ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                backgroundColor: isActive(link.href) ? 'rgba(16, 19, 24, 0.06)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/audit"
            className="group btn-shimmer hidden items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] md:inline-flex"
            style={{
              backgroundColor: 'var(--color-text-primary)',
              color: 'var(--color-text-inverse)',
            }}
          >
            Book Free Assessment
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative h-10 w-10 rounded-full md:hidden"
            style={{ backgroundColor: 'rgba(16, 19, 24, 0.06)' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className="absolute left-1/2 top-[17px] h-px w-4 -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                backgroundColor: 'var(--color-text-primary)',
                transform: mobileOpen
                  ? 'translateX(-50%) translateY(3px) rotate(45deg)'
                  : 'translateX(-50%)',
              }}
            />
            <span
              className="absolute left-1/2 top-[23px] h-px w-4 -translate-x-1/2 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{
                backgroundColor: 'var(--color-text-primary)',
                transform: mobileOpen
                  ? 'translateX(-50%) translateY(-3px) rotate(-45deg)'
                  : 'translateX(-50%)',
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-x-4 top-20 z-30 rounded-[2rem] p-4 md:hidden"
            style={{
              backgroundColor: 'rgba(255, 250, 241, 0.92)',
              border: '1px solid rgba(16, 19, 24, 0.1)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 30px 90px -52px rgba(16, 19, 24, 0.55)',
            }}
          >
            <div className="grid gap-2">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.08, duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-2xl px-4 py-3 text-lg font-semibold"
                    style={{
                      color: 'var(--color-text-primary)',
                      backgroundColor: isActive(link.href) ? 'rgba(16, 19, 24, 0.06)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/audit"
                className="mt-2 rounded-full px-5 py-3 text-center text-base font-semibold"
                style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-text-inverse)' }}
              >
                Book Free Assessment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
