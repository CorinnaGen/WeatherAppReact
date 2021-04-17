import React from "react";
import "./TempConversion.css";

export default function TempConversion() {
  return (
    <li className="TempConversion">
      <span id="temp"> 18 </span>
      <a href="#" id="cLink">
        ºC
      </a>
      |
      <a href="#" id="fahLink">
        ºF
      </a>
    </li>
  );
}
