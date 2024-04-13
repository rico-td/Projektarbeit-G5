import axios from "axios";

const WeatherApi = axios.create({
  baseURL: "api.openweathermap.org/data/2.5/forecast?q={cityName}&appid=cceeb21005081f70dafeafa10dfdff59",
});

export default WeatherApi;

// apiKey = 'cceeb21005081f70dafeafa10dfdff59'