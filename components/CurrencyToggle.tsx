'use client';

import { useState } from 'react';
import type { Currency } from '@/lib/i18n';

export default function CurrencyToggle() {
  const [currency, setCurrency] = useState<Currency>('EUR');

  return (
    <div className="inline-flex rounded-full border border-bark/20 bg-white/80 p-1 text-sm backdrop-blur">
      {(['EUR', 'USD', 'MAD'] as Currency[]).map((option) => (
        <button
          key={option}
          onClick={() => setCurrency(option)}
          className={`rounded-full px-3 py-1.5 transition ${
            currency === option ? 'bg-bark text-white' : 'text-bark hover:bg-sand'
          }`}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
