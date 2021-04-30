import React from 'react'

function Todo(props){
    return(<div>
        <h1>Todo</h1>
        {props.todoItems}
    </div>)
}

export default Todo