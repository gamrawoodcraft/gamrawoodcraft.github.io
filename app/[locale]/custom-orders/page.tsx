import Link from 'next/link';
import type { Metadata } from 'next';
import { isLocale, navigation } from '@/lib/i18n';
import { pageContent, seoTemplates } from '@/lib/content';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Custom Woodworking Orders in Morocco | L Artisanat Gamra Bois',
      description:
        'Plan your custom woodworking order with our Taroudant workshop. Share dimensions, style references, and destination for a tailored quote.'
    },
    fr: {
      title: 'Commande de menuiserie sur mesure au Maroc | L Artisanat Gamra Bois',
      description:
        'Planifiez votre commande de menuiserie sur mesure avec notre atelier de Taroudant. Envoyez dimensions, references et destination pour un devis adapte.'
    },
    ar: {
      title: 'طلبات النجارة الخشبية حسب الطلب في المغرب | L Artisanat Gamra Bois',
      description:
        'خطط لطلب النجارة حسب المقاس مع ورشتنا في تارودانت. ارسل المقاسات والمراجع والوجهة للحصول على عرض سعر مناسب.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/custom-orders`
    }
  };
}

const customOrdersData = {
  en: {
    title: 'Order Journey',
    steps: [
      'Share sketches, references, and dimensions',
      'Receive technical recommendations and materials options',
      'Approve timeline and budget range',
      'Production updates and export preparation'
    ]
  },
  fr: {
    title: 'Parcours de commande',
    steps: [
      'Partagez croquis, references et dimensions',
      'Recevez des recommandations techniques et options de materiaux',
      'Validez delai et fourchette budgetaire',
      'Suivi de production et preparation export'
    ]
  },
  ar: {
    title: 'مراحل الطلب',
    steps: [
      'شارك معنا الرسومات والمراجع والمقاسات',
      'نقدم توصيات تقنية وخيارات المواد المناسبة',
      'تأكيد الجدول الزمني ونطاق الميزانية',
      'متابعة التصنيع وتجهيز الطلب للتصدير'
    ]
  }
} as const;

export default function CustomOrdersPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageContent[locale].customOrders;
  const nav = navigation[locale];
  const data = customOrdersData[locale];
  const seo = seoTemplates[locale].serviceParagraphs.customOrders;

  return (
    <section className="fade-up">
      <div className="page-hero">
        <p className="page-kicker">Bespoke Service</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-bark/80 md:text-lg">{page.intro}</p>
      </div>

      <div className="mt-8 section-card fade-up delay-1">
        <h2 className="font-display text-3xl text-bark">{data.title}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {data.steps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-bark/10 bg-white/60 p-4 text-bark/85">
              <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-bark text-xs font-semibold text-sand">
                {index + 1}
              </span>
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <Link href={`/${locale}/contact-quote`} className="mt-8 inline-flex rounded-full bg-bark px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5 hover:bg-clay">
        {nav.quote}
      </Link>

      <p className="mt-6 max-w-4xl text-sm leading-relaxed text-bark/75">{seo}</p>
    </section>
  );
}
