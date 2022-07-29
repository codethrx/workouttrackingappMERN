//IMPORTS
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const connectDB = require("./db/database");
//express app
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(cors());
app.use((req, res, next) => {
  console.log(`Pathname--${req.path}`);
  console.log(`Method--${req.method}`);
  next();
});
//API Calls-Routes
app.use("/api/workouts", require("./routes/workout/workoutRoute"));
app.use("/api/auth", require("./routes/authentication/authRoute"));

connectDB(app, PORT);
