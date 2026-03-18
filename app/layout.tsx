import type { Metadata, Viewport } from 'next'
import { Sora, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TopBanner from '@/components/layout/TopBanner'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#111118',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI Workflow Automation Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Custom AI workflow automations for recruitment agencies, e-commerce brands, and marketing agencies. Save 40+ hours/week with intelligent automation.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — AI Workflow Automation Agency`,
    description:
      'Custom AI workflow automations for recruitment agencies, e-commerce brands, and marketing agencies. Save 40+ hours/week with intelligent automation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — AI Workflow Automation Agency`,
    description:
      'Custom AI workflow automations for recruitment agencies, e-commerce brands, and marketing agencies. Save 40+ hours/week with intelligent automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${sora.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-body antialiased">
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
