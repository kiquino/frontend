import axios from "axios";
import jsCookies from "js-cookies";
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";

const Contacto =()=>{
    const {id}=useParams();
    const[nombre,setNombre]=useState("");
    const[email,setEmail]=useState("");
    const[emailState,setEmailstate]=useState(false);
    const[contenido,setContenido]=useState("");

useEffect(()=>{
    const traerData=async()=>{
        await axios.get(`http://localhost:3000/admin/profilebuilder/contacto/${id}`,{
            headers:{
                "x-access-token": jsCookies.getItem("token")
            }
        }).then((response)=>{
            setEmail(response.data.email);
            setNombre(response.data.nombre);
        })
    }
    traerData()
},[])
const enviar= async()=>{
setEmailstate("enviando");
await axios.post("http://localhost:3000/admin/profilebuilder/contacto",{
    nombre:nombre,
    email:email,
    contenido:contenido
}).then(()=>{
    setEmailstate("enviado")
}).catch(()=>{
    setEmailstate("Error de envio")
})
}

    return(<div>
 <div className="is-size-1 has-text-centered">
 <h1 className="title">Contacto</h1>
            <h2 className="subtitle">Acá puede escribirle a {nombre}</h2>

            <div className="columns">
    <div className="column is-half is-offset-one-third">
        <div className="field has-text-left">
            <div className="subtitle">Destinatario: {nombre}</div>
        </div>
        <div className="field has-text-left">
            <div className="subtitle">Email: {email}</div>
        </div>
        <div className="field has-text-left is-half">
            <textarea className="textarea" onChange={(e)=>{
                setContenido(e.target.value)
            }}></textarea>
        </div>
        <div className="field has-text-left">
            <button onClick={enviar}>Enviar</button>
        </div>
        <div className="field has-text-left">
            <p>{emailState}</p>
        </div>
        <div className="field has-text-centered">
            <NavLink type="button" className="button is-info" exact to="/profilehome">Volver</NavLink>
        </div>
        </div>
        </div>
 </div>
    </div>)
}
export default Contacto;