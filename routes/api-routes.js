const router = require("express").Router();
const db = require("../models");
const path = require("path");

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/api/workouts/delete", ({ body }, res) => {
  Workout.findbyIdAndRemove(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
