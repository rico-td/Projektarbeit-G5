const { Sequelize } = require("sequelize");

// Connect to MySQL using Sequelize
const WeatherSequelize = new Sequelize("weather_app", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = WeatherSequelize;
