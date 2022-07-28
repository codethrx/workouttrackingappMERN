//IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
//express app
const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(`Pathname--${req.path}`);
  console.log(`Method--${req.method}`);
  next();
});

//
//Listening to requests.
app.listen(PORT, () => {
  console.log(`Listening to port#${PORT}`);
});
