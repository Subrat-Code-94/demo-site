export default function decorate(block) {
  const pictureElement = block.querySelector('picture');
  const imgElement = pictureElement ? pictureElement.querySelector('img') : null;
  const paragraphElement = block.querySelector('p');
  const linkElement = block.querySelector('a');

  const imgSrc = imgElement ? imgElement.getAttribute('src') : '';
  const imgAlt = imgElement ? imgElement.getAttribute('alt') || 'Get in touch image' : 'Get in touch image';
  const paragraphText = paragraphElement ? paragraphElement.textContent : '';
  const linkHref = linkElement ? linkElement.getAttribute('href') : '#';
  const linkText = linkElement ? linkElement.textContent : 'Learn more';

  block.innerHTML = `
    <div class="get-in-touch-wrapper">
      <img src="${imgSrc}" alt="${imgAlt}" class="get-in-touch-image">
      <div class="get-in-touch-text">
        <p>${paragraphText}</p>
        <a href="${linkHref}" class="get-in-touch-button">${linkText}</a>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.get-in-touch-wrapper');
    const image = wrapper.querySelector('.get-in-touch-image');
    const text = wrapper.querySelector('.get-in-touch-text');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      image.classList.add('animate__animated', 'animate__fadeInLeft');
      text.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
}
