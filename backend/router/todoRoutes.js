const router = require("express").Router();
const Todo = require("./../models/ToDo");

router.get("/", (req, res) => {
  Todo.find((error, result) => {
    if (error) throw new Error(error);
    res.json(result);
  });
});

router.post("/", (req, res) => {
  Todo.create(req.body, (error, result) => {
    if (error) throw new Error(error);
    res.json(result);
  });
});

module.exports = router;
