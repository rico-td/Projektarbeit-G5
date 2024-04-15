// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuickStats/QuickStats";
import style from "./Home.module.css";
import bg from "../assets/img/bg.jpg";
import InputFull from "../components/InputFull/InputFull.js";
import Forecast7Days from "../components/Forecast7Days/Forecast7Days.js";
import Forecast7DaysComponent from "../components/Forecast7Days/Forecast7DaysComponent.js";

import FlippingCard from "../components/FlippingCard/FlippingCard.js";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className="hello mt-10 flex flex-col justify-center items-center">
      <img src={bg} className={style.bg} alt="background" />
      <InputFull />
      <div className="mt-7">
        <CurrentCity />
      </div>
      <div className="mt-20">
        <Forecast7DaysComponent />
        {/* <Forecast7Days /> */}
      </div>
    </div>
  );
}

export default Home;
