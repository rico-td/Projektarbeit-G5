const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const weatherSequelize = require("../../database/setup/database");
const WeatherModel = require("../../database/models/WeatherModel");
const { where } = require("sequelize");

// Simulated database for weather
let weather = [
  {
    id: 1,
    timestamp: "03.10.2024",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 2,
    timestamp: "03.10.2024",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 3,
    timestamp: "03.10.2024",
    location: "Munich",
    temp: 12,
    humidity: 53,
    description: "Rain",
    wind_speed: 12,
    precipitation: 10,
  },
  {
    id: 4,
    timestamp: "03.10.2024",
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

// GET - /weather/all: Return all Weather
WeatherRouter.get("/all", async (req, res) => {
  const Weather = await WeatherModel.findAll();
  res.status(StatusCodes.OK).send(Weather);
});
//  ***GET REQUESTS***
// // Return todos from a specific user
// WeatherRouter.get("/id", (req, res) => {
//   const WeatherId = parseInt(req.query.WeatherId);
//   if (!WeatherId) {
//     res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
//     return;
//   }
//   const User_weather = weather.find((item) => item.id === WeatherId);
//   res.status(StatusCodes.OK).json({ weather: User_weather });
// });

// //  ***PUT REQUESTS***
// WeatherRouter.put("/update", async (req, res) => {
//   const { newTask, todoId, newDueDate, newIsDone, userId } = req.body;
//   const todos = await TodoModel.update(
//     {
//       task: newTask,
//       isDone: newIsDone,
//       DueDate: newDueDate,
//       userid: userId,
//     },
//     { where: { id: todoId } }
//   );
//   const todo = await TodoModel.findByPk(todoId);
//   res.status(StatusCodes.OK).json({ updatedTodos: todo });
// });

// //  ***DELETE REQUESTS***
// WeatherRouter.delete("/delete", async (req, res) => {
//   const { todoId } = req.body;
//   await TodoModel.destroy({ where: { id: todoId } });

//   res.status(StatusCodes.OK).json({ DeletedTodos: todoId });
// });

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
