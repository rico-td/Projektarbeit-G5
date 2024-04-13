import React from "react";
import { WiHumidity, CiSearch } from "react-icons/wi";
import { TiWeatherSunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa6";
import { useState, useEffect } from "react";

const temp = "28°";
const humidity = "62%";
const windspeed = "high";

function QuickStats() {
  return (
    <div className="flex justify-center items-center gap-4 cursor-default">
      <h2 className="text-white text-7xl align-middle">{temp}</h2>

      <div>
        <div className="flex flex-col items-center justify-center">
          <TiWeatherSunny size="25" color="#ffffff" />
          <h3 className="text-white">sunny</h3>
        </div>

        <div className="flex items-center justify-center gap-1 mt-1">
          <div className="flex justify-center items-center">
            <WiHumidity size="25" color="#ffffff" />
            <h4 className="text-white">{humidity}</h4>
          </div>
          <div className="text-white">|</div>
          <div className="flex justify-center items-center gap-1">
            <FaWind size="15" color="#ffffff" />
            <h4 className="text-white">{windspeed}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStats;
