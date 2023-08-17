import React from "react";
import WeatherIcon from "../WeatherInfo/WeatherIcon";
import { getToday } from "../utils";
export default function WeatherForecastDay({ date }){
    const { day } = date

    const maxTemp = () =>{
    let tempMax = Math.round(day.temp.max);
    return( `${tempMax}ºC |`);
    }

    const minTemp = () => {
    let tempMin = Math.round(day.temp.min);
    return (`${tempMin}ºC`);
    }

  const displayDay = () =>{
        let date = new Date(day.dt * 1000);
        const today = getToday(date)
        return today
    }
    return (
<div className="ForecastDay">
    <div className="forecast-day">{displayDay()}</div>
    <WeatherIcon code={day.weather[0].icon}/>
    <div className="forecast-temp"><span className="temp-max">{maxTemp()}</span>
    <span className="temp-min"> {minTemp()}</span></div></div>     
    );

}