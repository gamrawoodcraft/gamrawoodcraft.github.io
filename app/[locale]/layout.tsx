import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { isLocale, rtlLocales, type Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Moroccan Handmade Wood Furniture | L Artisanat Gamra Bois',
      description:
        'Handmade Moroccan wood furniture, carved decor, and bespoke woodworking from Taroudant. Request a custom quote with international shipping support.',
      keywords: [
        'Moroccan wood furniture',
        'handmade woodcraft Morocco',
        'custom woodworking Taroudant',
        'carved wood decor',
        'thuya wood crafts'
      ]
    },
    fr: {
      title: 'Meubles en bois marocains faits main | L Artisanat Gamra Bois',
      description:
        'Mobilier en bois marocain fait main, decor sculpte et menuiserie sur mesure depuis Taroudant. Demandez un devis avec livraison internationale.',
      keywords: [
        'meuble bois marocain',
        'artisanat bois Taroudant',
        'menuiserie sur mesure Maroc',
        'decor bois sculpte',
        'atelier bois marocain'
      ]
    },
    ar: {
      title: 'اثاث خشبي مغربي مصنوع يدويا | L Artisanat Gamra Bois',
      description:
        'اثاث خشبي مغربي فاخر وديكور محفور ونجارة حسب الطلب من ورشة تارودانت مع امكانية الشحن الدولي وطلب عرض سعر مخصص.',
      keywords: [
        'اثاث خشبي مغربي',
        'نجارة مغربية حسب الطلب',
        'ديكور خشبي محفور',
        'ورشة نجارة تارودانت',
        'شحن اثاث مغربي دولي'
      ]
    }
  };

  const canonical = `https://gamrabois.com/${locale}`;

  return {
    title: map[locale].title,
    description: map[locale].description,
    keywords: map[locale].keywords,
    alternates: {
      canonical,
      languages: {
        en: 'https://gamrabois.com/en',
        fr: 'https://gamrabois.com/fr',
        ar: 'https://gamrabois.com/ar'
      }
    },
    openGraph: {
      type: 'website',
      locale,
      url: canonical,
      title: map[locale].title,
      description: map[locale].description,
      siteName: 'L Artisanat Gamra Bois'
    },
    twitter: {
      card: 'summary_large_image',
      title: map[locale].title,
      description: map[locale].description
    }
  };
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'ar' }];
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : 'en';
  const isRtl = rtlLocales.includes(locale);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="relative min-h-screen overflow-x-clip">
      <div className="ambient-orb -left-24 top-24 h-56 w-56 bg-bronze/60" />
      <div className="ambient-orb right-0 top-[30%] h-64 w-64 bg-olive/40" />
      <Header locale={locale} />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 pb-24 md:px-6 md:pb-8">{children}</main>
      <Footer locale={locale} />
      <MobileActionBar locale={locale} />
    </div>
  );
}
