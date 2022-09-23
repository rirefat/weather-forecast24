import React, { useEffect, useState } from 'react';
import './App.css';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import logo from './assets/logo.png';
import Descriptions from './components/Descriptions/Descriptions';
import { getFormattedWeatherData } from './WeatherService';

const App = () => {
  let [units, setUnits]=useState('metric');
  const [info, setInfo]=useState([]);
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=2b67a6e7d72ce1a7a7c5eae9874cbe8b&units=${units}`)
      .then(res=>res.json())
      .then(data=>setInfo(data))    
  },[units]);

  const {icon, description} = info.weather?info.weather[0]:"error";
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = info.main ? info.main : "error";
  const {country} = info.sys ? info.sys : "error";
  const iconURL =`https://openweathermap.org/img/wn/${icon}@2x.png`;
  const finalTemp = temp?temp.toFixed(0):"error";
  const feelingTemp = feels_like?feels_like.toFixed(0):"loading..";

  const changeUnit=(e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit==="C";
    button.innerText = isCelcius?"°F":"°C";
    setUnits(isCelcius?"metric":"imperial");
  }

 
  return (
    <div className='app' style={{backgroundImage: `url(${coldBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name='city' placeholder='Enter City...'/>
            <button onClick={(e)=>changeUnit(e)}>°{units==='metric'?"F":"C"}</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3><span>{info.name}</span>, {country}</h3>
              <img src={iconURL}/>
              <div className="weather-description">
                <h3>{description}</h3>
                <p>Feels Like {feelingTemp}°{units==='metric'?"C":"F"}</p>
              </div>
            </div>

            <div className="temperature">
              <h1>{finalTemp}°{units==='metric'?"C":"F"}</h1>
            </div>
          </div>

          {/* Bottom Description */}
          <Descriptions></Descriptions>
        </div>
      </div>
    </div>
  );
};

export default App;