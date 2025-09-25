// src/theme/ApiRefEnhancer/index.js
export default (function() {
  if (typeof window === 'undefined') return;

  function enhanceBadges() {
    document.querySelectorAll('.badge').forEach(badge => {
      badge.classList.toggle('non-null', badge.textContent.toLowerCase().includes('non-null'));
    });
  }

  // Run immediately or on DOMContentLoaded
  document.readyState === 'loading' 
    ? document.addEventListener('DOMContentLoaded', enhanceBadges)
    : enhanceBadges();

  // Handle SPA navigation
  new MutationObserver(() => enhanceBadges())
    .observe(document.body, { childList: true, subtree: true });
})();