const { DataTypes } = require("sequelize");
const weatherSequelize = require("../setup/database");

// Define the Todo model
const WeatherModel = weatherSequelize.define(
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
  { tableName: "Weather_tb" }
);

module.exports = WeatherModel;
