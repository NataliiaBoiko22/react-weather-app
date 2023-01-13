import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>
      <div className="row mt-4 mb-3">
        <div className="col-6">
          <div className="clearfix d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i className="fa-solid fa-droplet"></i>Humidity:{" "}
              {props.data.humidity}%{" "}
            </li>

            <li>
              {" "}
              <i class="fa-solid fa-wind"></i>Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
