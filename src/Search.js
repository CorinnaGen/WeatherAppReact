import React from "react";
import "./Search.css";

export default function Search() {

  
  return (
    <li className="Search">
      <form id="choose-form">
        <input
          type="text"
          id="city-input"
          placeholder="Search city"
          autocomplete="off"
          autofocus="on"
          
        />
        <input type="submit" id="submit-button" value="Search" />
        <input type="submit" id="current-button" value="Current position" />
      </form>
    </li>
  );
}