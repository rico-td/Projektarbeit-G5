import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

function CurrentWeather(data) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 select-none text-[1rem]">
      <div>
        <h2 className="flex justify-center items-center text-white mb-3">
          {Math.round(data.main.temp)}°C
        </h2>

        <div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-white">{data.weather[0].main}</h3>
          </div>

          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="flex justify-center items-center">
              <WiHumidity size="25" color="#ffffff" />
              <h4 className="text-white">{Math.round(data.main.humidity)}%</h4>
            </div>
            <div className="text-white">|</div>
            <div className="flex justify-center items-center gap-1">
              <FaWind size="15" color="#ffffff" />
              <h4 className="text-white">{Math.round(data.wind.speed)}m/s</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
