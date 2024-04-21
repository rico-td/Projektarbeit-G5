import React, { useState } from "react";
import style from "./FlipCard.module.css";

import ReactCardFlip from "react-card-flip";

import CurrentWeather from "../CurrentWeather/CurrentWeather";

function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomImage, setRandomImage] = useState(getRandomImage());

  // function to choose a randome img for Forecast
  function getRandomImage() {
    const images = [
      require("../../assets/Forecast7Days/o1.jpg"),
      require("../../assets/Forecast7Days/o2.jpg"),
      require("../../assets/Forecast7Days/o3.jpg"),
      require("../../assets/Forecast7Days/o4.jpg"),
      require("../../assets/Forecast7Days/o5.jpg"),
      require("../../assets/Forecast7Days/o6.jpg"),
      require("../../assets/Forecast7Days/o7.jpg"),
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[1];
  }
  function handleFlip() {
    setIsFlipped(!isFlipped);
    setRandomImage(getRandomImage());
  }
  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        className={`${style.card}`}
        style={{ backgroundImage: `url(${randomImage})` }}
        onClick={handleFlip}
      >
        <CurrentWeather />
      </div>
      <div
        className={`${style.card} ${style.back}`}
        style={{ backgroundImage: `url(${randomImage})` }}
        onClick={handleFlip}
      >
        more information
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
