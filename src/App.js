import React, {useState} from 'react'
import './App.css';
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"
import Navbar from './components/Navbar'
import Home from './views/Home'
import Todo from './views/Todo'
import Status from './views/Status'
import {Switch, Route} from "react-router-dom"

function App() {

  const [todo, setTodo] = useState(todosData)

  console.log(todo)

  function handleChange(id){
    const updated = todo.map(item=>{
      if(item.id===id){
        item.completed = !item.completed
      }
      return item
    })
    setTodo(updated)
  }

  const todoItems = todo.map(item=> <TodoItem key={item.id} item={item} handleChange={handleChange}/>)
  const status = todo.map(item=>{
    return(
      <div>
        <p style={{color: item.completed? "green":"red"}}>{`${item.text}`} {`${item.completed? "is completed": "is not completed"}`}</p>
      </div>
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/todo"><Todo todoItems={todoItems}/></Route>
        <Route path="/status"><Status status={status}/></Route>
      </Switch>
    </div>
  );
}

export default App;
