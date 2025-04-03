export default function decorate(block) {
  const textContent = block.querySelector('div > div:first-child').textContent;
  const link = block.querySelector('div > div:last-child a');
  const linkHref = link.href;
  const linkText = link.textContent.toUpperCase(); // Convert to uppercase as per the provided HTML structure

  block.innerHTML = `
    <div class="newsletter-wrapper">
      <div class="text-content">
        <p>${textContent}</p>
      </div>
      <div class="button-content">
        <button onclick="location.href='${linkHref}'">${linkText}</button>
      </div>
    </div>
  `;
}
