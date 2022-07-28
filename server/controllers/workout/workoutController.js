const getWorkouts = (req, res) => {
  res.json({ message: "Get Workouts" });
};
const getWorkout = (req, res) => {
  res.json({ message: "Get a single Workout" });
};
const addWorkout = (req, res) => {
  res.json({ message: "Create Workout" });
};
const updateWorkout = (req, res) => {
  res.json({ message: "Update Workouts" });
};
const deleteWorkout = (req, res) => {
  res.json({ message: "Delete Workouts" });
};

module.exports = {
  addWorkout,
  deleteWorkout,
  updateWorkout,
  getWorkout,
  getWorkouts,
};
