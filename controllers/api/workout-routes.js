const router = require('express').Router();
const { Workout } = require('../../models');

const databaseUrl = "workout";
const collections = ["workouts"];

const mongojs = require("mongojs");
const db = mongojs(databaseUrl, collections);

router.get("/", (req, res) => {
    db.workouts.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });

  module.exports = router;