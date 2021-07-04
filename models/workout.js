const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        required: "",
      },

      type: {
        type: String,
        required: "",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "",
      },
      distance: {
        type: Number,
      },
    },
  ],
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
