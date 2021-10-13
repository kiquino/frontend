import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Registro =()=>{

const [nombre,setNombre] =useState("");
const [dni,setDni] =useState("");
const [apellido,setApellido] = useState("");
const [password,setPassword] = useState("");
const [calle,setCalle] = useState("");
const [altura,setAltura]=useState("");
const [isAdmin, setAdmin]=useState("0");
const [email,SetEmail]=useState("");

const [mensaje,setMensaje]=useState("");

const [error,setError]=useState(false);
const registrarse=()=>{
    // console.log(nombre,apellido,dni,password,calle,altura,email);
    axios.post(`http://localhost:3000/admin/registro`,{
        nombre:nombre,
        dni:dni,
        apellido:apellido,
        password:password,
        calle:calle,
        altura:altura,
        admin:isAdmin,
        email:email
    }).then((response)=>{
     
        setMensaje(response.data.mensaje);
        setError(response.data.error);

    }).catch((response)=>{
        console.log(response);
    })
}

    return(
    <div>
        <div className="column is-full column is-half is-offset-one-quarter">
           
           <div className=" field">
               <div className="control has-icons-left ">
                   <label className="label">Nombre</label>
                   <input
                   type="text"
                   className="input"
                   id="nombre"
                   name="nombre"
                   onChange={(e)=>{setNombre(e.target.value)}}
                   placeholder="nombre"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           <div className=" field">
               <div className="control has-icons-left ">
                   <label className="label">Apellido</label>
                   <input
                   type="text"
                   className="input"
                   id="apellido"
                   name="apellido"
                   onChange={(e)=>{setApellido(e.target.value)}}
                   placeholder="Apellido"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           <div className=" field">
               <div className="control has-icons-left ">
                   <label className="label">dni</label>
                   <input
                   type="text"
                   className="input"
                   id="dni"
                   name="dni"
                   onChange={(e)=>{setDni(e.target.value)}}
                   placeholder="dni"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           <div className=" field">
               <div className="control has-icons-left ">
                   <label className="label">email</label>
                   <input
                   type="text"
                   className="input"
                   id="email"
                   name="email"
                   onChange={(e)=>{SetEmail(e.target.value)}}
                   placeholder="email"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
           <div className=" field is-grouped is-align-items-end">
               <div className="control has-icons-left ">
                   <label className="label">Calle</label>
                   <input
                   type="text"
                   className="input"
                   id="calle"
                   name="calle"
                   onChange={(e)=>{setCalle(e.target.value)}}
                   placeholder="Bartolomé mitre"/>
                   <span className="icon is-small is-left"></span>
               </div>
               <div className="control has-icons-left ">
                   <label className="label">Altura</label>
                   <input
                   type="text"
                   className="input"
                   id="altura"
                   name="altura"
                   onChange={(e)=>{setAltura(e.target.value)}}
                   placeholder="100"/>
                   <span className="icon is-small is-left"></span>
               </div>
              
               <p className="control">
    <NavLink className="button is-link" exact to="/registro-hogar">
     + Registrar Hogar
    </NavLink>
  </p>
           </div>
           <div className="field">
               <div className="control has-icons-left ">
                   <label className="label">Password</label>
                   <input type="password"
                   className="input"
                   id="password"
                   name="password"
                   onChange={(e)=>{
                       setPassword(e.target.value);
                   }}
                   placeholder="Password"/>
                   <span className="icon is-small is-left"></span>
               </div>
           </div>
                   <div className="field">
                   <div className="control">
    <label>  Admin</label>           
  <input name="admin" id="admin" type="checkbox" value="1" onChange={(e)=>{
      setAdmin(e.target.value);
  }}>

  </input>

               </div>
                   </div>
                   <div className="field">
                      
                    {error ? <div className="notification is-danger"><p>{mensaje}</p></div>:<div className="notification is-success"><p>{mensaje}</p></div>}  
                   </div>
           <div className="field">
               <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                  
                   <button type="button" className="button is-info" onClick={registrarse}>Registrarse</button>
                   <NavLink type="button" className="button is-link"  exact to ="/login">Ingresa</NavLink>
                  
               </div>
           </div> 
    </div>
</div>);
}
export default Registro;