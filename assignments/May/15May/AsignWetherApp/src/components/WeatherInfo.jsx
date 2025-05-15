const WeatherInfo = ({ weatherData }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="weather-info p-4 border rounded shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-2"> Weather In {weatherData.name}</h2>
      <p><b>Coordinates:</b> {weatherData.coord.lat}, {weatherData.coord.lon}</p>
      <p><b>Temperature:</b> {weatherData.main.temp}°C</p>
      <p><b>Feels Like:</b> {weatherData.main.feels_like}°C</p>
      <p><b>Min Temperature:</b> {weatherData.main.temp_min}°C</p>
      <p><b>Max Temperature:</b> {weatherData.main.temp_max}°C</p>
      <p><b>Condition:</b> {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
      <p><b>Humidity:</b> {weatherData.main.humidity}%</p>
      <p><b>Pressure:</b> {weatherData.main.pressure} hPa</p>
      <p><b>Sea Level Pressure:</b> {weatherData.main.sea_level} hPa</p>
      <p><b>Ground Level Pressure:</b> {weatherData.main.grnd_level} hPa</p>
      <p><b>Visibility:</b> {weatherData.visibility} m</p>
      <p><b>Wind Speed:</b> {weatherData.wind.speed} m/s</p>
      <p><b>Wind Gust:</b> {weatherData.wind.gust} m/s</p>
      <p><b>Wind Direction:</b> {weatherData.wind.deg}°</p>
      <p><b>Cloudiness:</b> {weatherData.clouds.all}%</p>
      <p><b>Sunrise:</b> {formatTime(weatherData.sys.sunrise)}</p>
      <p><b>Sunset:</b> {formatTime(weatherData.sys.sunset)}</p>
      <p><b>Timezone Offset:</b> UTC{weatherData.timezone / 3600 >= 0 ? '+' : ''}{weatherData.timezone / 3600}</p>
    </div>
  );
};

export default WeatherInfo;
