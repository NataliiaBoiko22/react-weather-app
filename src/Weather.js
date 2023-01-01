import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Gdansk</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://assets.msn.com/weathermapdata/1/static/svg/72/v6/card/CloudyV3.svg"
              alt="Mostly Cloudy"
              className="float-left"
            />{" "}
            <div className="float-left">
              <span className="temperature">6</span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <li>Precipitation: 0%</li>
          <li>Humidity 72% </li>

          <li>Wind: 18km/h</li>
        </div>
      </div>
    </div>
  );
}
