export default function decorate(block) {
  // Get all accordion items from the block
  const items = [...block.children];

  // Create the new accordion structure
  const accordionHTML = items.map((item) => {
    const title = item.querySelector('div:first-child')?.textContent?.trim() || '';
    const content = item.querySelector('div:last-child')?.innerHTML || '';

    return `
      <div class="accordion-item">
        <div class="accordion-header" role="button" aria-expanded="false" tabindex="0">
          <h3>${title}</h3>
          <span class="accordion-toggle">+</span>
        </div>
        <div class="accordion-content" role="region" aria-hidden="true">
          ${content}
        </div>
      </div>
    `;
  }).join('');

  // Update block content
  block.innerHTML = accordionHTML;

  // Add click handlers to accordion headers
  const headers = block.querySelectorAll('.accordion-header');
  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isExpanded = item.classList.contains('expanded');

      // Close all other items
      const allItems = block.querySelectorAll('.accordion-item');
      allItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('expanded');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherContent = otherItem.querySelector('.accordion-content');
          otherHeader.setAttribute('aria-expanded', 'false');
          otherContent.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle current item
      item.classList.toggle('expanded');
      header.setAttribute('aria-expanded', !isExpanded);
      const content = item.querySelector('.accordion-content');
      content.setAttribute('aria-hidden', isExpanded);
    });

    // Add keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
}
