import React from "react";
import Todo from "./Todo";

const List = ({ list }) => {
  const toDoRow = list.map((items) => <Todo title={items.title} />);

  return <div>{toDoRow}</div>;
};

export default List;
