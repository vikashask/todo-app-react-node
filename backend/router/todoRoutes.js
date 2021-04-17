const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("empty todo");
});

module.exports = router;
