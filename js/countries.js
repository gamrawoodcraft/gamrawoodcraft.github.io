/**
 * Country calling codes for the contact form.
 * data/countries.json is sorted by numeric dial code; default +212 MA is applied in code.
 */
const COUNTRIES_FALLBACK = [
  { code: '+1', label: 'US/CA', name: 'United States / Canada' },
  { code: '+7', label: 'RU', name: 'Russia' },
  { code: '+20', label: 'EG', name: 'Egypt' },
  { code: '+27', label: 'ZA', name: 'South Africa' },
  { code: '+30', label: 'GR', name: 'Greece' },
  { code: '+31', label: 'NL', name: 'Netherlands' },
  { code: '+32', label: 'BE', name: 'Belgium' },
  { code: '+33', label: 'FR', name: 'France' },
  { code: '+34', label: 'ES', name: 'Spain' },
  { code: '+36', label: 'HU', name: 'Hungary' },
  { code: '+39', label: 'IT', name: 'Italy' },
  { code: '+40', label: 'RO', name: 'Romania' },
  { code: '+41', label: 'CH', name: 'Switzerland' },
  { code: '+43', label: 'AT', name: 'Austria' },
  { code: '+44', label: 'GB', name: 'United Kingdom' },
  { code: '+45', label: 'DK', name: 'Denmark' },
  { code: '+46', label: 'SE', name: 'Sweden' },
  { code: '+47', label: 'NO', name: 'Norway' },
  { code: '+48', label: 'PL', name: 'Poland' },
  { code: '+49', label: 'DE', name: 'Germany' },
  { code: '+52', label: 'MX', name: 'Mexico' },
  { code: '+54', label: 'AR', name: 'Argentina' },
  { code: '+55', label: 'BR', name: 'Brazil' },
  { code: '+61', label: 'AU', name: 'Australia' },
  { code: '+64', label: 'NZ', name: 'New Zealand' },
  { code: '+81', label: 'JP', name: 'Japan' },
  { code: '+82', label: 'KR', name: 'South Korea' },
  { code: '+86', label: 'CN', name: 'China' },
  { code: '+90', label: 'TR', name: 'Turkey' },
  { code: '+91', label: 'IN', name: 'India' },
  { code: '+212', label: 'MA', name: 'Morocco' },
  { code: '+213', label: 'DZ', name: 'Algeria' },
  { code: '+216', label: 'TN', name: 'Tunisia' },
  { code: '+218', label: 'LY', name: 'Libya' },
  { code: '+351', label: 'PT', name: 'Portugal' },
  { code: '+353', label: 'IE', name: 'Ireland' },
  { code: '+358', label: 'FI', name: 'Finland' },
  { code: '+420', label: 'CZ', name: 'Czech Republic' },
  { code: '+961', label: 'LB', name: 'Lebanon' },
  { code: '+962', label: 'JO', name: 'Jordan' },
  { code: '+965', label: 'KW', name: 'Kuwait' },
  { code: '+966', label: 'SA', name: 'Saudi Arabia' },
  { code: '+968', label: 'OM', name: 'Oman' },
  { code: '+971', label: 'AE', name: 'United Arab Emirates' },
  { code: '+973', label: 'BH', name: 'Bahrain' },
  { code: '+974', label: 'QA', name: 'Qatar' }
];

function dialCodeNumeric(code) {
  const n = parseInt(String(code).replace(/\D/g, ''), 10);
  return isNaN(n) ? 0 : n;
}

/** Sort by dial code digits; default selection +212 Morocco (MA). */
function normalizeCountries(countries) {
  const sorted = countries
    .slice()
    .sort(function (a, b) {
      return dialCodeNumeric(a.code) - dialCodeNumeric(b.code);
    })
    .map(function (c) {
      return {
        code: c.code,
        label: c.label,
        name: c.name,
        selected: String(c.code) === '+212'
      };
    });
  return sorted;
}

function populateCountrySelect(countries) {
  const select = document.getElementById('phoneCountrySelect');
  if (!select) return;
  select.replaceChildren();
  countries.forEach(function (country) {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = country.code + ' ' + country.label;
    option.dataset.name = country.name;
    if (country.selected) {
      option.selected = true;
    }
    select.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const scriptEl = document.querySelector('script[src*="countries.js"]');
  var dataUrl = 'data/countries.json';
  try {
    if (scriptEl && scriptEl.src) {
      dataUrl = new URL('../data/countries.json', scriptEl.src).href;
    }
  } catch (e) {
    /* keep default */
  }

  fetch(dataUrl)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (countries) {
      if (Array.isArray(countries) && countries.length) {
        populateCountrySelect(normalizeCountries(countries));
      } else {
        populateCountrySelect(normalizeCountries(COUNTRIES_FALLBACK));
      }
    })
    .catch(function () {
      populateCountrySelect(normalizeCountries(COUNTRIES_FALLBACK));
    });
});
