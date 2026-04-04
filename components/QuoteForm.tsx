'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzblzep';

type QuoteFormProps = {
  locale: 'en' | 'fr' | 'ar';
  initialProductCode?: string;
  initialProductTitle?: string;
};

type FieldKey =
  | 'name'
  | 'email'
  | 'whatsapp'
  | 'country'
  | 'productType'
  | 'dimensions'
  | 'budget'
  | 'timeline'
  | 'currency'
  | 'message'
  | 'consent';

const labels = {
  en: {
    submit: 'Send Quote Request',
    sending: 'Sending...',
    success: 'Your request was sent successfully. We will contact you soon.',
    error: 'Unable to send your request right now. Please try again.',
    fields: {
      name: 'Name',
      email: 'Email',
      whatsapp: 'WhatsApp (+212...)',
      country: 'Country',
      productType: 'Product type',
      productCode: 'Product code',
      productTitle: 'Product name',
      dimensions: 'Dimensions (L x W x H)',
      woodType: 'Wood type preference',
      budgetRange: 'Budget range',
      timeline: 'Timeline',
      currency: 'Preferred currency',
      message: 'Tell us about your project',
      files: 'Reference files',
      consent: 'I agree to be contacted regarding my quote request.'
    },
    helper: {
      required: 'Required',
      dimensions: 'Example: 200 x 90 x 75 cm',
      files: 'Optional: upload reference images or PDF (max 10MB each)',
      consent: 'Please accept this before submitting.'
    },
    validation: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email.',
      whatsapp: 'Please enter your WhatsApp number.',
      country: 'Please enter your country.',
      productType: 'Please choose product type.',
      dimensions: 'Please provide dimensions.',
      budget: 'Please select a budget range.',
      timeline: 'Please select a timeline.',
      currency: 'Please select a preferred currency.',
      message: 'Please provide more project details (at least 30 characters).',
      consent: 'Please accept consent to proceed.'
    },
    budgetOptions: ['Under 500', '500 - 1,500', '1,500 - 5,000', '5,000+'],
    timelineOptions: ['Less than 1 month', '1 to 2 months', '2 to 3 months', 'Flexible']
  },
  fr: {
    submit: 'Envoyer la demande de devis',
    sending: 'Envoi en cours...',
    success: 'Votre demande a ete envoyee. Nous vous contacterons rapidement.',
    error: 'Impossible denvoyer votre demande pour le moment.',
    fields: {
      name: 'Nom',
      email: 'Email',
      whatsapp: 'WhatsApp (+212...)',
      country: 'Pays',
      productType: 'Type de produit',
      productCode: 'Code produit',
      productTitle: 'Nom du produit',
      dimensions: 'Dimensions (L x l x H)',
      woodType: 'Preference de bois',
      budgetRange: 'Fourchette budgetaire',
      timeline: 'Delai',
      currency: 'Devise preferee',
      message: 'Parlez-nous de votre projet',
      files: 'Fichiers de reference',
      consent: 'J accepte d etre contacte concernant ma demande de devis.'
    },
    helper: {
      required: 'Obligatoire',
      dimensions: 'Exemple: 200 x 90 x 75 cm',
      files: 'Optionnel: ajoutez des images de reference ou un PDF (10MB max par fichier)',
      consent: 'Veuillez accepter avant denvoyer.'
    },
    validation: {
      name: 'Veuillez saisir votre nom.',
      email: 'Veuillez saisir un email valide.',
      whatsapp: 'Veuillez saisir votre numero WhatsApp.',
      country: 'Veuillez saisir votre pays.',
      productType: 'Veuillez choisir un type de produit.',
      dimensions: 'Veuillez indiquer les dimensions.',
      budget: 'Veuillez selectionner une fourchette budgetaire.',
      timeline: 'Veuillez selectionner un delai.',
      currency: 'Veuillez selectionner une devise.',
      message: 'Veuillez decrire votre projet (au moins 30 caracteres).',
      consent: 'Veuillez accepter le consentement pour continuer.'
    },
    budgetOptions: ['Moins de 500', '500 - 1,500', '1,500 - 5,000', '5,000+'],
    timelineOptions: ['Moins dun mois', '1 a 2 mois', '2 a 3 mois', 'Flexible']
  },
  ar: {
    submit: 'ارسال طلب عرض السعر',
    sending: 'جار الارسال...',
    success: 'تم ارسال طلبك بنجاح. سنتواصل معك قريبا.',
    error: 'تعذر ارسال الطلب حاليا. يرجى المحاولة لاحقا.',
    fields: {
      name: 'الاسم',
      email: 'البريد الالكتروني',
      whatsapp: 'واتساب (+212...)',
      country: 'الدولة',
      productType: 'نوع المنتج',
      productCode: 'رمز المنتج',
      productTitle: 'اسم المنتج',
      dimensions: 'المقاسات (الطول x العرض x الارتفاع)',
      woodType: 'نوع الخشب المفضل',
      budgetRange: 'نطاق الميزانية',
      timeline: 'الجدول الزمني',
      currency: 'العملة المفضلة',
      message: 'اخبرنا عن مشروعك',
      files: 'ملفات مرجعية',
      consent: 'اوافق على التواصل معي بخصوص طلب عرض السعر.'
    },
    helper: {
      required: 'مطلوب',
      dimensions: 'مثال: 200 × 90 × 75 سم',
      files: 'اختياري: ارفق صورا مرجعية او ملف PDF (حتى 10MB لكل ملف)',
      consent: 'يرجى الموافقة قبل الارسال.'
    },
    validation: {
      name: 'يرجى ادخال الاسم.',
      email: 'يرجى ادخال بريد الكتروني صحيح.',
      whatsapp: 'يرجى ادخال رقم واتساب.',
      country: 'يرجى ادخال الدولة.',
      productType: 'يرجى اختيار نوع المنتج.',
      dimensions: 'يرجى ادخال المقاسات.',
      budget: 'يرجى اختيار نطاق الميزانية.',
      timeline: 'يرجى اختيار الجدول الزمني.',
      currency: 'يرجى اختيار العملة المفضلة.',
      message: 'يرجى شرح تفاصيل المشروع (30 حرفا على الاقل).',
      consent: 'يرجى الموافقة على شرط التواصل للمتابعة.'
    },
    budgetOptions: ['اقل من 500', '500 - 1,500', '1,500 - 5,000', '5,000+'],
    timelineOptions: ['اقل من شهر', 'من 1 الى 2 شهر', 'من 2 الى 3 اشهر', 'مرن']
  }
};

