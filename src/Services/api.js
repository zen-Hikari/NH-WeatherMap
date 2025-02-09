export const fetchWeatherData = async (city) => {
  const apiKey = "8dca16add6d12004ff8554ce9733d61d"; // Ganti dengan API key yang valid
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching weather data:", err);
    return null;
  }
};
