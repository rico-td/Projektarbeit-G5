import React from "react";

function CurrentLocationAndTime() {
  // GET DATE
  const date = new Date();
  const weekday = date.toLocaleString("default", { weekday: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  // GET TIME
  const hour = date.getHours().toString().padStart(2, "0"); // Fügt eine führende Null hinzu, wenn die Stunde einstellig ist
  const minutes = date.getMinutes().toString().padStart(2, "0"); // Fügt eine führende Null hinzu, wenn die Minute einstellig ist

  return (
    <div className="text-white flex flex-col justify-center items-center my-[35px] cursor-default">
      <div>
        <p className="text-white text-2xl">Berlin, DE</p>
      </div>

      <div>
        <p className="text-white text-[20px] font-extralight">
          {`${weekday}, ${day} ${month} ${year} | Local Time: ${hour} ${minutes} PM`}
          {/* Saturday, 12 April 2024 | Local Time: 1:45 PM */}
        </p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
