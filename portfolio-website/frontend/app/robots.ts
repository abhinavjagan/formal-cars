import type { MetadataRoute } from 'next';

const defaultSiteUrl = `https://abhinavjagan.github.io${process.env.NEXT_PUBLIC_BASE_PATH || ''}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl}/sitemap.xml`,
  };
}
