import axios from "axios";
import jsCookies from "js-cookies";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Domicilio = () =>{

    const[logged,setLogged]=useState(false);
    const[datos_domicilio,setDatos_domicilio]=useState([]);
    const[datos_servicio,setDatosServicios]=useState([]);
    useEffect(()=>{
        const checkIfLogged= async()=>{
            await axios.get(`http://localhost:3000/admin/autenticacion/validar`,{
                headers:{
                    "x-access-token": jsCookies.getItem("token"),
                  
                  }
            }).then((response)=>{
                setLogged(response.data.auth);
            })
        }
        checkIfLogged()
    },[0]);
   
      useEffect(()=>{
      
            const traerDatos =async()=>{
                await axios.get(`http://localhost:3000/admin/profilebuilder`,{
                    headers:{
                        "x-access-token": jsCookies.getItem("token"),
                    "id":jsCookies.getItem("id_inquilino")
                  }}).then((response)=>{
                      setDatosServicios(response.data.result_servicios);
                      setDatos_domicilio(response.data.result_domicilio);
                  }).catch((error)=>{
                      console.log(error)
                  })
            }

            traerDatos();
        
 
      },[logged])
   
    
    return(<div>
       
{logged ? <div className="container">
            <div className="section has-text-centered">
            <div className="columns is-centered mb-6">
            <div className=" column is-5 ">
                <p className="subtitle is-1">Domicilio</p>
                <p className="is-size-5">Acá podes ver todos los datos del domicilio</p>
            </div>
           

            </div>
           
            <div className="columns is-centered">
                <div className="column is-6">
                <div className="tile is-parent">
      <article className="tile is-child notification is-info ">
          <p className="title">Domicilio</p>
          <ul className="menu">
           <li key="d1" className="subtitle">Dirección: {datos_domicilio.calle}</li>
           <li key="d2" className="subtitle">Altura: {datos_domicilio.altura}</li>
           <li key="d3" className="subtitle">Alquiler: {datos_domicilio.alquiler}</li>
         
           
           

          </ul>
          
        </article>
      </div>
                </div>
                <div className="column is-6">
                <div className="tile is-parent">
      <article className="tile is-child notification is-info ">
          <p className="title">Servicios</p>
        
          <table className="table">
               <thead>
                 <tr>
                   <th title="nombre">Nombre</th>
                   <th title="valor">Valor</th>
                   
                 </tr>
               </thead>
               <tbody>
               {datos_servicio.map(item => <tr>
                <td>{item.nombre}</td>
                <td>${item.valor}</td>
                <td className="button is-link"><NavLink exact to="/pagar-servicios"></NavLink>Pagar</td>
                <td  className="button is-info">
                  <NavLink exact to={`modificarServicio/${item.id}`}>edit</NavLink></td>
                <td  className="button is-danger"><NavLink exact to={`Eliminar-Servicio/${item.id}`}>eliminar</NavLink></td>
               </tr>)}     
               </tbody>
             </table>
          
        </article>
      </div>
                </div>
                
            </div>
            </div>
        </div> : <div className="container">
        <div className="section has-text-centered">
            <div className="columns is-centered mb-6">
            <div className=" column is-5 ">
                <img src="4.svg" alt=""/>
                <p className="subtitle is-1">Debe logearse para ver su contenido</p>
                <NavLink type="button" className="button is-info me-5" exact to="/login">login</NavLink>
                <NavLink type="button" className="button is-success" exact to="/registro">Registro</NavLink>
            </div>
           

            </div>
            </div>
        </div>}
        
    </div>)
}
export default Domicilio;