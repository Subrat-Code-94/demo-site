async function fetchRSSFeed() {
    try {
      const response = await fetch("https://newsdata.io/api/1/news?apikey=pub_74190f1a09ff0aad8b8e1dd35167f33e536f6&q=technology&country=us&language=en");
      if(!response.ok){
        throw new Error("Failed to fetch RSS feed data");
      }
      const data = await response.json();
      return data.results.slice(0, 8); // Get the latest 8 news items
    } catch (error) {
        console.error("Fetching RSS feed data failed:", error);
        return [];
  }
}
  
function formatPublicationDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
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
                <img src="${item["image_url"] || "https://assets-varnish.triblive.com/2025/03/8294570_web1_8294570-138d3b39cb3644d08d5b1621cb1bf537.jpg"}" alt="${item["title"]}">
              </div>
              <div class="rss-feed-content">
                <h3><a href="${item["link"]}">${item["title"]}</a></h3>
                <p class="rss-feed-source">
                  <a href="${item["source_url"]}">${item["source_id"]}</a>
                </p>
                <p class="rss-feed-date">${formatPublicationDate(
                  item["pubDate"]
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
  