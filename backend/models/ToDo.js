const mongooes = require("mongoose");
const TodoSchema = mongooes.Schema({
  title: String,
  completed: Boolean,
});

module.exports = mongooes.model("Todos", TodoSchema);
