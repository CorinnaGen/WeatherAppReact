import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
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
          autocomplete="off"
          autofocus="on"
          onChange={handleCityChange}
          
        />
        <input type="submit" id="submit-button" value="Search" />
        <input type="submit" id="current-button" value="Current position" />
      </form>
      <WeatherInfo infoWeather={weatherData}/>
      
      </div>);
     }
  else {
    TypeCity();
 
    return "Loading...";
  }
}

