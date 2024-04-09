const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const weatherSequelize = require("../../database/setup/database");
const WeatherModel = require("../../database/models/WeatherModel");
const { where } = require("sequelize");

// Simulated database for weather
let Weather_tb = [
  {
    id: 1,
    timestamp: "2024-03-23",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 2,
    timestamp: "2024-05-11",
    location: "Mumbai",
    temp: 32,
    humidity: 53,
    description: "Sun",
    wind_speed: 10,
    precipitation: 18,
  },
  {
    id: 3,
    timestamp: "2024-04-12",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 4,
    timestamp: "2024-04-20",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
];

console.log(Weather_tb);
const WeatherRouter = Router();

// add the data into sql workbench
async function addWeatherData() {
  try {
    await WeatherModel.bulkCreate(Weather_tb);
  } catch (error) {
    console.log("error occured during add data");
  }
}

addWeatherData();
// // GET - /weather/all: Return all Weather
// WeatherRouter.get("/all", async (req, res) => {
//   const Weather = await WeatherModel.findAll();
//   res.status(StatusCodes.OK).send(Weather);
// });

// Define a GET route handler to get all data
WeatherRouter.get("/all", async (req, res) => {
  try {
    // Call the asynchronous function to fetch data from the database
    const Weather = await WeatherModel.findAll();
    // Send the fetched data as a JSON response
    res.json(Weather_tb);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//  ***GET REQUESTS***
// // Return todos from a specific user
WeatherRouter.get("/id", (req, res) => {
  const WeatherId = parseInt(req.query.WeatherId);
  if (!WeatherId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const User_weather = Weather_tb.find((item) => item.id === WeatherId);
  res.status(StatusCodes.OK).json({ weather: User_weather });
});

//  ***PUT REQUESTS***
WeatherRouter.put("/update", async (req, res) => {
  const {
    WeatherId,
    newtimestamp,
    newlocation,
    newtemp,
    newhumidity,
    newdescription,
    newwind_speed,
    newprecipitation,
  } = req.body;
  const Weather = await WeatherModel.update(
    {
      timestamp: newtimestamp,
      location: newlocation,
      temp: newtemp,
      humidity: newhumidity,
      description: newdescription,
      wind_speed: newwind_speed,
      precipitation: newprecipitation,
    },
    { where: { id: WeatherId } }
  );
  const updateWeather = await WeatherModel.findByPk(WeatherId);
  console.log(updateWeather);
  res.status(StatusCodes.OK).json({ updatedWeather: updateWeather });
});

// //  ***DELETE REQUESTS***
WeatherRouter.delete("/delete", async (req, res) => {
  const { WeatherId } = req.body;
  await WeatherModel.destroy({ where: { id: WeatherId } });

  res.status(StatusCodes.OK).json({ DeletedWeather: WeatherId });
});

// POST - /weather/create: Create weather
WeatherRouter.post("/create", async (req, res) => {
  const {
    newtimestamp,
    newlocation,
    newtemp,
    newhumidity,
    newdescription,
    newwind_speed,
    newprecipitation,
  } = req.body;
  const newWeather = {
    timestamp: newtimestamp,
    location: newlocation,
    temp: newtemp,
    humidity: newhumidity,
    description: newdescription,
    wind_speed: newwind_speed,
    precipitation: newprecipitation,
  };

  Weather_tb.push(newWeather);
  const weather = await WeatherModel.create(newWeather);
  console.log(weather);
  res.status(StatusCodes.OK).json({ createdWeather: weather });
});

module.exports = { WeatherRouter };
