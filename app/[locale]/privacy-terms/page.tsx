import type { Metadata } from 'next';
import { isLocale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const map = {
    en: {
      title: 'Privacy & Terms | L Artisanat Gamra Bois',
      description: 'Read the privacy, terms, copyright, and website usage notes for L Artisanat Gamra Bois.'
    },
    fr: {
      title: 'Confidentialite et conditions | L Artisanat Gamra Bois',
      description: 'Consultez notre politique de confidentialite, conditions et mentions de copyright.'
    },
    ar: {
      title: 'الخصوصية والشروط | L Artisanat Gamra Bois',
      description: 'اطلع على سياسة الخصوصية والشروط وملاحظات حقوق النشر الخاصة بموقع L Artisanat Gamra Bois.'
    }
  };

  return {
    title: map[locale].title,
    description: map[locale].description,
    alternates: {
      canonical: `https://gamrabois.com/${locale}/privacy-terms`
    }
  };
}

const pageText = {
  en: {
    title: 'Privacy & Terms',
    intro:
      'This page explains how we handle contact requests, how the website may be used, and the ownership of the content you see here.',
    privacyTitle: 'Privacy',
    privacy: [
      'We only use contact details you send through the quote form to answer your request and manage the project conversation.',
      'We do not sell personal data. Message history may be kept for service follow-up and internal record keeping.',
      'Analytics or embedded services, if enabled, are used to understand site performance and improve the experience.'
    ],
    termsTitle: 'Terms of Use',
    terms: [
      'Website content, images, and text belong to L Artisanat Gamra Bois unless otherwise stated.',
      'You may browse and share links for personal and commercial discussion, but copying content or images without permission is not allowed.',
      'Quotes, timelines, and pricing are provided in good faith and may be updated after project review.'
    ],
    copyrightTitle: 'Copyright',
    copyright:
      'All rights reserved. The name, visuals, and product descriptions on this site are protected and should not be reused without permission.'
  },
  fr: {
    title: 'Confidentialite et conditions',
    intro:
      'Cette page explique comment nous traitons vos demandes, comment utiliser le site et a qui appartiennent les contenus presentes ici.',
    privacyTitle: 'Confidentialite',
    privacy: [
      'Nous utilisons uniquement les coordonnees envoyees via le formulaire pour repondre a votre demande et suivre le projet.',
      'Nous ne vendons pas les donnees personnelles. Les echanges peuvent etre conserves pour le suivi et la gestion interne.',
      'Les outils d analyse ou services embarques, s ils sont actifs, servent a comprendre les performances du site et ameliorer l experience.'
    ],
    termsTitle: 'Conditions d utilisation',
    terms: [
      'Les contenus, images et textes du site appartiennent a L Artisanat Gamra Bois sauf mention contraire.',
      'Vous pouvez consulter et partager les liens pour un usage personnel ou commercial, mais la copie des contenus ou images sans autorisation n est pas permise.',
      'Les devis, delais et prix sont fournis de bonne foi et peuvent etre ajustes apres etude du projet.'
    ],
    copyrightTitle: 'Copyright',
    copyright:
      'Tous droits reserves. Le nom, les visuels et les descriptions de produits de ce site sont proteges et ne doivent pas etre reutilises sans autorisation.'
  },
  ar: {
    title: 'الخصوصية والشروط',
    intro:
      'توضح هذه الصفحة كيف نتعامل مع طلبات التواصل وكيفية استخدام الموقع ومن يملك المحتوى المعروض هنا.',
    privacyTitle: 'الخصوصية',
    privacy: [
      'نستخدم فقط بيانات التواصل المرسلة عبر نموذج العرض للرد على طلبك ومتابعة تفاصيل المشروع.',
      'لا نقوم ببيع البيانات الشخصية. وقد يتم الاحتفاظ بسجل الرسائل للمتابعة وخدمة العملاء.',
      'في حال تفعيل خدمات التحليل او الخدمات المدمجة فهي تستخدم لفهم اداء الموقع وتحسين التجربة.'
    ],
    termsTitle: 'شروط الاستخدام',
    terms: [
      'تعود ملكية محتوى الموقع والصور والنصوص الى L Artisanat Gamra Bois ما لم يذكر خلاف ذلك.',
      'يمكنك تصفح الموقع ومشاركة الروابط للاستخدام الشخصي او التجاري، لكن نسخ المحتوى او الصور دون اذن غير مسموح.',
      'يتم تقديم العروض والمواعيد والاسعار بحسن نية وقد يتم تحديثها بعد مراجعة المشروع.'
    ],
    copyrightTitle: 'حقوق النشر',
    copyright:
      'جميع الحقوق محفوظة. الاسم والمرئيات ووصف المنتجات في هذا الموقع محمية ولا يجوز اعادة استخدامها دون اذن.'
  }
} as const;

export default function PrivacyTermsPage({ params }: { params: { locale: string } }) {
  const locale = isLocale(params.locale) ? params.locale : 'en';
  const page = pageText[locale];

  return (
    <section className="fade-up">
      <div className="page-hero">
        <p className="page-kicker">Legal</p>
        <h1 className="mt-2 font-display text-5xl text-bark md:text-6xl">{page.title}</h1>
        <p className="mt-3 max-w-3xl text-bark/80 md:text-lg">{page.intro}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="section-card fade-up delay-1">
          <h2 className="font-display text-3xl text-bark">{page.privacyTitle}</h2>
          <ul className="mt-4 space-y-3 text-bark/80">
            {page.privacy.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>

        <article className="section-card fade-up delay-2">
          <h2 className="font-display text-3xl text-bark">{page.termsTitle}</h2>
          <ul className="mt-4 space-y-3 text-bark/80">
            {page.terms.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </div>

      <article className="section-card mt-6 fade-up delay-3">
        <h2 className="font-display text-3xl text-bark">{page.copyrightTitle}</h2>
        <p className="mt-4 max-w-4xl text-bark/80">{page.copyright}</p>
      </article>
    </section>
  );
}