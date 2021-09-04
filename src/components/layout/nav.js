import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    const [isActive, setActive] = useState(false);
    

return(<nav className="navbar has-background-primary" role="navigation">
    <div className="navbar-brand">
        <div role="button" onClick={()=>{setActive(!isActive)}} className={`navbar-burger has-text-white ${isActive ? "is-active":""}`}  aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
        </div>
    </div>
    <div className={`navbar-menu has-background-primary ${isActive ? "is-active":""}`}>
        <div className="navbar-start">
            <NavLink className="navbar-item has-text-white" activeClassName="activo" exact to ="/">Home</NavLink>
            <NavLink className="navbar-item has-text-white" activeClassName="activo" exact to ="/personal">Personal</NavLink>
            <NavLink className="navbar-item has-text-white" activeClassName="activo" exact to ="/domicilio">Domicilio</NavLink>
        </div>

        <div className="navbar-end">
        <NavLink className="navbar-item has-text-white" activeClassName="activo" exact to ="/login">Login</NavLink>
            <NavLink className="navbar-item has-text-white" activeClassName="activo" exact to ="/registro">Registro</NavLink>
        </div>

    </div>
</nav>);
}
export default Nav;