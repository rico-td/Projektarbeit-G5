const { DataTypes } = require("sequelize");
const userSequelize = require("../setup/database");

// Define the Todo model
const UserModel = userSequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favorites: {
      type: DataTypes.JSON, // Assuming favorites will be stored as JSON
      defaultValue: [], // Default value is an empty array
    },
  },
  { tableName: "User_tb" }
);

module.exports = UserModel;
