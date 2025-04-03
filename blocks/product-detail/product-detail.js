export default function decorate(block) {
  const productData = {
    title: block.querySelector('h3').textContent,
    description: block.querySelector('h4').textContent,
    originalPrice: block.querySelector('p:first-of-type').textContent.split(': ')[1],
    discountedPrice: block.querySelector('p:last-of-type').textContent.split(': ')[1],
    rating: block.querySelector('div:nth-of-type(3)').textContent.split(': ')[1],
    imageSrc: block.querySelector('img').src
  };

  block.innerHTML = `
    <div class="product-card">
      <img src="${productData.imageSrc}" alt="${productData.title}" class="product-image">
      <div class="product-details">
        <h2 class="product-title">${productData.title}</h2>
        <p class="product-description">${productData.description}</p>
        <div class="product-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-value">${productData.rating}</span>
        </div>
        <div class="product-pricing">
          <span class="original-price">$${productData.originalPrice}</span>
          <span class="discounted-price">$${productData.discountedPrice}</span>
        </div>
        <button class="add-to-cart">Add to cart</button>
      </div>
    </div>
  `;
}
