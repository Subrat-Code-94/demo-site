export default function decorate(block) {
  // Initial HTML structure
  block.innerHTML = `
    <div class="user-status-header">
      <h2>User Status</h2>
      <button class="see-all">See All</button>
    </div>
    <div class="user-status-list">
      <!-- User status will be dynamically populated here -->
    </div>
  `;

  const userStatusList = block.querySelector('.user-status-list');

  // Function to fetch user status
  async function fetchUserStatus(offset = 0, limit = 5) {
    const response = await fetch(`/user-status.json?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data.data || [];
  }

  // Function to render user status
  async function renderUserStatus(offset = 0, limit = 5) {
    const users = await fetchUserStatus(offset, limit);
    userStatusList.innerHTML = users.map(user => `
      <div class="user-status-item">
        <span class="user-name">${user.Users}</span>
        <span class="user-status ${user.Status}">${user.Status}</span>
      </div>
    `).join('');
  }

  // Initial render of the user status
  renderUserStatus();

  // See All button event listener
  block.querySelector('.see-all').addEventListener('click', async () => {
    const users = await fetchUserStatus(0, 100); // Assuming 100 is a reasonable limit for all users
    userStatusList.innerHTML = users.map(user => `
      <div class="user-status-item">
        <span class="user-name">${user.Users}</span>
        <span class="user-status ${user.Status}">${user.Status}</span>
      </div>
    `).join('');
  });
}
