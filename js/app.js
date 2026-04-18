// Main App JS for Gamra Wood Craft
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initMenuToggle();
  setActiveNavLink();
  initLanguageSwitcher();
  initBusinessHoursStatus();
  initFloatingWhatsAppButton();
  initContactFormPopup();
});

function initFloatingWhatsAppButton() {
  if (document.querySelector('.whatsapp-fab')) {
    return;
  }

  const fab = document.createElement('a');
  fab.className = 'whatsapp-fab';
  fab.href = 'https://wa.me/212728886642';
  fab.target = '_blank';
  fab.rel = 'noopener noreferrer';
  fab.setAttribute('aria-label', 'Chat on WhatsApp');

  fab.innerHTML = `
    <span class="icon icon-whatsapp" aria-hidden="true"></span>
    <span class="whatsapp-fab__text">WhatsApp</span>
  `;

  document.body.appendChild(fab);
}

function initBusinessHoursStatus() {
  const hourRows = document.querySelectorAll('p[data-i18n="footer.hoursMonThu"]');
  if (!hourRows.length) {
    return;
  }
                                                  
  hourRows.forEach(row => {
    const container = row.parentElement;
    if (!container || container.querySelector('[data-work-hours-status]')) {
      return;
    }
                                                                                                                                                                                                                
    const statusLine = document.createElement('p');
    statusLine.className = 'hours-status';
    statusLine.setAttribute('data-work-hours-status', 'true');
    statusLine.setAttribute('aria-live', 'polite');
    container.appendChild(statusLine);
  });

  const readMoroccoTime = () => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Africa/Casablanca',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    });

    const parts = formatter.formatToParts(new Date());
    const timeParts = { weekday: 'Mon', hour: 0, minute: 0 };

    parts.forEach(part => {
      if (part.type === 'weekday') {
        timeParts.weekday = part.value;
      }

      if (part.type === 'hour') {
        timeParts.hour = Number.parseInt(part.value, 10);
      }

      if (part.type === 'minute') {
        timeParts.minute = Number.parseInt(part.value, 10);
      }
    });

    return timeParts;
  };

  const isOpenNowInMorocco = () => {
    const schedule = {
      Mon: [9.5 * 60, 19 * 60],
      Tue: [9.5 * 60, 19 * 60],
      Wed: [9.5 * 60, 19 * 60],
      Thu: [9.5 * 60, 19 * 60],
      Fri: [9 * 60, 16 * 60],
      Sat: [9.5 * 60, 19 * 60]
    };

    const { weekday, hour, minute } = readMoroccoTime();
    const todaySchedule = schedule[weekday];
    if (!todaySchedule) {
      return false;
    }

    const minutesNow = hour * 60 + minute;
    return minutesNow >= todaySchedule[0] && minutesNow < todaySchedule[1];
  };

  const getWorkshopOpeningMessage = () => {
    const { weekday, hour, minute } = readMoroccoTime();
    const currentTime = hour + minute / 60;

    if (['Mon', 'Tue', 'Wed', 'Thu', 'Sat'].includes(weekday)) {
      if (currentTime < 9.5) {
        return getText('contact.registryOpens0930', 'Opens at 09:30');
      }
      if (weekday === 'Thu') {
        return getText('contact.registryOpensFri0900', 'Opens Fri 09:00');
      }
      if (weekday === 'Sat') {
        return getText('contact.registryOpensMon0930', 'Opens Mon 09:30');
      }
      return getText('contact.registryOpensTomorrow0930', 'Opens tomorrow 09:30');
    }

    if (weekday === 'Fri') {
      if (currentTime < 9) {
        return getText('contact.registryOpens0900', 'Opens at 09:00');
      }
      return getText('contact.registryOpensSat0930', 'Opens Sat 09:30');
    }

    return getText('contact.registryOpensMon0930', 'Opens Mon 09:30');
  };

  const getText = (key, fallback) => {
    const value = window.i18n?.t?.(key);
    if (!value || value === key) {
      return fallback;
    }

    return value;
  };

  const renderStatus = () => {
    const isOpen = isOpenNowInMorocco();
    const statusText = isOpen
      ? getText('footer.statusOpenNow', 'Open now')
      : getText('footer.statusClosedNow', 'Closed now');
    const timezoneText = getText('footer.statusTimezone', 'Morocco time');

    document.querySelectorAll('[data-work-hours-status]').forEach(node => {
      node.innerHTML = `
        <span class="hours-status__dot ${isOpen ? 'is-open' : 'is-closed'}" aria-hidden="true"></span>
        <strong>${statusText}</strong>
        <span class="hours-status__timezone">(${timezoneText})</span>
      `;
    });

    const registryStatus = document.getElementById('workshop-status');
    const registryStatusText = document.querySelector('[data-workshop-status-text]');
    if (registryStatus && registryStatusText) {
      if (isOpen) {
        registryStatus.classList.remove('status-closed');
        registryStatus.classList.add('status-open');
        registryStatusText.textContent = getText('contact.registryOpenNow', 'Open Now');
      } else {
        registryStatus.classList.remove('status-open');
        registryStatus.classList.add('status-closed');
        registryStatusText.textContent = getWorkshopOpeningMessage();
      }
    }
  };

  renderStatus();

  window.setInterval(renderStatus, 60000);

  document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', () => {
      window.setTimeout(renderStatus, 0);
    });
  });
}

