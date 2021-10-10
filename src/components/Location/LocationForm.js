import React, {useState, useContext} from 'react';
import GeoLocation from './GeoLocation';
import AuthContext from '../../store/AuthContext';

import './Location.css';


function LocationForm(props) {
  const ctx = useContext(AuthContext);


  const location = GeoLocation();
  const coordinates = {lat:location.coordinates.lat,long:location.coordinates.lng}
  const cityHandler = (e) =>{
      ctx.city = e.target.value;
      console.log(ctx.city)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    props.onGetLocation(coordinates);
}
  return (
    <form onSubmit={submitHandler}>
    <input type='text' onChange={cityHandler}/>

      <button type='submit'>{props.text}</button>
    </form>
  );
}

export default LocationForm;
