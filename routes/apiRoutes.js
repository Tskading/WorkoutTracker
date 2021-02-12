const router = require("express").Router();

const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workouts => {
      res.json(workouts);
      console.log(workouts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log(Workout);

  Workout.create(req.body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const newExercise = req.body;

  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: newExercise
      }
    },
    {
      new: true
    }
  ).then(workout => {
    res.json(workout);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then(workouts => {
      res.json(workouts);
      console.log(workouts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
