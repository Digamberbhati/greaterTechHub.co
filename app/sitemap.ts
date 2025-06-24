import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greatertechhub.com'
  
  const staticPages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/careers',
    '/blog',
    '/privacy-policy',
    '/terms-conditions',
  ]

  const servicePages = [
    '/services/website-development',
    '/services/mobile-app-development',
    '/services/digital-marketing-seo',
    '/services/devops-cloud-solutions',
    '/services/crm-erp-systems',
    '/services/it-infrastructure-networking',
    '/services/2d-3d-animation',
    '/services/branding-advertising',
    '/services/qa-software-testing',
    '/services/custom-software-solutions',
    '/services/business-strategy-market-research',
    '/services/end-to-end-recruitment',
    '/services/publishing-conversion-services',
    '/services/it-asset-management',
    '/services/network-infrastructure-solutions',
    '/services/system-design-architecture',
  ]

  const allPages = [...staticPages, ...servicePages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1 : page.includes('services') ? 0.8 : 0.6,
  }))
}