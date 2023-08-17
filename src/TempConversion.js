import React, {useState} from "react";
import "./TempConversion.css";

export default function TempConversion({ temperature }) {
  const[unit, setUnit]=useState("celsius");
  function convertToF(event){
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event){
    event.preventDefault();
    setUnit("celsius");
  }
  if(unit=== "celsius"){
  return (
    <li className="TempConversion">
       Temperature: <span>
          {Math.round(temperature)} <a href="/" onClick={convertToC} className="C">ºC</a> |<a href="/" onClick={convertToF} className="F"> ºF</a></span>
    </li>
  );
}else{
    let fahrenheit = (temperature* 9/5) + 32;
    return <li className="TempF">
       Temperature: <span>
          {Math.round(fahrenheit)} <a href="/" onClick={convertToC} className="C">ºC</a> | <a href="/" onClick={convertToF} className="F"> ºF</a></span>
          

      
  
    
    </li>
  }
}
