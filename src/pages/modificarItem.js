import axios from "axios";
import jsCookies from "js-cookies";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const ModificarCompra =()=>{

    const [gasto,setGasto]=useState("");
    const [categoria,setCategoria]=useState("");
    const [error,setError]=useState(false);
    const [mensaje,setMensaje]=useState("");
    const {id}= useParams();

    const Actualizar = async()=>{
        
    await axios.post(`${process.env.REACT_APP_API_URL}/admin/compra/actualizar/${id}`,{
        headers:{
            "x-access-token": jsCookies.getItem("token"),
            "id":id
          },
        gasto:gasto,
        categoria:categoria
    }).then((response)=>{
        setMensaje(response.data.mensaje)
    })
    }
    useEffect(()=>{
        const rellenarEspacios= async ()=>{
            await axios.get(`${process.env.REACT_APP_API_URL}/admin/compra/modificar/${id}`,{
                headers:{
                    "x-access-token": jsCookies.getItem("token"),
                    "id":id
                  }
            })
            .then((response)=>{
                setCategoria(response.data.categoria);
                setGasto(response.data.gasto);
            })

        }
rellenarEspacios();
    },[])
    

    return(<div >
    
        <div className="is-size-1 has-text-centered">
            <h1 className="title">Modificar Compra</h1>
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
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
               <div className="control has-icons-left has-text-left">
               <div className="select">
  <select onChange={(e)=>{
      setCategoria(e.target.value)
  }}>
    <option value={categoria}>{categoria}</option>
    <option value="mercado">mercado</option>
    <option value="verduleria">verduleria</option>
    <option value="carniceria">carniceria</option>
    <option value="personal">personal</option>
  </select>
</div>
               </div>
           </div>
           <div className="field">
               <div className="control has-text-left">
               <button type="button" className="button is-info" onClick={Actualizar}>Modificar Compra</button>
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
export default ModificarCompra;