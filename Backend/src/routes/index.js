const { Router } = require("express");
const { WeatherRouter } = require("./weather");
const { UserRouter } = require("./user");
const { ApiRouter } = require("./api");
const { FavRouter } = require("./favorite");

const AppRouter = Router();

AppRouter.use("/weather", WeatherRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/api/getweather", ApiRouter);
AppRouter.use("/favorite", FavRouter);

module.exports = { AppRouter };
