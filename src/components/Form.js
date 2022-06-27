import React, { useState } from "react";
import { v4 } from "uuid";

const Form = (props) => {
  const { toDoList, setToDoList } = props;

  const [toDo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, { title: toDo, id: v4() }]);
    setToDo("");
    console.log("submitted");
  };

  const handleChange = (e) => {
    setToDo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="searchbar" type="text" onChange={handleChange} />
        <div>
          <button className="addButton">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
