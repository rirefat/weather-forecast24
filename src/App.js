import React, { useEffect, useState } from 'react';
import './App.css';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import logo from './assets/logo.png';
import Descriptions from './components/Descriptions/Descriptions';
import { getFormattedWeatherData } from './WeatherService';

const App = () => {
  // useEffect(()=>{
  //   const fetchWeatherData= async()=>{
  //     const data = await getFormattedWeatherData("paris");
  //   };
  //   fetchWeatherData();
  // },[])

  const [info, setInfo]=useState([]);
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=2b67a6e7d72ce1a7a7c5eae9874cbe8b&units=metric')
      .then(res=>res.json())
      .then(data=>setInfo(data))    
  },[]);

  const {icon, description} = info.weather?info.weather[0]:"error";
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = info.main ? info.main : "error";
  const {country} = info.sys ? info.sys : "error";
  const iconURL =`https://openweathermap.org/img/wn/${icon}@2x.png`;
  const finalTemp = temp?temp.toFixed(0):"error";


  return (
    <div className='app' style={{backgroundImage: `url(${coldBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name='city' placeholder='Enter City...'/>
            <button>°F</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3><span>{info.name}</span>, {country}</h3>
              <img src={iconURL}/>
              <h3>{description}</h3>
            </div>

            <div className="temperature">
              <h1>{finalTemp}°C</h1>
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