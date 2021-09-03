import React, { useState } from 'react';
import { NavLink, Redirect } from "react-router-dom";
import axios from 'axios';
import md5 from 'md5';




const Login = (props)=>{

   

    const buscarUsuario = async (e)=>{
        e.preventDefault();
        const res = await axios.get('http://localhost:3000/api/newlogin');
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        
            let response = res.data;
           
           let email2 = response.filter(item => item.email === email);
           if (email2[0].password === md5(password)) {
            
          uselogged(true);
            
        }
    }   
    const [logged, uselogged] = useState(false);

    return(
    
    <div className=" columns">
        {logged ? 
        <Redirect to="/perfil"/> : ""}
        <div className="column is-full">
            <form className="column is-half is-offset-one-quarter" onSubmit={buscarUsuario}>
                <div className="field">
                    <div className="control has-icons-left ">
                        <label className="label">Email</label>
                        <input type="email" className="input" id="email" name="email" placeholder="email"/>
                        <span className="icon is-small is-left"></span>
                    </div>
                </div>
                <div className="field">
                    <div className="control has-icons-left ">
                        <label className="label">Password</label>
                        <input type="password" className="input" id="password" name="password" placeholder="Password"/>
                        <span className="icon is-small is-left"></span>
                    </div>
                </div>
                <div className="field">
                    <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                       
                        <button type="submit" className="button is-info">Entrar</button>
                        <NavLink type="button" className="button is-danger"  exact to ="/registro">Registrarse</NavLink>
                       
                    </div>
                </div>
            </form>
        </div>
    </div>)
}
export default Login;