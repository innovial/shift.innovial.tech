import type { MetadataRoute } from 'next'

const siteUrl = 'https://shift.innovial.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/en`,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          id: `${siteUrl}/id`,
          'x-default': `${siteUrl}/en`,
        },
      },
    },
    {
      url: `${siteUrl}/id`,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: `${siteUrl}/en`,
          id: `${siteUrl}/id`,
          'x-default': `${siteUrl}/en`,
        },
      },
    },
  ]
}
