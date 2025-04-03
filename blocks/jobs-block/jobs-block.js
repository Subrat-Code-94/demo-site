export default function decorate(block) {
  const jobCount = block.querySelector('p:first-of-type').textContent.split(': ')[1];
  const jobLink = block.querySelector('a').href;
  const description = block.querySelector('div > div:nth-of-type(2)').textContent;

  block.innerHTML = `
    <div class="job-stats-block-wrapper">
      <div class="stats">
        <div class="number">${jobCount}</div>
        <div class="label">AVAILABLE JOBS</div>
      </div>
      <div class="description">
        <p>${description}</p>
        <button class="find-jobs" onclick="location.href='${jobLink}'">FIND JOBS</button>
      </div>
    </div>
  `;

  // Add scroll event listener to trigger animations
  window.addEventListener('scroll', () => {
    const wrapper = document.querySelector('.job-stats-block-wrapper');
    const stats = wrapper.querySelector('.stats');
    const description = wrapper.querySelector('.description');
    const wrapperPosition = wrapper.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (wrapperPosition < screenPosition) {
      wrapper.classList.add('animate__animated', 'animate__fadeIn');
      stats.classList.add('animate__animated', 'animate__fadeInLeft');
      description.classList.add('animate__animated', 'animate__fadeInRight');
    }
  });
}
