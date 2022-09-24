import React, { useEffect, useState } from 'react';
import './App.css';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import normalBg from './assets/normal.jpg';
import logo from './assets/logo.png';
import Descriptions from './components/Descriptions/Descriptions';
import { getFormattedWeatherData } from './WeatherService';

const App = () => {
//============================================== Hooks ==============================================
  const [units, setUnits]=useState('metric');
  const [city, setCity]=useState(null);
  const [info, setInfo]=useState([]);
  const [bg, setBg]=useState(normalBg);
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b67a6e7d72ce1a7a7c5eae9874cbe8b&units=${units}`)
      .then(res=>res.json())
      .then(data=>setInfo(data))    
  },[units,city]);
// ====================================================================================================

  const {icon, description, main} = info.weather?info.weather[0]:"error";
  const {temp, feels_like, temp_min, temp_max, pressure, humidity} = info.main ? info.main : " ";
  const {speed} = info.wind?info.wind:" ";
  const {country} = info.sys ? info.sys : " ";
  const iconURL =icon?`https://openweathermap.org/img/wn/${icon}@2x.png`:logo;
  const finalTemp = temp?temp.toFixed(0):" ";
  const feelingTemp = feels_like?feels_like.toFixed(0):" ";
  const maxTemp = temp_max?temp_max.toFixed(0):" ";
  const minTemp = temp_min?temp_min.toFixed(0):" ";

  // const setBg = finalTemp=>'5'?`url(${hotBg})`:`url(${coldBg})`;
  const tempUnit = units==="metric"?"°C":"°F";
  const speedUnit = units==="metric"?"m/s":"m/h";

  console.log(speed)

//============================================ Functions ============================================
  const changeUnit=(e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelcius = currentUnit==="C";
    button.innerText = isCelcius?"°F":"°C";
    setUnits(isCelcius?"metric":"imperial");
  }

  const enteredCity=(e)=>{
    setCity(e.target.value);
  }
// ====================================================================================================

// =================================== Dynamic Background =============================================

// ====================================================================================================

console.log(bg)
 
  return (
    <div className='app' style={{backgroundImage: `url(${bg})`}}>
      <div className="overlay">
        <div className="container">
          {/*====================================== Top Part ======================================*/}
          <div className="section section__inputs">
            <input onChange={enteredCity} type="text" name='city' placeholder='Enter City...'/>
            <button onClick={(e)=>changeUnit(e)}>°{units==='metric'?"F":"C"}</button>
          </div>

          <div className="section section__temperature">
            <div className="icon">
              <h3><span>{info.name}</span>{country?",":" "}<span>{country}</span></h3>
              <img src={iconURL}/>
              <div className="weather-description">
                <h3>{main}</h3>
                <p>{description}</p>
              </div>
            </div>

            <div className="temperature">
              <h1>{finalTemp}°{units==='metric'?"C":"F"}</h1>
            </div>
          </div>

          {/*================================= Bottom Description =================================*/}
          <Descriptions 
            feelingTemp={feelingTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            pressure={pressure}
            humidity={humidity}
            speed={speed}
            tempUnit={tempUnit}
            speedUnit={speedUnit}
          ></Descriptions>
        </div>
      </div>
    </div>
  );
};

export default App;