import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const RegistroHogar =()=>{

    const[calle,Setcalle]= useState("");
    const[altura,setAltura]=useState("");
    const[alquiler,setAlquiler]=useState("");
    const[mensaje,setMensaje]=useState("");
    const[error,setError]=useState(false);
    
    const IngresarRegistro = async()=>{
        await axios.post("http://localhost:3000/admin/newdir",{
            calle:calle,
            altura:altura,
            alquiler:alquiler
        }).then((response)=>{
            setError(response.data.error)
            setMensaje(response.data.mensaje)
        }).catch((response)=>{
            setMensaje(response);
            setError(true);
        })
    }

    return(
        <div>
            <div className="column is-full column is-half is-offset-one-quarter">
               
               <div className=" field">
                   <div className="control has-icons-left ">
                       <label className="label">Calle</label>
                       <input
                       type="text"
                       className="input"
                       id="calle"
                       name="calle"
                       onChange={(e)=>{Setcalle(e.target.value)}}
                       placeholder="calle"/>
                       <span className="icon is-small is-left"></span>
                   </div>
               </div>
               <div className=" field">
                   <div className="control has-icons-left ">
                       <label className="label">altura</label>
                       <input
                       type="number"
                       className="input"
                       id="altura"
                       name="altura"
                       onChange={(e)=>{setAltura(e.target.value)}}
                       placeholder="500-900"/>
                       <span className="icon is-small is-left"></span>
                   </div>
               </div>
               <div className=" field">
                   <div className="control has-icons-left ">
                       <label className="label">Alquiler</label>
                       <input
                       type="text"
                       className="input"
                       id="alquiler"
                       name="alquiler"
                       onChange={(e)=>{setAlquiler(e.target.value)}}
                       placeholder="dni"/>
                       <span className="icon is-small is-left"></span>
                   </div>
               </div>
              
               
              
                       <div className="field">
                          
                        {error ? <div className="notification is-danger"><p>{mensaje}</p></div>:<div className="notification is-success"><p>{mensaje}</p></div>}  
                       </div>
               <div className="field">
                   <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                      
                       <button type="button" className="button is-info" onClick={IngresarRegistro}>+Ingresar Hogar</button>
                       <NavLink type="button" className="button is-link"  exact to ="/registro">Volver</NavLink>
                      
                   </div>
               </div> 
        </div>
    </div>);
    
}
export default RegistroHogar;