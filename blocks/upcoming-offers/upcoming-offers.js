export default function decorate(block) {
  const offers = [...block.children];
  block.innerHTML = `
    <div class="upcoming-offers-wrapper">
      ${offers.map(offer => {
        const imageUrl = offer.children[0].textContent.trim();
        const heading = offer.querySelector('h2').textContent.trim();
        const paragraph = offer.querySelector('p').textContent.trim();
        const link = offer.querySelector('a');
        const linkHref = link.href;
        const linkText = link.textContent.trim();

        return `
          <div class="offer-card">
            <div class="offer-header" style="background-image: url(${imageUrl});">
              <div class="offer-badge">${paragraph}</div>
            </div>
            <div class="offer-content">
              <h2>${heading}</h2>
              <p>${paragraph}</p>
              <a href="${linkHref}" class="buy-now">${linkText}</a>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}
