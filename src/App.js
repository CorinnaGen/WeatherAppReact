import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt*1000),
    description: response.data.weather[0].description,
    city: response.data.name,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
    icon: response.data.weather[0].icon,
  });
  }
function TypeCity(){
 const apiKey ="2ddba96f0fcb6192487bc316e83fa5a2";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);

}

 function handleSubmit(event){
   event.preventDefault();
   TypeCity();
  
 }

 function handleCityChange(event){
   setCity(event.target.value);

 }

 if(weatherData.ready) {
  return (
    <div className="App"> <form id="choose-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city-input"
          placeholder="Search city"
          autoComplete="off"
          autoFocus="on"
          onChange={handleCityChange}
          
        />
        <input type="submit" id="submit-button" value="Search" autoFocus/>
      </form>
      
      <WeatherInfo infoWeather={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>
      <a href="https://github.com/CorinnaGen/my-app">I appreciate your advice and suggestions!</a>
      
      </div>);
     }
  else {
    TypeCity();
 
    return "Loading...";
  }


}

