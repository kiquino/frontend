import axios from "axios";
import jsCookies from "js-cookies";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Personal =()=>{
    const[logged,setLogged]=useState(false);
    const [datos_perfil, setDatos_perfil] =useState([]);
    const [datos_gastos,setDatos_gastos]=useState([]);
    const [gastos,setgastos]=useState(false);
    
    useEffect(()=>{
        const checkIfLogged= async()=>{
            await axios.get(`${process.env.REACT_APP_API_URL}admin/autenticacion/validar`,{
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
                await axios.get(`${process.env.REACT_APP_API_URL}/admin/profilebuilder`,{
                    headers:{
                    "x-access-token": jsCookies.getItem("token"),
                    "id":jsCookies.getItem("id_inquilino")
                  }}).then((response)=>{
                     setDatos_perfil(response.data.result);
                    setDatos_gastos(response.data.result_gastos);
                    setgastos(response.data.haygastos);
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
                <p className="subtitle is-1">Personal</p>
                <p className="is-size-5">Acá podes ver todos los datos personales</p>
            </div>
           

            </div>
           
            <div className="columns is-centered">
                <div className="column is-6">
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
                </div>
                <div className="column is-6">
                <div className="tile is-parent">
      <article className="tile is-child notification is-info column ">
          <p className="title">Gastos</p>
          
            {gastos ?
             <table className="table has-background-link-light">
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
export default Personal;