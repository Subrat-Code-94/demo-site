export default function decorate(block) {
  // Extract data from the existing block HTML
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const imgAlt = block.querySelector('picture img').alt;
  const heading = block.querySelector('h2').textContent.trim();
  const subtitle = block.querySelector('p').textContent.trim();
  const link = block.querySelector('a');
  const linkHref = link.href;
  const linkText = link.textContent.trim();

  // Create new HTML structure dynamically with data from the original HTML
  block.innerHTML = `
    <div class="asprey-block-one">
      <div class="asprey-image">
        <picture>
          ${pictureSources.map(source => source.outerHTML).join('')}
          <img src="${imgSrc}" alt="${imgAlt}">
        </picture>
      </div>
      <div class="asprey-content">
        <h1 class="title">${heading}</h1>
        <p class="subtitle">${subtitle}</p>
        <a href="${linkHref}" class="button button--secondary">${linkText}</a>
      </div>
    </div>
  `;
}
