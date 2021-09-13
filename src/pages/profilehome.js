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
      setAuth(response.data.auth);
      if (response.data.result.admin === 1) {
        setAdmin(true);
      }
    
    }).then((response)=>{
      setFetch(true);
     
      
    }).catch((error)=>{
      SetError("Error de ingreso, vuelva a loguearse.");
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
           <li className="subtitle">Nombre: {datos_perfil.nombre}</li>
           <li className="subtitle">Apellido: {datos_perfil.apellido}</li>
           <li className="subtitle">email: {datos_perfil.email}</li>
           

          </ul>
          
        </article>
      </div> 
      <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Domicilio</p>
          <ul>
           <li className="subtitle">Dirección: {datos_domicilio.calle}</li>
           <li className="subtitle">Altura: {datos_domicilio.altura}</li>
           <li className="subtitle">Alquiler: {datos_domicilio.alquiler}</li>
           <li className="subtitle">integrantes: <ul>{datos_integrantes.map(item=><li>{item.nombre}</li>)}</ul></li>
           
           

          </ul>
          
        </article>
      </div>
      <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Gastos</p>
          
            {gastos ?
             <table className="table">
               <thead>
                 <tr>
                   <th title="categoria">Categoria</th>
                   <th title="valor">Valor</th>
                   <th title="fecha">Fecha</th>
                 </tr>
               </thead>
               <tbody>
               {datos_gastos.map(item => <tr>
                <td>{item.categoria}</td>
                <td>${item.gasto}</td>
                <td>{item.fecha}</td>
                <td>
                  <a href={`admin/modificarItem:${item.id}`}>edit</a></td>
                <td><a href={`admin/eliminarItem:${item.id}`}>eliminar</a></td>
               </tr>)}     
               </tbody>
             </table>
              
             
            : <div className="notification is-success is-light is-text-centered"><p>No posee Gastos</p></div>
           }
           
           
           
           

          
          
        </article>
      </div>
      </div>
      <div className="column is-half">
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
        <div className="tile is-parent">
        <article className="tile is-child notification is-link column ">
          <NavLink className="title" exact to ="/modificar-Servicio">Modificar Servicio</NavLink>
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