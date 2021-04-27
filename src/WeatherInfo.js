import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import Forecast from "./Forecast";

export default function Weatherinfo(props) { return( 
    <div className="WeatherInfo">
    <div className="container">
        <h1>
          {props.infoWeather.city} <span id="heading"></span>
          <img id="main-icon" src="" alt="weather" />
          <span id="description">{props.infoWeather.description}</span>
        </h1> 
        <FormattedDate date={props.infoWeather.date}/>
        <ul> Temperature: <span>
          {Math.round(props.infoWeather.temperature)}</span>
          <TempConversion />
          <li>
           Humidity: <span id="humidity">  {props.infoWeather.humidity} %</span>
          </li>
          <li> Wind:
            <span id="wind"> {Math.round(props.infoWeather.wind)}km/h </span>
          </li>
           <li className="Search">
     
    </li>
        </ul>
      </div>
      <Forecast />
      <a href="https://github.com/CorinnaGen/my-app">I appreciate your advice and suggestions!</a>
    </div> 
    
  );

}