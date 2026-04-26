/**
 * Vercel Speed Insights
 * Automatically tracks web vitals and performance metrics
 * @vercel/speed-insights v2.0.0
 */

// Initialize the queue for Speed Insights
(function() {
  'use strict';

  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;

  // Initialize queue
  function initQueue() {
    if (window.si) return;
    window.si = function() {
      window.siq = window.siq || [];
      window.siq.push(arguments);
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
      return 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
    }
    return '/_vercel/speed-insights/script.js';
  }

  // Inject the Speed Insights script
  function injectSpeedInsights() {
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
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '2.0.0';
    
    // Error handler
    script.onerror = function() {
      console.log(
        '[Vercel Speed Insights] Failed to load script from ' + src + 
        '. Please check if any content blockers are enabled and try again.'
      );
    };

    // Append script to head
    document.head.appendChild(script);
  }

  // Auto-inject when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpeedInsights);
  } else {
    injectSpeedInsights();
  }
})();