function initPageTransitions() {
  const body = document.body;
  if (!body) {
    return;
  }

  window.addEventListener('pageshow', () => {
    body.classList.remove('page-leaving');
  });

  const normalizePath = pathname => {
    if (!pathname || pathname === '/') {
      return '/';
    }

    const cleaned = pathname.replace(/\/+/g, '/').replace(/\/$/, '');
    if (cleaned === '/index.html') {
      return '/';
    }

    return cleaned || '/';
  };

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) {
      return;
    }

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      return;
    }

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.hasAttribute('download') ||
      (link.target && link.target !== '_self')
    ) {
      return;
    }

    const targetUrl = new URL(link.href, window.location.href);
    const currentUrl = new URL(window.location.href);
    if (targetUrl.origin !== currentUrl.origin) {
      return;
    }

    const sameRoute =
      normalizePath(targetUrl.pathname) === normalizePath(currentUrl.pathname) &&
      targetUrl.search === currentUrl.search;

    if (sameRoute && targetUrl.hash) {
      const targetElement = document.querySelector(targetUrl.hash);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', targetUrl.hash);
      }
      return;
    }

    if (sameRoute) {
      return;
    }

    event.preventDefault();
    body.classList.add('page-leaving');

    window.setTimeout(() => {
      window.location.href = targetUrl.href;
    }, 90);
  });
}

function initContactFormPopup() {
  const forms = document.querySelectorAll('form[action*="formspree.io"]');
  if (!forms.length) {
    return;                     
  }

  const formspreeEndpoints = ['https://formspree.io/f/xykljjwl', 'https://formspree.io/f/xeevkkgd'];
  const dailyLimit = 2;
  const dailyLimitStorageKey = 'gamrawoodcraft_form_daily_limit';

  const getTodayKey = () => new Date().toISOString().slice(0, 10);

  const readDailyState = () => {
    const rawValue = window.localStorage.getItem(dailyLimitStorageKey);
    if (!rawValue) {
      return { day: getTodayKey(), count: 0 };
    }

    try {
      const parsed = JSON.parse(rawValue);
      if (!parsed || typeof parsed.day !== 'string' || typeof parsed.count !== 'number') {
        return { day: getTodayKey(), count: 0 };
      }

      if (parsed.day !== getTodayKey()) {
        return { day: getTodayKey(), count: 0 };
      }

      return parsed;
    } catch {
      return { day: getTodayKey(), count: 0 };
    }
  };

  const writeDailyState = state => {
    window.localStorage.setItem(dailyLimitStorageKey, JSON.stringify(state));
  };

  const isDailyLimitReached = () => {
    const state = readDailyState();
    return state.count >= dailyLimit;
  };

  const incrementDailyCount = () => {
    const state = readDailyState();
    state.count += 1;
    writeDailyState(state);
  };

  const postToEndpoint = async (form, endpoint) => {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed for ${endpoint}`);
    }

    return response;
  };

  forms.forEach(form => {
    form.addEventListener('submit', async event => {
      event.preventDefault();

      if (isDailyLimitReached()) {
        showFormPopup('Daily limit reached (2 messages). Please try again tomorrow.', 'error');
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton?.textContent?.trim() || 'Send Message';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      try {
        await postToEndpoint(form, formspreeEndpoints[0]);

        incrementDailyCount();

        form.reset();
        showFormPopup('Message sent successfully. We will contact you soon.', 'success');
      } catch (error) {
        try {
          await postToEndpoint(form, formspreeEndpoints[1]);

          incrementDailyCount();

          form.reset();
          showFormPopup('Message sent successfully. We will contact you soon.', 'success');
        } catch {
          showFormPopup('Unable to send your message right now. Please try again.', 'error');
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel;
        }
      }
    });
  });
}

function showFormPopup(message, type = 'success') {
  let popup = document.querySelector('.form-popup');

  if (!popup) {
    popup = document.createElement('div');
    popup.className = 'form-popup';
    popup.innerHTML = `
      <div class="form-popup__dialog" role="alertdialog" aria-live="assertive" aria-modal="true">
        <p class="form-popup__text"></p>
        <button type="button" class="btn form-popup__close">OK</button>
      </div>
    `;

    document.body.appendChild(popup);

    const closeButton = popup.querySelector('.form-popup__close');
    closeButton?.addEventListener('click', () => {
      popup.classList.remove('is-open');
    });

    popup.addEventListener('click', event => {
      if (event.target === popup) {
        popup.classList.remove('is-open');
      }
    });
  }

  const text = popup.querySelector('.form-popup__text');
  const dialog = popup.querySelector('.form-popup__dialog');
  if (text) {
    text.textContent = message;
  }

  dialog?.classList.remove('is-success', 'is-error');
  dialog?.classList.add(type === 'error' ? 'is-error' : 'is-success');
  popup.classList.add('is-open');
}

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
