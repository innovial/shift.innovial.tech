import type { MetadataRoute } from 'next'

const siteUrl = 'https://shift.innovial.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/id`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
