// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import QuickStats from "../components/QuickStats/QuickStats";
import style from "./Home.module.css";
import bg from "../assets/img/bg.jpg"
import SearchBar from "../components/SearchBar/SearchBar";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className={style.Home}>
      <img src={bg} className={style.bg} />
      <SearchBar/>
      <CurrentCity />
      <div className={style.containerQuickStats}>
        <QuickStats />
      </div>
    </div>
  );
}

export default Home;