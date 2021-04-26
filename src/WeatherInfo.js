import React from "react";
import FormattedDate from "./FormattedDate";
import TempConversion from "./TempConversion";
import Forecast from "./Forecast";

export default function Weatherinfo(props) { return( 
    <div className="WeatherInfo">
    <div className="container">
        <h1>
          {props.data.city} <span id="heading"></span>
          <img id="main-icon" src="" alt="weather" />
          <span id="description">{props.data.description}</span>
        </h1> Today is
        <FormattedDate date={props.data.date}/>
        <ul> Temperature: <span>
          {Math.round(props.data.temperature)}</span>
          <TempConversion />
          <li>
           Humidity: <span id="humidity">  {props.data.humidity} %</span>
          </li>
          <li> Wind:
            <span id="wind"> {Math.round(props.data.wind)}km/h </span>
          </li>
           <li className="Search">
      <form id="choose-form">
        <input
          type="text"
          id="city-input"
          placeholder="Search city"
          autocomplete="off"
          autofocus="on"
          
        />
        <input type="submit" id="submit-button" value="Search" />
        <input type="submit" id="current-button" value="Current position" />
      </form>
    </li>
        </ul>
      </div>
      <Forecast />
      <a href="https://github.com/CorinnaGen/my-app">I appreciate your advice and suggestions!</a>
    </div> 
    
  );

}