import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'International Shipping and FAQ | L Artisanat Gamra Bois',
      description:
        'Read shipping, customs, packaging, and production timeline answers for handmade Moroccan wood furniture and custom woodworking orders.'
    },
    fr: {
      title: 'Livraison internationale et FAQ | L Artisanat Gamra Bois',
      description:
        'Consultez nos informations sur livraison, douane, emballage et delais de production pour mobilier bois marocain artisanal.'
    },
    ar: {
      title: 'الشحن الدولي والاسئلة الشائعة | L Artisanat Gamra Bois',
      description:
        'اطلع على تفاصيل الشحن والجمارك والتغليف ومدد التصنيع لطلبات الاثاث الخشبي المغربي المصنوع يدويا.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/shipping-faq`
    }
  };
}

const shippingFaqData = {
  en: {
    shippingOverview: 'Shipping Overview',
    faqTitle: 'Frequently Asked Questions',
    bullets: [
      'Estimated transit and production timelines shared during quotation',
      'Export-grade packaging with secure handling standards',
      'Destination-specific customs guidance before dispatch'
    ],
    faq: [
      {
        q: 'Which countries do you ship to?',
        a: 'We serve international destinations across Europe and North America, and can confirm logistics for other regions on request.'
      },
      {
        q: 'How are orders packaged?',
        a: 'Each order is packed with reinforced export protection tailored to the size and fragility of the piece.'
      },
      {
        q: 'Do I pay customs and import taxes?',
        a: 'Customs duties and taxes depend on destination-country regulations and are typically paid by the buyer.'
      },
      {
        q: 'What is your production timeline?',
        a: 'Timeline depends on complexity, quantity, and finishing details. We confirm schedule after quote approval.'
      }
    ]
  },
  fr: {
    shippingOverview: 'Apercu de la livraison',
    faqTitle: 'Questions frequentes',
    bullets: [
      'Delais de production et transit communiques lors du devis',
      'Emballage qualite export avec standards de protection eleves',
      'Orientation douaniere selon le pays de destination avant expedition'
    ],
    faq: [
      {
        q: 'Vers quels pays expédiez-vous ?',
        a: 'Nous livrons en Europe et en Amerique du Nord, et pouvons confirmer la logistique pour d autres regions sur demande.'
      },
      {
        q: 'Comment les commandes sont-elles emballees ?',
        a: 'Chaque commande est protegee avec un emballage export renforce adapte a la taille et fragilite de la piece.'
      },
      {
        q: 'Dois-je payer les taxes et droits de douane ?',
        a: 'Les droits et taxes dependent du pays de destination et sont generalement a la charge de l acheteur.'
      },
      {
        q: 'Quel est votre delai de production ?',
        a: 'Le delai depend de la complexite, quantite et finition. Il est confirme apres validation du devis.'
      }
    ]
  },
  ar: {
    shippingOverview: 'نظرة عامة على الشحن',
    faqTitle: 'الاسئلة الشائعة',
    bullets: [
      'تحديد المدد المتوقعة للتصنيع والشحن عند ارسال عرض السعر',
      'تغليف بمعايير تصدير عالية لضمان الحماية',
      'توجيه خاص بالجمارك حسب بلد الوجهة قبل الارسال'
    ],
    faq: [
      {
        q: 'الى اي دول تقومون بالشحن؟',
        a: 'نخدم وجهات دولية في اوروبا وامريكا الشمالية ويمكننا تاكيد الشحن لمناطق اخرى عند الطلب.'
      },
      {
        q: 'كيف يتم تغليف الطلبات؟',
        a: 'يتم تغليف كل طلب بحماية معززة للتصدير حسب حجم القطعة وحساسيتها.'
      },
      {
        q: 'هل ادفع الرسوم الجمركية والضرائب؟',
        a: 'تعتمد الرسوم والضرائب على قوانين بلد الوجهة وغالبا تكون على المشتري.'
      },
      {
        q: 'ما هو جدول التصنيع لديكم؟',
        a: 'تعتمد المدة على التعقيد والكمية والتشطيب ويتم تاكيدها بعد اعتماد عرض السعر.'
      }
    ]
  }
} as const;

export default function ShippingFaqPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].shippingFaq;
  const data = shippingFaqData[locale];
  const seo = seoTemplates[locale].serviceParagraphs.shippingFaq;

  return (
    <section className="fade-up">
      <div className="page-hero">
        <p className="page-kicker">Shipping & Support</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-bark/80 md:text-lg">{page.intro}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="section-card fade-up delay-1">
          <h2 className="font-display text-3xl text-bark">{data.shippingOverview}</h2>
          <ul className="mt-4 space-y-3 text-bark/80">
            {data.bullets.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="section-card fade-up delay-2">
          <h2 className="font-display text-3xl text-bark">{data.faqTitle}</h2>
          <div className="mt-4 space-y-4 text-bark/80">
            {data.faq.map((item) => (
              <div key={item.q}>
                <p className="font-semibold text-bark">{item.q}</p>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>
    </section>
  );
}
