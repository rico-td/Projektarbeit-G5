import api from "./api.js";

async function fetchCurrentDay(cityName) {
  const result = await api.get("/api/getweather/currentday", {
    params: { cityName },
  });

  const forecastToday = result.data.responseData;
  console.log("RECEIVED FROM queries.js: ", forecastToday);
  return forecastToday;
}

export { fetchCurrentDay };
