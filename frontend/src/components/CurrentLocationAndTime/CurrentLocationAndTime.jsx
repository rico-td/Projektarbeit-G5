import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";

function CurrentLocationAndTime({ cityName, localDateAndTime }) {
  // convert time to "hh/mm AM/PM"
  const convertTime = (dateTimeString) => {
    const timeString = dateTimeString.split(" ")[1];
    const date = new Date("2024-04-28 " + timeString); // Date-Objekt
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return formattedTime;
  };

  // convert Date to "dd/Month/yyyy"
  const convertDate = (dateTimeString) => {
    const datePart = dateTimeString.split(" ")[0];
    const date = new Date(datePart); // Date-Objekt
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  //
  const dateTimeString = localDateAndTime;
  const time = convertTime(dateTimeString);
  const date = convertDate(dateTimeString);

  return (
    <div className="flex flex-col w-[320px] mt-[25px] py-3 cursor-default bg-gray-500 bg-opacity-[0.4] rounded-xl">
      <div className="flex justify-evenly">
        <img className="rotate-180" src={logo} alt="" width="80px" />
        <div className="flex flex-col">
          <p className="text-white text-2xl font-light">{cityName}</p>
          <p className=" text-white text-l font-extralight">
            {date}
            <br />
            local time: {time}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentLocationAndTime;
