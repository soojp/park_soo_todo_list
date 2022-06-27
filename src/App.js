import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [toDoList, setToDoList] = useState([]);
  return (
    <div className="App">
      <Form toDoList = {toDoList} setToDoList = {setToDoList}></Form>
      <List toDoList = {toDoList} setToDoList = {setToDoList}></List>
    </div>
  );
}

export default App;
