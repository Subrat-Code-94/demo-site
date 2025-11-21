export default function decorate(block) {
  const articles = [...block.children].slice(1); // Skipping the first child which is the title

  const articleData = articles.map((article) => {
    const picture = article.querySelector('picture');
    const img = picture?.querySelector('img');
    const imgSrc = img?.getAttribute('src') || '';
    const imgAlt = img?.getAttribute('alt') || '';
    const titleLink = article.querySelector('a');
    const title = titleLink?.textContent || '';
    const url = titleLink?.getAttribute('href') || '#';
    const paragraphs = article.querySelectorAll('p');
    const description = paragraphs[1]?.textContent || '';

    return {
      imgSrc, imgAlt, title, url, description,
    };
  }).filter((article) => article.title && article.imgSrc);

  block.innerHTML = `
    <h2>Recent Articles</h2>
    ${articleData.map(({
    imgSrc, imgAlt, title, url, description,
  }) => `
      <div class="feed-card">
        <img src="${imgSrc}" alt="${imgAlt}">
        <h3><a href="${url}" style="color: black;">${title}</a></h3>
        <p>${description.length > 35 ? `${description.substring(0, 35)}...` : description}</p>
      </div>
    `).join('')}
  `;
}
