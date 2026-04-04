import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import type { Metadata } from 'next';
import { brand, isLocale, navigation } from '@/lib/i18n';
import { homeContent } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Custom Moroccan Wood Furniture and Decor | L Artisanat Gamra Bois',
      description:
        'Discover bespoke Moroccan woodworking from Taroudant: handmade furniture, carved decor, artisan doors, and international shipping support.'
    },
    fr: {
      title: 'Mobilier et decor bois marocain sur mesure | L Artisanat Gamra Bois',
      description:
        'Decouvrez notre menuiserie marocaine sur mesure depuis Taroudant: mobilier fait main, decor sculpte, portes artisanales et livraison internationale.'
    },
    ar: {
      title: 'اثاث وديكور خشبي مغربي حسب الطلب | L Artisanat Gamra Bois',
      description:
        'اكتشف اعمال النجارة المغربية حسب الطلب من تارودانت: اثاث يدوي وديكور محفور وابواب حرفية مع دعم الشحن الدولي.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}`
    }
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const t = homeContent[locale];
  const nav = navigation[locale];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: brand.name,
        url: `https://gamrabois.com/${locale}`,
        email: brand.email,
        telephone: brand.phone,
        sameAs: [
          'https://instagram.com/grtisanat_gamra_bois',
          'https://facebook.com/lartisanat.gamra.bois',
          'https://youtube.com/@AGbois'
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: brand.name,
        image: ['https://gamrabois.com/images/hero.png'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Taroudant',
          addressCountry: 'MA'
        },
        telephone: brand.phone,
        email: brand.email,
        url: `https://gamrabois.com/${locale}`,
        areaServed: ['MA', 'FR', 'ES', 'US', 'CA'],
        priceRange: '$$$',
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
      },
      {
        '@type': 'FAQPage',
        mainEntity: t.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <section className="grain-overlay fade-up relative overflow-hidden rounded-3xl bg-gradient-to-br from-bark via-[#5e412d] to-clay p-6 text-sand shadow-soft md:p-8">
        <div className="pointer-events-none absolute -left-10 -top-20 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-olive/30 blur-3xl" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sand/80">Taroudant, Morocco</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base text-sand/95 md:text-lg">{t.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact-quote`} className="rounded-full bg-sand px-6 py-3 font-semibold text-bark transition hover:-translate-y-0.5 hover:bg-white">
                {nav.quote}
              </Link>
              <a
                href={`https://wa.me/${brand.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-sand/50 bg-white/5 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {nav.whatsapp}
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/20 bg-black/10 shadow-2xl md:h-[420px]">
            <Image
              src="/images/hero.png"
              alt="Moroccan handcrafted woodworking showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-black/35 px-3 py-2 text-xs uppercase tracking-[0.18em] text-sand/95 backdrop-blur">
              Handmade in Morocco
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-3 md:grid-cols-4">
        {t.trust.map((item) => (
          <div key={item} className="section-card fade-up delay-1 text-sm font-medium">
            {item}
          </div>
        ))}
      </section>

      <section className="fade-up delay-2 mt-10">
        <h2 className="font-display text-4xl text-bark">{t.collectionsTitle}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {t.collections.map((item) => (
            <article key={item.title} className="section-card">
              <h3 className="font-display text-2xl text-bark">{item.title}</h3>
              <p className="mt-2 text-bark/80">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fade-up delay-3 mt-10 grid gap-6 md:grid-cols-2">
        <article className="section-card">
          <h2 className="font-display text-3xl text-bark">{t.processTitle}</h2>
          <ol className="mt-4 space-y-3 text-bark/80">
            {t.process.map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </article>
        <article className="section-card">
          <h2 className="font-display text-3xl text-bark">{t.whyTitle}</h2>
          <ul className="mt-4 space-y-3 text-bark/80">
            {t.why.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="fade-up delay-4 mt-10 grid gap-6 md:grid-cols-2">
        <article className="section-card">
          <h2 className="font-display text-3xl text-bark">{t.testimonialsTitle}</h2>
          <div className="mt-4 space-y-3 text-bark/80">
            {t.testimonials.map((item) => (
              <p key={item}>"{item}"</p>
            ))}
          </div>
        </article>
        <article className="section-card">
          <h2 className="font-display text-3xl text-bark">{t.faqTitle}</h2>
          <div className="mt-4 space-y-4 text-bark/80">
            {t.faq.map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-bark">{item.q}</p>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="fade-up delay-4 mt-10 rounded-3xl bg-gradient-to-br from-olive to-[#475230] px-6 py-12 text-sand">
        <h2 className="font-display text-4xl">{t.finalTitle}</h2>
        <p className="mt-3 max-w-2xl text-sand/90">{t.finalText}</p>
        <Link href={`/${locale}/contact-quote`} className="mt-6 inline-flex rounded-full bg-sand px-6 py-3 font-semibold text-bark transition hover:-translate-y-0.5 hover:bg-white">
          {nav.quote}
        </Link>
      </section>

      <Script id="localbusiness-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
