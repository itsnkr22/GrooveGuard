'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function TopBanner() {
  const [dismissed, setDismissed] = useState(false)

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
            className="relative w-full px-4 py-2.5 text-sm"
            style={{
              background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #3B82F6)',
              backgroundSize: '200% 100%',
            }}
          >
            <div className="mx-auto flex max-w-7xl items-center justify-center pr-8">
              <p className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
                Limited audit slots available this month — Book yours before they&apos;re gone{' '}
                <Link
                  href="/contact"
                  className="inline-flex items-center font-semibold underline underline-offset-2 transition-opacity hover:opacity-80"
                  style={{ color: '#FFFFFF' }}
                >
                  &rarr; Book now
                </Link>
              </p>
            </div>

            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 transition-colors hover:bg-white/20 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.8)' }}
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
