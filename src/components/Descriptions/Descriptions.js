import React from 'react';
import './Descriptions.css';
import { FiArrowDown } from "react-icons/fi";

const Descriptions = (props) => {
    const {feelingTemp, maxTemp, minTemp, pressure, humidity, speed}=props;
    return (
        <div className='section section__description'>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Feels Like</small>
                </div>
                <h2>{feelingTemp}°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Min Temperature</small>
                </div>
                <h2>{minTemp}°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Max Temperature</small>
                </div>
                <h2>{maxTemp}°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Pressure</small>
                </div>
                <h2>{pressure}hPa</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Humidity</small>
                </div>
                <h2>{humidity}%</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Wind Speed</small>
                </div>
                <h2>{speed}m/s</h2>
            </div>
        </div>
    );
};

export default Descriptions;