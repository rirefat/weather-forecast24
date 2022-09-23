import React from 'react';
import './App.css';
import hotBg from './assets/hot.jpg';
import coldBg from './assets/cold.jpg';
import logo from './assets/logo.png';

const App = () => {
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
              <h3>London, GB</h3>
              <img src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-8.png" alt="weather icon" className='dummy-img'/>
              <h3>Cloudy</h3>
            </div>

            <div className="temperature">
              <h1>34°C</h1>
            </div>
          </div>

          {/* Bottom Description */}
        </div>
      </div>
    </div>
  );
};

export default App;