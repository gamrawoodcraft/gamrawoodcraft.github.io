/**
 * Item Page - Portfolio Details
 * Handles displaying individual portfolio items
 */

// Wait for DOM to be ready
async function initializeItemPage() {
    // Get item ID from URL
    var urlParams = new URLSearchParams(window.location.search);
    var itemId = urlParams.get('id') || 'kitchen-1';

    // Current language
    var currentLang = localStorage.getItem('siteLang') || 'ar';

// Load items async, fallback sync for compatibility
    var items = window.portfolioItems;
    try {
        items = await window.loadPortfolioItems();
    } catch(e) {
        console.warn('Portfolio load failed:', e);
    }
    var item = items.find(function(i) { return i.id === itemId; }) || items[0];

    // Get translations
    var lang = (typeof getCurrentLang === 'function' ? getCurrentLang() : null) || localStorage.getItem('siteLang') || 'ar';

    // Update page content
    var itemImageEl = document.getElementById('itemImage');
    if (itemImageEl) {
        itemImageEl.src = item.image;
        itemImageEl.alt = item.title[lang] || item.title.ar;
    }
    
// Populate thumbnails with multi-angle images
    var thumbnails = document.querySelectorAll('.thumbnail-item img');
    var thumbImages = item.images || [item.image, item.image, item.image, item.image]; // Fallback to single image x4
    
    thumbnails.forEach(function(thumb, index) {
        thumb.src = thumbImages[index] || item.image;
        thumb.alt = item.title[lang] || item.title.ar + ' - Angle ' + (index + 1);
    });
    
    var activeThumb = document.querySelector('.thumbnail-item.active img');
    if (activeThumb) activeThumb.src = thumbImages[0] || item.image;
    
    var itemCategoryEl = document.getElementById('itemCategory');
    if (itemCategoryEl) {
        itemCategoryEl.textContent = item.category[lang] || item.category.ar;
    }
    
    var itemTitleEl = document.getElementById('itemTitle');
    if (itemTitleEl) {
        itemTitleEl.textContent = item.title[lang] || item.title.ar;
    }
    
    var itemDescriptionEl = document.getElementById('itemDescription');
    if (itemDescriptionEl) {
        itemDescriptionEl.textContent = item.description[lang] || item.description.ar;
    }

    // Features
    var featuresList = document.getElementById('itemFeatures');
    if (featuresList) {
        featuresList.innerHTML = '';  // Clear existing content
        var features = item.features[lang] || item.features.ar;
        features.forEach(function(feature) {
            var li = document.createElement('li');
            li.className = 'flex items-center gap-2 text-white/80';
            li.innerHTML = '<i class="fas fa-check-circle text-accent"></i> ' + feature;
            featuresList.appendChild(li);
        });
    }

    // Materials
    var materialsDiv = document.getElementById('itemMaterials');
    if (materialsDiv) {
        materialsDiv.innerHTML = '';  // Clear existing content
        var materials = item.materials[lang] || item.materials.ar;
        materials.forEach(function(material) {
            var span = document.createElement('span');
            span.className = 'px-3 py-1 bg-white/20 text-white rounded-full text-sm';
            span.textContent = material;
            materialsDiv.appendChild(span);
        });
    }

    // Dimensions
    var dimsDiv = document.getElementById('itemDimensions');
    if (dimsDiv) {
        dimsDiv.innerHTML = '<div class="bg-white/10 rounded-lg p-3">' +
            '<p class="text-white/60 text-xs">' + (lang === 'ar' ? 'العرض' : lang === 'fr' ? 'Largeur' : 'Width') + '</p>' +
            '<p class="text-white font-bold">' + item.dimensions.width + '</p>' +
            '</div>' +
            '<div class="bg-white/10 rounded-lg p-3">' +
            '<p class="text-white/60 text-xs">' + (lang === 'ar' ? 'الارتفاع' : lang === 'fr' ? 'Hauteur' : 'Height') + '</p>' +
            '<p class="text-white font-bold">' + item.dimensions.height + '</p>' +
            '</div>' +
            '<div class="bg-white/10 rounded-lg p-3">' +
            '<p class="text-white/60 text-xs">' + (lang === 'ar' ? 'العمق' : lang === 'fr' ? 'Profondeur' : 'Depth') + '</p>' +
            '<p class="text-white font-bold">' + item.dimensions.depth + '</p>' +
            '</div>';
    }

    // Related items (same category, excluding current)
    var related = items.filter(function(i) { return i.category[lang] === item.category[lang] && i.id !== item.id; }).slice(0, 3);
    var relatedDiv = document.getElementById('relatedItems');
    
    if (relatedDiv) {
        relatedDiv.innerHTML = '';  // Clear existing content
        if (related.length === 0) {
            // If no related in same category, get random items
            var random = items.filter(function(i) { return i.id !== item.id; }).slice(0, 3);
            random.forEach(function(relatedItem) {
                var card = createRelatedCard(relatedItem, lang);
                relatedDiv.appendChild(card);
            });
        } else {
            related.forEach(function(relatedItem) {
                var card = createRelatedCard(relatedItem, lang);
                relatedDiv.appendChild(card);
            });
        }
    }

    function createRelatedCard(relatedItem, lang) {
        var card = document.createElement('a');
        card.href = 'item.html?id=' + relatedItem.id;
        card.className = 'group block bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 related-card hover-lift';
        card.innerHTML = '<div class="relative h-48 overflow-hidden">' +
            '<img src="' + relatedItem.image + '" alt="' + (relatedItem.title[lang] || relatedItem.title.ar) + '" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">' +
            '<div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>' +
'<span class="absolute top-3 right-3 px-2 py-1 bg-accent font-bold rounded-full text-primary text-xs">' + (relatedItem.category[lang] || relatedItem.category.ar) + '</span>' +
            '</div>' +
            '<div class="p-4">' +
            '<h3 class="text-white font-bold heading-font group-hover:text-accent transition-colors">' + (relatedItem.title[lang] || relatedItem.title.ar) + '</h3>' +
            '<p class="text-white/60 text-sm mt-1 line-clamp-2">' + (relatedItem.description[lang] || relatedItem.description.ar) + '</p>' +
            '</div>';
        return card;
    }

    // Update page title
    document.title = (item.title[lang] || item.title.ar) + ' | كمرة للصناعة التقليدية الخشبية';

    // Update feature items styling
    var featureItems = document.querySelectorAll('#itemFeatures li');
    featureItems.forEach(function(li, index) {
        li.style.animationDelay = (index * 0.1) + 's';
        li.classList.add('hover:translate-x-1', 'transition-transform');
    });

    var thumbImagesForClick = item.images || [item.image, item.image, item.image, item.image];
    document.querySelectorAll('.thumbnail-item').forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail-item').forEach(function(t) {
                t.classList.remove('active');
            });
            this.classList.add('active');
            var thumbIndex = this.getAttribute('data-index');
            var main = document.getElementById('itemImage');
            if (main) main.src = thumbImagesForClick[thumbIndex] || item.image;
        });
    });
}

// Initialize page when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeItemPage);
} else {
    initializeItemPage();
}

