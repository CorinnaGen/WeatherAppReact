import React from "react";
import "./Forecast.css";



export default function Forecast() {
  return (
    <p className="Forecast">
      Per hours:{" "}
      <div class="row" id="forecast">
        <div class="col-3">
          8 am
          <br />
          <i class="fas fa-sun"></i>
        </div>
        <div class="col-3">
          12 pm
          <br />
          <i class="fas fa-cloud-sun"></i>
        </div>
        <div class="col-3">
          4 pm
          <br />
          <i class="fas fa-cloud-sun"></i>
        </div>
        <div class="col-3">
          12 am
          <br />
          <i class="fas fa-cloud-moon"></i>
        </div>
      </div>
    </p>
  );
}
