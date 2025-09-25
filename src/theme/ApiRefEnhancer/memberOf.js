function organizeMemberOfBadges() {
  const memberOfSection = document.querySelector('.markdown h3[id="member-of"] + p');
  if (!memberOfSection) return;

  // Process links and move adjacent badges in one pass
  const links = memberOfSection.querySelectorAll('a');
  links.forEach(link => {
    const nextSibling = link.nextElementSibling;
    if (nextSibling?.classList.contains('badge')) {
      link.appendChild(nextSibling);
    }
  });
}

// Single initialization with debounced mutation observer
let timeoutId;
const debouncedOrganize = () => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(organizeMemberOfBadges, 50);
};

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', organizeMemberOfBadges, { once: true });
} else {
  organizeMemberOfBadges();
}

// Optimized observer with specific targeting
new MutationObserver(mutations => {
  const hasRelevantChanges = mutations.some(mutation => 
    Array.from(mutation.addedNodes).some(node => 
      node.nodeType === 1 && (
        node.querySelector?.('h3[id="member-of"]') || 
        node.closest?.('.markdown')
      )
    )
  );
  
  if (hasRelevantChanges) debouncedOrganize();
}).observe(document.body, { childList: true, subtree: true });