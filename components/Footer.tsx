import Link from 'next/link';
import { brand, navigation, type Locale } from '@/lib/i18n';

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const t = navigation[locale];
  const currentYear = new Date().getFullYear();
  const labels = {
    en: {
      navigation: 'Navigation',
      hours: 'Hours',
      legal: 'Legal',
      privacyTerms: 'Privacy & Terms',
      copyright: `© ${currentYear} L'Artisanat Gamra Bois. All rights reserved.`,
      developer: 'Made and developed by El-Guemra-BR',
      monThu: 'Mon-Thu',
      fri: 'Fri',
      sat: 'Sat'
    },
    fr: {
      navigation: 'Navigation',
      hours: 'Horaires',
      legal: 'Mentions legales',
      privacyTerms: 'Confidentialite et conditions',
      copyright: `© ${currentYear} L'Artisanat Gamra Bois. Tous droits reserves.`,
      developer: 'Concu et developpe par El-Guemra-BR',
      monThu: 'Lun-Jeu',
      fri: 'Ven',
      sat: 'Sam'
    },
    ar: {
      navigation: 'التنقل',
      hours: 'اوقات العمل',
      legal: 'قانوني',
      privacyTerms: 'الخصوصية والشروط',
      copyright: `© ${currentYear} L'Artisanat Gamra Bois. جميع الحقوق محفوظة.`,
      developer: 'تم التصميم والتطوير بواسطة El-Guemra-BR',
      monThu: 'الاثنين-الخميس',
      fri: 'الجمعة',
      sat: 'السبت'
    }
  }[locale];

  return (
    <footer className="mt-20 border-t border-bark/10 bg-gradient-to-br from-bark via-[#2b221b] to-[#1d1712] text-sand">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-sand">{brand.name}</h3>
          <p className="mt-2 text-sm text-sand/80">{brand.location}</p>
          <p className="text-sm text-sand/80">{brand.email}</p>
          <p className="text-sm text-sand/80">{brand.phone}</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-sand/70">{labels.navigation}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href={`/${locale}`}>{t.home}</Link></li>
            <li><Link href={`/${locale}/collections`}>{t.collections}</Link></li>
            <li><Link href={`/${locale}/custom-orders`}>{t.customOrders}</Link></li>
            <li><Link href={`/${locale}/gallery`}>{t.gallery}</Link></li>
            <li><Link href={`/${locale}/contact-quote`}>{t.quote}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wider text-sand/70">{labels.hours}</h4>
          <p className="mt-3 text-sm text-sand/80">{labels.monThu}: 09:00-21:00</p>
          <p className="text-sm text-sand/80">{labels.fri}: 08:30-14:00</p>
          <p className="text-sm text-sand/80">{labels.sat}: 09:00-18:00</p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-sand/15 px-4 py-4 text-sm text-sand/70 md:flex-row md:items-center md:justify-between">
        <p>{labels.copyright}</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`/${locale}/privacy-terms`} className="transition hover:text-sand">
            {labels.privacyTerms}
          </Link>
          <a href="https://el-guemra-br.github.io" target="_blank" rel="noreferrer" className="transition hover:text-sand">
            {labels.developer}
          </a>
        </div>
      </div>
    </footer>
  );
}