export default function QuoteForm({ locale, initialProductCode, initialProductTitle }: QuoteFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const t = labels[locale];

  const validateForm = (formData: FormData) => {
    const nextErrors: Partial<Record<FieldKey, string>> = {};

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const whatsapp = String(formData.get('whatsapp') || '').trim();
    const country = String(formData.get('country') || '').trim();
    const productType = String(formData.get('productType') || '').trim();
    const dimensions = String(formData.get('dimensions') || '').trim();
    const budget = String(formData.get('budget') || '').trim();
    const timeline = String(formData.get('timeline') || '').trim();
    const currency = String(formData.get('currency') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const consent = formData.get('consent');

    if (name.length < 2) nextErrors.name = t.validation.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = t.validation.email;
    if (whatsapp.length < 8) nextErrors.whatsapp = t.validation.whatsapp;
    if (country.length < 2) nextErrors.country = t.validation.country;
    if (!productType) nextErrors.productType = t.validation.productType;
    if (dimensions.length < 3) nextErrors.dimensions = t.validation.dimensions;
    if (!budget) nextErrors.budget = t.validation.budget;
    if (!timeline) nextErrors.timeline = t.validation.timeline;
    if (!currency) nextErrors.currency = t.validation.currency;
    if (message.length < 30) nextErrors.message = t.validation.message;
    if (!consent) nextErrors.consent = t.validation.consent;

    return nextErrors;
  };

  const onFieldChange = (field: FieldKey) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setLoading(false);
      setStatus('error');
      return;
    }

    setErrors({});
    formData.append('_subject', 'New Quote Request - Gamra Bois');
    formData.append('locale', locale);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="luxury-ring grid gap-4 rounded-3xl border border-bark/10 bg-white/75 p-6 shadow-soft md:p-8">
      <div className="mb-2">
        <h2 className="font-display text-3xl text-bark">{t.submit}</h2>
        <p className="text-sm text-bark/65">{t.helper.required} *</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-bark">{t.fields.name} *</label>
          <input id="name" name="name" required minLength={2} maxLength={80} onChange={() => onFieldChange('name')} aria-invalid={Boolean(errors.name)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          {errors.name ? <p className="text-xs text-red-700">{errors.name}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-bark">{t.fields.email} *</label>
          <input id="email" name="email" type="email" required onChange={() => onFieldChange('email')} aria-invalid={Boolean(errors.email)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          {errors.email ? <p className="text-xs text-red-700">{errors.email}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="whatsapp" className="text-sm font-medium text-bark">{t.fields.whatsapp} *</label>
          <input id="whatsapp" name="whatsapp" required onChange={() => onFieldChange('whatsapp')} aria-invalid={Boolean(errors.whatsapp)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          {errors.whatsapp ? <p className="text-xs text-red-700">{errors.whatsapp}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="country" className="text-sm font-medium text-bark">{t.fields.country} *</label>
          <input id="country" name="country" required onChange={() => onFieldChange('country')} aria-invalid={Boolean(errors.country)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          {errors.country ? <p className="text-xs text-red-700">{errors.country}</p> : null}
        </div>
        {initialProductCode ? (
          <div className="space-y-1 md:col-span-2">
            <label htmlFor="productCode" className="text-sm font-medium text-bark">{t.fields.productCode}</label>
            <input
              id="productCode"
              name="productCode"
              value={initialProductCode}
              readOnly
              className="w-full rounded-xl border border-bark/20 bg-sand/70 px-4 py-3 font-semibold text-bark"
            />
          </div>
        ) : null}

        {initialProductTitle ? (
          <div className="space-y-1 md:col-span-2">
            <label htmlFor="productTitle" className="text-sm font-medium text-bark">{t.fields.productTitle}</label>
            <input
              id="productTitle"
              name="productTitle"
              value={initialProductTitle}
              readOnly
              className="w-full rounded-xl border border-bark/20 bg-sand/70 px-4 py-3 text-bark"
            />
          </div>
        ) : null}

        <div className="space-y-1">
          <label htmlFor="productType" className="text-sm font-medium text-bark">{t.fields.productType} *</label>
          <input id="productType" name="productType" required onChange={() => onFieldChange('productType')} aria-invalid={Boolean(errors.productType)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          {errors.productType ? <p className="text-xs text-red-700">{errors.productType}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="dimensions" className="text-sm font-medium text-bark">{t.fields.dimensions} *</label>
          <input id="dimensions" name="dimensions" required onChange={() => onFieldChange('dimensions')} aria-invalid={Boolean(errors.dimensions)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
          <p className="text-xs text-bark/60">{t.helper.dimensions}</p>
          {errors.dimensions ? <p className="text-xs text-red-700">{errors.dimensions}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="woodType" className="text-sm font-medium text-bark">{t.fields.woodType}</label>
          <input id="woodType" name="woodType" className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20" />
        </div>
        <div className="space-y-1">
          <label htmlFor="budget" className="text-sm font-medium text-bark">{t.fields.budgetRange} *</label>
          <select id="budget" name="budget" required onChange={() => onFieldChange('budget')} aria-invalid={Boolean(errors.budget)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20">
          <option value="">{t.fields.budgetRange}</option>
          {t.budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
          {errors.budget ? <p className="text-xs text-red-700">{errors.budget}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="timeline" className="text-sm font-medium text-bark">{t.fields.timeline} *</label>
          <select id="timeline" name="timeline" required onChange={() => onFieldChange('timeline')} aria-invalid={Boolean(errors.timeline)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20">
          <option value="">{t.fields.timeline}</option>
          {t.timelineOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
          {errors.timeline ? <p className="text-xs text-red-700">{errors.timeline}</p> : null}
        </div>
        <div className="space-y-1">
          <label htmlFor="currency" className="text-sm font-medium text-bark">{t.fields.currency} *</label>
          <select id="currency" name="currency" required onChange={() => onFieldChange('currency')} aria-invalid={Boolean(errors.currency)} className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20">
          <option value="">{t.fields.currency}</option>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="MAD">MAD</option>
        </select>
          {errors.currency ? <p className="text-xs text-red-700">{errors.currency}</p> : null}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-bark">{t.fields.message} *</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={30}
          maxLength={1500}
          onChange={() => onFieldChange('message')}
          aria-invalid={Boolean(errors.message)}
          className="min-h-32 w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 outline-none transition focus:border-clay/50 focus:ring-2 focus:ring-clay/20"
        />
        {errors.message ? <p className="text-xs text-red-700">{errors.message}</p> : null}
      </div>

      <div className="space-y-1">
        <label htmlFor="files" className="text-sm font-medium text-bark">{t.fields.files}</label>
        <input id="files" name="files" type="file" multiple accept="image/*,.pdf" className="w-full rounded-xl border border-bark/15 bg-white/80 px-4 py-3 text-sm" />
        <p className="text-xs text-bark/60">{t.helper.files}</p>
      </div>

      <label className="flex items-start gap-2 text-sm text-bark/80">
        <input name="consent" type="checkbox" required className="mt-1" onChange={() => onFieldChange('consent')} />
        {t.fields.consent}
      </label>
      {errors.consent ? <p className="-mt-2 text-xs text-red-700">{t.helper.consent}</p> : null}

      <button
        disabled={loading}
        className="rounded-full bg-bark px-6 py-3 font-semibold text-sand transition hover:-translate-y-0.5 hover:bg-clay disabled:opacity-70"
        type="submit"
      >
        {loading ? t.sending : t.submit}
      </button>

      {status === 'success' && <p className="rounded-xl border border-olive/30 bg-olive/10 px-3 py-2 text-sm text-olive">{t.success}</p>}
      {status === 'error' && <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{t.error}</p>}
    </form>
  );
}
