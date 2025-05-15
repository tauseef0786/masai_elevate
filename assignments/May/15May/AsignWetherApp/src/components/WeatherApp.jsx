import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import Loading from './Loading';
import Error from './Error';
import useFetchWeather from './useFetchWeather';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [fetchCity, setFetchCity] = useState('Bengaluru');
  const { data, isLoading, error } = useFetchWeather(fetchCity);

  const handleSearch = (e) => {
    e.preventDefault();
    setFetchCity(city);
  };

  return (
    <div className="weather-app p-4 max-w-md mx-auto">
      <SearchBar city={city} setCity={setCity} handleSearch={handleSearch} />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
      {data && <WeatherInfo weatherData={data} />}
    </div>
  );
};

export default WeatherApp;

