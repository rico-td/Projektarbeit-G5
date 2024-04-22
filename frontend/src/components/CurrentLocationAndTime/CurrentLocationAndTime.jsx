import React, { useState, useEffect } from "react";

function CurrentLocationAndTime({ cityName }) {
  if (!cityName) return null;

  return (
    <div className="text-white flex flex-col justify-center items-center my-[35px] cursor-default">
      <div>
        <p className="text-white text-2xl">{cityName}</p>
      </div>

      <div>
        <p className="text-white text-[20px] font-extralight"></p>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;

{
  /* {`${weekday}, ${day} ${month} ${year} | Local Time: ${hour}`} */
}
{
  /* Saturday, 12 April 2024 | Local Time: 1:45 PM */
}
