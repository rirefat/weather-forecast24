import React from 'react';
import './Descriptions.css';
import { BiHappy } from "react-icons/bi";
import { BsWind,BsSortUpAlt,BsSortDown } from "react-icons/bs";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import Card from '../Card/Card';

const Descriptions = (props) => {
    const {feelingTemp, maxTemp, minTemp, pressure, humidity, tempUnit, speedUnit}=props;

    const datas=[
        {
            id:1,
            icon: <BiHappy/>,
            title:"Feels Like",
            data:feelingTemp,
            unit: tempUnit
        },
        {
            id:2,
            icon: <BsSortDown/>,
            title:"Minimum Temperature",
            data:minTemp,
            unit: tempUnit
        },
        {
            id:3,
            icon: <BsSortUpAlt/>,
            title:"Maximum Temperature",
            data:maxTemp,
            unit: tempUnit
        },
        {
            id:4,
            icon: <MdCompress/>,
            title:"Pressure",
            data:pressure,
            unit: "hPa"
        },
        {
            id:5,
            icon: <WiHumidity/>,
            title:"Humidity",
            data:humidity,
            unit: "%"
        },
        {
            id:6,
            icon: <BsWind/>,
            title:"Wind Speed",
            data:feelingTemp,
            unit: speedUnit
        },
    ];


    return (
        <div className='section section__description'>
            {
                datas.map(data=><Card key={data.id} data={data}></Card>)
            }
        </div>
    );
};

export default Descriptions;