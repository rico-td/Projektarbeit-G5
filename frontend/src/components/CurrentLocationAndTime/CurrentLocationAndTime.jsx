import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";

function CurrentLocationAndTime({ cityName }) {
  // if (!cityName) return null;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update time every second

    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 86400000); // update date every 24 hours

    return () => {
      clearInterval(interval);
      clearInterval(dateInterval);
    };
  }, []); // just at first mount

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  return (
    <div className="flex justify-center items-center gap-3 w-[300px] my-[20px] py-3 cursor-default bg-gray-500 bg-opacity-[0.4] rounded-l">
      <img className="" src={logo} alt="" width="35px" />
      <div className="flex flex-col">
        <p className="text-white text-2xl font-light">{cityName}</p>
        <p className="text-white text-l font-extralight">
          {currentTime.toLocaleTimeString("en-US", options)}
        </p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
