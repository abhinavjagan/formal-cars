import type { MetadataRoute } from 'next';
import { SKILL_CATALOG } from '@/utils/skills';

const defaultSiteUrl = `https://abhinavjagan.github.io${process.env.NEXT_PUBLIC_BASE_PATH || ''}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;

  const skillRoutes: MetadataRoute.Sitemap = SKILL_CATALOG.map((skill) => ({
    url: `${baseUrl}/skills/${skill.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...skillRoutes,
  ];
}
