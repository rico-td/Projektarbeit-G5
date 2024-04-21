import axios from "axios";

const apiKey = "cceeb21005081f70dafeafa10dfdff59";
const baseURL = "api.openweathermap.org/data/2.5/forecast";

const axiosClient = axios.create({
  baseURL:
    "api.openweathermap.org/data/2.5/weather?appid=cceeb21005081f70dafeafa10dfdff59&q=berlin&units=metric",
});

export default axiosClient;

//  parameters:
//  units = {metric} or {imperial}
//  q = {city name}

// "${baseURL}?appid=${apiKey}"
