import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import type { Metadata } from 'next';
import CopyCodeButton from '@/components/CopyCodeButton';
import ItemEngagement from '@/components/ItemEngagement';
import ItemImageViewer from '@/components/ItemImageViewer';
import ItemShareMenu from '@/components/ItemShareMenu';
import { isLocale, navigation } from '@/lib/i18n';
import { seoTemplates } from '@/lib/content';
import { getPortfolioItemBySlug, getPortfolioItems } from '@/lib/portfolio';

const pageText = {
  en: {
    back: 'Back to gallery',
    details: 'Item details',
    category: 'Category',
    budget: 'Budget',
    destination: 'Destination',
    summary: 'Summary',
    description: 'Description',
    features: 'Features',
    materials: 'Materials',
    dimensions: 'Dimensions',
    code: 'Code',
    copyCode: 'Copy code',
    copiedCode: 'Copied',
    similar: 'Similar items',
    view: 'View item',
    quote: 'Request a Quote'
  },
  fr: {
    back: 'Retour a la galerie',
    details: 'Details de l article',
    category: 'Categorie',
    budget: 'Budget',
    destination: 'Destination',
    summary: 'Resume',
    description: 'Description',
    features: 'Caracteristiques',
    materials: 'Materiaux',
    dimensions: 'Dimensions',
    code: 'Code',
    copyCode: 'Copier le code',
    copiedCode: 'Copie',
    similar: 'Articles similaires',
    view: 'Voir article',
    quote: 'Demander un devis'
  },
  ar: {
    back: 'العودة الى المعرض',
    details: 'تفاصيل القطعة',
    category: 'الفئة',
    budget: 'الميزانية',
    destination: 'الوجهة',
    summary: 'نبذة',
    description: 'الوصف',
    features: 'المميزات',
    materials: 'المواد',
    dimensions: 'الابعاد',
    code: 'الرمز',
    copyCode: 'نسخ الرمز',
    copiedCode: 'تم النسخ',
    similar: 'عناصر مشابهة',
    view: 'عرض العنصر',
    quote: 'اطلب عرض سعر'
  }
} as const;

export const revalidate = 0;

export async function generateMetadata({
  params
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const item = await getPortfolioItemBySlug(params.slug);

  if (!item) {
    return {
      title: 'Portfolio Item | L Artisanat Gamra Bois',
      alternates: {
        canonical: `https://gamrabois.com/${locale}/gallery/${params.slug}`
      }
    };
  }

  const seoSummary = item.summary || seoTemplates[locale].galleryParagraphTemplate(item.title, item.category);
  const map = {
    en: `${item.title} | Handmade Moroccan Woodcraft`,
    fr: `${item.title} | Piece de bois artisanale marocaine`,
    ar: `${item.title} | نجارة مغربية يدوية`
  };

  return {
    title: map[locale],
    description: seoSummary,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/gallery/${item.slug}`
    },
    openGraph: {
      type: 'article',
      title: map[locale],
      description: seoSummary,
      images: [`https://gamrabois.com${item.src}`],
      url: `https://gamrabois.com/${locale}/gallery/${item.slug}`
    }
  };
}

