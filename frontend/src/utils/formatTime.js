import React from "react";

function formatTime(time) {
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

export default formatTime;
