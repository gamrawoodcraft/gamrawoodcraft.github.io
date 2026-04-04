export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => {
  return locales.includes(value as Locale);
};

export const defaultLocale: Locale = 'en';

export const rtlLocales: Locale[] = ['ar'];

export type Currency = 'EUR' | 'USD' | 'MAD';

export const navigation = {
  en: {
    home: 'Home',
    collections: 'Collections',
    customOrders: 'Custom Orders',
    gallery: 'Gallery',
    about: 'About the Workshop',
    shippingFaq: 'Shipping & FAQ',
    quote: 'Request a Quote',
    whatsapp: 'Chat on WhatsApp'
  },
  fr: {
    home: 'Accueil',
    collections: 'Collections',
    customOrders: 'Commandes sur mesure',
    gallery: 'Galerie',
    about: "A propos de l atelier",
    shippingFaq: 'Livraison et FAQ',
    quote: 'Demander un devis',
    whatsapp: 'Discuter sur WhatsApp'
  },
  ar: {
    home: 'الرئيسية',
    collections: 'المجموعات',
    customOrders: 'الطلبات الخاصة',
    gallery: 'المعرض',
    about: 'عن الورشة',
    shippingFaq: 'الشحن والاسئلة الشائعة',
    quote: 'اطلب عرض سعر',
    whatsapp: 'تواصل عبر واتساب'
  }
};

export const brand = {
  name: "L'Artisanat Gamra Bois",
  phone: '+212728886642',
  whatsappNumber: '212728886642',
  email: 'gamrawoodcraft@gmail.com',
  location: 'Taroudant, Morocco'
};
