/**
 * ==========================================
 * GAMRA WOOD CRAFT - Trilingual Support
 * Arabic, English, French
 * ==========================================
 */

// Translations object
const translations = {
    ar: {
        // Navbar
        'nav_home': 'الرئيسية',
        'nav_craft': 'حرفتنا',
        'nav_portfolio': 'أعمالنا',
        'nav_testimonials': 'آراء العملاء',
        'nav_contact': 'اتصل بنا',
        'nav_whatsapp': 'WhatsApp',
        
        // Hero Section
        'hero_title_1': 'فن',
        'hero_title_2': 'النجارة..',
        'hero_title_3': 'تراث',
        'hero_title_4': 'يتجدد',
        'hero_title_5': 'بين',
        'hero_title_6': 'يديكم',
        'hero_subtitle_1': 'نُحوّل أحلامك إلى تحف فنية ..',
        'hero_subtitle_2': 'تصاميم عصرية بالهوية المغربية الأصيلة',
        'hero_cta_1': 'اكتشف أعمالنا',
        'hero_cta_2': 'احجز استشارة',
        
        // Stats
        'stat_years': 'سنوات خبرة',
        'stat_projects': 'مشروع منجز',
        'stat_clients': 'عميل سعيد',
        
        // Scroll
        'scroll_down': 'اسحب للأسفل',
        
        // Process Section
        'process_title': 'حرفتنا في ثلاث خطوات',
        'process_subtitle': 'نتبع منهجية دقيقة لضمان جودة كل قطعة.. من الفكرة حتى التسليم',
        'process_how': 'كيف نعمل',
        'process_step1_title': 'التصميم',
        'process_step1_desc': 'نجلس معك لفهم رؤيتك.. ثم نرسم تصاميم ثلاثية الأبعاد حتى توافق ذوقك تماماً',
        'process_step2_title': 'اختيار الخشب',
        'process_step2_desc': 'نختار أجود أنواع الأخشاب.. الأرز، الكركاع والبلوط من مصادر موثوقة',
        'process_step3_title': 'التشطيب',
        'process_step3_desc': 'دهانات طبيعية وتذهيب.. تشطيب احترافي يعطي القطعة عمراً طويلاً',
        
        // Portfolio Section
        'portfolio_title': 'معرض إبداعاتنا',
        'portfolio_subtitle': 'تشكيلة متنوعة.. من المطابخ الفاخرة لغرف النوم وغرف المعيشة',
        'portfolio_featured': 'أعمالنا المميزة',
        'portfolio_view_more': 'عرض المزيد',
        'portfolio_view_details': 'عرض التفاصيل',
        
        // Testimonials Section
        'testimonials_title': 'ما يقوله عملاؤنا',
        'testimonials_share': 'شارك تجربتك معنا',
        'testimonials_subtitle': 'رأيك يهمنا.. اترك تقييماً وتعليقاً',
        'testimonials_add': 'أضف تقييمك',
        'testimonials_close': 'إغلاق',
        
        // Testimonial Form
        'form_name': 'اسمك:',
        'form_name_placeholder': 'ادخل اسمك',
        'form_location': 'المدينة/المنطقة:',
        'form_location_placeholder': 'مدينتك (اختياري)',
        'form_comment': 'تعليقك:',
        'form_comment_placeholder': 'شارك تجربتك معنا وأخبرنا عن رأيك...',
        'form_rating_hint': 'اضغط على النجمة لتحديد التقييم',
        'form_submit': 'إرسال التقييم',
        
        // Contact Section
        'contact_title': 'تواصل معنا',
        'contact_subtitle': 'جاهزون لتحويل فكرتك إلى حقيقة... راسلنا أو اتصل بنا',
        'contact_love': 'أحب أن أسمع منك',
        'contact_project_info': 'معلومات المشروع',
        'contact_fill_data': 'يرجى ملء البيانات التالية',
        'contact_name': 'الاسم الكامل:',
        'contact_name_placeholder': 'ادخل اسمك الكامل',
        'contact_phone': 'رقم الهاتف:',
        'contact_phone_placeholder': '+212 6XXXXXXXX',
        'contact_email': 'البريد الإلكتروني:',
        'contact_email_placeholder': 'example@email.com',
        'contact_project_type': 'نوع المشروع:',
        'contact_message': 'تفاصيل المشروع:',
        'contact_message_placeholder': 'صف فكرتك أو مشروعك بالتفصيل...',
        'contact_submit': 'إرسال الرسالة',
        
        // Project Types
        'project_bedroom': 'غرفة نوم',
        'project_doors': 'ابواب',
        'project_office': 'مكتب',
        'project_decor': 'ديكور مخصص',
        'project_other': 'أخرى',
        
        // Footer
        'footer_quick_links': 'روابط سريعة',
        'footer_contact_info': 'تواصل معنا',
        'footer_phone': 'الهاتف',
        'footer_whatsapp': 'واتسآب',
        'footer_email': 'البريد',
        'footer_work_hours': 'أوقات العمل',
        'footer_morning': '8h00 - 19h00',
        'footer_friday': '9h00 - 14h00',
        'footer_saturday': '9h00 - 16h00',
        'footer_all_rights': 'جميع الحقوق محفوظة',
        'footer_developed': 'من تطوير',
        'footer_privacy': 'سياسة الخصوصية',
        'footer_terms': 'الشروط والأحكام',
        
        // Days
        'day_sunday': 'الأحد',
        'day_monday': 'الإثنين',
        'day_tuesday': 'الثلاثاء',
        'day_wednesday': 'الأربعاء',
        'day_thursday': 'الخميس',
        'day_friday': 'الجمعة',
        'day_saturday': 'السبت',
        
        // Status
        'status_open': 'مفتوح الآن',
        'status_closed': 'مغلق حالياً',
        
        // Loader
        'loader_text': 'جاري تحضير الورشة...',
        
        // Filter
        'filter_all': 'الكل',
        'filter_kitchen': 'مطابخ',
        'filter_bedroom': 'غرف نوم',
        'filter_living': 'صالات',
        'filter_door': 'أبواب',
        'filter_decor': 'ديكور',
        
        // Portfolio Page
        'portfolio_hero_title': 'أعمالنا المميزة',
        'portfolio_hero_subtitle': 'تشكيلة متنوعة من التصاميم الفاخرة التي تجمع بين الأصالة والمعاصرة',
        'portfolio_no_results': 'لا توجد نتائج',
        'portfolio_no_results_desc': 'لم يتم العثور على عناصر في هذه الفئة',
        'portfolio_back_home': 'العودة للرئيسية',
        
        // Menu
        'menu_title': 'القائمة',
        
        // Contact Info Labels
        'contact_phone_label': 'Phone',
        'contact_whatsapp_label': 'WhatsApp',
        'contact_email_label': 'e-mail',
        'contact_location_label': 'Location',
        'contact_instant': 'تواصل فوري',
        'contact_location': 'Morocco, Tarodant, Mhaita',
        
        // Messages
        'msg_name_required': 'الرجاء إدخال اسم صحيح (لا يقل عن حرفين)',
        'msg_email_invalid': 'الرجاء إدخال بريد إلكتروني صحيح',
        'msg_phone_invalid': 'الرجاء إدخال رقم هاتف صحيح',
        'msg_message_required': 'الرجاء إدخال تفاصيل المشروع',
        'msg_success': 'تم بنجاح!',
        'msg_error': 'خطأ!',
        'msg_warning': 'تنبيه!',
        'msg_sending': 'جاري الإرسال...',
        'msg_limit_reached': 'وصلت للحد الأقصى',
        'msg_rating_required': 'الرجاء اختيار تقييم',
        'msg_comment_short': 'التعليق يجب أن يكون 10 أحرف',
        'msg_thanks': 'شكراً لك!',
        'msg_sent_success': 'تم إرسال رسالتك بنجاح',
        'msg_testimonial_success': 'تم إرسال تقييمك بنجاح',
        
        // Online Status
        'checking_status': 'جاري التحقق...'
    },
    
    en: {
        // Navbar
        'nav_home': 'Home',
        'nav_craft': 'Our Craft',
        'nav_portfolio': 'Portfolio',
        'nav_testimonials': 'Testimonials',
        'nav_contact': 'Contact',
        'nav_whatsapp': 'WhatsApp',
        
        // Hero Section
        'hero_title_1': 'The Art',
        'hero_title_2': 'of Woodworking..',
        'hero_title_3': 'Heritage',
        'hero_title_4': 'Reimagined',
        'hero_title_5': 'Between',
        'hero_title_6': 'Your Hands',
        'hero_subtitle_1': 'We turn your dreams into artistic masterpieces..',
        'hero_subtitle_2': 'Modern designs with authentic Moroccan heritage',
        'hero_cta_1': 'View Our Work',
        'hero_cta_2': 'Book Consultation',
        
        // Stats
        'stat_years': 'Years Experience',
        'stat_projects': 'Projects Completed',
        'stat_clients': 'Happy Clients',
        
        // Scroll
        'scroll_down': 'Scroll Down',
        
        // Process Section
        'process_title': 'Our Craft in Three Steps',
        'process_subtitle': 'We follow a precise methodology to ensure quality of every piece.. From idea to delivery',
        'process_how': 'How We Work',
        'process_step1_title': 'Design',
        'process_step1_desc': 'We sit with you to understand your vision.. Then create 3D designs that match your taste perfectly',
        'process_step2_title': 'Wood Selection',
        'process_step2_desc': 'We select the finest woods.. Cedar, Oak and Walnut from trusted sources',
        'process_step3_title': 'Finishing',
        'process_step3_desc': 'Natural paints and gilding.. Professional finishing that gives the piece long life',
        
        // Portfolio Section
        'portfolio_title': 'Our Creations Gallery',
        'portfolio_subtitle': 'A diverse collection.. From luxury kitchens to bedrooms and living rooms',
        'portfolio_featured': 'Featured Works',
        'portfolio_view_more': 'View More',
        'portfolio_view_details': 'View Details',
        
        // Testimonials Section
        'testimonials_title': 'What Our Clients Say',
        'testimonials_share': 'Share Your Experience',
        'testimonials_subtitle': 'Your opinion matters.. Leave a review and comment',
        'testimonials_add': 'Add Review',
        'testimonials_close': 'Close',
        
        // Testimonial Form
        'form_name': 'Your Name:',
        'form_name_placeholder': 'Enter your name',
        'form_location': 'City/Region:',
        'form_location_placeholder': 'Your city (optional)',
        'form_comment': 'Your Comment:',
        'form_comment_placeholder': 'Share your experience with us...',
        'form_rating_hint': 'Click on the star to rate',
        'form_submit': 'Submit Review',
        
        // Contact Section
        'contact_title': 'Contact Us',
        'contact_subtitle': 'Ready to turn your idea into reality... Message or call us',
        'contact_love': 'I\'d love to hear from you',
        'contact_project_info': 'Project Information',
        'contact_fill_data': 'Please fill in the following details',
        'contact_name': 'Full Name:',
        'contact_name_placeholder': 'Enter your full name',
        'contact_phone': 'Phone Number:',
        'contact_phone_placeholder': '+212 6XXXXXXXX',
        'contact_email': 'Email:',
        'contact_email_placeholder': 'example@email.com',
        'contact_project_type': 'Project Type:',
        'contact_message': 'Project Details:',
        'contact_message_placeholder': 'Describe your idea or project in detail...',
        'contact_submit': 'Send Message',
        
        // Project Types
        'project_bedroom': 'Bedroom',
        'project_doors': 'Doors',
        'project_office': 'Office',
        'project_decor': 'Custom Decor',
        'project_other': 'Other',
        
        // Footer
        'footer_quick_links': 'Quick Links',
        'footer_contact_info': 'Contact Us',
        'footer_phone': 'Phone',
        'footer_whatsapp': 'WhatsApp',
        'footer_email': 'Email',
        'footer_work_hours': 'Working Hours',
        'footer_morning': '8h00 - 19h00',
        'footer_friday': '9h00 - 14h00',
        'footer_saturday': '9h00 - 16h00',
        'footer_all_rights': 'All Rights Reserved',
        'footer_developed': 'Developed by',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms & Conditions',
        
        // Days
        'day_sunday': 'Sunday',
        'day_monday': 'Monday',
        'day_tuesday': 'Tuesday',
        'day_wednesday': 'Wednesday',
        'day_thursday': 'Thursday',
        'day_friday': 'Friday',
        'day_saturday': 'Saturday',
        
        // Status
        'status_open': 'Open Now',
        'status_closed': 'Closed Now',
        
        // Loader
        'loader_text': 'Preparing the workshop...',
        
        // Filter
        'filter_all': 'All',
        'filter_kitchen': 'Kitchens',
        'filter_bedroom': 'Bedrooms',
        'filter_living': 'Living Rooms',
        'filter_door': 'Doors',
        'filter_decor': 'Decor',
        
        // Portfolio Page
        'portfolio_hero_title': 'Our Featured Works',
        'portfolio_hero_subtitle': 'A diverse collection of luxury designs combining authenticity and modernity',
        'portfolio_no_results': 'No Results Found',
        'portfolio_no_results_desc': 'No items found in this category',
        'portfolio_back_home': 'Back to Home',
        
        // Menu
        'menu_title': 'Menu',
        
        // Contact Info Labels
        'contact_phone_label': 'Phone',
        'contact_whatsapp_label': 'WhatsApp',
        'contact_email_label': 'Email',
        'contact_location_label': 'Location',
        'contact_instant': 'Instant Message',
        'contact_location': 'Morocco, Taroudant, Mhaïta',
        
        // Messages
        'msg_name_required': 'Please enter a valid name (at least 2 characters)',
        'msg_email_invalid': 'Please enter a valid email address',
        'msg_phone_invalid': 'Please enter a valid phone number',
        'msg_message_required': 'Please enter project details',
        'msg_success': 'Success!',
        'msg_error': 'Error!',
        'msg_warning': 'Warning!',
        'msg_sending': 'Sending...',
        'msg_limit_reached': 'Limit reached',
        'msg_rating_required': 'Please select a rating',
        'msg_comment_short': 'Comment must be at least 10 characters',
        'msg_thanks': 'Thank You!',
        'msg_sent_success': 'Your message has been sent successfully',
        'msg_testimonial_success': 'Your review has been submitted successfully',
        
        // Online Status
        'checking_status': 'Checking...'
    },
    
    fr: {
        // Navbar
        'nav_home': 'Accueil',
        'nav_craft': 'Notre métier',
        'nav_portfolio': 'Réalisations',
        'nav_testimonials': 'Témoignages',
        'nav_contact': 'Contactez-nous',
        'nav_whatsapp': 'WhatsApp',
        
        // Hero Section
        'hero_title_1': 'L\'art',
        'hero_title_2': 'de la menuiserie..',
        'hero_title_3': 'Patrimoine',
        'hero_title_4': 'Réinventé',
        'hero_title_5': 'Entre',
        'hero_title_6': 'vos mains',
        'hero_subtitle_1': 'Nous transformons vos rêves en chefs-d\'œuvre artistiques..',
        'hero_subtitle_2': 'Designs modernes avec l\'authenticité du patrimoine marocain',
        'hero_cta_1': 'Voir nos réalisations',
        'hero_cta_2': 'Réserver une consultation',
        
        // Stats
        'stat_years': 'Années d\'expérience',
        'stat_projects': 'Projets réalisés',
        'stat_clients': 'Clients satisfaits',
        
        // Scroll
        'scroll_down': 'Défiler vers le bas',
        
        // Process Section
        'process_title': 'Notre métier en trois étapes',
        'process_subtitle': 'Nous suivons une méthodologie précise pour garantir la qualité de chaque pièce.. De l\'idée à la livraison',
        'process_how': 'Comment nous travaillons',
        'process_step1_title': 'Conception',
        'process_step1_desc': 'Nous discutons avec vous pour comprendre votre vision.. Puis créons des designs 3D qui correspondent parfaitement à vos goûts',
        'process_step2_title': 'Sélection du bois',
        'process_step2_desc': 'Nous sélectionnons les meilleurs bois.. Cèdre, Chêne et Noyer来自 des sources fiables',
        'process_step3_title': 'Finition',
        'process_step3_desc': 'Peintures naturelles et dorure.. Finition professionnelle qui confère à la pièce une longue durée de vie',
        
        // Portfolio Section
        'portfolio_title': 'Galerie de nos créations',
        'portfolio_subtitle': 'Une collection diverse.. Des cuisines de luxe aux chambres et salons',
        'portfolio_featured': 'Réalisations en vedette',
        'portfolio_view_more': 'Voir plus',
        'portfolio_view_details': 'Voir les détails',
        
        // Testimonials Section
        'testimonials_title': 'Ce que disent nos clients',
        'testimonials_share': 'Partagez votre expérience',
        'testimonials_subtitle': 'Votre opinion nous intéresse.. Laissez un avis et un commentaire',
        'testimonials_add': 'Ajouter un avis',
        'testimonials_close': 'Fermer',
        
        // Testimonial Form
        'form_name': 'Votre nom:',
        'form_name_placeholder': 'Entrez votre nom',
        'form_location': 'Ville/Région:',
        'form_location_placeholder': 'Votre ville (optionnel)',
        'form_comment': 'Votre commentaire:',
        'form_comment_placeholder': 'Partagez votre expérience avec nous...',
        'form_rating_hint': 'Cliquez sur l\'étoile pour noter',
        'form_submit': 'Envoyer l\'avis',
        
        // Contact Section
        'contact_title': 'Contactez-nous',
        'contact_subtitle': 'Prêts à transformer votre idée en réalité... Envoyez-nous un message ou appelez-nous',
        'contact_love': 'J\'adorerais avoir de vos nouvelles',
        'contact_project_info': 'Informations du projet',
        'contact_fill_data': 'Veuillez remplir les détails suivants',
        'contact_name': 'Nom complet:',
        'contact_name_placeholder': 'Entrez votre nom complet',
        'contact_phone': 'Numéro de téléphone:',
        'contact_phone_placeholder': '+212 6XXXXXXXX',
        'contact_email': 'Adresse e-mail:',
        'contact_email_placeholder': 'exemple@email.com',
        'contact_project_type': 'Type de projet:',
        'contact_message': 'Détails du projet:',
        'contact_message_placeholder': 'Décrivez votre idée ou projet en détail...',
        'contact_submit': 'Envoyer le message',
        
        // Project Types
        'project_bedroom': 'Chambre à coucher',
        'project_doors': 'Portes',
        'project_office': 'Bureau',
        'project_decor': 'Décor sur mesure',
        'project_other': 'Autre',
        
        // Footer
        'footer_quick_links': 'Liens rapides',
        'footer_contact_info': 'Contactez-nous',
        'footer_phone': 'Téléphone',
        'footer_whatsapp': 'WhatsApp',
        'footer_email': 'E-mail',
        'footer_work_hours': 'Heures de travail',
        'footer_morning': '8h00 - 19h00',
        'footer_friday': '9h00 - 14h00',
        'footer_saturday': '9h00 - 16h00',
        'footer_all_rights': 'Tous droits réservés',
        'footer_developed': 'Développé par',
        'footer_privacy': 'Politique de confidentialité',
        'footer_terms': 'Termes et conditions',
        
        // Days
        'day_sunday': 'Dimanche',
        'day_monday': 'Lundi',
        'day_tuesday': 'Mardi',
        'day_wednesday': 'Mercredi',
        'day_thursday': 'Jeudi',
        'day_friday': 'Vendredi',
        'day_saturday': 'Samedi',
        
        // Status
        'status_open': 'Ouvert',
        'status_closed': 'Fermé',
        
        // Loader
        'loader_text': 'Préparation de l\'atelier...',
        
        // Filter
        'filter_all': 'Tout',
        'filter_kitchen': 'Cuisines',
        'filter_bedroom': 'Chambres',
        'filter_living': 'Salons',
        'filter_door': 'Portes',
        'filter_decor': 'Décor',
        
        // Portfolio Page
        'portfolio_hero_title': 'Nos réalisations en vedette',
        'portfolio_hero_subtitle': 'Une collection diverse de designs de luxe combinant authenticité et modernité',
        'portfolio_no_results': 'Aucun résultat',
        'portfolio_no_results_desc': 'Aucun élément trouvé dans cette catégorie',
        'portfolio_back_home': 'Retour à l\'accueil',
        
        // Menu
        'menu_title': 'Menu',
        
        // Contact Info Labels
        'contact_phone_label': 'Téléphone',
        'contact_whatsapp_label': 'WhatsApp',
        'contact_email_label': 'E-mail',
        'contact_location_label': 'Localisation',
        'contact_instant': 'Message instantané',
        'contact_location': 'Maroc, Taroudant, Mhaïta',
        
        // Messages
        'msg_name_required': 'Veuillez entrer un nom valide (au moins 2 caractères)',
        'msg_email_invalid': 'Veuillez entrer une adresse e-mail valide',
        'msg_phone_invalid': 'Veuillez entrer un numéro de téléphone valide',
        'msg_message_required': 'Veuillez entrer les détails du projet',
        'msg_success': 'Succès!',
        'msg_error': 'Erreur!',
        'msg_warning': 'Attention!',
        'msg_sending': 'Envoi en cours...',
        'msg_limit_reached': 'Limite atteinte',
        'msg_rating_required': 'Veuillez sélectionner une note',
        'msg_comment_short': 'Le commentaire doit comporter au moins 10 caractères',
        'msg_thanks': 'Merci!',
        'msg_sent_success': 'Votre message a été envoyé avec succès',
        'msg_testimonial_success': 'Votre avis a été soumis avec succès',
        
        // Online Status
        'checking_status': 'Vérification...'
    }
};

