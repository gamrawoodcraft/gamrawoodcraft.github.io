import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gamrabois.com';
  const routes = ['', '/collections', '/custom-orders', '/gallery', '/about-workshop', '/shipping-faq', '/contact-quote', '/privacy-terms'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8
    }))
  );
}
