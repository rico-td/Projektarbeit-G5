const { Router } = require("express");
const { WeatherRouter } = require("./weather");
const { UserRouter } = require("./user");
const { ApiRouter } = require("./api");

const AppRouter = Router();

AppRouter.use("/weather", WeatherRouter);
AppRouter.use("/user", UserRouter);
AppRouter.use("/api/getweather", ApiRouter);

module.exports = { AppRouter };
