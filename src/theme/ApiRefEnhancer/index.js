// src/theme/ApiRefEnhancer/index.js
export default (function() {
  if (typeof window === 'undefined') return;

  function enhanceApiFields() {
    const fieldHeaders = document.querySelectorAll('h4[id*="--"], h4[id$="-"], h5[id*="--"], h5[id$="-"]');
    
    fieldHeaders.forEach(header => {
      // Skip if already processed
      if (header.querySelector('.param-info')) return;
      
      const children = Array.from(header.children);
      const badges = [];
      const nonBadgeElements = [];
      
      // Single pass classification
      children.forEach(child => {
        child.classList.contains('badge') ? badges.push(child) : nonBadgeElements.push(child);
      });
      
      if (badges.length === 0) return;
      
      // Create containers with single DOM operation
      const fragment = document.createDocumentFragment();
      
      const paramContainer = document.createElement('div');
      paramContainer.className = 'param-info';
      nonBadgeElements.forEach(el => paramContainer.appendChild(el));
      
      const badgeContainer = document.createElement('div');
      badgeContainer.className = 'badge-container';
      badges.forEach(badge => {
        badge.classList.toggle('non-null', badge.textContent.includes('non-null'));
        badgeContainer.appendChild(badge);
      });
      
      fragment.appendChild(paramContainer);
      fragment.appendChild(badgeContainer);
      header.appendChild(fragment);
    });
  }

  // Run immediately or on DOMContentLoaded
  document.readyState === 'loading' 
    ? document.addEventListener('DOMContentLoaded', enhanceApiFields)
    : enhanceApiFields();

  // Optimized mutation observer with debouncing
  let timeout;
  new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(enhanceApiFields, 50);
  }).observe(document.body, { childList: true, subtree: true });
})();