// Current language
let currentLang = localStorage.getItem('siteLang') || 'ar';

/**
 * Set language and update all content
 * @param {string} lang - Language code (ar, en, fr)
 */
window.setLanguage = function setLanguage(lang) {
    if (!translations[lang]) {
        console.error('Language not supported:', lang);
        return;
    }
    
    currentLang = lang;
    
    // Update direction based on language
    const isRTL = lang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update page title
    const titleEl = document.querySelector('title');
    if (titleEl) {
        const titleText = titleEl.getAttribute('data-' + lang);
        if (titleText) document.title = titleText;
    }
    
    // Update all translatable elements with data attributes
    updateDataTranslations(lang);
    
    // Update all translatable elements with data-i18n attribute
    updateI18nTranslations(lang);
    
    // Update language buttons
    updateLanguageButtons(lang);
    
    // Save preference
    localStorage.setItem('siteLang', lang);
    
    // Dispatch custom event for other scripts
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Update elements with data-ar, data-en, data-fr attributes
 */
function updateDataTranslations(lang) {
    // Update all elements that have data-ar/en/fr attributes
    // Only update leaf-level elements (no translatable children) to avoid destroying icons/nested HTML
    const allElements = document.querySelectorAll('[data-ar], [data-en], [data-fr]');
    allElements.forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) {
            // Skip if this element contains child elements that also have translation attributes
            const hasTranslatableChildren = el.querySelectorAll('[data-ar], [data-en], [data-fr]').length > 0;
            if (!hasTranslatableChildren) {
                // For option elements, update text content directly
                if (el.tagName === 'OPTION') {
                    el.textContent = text;
                } else {
                    el.textContent = text;
                }
            }
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-placeholder-ar], [data-placeholder-en], [data-placeholder-fr]');
    placeholders.forEach(el => {
        const placeholder = el.getAttribute('data-placeholder-' + lang);
        if (placeholder) {
            el.placeholder = placeholder;
        }
    });
    
    // Update titles
    const titles = document.querySelectorAll('[data-title-ar], [data-title-en], [data-title-fr]');
    titles.forEach(el => {
        const title = el.getAttribute('data-title-' + lang);
        if (title) {
            el.title = title;
        }
    });
}

/**
 * Update elements with data-i18n attribute using translations object
 */
function updateI18nTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

/**
 * Update language toggle buttons
 */
function updateLanguageButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-accent', 'active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('text-accent', 'active');
        }
    });
}

/**
 * Get translation by key
 */
function t(key) {
    return translations[currentLang][key] || key;
}

/**
 * Get current language
 */
function getCurrentLang() {
    return currentLang;
}

// Initialize language immediately (script runs after DOM is parsed since it's at bottom of body)
// Also handle the case where DOMContentLoaded hasn't fired yet (e.g., script in <head>)
function initLanguage() {
    const savedLang = localStorage.getItem('siteLang');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('ar'); // Default to Arabic
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    // DOM already ready (script loaded at bottom of body)
    initLanguage();
}

// Export functions for global use (backup)
// These are already assigned in the function definitions above
window.t = t;
window.getCurrentLang = getCurrentLang;
window.translations = translations;

