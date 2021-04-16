import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";

const todoListData = [
  {
    title: "take breakfast",
    isCompleted: false,
  },
  {
    title: "take lunch",
    isCompleted: false,
  },
];
const App = () => {
  const [todoList, setTodoList] = useState(todoListData);
  const addTodo = (item) => {
    setTodoList((oldList) => [...oldList, item]);
  };
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Form addTodo={addTodo} />
      <List list={todoList} />
    </Grid>
  );
};

export default App;
