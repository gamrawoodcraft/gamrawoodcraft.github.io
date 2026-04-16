// i18n System for Gamra Wood Craft
let currentLanguage = localStorage.getItem('language') || 'en';
let translations = {};

function syncDocumentLanguage() {
  const html = document.documentElement;
  if (currentLanguage === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', currentLanguage);
  }
}

syncDocumentLanguage();

// Load all language files
async function loadLanguages() {
  try {
    const languages = ['en', 'fr', 'ar'];
    for (const lang of languages) {
      const response = await fetch(`/locales/${lang}.json`);
      translations[lang] = await response.json();
    }
  } catch (error) {
    console.error('Error loading language files:', error);
  }
}

// Get translated string
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

// Set language and update DOM
function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  localStorage.setItem('language', lang);
  updatePageLanguage();
  applyRTL();
}

// Get current language
function getLanguage() {
  return currentLanguage;
}

// Update page language - replace all data-i18n attributes
function updatePageLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = t(key);
  });

  document.querySelectorAll('[data-i18n-value]').forEach(element => {
    const key = element.getAttribute('data-i18n-value');
    element.value = t(key);
  });
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
// Apply RTL if needed
function applyRTL() {
  const html = document.documentElement;
  if (currentLanguage === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    document.body.classList.add('rtl');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', currentLanguage);
    document.body.classList.remove('rtl');
  }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', async () => {
  await loadLanguages();
  applyRTL();
  updatePageLanguage();
  document.documentElement.classList.add('i18n-ready');
});

// Make functions globally available
window.i18n = {
  t,
  setLanguage,
  getLanguage,
  loadLanguages,
  updatePageLanguage
};
