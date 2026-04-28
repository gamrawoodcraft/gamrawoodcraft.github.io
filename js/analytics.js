/**
 * Vercel Web Analytics
 * Automatically tracks page views and web vitals
 * @vercel/analytics
 */

(function() {
  'use strict';

  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;

  // Initialize queue for Analytics
  function initQueue() {
    if (window.va) return;
    window.va = function() {
      window.vaq = window.vaq || [];
      window.vaq.push(arguments);
    };
  }

  // Check if we're in development mode
  function isDevelopment() {
    try {
      // Check hostname for development indicators
      var hostname = window.location.hostname;
      return hostname === 'localhost' || 
             hostname === '127.0.0.1' || 
             hostname.includes('local.');
    } catch (e) {
      return false;
    }
  }

  // Get the script source URL
  function getScriptSrc() {
    if (isDevelopment()) {
      return 'https://va.vercel-scripts.com/v1/script.debug.js';
    }
    return '/_vercel/insights/script.js';
  }

  // Inject the Analytics script
  function injectAnalytics() {
    initQueue();

    var src = getScriptSrc();
    
    // Check if script is already loaded
    if (document.head.querySelector('script[src*="' + src + '"]')) {
      return null;
    }

    // Create and configure the script element
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    
    // Add SDK information
    script.dataset.sdkn = '@vercel/analytics';
    script.dataset.sdkv = '1.4.1';
    
    // Error handler
    script.onerror = function() {
      console.log(
        '[Vercel Analytics] Failed to load script from ' + src + 
        '. Please check if any content blockers are enabled and try again.'
      );
    };

    // Append script to head
    document.head.appendChild(script);
  }

  // Auto-inject when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectAnalytics);
  } else {
    injectAnalytics();
  }
})();
