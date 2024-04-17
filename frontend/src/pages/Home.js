// tools
import { useState } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentCity from "../components/CurrentCity/CurrentCity";
import ForecastDay from "../components/ForecastDay/ForecastDay.jsx";
import FlippingCard from "../components/FlippingCard/FlippingCard.js";
import ForecastWeek from "../components/ForecastWeek/ForecastWeek.js";
function Home() {
  // more efficent to update the background-img
  // to update just the img in the component and not the whole component
  const [bg] = useState(bgImage);

  return (
    <div
      className="flex flex-col items-center w-[100vw] h-[100vh] p-[50px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div>
        <InputFields className="mt-[50px]" />
      </div>
      <div className="mt-[50px]">
        <ForecastDay />
        <ForecastWeek />
      </div>
    </div>
  );
}

export default Home;
