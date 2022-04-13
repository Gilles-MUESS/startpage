import { useState, useEffect } from 'react';

import './Weather.scss';

const Weather = ({ className }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.weatherapi.com/v1/current.json?key=8c653fd2e73149a1b07195217221104&q=Guebwiller'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setWeatherData(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div className='weather'>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className='weather'>
        Chargement<span className='loading'>...</span>
      </div>
    );
  } else {
    console.log(weatherData);
    return (
      <div className={`weather ${className}`}>
        <div className='row weather-row'>
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
          <div className='temperature'>{weatherData.current.temp_c}°C</div>
        </div>
        <div className='row row-center city-row'>
          <div className='city'>{weatherData.location.name}</div>
        </div>
      </div>
    );
  }
};

export default Weather;
