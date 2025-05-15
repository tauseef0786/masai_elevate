
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '37998bf618b60a9e8d870d95ce3ee522';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const useFetchWeather = (city) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(BASE_URL, {
          params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
          }
        });

        setData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Network Error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  return { data, isLoading, error };
};

export default useFetchWeather;

