export default function decorate(block) {
    const header = block.querySelector("h2")?.textContent || '';
    const description = block.querySelector("p")?.textContent || '';
    const cards = [...block.querySelectorAll(".download-cards > div")];
  
    const cardsData = cards
      .filter(card => card.querySelectorAll(":scope > div").length === 2)
      .map((card) => {
        const imgElement = card.querySelector("picture img");
        const imgSrc = imgElement ? imgElement.src : '';
        const imgAlt = imgElement ? imgElement.alt || '' : '';
        const cardDescription = card.querySelector("div:last-child p")?.textContent || '';
        const downloadLink = card.querySelector("a")?.href || '#';
        return { imgSrc, imgAlt, cardDescription, downloadLink };
      });
  
    const cardsHTML = cardsData
      .map(
        (data) => `
        <a href="${data.downloadLink}" class="card">
          <img src="${data.imgSrc}" alt="${data.imgAlt}">
          <div class="card-content">
            <p>${data.cardDescription}</p>
            <span class="download-btn">Download</span>
          </div>
        </a>`
      )
      .join("");
  
    block.innerHTML = `
      <div class="download-cards-wrapper">
        <h2>${header}</h2>
        <p>${description}</p>
        <div class="download-cards">
          ${cardsHTML}
        </div>
      </div>
    `;
  }
  