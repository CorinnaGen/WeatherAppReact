import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) { return( 
    <div className="WeatherInfo">
    <div className="container">
        <h1> 
          {props.infoWeather.city} <span id="heading"></span></h1> 
         <h2> <span id="description">{props.infoWeather.description}</span></h2><br></br>
         <div className="float-left">
         <WeatherIcon code={props.infoWeather.icon} />
         </div>
        
        <FormattedDate date={props.infoWeather.date}/>
        <ul>
          <TempConversion celsius={props.infoWeather.temperature}/>
          <li>
           Humidity: <span id="humidity">  {props.infoWeather.humidity} %</span>
          </li>
          <li> Wind:
            <span id="wind"> {Math.round(props.infoWeather.wind)}km/h </span>
          </li>
        </ul>
      </div>
      
      
    </div> 
    
  );

}