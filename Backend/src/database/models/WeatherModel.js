const { DataTypes } = require("sequelize");
const WeatherSequelize = require("../setup/database");

// Define the Weather model
const WeatherModel = WeatherSequelize.define(
  "weather",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    temp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wind_speed: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    precipitation: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { tableName: "weather_tb" }
);

module.exports = WeatherModel;
