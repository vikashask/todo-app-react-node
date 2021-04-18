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

router.delete("/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.id }, (error, result) => {
    if (error) throw new Error(error);
    res.json({ message: "deleted success" });
  });
});

router.put("/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { returnOriginal: false },
    (error, result) => {
      if (error) throw new Error(error);
      res.json(result);
    }
  );
});
module.exports = router;
