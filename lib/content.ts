import type { Locale } from '@/lib/i18n';

type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  trust: string[];
  collectionsTitle: string;
  collections: { title: string; text: string }[];
  processTitle: string;
  process: string[];
  whyTitle: string;
  why: string[];
  testimonialsTitle: string;
  testimonials: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
};

type SharedPage = {
  title: string;
  intro: string;
};

type SeoTemplates = {
  serviceParagraphs: {
    collections: string;
    customOrders: string;
    about: string;
    shippingFaq: string;
    contact: string;
  };
  galleryParagraphTemplate: (title: string, category?: string) => string;
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    heroTitle: 'Bespoke Moroccan Woodcraft for Exceptional Interiors',
    heroSubtitle:
      'From our Taroudant workshop, we craft custom furniture, carved decor, artisan doors, and statement wood pieces for clients worldwide.',
    trust: ['Handmade in Morocco', 'Custom Dimensions', 'International Shipping', 'Direct Workshop Contact'],
    collectionsTitle: 'Signature Collections',
    collections: [
      { title: 'Custom Furniture', text: 'Tailored pieces for homes, villas, and boutique hospitality spaces.' },
      { title: 'Carved Decor', text: 'Traditional Moroccan motifs elevated with premium finishing.' },
      { title: 'Artisan Doors', text: 'Statement doors balancing strength, detail, and timeless style.' },
      { title: 'Tables', text: 'Dining and accent tables built to become long-lasting centerpieces.' }
    ],
    processTitle: 'Craft Process',
    process: ['Share your idea and dimensions.', 'Align on wood type, style, and budget.', 'Handcrafted production in our workshop.', 'Protected export packaging and shipping.'],
    whyTitle: 'Why International Clients Choose Us',
    why: [
      'Authentic Moroccan craftsmanship with modern execution standards',
      'Premium material and finish quality checks at each stage',
      'Clear communication from first sketch to final delivery'
    ],
    testimonialsTitle: 'Client Voices',
    testimonials: [
      'Excellent craftsmanship and smooth communication from concept to delivery. - Client, France',
      'The carved piece arrived perfectly packed and exactly as requested. - Client, Spain'
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Do you ship internationally?', a: 'Yes. We ship internationally with protected export packaging.' },
      { q: 'Can I customize dimensions and finish?', a: 'Yes. Most projects are fully custom based on your brief.' },
      { q: 'How long does production take?', a: 'Lead times vary by complexity and quantity, usually confirmed after review.' }
    ],
    finalTitle: 'Ready to Commission Your Piece?',
    finalText: 'Send your project details and receive a tailored quote within 24-48 hours.'
  },
  fr: {
    heroTitle: 'Bois Marocain Sur Mesure pour des Interieurs d Exception',
    heroSubtitle:
      'Depuis notre atelier a Taroudant, nous realisons meubles sur mesure, decors sculptes, portes artisanales et pieces en bois pour des clients internationaux.',
    trust: ['Fabrique a la main au Maroc', 'Dimensions sur mesure', 'Livraison internationale', 'Contact direct atelier'],
    collectionsTitle: 'Collections Signature',
    collections: [
      { title: 'Mobilier sur mesure', text: 'Pieces adaptees aux maisons, villas et projets hoteliers boutique.' },
      { title: 'Decor sculpte', text: 'Motifs marocains traditionnels avec finitions haut de gamme.' },
      { title: 'Portes artisanales', text: 'Portes de caractere alliant robustesse et elegance.' },
      { title: 'Tables', text: 'Tables a manger et d appoint pensees pour durer.' }
    ],
    processTitle: 'Processus de fabrication',
    process: ['Partagez votre idee et vos dimensions.', 'Validation essence, style et budget.', 'Fabrication artisanale a l atelier.', 'Emballage protege et expedition export.'],
    whyTitle: 'Pourquoi nos clients internationaux nous choisissent',
    why: [
      'Savoir-faire marocain authentique avec standards modernes',
      'Controle qualite des materiaux et finitions a chaque etape',
      'Communication claire du croquis a la livraison'
    ],
    testimonialsTitle: 'Avis Clients',
    testimonials: [
      'Excellente qualite et communication fluide jusqu a la livraison. - Client, France',
      'Piece sculptee recu parfaitement emballee, conforme au projet. - Client, Espagne'
    ],
    faqTitle: 'FAQ',
    faq: [
      { q: 'Livrez-vous a l international ?', a: 'Oui, avec emballage securise pour export.' },
      { q: 'Puis-je personnaliser dimensions et finition ?', a: 'Oui, la plupart des commandes sont 100% sur mesure.' },
      { q: 'Quel est le delai de fabrication ?', a: 'Selon complexite et quantite, confirme apres etude.' }
    ],
    finalTitle: 'Pret a lancer votre piece sur mesure ?',
    finalText: 'Envoyez votre projet et recevez un devis personnalise sous 24-48h.'
  },
  ar: {
    heroTitle: 'نجارة مغربية فاخرة حسب الطلب لمساحات مميزة',
    heroSubtitle: 'من ورشتنا في تارودانت نصنع اثاثا مخصصا وديكورا محفورا وابوابا فنية وقطعا خشبية راقية لعملاء دوليين.',
    trust: ['صناعة يدوية في المغرب', 'تفصيل حسب المقاس', 'شحن دولي', 'تواصل مباشر مع الورشة'],
    collectionsTitle: 'المجموعات المميزة',
    collections: [
      { title: 'اثاث حسب الطلب', text: 'قطع مخصصة للمنازل والفيلات والمشاريع الفندقية الراقية.' },
      { title: 'ديكور محفور', text: 'نقوش مغربية اصيلة مع تشطيبات فاخرة.' },
      { title: 'ابواب حرفية', text: 'ابواب قوية وانيقة بتفاصيل حرفية دقيقة.' },
      { title: 'طاولات', text: 'طاولات طعام وزينة مصممة لتدوم.' }
    ],
    processTitle: 'مراحل الانجاز',
    process: ['شاركنا فكرتك والمقاسات.', 'نحدد نوع الخشب والتصميم والميزانية.', 'تصنيع يدوي داخل الورشة.', 'تغليف محكم وشحن دولي امن.'],
    whyTitle: 'لماذا يختارنا العملاء الدوليون',
    why: [
      'حرفية مغربية اصيلة بمعايير تنفيذ حديثة',
      'فحص جودة المواد والتشطيب في كل مرحلة',
      'تواصل واضح من الفكرة حتى التسليم'
    ],
    testimonialsTitle: 'اراء العملاء',
    testimonials: [
      'جودة ممتازة وتواصل احترافي حتى التسليم. - عميل من فرنسا',
      'القطعة وصلت بتغليف ممتاز ومطابقة للطلب. - عميل من اسبانيا'
    ],
    faqTitle: 'الاسئلة الشائعة',
    faq: [
      { q: 'هل توفرون الشحن الدولي؟', a: 'نعم، نوفر شحنا دوليا مع تغليف تصدير محكم.' },
      { q: 'هل يمكن تخصيص المقاسات والتشطيب؟', a: 'نعم، اغلب المشاريع تنفذ حسب الطلب بالكامل.' },
      { q: 'ما مدة التصنيع؟', a: 'تعتمد على تعقيد الطلب والكمية ويتم تاكيدها بعد المراجعة.' }
    ],
    finalTitle: 'جاهز لتنفيذ قطعتك الخاصة؟',
    finalText: 'ارسل تفاصيل مشروعك واحصل على عرض سعر مخصص خلال 24-48 ساعة.'
  }
};

