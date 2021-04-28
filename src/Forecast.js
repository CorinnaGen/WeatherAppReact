import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";



export default function Forecast() {
  return (<div className="Forecast">
    <div className="row">
      <div className="col">
        <div className="forecast-day">Thu</div> <WeatherIcon code="01d"/> <div className="forecast-temp"><span className="temp-max">19º</span>
        <span className="temp-min"> 10º</span></div>

      </div>
    </div>

  </div>);}
