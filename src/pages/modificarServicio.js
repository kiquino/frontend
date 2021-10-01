import axios from "axios";
import jsCookies from "js-cookies";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const ModificarServicio = ()=>{
    const [error,setError]=useState(false);
    const [mensaje,setMensaje]=useState("");
    const [nombre,setNombre] = useState("");
    const [gasto,setGasto]=useState("");
    const {id} = useParams();
    const Actualizar = async()=>{
        
        await axios.post(`${process.env.REACT_APP_API_URL}/admin/profilebuilder/actualizarServicio/${id}`,{
            
                headers:{
                  "x-access-token": jsCookies.getItem("token")
                  
                },
            gasto:gasto,
            nombre:nombre
        }).then((response)=>{
            setMensaje(response.data.mensaje);
            setError(response.data.error)
        })
        }

    
    useEffect(()=>{
        const rellenarEspacios= async ()=>{
            await axios.get(`${process.env.REACT_APP_API_URL}/admin/profilebuilder/modificarServicio/${id}`,{
                headers:{
                    "x-access-token": jsCookies.getItem("token")
                   
                  }
            })
            .then((response)=>{
                setNombre(response.data.nombre);
                setGasto(response.data.gasto);
                setMensaje(response.data.mensaje);
                setError(response.data.error)
   
            }).catch((error)=>{
                console.log(error)
            })

        }
rellenarEspacios();
    },[0])
    return(<div >
    
        <div className="is-size-1 has-text-centered">
            <h1 className="title">Modificar Servicio</h1>
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
    <div className="field">
               <div className="control has-icons-left has-text-left">
                   <label className="label">Nombre</label>
                   <input type="text"
                   className="input"
                   id="nombre"
                   name="nombre"
                   value={nombre}
                   onChange={(e)=>{
                       setNombre(e.target.value);
                   }}
                   placeholder={nombre}/>
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
                   value={gasto}
                   onChange={(e)=>{
                       setGasto(e.target.value);
                   }}
                   placeholder={gasto}/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           
           <div className="field">
               <div className="control has-text-left">
               <button type="button" className="button is-info" onClick={Actualizar}>Modificar Servicio</button>
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
    </div>)
}
export default ModificarServicio;
