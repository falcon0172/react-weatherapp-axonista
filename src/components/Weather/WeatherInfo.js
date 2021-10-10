import React from 'react';
import Card from '../UI/Card';

import './Weather.css';
function WeatherInfo(props) {
  return(
    <Card className={'infoContainer'}>
      <img className='infoIcon' src={props.src}/>
      <span className='infoLabel'>{props.label}
      <span className='infoDetail'>{props.value}</span>
      </span>
    </Card>
  );
}
export default WeatherInfo;
