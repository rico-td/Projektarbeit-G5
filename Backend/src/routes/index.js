const { Router } = require("express");
const { WeatherRouter } = require("./weather");
const { UserRouter } = require("./user");

const AppRouter = Router();

AppRouter.use("/weather", WeatherRouter);
AppRouter.use("/user", UserRouter);

module.exports = { AppRouter };
