async function fetchRSSFeed() {
  const response = await fetch("/rss-feed.json");
  const data = await response.json();
  return data.data.slice(0, 8); // Get the latest 8 news items
}

function formatPublicationDate(serialDate) {
  const date = new Date((serialDate - 25569) * 86400 * 1000);
  return date.toLocaleDateString();
}

export default async function decorate(block) {
  const feedItems = await fetchRSSFeed();

  block.innerHTML = `
    <div class="rss-feed-wrapper">
      <h2>Latest News</h2>
      <ul class="rss-feed-list">
        ${feedItems
          .map(
            (item) => `
          <li class="rss-feed-item">
            <div class="rss-feed-image">
              <img src="${item["Media Content URL"]}" alt="${item["Title"]}">
            </div>
            <div class="rss-feed-content">
              <h3><a href="${item["Article Link"]}">${item["Title"]}</a></h3>
              <p class="rss-feed-source">
                <a href="${item["Source URL"]}">${item["Source"]}</a>
              </p>
              <p class="rss-feed-date">${formatPublicationDate(
                item["Publication Date"]
              )}</p>
            </div>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  `;
}
