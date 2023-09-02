import React from 'react';
import '../hojas-de-estilo/ListaDeTareas.css'

const Task = ({task , deleteTodo , index, handleEdit, completada}) => {

  return (
    <div className='tareas-lista-contenedor'>
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        <h2><button className='completado' onClick={() => <del>{task} </del>}>{task} </button> </h2></div>
        <button className='tarea-icono' onClick={() => deleteTodo(index)}> Delete </button>
        <button className='tarea-icono' onClick={() => handleEdit(index)}> Edit </button>

    </div>
  )
}

export default Task;