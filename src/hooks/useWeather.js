import { useState, useEffect } from 'react';
import { fetchWeather } from '../Services/api'

const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const data = await fetchWeather(city);
      setWeatherData(data);
      setLoading(false);
    };

    if (city) {
      getWeather();
    }
  }, [city]);

  return { weatherData, loading };
};

export default useWeather;