export default async function PortfolioItemPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const t = pageText[locale];
  const nav = navigation[locale];

  const item = await getPortfolioItemBySlug(params.slug);
  if (!item) {
    notFound();
  }

  const all = await getPortfolioItems();
  const seoSummary = item.summary || seoTemplates[locale].galleryParagraphTemplate(item.title, item.category);
  const similar = all
    .filter((candidate) => candidate.slug !== item.slug)
    .sort((a, b) => {
      const categoryBoostA = item.category && a.category === item.category ? -1 : 0;
      const categoryBoostB = item.category && b.category === item.category ? -1 : 0;
      if (categoryBoostA !== categoryBoostB) {
        return categoryBoostA - categoryBoostB;
      }
      return a.title.localeCompare(b.title);
    })
    .slice(0, 3);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.title,
    image: [`https://gamrabois.com${item.src}`],
    sku: item.code,
    category: item.category || 'Moroccan woodworking',
    description: seoSummary,
    brand: {
      '@type': 'Brand',
      name: 'L Artisanat Gamra Bois'
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Product code',
        value: item.code
      },
      {
        '@type': 'PropertyValue',
        name: 'Workshop location',
        value: 'Taroudant, Morocco'
      },
      ...(item.materials || []).map((material) => ({
        '@type': 'PropertyValue',
        name: 'Material',
        value: material
      })),
      ...(item.features || []).slice(0, 5).map((feature) => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature
      })),
      ...(item.dimensions
        ? [
            { '@type': 'PropertyValue', name: 'Width', value: item.dimensions.width || '' },
            { '@type': 'PropertyValue', name: 'Height', value: item.dimensions.height || '' },
            { '@type': 'PropertyValue', name: 'Depth', value: item.dimensions.depth || '' }
          ]
        : [])
    ],
    url: `https://gamrabois.com/${locale}/gallery/${item.slug}`
  };

  return (
    <section className="fade-up">
      <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-bark/60" aria-label="Breadcrumb">
        <Link href={`/${locale}`} className="transition hover:text-clay">
          Home
        </Link>
        <span>/</span>
        <Link href={`/${locale}/gallery`} className="transition hover:text-clay">
          Gallery
        </Link>
        <span>/</span>
        <span className="font-semibold text-bark">{item.title}</span>
      </nav>

      <Link href={`/${locale}/gallery`} className="inline-flex text-sm font-semibold text-clay transition hover:translate-x-1">
        {t.back}
      </Link>

      <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="overflow-hidden rounded-3xl border border-bark/10 bg-white/80 shadow-soft">
          <div className="relative h-[350px] md:h-[520px]">
            <ItemImageViewer src={item.src} alt={item.title} />
          </div>
        </article>

        <aside className="section-card">
          <h1 className="font-display text-4xl text-bark">{item.title}</h1>
          <p className="mt-1 text-sm uppercase tracking-[0.18em] text-bark/55">{t.details}</p>

          <div className="mt-5 space-y-2 text-sm text-bark/80">
            <div className="flex items-center gap-2">
              <p><span className="font-semibold text-bark">{t.code}:</span> {item.code}</p>
              <CopyCodeButton code={item.code} label={t.copyCode} copiedLabel={t.copiedCode} />
            </div>
            {item.category ? <p><span className="font-semibold text-bark">{t.category}:</span> {item.category}</p> : null}
            {item.priceRange ? <p><span className="font-semibold text-bark">{t.budget}:</span> {item.priceRange}</p> : null}
            {item.country ? <p><span className="font-semibold text-bark">{t.destination}:</span> {item.country}</p> : null}
          </div>

          <ItemEngagement itemKey={item.code} locale={locale} />

          <div className="mt-5 flex flex-wrap gap-3">
            <ItemShareMenu title={item.title} url={`https://gamrabois.com/${locale}/gallery/${item.slug}`} locale={locale} />
          </div>

          {item.summary ? (
            <div className="mt-5 rounded-2xl border border-bark/10 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-bark/60">{t.summary}</p>
              <p className="mt-2 text-bark/80">{item.summary}</p>
            </div>
          ) : null}

          {item.description ? (
            <div className="mt-5 rounded-2xl border border-bark/10 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-bark/60">{t.description}</p>
              <p className="mt-2 text-bark/80">{item.description}</p>
            </div>
          ) : null}

          {item.features && item.features.length > 0 ? (
            <div className="mt-5 rounded-2xl border border-bark/10 bg-white/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-bark/60">{t.features}</p>
              <ul className="mt-3 grid gap-2 text-sm text-bark/80 md:grid-cols-2">
                {item.features.map((feature) => (
                  <li key={feature} className="rounded-xl border border-bark/10 bg-white px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {item.materials && item.materials.length > 0 ? (
              <div className="rounded-2xl border border-bark/10 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-bark/60">{t.materials}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.materials.map((material) => (
                    <span key={material} className="rounded-full border border-bark/10 bg-white px-3 py-1 text-sm text-bark/80">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {item.dimensions ? (
              <div className="rounded-2xl border border-bark/10 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-bark/60">{t.dimensions}</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm text-bark/80">
                  <div className="rounded-xl border border-bark/10 bg-white px-3 py-2">
                    <span className="block text-[11px] uppercase text-bark/55">W</span>
                    <span>{item.dimensions.width || '-'}</span>
                  </div>
                  <div className="rounded-xl border border-bark/10 bg-white px-3 py-2">
                    <span className="block text-[11px] uppercase text-bark/55">H</span>
                    <span>{item.dimensions.height || '-'}</span>
                  </div>
                  <div className="rounded-xl border border-bark/10 bg-white px-3 py-2">
                    <span className="block text-[11px] uppercase text-bark/55">D</span>
                    <span>{item.dimensions.depth || '-'}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-bark/75">{seoSummary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact-quote?productCode=${encodeURIComponent(item.code)}&productTitle=${encodeURIComponent(item.title)}`} className="rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-sand transition hover:bg-clay">
              {t.quote}
            </Link>
            <a href={`https://wa.me/212728886642`} target="_blank" rel="noreferrer" className="rounded-full border border-bark/20 px-5 py-2.5 text-sm font-semibold text-bark transition hover:bg-sand">
              {nav.whatsapp}
            </a>
          </div>
        </aside>
      </div>

      {similar.length > 0 ? (
        <div className="mt-12">
          <h2 className="font-display text-4xl text-bark">{t.similar}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {similar.map((candidate) => (
              <article key={candidate.slug} className="group relative overflow-hidden rounded-3xl border border-bark/10 bg-white/80 shadow-soft">
                <Link href={`/${locale}/gallery/${candidate.slug}`} aria-label={`${t.view} ${candidate.title}`} className="absolute inset-0 z-10 rounded-3xl">
                  <span className="sr-only">
                    {t.view} {candidate.title}
                  </span>
                </Link>
                <div className="relative h-52 overflow-hidden">
                  <Image src={candidate.src} alt={candidate.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="relative z-20 p-4">
                  <h3 className="font-display text-2xl text-bark">{candidate.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </section>
  );
}
