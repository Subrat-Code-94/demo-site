export default function decorate(block) {
  const heading = block.querySelector("h2").textContent.trim();
  const description = block.querySelector("p").textContent.trim();
  const getSupportLink = block.querySelector("a").href;

  const supportItems = [...block.querySelectorAll(".support > div")]
    .slice(1)
    .map((item) => {
      const title = item.querySelector("h3 a")
        ? item.querySelector("h3 a").textContent
        : item.querySelector("h3").textContent;
      const description = item.querySelector("p").textContent.trim();
      const link = item.querySelector("div:last-child").textContent.trim();
      return { title, description, link };
    });

  const icons = {
    "Product registration": "icon-plus",
    "Product support": "icon-support",
    "Order support": "icon-order",
    "Repair Request": "icon-repair",
    "Live Chat": "icon-chat",
    "Whats app": "icon-whatsapp",
    "Email Us": "icon-email",
    "Call Us": "icon-call",
  };

  block.innerHTML = `
    <div class="support-wrapper">
      <div class="support-header">
        <div>
          <h2>${heading}</h2>
          <p>${description}</p>
        </div>
        <a href="${getSupportLink}" class="get-support">Get support</a>
      </div>
      <div class="support-cards">
        ${supportItems
          .map(
            (item) => `
          <div class="support-card">
            <div class="support-card-content">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
            <div class="support-icon"><span class="${
              icons[item.title]
            }"></span></div>
            <a href="${
              item.link
            }" class="arrow-link" aria-label="support-links"><span class="icon-arrow"></span></a>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
