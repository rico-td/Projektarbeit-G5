const { DataTypes } = require("sequelize");
const FavSequelize = require("../setup/database");
const User = require("./UserModel");

const FavoriteModel = FavSequelize.define("Favorites", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the association with the User model
FavoriteModel.belongsTo(User, { foreignKey: "userId" });

module.exports = FavoriteModel;
