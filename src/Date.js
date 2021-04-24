import React from "react";
import "./Date.css";

export default function Date(props) {
    let days=["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"]
    let date= days[props.date.getDay()];
    let hours=props.date.getHours();
    if (hours <10){
      hours= `0${hours}`;
    }
    let minutes=props.date.getMinutes();
    if (minutes <10){
      minutes= `0${minutes}`;
    }
   
    return (<div className="Date">
      <h2 id="current-time">¨{date} {hours}:{minutes}</h2>
      <br />
    </div>
  );
}