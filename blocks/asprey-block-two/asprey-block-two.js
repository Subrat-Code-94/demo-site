export default function decorate(block) {
  const picture = block.querySelector('picture');
  const img = picture.querySelector('img');
  const textDiv = block.querySelector('div > div:last-child');

  const newHTML = `
    <div class="asprey-block-two">
      <div class="asprey-block-two__image">
        ${picture.outerHTML}
      </div>
      <div class="asprey-block-two__text">
        <p>${textDiv.textContent}</p>
      </div>
    </div>
  `;

  block.innerHTML = newHTML;
}
