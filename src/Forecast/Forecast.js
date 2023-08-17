import React, {useState, useEffect} from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast({ coordinates}) { 
  const[hasError, setHasError]= useState(false);
  const[forecastData, setforecastData] = useState(null);

  useEffect(()=>{
    loadData()
  }, [coordinates]);


const loadData = async () => {
  const apiKey = process.env.FORECAST_API_KEY
  let lon = coordinates.lon;
  let lat= coordinates.lat;
  const apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`;

try {
  const response = await axios.get(apiURL)
 setforecastData(response.data.daily)
}
catch(error){
 console.log(`Cannot fetchd data ${error}`)
 setHasError(true)
}

}


return (
  <div className="Forecast">
    {!hasError ? (
          <div className="row">
          {forecastData.map(function(dailyForecast, index){
            if (index < 5){
              return(
            <div className="col" key={index}>
            <WeatherForecastDay day={dailyForecast}/>
            </div>
          );
          } else{ return null}
          })}
          
        </div>
    ) : <p>Something went wrong, please retry</p> }

  </div>);
}
