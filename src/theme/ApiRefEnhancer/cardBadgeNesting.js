// Only run in browser environment
if (typeof window !== 'undefined') {
  function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function organizeAllRelationshipSections() {
    // Target all relationship sections that need badge organization
    const sections = [
      '.markdown h3[id="member-of"] + p',
      '.markdown h3[id="implemented-by"] + p', 
      '.markdown h3[id="returned-by"] + p',
      '.markdown h3[id="interfaces"] + p',
      '.markdown h3[id="interfaces"] + h4'  // Special case for interfaces
    ];

    sections.forEach(selector => {
      const section = document.querySelector(selector);
      if (!section) return;

      // Process links and move adjacent badges in one pass
      const links = section.querySelectorAll('a');
      links.forEach(link => {
        const nextSibling = link.nextElementSibling;
        if (nextSibling?.classList.contains('badge')) {
          link.appendChild(nextSibling);
        }
      });
    });
  }

  const debouncedOrganize = debounce(organizeAllRelationshipSections, 50);

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', organizeAllRelationshipSections, { once: true });
  } else {
    organizeAllRelationshipSections();
  }

  // Optimized observer with specific targeting for all relationship sections
  new MutationObserver(mutations => {
    const hasRelevantChanges = mutations.some(mutation => 
      Array.from(mutation.addedNodes).some(node => 
        node.nodeType === 1 && (
          node.querySelector?.('h3[id="member-of"], h3[id="implemented-by"], h3[id="returned-by"], h3[id="interfaces"]') || 
          node.closest?.('.markdown')
        )
      )
    );
    
    if (hasRelevantChanges) debouncedOrganize();
  }).observe(document.body, { childList: true, subtree: true });
}