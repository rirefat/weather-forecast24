import React from 'react';
import './Descriptions.css';
import { FiArrowDown } from "react-icons/fi";

const Descriptions = () => {
    return (
        <div className='section section__description'>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>min</small>
                </div>
                <h2>32°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>min</small>
                </div>
                <h2>32°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>min</small>
                </div>
                <h2>32°C</h2>
            </div>
            <div className="card">
                <div className="desctiption__card-icon">
                    <FiArrowDown></FiArrowDown>
                    <small>min</small>
                </div>
                <h2>32°C</h2>
            </div>
        </div>
    );
};

export default Descriptions;