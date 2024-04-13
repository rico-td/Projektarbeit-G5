import React from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { useEffect, useState } from "react";

const date = new Date();
const weekday = date.toLocaleString("default", { weekday: "long" }).slice(0, 3);
const day = date.getDate();
const month = date.toLocaleString("default", { month: "long" });
const year = date.getFullYear();

function CurrentCity() {
  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center">
        <h2 className="uppercase underline cursor-default">currentCity</h2>
        <h3 className="lowercase text-sm cursor-default">
          {`${weekday}, ${month} ${day}`}
        </h3>
      </div>
    </div>
  );
}

export default CurrentCity;

// replace the current city with a variable state
// replace the date with a variable state
