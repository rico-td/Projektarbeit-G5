import React, { useState } from "react";
import style from "./FlipCard.module.css";

import ReactCardFlip from "react-card-flip";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

import img from "../../assets/Forecast7Days/o3.jpg";
function FlipCard({
  temperature,
  description,
  windSpeed,
  humidity,
  temp_min,
  temp_max,
  time,
  sunrise,
  sunset,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped(!isFlipped);
  }

  function convertTo12HourFormat(time) {
    // Split the time into hours and minutes
    const [hours, minutes] = time.split(":");

    // Convert hours to integer
    let hh = parseInt(hours, 10);

    // Determine AM or PM
    const ampm = hh >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hh = hh % 12 || 12;

    // Format the time in 12-hour format
    return `${hh}:${minutes} ${ampm}`;
  }

  // Convert the time to 12-hour format
  const time12 = convertTo12HourFormat(time);

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div
        className={`${style.card}`}
        style={{ backgroundImage: `url(${img})` }}
        onClick={handleFlip}
      >
        <div className="flex flex-col justify-center items-center">
          <p className="">{`${time12}`}</p>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-col justify-center items-center gap-5 my-5">
              <div className="flex flex-col justify-center items-center">
                <TiWeatherCloudy size="45" color="#ffffff" />
                <p className="">{description}</p>
              </div>
              <p className="text-2xl">{`${temperature} °C`}</p>
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
        style={{ backgroundImage: `url(${img})` }}
        onClick={handleFlip}
      >
        <div className="flex flex-col justify-center items-center">
          <div>
            <p>{sunrise}</p>
          </div>
          <div>
            <p>{sunset}</p>
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
