// tools
import { useState } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg.jpg";

// components
import InputFull from "../components/InputFull/InputFull.js";
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuickStats/QuickStats";
import FlippingCard from "../components/FlippingCard/FlippingCard.js";
import Forecast7DaysComponent from "../components/Forecast7Days/Forecast7DaysComponent.js";

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
        <InputFull className="mt-[50px]" />
      </div>
      <div className="mt-[50px]">
        <QuickStats />
        <Forecast7DaysComponent />
      </div>
    </div>
  );
}

export default Home;
