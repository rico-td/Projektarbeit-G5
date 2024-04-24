import React from "react";
import { useState } from "react";
import style from "./HourlyForecast.module.css";

// background-img
import bgToday from "../../../assets/ForecastDay/o3.jpg";
import ForecastOneHour from "./ForecastOneHour/ForecastOneHour.jsx";

function HourlyForecast() {
  const [bg] = useState(bgToday);

  return (
    <div
      className={`${style.containerToday} flex flex-col justify-center items-center w-[85%] h-[200px] my-10 text-white`}
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="text-xl my-2 underline">Hourly Forecast</p>

      <div className="flex justify-center items-center w-[100%] h-[100%] gap-3">
        <ForecastOneHour />
        <ForecastOneHour />
        <ForecastOneHour />
        <ForecastOneHour />
        <ForecastOneHour />
        <ForecastOneHour />
      </div>
    </div>
  );
}

export default HourlyForecast;
