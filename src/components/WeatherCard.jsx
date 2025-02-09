import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const WeatherCard = ({ data }) => {
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setAnimateCard(true); // Memulai animasi ketika card pertama kali dimuat
  }, []);

  return (
    <div
      className={`bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 w-full sm:w-80 p-6 p-x-5 sm:p-8 mt-8 rounded-xl shadow-2xl text-white transition-all duration-700 ease-in-out transform ${
        animateCard ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center tracking-wide">{data.name}, {data.sys.country}</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
          className="w-24 sm:w-28 h-24 sm:h-28 mb-4"
        />
        <p className="text-4xl sm:text-6xl font-semibold">{Math.round(data.main.temp)}°C</p>
        <p className="text-lg sm:text-xl text-center italic mt-2">{data.weather[0].description}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
        <div className="flex flex-col items-center">
          <p className="text-sm">Humidity</p>
          <p className="font-medium">{data.main.humidity}%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm">Wind</p>
          <p className="font-medium">{data.wind.speed} m/s</p>
        </div>
      </div>

      {/* Hover effect */}
      <div className="mt-6 text-center">
        <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeatherCard;
