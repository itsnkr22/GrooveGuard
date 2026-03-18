import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

interface PageMetaParams {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}

export function generatePageMetadata({ title, description, path, type = 'website' }: PageMetaParams): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = path === '/' ? `${SITE_NAME} — AI Workflow Automation Agency` : `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
