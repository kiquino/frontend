import { useState } from "react";
import Cookies from 'js-cookies';
import axios from "axios";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import jsCookies from "js-cookies";

const AgregarCompra = ()=>{
    const [gasto,setGasto]=useState("");

    const [auth, setAuth] =useState(false);
    const [categoria,setCategoria] =useState("");
    const [error,setError]=useState(false);
    const [detalle, setDetalle]=useState("")
    const [nombre, setNombre]=useState("")
    const[mensaje,setMensaje]=useState("");
    const [grupal,setGrupal] = useState(true);
    const [isdisable,setIsdisable]=useState(false);
    const [integrantes,setIntegrantes]=useState([]);
   
    let array =[];
    
    const registrarCompra = ()=>{
        console.log(grupal)
       if (grupal === false) {
           
        console.log(array + "integrantes")
           setGasto(gasto/array.length);
           array.forEach(element =>{
            axios.post(`http://localhost:3000/admin/compra`,{
                headers:{
               "x-access-token": jsCookies.getItem("token"),
               
             },
               id:element,
               categoria:categoria,
               valor:gasto,
               nombre:nombre,
               detalle:detalle
               
           }).then((response)=>{
               
               setMensaje(response.data.mensaje)
           }).catch((response)=>{
               setError(true);
               setMensaje(response.data.mensaje)
           }) 
           })
         
       }
       if(grupal === true){
        
    
        console.log(integrantes.length + "grupal" + " "+ gasto)
           integrantes.forEach(element => {
              
             axios.post(`http://localhost:3000/admin/compra`,{
                headers:{
               "x-access-token": jsCookies.getItem("token"),
               
             },
               id:element.id,
               categoria:categoria,
               valor:gasto/integrantes.length,
               nombre:nombre,
               detalle:detalle
               
           }).then((response)=>{
               
               setMensaje(response.data.mensaje)
           }).catch((response)=>{
               setError(true);
               setMensaje(response.data.mensaje)
           }) 
           });
       }
        
    }
    useEffect(()=>{
        const ListaIntegrantes=()=>{
            axios.get(`http://localhost:3000/admin/profilebuilder/getintegrantes`,{
                headers:{
                    "id": jsCookies.getItem("id_inquilino")
                }
               
            }).then((response)=>{
                setIntegrantes(response.data.result_integrante);
               
              
            }).catch((response)=>{
                console.error(response)
            })
        }
        const checkAuth=()=>{
            axios.post(`http://localhost:3000/admin/autenticacion/validar`,{
                headers:{
                    "x-access-token": jsCookies.getItem("token")
                }
            }).then(()=>{
                ListaIntegrantes();
                setAuth(true)
            }).catch((response)=>{
                console.error(response)
            })
        }
        
        if (!auth) {
            checkAuth();
          
        }
      
    },[0])
    

    return(<div >
    
        <div className="is-size-1 has-text-centered">
            <h1 className="title">Agregar Compra</h1>
    <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
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
           <div className="field ">
               <div className="control has-icons-left has-text-left">
                   <label className="label">Nombre (opcional)</label>
                   <input type="text"
                   className="input"
                   id="nombre"
                   name="nombre"
                   onChange={(e)=>{
                       setNombre(e.target.value);
                   }}
                   placeholder=""/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           
           <div className="field  ">
               <div className="control has-icons-left has-text-left is-flex is-flex-direction-row is-justify-content-space-around">
               <div className="select">
  <select onChange={(e)=>{
      setCategoria(e.target.value)
  }}>
    <option>Elija una categoria</option>
    <option value="mercado">mercado</option>
    <option value="verduleria">verduleria</option>
    <option value="carniceria">carniceria</option>
    <option value="personal">personal</option>
  </select>
</div>
<div className="is-flex is-flex-direction-column">
    <h2>Seleccione grupal o personalizado</h2>
    <div className="is-flex is-flex-direction-row is-justify-content-space-between">
    <div className="control is-flex is-flex-direction-row">
        <label className="radio"><input type="radio" name="gastos" onClick={(e)=>{
             setGrupal(true);
            setIsdisable(true);
         }} />grupal</label>

         <label className="radio"><input type="radio" name="gastos" onClick={(e)=>{
             setGrupal(false);
             setIsdisable(false);

         }}/>personalizado</label>
    

 
</div>
<div className="control is-flex is-flex-direction-column">
    {integrantes
    .map(integ =>
        <div> 
           <label className="checkbox" disabled={isdisable}><input id={integ.id} className="checkbox" type="checkbox" disabled={isdisable} value={integ.id} onClick={(e)=>{
              if (e.target.checked) {
                  array.push(integ.id)
              }else{
                var index = array.indexOf(e.target.value); 
                  array.splice(index,1)
              }

           }}/>{integ.nombre}</label>

        
        </div>
          
           
        )}
   

 
</div>
    </div>

</div>


               </div>
           </div>
           <div className="field">
               <div className="control has-icons-left has-text-left">
                   <label className="label">Detalle (opcional)</label>
                   <input type="textfield"
                   className="input"
                   id="detalle"
                   name="detalle"
                   onChange={(e)=>{
                       setDetalle(e.target.value);
                   }}
                   placeholder="10 zanahorias, un maple"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           <div className="field">
               <div className="control has-text-left">
               <button type="button" className="button is-info" onClick={registrarCompra}>Agregar Compra</button>
               </div>
               <div className="control has-text-right">
               <NavLink type="button" className="button is-info" exact to="/profilehome">volver</NavLink>
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
export default AgregarCompra;
