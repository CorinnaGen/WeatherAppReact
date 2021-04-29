import React from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";



export default function Forecast(props) { 
function handleResponse(response){
  console.log(response.data);
}

  let apiKey = "96f0fcb6192487bc316e83fa5a2";
  let lon = props.coordinates.lon;
  let lat= props.coordinates.lat;
  let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`;
  axios.get(apiURL).then(handleResponse)

  return (<div className="Forecast">
    <div className="row">
      <div className="col">
        <div className="forecast-day">Thu</div> <WeatherIcon code="01d"/> <div className="forecast-temp"><span className="temp-max">19º</span>
        <span className="temp-min"> 10º</span></div>

      </div>
    </div>

  </div>);}
