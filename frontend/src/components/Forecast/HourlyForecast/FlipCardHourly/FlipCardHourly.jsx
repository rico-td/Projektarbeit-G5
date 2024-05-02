import React, { useState } from "react";
import style from "./FlipCardHourly.module.css";

import ReactCardFlip from "react-card-flip";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

import img from "../../../../assets/ForecastDay/o3.png";

import formatTime from "../../../../utils/formatTime";

function FlipCard({
  temperature,
  main_description,
  windSpeed,
  humidity,
  temp_min,
  temp_max,
  time,
  isCelsius,
  weatherIcon,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  // Convert the time to 12-hour format
  const time12 = formatTime(time);

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        className={`${style.card}`}
        style={{
          backgroundImage: `url(${img}) `,
          opacity: "0.85",
        }}
        onClick={handleFlip}
      >
        <div className="h-[100%] flex flex-col justify-arround items-center">
          <p className="font-extralight text-xl mt-2">{`${time12}`}</p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center ">
              <img
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt=""
              />
              <div className="flex flex-col justify-center items-center">
                <p className="text-4xl font-extralight">
                  {`${temperature} ${isCelsius ? "°C" : "°F"}`}
                </p>
                <p className="">{main_description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.card} ${style.back} `}
        style={{ backgroundImage: `url(${img})`, opacity: "0.8" }}
        onClick={handleFlip}
      >
        <div className="flex flex-col items-center justify-around h-[70%] gap-2">
          <div className="flex justify-center items-center">
            <WiHumidity size="25" color="#ffffff" />
            <p className="">{`${humidity} %`}</p>
          </div>

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
      </div>
    </ReactCardFlip>
  );
}

export default FlipCard;
