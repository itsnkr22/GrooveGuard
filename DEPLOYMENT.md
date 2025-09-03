# 🚀 Deployment Guide for GrooveGuard Website

This guide provides step-by-step instructions for deploying your GrooveGuard website to various hosting platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- Domain name (optional but recommended)
- SSL certificate (provided by most hosting platforms)

## 🎯 Quick Start (Vercel - Recommended)

### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Initial website setup"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"
6. Your site will be live in minutes!

### 3. Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 🌐 Netlify Deployment

### 1. Build Configuration
Create `netlify.toml` in your project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Deploy Steps
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Click "Deploy site"

## ☁️ AWS Deployment

### 1. Build and Export
```bash
# Build the project
npm run build

# Export static files (if needed)
npm run export
```

### 2. S3 + CloudFront Setup
1. Create S3 bucket
2. Enable static website hosting
3. Upload build files
4. Create CloudFront distribution
5. Point domain to CloudFront

### 3. AWS CLI Commands
```bash
# Install AWS CLI
aws configure

# Sync files to S3
aws s3 sync .next s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Environment Variables

Create `.env.local` for local development:
```env
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=hello@grooveguard.com
```

For production, set these in your hosting platform's environment variables section.

## 📱 PWA Configuration

### 1. Update Manifest
Edit `public/site.webmanifest`:
```json
{
  "name": "Your Company Name",
  "short_name": "Company",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2563eb"
}
```

### 2. Generate Icons
Use tools like [Favicon Generator](https://realfavicongenerator.net/) to create:
- `favicon.ico`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

## 🔒 Security Headers

### 1. Next.js Config
Update `next.config.js`:
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### 2. Content Security Policy
Add to your layout or pages:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">
```

## 📊 Analytics Setup

### 1. Google Analytics
Add to `app/layout.tsx`:
```typescript
// Google Analytics
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Add this in the head section
{GA_TRACKING_ID && (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `,
      }}
    />
  </>
)}
```

### 2. Alternative: Plausible Analytics
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🚀 Performance Optimization

### 1. Image Optimization
```bash
# Install sharp for better image processing
npm install sharp
```

### 2. Bundle Analysis
```bash
# Analyze bundle size
npm install --save-dev @next/bundle-analyzer
```

Update `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
```

## 📈 SEO Optimization

### 1. Sitemap Generation
Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://yourdomain.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Add more pages
  ]
}
```

### 2. Robots.txt
Ensure `public/robots.txt` is properly configured for your domain.

## 🔄 Continuous Deployment

### 1. GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      # Add deployment steps for your platform
```

### 2. Auto-deploy on Push
Most platforms (Vercel, Netlify) automatically deploy on push to main branch.

## 🧪 Testing Before Deployment

### 1. Local Testing
```bash
# Build locally
npm run build

# Test production build
npm run start

# Check for TypeScript errors
npm run type-check

# Run linting
npm run lint
```

### 2. Performance Testing
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run performance audit
lhci autorun
```

## 🚨 Common Issues & Solutions

### 1. Build Failures
- Check Node.js version (18+ required)
- Clear `.next` folder and `node_modules`
- Run `npm install` again

### 2. Environment Variables
- Ensure all required env vars are set in hosting platform
- Check for typos in variable names
- Verify variable values are correct

### 3. Image Optimization
- Ensure images are in `public` folder or properly imported
- Check image formats (WebP recommended)
- Verify image dimensions are reasonable

## 📞 Support & Resources

- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Documentation**: [netlify.com/docs](https://netlify.com/docs)
- **AWS Documentation**: [aws.amazon.com/documentation](https://aws.amazon.com/documentation)

## 🎉 Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Forms are working
- [ ] Images are loading
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active
- [ ] Analytics are tracking
- [ ] Performance is acceptable
- [ ] SEO meta tags are correct
- [ ] Social media previews work

---

**Happy Deploying! 🚀**

For additional support, contact the development team or refer to the platform-specific documentation. 