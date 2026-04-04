import Link from 'next/link';
import { navigation, type Locale } from '@/lib/i18n';

type MobileActionBarProps = {
  locale: Locale;
};

export default function MobileActionBar({ locale }: MobileActionBarProps) {
  const t = navigation[locale];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bark/10 bg-sand/90 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl">
        <Link
          href={`/${locale}/contact-quote`}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-bark px-4 py-2 text-sm font-semibold text-sand"
        >
          {t.quote}
        </Link>
      </div>
    </div>
  );
}
