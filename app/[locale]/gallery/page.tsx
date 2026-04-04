import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';
import { isLocale, navigation } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';
import { getPortfolioItems } from '@/lib/portfolio';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Moroccan Woodworking Gallery and Portfolio | L Artisanat Gamra Bois',
      description:
        'Explore our portfolio of handmade Moroccan woodworking projects, including carved furniture, decor pieces, and artisan custom designs.'
    },
    fr: {
      title: 'Galerie de menuiserie marocaine artisanale | L Artisanat Gamra Bois',
      description:
        'Explorez notre portfolio de menuiserie marocaine faite main: mobilier sculpte, decor artisanal et creations sur mesure.'
    },
    ar: {
      title: 'معرض اعمال النجارة المغربية اليدوية | L Artisanat Gamra Bois',
      description:
        'استكشف معرض اعمالنا في النجارة المغربية اليدوية بما يشمل الاثاث المحفور وقطع الديكور والتصاميم المخصصة.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/gallery`
    }
  };
}

const galleryData = {
  en: {
    collectionLabel: 'Portfolio Collection',
    viewDetails: 'View details',
    codeLabel: 'Code',
    categoryLabel: 'Category',
    allCategories: 'All categories',
    priceLabel: 'Budget',
    countryLabel: 'Destination',
    featuredLabel: 'Featured',
    searchLabel: 'Search portfolio',
    searchPlaceholder: 'Search by name, code, or description',
    searchButton: 'Search',
    clearFilters: 'Clear filters',
    resultsCount: 'items found',
    noResultsTitle: 'No items match your filters',
    noResultsText: 'Try another category or search keyword.',
    emptyTitle: 'No portfolio items yet',
    emptyText: 'Add images to public/portfolio and they will appear here automatically.'
  },
  fr: {
    collectionLabel: 'Collection Portfolio',
    viewDetails: 'Voir details',
    codeLabel: 'Code',
    categoryLabel: 'Categorie',
    allCategories: 'Toutes les categories',
    priceLabel: 'Budget',
    countryLabel: 'Destination',
    featuredLabel: 'A la une',
    searchLabel: 'Rechercher dans le portfolio',
    searchPlaceholder: 'Rechercher par nom, code ou description',
    searchButton: 'Rechercher',
    clearFilters: 'Effacer les filtres',
    resultsCount: 'elements trouves',
    noResultsTitle: 'Aucun element ne correspond aux filtres',
    noResultsText: 'Essayez une autre categorie ou un autre mot-cle.',
    emptyTitle: 'Aucun element portfolio pour le moment',
    emptyText: 'Ajoutez des images dans public/portfolio et elles apparaitront automatiquement ici.'
  },
  ar: {
    collectionLabel: 'مجموعة الاعمال',
    viewDetails: 'عرض التفاصيل',
    codeLabel: 'الرمز',
    categoryLabel: 'الفئة',
    allCategories: 'كل الفئات',
    priceLabel: 'الميزانية',
    countryLabel: 'الوجهة',
    featuredLabel: 'مميز',
    searchLabel: 'البحث في المعرض',
    searchPlaceholder: 'ابحث بالاسم او الرمز او الوصف',
    searchButton: 'بحث',
    clearFilters: 'مسح الفلاتر',
    resultsCount: 'عنصر مطابق',
    noResultsTitle: 'لا توجد عناصر مطابقة للفلاتر',
    noResultsText: 'جرب فئة مختلفة او كلمة بحث اخرى.',
    emptyTitle: 'لا توجد عناصر بعد',
    emptyText: 'اضف صورا داخل public/portfolio وستظهر هنا تلقائيا.'
  }
} as const;

export const revalidate = 0;

