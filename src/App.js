import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import WeatherInfo from "./WeatherInfo/WeatherInfo";
import Forecast from "./Weekorecast/Forecast";

export default function App() {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState("Rome");

const handleResponse = (response) => {
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

const searchCity = async ()=> {
const apiKey = process.env.CITY_API_KEY
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try {
const response = await axios.get(apiUrl);
handleResponse(response)
}catch(error){
  console.log(`Error fetching data ${error}`)
}

}

const handleSubmit = (event) =>{
  event.preventDefault();
  searchCity();
}

function handleCityChange(event){
setCity(event.target.value);
}


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
      
      <WeatherInfo weatherData={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>
      <a href="https://github.com/CorinnaGen/my-app">I appreciate your advice and suggestions!</a>
      
      </div>
      );
}

