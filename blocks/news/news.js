export default async function decorate(block) {
  try {
    const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_74190f1a09ff0aad8b8e1dd35167f33e536f6&q=technology&country=us&language=en');
    const data = await response.json();
    const newsItems = data.results.slice(0, 8); // Use top 8 news items

    const newsHTML = `
      <div class="news-grid">
        ${newsItems.map(({
    image_url: imageUrl, title, link, source_id: sourceId, pubDate,
  }) => `
          <div class="news-card">
            <img src="${imageUrl}" alt="${title}">
            <div class="news-content">
              <a href="${link}" class="news-title">${title.length > 35 ? `${title.substring(0, 35)}...` : title}</a>
              <p class="news-source">${sourceId}</p>
              <p class="news-date">${new Date(pubDate).toLocaleDateString()}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    block.innerHTML = newsHTML;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching news:', error);
    block.innerHTML = '<p>Unable to load news at the moment.</p>';
  }
}
