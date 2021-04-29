import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";



export default function Forecast(props) { 
  const[loaded, setLoaded]= useState(false);
  const[forecastData, setforecastData] = useState(null);

function handleResponse(response){
  setforecastData(response.data.daily);
  setLoaded(true);
}

  if(loaded){ return (<div className="Forecast">
    <div className="row">
      <div className="col">
        <div className="forecast-day">{forecastData[0].dt}</div>
         <WeatherIcon code={forecastData[0].weather[0].icon}/>
          <div className="forecast-temp"><span className="temp-max">{Math.round(forecastData[0].temp.max)}º</span>
        <span className="temp-min"> {Math.round(forecastData[0].temp.min)}º</span></div>

      </div>
    </div>

  </div>);
  } else { 
  let apiKey = "35ff16e74e68adae9ff398085403f122";
  let lon = props.coordinates.lon;
  let lat= props.coordinates.lat;
  let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(handleResponse)

  return null;

 }}
