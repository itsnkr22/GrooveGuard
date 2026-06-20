import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TopBanner from '@/components/layout/TopBanner'

export const viewport: Viewport = {
  themeColor: '#F7F3EC',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Bottleneck Consulting`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'AI consulting',
    'AI mini assessment',
    'AI bottleneck assessment',
    'Claude consulting',
    'Claude Cowork',
    'custom Claude skill',
    'AI workflow consulting',
    'AI implementation',
    'AI automation consultant',
    'operator AI tools',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Bottleneck Consulting`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | AI Bottleneck Consulting`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen font-body antialiased">
        <TopBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
