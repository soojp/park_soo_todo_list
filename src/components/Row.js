import React, {useState} from 'react'

const Row = (props) => {
    const {todo, toDoList, setToDoList} = props;
    const [check, setCheck] = useState(false);

    let rowClassName = check ? "checked" : undefined;
    const deleteButton = (deleteID) => {
        console.log(deleteID);
        console.log(toDoList);
        setToDoList(toDoList.filter((todo) => todo.id !== deleteID))
    }
  return (
    <div className={rowClassName} key={todo.id}>
        <p>{todo.title}</p>
        <input type="checkbox" onChange={() => setCheck(!check)}/>
        <button className='deleteButton' onClick={() => deleteButton(todo.id)}>Delete</button>
    </div>
  )
}

export default Row