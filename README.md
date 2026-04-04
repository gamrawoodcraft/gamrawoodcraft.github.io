# L Artisanat Gamra Bois Website

Premium multilingual website (EN/FR/AR) for a Moroccan handcrafted woodworking business.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- API route with Zod validation for quote form

## Quick Start
1. Install dependencies:
   npm install
2. Start development server:
   npm run dev
3. Open browser:
   http://localhost:3000

## Routes
- /en, /fr, /ar
- /[locale]/collections
- /[locale]/custom-orders
- /[locale]/gallery
- /[locale]/about-workshop
- /[locale]/shipping-faq
- /[locale]/contact-quote

## Business Details
- Name: L Artisanat Gamra Bois
- WhatsApp: +212728886642
- Email: gamrawoodcraft@gmail.com
- Location: Taroudant, Morocco

## Notes
- Update metadataBase in app/layout.tsx with your final domain.
- Portfolio auto-update: add images to public/portfolio and they appear automatically in /[locale]/gallery.
- Optional portfolio metadata: edit public/portfolio/metadata.json for custom title/category/price/country/featured/order.
- Connect /api/quote to your email CRM or WhatsApp workflow.
