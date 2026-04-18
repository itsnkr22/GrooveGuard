'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'grooveguard-banner-dismissed'

export default function TopBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        setDismissed(true)
      }
    } catch {
      // sessionStorage may be unavailable — render banner by default
    }
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // ignore
    }
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative overflow-hidden"
        >
          <div
            className="relative w-full overflow-hidden px-4 py-2.5"
            style={{
              background:
                'linear-gradient(90deg, #B8860B 0%, #E8A020 50%, #B8860B 100%)',
            }}
          >
            {/* subtle moving shimmer */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 6, ease: 'linear', repeat: Infinity }}
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                width: '40%',
              }}
            />
            <div className="mx-auto flex max-w-7xl items-center justify-center pr-10">
              <p
                className="text-center text-[13px] font-medium sm:text-sm"
                style={{
                  color: '#0A0E1A',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Limited audit slots available this month —{' '}
                <Link
                  href="/audit"
                  className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-75"
                  style={{ color: '#0A0E1A' }}
                >
                  Book yours before they&apos;re gone &rarr;
                </Link>
              </p>
            </div>

            <button
              onClick={handleDismiss}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-colors hover:bg-black/10"
              style={{ color: '#0A0E1A' }}
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
