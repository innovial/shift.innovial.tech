import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://shift.innovial.tech/sitemap.xml',
    host: 'https://shift.innovial.tech',
  }
}
