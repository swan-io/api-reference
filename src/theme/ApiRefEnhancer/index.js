// src/theme/ApiRefEnhancer/index.js
export default (function() {
  if (typeof window === 'undefined') return;

  let isProcessing = false;

  function enhanceApiFields() {
    if (isProcessing) return;
    isProcessing = true;

    // Exclude h4s that are children of relationship sections
    const fieldHeaders = document.querySelectorAll('h4[id*="--"]:not(.enhanced), h4[id$="-"]:not(.enhanced), h5[id*="--"]:not(.enhanced), h5[id$="-"]:not(.enhanced)');
    
    fieldHeaders.forEach(header => {
      // Skip if this h4 is part of a relationship section
      const isRelationshipH4 = header.previousElementSibling?.matches('h3[id="interfaces"], h3[id="member-of"], h3[id="implemented-by"], h3[id="returned-by"]');
      if (isRelationshipH4) return;
      
      header.classList.add('enhanced');
      
      if (header.querySelector('.param-info')) return;
      
      const children = Array.from(header.children);
      const badges = children.filter(child => child.classList.contains('badge'));
      const nonBadgeElements = children.filter(child => !child.classList.contains('badge'));
      
      if (badges.length === 0) return;
      
      const fragment = document.createDocumentFragment();
      
      const paramContainer = document.createElement('div');
      paramContainer.className = 'param-info';
      nonBadgeElements.forEach(el => paramContainer.appendChild(el));
      
      const badgeContainer = document.createElement('div');
      badgeContainer.className = 'badge-container';
      badges.forEach(badge => {
        if (badge.textContent.includes('non-null')) {
          badge.classList.add('non-null');
        }
        badgeContainer.appendChild(badge);
      });
      
      fragment.appendChild(paramContainer);
      fragment.appendChild(badgeContainer);
      header.appendChild(fragment);
    });

    isProcessing = false;
  }

  // Simple initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceApiFields, { once: true });
  } else {
    enhanceApiFields();
  }

  // Simplified mutation observer
  new MutationObserver(() => {
    if (!isProcessing) {
      setTimeout(enhanceApiFields, 16);
    }
  }).observe(document.body, { childList: true, subtree: true });
})();