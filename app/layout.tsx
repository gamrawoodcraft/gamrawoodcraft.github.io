import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Naskh_Arabic, Work_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const display = Cormorant_Garamond({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display'
});

const sans = Work_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans'
});

const arabic = Noto_Naskh_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-arabic'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gamrabois.com'),
  title: 'Moroccan Handmade Wood Furniture | L Artisanat Gamra Bois',
  description:
    'Premium handcrafted Moroccan woodworking from Taroudant. Custom furniture, carved decor, artisan doors, and international shipping.',
  openGraph: {
    title: 'L Artisanat Gamra Bois',
    description:
      'Bespoke Moroccan woodworking crafted by hand for international interiors.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${arabic.variable}`}>
      <body className="font-sans">
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script
              id="ga-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
