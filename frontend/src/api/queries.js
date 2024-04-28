import api from "./api.js";
import axios from "axios";

async function fetchCurrentDay(cityName) {
  const result = await api.get("/api/getweather/currentday", {
    params: { cityName },
  });

  const forecastToday = result.data.responseData;
  // console.log("RECEIVED FROM queries.js: ", forecastToday);
  return forecastToday;
}

// subsequent temperature for every 3 hours for 5 days
async function fetchCurrentDayHourlyData(latitude, longitude) {
  const result = await api.get("/api/getweather/currentdayhourly", {
    params: { latitude, longitude },
  });

  const forecastCurrentDayHourly = result.data.responseData;
  // console.log(
  //   "RECEIVED DATA FOR CURRENT DAY 3-HOURLY: ",
  //   forecastCurrentDayHourly
  // );
  return forecastCurrentDayHourly;
}

// for 7 days
async function fetchUpcomingDays(latitude, longitude) {
  const result = await api.get("/api/getweather/upcomingdays", {
    params: { latitude, longitude },
  });

  const forecastUpcomingDays = result.data.responseData;
  // console.log("RECEIVED DATA FOR UPCOMING DAYS: ", forecastUpcomingDays);
  return forecastUpcomingDays;
}

//  local time
async function fetchLocalTime(lat, lon) {
  const result = await api.get(
    "http://api.timezonedb.com/v2.1/get-time-zone?key=498D21BNZC76&format=json&by=position",
    {
      params: {
        lat: lat,
        lng: lon,
      },
    }
  );

  const localTime = result.data.formatted;

  console.log("RECEIVED DATA FOR LOCAL TIME: ", localTime);
  return localTime;
}

export {
  fetchCurrentDay,
  fetchCurrentDayHourlyData,
  fetchUpcomingDays,
  fetchLocalTime,
};
