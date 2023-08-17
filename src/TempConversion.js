import React, {useState } from "react";
import "./TempConversion.css";

export default function TempConversion({ temperature }) {
  const [convertedTemp, setConvertedTemp] = useState(temperature)
  const [isCelsius, setIsCelsius] = useState(true)

const handleConvert = () => {
 isCelsius ? convertTemperatureToF() : resetTemperature()
}

const convertTemperatureToF = (event) => {
  event.preventDefault();
  setIsCelsius(false)
  setConvertedTemp((temperature* 9/5) + 32);
  }

const resetTemperature = () => {
  setIsCelsius(true)
  setConvertedTemp(temperature)
}

  return (
    <li className="TempConversion">
      Temperature: 
      <span onClick={handleConvert}>
          {Math.round(convertedTemp)} 
      </span>
      {isCelsius ? <span>C</span> : <span>F</span>}
    </li>
  );

}
