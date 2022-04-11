import {useState} from 'react';

import './Weather.scss';

const Weather = () => {

  const [weatherData, setWeatherData] = useState('');
  // const getWeatherData = async () => {
  //   const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8c653fd2e73149a1b07195217221104&q=guebwiller');
  //   const weatherData = await response.json();
  //   return weatherData;
  // }
  // const weatherData = getWeatherData()
  //   .then(res => console.log(res))
  //   .catch(err => {
  //     console.log('Souci sur la météo')
  //   })

  return (
    <div className='weather'>
      <img src="" alt="" />
    </div>
  );
}

export default Weather;