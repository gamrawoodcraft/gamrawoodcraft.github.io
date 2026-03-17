/**
 * ==========================================
 * GAMRA WOOD CRAFT - Item Page Buttons
 * Like and Share Buttons Functionality
 * ==========================================
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('item-buttons.js: DOM loaded, initializing...');
    initializeButtons();
});

function initializeButtons() {
    console.log('item-buttons.js: initializeButtons called');
    
    // Get elements
    var shareBtn = document.getElementById('shareBtn');
    var shareMenu = document.getElementById('shareMenu');
    var favoriteBtn = document.getElementById('favoriteBtn');
    
    console.log('shareBtn:', shareBtn);
    console.log('shareMenu:', shareMenu);
    console.log('favoriteBtn:', favoriteBtn);
    
    if (!shareBtn) {
        console.error('shareBtn not found!');
        return;
    }
    if (!favoriteBtn) {
        console.error('favoriteBtn not found!');
        return;
    }
    
    // Get item ID from URL or use default
    var urlParams = new URLSearchParams(window.location.search);
    var itemId = urlParams.get('id') || 'default';
    
    // Get current language
    var lang = localStorage.getItem('siteLang') || 'ar';
    
    // Get item title
    var itemTitleEl = document.getElementById('itemTitle');
    var itemTitle = itemTitleEl ? itemTitleEl.textContent : 'Check out this item';
    
    // Storage keys
    var likeKey = 'likes-' + itemId;
    var favoriteKey = 'favorite-' + itemId;
    
    // Initialize state
    var isFavorited = localStorage.getItem(favoriteKey) === 'true';
    var likeCount = parseInt(localStorage.getItem(likeKey)) || 0;
    var menuOpen = false;
    
    // Get stats elements
    var statsLikesEl = document.getElementById('statsLikes');
    
    // Update like button appearance
    function updateLikeButton() {
        if (isFavorited) {
            favoriteBtn.classList.add('liked');
            favoriteBtn.innerHTML = '<div class="particle-container"></div><i class="fas fa-heart"></i><span class="btn-tooltip"></span>';
        } else {
            favoriteBtn.classList.remove('liked');
            favoriteBtn.innerHTML = '<div class="particle-container"></div><i class="far fa-heart"></i><span class="btn-tooltip"></span>';
        }
        
        // Update stats
        if (statsLikesEl) statsLikesEl.textContent = likeCount;
    }
    
    // Create particle effect
    function createParticles(button) {
        var colors = ['#ef4444', '#f87171', '#fca5a5', '#fbbf24'];
        var container = button.querySelector('.particle-container');
        if (!container) return;
        
        for (var i = 0; i < 12; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            var angle = (Math.PI * 2 * i) / 12;
            var distance = 40 + Math.random() * 30;
            var tx = Math.cos(angle) * distance + 'px';
            var ty = Math.sin(angle) * distance + 'px';
            
            particle.style.setProperty('--tx', tx);
            particle.style.setProperty('--ty', ty);
            particle.style.left = '50%';
            particle.style.top = '50%';
            
            container.appendChild(particle);
            
            setTimeout(function() { particle.remove(); }, 800);
        }
    }
    
    // Create floating hearts effect
    function createFloatingHearts(button) {
        var colors = ['#ef4444', '#f472b6', '#fb7185', '#f43f5e'];
        
        for (var i = 0; i < 5; i++) {
            (function(index) {
                setTimeout(function() {
                    var heart = document.createElement('div');
                    heart.className = 'floating-heart';
                    heart.innerHTML = '<i class="fas fa-heart"></i>';
                    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                    heart.style.left = (20 + Math.random() * 60) + '%';
                    heart.style.top = '50%';
                    button.appendChild(heart);
                    
                    setTimeout(function() { heart.remove(); }, 1000);
                }, index * 100);
            })(i);
        }
    }
    
    // Show toast notification
    function showToast(message) {
        // Remove existing toast
        var existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();
        
        var toast = document.createElement('div');
        toast.className = 'toast-notification success';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(function() { toast.remove(); }, 2500);
    }
    
    // Share button click handler
    if (shareBtn && shareMenu) {
        console.log('Setting up share button click handler');
        
        shareBtn.addEventListener('click', function(e) {
            console.log('Share button clicked!');
            e.stopPropagation();
            e.preventDefault();
            menuOpen = !menuOpen;
            
            console.log('menuOpen:', menuOpen);
            
            if (menuOpen) {
                shareMenu.classList.add('show');
                console.log('Added show class to shareMenu');
            } else {
                shareMenu.classList.remove('show');
                console.log('Removed show class from shareMenu');
            }
        });
        
        // Share options click handlers
        var shareOptions = document.querySelectorAll('.share-option');
        console.log('Found share options:', shareOptions.length);
        
        shareOptions.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                var type = this.getAttribute('data-type');
                var itemUrl = window.location.href;
                var encodedUrl = encodeURIComponent(itemUrl);
                var encodedTitle = encodeURIComponent(itemTitle);
                
                var messages = {
                    copy: lang === 'ar' ? 'تم نسخ الرابط!' : lang === 'fr' ? 'Lien copié!' : 'Link copied!'
                };
                
                switch(type) {
                    case 'copy':
                        navigator.clipboard.writeText(itemTitle + '\n' + itemUrl).then(function() {
                            showToast(messages.copy);
                            menuOpen = false;
                            shareMenu.classList.remove('show');
                        });
                        break;
                        
                    case 'whatsapp':
                        var waMsg = itemTitle + '\n' + itemUrl;
                        window.open('https://wa.me/?text=' + encodeURIComponent(waMsg), '_blank');
                        menuOpen = false;
                        shareMenu.classList.remove('show');
                        break;
                        
                    case 'facebook':
                        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodedUrl + '&quote=' + encodedTitle, '_blank', 'width=600,height=400');
                        menuOpen = false;
                        shareMenu.classList.remove('show');
                        break;
                        
                    case 'twitter':
                        var twitterMsg = '🪵 ' + itemTitle + '\n' + itemUrl;
                        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitterMsg), '_blank', 'width=600,height=400');
                        menuOpen = false;
                        shareMenu.classList.remove('show');
                        break;
                }
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (menuOpen && !shareBtn.contains(e.target) && !shareMenu.contains(e.target)) {
                menuOpen = false;
                shareMenu.classList.remove('show');
            }
        });
        
        // Prevent menu click from closing
        shareMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Favorite button click handler
    favoriteBtn.addEventListener('click', function() {
        console.log('Favorite button clicked!');
        
        isFavorited = !isFavorited;
        
        if (isFavorited) {
            likeCount++;
        } else {
            likeCount = Math.max(0, likeCount - 1);
        }
        
        localStorage.setItem(favoriteKey, isFavorited);
        localStorage.setItem(likeKey, likeCount);
        
        // Add click animation
        this.classList.add('clicked');
        setTimeout(function() {
            favoriteBtn.classList.remove('clicked');
        }, 400);
        
        // Add heart pulse animation
        var heartIcon = this.querySelector('i');
        if (heartIcon) {
            heartIcon.classList.add('animate-heartPulse');
            setTimeout(function() {
                heartIcon.classList.remove('animate-heartPulse');
            }, 600);
        }
        
        // Create particle effects
        if (isFavorited) {
            createParticles(favoriteBtn);
            createFloatingHearts(favoriteBtn);
        }
        
        // Show notification
        var msg = isFavorited 
            ? (lang === 'ar' ? 'تمت الإضافة إلى المفضلة' : lang === 'fr' ? 'Ajouté aux favoris' : 'Added to favorites')
            : (lang === 'ar' ? 'تم الحذف من المفضلة' : lang === 'fr' ? 'Supprimé des favoris' : 'Removed from favorites');
        showToast(msg);
        
        // Update button
        updateLikeButton();
    });
    
    // Initialize
    updateLikeButton();
    console.log('item-buttons.js: Initialization complete');
}

// Toggle share menu function (for onclick)
function toggleShareMenu() {
    console.log('toggleShareMenu called');
    var shareMenu = document.getElementById('shareMenu');
    if (shareMenu) {
        shareMenu.classList.toggle('show');
    }
}

