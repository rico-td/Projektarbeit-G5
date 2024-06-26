const { Sequelize } = require("sequelize");

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

// Connect to MySQL using Sequelize

const WeatherSequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = WeatherSequelize;
