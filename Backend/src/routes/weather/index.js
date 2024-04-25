const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const WeatherSequelize = require("../../database/setup/database");
const WeatherModel = require("../../database/models/WeatherModel");
const { where } = require("sequelize");

const WeatherRouter = Router();

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
