import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ date }){
    const { day } = date

    function maxTemp(){
        let tempMax = Math.round(day.temp.max);
      
        return( `${tempMax}ºC |`);
    }

    function minTemp(){
          let tempMin = Math.round(day.temp.min);
          return (`${tempMin}ºC`);
    }

    function displayDay(){
        let date = new Date(day.dt * 1000);
        let today = date.getDay();
         const days =["Sun","Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
        return days[today];
    }
    return (
        <div className="ForecastDay">
            <div className="forecast-day">{displayDay()}</div>
         <WeatherIcon code={day.weather[0].icon}/>
          <div className="forecast-temp"><span className="temp-max">{maxTemp()}</span>
        <span className="temp-min"> {minTemp()}</span></div></div>
        
    );

}