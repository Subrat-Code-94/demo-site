export default function decorate(block) {
  const logos = [...block.querySelectorAll('picture')].map(picture => {
    const imgSrc = picture.querySelector('img').src;
    const imgAlt = picture.querySelector('img').alt;
    return { src: imgSrc, alt: imgAlt };
  });

  block.innerHTML = `
    <div class="logo-block-wrapper">
      ${logos.map(logo => `
        <div class="logo">
          <img src="${logo.src}" alt="${logo.alt}">
        </div>
      `).join('')}
    </div>
  `;
}
