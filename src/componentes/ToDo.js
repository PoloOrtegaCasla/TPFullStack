import React from 'react'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className='boton' onClick={() => editTodo(task.id)} >edit</button>
        <button className='boton' onClick={() => deleteTodo(task.id)} >x</button>
        </div>
    </div>
  )
}