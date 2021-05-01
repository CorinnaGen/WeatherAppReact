import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){
    function maxTemp(){
        let tempMax = Math.round(props.day.temp.max);
      
        return( `${tempMax}ºC |`);
    }

    function minTemp(){
          let tempMin = Math.round(props.day.temp.min);
          return (`${tempMin}ºC`);
    }

    function displayDay(){
        let date = new Date(props.day.dt *1000);
        let day = date.getDay();

        let days =["Sun","Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];
        return days[day];
    }
    return (
        <div className="ForecastDay">
            <div className="forecast-day">{displayDay()}</div>
         <WeatherIcon code={props.day.weather[0].icon}/>
          <div className="forecast-temp"><span className="temp-max">{maxTemp()}</span>
        <span className="temp-min"> {minTemp()}</span></div></div>
        
    );

}