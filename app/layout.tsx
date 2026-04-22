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
  themeColor: '#FAF8F3',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | AI Workflow Automation for Commercial P&C Agencies`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'commercial P&C agency automation',
    'construction insurance agency workflow',
    'COI automation for insurance agencies',
    'trucking insurance agency software',
    'cannabis insurance agency automation',
    'direct-bill reconciliation automation',
    'new business submission packaging',
    'independent insurance agency AI',
    'EZLynx Applied Epic HawkSoft automation',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | AI Workflow Automation for Commercial P&C Agencies`,
    description:
      'Purpose-built workflow automation for US commercial P&C independent agencies — with specialty depth in construction, trucking, habitational, cannabis, and tech E&O.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | AI Workflow Automation for Commercial P&C Agencies`,
    description:
      'Purpose-built workflow automation for US commercial P&C independent agencies — construction, trucking, habitational, cannabis, tech E&O.',
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
