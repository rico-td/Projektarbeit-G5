import React, { useState, useEffect } from "react";

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
    <div className="text-white flex flex-col justify-center items-center my-[35px] cursor-default">
      <div>
        <p className="text-white text-2xl">{cityName}</p>
      </div>

      <div>
        <p className="text-white text-[20px] font-extralight">
          {currentTime.toLocaleTimeString("en-US", options)}
        </p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
