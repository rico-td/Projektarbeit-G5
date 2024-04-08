// -------------- STYLE -----------------
import CurrentCity from "../components/CurrentCity/CurrentCity";
import style from "./Home.module.css";
// -------------- LOGIC -----------------

// -------------- ELEMENTS -----------------

function Home() {
  return (
    <div className={style.Home}>
      <h2
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Home Page
        </h2>

        <CurrentCity />
    </div>
  );
}

export default Home;