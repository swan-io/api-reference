// src/theme/ApiRefEnhancer/index.js
export default (function() {
  if (typeof window === 'undefined') return;

  function enhanceApiFields() {
    // Target GraphQL field headers
    const fieldHeaders = document.querySelectorAll('h4[id*="--"], h4[id$="-"], h5[id*="--"], h5[id$="-"]');
    
    fieldHeaders.forEach(header => {
      // Skip if already processed
      if (header.querySelector('.param-info')) return;
      
      const badges = Array.from(header.querySelectorAll('.badge'));
      const nonBadgeElements = Array.from(header.children).filter(child => 
        !child.classList.contains('badge')
      );
      
      if (badges.length === 0) return;
      
      // Create containers
      const paramContainer = document.createElement('div');
      paramContainer.className = 'param-info';
      
      const badgeContainer = document.createElement('div');
      badgeContainer.className = 'badge-container';
      
      // Move non-badge elements to param container
      nonBadgeElements.forEach(element => {
        paramContainer.appendChild(element);
      });
      
      // Move badges to badge container and enhance non-null badges
      badges.forEach(badge => {
        badge.classList.toggle('non-null', badge.textContent.toLowerCase().includes('non-null'));
        badgeContainer.appendChild(badge);
      });
      
      // Add containers to header
      header.appendChild(paramContainer);
      header.appendChild(badgeContainer);
    });
  }

  // Run immediately or on DOMContentLoaded
  document.readyState === 'loading' 
    ? document.addEventListener('DOMContentLoaded', enhanceApiFields)
    : enhanceApiFields();

  // Handle SPA navigation
  new MutationObserver(() => enhanceApiFields())
    .observe(document.body, { childList: true, subtree: true });
})();