export const pageContent: Record<Locale, Record<string, SharedPage>> = {
  en: {
    collections: {
      title: 'Collections',
      intro: 'Explore handcrafted categories: custom furniture, carved decor, doors, tables, and artisan wood pieces.'
    },
    customOrders: {
      title: 'Custom Orders',
      intro: 'Share your concept and we guide you through design, material selection, timeline, and delivery.'
    },
    gallery: {
      title: 'Gallery',
      intro: 'A curated selection of recent handcrafted projects from our workshop.'
    },
    about: {
      title: 'About the Workshop',
      intro: 'L Artisanat Gamra Bois is rooted in Taroudant traditions and committed to premium custom workmanship.'
    },
    shippingFaq: {
      title: 'International Shipping and FAQ',
      intro: 'Everything you need to know about lead times, packaging, customs, and support.'
    },
    contact: {
      title: 'Contact and Quote Request',
      intro: 'Tell us what you need. We respond within 24-48 hours.'
    }
  },
  fr: {
    collections: {
      title: 'Collections',
      intro: 'Explorez nos categories artisanales: mobilier sur mesure, decor sculpte, portes et tables.'
    },
    customOrders: {
      title: 'Commandes sur mesure',
      intro: 'Partagez votre projet et nous vous accompagnons du design a la livraison.'
    },
    gallery: {
      title: 'Galerie',
      intro: 'Une selection de projets recents realises a la main dans notre atelier.'
    },
    about: {
      title: 'A propos de l atelier',
      intro: 'L Artisanat Gamra Bois valorise heritage marocain et execution premium.'
    },
    shippingFaq: {
      title: 'Livraison internationale et FAQ',
      intro: 'Informations sur delais, emballage, douane et accompagnement client.'
    },
    contact: {
      title: 'Contact et demande de devis',
      intro: 'Partagez vos besoins. Reponse sous 24-48h.'
    }
  },
  ar: {
    collections: {
      title: 'المجموعات',
      intro: 'استكشف فئاتنا الحرفية: اثاث مخصص وديكور محفور وابواب وطاولات خشبية.'
    },
    customOrders: {
      title: 'الطلبات الخاصة',
      intro: 'شاركنا فكرتك وسنرافقك من التصميم حتى التسليم.'
    },
    gallery: {
      title: 'المعرض',
      intro: 'مختارات من اعمالنا اليدوية الحديثة داخل الورشة.'
    },
    about: {
      title: 'عن الورشة',
      intro: 'ورشة لارتيسانات غمرة بوا تجمع بين الاصالة المغربية والجودة الفاخرة.'
    },
    shippingFaq: {
      title: 'الشحن الدولي والاسئلة الشائعة',
      intro: 'كل ما تحتاج معرفته عن المدة والتغليف والجمارك والمتابعة.'
    },
    contact: {
      title: 'التواصل وطلب عرض سعر',
      intro: 'شاركنا تفاصيل مشروعك وسنرد خلال 24-48 ساعة.'
    }
  }
};

