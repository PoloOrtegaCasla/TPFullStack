import { useState } from "react"
import '../hojas-de-estilo/Formulario.css'

export function Formulario({ setUser }) {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()


        if ([usuario, password].includes("")) {
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
            <h1>Inicio De Sesion</h1>
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
                <button>Ingresar</button>
            </form>
            {error && <p className="error">Debes completar todos los campos</p>}

            {loading && <span class="loader"></span>}

        </>
    )
}