import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

type PageMetaParams = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  keywords?: string[]
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = 'website',
  keywords,
}: PageMetaParams): Metadata {
  const url = `${SITE_URL}${path}`
  const fullTitle = title.includes(`| ${SITE_NAME}`) ? title : `${title} | ${SITE_NAME}`

  return {
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
