/**
 * Portfolio Page - Filtering and Interactions
 * Handles portfolio gallery filtering and item click navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== Search Modal Functionality =====
    const searchModal = document.getElementById('searchModal');
    const closeSearchModal = document.getElementById('closeSearchModal');
    const navSearchInput = document.getElementById('navSearchInput');
    const searchResults = document.getElementById('searchResults');
    const allPortfolioItems = document.querySelectorAll('.portfolio-enhanced-item');

    document.querySelectorAll('.search-trigger').forEach(searchTrigger => {
        searchTrigger.addEventListener('click', function() {
            searchModal.classList.remove('hidden');
            setTimeout(() => navSearchInput?.focus(), 100);
        });
    });


    // Close search modal - Fixed with proper event delegation
    if (closeSearchModal) {
        closeSearchModal.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            searchModal.classList.add('hidden');
        });
    }

    // Close modal when clicking outside (on the overlay)
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === searchModal) {
                searchModal.classList.add('hidden');
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
            searchModal.classList.add('hidden');
        }
    });

    // Search functionality
    if (navSearchInput) {
        navSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                searchResults.innerHTML = '';
                return;
            }

            const results = [];
            allPortfolioItems.forEach(item => {
                // Respect current filter - only search visible items
                if (item.style.display === 'none') return;

                const title = item.querySelector('h3')?.textContent || '';
                const desc = item.querySelector('.portfolio-desc')?.textContent || '';
                const category = item.getAttribute('data-category');
                const icon = item.querySelector('.portfolio-icon-wrapper i')?.className || 'fas fa-image';

                if (title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm)) {
                    results.push({
                        title: title,
                        desc: desc,
                        category: category,
                        icon: icon,
                        element: item
                    });
                }
            });

            // Sort by relevance: title > desc
            results.sort((a, b) => {
                const aScore = a.title.toLowerCase().includes(searchTerm) ? 2 : 1;
                const bScore = b.title.toLowerCase().includes(searchTerm) ? 2 : 1;
                return bScore - aScore || a.title.localeCompare(b.title);
            });

            displaySearchResults(results);
        });
    }

    function displaySearchResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-empty"><i class="fas fa-search text-3xl mb-4"></i><p data-ar="لم نجد نتائج" data-en="No results found" data-fr="Aucun résultat trouvé">لم نجد نتائج</p></div>';
            return;
        }

        // Sort results by relevance: title matches first
        results.sort((a, b) => {
            const searchTerm = navSearchInput.value.toLowerCase().trim();
            const aTitleScore = a.title.toLowerCase().includes(searchTerm) ? 2 : 0;
            const bTitleScore = b.title.toLowerCase().includes(searchTerm) ? 2 : 0;
            return bTitleScore - aTitleScore || a.title.localeCompare(b.title);
        });

        searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="window.location.href = 'item.html?id=${result.element.getAttribute('data-id')}'">
                <div class="search-result-icon">
                    <i class="${result.icon}"></i>
                </div>
                <div class="search-result-content">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-desc">${result.desc}</div>
                </div>
                <div class="text-accent/50 text-sm">→</div>
            </div>
        `).join('');
    }

    // ===== Smooth Scroll for CTA Buttons =====
    const ctaButtons = document.querySelectorAll('.hero-cta-btn[href^="#"]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // DOM Elements
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-enhanced-item');
    const noResultsMessage = document.getElementById('noResults');
    const searchInput = document.getElementById('portfolioSearch');
    
    // Current filter state
    let currentFilter = 'all';
    let currentSearch = '';

    // ===== Portfolio Filtering & Search =====
    /**
     * Filter and search portfolio items
     * Combines category filtering with text search
     */
    function updatePortfolioDisplay() {
        let visibleCount = 0;
        
        portfolioItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            const title = item.querySelector('h3')?.textContent || '';
            const description = item.querySelector('.portfolio-desc')?.textContent || '';
            const searchText = currentSearch.toLowerCase();
            
            // Check category match
            const categoryMatch = currentFilter === 'all' || category === currentFilter;
            
            // Check search match (search in title and description)
            const searchMatch = !searchText || 
                                title.toLowerCase().includes(searchText) || 
                                description.toLowerCase().includes(searchText);
            
            if (categoryMatch && searchMatch) {
                item.style.display = 'block';
                item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (noResultsMessage) {
            noResultsMessage.classList.toggle('hidden', visibleCount > 0);
        }
    }

    // ===== Search Input Handler =====
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.trim();
            updatePortfolioDisplay();
        });
        
        // Clear search on Escape key
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                this.value = '';
                currentSearch = '';
                updatePortfolioDisplay();
            }
        });
    }

    // Filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentFilter = this.getAttribute('data-filter');
            
            // Update button states
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-accent', 'text-primary');
                btn.classList.add('bg-white/10', 'text-white');
            });
            
            this.classList.remove('bg-white/10', 'text-white');
            this.classList.add('active', 'bg-accent', 'text-primary');
            
            // Clear search input when changing filter
            if (searchInput) {
                searchInput.value = '';
                currentSearch = '';
            }
            
            updatePortfolioDisplay();
        });
    });

    // ===== Portfolio Item Click Navigation =====
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            if (itemId) {
                window.location.href = 'item.html?id=' + itemId;
            }
        });
        
        // Cursor pointer for indication
        item.style.cursor = 'pointer';
    });

    // ===== Inject Animation Styles =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .filter-btn, .portfolio-enhanced-item {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);

    // ===== Initialize AOS =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic'
        });
    }

    // ===== Lazy Loading Images =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        });

        const portfolioImages = document.querySelectorAll('.portfolio-enhanced-item img');
        portfolioImages.forEach(img => imageObserver.observe(img));
    }

    // ===== Expose Utility Functions =====
    /**
     * Search portfolio items by title/description
     * @param {string} searchTerm - The search query
     */
    window.searchPortfolio = function(searchTerm) {
        const term = searchTerm.toLowerCase();
        let visibleCount = 0;
        
        portfolioItems.forEach((item, index) => {
            const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
            const description = item.querySelector('.portfolio-desc')?.textContent.toLowerCase() || '';
            
            if (title.includes(term) || description.includes(term)) {
                item.style.display = 'block';
                item.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (noResultsMessage) {
            noResultsMessage.classList.toggle('hidden', visibleCount > 0);
        }
    };

    /**
     * Get count of items per category
     * @returns {Object} Category counts
     */
    window.getCategoryCounts = function() {
        const counts = { all: portfolioItems.length, kitchen: 0, bedroom: 0, living: 0, door: 0, decor: 0 };
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (counts.hasOwnProperty(category)) {
                counts[category]++;
            }
        });
        
        return counts;
    };
});

