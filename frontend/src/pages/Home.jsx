// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuckStats/QuickStats";
import style from "./Home.module.css";
import bg from "../img/bg.jpg"
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className={style.Home}>
      <img src={bg} className={style.bg} />
     
      <CurrentCity />
      <QuickStats/>
    </div>
  );
}

export default Home;