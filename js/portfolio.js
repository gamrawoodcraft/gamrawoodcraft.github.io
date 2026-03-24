/**
 * Portfolio Page — gallery from data/portfolio.json, filtering, search, navigation
 */

function escHtml(s) {
    return String(s == null ? '' : s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;');
}

function galleryShortDesc(text) {
    if (!text) return '';
    var t = String(text).trim();
    var first = t.split(/[.!?؟]/)[0].trim();
    if (first && first.length <= 140) return first;
    return t.length > 100 ? t.slice(0, 100) + '…' : t;
}

function portfolioSearchBlob(item) {
    if (!item) return '';
    var parts = [
        item.id,
        item.title && item.title.ar,
        item.title && item.title.en,
        item.title && item.title.fr,
        item.description && item.description.ar,
        item.description && item.description.en,
        item.description && item.description.fr,
        item.category && item.category.ar,
        item.category && item.category.en,
        item.category && item.category.fr
    ];
    return parts.filter(Boolean).join(' ').toLowerCase();
}

function getSiteLang() {
    try {
        return localStorage.getItem('siteLang') || 'ar';
    } catch (e) {
        return 'ar';
    }
}

function renderPortfolioGallery(items, container) {
    var html = items.map(function (p, index) {
        var filter = p.filter || 'decor';
        var icon = p.icon && String(p.icon).indexOf('fa-') === 0 ? p.icon : 'fa-image';
        var delay = Math.min(index * 100, 1200);
        var descAr = p.description && p.description.ar ? p.description.ar : '';
        var shortAr = galleryShortDesc(descAr);
        var cat = p.category || { ar: '', en: '', fr: '' };
        var title = p.title || { ar: '', en: '', fr: '' };
        return (
            '<div class="portfolio-enhanced-item group relative overflow-hidden rounded-2xl cursor-pointer" data-aos="fade-up" data-aos-delay="' + delay + '" data-category="' + escHtml(filter) + '" data-id="' + escHtml(p.id) + '">' +
            '<div class="portfolio-glow-border"></div>' +
            '<span class="portfolio-category-badge" data-ar="' + escHtml(cat.ar) + '" data-en="' + escHtml(cat.en) + '" data-fr="' + escHtml(cat.fr) + '">' + escHtml(cat.ar) + '</span>' +
            '<img src="' + escHtml(p.image) + '" alt="' + escHtml(title.ar) + '" class="w-full h-72 object-cover" onerror="this.src=\'https://via.placeholder.com/400x300\'">' +
            '<div class="portfolio-enhanced-overlay">' +
            '<div class="portfolio-icon-wrapper"><i class="fas ' + escHtml(icon) + '"></i></div>' +
            '<h3 class="text-xl font-bold text-white mb-2 heading-font" data-ar="' + escHtml(title.ar) + '" data-en="' + escHtml(title.en) + '" data-fr="' + escHtml(title.fr) + '">' + escHtml(title.ar) + '</h3>' +
            '<p class="text-accent portfolio-desc" data-ar="' + escHtml(shortAr) + '" data-en="' + escHtml(galleryShortDesc((p.description && p.description.en) || '')) + '" data-fr="' + escHtml(galleryShortDesc((p.description && p.description.fr) || '')) + '">' + escHtml(shortAr) + '</p>' +
            '</div></div>'
        );
    }).join('');
    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async function () {
    var galleryEl = document.getElementById('portfolioGallery');
    var items = [];

    if (galleryEl && typeof window.loadPortfolioItems === 'function') {
        try {
            items = await window.loadPortfolioItems();
        } catch (e) {
            console.warn('Portfolio load failed:', e);
            items = (window.portfolioItems || []).map(function (p) {
                return typeof window.normalizePortfolioItem === 'function'
                    ? window.normalizePortfolioItem(Object.assign({}, p))
                    : p;
            });
        }
        if (items.length) renderPortfolioGallery(items, galleryEl);
    }

    window.__portfolioGalleryItems = items;

    var allPortfolioItems = document.querySelectorAll('.portfolio-enhanced-item');

    function openSearchModal() {
        var m = document.getElementById('searchModal');
        if (!m) return;
        m.classList.remove('hidden');
        m.classList.add('flex');
    }

    function closeSearchModalFn() {
        var m = document.getElementById('searchModal');
        if (!m) return;
        m.classList.add('hidden');
        m.classList.remove('flex');
    }

    document.querySelectorAll('.search-trigger').forEach(function (searchTrigger) {
        searchTrigger.addEventListener('click', function () {
            var navSearchInput = document.getElementById('navSearchInput');
            openSearchModal();
            setTimeout(function () { if (navSearchInput) navSearchInput.focus(); }, 100);
        });
    });

    var searchModal = document.getElementById('searchModal');
    var closeSearchModal = document.getElementById('closeSearchModal');
    var navSearchInput = document.getElementById('navSearchInput');
    var searchResults = document.getElementById('searchResults');

    if (closeSearchModal) {
        closeSearchModal.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeSearchModalFn();
        });
    }

    if (searchModal) {
        searchModal.addEventListener('click', function (e) {
            if (e.target === searchModal) closeSearchModalFn();
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
            closeSearchModalFn();
        }
    });

    function displaySearchResults(results, searchTerm) {
        if (!searchResults) return;
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-empty"><i class="fas fa-search text-3xl mb-4"></i><p data-ar="لم نجد نتائج" data-en="No results found" data-fr="Aucun résultat trouvé">لم نجد نتائج</p></div>';
            return;
        }

        var term = (searchTerm || '').toLowerCase().trim();
        results.sort(function (a, b) {
            var aTitleScore = a.title.toLowerCase().includes(term) ? 2 : 0;
            var bTitleScore = b.title.toLowerCase().includes(term) ? 2 : 0;
            return bTitleScore - aTitleScore || a.title.localeCompare(b.title);
        });

        searchResults.innerHTML = results.map(function (result) {
            var href = 'item.html?id=' + encodeURIComponent(result.id == null ? '' : String(result.id));
            return (
                '<div class="search-result-item" role="button" tabindex="0" data-nav-url="' + escHtml(href) + '">' +
                '<div class="search-result-icon"><i class="' + escHtml(result.icon) + '"></i></div>' +
                '<div class="search-result-content">' +
                '<div class="search-result-title">' + escHtml(result.title) + '</div>' +
                '<div class="search-result-desc">' + escHtml(result.desc) + '</div>' +
                '</div><div class="text-accent/50 text-sm">→</div></div>'
            );
        }).join('');

        searchResults.querySelectorAll('.search-result-item').forEach(function (row) {
            var go = function () {
                var u = row.getAttribute('data-nav-url');
                if (u) window.location.href = u;
            };
            row.addEventListener('click', go);
            row.addEventListener('keydown', function (ev) {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    go();
                }
            });
        });
    }

    function runNavSearch() {
        if (!navSearchInput) return;
        var searchTerm = navSearchInput.value.toLowerCase().trim();
        if (searchTerm === '') {
            if (searchResults) searchResults.innerHTML = '';
            return;
        }

        var lang = getSiteLang();
        var dataItems = window.__portfolioGalleryItems;
        var results = [];

        if (dataItems && dataItems.length) {
            dataItems.forEach(function (p) {
                if (portfolioSearchBlob(p).indexOf(searchTerm) === -1) return;
                var icon = p.icon && String(p.icon).indexOf('fa-') === 0 ? 'fas ' + p.icon : 'fas fa-image';
                var t = (p.title && (p.title[lang] || p.title.ar)) || '';
                var d = p.description && (p.description[lang] || p.description.ar);
                var descShort = galleryShortDesc(d || '');
                results.push({ id: p.id, title: t, desc: descShort, icon: icon });
            });
        } else {
            allPortfolioItems.forEach(function (item) {
                var title = item.querySelector('h3') ? item.querySelector('h3').textContent : '';
                var desc = item.querySelector('.portfolio-desc') ? item.querySelector('.portfolio-desc').textContent : '';
                var iconEl = item.querySelector('.portfolio-icon-wrapper i');
                var iconClass = iconEl ? iconEl.className : 'fas fa-image';
                var idAttr = item.getAttribute('data-id') || '';
                if (title.toLowerCase().indexOf(searchTerm) !== -1 || desc.toLowerCase().indexOf(searchTerm) !== -1) {
                    results.push({ title: title, desc: desc, icon: iconClass, id: idAttr });
                }
            });
        }

        displaySearchResults(results, searchTerm);
    }

    if (navSearchInput) {
        navSearchInput.addEventListener('input', runNavSearch);
    }

    document.addEventListener('languageChanged', function () {
        if (navSearchInput && navSearchInput.value.trim()) runNavSearch();
    });

    var ctaButtons = document.querySelectorAll('.hero-cta-btn[href^="#"]');
    ctaButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    var filterButtons = document.querySelectorAll('.filter-btn');
    var portfolioItems = document.querySelectorAll('.portfolio-enhanced-item');
    var noResultsMessage = document.getElementById('noResults');
    var searchInput = document.getElementById('portfolioSearch');

    var currentFilter = 'all';
    var currentSearch = '';

    function updatePortfolioDisplay() {
        var visibleCount = 0;

        portfolioItems.forEach(function (item, index) {
            var category = item.getAttribute('data-category');
            var title = item.querySelector('h3') ? item.querySelector('h3').textContent : '';
            var description = item.querySelector('.portfolio-desc') ? item.querySelector('.portfolio-desc').textContent : '';
            var searchText = currentSearch.toLowerCase();

            var categoryMatch = currentFilter === 'all' || category === currentFilter;
            var searchMatch = !searchText ||
                title.toLowerCase().includes(searchText) ||
                description.toLowerCase().includes(searchText);

            if (categoryMatch && searchMatch) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease ' + (index * 0.1) + 's both';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        if (noResultsMessage) {
            noResultsMessage.classList.toggle('hidden', visibleCount > 0);
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            currentSearch = this.value.trim();
            updatePortfolioDisplay();
        });

        searchInput.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                this.value = '';
                currentSearch = '';
                updatePortfolioDisplay();
            }
        });
    }

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            currentFilter = this.getAttribute('data-filter');

            filterButtons.forEach(function (btn) {
                btn.classList.remove('active', 'bg-accent', 'text-primary');
                btn.classList.add('bg-white/10', 'text-white');
            });

            this.classList.remove('bg-white/10', 'text-white');
            this.classList.add('active', 'bg-accent', 'text-primary');

            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
            }

            updatePortfolioDisplay();
        });
    });

    portfolioItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var itemId = this.getAttribute('data-id');
            if (itemId) window.location.href = 'item.html?id=' + itemId;
        });
        item.style.cursor = 'pointer';
    });

    var style = document.createElement('style');
    style.textContent =
        '@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }' +
        '.filter-btn, .portfolio-enhanced-item { transition: all 0.3s ease; }';
    document.head.appendChild(style);

    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }

    if ('IntersectionObserver' in window) {
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('.portfolio-enhanced-item img').forEach(function (img) {
            imageObserver.observe(img);
        });
    }

    window.searchPortfolio = function (searchTerm) {
        var term = searchTerm.toLowerCase();
        var visibleCount = 0;

        portfolioItems.forEach(function (item, index) {
            var title = item.querySelector('h3') ? item.querySelector('h3').textContent.toLowerCase() : '';
            var description = item.querySelector('.portfolio-desc') ? item.querySelector('.portfolio-desc').textContent.toLowerCase() : '';

            if (title.includes(term) || description.includes(term)) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease ' + (index * 0.1) + 's both';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        if (noResultsMessage) {
            noResultsMessage.classList.toggle('hidden', visibleCount > 0);
        }
    };

    window.getCategoryCounts = function () {
        var counts = { all: portfolioItems.length, kitchen: 0, bedroom: 0, living: 0, door: 0, decor: 0 };
        portfolioItems.forEach(function (item) {
            var category = item.getAttribute('data-category');
            if (Object.prototype.hasOwnProperty.call(counts, category)) {
                counts[category]++;
            }
        });
        return counts;
    };

    updatePortfolioDisplay();
});
