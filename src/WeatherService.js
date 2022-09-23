const API_KEY='2b67a6e7d72ce1a7a7c5eae9874cbe8b';

const getFormattedWeatherData = async(city, units='metric')=>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data=await fetch(URL)
                        .then(res=>res.json())
                        .then(data=>data)
        console.log(data)
};

export {getFormattedWeatherData};


