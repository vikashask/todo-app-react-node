const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;
const todoRouters = require("./router/todoRoutes");

mongoose
  .connect("mongodb://localhost/todolist", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connect to database"))
  .catch((error) => console.log(error));

app.use("/todo", todoRouters);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
