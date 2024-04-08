// -------------- STYLE -----------------
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
    </div>
  );
}

export default Home;