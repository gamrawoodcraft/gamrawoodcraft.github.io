// Portfolio JS - Handle portfolio display and filtering
let portfolioData = [];

// Load portfolio data
async function loadPortfolio() {
  try {
    const response = await fetch('/data/portfolio.json');
    portfolioData = await response.json();
    displayPortfolio();
    initFilters();
  } catch (error) {
    console.error('Error loading portfolio:', error);
  }
}

// Display portfolio items
function displayPortfolio(filtered = null) {
  const grid = document.querySelector('.portfolio-grid');
  if (!grid) return;

  const items = filtered || portfolioData;
  grid.innerHTML = '';

  items.forEach(item => {
    const lang = window.i18n?.getLanguage?.() || 'en';
    const description = item[`description_${lang}`] || item.description_en;
    const categoryLabel = item.category ? item.category.replace(/_/g, ' ') : 'Project';
    const thumbMarkup = item.image
      ? `<img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: var(--spacing-md);">`
      : `
      <div class="portfolio-thumb" aria-hidden="true">
        <span class="portfolio-thumb-label">${categoryLabel}</span>
        <strong class="portfolio-thumb-title">${item.title}</strong>
      </div>`;

    const card = document.createElement('div');
    card.className = 'card portfolio-card';
    card.dataset.category = item.category;
    card.innerHTML = `
      ${thumbMarkup}
      <h3 class="card-title">${item.title}</h3>
      <p class="card-description">${description}</p>
      <a href="/item.html?id=${item.id}" class="btn btn-primary" style="display: inline-block; margin-top: var(--spacing-md); width: 100%; text-align: center;">
        ${window.i18n?.t?.('View Project') || 'View Project'}
      </a>
    `;
    grid.appendChild(card);
  });

  window.i18n?.updatePageLanguage?.();
}

// Filter portfolio
function initFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      if (filter === 'all') {
        displayPortfolio();
      } else {
        const filtered = portfolioData.filter(item => item.category === filter);
        displayPortfolio(filtered);
      }
    });
  });
}

// Get single portfolio item
function getPortfolioItem(id) {
  return portfolioData.find(item => item.id === parseInt(id));
}

// Display single item detail page
function displayPortfolioDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const item = getPortfolioItem(id);

  if (!item) {
    document.body.innerHTML = '<div class="container"><h1 data-i18n="notFound">Page not found</h1></div>';
    return;
  }

  const lang = window.i18n?.getLanguage?.() || 'en';
  const description = item[`description_${lang}`] || item.description_en;
  const detailImageMarkup = item.image
    ? `<img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy">`
    : `
      <div class="item-image item-image-placeholder" aria-hidden="true">
        <span class="portfolio-thumb-label">${item.category}</span>
        <strong class="portfolio-thumb-title">${item.title}</strong>
      </div>`;

  const detailContainer = document.querySelector('.item-detail');
  if (detailContainer) {
    detailContainer.innerHTML = `
      <div class="item-gallery">
        ${detailImageMarkup}
      </div>
      <div class="item-info">
        <h1>${item.title}</h1>
        <p class="item-description">${description}</p>
        <div class="item-specs">
          <h3>Specifications</h3>
          <p><strong>Materials:</strong> ${item.materials}</p>
          <p><strong>Dimensions:</strong> ${item.specs}</p>
        </div>
        <button class="btn btn-primary" onclick="document.location.href='/#contact'">${window.i18n?.t?.('contact.submit') || 'Request a Quote'}</button>
      </div>
    `;
  }

  window.i18n?.updatePageLanguage?.();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.portfolio-grid')) {
    loadPortfolio();
  }
  if (document.querySelector('.item-detail')) {
    loadPortfolio().then(() => displayPortfolioDetail());
  }
});
