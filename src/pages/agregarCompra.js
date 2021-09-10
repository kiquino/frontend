import { useState } from "react";
import Cookies from 'js-cookies';
import axios from "axios";

const AgregarCompra = ()=>{
    const [gasto,setGasto]=useState("");
    const [errorAxios,SetError] = useState("");
    const [auth, setAuth] =useState(false);

    const registrarCompra=async()=>{

        await axios("http://localhost:3000/admin/registro/compra",{
            
        })
    }
    const checkAuth=()=>{
        if(Cookies.getItem("token")){
            
        }
    }
    return(<div >
        <div className="is-size-1 has-text-centered">
            <h1 clas>Agregar Compra</h1>
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
           <div className="field">
               <div className="control has-icons-left has-text-left">
               <div className="select">
  <select>
    <option>Elija una categoria</option>
    <option value="mercado">mercado</option>
    <option value="verduleria">verduleria</option>
    <option value="carniceria">carniceria</option>
    <option value="personal">personal</option>
  </select>
</div>
               </div>
           </div>
        </div>
    </div>
        </div>
    </div>)
}
export default AgregarCompra;
