export default function decorate(block) {
  const heading = block.querySelector("h2").textContent;
  const paragraph = block.querySelector("p").textContent;
  const videoUrl = block
    .querySelector("div > div:last-child")
    .textContent.trim();
  const videoEmbedUrl = videoUrl.replace("watch?v=", "embed/");

  block.innerHTML = `
    <div class="diversity-inclusion-wrapper">
      <div class="text-section">
        <h2>${heading}</h2>
        <hr>
        <p>${paragraph}</p>
      </div>
      <div class="video-section">
        <iframe width="635" height="420" src="https://www.youtube.com/embed/BlcinLPhNKw" title="Rosanna Duncan: Diversity and Inclusion for Everyone" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.diversity-inclusion-wrapper');
    const textSection = wrapper.querySelector('.text-section');
    const videoSection = wrapper.querySelector('.video-section');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      textSection.classList.add('animate__animated', 'animate__fadeInLeft');
      videoSection.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
}
