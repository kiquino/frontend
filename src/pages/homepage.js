const homepage = ()=>{
return(
    <div>
        <div className="container">
            <div className="section has-text-centered">
            <div className="columns is-centered mb-6">
            <div className=" column is-5 ">
                <p className="subtitle is-1">Bienvenido</p>
                <p className="is-size-5">Este proyecto inició con la meta de poder integrar nuevo contenido de React y Node para 
                tener una plataforma donde ayudar a mis compañeros de piso a manejar sus gastos tanto como las deudas de una casa como las propias</p>
            </div>
           

            </div>
           
            <div className="columns is-centered">
                <div className="column is-4">
                    <img src="1.png" alt=""></img>
                    <p className="title is-4">Gestionar informacion Personal</p>
                </div>
                <div className="column is-4">
                <img src="2.png" alt=""></img>
                <p className="title is-4">Compartir Gastos</p>
                </div>
                <div className="column is-4">
                <img src="3.png" alt=""></img>
                <p className="title is-4">Analizar Datos</p>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}
export default homepage;