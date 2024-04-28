import React, { useState } from "react";
import style from "./FlipCardDaily.module.css";

import ReactCardFlip from "react-card-flip";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

import img from "../../assets/ForecastDay/flipImg.jpg";

function FlipCard({
  temperature,
  description,
  windSpeed,
  humidity,
  temp_min,
  temp_max,
  date,
  isCelsius,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        className={`${style.card}`}
        style={{ backgroundImage: `url(${img}) `, opacity: "0.8" }}
        onClick={handleFlip}
      >
        <div className="h-[100%] flex flex-col justify-arround items-center">
          <p className="text-xl font-extralight mt-2">{date.slice(5)}</p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center my-5">
              <p className="text-4xl font-extralight">
                {" "}
                {`${temperature} ${isCelsius ? "°C" : "°F"}`}
              </p>

              <TiWeatherCloudy size="45" color="#ffffff" />
            </div>
            <p className="">{description}</p>
          </div>
        </div>
      </div>

      <div
        className={`${style.card} ${style.back}`}
        style={{ backgroundImage: `url(${img})`, opacity: "0.8" }}
        onClick={handleFlip}
      >
        <div className="flex flex-col items-center justify-around h-[70%] gap-2">
          <div className="flex justify-center items-center gap-1">
            <FaWind size="15" color="#ffffff" />
            <p className="">{`${windSpeed} m/s`}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex justify-center items-center gap-1">
              <FaTemperatureHigh size="20" color="#ffffff " />
              <p className="text-l font-light">
                {`${temp_max} ${isCelsius ? "°C" : "°F"}`}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FaTemperatureLow size="20" color="#ffffff " />
              <p className=" text-l font-light">
                {`${temp_min} ${isCelsius ? "°C" : "°F"}`}
              </p>
            </div>
          </div>
        </div>
        ;
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
