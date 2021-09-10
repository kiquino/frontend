
import React from "react";
import Nav from "./components/layout/nav";
import Header from './components/layout/header';
import 'bulma/css/bulma.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import homepage from './pages/homepage'
import personal from './pages/personal'
import domicilio from './pages/domicilio'
import login from './pages/login'
import Registro from './pages/registro'
import Profilehome from "./pages/profilehome";
import salir from "./pages/salir";
import AgregarCompra from "./pages/agregarCompra";
import ModificarServicio from "./pages/modificarServicio";
import AgregarServicio from "./pages/agregarServicio";
import RegistroHogar from "./pages/registroHogar";


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
    personal
  }/>
   <Route path="/domicilio" exact component ={
    domicilio
  }/>
   <Route path="/login" exact component ={
    login
  }/>
   <Route path="/salir" exact component ={
    salir
  }/>
    <Route path="/Agregar-Compra" exact component ={
    AgregarCompra
  }/>
    <Route path="/Agregar-Servicio" exact component ={
    AgregarServicio
  }/>
    <Route path="/modificar-Servicio" exact component ={
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
     
   </div>
  );
}

export default App;
