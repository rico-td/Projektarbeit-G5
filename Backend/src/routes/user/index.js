const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const weatherSequelize = require("../../database/setup/database");
const UserModel = require("../../database/models/UserModel");
const { where } = require("sequelize");
const bcrypt = require('bcrypt');
const saltRounds = 10;// determines the complexity of the hash,higher the number more complex

// Simulated database for user
let user = [
  {
    id: 1,
    username: "Alan",
    password: bcrypt.hashSync("123456", saltRounds),//bcrypt.hashSync is used to hash the password 
    email:"alan@mail.com"
  },
  {
    id: 2,
    username: "Adam",
    password: bcrypt.hashSync("123456", saltRounds),
    email:"adam@mail.com"
  },
  {
    id: 3,
    username: "John",
    password: bcrypt.hashSync("123456", saltRounds),
    email:"john@mail.com"
  },
  {
    id: 4,
    username: "Kyle",
    password: bcrypt.hashSync("123456", saltRounds),
    email:"kyle@mail.com"
  },
];

console.log(user);
const UserRouter = Router();

// add the data into sql workbench
async function addUserData() {
  try {
    await UserModel.bulkCreate(user);
  } catch (error) {
    console.log("error occured during add data",error);
  }
}

addUserData();

// Define a GET route handler to get all data
UserRouter.get("/all", async (req, res) => {
  try {
    // Call the asynchronous function to fetch data from the database
    const User = await UserModel.findAll();
    // Send the fetched data as a JSON response
    res.json(User);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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
UserRouter.post("/validateuser", async(req, res) => {
const { username, password } = req.body;
if (!username || !password) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
}

try{
    const user = await UserModel.findOne({ where: { username }});
    //bcrypt.compareSync is used to compare the entered password with the stored hashed password.
    if(user && bcrypt.compareSync(password, user.password )){
        res.status(StatusCodes.OK).json({ message:"User validated successfully "});
    } else {
        res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    }
}catch(e){
    console.log("Error validating user", e)
}
});
  
//    CREATE USER

UserRouter.post("/createuser",async (req, res ) => {
  const { username, password, email } = req.body;
  if( !username || !password || !email ){
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }

  try{
    //check if email and username already exists
    const exitingEmail = await UserModel.findOne( { where: { email } } );
    const exitingUsername = await UserModel.findOne( { where: { username } } );
    if(exitingEmail){
      res.status(StatusCodes.CONFLICT).send('Email already exists');
      return;
    }
    else if(exitingUsername){
      res.status(StatusCodes.CONFLICT).send('Username already exists');
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const newUser = await UserModel.create( { username, password:hashedPassword, email } );
    res.status(StatusCodes.CREATED).json( { user: newUser } );
  }catch(e){
    console.log("Error occured creating user", e);
  }
})

// //  ***DELETE USER***
UserRouter.delete("/delete", async (req, res) => {
  const { UserId } = req.body;
  await UserModel.destroy({ where: { id: UserId } });

  res.status(StatusCodes.OK).json({ DeletedUser: UserId });
});

module.exports = { UserRouter };
