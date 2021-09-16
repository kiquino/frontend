
import React from "react";
import Nav from "./components/layout/nav";
import Header from './components/layout/header';
import Footer from "./components/layout/footer";
import 'bulma/css/bulma.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import homepage from './pages/homepage'
import Personal from './pages/personal'
import Domicilio from './pages/domicilio'
import login from './pages/login'
import Registro from './pages/registro'
import Profilehome from "./pages/profilehome";
import salir from "./pages/salir";
import AgregarCompra from "./pages/agregarCompra";
import ModificarServicio from "./pages/modificarServicio";
import AgregarServicio from "./pages/agregarServicio";
import RegistroHogar from "./pages/registroHogar";
import ModificarCompra from "./pages/modificarItem";
import EliminarServicio from "./pages/eliminarServicio";
import EliminarCompra from "./pages/eliminarCompra";
import Contacto from "./pages/contacto";

function App() {
  return (
   <div>
<Router>

<Nav/>
<Header/>
<Switch>
  <Route path="/" exact component ={
    homepage
  }/>
   <Route path="/personal" exact component ={
    Personal
  }/>
   <Route path="/domicilio" exact component ={
    Domicilio
  }/>
   <Route path="/login" exact component ={
    login
  }/>
   <Route path="/salir" exact component ={
    salir
  }/>
   <Route path="/contacto/:id" exact component ={
    Contacto
  }/>
    <Route path="/Agregar-Compra" exact component ={
    AgregarCompra
  }/>
    <Route path="/Agregar-Servicio" exact component ={
    AgregarServicio
  }/>
   <Route path="/Eliminar-Servicio/:id" exact component ={
    EliminarServicio
  }/>
   <Route path="/Eliminar-Gasto/:id" exact component ={
    EliminarCompra
  }/>
   <Route path="/Agregar-Servicio" exact component ={
    AgregarServicio
  }/>
   <Route path="/modificarItem/:id" exact component ={
    ModificarCompra
  }/>
    <Route path="/modificarServicio/:id" exact component ={
    ModificarServicio
  }/>
   <Route path="/registro" exact component ={
    Registro
  }/>
   <Route path="/registro-hogar" exact component ={
    RegistroHogar
  }/>
  <Route path="/profilehome" exact component ={
    Profilehome
  }/>
</Switch>
</Router>
<Footer/>
     
   </div>
  );
}

export default App;
