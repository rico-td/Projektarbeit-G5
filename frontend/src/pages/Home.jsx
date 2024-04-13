// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuickStats/QuickStats";
import style from "./Home.module.css";
import bg from "../assets/img/bg.jpg";
import InputFull from "../components/InputFull/InputFull.js";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className={style.Home}>
      <img src={bg} className={style.bg} />
      <InputFull />
      <CurrentCity />
      <div className={style.containerQuickStats}>
        <QuickStats />
      </div>
    </div>
  );
}

export default Home;
