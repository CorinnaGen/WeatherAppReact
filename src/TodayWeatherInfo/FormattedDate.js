import React from "react";
import { getToday, formatTime } from "../utils";
import "./FormattedDate.css";

export default function FormattedDate({ date }) {
    const today = getToday(date)
    let hours=date.getHours();
    formatTime(hours)
    let minutes=date.getMinutes();
    formatTime(minutes)
   
    return (
    <div className="Date">
      <h2 id="current-time">{`${today}, ${hours}:${minutes}`}</h2>
      <br />
    </div>
  );
}