import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "../WeatherForecast/WeatherIcon";
import WeatherData from "../WeatherForecast/WeatherData";

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather">
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;