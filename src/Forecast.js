import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function Forecast(props) { 
  const[loaded, setLoaded]= useState(false);
  const[forecastData, setforecastData] = useState(null);

  useEffect(()=>{
    setLoaded(false);

  }, [props.coordinates]);

function handleResponse(response){
  setforecastData(response.data.daily);
  setLoaded(true);
}

  if(loaded){ return (
  <div className="Forecast">
    <div className="row">
      {forecastData.map(function(dailyForecast, index){
        if (index < 5){
          return(
      <div className="col" key={index}>
        <WeatherForecastDay day={dailyForecast}/>

      </div>);
      } else{ return ""}
      })}
      
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
