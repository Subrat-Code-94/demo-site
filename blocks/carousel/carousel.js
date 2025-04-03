export default function decorate(block) {
  const slides = [...block.children];
  block.innerHTML = '';

  const ul = document.createElement('ul');
  ul.className = 'carousel-slides';

  slides.forEach((slide, index) => {
    const li = document.createElement('li');
    li.className = 'carousel-slide';

    const pictureDiv = slide.children[0];
    const contentDiv = slide.children[1];

    if (pictureDiv) {
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'carousel-image';
      imgWrapper.appendChild(pictureDiv);
      li.appendChild(imgWrapper);
    }

    if (contentDiv) {
      contentDiv.className = 'carousel-content';
      li.appendChild(contentDiv);
    }

    ul.appendChild(li);
  });

  block.appendChild(ul);

  // Add dots navigation
  const dots = document.createElement('div');
  dots.className = 'carousel-dots';

  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot';
    dot.addEventListener('click', () => showSlide(index));
    dots.appendChild(dot);
  });

  block.appendChild(dots);

  let currentSlide = 0;

  function showSlide(n) {
    const slides = block.querySelectorAll('.carousel-slide');
    const dots = block.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;

    const oldSlide = currentSlide;
    currentSlide = (n + totalSlides) % totalSlides;

    slides[oldSlide].classList.remove('active');
    slides[currentSlide].classList.add('active');

    dots[oldSlide].classList.remove('active');
    dots[currentSlide].classList.add('active');
  }

  // Initialize carousel
  showSlide(0);

  // Auto slide every 5 seconds
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}
