export default async function decorate(block) {
    const imgElement = block.querySelector("img");
    const heading1 = block.querySelector("p > strong").textContent;
    const heading2 = block.querySelector("h2").textContent.trim();
    const paragraph = block.querySelector("p:not(:has(strong))").textContent;
  
    block.innerHTML = `
      <div class="banner-content">
        <div class="banner-text-content">
          <h3>${heading1}</h3>
          <h1>${heading2}</h1>
          <p>${paragraph}</p>
        </div>
        <div class="weather-info">
          <p>Loading weather data...</p>
        </div>
      </div>
    `;
  
    // Set the background image
    const bannerElement = block.closest(".banner");
    if (imgElement && bannerElement) {
      bannerElement.style.backgroundImage = `url(${imgElement.src})`;
    }
  
    // Fetch geolocation data based on IP address
    try {
      const geoResponse = await fetch("https://ipapi.co/json/");
      if (!geoResponse.ok) {
        throw new Error("Failed to fetch geolocation data");
      }
      const geoData = await geoResponse.json();
      const { latitude, longitude } = geoData;
  
      // Fetch weather data
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1e917fcbb504f03e53e905f6060107ac&units=metric`
      );
      if (!weatherResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const weatherData = await weatherResponse.json();
      const {
        main: { temp, temp_min, temp_max },
      } = weatherData;
  
      const weatherInfoElement = block.querySelector(".weather-info");
      weatherInfoElement.innerHTML = `
        <p>Current Temp: ${temp}°C</p>
        <p>Min Temp: ${temp_min}°C</p>
        <p>Max Temp: ${temp_max}°C</p>
      `;
    } catch (error) {
      const weatherInfoElement = block.querySelector(".weather-info");
      weatherInfoElement.innerHTML = `<p>Failed to load weather data</p>`;
      console.error("Fetching weather data failed:", error);
    }
  }
  