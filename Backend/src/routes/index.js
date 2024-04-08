const { Router } = require("express");
const { WeatherRouter } = require("./weather");

const AppRouter = Router();

AppRouter.use("/weather", WeatherRouter);

module.exports = { AppRouter };
