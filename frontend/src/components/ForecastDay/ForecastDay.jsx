import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { WiHumidity } from "react-icons/wi";
import { TiWeatherSunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa6";

function QuickStats(cityName, units) {
  const { data, error, isLoading, isSuccess } = useQuery({
    queryKey: ["dataCity"],
    queryFn: () =>
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=cceeb21005081f70dafeafa10dfdff59&units=metric"
      ).then((res) => res.json()),
  });

  if (error) return <div>error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!isSuccess) return null;

  return (
    <div className="flex flex-col justify-center items-center gap-4 cursor-default select-none">
      <div>
        <h2 className="flex justify-center items-center text-white text-5xl mb-3">
          {Math.round(data.main.temp)}°C
        </h2>

        <div>
          <div className="flex flex-col items-center justify-center">
            {/* <TiWeatherSunny size="25" color="#ffffff" /> */}
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

export default QuickStats;
