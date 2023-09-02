import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
 return <div>
    <nav>
        <ul>
          <li>
            <Link to="/Registro">Registrarse</Link>
          </li>
        </ul>
    </nav>
    <hr />
    <Outlet />
 </div>;
}

export default Layout;