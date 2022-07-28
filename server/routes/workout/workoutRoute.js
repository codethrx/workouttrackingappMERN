const express = require("express");
const router = express.Router();
//controller
const {
  addWorkout,
  deleteWorkout,
  updateWorkout,
  getWorkout,
  getWorkouts,
} = require("../../controllers/workout/workoutController");
//creating routes
router.route("/").get(getWorkouts).post(addWorkout);
router.route("/:id").get(getWorkout).patch(updateWorkout).delete(deleteWorkout);
module.exports = router;
