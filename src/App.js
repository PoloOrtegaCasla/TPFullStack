import { Formulario } from './componentes/Formulario'
import { useState } from 'react'
import { TodoWrapper } from './componentes/ToDoWrapper';
import './App.css'

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">


      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <TodoWrapper   user={user} setUser={setUser} />
      }
      
    </div>
    
    
  )
}


export default App