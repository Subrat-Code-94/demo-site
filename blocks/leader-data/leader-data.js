export default function decorate(block) {
  const leaderData = [...block.children].map(child => {
    const img = child.querySelector('img').src;
    const name = child.querySelector('div:nth-child(2)').textContent;
    const description = child.querySelector('div:nth-child(3) a').textContent;
    const link = child.querySelector('div:nth-child(3) a').href;

    return { img, name, description, link };
  });

  block.innerHTML = leaderData.map((data) => `
    <div class="leader-data-card">
      <img src="${data.img}" alt="Leader Image">
      <p class="leader-name">${data.name}</p>
      <p class="leader-description"><a href="${data.link}">${data.description}</a></p>
    </div>
  `).join('');
}