export const seoTemplates: Record<Locale, SeoTemplates> = {
  en: {
    serviceParagraphs: {
      collections:
        'Our Moroccan woodworking collections include handmade carved furniture, artisan decor, and bespoke statement pieces crafted in Taroudant for international interiors.',
      customOrders:
        'For custom wood furniture in Morocco, we plan each order around your dimensions, style direction, wood selection, and finish requirements before production begins.',
      about:
        'As a Moroccan artisan workshop, we focus on hand-finished woodcraft quality, transparent communication, and reliable export preparation for global clients.',
      shippingFaq:
        'We provide international shipping support for handcrafted Moroccan wood furniture, including secure export packaging and destination guidance before dispatch.',
      contact:
        'Send your custom woodworking request with dimensions, references, and destination to receive a tailored quote from our Moroccan workshop team.'
    },
    galleryParagraphTemplate: (title: string, category?: string) =>
      `${title} is a handmade Moroccan woodworking piece produced in our Taroudant workshop${category ? ` under ${category}` : ''}, with custom sizing and finishing available for international delivery.`
  },
  fr: {
    serviceParagraphs: {
      collections:
        'Nos collections de menuiserie marocaine regroupent mobilier sculpte fait main, decor artisanal et pieces sur mesure fabriquees a Taroudant pour des interieurs internationaux.',
      customOrders:
        'Pour un meuble en bois sur mesure au Maroc, nous definissons chaque commande selon vos dimensions, style, essence de bois et niveau de finition avant lancement.',
      about:
        'Notre atelier artisanal marocain privilegie la qualite du travail manuel, la communication claire et une preparation export fiable pour les clients internationaux.',
      shippingFaq:
        'Nous proposons un accompagnement en livraison internationale pour mobilier artisanal marocain, avec emballage export securise et orientation selon la destination.',
      contact:
        'Envoyez votre demande de menuiserie sur mesure avec dimensions, references et pays de destination pour recevoir un devis personnalise de notre atelier.'
    },
    galleryParagraphTemplate: (title: string, category?: string) =>
      `${title} est une piece de menuiserie marocaine realisee a la main dans notre atelier de Taroudant${category ? ` dans la categorie ${category}` : ''}, avec options de dimensions et finition sur mesure pour l international.`
  },
  ar: {
    serviceParagraphs: {
      collections:
        'تشمل مجموعات النجارة المغربية لدينا اثاثا محفورا يدويا وديكورا حرفيا وقطعا مخصصة يتم تصنيعها في تارودانت لتناسب المساحات الراقية حول العالم.',
      customOrders:
        'في طلبات الاثاث الخشبي حسب المقاس بالمغرب نحدد المقاسات والستايل ونوع الخشب والتشطيب المطلوب قبل بدء التصنيع داخل الورشة.',
      about:
        'تركز ورشتنا الحرفية المغربية على جودة التشطيب اليدوي والتواصل الواضح وتجهيز التصدير بشكل موثوق للعملاء الدوليين.',
      shippingFaq:
        'نوفر دعما للشحن الدولي لمنتجات الخشب المغربي المصنوعة يدويا مع تغليف تصدير محكم وارشادات حسب بلد الوجهة قبل الارسال.',
      contact:
        'ارسل طلبك للنجارة حسب الطلب مع المقاسات والصور المرجعية وبلد الشحن لتحصل على عرض سعر مخصص من فريق الورشة.'
    },
    galleryParagraphTemplate: (title: string, category?: string) =>
      `${title} قطعة نجارة مغربية مصنوعة يدويا في ورشتنا بتارودانت${category ? ` ضمن فئة ${category}` : ''}، مع امكانية التخصيص في المقاسات والتشطيب والشحن الدولي.`
  }
};
