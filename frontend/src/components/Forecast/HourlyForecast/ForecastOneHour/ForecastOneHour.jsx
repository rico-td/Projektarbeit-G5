import React from "react";
import { useState } from "react";
import { TiWeatherShower } from "react-icons/ti";

import bgToday from "../../../../assets/Forecast7Days/o2.jpg";

function ForecastOneHour() {
  const [bg] = useState(bgToday);
  return (
    <div
      className="flex flex-col justify-center items-center p-3 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <p className="my-2">5:00 PM</p>
      <TiWeatherShower size="25px" />
      <p className="my-2">25°C</p>
    </div>
  );
}

export default ForecastOneHour;
