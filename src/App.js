import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";

const todoListData = [
  {
    id: 1,
    title: "take breakfast",
    isCompleted: false,
  },
  {
    id: 2,
    title: "take lunch",
    isCompleted: false,
  },
];
const App = () => {
  const [todoList, setTodoList] = useState(todoListData);

  const addTodo = (item) => {
    setTodoList((oldList) => [...oldList, item]);
  };

  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id));
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Form addTodo={addTodo} />
      <List list={todoList} removeTodoListProps={removeTodo} />
    </Grid>
  );
};

export default App;
