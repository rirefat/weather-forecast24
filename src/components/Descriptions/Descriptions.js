import React from 'react';
import './Descriptions.css';
import { FiArrowDown } from "react-icons/fi";
import { IoHappyOutline } from "react-icons/io";
import { BsWind,BsSortUpAlt,BsSortDown } from "react-icons/bs";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

const Descriptions = (props) => {
    const {feelingTemp, maxTemp, minTemp, pressure, humidity, speed, tempUnit, speedUnit}=props;

    const data=[
        {
            id:1,
            icon: <IoHappyOutline/>,
            title:"Feels Like",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:2,
            icon: <BsSortDown/>,
            title:"Minimum Temperature",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:3,
            icon: <BsSortUpAlt/>,
            title:"Maximum Temperature",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:4,
            icon: <MdCompress/>,
            title:"Pressure",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:5,
            icon: <WiHumidity/>,
            title:"Humidity",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:6,
            icon: <BsWind/>,
            title:"Wind Speed",
            data:feelingTemp,
            unit: tempUnit
        },
    ]


    return (
        <div className='section section__description'>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Feels Like</small>
                </div>
                <h2>{feelingTemp} {tempUnit}</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Min Temperature</small>
                </div>
                <h2>{minTemp} {tempUnit}</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Max Temperature</small>
                </div>
                <h2>{maxTemp} {tempUnit}</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Pressure</small>
                </div>
                <h2>{pressure} hPa</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Humidity</small>
                </div>
                <h2>{humidity} %</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>Wind Speed</small>
                </div>
                <h2>{speed} {speedUnit}</h2>
            </div>
        </div>
    );
};

export default Descriptions;