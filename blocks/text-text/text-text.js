export default function decorate(block) {
  const heading = block.querySelector('h2').textContent;
  const paragraph = block.querySelector('p').textContent;

  block.innerHTML = `
    <div class="text-text-wrapper">
      <div class="text-content">
        <h2>${heading}</h2>
        <p>${paragraph}</p>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.text-text-wrapper');
    const textContent = wrapper.querySelector('.text-content');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      textContent.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
}
