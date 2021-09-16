import axios from "axios";
import jsCookies from "js-cookies";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AgregarServicio = ()=>{
const[nombre,setNombre]=useState("");
const[gasto,setGasto]=useState("");
const[error,setError]=useState(false);
const[mensaje,setMensaje]=useState("");

const Agregar= async()=>{
await axios.post("http://localhost:3000/admin/profilebuilder/agregarServicio",{
    headers:{
        "x-access-token": jsCookies.getItem("token"),
        
      },
id:jsCookies.getItem("id_inquilino"),
gasto:gasto,
nombre:nombre
}).then((response)=>{
    setError(response.data.error);
    setMensaje(response.data.mensaje);
})
}

    return(<div >
    
        <div className="is-size-1 has-text-centered">
            <h1 className="title">Agregar Servicio</h1>
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
    <div className="field">
               <div className="control has-icons-left has-text-left">
                   <label className="label">Nombre</label>
                   <input type="text"
                   className="input"
                   id="nombre"
                   name="nombre"
                   onChange={(e)=>{
                       setNombre(e.target.value);
                   }}
                   placeholder="Ej:Luz/Gas"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
            <div className="field">
               <div className="control has-icons-left has-text-left">
                   <label className="label">Gasto</label>
                   <input type="text"
                   className="input"
                   id="gasto"
                   name="gasto"
                   onChange={(e)=>{
                       setGasto(e.target.value);
                   }}
                   placeholder="$"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
         
           <div className="field">
               <div className="control has-text-left">
               <button type="button" className="button is-info" onClick={Agregar}>Agregar Servicio</button>
               </div>
               <div className="control has-text-right">
               <NavLink type="button" className="button is-info" exact to="/profilehome">Volver</NavLink>
               </div>
           </div>
           <div className="field">
                          
                          {error ? <div className="notification is-danger"><p>{mensaje}</p></div>:<div className="notification is-success"><p>{mensaje}</p></div>}  
                         </div>
        </div>
    </div>
        </div>
    </div>)
}
export default AgregarServicio;
