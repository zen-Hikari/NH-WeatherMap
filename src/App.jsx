import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherData } from "./Services/api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    const data = await fetchWeatherData(city);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
        Weather App
      </h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="text-xl mt-6">Loading...</div>
      ) : (
        weatherData && <WeatherCard data={weatherData} />
      )}
    </div>
  );
};

export default App;
