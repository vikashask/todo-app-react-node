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
  {
    title: "take dinner",
    isCompleted: false,
  },
  {
    title: "take water",
    isCompleted: false,
  },
];
const App = () => {
  const [todoList, setTodoList] = useState(todoListData);
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Form />
      <List list={todoList} />
    </Grid>
  );
};

export default App;
