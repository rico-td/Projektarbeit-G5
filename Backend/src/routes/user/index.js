const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const WeatherSequelize = require("../../database/setup/database");
const UserModel = require("../../database/models/UserModel");
const { where } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10; // determines the complexity of the hash,higher the number more complex

const UserRouter = Router();

//  ***GET REQUESTS***
// // Return a specific user
UserRouter.get("/id", (req, res) => {
  const UserId = parseInt(req.query.UserId);
  if (!UserId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const User_weather = user.find((item) => item.id === UserId);
  res.status(StatusCodes.OK).json({ user: User_weather });
});

//VALIDATE USER
UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  try {
    const user = await UserModel.findOne({ where: { email } });
    //bcrypt.compareSync is used to compare the entered password with the stored hashed password.
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(StatusCodes.OK).json({ user });
    } else {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    }
  } catch (e) {
    console.log("Error validating user", e);
  }
});

//    CREATE USER

UserRouter.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  // Check if the email is in correct format
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email)) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid email format");
    return;
  }

  // Check if the username starts with a number
  if (!isNaN(username[0])) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send("Username should not start with a number");
    return;
  }

  try {
    //check if email and username already exists
    const exitingEmail = await UserModel.findOne({ where: { email } });
    const exitingUsername = await UserModel.findOne({ where: { username } });
    if (exitingEmail) {
      res.status(StatusCodes.CONFLICT).send("Email already exists");
      return;
    } else if (exitingUsername) {
      res.status(StatusCodes.CONFLICT).send("Username already exists");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const newUser = await UserModel.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(StatusCodes.CREATED).json({ user: newUser });
  } catch (e) {
    console.log("Error occured creating user", e);
  }
});

// //  ***DELETE USER***
UserRouter.delete("/delete", async (req, res) => {
  const { UserId } = req.body;
  await UserModel.destroy({ where: { id: UserId } });

  res.status(StatusCodes.OK).json({ DeletedUser: UserId });
});

module.exports = { UserRouter };
