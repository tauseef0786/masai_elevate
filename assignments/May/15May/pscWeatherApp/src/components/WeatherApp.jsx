import { React, useState } from 'react'
import useFetchWeather from '../hooks/useFetchWeather'
import SearchBar from './SearchBar'
import Loading from './Loading';
import Error from './Error';
import WeatherInfo from './WeatherInfo';

function WeatherApp() {
    const [submittedCity, setSubmittedCity] = useState("Mumbai");
    const { data, error, loading } = useFetchWeather(submittedCity);
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedCity(city);
    }
    return (
        <div>
            <SearchBar city={city} setCity={setCity} handleSubmit={handleSubmit} />
            {loading && <Loading />}
            {error && <Error error={error} />}
            {data && <WeatherInfo data={data} />}
        </div>
    )
}
export default WeatherApp
