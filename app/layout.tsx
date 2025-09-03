import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GrooveGuard - Data Privacy & Global Business Advisory',
  description: 'Trusted global advisors for data privacy compliance, B2B cross-border matchmaking, and market entry advisory. Stay compliant, connect globally, and expand with confidence.',
  keywords: 'data privacy, GDPR, DPDPA, CCPA, HIPAA, compliance, B2B matchmaking, cross-border business, market entry, global expansion, business advisory',
  authors: [{ name: 'GrooveGuard' }],
  creator: 'GrooveGuard',
  publisher: 'GrooveGuard',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://grooveguard.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GrooveGuard - Data Privacy & Global Business Advisory',
    description: 'Trusted global advisors for data privacy compliance, B2B cross-border matchmaking, and market entry advisory.',
    url: 'https://grooveguard.com',
    siteName: 'GrooveGuard',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GrooveGuard - Data Privacy & Global Business Advisory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrooveGuard - Data Privacy & Global Business Advisory',
    description: 'Trusted global advisors for data privacy compliance, B2B cross-border matchmaking, and market entry advisory.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
} 