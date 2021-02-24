const mongoose = require("mongoose");

//creating a new database with collections, documents and feild names 
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Please enter the name of your exercise"
        },
        duration: {
          type: Number,
          required: "Please enter how many minutes you worked out today"
        },
        weight: {
          type: Number,
          required: true,
          validate : {
            validator : Number.isInteger}
        },
        reps: {
          type: Number,
          required: true,
          validate : {
            validator : Number.isInteger}
        },
        sets: {
          type: Number,
          required: true,
          validate : {
            validator : Number.isInteger}
        },
        distance: {
          type: Number,
          required: true,
          validate : {
            validator : Number.isInteger}
        }
      }
    ]
  },
);

//total time of workouts
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;