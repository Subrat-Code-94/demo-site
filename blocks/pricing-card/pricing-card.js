export default function decorate(block) {
  const priceText = block.querySelector('div > div:nth-child(1)').textContent;
  const descriptionText = block.querySelector('div > div:nth-child(2)').textContent;
  const featuresText = block.querySelector('div > div:nth-child(3)').innerHTML;

  const priceMatch = priceText.match(/(\d+)/);
  const price = priceMatch ? priceMatch[0] : '0';

  const features = featuresText.split('<br>').map(feature => {
    const [key, value] = feature.split(': ');
    return `<li><strong>${key.trim()}</strong> ${value.trim()}</li>`;
  }).join('');

  block.innerHTML = `
    <div class="pricing-card-wrapper">
      <h2 class="price">$${price}<span class="per-month">/ month</span></h2>
      <p class="description">${descriptionText}</p>
      <ul class="features">${features}</ul>
      <button class="buy-now">Buy now</button>
    </div>
  `;
}
