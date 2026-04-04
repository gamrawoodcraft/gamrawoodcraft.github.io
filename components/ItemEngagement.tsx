'use client';

import { useEffect, useMemo, useState } from 'react';

type ItemEngagementProps = {
  itemKey: string;
  locale: 'en' | 'fr' | 'ar';
};

const labels = {
  en: { favorite: 'Favorite', favorited: 'Saved', views: 'Views' },
  fr: { favorite: 'Favori', favorited: 'Enregistre', views: 'Vues' },
  ar: { favorite: 'مفضلة', favorited: 'تم الحفظ', views: 'مشاهدات' }
} as const;

function HeartIcon({ filled }: { filled: boolean }) {
  return filled ? (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.13 14.24 4 11.39 4 8.5 4 6.6 5.6 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.4 5 20 6.6 20 8.5c0 2.89-3.13 5.74-7.9 10.05z" />
    </svg>
  );
}

export default function ItemEngagement({ itemKey, locale }: ItemEngagementProps) {
  const t = labels[locale];
  const [favorite, setFavorite] = useState(false);
  const [views, setViews] = useState(0);

  const favoriteStorageKey = useMemo(() => `favorite-${itemKey}`, [itemKey]);
  const viewStorageKey = useMemo(() => `views-${itemKey}`, [itemKey]);

  useEffect(() => {
    try {
      setFavorite(localStorage.getItem(favoriteStorageKey) === 'true');

      const currentViews = Number(localStorage.getItem(viewStorageKey) || '0');
      const nextViews = currentViews + 1;
      localStorage.setItem(viewStorageKey, String(nextViews));
      setViews(nextViews);
    } catch {
      setViews(0);
    }
  }, [favoriteStorageKey, viewStorageKey]);

  const toggleFavorite = () => {
    try {
      const next = !favorite;
      localStorage.setItem(favoriteStorageKey, String(next));
      setFavorite(next);
    } catch {
      setFavorite((value) => !value);
    }
  };

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={toggleFavorite}
        className={[
          'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition',
          favorite ? 'border-clay/30 bg-clay/15 text-clay' : 'border-bark/20 bg-white/75 text-bark hover:bg-sand'
        ].join(' ')}
      >
        <HeartIcon filled={favorite} />
        <span>{favorite ? t.favorited : t.favorite}</span>
      </button>

      <div className="inline-flex items-center gap-2 rounded-full border border-bark/20 bg-white/75 px-4 py-2.5 text-sm font-semibold text-bark">
        <span className="inline-block h-2 w-2 rounded-full bg-clay" />
        <span>{views}</span>
        <span>{t.views}</span>
      </div>
    </div>
  );
}