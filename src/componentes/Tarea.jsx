import React from 'react';
import '../hojas-de-estilo/Tarea.css';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea,handleEdit  }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
            <button className='tarea-icono'>X</button>
            
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => handleEdit(id)}>
            <button className='tarea-icono'>editar</button>
            
      </div>
    </div>
  );    
}

export default Tarea;