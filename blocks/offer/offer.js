export default function decorate(block) {
  const heading1 = block.querySelector('h1').textContent;
  const heading2 = block.querySelector('h2').textContent;
  const heading3 = block.querySelector('h3').textContent;
  const paragraph1 = block.querySelector('p:nth-of-type(1)').textContent;
  const time = block.querySelector('h5').textContent;
  const categories = [...block.querySelectorAll('p em a')].map(a => ({
    href: a.href,
    text: a.textContent
  }));
  const paragraph2 = block.querySelector('p:nth-of-type(2)').textContent;

  block.innerHTML = `
    <h2>${heading1}</h2>
    <h3>${heading2}</h3>
    <p>${heading3}</p>
    <p>${paragraph1}</p>
    <time datetime="${new Date(time).toISOString()}">${time}</time>
    <div class="categories">
      ${categories.map(category => `<a href="${category.href}" class="category">${category.text}</a>`).join('')}
    </div>
    <p>${paragraph2}</p>
  `;
}
