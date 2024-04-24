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
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        className={`${style.card}`}
        style={{ backgroundImage: `url(${img}) `, opacity: "0.7" }}
        onClick={handleFlip}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="font-semilight">{date}</p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center my-5">
              <p className="text-2xl">{`${temperature} °C`}</p>
              <div className="flex flex-col justify-center items-center">
                <TiWeatherCloudy size="45" color="#ffffff" />
                <p className="">{description}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center gap-1">
                <FaTemperatureHigh size="20" color="#ffffff " />
                <p className="text-l">{`${temp_max} °C`}</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaTemperatureLow size="20" color="#ffffff " />
                <p className=" text-l">{`${temp_min} °C`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.card} ${style.back}`}
        style={{ backgroundImage: `url(${img})`, opacity: "0.8" }}
        onClick={handleFlip}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <p>sunrise</p>
          </div>
          <div>
            <p>sunset</p>
          </div>
          <div className="flex items-center justify-center gap-5 mt-1">
            <div className="flex justify-center items-center">
              <WiHumidity size="25" color="#ffffff" />
              <p className="">{`${humidity} %`}</p>
            </div>

            <div className="flex justify-center items-center gap-1">
              <FaWind size="15" color="#ffffff" />
              <p className="">{`${windSpeed} m/s`}</p>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
