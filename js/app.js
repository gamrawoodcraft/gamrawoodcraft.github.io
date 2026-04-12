// Main App JS for Gamra Wood Craft
document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  setActiveNavLink();
  initLanguageSwitcher();
});

// Toggle mobile menu
function initMenuToggle() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      hamburger?.classList.remove('active');
    });
  });
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop() || 'index.html';
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize language switcher
function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.language-switcher button');
  const currentLang = window.i18n?.getLanguage?.() || 'en';

  buttons.forEach(button => {
    const lang = button.getAttribute('data-language');
    if (lang === currentLang) {
      button.classList.add('active');
    }

    button.addEventListener('click', () => {
      window.i18n?.setLanguage?.(lang);
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      setActiveNavLink();
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
