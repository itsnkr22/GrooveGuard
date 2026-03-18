import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/industries',
    '/industries/recruitment',
    '/industries/ecommerce',
    '/industries/marketing',
    '/services',
    '/resources',
    '/resources/recruitment-ai-guide',
    '/resources/ecommerce-ai-guide',
    '/resources/marketing-ai-guide',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2025-01-15'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('resources/') ? 0.9 : 0.8,
  }))
}
