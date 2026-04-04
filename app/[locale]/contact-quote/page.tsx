import QuoteForm from '@/components/QuoteForm';
import type { Metadata } from 'next';
import { brand, isLocale } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Request a Custom Woodworking Quote | L Artisanat Gamra Bois',
      description:
        'Contact our Taroudant workshop for custom Moroccan wood furniture, carved decor, and artisan doors. Receive a tailored quote in 24-48 hours.'
    },
    fr: {
      title: 'Demander un devis menuiserie sur mesure | L Artisanat Gamra Bois',
      description:
        'Contactez notre atelier de Taroudant pour mobilier bois marocain sur mesure, decor sculpte et portes artisanales. Devis personnalise sous 24-48h.'
    },
    ar: {
      title: 'اطلب عرض سعر للنجارة حسب الطلب | L Artisanat Gamra Bois',
      description:
        'تواصل مع ورشتنا في تارودانت لطلب اثاث خشبي مغربي مخصص وديكور محفور وابواب حرفية واحصل على عرض سعر خلال 24-48 ساعة.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/contact-quote`
    }
  };
}

const contactData = {
  en: {
    detailsTitle: 'Contact Details',
    emailLabel: 'Email',
    phoneLabel: 'Phone / WhatsApp',
    locationLabel: 'Location',
    hoursTitle: 'Business Hours',
    monThu: 'Mon-Thu',
    fri: 'Fri',
    sat: 'Sat'
  },
  fr: {
    detailsTitle: 'Coordonnees',
    emailLabel: 'Email',
    phoneLabel: 'Telephone / WhatsApp',
    locationLabel: 'Localisation',
    hoursTitle: 'Horaires',
    monThu: 'Lun-Jeu',
    fri: 'Ven',
    sat: 'Sam'
  },
  ar: {
    detailsTitle: 'بيانات التواصل',
    emailLabel: 'البريد الالكتروني',
    phoneLabel: 'الهاتف / واتساب',
    locationLabel: 'الموقع',
    hoursTitle: 'اوقات العمل',
    monThu: 'الاثنين-الخميس',
    fri: 'الجمعة',
    sat: 'السبت'
  }
} as const;

export default function ContactQuotePage({
  params,
  searchParams
}: {
  params: { locale: string };
  searchParams?: { productCode?: string; productTitle?: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].contact;
  const data = contactData[locale];
  const seo = seoTemplates[locale].serviceParagraphs.contact;
  const productCode = searchParams?.productCode?.trim() || '';
  const productTitle = searchParams?.productTitle?.trim() || '';

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="fade-up page-hero">
        <p className="page-kicker">Contact Studio</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 text-bark/80 md:text-lg">{page.intro}</p>

        <div className="luxury-ring mt-8 rounded-3xl bg-gradient-to-br from-bark via-[#3d2d21] to-clay p-6 text-sand md:p-8">
          <h2 className="font-display text-3xl">{data.detailsTitle}</h2>
          <p className="mt-3 text-sand/90">{data.emailLabel}: {brand.email}</p>
          <p className="text-sand/90">{data.phoneLabel}: {brand.phone}</p>
          <p className="text-sand/90">{data.locationLabel}: {brand.location}</p>
          <p className="mt-3 text-sand/80">{data.hoursTitle}</p>
          <p className="text-sand/70">{data.monThu}: 09:00-21:00</p>
          <p className="text-sand/70">{data.fri}: 08:30-14:00</p>
          <p className="text-sand/70">{data.sat}: 09:00-18:00</p>
        </div>
      </article>

      <div className="fade-up delay-1 section-card">
        <QuoteForm locale={locale} initialProductCode={productCode} initialProductTitle={productTitle} />
      </div>

      <p className="lg:col-span-2 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>
    </section>
  );
}
