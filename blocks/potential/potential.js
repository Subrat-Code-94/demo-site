export default function decorate(block) {
  // Extract data from the existing block HTML
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const imgAlt = block.querySelector('picture img').alt;
  const heading = block.querySelector('h2').textContent;
  const paragraph = block.querySelector('p').textContent;
  const link = block.querySelector('a');
  const linkHref = link.href;
  const linkText = link.textContent;

  // Create new HTML structure
  block.innerHTML = `
    <div class="potential-content">
      <img src="${imgSrc}" alt="${imgAlt}" class="potential-image">
      <div class="potential-text">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
        <a href="${linkHref}" class="button">${linkText}</a>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const potentialContent = document.querySelector('.potential-content');
    const potentialElements = potentialContent.querySelectorAll('img, h2, p, .button');
    const contentPosition = potentialContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
      potentialContent.classList.add('animate__animated', 'animate__fadeIn');
      potentialElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate__animated', 'animate__fadeInUp');
      });
    }
  });
}
