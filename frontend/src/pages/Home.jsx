// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuickStats/QuickStats";
import style from "./Home.module.css";
import bg from "../assets/img/bg.jpg";
import InputFull from "../components/InputFull/InputFull.js";
import RainyCloud from "../components/RainyCloud/RainyCloud.js";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <img src={bg} className={style.bg} alt="background" />
      <InputFull />
      <div className="mt-7">
        <CurrentCity />
      </div>
      {/* <RainyCloud /> */}
      <div className="mt-20">
        <QuickStats />
      </div>
    </div>
  );
}

export default Home;
