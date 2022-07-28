const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title for the workout"],
    },
    reps: {
      type: Number,
      required: [true, "Please add a rep count for the workout"],
    },
    weight: {
      type: Number,
      required: [true, "Please add weight in kg for the workout"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Workout", workoutSchema);
