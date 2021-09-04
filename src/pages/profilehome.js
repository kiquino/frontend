import { useState } from "react";
import Redirect from 'react-router-dom';

const Profilehome =({logged}) =>{

    const [isAuth, setAuth] = useState(false);
    setAuth(logged);

    
    return(

      <div>

          
          <div className="columns is-mobile">
  <div className="column is-half is-offset-one-quarter">
      <p className="title is-1">Bienvenido</p>
  </div>
</div>
      </div>  
    )
}
export default Profilehome;