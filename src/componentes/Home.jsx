import { useState } from "react"

export function Home({ user, setUser }) {


    const [loading, setLoading] = useState(false)


    const handleLogout = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setUser([])
        }, 1000)
    }


    return (
        <div className="home">
            {
                loading
                    ? <span class="loader"></span>
                    : <>
                        <h1>Bienvenido</h1>
                        <strong>{user}</strong>
                        <button onClick={handleLogout}>Logout</button>
                    </>
            }
        </div>
    )
}