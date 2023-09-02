import { useState } from "react"
import '../hojas-de-estilo/Formulario.css'
import { Formulario } from './Formulario'
 

export function Datos({ setUser }) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()


        if ([usuario, password ,Email].includes("")) {
            setError(true)
            return
        }
        setError(false)

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setUser(usuario)
        }, 2000)

    }

    return (
        <>
            <h1>Registrarse</h1>
            <form
                className="formulario"
                onSubmit={handleSubmit}
            >
                <h3>Nombre De Usuario</h3>
                <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <h3>Contraseña</h3>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h3>Email</h3>
                <input 
                type="text"
                onChange={(e) => setEmail(e.target.value)} />
                
                <button>Registrarse</button>
            </form>
            {error && <p className="error">Debes completar todos los campos</p>}

            {loading && <span class="loader"></span>}
            

        </>
    )
}
function Registro(){
    const [user, setUser] = useState([])

  return (
    <div className="App">


      {
        !user.length > 0
          ? <Datos setUser={setUser} />
          : <Formulario   user={user} setUser={setUser} />
      }
    </div>)
}
export default Registro