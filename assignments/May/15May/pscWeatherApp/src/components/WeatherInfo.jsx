import React from 'react';

function WeatherInfo({ data }) {


  return (
    <div>
      <h1>{data.name}</h1>
      <h2>Temperature: {data.main.temp} K</h2>
      <h2>Feels Like: {data.main.feels_like} K</h2>
      <h2>Weather: {data.weather[0].description}</h2>
      <h2>Humidity: {data.main.humidity}%</h2>
      <h2>Wind Speed: {data.wind.speed} m/s</h2>
    </div>
  );
}

export default WeatherInfo;
