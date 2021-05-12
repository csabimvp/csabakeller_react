// Importing React components
import React, { useState } from 'react';

// Import components
import WeatherAnimation from '../Store/WeatherAnimation';

export default function WeatherApp() {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const url = 'https://api.openweathermap.org/data/2.5/';

    const [query, setQuery] = useState('London')
    const [weather, setWeather] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const [isError, setisError] = useState(false)

    const search = e => {
        e.preventDefault();
        setisLoading(true)
        fetch(`${url}weather?q=${query}&units=metric&&appid=${apiKey}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                setisLoading(false);
            })
            .catch((error) => {
                setisError(true)
                setisLoading(false)
            });
    }

    function secondsToHms(d) {
        var date = new Date(d * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return formattedTime
    }

    return (
        <>
            {Object.keys(weather).length === 0 ? (
                <div className='container'>
                    <div className='input-group mb-3 search-box'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder="Search a city..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                        />
                        <button className='btn btn-primary' onClick={search}>Search</button>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className='input-group mb-3 search-box'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder="Search a city..."
                            onChange={e => setQuery(e.target.value)}
                            value={query}
                        />
                        <button className='btn btn-primary' onClick={search}>Search</button>
                    </div>

                    <div className='row'>
                        <div className="loading-wrapper text-center">
                            {isError && <h2>Something went wrong =( </h2>}
                            {isLoading &&
                                <>
                                    <h2>Loading expenses...</h2>
                                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </>
                            }
                        </div>
                        <div className='col weather-animation'>
                            <WeatherAnimation weather={weather.weather[0].main} />
                        </div>
                        <div className='col pt-5 mb-4 weather-wrapper'>
                            <div className='location'>
                                <h1 className='display-5 fw-bold'>{weather.name}, {weather.sys.country}</h1>
                            </div>
                            <div className='temp'>
                                <h2>{weather.weather[0].main} ∘─∘ <span className={(weather.main.temp > 15) ? 'warm' : 'cold'}>{Math.round(weather.main.temp)}°c</span></h2>
                            </div>
                            <div className="weather">
                                <hr />
                                <p><strong>Description: </strong><span className="weather-description">{weather.weather[0].description}</span></p>
                                <p><strong>Wind speed: </strong><span className="wind speed">{weather.wind.speed}</span></p>
                                <p><strong>Feels like: </strong><span className="feels-like">{Math.round(weather.main.feels_like)}°c</span></p>
                                <p><strong>Sunrise: </strong><span className="sunrise">{secondsToHms(weather.sys.sunrise)}</span></p>
                                <p><strong>Sunset: </strong><span className="sunset">{secondsToHms(weather.sys.sunset)}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )

}