export default async function GalleryPage({
  params,
  searchParams
}: {
  params: { locale: string };
  searchParams?: { q?: string; category?: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].gallery;
  const nav = navigation[locale];
  const data = galleryData[locale];
  const portfolioItems = await getPortfolioItems();
  const query = (typeof searchParams?.q === 'string' ? searchParams.q : '').trim();
  const selectedCategory = (typeof searchParams?.category === 'string' ? searchParams.category : '').trim();

  const categories = Array.from(
    new Set(
      portfolioItems
        .map((item) => item.category)
        .filter((category): category is string => Boolean(category))
    )
  ).sort((a, b) => a.localeCompare(b));

  const normalizedQuery = query.toLowerCase();
  const filteredItems = portfolioItems.filter((item) => {
    const categoryMatch = !selectedCategory || item.category === selectedCategory;
    const searchBlob = [item.title, item.summary || '', item.category || '', item.code]
      .join(' ')
      .toLowerCase();
    const queryMatch = !normalizedQuery || searchBlob.includes(normalizedQuery);
    return categoryMatch && queryMatch;
  });

  const hasFilters = Boolean(query || selectedCategory);
  const seo = seoTemplates[locale].galleryParagraphTemplate(page.title, undefined);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    itemListElement: filteredItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://gamrabois.com/${locale}/gallery/${item.slug}`,
      name: item.title
    }))
  };

  return (
    <section className="fade-up">
      <div className="page-hero">
        <p className="page-kicker">Portfolio</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-bark/80 md:text-lg">{page.intro}</p>
      </div>

      {portfolioItems.length > 0 ? (
        <div className="section-card mt-6">
          <form className="grid gap-3 md:grid-cols-[1fr_auto]" method="get" action={`/${locale}/gallery`}>
            <label className="flex flex-col gap-2 text-sm font-medium text-bark" htmlFor="gallery-search">
              {data.searchLabel}
              <input
                id="gallery-search"
                name="q"
                defaultValue={query}
                placeholder={data.searchPlaceholder}
                className="rounded-xl border border-bark/15 bg-white px-4 py-2.5 text-sm text-bark outline-none transition focus:border-clay/40"
              />
            </label>
            <div className="flex items-end gap-2">
              {selectedCategory ? <input type="hidden" name="category" value={selectedCategory} /> : null}
              <button type="submit" className="rounded-full bg-bark px-5 py-2.5 text-sm font-semibold text-sand transition hover:bg-clay">
                {data.searchButton}
              </button>
              {hasFilters ? (
                <Link href={`/${locale}/gallery`} className="rounded-full border border-bark/20 px-4 py-2.5 text-sm font-semibold text-bark transition hover:bg-sand">
                  {data.clearFilters}
                </Link>
              ) : null}
            </div>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`/${locale}/gallery${query ? `?q=${encodeURIComponent(query)}` : ''}`}
              className={[
                'rounded-full border px-3 py-1.5 text-xs font-semibold transition',
                !selectedCategory
                  ? 'border-clay/35 bg-clay/15 text-clay'
                  : 'border-bark/15 bg-white/70 text-bark/80 hover:bg-sand'
              ].join(' ')}
            >
              {data.allCategories}
            </Link>
            {categories.map((category) => {
              const href = `/${locale}/gallery?${new URLSearchParams({
                ...(query ? { q: query } : {}),
                category
              }).toString()}`;

              return (
                <Link
                  key={category}
                  href={href}
                  className={[
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition',
                    selectedCategory === category
                      ? 'border-clay/35 bg-clay/15 text-clay'
                      : 'border-bark/15 bg-white/70 text-bark/80 hover:bg-sand'
                  ].join(' ')}
                >
                  {category}
                </Link>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-bark/65">{filteredItems.length} {data.resultsCount}</p>
        </div>
      ) : null}

      {portfolioItems.length === 0 ? (
        <div className="section-card mt-8">
          <h2 className="font-display text-3xl text-bark">{data.emptyTitle}</h2>
          <p className="mt-2 text-bark/75">{data.emptyText}</p>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="section-card mt-8">
          <h2 className="font-display text-3xl text-bark">{data.noResultsTitle}</h2>
          <p className="mt-2 text-bark/75">{data.noResultsText}</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <article key={item.filename} className={`group relative overflow-hidden rounded-3xl border border-bark/10 bg-white/80 shadow-soft fade-up ${index % 3 === 0 ? 'delay-1' : index % 3 === 1 ? 'delay-2' : 'delay-3'}`}>
              <Link
                href={`/${locale}/gallery/${item.slug}`}
                aria-label={`${data.viewDetails} ${item.title}`}
                className="absolute inset-0 z-0 rounded-3xl"
              >
                <span className="sr-only">{data.viewDetails} {item.title}</span>
              </Link>
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {item.featured ? (
                  <div className="absolute left-3 top-3 rounded-full bg-sand/95 px-3 py-1 text-xs font-semibold text-bark">
                    {data.featuredLabel}
                  </div>
                ) : null}
              </div>
              <div className="relative z-10 p-4">
                <h2 className="font-display text-2xl text-bark">{item.title}</h2>
                <p className="text-sm text-bark/70">{data.collectionLabel}</p>
                <p className="mt-1 text-xs font-semibold text-bark/70">{data.codeLabel}: {item.code}</p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {item.category ? (
                    <span className="rounded-full border border-bark/15 bg-white/70 px-2.5 py-1 text-bark/80">
                      {data.categoryLabel}: {item.category}
                    </span>
                  ) : null}
                  {item.priceRange ? (
                    <span className="rounded-full border border-bark/15 bg-white/70 px-2.5 py-1 text-bark/80">
                      {data.priceLabel}: {item.priceRange}
                    </span>
                  ) : null}
                  {item.country ? (
                    <span className="rounded-full border border-bark/15 bg-white/70 px-2.5 py-1 text-bark/80">
                      {data.countryLabel}: {item.country}
                    </span>
                  ) : null}
                </div>

                <Link href={`/${locale}/contact-quote?productCode=${encodeURIComponent(item.code)}&productTitle=${encodeURIComponent(item.title)}`} className="mt-3 inline-flex text-sm font-semibold text-clay transition group-hover:translate-x-1">
                  {nav.quote}
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>

      {filteredItems.length > 0 ? (
        <Script id="gallery-itemlist-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      ) : null}
    </section>
  );
}
