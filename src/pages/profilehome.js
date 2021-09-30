import {useEffect,   useState } from "react";

import axios from 'axios';
import Cookies from 'js-cookies';
import { NavLink } from "react-router-dom";


const Profilehome =() =>{

    const [isAuth, setAuth] = useState(false);
    const id = Cookies.getItem("id_inquilino");
  const [nombre,setNombre] = useState("");
  const [datos_perfil, setDatos_perfil] =useState([]);
  const [datos_integrantes,setDatos_integrantes] =useState([]);
  const [datos_domicilio,setDatos_domicilio]=useState([]);
  const [fetch,setFetch]=useState(false);
  const [isAdmin,setAdmin]=useState(false);
  const [datos_gastos,setDatos_gastos]=useState([]);
  const [gastos,setgastos]=useState(false);
  const [errorAxios,SetError] = useState("");
  const [servicios,setServicios]=useState(false);
  const [listServicios,setListaServicios]=useState([]);

 useEffect(()=>{
  const builder = async ()=>{
    
    await axios.get("http://localhost:3000/admin/profilebuilder",{
      headers:{
        "x-access-token": Cookies.getItem("token"),
        "id":id
      }
    }).then((response)=>{
      
      setNombre(response.data.result.nombre);
      setDatos_perfil(response.data.result);
      setDatos_domicilio(response.data.result_domicilio);
      setDatos_integrantes(response.data.result_integrante);
      setDatos_gastos(response.data.result_gastos);
      setgastos(response.data.haygastos);
      setServicios(response.data.hayservicios);
      setListaServicios(response.data.result_servicios)
      setAuth(response.data.auth);
      if (response.data.result.admin === 1) {
        setAdmin(true);
      }
    
    }).then((response)=>{
      setFetch(true);
     
      
    }).catch((error)=>{
      SetError("Error de ingreso, vuelva a loguearse."+error);
    })
  }
  if (!fetch) {
    builder();
  }

 },[])
 

   
    

    
    return(

      <div>
{isAuth ? 

<div>          
          <div className="columns is-mobile">
  <div className="column is-three-fifths
is-offset-one-fifth my-5">
  
     
      <p className="title is-1 has-text-centered">Bienvenido, {nombre}</p>
      {isAdmin ? <div className="notification is-info is-text-centered"><p>Actualmente eres Administrador</p></div> : ""}
  </div>
</div>
<div className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-flex-start">
<div className="column is-half">     
 <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Perfil</p>
          <ul>
           <li key="p1" className="subtitle">Nombre: {datos_perfil.nombre}</li>
           <li key="p2" className="subtitle">Apellido: {datos_perfil.apellido}</li>
           <li key="p3" className="subtitle">email: {datos_perfil.email}</li>
           

          </ul>
          
        </article>
      </div> 
      <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Domicilio</p>
          <ul className="menu">
           <li key="d1" className="subtitle">Dirección: {datos_domicilio.calle}</li>
           <li key="d2" className="subtitle">Altura: {datos_domicilio.altura}</li>
           <li key="d3" className="subtitle">Alquiler: {datos_domicilio.alquiler}</li>
           <li key="d4" className="subtitle ">integrantes: <table className="table">
             <thead>
               <tr>
                 <th title="nombre">Nombre</th>
                 <th title="email">Email</th>
               </tr>
             </thead>
             <tbody>
             {datos_integrantes.map(item=><tr >
               <td>{item.nombre}</td>
               <td><NavLink exact to={`contacto/${item.id}`}>{item.email}</NavLink> </td>
             </tr>)}
             </tbody>
             </table></li>
           
           

          </ul>
          
        </article>
      </div>
      <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Gastos</p>
          
            {gastos ?
             <table className="table has-background-link-light">
               <thead>
                 <tr>
                   <th title="nombre">Nombre</th>
                   <th title="valor">Valor</th>
                   <th title="fecha">Fecha</th>
                 </tr>
               </thead>
               <tbody>
               {datos_gastos.map(item => <tr>
                <td>{item.nombre}</td>
                <td>${item.valor}</td>
                <td>{item.fecha = new Date().toDateString()}</td>
                <td className="button is-info">
                  <NavLink exact to={`modificarItem/${item.id}`}>edit</NavLink></td>
                <td className="button is-danger"><NavLink exact to={`Eliminar-Gasto/${item.id}`}>eliminar</NavLink></td>
               </tr>)}     
               </tbody>
             </table>
              
             
            : <div className="notification is-success is-light is-text-centered"><p>No posee Gastos</p></div>
           }
           
           
           
           

          
          
        </article>
      </div>
      <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Servicios</p>
          
            {servicios ?
             <table className="table">
               <thead>
                 <tr>
                   <th title="nombre">Nombre</th>
                   <th title="valor">Valor</th>
                   
                 </tr>
               </thead>
               <tbody>
               {listServicios.map(item => <tr>
                <td>{item.nombre}</td>
                <td>${item.valor}</td>
                <td className="button is-link"><NavLink exact to="/pagar-servicios"></NavLink>Pagar</td>
                <td  className="button is-info">
                  <NavLink exact to={`modificarServicio/${item.id}`}>edit</NavLink></td>
                <td  className="button is-danger"><NavLink exact to={`Eliminar-Servicio/${item.id}`}>eliminar</NavLink></td>
               </tr>)}     
               </tbody>
             </table>
              
             
            : <div className="notification is-success is-light is-text-centered"><p>No posee Gastos</p></div>
           }
           
           
           
           

          
          
        </article>
      </div>
      </div>
      <div className="column is-3">
        <div className="tile is-parent">
        <article className="tile is-child notification is-link column ">
          <NavLink className="title" exact to ="/Agregar-Compra">Agregar Compra</NavLink>
        </article>
        </div>
        <div className="tile is-parent">
        <article className="tile is-child notification is-link column ">
          <NavLink className="title" exact to ="/Agregar-Servicio">Agregar Servicio</NavLink>
        </article>
        </div>
        
      </div>
      </div>
     
      </div>
: <div className="notification is-danger"><p>{errorAxios}</p><NavLink className="button is-link" exact to ="/login"> Login</NavLink></div>}
</div>  
    )
}
export default Profilehome;