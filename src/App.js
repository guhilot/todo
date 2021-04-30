import React, {useState} from 'react'
import './App.css';
import todosData from "./todosData"
import TodoItem from "./components/TodoItem"

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
      {todoItems}
      <br/><br/>
      {status}
    </div>
  );
}

export default App;
