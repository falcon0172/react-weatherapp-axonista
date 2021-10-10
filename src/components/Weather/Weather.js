import React,{ useState, useEffect, useContext } from 'react';
import Card from '../UI/Card';
import WeatherInfo from './WeatherInfo';
import AuthContext from '../../store/AuthContext';


import './Weather.css';

const API_key = "dabfed340d847a34d10f61a4b48b59ec";

export const WeatherIcons = {
  "01d": "/icons/01d@2x.png",
  "02d": "/icons/02d@2x.png",
  "03d": "/icons/03d@2x.png",
  "04d": "/icons/04d@2x.png",
  "09d": "/icons/09d@2x.png",
  "10d": "/icons/010d@2x.png",
  "11d": "/icons/011d@2x.png",
  "13d": "/icons/013d@2x.png",
  "50d": "/icons/50d@2x.png",

};



const WeatherInfoIcons = {
  pressure: "/icons/pressure.svg",
  humidity: "icons/humidity.svg",
  Temperature: "icons/temprature.svg",
  Difference: "icons/temp-diff.svg",
};

function Weather(props) {
  const[city, setCity] = useState();
  const ctx = useContext(AuthContext);

  useEffect(() => {

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ctx.city}&appid=${API_key}`)
      .then(res => res.json())
      .then(result => {
        setCity(result);
        console.log('city');
        console.log(result);
      });
}, []);
  let diff = (parseFloat(city?.main?.temp - 273).toFixed(2))-(parseFloat(Math.floor(props.weather?.main?.temp - 273)));
  diff = diff.toFixed(2);

  return (
    <>
    <Card className={'weatherContainer'}>
      <span className='tempratureinCelcius'>{`${Math.floor(props.weather?.main?.temp - 273)}°C`}</span>
      <span className='weatherType'>{`  ${props.weather?.weather[0].description}`}</span>
      <img className='weatherIcon' src={WeatherIcons[props.weather?.weather[0].icon]} />
    </Card>
    <span className='location'>{props.latitude},{props.longitude}</span>
    <span className='weatherInfo'>Weather Information {console.log}</span>
    <Card className={'weatherInfo'}>
      <WeatherInfo label={"pressure"} value={props.weather?.main?.pressure} src={WeatherInfoIcons.pressure}/>
      <WeatherInfo label={'Humidity'} value={props.weather?.main?.humidity} src={WeatherInfoIcons.humidity}/>
      <WeatherInfo label={ctx.city} value={`${Math.round(city?.main?.temp - 273)}°C`} src={WeatherInfoIcons.Temperature}/>

      <WeatherInfo label={'Difference'}value={diff} src={WeatherInfoIcons.Difference}/>
    </Card>
    </>
);
}

export default Weather;
