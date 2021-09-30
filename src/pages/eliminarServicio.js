import axios from "axios";
import jsCookies from "js-cookies";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const EliminarServicio=()=>{
  
    const[nombre,setNombre]=useState();
    const[error,SetError]=useState(false);
    const[mensaje,setMensaje]=useState("");
  
   const {id} =useParams();

   useEffect(()=>{
    const traerData= async ()=>{
        await axios.get(`${process.env.REACT_APP_API_URL}/admin/profilebuilder/modificarServicio/${id}`,{
            headers:{
                "x-access-token": jsCookies.getItem("token"),
                "id":id
              }
        })
        .then((response)=>{
            setNombre(response.data.nombre);
          
            

        })

    }
    
    traerData();
},[]);
const Eliminar= async()=>{
    await axios.get(`${process.env.REACT_APP_API_URL}/admin/profilebuilder/eliminarServicio/${id}`,{
        headers:{
            "x-access-token": jsCookies.getItem("token"),
            "id":id
          }
    })
              .then((response)=>{
                  SetError(response.data.error);
                  setMensaje(response.data.mensaje);
              })
  
          
      }   

    return(
        <div>
            
        <div className="is-size-1 has-text-centered">
            <h1 className="title">Eliminar Servicio</h1>
            <h2 className="subtitle">¿Desea eliminar el siguiente contenido?</h2>
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
         
           <div className="field">
               <p className="subtitle">{nombre}</p>
           </div>
        
           <div className="field">
               <div className="control has-text-centered">
               <button type="button" className="button is-danger" onClick={Eliminar}>Eliminar Servicio</button>
               </div>
               <div className="control has-text-right">
               <NavLink exact to="/profilehome" type="button" className="button is-info" >volver</NavLink>
               </div>
           </div>
           <div className="field">
                          
                          {error ? <div className="notification is-danger"><p>{mensaje}</p></div>:<div className="notification is-success"><p>{mensaje}</p></div>}  
                         </div>
        </div>
    </div>
        </div>
   
        </div>
    )
    }
    export default EliminarServicio;