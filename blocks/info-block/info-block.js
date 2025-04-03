export default function decorate(block) {
  const title = block.querySelector("h2").textContent;
  const description = block.querySelector("p").textContent;
  const pictureSources = [...block.querySelectorAll("source")];
  const imgSrc = block.querySelector("img").src;

  block.innerHTML = `
    <div class="people-progress-prosperity-wrapper">
      <div class="text-content">
        <h2>${title}</h1>
        <p>${description}</p>
      </div>
      <div class="image-content">
        <picture>
          ${pictureSources.map((source) => source.outerHTML).join("")}
          <img src="${imgSrc}" alt="">
        </picture>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener("scroll", () => {
    const wrapper = document.querySelector(
      ".people-progress-prosperity-wrapper"
    );
    const textContent = wrapper.querySelector(".text-content");
    const imageContent = wrapper.querySelector(".image-content");
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add("animate__animated", "animate__fadeIn");
      textContent.classList.add("animate__animated", "animate__fadeInLeft");
      imageContent.classList.add("animate__animated", "animate__fadeInRight");
    }
  });
}
