import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";

function CurrentLocationAndTime({ cityName, sunrise, sunset }) {
  // if (!cityName) return null;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // update date every 24 hours

    return () => {
      clearInterval(dateInterval);
    };
  }, []); // just at first mount

  const dateOptions = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  function createDateObject(timeString) {
    const today = new Date();
    const isoString = `${today.toISOString().slice(0, 10)}T${timeString}`;
    return new Date(isoString);
  }

  // Verwendung
  const dateSunrise = createDateObject(sunrise);
  const dateSunset = createDateObject(sunset);

  // Zeitstrings erstellen
  const sunriseTimeString = dateSunrise.toLocaleTimeString(
    "en-US",
    timeOptions
  );
  const sunsetTimeString = dateSunset.toLocaleTimeString("en-US", timeOptions);

  return (
    <div className="flex flex-col w-[280px] mt-[25px] py-3 cursor-default bg-gray-500 bg-opacity-[0.4] rounded-xl">
      <div className="flex justify-evenly">
        <img className="rotate-180" src={logo} alt="" width="80px" />
        <div className="flex flex-col">
          <p className="text-white text-2xl font-light">{cityName}</p>
          <p className=" text-white text-l font-extralight">
            {currentDate.toLocaleDateString("en-US", dateOptions)}
            <br />
            {currentTime.toLocaleTimeString("en-US", timeOptions)}
          </p>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-3">
        <p className="text-white font-extralight text-xs">
          sunrise: <br /> {sunriseTimeString}
        </p>
        <p
          className="
             text-white
             font-extralight text-center text-xs"
        >
          sunset: <br /> {sunsetTimeString}
        </p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
