import React from "react";
// import "./Forecast7Days.module.css";

import FlippingCard from "../FlippingCard/FlippingCard.js";

import img01 from "../../assets/Forecast7Days/o1.jpg";
import img02 from "../../assets/Forecast7Days/o2.jpg";
import img03 from "../../assets/Forecast7Days/o3.jpg";
import img04 from "../../assets/Forecast7Days/o4.jpg";
import img05 from "../../assets/Forecast7Days/o5.jpg";
import img06 from "../../assets/Forecast7Days/o6.jpg";
import img07 from "../../assets/Forecast7Days/o7.jpg";

function Forecast7DaysComponent() {
  return (
    <div className="flex gap-2">
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
    </div>
  );
}

export default Forecast7DaysComponent;
