'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CurrencyToggle from '@/components/CurrencyToggle';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { brand, navigation, type Locale } from '@/lib/i18n';

type HeaderProps = {
  locale: Locale;
};

export default function Header({ locale }: HeaderProps) {
  const t = navigation[locale];
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const base = `/${locale}`;
  const drawerSideClass = locale === 'ar' ? 'left-0' : 'right-0';

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (!pathname) {
      return false;
    }

    if (href === base) {
      return pathname === href;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinkClass = (href: string) =>
    [
      'rounded-md px-2 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50',
      isActive(href) ? 'bg-bark/10 font-semibold text-clay' : 'hover:text-clay'
    ].join(' ');

  const mobileLinkClass = (href: string) =>
    [
      'rounded-xl border px-3 py-2 text-sm transition',
      isActive(href)
        ? 'border-clay/35 bg-clay/15 font-semibold text-clay'
        : 'border-bark/15 bg-white/80 text-bark hover:bg-sand'
    ].join(' ');

  const quoteHref = `${base}/contact-quote`;
  const whatsappHref = `https://wa.me/${brand.whatsappNumber}`;

  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-sand/75 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link prefetch href={`/${locale}`} className="inline-flex items-center gap-3 rounded-xl px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50">
            <span className="font-display text-2xl text-bark md:text-3xl">Gamra Bois</span>
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-4 text-sm text-bark lg:flex">
            <Link prefetch href={`/${locale}`} aria-current={isActive(base) ? 'page' : undefined} className={desktopLinkClass(base)}>{t.home}</Link>
            <Link prefetch href={`/${locale}/collections`} aria-current={isActive(`${base}/collections`) ? 'page' : undefined} className={desktopLinkClass(`${base}/collections`)}>{t.collections}</Link>
            <Link prefetch href={`/${locale}/custom-orders`} aria-current={isActive(`${base}/custom-orders`) ? 'page' : undefined} className={desktopLinkClass(`${base}/custom-orders`)}>{t.customOrders}</Link>
            <Link prefetch href={`/${locale}/gallery`} aria-current={isActive(`${base}/gallery`) ? 'page' : undefined} className={desktopLinkClass(`${base}/gallery`)}>{t.gallery}</Link>
            <Link prefetch href={`/${locale}/about-workshop`} aria-current={isActive(`${base}/about-workshop`) ? 'page' : undefined} className={desktopLinkClass(`${base}/about-workshop`)}>{t.about}</Link>
            <Link prefetch href={`/${locale}/shipping-faq`} aria-current={isActive(`${base}/shipping-faq`) ? 'page' : undefined} className={desktopLinkClass(`${base}/shipping-faq`)}>{t.shippingFaq}</Link>
            <Link
              prefetch
              href={quoteHref}
              aria-current={isActive(quoteHref) ? 'page' : undefined}
              className={[
                'rounded-full px-4 py-2 transition',
                isActive(quoteHref)
                  ? 'bg-clay text-sand shadow-[0_0_0_2px_rgba(123,76,44,0.25)]'
                  : 'bg-bark text-sand hover:bg-clay'
              ].join(' ')}
            >
              {t.quote}
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#1da851] bg-[#25D366] px-4 py-2 font-semibold text-white transition hover:brightness-95"
            >
              {t.whatsapp}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-bark/20 bg-white/80 text-bark transition hover:bg-sand lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="text-base font-semibold">{mobileMenuOpen ? 'X' : '≡'}</span>
            </button>
            <div className="hidden items-center gap-2 lg:flex">
              <LanguageSwitcher locale={locale} />
              <CurrencyToggle />
            </div>
          </div>
        </div>

      </div>

      <div
        className={[
          'fixed inset-0 z-50 bg-black/35 transition-opacity duration-300 lg:hidden',
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        ].join(' ')}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-nav-panel"
        className={[
          'fixed top-0 z-[60] h-screen w-[84vw] max-w-sm border-bark/10 bg-sand/95 p-4 shadow-2xl backdrop-blur-xl transition-transform duration-300 lg:hidden',
          drawerSideClass,
          mobileMenuOpen
            ? 'translate-x-0'
            : locale === 'ar'
              ? '-translate-x-full'
              : 'translate-x-full'
        ].join(' ')}
        aria-label="Primary Mobile"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-2xl text-bark">Menu</p>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-bark/20 bg-white text-bark"
            aria-label="Close menu"
          >
            X
          </button>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <CurrencyToggle />
        </div>

        <nav className="grid gap-2">
          <Link prefetch href={`/${locale}`} aria-current={isActive(base) ? 'page' : undefined} className={mobileLinkClass(base)}>{t.home}</Link>
          <Link prefetch href={`/${locale}/collections`} aria-current={isActive(`${base}/collections`) ? 'page' : undefined} className={mobileLinkClass(`${base}/collections`)}>{t.collections}</Link>
          <Link prefetch href={`/${locale}/custom-orders`} aria-current={isActive(`${base}/custom-orders`) ? 'page' : undefined} className={mobileLinkClass(`${base}/custom-orders`)}>{t.customOrders}</Link>
          <Link prefetch href={`/${locale}/gallery`} aria-current={isActive(`${base}/gallery`) ? 'page' : undefined} className={mobileLinkClass(`${base}/gallery`)}>{t.gallery}</Link>
          <Link prefetch href={`/${locale}/about-workshop`} aria-current={isActive(`${base}/about-workshop`) ? 'page' : undefined} className={mobileLinkClass(`${base}/about-workshop`)}>{t.about}</Link>
          <Link prefetch href={`/${locale}/shipping-faq`} aria-current={isActive(`${base}/shipping-faq`) ? 'page' : undefined} className={mobileLinkClass(`${base}/shipping-faq`)}>{t.shippingFaq}</Link>
        </nav>

        <div className="mt-4 grid grid-cols-1 gap-2">
          <Link
            prefetch
            href={quoteHref}
            aria-current={isActive(quoteHref) ? 'page' : undefined}
            className={[
              'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition',
              isActive(quoteHref)
                ? 'bg-clay text-sand shadow-[0_0_0_2px_rgba(123,76,44,0.25)]'
                : 'bg-bark text-sand hover:bg-clay'
            ].join(' ')}
          >
            {t.quote}
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[#1da851] bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            {t.whatsapp}
          </a>
        </div>
      </aside>
    </header>
  );
}
