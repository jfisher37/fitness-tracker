const router = require('express').Router();
const db = require('../../models');

// const databaseUrl = "workout";
// const collections = ["workouts"];

// const mongojs = require("mongojs");
// const db = mongojs(databaseUrl, collections);

router.get("/", (req, res) => {

    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).then((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  router.get("/range", (req, res) => {

    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).then((error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  router.post("/", (req, res) => {
    console.log("POST",req.body);
    db.Workout.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/:id", (req, res) => {
  console.log("PUT", req.body);
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});



  
  module.exports = router;