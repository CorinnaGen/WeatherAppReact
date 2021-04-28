import React, {useState} from "react";
import "./TempConversion.css";

export default function TempConversion(props) {
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
          {Math.round(props.celsius)} <a href="/" onClick={convertToC}>ºC</a> | <a href="/" onClick={convertToF}> ºF</a></span>
          

      
  
    
    </li>
  );}
  else{
    let fahrenheit = (props.celsius* 9/5) + 32;
    return <li className="TempF">
       Temperature: <span>
          {Math.round(fahrenheit)} <a href="/" onClick={convertToC}>ºC</a> | <a href="/" onClick={convertToF}> ºF</a></span>
          

      
  
    
    </li>
  }
}
