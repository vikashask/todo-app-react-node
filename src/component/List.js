import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProps }) => {
  const toDoRow = list.map((item) => (
    <Todo
      key={item.title}
      title={item.title}
      isCompleted={item.isCompleted}
      removeTodoItemProps={() => removeTodoListProps(item.id)}
    />
  ));

  return <div>{toDoRow}</div>;
};

export default List;
