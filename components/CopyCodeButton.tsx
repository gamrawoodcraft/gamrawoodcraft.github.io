'use client';

import { useState } from 'react';

type CopyCodeButtonProps = {
  code: string;
  label: string;
  copiedLabel: string;
};

export default function CopyCodeButton({ code, label, copiedLabel }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="rounded-full border border-bark/20 bg-white/75 px-3 py-1.5 text-xs font-semibold text-bark transition hover:bg-sand"
      aria-label={`${label} ${code}`}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
