export default function decorate(block) {
  const articles = Array.from(block.children);
  const ul = document.createElement('ul');
  ul.className = 'articles-list';

  articles.forEach((article) => {
    const li = document.createElement('li');
    li.className = 'article-item';

    const picture = article.querySelector('picture');
    const content = article.querySelector('div:nth-child(2)');

    if (picture) {
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'article-image';
      imgWrapper.appendChild(picture);
      li.appendChild(imgWrapper);
    }

    if (content) {
      content.className = 'article-content';
      li.appendChild(content);
    }

    ul.appendChild(li);
  });

  block.innerHTML = '';
  block.appendChild(ul);
}
