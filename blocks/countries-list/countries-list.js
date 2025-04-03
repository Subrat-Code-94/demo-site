async function fetchCountries(offset = 0, limit = 10) {
  const response = await fetch(
    `/countries.json?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data;
}

function createTableRows(countries) {
  return countries
    .map(
      (country) => `
    <tr>
      <td>${country.Country}</td>
      <td>${country.Abreviation}</td>
      <td>${country["Capital City"]}</td>
      <td>${country.Continent}</td>
    </tr>
  `
    )
    .join("");
}

function createPagination(total, currentPage, limit) {
  const totalPages = Math.ceil(total / limit);
  let paginationHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    paginationHTML += `<button class="pagination-btn ${
      i === currentPage ? "active" : ""
    }" data-page="${i}">${i}</button>`;
  }

  return paginationHTML;
}

function filterByContinent(data, continent) {
  if (continent === "All") return data;
  return data.filter((country) => country.Continent === continent);
}

export default async function decorate(block) {
  block.innerHTML = `
    <div class="filter-wrapper">
      <label for="continent-filter">Filter by Continent:</label>
      <select id="continent-filter">
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Australia">Australia</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
    <table class="countries-table">
      <thead>
        <tr>
          <th>Country</th>
          <th>Abreviation</th>
          <th>Capital City</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <div class="pagination-wrapper"></div>
  `;

  const countriesTableBody = block.querySelector(".countries-table tbody");
  const paginationWrapper = block.querySelector(".pagination-wrapper");
  const continentFilter = block.querySelector("#continent-filter");

  let currentPage = 1;
  let totalCountries = 0;
  let countriesData = [];

  async function loadCountries(page = 1) {
    const offset = (page - 1) * 10;
    const { total, data } = await fetchCountries(offset, 10);
    totalCountries = total;
    countriesData = data;

    const filteredData = filterByContinent(
      countriesData,
      continentFilter.value
    );
    countriesTableBody.innerHTML = createTableRows(filteredData);
    paginationWrapper.innerHTML = createPagination(totalCountries, page, 10);
  }

  paginationWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("pagination-btn")) {
      currentPage = parseInt(event.target.dataset.page, 10);
      loadCountries(currentPage);
    }
  });

  continentFilter.addEventListener("change", () => {
    const filteredData = filterByContinent(
      countriesData,
      continentFilter.value
    );
    countriesTableBody.innerHTML = createTableRows(filteredData);
  });

  await loadCountries(currentPage);
}
