import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Date from "./Date";
import TempConversion from "./TempConversion";
import Search from "./Search";
import Forecast from "./Forecast";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt*1000),
    description: response.data.main.weather[0].description,
    city: response.data.main.name,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
  });
  }
 
 if(weatherData.ready) {
  return (
    <div className="App">
      <div className="container">
        <h1>
          {weatherData.city} <span id="heading"></span>
          <img id="main-icon" src="" alt="weather" />
          <span id="description">{weatherData.description}</span>
        </h1>
        <Date date={weatherData.date}/>
        <ul>
          {Math.round(weatherData.temperature)}
          <TempConversion />
          <li>
            {weatherData.humidity}: <span id="humidity"> 20% </span>
          </li>
          <li>
            {weatherData.wind}: <span id="wind"> 5 km/h</span>
          </li>
          <Search />
        </ul>
      </div>
      <Forecast />
      <a href="https://github.com/CorinnaGen/my-app">I appreciate your advice and suggestions!</a>
    </div>
  );}
  else {
  const apiKey ="2ddba96f0fcb6192487bc316e83fa5a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
 axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

