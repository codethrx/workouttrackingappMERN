const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middlewares/auth");
//controller
const {
  addWorkout,
  deleteWorkout,
  updateWorkout,
  getWorkout,
  getWorkouts,
} = require("../../controllers/workout/workoutController");
//creating routes
router.use(authMiddleware);
router.route("/").get(getWorkouts).post(addWorkout);
router
  .route("/:workoutID")
  .get(getWorkout)
  .patch(updateWorkout)
  .delete(deleteWorkout);
module.exports = router;
