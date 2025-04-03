export default function decorate(block) {
  const heading1 = block.querySelector(
    "h3#were-in-the-business-of-making-the-world-a-better-place"
  ).textContent;
  const heading2 = block.querySelector(
    "h3#our-people-make-it-possible"
  ).textContent;

  // Extract the correct video URL
  const videoUrl = block
    .querySelector("div > div:last-child")
    .textContent.trim()
    .match(/https?:\/\/[^\s]+/)[0];

  block.innerHTML = `
    <div class="hero-block-wrapper animate__animated animate__fadeIn">
      <h1 class="animate__animated animate__fadeInDown">${heading1}</h1>
      <h2 class="animate__animated animate__fadeInUp">${heading2}</h2>
      <video autoplay muted loop class="animate__animated animate__fadeIn">
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="search-bar animate__animated animate__fadeInUp">
        <input type="text" placeholder="Search">
        <select aria-label="State">
          <option>Locations</option>
        </select>
        <button>Find jobs</button>
      </div>
    </div>
  `;
}
