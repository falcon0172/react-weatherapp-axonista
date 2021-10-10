import React from 'react';
import LocationForm from './LocationForm'

import './Location.css';


function Location(props) {

  const locationHandler = (location) => {
    const locationData={
      ...location,
    };
    props.onGetLocation(locationData);
}
  return (
    <>
      <img src = '/icons/perfect-day.svg' />
      <span>Find the Weather of your location</span>
      <LocationForm text={'Get your current location'}  onGetLocation={locationHandler} enteredTitle={'Enter City name'}/>

    </>
  );
}

export default Location;
