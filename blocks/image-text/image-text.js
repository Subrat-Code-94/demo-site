export default function decorate(block) {
  const pictureSources = [...block.querySelectorAll('picture source')];
  const imgSrc = block.querySelector('picture img').src;
  const imgAlt = block.querySelector('picture img').alt;
  const heading = block.querySelector('h2').textContent;
  const paragraph = block.querySelector('p').textContent;

  block.innerHTML = `
    <div class="well-being-wrapper">
      <div class="image-content">
        <picture>
          ${pictureSources.map(source => source.outerHTML).join('')}
          <img src="${imgSrc}" alt="${imgAlt}" />
        </picture>
      </div>
      <div class="text-content">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.well-being-wrapper');
    const imageContent = wrapper.querySelector('.image-content');
    const textContent = wrapper.querySelector('.text-content');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      imageContent.classList.add('animate__animated', 'animate__fadeInLeft');
      textContent.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
}
