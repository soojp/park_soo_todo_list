import React from "react";
import Row from "./Row";

const List = (props) => {
  const { toDoList, setToDoList } = props;

  return (
    <div>
      {toDoList.map((todo, i) => (
        <Row key={i} todo={todo} toDoList={toDoList} setToDoList={setToDoList}/>
      ))}
    </div>
  );
};

export default List;
