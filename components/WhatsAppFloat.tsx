import { brand } from '@/lib/i18n';

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${brand.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:scale-[1.02]"
      aria-label="Open WhatsApp chat"
    >
      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/95" />
      WhatsApp
    </a>
  );
}
