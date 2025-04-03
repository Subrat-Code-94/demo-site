export default function decorate(block) {
  console.log(block); // Debugging
  const articlesData = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'related-articles-wrapper';

  const heading = document.createElement('h2');
  heading.textContent = 'Related Articles';
  wrapper.appendChild(heading);

  const articlesContainer = document.createElement('div');
  articlesContainer.className = 'articles';

  const titlesContainer = document.createElement('div');
  titlesContainer.className = 'article-titles';

  articlesData.forEach((articleData, index) => {
    const imgSrc = articleData.querySelector('picture img')?.src || '';
    const metaText = articleData.querySelector('pre code')?.textContent?.trim() || '';
    const [author = 'Unknown Author', date = 'Unknown Date', category = 'Uncategorized'] = metaText.split('\n').map(line => line.trim());
    const title = articleData.querySelector('a')?.textContent || 'Untitled';
    const linkHref = articleData.querySelector('a')?.href || '#';
  
    const article = document.createElement('div');
    article.className = 'article';
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Article Image';
    article.appendChild(img);
    
    const articleContent = document.createElement('div');
    articleContent.className = 'article-content';
  
    const articleMeta = document.createElement('div');
    articleMeta.className = 'article-meta';
    articleMeta.innerHTML = `${author}<br>${date}`;
    articleContent.appendChild(articleMeta);
  
    const articleCategory = document.createElement('div');
    articleCategory.className = 'article-category';
    articleCategory.textContent = category.toUpperCase();
    articleContent.appendChild(articleCategory);
  
    article.appendChild(articleContent);
    articlesContainer.appendChild(article);
  
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const titleLink = document.createElement('a');
    titleLink.href = linkHref;
    titleLink.textContent = title;
    titleDiv.appendChild(titleLink);
    titlesContainer.appendChild(titleDiv);
  });
  wrapper.appendChild(articlesContainer);
  wrapper.appendChild(titlesContainer);

  block.innerHTML = '';
  block.appendChild(wrapper);

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.related-articles-wrapper');
    const articles = wrapper.querySelectorAll('.article');
    const titles = wrapper.querySelectorAll('.title');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      articles.forEach((article, index) => {
        article.style.animationDelay = `${index * 0.2}s`; // Delay each article animation
        article.classList.add('animate__animated', 'animate__fadeInUp');
      });
      titles.forEach((title, index) => {
        title.style.animationDelay = `${index * 0.2}s`; // Delay each title animation
        title.classList.add('animate__animated', 'animate__fadeInUp');
      });
    }
  });
}
