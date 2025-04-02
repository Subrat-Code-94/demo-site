export default function decorate(block) {
  const picture = block.querySelector('picture');
  const imgSrc = picture.querySelector('img').getAttribute('src');
  const imgAlt = picture.querySelector('img').getAttribute('alt');

  const heading3 = block.querySelector('p strong').textContent;
  const heading2 = block.querySelector('h2').textContent;
  const paragraph = block.querySelectorAll('p')[1].textContent;
  const link = block.querySelector('a');
  const href = link.getAttribute('href');
  const linkText = link.textContent;

  block.innerHTML = `
    <div class="article-card">
      <img src="${imgSrc}" alt="${imgAlt}">
      <div class="article-content">
        <h3>${heading3}</h3>
        <h2>${heading2}</h2>
        <p>${paragraph}</p>
        <a href="${href}" class="button">${linkText}</a>
      </div>
    </div>
  `;
}
