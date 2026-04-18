/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Contact → Audit
      { source: '/contact', destination: '/audit', permanent: true },

      // Old industry verticals → Insurance
      { source: '/industries', destination: '/industries/insurance', permanent: true },
      { source: '/industries/recruitment', destination: '/industries/insurance', permanent: true },
      { source: '/industries/ecommerce', destination: '/industries/insurance', permanent: true },
      { source: '/industries/marketing', destination: '/industries/insurance', permanent: true },

      // Old resource pages → Homepage
      { source: '/resources', destination: '/', permanent: true },
      { source: '/resources/recruitment-ai-guide', destination: '/', permanent: true },
      { source: '/resources/ecommerce-ai-guide', destination: '/', permanent: true },
      { source: '/resources/marketing-ai-guide', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig
