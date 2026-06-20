import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    {
      path: '/services/free-ai-mini-assessment',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/services/paid-ai-implementation',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    { path: '/audit', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const lastModified = new Date('2026-06-20')

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
