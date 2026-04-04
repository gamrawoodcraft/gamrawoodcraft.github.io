'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ItemImageViewerProps = {
  src: string;
  alt: string;
};

export default function ItemImageViewer({ src, alt }: ItemImageViewerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" className="group relative block h-full w-full cursor-zoom-in text-left" onClick={() => setOpen(true)}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition duration-500 group-hover:scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-sand backdrop-blur">
          Zoom
        </span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setOpen(false)}>
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Close
            </button>
            <div className="relative h-[70vh] w-full">
              <Image src={src} alt={alt} fill sizes="100vw" className="object-contain" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}