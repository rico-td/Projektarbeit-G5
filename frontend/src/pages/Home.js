// tools
import { useState } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg2.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentCity from "../components/CurrentCity/CurrentCity";

import HourlyForecast from "../components/Forecast/HourlyForecast/HourlyForecast.jsx";
import DailyForecast from "../components/Forecast/DailyForecast/DailyForecast.jsx";

function Home() {
  // more efficent to update the background-img
  // to update just the img in the component and not the whole component
  const [bg] = useState(bgImage);

  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[100vh] p-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <InputFields />
      <HourlyForecast />
      <DailyForecast />
      {/* <CurrentCity /> */}
    </div>
  );
}

export default Home;
