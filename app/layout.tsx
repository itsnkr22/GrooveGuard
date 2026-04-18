import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TopBanner from '@/components/layout/TopBanner'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const viewport: Viewport = {
  themeColor: '#0A0E1A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Workflow Automation for Insurance Agencies`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'insurance agency automation',
    'P&C agency workflow automation',
    'commercial lines insurance AI',
    'insurance renewal automation',
    'independent insurance agency software',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Workflow Automation for Insurance Agencies`,
    description:
      "Stop losing commission to manual processes. We build the automation layer that protects your renewal book and grows your agency without adding headcount.",
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | AI Workflow Automation for Insurance Agencies`,
    description:
      "Stop losing commission to manual processes. We build the automation layer that protects your renewal book and grows your agency without adding headcount.",
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
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
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
