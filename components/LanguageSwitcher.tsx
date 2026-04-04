'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';

type LanguageSwitcherProps = {
  locale: Locale;
};

const labels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'AR'
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const hrefFor = (targetLocale: Locale) => {
    const segments = pathname.split('/');

    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = targetLocale;
      return segments.join('/') || `/${targetLocale}`;
    }

    return `/${targetLocale}`;
  };

  return (
    <div className="inline-flex rounded-full border border-bark/20 bg-white/80 p-1 text-xs backdrop-blur">
      {locales.map((item) => (
        <Link
          key={item}
          href={hrefFor(item)}
          className={`rounded-full px-2.5 py-1.5 font-semibold transition ${
            item === locale ? 'bg-bark text-white' : 'text-bark hover:bg-sand'
          }`}
          aria-label={`Switch language to ${item}`}
        >
          {labels[item]}
        </Link>
      ))}
    </div>
  );
}
