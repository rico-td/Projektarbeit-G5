import React from "react";

function CurrentLocationAndTime() {
  // GET DATE
  const date = new Date();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  // GET TIME
  const time = {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "GMT",
  };

  const hour = date.toLocaleString("en-US", time); // Stunden im 12-Stunden-Format in englischer Sprache im GMT+2-Format

  return (
    <div className="text-white flex flex-col justify-center items-center my-[35px] cursor-default">
      <div>
        <p className="text-white text-2xl">Berlin, DE</p>
      </div>

      <div>
        <p className="text-white text-[20px] font-extralight">
          {`${weekday}, ${day} ${month} ${year} | Local Time: ${hour}`}
          {/* Saturday, 12 April 2024 | Local Time: 1:45 PM */}
        </p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
