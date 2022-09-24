import React from 'react';
import './Card.css';

const Card = (props) => {
    const {icon, title, data, unit}=props.data;
    return (
        <div className='card'>
            <div className="description__card-icon">
                    {icon}
                    <small>{title}</small>
                </div>
                <h2>{data} {unit}</h2>
        </div>
    );
};

export default Card;