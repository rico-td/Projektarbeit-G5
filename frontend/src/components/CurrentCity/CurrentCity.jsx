import React from "react";
// import { useEffect, useState } from "react";

const date = new Date();
const weekday = date.toLocaleString("default", { weekday: "long" });
const day = date.getDate();
const year = date.getFullYear();
const month = date.toLocaleString("default", { month: "long" });

function CurrentCity() {
  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center p-5">
        <h2 className="uppercase cursor-default font-semibold">Berlin</h2>
        <h3 className="text-sm cursor-default">
          {`${weekday}, ${month} ${day}, ${year}`}
        </h3>
      </div>
    </div>
  );
}

export default CurrentCity;

// replace the current city with a variable state
// replace the date with a variable state
