import React from "react";
import style from "./RainyCloud.module.css";
import { useEffect } from "react";

function RainyCloud() {
  useEffect(() => {
    function rain() {
      let cloud = document.querySelector(".cloud");
      let e = document.createElement("div");

      e.classList.add("drop");
      cloud.appendChild(e);

      setTimeout(function () {
        cloud.removeChild(e);
      }, 2000);
    }

    const intervalId = setInterval(rain, 20);

    // Clean-up-Funktion, um das Interval zu stoppen
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.cloud}></div>
    </div>
  );
}

export default RainyCloud;
