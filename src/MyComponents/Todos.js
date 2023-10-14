import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"55vh",
    marginBottom: "40px",
    marginTop:"70px"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-5'>Todos List</h3>
      {
        props.todos.length === 0 ? "No Todos to display" :
          props.todos.map((todo) => {
            return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          )})
      }

    </div>
  )
}
