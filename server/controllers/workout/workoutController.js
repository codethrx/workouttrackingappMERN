const mongoose = require("mongoose");
const Workout = require("../../models/workouts/workoutModel");
//controllers
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (e) {
    res.status(400).json({ error: "Error! Getting all workouts" });
  }
};
const getWorkout = async (req, res) => {
  const { workoutID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(workoutID)) {
    return res.status(400).json({ error: "Workout with ID not found" });
  }
  try {
    const workout = await Workout.findById(workoutID);
    if (!workout) {
      return res.status(404).json({ error: "No such workouts" });
    }
    res.status(200).json(workout);
  } catch (e) {
    res.status(404).json({ error: "Error finding workout" });
  }
};
const addWorkout = async (req, res) => {
  const { title, weight, reps } = req.body;
  if (!title || !weight || !reps) {
    return res.status(400).json({ error: "Entries are not filled" });
  }
  try {
    const newWorkout = await Workout.create({ ...req.body });
    res.status(201).json(newWorkout);
  } catch (e) {
    res.status(400).json({ error: "Error! Creating the workout" });
  }
};
const updateWorkout = async (req, res) => {
  const { workoutID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(workoutID)) {
    return res.status(400).json({ error: "Workout with ID not found" });
  }
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: workoutID },
      { ...req.body }
    );
    if (!workout) {
      return res.status(404).json({ error: "No such workouts" });
    }
    res.status(200).json(workout);
  } catch (e) {
    res.status(404).json({ error: "Error updating workout" });
  }
};
const deleteWorkout = async (req, res) => {
  const { workoutID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(workoutID)) {
    return res.status(400).json({ error: "Workout with ID not found" });
  }
  try {
    const workout = await Workout.findOneAndDelete({ _id: workoutID });
    if (!workout) {
      return res.status(404).json({ error: "No such workouts" });
    }
    res.status(200).json(workout);
  } catch (e) {
    res.status(404).json({ error: "Error deleting workout" });
  }
};

module.exports = {
  addWorkout,
  deleteWorkout,
  updateWorkout,
  getWorkout,
  getWorkouts,
};
