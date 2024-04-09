const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const weatherSequelize = require("../../database/setup/database");
const WeatherModel = require("../../database/models/WeatherModel");
const { where } = require("sequelize");

// Simulated database for weather
let weather = [
  {
    id: 1,
    timestamp: "2024-03-23",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 2,
    timestamp: "2024-05-11",
    location: "Mumbai",
    temp: 32,
    humidity: 53,
    description: "Sun",
    wind_speed: 10,
    precipitation: 18,
  },
  {
    id: 3,
    timestamp: "2024-04-12",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 4,
    timestamp: "2024-04-20",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
];

console.log(weather);
const WeatherRouter = Router();

// // GET - /weather/all: Return all Weather
// WeatherRouter.get("/all", async (req, res) => {
//   const Weather = await WeatherModel.findAll();
//   res.status(StatusCodes.OK).send(Weather);
// });

// Define a GET route handler to get all data
WeatherRouter.get("/all", async (req, res) => {
  try {
    // Call the asynchronous function to fetch data from the database
    const Weather = await WeatherModel.findAll();
    // Send the fetched data as a JSON response
    res.json(weather);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//  ***GET REQUESTS***
// // Return todos from a specific user
WeatherRouter.get("/id", (req, res) => {
  const WeatherId = parseInt(req.query.WeatherId);
  if (!WeatherId) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
    return;
  }
  const User_weather = weather.find((item) => item.id === WeatherId);
  res.status(StatusCodes.OK).json({ weather: User_weather });
});

//  ***PUT REQUESTS***
WeatherRouter.put("/update", async (req, res) => {
  const {
    WeatherId,
    newtimestamp,
    newlocation,
    newtemp,
    newhumidity,
    newwind_speed,
    newprecipitation,
  } = req.body;
  const weather = await WeatherModel.update(
    {
      timestamp: newtimestamp,
      location: newlocation,
      temp: newtemp,
      humidity: newhumidity,
      wind_speed: newwind_speed,
      precipitation: newprecipitation,
    },
    { where: { id: WeatherId } }
  );
  const updateWeather = await WeatherModel.findByPk(WeatherId);
  console.log(updateWeather);
  res.status(StatusCodes.OK).json({ updatedWeather: updateWeather });
});
// //  ***DELETE REQUESTS***
WeatherRouter.delete("/delete", async (req, res) => {
  const { WeatherId } = req.body;
  await WeatherModel.destroy({ where: { id: WeatherId } });

  res.status(StatusCodes.OK).json({ DeletedWeather: WeatherId });
});

// // PUT - /todos/mark: Mark todo completed
// // PUT REQUESTS
// WeatherRouter.put("/mark", async (req, res) => {
//   const { todoId, newIsDone } = req.body;

//   await TodoModel.findByPk(todoId)
//     .then((todo) => {
//       // Check if the todo exists
//       if (!todo) {
//         return res
//           .status(StatusCodes.NOT_FOUND)
//           .json({ error: "Todo not found" });
//       }

//       // Update the isDone property
//       todo.isDone = newIsDone;

//       // Save the changes
//       return todo.save();
//     })
//     .then((updatedTodo) => {
//       // Return the updated todo in the response
//       res.status(StatusCodes.OK).json({ updatedTodo });
//     })
//     .catch((error) => {
//       console.error("Error marking todo as done:", error);
//       res
//         .status(StatusCodes.INTERNAL_SERVER_ERROR)
//         .json({ error: "Internal Server Error" });
//     });
// });

// // POST - /todos/create: Create todo
// WeatherRouter.post("/create", async (req, res) => {
//   const { newTask, newIsDone, newDueDate, userId } = req.body;
//   const newTodo = {
//     task: newTask,
//     isDone: newIsDone,
//     DueDate: newDueDate,
//     userid: userId,
//   };

//   todos.push(newTodo);
//   const todo = await TodoModel.create(newTodo);
//   res.status(StatusCodes.OK).json({ todo });
// });

// // GET - /todos/byuserid: All todos from a user
// WeatherRouter.get("/byid", async (req, res) => {
//   const todoid = req.query.todoid;

//   if (!todoid) {
//     res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
//     return;
//   }
//   const todo = await TodoModel.findOne({ where: { id: todoid } });
//   res.status(StatusCodes.OK).json({ todo: todo });
// });

// // GET - /todos/byuserid: All todos from a user
// WeatherRouter.get("/byuserid", async (req, res) => {
//   const userid = req.query.userid;

//   if (!userid) {
//     res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
//     return;
//   }
//   const todo = await TodoModel.findOne({ where: { userid: userid } });
//   res.status(StatusCodes.OK).json({ todo: todo });
// });

module.exports = { WeatherRouter };
