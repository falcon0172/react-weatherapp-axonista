import React, {useState, useEffect} from 'react';

import Card from './components/UI/Card';
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import AuthContext from './store/AuthContext';

import './App.css';

const API_key = "dabfed340d847a34d10f61a4b48b59ec";



function App() {

  const[latitude,setLatitude] = useState();
  const[longitude,setLongitude] = useState();
  const[city,setCity] = useState();
  const[weather, setWeather] = useState();


  const locationConverter = (location) => {
    setLatitude(location.lat);
    setLongitude(location.long);
    fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${API_key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        console.log('result');
        console.log(result);
      });
    console.log(latitude,longitude);
    console.log("Done");
  }

  return (
    <Card className = {'card'}>
      <h3 className='intro'>Weather App</h3>
      <AuthContext.Provider value={{city:'London',}}>
      { !weather?
        <Location onGetLocation={locationConverter}/>:
        <Weather latitude={latitude} longitude={longitude} weather = {weather} city={city}/>
      }
      </AuthContext.Provider>

    </Card>
  );
}

export default App;
