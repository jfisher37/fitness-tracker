const router = require('express').Router();
const { Workout } = require('../../models');

const databaseUrl = "workout";
const collections = ["workouts"];

const mongojs = require("mongojs");
const db = mongojs(databaseUrl, collections);

router.get("/", (req, res) => {

    db.workouts.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).sort({ day: -1}, (error, data) => {
      if (error) {
        res.send(error);
      } else {

        res.json(data);
      }
    });
  });

  router.get("/range", (req, res) => {

    db.workouts.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ]).sort({ day: -1}, (error, data) => {
      if (error) {
        res.send(error);
      } else {

        res.json(data);
      }
    });
  });

  
  module.exports = router;