import React from "react";
import "./App.css";
import Date from "./Date";
import TempConversion from "./TempConversion";
import Search from "./Search";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>
          {" "}
          Bari <span id="heading"></span>
          <img id="main-icon" src="" alt="sun" />
          <span id="description"></span>
        </h1>
        <Date />
        <ul>
          <TempConversion />
          <li>
            Humidity: <span id="humidity"> 20% </span>
          </li>
          <li>
            Wind: <span id="wind"> 5 km/h</span>
          </li>
          <Search />
        </ul>
      </div>
      <Forecast />
    </div>
  );
}

