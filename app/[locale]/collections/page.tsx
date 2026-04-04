import Link from 'next/link';
import type { Metadata } from 'next';
import { isLocale, navigation } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Moroccan Wood Furniture Collections | L Artisanat Gamra Bois',
      description:
        'Browse handmade Moroccan wood furniture collections: custom tables, carved decor, artisan doors, and bespoke interior wood pieces.'
    },
    fr: {
      title: 'Collections de mobilier bois marocain | L Artisanat Gamra Bois',
      description:
        'Decouvrez nos collections de mobilier bois marocain fait main: tables, decor sculpte, portes artisanales et pieces sur mesure.'
    },
    ar: {
      title: 'مجموعات الاثاث الخشبي المغربي | L Artisanat Gamra Bois',
      description:
        'تصفح مجموعات الاثاث الخشبي المغربي المصنوع يدويا: طاولات مخصصة وديكور محفور وابواب حرفية وقطع داخلية حسب الطلب.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/collections`
    }
  };
}

const collectionsData = {
  en: {
    productGroups: ['Custom Furniture', 'Carved Decor', 'Artisan Doors', 'Tables', 'Artisan Wood Pieces'],
    cardText: 'Made to order with adjustable dimensions and finishing options.'
  },
  fr: {
    productGroups: ['Mobilier sur mesure', 'Decor sculpte', 'Portes artisanales', 'Tables', 'Pieces artisanales en bois'],
    cardText: 'Fabrique sur mesure avec dimensions ajustables et options de finition.'
  },
  ar: {
    productGroups: ['اثاث حسب الطلب', 'ديكور محفور', 'ابواب حرفية', 'طاولات', 'قطع خشبية فنية'],
    cardText: 'تصنيع حسب الطلب مع امكانية تخصيص المقاسات وخيارات التشطيب.'
  }
} as const;

export default function CollectionsPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].collections;
  const nav = navigation[locale];
  const data = collectionsData[locale];
  const seo = seoTemplates[locale].serviceParagraphs.collections;

  return (
    <section className="fade-up">
      <div className="page-hero grain-overlay">
        <p className="page-kicker">Collections</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-bark/80 md:text-lg">{page.intro}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.productGroups.map((item, index) => (
          <article key={item} className={`section-card fade-up ${index < 3 ? 'delay-1' : 'delay-2'}`}>
            <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-clay to-bronze" />
            <h2 className="mt-4 font-display text-2xl text-bark">{item}</h2>
            <p className="mt-2 text-sm leading-relaxed text-bark/80">{data.cardText}</p>
            <Link href={`/${locale}/contact-quote`} className="mt-5 inline-flex text-sm font-semibold text-clay transition hover:translate-x-1">
              {nav.quote}
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>
    </section>
  );
}
