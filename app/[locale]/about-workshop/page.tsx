import type { Metadata } from 'next';
import Script from 'next/script';
import { brand, isLocale } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'About Our Moroccan Woodworking Workshop | L Artisanat Gamra Bois',
      description:
        'Learn about our Taroudant woodworking workshop, artisan process, hand-finishing standards, and international custom project support.'
    },
    fr: {
      title: 'A propos de notre atelier de menuiserie marocaine | L Artisanat Gamra Bois',
      description:
        'Decouvrez notre atelier de Taroudant, notre savoir-faire artisanal, nos standards de finition manuelle et notre accompagnement international.'
    },
    ar: {
      title: 'عن ورشة النجارة المغربية | L Artisanat Gamra Bois',
      description:
        'تعرف على ورشتنا في تارودانت وتقنيات العمل الحرفي ومعايير التشطيب اليدوي ودعم المشاريع المخصصة للعملاء الدوليين.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/about-workshop`
    }
  };
}

const aboutData = {
  en: {
    p1: 'Founded in Taroudant, our workshop combines traditional Moroccan woodworking techniques with precise finishing standards for international clients.',
    p2: 'We produce custom furniture, decorative carved elements, doors, and architectural pieces for homes, designers, and hospitality spaces.',
    standardsTitle: 'Workshop Standards',
    standards: [
      'Material selection based on durability and finish quality',
      'Hand-finishing and detailing by experienced artisans',
      'Final quality check before export packaging',
      'Transparent communication through WhatsApp and email'
    ]
  },
  fr: {
    p1: 'Fonde a Taroudant, notre atelier associe techniques marocaines traditionnelles et standards de finition precis pour des clients internationaux.',
    p2: 'Nous realisons mobilier sur mesure, elements decoratifs sculptes, portes et pieces architecturales pour maisons, designers et hotellerie.',
    standardsTitle: 'Standards de l atelier',
    standards: [
      'Selection des materiaux selon durabilite et qualite de finition',
      'Finitions et details realises a la main par des artisans experimentes',
      'Controle qualite final avant emballage export',
      'Communication transparente via WhatsApp et email'
    ]
  },
  ar: {
    p1: 'تاسست ورشتنا في تارودانت وتجمع بين تقنيات النجارة المغربية التقليدية ومعايير تشطيب دقيقة للعملاء الدوليين.',
    p2: 'ننجز اثاثا حسب الطلب وعناصر ديكورية محفورة وابوابا وقطعا معمارية للمنازل والمصممين وقطاع الضيافة.',
    standardsTitle: 'معايير الورشة',
    standards: [
      'اختيار المواد بناء على المتانة وجودة التشطيب',
      'تشطيب وتفاصيل يدوية على يد حرفيين ذوي خبرة',
      'فحص جودة نهائي قبل التغليف للتصدير',
      'تواصل شفاف عبر واتساب والبريد الالكتروني'
    ]
  }
} as const;

export default function AboutWorkshopPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].about;
  const data = aboutData[locale];
  const seo = seoTemplates[locale].serviceParagraphs.about;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.name,
    image: ['https://gamrabois.com/images/hero.png'],
    telephone: brand.phone,
    email: brand.email,
    url: `https://gamrabois.com/${locale}/about-workshop`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Taroudant',
      addressCountry: 'MA'
    },
    areaServed: ['MA', 'FR', 'ES', 'US', 'CA'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:30',
        closes: '14:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00'
      }
    ]
  };

  return (
    <>
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="fade-up page-hero">
          <p className="page-kicker">Taroudant Workshop</p>
          <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
          <p className="mt-4 text-bark/80">{page.intro}</p>
          <p className="mt-4 text-bark/80">{data.p1}</p>
          <p className="mt-3 text-bark/80">{data.p2}</p>
        </article>
        <aside className="section-card fade-up delay-1">
          <h2 className="font-display text-3xl text-bark">{data.standardsTitle}</h2>
          <ul className="mt-4 space-y-3 text-bark/80">
            {data.standards.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>

      <Script id="about-localbusiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
