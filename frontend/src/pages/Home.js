// tools
import { useState, useEffect } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg2.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import Slider from "../components/x/slider.jsx";

// fetching data
import { fetchCurrentDay } from "../api/queries.js";

function Home() {
  const [city, setCity] = useState("Berlin");
  const [forecastData, setForecastData] = useState(null);

  async function fetchCityAndTime() {
    try {
      const jsonResponse = await fetchCurrentDay(city);
      console.log("RECEIVED FROM HOME.JS:", jsonResponse);

      setForecastData(jsonResponse);
    } catch (e) {
      console.log("Error", e);
    }
  }

  useEffect(() => {
    fetchCityAndTime();
  }, []);

  //
  // more efficent to update the background-img
  // to update just the img in the component and not the whole component
  const [bg] = useState(bgImage);

  return (
    <div
      className="flex flex-col items-center px-[20px] mx-auto w-[100vw] h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <InputFields />
      <CurrentLocationAndTime cityName={city} />
      <Slider />
    </div>
  );
}

export default Home;
