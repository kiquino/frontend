import Cookies from 'js-cookies';
const salir =()=>{
Cookies.removeItem("id_inquilino");
Cookies.removeItem("token");
    return(
        <div>
            <div className="columns is-centered">
                <div className="column is-half has-text-centered">
                    <div className="title"><p>Nos vemos luego</p></div>
                    <div>
                        <img src="adios.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default salir;