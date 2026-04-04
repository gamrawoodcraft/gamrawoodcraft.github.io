'use client';

import { useMemo, useState } from 'react';

type ItemShareMenuProps = {
  title: string;
  url: string;
  locale: 'en' | 'fr' | 'ar';
};

const labels = {
  en: {
    share: 'Share',
    copied: 'Copied',
    copyLink: 'Copy link',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    x: 'X'
  },
  fr: {
    share: 'Partager',
    copied: 'Copie',
    copyLink: 'Copier le lien',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    x: 'X'
  },
  ar: {
    share: 'مشاركة',
    copied: 'تم النسخ',
    copyLink: 'نسخ الرابط',
    whatsapp: 'واتساب',
    facebook: 'فيسبوك',
    x: 'إكس'
  }
} as const;

export default function ItemShareMenu({ title, url, locale }: ItemShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = labels[locale];

  const encodedUrl = useMemo(() => encodeURIComponent(url), [url]);
  const encodedTitle = useMemo(() => encodeURIComponent(title), [title]);

  const close = () => setOpen(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-bark/20 bg-white/75 px-4 py-2.5 text-sm font-semibold text-bark transition hover:bg-sand"
      >
        {t.share}
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-20 mt-3 w-52 overflow-hidden rounded-2xl border border-bark/10 bg-white shadow-soft">
          <button type="button" onClick={copyLink} className="block w-full px-4 py-3 text-left text-sm font-medium text-bark transition hover:bg-sand">
            {copied ? t.copied : t.copyLink}
          </button>
          <a href={`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`} target="_blank" rel="noreferrer" onClick={close} className="block px-4 py-3 text-sm font-medium text-bark transition hover:bg-sand">
            {t.whatsapp}
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`} target="_blank" rel="noreferrer" onClick={close} className="block px-4 py-3 text-sm font-medium text-bark transition hover:bg-sand">
            {t.facebook}
          </a>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n${url}`)}`} target="_blank" rel="noreferrer" onClick={close} className="block px-4 py-3 text-sm font-medium text-bark transition hover:bg-sand">
            {t.x}
          </a>
        </div>
      ) : null}
    </div>
  );
}