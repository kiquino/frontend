import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import Axios from 'axios';
import Cookies from 'js-cookies';
import Nav from '../components/layout/nav';






const Login = (props)=>{

    const [dni,setDni] = useState("");
    const [password,setPassword] =useState("");
    const [nombre,setNombre] = useState("");

    const [logged,setLogged] = useState(false);

    const login =()=>{
        Axios.post("http://localhost:3000/admin/autenticacion",{
            dni: dni,
            password:password
        }).then((response)=>{
            Cookies.setItem("token",response.data.token);
            Cookies.setItem("id_inquilino",response.data.result.id);
            setNombre(response.data.result.nombre);
            setLogged(true);
        })
        
    }
   


    return(
    
    <div className=" columns">
        {logged &&
        <Redirect to={{
            pathname: "/profilehome",
           
            state: {logueado:logged}
          }}/> 
         
        }
          

        <div className="column is-full column is-half is-offset-one-quarter">
           
                <div className=" field">
                    <div className="control has-icons-left ">
                        <label className="label">dni</label>
                        <input
                        type="number"
                        className="input"
                        id="dni"
                        name="dni"
                        onChange={(e)=>{setDni(e.target.value)}}
                        placeholder="dni"/>
                        <span className="icon is-small is-left"></span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left ">
                        <label className="label">Password</label>
                        <input type="password"
                        className="input"
                        id="password"
                        name="password"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                        placeholder="Password"/>
                        <span className="icon is-small is-left"></span>
                    </div>
                </div>
        
                <div className="field">
                    <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                       
                        <button type="button" className="button is-info" onClick={login}>Entrar</button>
                        <NavLink type="button" className="button is-danger"  exact to ="/registro">Registrarse</NavLink>
                       
                    </div>
                </div> 
               
            
        </div>
    </div>)
}
export default Login;