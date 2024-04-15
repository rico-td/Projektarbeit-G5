const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const WeatherSequelize = require("../../database/setup/database");
const FavoriteModel = require("../../database/models/FavModel");

const { where } = require("sequelize");
const UserModel = require("../../database/models/UserModel");

// Simulated database for user
let favorites_tb = [
  {
    id: 1,
    location: "cologne",
    userId: 1,
  },
  {
    id: 2,
    location: "Munich",
    userId: 2,
  },
  {
    id: 3,
    location: "chennai",
    userId: 1,
  },
];

console.log(favorites_tb);
const FavRouter = Router();

// add the data into sql workbench
async function addFavData() {
  try {
    for (let favData of favorites_tb) {
      // Check if user already exists
      const existingFav = await FavoriteModel.findOne({
        where: { id: favData.id },
      });

      // If user doesn't exist, create new user
      if (!existingFav) {
        await FavoriteModel.create(favData);
      }
    }
  } catch (error) {
    console.log("error occured during add data", error);
  }
}

addFavData();
// Route to add a favorite for a user
FavRouter.post("/favorites/add", async (req, res) => {
  const { userId, location } = req.body;
  try {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send("User not found");
    }
    await FavoriteModel.create({ userId, location: location });
    res.status(StatusCodes.OK).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error("Error adding favorite:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
});

// Route to remove a favorite for a user
FavRouter.delete("/remove", async (req, res) => {
  const { userId, location } = req.body;
  try {
    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send("User not found");
    }
    await FavoriteModel.destroy({ where: { userId, location } });
    res
      .status(StatusCodes.OK)
      .json({ message: "Favorite removed successfully" });
  } catch (error) {
    console.error("Error removing favorite:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
});

// Route to get all favorites for a user
FavRouter.get("/favorites", async (req, res) => {
  const userId = req.query.userId;
  try {
    const favs = await FavoriteModel.findAll({ where: { userId } });
    if (!favs) {
      return res.status(StatusCodes.NOT_FOUND).send("Favorites not found");
    }
    res.status(StatusCodes.OK).json({ favs });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
});

module.exports = { FavRouter };
