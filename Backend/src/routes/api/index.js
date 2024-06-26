const { Router } = require("express");
const axios = require("axios");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ApiRouter = Router();

// convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// "/currentday" takes city name as input data and returns the single day current weather and predication
// returns the latitude and longitude based on city name
// api returns temperature in units=metric(degree celsius)

ApiRouter.get("/currentday", async (req, res) => {
  const cityName = req.query.cityName;

  // Validate cityName
  if (!cityName || typeof cityName !== "string") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid city name" });
  }

  const { API_KEY } = process.env;

  //determines the number of forecast entries for a day
  const cnt = 5;

  //api URL
  const apiQuery = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&cnt=${cnt}&units=metric`;

  try {
    const response = await axios.get(apiQuery);

    //extracting the relevant information from response
    const latitudeCoordinateResponse = response.data.city.coord.lat;
    const longitudeCoordinateResponse = response.data.city.coord.lon;
    const cityNameResponse = response.data.city.name;
    const sunriseResponse = response.data.city.sunrise;
    const sunsetResponse = response.data.city.sunset;

    //convert the sunrise and sunset to human readable format
    const sunriseConvert = new Date(
      sunriseResponse * 1000
    ).toLocaleTimeString();
    const sunsetConvert = new Date(sunsetResponse * 1000).toLocaleTimeString();

    const forecastsForDay = response.data.list.map((item) => ({
      date: item.dt_txt.split(" ")[0],
      time: item.dt_txt.split(" ")[1],
      temperature_celsius: item.main.temp,
      min_temperature_celsius: item.main.temp_min,
      max_temperature_celsius: item.main.temp_max,
      temperature_fahrenheit: celsiusToFahrenheit(item.main.temp),
      min_temperature_fahrenheit: celsiusToFahrenheit(item.main.temp_min),
      max_temperature_fahrenheit: celsiusToFahrenheit(item.main.temp_max),
      main_description: item.weather[0].main,
      description: item.weather[0].description,
      weather_icon:item.weather[0].icon,
      wind_speed: item.wind.speed,
      humidity: item.main.humidity,
    }));

    const responseData = {
      cityNameResponse,
      latitudeCoordinateResponse,
      longitudeCoordinateResponse,
      sunrise: sunriseConvert,
      sunset: sunsetConvert,
      forecasts: forecastsForDay.map((forecast) => ({
        date: forecast.date,
        time: forecast.time,
        temperature_celsius: Math.round(forecast.temperature_celsius),
        min_temperature_celsius: Math.round(forecast.min_temperature_celsius),
        max_temperature_celsius: Math.round(forecast.max_temperature_celsius),
        temperature_fahrenheit: Math.round(forecast.temperature_fahrenheit),
        min_temperature_fahrenheit: Math.round(
          forecast.min_temperature_fahrenheit
        ),
        max_temperature_fahrenheit: Math.round(
          forecast.max_temperature_fahrenheit
        ),
        main_description: forecast.main_description,
        description: forecast.description,
        weather_icon:forecast.weather_icon,
        wind_speed: forecast.wind_speed,
        humidity: forecast.humidity,
      })),
    };

    res.status(StatusCodes.OK).json({ responseData });
  } catch (e) {
    console.log("error occured during fetching weather", e);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error fetching data");
  }
});

//returns the prediction for subsequent three hours
ApiRouter.get("/currentdayhourly", async (req, res) => {
  const { latitude, longitude } = req.query;
  const { API_KEY } = process.env;

  const apiQuery = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(apiQuery);

    const dailyData = response.data.list;

    const responseData = {
      forecasts: dailyData.map((item, index) => {
        const temperature = item.main.temp;
        const maxTemperatureCelsius = item.main.temp_max;
        const minTemperatureCelsius = item.main.temp_min;
        const windSpeed = item.wind.speed;
        const weatherCondition = item.weather[0].description;
        const weather_icon = item.weather[0].icon;
        const [date, time] = item.dt_txt.split(" ");
        const humidity = item.main.humidity;

        return {
          date,
          time,
          temperature_celsius: Math.round(temperature),
          min_temperature_celsius: Math.round(minTemperatureCelsius),
          max_temperature_celsius: Math.round(maxTemperatureCelsius),
          temperature_fahrenheit: Math.round(celsiusToFahrenheit(temperature)),
          min_temperature_fahrenheit: Math.round(
            celsiusToFahrenheit(minTemperatureCelsius)
          ),
          max_temperature_fahrenheit: Math.round(
            celsiusToFahrenheit(maxTemperatureCelsius)
          ),
          wind_speed: windSpeed,
          description: weatherCondition,
          weather_icon:weather_icon,
          humidity: humidity,
        };
      }),
    };

    res.status(StatusCodes.OK).json({ responseData });
  } catch (e) {
    console.log("error occurred during fetching upcoming days weather", e);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Error fetching upcoming days data");
  }
});

//interpret the weather condition from the WMO weather code
function interpretWeatherCode(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Drizzle: Light";
    case 53:
      return "Drizzle: Moderate";
    case 55:
      return "Drizzle: Dense intensity";
    case 56:
      return "Freezing Drizzle: Light";
    case 57:
      return "Freezing Drizzle: Dense intensity";
    case 61:
      return "Rain: Slight";
    case 63:
      return "Rain: Moderate";
    case 65:
      return "Rain: Heavy intensity";
    case 66:
      return "Freezing Rain: Light";
    case 67:
      return "Freezing Rain: Heavy intensity";
    case 71:
      return "Snow fall: Slight";
    case 73:
      return "Snow fall: Moderate";
    case 75:
      return "Snow fall:Heavy intensity";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers: Slight";
    case 81:
      return "Rain showers: Moderate";
    case 82:
      return "Rain showers: Violent";
    case 85:
      return "Snow showers slight";
    case 86:
      return "Snow showers heavy";
    case 95:
      return "Thunderstorm";
    case 96:
      return "Thunderstorm slight hail";
    case 99:
      return "Thunderstorm heavy hail";
    default:
      return "Unknown";
  }
}

//  "/upcomingdays" takes the lat and lon from "/currentday"
//  using the retrieved lat and lon, "/upcomingdays" retrieves the weather for the next 7 days
ApiRouter.get("/upcomingdays", async (req, res) => {
  const { latitude, longitude } = req.query;

  const apiQuery = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,wind_speed_10m_max`;

  try {
    const response = await axios.get(apiQuery);

    const dailyData = response.data.daily;
    const dates = dailyData.time;
    const weatherCodes = dailyData.weather_code;
    const maxTemperaturesCelsius = dailyData.temperature_2m_max;
    const minTemperaturesCelsius = dailyData.temperature_2m_min;
    const windSpeeds = dailyData.wind_speed_10m_max;
    const sunrises = dailyData.sunrise;
    const sunsets = dailyData.sunset;

    const responseData = {
      forecasts: dates.map((date, index) => {
        const maxTemperatureCelsius = maxTemperaturesCelsius[index];
        const minTemperatureCelsius = minTemperaturesCelsius[index];
        const windSpeed = windSpeeds[index];
        const sunrise = sunrises[index].substring(11, 16);
        const sunset = sunsets[index].substring(11, 16);
        const weatherCode = weatherCodes[index];
        const weatherCondition = interpretWeatherCode(weatherCode);

        return {
          date,
          temperature_celsius: Math.round(maxTemperatureCelsius),
          min_temperature_celsius: Math.round(minTemperatureCelsius),
          max_temperature_celsius: Math.round(maxTemperatureCelsius),
          temperature_fahrenheit: Math.round(
            celsiusToFahrenheit(maxTemperatureCelsius)
          ),
          min_temperature_fahrenheit: Math.round(
            celsiusToFahrenheit(minTemperatureCelsius)
          ),
          max_temperature_fahrenheit: Math.round(
            celsiusToFahrenheit(maxTemperatureCelsius)
          ),
          wind_speed: windSpeed,
          sunrise,
          sunset,
          description: weatherCondition,
        };
      }),
    };

    res.status(StatusCodes.OK).json({ responseData });
  } catch (e) {
    console.log("error occurred during fetching upcoming days weather", e);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Error fetching upcoming days data");
  }
});

module.exports = { ApiRouter };
