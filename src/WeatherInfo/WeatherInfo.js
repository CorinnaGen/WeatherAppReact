import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo({ weatherData}) { return( 
    <div className="WeatherInfo">
    <div className="container">
        <h1> 
          {weatherData.city} <span id="heading"></span></h1> 
         <h2> <span id="description">{weatherData.description}</span></h2><br></br>
         <div className="float-left">
         <WeatherIcon code={weatherData.icon} />
         </div>
        <FormattedDate date={weatherData.date}/>
        <ul>
          <TempConversion temperature={weatherData.temperature}/>
          <li>
           Humidity: <span id="humidity">{weatherData.humidity} %</span>
          </li>
          <li> Wind:
            <span id="wind"> {Math.round(weatherData.wind)}km/h </span>
          </li>
        </ul>
      </div>
      
      
    </div> 
    
  );

}