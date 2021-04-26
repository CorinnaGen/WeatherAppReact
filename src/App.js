import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt*1000),
    description: response.data.weather[0].description,
    city: response.data.main.name,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
  });
  }
 
 if(weatherData.ready) {
  return (
    <div className="App">
      <WeatherInfo infoWeather={weatherData}/>
      </div>);
     }
  else {
  const apiKey ="2ddba96f0fcb6192487bc316e83fa5a2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

