// tools
import { useState } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg2.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather.jsx";
import FlipCard from "../components/FlipCard/FlipCard.jsx";
import Slider from "../components/x/slider.jsx";

function Home() {
  //
  // more efficent to update the background-img
  // to update just the img in the component and not the whole component
  const [bg] = useState(bgImage);

  return (
    <div
      className="flex flex-col items-center py-[25px] mx-auto w-[100vw] h-[100vh] p-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <InputFields />
      <CurrentLocationAndTime />

      {/* <FlipCard /> */}
      <Slider />
      <Slider />
    </div>
  );
}

export default Home;
