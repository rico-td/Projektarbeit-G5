import React from "react";

import { WiHumidity } from "react-icons/wi";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaWind } from "react-icons/fa6";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

function CurrentWeather() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="underline">TODAY</p>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="flex justify-center items-center gap-5 my-5">
          <div className="flex flex-col justify-center items-center">
            <TiWeatherCloudy size="45" color="#ffffff" />
            <p className="">cloudy</p>
          </div>
          <p className="text-2xl">30°C</p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-1">
            <FaTemperatureHigh size="20" color="#ffffff " />
            <p className="text-l">30°C</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaTemperatureLow size="20" color="#ffffff " />
            <p className=" text-l">25°C</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 mt-1">
        <div className="flex justify-center items-center">
          <WiHumidity size="25" color="#ffffff" />
          <p className="">50%</p>
        </div>

        <div className="flex justify-center items-center gap-1">
          <FaWind size="15" color="#ffffff" />
          <p className="">10m/s</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
